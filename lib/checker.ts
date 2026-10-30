import { species as catalog } from "../data/species";
import { formatNumber, formatRange, intersect, intersectAll, rangeSpan, requiredLengthIn, standardFootprint } from "./format";
import type { CheckResult, PairOverride, PairReport, Reason, Species, Verdict } from "./types";

/** Overlap narrower than this is treated as the edge of both ranges, not a comfortable match. */
export const TEMP_CAUTION_BELOW_F = 4;
export const PH_CAUTION_BELOW = 0.6;
export const HARDNESS_CAUTION_BELOW = 3;

export const CANDIDATE_GALLONS = [10, 20, 29, 40] as const;

const MAX_SPECIES = 6;

export function getSpecies(slug: string, list: Species[] = catalog): Species | undefined {
  return list.find((item) => item.slug === slug);
}

export function parseQuery(search: string, list: Species[] = catalog): { slugs: string[]; tank: number | null } {
  const params = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  const known = new Set(list.map((item) => item.slug));
  const slugs: string[] = [];
  for (const raw of (params.get("f") ?? "").split(",")) {
    const slug = raw.trim().toLowerCase();
    if (!slug || !known.has(slug) || slugs.includes(slug)) continue;
    slugs.push(slug);
    if (slugs.length >= MAX_SPECIES) break;
  }
  const tankRaw = params.get("tank");
  let tank: number | null = null;
  if (tankRaw) {
    const value = Number(tankRaw);
    if (Number.isFinite(value) && value > 0 && value <= 500) {
      tank = Math.round(value * 10) / 10;
    }
  }
  return { slugs, tank };
}

export function buildQuery(slugs: string[], tank: number | null): string {
  const parts: string[] = [];
  if (tank != null) parts.push(`tank=${tank}`);
  if (slugs.length > 0) parts.push(`f=${slugs.join(",")}`);
  return parts.length > 0 ? `?${parts.join("&")}` : "";
}

function worst(verdicts: Verdict[]): Verdict {
  if (verdicts.includes("incompatible")) return "incompatible";
  if (verdicts.includes("caution")) return "caution";
  return "compatible";
}

function findOverride(a: Species, b: Species): PairOverride | null {
  const fromA = [...a.incompatibleWith, ...a.cautionWith].find((item) => item.slug === b.slug);
  const fromB = [...b.incompatibleWith, ...b.cautionWith].find((item) => item.slug === a.slug);
  if (fromA && fromB) {
    return fromA.verdict === "incompatible" ? fromA : fromB.verdict === "incompatible" ? fromB : fromA;
  }
  return fromA ?? fromB ?? null;
}

function chemistry(a: Species, b: Species): { reasons: Reason[]; hardnessSkipped: boolean } {
  const reasons: Reason[] = [];
  const temp = intersect(a.tempF, b.tempF);
  if (!temp) {
    reasons.push({
      severity: "incompatible",
      code: "temp",
      text: `Temperature does not overlap. ${a.commonName} is listed at ${formatRange(a.tempF, "°F")} and ${b.commonName} at ${formatRange(b.tempF, "°F")}.`,
    });
  } else if (rangeSpan(temp) < TEMP_CAUTION_BELOW_F) {
    reasons.push({
      severity: "caution",
      code: "temp-edge",
      text: `Temperature only overlaps at ${formatRange(temp, "°F")}, a window under ${TEMP_CAUTION_BELOW_F}°F. Both animals would be held at the edge of a published range.`,
    });
  }

  const pH = intersect(a.pH, b.pH);
  if (!pH) {
    reasons.push({
      severity: "incompatible",
      code: "ph",
      text: `pH does not overlap. ${a.commonName} is listed at ${formatRange(a.pH, "pH")} and ${b.commonName} at ${formatRange(b.pH, "pH")}.`,
    });
  } else if (rangeSpan(pH) < PH_CAUTION_BELOW) {
    reasons.push({
      severity: "caution",
      code: "ph-edge",
      text: `pH only overlaps at ${formatRange(pH, "pH")}. That is the edge of at least one published range, so the match is technically possible and a poor long-term target.`,
    });
  }

  let hardnessSkipped = false;
  if (a.hardnessDGH && b.hardnessDGH) {
    const hardness = intersect(a.hardnessDGH, b.hardnessDGH);
    if (!hardness) {
      reasons.push({
        severity: "incompatible",
        code: "hardness",
        text: `Hardness does not overlap. ${a.commonName} is listed at ${formatRange(a.hardnessDGH, "dGH")} and ${b.commonName} at ${formatRange(b.hardnessDGH, "dGH")}.`,
      });
    } else if (rangeSpan(hardness) < HARDNESS_CAUTION_BELOW) {
      reasons.push({
        severity: "caution",
        code: "hardness-edge",
        text: `Hardness only overlaps at ${formatRange(hardness, "dGH")}. One of them would be living in harder or softer water than its published range prefers.`,
      });
    }
  } else {
    hardnessSkipped = true;
  }

  return { reasons, hardnessSkipped };
}

