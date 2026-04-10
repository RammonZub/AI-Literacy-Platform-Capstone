/**
 * Rate Limiting Utility
 *
 * PURPOSE: Prevent brute force and DoS attacks on API endpoints
 *
 * APPROACH: In-memory rate limiting with IP-based identification and sliding window
 *
 * FEATURES:
 * - Simple in-memory storage for development
 * - IP-based identification via x-forwarded-for header
 * - Sliding window counter with configurable limits
 * - Returns remaining requests and reset time for proper headers
 *
 * PRODUCTION CONSIDERATION:
 * - For production, consider using Redis for distributed rate limiting
 * - Current implementation is suitable for single-server deployments
 *
 * @see https://datatracker.ietf.org/doc/html/rfc6585#section-4
 */

import type { NextRequest } from "next/server";

// ========================================
// RATE LIMIT CONFIG
// ========================================
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 20; // 20 requests per minute

// ========================================
// RATE LIMIT ENTRY TYPE
// ========================================
interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// ========================================
// IN-MEMORY STORAGE
// ========================================
// Uses Map for O(1) lookups and automatic garbage collection
// Keys are prefixed identifiers (e.g., "rate-limit:127.0.0.1")
const rateLimitStore = new Map<string, RateLimitEntry>();

// ========================================
// SCHEDULED EXPIRY SWEEP
// ========================================
// Prevents memory leaks by removing expired entries
// Runs every minute to clean up entries older than the window
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of rateLimitStore.entries()) {
      if (now > entry.resetTime) {
        rateLimitStore.delete(key);
      }
    }
  }, RATE_LIMIT_WINDOW_MS);
}

// ========================================
// RATE LIMIT CHECK FUNCTION
// ========================================
/**
 * Checks if a request should be rate limited
 *
 * @param identifier - Unique identifier for the request (typically IP address)
 * @returns Object with success status, remaining requests, and reset time
 *
 * @example
 * ```ts
 * const { success, remaining, resetTime } = checkRateLimit('rate-limit:127.0.0.1')
 * if (!success) {
 *   return NextResponse.json(
 *     { error: 'Too many requests' },
 *     { status: 429, headers: { 'Retry-After': String(Math.ceil((resetTime - Date.now()) / 1000)) } }
 *   )
 * }
 * ```
 */
export function checkRateLimit(identifier: string): {
  success: boolean;
  remaining: number;
  resetTime: number;
} {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);

  // No existing entry or expired window - create new
  if (!entry || now > entry.resetTime) {
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS,
    });
    return {
      success: true,
      remaining: RATE_LIMIT_MAX_REQUESTS - 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS,
    };
  }

  // Rate limit exceeded
  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      success: false,
      remaining: 0,
      resetTime: entry.resetTime,
    };
  }

  // Increment counter and allow request
  entry.count++;
  return {
    success: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - entry.count,
    resetTime: entry.resetTime,
  };
}

// ========================================
// IDENTIFIER EXTRACTION
// ========================================
/**
 * Extracts a rate limit identifier from the request
 *
 * Uses the IP address from the x-forwarded-for header (set by Vercel/proxy)
 * Falls back to 'unknown' if no IP is available
 *
 * @param request - Next.js request object
 * @returns Rate limit identifier (prefixed for namespacing)
 *
 * @example
 * ```ts
 * const identifier = getRateLimitIdentifier(request)
 * // Returns: "rate-limit:127.0.0.1" or "rate-limit:unknown"
 * ```
 */
export function getRateLimitIdentifier(request: NextRequest): string {
  // Extract IP from x-forwarded-for header (set by Vercel/load balancers)
  // Format: "client IP, proxy1 IP, proxy2 IP"
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";
  return `rate-limit:${ip}`;
}
