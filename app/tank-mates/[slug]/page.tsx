import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PairGroups } from "@/components/PairGroups";
import { species } from "@/data/species";
import { publishedSizeGallons } from "@/lib/checker";
import { formatNumber } from "@/lib/format";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return species.map((animal) => ({ slug: animal.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const animal = species.find((item) => item.slug === slug);
    if (!animal) return { title: "Tank mates" };
    return {
      title: `${animal.commonName} tank mates`,
      description: `Which of the other species in this set are compatible with ${animal.commonName}, which need caution, and which are not compatible. Tank size is handled on separate pages where the list actually changes.`,
      alternates: { canonical: `/tank-mates/${animal.slug}` },
    };
  });
}

export default async function TankMatesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const animal = species.find((item) => item.slug === slug);
  if (!animal) notFound();
  const sizes = publishedSizeGallons(animal.slug);
  const path = `/tank-mates/${animal.slug}`;

  return (
    <article className="page">
      <Breadcrumbs
        items={[
          { name: "Species", path: "/species" },
          { name: animal.commonName, path: `/species/${animal.slug}` },
          { name: "Tank mates", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: `${animal.commonName} tank mates`,
          url: `${site.url}${path}`,
          description: animal.tankMateIntro,
        }}
      />
      <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{animal.commonName} tank mates</h1>
      <p className="lead mt-4">{animal.tankMateIntro}</p>
      <p className="mt-4 text-slate-600">
        This page ignores gallons. A pair can be Compatible here and still fail in a short tank.{" "}
        <Link href={`/species/${animal.slug}`} className="font-semibold text-teal-800">
          Care ranges for {animal.commonName}
        </Link>
        .
      </p>
      {sizes.length > 0 ? (
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-slate-900">Where the tank size changes the list</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {sizes.map((gallons) => (
              <li key={gallons}>
                <Link
                  href={`${path}/${gallons}-gallon`}
                  className="inline-flex min-h-11 items-center rounded-lg border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-800 no-underline hover:border-teal-700"
                >
                  {formatNumber(gallons)} gal
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mt-4 text-slate-600">Across 10, 20, 29, and 40 gallons the verdicts do not change, so there is no separate size page.</p>
      )}
      <PairGroups slug={animal.slug} gallons={null} />
    </article>
  );
}
