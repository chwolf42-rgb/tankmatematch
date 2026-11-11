import assert from "node:assert/strict";
import test from "node:test";
import { profiles } from "../data/profiles";
import { checkSelection, getSpecies } from "./checker";

const PEACEFUL = [
  "panda-cory",
  "schwartzs-cory",
  "three-lined-pencilfish",
  "coral-red-pencilfish",
  "zebra-oto",
  "chocolate-gourami",
  "sawbwa",
  "madagascan-rainbow-fish",
  "ram",
  "bolivian-ram",
  "keyhole-cichlid",
  "clown-loach",
];

test("source temperament is peaceful for the reviewed false keyword matches", () => {
  for (const slug of PEACEFUL) {
    const animal = getSpecies(slug);
    assert.ok(animal, slug);
    assert.equal(animal.temperament, "peaceful", slug);
    assert.match(animal.careLevelNote, /peaceful|community|non-aggressive|not generally aggressive|slow|intimidate|poor competitor/i, slug);
  }
});

test("kuhli loach does not hunt adult cherry shrimp", () => {
  const kuhli = getSpecies("kuhli-loach");
  assert.ok(kuhli);
  assert.equal(kuhli.scientificName, "Pangio semicincta");
  assert.equal(kuhli.shrimpRisk, "juveniles");
  assert.match(kuhli.uncertainties.map((item) => item.note).join(" "), /source-limited|does not print/i);
  const result = checkSelection(["kuhli-loach", "cherry-shrimp"], null);
  assert.equal(result.pairs[0].reasons.some((reason) => reason.code === "predation"), false);
  assert.equal(result.pairs[0].reasons.some((reason) => reason.code === "shrimplets"), true);
});

test("hengel's rasbora and sawbwa use distinct sourced names", () => {
  const hengel = getSpecies("hengels-rasbora");
  const glowlight = getSpecies("glowlight-rasbora");
  const sawbwa = getSpecies("sawbwa");
  const lambchop = getSpecies("lambchop-rasbora");
  assert.equal(hengel?.commonName, "Hengel's rasbora");
  assert.equal(hengel?.scientificName, "Trigonostigma hengeli");
  assert.equal(glowlight?.scientificName, "Trigonopoma pauciperforatum");
  assert.equal(lambchop?.scientificName, "Trigonostigma espei");
  assert.equal(sawbwa?.commonName, "Rummy-nose rasbora / Sawbwa");
  assert.equal(sawbwa?.scientificName, "Sawbwa resplendens");
  assert.equal(sawbwa?.family, "Danionidae");
  assert.equal(lambchop?.family, "Danionidae");
});

test("new predatory cichlids are not a clean match with a neon tetra", () => {
  for (const slug of ["oscar", "jack-dempsey-cichlid", "altum-angel", "humphead-cichlid", "jaguar-cichlid"]) {
    const result = checkSelection([slug, "neon-tetra"], null);
    assert.equal(result.verdict, "incompatible", slug);
    assert.equal(result.pairs[0].reasons.some((reason) => reason.code === "small-fish"), true, slug);
  }
  const napo = checkSelection(["napo-cory", "neon-tetra"], null);
  assert.equal(napo.pairs[0].reasons.some((reason) => reason.code === "temperament"), false);
});

test("angelfish stays caution with a neon, and a panda cory does not", () => {
  const angel = checkSelection(["angelfish", "neon-tetra"], null);
  assert.notEqual(angel.verdict, "compatible");
  assert.equal(angel.pairs[0].reasons.some((reason) => reason.code === "small-fish"), false);
  const panda = checkSelection(["panda-cory", "neon-tetra"], null);
  assert.equal(panda.pairs[0].reasons.some((reason) => reason.code === "temperament"), false);
});

test("a fin nipper is not compatible with the long-finned betta", () => {
  const tiger = getSpecies("tiger-barb");
  const betta = getSpecies("betta");
  assert.equal(tiger?.finNipper, true);
  assert.equal(betta?.longFinned, true);
  const result = checkSelection(["tiger-barb", "betta"], null);
  assert.equal(result.verdict, "incompatible");
  assert.equal(result.pairs[0].reasons.some((reason) => reason.code === "fin-nip" || reason.code === "flowing-fins"), true);
});