function behavior(a: Species, b: Species): Reason[] {
  const override = findOverride(a, b);
  if (override) {
    return [{ severity: override.verdict, code: "override", text: `${override.summary} ${override.detail}` }];
  }

  const reasons: Reason[] = [];
  const shrimp = [a, b].find((item) => item.shrimpRisk === "not-applicable");
  const hunter = shrimp ? (shrimp === a ? b : a) : null;

  if (hunter && shrimp && hunter.shrimpRisk === "adults") {
    reasons.push({
      severity: "incompatible",
      code: "predation",
      text: `${hunter.commonName} is scored as a predator of adult cherry shrimp. ${hunter.shrimpRiskNote}`,
    });
  } else if (hunter && shrimp && hunter.shrimpRisk === "juveniles") {
    reasons.push({
      severity: "caution",
      code: "shrimplets",
      text: `${hunter.commonName} is not scored as a hunter of adult cherry shrimp, but juveniles are at risk. ${hunter.shrimpRiskNote}`,
    });
  }

  if ((a.attacksLongFins && b.longFinned) || (b.attacksLongFins && a.longFinned)) {
    const attacker = a.attacksLongFins ? a : b;
    const target = attacker === a ? b : a;
    reasons.push({
      severity: "incompatible",
      code: "flowing-fins",
      text: `${attacker.commonName} damages long, flowing fins. ${target.commonName} is the long-finned form this check assumes. ${target.longFinnedNote} Seriously Fish says species with trailing finnage should certainly be avoided with a male betta, because he may view them as rivals. Extra gallons do not remove the fins.`,
    });
  } else if ((a.finNipper && b.longFinned) || (b.finNipper && a.longFinned)) {
    const nipper = a.finNipper ? a : b;
    const target = nipper === a ? b : a;
    reasons.push({
      severity: "incompatible",
      code: "fin-nip",
      text: `${nipper.commonName} is a fin nipper and ${target.commonName} has long fins. ${target.longFinnedNote}`,
    });
  }

  if (a.surfaceTerritorial && b.surfaceTerritorial) {
    reasons.push({
      severity: "incompatible",
      code: "surface",
      text: `${a.commonName} and ${b.commonName} both hold the surface. ${a.commonName} is a territorial anabantoid, and the honey gourami profile says territorial tankmates should be left out. Two bubble-nesters in the same top few inches is a territory fight, not a community.`,
    });
  }

  if ((a.flow === "still" && b.flow === "current") || (b.flow === "still" && a.flow === "current")) {
    const still = a.flow === "still" ? a : b;
    const current = still === a ? b : a;
    reasons.push({
      severity: "caution",
      code: "flow",
      text: `${still.commonName} is listed for still water (${still.flowNote}) and ${current.commonName} is listed for current (${current.flowNote}). One filter setting has to disappoint one of them.`,
    });
  }

  if ((a.slowMoving && b.vigorous) || (b.slowMoving && a.vigorous)) {
    const slow = a.slowMoving ? a : b;
    const fast = slow === a ? b : a;
    reasons.push({
      severity: "caution",
      code: "pace",
      text: `${slow.commonName} is slow and easily outcompeted. ${fast.commonName} is a vigorous swimmer. Seriously Fish's honey gourami profile says larger or more vigorous tankmates will intimidate it and take the food.`,
    });
  }

  const alreadyRefused = reasons.some((reason) => reason.severity === "incompatible");
  if (!alreadyRefused && (a.temperament === "semi-aggressive" || b.temperament === "semi-aggressive")) {
    const aggressor = a.temperament === "semi-aggressive" ? a : b;
    const other = aggressor === a ? b : a;
    reasons.push({
      severity: "caution",
      code: "temperament",
      text: `${aggressor.commonName} is best kept alone. Seriously Fish says community success with Betta splendens is the exception, not the usual result. ${other.commonName} does not add a second, more specific conflict, so this stays at Caution rather than Not compatible.`,
    });
  }

  return reasons;
}

