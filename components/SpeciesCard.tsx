import Link from "next/link";
import { formatRange } from "@/lib/format";
import type { Range } from "@/lib/types";

export function SpeciesCard({
  slug,
  commonName,
  scientificName,
  tempF,
  pH,
  adultSizeIn,
}: {
  slug: string;
  commonName: string;
  scientificName: string;
  tempF: Range | null;
  pH: Range | null;
  adultSizeIn: number;
}) {
  return (
    <Link
      href={`/species/${slug}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 no-underline shadow-sm transition hover:border-teal-700"
    >
      <span className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-teal-900">{commonName}</span>
      <span className="mt-1 text-sm italic text-slate-600">{scientificName}</span>
      <span className="mt-4 text-sm text-slate-600">
        {tempF ? formatRange(tempF, "°F") : "Temperature not stated"} · {pH ? `pH ${pH.min}–${pH.max}` : "pH not stated"} · {adultSizeIn} in
      </span>
    </Link>
  );
}
