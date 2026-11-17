import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMeta } from "@/lib/seo";
import { fitDescription } from "@/lib/seo-copy";

const title = "Shop and Map Links";
const description = fitDescription(
  ["Shop and map links on Tank Mate Match are plain third-party addresses."],
  ["They carry no tag from this site.", "A click does not pay this site.", "Stock is not checked."],
);

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/affiliate-disclosure",
  absoluteTitle: true,
});

export default function AffiliateDisclosurePage() {
  return (
    <article className="page prose-page">
      <Breadcrumbs items={[{ name: "Shop links", path: "/affiliate-disclosure" }]} />
      <h1>Shop and map links</h1>
      <p>
        Links that leave this site open a third-party shop, a map search, a source, or a share page. They are ordinary
        web addresses. This site does not add a tag to them, and a click does not pay this site.
      </p>
      <p>
        A shop search is a keyword such as sinking fish food or live aquarium plants. A map search is aquarium stores
        near you, sometimes with the animal&apos;s common name. Neither search checks stock.
      </p>
      <p>The checker itself does not carry those links. The species pages, the shop page, and the share buttons do.</p>
    </article>
  );
}