function pairReport(a: Species, b: Species): PairReport {
  const water = chemistry(a, b);
  const act = behavior(a, b);
  const reasons = [...water.reasons, ...act];
  if (water.hardnessSkipped) {
    const missing = [a, b].filter((item) => !item.hardnessDGH).map((item) => item.commonName);
    reasons.push({
      severity: "note",
      code: "hardness-unknown",
      text: `Hardness was not compared. No sourced dGH range is on file for ${missing.join(" and ")}.`,
    });
  }
  const noteFromA = a.endorsedWith.find((item) => item.slug === b.slug);
  const noteFromB = b.endorsedWith.find((item) => item.slug === a.slug);
  const note = noteFromA ?? noteFromB;
  if (note) {
    reasons.push({ severity: "note", code: "endorsed", text: note.note });
  }

  const scoring = reasons.filter((reason) => reason.severity !== "note");
  const verdict: Verdict = scoring.length === 0 ? "compatible" : worst(scoring.map((reason) => reason.severity as Verdict));
  if (verdict === "compatible" && a.waterLayer !== b.waterLayer && a.waterLayer !== "all" && b.waterLayer !== "all") {
    reasons.push({
      severity: "note",
      code: "layers",
      text: `They use different levels (${a.commonName} ${a.waterLayer}, ${b.commonName} ${b.waterLayer}), which spreads them out. It does not cancel a water or behaviour problem when one exists.`,
    });
  }
  if (verdict === "compatible" && (a.livebearer || b.livebearer)) {
    const bearers = [a, b].filter((item) => item.livebearer).map((item) => item.commonName);
    reasons.push({
      severity: "note",
      code: "fry",
      text: `${bearers.join(" and ")} ${bearers.length > 1 ? "are livebearers and will" : "is a livebearer and will"} produce fry in a shared tank. That is a population problem, not a fight.`,
    });
  }
  return { a: a.slug, b: b.slug, verdict, reasons };
}

export interface TankFit {
  kind: "ok" | "volume" | "length" | "length-maybe" | "length-unknown";
  reasons: Reason[];
}

