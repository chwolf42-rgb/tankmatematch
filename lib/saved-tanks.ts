import { MAX_SPECIES, parseTankGallons } from "./tank-limits";

/** localStorage key. The value never leaves the browser. */
export const SAVED_TANKS_KEY = "tankmatematch.tanks";

export const MAX_SAVED_TANKS = 30;
export const MAX_TANK_NAME = 60;

export interface SavedTank {
  id: string;
  name: string;
  slugs: string[];
  tank: number | null;
  savedAt: string;
}

export interface KeyValueStore {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

const SLUG = /^[a-z0-9-]{1,80}$/;

export function normalizeTankName(name: string): string {
  return name.replace(/\s+/g, " ").trim().slice(0, MAX_TANK_NAME);
}

export function defaultTankName(names: string[], tank: number | null): string {
  const who = names.map((name) => name.trim()).filter(Boolean).join(", ");
  const size = tank != null ? ` (${tank} gal)` : "";
  return normalizeTankName(`${who || "Untitled tank"}${size}`) || "Untitled tank";
}

export function newTankId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
  return `tank-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function sanitizeTank(item: unknown): SavedTank | null {
  if (!isRecord(item)) return null;
  const id = typeof item.id === "string" ? item.id.trim() : "";
  if (!id || id.length > 80) return null;
  const name = typeof item.name === "string" ? normalizeTankName(item.name) : "";
  if (!name) return null;
  if (!Array.isArray(item.slugs)) return null;
  const slugs: string[] = [];
  for (const slug of item.slugs) {
    if (typeof slug !== "string") continue;
    const clean = slug.trim().toLowerCase();
    if (!SLUG.test(clean) || slugs.includes(clean)) continue;
    slugs.push(clean);
    if (slugs.length >= MAX_SPECIES) break;
  }
  if (slugs.length === 0) return null;
  const gallons = parseTankGallons(typeof item.tank === "number" && Number.isFinite(item.tank) ? String(item.tank) : null);
  const savedAt =
    typeof item.savedAt === "string" && !Number.isNaN(Date.parse(item.savedAt))
      ? new Date(item.savedAt).toISOString()
      : "1970-01-01T00:00:00.000Z";
  return { id, name, slugs, tank: gallons.tank, savedAt };
}

/** Read a stored list. Corrupt JSON and broken records are skipped. */
export function parseSavedTanks(raw: string | null): SavedTank[] {
  if (!raw) return [];
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return [];
  }
  const list = Array.isArray(data) ? data : isRecord(data) && Array.isArray(data.tanks) ? data.tanks : null;
  if (!list) return [];
  const tanks: SavedTank[] = [];
  const seen = new Set<string>();
  for (const item of list) {
    const tank = sanitizeTank(item);
    if (!tank || seen.has(tank.id)) continue;
    seen.add(tank.id);
    tanks.push(tank);
    if (tanks.length >= MAX_SAVED_TANKS) break;
  }
  tanks.sort((a, b) => (a.savedAt < b.savedAt ? 1 : a.savedAt > b.savedAt ? -1 : a.name.localeCompare(b.name)));
  return tanks;
}

export function loadSavedTanks(store: KeyValueStore): SavedTank[] {
  try {
    return parseSavedTanks(store.getItem(SAVED_TANKS_KEY));
  } catch {
    return [];
  }
}

export function persistSavedTanks(store: KeyValueStore, tanks: SavedTank[]): string | null {
  try {
    store.setItem(SAVED_TANKS_KEY, JSON.stringify({ version: 1, tanks }));
    return null;
  } catch {
    return "This browser refused to store the tank. It may be full or blocking site data.";
  }
}

export function browserStore(): KeyValueStore | null {
  if (typeof window === "undefined") return null;
  try {
    const probe = `${SAVED_TANKS_KEY}.probe`;
    window.localStorage.setItem(probe, "1");
    window.localStorage.removeItem(probe);
    return window.localStorage;
  } catch {
    return null;
  }
}

export function createSavedTank(input: {
  name: string;
  fallbackName: string;
  slugs: string[];
  tank: number | null;
  id?: string;
  savedAt?: string;
}): SavedTank | null {
  const name = normalizeTankName(input.name) || normalizeTankName(input.fallbackName);
  if (!name) return null;
  const slugs: string[] = [];
  for (const slug of input.slugs) {
    const clean = slug.trim().toLowerCase();
    if (!SLUG.test(clean) || slugs.includes(clean)) continue;
    slugs.push(clean);
    if (slugs.length >= MAX_SPECIES) break;
  }
  if (slugs.length === 0) return null;
  const gallons = parseTankGallons(input.tank == null ? null : String(input.tank));
  return {
    id: input.id ?? newTankId(),
    name,
    slugs,
    tank: gallons.tank,
    savedAt: input.savedAt ?? new Date().toISOString(),
  };
}

export function addSavedTank(store: KeyValueStore, tank: SavedTank): { tanks: SavedTank[]; error: string | null } {
  const current = loadSavedTanks(store);
  if (current.length >= MAX_SAVED_TANKS) {
    return {
      tanks: current,
      error: `This browser already has ${MAX_SAVED_TANKS} saved tanks. Delete one to save another.`,
    };
  }
  if (current.some((item) => item.id === tank.id)) {
    return { tanks: current, error: "That tank is already saved." };
  }
  const next = parseSavedTanks(JSON.stringify({ version: 1, tanks: [tank, ...current] }));
  const error = persistSavedTanks(store, next);
  return { tanks: error ? current : next, error };
}

export function renameSavedTank(tanks: SavedTank[], id: string, name: string): SavedTank[] | null {
  const nextName = normalizeTankName(name);
  if (!nextName) return null;
  return tanks.map((tank) => (tank.id === id ? { ...tank, name: nextName } : tank));
}

export function deleteSavedTank(tanks: SavedTank[], id: string): SavedTank[] {
  return tanks.filter((tank) => tank.id !== id);
}
