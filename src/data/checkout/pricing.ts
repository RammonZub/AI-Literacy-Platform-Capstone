/**
 * Checkout Pricing Data
 *
 * PURPOSE: Centralized pricing tiers for the checkout page.
 *
 * DISPLAY VS STRIPE: Copy and USD list prices follow the product pricing brief
 * (weekly ~$13, monthly $50, lifetime ~$140; three paid tiers after free assessment).
 * Stripe Price objects must be configured to match these USD amounts (or local equivalents)
 * so checkout charges align with what users see.
 *
 * @see src/components/platform/checkout/CheckoutPage.tsx
 * @see src/app/api/stripe/create-checkout-session/route.ts
 */

// ==========================================
// TYPES
// ==========================================

/**
 * Supported currencies for pricing display
 *
 * WHY: Extensible type for currency support. Add new currencies here
 * and update CURRENCY_CONFIG to enable them.
 */
export type SupportedCurrency = "usd" | "cad" | "aud" | "gbp" | "eur";

/**
 * Currency formatting configuration
 *
 * WHY: Centralizes symbol and locale per currency for consistent formatting.
 * Locale ensures proper number formatting (comma/decimal placement) per region.
 */
export interface CurrencyConfig {
  /** Currency symbol displayed before/after the amount */
  symbol: string;
  /** BCP 47 locale tag for number formatting */
  locale: string;
}

/**
 * Raw pricing data for a plan (before formatting)
 *
 * WHY: Separates numeric values from display formatting, enabling
 * single-source-of-truth for all currency operations.
 */
interface RawPlanPricing {
  id: string;
  name: string;
  originalTotal: number;
  discountedTotal: number;
  perDay: number;
  perDayOriginal: number;
  duration: string;
  interval: string;
  popular: boolean;
  savings: string | null;
  isOneTime?: boolean;
}

/**
 * Represents a subscription pricing tier displayed on the checkout page
 *
 * WHY typed separately: Ensures all plan cards render consistently
 * and enables type-safe plan selection logic
 */
export interface PricingTier {
  /** Unique plan identifier - matches Stripe metadata plan_id */
  id: string;
  /** Display name shown on the plan card */
  name: string;
  /** List price (shown struck-through only when checkout applies a reducing coupon) */
  total: string;
  /** Amount charged after any promotional reduction */
  discountedPrice: string;
  /** Estimated per-day cost for subscriptions; "FOREVER" for lifetime */
  perDay: string;
  /** Optional struck-through per-day comparison (hidden when absent) */
  perDayOriginal?: string;
  /** Human-readable duration (e.g., "1 month") */
  duration: string;
  /** Stripe billing interval */
  interval: string;
  /** Emphasis ribbon for the monthly tier (see USD list prices in this module). */
  popular: boolean;
  /** Optional supplementary chip (e.g. lifetime plan rationale). */
  savings: string | null;
  /** Whether this is a one-time payment (vs subscription) */
  isOneTime?: boolean;
}

/**
// ==========================================
// CURRENCY CONFIGURATION
// ==========================================

/**
 * Currency configuration mapping
 *
 * DESIGN NOTES:
 * - Symbols follow standard conventions: $, CA$, A$, £, €
 * - Locales use primary regions: en-CA (English Canada), de-DE (Germany)
 * - Add new currencies here and extend SupportedCurrency type
 */
export const CURRENCY_CONFIG: Record<SupportedCurrency, CurrencyConfig> = {
  usd: { symbol: "$", locale: "en-US" },
  cad: { symbol: "CA$", locale: "en-CA" },
  aud: { symbol: "A$", locale: "en-AU" },
  gbp: { symbol: "£", locale: "en-GB" },
  eur: { symbol: "€", locale: "de-DE" },
};

// ==========================================
// RAW PRICING DATA (Currency-Agnostic)
// ==========================================

