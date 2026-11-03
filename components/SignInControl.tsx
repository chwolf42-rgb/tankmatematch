"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { useAuth } from "./AuthProvider";

export function SignInControl() {
  const { configured, ready, user, sendEmailCode, verifyEmailCode, signOut } = useAuth();
  const panelId = useId();
  const emailId = useId();
  const codeId = useId();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!configured) return null;

  if (!ready) {
    return <span className="inline-flex min-h-11 items-center px-3 text-sm text-slate-500">Account</span>;
  }

  if (user) {
    return (
      <div className="flex items-center gap-1">
        <span className="max-w-40 truncate px-2 text-sm text-slate-700" title={user.email || undefined}>
          {user.email || "Signed in"}
        </span>
        <button
          type="button"
          className="inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-slate-700 hover:bg-foam"
          onClick={() => void signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }

  async function onSend() {
    setBusy(true);
    setError("");
    setMessage("");
    const result = await sendEmailCode(email);
    setBusy(false);
    if (result) {
      setError(result);
      return;
    }
    setSent(true);
    setMessage("Check your email for a 6-digit code.");
  }

  async function onVerify() {
    setBusy(true);
    setError("");
    const result = await verifyEmailCode(email, code);
    setBusy(false);
    if (result) {
      setError(result);
      return;
    }
    setOpen(false);
    setCode("");
    setSent(false);
    setMessage("");
  }

  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        className="inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-slate-700 hover:bg-foam"
        onClick={() => setOpen((value) => !value)}
      >
        Sign in
      </button>
      {open ? (
        <form
          id={panelId}
          role="dialog"
          aria-label="Sign in with email"
          className="absolute right-0 z-50 mt-2 w-80 max-w-[calc(100vw-2rem)] rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 shadow-lg"
          onSubmit={(event) => {
            event.preventDefault();
            void (sent ? onVerify() : onSend());
          }}
        >
          <p className="text-sm font-semibold text-slate-900">Sign in with email</p>
          <label htmlFor={emailId} className="mt-3 block text-sm font-semibold text-slate-800">
            Email
          </label>
          <input
            id={emailId}
            type="email"
            autoComplete="email"
            inputMode="email"
            value={email}
            required
            onChange={(event) => {
              setEmail(event.target.value);
              setSent(false);
              setCode("");
              setMessage("");
            }}
            className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-base text-slate-900"
          />
          {sent ? (
            <>
              <label htmlFor={codeId} className="mt-3 block text-sm font-semibold text-slate-800">
                6-digit code
              </label>
              <input
                id={codeId}
                inputMode="numeric"
                autoComplete="one-time-code"
                pattern="[0-9]{6}"
                maxLength={6}
                value={code}
                onChange={(event) => setCode(event.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-base text-slate-900"
              />
            </>
          ) : null}
          <button
            type="submit"
            disabled={busy}
            className="mt-3 inline-flex min-h-11 w-full touch-manipulation items-center justify-center rounded-lg bg-deep px-4 text-sm font-semibold text-white disabled:opacity-60"
          >
            {busy ? "Please wait" : sent ? "Sign in" : "Email me a code"}
          </button>
          {sent ? (
            <button
              type="button"
              disabled={busy}
              className="mt-2 inline-flex min-h-11 w-full touch-manipulation items-center justify-center rounded-lg border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-800 disabled:opacity-60"
              onClick={() => void onSend()}
            >
              Email a new code
            </button>
          ) : null}
          {message ? (
            <p role="status" className="mt-2 text-sm text-slate-700">
              {message}
            </p>
          ) : null}
          {error ? (
            <p role="alert" className="mt-2 text-sm text-amber-900">
              {error}
            </p>
          ) : null}
          <p className="mt-3 text-xs leading-relaxed text-slate-600">
            Email is used only for sign-in and saved tanks. No password and no phone number.{" "}
            <Link href="/privacy" className="font-semibold text-teal-900 no-underline">
              Privacy
            </Link>
          </p>
        </form>
      ) : null}
    </div>
  );
}
