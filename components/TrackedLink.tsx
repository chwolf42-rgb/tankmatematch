"use client";

import { track } from "@vercel/analytics";
import { destinationHost } from "@/lib/outbound";

/**
 * Every outbound click goes through this component.
 * The event names the page, the item, the kind of link, the destination host, and the region.
 * It does not send a name, an email, or a cookie of our own. If the analytics script is missing,
 * the click still opens the address.
 */
export function TrackedLink({
  href,
  page,
  item,
  linkType,
  region,
  className,
  children,
}: {
  href: string;
  page: string;
  item: string;
  linkType: string;
  region: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        try {
          track("outbound_click", {
            page,
            item,
            linkType,
            destHost: destinationHost(href),
            region,
          });
        } catch {
          // Navigation is the href. A missing script must not block it.
        }
      }}
    >
      {children}
      <span className="sr-only"> (opens a third-party site)</span>
    </a>
  );
}
