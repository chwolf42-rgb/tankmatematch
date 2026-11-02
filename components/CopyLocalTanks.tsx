"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { insertCloudTank, loadCopiedIds, rememberCopiedIds, tanksToCopy } from "@/lib/account-tanks";
import { browserStore, loadSavedTanks, type SavedTank } from "@/lib/saved-tanks";
import { useAuth } from "./AuthProvider";

const DISMISS_KEY = "tankmatematch.dismiss-copy";

export function CopyLocalTanks() {
  const { ready, user } = useAuth();
  const [pending, setPending] = useState<SavedTank[]>([]);
  const [dismissed, setDismissed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [done, setDone] = useState("");

  const refresh = useCallback(() => {
    if (!user) {
      setPending([]);
      setDismissed(false);
      return;
    }
    const store = browserStore();
    if (!store) {
      setPending([]);
      return;
    }
    let skipped = false;
    try {
      skipped = window.sessionStorage.getItem(DISMISS_KEY) === user.id;
    } catch {
      skipped = false;
    }
    setDismissed(skipped);
    const copied = loadCopiedIds(store)[user.id] ?? [];
    setPending(tanksToCopy(loadSavedTanks(store), copied));
  }, [user]);

  useEffect(() => {
    if (!ready) return;
    refresh();
  }, [ready, refresh]);

  useEffect(() => {
    setDone("");
    setMessage("");
  }, [user?.id]);

  if (!user) return null;

  if (done && (dismissed || pending.length === 0)) {
    return (
      <div className="border-b border-emerald-200 bg-emerald-50">
        <p role="status" className="mx-auto w-full max-w-6xl px-4 py-3 text-sm text-emerald-950 sm:px-6">
          {done}{" "}
          <Link href="/my-tanks" className="font-semibold text-teal-900">
            View My tanks
          </Link>
        </p>
      </div>
    );
  }

  if (dismissed || pending.length === 0) return null;

  const countLabel = pending.length === 1 ? "1 tank saved in this browser" : `${pending.length} tanks saved in this browser`;

  async function onCopy() {
    if (!user) return;
    setBusy(true);
    setMessage("");
    const store = browserStore();
    const copied: string[] = [];
    let failure = "";
    for (const tank of pending) {
      const result = await insertCloudTank(tank);
      if (result.error) {
        failure = result.error;
        break;
      }
      copied.push(tank.id);
    }
    if (store && copied.length > 0) rememberCopiedIds(store, user.id, copied);
    setBusy(false);
    refresh();
    if (failure) {
      setMessage(copied.length > 0 ? `Copied ${copied.length}, then stopped. ${failure}` : failure);
      return;
    }
    setDone(copied.length === 1 ? "Copied 1 tank to your account." : `Copied ${copied.length} tanks to your account.`);
  }

  return (
    <div className="border-b border-amber-200 bg-amber-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-3 sm:px-6">
        <p className="text-sm text-amber-950">
          Copy {countLabel} to your account? They stay in this browser too.
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            disabled={busy}
            className="inline-flex min-h-11 touch-manipulation items-center rounded-lg bg-deep px-4 text-sm font-semibold text-white disabled:opacity-60"
            onClick={() => void onCopy()}
          >
            {busy ? "Copying" : "Copy to my account"}
          </button>
          <button
            type="button"
            disabled={busy}
            className="inline-flex min-h-11 touch-manipulation items-center rounded-lg border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-800 disabled:opacity-60"
            onClick={() => {
              try {
                window.sessionStorage.setItem(DISMISS_KEY, user.id);
              } catch {
                // Hiding the offer still works for this view.
              }
              setDismissed(true);
            }}
          >
            Not now
          </button>
        </div>
        {message ? (
          <p role="status" className="text-sm text-amber-950">
            {message}
          </p>
        ) : null}
      </div>
    </div>
  );
}
