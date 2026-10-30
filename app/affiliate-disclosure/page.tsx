import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate disclosure",
  description: "Tank Mate Match does not carry affiliate links or ads in this version.",
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <article className="wrap">
      <h1>Affiliate disclosure</h1>
      <p className="lede">There are no affiliate links, product links, or ads on this version of the site.</p>
      <p>
        A later version may add gear and food links on species and tank-size pages, with a disclosure above the first
        link, after an affiliate program is actually approved. The checker itself is meant to stay free of those
        links. The switch that would show the slots is off in the code, and the slots render nothing while it is off.
        They are not empty boxes on the page.
      </p>
      <p>
        If that changes, this page will name the program and say that a qualifying purchase can earn a commission.
        Until then, nothing on the site is paid placement.
      </p>
    </article>
  );
}
