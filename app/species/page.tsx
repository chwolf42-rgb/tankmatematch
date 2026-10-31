import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SpeciesCard } from "@/components/SpeciesCard";
import { species } from "@/data/species";
import { absoluteUrl, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Freshwater species",
  description:
    "Care ranges for 100 freshwater species. Each page names the source, the temperature and pH, and any disagreement.",
  path: "/species",
});

export default function SpeciesIndexPage() {
  return (
    <div className="page">
      <Breadcrumbs items={[{ name: "Species", path: "/species" }]} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Freshwater species",
          itemListElement: species.map((animal, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: animal.commonName,
            item: absoluteUrl(`/species/${animal.slug}`),
          })),
        }}
      />
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Species</h1>
      <p className="lead mt-3">
        Each page lists the published range, the place sources disagree, and a tank-mate list built from those numbers.
        One hundred species are in this set.
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
