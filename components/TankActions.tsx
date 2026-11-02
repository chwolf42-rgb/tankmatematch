"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { insertCloudTank } from "@/lib/account-tanks";
import { buildQuery } from "@/lib/checker";
import { isCurrentPage } from "@/lib/nav";
import { BROWSER_ONLY_NOTICE } from "@/lib/notices";
import {
  addSavedTank,
  browserStore,
  createSavedTank,
  defaultTankName,
  MAX_TANK_NAME,
} from "@/lib/saved-tanks";
import { checkerShareUrl, networkShareUrl, SHARE_NETWORKS, shareMediaUrl, shareText } from "@/lib/share";
import { site } from "@/lib/site";
import { useAuth } from "./AuthProvider";

const buttonClass =
  "inline-flex min-h-11 touch-manipulation items-center rounded-lg border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-800 no-underline";

export function TankActions({
  slugs,
  tank,
  names,
  tankIgnored,
}: {
  slugs: string[];
  tank: number | null;
  names: string[];
  tankIgnored: boolean;
}) {
  const nameId = useId();
  const pathname = usePathname();
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState<string>(site.url);
  const [canShare, setCanShare] = useState(false);
  const [status, setStatus] = useState<{ tone: "ok" | "error"; text: string; showList?: boolean } | null>(null);
  const suggestion = defaultTankName(names, tank);
  const onChecker = isCurrentPage(pathname, "/checker");

  useEffect(() => {
    setOrigin(window.location.origin);
    setCanShare(typeof navigator.share === "function");
  }, []);

  if (slugs.length === 0) return null;

  const pageUrl = checkerShareUrl(origin, slugs, tank);
  const text = shareText(names, tank);
  const media = shareMediaUrl();

  async function copyLink(success: string) {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setStatus({ tone: "ok", text: success });
    } catch {
      window.prompt("Copy this link:", pageUrl);
      setStatus({ tone: "ok", text: "Copy the link from the prompt if it is still open." });
    }
  }

  async function saveTank() {
    const record = createSavedTank({
      name,
      fallbackName: suggestion,
      slugs,
      tank,
    });
    if (!record) {
      setStatus({ tone: "error", text: "Add a species before saving." });
      return;
    }
    if (user) {
      const saved = await insertCloudTank(record);
      if (saved.error) {
        setStatus({ tone: "error", text: saved.error });
        return;
      }
      setName("");
      const rounded = saved.rounded ? " Gallon size was stored as a whole number." : "";
      setStatus({ tone: "ok", text: `Saved "${record.name}" to your account.${rounded}`, showList: true });
      return;
    }
    const store = browserStore();
    if (!store) {
      setStatus({
        tone: "error",
        text: "This browser is not storing site data, so this tank cannot be saved here. You can still share the link.",
      });
      return;
    }
    const saved = addSavedTank(store, record);
    if (saved.error) {
      setStatus({ tone: "error", text: saved.error });
      return;
    }
    setName("");
    setStatus({ tone: "ok", text: `Saved "${record.name}" in this browser.`, showList: true });
  }

  async function onNativeShare() {
    if (typeof navigator.share !== "function") {
      await copyLink("Link copied.");
      return;
    }
    try {
      await navigator.share({ title: site.name, text, url: pageUrl });
      setStatus(null);
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") return;
      await copyLink("Sharing did not finish, so the link was copied.");
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 sm:p-5">
      <h2 className="text-lg font-semibold tracking-tight">Save and share</h2>
      {user ? (
        <p className="mt-1 text-sm leading-relaxed text-slate-700">
          This tank is saved to your account{user.email ? ` (${user.email})` : ""}, so you can open it on another device.
        </p>
      ) : (
        <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm leading-relaxed text-amber-950">
          {BROWSER_ONLY_NOTICE}
        </p>
      )}
      <p className="mt-3 text-sm text-slate-600">A share link is the checker address with this selection in it.</p>
      <form
        className="mt-3"
        onSubmit={(event) => {
          event.preventDefault();
          void saveTank();
        }}
      >
        <label htmlFor={nameId} className="block text-sm font-semibold text-slate-800">
          Tank name
        </label>
        <div className="mt-1.5 flex flex-col gap-2 sm:flex-row">
          <input
            id={nameId}
            value={name}
            maxLength={MAX_TANK_NAME}
            placeholder={suggestion}
            autoComplete="off"
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-base text-slate-900 placeholder:text-slate-600"
          />
          <button
            type="submit"
            className="inline-flex min-h-11 shrink-0 touch-manipulation items-center justify-center rounded-lg bg-deep px-4 text-sm font-semibold text-white"
          >
            Save my tank
          </button>
        </div>
        {tankIgnored ? (
          <p className="mt-2 text-sm text-amber-900">
            The gallon box is not a size this checker saves, so this tank is saved as any size.
          </p>
        ) : null}
      </form>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Share this tank">
        {SHARE_NETWORKS.map((network) => (
          <li key={network.id}>
            <a
              href={networkShareUrl(network.id, pageUrl, text, media)}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
            >
              {network.label}
              <span className="sr-only">, opens in a new tab</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-2 flex flex-wrap gap-2">
        {canShare ? (
          <button type="button" onClick={onNativeShare} className={buttonClass}>
            Share
          </button>
        ) : null}
        <button type="button" onClick={() => copyLink("Link copied.")} className={buttonClass}>
          Copy link
        </button>
      </div>
      {status ? (
        <p role="status" className={`mt-3 text-sm ${status.tone === "error" ? "text-amber-900" : "text-slate-700"}`}>
          {status.text}{" "}
          {status.showList ? (
            <Link href="/my-tanks" className="font-semibold text-teal-900">
              View My tanks
            </Link>
          ) : null}
        </p>
      ) : null}
      {onChecker ? null : (
        <p className="mt-3 text-sm">
          <Link href={`/checker${buildQuery(slugs, tank)}`} className="font-semibold text-teal-900">
            Open this selection on the checker page
          </Link>
        </p>
      )}
    </div>
  );
}
