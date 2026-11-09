"use client";

import { useEffect, useSyncExternalStore, type ReactNode } from "react";
import { normalizeEmail, normalizeEmailCode } from "@/lib/email-otp";
import { isSupabaseConfigured } from "@/lib/supabase-config";
import { getSupabase } from "@/lib/supabase-browser";

export interface AuthUser {
  id: string;
  email: string;
}

interface AuthValue {
  configured: boolean;
  ready: boolean;
  user: AuthUser | null;
  sendEmailCode: (email: string) => Promise<string | null>;
  verifyEmailCode: (email: string, code: string) => Promise<string | null>;
  signOut: () => Promise<void>;
}

const configured = isSupabaseConfigured();

async function sendEmailCode(raw: string) {
  const email = normalizeEmail(raw);
  if (!email) return "Enter the email address you want to use.";
  try {
    const supabase = await getSupabase();
    if (!supabase) return "Sign-in is not configured.";
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { shouldCreateUser: true },
    });
    return error ? error.message : null;
  } catch {
    return "The code could not be sent. Try again.";
  }
}

async function verifyEmailCode(rawEmail: string, rawCode: string) {
  const email = normalizeEmail(rawEmail);
  const token = normalizeEmailCode(rawCode);
  if (!email) return "Enter the email address you want to use.";
  if (!token) return "Enter the 6-digit code from the email.";
  try {
    const supabase = await getSupabase();
    if (!supabase) return "Sign-in is not configured.";
    const { error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: "email",
    });
    return error ? error.message : null;
  } catch {
    return "That code could not be checked. Try again.";
  }
}

async function signOut() {
  const supabase = await getSupabase();
  if (!supabase) return;
  await supabase.auth.signOut();
}

const initial: AuthValue = {
  configured,
  ready: !configured,
  user: null,
  sendEmailCode,
  verifyEmailCode,
  signOut,
};

let current = initial;
const listeners = new Set<() => void>();

function replace(next: AuthValue) {
  current = next;
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** Auth state lives outside the page tree so the mate list is not serialized through a client component. */
export function useAuth(): AuthValue {
  return useSyncExternalStore(
    subscribe,
    () => current,
    () => initial,
  );
}

export function AuthProvider({ children }: { children?: ReactNode }) {
  useEffect(() => {
    if (!configured) return;
    let alive = true;
    const sub = { unsubscribe: () => {} };
    void getSupabase()
      .then((supabase) => {
        if (!alive || !supabase) {
          if (alive) replace({ ...current, ready: true });
          return;
        }
        const { data } = supabase.auth.onAuthStateChange((_event, next) => {
          if (!alive) return;
          const signedIn = next?.user;
          replace({
            ...current,
            ready: true,
            user: signedIn ? { id: signedIn.id, email: signedIn.email ?? "" } : null,
          });
        });
        if (!alive) {
          data.subscription.unsubscribe();
          return;
        }
        sub.unsubscribe = () => data.subscription.unsubscribe();
      })
      .catch(() => {
        if (alive) replace({ ...current, ready: true });
      });
    return () => {
      alive = false;
      sub.unsubscribe();
    };
  }, []);

  return children ?? null;
}
