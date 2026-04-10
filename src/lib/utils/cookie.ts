/**
 * Cookie Utilities Module
 *
 * PURPOSE: Client-side cookie helpers for analytics and tracking
 *
 * CONTEXT:
 * This module provides simple, lightweight functions for reading, writing, and
 * deleting cookies in the browser. These utilities are designed for analytics
 * purposes (e.g., visitor_id tracking) where cookies need to be accessed from
 * client-side code.
 *
 * KEY RESPONSIBILITIES:
 * - getCookie: Retrieve a cookie value by name
 * - setCookie: Set a cookie with options (maxAge, path, sameSite, secure)
 * - deleteCookie: Remove a cookie by setting maxAge=0
 *
 * DESIGN RATIONALE:
 * - Lightweight: No dependencies, pure vanilla JS
 * - Type-safe: TypeScript types for all options
 * -encodeURIComponent/decodeURIComponent: Handles special characters correctly
 * - Security defaults: SameSite=lax, secure in production
 *
 * DIFFERENCES FROM @supabase/ssr cookies:
 * - This is for CLIENT-SIDE only (browser)
 * - Supabase SSR cookies are for SERVER-SIDE (Node.js)
 * - Use this for analytics, visitor_id, etc.
 * - Use Supabase cookies for auth tokens
 *
 * USAGE:
 * ```typescript
 * import { getCookie, setCookie, deleteCookie } from '@/lib/utils/cookie'
 *
 * // Get a cookie
 * const visitorId = getCookie('visitor_id')
 *
 * // Set a cookie (1 year expiration)
 * setCookie('visitor_id', 'abc-123', { maxAge: 365 * 24 * 60 * 60 })
 *
 * // Delete a cookie
 * deleteCookie('visitor_id')
 * ```
 *
 * @see src/lib/hooks/useVisitorId.ts - Primary consumer of this module
 * @see src/lib/supabase/cookie-config.ts - Server-side cookie config for auth
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/**
 * Cookie options for setCookie
 *
 * PURPOSE: Type-safe interface for cookie configuration
 *
 * DESIGN RATIONALE:
 * - maxAge: Number of seconds until cookie expires (preferred over 'expires')
 * - path: Cookie path (default: '/' for all routes)
 * - sameSite: CSRF protection (default: 'lax' for analytics)
 * - secure: HTTPS-only (default: true in production)
 * - httpOnly: NOT supported for client-side cookies (requires server-side)
 */
export interface CookieOptions {
  /** Maximum age in seconds (e.g., 31536000 = 1 year) */
  maxAge?: number;

  /** Path where cookie is valid (default: '/') */
  path?: string;

  /** SameSite attribute (default: 'lax') */
  sameSite?: "strict" | "lax" | "none";

  /** Secure flag (default: true in production, false in development) */
  secure?: boolean;

  /** Domain for the cookie (optional) */
  domain?: string;
}

// ============================================================================
// COOKIE FUNCTIONS
// ============================================================================

/**
 * Get a cookie value by name
 *
 * PURPOSE: Retrieve a specific cookie from document.cookie
 *
 * DESIGN RATIONALE:
 * - Uses document.cookie string parsing (vanilla JS)
 * - decodeURIComponent handles special characters (spaces, unicode, etc.)
 * - Returns null if cookie doesn't exist (type-safe)
 * - Template literal approach: searches for "; name=" pattern to avoid partial matches
 *
 * EDGE CASES HANDLED:
 * - Cookie name substring matching (e.g., "foo" shouldn't match "foobar")
 * - Special characters in cookie values (encoded with encodeURIComponent)
 * - Missing cookies (returns null, not undefined)
 *
 * @param name - Cookie name to retrieve
 * @returns Cookie value or null if not found
 *
 * @example
 * const visitorId = getCookie('visitor_id')
 * if (visitorId) {
 *   console.log('Returning visitor:', visitorId)
 * }
 */
export function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    const cookieValue = parts.pop()?.split(";").shift();
    return cookieValue ? decodeURIComponent(cookieValue) : null;
  }

  return null;
}

/**
 * Set a cookie with options
 *
 * PURPOSE: Create or update a cookie in the browser
 *
 * DESIGN RATIONALE:
 * - encodeURIComponent handles special characters in value
 * - Default options are secure and practical for most use cases
 * - maxAge is preferred over 'expires' (seconds vs date)
 * - SameSite=lax balances security and functionality
 * - Secure flag prevents MITM attacks in production
 *
 * SECURITY DEFAULTS:
 * - path='/' ensures cookie works across all routes
 * - sameSite='lax' prevents CSRF while allowing navigation
 * - secure=true in production (HTTPS only), false in dev
 *
 * @param name - Cookie name
 * @param value - Cookie value (will be encoded)
 * @param options - Cookie options (maxAge, path, sameSite, secure, domain)
 *
 * @example
 * // Set visitor_id cookie for 1 year
 * setCookie('visitor_id', crypto.randomUUID(), {
 *   maxAge: 365 * 24 * 60 * 60, // 1 year in seconds
 *   path: '/',
 *   sameSite: 'lax',
 * })
 *
 * @example
 * // Set temporary cookie for 30 minutes
 * setCookie('temp_session', 'abc-123', {
 *   maxAge: 30 * 60, // 30 minutes
 * })
 */
export function setCookie(name: string, value: string, options: CookieOptions = {}): void {
  const {
    maxAge = 365 * 24 * 60 * 60, // Default: 1 year
    path = "/",
    sameSite = "lax",
    secure = process.env.NODE_ENV === "production",
    domain,
  } = options;

  // Build cookie string with options
  let cookieString = `${name}=${encodeURIComponent(value)}; path=${path}; max-age=${maxAge}; samesite=${sameSite}`;

  // Add secure flag if needed
  if (secure) {
    cookieString += "; secure";
  }

  // Add domain if specified
  if (domain) {
    cookieString += `; domain=${domain}`;
  }

  document.cookie = cookieString;
}

/**
 * Delete a cookie by name
 *
 * PURPOSE: Remove a cookie from the browser
 *
 * DESIGN RATIONALE:
 * - Setting maxAge=0 immediately expires the cookie
 * - path must match the cookie's original path
 * - Uses same default path as setCookie for consistency
 *
 * IMPORTANT: To delete a cookie set with a custom path or domain,
 * you must specify the same path/domain when deleting.
 *
 * @param name - Cookie name to delete
 * @param options - Cookie options (path, domain must match original)
 *
 * @example
 * // Delete visitor_id cookie
 * deleteCookie('visitor_id')
 *
 * @example
 * // Delete cookie with custom path
 * deleteCookie('my_cookie', { path: '/custom' })
 */
export function deleteCookie(
  name: string,
  options: Pick<CookieOptions, "path" | "domain"> = {},
): void {
  const { path = "/", domain } = options;

  let cookieString = `${name}=; path=${path}; max-age=0`;

  // Add domain if specified
  if (domain) {
    cookieString += `; domain=${domain}`;
  }

  document.cookie = cookieString;
}

// ============================================================================
// EXPORTS
// ============================================================================

export default {
  getCookie,
  setCookie,
  deleteCookie,
};
