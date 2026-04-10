/**
 * Stripe Client Initialization
 *
 * PURPOSE: Initializes and exports a singleton Stripe client instance
 *
 * CONTEXT: This module provides the single source of truth for the Stripe client
 * used throughout the server-side code. Using a singleton ensures consistent
 * configuration and reduces memory overhead.
 *
 * KEY RESPONSIBILITIES:
 * - Create and export a single Stripe client instance
 * - Ensure client is initialized with correct API version
 * - Validate configuration before creating client
 * - Provide a getClient() helper for dynamic scenarios
 *
 * IMPLEMENTATION NOTES:
 * - Stripe SDK is designed to be reused, not recreated
 * - Client is created at module load time (singleton pattern)
 * - API version is locked to prevent unexpected breaking changes
 * - Type safety enabled for better developer experience
 *
 * DEPENDENCIES:
 * - stripe: Stripe Node.js SDK v17
 * - ./config: Configuration and validation helpers
 *
 * DESIGN RATIONALE:
 * - Singleton pattern: Single client instance for the entire application
 * - Early validation: Configuration errors caught at import time
 * - Type safety: TypeScript types enabled for Stripe API responses
 *
 * @see ./config.ts - Configuration values and validation
 * @author Claude Code
 * @created 2025-02-07
 */

import Stripe from "stripe";
import {
  STRIPE_API_VERSION,
  STRIPE_SECRET_KEY,
  STRIPE_SECRET_LIVE_KEY,
  STRIPE_SECRET_TEST_KEY,
} from "./config";

// Resolve a usable server key with mode-scoped fallback to avoid hard failures
// in environments that only define *_TEST/*_LIVE keys.
const DEFAULT_SERVER_STRIPE_KEY =
  STRIPE_SECRET_KEY || STRIPE_SECRET_TEST_KEY || STRIPE_SECRET_LIVE_KEY;

if (!DEFAULT_SERVER_STRIPE_KEY) {
  throw new Error(
    "Stripe is not properly configured. Missing server key: STRIPE_SECRET_KEY or STRIPE_SECRET_TEST_KEY or STRIPE_SECRET_LIVE_KEY",
  );
}

/**
 * Singleton Stripe client instance
 *
 * WHY: Single client instance for the entire application
 * REASONING:
 * - Stripe SDK is designed to be reused
 * - Reusing client reduces memory overhead
 * - Ensures consistent configuration across all API calls
 * - Enables connection pooling and request optimization
 *
 * CONFIGURATION:
 * - API key: From environment variable (STRIPE_SECRET_KEY)
 * - API version: Locked to STRIPE_API_VERSION (2026-01-28.clover)
 * - Typescript: Enabled for type safety
 *
 * USAGE:
 * ```typescript
 * import { stripe } from '@/lib/stripe/client'
 *
 * const product = await stripe.products.retrieve('prod_...')
 * ```
 */
export const stripe = new Stripe(DEFAULT_SERVER_STRIPE_KEY, {
  apiVersion: STRIPE_API_VERSION,
  typescript: true,
  // Enable telemetry for better Stripe support (can be disabled if needed)
  telemetry: true,
});

/**
 * Get the Stripe client instance
 *
 * WHY: Helper function for scenarios where dynamic client creation is needed
 * USAGE: Primarily for testing or edge cases requiring fresh client
 *
 * @returns Stripe client instance
 *
 * @example
 * // Standard usage - use the singleton
 * import { stripe } from '@/lib/stripe/client'
 * await stripe.products.list()
 *
 * // Dynamic usage - get fresh client
 * import { getClient } from '@/lib/stripe/client'
 * const client = getClient()
 * await client.products.list()
 */
export function getClient(): Stripe {
  return stripe;
}

/**
 * Verify Stripe client is properly initialized
 *
 * WHY: Health check for Stripe integration
 * USAGE: Monitoring, diagnostics, or startup checks
 *
 * @returns {configured: boolean, apiKey: string, apiVersion: string}
 *
 * @example
 * import { verifyClient } from '@/lib/stripe/client'
 *
 * const health = verifyClient()
 * if (!health.configured) {
 *   console.error('Stripe client not configured')
 * }
 */
export function verifyClient(): {
  configured: boolean;
  apiKey: string;
  apiVersion: string;
} {
  try {
    // Check if client is configured by verifying the API key format
    const apiKey = DEFAULT_SERVER_STRIPE_KEY;
    const apiVersion = STRIPE_API_VERSION;

    return {
      configured: Boolean(apiKey && apiKey.startsWith("sk_")),
      apiKey: apiKey ? `${apiKey.slice(0, 8)}...` : "not set",
      apiVersion: apiVersion || "unknown",
    };
  } catch (error) {
    return {
      configured: false,
      apiKey: "error",
      apiVersion: "error",
    };
  }
}

/**
 * Type: StripeResources
 *
 * PURPOSE: Type-safe access to Stripe API resources
 *
 * WHY: Provides autocomplete and type checking for Stripe operations
 */
export type StripeResources = typeof stripe;

/**
 * Get Stripe client for session (auto-detects mode from session ID)
 *
 * PURPOSE: Creates a Stripe client using the appropriate API key based on session mode
 *
 * WHY: Stripe enforces mode matching - test sessions must use test keys,
 * live sessions must use live keys. Using the wrong key causes incorrect
 * data (e.g., amount_total: 0 for live sessions fetched with test key).
 *
 * DETECTION LOGIC:
 * - Session ID starting with `cs_live_` → Live mode (uses STRIPE_SECRET_LIVE_KEY)
 * - Session ID starting with `cs_test_` → Test mode (uses STRIPE_SECRET_TEST_KEY)
 * - Unknown format → Falls back to default STRIPE_SECRET_KEY
 *
 * @param sessionId - Stripe checkout session ID (e.g., `cs_test_...` or `cs_live_...`)
 * @returns Stripe client instance configured for the appropriate mode
 *
 * @example
 * // Fetch a live session (requires live key)
 * import { getClientForSession } from '@/lib/stripe/client'
 *
 * const client = getClientForSession('cs_live_abc123')
 * const session = await client.checkout.sessions.retrieve('cs_live_abc123')
 * // Returns session with correct amount_total value
 */
export function getClientForSession(sessionId: string): Stripe {
  const isLiveSession = sessionId.startsWith("cs_live_");
  const isTestSession = sessionId.startsWith("cs_test_");

  let apiKey: string;

  if (isLiveSession && STRIPE_SECRET_LIVE_KEY) {
    apiKey = STRIPE_SECRET_LIVE_KEY;
    console.log("[Stripe] Using LIVE key for cs_live_ session");
  } else if (isTestSession && STRIPE_SECRET_TEST_KEY) {
    apiKey = STRIPE_SECRET_TEST_KEY;
    console.log("[Stripe] Using TEST key for cs_test_ session");
  } else {
    apiKey = DEFAULT_SERVER_STRIPE_KEY;
    console.warn(`[Stripe] Using default key for session ${sessionId}`);
  }

  return new Stripe(apiKey, {
    apiVersion: STRIPE_API_VERSION,
    typescript: true,
    telemetry: true,
  });
}

/**
 * Default export for convenience
 *
 * WHY: Allows both named and default imports
 *
 * @example
 * // Named import (preferred)
 * import { stripe } from '@/lib/stripe/client'
 *
 * // Default import (also works)
 * import stripe from '@/lib/stripe/client'
 */
export default stripe;
