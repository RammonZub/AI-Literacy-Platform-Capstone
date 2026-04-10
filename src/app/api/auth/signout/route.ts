import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { checkRateLimit, getRateLimitIdentifier } from "@/lib/rate-limit";
import { mergeCookieOptions } from "@/lib/supabase/cookie-config";
import type { Database } from "@/types/database.types";

function sanitizeError(error: unknown): { message: string } {
  if (process.env.NODE_ENV === "production") {
    return { message: "An error occurred" };
  }
  return { message: error instanceof Error ? error.message : "Unknown error" };
}

/**
 * POST /api/auth/signout
 *
 * Clears Supabase auth cookies on the *response* via `response.cookies.set`.
 * Using `cookies()` from `next/headers` alone often does not attach Set-Cookie
 * to the JSON response body in App Router handlers, so sessions appeared to persist after "sign out".
 */
export async function POST(request: NextRequest) {
  const identifier = getRateLimitIdentifier(request);
  const { success, resetTime } = checkRateLimit(identifier);

  if (!success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: {
          "X-RateLimit-Reset": String(resetTime),
          "Retry-After": String(Math.ceil((resetTime - Date.now()) / 1000)),
        },
      },
    );
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.json({ error: "Authentication service unavailable" }, { status: 503 });
  }

  const response = NextResponse.json({ success: true });

  const supabase = createServerClient<Database>(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, mergeCookieOptions(options ?? {}));
        });
      },
    },
  });

  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Sign-out error:", error);
      return NextResponse.json({ error: "Failed to sign out" }, { status: 500 });
    }

    return response;
  } catch (error) {
    console.error("Unexpected sign-out error:", error);
    return NextResponse.json(
      { error: sanitizeError(error).message },
      { status: 500 },
    );
  }
}
