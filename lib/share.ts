import { buildQuery } from "./checker";
import { site } from "./site";

export const SHARE_NETWORKS = [
  { id: "pinterest", label: "Pinterest" },
  { id: "facebook", label: "Facebook" },
  { id: "reddit", label: "Reddit" },
  { id: "x", label: "X" },
] as const;

export type ShareNetworkId = (typeof SHARE_NETWORKS)[number]["id"];

/** Absolute checker URL for the current selection. Origin is the site the visitor is on. */
export function checkerShareUrl(origin: string, slugs: string[], tank: number | null): string {
  const base = origin.replace(/\/+$/, "");
  return `${base}/checker${buildQuery(slugs, tank)}`;
}

export function shareText(names: string[], tank: number | null): string {
  const listed = names.map((name) => name.trim()).filter(Boolean).slice(0, 6);
  const size = tank != null ? ` in ${tank} gallons` : "";
  const subject = listed.length > 0 ? `${listed.join(", ")}${size}` : "a freshwater tank";
  return `Tank mate check: ${subject}`;
}

/** Production image. Pinterest needs a picture it can fetch, including from a preview host. */
export function shareMediaUrl(): string {
  return `${site.url}/og.png`;
}

/**
 * Plain share-page URLs. No SDK, pixel, or extra query from this site.
 * The network receives the checker address only when the visitor opens the link.
 */
export function networkShareUrl(network: ShareNetworkId, pageUrl: string, text: string, mediaUrl: string): string {
  const url = encodeURIComponent(pageUrl);
  const message = encodeURIComponent(text);
  const media = encodeURIComponent(mediaUrl);
  switch (network) {
    case "pinterest":
      return `https://www.pinterest.com/pin/create/button/?url=${url}&media=${media}&description=${message}`;
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    case "reddit":
      return `https://www.reddit.com/submit?url=${url}&title=${message}`;
    case "x":
      return `https://x.com/intent/post?url=${url}&text=${message}`;
  }
}
