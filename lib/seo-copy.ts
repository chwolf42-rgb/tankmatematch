/**
 * Search titles, descriptions, and FAQs.
 * Pair counts and answers come from checkSelection. This file adds no rules.
 */
import { species } from "../data/species";
import {
  checkSelection,
  HARDNESS_CAUTION_BELOW,
  MAX_SPECIES,
  PH_CAUTION_BELOW,
  tankFit,
  TEMP_CAUTION_BELOW_F,
} from "./checker";
import { formatNumber, formatRange } from "./format";
import type { ShareImage } from "./seo";
import type { CheckResult, Faq, Species, Verdict } from "./types";

const TITLE_MAX = 60;
/** A count in the title only when there are enough fully Compatible fish to name. */
const COMPATIBLE_TITLE_AT = 3;
const DESC_MIN = 140;
const DESC_MAX = 160;

/** Original ten, in catalog order. Used only to prefer familiar pairings in copy. */
const CORE_ORDER = [
  "betta",
  "neon-tetra",
  "guppy",
  "bronze-corydoras",
  "cherry-shrimp",
  "platy",
  "zebra-danio",
  "harlequin-rasbora",
  "bristlenose-pleco",
  "honey-gourami",
];

const catalogIndex = new Map(species.map((animal, index) => [animal.slug, index]));

interface MateRow {
  animal: Species;
  verdict: Verdict;
}

const mateCache = new Map<string, MateRow[]>();

