import Link from "next/link";
import { formatRange } from "@/lib/format";
import type { Species } from "@/lib/types";

export function SpeciesCard({ animal }: { animal: Species }) {
  return (
    <Link
      href={`/species/${animal.slug}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 no-underline shadow-sm transition hover:border-teal-700"
    >
      <span className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-teal-900">{animal.commonName}</span>
      <span className="mt-1 text-sm italic text-slate-600">{animal.scientificName}</span>
      <span className="mt-4 text-sm text-slate-600">
        {formatRange(animal.tempF, "°F")} · pH {animal.pH.min}–{animal.pH.max} · {animal.adultSizeIn} in
      </span>
    </Link>
  );
}
