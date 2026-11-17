import type { Metadata } from "next";
import Link from "next/link";
import { Checker } from "@/components/Checker";
import { profiles } from "@/data/profiles";
import { formatRange } from "@/lib/format";
import { homePageCopy } from "@/lib/seo-copy";
import { pageMeta } from "@/lib/seo";

const homeCopy = homePageCopy();

const FEATURED = [
  "betta",
  "neon-tetra",
  "guppy",
  "cherry-shrimp",
  "bronze-corydoras",
  "angelfish",
  "platy",
  "zebra-danio",
  "harlequin-rasbora",
  "bristlenose-pleco",
  "honey-gourami",
  "amano-shrimp",
];

export const metadata: Metadata = pageMeta({
  title: homeCopy.title,
  description: homeCopy.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <section className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Will these fish actually live together?
        </h1>
        <p className="mt-2 max-w-2xl text-slate-700">
          Every temperature, pH, hardness, and adult size is tied to a named source. If that source did not print a
          number, the field stays blank. The checker does not invent one.
        </p>
        <div className="mt-6">
          <Checker />
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{profiles.length} freshwater species</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Ranges come from Seriously Fish, FishBase, PlanetCatfish, or the papers named on each page. The full list is
          the{" "}
          <Link href="/species" prefetch={false} className="font-semibold text-teal-800">
            species index
          </Link>
          .{" "}
          <Link href="/methodology" className="font-semibold text-teal-800">
            How a disagreement is handled.
          </Link>
        </p>
        <ul className="mt-6 columns-1 gap-x-8 sm:columns-2 lg:columns-3">
          {FEATURED.flatMap((slug) => {
            const animal = profiles.find((item) => item.slug === slug);
            return animal ? [animal] : [];
          }).map((animal) => (
            <li key={animal.slug} className="break-inside-avoid border-t border-slate-200 py-2 text-sm">
              <Link href={`/species/${animal.slug}`} prefetch={false} className="font-semibold text-teal-900">
                {animal.commonName}
              </Link>
              <span className="text-slate-600"> {animal.scientificName}</span>
              <span className="text-slate-600">
                {" "}
                · {animal.tempF ? formatRange(animal.tempF, "°F") : "temperature not stated"} · {animal.adultSizeIn} in
              </span>{" "}
              <Link href={`/tank-mates/${animal.slug}`} prefetch={false} className="font-semibold text-teal-800">
                tank mates
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-slate-700">
          The numbers on each species page are the ones the checker uses. Where two sources disagree, the page says so
          and names both. Open the <Link href="/checker">checker</Link> with a species already filled in from its page,
          or read a <Link href="/species/neon-tetra" prefetch={false}>neon tetra</Link> record and its{" "}
          <Link href="/tank-mates/neon-tetra" prefetch={false}>tank mates</Link>.
        </p>
      </section>
    </>
  );
}
