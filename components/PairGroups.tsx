import { species } from "@/data/species";
import { buildQuery, checkSelection, getSpecies, tankFit } from "@/lib/checker";
import { coveredGallonLabel, focalBlocked, laterPairings } from "@/lib/explain";
import type { CheckResult, Species, Verdict } from "@/lib/types";
import { verdictBadge, verdictCard } from "./VerdictPill";

const order: Verdict[] = ["compatible", "works-if", "caution", "incompatible"];
const heading: Record<Verdict, string> = {
  compatible: "Compatible",
  "works-if": "Works if",
  caution: "Caution",
  incompatible: "Not compatible",
};
const compact: Record<Verdict, boolean> = {
  compatible: false,
  "works-if": false,
  caution: true,
  incompatible: true,
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function firstSentence(text: string): string {
  const sentence = text.split(/(?<=\.)\s/)[0] ?? text;
  return sentence.length > 220 ? `${sentence.slice(0, 217).trim()}…` : sentence;
}

function pairCard(slug: string, animal: Species, verdict: Verdict, withTank: CheckResult, speciesOnly: CheckResult, gallons: number | null): string {
  const reasons = [...withTank.pairs[0].reasons, ...withTank.tankReasons].filter(
    (reason) => reason.severity !== "note" || reason.code === "endorsed",
  );
  const notes = withTank.stockingNotes.filter((note) => note.text.startsWith(animal.commonName));
  const before =
    gallons != null && speciesOnly.verdict !== withTank.verdict
      ? `<p class="mt-2 text-sm">As a pairing, before this tank size: ${escapeHtml(heading[speciesOnly.verdict as Verdict])}.</p>`
      : "";
  const reasonHtml = [...reasons.map((reason) => `<p>${escapeHtml(reason.text)}</p>`), ...notes.map((note) => `<p>${escapeHtml(note.text)}</p>`)].join("");
  if (compact[verdict]) {
    const leadReason = [...withTank.pairs[0].reasons, ...withTank.tankReasons].find((reason) => reason.severity === verdict);
    const line = leadReason ? firstSentence(leadReason.text) : heading[verdict];
    return `<li class="border-t border-slate-200 py-3 first:border-t-0"><h3 class="text-base font-semibold"><a href="/species/${escapeHtml(animal.slug)}" class="text-teal-900 no-underline hover:underline">${escapeHtml(animal.commonName)}</a> <span class="text-sm font-semibold ${verdictBadge[verdict]} rounded-full px-2 py-0.5">${escapeHtml(heading[verdict])}</span></h3><p class="mt-1 text-sm leading-relaxed text-slate-700">${escapeHtml(line)}</p></li>`;
  }
  return `<li class="rounded-2xl border p-4 sm:p-5 ${verdictCard[verdict]}"><div class="flex flex-wrap items-start justify-between gap-2"><div><h3 class="text-lg font-semibold"><a href="/species/${escapeHtml(animal.slug)}" class="text-inherit no-underline hover:underline">${escapeHtml(animal.commonName)}</a></h3><p class="text-sm italic">${escapeHtml(animal.scientificName)}</p></div><p class="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide ${verdictBadge[verdict]}">${escapeHtml(heading[verdict])}</p></div>${before}<div class="mt-3 space-y-2 text-sm leading-relaxed">${reasonHtml}</div><p class="mt-3 text-sm font-semibold"><a href="/checker${escapeHtml(buildQuery([slug, animal.slug], gallons))}" class="text-inherit">Open this pair in the checker</a></p></li>`;
}

export function PairGroups({ slug, gallons }: { slug: string; gallons: number | null }) {
  const focal = getSpecies(slug);
  if (!focal) return null;
  const blocked = gallons != null && focalBlocked(focal, gallons);
  const fit = gallons != null ? tankFit(focal, gallons) : null;

  if (blocked && gallons != null && fit) {
    const later = laterPairings(slug);
    const list =
      later.length === 0
        ? ""
        : later
            .map(
              (item) =>
                `<li class="rounded-xl border border-slate-200 bg-white p-4"><a href="/species/${escapeHtml(item.other)}" class="font-semibold text-teal-900 no-underline hover:underline">${escapeHtml(item.name)}</a><p class="mt-2 text-sm"><a href="/checker${escapeHtml(buildQuery([slug, item.other], null))}">Open in the checker</a></p></li>`,
            )
            .join("");
    return (
      <div className="mt-6 space-y-4">
        {fit.reasons.map((reason) => (
          <p key={reason.code} className="rounded-xl border border-amber-700 bg-amber-50 p-4 text-amber-950">
            {reason.text}
          </p>
        ))}
        {coveredGallonLabel(slug, gallons) ? <p className="text-slate-600">{coveredGallonLabel(slug, gallons)}</p> : null}
        <p className="text-slate-700">
          A mate list for this tank would only repeat that {focal.commonName.toLowerCase()} does not fit. These pairings
          are Compatible before the tank is considered:
        </p>
        {later.length === 0 ? (
          <p>None of the species in this set are Compatible with {focal.commonName} even before tank size.</p>
        ) : (
          <ul className="grid gap-2 sm:grid-cols-2" dangerouslySetInnerHTML={{ __html: list }} />
        )}
      </div>
    );
  }

  const rows = species
    .filter((animal) => animal.slug !== slug)
    .map((animal) => {
      const withTank = checkSelection([slug, animal.slug], gallons);
      const speciesOnly = checkSelection([slug, animal.slug], null);
      return { animal, withTank, speciesOnly };
    });

  const counts = order.map((verdict) => ({
    verdict,
    count: rows.filter((row) => row.withTank.verdict === verdict).length,
  }));

  return (
    <div className="mt-6 space-y-6">
      {fit
        ? fit.reasons.map((reason) => (
            <p
              key={reason.code}
              className={
                reason.severity === "note"
                  ? "text-sm text-slate-600"
                  : "rounded-xl border border-amber-700 bg-amber-50 p-4 text-amber-950"
              }
            >
              {reason.text}
            </p>
          ))
        : null}
      {gallons != null && coveredGallonLabel(slug, gallons) ? <p className="text-slate-600">{coveredGallonLabel(slug, gallons)}</p> : null}
      <ul className="flex flex-wrap gap-2">
        {counts.map((item) => (
          <li key={item.verdict}>
            <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-semibold ${verdictCard[item.verdict]}`}>
              {item.count} {heading[item.verdict].toLowerCase()}
            </span>
          </li>
        ))}
      </ul>
      {focal.minGroup != null && focal.minGroup > 1 ? <p className="text-sm text-slate-600">{focal.minGroupNote}</p> : null}
      {order.map((verdict) => {
        const group = rows.filter((row) => row.withTank.verdict === verdict);
        if (group.length === 0) return null;
        const html = group.map((row) => pairCard(slug, row.animal, verdict, row.withTank, row.speciesOnly, gallons)).join("");
        return (
          <section key={verdict} aria-labelledby={`${verdict}-heading`}>
            <h2 id={`${verdict}-heading`} className="text-xl font-semibold tracking-tight text-slate-900">
              {heading[verdict]}
            </h2>
            <ul className={compact[verdict] ? "mt-3 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white px-4" : "mt-3 grid gap-3"} dangerouslySetInnerHTML={{ __html: html }} />
          </section>
        );
      })}
    </div>
  );
}
