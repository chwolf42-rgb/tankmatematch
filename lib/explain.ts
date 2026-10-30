import { checkSelection, sizesCoveredBy, tankFit } from "./checker";
import { formatNumber } from "./format";
import type { Species, Verdict } from "./types";
import { species } from "../data/species";

export function focalBlocked(animal: Species, gallons: number): boolean {
  return tankFit(animal, gallons).reasons.some((reason) => reason.severity === "incompatible");
}

export function coveredGallonLabel(slug: string, gallons: number): string {
  const covered = sizesCoveredBy(slug, gallons);
  if (covered.length <= 1) return "";
  const rest = covered.filter((size) => size !== gallons);
  const list = rest.map((size) => `${formatNumber(size)}-gallon`).join(" and ");
  return `The same result holds for a ${list} tank.`;
}

export function laterPairings(slug: string): { verdict: Verdict; name: string; other: string }[] {
  return species
    .filter((animal) => animal.slug !== slug)
    .map((animal) => {
      const result = checkSelection([slug, animal.slug], null);
      return { verdict: result.verdict as Verdict, name: animal.commonName, other: animal.slug };
    })
    .filter((item) => item.verdict === "compatible");
}
