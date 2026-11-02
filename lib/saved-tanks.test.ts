import assert from "node:assert/strict";
import test from "node:test";
import {
  addSavedTank,
  createSavedTank,
  deleteSavedTank,
  defaultTankName,
  loadSavedTanks,
  MAX_SAVED_TANKS,
  parseSavedTanks,
  persistSavedTanks,
  renameSavedTank,
  SAVED_TANKS_KEY,
  type KeyValueStore,
} from "./saved-tanks";

function memoryStore(initial?: Record<string, string>): KeyValueStore & { data: Record<string, string> } {
  const data: Record<string, string> = { ...initial };
  return {
    data,
    getItem(key) {
      return Object.prototype.hasOwnProperty.call(data, key) ? data[key] : null;
    },
    setItem(key, value) {
      data[key] = value;
    },
  };
}

test("a saved tank keeps the species list and gallon size", () => {
  const tank = createSavedTank({
    name: "  Community   20  ",
    fallbackName: "unused",
    slugs: ["Betta", "neon-tetra", "neon-tetra"],
    tank: 20,
    id: "tank-1",
    savedAt: "2026-11-02T12:00:00.000Z",
  });
  assert.ok(tank);
  assert.equal(tank.name, "Community 20");
  assert.deepEqual(tank.slugs, ["betta", "neon-tetra"]);
  assert.equal(tank.tank, 20);
  const store = memoryStore();
  const saved = addSavedTank(store, tank);
  assert.equal(saved.error, null);
  assert.equal(saved.tanks.length, 1);
  assert.equal(loadSavedTanks(store)[0].name, "Community 20");
  assert.equal(store.data[SAVED_TANKS_KEY].includes("tankmatematch"), false);
  const raw = JSON.parse(store.data[SAVED_TANKS_KEY]) as { version: number; tanks: unknown[] };
  assert.equal(raw.version, 1);
});

test("an empty name falls back to the species, and a blank selection is refused", () => {
  assert.equal(defaultTankName(["Betta", "Neon tetra"], 20), "Betta, Neon tetra (20 gal)");
  const named = createSavedTank({
    name: "   ",
    fallbackName: defaultTankName(["Betta"], null),
    slugs: ["betta"],
    tank: null,
    id: "tank-2",
  });
  assert.equal(named?.name, "Betta");
  assert.equal(named?.tank, null);
  assert.equal(
    createSavedTank({ name: "Empty", fallbackName: "Empty", slugs: [], tank: 10, id: "tank-3" }),
    null,
  );
});

test("corrupt storage and unknown species do not throw", () => {
  assert.deepEqual(parseSavedTanks("not json"), []);
  assert.deepEqual(parseSavedTanks(JSON.stringify({ version: 1, tanks: [{ id: "bad" }] })), []);
  const parsed = parseSavedTanks(
    JSON.stringify({
      version: 1,
      tanks: [
        { id: "keep", name: "Old", slugs: ["betta", "not-a-fish", "not-a-fish", "<bad>"], tank: 9000, savedAt: "nope" },
        { id: "drop", name: " ", slugs: ["betta"], tank: 10 },
      ],
    }),
  );
  assert.equal(parsed.length, 1);
  assert.deepEqual(parsed[0].slugs, ["betta", "not-a-fish"]);
  assert.equal(parsed[0].tank, null);
  assert.equal(parsed[0].savedAt, "1970-01-01T00:00:00.000Z");
});

test("rename and delete update the stored list", () => {
  const store = memoryStore();
  const tank = createSavedTank({ name: "First", fallbackName: "First", slugs: ["guppy"], tank: 10, id: "tank-4" });
  assert.ok(tank);
  addSavedTank(store, tank);
  const renamed = renameSavedTank(loadSavedTanks(store), "tank-4", "  Renamed  ");
  assert.ok(renamed);
  assert.equal(renamed[0].name, "Renamed");
  assert.equal(renameSavedTank(renamed, "tank-4", "   "), null);
  assert.equal(persistSavedTanks(store, renamed), null);
  const removed = deleteSavedTank(loadSavedTanks(store), "tank-4");
  assert.equal(persistSavedTanks(store, removed), null);
  assert.deepEqual(loadSavedTanks(store), []);
});

test("the save cap and a full browser are reported", () => {
  const store = memoryStore();
  for (let index = 0; index < MAX_SAVED_TANKS; index += 1) {
    const tank = createSavedTank({
      name: `Tank ${index}`,
      fallbackName: `Tank ${index}`,
      slugs: ["betta"],
      tank: null,
      id: `tank-${index}`,
      savedAt: new Date(Date.UTC(2026, 0, index + 1)).toISOString(),
    });
    assert.ok(tank);
    assert.equal(addSavedTank(store, tank).error, null);
  }
  const extra = createSavedTank({ name: "One more", fallbackName: "One more", slugs: ["betta"], tank: null, id: "extra" });
  assert.ok(extra);
  const refused = addSavedTank(store, extra);
  assert.match(refused.error ?? "", /Delete one/);
  assert.equal(refused.tanks.length, MAX_SAVED_TANKS);

  const blocked: KeyValueStore = {
    getItem() {
      return null;
    },
    setItem() {
      throw new Error("quota");
    },
  };
  const one = createSavedTank({ name: "Blocked", fallbackName: "Blocked", slugs: ["betta"], tank: null, id: "blocked" });
  assert.ok(one);
  assert.match(addSavedTank(blocked, one).error ?? "", /refused to store/);
});
