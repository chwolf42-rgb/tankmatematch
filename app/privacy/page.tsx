import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy",
  description:
    "What Tank Mate Match stores. Tanks stay in this browser unless you sign in with email. Vercel Web Analytics records anonymous page views.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="page prose-page">
      <Breadcrumbs items={[{ name: "Privacy", path: "/privacy" }]} />
      <h1>Privacy</h1>
      <p>
        The checker keeps your selection in the page address, for example the species slugs and an optional gallon
        count. That address stays in your browser until you copy it or send it to someone. The address itself is not a
        saved tank.
      </p>
      <p>
        Saving a tank without signing in writes the name you give it, the species slugs, the gallon size when you set
        one, and the time you saved it into this browser&apos;s localStorage, under the key tankmatematch.tanks. Until
        you sign in, that record never leaves the device. It is not uploaded. Another browser or phone does not have
        it. Delete removes that tank. Clearing site data for this site removes all of them. If the browser is blocking
        localStorage, nothing is saved and the checker still runs.
      </p>
      <p>
        Sign-in is optional. When it is turned on, you enter an email address and the site emails a 6-digit code. There
        is no password and no phone number. Your email address is used only for sign-in and saved tanks. Signed-in
        tanks (the name, the species slugs, the gallon size, and the time they were saved) are stored in Supabase and
        tied to that login. You can read, rename, and delete only your own tanks. The login session stays in this
        browser. If sign-in is not configured, the sign-in control is hidden and saving stays in this browser.
      </p>
      <p>
        Opening a saved tank puts the species list and gallon size into the checker address. A name in that address
        that is not in the species list is left out, and the page says so. A browser-only copy stays on the device.
        A signed-in copy stays on the account.
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
        user agent. There is no mailing list. The only email the site collects is the one you type to sign in, and
        only when sign-in is turned on.
      </p>
    </article>
  );
}
