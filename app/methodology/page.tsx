import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How a verdict is reached",
  description:
    "Which sources the checker uses, what happens when they disagree, and the rules behind Compatible, Caution, and Not compatible.",
  alternates: { canonical: "/methodology" },
};

export default function MethodologyPage() {
  return (
    <article className="wrap">
      <h1>How a verdict is reached</h1>
      <p className="lede">
        Every range on a species page is tied to a named source. The checker does not average two databases into a
        third number nobody published.
      </p>
      <h2>Sources</h2>
      <p>
        Fish profiles use the Seriously Fish species account, revised 2026, as the aquarium range: temperature, pH,
        hardness, adult standard length, tank base, and group size. FishBase is the second source. Where FishBase
        disagrees, the species page says so, and the checker keeps the Seriously Fish figure. That choice is
        deliberate. FishBase environment fields are often a coarse summary, and for several of these fish they
        describe wild water or an older atlas entry rather than the animal sold in shops.
      </p>
      <p>
        One FishBase line is ignored on purpose. “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60
        cm” (Ref. 51539) is repeated across unrelated species. It is treated as a database default, not a measurement.
        Group sizes used here are the ones Seriously Fish states for that species: 8–10 for neons, zebra danios, and
        harlequins, at least 4–6 for bronze corydoras and honey gouramis. Where no source gives a number, the field
        is left blank. Guppies, platies, and cherry shrimp have no numeric minimum on this site.
      </p>
      <p>
        The bristlenose is Ancistrus sp. (3) on PlanetCatfish, not a confirmed Ancistrus cirrhosus. Both documents
        are from that site. FishBase has no page for an unnamed domesticated fish, and borrowing the cirrhosus page
        would mix species. Hardness and a gallon minimum are blank for that reason. The tank rule that is used is
        Kathy Jinkings’ 30-inch length for one pair.
      </p>
      <p>
        Cherry shrimp use Klotz and coauthors (2013) for size, and the aquarium band of 14–29°C and pH 6.5–8 that
        Namaei Kohal and coauthors (2018) attribute to Heerbrandt and Lin (2006). A US Fish and Wildlife Service
        screening summary quotes a hardness string, “gH 0–27 °C,” with a temperature unit on a hardness value. That
        string is not used. No dGH range is printed.
      </p>
      <h2>When the sources disagree</h2>
      <p>
        The page shows both figures. The checker uses the husbandry source, and does not silently take the overlap.
        Two cases are called out because a mechanical overlap would be misleading. FishBase lists bronze corydoras at
        25–28°C and Seriously Fish at 21–27°C. The overlap is two degrees and would make neon tetras look like a
        bad match. Neon tetras with bronze corydoras are Compatible on the Seriously Fish ranges, which share
        70–77°F, pH 6–7.5, and a wide hardness band. FishBase lists a honey gourami maximum of 13.7 cm total length.
        Seriously Fish says 55 mm standard length. The checker uses 55 mm. The FishBase length stays on the page as
        unresolved.
      </p>
      <h2>The three results</h2>
      <p>
        <strong>Not compatible</strong> means a published range does not overlap, or a source describes a specific
        conflict: trailing fins with a male betta, adult shrimp as prey, or two surface-territorial anabantoids. A
        tank below a published minimum is also Not compatible, and the text says the tank is the problem when the
        animals themselves are not.
      </p>
      <p>
        <strong>Caution</strong> means the ranges overlap by less than 4°F, less than 0.6 pH, or less than 3 dGH, or
        a behaviour source gives a qualified warning. A betta with a short-finned peaceful fish is Caution, because
        Seriously Fish says community success is the exception. A fish whose diet includes small crustaceans is
        Caution with cherry shrimp, because juveniles are food even when adults are a similar size. Still water
        against a bristlenose’s current is Caution. A slow honey gourami with a vigorous zebra danio is Caution.
      </p>
      <p>
        <strong>Compatible</strong> means the ranges overlap by more than those margins and no behaviour rule fired.
        It is not a stocking plan. The result still tells you the group size the source asked for.
      </p>
      <p>
        An explicit pair override beats the generic behaviour rules. It does not waive chemistry. The betta and
        guppy override is the flowing-fin case, written so a larger tank cannot talk the checker out of it. Water
        that does not overlap would still fail even if a future override said otherwise.
      </p>
      <h2>Gallons are not a footprint</h2>
      <p>
        Several Seriously Fish minima are a base length: 90 cm for zebra danios, 80 cm for bronze corydoras. A gallon
        count does not tell you the length. For the standard sizes people actually buy, the checker uses this
        footprint table, which is an assumption of this site, not a species fact: 10 gallons is 20 inches, 20 gallons
        is 24 inches in the tall shape and 30 in the long shape, 29 gallons is 30 inches, 40 gallons is 36 inches in
        the breeder and 48 in the long tank. If even the long shape is short of the published base, the tank fails.
        If only the long shape qualifies, the result is Caution. Any other gallon count gets a warning that the
        length was not checked.
      </p>
      <h2>The inch total</h2>
      <p>
        Once a tank is large enough for every animal in the selection, the checker adds adult length times the
        published minimum group. If that total exceeds the gallons, the result drops from Compatible to Caution.
        The text calls this the old inches-per-gallon shortcut and says it is not a rule. It is why neon tetras and
        bronze corydoras are Compatible with no tank set, and Caution in a 20-gallon tank that is also too short for
        the cory’s 80 cm base. The inch warning never produces Not compatible by itself.
      </p>
      <p>
        <Link href="/species">Read a species record</Link> or <Link href="/checker">run a check</Link>.
      </p>
    </article>
  );
}
