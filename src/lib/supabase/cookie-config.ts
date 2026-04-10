/**
 * Cookie Configuration Module
 *
 * PURPOSE: Centralized cookie configuration for Supabase authentication persistence.
 * This module ensures consistent cookie settings across the application, preventing
 * session expiration issues and maintaining user authentication state.
 *
 * CONTEXT:
 * - Supabase uses cookies to store authentication tokens (access tokens, refresh tokens)
 * - Without proper cookie configuration, sessions expire prematurely causing users to
 *   be logged out unexpectedly
 * - This module is used by server.ts (server client) and proxy.ts (auth proxy)
 * - Cookie options live here so auth persistence behaves consistently across the app
 *
 * KEY RESPONSIBILITIES:
 * - Provide standard cookie options with 100-year expiration for long-lived sessions
 * - Allow customization of cookie options while maintaining security defaults
 * - Document WHY each cookie setting exists (security and UX)
 * - Ensure cookies work correctly in both development and production environments
 *
 * IMPLEMENTATION NOTES:
 * - 100-year maxAge is intentional: Supabase refresh tokens are short-lived (1 week),
 *   but we want the cookie to persist indefinitely so the browser sends it on every request
 * - Supabase handles token refresh automatically via the refresh token rotation flow
 * - 'lax' sameSite is required for OAuth redirects (Google, GitHub, etc.)
 * - httpOnly is false for Supabase auth cookies so the browser client can read/write session chunks
 * - secure is true in production to prevent man-in-the-middle attacks
 *
 * DEPENDENCIES:
 * - None (pure utility module)
 *
 * DESIGN RATIONALE:
 * WHY 100 years instead of session expiration?
 * - Supabase manages token lifetimes internally (refresh tokens rotate weekly)
 * - Browser cookies just need to outlive the refresh tokens
 * - Users stay logged in "forever" (until they explicitly sign out)
 * - Matches common auth patterns (see: GitHub, Google, Facebook)
 *
 * USAGE EXAMPLE:
 * ```typescript
 * import { getStandardCookieOptions } from '@/lib/supabase/cookie-config'
 *
 * // In server.ts - createClient function
 * const cookieStore = await cookies()
 * return createServerClient(url, key, {
 *   cookies: {
 *     setAll(cookiesToSet) {
 *       cookiesToSet.forEach(({ name, value, options: userOptions }) => {
 *         // Merge user options with our standard options
 *         const finalOptions = mergeCookieOptions(userOptions, getStandardCookieOptions())
 *         cookieStore.set(name, value, finalOptions)
 *       })
 *     }
 *   }
 * })
 * ```
 *
 * @see src/lib/supabase/server.ts - Uses getStandardCookieOptions() for server client
 * @see src/proxy.ts - Uses mergeCookieOptions() when refreshing auth cookies
 * @see https://supabase.com/docs/guides/auth/server-side/rendering-frameworks - Supabase SSR docs
 *
 */

// ==========================================
// TYPES & INTERFACES
// ==========================================

/**
 * Cookie options compatible with Next.js RequestCookies.set()
 *
 * This type mirrors the Next.js cookie options interface to ensure
 * type safety when setting cookies in the application.
 *
 * DESIGN DECISIONS:
 * - maxAge is number (seconds): Matches Next.js cookie API
 * - path defaults to '/': Ensures cookies are sent for all routes
 * - sameSite is string literal: Provides autocomplete and type checking
 * - secure is boolean or undefined: Allows override in development
 */
export interface CookieOptions {
  /**
   * Maximum age of the cookie in seconds
   *
   * After this time, the browser will not send the cookie to the server.
   * Calculated as: 60 seconds * 60 minutes * 24 hours * 365 days * 100 years
   *
   * WHY maxAge instead of expires:
   * - maxAge is relative (seconds from now), expires is absolute (date)
   * - maxAge is easier to calculate and less prone to clock skew issues
   * - Next.js cookies API prefers maxAge for duration-based cookies
   */
  maxAge: number;

  /**
   * Path where the cookie is valid
   *
   * The browser will only send the cookie for requests under this path.
   *
   * WHY '/' is required:
   * - Ensures cookies are sent for ALL routes in the application
   * - Without this, cookies might only be sent to the current path
   * - Authentication should work across the entire app (API, pages, etc.)
   */
  path: string;

