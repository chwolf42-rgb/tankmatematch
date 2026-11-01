"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { addSavedTank, suggestedTankName } from "@/lib/saved-tanks";

export function SaveTank({ slugs, gallons, names }: { slugs: string[]; gallons: number | null; names: string[] }) {
  const nameId = useId();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  if (slugs.length === 0) return null;

  function save() {
    if (typeof window === "undefined") return;
    const result = addSavedTank(
      window.localStorage,
      { name: name.trim() ? name : suggestedTankName(names), slugs, gallons },
      undefined,
    );
    if (!result.ok) {
      setMessage(result.message);
      return;
    }
    setMessage(`Saved “${result.tank.name}” in this browser.`);
    setName("");
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 shadow-sm">
      <h2 className="text-lg font-semibold tracking-tight">Save this tank</h2>
      <p className="mt-1 text-sm text-slate-700">The name, species, and gallon size stay in this browser only.</p>
      <label htmlFor={nameId} className="mt-3 block text-sm font-semibold text-slate-800">
        Tank name
      </label>
      <input
        id={nameId}
        value={name}
        maxLength={80}
        placeholder={names.length > 0 ? suggestedTankName(names) : "Name this tank"}
        onChange={(event) => setName(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            save();
          }
        }}
        className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-base text-slate-900 placeholder:text-slate-600"
      />
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <button type="button" onClick={save} className="inline-flex min-h-11 touch-manipulation items-center rounded-lg bg-deep px-4 text-sm font-semibold text-white">
          Save tank
        </button>
        <Link href="/my-tanks" className="text-sm font-semibold text-teal-900">
          My tanks
        </Link>
      </div>
      {message ? (
        <p className="mt-2 text-sm text-slate-700" role="status">
          {message}
        </p>
      ) : null}
    </div>
  );
}
