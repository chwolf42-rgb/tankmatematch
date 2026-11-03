"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { profiles } from "@/data/profiles";
import { deleteCloudTank, listCloudTanks, renameCloudTank } from "@/lib/account-tanks";
import { buildQuery, labelUnknownSlug } from "@/lib/checker";
import { BROWSER_ONLY_NOTICE } from "@/lib/notices";
import {
  browserStore,
  deleteSavedTank,
  loadSavedTanks,
  MAX_TANK_NAME,
  persistSavedTanks,
  renameSavedTank,
  SAVED_TANKS_KEY,
  type SavedTank,
} from "@/lib/saved-tanks";
import { useAuth, type AuthUser } from "./AuthProvider";

const buttonClass =
  "inline-flex min-h-11 touch-manipulation items-center rounded-lg border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-800 no-underline";

function formatSavedAt(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime()) || date.getTime() === 0) return "";
  return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(date);
}

function AccountNotice({ user }: { user: AuthUser | null }) {
  if (user) {
    return (
      <p className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm leading-relaxed text-slate-800">
        Signed in{user.email ? ` as ${user.email}` : ""}. Tanks you save go to this account, so they are available on
        other devices.
      </p>
    );
  }
  return (
    <p className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm leading-relaxed text-amber-950">
      {BROWSER_ONLY_NOTICE}
    </p>
  );
}

