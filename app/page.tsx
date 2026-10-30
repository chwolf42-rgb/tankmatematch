import { Checker } from "@/components/Checker";
import { JsonLd } from "@/components/JsonLd";
import { SpeciesCard } from "@/components/SpeciesCard";
import { species } from "@/data/species";
import { site } from "@/lib/site";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: site.name,
          url: site.url,
          applicationCategory: "ReferenceApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description: site.description,
        }}
      />
      <section className="bg-deep text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 md:py-14">
          <p className="text-sm font-semibold tracking-wide text-teal-100">Freshwater compatibility</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Will these fish actually live together?
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-teal-50">
            Search for two or more species. The checker compares published temperature, pH, and hardness ranges, then
            the behaviour those sources describe.
          </p>
          <div className="mt-8">
            <Checker />
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Species in this first set</h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Ten common freshwater animals. Ranges come from Seriously Fish, FishBase, PlanetCatfish, or the papers
              named on each page.{" "}
              <Link href="/methodology" className="font-semibold text-teal-800">
                How a disagreement is handled.
              </Link>
            </p>
          </div>
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {species.map((animal) => (
            <li key={animal.slug}>
              <SpeciesCard animal={animal} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
