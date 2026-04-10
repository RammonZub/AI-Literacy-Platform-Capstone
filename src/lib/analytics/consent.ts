/**
 * Analytics consent helpers
 *
 * PURPOSE: Centralize consent storage and cross-component coordination for
 * first-party analytics and any optional third-party scripts gated by user consent.
 */

export type CookieConsentChoice = "all" | "necessary";

export const COOKIE_CONSENT_STORAGE_KEY = "cookie_consent";
export const COOKIE_CONSENT_UPDATED_EVENT = "ailit:cookie-consent-updated";

function isBrowser() {
  return typeof window !== "undefined";
}

/**
 * Read stored consent choice from localStorage.
 *
 * Returns null when consent has not been set or storage is unavailable.
 */
export function getCookieConsent(): CookieConsentChoice | null {
  if (!isBrowser()) return null;

  try {
    const value = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    return value === "all" || value === "necessary" ? value : null;
  } catch {
    return null;
  }
}

/**
 * Optional measurement scripts should only run after explicit acceptance (`choice === "all"`).
 */
export function hasAnalyticsConsent(): boolean {
  return getCookieConsent() === "all";
}

/**
 * Persist consent choice and notify client listeners.
 */
export function setCookieConsent(choice: CookieConsentChoice): void {
  if (!isBrowser()) return;

  try {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, choice);
  } catch {
    // Storage can fail in restricted browsers; listeners still receive the event.
  }

  window.dispatchEvent(
    new CustomEvent(COOKIE_CONSENT_UPDATED_EVENT, {
      detail: { choice },
    }),
  );
}

/**
 * Best-effort localStorage write used by analytics code.
 *
 * Returns true when the write succeeds and false when storage is unavailable.
 */
export function safeLocalStorageSet(key: string, value: string): boolean {
  if (!isBrowser()) return false;

  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

/**
 * Best-effort localStorage read used by analytics code.
 */
export function safeLocalStorageGet(key: string): string | null {
  if (!isBrowser()) return null;

  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}
