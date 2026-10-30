import type { Metadata } from "next";
import Link from "next/link";
import { species } from "@/data/species";
import { formatRange } from "@/lib/format";

export const metadata: Metadata = {
  title: "Freshwater species",
  description:
    "Care ranges for the first ten species on Tank Mate Match: betta, neon tetra, guppy, bronze corydoras, cherry shrimp, platy, zebra danio, harlequin rasbora, bristlenose pleco, and honey gourami.",
  alternates: { canonical: "/species" },
};

export default function SpeciesIndexPage() {
  return (
    <div className="wrap">
      <h1>Species</h1>
      <p className="lede">
        Each page lists the published range, the place sources disagree, and a link to the tank-mate list generated
        from those numbers. This is the first ten. More get added one record at a time, not as a copied template.
      </p>
      <ul className="index">
        {species.map((animal) => (
          <li key={animal.slug}>
            <Link href={`/species/${animal.slug}`}>{animal.commonName}</Link>
            <span className="sci">{animal.scientificName}</span>
            <span>
              {formatRange(animal.tempF, "°F")} · pH {animal.pH.min}–{animal.pH.max} · minimum group{" "}
              {animal.minGroup ?? "not stated"}
            </span>
            <span>
              <Link href={`/tank-mates/${animal.slug}`}>Tank mates</Link>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
