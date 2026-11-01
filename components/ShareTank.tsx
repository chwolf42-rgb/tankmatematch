"use client";

import { useEffect, useState } from "react";
import { buildQuery } from "@/lib/checker";
import { shareLinks, shareText } from "@/lib/saved-tanks";
import { site } from "@/lib/site";

export function ShareTank({ names, slugs, gallons }: { names: string[]; slugs: string[]; gallons: number | null }) {
  const [origin, setOrigin] = useState<string>(site.url);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const [shared, setShared] = useState(false);
  const [copied, setCopied] = useState(false);
  const text = shareText(names);
  const url = `${origin}/checker${buildQuery(slugs, gallons)}`;
  const links = shareLinks(url, text, `${site.url}/og.png`);

  useEffect(() => {
    setOrigin(window.location.origin);
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setCanNativeShare(typeof navigator.share === "function" && media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (names.length === 0) return null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-900">
      <h2 className="text-lg font-semibold tracking-tight">Share this tank</h2>
      <p className="mt-1 text-sm text-slate-700">{text}</p>
      <p className="mt-2 break-all text-sm">
        <a href={url}>{url.replace(/^https?:\/\//, "")}</a>
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        <li>
          <a href={links.x} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-lg border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-800 no-underline">
            Share on X
          </a>
        </li>
        <li>
          <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-lg border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-800 no-underline">
            Share on Facebook
          </a>
        </li>
        <li>
          <a href={links.reddit} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-lg border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-800 no-underline">
            Share on Reddit
          </a>
        </li>
        <li>
          <a href={links.pinterest} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-lg border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-800 no-underline">
            Share on Pinterest
          </a>
        </li>
        <li>
          <button
            type="button"
            className="inline-flex min-h-11 touch-manipulation items-center rounded-lg border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-800"
            onClick={() => {
              void navigator.clipboard.writeText(url).then(
                () => setCopied(true),
                () => {
                  setCopied(false);
                  window.prompt("Copy this link:", url);
                },
              );
            }}
          >
            {copied ? "Link copied" : "Copy link"}
          </button>
        </li>
        {canNativeShare ? (
          <li>
            <button
              type="button"
              className="inline-flex min-h-11 touch-manipulation items-center rounded-lg bg-deep px-3 text-sm font-semibold text-white"
              onClick={() => {
                void navigator.share({ title: "Tank Mate Match", text, url }).then(
                  () => setShared(true),
                  () => setShared(false),
                );
              }}
            >
              {shared ? "Shared" : "Share…"}
            </button>
          </li>
        ) : null}
      </ul>
    </div>
  );
}
