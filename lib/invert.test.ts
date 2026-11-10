import assert from "node:assert/strict";
import test from "node:test";
import { species } from "../data/species";
import { checkSelection, speciesSelectionStatus } from "./checker";
import { isFish } from "./seo-copy";

test("invertebrates are not called fish and stay inside the sourced set", () => {
  const inverts = species.filter((animal) => animal.kind && animal.kind !== "fish");
  assert.equal(inverts.length, 26);
  assert.equal(species.length, 325);
  for (const animal of inverts) {
    assert.equal(isFish(animal), false);
    assert.equal(animal.copperSensitive, true);
    assert.equal(animal.sources.length >= 2, true, animal.slug);
  }
  const counts = {
    shrimp: inverts.filter((animal) => animal.kind === "shrimp").length,
    snail: inverts.filter((animal) => animal.kind === "snail").length,
    crayfish: inverts.filter((animal) => animal.kind === "crayfish").length,
    other: inverts.filter((animal) => animal.kind === "other-invertebrate").length,
  };
  assert.deepEqual(counts, { shrimp: 4, snail: 11, crayfish: 10, other: 1 });
});

test("shrimp, small snails, assassin snails, and crayfish use the predation rules", () => {
  const bettaAmano = checkSelection(["betta", "amano-shrimp"], null);
  assert.equal(bettaAmano.verdict, "incompatible");
  assert.equal(bettaAmano.pairs[0].reasons.some((reason) => reason.code === "predation"), true);

  const bettaMystery = checkSelection(["betta", "spike-topped-apple-snail"], null);
  assert.equal(bettaMystery.pairs[0].reasons.some((reason) => reason.code === "snail-predation"), false);

  const bettaAssassin = checkSelection(["betta", "assassin-snail"], null);
  assert.equal(bettaAssassin.verdict, "incompatible");
  assert.equal(bettaAssassin.pairs[0].reasons.some((reason) => reason.code === "snail-predation"), true);

  const assassinMystery = checkSelection(["assassin-snail", "spike-topped-apple-snail"], null);
  assert.equal(assassinMystery.verdict, "incompatible");
  assert.equal(assassinMystery.pairs[0].reasons.some((reason) => reason.code === "eats-snails"), true);

  const crayNeon = checkSelection(["red-swamp-crayfish", "neon-tetra"], null);
  assert.equal(crayNeon.verdict, "incompatible");
  assert.equal(crayNeon.pairs[0].reasons.some((reason) => reason.code === "crayfish-prey"), true);

  const crayOscar = checkSelection(["red-swamp-crayfish", "oscar"], null);
  assert.equal(crayOscar.pairs[0].reasons.some((reason) => reason.code === "small-fish"), false);
  assert.equal(crayOscar.pairs[0].reasons.some((reason) => reason.code === "crayfish-larger-fish"), true);

  const twoShrimp = checkSelection(["amano-shrimp", "cherry-shrimp"], null);
  assert.equal(twoShrimp.pairs[0].reasons.some((reason) => reason.code === "predation"), false);
  assert.equal(twoShrimp.verdict, "compatible");
});

test("chips, copper, and colour-form notes follow the same checker", () => {
  assert.equal(speciesSelectionStatus("amano-shrimp", ["amano-shrimp"], null), "neutral");
  assert.equal(speciesSelectionStatus("amano-shrimp", ["amano-shrimp", "cherry-shrimp"], null), "compatible");
  assert.equal(speciesSelectionStatus("betta", ["betta", "amano-shrimp"], null), "incompatible");

  const amano = checkSelection(["amano-shrimp"], null);
  assert.equal(amano.stockingNotes.some((note) => note.code === "copper"), true);
  const cherry = checkSelection(["cherry-shrimp"], null);
  assert.match(cherry.stockingNotes.map((note) => note.text).join(" "), /interbreed|colour forms|color forms|Blue dream/i);

  const land = checkSelection(["indian-apple-snail", "neon-tetra"], null);
  assert.equal(land.pairs[0].reasons.some((reason) => reason.code === "land"), true);
});