  /**
   * SameSite cookie attribute
   *
   * Controls when cookies are sent with cross-site requests.
   *
   * POSSIBLE VALUES:
   * - 'strict': Never send cookies with cross-site requests (most secure)
   * - 'lax': Send cookies with top-level navigations (balanced security/UX)
   * - 'none': Always send cookies (requires secure=true, least secure)
   * - boolean (true/false): Next.js accepts this value shape
   *
   * WHY 'lax' is required for authentication:
   * - OAuth redirects (Google, GitHub sign-in) are cross-site navigations
   * - 'strict' would break OAuth: cookies wouldn't be sent back from the OAuth provider
   * - 'lax' allows OAuth to work while protecting against CSRF attacks on API requests
   * - Modern browsers default to 'lax' anyway, but we set it explicitly
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
   */
  sameSite: "strict" | "lax" | "none" | boolean;

  /**
   * HttpOnly flag
   *
   * When true, JavaScript cannot access the cookie via document.cookie.
   *
   * WHY this is false for Supabase browser auth cookies:
   * - @supabase/ssr browser client manages session cookie chunks client-side
   * - Setting HttpOnly=true breaks browser-side auth state synchronization
   *
   * SECURITY TRADEOFF:
   * - HttpOnly=false increases XSS sensitivity
   * - Mitigate by keeping strict CSP and avoiding unsafe HTML injection
   */
  httpOnly: boolean;

  /**
   * Secure flag
   *
   * When true, the browser will only send the cookie over HTTPS connections.
   *
   * WHY true in production:
   * - Prevents man-in-the-middle attacks from intercepting auth tokens
   * - Required for any production application handling user data
   *
   * WHY false in development:
   * - Local development often uses HTTP (localhost, 127.0.0.1)
   * - HTTPS requires SSL certificates, which are complex to set up locally
   * - Modern browsers block secure cookies on HTTP, breaking local auth
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#Secure
   */
  secure: boolean;
}

// ==========================================
// CONSTANTS
// ==========================================

/**
 * Cookie maximum age: 100 years in seconds
 *
 * CALCULATION: 60 seconds * 60 minutes * 24 hours * 365 days * 100 years
 * Result: 3,155,760,000 seconds (approximately 3.16 billion seconds)
 *
 * WHY 100 years instead of a shorter duration:
 * - Supabase manages token lifetimes internally (refresh tokens rotate weekly)
 * - The cookie just needs to persist long enough to hold the refresh token
 * - Users expect to stay logged in indefinitely (until they sign out)
 * - Shorter cookie expiration would log users out even if refresh token is valid
 * - 100 years is effectively "forever" for practical purposes
 *
 * ALTERNATIVES CONSIDERED:
 * - 1 week (matches Supabase refresh token): Would log users out weekly, poor UX
 * - 30 days: Common session length, but users still get logged out too frequently
 * - Infinite (no maxAge): Less clear intent, harder to test and debug
 *
 * TRADE-OFF:
 * - Cookie sits on user's device for 100 years even after account deletion
 * - Mitigation: Implement account deletion hooks to clear cookies (future work)
 *
 * @see https://supabase.com/docs/guides/auth/auth-helpers/nextjs#cookie-configuration
 */
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365 * 100;

/**
 * Standard cookie path for the application
 *
 * All cookies should be valid for the entire domain/path.
 */
const COOKIE_PATH = "/";

/**
 * Standard SameSite setting for authentication cookies
 *
 * 'lax' is the optimal balance of security and functionality for auth.
 */
const COOKIE_SAME_SITE: "strict" | "lax" | "none" = "lax";

/**
 * HttpOnly setting for Supabase auth cookies.
 *
 * Browser clients need to read/write these cookies for auth state and sign-out.
 */
const COOKIE_HTTP_ONLY = false;

// ==========================================
// COOKIE OPTION FUNCTIONS
// ==========================================

