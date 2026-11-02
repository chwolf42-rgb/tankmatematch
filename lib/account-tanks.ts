import type { SupabaseClient } from "@supabase/supabase-js";
import { MAX_SAVED_TANKS, createSavedTank, normalizeTankName, type KeyValueStore, type SavedTank } from "./saved-tanks";
import { getSupabase } from "./supabase-browser";

export const COPIED_IDS_KEY = "tankmatematch.copied-tank-ids";

export function cloudGallons(tank: number | null): number | null {
  if (tank == null) return null;
  const gallons = Math.round(tank);
  if (gallons <= 0 || gallons > 500) return null;
  return gallons;
}

export function savedTankFromCloud(row: unknown): SavedTank | null {
  if (typeof row !== "object" || row === null) return null;
  const record = row as Record<string, unknown>;
  const id = typeof record.id === "string" ? record.id.trim() : "";
  if (!id || id.length > 80) return null;
  const slugs = Array.isArray(record.species)
    ? record.species.filter((item): item is string => typeof item === "string")
    : [];
  const gallons = typeof record.gallons === "number" && Number.isFinite(record.gallons) ? record.gallons : null;
  return createSavedTank({
    id,
    name: typeof record.name === "string" ? record.name : "",
    fallbackName: "",
    slugs,
    tank: gallons,
    savedAt: typeof record.updated_at === "string" ? record.updated_at : undefined,
  });
}

export function tanksToCopy(local: SavedTank[], copiedIds: readonly string[]): SavedTank[] {
  const seen = new Set(copiedIds);
  return local.filter((tank) => !seen.has(tank.id));
}

export function loadCopiedIds(store: KeyValueStore): Record<string, string[]> {
  try {
    const raw = store.getItem(COPIED_IDS_KEY);
    if (!raw) return {};
    const data: unknown = JSON.parse(raw);
    if (typeof data !== "object" || data === null || Array.isArray(data)) return {};
    const result: Record<string, string[]> = {};
    for (const [userId, ids] of Object.entries(data)) {
      if (!Array.isArray(ids)) continue;
      result[userId] = ids.filter((id): id is string => typeof id === "string" && id.length > 0 && id.length <= 80);
    }
    return result;
  } catch {
    return {};
  }
}

export function rememberCopiedIds(store: KeyValueStore, userId: string, ids: readonly string[]): void {
  const current = loadCopiedIds(store);
  const merged = [...(current[userId] ?? [])];
  for (const id of ids) {
    if (id && !merged.includes(id)) merged.push(id);
  }
  current[userId] = merged.slice(-60);
  try {
    store.setItem(COPIED_IDS_KEY, JSON.stringify(current));
  } catch {
    // The tanks are already on the account. A missed flag only repeats the offer.
  }
}

function shortError(message: string | undefined): string {
  const text = (message ?? "").replace(/\s+/g, " ").trim();
  if (!text) return "Something went wrong. Try again.";
  return text.length > 200 ? `${text.slice(0, 200)}…` : text;
}

async function requireClient(): Promise<
  { supabase: SupabaseClient; userId: string; error: null } | { supabase: null; userId: null; error: string }
> {
  const supabase = await getSupabase();
  if (!supabase) return { supabase: null, userId: null, error: "Sign-in is not configured." };
  const { data } = await supabase.auth.getSession();
  const userId = data.session?.user.id;
  if (!userId) return { supabase: null, userId: null, error: "Sign in again to save this tank." };
  return { supabase, userId, error: null };
}

export async function listCloudTanks(): Promise<{ tanks: SavedTank[]; error: string | null }> {
  const ready = await requireClient();
  if (!ready.supabase) return { tanks: [], error: ready.error };
  const { data, error } = await ready.supabase
    .from("tanks")
    .select("id, name, species, gallons, updated_at")
    .order("updated_at", { ascending: false });
  if (error) return { tanks: [], error: shortError(error.message) };
  const tanks = (data ?? []).flatMap((row) => {
    const tank = savedTankFromCloud(row);
    return tank ? [tank] : [];
  });
  return { tanks, error: null };
}

export async function insertCloudTank(tank: SavedTank): Promise<{ error: string | null; rounded: boolean }> {
  const ready = await requireClient();
  if (!ready.supabase) return { error: ready.error, rounded: false };
  const { count, error: countError } = await ready.supabase.from("tanks").select("id", { count: "exact", head: true });
  if (countError) return { error: shortError(countError.message), rounded: false };
  if ((count ?? 0) >= MAX_SAVED_TANKS) {
    return {
      error: `This account already has ${MAX_SAVED_TANKS} saved tanks. Delete one to save another.`,
      rounded: false,
    };
  }
  const gallons = cloudGallons(tank.tank);
  const { error } = await ready.supabase.from("tanks").insert({
    user_id: ready.userId,
    name: tank.name,
    species: tank.slugs,
    gallons,
  });
  if (error) return { error: shortError(error.message), rounded: false };
  return { error: null, rounded: tank.tank != null && gallons !== tank.tank };
}

export async function renameCloudTank(id: string, name: string): Promise<string | null> {
  const next = normalizeTankName(name);
  if (!next) return "Enter a name.";
  const ready = await requireClient();
  if (!ready.supabase) return ready.error;
  const { error } = await ready.supabase.from("tanks").update({ name: next }).eq("id", id);
  return error ? shortError(error.message) : null;
}

export async function deleteCloudTank(id: string): Promise<string | null> {
  const ready = await requireClient();
  if (!ready.supabase) return ready.error;
  const { error } = await ready.supabase.from("tanks").delete().eq("id", id);
  return error ? shortError(error.message) : null;
}
