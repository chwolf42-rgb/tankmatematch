import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy",
  description: "No accounts. Saved tanks stay in this browser. Vercel Web Analytics records anonymous page views.",
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
        to someone.         Nothing about the selection is written to a database, because there is not one.
      </p>
      <p>
        Saved tanks are stored only in this browser, under the localStorage key tankmatematch.tanks. Each entry is the
        name you chose, the species slugs, and the gallon size if you set one. Clearing site data for this site
        deletes them. A shared link is only the checker address. Opening that link does not save the tank.
      </p>
      <p>
        Page views are recorded by{" "}
        <a href="https://vercel.com/docs/analytics">Vercel Web Analytics</a>. Vercel describes the recording as
        anonymous and aggregated: it does not use a third-party cookie, visitors are identified by a hash of the
        request, and that session is discarded after 24 hours. A page view can include the time, the URL (including a
        checker query such as the species list), the referrer, a filtered query string, an approximate location, and
        the browser, operating system, and device type. The list is on{" "}
        <a href="https://vercel.com/docs/analytics/privacy-policy">Vercel&apos;s Web Analytics privacy page</a>.
      </p>
      <p>
        The pages are static files. A host that serves them can also keep ordinary request logs: address, time, and
        user agent. There is no mailing list and no login.
      </p>
    </article>
  );
}
