import assert from "node:assert/strict";
import test from "node:test";
import { cloudGallons, loadCopiedIds, rememberCopiedIds, savedTankFromCloud, tanksToCopy } from "./account-tanks";
import { createSavedTank, type KeyValueStore } from "./saved-tanks";

function memoryStore(): KeyValueStore & { data: Record<string, string> } {
  const data: Record<string, string> = {};
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

test("account copies skip tanks already sent and store whole gallons", () => {
  const local = [
    createSavedTank({
      name: "A",
      fallbackName: "A",
      slugs: ["betta"],
      tank: null,
      id: "a",
      savedAt: "2026-11-02T00:00:00.000Z",
    }),
    createSavedTank({
      name: "B",
      fallbackName: "B",
      slugs: ["guppy"],
      tank: 20,
      id: "b",
      savedAt: "2026-11-02T00:00:00.000Z",
    }),
  ];
  assert.ok(local[0] && local[1]);
  assert.deepEqual(
    tanksToCopy([local[0], local[1]], ["a"]).map((tank) => tank.id),
    ["b"],
  );
  const store = memoryStore();
  rememberCopiedIds(store, "user-1", ["a"]);
  rememberCopiedIds(store, "user-1", ["a", "b"]);
  assert.deepEqual(loadCopiedIds(store)["user-1"], ["a", "b"]);
  assert.equal(cloudGallons(null), null);
  assert.equal(cloudGallons(20), 20);
  assert.equal(cloudGallons(20.4), 20);
  assert.equal(cloudGallons(20.5), 21);
});

test("a cloud row becomes a saved tank", () => {
  const tank = savedTankFromCloud({
    id: "6f1b9b3e-1c2d-4e5f-8a9b-0c1d2e3f4a5b",
    name: "  Community  ",
    species: ["Neon-tetra", "neon-tetra", "guppy"],
    gallons: 40,
    updated_at: "2026-11-02T12:00:00.000Z",
  });
  assert.ok(tank);
  assert.equal(tank.name, "Community");
  assert.deepEqual(tank.slugs, ["neon-tetra", "guppy"]);
  assert.equal(tank.tank, 40);
  assert.equal(savedTankFromCloud({ id: "", name: "Nope", species: ["betta"] }), null);
});
