"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
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

const AuthContext = createContext<AuthValue | null>(null);

export function useAuth(): AuthValue {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used within AuthProvider");
  return value;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const configured = isSupabaseConfigured();
  const [ready, setReady] = useState(!configured);
  const [session, setSession] = useState<AuthUser | null>(null);

  useEffect(() => {
    if (!configured) return;
    let alive = true;
    const sub = { unsubscribe: () => {} };
    void getSupabase()
      .then((supabase) => {
        if (!alive || !supabase) {
          if (alive) setReady(true);
          return;
        }
        const { data } = supabase.auth.onAuthStateChange((_event, next) => {
          if (!alive) return;
          const signedIn = next?.user;
          setSession(signedIn ? { id: signedIn.id, email: signedIn.email ?? "" } : null);
          setReady(true);
        });
        if (!alive) {
          data.subscription.unsubscribe();
          return;
        }
        sub.unsubscribe = () => data.subscription.unsubscribe();
      })
      .catch(() => {
        if (alive) setReady(true);
      });
    return () => {
      alive = false;
      sub.unsubscribe();
    };
  }, [configured]);

  const sendEmailCode = useCallback(async (raw: string) => {
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
  }, []);

  const verifyEmailCode = useCallback(async (rawEmail: string, rawCode: string) => {
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
  }, []);

  const signOut = useCallback(async () => {
    const supabase = await getSupabase();
    if (!supabase) return;
    await supabase.auth.signOut();
  }, []);

  const sessionId = session?.id ?? null;
  const sessionEmail = session?.email ?? "";
  const user = useMemo(
    () => (sessionId ? { id: sessionId, email: sessionEmail } : null),
    [sessionId, sessionEmail],
  );

  const value = useMemo(
    () => ({ configured, ready, user, sendEmailCode, verifyEmailCode, signOut }),
    [configured, ready, user, sendEmailCode, verifyEmailCode, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
