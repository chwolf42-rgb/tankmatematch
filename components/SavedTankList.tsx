"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profiles } from "@/data/profiles";
import { buildQuery } from "@/lib/checker";
import { readSavedTanks, writeSavedTanks, type SavedTank } from "@/lib/saved-tanks";

const known = new Set(profiles.map((animal) => animal.slug));
const names = new Map(profiles.map((animal) => [animal.slug, animal.commonName]));

export function SavedTankList() {
  const [tanks, setTanks] = useState<SavedTank[] | null>(null);
  const [editing, setEditing] = useState<string | null>(null);
  const [draft, setDraft] = useState("");
  const [pendingDelete, setPendingDelete] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setTanks(readSavedTanks(window.localStorage, known));
  }, []);

  function persist(next: SavedTank[], note: string) {
    writeSavedTanks(window.localStorage, next);
    setTanks(next);
    setMessage(note);
  }

  if (tanks === null) {
    return <p className="text-slate-700">Checking this browser for saved tanks.</p>;
  }

  if (tanks.length === 0) {
    return (
      <p className="text-slate-700">
        No tanks saved in this browser yet. Build one in the <Link href="/checker">checker</Link>, then choose Save tank.
      </p>
    );
  }

  return (
    <div>
      {message ? (
        <p className="mb-4 text-sm text-slate-700" role="status">
          {message}
        </p>
      ) : null}
      <ul className="space-y-4">
        {tanks.map((tank) => {
          const speciesNames = tank.slugs.map((slug) => names.get(slug) ?? slug);
          const href = `/checker${buildQuery(tank.slugs, tank.gallons)}`;
          return (
            <li key={tank.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              {editing === tank.id ? (
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    const name = draft.replace(/\s+/g, " ").trim();
                    if (!name) {
                      setMessage("A tank needs a name.");
                      return;
                    }
                    persist(
                      tanks.map((item) => (item.id === tank.id ? { ...item, name: name.slice(0, 80) } : item)),
                      `Renamed to “${name.slice(0, 80)}”.`,
                    );
                    setEditing(null);
                  }}
                >
                  <label htmlFor={`rename-${tank.id}`} className="block text-sm font-semibold text-slate-800">
                    New name
                  </label>
                  <input
                    id={`rename-${tank.id}`}
                    value={draft}
                    maxLength={80}
                    onChange={(event) => setDraft(event.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-3 text-base text-slate-900"
                  />
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button type="submit" className="inline-flex min-h-11 items-center rounded-lg bg-deep px-3 text-sm font-semibold text-white">
                      Save name
                    </button>
                    <button type="button" className="inline-flex min-h-11 items-center rounded-lg border border-slate-300 px-3 text-sm font-semibold text-slate-800" onClick={() => setEditing(null)}>
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <h2 className="text-xl font-semibold tracking-tight text-slate-900">{tank.name}</h2>
                  <p className="mt-1 text-slate-700">{speciesNames.join(", ")}</p>
                  <p className="mt-1 text-sm text-slate-600">
                    {tank.gallons != null ? `${tank.gallons} gal` : "Any size"} · saved {tank.savedAt.slice(0, 10)}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Link href={href} className="inline-flex min-h-11 items-center rounded-lg bg-deep px-3 text-sm font-semibold text-white no-underline">
                      Open
                    </Link>
                    <button
                      type="button"
                      className="inline-flex min-h-11 items-center rounded-lg border border-slate-300 px-3 text-sm font-semibold text-slate-800"
                      onClick={() => {
                        setEditing(tank.id);
                        setDraft(tank.name);
                        setPendingDelete(null);
                      }}
                    >
                      Rename
                    </button>
                    {pendingDelete === tank.id ? (
                      <>
                        <button
                          type="button"
                          className="inline-flex min-h-11 items-center rounded-lg border border-red-800 bg-red-50 px-3 text-sm font-semibold text-red-900"
                          onClick={() => {
                            persist(
                              tanks.filter((item) => item.id !== tank.id),
                              `Deleted “${tank.name}”.`,
                            );
                            setPendingDelete(null);
                          }}
                        >
                          Confirm delete
                        </button>
                        <button type="button" className="inline-flex min-h-11 items-center rounded-lg border border-slate-300 px-3 text-sm font-semibold text-slate-800" onClick={() => setPendingDelete(null)}>
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button type="button" className="inline-flex min-h-11 items-center rounded-lg border border-slate-300 px-3 text-sm font-semibold text-slate-800" onClick={() => setPendingDelete(tank.id)}>
                        Delete
                      </button>
                    )}
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
