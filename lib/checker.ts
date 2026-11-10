import { profiles as catalog } from "../data/profiles";
import { formatNumber, formatRange, intersect, intersectAll, rangeSpan, requiredLengthIn, standardFootprint } from "./format";
import { MAX_SPECIES, parseTankGallons } from "./tank-limits";
import type { AnimalKind, CheckResult, Habitat, PairOverride, PairReport, Reason, SpeciesProfile, Verdict } from "./types";

/** Overlap narrower than this is treated as the edge of both ranges, not a comfortable match. */
export const TEMP_CAUTION_BELOW_F = 4;
export const PH_CAUTION_BELOW = 0.6;
export const HARDNESS_CAUTION_BELOW = 3;

export const CANDIDATE_GALLONS = [10, 20, 29, 40] as const;

export { MAX_SPECIES, parseTankGallons };

export function getSpecies(slug: string, list: SpeciesProfile[] = catalog): SpeciesProfile | undefined {
  return list.find((item) => item.slug === slug);
}

export interface ParsedSelection {
  slugs: string[];
  tank: number | null;
  /** Tokens from `f` that are not species in this catalog. */
  unknown: string[];
  /** Known species past the checker cap. They are not selected. */
  overflow: string[];
  /** True when `tank` was present but not a gallon count this checker accepts. */
  tankInvalid: boolean;
}

/** Short label for a slug that is not in the catalog. Unsafe characters are stripped. */
export function labelUnknownSlug(slug: string): string {
  const cleaned = slug
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
  return cleaned || "unreadable name";
}

export function selectionNotes(parsed: ParsedSelection): string[] {
  const notes: string[] = [];
  if (parsed.unknown.length > 0) {
    const names = parsed.unknown.map((slug) => labelUnknownSlug(slug)).join(", ");
    notes.push(`Some names in this link are not in the list and were left out: ${names}.`);
  }
  if (parsed.overflow.length > 0) {
    notes.push(`A link keeps the first ${MAX_SPECIES} species. Extra names were left out.`);
  }
  if (parsed.tankInvalid) {
    notes.push("The gallon size in this link could not be used, so tank size was left unset.");
  }
  return notes;
}

