"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SpeciesPicker } from "@/components/SpeciesPicker";
import { planAdditions } from "@/lib/planner";
import { verdictBadge } from "./VerdictPill";

export function AddPlanner() {
  const [slugs, setSlugs] = useState<string[]>([]);
  const [tank, setTank] = useState("");
  const [unit, setUnit] = useState<"gal" | "L">("gal");

  const gallons = useMemo(() => {
    const value = Number(tank);
    if (!Number.isFinite(value) || value <= 0) return null;
    const converted = unit === "L" ? value / 3.785 : value;
    return Math.round(converted * 10) / 10;
  }, [tank, unit]);

  const plan = useMemo(() => planAdditions(slugs, gallons), [slugs, gallons]);

  return (
    <div className="mt-8 space-y-8">
      <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
        <fieldset>
          <legend className="text-sm font-semibold text-slate-800">Tank size</legend>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <input
              inputMode="decimal"
              value={tank}
              onChange={(event) => setTank(event.target.value)}
              aria-label="Tank size"
              className="w-32 rounded-lg border border-slate-300 px-3 py-3 text-lg"
              placeholder="20"
            />
            <div className="flex rounded-lg border border-slate-300">
              <button type="button" aria-pressed={unit === "gal"} className={`min-h-11 px-3 text-sm font-semibold ${unit === "gal" ? "bg-deep text-white" : "bg-white text-slate-800"}`} onClick={() => setUnit("gal")}>
                Gallons
              </button>
              <button type="button" aria-pressed={unit === "L"} className={`min-h-11 border-l border-slate-300 px-3 text-sm font-semibold ${unit === "L" ? "bg-deep text-white" : "bg-white text-slate-800"}`} onClick={() => setUnit("L")}>
                Litres
              </button>
            </div>
          </div>
          <p className="mt-2 text-sm text-slate-600">Litres are converted at 3.785 litres per US gallon. Leave the size blank to ignore tank fit.</p>
        </fieldset>
        <SpeciesPicker
          slugs={slugs}
          tankGallons={gallons}
          limitNote=""
          onAdd={(slug) => setSlugs((current) => (current.includes(slug) ? current : [...current, slug]))}
          onRemove={(slug) => setSlugs((current) => current.filter((item) => item !== slug))}
          onReplace={(next) => setSlugs(next)}
          onClear={() => setSlugs([])}
        />
      </form>

      <section aria-labelledby="stocking-heading">
        <h2 id="stocking-heading" className="text-xl font-semibold text-slate-900">Stocking estimate</h2>
        <p className="mt-2 text-slate-700">
          {plan.stocking.gallons == null
            ? `The animals you entered add up to about ${plan.stocking.inches} adult inches. Enter a tank size to compare that with the volume.`
            : `About ${plan.stocking.inches} adult inches in ${plan.stocking.gallons} US gallons.`}{" "}
          {plan.stocking.incomplete ? "Where a source gives no group size, this counts one animal, so the total is a low estimate. " : ""}
          This is the old inches-per-gallon shortcut. It is an estimate, not a number from a species profile, and it ignores body shape.
          {plan.stocking.overstocked ? " This estimate says the tank is overstocked." : ""}
        </p>
      </section>

      <section aria-labelledby="suggestions-heading">
        <h2 id="suggestions-heading" className="text-xl font-semibold text-slate-900">What fits</h2>
        <p className="mt-2 text-sm text-slate-600">
          Compatible first, then Works if. Inside each group, smaller adults come first because the estimate is adult inches. {plan.cautionCount} others are Caution and {plan.incompatibleCount} are Not compatible, so they are not in this list.
        </p>
        {slugs.length === 0 ? <p className="mt-4 text-slate-700">Add at least one animal you already keep.</p> : null}
        {slugs.length > 0 && plan.suggestions.length === 0 ? (
          <p className="mt-4 text-slate-700">Nothing in this set is Compatible or Works if with every animal you entered.</p>
        ) : null}
        <ol className="mt-4 space-y-3">
          {plan.suggestions.slice(0, 40).map((row, index) => (
            <li key={row.slug} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-500">{index + 1}</p>
              <h3 className="text-lg font-semibold">
                <Link href={`/species/${row.slug}`} className="text-teal-900">
                  {row.commonName}
                </Link>{" "}
                <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${verdictBadge[row.verdict]}`}>
                  {row.verdict === "compatible" ? "Compatible" : "Works if"}
                </span>
              </h3>
              <p className="text-sm italic text-slate-600">{row.scientificName}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-800">{row.reason}</p>
              <p className="mt-2 text-sm text-slate-600">Adult size used in the estimate: {row.adultSizeIn} in.</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
