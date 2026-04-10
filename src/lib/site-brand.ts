/**
 * Public site branding
 *
 * Neutral naming (no commercial trade name in code).
 */

export const SITE_BRAND_NAME = "AI Literacy Platform";
export const SITE_BRAND_SHORT = "AI Literacy";
/** Uppercase wordmark for Montserrat / quiz headers (e.g. "AI LITERACY"). */
export const SITE_BRAND_WORDMARK = "AI LITERACY";
export const SITE_TAGLINE =
  "Practical AI microlearning for busy professionals—short lessons and a clear path.";
export const SITE_CREATOR_LABEL = "AI Literacy Platform";
export const SITE_CERTIFICATE_ORG = "AI Literacy Program";
/** Support link target; override with NEXT_PUBLIC_SUPPORT_EMAIL in deployment. */
export const SITE_SUPPORT_EMAIL =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim()) ||
  "support@example.com";

/**
 * Public site origin for canonical URLs and JSON-LD (no trailing slash).
 */
export function getSitePublicOrigin(): string {
  const raw =
    (typeof process !== "undefined" && process.env.NEXT_PUBLIC_APP_URL?.trim()) ||
    "http://localhost:3000";
  return raw.replace(/\/$/, "");
}

/**
 * Absolute URL for a site path (path must start with `/` or it is normalized).
 */
export function siteAbsoluteUrl(path: string): string {
  const origin = getSitePublicOrigin();
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${origin}${p}`;
}
