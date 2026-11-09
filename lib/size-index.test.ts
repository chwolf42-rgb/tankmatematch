import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { species } from "../data/species";
import sitemap from "../app/sitemap";
import { publishedSizeGallons, tankFit, getSpecies } from "./checker";
import { absoluteUrl } from "./seo";
import { indexableSizeGallon, sizePageIndexing } from "./size-index";

test("only the smallest too-small tank-size page is indexed", () => {
  assert.equal(indexableSizeGallon("betta"), 10);
  assert.deepEqual(sizePageIndexing("betta", 10), {
    index: true,
    canonicalPath: "/tank-mates/betta/10-gallon",
  });
  for (const gallons of [20, 29, 40]) {
    assert.equal(sizePageIndexing("betta", gallons).index, false);
    assert.equal(sizePageIndexing("betta", gallons).canonicalPath, "/tank-mates/betta");
  }

  const urls = new Set(sitemap().map((entry) => entry.url));
  assert.equal(urls.has(absoluteUrl("/tank-mates/betta/10-gallon")), true);
  assert.equal(urls.has(absoluteUrl("/tank-mates/betta/20-gallon")), false);

  let indexed = 0;
  let kept = 0;
  for (const animal of species) {
    const sizes = publishedSizeGallons(animal.slug);
    kept += sizes.length;
    const focal = getSpecies(animal.slug);
    assert.ok(focal);
    const blocked = sizes.filter((gallons) =>
      tankFit(focal, gallons).reasons.some((reason) => reason.severity === "incompatible"),
    );
    const expected = blocked[0] ?? null;
    assert.equal(indexableSizeGallon(animal.slug), expected);
    if (expected != null) {
      indexed += 1;
      assert.equal(urls.has(absoluteUrl(`/tank-mates/${animal.slug}/${expected}-gallon`)), true);
    }
    for (const gallons of sizes) {
      if (gallons === expected) continue;
      assert.equal(urls.has(absoluteUrl(`/tank-mates/${animal.slug}/${gallons}-gallon`)), false);
    }
  }
  assert.ok(kept > indexed);
  assert.ok(indexed > 0);
});

test("thin size pages stay reachable and the layout does not ship the catalog", () => {
  const sizePage = readFileSync(new URL("../app/tank-mates/[slug]/[size]/page.tsx", import.meta.url), "utf8");
  assert.match(sizePage, /publishedSizeGallons/);
  assert.match(sizePage, /index:\s*false/);
  assert.match(sizePage, /follow:\s*true/);
  const saved = readFileSync(new URL("./saved-tanks.ts", import.meta.url), "utf8");
  assert.equal(saved.includes("./checker"), false);
});