test("every species has a unique slug and scientific name and a plausible range", () => {
  const slugs = new Set<string>();
  const scientific = new Set<string>();
  const commons = new Set<string>();
  for (const animal of profiles) {
    assert.equal(slugs.has(animal.slug), false, animal.slug);
    slugs.add(animal.slug);
    const sci = animal.scientificName.toLowerCase();
    assert.equal(scientific.has(sci), false, animal.scientificName);
    scientific.add(sci);
    assert.equal(commons.has(animal.commonName), false, animal.commonName);
    commons.add(animal.commonName);
    const kind = animal.kind ?? "fish";
    if (animal.tempF) {
      if (kind === "fish") {
        assert.ok(animal.tempF.min >= 50 && animal.tempF.max <= 95, animal.slug);
        assert.ok(animal.tempF.max - animal.tempF.min <= 30, animal.slug);
      } else {
        assert.ok(animal.tempF.min >= 32 && animal.tempF.max <= 120, animal.slug);
        assert.ok(animal.tempF.max - animal.tempF.min <= 90, animal.slug);
      }
    }
    if (animal.pH) {
      const pHMax = kind === "fish" ? 9.5 : 11;
      assert.ok(animal.pH.min >= 3 && animal.pH.max <= pHMax, animal.slug);
      assert.ok(animal.pH.min < animal.pH.max, animal.slug);
    }
    if (animal.hardnessDGH) {
      assert.ok(animal.hardnessDGH.min >= 0 && animal.hardnessDGH.max <= 40, animal.slug);
      assert.ok(animal.hardnessDGH.min < animal.hardnessDGH.max, animal.slug);
    }
    assert.ok(animal.adultSizeMm >= 10 && animal.adultSizeMm <= 1000, animal.slug);
    if (animal.minTank.gallons != null) {
      assert.ok(animal.minTank.gallons >= 1 && animal.minTank.gallons <= 300, animal.slug);
    }
    assert.ok(animal.temperament === "peaceful" || animal.temperament === "semi-aggressive", animal.slug);
  }
  assert.equal(profiles.length, 325);
});

test("corrected wave 3 identities and diet scores stay tied to the source text", () => {
  const yellow = getSpecies("electric-yellow-cichlid");
  assert.equal(yellow?.scientificName, "Labidochromis caeruleus");
  assert.equal(yellow?.commonName, "Electric yellow cichlid");
  assert.equal(yellow?.shrimpRisk, "unlikely");
  assert.equal(yellow?.aliases.includes("blue streak hap"), true);

  const hap = getSpecies("electric-blue-hap");
  assert.equal(hap?.scientificName, "Sciaenochromis fryeri");
  assert.equal(hap?.shrimpRisk, "adults");
  assert.equal(hap?.eatsSmallerFish, undefined);
  const hapShrimp = checkSelection(["electric-blue-hap", "cherry-shrimp"], null);
  assert.equal(hapShrimp.pairs[0].reasons.some((reason) => reason.code === "predation"), true);

  const doctor = getSpecies("doctor-fish");
  assert.equal(doctor?.tempC?.min, 14);
  assert.equal(doctor?.tempC?.max, 20);
  assert.equal(doctor?.tempF?.min, 57);
  assert.equal(doctor?.tempF?.max, 68);
  assert.match(doctor?.uncertainties.map((item) => item.note).join(" ") ?? "", /strictly not a tropical species/);
  assert.equal(doctor?.shrimpRisk, "juveniles");
  const doctorShrimp = checkSelection(["doctor-fish", "cherry-shrimp"], null);
  assert.equal(doctorShrimp.pairs[0].reasons.some((reason) => reason.code === "predation"), false);
  assert.equal(doctorShrimp.pairs[0].reasons.some((reason) => reason.code === "shrimplets"), true);

  const jewel = getSpecies("jewel-cichlid");
  assert.equal(jewel?.shrimpRisk, "adults");
  for (const slug of ["marliers-julie", "clown-synodontis", "polka-dot-synodontis", "pyjama-synodontis"]) {
    assert.equal(getSpecies(slug)?.shrimpRisk, "juveniles", slug);
  }
});
