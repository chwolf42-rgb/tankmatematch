import type { MetadataRoute } from "next";
import { pairingPages } from "@/data/pairing-pages";
import { species } from "@/data/species";
import { absoluteUrl } from "@/lib/seo";
import { indexableSizeGallon } from "@/lib/size-index";
import { VERIFIED_ON } from "@/lib/site";

export const dynamic = "force-static";

function dated(isoDate: string): Date {
  return new Date(`${isoDate}T00:00:00.000Z`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const verified = dated(VERIFIED_ON);
  // /my-tanks is a noindex page of on-device data, so it stays out of the sitemap.
  // llms.txt and llms-full.txt stay in public/ and in the footer. They are not sitemap URLs.
  const staticPaths = [
    "/",
    "/checker",
    "/what-to-add",
    "/species",
    "/about",
    "/methodology",
    "/privacy",
    "/affiliate-disclosure",
  ];
  const urls: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: verified,
  }));

  for (const page of pairingPages) {
    urls.push({ url: absoluteUrl(`/can/${page.slug}`), lastModified: verified });
  }

  for (const animal of species) {
    const lastModified = dated(animal.lastVerified);
    urls.push({ url: absoluteUrl(`/species/${animal.slug}`), lastModified });
    urls.push({ url: absoluteUrl(`/tank-mates/${animal.slug}`), lastModified });
    const gallons = indexableSizeGallon(animal.slug);
    if (gallons != null) {
      urls.push({
        url: absoluteUrl(`/tank-mates/${animal.slug}/${gallons}-gallon`),
        lastModified,
      });
    }
  }

  return urls;
}
