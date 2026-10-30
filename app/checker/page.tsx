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
    <div className="bg-deep">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: `${site.name} checker`,
          url: `${site.url}/checker`,
          applicationCategory: "ReferenceApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description: "Client-side freshwater tank-mate checker. The selection is stored in the page address so it can be shared.",
        }}
      />
      <div className="mx-auto w-full max-w-6xl px-4 py-10 text-white sm:px-6 md:py-14">
        <h1 className="text-4xl font-semibold tracking-tight">Tank mate checker</h1>
        <p className="mt-3 max-w-2xl text-lg text-teal-50">
          Type a fish, tap a result, and it is added as a chip. Tank size is optional. A shared link looks like{" "}
          <span className="whitespace-nowrap">/checker?tank=20&amp;f=betta,neon-tetra</span>.
        </p>
        <div className="mt-8">
          <Checker />
        </div>
      </div>
    </div>
  );
}
