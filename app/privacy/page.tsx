import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What this version of Tank Mate Match stores. There are no accounts and no analytics scripts.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="wrap">
      <h1>Privacy</h1>
      <p className="lede">This version of the site does not ask for an account, set a cookie, or run an analytics script.</p>
      <p>
        The checker keeps your selection in the page address, for example the species slugs and an optional gallon
        count. That address stays in your browser until you copy it or send it to someone. Nothing about the
        selection is written to a database, because there is not one.
      </p>
      <p>
        The pages are static files. A host that serves them, such as the platform the site is later deployed on, can
        keep ordinary request logs: address, time, and user agent. This site does not add its own tracking on top of
        that. If analytics are added later, this page will name the tool and what it collects before the script is
        turned on.
      </p>
      <p>There is no mailing list and no login. A message sent by email to whoever publishes the site is just email.</p>
    </article>
  );
}
