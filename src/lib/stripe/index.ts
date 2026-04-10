/**
 * Stripe Module Index
 *
 * PURPOSE: Barrel export for Stripe-related utilities and configuration
 *
 * EXPORTS:
 * - config: Stripe configuration, constants, and validation helpers
 * - client: Stripe client initialization and singleton instance
 * - types: TypeScript types for Stripe integration
 *
 * USAGE:
 * ```typescript
 * // Import configuration
 * import { STRIPE_PRODUCT_ID, PRICING_TIERS } from '@/lib/stripe'
 *
 * // Import Stripe client
 * import { stripe } from '@/lib/stripe/client'
 *
 * // Import everything at once
 * import { stripe, STRIPE_PRODUCT_ID, PRICING_TIERS } from '@/lib/stripe'
 * ```
 *
 * @author Claude Code
 * @created 2025-02-07
 */

// Client exports
export {
  default,
  getClient,
  getClientForSession,
  type StripeResources,
  stripe,
  verifyClient,
} from "./client";
// Type exports
export type { PriceTierId } from "./config";
// Configuration exports
// NOTE: Secret keys (STRIPE_SECRET_KEY, STRIPE_SECRET_TEST_KEY, STRIPE_SECRET_LIVE_KEY)
// are NOT exported from this barrel file for security. Import directly from './config'
// if you need server-side access.
export {
  detectStripeRuntimeMode,
  getPricingTierByPriceId,
  getStripeCheckoutUrls,
  isStripeConfigured,
  PRICING_TIERS,
  PRODUCT_INFO,
  STRIPE_API_VERSION,
  STRIPE_DEFAULT_COUPON_ID,
  STRIPE_PRICE_ID,
  STRIPE_PRICE_ID_1WEEK,
  STRIPE_PRICE_ID_4WEEK,
  STRIPE_PRICE_ID_12WEEK,
  STRIPE_PRICE_ID_LIFETIME,
  STRIPE_PRODUCT_ID,
  STRIPE_PRODUCT_METADATA,
  STRIPE_PUBLISHABLE_KEY,
  STRIPE_RUNTIME_MODE,
  STRIPE_TESTING_COUPON_ID,
  STRIPE_WEBHOOK_SECRET,
  stripeConfig,
  validatePriceIds,
  validateStripeConfig,
  validateStripeModeConfiguration,
} from "./config";

// Customer management exports
export {
  getOrCreateStripeCustomer,
  getStripeCustomer,
  updateCustomerWithUserId,
} from "./customer";