/**
 * Get standard cookie options for authentication persistence
 *
 * DETAILED EXPLANATION:
 * This function returns the default cookie configuration that should be used
 * for ALL Supabase authentication cookies across the application.
 *
 * WHY this function exists:
 * - Centralizes cookie configuration to prevent inconsistencies
 * - Makes it easy to update cookie settings globally
 * - Documents WHY each setting exists (see inline comments)
 * - Prevents copy-paste errors when setting cookies in multiple places
 *
 * DESIGN RATIONALE:
 * - maxAge: 100 years ensures cookies outlive Supabase refresh tokens
 * - path: '/' ensures cookies work across all routes
 * - sameSite: 'lax' allows OAuth redirects while preventing CSRF
 * - httpOnly: false allows Supabase browser client to manage auth cookie chunks
 * - secure: true in production prevents MITM attacks, false in dev for local testing
 *
 * WHEN to use this function:
 * - Creating Supabase server client (server.ts)
 * - Setting cookies in middleware (middleware.ts)
 * - Setting cookies in API routes
 * - Any other place where auth cookies are set
 *
 * @returns CookieOptions object with standard authentication cookie settings
 *
 * @example
 * // Basic usage in server client creation
 * import { createServerClient } from '@supabase/ssr'
 * import { getStandardCookieOptions } from '@/lib/supabase/cookie-config'
 *
 * const client = createServerClient(url, key, {
 *   cookies: {
 *     setAll(cookiesToSet) {
 *       cookiesToSet.forEach(({ name, value, options }) => {
 *         const finalOptions = { ...options, ...getStandardCookieOptions() }
 *         cookieStore.set(name, value, finalOptions)
 *       })
 *     }
 *   }
 * })
 *
 * @see mergeCookieOptions for combining custom options with standard options
 */
export function getStandardCookieOptions(): CookieOptions {
  return {
    maxAge: COOKIE_MAX_AGE_SECONDS,

    path: COOKIE_PATH,

    sameSite: COOKIE_SAME_SITE,

    httpOnly: COOKIE_HTTP_ONLY,

    // Secure flag: true in production, false in development
    // WHY: HTTPS is required in production for security, but not available locally
    secure: process.env.NODE_ENV === "production",
  };
}

/**
 * Merge custom cookie options with standard options
 *
 * DETAILED EXPLANATION:
 * This function combines user-provided cookie options with the standard
 * authentication cookie options. Custom options may override defaults.
 *
 * WHY this function exists:
 * - Allows flexibility for special cases (e.g., testing, feature flags)
 * - Preserves Supabase cookie behavior when options are provided at runtime
 * - Provides a clear API for extending cookie options
 * - Prevents option conflicts by defining a merge order
 *
 * DESIGN RATIONALE:
 * - Standard options are the base: ensures all cookies have secure defaults
 * - Custom options override standard: allows per-cookie customization
 * - Runtime options override standard defaults
 * - This merge order means defaults apply unless Supabase provides a specific option
 *
 * MERGE ORDER:
 * 1. Start with standard options (getStandardCookieOptions())
 * 2. Override with custom options (userOptions)
 * 3. Runtime options are preserved when provided
 *
 * WHEN to use this function:
 * - You need to override a specific cookie option for a special case
 * - You want to ensure security defaults are applied
 * - You're setting cookies outside of Supabase client (e.g., custom auth)
 *
 * @param userOptions - Custom cookie options to merge with standard options.
 *                      These will override the standard options.
 * @returns CookieOptions object with merged settings
 *
 * @example
 * // Override maxAge for a temporary session cookie
 * import { getStandardCookieOptions, mergeCookieOptions } from '@/lib/supabase/cookie-config'
 *
 * const tempSessionOptions = mergeCookieOptions({
 *   maxAge: 60 * 30, // 30 minutes instead of 100 years
 * })
 *
 * @example
 * // Use standard options as-is (no customization needed)
 * const standardOptions = getStandardCookieOptions()
 *
 * @see getStandardCookieOptions for the base configuration
 */
export function mergeCookieOptions(userOptions: Partial<CookieOptions>): CookieOptions {
  // Start with standard options as the base
  const standardOptions = getStandardCookieOptions();

  // Merge: user options override standard options.
  // IMPORTANT: preserve Supabase runtime options to avoid auth/session drift.
  return {
    ...standardOptions,
    ...userOptions,
  };
}
