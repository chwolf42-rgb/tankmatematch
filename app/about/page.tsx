import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "What Tank Mate Match is for, and what this first version does not do.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <article className="page prose-page">
      <h1>About</h1>
      <p>
        Tank Mate Match is a small reference for one question: can these freshwater animals share a tank, and if not,
        which published fact is the problem?
      </p>
      <p>
        The first version is a static site. The checker runs in the browser. The species records live in the
        repository, so a change to a temperature or a group size is a diff someone can read. There is no account, no
        feed, and no store.
      </p>
      <p>
        Ten species are in. Each one has a care page and a tank-mate page. Size pages exist only where the verdict
        list changes between 10, 20, 29, and 40 gallons. A 5-gallon betta bowl does not get its own URL, because it
        fails for the same reason a 10-gallon tank fails, and the 10-gallon page says so.
      </p>
      <p>
        The numbers are not a substitute for watching the fish. A male betta that has never torn a fin still belongs
        in the Not compatible bucket with a long-finned guppy, because the source describes that outcome as the usual
        one. Individual animals vary. The page is the prior, not a guarantee.
      </p>
      <p>
        Before this is treated as finished, a person who keeps fish should read every record against the cited page.
        The <Link href="/methodology">methodology</Link> is the list of choices the checker makes when two sources
        do not match.
      </p>
    </article>
  );
}
