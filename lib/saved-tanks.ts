import { MAX_SPECIES } from "./checker";

export const SAVED_TANKS_KEY = "tankmatematch.tanks";
export const MAX_SAVED_TANKS = 30;
const MAX_NAME = 80;

export interface SavedTank {
  id: string;
  name: string;
  slugs: string[];
  gallons: number | null;
  savedAt: string;
}

export interface KeyValueStore {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export function suggestedTankName(names: string[]): string {
  return shareText(names).replace(/^My tank: /, "").replace(/, checked on Tank Mate Match$/, "");
}

export function shareText(names: string[]): string {
  if (names.length === 0) return "My tank, checked on Tank Mate Match";
  if (names.length === 1) return `My tank: ${names[0]}, checked on Tank Mate Match`;
  const others = names.length - 1;
  const noun = others === 1 ? "other" : "others";
  return `My tank: ${names[0]} + ${others} ${noun}, checked on Tank Mate Match`;
}

export function shareLinks(url: string, text: string, imageUrl: string) {
  const shareUrl = encodeURIComponent(url);
  const shareTextValue = encodeURIComponent(text);
  const media = encodeURIComponent(imageUrl);
  return {
    x: `https://x.com/intent/tweet?url=${shareUrl}&text=${shareTextValue}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    reddit: `https://www.reddit.com/submit?url=${shareUrl}&title=${shareTextValue}`,
    pinterest: `https://www.pinterest.com/pin/create/button/?url=${shareUrl}&media=${media}&description=${shareTextValue}`,
  };
}

export function createTankId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
  return `tank-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function cleanName(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const name = value.replace(/\s+/g, " ").trim();
  if (!name || name.length > MAX_NAME) return null;
  return name;
}

function cleanGallons(value: unknown): number | null {
  if (value == null || value === "") return null;
  const gallons = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(gallons) || gallons <= 0 || gallons > 500) return null;
  return Math.round(gallons * 10) / 10;
}

export function normalizeSavedTank(value: unknown, knownSlugs?: ReadonlySet<string>): SavedTank | null {
  if (!value || typeof value !== "object") return null;
  const record = value as Record<string, unknown>;
  const name = cleanName(record.name);
  const id = typeof record.id === "string" && record.id.trim() ? record.id.trim() : null;
  const savedAt = typeof record.savedAt === "string" && record.savedAt.trim() ? record.savedAt : null;
  if (!name || !id || !savedAt) return null;
  if (!Array.isArray(record.slugs)) return null;
  const slugs: string[] = [];
  for (const raw of record.slugs) {
    if (typeof raw !== "string") continue;
    const slug = raw.trim().toLowerCase();
    if (!slug || slugs.includes(slug)) continue;
    if (knownSlugs && !knownSlugs.has(slug)) continue;
    slugs.push(slug);
    if (slugs.length >= MAX_SPECIES) break;
  }
  if (slugs.length === 0) return null;
  return { id, name, slugs, gallons: cleanGallons(record.gallons), savedAt };
}

export function readSavedTanks(store: KeyValueStore, knownSlugs?: ReadonlySet<string>): SavedTank[] {
  const raw = store.getItem(SAVED_TANKS_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.flatMap((item) => {
      const tank = normalizeSavedTank(item, knownSlugs);
      return tank ? [tank] : [];
    });
  } catch {
    return [];
  }
}

export function writeSavedTanks(store: KeyValueStore, tanks: SavedTank[]): void {
  store.setItem(SAVED_TANKS_KEY, JSON.stringify(tanks));
}

export function addSavedTank(
  store: KeyValueStore,
  input: { name: string; slugs: string[]; gallons: number | null },
  knownSlugs?: ReadonlySet<string>,
): { ok: true; tank: SavedTank } | { ok: false; message: string } {
  const tank = normalizeSavedTank(
    {
      id: createTankId(),
      name: input.name,
      slugs: input.slugs,
      gallons: input.gallons,
      savedAt: new Date().toISOString(),
    },
    knownSlugs,
  );
  if (!tank) return { ok: false, message: "Name the tank and add at least one species." };
  const existing = readSavedTanks(store, knownSlugs);
  if (existing.length >= MAX_SAVED_TANKS) {
    return { ok: false, message: `This browser already has ${MAX_SAVED_TANKS} saved tanks. Delete one on My tanks first.` };
  }
  writeSavedTanks(store, [tank, ...existing]);
  return { ok: true, tank };
}