export function parseQuery(search: string, list: SpeciesProfile[] = catalog): ParsedSelection {
  const params = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  const known = new Set(list.map((item) => item.slug));
  const slugs: string[] = [];
  const unknown: string[] = [];
  const overflow: string[] = [];
  for (const raw of (params.get("f") ?? "").split(",")) {
    const slug = raw.trim().toLowerCase().slice(0, 80);
    if (!slug || slugs.includes(slug) || unknown.includes(slug) || overflow.includes(slug)) continue;
    if (!known.has(slug)) {
      unknown.push(slug);
      continue;
    }
    if (slugs.length >= MAX_SPECIES) {
      overflow.push(slug);
      continue;
    }
    slugs.push(slug);
  }
  const gallons = parseTankGallons(params.get("tank"));
  return { slugs, tank: gallons.tank, unknown, overflow, tankInvalid: gallons.invalid };
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

function findOverride(a: SpeciesProfile, b: SpeciesProfile): PairOverride | null {
  const fromA = [...a.incompatibleWith, ...a.cautionWith].find((item) => item.slug === b.slug);
  const fromB = [...b.incompatibleWith, ...b.cautionWith].find((item) => item.slug === a.slug);
  if (fromA && fromB) {
    return fromA.verdict === "incompatible" ? fromA : fromB.verdict === "incompatible" ? fromB : fromA;
  }
  return fromA ?? fromB ?? null;
}

export function animalKind(animal: SpeciesProfile): AnimalKind {
  return animal.kind ?? "fish";
}

function habitatOf(animal: SpeciesProfile): Habitat {
  return animal.habitat ?? "freshwater";
}

/** A snail at or under this length is scored with the same shrimp-predation rule as cherry shrimp. */
export const SMALL_SNAIL_MM = 40;

function chemistry(a: SpeciesProfile, b: SpeciesProfile): { reasons: Reason[]; hardnessSkipped: boolean } {
  const reasons: Reason[] = [];
  if (!a.tempF || !b.tempF) {
    const missing = [a, b].filter((item) => !item.tempF).map((item) => item.commonName);
    reasons.push({
      severity: "note",
      code: "temp-unknown",
      text: `Temperature was not compared. No sourced range is on file for ${missing.join(" and ")}.`,
    });
  }
  const temp = a.tempF && b.tempF ? intersect(a.tempF, b.tempF) : null;
  if (a.tempF && b.tempF && !temp) {
    reasons.push({
      severity: "incompatible",
      code: "temp",
      text: `Temperature does not overlap. ${a.commonName} is listed at ${formatRange(a.tempF, "°F")} and ${b.commonName} at ${formatRange(b.tempF, "°F")}.`,
    });
  } else if (temp && rangeSpan(temp) < TEMP_CAUTION_BELOW_F) {
    reasons.push({
      severity: "caution",
      code: "temp-edge",
      text: `Temperature only overlaps at ${formatRange(temp, "°F")}, a window under ${TEMP_CAUTION_BELOW_F}°F. Both animals would be held at the edge of a published range.`,
    });
  }

  if (!a.pH || !b.pH) {
    const missing = [a, b].filter((item) => !item.pH).map((item) => item.commonName);
    reasons.push({
      severity: "note",
      code: "ph-unknown",
      text: `pH was not compared. No sourced range is on file for ${missing.join(" and ")}.`,
    });
  }
  const pH = a.pH && b.pH ? intersect(a.pH, b.pH) : null;
  if (a.pH && b.pH && !pH) {
    reasons.push({
      severity: "incompatible",
      code: "ph",
      text: `pH does not overlap. ${a.commonName} is listed at ${formatRange(a.pH, "pH")} and ${b.commonName} at ${formatRange(b.pH, "pH")}.`,
    });
  } else if (pH && rangeSpan(pH) < PH_CAUTION_BELOW) {
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

function behavior(a: SpeciesProfile, b: SpeciesProfile): Reason[] {
  const override = findOverride(a, b);
  if (override) {
    return [{ severity: override.verdict, code: "override", text: `${override.summary} ${override.detail}` }];
  }

  const reasons: Reason[] = [];
  const shrimp = [a, b].find((item) => item.shrimpRisk === "not-applicable");
  const hunter = shrimp ? (shrimp === a ? b : a) : null;

  const predator = [a, b].find((item) => item.eatsSmallerFish);
  const prey = predator ? (predator === a ? b : a) : null;
  if (
    predator &&
    prey &&
    animalKind(prey) === "fish" &&
    prey.adultSizeMm * 2 <= predator.adultSizeMm
  ) {
    reasons.push({
      severity: "incompatible",
      code: "small-fish",
      text: `${predator.commonName} is described as a predator of much smaller fish. ${prey.commonName} at ${prey.adultSizeIn} in is half that length or less, so it is food-sized. Extra gallons do not change the size difference. ${predator.careLevelNote}`,
    });
  }

  if (hunter && shrimp && hunter.shrimpRisk === "adults") {
    reasons.push({
      severity: "incompatible",
      code: "predation",
      text: `${hunter.commonName} is scored as a predator of adult shrimp. ${shrimp.commonName} is a shrimp, so it is food. ${hunter.shrimpRiskNote}`,
    });
  } else if (hunter && shrimp && hunter.shrimpRisk === "juveniles") {
    reasons.push({
      severity: "caution",
      code: "shrimplets",
      text: `${hunter.commonName} is not scored as a hunter of adult shrimp, but juveniles are at risk. ${shrimp.commonName} is the shrimp in this pair. ${hunter.shrimpRiskNote}`,
    });
  }

  const smallSnail = [a, b].find((item) => animalKind(item) === "snail" && item.adultSizeMm <= SMALL_SNAIL_MM);
  const snailHunter = smallSnail ? (smallSnail === a ? b : a) : null;
  if (snailHunter && smallSnail && animalKind(snailHunter) !== "snail" && snailHunter.shrimpRisk === "adults") {
    reasons.push({
      severity: "incompatible",
      code: "snail-predation",
      text: `${snailHunter.commonName} is scored as a predator of adult shrimp. ${smallSnail.commonName} is a snail at ${smallSnail.adultSizeIn} in, small enough to be treated the same way. ${snailHunter.shrimpRiskNote}`,
    });
  } else if (snailHunter && smallSnail && animalKind(snailHunter) !== "snail" && snailHunter.shrimpRisk === "juveniles") {
    reasons.push({
      severity: "caution",
      code: "snail-juveniles",
      text: `${snailHunter.commonName} is not scored as a hunter of adult shrimp, but small animals are at risk. ${smallSnail.commonName} is a small snail. ${snailHunter.shrimpRiskNote}`,
    });
  }

  const snailEater = [a, b].find((item) => item.eatsSnails);
  const snailPrey = snailEater ? (snailEater === a ? b : a) : null;
  if (snailEater && snailPrey && animalKind(snailPrey) === "snail" && snailPrey.slug !== snailEater.slug) {
    reasons.push({
      severity: "incompatible",
      code: "eats-snails",
      text: `${snailEater.commonName} eats other snails. ${snailPrey.commonName} is a snail. Extra gallons do not remove the snail.`,
    });
  }

  const clawed = [a, b].find((item) => item.eatsTankmates);
  const clawPrey = clawed ? (clawed === a ? b : a) : null;
  if (clawed && clawPrey && !clawPrey.eatsTankmates) {
    const preyKind = animalKind(clawPrey);
    const food = preyKind === "shrimp" || preyKind === "snail" || preyKind === "other-invertebrate" || (preyKind === "fish" && clawPrey.adultSizeMm <= clawed.adultSizeMm);
    if (food) {
      reasons.push({
        severity: "incompatible",
        code: "crayfish-prey",
        text: `${clawed.commonName} is scored as a predator of fish, shrimp, and snails it can overpower. ${clawPrey.commonName} is in that group. Extra gallons do not change the claws.`,
      });
    } else if (preyKind === "fish") {
      reasons.push({
        severity: "caution",
        code: "crayfish-larger-fish",
        text: `${clawPrey.commonName} is longer than ${clawed.commonName}, so it is not scored as a meal. ${clawed.commonName} still has claws. Eggs, fins, and molting animals stay at risk.`,
      });
    }
  } else if (clawed && clawPrey && clawPrey.eatsTankmates && clawPrey.adultSizeMm * 2 <= clawed.adultSizeMm) {
    reasons.push({
      severity: "incompatible",
      code: "crayfish-prey",
      text: `${clawed.commonName} is much larger than ${clawPrey.commonName}. Both are clawed predators, and the smaller one is food-sized.`,
    });
  }

  const habitatA = habitatOf(a);
  const habitatB = habitatOf(b);
  if ((habitatA === "brackish") !== (habitatB === "brackish") && (habitatA === "brackish" || habitatB === "brackish")) {
    const salty = habitatA === "brackish" ? a : b;
    const fresh = salty === a ? b : a;
    reasons.push({
      severity: "incompatible",
      code: "salinity",
      text: `${salty.commonName} is listed for brackish water. ${fresh.commonName} is listed for freshwater. One tank cannot be both.`,
    });
  }
  if (habitatA === "semi-terrestrial" || habitatB === "semi-terrestrial") {
    if (habitatA !== habitatB) {
      const land = habitatA === "semi-terrestrial" ? a : b;
      const other = land === a ? b : a;
      reasons.push({
        severity: "caution",
        code: "land",
        text: `${land.commonName} uses land or leaves the water. ${other.commonName} is fully aquatic. A tank with no dry ground is a poor fit. This is not a claim that one eats the other.`,
      });
    }
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
      text: `${a.commonName} and ${b.commonName} both hold the surface and defend it. Two surface-territorial fish in the same top few inches is a territory fight, not a community. Extra gallons do not give either fish a second surface.`,
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
      text: `${slow.commonName} is slow and easily outcompeted. ${fast.commonName} is a vigorous swimmer. The slower fish loses food even when the temperature and pH overlap.`,
    });
  }

  const alreadyRefused = reasons.some((reason) => reason.severity === "incompatible");
  if (!alreadyRefused && (a.temperament === "semi-aggressive" || b.temperament === "semi-aggressive")) {
    const aggressor = a.temperament === "semi-aggressive" ? a : b;
    const other = aggressor === a ? b : a;
    reasons.push({
      severity: "caution",
      code: "temperament",
      text: `${aggressor.commonName} is not a straightforward community fish. ${aggressor.careLevelNote} ${other.commonName} does not add a second, more specific conflict, so this stays at Caution rather than Not compatible.`,
    });
  }

  return reasons;
}

function pairReport(a: SpeciesProfile, b: SpeciesProfile): PairReport {
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

export function tankFit(animal: SpeciesProfile, gallons: number): TankFit {
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

export function stockingInches(list: SpeciesProfile[]): { inches: number; incomplete: boolean } {
  let inches = 0;
  let incomplete = false;
  for (const animal of list) {
    const count = animal.minGroup ?? 1;
    if (animal.minGroup == null) incomplete = true;
    inches += animal.adultSizeIn * count;
  }
  return { inches: Math.round(inches * 10) / 10, incomplete };
}

function stockingNotes(list: SpeciesProfile[]): Reason[] {
  const notes: Reason[] = list
    .filter((animal) => animal.minGroup != null && animal.minGroup > 1)
    .map((animal) => ({
      severity: "note" as const,
      code: "group",
      text: `${animal.commonName}: ${animal.minGroupNote}`,
    }));
  if (list.some((animal) => animal.copperSensitive)) {
    const names = list.filter((animal) => animal.copperSensitive).map((animal) => animal.commonName);
    notes.push({
      severity: "note",
      code: "copper",
      text: `Copper medications kill ${names.join(", ")}. That is a treatment warning, not a verdict that the selected animals fight. A measured copper dose is on file only where a species page cites one.`,
    });
  }
  for (const animal of list) {
    if (animal.interbreedNote) {
      notes.push({ severity: "note", code: "interbreed", text: animal.interbreedNote });
    }
  }
  return notes;
}

export function checkSelection(slugs: string[], tankGallons: number | null, list: SpeciesProfile[] = catalog): CheckResult {
  const chosen = slugs
    .map((slug) => getSpecies(slug, list))
    .filter((item): item is SpeciesProfile => Boolean(item))
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
    tempF: intersectAll(chosen.flatMap((animal) => (animal.tempF ? [animal.tempF] : []))),
    pH: intersectAll(chosen.flatMap((animal) => (animal.pH ? [animal.pH] : []))),
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

export function sizeSignature(slug: string, gallons: number, list: SpeciesProfile[] = catalog): string {
  const focal = getSpecies(slug, list);
  if (!focal) return "";
  const fit = tankFit(focal, gallons).kind;
  const partners = list
    .filter((animal) => animal.slug !== slug)
    .map((animal) => `${animal.slug}:${checkSelection([slug, animal.slug], gallons, list).verdict}`)
    .join(",");
  return `${fit}|${partners}`;
}

const publishedSizeCache = new Map<string, number[]>();

/** Gallon pages are emitted only where the verdict list actually changes. */
export function publishedSizeGallons(slug: string, list: SpeciesProfile[] = catalog): number[] {
  if (list === catalog) {
    const cached = publishedSizeCache.get(slug);
    if (cached) return cached;
  }
  const signatures = CANDIDATE_GALLONS.map((gallons) => sizeSignature(slug, gallons, list));
  const published: number[] = [];
  if (!signatures.every((signature) => signature === signatures[0])) {
    let previous = "";
    CANDIDATE_GALLONS.forEach((gallons, index) => {
      if (signatures[index] !== previous) {
        published.push(gallons);
        previous = signatures[index];
      }
    });
  }
  if (list === catalog) publishedSizeCache.set(slug, published);
  return published;
}

export function sizesCoveredBy(slug: string, gallons: number, list: SpeciesProfile[] = catalog): number[] {
  const published = publishedSizeGallons(slug, list);
  const start = published.indexOf(gallons);
  if (start === -1) return [];
  const next = published[start + 1];
  return CANDIDATE_GALLONS.filter((candidate) => candidate >= gallons && (next == null || candidate < next));
}

export type SpeciesChipStatus = "neutral" | Verdict;

/**
 * Worst result for one selected fish: its own tank minimum, then each pairing
 * with the other selected fish. A compatible chip is not a stocking approval
 * for the whole group.
 */
export function speciesSelectionStatus(
  slug: string,
  slugs: string[],
  tankGallons: number | null,
  list: SpeciesProfile[] = catalog,
): SpeciesChipStatus {
  const animal = getSpecies(slug, list);
  if (!animal || !slugs.includes(slug)) return "neutral";
  const rank: Record<SpeciesChipStatus, number> = { neutral: 0, compatible: 1, caution: 2, incompatible: 3 };
  let worst: SpeciesChipStatus = "neutral";
  const raise = (status: SpeciesChipStatus) => {
    if (rank[status] > rank[worst]) worst = status;
  };
  if (tankGallons != null) {
    const fit = tankFit(animal, tankGallons);
    if (fit.reasons.some((reason) => reason.severity === "incompatible")) raise("incompatible");
    else if (fit.reasons.some((reason) => reason.severity === "caution")) raise("caution");
  }
  const others = slugs.filter((item) => item !== slug && getSpecies(item, list));
  if (others.length === 0) return worst;
  if (worst === "neutral") worst = "compatible";
  for (const other of others) {
    const partner = getSpecies(other, list);
    if (!partner) continue;
    raise(pairReport(animal, partner).verdict);
  }
  return worst;
}
