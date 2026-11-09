/** Shared limits that do not need the species catalog. The layout imports this, not the checker. */

export const MAX_SPECIES = 6;

/** A gallon count the checker will store: above 0 and at most 500, to one decimal. */
export function parseTankGallons(raw: string | null | undefined): { tank: number | null; invalid: boolean } {
  if (raw == null) return { tank: null, invalid: false };
  const text = raw.trim();
  if (!text) return { tank: null, invalid: false };
  const value = Number(text);
  if (!Number.isFinite(value) || value <= 0 || value > 500) return { tank: null, invalid: true };
  const tank = Math.round(value * 10) / 10;
  if (tank <= 0 || tank > 500) return { tank: null, invalid: true };
  return { tank, invalid: false };
}