export function tankFit(animal: Species, gallons: number): TankFit {
  const reasons: Reason[] = [];
  let kind: TankFit["kind"] = "ok";

  if (animal.minTank.gallons != null && gallons < animal.minTank.gallons) {
    kind = "volume";
    reasons.push({
      severity: "incompatible",
      code: "tank-volume",
      text: `${animal.commonName} is listed for a tank of at least ${animal.minTank.gallons} US gallons (${animal.minTank.stated}). ${formatNumber(gallons)} gallons is under that.`,
    });
  }

  const needed = requiredLengthIn(animal);
  if (needed != null) {
    const footprint = standardFootprint(gallons);
    const lengthLabel = animal.minTank.lengthIn
      ? `${animal.minTank.lengthIn} inches`
      : `${animal.minTank.lengthCm} cm (about ${formatNumber(needed)} inches)`;
    if (!footprint) {
      if (kind === "ok") kind = "length-unknown";
      reasons.push({
        severity: "caution",
        code: "tank-length-unknown",
        text: `${animal.commonName} needs a tank at least ${lengthLabel} long (${animal.minTank.stated}). A gallon count does not say how long the tank is, so this check cannot clear the footprint.`,
      });
    } else if (footprint.longIn + 0.05 < needed) {
      kind = kind === "volume" ? "volume" : "length";
      reasons.push({
        severity: "incompatible",
        code: "tank-length",
        text: `${animal.commonName} needs a base at least ${lengthLabel} long (${animal.minTank.stated}). A common ${formatNumber(gallons)}-gallon tank is ${footprint.shortIn === footprint.longIn ? `${footprint.longIn} inches` : `${footprint.shortIn} to ${footprint.longIn} inches`} long, which is still short.`,
      });
    } else if (footprint.shortIn + 0.05 < needed) {
      if (kind === "ok") kind = "length-maybe";
      reasons.push({
        severity: "caution",
        code: "tank-length-maybe",
        text: `${animal.commonName} needs a base at least ${lengthLabel} long (${animal.minTank.stated}). Only the long form of a ${formatNumber(gallons)}-gallon tank reaches that. A tall tank of the same gallons does not.`,
      });
    }
  }

  return { kind, reasons };
}

export function stockingInches(list: Species[]): { inches: number; incomplete: boolean } {
  let inches = 0;
  let incomplete = false;
  for (const animal of list) {
    const count = animal.minGroup ?? 1;
    if (animal.minGroup == null) incomplete = true;
    inches += animal.adultSizeIn * count;
  }
  return { inches: Math.round(inches * 10) / 10, incomplete };
}

function stockingNotes(list: Species[]): Reason[] {
  return list
    .filter((animal) => animal.minGroup != null && animal.minGroup > 1)
    .map((animal) => ({
      severity: "note" as const,
      code: "group",
      text: `${animal.commonName}: ${animal.minGroupNote}`,
    }));
}

