import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PairGroups } from "@/components/PairGroups";
import { species } from "@/data/species";
import { publishedSizeGallons } from "@/lib/checker";
import { webPage } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return species.flatMap((animal) =>
    publishedSizeGallons(animal.slug).map((gallons) => ({
      slug: animal.slug,
      size: `${gallons}-gallon`,
    })),
  );
}

function readSize(size: string, slug: string): number | null {
  const match = /^(\d+)-gallon$/.exec(size);
  if (!match) return null;
  const gallons = Number(match[1]);
  return publishedSizeGallons(slug).includes(gallons) ? gallons : null;
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; size: string }>;
}): Promise<Metadata> {
  return params.then(({ slug, size }) => {
    const animal = species.find((item) => item.slug === slug);
    const gallons = animal ? readSize(size, slug) : null;
    if (!animal || gallons == null) return { title: "Tank size" };
    return pageMeta({
      title: `${animal.commonName} in a ${gallons}-gallon tank`,
      description: `${animal.commonName} tank mates in a ${gallons}-gallon tank, and which pairings change once the published minimum is applied.`,
      path: `/tank-mates/${animal.slug}/${gallons}-gallon`,
    });
  });
}

export default async function SizePage({ params }: { params: Promise<{ slug: string; size: string }> }) {
  const { slug, size } = await params;
  const animal = species.find((item) => item.slug === slug);
  const gallons = animal ? readSize(size, slug) : null;
  if (!animal || gallons == null) notFound();
  const path = `/tank-mates/${animal.slug}/${gallons}-gallon`;
  const sizes = publishedSizeGallons(animal.slug);

  return (
    <article className="page">
      <Breadcrumbs
        items={[
          { name: "Species", path: "/species" },
          { name: animal.commonName, path: `/species/${animal.slug}` },
          { name: "Tank mates", path: `/tank-mates/${animal.slug}` },
          { name: `${gallons} gallons`, path },
        ]}
      />
      <JsonLd
        data={webPage({
          path,
          name: `${animal.commonName} tank mates in a ${gallons}-gallon tank`,
          description: `${animal.commonName} tank mates once a ${gallons}-gallon tank is applied. ${animal.minTank.stated}`,
          dateModified: animal.lastVerified,
        })}
      />
      <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
        {animal.commonName} tank mates in a {gallons}-gallon tank
      </h1>
      <p className="lead mt-4">
        A size page exists only when the verdict list changes. The other sizes in this set are{" "}
        {sizes.map((item, index) => (
          <span key={item}>
            {index > 0 ? ", " : ""}
            {item === gallons ? (
              <strong>{item}</strong>
            ) : (
              <Link href={`/tank-mates/${animal.slug}/${item}-gallon`}>{item}</Link>
            )}
          </span>
        ))}
        . <Link href={`/tank-mates/${animal.slug}`}>Compare without a tank size</Link>.
      </p>
      <PairGroups slug={animal.slug} gallons={gallons} />
      <p className="mt-6">
        <Link href={`/checker?tank=${gallons}&f=${animal.slug}`}>Open the checker at {gallons} gallons</Link>
      </p>
    </article>
  );
}
