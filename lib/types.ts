export type Verdict = "compatible" | "caution" | "incompatible";

export type WaterLayer = "top" | "mid" | "bottom" | "all";

/** How much current the source says the animal wants. */
export type Flow = "still" | "gentle" | "current";

export type CareLevel = "beginner" | "easy" | "moderate" | "unrated";

/**
 * What a fish is likely to do to cherry shrimp, based on the diet the
 * sources actually describe. "adults" means an adult shrimp is a meal.
 * "juveniles" means newly hatched shrimp are food and adults are not
 * clearly so. "unlikely" means the diet given is not a hunting diet.
 */
export type ShrimpRisk = "adults" | "juveniles" | "unlikely" | "not-applicable";

export interface Range {
  min: number;
  max: number;
}

export interface Source {
  /** Short name used in the page, e.g. "Seriously Fish". */
  label: string;
  title: string;
  url: string;
  accessed: string;
  /** Which fields on this record the source supports. */
  usedFor: string;
}

export interface Uncertainty {
  field: string;
  note: string;
}

export interface PairOverride {
  slug: string;
  verdict: "caution" | "incompatible";
  summary: string;
  detail: string;
}

export interface TankMinimum {
  gallons: number | null;
  liters: number | null;
  /** Base length when the source states centimetres. */
  lengthCm: number | null;
  /** Base length when the source states inches. Used instead of converting lengthCm. */
  lengthIn: number | null;
  /** What the source actually wrote, kept so the page can quote it. */
  stated: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Species {
  slug: string;
  commonName: string;
  scientificName: string;
  aliases: string[];
  family: string;
  origin: string;
  tempC: Range;
  /** Display and comparison range. Fish use the source's own Fahrenheit figures. */
  tempF: Range;
  /** True when tempF was converted on this site rather than printed by the source. */
  tempFConverted: boolean;
  pH: Range;
  hardnessDGH: Range | null;
  /** Standard length unless adultSizeNote says otherwise. */
  adultSizeMm: number;
  adultSizeIn: number;
  adultSizeNote: string;
  minTank: TankMinimum;
  temperament: "peaceful" | "semi-aggressive";
  finNipper: boolean;
  /** Typical animal sold, not every strain. */
  longFinned: boolean;
  longFinnedNote: string;
  /** Damages long fins because it reads them as a rival. Not the same as a fin-nipping tetra. */
  attacksLongFins: boolean;
  schooling: boolean;
  /** Null when no source gives a number. Never a guess. */
  minGroup: number | null;
  minGroupNote: string;
  waterLayer: WaterLayer;
  flow: Flow;
  flowNote: string;
  diet: string;
  shrimpRisk: ShrimpRisk;
  shrimpRiskNote: string;
  slowMoving: boolean;
  vigorous: boolean;
  /** Holds the surface and should not share it with another surface-territorial species. */
  surfaceTerritorial: boolean;
  livebearer: boolean;
  careLevel: CareLevel;
  careLevelNote: string;
  /** Behaviour overrides. They beat generic behaviour rules. They do not waive water chemistry. */
  incompatibleWith: PairOverride[];
  cautionWith: PairOverride[];
  /** Positive mentions. A note only. They never raise a Caution to Compatible. */
  endorsedWith: { slug: string; note: string }[];
  sources: Source[];
  uncertainties: Uncertainty[];
  /** Set when a second independent source could not be found, and why. */
  sourceGap: string | null;
  lastVerified: string;
  lede: string;
  husbandry: string[];
  tankMateIntro: string;
  faqs: Faq[];
}

export interface Reason {
  severity: "incompatible" | "caution" | "note";
  code: string;
  text: string;
}

export interface PairReport {
  a: string;
  b: string;
  verdict: Verdict;
  reasons: Reason[];
}

export interface CheckResult {
  slugs: string[];
  tankGallons: number | null;
  verdict: Verdict | "incomplete";
  headline: string;
  pairs: PairReport[];
  tankReasons: Reason[];
  stockingNotes: Reason[];
  window: {
    tempF: Range | null;
    pH: Range | null;
    hardnessDGH: Range | null;
    hardnessSkipped: string[];
  };
}
