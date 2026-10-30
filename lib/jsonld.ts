import { absoluteUrl, ogImage } from "./seo";
import { site } from "./site";

export function organizationAndWebsite() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: absoluteUrl("/"),
        logo: absoluteUrl(ogImage.url),
        description: site.description,
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.name,
        url: absoluteUrl("/"),
        description: site.description,
        inLanguage: "en",
        publisher: { "@id": `${site.url}/#organization` },
      },
    ],
  };
}

export function checkerApplication() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `${site.name} checker`,
    url: absoluteUrl("/checker"),
    applicationCategory: "ReferenceApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript for the interactive checker. Species facts are in the HTML.",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Compare freshwater species for temperature, pH, hardness, tank size, and behaviour. Every range is tied to a named source.",
    provider: { "@id": `${site.url}/#organization` },
  };
}

export function speciesArticle(input: {
  path: string;
  headline: string;
  description: string;
  dateModified: string;
  commonName: string;
  scientificName: string;
  citations: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    dateModified: input.dateModified,
    datePublished: input.dateModified,
    inLanguage: "en",
    url: absoluteUrl(input.path),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(input.path),
      url: absoluteUrl(input.path),
      name: input.headline,
    },
    image: {
      "@type": "ImageObject",
      url: absoluteUrl(ogImage.url),
      width: ogImage.width,
      height: ogImage.height,
    },
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    citation: input.citations,
    about: {
      "@type": "Thing",
      name: input.commonName,
      alternateName: input.scientificName,
      description: input.description,
    },
  };
}

export function webPage(input: { path: string; name: string; description: string; dateModified?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    inLanguage: "en",
    isPartOf: { "@id": `${site.url}/#website` },
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
  };
}
