import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy",
  description:
    "What Tank Mate Match stores. Saved tanks stay in this browser. Vercel Web Analytics records anonymous page views.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="page prose-page">
      <Breadcrumbs items={[{ name: "Privacy", path: "/privacy" }]} />
      <h1>Privacy</h1>
      <p>
        This site does not ask for an account. The checker keeps your selection in the page address, for example the
        species slugs and an optional gallon count. That address stays in your browser until you copy it or send it
        to someone. Nothing about the selection is written to a database, because there is not one.
      </p>
      <p>
        Saving a tank writes the name you give it, the species slugs, the gallon size when you set one, and the time
        you saved it into this browser&apos;s localStorage, under the key tankmatematch.tanks. That record never leaves
        the device. It is not uploaded, and it is not attached to an account. Another browser or phone does not have
        it. Delete removes that tank. Clearing site data for this site removes all of them. If the browser is blocking
        localStorage, nothing is saved and the checker still runs.
      </p>
      <p>
        Opening a saved tank puts the species list and gallon size into the checker address. A name in that address
        that is not in the species list is left out, and the page says so. The saved copy itself stays on the device
        until you open it.
      </p>
      <p>
        The Pinterest, Facebook, Reddit, and X buttons are ordinary links to those sites&apos; share pages. This site
        does not load a third-party script or tracker for them. Those sites receive the checker address only if you
        open the link. Copy link writes the address to the clipboard. On a browser that offers the Web Share API, Share
        hands the same address to the device&apos;s own share sheet. Once you send the link, the species and tank size
        in it are no longer private, because they are part of the URL.
      </p>
      <p>
        Page views are recorded by{" "}
        <a href="https://vercel.com/docs/analytics">Vercel Web Analytics</a>. Vercel describes the recording as
        anonymous and aggregated: it does not use a third-party cookie, visitors are identified by a hash of the
        request, and that session is discarded after 24 hours. A page view can include the time, the URL (including a
        checker query such as the species list, and the same URL when a saved tank is opened), the referrer, a filtered
        query string, an approximate location, and the browser, operating system, and device type. The saved-tank
        record in localStorage is not part of that page view. The list is on{" "}
        <a href="https://vercel.com/docs/analytics/privacy-policy">Vercel&apos;s Web Analytics privacy page</a>.
      </p>
      <p>
        The pages are static files. A host that serves them can also keep ordinary request logs: address, time, and
        user agent. There is no mailing list and no login.
      </p>
    </article>
  );
}
