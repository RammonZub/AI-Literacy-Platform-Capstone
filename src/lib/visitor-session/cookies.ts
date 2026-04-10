/**
 * Visitor ID cookie helpers for anonymous telemetry (`visitor_id` only).
 */

import type { NextResponse } from "next/server";
import { TRACKING_COOKIE_MAX_AGE_SECONDS } from "./types";

export const VISITOR_ID_COOKIE_NAME = "visitor_id";

export function getTrackingCookieWriteOptions(maxAge = TRACKING_COOKIE_MAX_AGE_SECONDS) {
  return {
    httpOnly: false,
    maxAge,
    path: "/",
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
  };
}

export function setTrackingCookie(
  response: NextResponse,
  name: string,
  value: string,
  maxAge = TRACKING_COOKIE_MAX_AGE_SECONDS,
) {
  response.cookies.set(name, value, getTrackingCookieWriteOptions(maxAge));
}
