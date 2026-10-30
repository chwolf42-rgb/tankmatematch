import type { Metadata } from "next";
import { Checker } from "@/components/Checker";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tank mate checker",
  description:
    "Compare two to six freshwater species. Temperature, pH, hardness, fins, predation, and tank size, with the reason for every Caution or Not compatible.",
  alternates: { canonical: "/checker" },
};

export default function CheckerPage() {
  return (
    <div className="wrap">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: `${site.name} checker`,
          url: `${site.url}/checker`,
          applicationCategory: "ReferenceApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description:
            "Client-side freshwater tank-mate checker. The selection is stored in the page address so it can be shared.",
        }}
      />
      <h1>Tank mate checker</h1>
      <p className="lede">
        Add two to six species. Tank size is optional. The address bar updates as you choose, and the copy button
        always points at this page, for example /checker?tank=20&amp;f=betta,neon-tetra.
      </p>
      <Checker />
    </div>
  );
}
