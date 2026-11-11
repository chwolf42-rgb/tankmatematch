import { species } from "../data/species";
import { pairingPages, type PairingPage } from "../data/pairing-pages";
import { checkSelection } from "./checker";
import { fitDescription } from "./seo-copy";
import type { Species, Verdict } from "./types";

const labels: Record<Verdict, string> = {
  compatible: "Compatible",
  "works-if": "Works if",
  caution: "Caution",
  incompatible: "Not compatible",
};

export function pairingBySlug(slug: string): PairingPage | undefined {
  return pairingPages.find((page) => page.slug === slug);
}

export function pairingAnimals(page: PairingPage): { a: Species; b: Species } | null {
  const a = species.find((animal) => animal.slug === page.a);
  const b = species.find((animal) => animal.slug === page.b);
  if (!a || !b) return null;
  return { a, b };
}

export function pairingVerdict(page: PairingPage): { verdict: Verdict; reason: string } {
  const result = checkSelection([page.a, page.b], null);
  const reason =
    result.pairs[0]?.reasons.find((item) => item.severity === result.verdict)?.text ??
    result.headline;
  return { verdict: result.verdict as Verdict, reason };
}

export function pairingLabel(verdict: Verdict): string {
  return labels[verdict];
}

export function pairingPageCopy(page: PairingPage): { title: string; description: string } {
  const animals = pairingAnimals(page);
  const { verdict } = pairingVerdict(page);
  const label = pairingLabel(verdict);
  const left = animals?.a.commonName ?? page.a;
  const right = animals?.b.commonName ?? page.b;
  const description = fitDescription([`${page.h1} ${label}. ${page.summary}`], [
    `${left} and ${right} use the cited checker.`,
    "No number is invented.",
  ]);
  return { title: page.title, description };
}

export { fitDescription };
