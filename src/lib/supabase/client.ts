/**
 * Supabase Browser Client
 *
 * Client-side Supabase client for use in React components.
 * Uses cookies for session persistence (via @supabase/ssr).
 *
 * IMPORTANT: This is a SINGLETON pattern. All hooks share the SAME client
 * instance to ensure consistent auth state across the application.
 *
 * NOTE: @supabase/ssr's createBrowserClient stores sessions in cookies,
 * not localStorage. The "implicit flow" refers to token transmission via
 * URL hash fragments (#access_token=...), not session storage.
 */

import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/types/database.types";

// Singleton instance - shared across all hooks for consistent auth state
let client: ReturnType<typeof createBrowserClient<Database>> | undefined;

export function createClient() {
  if (!client) {
    client = createBrowserClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );
  }
  return client;
}
