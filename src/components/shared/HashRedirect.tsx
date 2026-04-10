/**
 * HashRedirect
 *
 * PURPOSE: Catch Supabase auth redirects that land on the root page and
 * forward them to /auth/callback for session establishment.
 *
 * HANDLES TWO AUTH FLOWS:
 * 1. **Implicit Flow**: Hash fragments (#access_token=...&type=recovery)
 * 2. **PKCE Flow**: Query parameters (?code=...&type=recovery)
 *
 * CONTEXT: Supabase auth emails (invites, password resets, magic links) can
 * use either flow depending on configuration. When these land on the root
 * page (/), we need to redirect to /auth/callback where the session can be
 * properly established.
 *
 * WHY THIS EXISTS (instead of just fixing the email template):
 * 1. Safety net for emails already sent with old implicit-flow format
 * 2. Handles edge cases where Supabase falls back to hash-based URLs
 * 3. Handles PKCE flow when redirect URL is set to root
 * 4. Zero-cost when no auth params are present (renders nothing, runs one check)
 *
 * FLOW:
 * 1. Root page renders this invisible client component
 * 2. On mount, checks for:
 *    - window.location.hash for access_token (implicit flow)
 *    - window.location.search for code parameter (PKCE flow)
 * 3. If found, redirects to /auth/callback with params preserved
 * 4. /auth/callback processes the token/code and establishes the session
 *
 * PKCE FLOW:
 * When password reset emails use PKCE flow, they send ?code=... instead of
 * #access_token=.... This component forwards those parameters to the auth
 * callback route so the reset flow can complete correctly.
 *
 * @see src/app/auth/callback/page.tsx - Processes auth tokens and grants access
 * @see src/app/api/stripe/webhook/route.ts - Sends invite emails with redirectTo
 */

"use client";

import { useEffect } from "react";
import { isValidRedirect } from "@/lib/security/redirect-validation";

const isDev = process.env.NODE_ENV === "development";

/**
 * Detects Supabase auth parameters on the root page and redirects
 * to /auth/callback where the existing session-establishment logic lives.
 *
 * WHY window.location.href instead of router.push:
 * router.push doesn't preserve hash fragments — Next.js strips them.
 * A full navigation via window.location.href ensures the params arrive
 * intact at /auth/callback where the Supabase client can read them.
 *
 * @returns null — this component renders nothing visible
 */
export default function HashRedirect(): null {
  useEffect(() => {
    const hash = window.location.hash;
    const search = window.location.search;

    // ========================================
    // Case 1: Implicit Flow (hash fragment)
    // ========================================
    // Supabase sends tokens in URL hash: #access_token=...&refresh_token=...&type=recovery
    // Hash fragments are client-side only, server never sees them
    if (hash && hash.includes("access_token")) {
      // Redirect to /auth/callback with the hash fragment preserved
      window.location.href = "/auth/callback" + hash;
      return;
    }

    // ========================================
    // Case 2: PKCE Flow (query parameter)
    // ========================================
    // Supabase sends auth code in query param: ?code=...&type=recovery
    // This is common for password reset emails
    // We need to redirect to /auth/callback with the code parameter
    const urlParams = new URLSearchParams(search);
    const code = urlParams.get("code");
    const type = urlParams.get("type");

    if (code) {
      // Build the redirect URL with code and any other relevant params
      // type is important for password reset (type=recovery)
      let redirectUrl = "/auth/callback?code=" + encodeURIComponent(code);
      if (type) {
        redirectUrl += "&type=" + encodeURIComponent(type);
      }

      // Also check for token_hash (alternative PKCE format)
      const tokenHash = urlParams.get("token_hash");
      if (tokenHash) {
        redirectUrl += "&token_hash=" + encodeURIComponent(tokenHash);
      }

      // Check for next redirect parameter
      // SECURITY: Validate the next parameter to prevent open redirect attacks
      const next = urlParams.get("next");
      if (next && isValidRedirect(next)) {
        redirectUrl += "&next=" + encodeURIComponent(next);
      }

      if (isDev)
        console.log("[HashRedirect] Detected PKCE code parameter, redirecting to:", redirectUrl);
      window.location.href = redirectUrl;
      return;
    }

    // No auth parameters found - stay on current page
  }, []);

  return null;
}
