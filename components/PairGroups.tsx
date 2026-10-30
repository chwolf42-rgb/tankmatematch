import Link from "next/link";
import { species } from "@/data/species";
import { buildQuery, checkSelection, getSpecies, tankFit } from "@/lib/checker";
import { coveredGallonLabel, focalBlocked, laterPairings } from "@/lib/explain";
import type { Verdict } from "@/lib/types";

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
      <div className="stack">
        {fit.reasons.map((reason) => (
          <p key={reason.code} className="callout">
            {reason.text}
          </p>
        ))}
        {coveredGallonLabel(slug, gallons) ? <p>{coveredGallonLabel(slug, gallons)}</p> : null}
        <p>
          A mate list for this tank would only repeat that {focal.commonName.toLowerCase()} does not fit. These
          pairings are Compatible before the tank is considered, and they are the ones to reopen once the footprint
          is large enough:
        </p>
        {later.length === 0 ? (
          <p>None of the species in this set are Compatible with {focal.commonName} even before tank size.</p>
        ) : (
          <ul className="mate-index">
            {later.map((item) => (
              <li key={item.other}>
                <Link href={`/species/${item.other}`}>{item.name}</Link>
                {" · "}
                <Link href={`/checker${buildQuery([slug, item.other], null)}`}>Open in the checker</Link>
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
    <div className="stack">
      {fit
        ? fit.reasons.map((reason) => (
            <p key={reason.code} className={reason.severity === "note" ? "note" : "callout"}>
              {reason.text}
            </p>
          ))
        : null}
      {gallons != null && coveredGallonLabel(slug, gallons) ? <p>{coveredGallonLabel(slug, gallons)}</p> : null}
      <p className="count-line">
        {counts.map((item) => `${item.count} ${heading[item.verdict].toLowerCase()}`).join(" · ")}
      </p>
      {focal.minGroup != null && focal.minGroup > 1 ? <p className="note">{focal.minGroupNote}</p> : null}
      {order.map((verdict) => {
        const group = rows.filter((row) => row.withTank.verdict === verdict);
        if (group.length === 0) return null;
        return (
          <section key={verdict} aria-labelledby={`${verdict}-heading`}>
            <h2 id={`${verdict}-heading`}>{heading[verdict]}</h2>
            <ul className="pair-list">
              {group.map((row) => {
                const reasons = [
                  ...row.withTank.pairs[0].reasons,
                  ...row.withTank.tankReasons,
                ].filter((reason) => reason.severity !== "note" || reason.code === "endorsed");
                const notes = row.withTank.stockingNotes.filter((note) => note.text.startsWith(row.animal.commonName));
                return (
                  <li key={row.animal.slug}>
                    <h3>
                      <Link href={`/species/${row.animal.slug}`}>{row.animal.commonName}</Link>
                    </h3>
                    <p className="sci">{row.animal.scientificName}</p>
                    {gallons != null && row.speciesOnly.verdict !== row.withTank.verdict ? (
                      <p className="note">
                        As a pairing, before this tank size: {heading[row.speciesOnly.verdict as Verdict]}.
                      </p>
                    ) : null}
                    {reasons.map((reason) => (
                      <p key={reason.code}>{reason.text}</p>
                    ))}
                    {notes.map((note) => (
                      <p key={note.text} className="note">
                        {note.text}
                      </p>
                    ))}
                    <p>
                      <Link href={`/checker${buildQuery([slug, row.animal.slug], gallons)}`}>
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
