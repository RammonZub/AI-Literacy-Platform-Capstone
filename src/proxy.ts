/**
 * Next.js Proxy — Auth Enforcement
 *
 * PURPOSE: Protect /platform/* routes behind authentication.
 * This is the first line of defense — runs before any page renders.
 *
 * CONTEXT: Without proxy, unauthenticated users could access
 * platform content by navigating directly to /platform/* URLs.
 *
 * STRATEGY:
 * 1. Public routes (/, /onboarding, /checkout/**, etc.) — pass through
 * 2. /platform/** — require auth
 * 3. Auth check uses Supabase session refresh (also keeps session alive)
 * 4. MVP: subscription / paywall checks are disabled (layout + server actions)
 *
 * ACCESS CHECK:
 * Post-MVP: re-enable in `src/app/platform/layout.tsx` and `verifyUserAccess` helpers.
 *
 * REDIRECTS:
 * - Not authenticated → /login with return URL parameter
 *
 * @see src/lib/services/user-access.ts - Sets JWT metadata on access grant
 * @see src/app/platform/layout.tsx - Auth user data; MVP skips subscription gate
 */

import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";
import { mergeCookieOptions } from "@/lib/supabase/cookie-config";
import { createDebugLogger } from "@/lib/utils/debug";

// Debug logger for proxy operations (only logs in development)
const debugLog = createDebugLogger("PROXY");

// ==========================================
// PUBLIC PATHS (no auth required)
// ==========================================
// WHY these are public:
// - / : Landing page
// - /checkout, /checkout/cancel : Checkout entry (pre-auth)
// - /api/** : API routes handle their own auth
// - /auth/callback/** : Auth callback page (OAuth, hash fragments)
// - /_next/** : Next.js static assets
// - /login, /signup : Auth pages
// - Routes outside this matcher (e.g. `/checkout/welcome`, `/onboarding`) are not proxied here
//
// NOTE: /checkout/success is NOT in this list on purpose!
// It's in AUTH_FLOW_ROUTES below because it needs session refresh after Stripe redirect.
const PUBLIC_PATH_PREFIXES = [
  "/",
  "/api",
  "/auth/callback",
  "/_next",
  "/login",
  "/signup",
];

// Specific public checkout routes (NOT all /checkout/* paths)
// WHY: Only these specific paths are truly public. /checkout/success needs auth flow handling.
const CHECKOUT_PUBLIC_ROUTES = ["/checkout", "/checkout/cancel"];

/**
 * Check if a path is public (no auth required)
 *
 * WHY exact match for '/': Without it, every path starting with '/' would match.
 * The root path needs special handling — it's the only prefix that is also exact.
 *
 * WHY check CHECKOUT_PUBLIC_ROUTES first: We need specific checkout paths (/checkout, /checkout/cancel)
 * to be public, but NOT /checkout/success (which needs session refresh via AUTH_FLOW_ROUTES).
 * By checking specific routes before general prefixes, we avoid path overlap conflicts.
 */
function isPublicPath(pathname: string): boolean {
  // Exact match for root
  if (pathname === "/") return true;

  // Static files and images
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/favicon")
  ) {
    return true;
  }

  // Check specific public checkout routes BEFORE general prefixes
  // This prevents /checkout from matching /checkout/success
  if (CHECKOUT_PUBLIC_ROUTES.some((route) => pathname.startsWith(route))) {
    return true;
  }

  // Check other public prefixes (skip '/' since we handled it above)
  return PUBLIC_PATH_PREFIXES.slice(1).some((prefix) => pathname.startsWith(prefix));
}

// ==========================================
// AUTH FLOW ROUTES (session refresh only, no auth checks)
// ==========================================
// WHY these routes skip auth/access checks but still run proxy:
// - /checkout/success: Post-payment page - user just completed payment, needs session refresh
// - Proxy still runs to ensure cookies are properly set/refreshed
const AUTH_FLOW_ROUTES = ["/checkout/success"];

