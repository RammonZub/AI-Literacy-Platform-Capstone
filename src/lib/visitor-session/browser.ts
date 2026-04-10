/**
 * Anonymous visitor id (localStorage + mirrored cookie) for first-party telemetry.
 */

import { getCookie, setCookie } from "@/lib/utils/cookie";
import { VISITOR_ID_COOKIE_NAME } from "./cookies";
import { TRACKING_COOKIE_MAX_AGE_SECONDS } from "./types";

const VISITOR_ID_STORAGE_KEY = "visitor_id";

function persistVisitorIdentity(visitorId: string) {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(VISITOR_ID_STORAGE_KEY, visitorId);
  } catch {
    // Storage may be unavailable; cookie alone is enough for server-visible id.
  }

  setCookie(VISITOR_ID_COOKIE_NAME, visitorId, {
    maxAge: TRACKING_COOKIE_MAX_AGE_SECONDS,
    path: "/",
    sameSite: "lax",
  });
}

/**
 * Return a stable browser visitor ID and guarantee the cookie mirror exists.
 */
export function ensureBrowserVisitorId(): string {
  if (typeof window === "undefined") {
    return "";
  }

  try {
    const stored = localStorage.getItem(VISITOR_ID_STORAGE_KEY);
    if (stored) {
      persistVisitorIdentity(stored);
      return stored;
    }
  } catch {
    // Fall through to cookie or new ID generation.
  }

  const cookieValue = getCookie(VISITOR_ID_COOKIE_NAME);
  if (cookieValue) {
    persistVisitorIdentity(cookieValue);
    return cookieValue;
  }

  const newVisitorId = crypto.randomUUID();
  persistVisitorIdentity(newVisitorId);
  return newVisitorId;
}
