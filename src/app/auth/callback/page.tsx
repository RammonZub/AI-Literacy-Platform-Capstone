/**
 * Auth Callback Page (Client-Side)
 *
 * PURPOSE: Handle Supabase auth redirects for both implicit and PKCE flows.
 * Establishes the user session, then redirects to the intended destination.
 *
 * CONTEXT: Supabase uses TWO different auth flows depending on the method:
 *
 * 1. IMPLICIT FLOW (email invites, magic links):
 *    - Supabase appends tokens as a URL hash fragment: #access_token=...
 *    - Hash fragments are client-side only — server routes can't see them
 *    - The Supabase browser client auto-detects the hash and sets the session
 *    - This is WHY this must be a client page, not a server route
 *
 * 2. PKCE FLOW (OAuth providers like Google, GitHub, password reset):
 *    - Supabase appends ?code=AUTH_CODE as a query parameter
 *    - We exchange the code for a session using exchangeCodeForSession()
 *
 * PASSWORD RESET FLOW:
 * - Password reset emails use PKCE flow with type=recovery
 * - After code exchange, we redirect to /reset-password for the user to set new password
 * - The type parameter is checked to determine the correct redirect destination
 *
 * FLOW:
 * 1. User clicks magic link or completes OAuth or password reset
 * 2. Supabase redirects to /auth/callback with tokens (hash or code)
 * 3. This page initializes the Supabase client (which reads the hash)
 * 4. onAuthStateChange fires with INITIAL_SESSION or SIGNED_IN event
 *    - INITIAL_SESSION: Client loads session from hash/storage on init
 *    - SIGNED_IN: User explicitly signs in (less common for magic links)
 * 5. After cookies are present, redirect by type / next:
 *    - type=recovery → /reset-password
 *    - next param → next (if valid internal path)
 *    - default → /
 *
 * SECURITY: The `next` param is validated to be a relative path (starts
 * with '/') to prevent open redirect attacks.
 *
 * @see src/app/api/stripe/webhook/route.ts - Sets redirectTo for invites
 * @see src/lib/supabase/client.ts - Browser client that reads hash fragments
 */

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";
import { AuthLoader } from "@/components/ui/PageLoader";
import { getSafeRedirect } from "@/lib/security/redirect-validation";
import { createClient } from "@/lib/supabase/client";
import { createDebugLogger, isDevelopment } from "@/lib/utils/debug";

// Debug logger for auth callback operations (only logs in development)
const debugLog = createDebugLogger("CALLBACK");

/**
 * Auth callback content - uses useSearchParams (requires Suspense wrapper)
 */
function AuthCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const hasHandled = useRef(false);
  // Use ReturnType<typeof setInterval> for a cross-environment-safe timer type
  // (Node.js returns NodeJS.Timeout, browsers return number)
  const pollForCookiesRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Prevent double-execution in React Strict Mode
    if (hasHandled.current) return;
    hasHandled.current = true;

    const supabase = createClient();

    const hasSupabaseAuthCookie = (): boolean => {
      if (typeof document === "undefined") return false;

      return document.cookie
        .split(";")
        .map((chunk) => chunk.trim().split("=")[0] || "")
        .some(
          (cookieName) =>
            cookieName === "sb-access-token" ||
            (cookieName.startsWith("sb-") && cookieName.includes("-auth-token")),
        );
    };

    // Read the intended destination from query params
    // SECURITY: Use getSafeRedirect to prevent open redirect attacks
    // This validates that the URL is internal and blocks dangerous patterns
    const next = searchParams.get("next");
    let type = searchParams.get("type");

    // Also check for type in hash fragment (implicit flow)
    // Hash format: #access_token=...&type=recovery&...
    const hash = window.location.hash;
    if (!type && hash && hash.includes("type=")) {
      const hashParams = new URLSearchParams(hash.substring(1)); // Remove the # prefix
      type = hashParams.get("type");
    }

    // Determine redirect based on auth type
    // type=recovery = password reset → redirect to /reset-password
    let safeRedirect = "/";
    if (type === "recovery") {
      safeRedirect = "/reset-password";
    } else {
      // SECURITY: Validate the next parameter to prevent open redirect attacks
      // getSafeRedirect blocks protocol-relative URLs, javascript:, data:, etc.
      safeRedirect = getSafeRedirect(next, "/");
    }

    // DEBUG: Log the current URL to see if hash fragment is present
    debugLog("Page loaded", {
      href: window.location.href,
      hash: window.location.hash,
      hashLength: window.location.hash.length,
      search: window.location.search,
      pathname: window.location.pathname,
      type,
      safeRedirect,
    });

    // The Supabase browser client automatically detects #access_token=...
    // in the URL hash and establishes the session. We listen for auth events
    // to know when the session is ready, then redirect.
    //
    // WHY we handle INITIAL_SESSION: When the page loads with a magic link hash,
    // the Supabase client reads the hash and fires INITIAL_SESSION (not SIGNED_IN).
    // This is the primary event for magic link authentication.
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      debugLog("onAuthStateChange fired", {
        event,
        hasSession: !!session,
        hasAccessToken: !!session?.access_token,
        userId: session?.user?.id,
        safeRedirect,
      });

      // Handle events that indicate a valid session exists:
      // - INITIAL_SESSION: Magic link hash processed on client init (PRIMARY for magic links)
      // - SIGNED_IN: User explicitly signed in (less common for magic links)
      if (event === "INITIAL_SESSION" || event === "SIGNED_IN") {
        // Session established — unsubscribe immediately to prevent duplicate handling
        subscription.unsubscribe();

        // CRITICAL: Poll for cookies to be set before redirecting
        // WHY: INITIAL_SESSION fires when the session object is created in memory,
        // but cookies are set asynchronously. Polling is more reliable than a
        // fixed delay because it adapts to network conditions and ensures cookies
        // are actually present before navigation.
        debugLog("Session established, polling for cookies", {});

        const POLL_INTERVAL = 100;
        const MAX_POLL_TIME = 5000;
        let pollAttempts = 0;
        const maxAttempts = MAX_POLL_TIME / POLL_INTERVAL;

        pollForCookiesRef.current = setInterval(() => {
          pollAttempts++;
          const hasCookie = hasSupabaseAuthCookie();

          if (hasCookie) {
            clearInterval(pollForCookiesRef.current!);
            debugLog("Cookies verified, redirecting", { safeRedirect });
            router.replace(safeRedirect);
          } else if (pollAttempts >= maxAttempts) {
            clearInterval(pollForCookiesRef.current!);
            if (isDevelopment)
              console.warn("[CALLBACK] Cookie polling timeout - redirecting anyway:", safeRedirect);
            router.replace(safeRedirect);
          }
        }, POLL_INTERVAL);
      } else {
        debugLog("Skipping event (not INITIAL_SESSION or SIGNED_IN)", { event });
      }
    });

    // Also handle PKCE flow: if there's a `code` query param, exchange it
    const code = searchParams.get("code");
    if (code) {
      debugLog("PKCE flow detected: code present, exchanging", {});
      supabase.auth.exchangeCodeForSession(code).then(({ error }) => {
        if (error) {
          if (isDevelopment) console.error("[CALLBACK] Code exchange failed:", error.message);
          router.replace("/");
        } else {
          debugLog("PKCE code exchange successful, waiting for SIGNED_IN event", {});
        }
        // onAuthStateChange will fire SIGNED_IN after successful exchange
      });
    } else {
      debugLog("No PKCE code detected, using implicit flow", {});
    }

    // Fallback: if no auth event fires within 5 seconds, redirect anyway
    // WHY: Prevents users from being stuck on a blank page if something
    // goes wrong (expired token, network issue, etc.)
    const timeout = setTimeout(() => {
      debugLog("TIMEOUT: No auth event fired within 5 seconds, redirecting", { safeRedirect });
      subscription.unsubscribe();
      router.replace(safeRedirect);
    }, 5000);

    return () => {
      clearTimeout(timeout);
      subscription.unsubscribe();
      if (pollForCookiesRef.current) {
        clearInterval(pollForCookiesRef.current);
      }
    };
  }, [router, searchParams]);

  // Use shared loader component for consistent loading UI
  return <AuthLoader />;
}

/**
 * Auth Callback Page - Default export with Suspense wrapper
 *
 * WHY Suspense is required:
 * In Next.js 16, useSearchParams() requires a Suspense boundary to allow
 * static rendering. Without it, the page triggers a CSR bailout error.
 *
 * @see https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
 */
export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<AuthLoader />}>
      <AuthCallbackContent />
    </Suspense>
  );
}
