/**
 * Supabase Server Client
 *
 * Server-side Supabase client for use in API routes and Server Components.
 * Uses cookies for session persistence.
 */

import { createServerClient } from "@supabase/ssr";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import type { Database } from "@/types/database.types";
import { mergeCookieOptions } from "./cookie-config";

/**
 * Create a Supabase client with cookie-based auth (for user operations)
 *
 * This client respects Row Level Security (RLS) policies.
 *
 * @throws Error with user-friendly message if Supabase is not configured
 */
export async function createClient() {
  // Validate environment variables before creating client
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Authentication service unavailable. Please refresh the page or contact support if the issue persists.",
    );
  }

  const cookieStore = await cookies();

  return createServerClient<Database>(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          try {
            cookieStore.set(name, value, mergeCookieOptions(options));
          } catch {
            // ========================================
            // EXPECTED: Cookie setting failures in Server Components
            // ========================================
            // WHY this happens: In Next.js 15+, cookies can only be set in:
            // - Server Actions (e.g., form submissions)
            // - Route Handlers (e.g., API routes)
            //
            // They CANNOT be set in Server Components. When getSession() or
            // getUser() is called in a Server Component (like /login page),
            // Supabase SSR may try to refresh the session and set cookies,
            // which will fail. This is expected and harmless.
            //
            // The session check still works - we just can't refresh cookies.
            // Cookie refresh happens in middleware for protected routes.
            //
            // SILENT HANDLING: We intentionally don't log this error because:
            // 1. It's expected behavior in Server Components
            // 2. It doesn't affect functionality (session check still works)
            // 3. Middleware handles cookie refresh for protected routes
            // ========================================
          }
        });
      },
    },
  });
}

/**
 * Create a Supabase service role client (bypasses RLS)
 *
 * PURPOSE: Use for server-side operations that need to bypass RLS policies,
 * such as the Notion → Supabase sync service.
 *
 * SECURITY: This client uses the service role key which has full admin access.
 * ONLY use this in API routes or server-side code, never expose to clients.
 *
 * @returns Supabase client with service role permissions
 */
export function createServiceClient() {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY is not set");
  }

  return createSupabaseClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  );
}
