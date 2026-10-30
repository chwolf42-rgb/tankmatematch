import Link from "next/link";
import { Checker } from "@/components/Checker";
import { JsonLd } from "@/components/JsonLd";
import { species } from "@/data/species";
import { formatRange } from "@/lib/format";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="wrap">
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
      <h1>Will these fish actually live together?</h1>
      <p className="lede">
        Pick two or more species. The checker compares the temperature, pH, and hardness ranges published for them,
        then the behaviour those same sources describe. The result is Compatible, Caution, or Not compatible, with the
        reason written out.
      </p>
      <Checker />
      <section>
        <h2>Species in this first set</h2>
        <p>
          Ten common freshwater animals, each with a page and a tank-mate page. Ranges come from Seriously Fish,
          FishBase, PlanetCatfish, or the papers named on the species page.{" "}
          <Link href="/methodology">How a disagreement is handled.</Link>
        </p>
        <ul className="index">
          {species.map((animal) => (
            <li key={animal.slug}>
              <Link href={`/species/${animal.slug}`}>{animal.commonName}</Link>
              <span className="sci">{animal.scientificName}</span>
              <span>
                {formatRange(animal.tempF, "°F")} · pH {formatRange(animal.pH, "").trim()} · {animal.adultSizeIn} in
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
