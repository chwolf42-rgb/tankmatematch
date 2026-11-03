import type { SupabaseClient } from "@supabase/supabase-js";
import { supabaseConfig } from "./supabase-config";

let client: SupabaseClient | null = null;
let pending: Promise<SupabaseClient | null> | null = null;

/** Browser client. Loaded only when both public env vars are set. */
export async function getSupabase(): Promise<SupabaseClient | null> {
  const config = supabaseConfig();
  if (!config) return null;
  if (client) return client;
  if (!pending) {
    pending = import("@supabase/supabase-js")
      .then(({ createClient }) => {
        client = createClient(config.url, config.anonKey, {
          auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: false,
          },
        });
        return client;
      })
      .catch((error: unknown) => {
        pending = null;
        throw error;
      });
  }
  return pending;
}
