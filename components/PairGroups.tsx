import Link from "next/link";
import { species } from "@/data/species";
import { buildQuery, checkSelection, getSpecies, tankFit } from "@/lib/checker";
import { coveredGallonLabel, focalBlocked, laterPairings } from "@/lib/explain";
import type { Verdict } from "@/lib/types";
import { VerdictPill, verdictCard } from "./VerdictPill";

const order: Verdict[] = ["incompatible", "caution", "compatible"];
const heading: Record<Verdict, string> = {
  incompatible: "Not compatible",
  caution: "Caution",
  compatible: "Compatible",
};

export function PairGroups({ slug, gallons }: { slug: string; gallons: number | null }) {
  const focal = getSpecies(slug);
  if (!focal) return null;
  const blocked = gallons != null && focalBlocked(focal, gallons);
  const fit = gallons != null ? tankFit(focal, gallons) : null;

  if (blocked && gallons != null && fit) {
    const later = laterPairings(slug);
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
          <ul className="grid gap-2 sm:grid-cols-2">
            {later.map((item) => (
              <li key={item.other} className="rounded-xl border border-slate-200 bg-white p-4">
                <Link href={`/species/${item.other}`} className="font-semibold text-teal-900 no-underline hover:underline">
                  {item.name}
                </Link>
                <p className="mt-2 text-sm">
                  <Link href={`/checker${buildQuery([slug, item.other], null)}`}>Open in the checker</Link>
                </p>
              </li>
            ))}
          </ul>
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
      {gallons != null && coveredGallonLabel(slug, gallons) ? (
        <p className="text-slate-600">{coveredGallonLabel(slug, gallons)}</p>
      ) : null}
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
        return (
          <section key={verdict} aria-labelledby={`${verdict}-heading`}>
            <h2 id={`${verdict}-heading`} className="text-xl font-semibold tracking-tight text-slate-900">
              {heading[verdict]}
            </h2>
            <ul className="mt-3 grid gap-3">
              {group.map((row) => {
                const reasons = [...row.withTank.pairs[0].reasons, ...row.withTank.tankReasons].filter(
                  (reason) => reason.severity !== "note" || reason.code === "endorsed",
                );
                const notes = row.withTank.stockingNotes.filter((note) => note.text.startsWith(row.animal.commonName));
                return (
                  <li key={row.animal.slug} className={`rounded-2xl border p-4 sm:p-5 ${verdictCard[verdict]}`}>
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold">
                          <Link href={`/species/${row.animal.slug}`} className="text-inherit no-underline hover:underline">
                            {row.animal.commonName}
                          </Link>
                        </h3>
                        <p className="text-sm italic">{row.animal.scientificName}</p>
                      </div>
                      <VerdictPill verdict={verdict} />
                    </div>
                    {gallons != null && row.speciesOnly.verdict !== row.withTank.verdict ? (
                      <p className="mt-2 text-sm">As a pairing, before this tank size: {heading[row.speciesOnly.verdict as Verdict]}.</p>
                    ) : null}
                    <div className="mt-3 space-y-2 text-sm leading-relaxed">
                      {reasons.map((reason) => (
                        <p key={reason.code}>{reason.text}</p>
                      ))}
                      {notes.map((note) => (
                        <p key={note.text}>
                          {note.text}
                        </p>
                      ))}
                    </div>
                    <p className="mt-3 text-sm font-semibold">
                      <Link href={`/checker${buildQuery([slug, row.animal.slug], gallons)}`} className="text-inherit">
                        Open this pair in the checker
                      </Link>
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
