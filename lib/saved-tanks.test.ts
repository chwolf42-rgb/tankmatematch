import assert from "node:assert/strict";
import test from "node:test";
import { buildQuery, parseQuery } from "./checker";
import {
  addSavedTank,
  readSavedTanks,
  shareLinks,
  shareText,
  writeSavedTanks,
  type KeyValueStore,
} from "./saved-tanks";

function memory(): KeyValueStore & { dump(): string | null } {
  const data = new Map<string, string>();
  return {
    getItem: (key) => data.get(key) ?? null,
    setItem: (key, value) => data.set(key, value),
    dump: () => data.get("tankmatematch.tanks") ?? null,
  };
}

test("share text names the first species and counts the rest", () => {
  assert.equal(shareText(["Betta"]), "My tank: Betta, checked on Tank Mate Match");
  assert.equal(shareText(["Betta", "Neon tetra", "Guppy", "Platy"]), "My tank: Betta + 3 others, checked on Tank Mate Match");
  assert.equal(shareText(["Betta", "Neon tetra"]), "My tank: Betta + 1 other, checked on Tank Mate Match");
});

test("share links use the tank URL and no SDK hosts beyond the share endpoints", () => {
  const links = shareLinks("https://tankmatematch.com/checker?tank=20&f=betta,neon-tetra", "My tank: Betta + 1 other, checked on Tank Mate Match", "https://tankmatematch.com/og.png");
  assert.match(links.x, /^https:\/\/x\.com\/intent\/tweet\?/);
  assert.match(links.facebook, /^https:\/\/www\.facebook\.com\/sharer\/sharer\.php\?u=/);
  assert.match(links.reddit, /^https:\/\/www\.reddit\.com\/submit\?/);
  assert.match(links.pinterest, /^https:\/\/www\.pinterest\.com\/pin\/create\/button\//);
  assert.match(decodeURIComponent(links.x), /tank=20/);
  assert.match(links.pinterest, /og\.png/);
  assert.equal(links.facebook.includes("sdk"), false);
});

test("a saved tank round-trips through storage and the checker query", () => {
  const store = memory();
  const known = new Set(["betta", "neon-tetra", "guppy"]);
  const saved = addSavedTank(store, { name: "  Quiet community  ", slugs: ["betta", "nope", "betta", "neon-tetra"], gallons: 20 }, known);
  assert.equal(saved.ok, true);
  if (!saved.ok) return;
  assert.equal(saved.tank.name, "Quiet community");
  assert.deepEqual(saved.tank.slugs, ["betta", "neon-tetra"]);
  const query = buildQuery(saved.tank.slugs, saved.tank.gallons);
  assert.equal(query, "?tank=20&f=betta,neon-tetra");
  assert.deepEqual(parseQuery(query).slugs, ["betta", "neon-tetra"]);
  assert.equal(readSavedTanks(store, known).length, 1);
});

test("corrupt storage and a blank name do not throw", () => {
  const store = memory();
  writeSavedTanks(store, []);
  store.setItem("tankmatematch.tanks", "{not json");
  assert.deepEqual(readSavedTanks(store), []);
  const rejected = addSavedTank(store, { name: "   ", slugs: ["betta"], gallons: null });
  assert.equal(rejected.ok, false);
});