/**
 * Raw pricing data per currency
 *
 * DESIGN NOTES:
 * - Numeric USD list prices are canonical here; other currencies are scaled to match
 *   prior FX roughness vs old USD anchors (Stripe still uses per-currency Price IDs).
 * - `discountedTotal` equals `originalTotal` here; welcome
 *   coupons are handled separately in checkout UI.
 */
const RAW_PRICING_DATA: Record<SupportedCurrency, RawPlanPricing[]> = {
  usd: [
    {
      id: "1week",
      name: "WEEKLY ACCESS",
      originalTotal: 13,
      discountedTotal: 13,
      perDay: +(13 / 7).toFixed(2),
      perDayOriginal: 0,
      duration: "7 days",
      interval: "week",
      popular: false,
      savings: null,
    },
    {
      id: "4week",
      name: "MONTHLY ACCESS",
      originalTotal: 50,
      discountedTotal: 50,
      perDay: +(50 / 30).toFixed(2),
      perDayOriginal: 0,
      duration: "1 month",
      interval: "month",
      popular: true,
      savings: null,
    },
    {
      id: "lifetime",
      name: "LIFETIME ACCESS",
      originalTotal: 140.0,
      discountedTotal: 140.0,
      perDay: 0,
      perDayOriginal: 0,
      duration: "forever",
      interval: "once",
      popular: false,
      savings: "Versus about $200–$250 over 4–5 months at the monthly rate",
      isOneTime: true,
    },
  ],
  cad: [
    {
      id: "1week",
      name: "WEEKLY ACCESS",
      originalTotal: 18.19,
      discountedTotal: 18.19,
      perDay: +(18.19 / 7).toFixed(2),
      perDayOriginal: 0,
      duration: "7 days",
      interval: "week",
      popular: false,
      savings: null,
    },
    {
      id: "4week",
      name: "MONTHLY ACCESS",
      originalTotal: 68.76,
      discountedTotal: 68.76,
      perDay: +(68.76 / 30).toFixed(2),
      perDayOriginal: 0,
      duration: "1 month",
      interval: "month",
      popular: true,
      savings: null,
    },
    {
      id: "lifetime",
      name: "LIFETIME ACCESS",
      originalTotal: 189.0,
      discountedTotal: 189.0,
      perDay: 0,
      perDayOriginal: 0,
      duration: "forever",
      interval: "once",
      popular: false,
      savings: "One-time purchase for long-term access",
      isOneTime: true,
    },
  ],
  aud: [
    {
      id: "1week",
      name: "WEEKLY ACCESS",
      originalTotal: 20.77,
      discountedTotal: 20.77,
      perDay: +(20.77 / 7).toFixed(2),
      perDayOriginal: 0,
      duration: "7 days",
      interval: "week",
      popular: false,
      savings: null,
    },
    {
      id: "4week",
      name: "MONTHLY ACCESS",
      originalTotal: 77.48,
      discountedTotal: 77.48,
      perDay: +(77.48 / 30).toFixed(2),
      perDayOriginal: 0,
      duration: "1 month",
      interval: "month",
      popular: true,
      savings: null,
    },
    {
      id: "lifetime",
      name: "LIFETIME ACCESS",
      originalTotal: 219.0,
      discountedTotal: 219.0,
      perDay: 0,
      perDayOriginal: 0,
      duration: "forever",
      interval: "once",
      popular: false,
      savings: "One-time purchase for long-term access",
      isOneTime: true,
    },
  ],
  gbp: [
    {
      id: "1week",
      name: "WEEKLY ACCESS",
      originalTotal: 10.39,
      discountedTotal: 10.39,
      perDay: +(10.39 / 7).toFixed(2),
      perDayOriginal: 0,
      duration: "7 days",
      interval: "week",
      popular: false,
      savings: null,
    },
    {
      id: "4week",
      name: "MONTHLY ACCESS",
      originalTotal: 39.99,
      discountedTotal: 39.99,
      perDay: +(39.99 / 30).toFixed(2),
      perDayOriginal: 0,
      duration: "1 month",
      interval: "month",
      popular: true,
      savings: null,
    },
    {
      id: "lifetime",
      name: "LIFETIME ACCESS",
      originalTotal: 109.0,
      discountedTotal: 109.0,
      perDay: 0,
      perDayOriginal: 0,
      duration: "forever",
      interval: "once",
      popular: false,
      savings: "One-time purchase for long-term access",
      isOneTime: true,
    },
  ],
  eur: [
    {
      id: "1week",
      name: "WEEKLY ACCESS",
      originalTotal: 12.13,
      discountedTotal: 12.13,
      perDay: +(12.13 / 7).toFixed(2),
      perDayOriginal: 0,
      duration: "7 days",
      interval: "week",
      popular: false,
      savings: null,
    },
    {
      id: "4week",
      name: "MONTHLY ACCESS",
      originalTotal: 46.24,
      discountedTotal: 46.24,
      perDay: +(46.24 / 30).toFixed(2),
      perDayOriginal: 0,
      duration: "1 month",
      interval: "month",
      popular: true,
      savings: null,
    },
    {
      id: "lifetime",
      name: "LIFETIME ACCESS",
      originalTotal: 129.0,
      discountedTotal: 129.0,
      perDay: 0,
      perDayOriginal: 0,
      duration: "forever",
      interval: "once",
      popular: false,
      savings: "One-time purchase for long-term access",
      isOneTime: true,
    },
  ],
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Formats a numeric price as a localized currency string
 *
 * DESIGN NOTES:
 * - Uses Intl.NumberFormat for proper locale-aware formatting
 * - Handles decimal placement correctly per region
 * - Includes currency symbol in formatted output
 *
 * @param amount - The numeric amount to format
 * @param currency - The currency code (defaults to USD)
 * @returns Formatted price string (e.g., "$14.99", "CA$20.99", "£11.99")
 *
 * @example
 * formatPrice(14.99, 'usd') // "$14.99"
 * formatPrice(20.99, 'cad') // "CA$20.99"
 * formatPrice(11.99, 'gbp') // "£11.99"
 */
export function formatPrice(amount: number, currency: SupportedCurrency = "usd"): string {
  const config = CURRENCY_CONFIG[currency];

  // Special handling for lifetime plans (0 per-day = "FOREVER")
  if (amount === 0) {
    return "FOREVER";
  }

  // Use formatToParts so we can force the correct disambiguated symbol for
  // CAD/AUD while preserving locale-specific separators and symbol order.
  const parts = new Intl.NumberFormat(config.locale, {
    style: "currency",
    currency: currency.toUpperCase(),
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).formatToParts(amount);

  return parts
    .map((part) => {
      if (part.type === "currency") return config.symbol;
      if (part.type === "literal") return part.value.replace(/\u00a0/g, " ");
      return part.value;
    })
    .join("")
    .trim();
}

/**
 * Converts raw pricing data to formatted PricingTier for a specific currency
 *
 * DESIGN NOTES:
 * - Maps raw numeric values to display strings
 * - Handles special cases (lifetime "FOREVER" text)
 * - Preserves all metadata (popular flag, savings text, etc.)
 *
 * @param raw - Raw plan pricing data
 * @param currency - The currency to format for
 * @returns Formatted PricingTier ready for display
 */
function formatPricingTier(raw: RawPlanPricing, currency: SupportedCurrency): PricingTier {
  return {
    id: raw.id,
    name: raw.name,
    total: formatPrice(raw.originalTotal, currency),
    discountedPrice: formatPrice(raw.discountedTotal, currency),
    perDay: raw.perDay === 0 ? "FOREVER" : formatPrice(raw.perDay, currency),
    perDayOriginal: raw.perDayOriginal === 0 ? "" : formatPrice(raw.perDayOriginal, currency),
    duration: raw.duration,
    interval: raw.interval,
    popular: raw.popular,
    savings: raw.savings,
    isOneTime: raw.isOneTime,
  };
}

// ==========================================
// PRICING TIER EXPORTS
// ==========================================

/**
 * Get pricing tiers formatted for a specific currency
 *
 * DESIGN NOTES:
 * - Returns formatted PricingTier array ready for display
 * - Defaults to USD
 * - Creates new array on each call (no mutation)
 *
 * @param currency - The currency to get pricing for (defaults to 'usd')
 * @returns Array of formatted PricingTier objects
 *
 * @example
 * getPricingTiersForCurrency('usd') // USD pricing
 * getPricingTiersForCurrency('cad') // Canadian Dollar pricing
 * getPricingTiersForCurrency() // Defaults to USD
 */
export function getPricingTiersForCurrency(currency: SupportedCurrency = "usd"): PricingTier[] {
  return RAW_PRICING_DATA[currency].map((raw) => formatPricingTier(raw, currency));
}

/**
 * Default pricing tiers (USD)
 *
 * WHY: Exports USD tiers as the default shared pricing set.
 */
export const PRICING_TIERS: PricingTier[] = getPricingTiersForCurrency("usd");

/**
 * Maps plan IDs to nominal paid prices for analytics tracking (USD list prices in this file;
 * welcome coupons override at Stripe).
 *
 * WHY separate from PRICING_TIERS: The tiers store display strings ("$40"),
 * but analytics platforms need numeric values for conversion value optimization.
 * Keeping this mapping explicit avoids fragile string parsing.
 *
 * @param planId - The plan identifier (e.g., "4week")
 * @param currency - The currency code (defaults to 'usd')
 * @returns The numeric DISCOUNTED price, defaults to 4-week discounted price in USD
 */
const DISCOUNTED_PLAN_VALUES: Record<SupportedCurrency, Record<string, number>> = {
  usd: { "1week": 13, "4week": 50, "12week": 50, lifetime: 140 },
  cad: { "1week": 18.19, "4week": 68.76, "12week": 68.76, lifetime: 189 },
  aud: { "1week": 20.77, "4week": 77.48, "12week": 77.48, lifetime: 219 },
  gbp: { "1week": 10.39, "4week": 39.99, "12week": 39.99, lifetime: 109 },
  eur: { "1week": 12.13, "4week": 46.24, "12week": 46.24, lifetime: 129 },
};

export function getPlanValue(planId: string, currency: SupportedCurrency = "usd"): number {
  return DISCOUNTED_PLAN_VALUES[currency]?.[planId] ?? DISCOUNTED_PLAN_VALUES.usd["4week"];
}

/**
 * Maps plan IDs to an estimated value multiple for internal analytics helpers.
 *
 * WHY separate from getPlanValue: some experiments compare first payment to a simple projected multiple.
 *
 * LTV Calculation:
 * - 1-week: Actual price × 3.5 (users likely to renew/upgrade)
 * - 4-week: Actual price = LTV (monthly retention built in)
 * - Lifetime: Actual price = LTV (one-time payment)
 *
 * @param planId - The plan identifier (e.g., "1week")
 * @param currency - The currency code (defaults to 'usd')
 * @returns Estimated LTV-style value derived from list price and plan-type multiplier
 */
export function getPlanLTV(planId: string, currency: SupportedCurrency = "usd"): number {
  const actualValue = getPlanValue(planId, currency);

  // LTV multipliers by plan type
  const ltvMultipliers: Record<string, number> = {
    "1week": 3.5, // Users likely to renew/upgrade
    "4week": 1.0, // Actual matches LTV (no multiplier needed)
    "12week": 1.0, // 12-week plan
    lifetime: 1.0, // Actual matches LTV (one-time payment)
  };

  const multiplier = ltvMultipliers[planId] ?? 1.0;
  return actualValue * multiplier;
}
