import type { Metadata } from "next";
import Link from "next/link";
import { SpeciesCard } from "@/components/SpeciesCard";
import { species } from "@/data/species";

export const metadata: Metadata = {
  title: "Freshwater species",
  description:
    "Care ranges for the first ten species on Tank Mate Match: betta, neon tetra, guppy, bronze corydoras, cherry shrimp, platy, zebra danio, harlequin rasbora, bristlenose pleco, and honey gourami.",
  alternates: { canonical: "/species" },
};

export default function SpeciesIndexPage() {
  return (
    <div className="page">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Species</h1>
      <p className="lead mt-3">
        Each page lists the published range, the place sources disagree, and a tank-mate list built from those numbers.
        This is the first ten.
      </p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {species.map((animal) => (
          <li key={animal.slug}>
            <SpeciesCard animal={animal} />
            <p className="mt-2 px-1 text-sm">
              <Link href={`/tank-mates/${animal.slug}`} className="font-semibold text-teal-800">
                Tank mates for {animal.commonName}
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
