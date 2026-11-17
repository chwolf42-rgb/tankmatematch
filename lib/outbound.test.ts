import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { speciesNeeds } from "../data/needs";
import { species } from "../data/species";
import { amazonSearchUrl, mapsSearchUrl, rawExternalAnchors } from "./outbound";
import { fitDescription } from "./seo-copy";

function sourceFiles(dir: string): string[] {
  const found: string[] = [];
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) found.push(...sourceFiles(path));
    else if (name.endsWith(".tsx") || name.endsWith(".ts")) found.push(path);
  }
  return found;
}

test("outbound anchors go through TrackedLink", () => {
  const roots = ["app", "components"].map((dir) => join(process.cwd(), dir));
  const offenders: string[] = [];
  for (const root of roots) {
    for (const file of sourceFiles(root)) {
      if (file.endsWith("TrackedLink.tsx")) continue;
      const hits = rawExternalAnchors(readFileSync(file, "utf8"));
      for (const hit of hits) offenders.push(`${file}: ${hit}`);
    }
  }
  assert.deepEqual(offenders, []);
});

test("shop and map links are plain searches", () => {
  const shop = new URL(amazonSearchUrl("aquarium frozen bloodworms"));
  assert.equal(shop.origin + shop.pathname, "https://www.amazon.com/s");
  assert.deepEqual([...shop.searchParams.keys()], ["k"]);
  assert.equal(shop.searchParams.get("k"), "aquarium frozen bloodworms");
  const map = new URL(mapsSearchUrl("Betta"));
  assert.equal(map.searchParams.get("query"), "aquarium store near me Betta");
  assert.equal(map.searchParams.has("tag"), false);
  const generic = new URL(mapsSearchUrl(""));
  assert.equal(generic.searchParams.get("query"), "aquarium store near me");
});

test("what-it-needs sections stay sourced and the shop page copy fits", () => {
  assert.ok(speciesNeeds.length >= 10 && speciesNeeds.length <= 12);
  const slugs = new Set(speciesNeeds.map((entry) => entry.slug));
  assert.equal(slugs.size, speciesNeeds.length);
  for (const entry of speciesNeeds) {
    assert.ok(species.some((animal) => animal.slug === entry.slug), entry.slug);
    assert.ok(entry.faqs.length >= 1, entry.slug);
    const topics = new Set(entry.items.map((item) => item.topic));
    assert.ok(topics.has("diet"), entry.slug);
    for (const item of entry.items) {
      assert.ok(item.text.length > 40, item.topic);
      assert.ok(item.sourceLabel.length > 2);
      assert.match(item.sourceUrl, /^https?:\/\//);
      assert.equal(item.sourceUrl.includes("tag="), false);
      if (item.shopQuery) {
        const url = new URL(amazonSearchUrl(item.shopQuery));
        assert.deepEqual([...url.searchParams.keys()], ["k"]);
        assert.equal(item.shopItem && item.shopItem.length > 0, true);
      }
    }
  }
  const description = fitDescription(
    ["Find an aquarium shop near you with a plain Google Maps search."],
    ["A species page adds that animal's name to the search.", "Stock is not checked.", "No personal data is sent by this site."],
  );
  assert.ok(description.length >= 140 && description.length <= 160, String(description.length));
  const disclosure = readFileSync(new URL("../app/affiliate-disclosure/page.tsx", import.meta.url), "utf8");
  assert.equal(/commission/i.test(disclosure), false);
  const link = readFileSync(new URL("../components/TrackedLink.tsx", import.meta.url), "utf8");
  assert.match(link, /track\(\s*"outbound_click"/);
  for (const field of ["page", "item", "linkType", "destHost", "region"]) {
    assert.match(link, new RegExp(field));
  }
});