function isAuthFlowRoute(pathname: string): boolean {
  return AUTH_FLOW_ROUTES.some((route) => pathname.startsWith(route));
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Track proxy execution (dev only)
  debugLog("Executing", {
    pathname,
    method: request.method,
    hasCookie: !!request.headers.get("cookie"),
  });

  // Check auth flow routes FIRST (before public paths)
  // WHY: /checkout/success starts with '/checkout' but needs session refresh
  const skipAuthChecks = isAuthFlowRoute(pathname);
  debugLog("Auth flow route check", { pathname, skipAuthChecks });

  // Skip proxy for public paths (no session refresh needed)
  // Only skip if NOT an auth flow route
  if (!skipAuthChecks && isPublicPath(pathname)) {
    debugLog("Public path - skipping", { pathname });
    return NextResponse.next();
  }

  // ========================================
  // Create Supabase client for proxy context
  // ========================================
  // WHY: Proxy needs to read and refresh the session cookie.
  // This is different from the server client — it works with
  // request/response objects instead of the cookie store.
  //
  // Forward pathname so Server Components (e.g. platform layout) can send users to
  // `/login?redirect=...` with the same deep link the proxy would use.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-internal-pathname", pathname);

  let response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          // Set cookies on the request (for downstream server components)
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });
          // Set cookies on the response (for the browser)
          response = NextResponse.next({
            request: { headers: requestHeaders },
          });
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, mergeCookieOptions(options));
          });
        },
      },
    },
  );

  // ========================================
  // Refresh the session (extends expiry, handles token rotation)
  // ========================================
  // NOTE: Wrapped in try-catch because malformed cookies can cause
  // TypeError when Supabase SSR tries to parse them
  let user = null;
  let error = null;

  try {
    const result = await supabase.auth.getUser();
    user = result.data.user;
    error = result.error;
  } catch (e) {
    console.error("[PROXY] Error getting user session:", e);
    // Clear malformed cookies by setting them to empty
    const cookieNames = request.cookies.getAll().map((c) => c.name);
    cookieNames.forEach((name) => {
      if (name.includes("sb-") && name.includes("-auth")) {
        response.cookies.set(name, "", { maxAge: 0, path: "/" });
      }
    });
  }

  debugLog("Session refresh result", {
    pathname,
    hasError: !!error,
    errorMessage: error?.message,
    hasUser: !!user,
    userId: user?.id,
    skipAuthChecks,
  });

  // ========================================
  // AUTH CHECK: Redirect unauthenticated users
  // ========================================
  // Skip auth-enforcement for auth-flow routes (e.g. post-payment success) where session may still be establishing
  if (!skipAuthChecks && (error || !user)) {
    const redirectUrl = new URL("/login", request.url);
    redirectUrl.searchParams.set("redirect", pathname); // Preserve return URL
    debugLog("Auth check failed - redirecting", {
      loginPath: "/login",
      originalPath: pathname,
    });
    return NextResponse.redirect(redirectUrl);
  }

  // NOTE: MVP — no subscription check here or in platform layout (see layout + progress actions).

  return response;
}

// ==========================================
// MATCHER: Run proxy on protected and auth flow routes
// ==========================================
// WHY matcher: More efficient than checking every request in the function.
// Next.js skips proxy entirely for non-matching paths.
//
// Includes:
// - /platform/* : Protected routes (require auth; MVP: no subscription gate)
// - /checkout/success/* : Post-payment page (needs session refresh)
//
// NOTE: /onboarding is NOT matched — anonymous assessment runs before account; results are
// held in sessionStorage and synced after signup (see SyncOnboardingSession in platform layout +
// src/app/onboarding/actions.ts).
//
// Excludes:
// - Public paths (/, /checkout, etc.)
// - /auth/callback (OAuth handles tokens in hash, server-side refresh not needed)
// - API routes (handle their own auth)
export const config = {
  matcher: [
    "/platform/:path*",
    "/checkout/success",
    "/checkout/success/:path*",
  ],
};