function normalize(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

/** Fish are the records with no invertebrate kind. Shrimp, snails, crayfish, and clams are not fish. */
export function isFish(animal: Species): boolean {
  return (animal.kind ?? "fish") === "fish";
}

function shrimpSpecies(): Species[] {
  return species.filter((animal) => animal.shrimpRisk === "not-applicable");
}

function article(name: string): "a" | "an" {
  const lower = name.toLowerCase();
  if (lower.startsWith("one")) return "a";
  if (/^[aeiou]/.test(lower) || lower.startsWith("x-")) return "an";
  return "a";
}

function withArticle(name: string): string {
  return `${article(name)} ${name.toLowerCase()}`;
}

function verdictLabel(verdict: Verdict): string {
  if (verdict === "compatible") return "Compatible";
  if (verdict === "works-if") return "Works if";
  if (verdict === "caution") return "Caution";
  return "Not compatible";
}

function joinNames(names: string[]): string {
  if (names.length <= 1) return names[0] ?? "";
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}

function pickTitle(candidates: string[]): string {
  const cleaned = candidates.map(normalize);
  return cleaned.find((item) => item.length <= TITLE_MAX) ?? cleaned[cleaned.length - 1] ?? "";
}

function trimWords(text: string, max: number): string {
  if (text.length <= max) return text;
  const slice = text.slice(0, max);
  const space = slice.lastIndexOf(" ");
  let base = (space >= DESC_MIN ? slice.slice(0, space) : slice).replace(/[\s,;:]+$/, "").replace(/\.+$/, "");
  if (!base.endsWith(".")) base = `${base}.`;
  if (base.length > max) base = `${base.slice(0, max - 1).replace(/[\s,;:.]+$/, "")}.`;
  return base;
}

/** Keep whole sentences inside the meta description limit, then add real fillers if short. */
function fitDescription(sentences: string[], fillers: string[] = []): string {
  const clean = sentences.map(normalize).filter(Boolean);
  const chosen: string[] = [];
  for (const sentence of clean) {
    const next = [...chosen, sentence].join(" ");
    if (next.length <= DESC_MAX) chosen.push(sentence);
    else break;
  }
  let text = chosen.join(" ");
  if (!text) text = trimWords(clean[0] ?? "", DESC_MAX);
  const extras = [...fillers, "Sources are named.", "Rules are cited."];
  for (const filler of extras) {
    if (text.length >= DESC_MIN) break;
    const piece = normalize(filler);
    if (!piece) continue;
    const next = `${text} ${piece}`;
    if (next.length <= DESC_MAX) text = next;
  }
  if (text.length > DESC_MAX) text = trimWords(text, DESC_MAX);
  return text;
}

function pairResult(focalSlug: string, otherSlug: string, gallons: number | null): CheckResult {
  const result = checkSelection([focalSlug, otherSlug], gallons);
  if (result.verdict === "incomplete" || result.pairs.length === 0) {
    throw new Error(`No pair result for ${focalSlug} and ${otherSlug}`);
  }
  return result;
}

export function mateRows(slug: string, gallons: number | null): MateRow[] {
  const key = `${slug}|${gallons ?? "x"}`;
  const hit = mateCache.get(key);
  if (hit) return hit;
  const rows: MateRow[] = [];
  for (const animal of species) {
    if (animal.slug === slug) continue;
    const verdict = pairResult(slug, animal.slug, gallons).verdict as Verdict;
    rows.push({ animal, verdict });
  }
  mateCache.set(key, rows);
  return rows;
}

function hasPairNote(focal: Species, other: Species, field: "incompatibleWith" | "cautionWith" | "endorsedWith"): boolean {
  const fromFocal = focal[field].some((item) => item.slug === other.slug);
  const fromOther = other[field].some((item) => item.slug === focal.slug);
  return fromFocal || fromOther;
}

function pairRank(focal: Species, other: Species): number {
  if (hasPairNote(focal, other, "incompatibleWith") || hasPairNote(focal, other, "cautionWith")) return 0;
  if (hasPairNote(focal, other, "endorsedWith")) return 1;
  const core = CORE_ORDER.indexOf(other.slug);
  if (core !== -1) return 2 + core / 100;
  return 3 + (catalogIndex.get(other.slug) ?? 0) / 10000;
}

function listRank(focal: Species, other: Species): number {
  if (hasPairNote(focal, other, "endorsedWith")) return 0;
  const core = CORE_ORDER.indexOf(other.slug);
  if (core !== -1) return 1 + core / 100;
  return 2 + (catalogIndex.get(other.slug) ?? 0) / 10000;
}

function rankedNames(focal: Species, rows: MateRow[], limit: number): string[] {
  return [...rows]
    .sort((a, b) => listRank(focal, a.animal) - listRank(focal, b.animal))
    .slice(0, limit)
    .map((row) => row.animal.commonName);
}

/** Prefer 2–3 names, but keep the tank sentence inside the description limit. */
function leadWithNames(prefix: string, names: string[], tank: string): string {
  const available = names.length > 0 ? names : [];
  for (let count = Math.min(3, available.length); count >= 1; count--) {
    const lead = `${prefix}${joinNames(available.slice(0, count))}.`;
    if (`${lead} ${tank}`.length <= DESC_MAX) return lead;
  }
  return `${prefix}${available[0] ?? "none"}.`;
}

function minTankPhrase(animal: Species): string {
  if (animal.minTank.gallons != null) return `Minimum tank: ${animal.minTank.gallons} US gallons.`;
  if (animal.minTank.lengthIn != null) return `Minimum base: ${animal.minTank.lengthIn} inches.`;
  if (animal.minTank.lengthCm != null) return `Minimum base: ${animal.minTank.lengthCm} cm.`;
  return "No gallon or length minimum is published.";
}

function countVerdict(rows: MateRow[], verdict: Verdict): number {
  return rows.filter((row) => row.verdict === verdict).length;
}

export function compatibleFishCount(slug: string): number {
  return mateRows(slug, null).filter((row) => isFish(row.animal) && row.verdict === "compatible").length;
}

function tempPhrase(animal: Species): string {
  return animal.tempF ? formatRange(animal.tempF, "°F") : "temperature not stated";
}

function phPhrase(animal: Species): string {
  return animal.pH ? `pH ${formatNumber(animal.pH.min)}–${formatNumber(animal.pH.max)}` : "pH not stated";
}

export function speciesFactLine(animal: Species): string {
  const temp = tempPhrase(animal).replace(" °F", "°F");
  const ph = phPhrase(animal);
  const size = `${formatNumber(animal.adultSizeIn)} in`;
  let tank = "no published tank min";
  if (animal.minTank.gallons != null) tank = `${animal.minTank.gallons} gal min`;
  else if (animal.minTank.lengthIn != null) tank = `${animal.minTank.lengthIn} in base`;
  else if (animal.minTank.lengthCm != null) tank = `${animal.minTank.lengthCm} cm base`;
  return `${temp} · ${ph} · ${size} · ${tank}`;
}

export function speciesOgImage(animal: Species): ShareImage {
  return {
    url: `/og/${animal.slug}.png`,
    width: 1200,
    height: 630,
    alt: `${animal.commonName}. ${speciesFactLine(animal)}`,
  };
}

export function homePageCopy(): { title: string; description: string } {
  const title = "Fish Compatibility Checker: Cited Numbers Only";
  const description = fitDescription(
    [
      `Every temperature, pH, hardness, and adult size is tied to a named source. Blank fields were not printed by that source. Compare ${species.length} freshwater animals.`,
    ],
    ["The checker does not invent a number."],
  );
  return { title, description };
}

function maxSpeciesWords(): string {
  return MAX_SPECIES === 6 ? "two to six" : `2 to ${MAX_SPECIES}`;
}

export function checkerPageCopy(): { title: string; description: string } {
  const title = "Fish Compatibility Checker: Compare Tank Mates";
  const description = fitDescription(
    [
      `Compare ${maxSpeciesWords()} freshwater species for temperament, adult size, temperature, pH, hardness, shrimp predation, and tank size.`,
      `The list has ${species.length} sourced species, and every failed rule is named.`,
    ],
  );
  return { title, description };
}

export function speciesPageCopy(animal: Species): { title: string; description: string } {
  const title = pickTitle([
    `${animal.commonName} Care & Tank Mates: Size, Temp, pH`,
    `${animal.commonName} Care & Tank Mates`,
    `${animal.commonName} Care: Size, Temp, pH`,
    `${animal.commonName} Care`,
  ]);
  const facts = `${formatNumber(animal.adultSizeIn)} in, ${tempPhrase(animal)}, ${phPhrase(animal)}`;
  const hardness = animal.hardnessDGH ? `, ${formatRange(animal.hardnessDGH, "dGH")}` : "";
  const tank = minTankPhrase(animal);
  const withSci = `${animal.commonName} (${animal.scientificName}): ${facts}${hardness}. ${tank}`;
  const noSci = `${animal.commonName} care: ${facts}${hardness}. ${tank}`;
  const primary = withSci.length <= DESC_MAX ? withSci : noSci;
  const description = fitDescription([primary], [
    "Tank mates and cited sources are on this page.",
    `Verified ${animal.lastVerified}.`,
  ]);
  return { title, description };
}

export function tankMatePageCopy(animal: Species): { title: string; description: string } {
  const fish = mateRows(animal.slug, null).filter((row) => isFish(row.animal));
  const compatible = fish.filter((row) => row.verdict === "compatible");
  const worksIf = fish.filter((row) => row.verdict === "works-if");
  const caution = fish.filter((row) => row.verdict === "caution");
  const incompatible = fish.filter((row) => row.verdict === "incompatible");
  const n = compatible.length;
  const name = animal.commonName;
  const title =
    n >= COMPATIBLE_TITLE_AT
      ? pickTitle([
          `Best ${name} Tank Mates: ${n} Compatible Fish`,
          `${name} Tank Mates: ${n} Compatible Fish`,
          `Best ${name}: ${n} Compatible Fish`,
          `${name}: ${n} Compatible Fish`,
        ])
      : worksIf.length > 0
        ? pickTitle([
            `${name} Tank Mates: ${worksIf.length} Work If Set Up`,
            `${name}: ${worksIf.length} Work If Set Up`,
            `${name} Tank Mates`,
          ])
        : pickTitle([
            `${name} Tank Mates: Safe Picks & What to Avoid`,
            `${name}: Safe Picks & What to Avoid`,
            `${name} Tank Mates`,
          ]);
  const tank = minTankPhrase(animal);
  const subject = withArticle(animal.commonName);
  let lead: string;
  if (compatible.length === 0 && worksIf.length > 0) {
    const names = rankedNames(animal, worksIf, 3);
    lead = leadWithNames(`No fish is Compatible with ${subject} with no conditions. ${worksIf.length} can work if the cited setup is met, including `, names, tank);
  } else if (compatible.length > 0) {
    const noun = n === 1 ? "1 compatible fish" : `${n} compatible fish`;
    const names = rankedNames(animal, compatible, 3);
    lead = leadWithNames(`${animal.commonName} tank mates: ${noun}, including `, names, tank);
  } else if (caution.length > 0) {
    const names = rankedNames(animal, caution, 3);
    lead = leadWithNames(`No fish in this set is Compatible with ${subject}. Caution includes `, names, tank);
  } else if (incompatible.length > 0) {
    const names = rankedNames(animal, incompatible, 3);
    lead = leadWithNames(`No fish in this set is Compatible with ${subject}. Not compatible fish include `, names, tank);
  } else {
    lead = `${animal.commonName} has no other fish in this set to score.`;
  }
  const description = fitDescription(
    [lead, tank],
    [`${tempPhrase(animal)}.`, `${fish.length} other fish are scored.`],
  );
  return { title, description };
}

/** Visible answer on a tank-mate page when Compatible is empty and Works if is not. */
export function tankMateAnswer(animal: Species): string | null {
  const fish = mateRows(animal.slug, null).filter((row) => isFish(row.animal));
  const compatible = fish.filter((row) => row.verdict === "compatible");
  const worksIf = fish.filter((row) => row.verdict === "works-if");
  if (compatible.length > 0 || worksIf.length === 0) return null;
  const names = rankedNames(animal, worksIf, 5);
  const reason = pairResult(animal.slug, worksIf[0].animal.slug, null).pairs[0]?.reasons.find((item) => item.code === "works-if");
  const conditions = reason ? conciseReason(reason.text) : "The species page names the conditions.";
  return `${animal.commonName} tank mates: no fish in this set is Compatible with no conditions. ${worksIf.length} can work if the cited setup is met, including ${joinNames(names)}. ${conditions}`;
}

function tankBlockSentence(animal: Species, gallons: number): string {
  const fit = tankFit(animal, gallons);
  const volume = fit.reasons.some((reason) => reason.code === "tank-volume");
  const length = fit.reasons.some((reason) => reason.code === "tank-length");
  const name = animal.commonName;
  if (volume && length && animal.minTank.gallons != null) {
    return `A ${gallons}-gallon tank is under the ${animal.minTank.gallons}-gallon and base-length minimum for ${name}.`;
  }
  if (volume && animal.minTank.gallons != null) {
    return `A ${gallons}-gallon tank is under the ${animal.minTank.gallons}-gallon minimum published for ${name}.`;
  }
  if (length) {
    const lengthLabel = animal.minTank.lengthIn != null ? `${animal.minTank.lengthIn} inches` : `${animal.minTank.lengthCm} cm`;
    return `A common ${gallons}-gallon tank is shorter than the ${lengthLabel} base published for ${name}.`;
  }
  return `${name} is Not compatible with a ${gallons}-gallon tank on the published minimum.`;
}

export function tankSizePageCopy(animal: Species, gallons: number): { title: string; description: string } {
  const title = pickTitle([
    `${animal.commonName} Tank Mates for a ${gallons}-Gallon Tank`,
    `${animal.commonName}: ${gallons}-Gallon Tank Mates`,
    `${gallons}-Gallon ${animal.commonName} Tank Mates`,
  ]);
  const rows = mateRows(animal.slug, gallons);
  const blocked = tankFit(animal, gallons).reasons.some((reason) => reason.severity === "incompatible");
  const compatible = countVerdict(rows, "compatible");
  const caution = countVerdict(rows, "caution");
  const incompatible = countVerdict(rows, "incompatible");
  let sentences: string[];
  if (blocked) {
    const before = countVerdict(mateRows(animal.slug, null), "compatible");
    sentences = [
      tankBlockSentence(animal, gallons),
      `All ${rows.length} others are Not compatible.`,
      before === 0 ? "Before size, no species is Compatible." : `Before size, ${before} species are Compatible.`,
    ];
  } else {
    const compatibleLabel = compatible === 0 ? "no Compatible mates" : `${compatible} compatible`;
    sentences = [
      `${animal.commonName} tank mates for a ${gallons}-gallon tank: ${compatibleLabel}, ${caution} caution, and ${incompatible} not compatible.`,
      minTankPhrase(animal),
    ];
  }
  const description = fitDescription(sentences, [`${tempPhrase(animal)}.`]);
  return { title, description };
}

function conciseReason(text: string): string {
  const parts = normalize(text).split(/(?<=\.)\s+/).filter(Boolean);
  let out = "";
  for (const part of parts) {
    const next = out ? `${out} ${part}` : part;
    if (out && next.length > 240) break;
    out = next;
    if (out.length >= 140) break;
  }
  return out;
}

function pairAnswer(focal: Species, other: Species): string {
  const result = pairResult(focal.slug, other.slug, null);
  const verdict = result.verdict as Verdict;
  const lead = `${focal.commonName} and ${other.commonName} are ${verdictLabel(verdict)} before tank size is applied.`;
  if (verdict === "compatible") {
    return `${lead} Published temperature, pH, and hardness overlap, and no behaviour rule fires.`;
  }
  const reason = result.pairs[0]?.reasons.find((item) => item.severity === verdict);
  return reason ? `${lead} ${conciseReason(reason.text)}` : lead;
}

function shrimpAnswer(focal: Species, shrimp: Species[]): string {
  const target = shrimp[0];
  if (!target) return "";
  const result = pairResult(focal.slug, target.slug, null);
  const verdict = result.verdict as Verdict;
  const only = shrimp.length === 1 ? `${target.commonName} is the only shrimp in this set. ` : "";
  const lead = `${only}${focal.commonName} and ${target.commonName} are ${verdictLabel(verdict)}.`;
  if (verdict === "compatible") {
    return `${lead} No temperature, pH, hardness, or behaviour rule fails.`;
  }
  const reason = result.pairs[0]?.reasons.find((item) => item.severity === verdict);
  return reason ? `${lead} ${conciseReason(reason.text)}` : lead;
}

function choosePartner(focal: Species, exclude: Set<string>, preferDifferentFrom?: Verdict): Species | null {
  let rows = mateRows(focal.slug, null).filter((row) => isFish(row.animal) && !exclude.has(row.animal.slug));
  if (preferDifferentFrom) {
    const different = rows.filter((row) => row.verdict !== preferDifferentFrom);
    if (different.length > 0) rows = different;
  }
  rows.sort((a, b) => pairRank(focal, a.animal) - pairRank(focal, b.animal));
  return rows[0]?.animal ?? null;
}

function neverAnswer(focal: Species, total: number, shown: MateRow[]): string {
  const names = joinNames(shown.slice(0, 3).map((row) => row.animal.commonName));
  const lead =
    total === 1
      ? `1 fish in this set is Not compatible with ${withArticle(focal.commonName)} before tank size is applied: ${names}.`
      : `${total} fish in this set are Not compatible with ${withArticle(focal.commonName)} before tank size is applied, including ${names}.`;
  const first = shown[0];
  if (!first) return lead;
  const result = pairResult(focal.slug, first.animal.slug, null);
  const reason = result.pairs[0]?.reasons.find((item) => item.severity === "incompatible");
  return reason ? `${lead} ${conciseReason(reason.text)}` : lead;
}

function canQuestion(focal: Species, other: Species): string {
  return `Can ${withArticle(focal.commonName)} live with ${withArticle(other.commonName)}?`;
}

export function tankMateFaqs(animal: Species): Faq[] {
  const faqs: Faq[] = [];
  const used = new Set<string>();
  const shrimp = shrimpSpecies();
  if (isFish(animal)) {
    for (const item of shrimp) used.add(item.slug);
  }

  const first = choosePartner(animal, used);
  if (first) {
    faqs.push({ question: canQuestion(animal, first), answer: pairAnswer(animal, first) });
    used.add(first.slug);
  }

  faqs.push({
    question: `What size tank does ${withArticle(animal.commonName)} need?`,
    answer: animal.minTank.stated,
  });

  if (isFish(animal) && shrimp.length > 0) {
    faqs.push({
      question: `Can ${withArticle(animal.commonName)} live with shrimp?`,
      answer: shrimpAnswer(animal, shrimp),
    });
  }

  const incompatibleFish = mateRows(animal.slug, null)
    .filter((row) => isFish(row.animal) && row.verdict === "incompatible")
    .sort((a, b) => pairRank(animal, a.animal) - pairRank(animal, b.animal));
  if (incompatibleFish.length > 0) {
    const fresh = incompatibleFish.filter((row) => !used.has(row.animal.slug));
    const shown = fresh.length > 0 ? fresh : incompatibleFish;
    faqs.push({
      question: `What fish should never go with ${withArticle(animal.commonName)}?`,
      answer: neverAnswer(animal, incompatibleFish.length, shown),
    });
    for (const row of shown.slice(0, 3)) used.add(row.animal.slug);
  }

  const firstVerdict = first ? (pairResult(animal.slug, first.slug, null).verdict as Verdict) : undefined;
  if (faqs.length < 5) {
    const second = choosePartner(animal, used, firstVerdict);
    if (second) {
      faqs.push({ question: canQuestion(animal, second), answer: pairAnswer(animal, second) });
      used.add(second.slug);
    }
  }
  if (faqs.length < 3) {
    const extra = choosePartner(animal, used);
    if (extra) faqs.push({ question: canQuestion(animal, extra), answer: pairAnswer(animal, extra) });
  }

  return faqs.slice(0, 5);
}

export function checkerIntroParagraphs(): string[] {
  return [
    `The checker compares ${maxSpeciesWords()} species from this site. Tank size is optional. It intersects published temperature, pH, and hardness. If a record has no hardness range, hardness is skipped. No overlap is Not compatible. An overlap narrower than ${TEMP_CAUTION_BELOW_F}°F, ${PH_CAUTION_BELOW} pH, or ${HARDNESS_CAUTION_BELOW} dGH is Caution.`,
    "For fish, those ranges, adult size, and the minimum tank come from Seriously Fish. FishBase is the second source. When they disagree, the checker keeps the Seriously Fish figure and the species page names both. Bristlenose plecos use PlanetCatfish. Cherry shrimp use the papers named on that page.",
    "Temperament is separate. A semi-aggressive fish is Caution when no sharper rule applies. Adult-shrimp predators are Not compatible with shrimp; juvenile risk alone is Caution. Snails at or under 40 mm use that rule. Assassin snails are Not compatible with other snails. Crayfish and large prawns are Not compatible with animals they can overpower. A snail that needs dry ground is Caution with a fully aquatic animal. Copper medicine is a warning, not a fight. A tank under a published minimum is Not compatible. Then the adult-inch total can turn Compatible into Caution. Extra gallons do not remove a fin or surface fight.",
  ];
}

export function checkerFaqs(): Faq[] {
  return [
    {
      question: "How many species can the checker compare?",
      answer: `${MAX_SPECIES === 6 ? "Two to six" : `Two to ${MAX_SPECIES}`}. The species and the optional gallon size are stored in the page address, so a result can be shared as a link. Names that are not in the list are left out.`,
    },
    {
      question: "Where do the temperature and pH numbers come from?",
      answer:
        "Fish ranges come from Seriously Fish, with FishBase as the second source. The checker uses the Seriously Fish figure when they disagree. Bristlenose plecos use PlanetCatfish, and cherry shrimp use the papers cited on the cherry shrimp page.",
    },
    {
      question: "How does tank size change a result?",
      answer:
        "A tank under a published gallon minimum, or shorter than the published base, is Not compatible. If only the long shape of a standard tank is long enough, the result is Caution. After the tank fits, an adult-inch total above the gallon count changes Compatible to Caution. That total is a stocking warning, not a rule.",
    },
    {
      question: "Does the checker score shrimp and snails?",
      answer:
        "Shrimp use the adult-shrimp and shrimplet rules. A snail at or under 40 mm is scored the same way. Assassin snails are Not compatible with other snails. Crayfish and the giant river prawn are Not compatible with animals they can overpower. Copper medicine is a warning on the result, not a fight between two animals.",
    },
  ];
}
