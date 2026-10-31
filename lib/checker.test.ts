import assert from "node:assert/strict";
import test from "node:test";
import { species } from "../data/species";
import { buildQuery, checkSelection, parseQuery, publishedSizeGallons } from "./checker";

test("betta and guppy are not compatible because of flowing fins", () => {
  const result = checkSelection(["betta", "guppy"], null);
  assert.equal(result.verdict, "incompatible");
  const text = result.pairs[0].reasons.map((reason) => reason.text).join(" ");
  assert.match(text, /trailing finnage|Flowing fins/i);
  assert.equal(result.pairs[0].reasons.some((reason) => reason.code === "override"), true);
});

test("neon tetra and bronze corydoras are compatible before tank size", () => {
  const result = checkSelection(["neon-tetra", "bronze-corydoras"], null);
  assert.equal(result.verdict, "compatible");
  assert.equal(result.pairs[0].verdict, "compatible");
});

test("neon tetra and bronze corydoras do not fit a 10-gallon tank", () => {
  const result = checkSelection(["neon-tetra", "bronze-corydoras"], 10);
  assert.equal(result.verdict, "incompatible");
  assert.match(result.tankReasons.map((reason) => reason.text).join(" "), /gallons|inches|base/i);
});

test("neon tetra and bronze corydoras are compatible in a 40-gallon tank", () => {
  const result = checkSelection(["neon-tetra", "bronze-corydoras"], 40);
  assert.equal(result.verdict, "compatible");
});

test("a betta is not compatible with cherry shrimp", () => {
  const result = checkSelection(["betta", "cherry-shrimp"], null);
  assert.equal(result.verdict, "incompatible");
  assert.match(result.pairs[0].reasons.map((reason) => reason.text).join(" "), /shrimp/i);
});

test("honey gourami and harlequin rasbora are compatible", () => {
  const result = checkSelection(["honey-gourami", "harlequin-rasbora"], null);
  assert.equal(result.verdict, "compatible");
});

test("guppy and harlequin are caution at the edge of the published ranges", () => {
  const result = checkSelection(["guppy", "harlequin-rasbora"], null);
  assert.equal(result.verdict, "caution");
});

test("a selection round-trips through the query string", () => {
  const query = buildQuery(["betta", "neon-tetra"], 20);
  assert.equal(query, "?tank=20&f=betta,neon-tetra");
  const parsed = parseQuery(query);
  assert.deepEqual(parsed.slugs, ["betta", "neon-tetra"]);
  assert.equal(parsed.tank, 20);
});

test("unknown slugs and a seventh species are dropped", () => {
  const parsed = parseQuery("?f=betta,nope,guppy,neon-tetra,platy,zebra-danio,honey-gourami,bristlenose-pleco");
  assert.equal(parsed.slugs.length, 6);
  assert.equal(parsed.slugs.includes("nope"), false);
});

test("every species has sources, a date, and prose", () => {
  assert.equal(species.length, 100);
  for (const animal of species) {
    assert.ok(animal.sources.length >= 2, animal.slug);
    assert.ok(animal.lastVerified, animal.slug);
    assert.ok(animal.lede.length > 80, animal.slug);
    assert.ok(animal.husbandry.length >= 2, animal.slug);
    assert.ok(animal.tempF.min < animal.tempF.max, animal.slug);
    assert.ok(animal.pH.min < animal.pH.max, animal.slug);
    if (animal.hardnessDGH) assert.ok(animal.hardnessDGH.min < animal.hardnessDGH.max);
    for (const override of [...animal.incompatibleWith, ...animal.cautionWith]) {
      assert.ok(species.some((item) => item.slug === override.slug), override.slug);
    }
  }
});

test("size pages are emitted only when the verdict list changes", () => {
  const betta = publishedSizeGallons("betta");
  assert.deepEqual(betta, [10, 20, 29, 40]);
  const neon = publishedSizeGallons("neon-tetra");
  assert.ok(neon.includes(10) && neon.includes(40));
  assert.ok(neon.length >= 2);
});

test("locked pair verdicts", () => {
  const expected: Record<string, string> = {
    "betta+guppy": "incompatible",
    "betta+honey-gourami": "incompatible",
    "betta+cherry-shrimp": "incompatible",
    "betta+neon-tetra": "caution",
    "neon-tetra+bronze-corydoras": "compatible",
    "neon-tetra+harlequin-rasbora": "compatible",
    "guppy+bronze-corydoras": "compatible",
    "guppy+platy": "compatible",
    "zebra-danio+honey-gourami": "caution",
    "bristlenose-pleco+honey-gourami": "caution",
    "cherry-shrimp+bristlenose-pleco": "compatible",
  };
  for (const [key, verdict] of Object.entries(expected)) {
    const [a, b] = key.split("+");
    assert.equal(checkSelection([a, b], null).verdict, verdict, key);
  }
});
