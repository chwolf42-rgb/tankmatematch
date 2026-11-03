import assert from "node:assert/strict";
import test from "node:test";
import { checkSelection, getSpecies, MAX_SPECIES } from "./checker";
import { buildSpeciesPresets } from "./presets";

test("presets use dataset species the checker calls compatible", () => {
  const presets = buildSpeciesPresets();
  assert.ok(presets.length >= 2);
  const tetra = presets.find((preset) => preset.id === "community-tetra");
  const live = presets.find((preset) => preset.id === "livebearer");
  assert.ok(tetra);
  assert.ok(live);
  assert.equal(tetra.label, "Community tetra tank");
  assert.equal(live.label, "Livebearer tank");
  assert.equal(tetra.gallons, 40);
  assert.equal(live.gallons, 20);
  assert.ok(tetra.slugs.includes("neon-tetra"));
  assert.ok(live.slugs.includes("guppy"));
  assert.equal(presets.some((preset) => preset.slugs.includes("betta")), false);

  for (const preset of presets) {
    assert.ok(preset.slugs.length >= 2, preset.id);
    assert.ok(preset.slugs.length <= MAX_SPECIES, preset.id);
    assert.equal(new Set(preset.slugs).size, preset.slugs.length, preset.id);
    for (const slug of preset.slugs) {
      assert.ok(getSpecies(slug), slug);
    }
    assert.equal(checkSelection(preset.slugs, preset.gallons).verdict, "compatible", preset.id);
    assert.match(preset.detail, /gal/);
  }
});
