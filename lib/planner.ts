import { profiles as catalog } from "../data/profiles";
import { checkSelection, stockingInches } from "./checker";
import type { SpeciesProfile, Verdict } from "./types";

export interface PlanSuggestion {
  slug: string;
  commonName: string;
  scientificName: string;
  verdict: "compatible" | "works-if";
  reason: string;
  adultSizeIn: number;
}

export interface StockingEstimate {
  inches: number;
  /** True when at least one animal has no published group size, so the total counts one of that animal. */
  incomplete: boolean;
  gallons: number | null;
  overstocked: boolean;
}

export interface AdditionPlan {
  suggestions: PlanSuggestion[];
  cautionCount: number;
  incompatibleCount: number;
  stocking: StockingEstimate;
}

function suggestionReason(verdict: Verdict, texts: string[]): string {
  if (verdict === "works-if") {
    return texts.find((text) => text.length > 0) ?? "The cited conditions on this animal have to be met.";
  }
  return "Published temperature, pH, and hardness overlap every animal you entered, and no behaviour rule fires. The tank minimum for this animal is met when a size is entered.";
}

/**
 * Animals that fit the current stock. Compatible first, then Works if.
 * Within a tier, smaller adults come first because the stocking estimate is adult inches.
 * Caution and Not compatible are counted, not listed.
 */
export function planAdditions(
  slugs: string[],
  tankGallons: number | null,
  list: SpeciesProfile[] = catalog,
): AdditionPlan {
  const selected = slugs.map((slug) => list.find((animal) => animal.slug === slug)).filter((animal): animal is SpeciesProfile => Boolean(animal));
  const stockingBase = stockingInches(selected);
  const suggestions: PlanSuggestion[] = [];
  let cautionCount = 0;
  let incompatibleCount = 0;

  for (const candidate of list) {
    if (selected.some((animal) => animal.slug === candidate.slug)) continue;
    const result = checkSelection([...selected.map((animal) => animal.slug), candidate.slug], tankGallons, list);
    if (result.verdict === "caution") {
      cautionCount += 1;
      continue;
    }
    if (result.verdict === "incompatible" || result.verdict === "incomplete") {
      if (result.verdict === "incompatible") incompatibleCount += 1;
      continue;
    }
    if (result.verdict !== "compatible" && result.verdict !== "works-if") continue;
    const texts = result.pairs.flatMap((pair) => pair.reasons.filter((reason) => reason.severity === result.verdict).map((reason) => reason.text));
    suggestions.push({
      slug: candidate.slug,
      commonName: candidate.commonName,
      scientificName: candidate.scientificName,
      verdict: result.verdict,
      reason: suggestionReason(result.verdict, texts),
      adultSizeIn: candidate.adultSizeIn,
    });
  }

  suggestions.sort((a, b) => {
    if (a.verdict !== b.verdict) return a.verdict === "compatible" ? -1 : 1;
    if (a.adultSizeIn !== b.adultSizeIn) return a.adultSizeIn - b.adultSizeIn;
    return a.commonName.localeCompare(b.commonName);
  });

  return {
    suggestions,
    cautionCount,
    incompatibleCount,
    stocking: {
      inches: stockingBase.inches,
      incomplete: stockingBase.incomplete,
      gallons: tankGallons,
      overstocked: tankGallons != null && stockingBase.inches > tankGallons,
    },
  };
}
