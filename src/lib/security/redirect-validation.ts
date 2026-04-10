/**
 * Redirect Validation Utility
 *
 * PURPOSE: Centralized validation for redirect URLs to prevent open redirect attacks.
 *
 * SECURITY: Open redirect vulnerabilities occur when an application accepts a
 * user-controlled URL and redirects to it without proper validation. Attackers
 * can exploit this to:
 * 1. Phish users: https://evil.com/login?redirect=https://evil.com/spoofed-login
 * 2. Steal tokens: Redirect to attacker-controlled domain with auth tokens in URL
 * 3. Damage reputation: Users associate malicious sites with your domain
 *
 * OWASP: Open Redirect is OWASP A01:2021 - Broken Access Control
 * https://cwe.mitre.org/data/definitions/601.html
 *
 * @see https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html
 */

/**
 * Validates that a redirect URL is safe (internal to the application)
 * Prevents open redirect attacks
 *
 * @param url - The URL to validate
 * @returns true if the URL is safe to redirect to, false otherwise
 *
 * VALIDATION RULES:
 * 1. null/undefined → true (no redirect is safe)
 * 2. Must start with / (relative path)
 * 3. Must not start with // (protocol-relative URL bypass)
 * 4. Must not contain : (prevents javascript:, data:, vbscript:, etc.)
 * 5. Must not contain @ (prevents auth bypass tricks like //:@evil.com)
 * 6. Must decode properly and still pass validation (prevents double-encoding)
 *
 * ATTACK VECTORS BLOCKED:
 * - //evil.com → rejected (starts with //)
 * - javascript:alert(1) → rejected (contains :)
 * - data:text/html,<script>alert(1)</script> → rejected (contains :)
 * - //@evil.com → rejected (contains @)
 * - %2F%2Fevil.com → rejected (decoded to //evil.com)
 * - %252F%252Fevil.com → rejected (double-encoded, still rejected after decode)
 */
export function isValidRedirect(url: string | null | undefined): boolean {
  // Null/undefined is safe (no redirect)
  if (!url) return true;

  // Must be a relative path starting with /
  if (!url.startsWith("/")) return false;

  // Reject protocol-relative URLs (//evil.com)
  // Protocol-relative URLs bypass the startsWith('/') check but still
  // redirect to external domains
  if (url.startsWith("//")) return false;

  // Reject URLs with : (could be javascript:, data:, vbscript:, etc.)
  // Even valid URL-encoded colons (%3A) are rejected for defense in depth
  if (url.includes(":")) return false;

  // Reject URLs with @ (could be used for auth tricks)
  // Example: //@evil.com parses as //user@evil.com which is external
  if (url.includes("@")) return false;

  // Check for encoded characters that could bypass the above checks
  // Attackers can double-encode: %252F → %2F → /
  try {
    const decoded = decodeURIComponent(url);
    // If decoding changed the string, validate the decoded version recursively
    if (decoded !== url) {
      return isValidRedirect(decoded);
    }
  } catch {
    // Invalid encoding (e.g., malformed percent encoding) - reject
    return false;
  }

  return true;
}

/**
 * Returns a safe redirect URL or the default
 *
 * @param url - The URL to validate and return if safe
 * @param defaultUrl - The fallback URL if validation fails (default: '/')
 * @returns The safe URL to redirect to
 *
 * USAGE:
 * ```ts
 * redirect(getSafeRedirect(params.redirect, '/platform'))
 * ```
 */
export function getSafeRedirect(url: string | null | undefined, defaultUrl: string = "/"): string {
  return isValidRedirect(url) ? (url ?? defaultUrl) : defaultUrl;
}
