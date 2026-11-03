import assert from "node:assert/strict";
import test from "node:test";
import { profiles } from "../data/profiles";
import { searchSpecies } from "./species-search";

test("search matches common and scientific names after 3 characters", () => {
  const byCommon = searchSpecies("neon");
  assert.ok(byCommon.some((animal) => animal.slug === "neon-tetra"));
  assert.ok(byCommon.every((animal) => animal.commonName.toLowerCase().includes("neon") || animal.scientificName.toLowerCase().includes("neon") || animal.aliases.some((alias) => alias.toLowerCase().includes("neon")) || animal.slug.includes("neon")));

  const byScientific = searchSpecies("pArAcHeIrOdOn");
  assert.ok(byScientific.some((animal) => animal.slug === "neon-tetra"));
  assert.equal(byScientific.some((animal) => animal.scientificName.toLowerCase().includes("paracheirodon")), true);

  const byAlias = searchSpecies("innes");
  assert.ok(byAlias.some((animal) => animal.slug === "neon-tetra"));

  assert.equal(searchSpecies("ne").length, 0);
  assert.equal(searchSpecies("n").length, 0);
  assert.equal(searchSpecies("  ").length, 0);
  assert.equal(searchSpecies("  ab").length, 0);

  const trimmed = searchSpecies("  NeOn  ");
  assert.ok(trimmed.some((animal) => animal.slug === "neon-tetra"));

  const excluded = searchSpecies("neon", profiles, ["neon-tetra"]);
  assert.equal(excluded.some((animal) => animal.slug === "neon-tetra"), false);
  assert.ok(excluded.length > 0);
});

test("a scientific-name fragment matches the betta and nothing under 3 letters does", () => {
  const splendens = searchSpecies("splendens");
  assert.ok(splendens.some((animal) => animal.slug === "betta"));
  assert.equal(searchSpecies("sp").length, 0);
  assert.equal(searchSpecies("+15551212").some((animal) => animal.slug === "betta"), false);
});
