import type { Range } from "./types";

export function formatNumber(value: number): string {
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}

export function formatRange(range: Range, unit: string): string {
  return `${formatNumber(range.min)}–${formatNumber(range.max)} ${unit}`;
}

export function rangeSpan(range: Range): number {
  return Math.round((range.max - range.min) * 1000) / 1000;
}

export function intersect(a: Range, b: Range): Range | null {
  const min = Math.max(a.min, b.min);
  const max = Math.min(a.max, b.max);
  if (min > max) return null;
  return { min, max };
}

export function intersectAll(ranges: Range[]): Range | null {
  if (ranges.length === 0) return null;
  return ranges.reduce<Range | null>((acc, range) => {
    if (!acc) return null;
    return intersect(acc, range);
  }, ranges[0]);
}

/** Longest and shortest commonly sold US footprint at a standard gallon size. */
export function standardFootprint(gallons: number): { shortIn: number; longIn: number } | null {
  const known: Record<number, { shortIn: number; longIn: number }> = {
    5: { shortIn: 16, longIn: 16 },
    10: { shortIn: 20, longIn: 20 },
    15: { shortIn: 24, longIn: 24 },
    20: { shortIn: 24, longIn: 30 },
    29: { shortIn: 30, longIn: 30 },
    30: { shortIn: 36, longIn: 36 },
    40: { shortIn: 36, longIn: 48 },
    55: { shortIn: 48, longIn: 48 },
    75: { shortIn: 48, longIn: 48 },
  };
  return known[gallons] ?? null;
}

export function requiredLengthIn(species: {
  minTank: { lengthCm: number | null; lengthIn: number | null };
}): number | null {
  if (species.minTank.lengthIn != null) return species.minTank.lengthIn;
  if (species.minTank.lengthCm != null) return species.minTank.lengthCm / 2.54;
  return null;
}
