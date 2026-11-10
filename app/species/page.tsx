import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SpeciesCard } from "@/components/SpeciesCard";
import { species } from "@/data/species";
import { absoluteUrl, pageMeta } from "@/lib/seo";
import type { AnimalKind } from "@/lib/types";

const KIND_LABEL: { id: AnimalKind | "fish"; title: string }[] = [
  { id: "fish", title: "Fish" },
  { id: "shrimp", title: "Shrimp and prawns" },
  { id: "snail", title: "Snails" },
  { id: "crayfish", title: "Crayfish" },
  { id: "crab", title: "Crabs" },
  { id: "other-invertebrate", title: "Other invertebrates" },
];

export const metadata: Metadata = pageMeta({
  title: "Freshwater species",
  description:
    `Care ranges for ${species.length} freshwater species. Each page names the source, the temperature and pH, and any disagreement.`,
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
        {species.length} species are in this set.
      </p>
      {KIND_LABEL.map((group) => {
        const animals = species.filter((animal) => (animal.kind ?? "fish") === group.id);
        if (animals.length === 0) return null;
        return (
          <section key={group.id} id={group.id} className="mt-10">
            <h2 className="text-2xl font-semibold text-slate-900">
              {group.title}{" "}
              <span className="text-base font-normal text-slate-600">({animals.length})</span>
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {animals.map((animal) => (
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
          </section>
        );
      })}
    </div>
  );
}