export function checkSelection(slugs: string[], tankGallons: number | null, list: Species[] = catalog): CheckResult {
  const chosen = slugs
    .map((slug) => getSpecies(slug, list))
    .filter((item): item is Species => Boolean(item))
    .slice(0, MAX_SPECIES);

  const pairs: PairReport[] = [];
  for (let i = 0; i < chosen.length; i++) {
    for (let j = i + 1; j < chosen.length; j++) {
      pairs.push(pairReport(chosen[i], chosen[j]));
    }
  }

  const tankReasons: Reason[] = [];
  if (tankGallons != null) {
    for (const animal of chosen) {
      tankReasons.push(...tankFit(animal, tankGallons).reasons);
    }
    const blocked = tankReasons.some((reason) => reason.severity === "incompatible");
    const stock = stockingInches(chosen);
    if (!blocked && chosen.length > 0) {
      const assumed = chosen
        .map((animal) => `${animal.minGroup ?? 1} ${animal.commonName}`)
        .join(", ");
      if (stock.inches > tankGallons) {
        tankReasons.push({
          severity: "caution",
          code: "bioload",
          text: `A rough adult-inch total for the published minimum groups is about ${formatNumber(stock.inches)} inches in ${formatNumber(tankGallons)} gallons (${assumed}). That old inches-per-gallon shortcut is a stocking warning, not a rule, and it ignores body shape. It is why an otherwise compatible pair can show as Caution once a tank size is set.`,
        });
      } else if (stock.incomplete) {
        tankReasons.push({
          severity: "note",
          code: "bioload-incomplete",
          text: `The adult-inch total is about ${formatNumber(stock.inches)}, counting one animal where no source gives a group size. Treat it as a low estimate.`,
        });
      }
    }
  }

  const hardnessSkipped = chosen.filter((animal) => !animal.hardnessDGH).map((animal) => animal.commonName);
  const window = {
    tempF: intersectAll(chosen.map((animal) => animal.tempF)),
    pH: intersectAll(chosen.map((animal) => animal.pH)),
    hardnessDGH: intersectAll(chosen.flatMap((animal) => (animal.hardnessDGH ? [animal.hardnessDGH] : []))),
    hardnessSkipped,
  };

  const pairVerdicts = pairs.map((pair) => pair.verdict);
  const tankVerdicts = tankReasons.filter((reason) => reason.severity !== "note").map((reason) => reason.severity as Verdict);
  let verdict: CheckResult["verdict"];
  let headline: string;

  if (chosen.length < 2) {
    if (chosen.length === 1 && tankVerdicts.includes("incompatible")) {
      verdict = "incompatible";
      headline = `This tank is too small for ${chosen[0].commonName}, before any tank mate is added.`;
    } else if (chosen.length === 1 && tankVerdicts.includes("caution")) {
      verdict = "caution";
      headline = `Add a second species. The tank already raises a caution for ${chosen[0].commonName}.`;
    } else {
      verdict = "incomplete";
      headline = chosen.length === 0 ? "Add at least two species." : "Add a second species to compare.";
    }
  } else {
    verdict = worst([...pairVerdicts, ...tankVerdicts]);
    const lead = pairs
      .flatMap((pair) => pair.reasons)
      .find((reason) => reason.severity === verdict);
    const tankLead = tankReasons.find((reason) => reason.severity === verdict);
    if (verdict === "compatible") {
      headline = "Compatible. The published temperature, pH, and hardness ranges overlap, and the sources used here do not describe a behaviour conflict.";
    } else if (tankLead && !lead) {
      headline = verdict === "incompatible" ? "Not compatible in this tank." : "Caution once the tank size is included.";
    } else if (verdict === "incompatible") {
      headline = "Not compatible.";
    } else {
      headline = "Caution.";
    }
  }

  return {
    slugs: chosen.map((animal) => animal.slug),
    tankGallons,
    verdict,
    headline,
    pairs,
    tankReasons,
    stockingNotes: stockingNotes(chosen),
    window,
  };
}

export function sizeSignature(slug: string, gallons: number, list: Species[] = catalog): string {
  const focal = getSpecies(slug, list);
  if (!focal) return "";
  const fit = tankFit(focal, gallons).kind;
  const partners = list
    .filter((animal) => animal.slug !== slug)
    .map((animal) => `${animal.slug}:${checkSelection([slug, animal.slug], gallons, list).verdict}`)
    .join(",");
  return `${fit}|${partners}`;
}

/** Gallon pages are emitted only where the verdict list actually changes. */
export function publishedSizeGallons(slug: string, list: Species[] = catalog): number[] {
  const signatures = CANDIDATE_GALLONS.map((gallons) => sizeSignature(slug, gallons, list));
  if (signatures.every((signature) => signature === signatures[0])) return [];
  const published: number[] = [];
  let previous = "";
  CANDIDATE_GALLONS.forEach((gallons, index) => {
    if (signatures[index] !== previous) {
      published.push(gallons);
      previous = signatures[index];
    }
  });
  return published;
}

export function sizesCoveredBy(slug: string, gallons: number, list: Species[] = catalog): number[] {
  const published = publishedSizeGallons(slug, list);
  const start = published.indexOf(gallons);
  if (start === -1) return [];
  const next = published[start + 1];
  return CANDIDATE_GALLONS.filter((candidate) => candidate >= gallons && (next == null || candidate < next));
}

export { MAX_SPECIES };