export function MyTanksList() {
  const { ready, user } = useAuth();
  const [tanks, setTanks] = useState<SavedTank[] | null>(null);
  const [storageError, setStorageError] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState("");
  const [renameError, setRenameError] = useState("");
  const [pendingDelete, setPendingDelete] = useState<string | null>(null);
  const names = useMemo(() => new Map(profiles.map((animal) => [animal.slug, animal.commonName])), []);

  useEffect(() => {
    if (!ready) return;
    let cancelled = false;
    if (user) {
      setTanks(null);
      void listCloudTanks().then((result) => {
        if (cancelled) return;
        setTanks(result.tanks);
        setStorageError(result.error ?? "");
      });
      return () => {
        cancelled = true;
      };
    }
    const store = browserStore();
    if (!store) {
      setTanks([]);
      setStorageError("This browser is not storing site data, so saved tanks cannot be read here.");
      return;
    }
    const readyStore = store;
    setStorageError("");
    setTanks(loadSavedTanks(readyStore));
    function onStorage(event: StorageEvent) {
      if (event.key && event.key !== SAVED_TANKS_KEY) return;
      setTanks(loadSavedTanks(readyStore));
    }
    window.addEventListener("storage", onStorage);
    return () => {
      cancelled = true;
      window.removeEventListener("storage", onStorage);
    };
  }, [ready, user]);

  function write(next: SavedTank[]) {
    const store = browserStore();
    if (!store) {
      setStorageError("This browser is not storing site data, so the change was not saved.");
      return;
    }
    const error = persistSavedTanks(store, next);
    if (error) {
      setStorageError(error);
      return;
    }
    setStorageError("");
    setTanks(next);
  }

  if (!ready || tanks === null) {
    return (
      <div className="space-y-4">
        {ready ? <AccountNotice user={user} /> : null}
        <p className="text-slate-600">Loading saved tanks.</p>
      </div>
    );
  }

  if (tanks.length === 0) {
    return (
      <div className="space-y-4">
        <AccountNotice user={user} />
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center">
          {storageError ? (
            <p className="text-sm text-amber-900">{storageError}</p>
          ) : (
            <>
              <p className="text-lg font-semibold text-slate-900">No saved tanks yet</p>
              <p className="mx-auto mt-2 max-w-md text-slate-600">
                {user
                  ? "Name a selection in the checker and save it. It will be listed on this account."
                  : "Name a selection in the checker and it will be listed here."}
              </p>
            </>
          )}
          <p className="mt-4">
            <Link href="/checker" className="inline-flex min-h-11 items-center rounded-lg bg-deep px-4 text-sm font-semibold text-white no-underline">
              Open the checker
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <AccountNotice user={user} />
      {storageError ? (
        <p role="status" className="rounded-xl border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-950">
          {storageError}
        </p>
      ) : null}
      <ul className="grid gap-3" aria-label="Saved tanks">
        {tanks.map((tank) => {
          const unknown = tank.slugs.filter((slug) => !names.has(slug));
          const species = tank.slugs.map((slug) => names.get(slug) ?? labelUnknownSlug(slug)).join(", ");
          const size = tank.tank != null ? `${tank.tank} gal` : "Any size";
          const saved = formatSavedAt(tank.savedAt);
          const editing = editingId === tank.id;
          return (
            <li key={tank.id}>
              <article className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
                {editing ? (
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      void (async () => {
                        const next = renameSavedTank(tanks, tank.id, draft);
                        if (!next) {
                          setRenameError("Enter a name.");
                          return;
                        }
                        if (user) {
                          const error = await renameCloudTank(tank.id, draft);
                          if (error) {
                            setRenameError(error);
                            return;
                          }
                          setTanks(next);
                        } else {
                          write(next);
                        }
                        setEditingId(null);
                        setRenameError("");
                      })();
                    }}
                  >
                    <label htmlFor={`rename-${tank.id}`} className="block text-sm font-semibold text-slate-800">
                      Tank name
                    </label>
                    <div className="mt-1.5 flex flex-col gap-2 sm:flex-row">
                      <input
                        id={`rename-${tank.id}`}
                        value={draft}
                        maxLength={MAX_TANK_NAME}
                        autoComplete="off"
                        onChange={(event) => setDraft(event.target.value)}
                        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-base text-slate-900"
                      />
                      <button
                        type="submit"
                        className="inline-flex min-h-11 touch-manipulation items-center justify-center rounded-lg bg-deep px-4 text-sm font-semibold text-white"
                      >
                        Save name
                      </button>
                      <button
                        type="button"
                        className={buttonClass}
                        onClick={() => {
                          setEditingId(null);
                          setRenameError("");
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                    {renameError ? <p className="mt-2 text-sm text-amber-900">{renameError}</p> : null}
                  </form>
                ) : (
                  <h2 className="text-xl font-semibold tracking-tight text-slate-900">{tank.name}</h2>
                )}
                <p className="mt-2 text-sm text-slate-700">
                  {species}
                  <span className="text-slate-400"> · </span>
                  {size}
                  {saved ? (
                    <>
                      <span className="text-slate-400"> · </span>
                      Saved {saved}
                    </>
                  ) : null}
                </p>
                {unknown.length > 0 ? (
                  <p className="mt-2 text-sm text-amber-900">
                    Not in the list: {unknown.map((slug) => labelUnknownSlug(slug)).join(", ")}. Opening the tank leaves
                    those names out.
                  </p>
                ) : null}
                <div className="mt-3 flex flex-wrap gap-2">
                  <Link href={`/checker${buildQuery(tank.slugs, tank.tank)}`} className="inline-flex min-h-11 touch-manipulation items-center rounded-lg bg-deep px-4 text-sm font-semibold text-white no-underline">
                    Open
                  </Link>
                  {editing ? null : (
                    <button
                      type="button"
                      className={buttonClass}
                      onClick={() => {
                        setEditingId(tank.id);
                        setDraft(tank.name);
                        setRenameError("");
                        setPendingDelete(null);
                      }}
                    >
                      Rename
                    </button>
                  )}
                  {pendingDelete === tank.id ? (
                    <>
                      <button
                        type="button"
                        className="inline-flex min-h-11 touch-manipulation items-center rounded-lg border border-red-300 bg-red-50 px-3 text-sm font-semibold text-red-900"
                        onClick={() => {
                          void (async () => {
                            if (user) {
                              const error = await deleteCloudTank(tank.id);
                              if (error) {
                                setStorageError(error);
                                return;
                              }
                              setTanks(deleteSavedTank(tanks, tank.id));
                            } else {
                              write(deleteSavedTank(tanks, tank.id));
                            }
                            setPendingDelete(null);
                            if (editingId === tank.id) setEditingId(null);
                          })();
                        }}
                      >
                        Delete {tank.name}
                      </button>
                      <button type="button" className={buttonClass} onClick={() => setPendingDelete(null)}>
                        Keep
                      </button>
                    </>
                  ) : (
                    <button type="button" className={buttonClass} onClick={() => setPendingDelete(tank.id)}>
                      Delete
                    </button>
                  )}
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
