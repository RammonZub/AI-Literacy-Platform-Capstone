/**
 * Stripe Configuration
 *
 * PURPOSE: Stripe integration configuration and constants.
 *
 * This module resolves mode-scoped configuration to prevent test/live mixups:
 * - Preferred envs: `*_TEST` / `*_LIVE`
 * - Falls back to unscoped env vars when mode-specific values are not present
 */

export type StripeRuntimeMode = "test" | "live";

// Multi-currency support
export type SupportedCurrency = "usd" | "cad" | "aud" | "gbp" | "eur";

export const SUPPORTED_CURRENCIES: readonly SupportedCurrency[] = [
  "usd",
  "cad",
  "aud",
  "gbp",
  "eur",
] as const;

/**
 * Country code to currency mapping.
 * Uses ISO 3166-1 alpha-2 country codes.
 */
export const COUNTRY_TO_CURRENCY: Readonly<Record<string, SupportedCurrency>> = {
  // United States → USD
  US: "usd",

  // Canada → CAD
  CA: "cad",

  // Australia → AUD
  AU: "aud",

  // United Kingdom → GBP
  GB: "gbp",

  // European Union → EUR (using EU member states)
  AT: "eur", // Austria
  BE: "eur", // Belgium
  BG: "eur", // Bulgaria
  HR: "eur", // Croatia
  CY: "eur", // Cyprus
  CZ: "eur", // Czech Republic
  DK: "eur", // Denmark
  EE: "eur", // Estonia
  FI: "eur", // Finland
  FR: "eur", // France
  DE: "eur", // Germany
  GR: "eur", // Greece
  HU: "eur", // Hungary
  IE: "eur", // Ireland
  IT: "eur", // Italy
  LV: "eur", // Latvia
  LT: "eur", // Lithuania
  LU: "eur", // Luxembourg
  MT: "eur", // Malta
  NL: "eur", // Netherlands
  PL: "eur", // Poland
  PT: "eur", // Portugal
  RO: "eur", // Romania
  SK: "eur", // Slovakia
  SI: "eur", // Slovenia
  ES: "eur", // Spain
  SE: "eur", // Sweden
} as const;

/**
 * Currency symbols for display.
 */
export const CURRENCY_SYMBOLS: Readonly<Record<SupportedCurrency, string>> = {
  usd: "$",
  cad: "C$",
  aud: "A$",
  gbp: "£",
  eur: "€",
} as const;

// Stripe API Keys
export const STRIPE_SECRET_KEY = (process.env.STRIPE_SECRET_KEY || "").trim();
export const STRIPE_PUBLISHABLE_KEY = (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "").trim();
export const STRIPE_WEBHOOK_SECRET = (process.env.STRIPE_WEBHOOK_SECRET || "").trim();

// Optional explicit mode keys for session-mode fetches
export const STRIPE_SECRET_TEST_KEY = (process.env.STRIPE_SECRET_TEST_KEY || "").trim();
export const STRIPE_SECRET_LIVE_KEY = (process.env.STRIPE_SECRET_LIVE_KEY || "").trim();

// Stripe API versions use date + release name format (e.g., '2026-01-28.clover')
export const STRIPE_API_VERSION = "2026-01-28.clover" as const;

/**
 * Infer runtime mode from STRIPE_SECRET_KEY.
 * Defaults to `test` when key is missing/invalid to avoid accidental live assumptions.
 */
export function detectStripeRuntimeMode(secretKey: string): StripeRuntimeMode {
  if (secretKey.startsWith("sk_live_")) return "live";
  return "test";
}

export const STRIPE_RUNTIME_MODE: StripeRuntimeMode = detectStripeRuntimeMode(STRIPE_SECRET_KEY);

function getModeScopedEnv(baseName: string): string {
  const modeSuffix = STRIPE_RUNTIME_MODE === "live" ? "LIVE" : "TEST";
  const scoped = (process.env[`${baseName}_${modeSuffix}`] || "").trim();
  const unscopedValue = (process.env[baseName] || "").trim();
  return scoped || unscopedValue;
}

function missingEnvHint(baseName: string): string {
  const modeSuffix = STRIPE_RUNTIME_MODE === "live" ? "LIVE" : "TEST";
  return `${baseName}_${modeSuffix} (or ${baseName})`;
}

// Stripe catalog IDs (Dashboard “Product” / Price — vendor terminology)
export const STRIPE_PRODUCT_ID = getModeScopedEnv("STRIPE_PRODUCT_ID");
export const STRIPE_PRICE_ID = getModeScopedEnv("STRIPE_PRICE_ID");
export const STRIPE_PRICE_ID_1WEEK = getModeScopedEnv("STRIPE_PRICE_ID_1WEEK");
export const STRIPE_PRICE_ID_4WEEK = getModeScopedEnv("STRIPE_PRICE_ID_4WEEK");
export const STRIPE_PRICE_ID_12WEEK = getModeScopedEnv("STRIPE_PRICE_ID_12WEEK");
export const STRIPE_PRICE_ID_LIFETIME = getModeScopedEnv("STRIPE_PRICE_ID_LIFETIME");

// Coupon IDs (mode-scoped resolution)
export const STRIPE_DEFAULT_COUPON_ID = getModeScopedEnv("STRIPE_DEFAULT_COUPON_ID");
export const STRIPE_TESTING_COUPON_ID = getModeScopedEnv("STRIPE_TESTING_COUPON_ID");

/**
 * Welcome coupon for early access users.
 * Provides 100% off (free lifetime access).
 *
 * HOW IT WORKS:
 * - Any code matching pattern "WELCOME-{NAME}" triggers 100% off
 * - The actual coupon code is passed directly to Stripe
 * - Stripe looks up the coupon by its ID (the code itself)
 * - You must create coupons in Stripe Dashboard with IDs like "WELCOME-JOSH"
 *
 * EXAMPLES: WELCOME-JOSH, WELCOME-MARIA, WELCOME-ANYNAME
 *
 * TO ADD A NEW USER:
 * 1. Go to Stripe Dashboard → Products → Coupons
 * 2. Create coupon with ID "WELCOME-{NAME}" (e.g., "WELCOME-MARIA")
 * 3. Set discount: 100% off forever
 * 4. Send link: {APP_URL}/checkout/welcome?coupon=WELCOME-{NAME}
 */
export function isValidWelcomeCoupon(code: string | null | undefined): boolean {
  if (!code) return false;
  const upperCode = code.toUpperCase().trim();
  // Pattern: WELCOME- followed by at least 2 characters (letters, numbers, hyphens)
  return /^WELCOME-[A-Z0-9-]{2,}$/i.test(upperCode);
}

// Product Metadata
export const STRIPE_PRODUCT_METADATA = {
  platform: "ai-literacy-platform",
} as const;

// Display strings for checkout UI
export const PRODUCT_INFO = {
  name: "AI Literacy Microlearning",
  description:
    "Paid access after free assessment: weekly (~$13), monthly ($50), or lifetime (~$140) USD tiers.",
} as const;

type MultiCurrencyPriceMap = Record<
  string,
  Record<SupportedCurrency, { priceId: string; amount: number }>
>;

/**
 * Stripe `amount` values are informational mirrors of each Price object.
 * When USD list prices in `src/data/checkout/pricing.ts` change, update the matching Price in the
 * Stripe dashboard so charged amounts match this table.
 */
const TEST_MULTI_CURRENCY_PRICES: MultiCurrencyPriceMap = {
  "1week": {
    usd: {
      priceId: "price_1T5sXABadJZR5aJfu5mfGala",
      amount: 1300, // $13.00 weekly tier
    },
    cad: {
      priceId: "price_1T5qirBadJZR5aJf5CdgY7S7",
      amount: 2099, // $20.99 CAD
    },
    aud: {
      priceId: "price_1T5qirBadJZR5aJfOw1FW6cr",
      amount: 2399, // $23.99 AUD
    },
    gbp: {
      priceId: "price_1T5qisBadJZR5aJf8pzYMPuL",
      amount: 1199, // £11.99
    },
    eur: {
      priceId: "price_1T5qitBadJZR5aJfy2Hxjjam",
      amount: 1399, // €13.99
    },
  },
  "4week": {
    usd: {
      priceId: "price_1T5sXABadJZR5aJfhkefKxOK",
      amount: 5000, // $50.00 monthly tier
    },
    cad: {
      priceId: "price_1T5qjGBadJZR5aJfuAA7ohRR",
      amount: 5499, // $54.99 CAD
    },
    aud: {
      priceId: "price_1T5qjIBadJZR5aJfW8bCHj6T",
      amount: 6199, // $61.99 AUD
    },
    gbp: {
      priceId: "price_1T5qjIBadJZR5aJfBN8IjVZG",
      amount: 3199, // £31.99
    },
    eur: {
      priceId: "price_1T5qjJBadJZR5aJfwmn4VX8g",
      amount: 3699, // €36.99
    },
  },
  "12week": {
    usd: {
      priceId: "price_1T5sXABadJZR5aJfWncqaR0O",
      amount: 7999, // $79.99
    },
    cad: {
      priceId: "price_1T5qjhBadJZR5aJfHbFZVFUt",
      amount: 10999, // $109.99 CAD
    },
    aud: {
      priceId: "price_1T5qjiBadJZR5aJfcGFnfYr8",
      amount: 12399, // $123.99 AUD
    },
    gbp: {
      priceId: "price_1T5qjjBadJZR5aJfhk8sgQ24",
      amount: 6399, // £63.99
    },
    eur: {
      priceId: "price_1T5qjjBadJZR5aJfO362kjwE",
      amount: 7399, // €73.99
    },
  },
  lifetime: {
    usd: {
      priceId: "price_1T5qiqBadJZR5aJfOBZpPLFn",
      amount: 14000, // $140.00
    },
    cad: {
      priceId: "price_1T5qjkBadJZR5aJf0vnFe7Qi",
      amount: 18900, // $189.00 CAD
    },
    aud: {
      priceId: "price_1T5qjlBadJZR5aJf4yIk6P5Z",
      amount: 21900, // $219.00 AUD
    },
    gbp: {
      priceId: "price_1T5qjmBadJZR5aJfUlkAQJsb",
      amount: 10900, // £109.00
    },
    eur: {
      priceId: "price_1T5qjnBadJZR5aJfF9A5Pizi",
      amount: 12900, // €129.00
    },
  },
} as const;

const LIVE_MULTI_CURRENCY_PRICES: MultiCurrencyPriceMap = {
  "1week": {
    usd: {
      priceId: "price_1SzEoQBadJZR5aJfbJNaAHDz",
      amount: 1300, // $13.00 weekly tier
    },
    cad: {
      priceId: "price_1T5sUiBadJZR5aJfI2uYvD1S",
      amount: 2099, // $20.99 CAD
    },
    aud: {
      priceId: "price_1T5sUiBadJZR5aJfPjYMqQZE",
      amount: 2399, // $23.99 AUD
    },
    gbp: {
      priceId: "price_1T5sUjBadJZR5aJfT2gA3pYc",
      amount: 1199, // £11.99
    },
    eur: {
      priceId: "price_1T5sUjBadJZR5aJfRjumQ2NO",
      amount: 1399, // €13.99
    },
  },
  "4week": {
    usd: {
      priceId: "price_1SzEoRBadJZR5aJfQIjtvqpo",
      amount: 5000, // $50.00 monthly tier
    },
    cad: {
      priceId: "price_1T5sUjBadJZR5aJfhwqqi9Q2",
      amount: 5499, // $54.99 CAD
    },
    aud: {
      priceId: "price_1T5sUkBadJZR5aJflICUZEF7",
      amount: 6199, // $61.99 AUD
    },
    gbp: {
      priceId: "price_1T5sUkBadJZR5aJf8n8I5Rnt",
      amount: 3199, // £31.99
    },
    eur: {
      priceId: "price_1T5sUlBadJZR5aJfwWWQnlIQ",
      amount: 3699, // €36.99
    },
  },
  "12week": {
    usd: {
      priceId: "price_1T2W0lBadJZR5aJfcTljn9fB",
      amount: 7999, // $79.99
    },
    cad: {
      priceId: "price_1T5sUlBadJZR5aJfBXPmPM5f",
      amount: 10999, // $109.99 CAD
    },
    aud: {
      priceId: "price_1T5sUmBadJZR5aJfaVCWmBfH",
      amount: 12399, // $123.99 AUD
    },
    gbp: {
      priceId: "price_1T5sUmBadJZR5aJfof5dNN8h",
      amount: 6399, // £63.99
    },
    eur: {
      priceId: "price_1T5sUmBadJZR5aJfH8vFpOeg",
      amount: 7399, // €73.99
    },
  },
  lifetime: {
    usd: {
      priceId: "price_1T2hBaBadJZR5aJfDYwqtPa1",
      amount: 14000, // $140.00
    },
    cad: {
      priceId: "price_1T5sUnBadJZR5aJfIhUaBjfq",
      amount: 18900, // $189.00 CAD
    },
    aud: {
      priceId: "price_1T5sUnBadJZR5aJfaiw3xG0E",
      amount: 21900, // $219.00 AUD
    },
    gbp: {
      priceId: "price_1T5sUnBadJZR5aJfhmQZ67Yi",
      amount: 10900, // £109.00
    },
    eur: {
      priceId: "price_1T5sUoBadJZR5aJfZKfv9JuR",
      amount: 12900, // €129.00
    },
  },
} as const;

/**
 * Multi-currency pricing configuration for the active runtime mode.
 *
 * WHY: Stripe price IDs are mode-specific. A live deployment must never use
 * test price IDs, and a test deployment must never use live price IDs.
 */
export const MULTI_CURRENCY_PRICES: MultiCurrencyPriceMap =
  STRIPE_RUNTIME_MODE === "live" ? LIVE_MULTI_CURRENCY_PRICES : TEST_MULTI_CURRENCY_PRICES;

export type PlanId = keyof typeof MULTI_CURRENCY_PRICES;

/**
 * Get the price ID for a specific plan and currency.
 * Defaults to USD if currency not specified.
 *
 * @param planId - Plan identifier ('1week', '4week', '12week', 'lifetime')
 * @param currency - Currency code (defaults to 'usd')
 * @returns Stripe price ID for the plan/currency combination
 * @throws Error if plan ID or currency is invalid
 */
export function getPriceIdForPlanAndCurrency(
  planId: string,
  currency: SupportedCurrency = "usd",
): string {
  const plan = MULTI_CURRENCY_PRICES[planId as PlanId];

  if (!plan) {
    throw new Error(
      `Invalid plan ID: ${planId}. Valid options: ${Object.keys(MULTI_CURRENCY_PRICES).join(", ")}`,
    );
  }

  const priceInfo = plan[currency];

  if (!priceInfo) {
    throw new Error(
      `Currency ${currency} not supported for plan ${planId}. Supported currencies: ${SUPPORTED_CURRENCIES.join(", ")}`,
    );
  }

  return priceInfo.priceId;
}

/**
 * Get the price amount (in cents) for a specific plan and currency.
 * Defaults to USD if currency not specified.
 *
 * @param planId - Plan identifier ('1week', '4week', '12week', 'lifetime')
 * @param currency - Currency code (defaults to 'usd')
 * @returns Price amount in cents (e.g., 1499 for $14.99)
 * @throws Error if plan ID or currency is invalid
 */
export function getPriceForPlanAndCurrency(
  planId: string,
  currency: SupportedCurrency = "usd",
): number {
  const plan = MULTI_CURRENCY_PRICES[planId as PlanId];

  if (!plan) {
    throw new Error(
      `Invalid plan ID: ${planId}. Valid options: ${Object.keys(MULTI_CURRENCY_PRICES).join(", ")}`,
    );
  }

  const priceInfo = plan[currency];

  if (!priceInfo) {
    throw new Error(
      `Currency ${currency} not supported for plan ${planId}. Supported currencies: ${SUPPORTED_CURRENCIES.join(", ")}`,
    );
  }

  return priceInfo.amount;
}

/**
 * Get currency from country code.
 * Defaults to USD if country not found in mapping.
 *
 * @param countryCode - ISO 3166-1 alpha-2 country code (e.g., 'US', 'CA', 'GB')
 * @returns Currency code for the country
 */
export function getCurrencyForCountry(countryCode: string): SupportedCurrency {
  const normalizedCode = countryCode.toUpperCase().trim();
  return COUNTRY_TO_CURRENCY[normalizedCode] || "usd";
}

/**
 * Allow explicit country overrides only while Stripe is in test mode.
 *
 * WHY: Localhost and some preview requests won't carry Vercel geo headers.
 * This keeps manual geo verification available in test mode without opening a
 * live-mode currency override path.
 */
export function getTestCountryOverride(countryCode?: string | null): string | null {
  if (STRIPE_RUNTIME_MODE !== "test" || !countryCode) {
    return null;
  }

  const normalizedCode = countryCode.toUpperCase().trim();
  return COUNTRY_TO_CURRENCY[normalizedCode] ? normalizedCode : null;
}

/**
 * Format price amount for display with currency symbol.
 *
 * @param amountInCents - Price amount in cents (e.g., 1499)
 * @param currency - Currency code (defaults to 'usd')
 * @returns Formatted price string (e.g., '$14.99', '£11.99')
 */
export function formatPrice(amountInCents: number, currency: SupportedCurrency = "usd"): string {
  const symbol = CURRENCY_SYMBOLS[currency];
  const major = Math.floor(amountInCents / 100);
  const minor = amountInCents % 100;

  // For GBP and EUR, symbol typically comes before amount
  // For CAD and AUD, symbol comes before amount with currency code
  if (currency === "cad") {
    return `C$${major}.${minor.toString().padStart(2, "0")}`;
  }
  if (currency === "aud") {
    return `A$${major}.${minor.toString().padStart(2, "0")}`;
  }

  return `${symbol}${major}.${minor.toString().padStart(2, "0")}`;
}

// Pricing tiers
export const PRICING_TIERS = {
  "1week": {
    id: "1week",
    name: "Weekly access",
    // Direct USD priceId field for shared checkout helpers.
    priceId: STRIPE_PRICE_ID_1WEEK,
    price: 14.99,
    mode: "subscription" as const,
    // Multi-currency support
    prices: {
      usd: {
        priceId: MULTI_CURRENCY_PRICES["1week"].usd.priceId,
        amount: MULTI_CURRENCY_PRICES["1week"].usd.amount,
      },
      cad: {
        priceId: MULTI_CURRENCY_PRICES["1week"].cad.priceId,
        amount: MULTI_CURRENCY_PRICES["1week"].cad.amount,
      },
      aud: {
        priceId: MULTI_CURRENCY_PRICES["1week"].aud.priceId,
        amount: MULTI_CURRENCY_PRICES["1week"].aud.amount,
      },
      gbp: {
        priceId: MULTI_CURRENCY_PRICES["1week"].gbp.priceId,
        amount: MULTI_CURRENCY_PRICES["1week"].gbp.amount,
      },
      eur: {
        priceId: MULTI_CURRENCY_PRICES["1week"].eur.priceId,
        amount: MULTI_CURRENCY_PRICES["1week"].eur.amount,
      },
    },
  },
  "4week": {
    id: "4week",
    name: "4-Week Plan",
    priceId: STRIPE_PRICE_ID_4WEEK,
    price: 39.99,
    mode: "subscription" as const,
    prices: {
      usd: {
        priceId: MULTI_CURRENCY_PRICES["4week"].usd.priceId,
        amount: MULTI_CURRENCY_PRICES["4week"].usd.amount,
      },
      cad: {
        priceId: MULTI_CURRENCY_PRICES["4week"].cad.priceId,
        amount: MULTI_CURRENCY_PRICES["4week"].cad.amount,
      },
      aud: {
        priceId: MULTI_CURRENCY_PRICES["4week"].aud.priceId,
        amount: MULTI_CURRENCY_PRICES["4week"].aud.amount,
      },
      gbp: {
        priceId: MULTI_CURRENCY_PRICES["4week"].gbp.priceId,
        amount: MULTI_CURRENCY_PRICES["4week"].gbp.amount,
      },
      eur: {
        priceId: MULTI_CURRENCY_PRICES["4week"].eur.priceId,
        amount: MULTI_CURRENCY_PRICES["4week"].eur.amount,
      },
    },
  },
  "12week": {
    id: "12week",
    name: "12-Week Program",
    priceId: STRIPE_PRICE_ID_12WEEK,
    price: 79.99,
    mode: "subscription" as const,
    prices: {
      usd: {
        priceId: MULTI_CURRENCY_PRICES["12week"].usd.priceId,
        amount: MULTI_CURRENCY_PRICES["12week"].usd.amount,
      },
      cad: {
        priceId: MULTI_CURRENCY_PRICES["12week"].cad.priceId,
        amount: MULTI_CURRENCY_PRICES["12week"].cad.amount,
      },
      aud: {
        priceId: MULTI_CURRENCY_PRICES["12week"].aud.priceId,
        amount: MULTI_CURRENCY_PRICES["12week"].aud.amount,
      },
      gbp: {
        priceId: MULTI_CURRENCY_PRICES["12week"].gbp.priceId,
        amount: MULTI_CURRENCY_PRICES["12week"].gbp.amount,
      },
      eur: {
        priceId: MULTI_CURRENCY_PRICES["12week"].eur.priceId,
        amount: MULTI_CURRENCY_PRICES["12week"].eur.amount,
      },
    },
  },
  lifetime: {
    id: "lifetime",
    name: "Lifetime Access",
    priceId: STRIPE_PRICE_ID_LIFETIME,
    price: 140.0,
    mode: "payment" as const,
    prices: {
      usd: {
        priceId: MULTI_CURRENCY_PRICES["lifetime"].usd.priceId,
        amount: MULTI_CURRENCY_PRICES["lifetime"].usd.amount,
      },
      cad: {
        priceId: MULTI_CURRENCY_PRICES["lifetime"].cad.priceId,
        amount: MULTI_CURRENCY_PRICES["lifetime"].cad.amount,
      },
      aud: {
        priceId: MULTI_CURRENCY_PRICES["lifetime"].aud.priceId,
        amount: MULTI_CURRENCY_PRICES["lifetime"].aud.amount,
      },
      gbp: {
        priceId: MULTI_CURRENCY_PRICES["lifetime"].gbp.priceId,
        amount: MULTI_CURRENCY_PRICES["lifetime"].gbp.amount,
      },
      eur: {
        priceId: MULTI_CURRENCY_PRICES["lifetime"].eur.priceId,
        amount: MULTI_CURRENCY_PRICES["lifetime"].eur.amount,
      },
    },
  },
} as const;

/**
 * Pricing tier with multi-currency support.
 */
export type PriceTierId = keyof typeof PRICING_TIERS;

export type PricingTier = (typeof PRICING_TIERS)[PriceTierId];

export type TierPriceInfo = {
  priceId: string;
  amount: number; // in cents
};

// Stripe Configuration Object
export const stripeConfig = {
  apiKey: STRIPE_SECRET_KEY,
  apiVersion: STRIPE_API_VERSION,
} as const;

/**
 * Validate Stripe key-level config.
 */
export function validateStripeConfig() {
  const missing: string[] = [];

  if (!STRIPE_SECRET_KEY) missing.push("STRIPE_SECRET_KEY");
  if (!STRIPE_PUBLISHABLE_KEY) missing.push("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY");

  return {
    valid: missing.length === 0,
    missing,
    mode: STRIPE_RUNTIME_MODE,
  };
}

/**
 * Validate Stripe price IDs for the active runtime mode.
 */
export function validatePriceIds() {
  const missing: string[] = [];

  if (!STRIPE_PRICE_ID_1WEEK) missing.push(missingEnvHint("STRIPE_PRICE_ID_1WEEK"));
  if (!STRIPE_PRICE_ID_4WEEK) missing.push(missingEnvHint("STRIPE_PRICE_ID_4WEEK"));
  if (!STRIPE_PRICE_ID_12WEEK) missing.push(missingEnvHint("STRIPE_PRICE_ID_12WEEK"));
  if (!STRIPE_PRICE_ID_LIFETIME) missing.push(missingEnvHint("STRIPE_PRICE_ID_LIFETIME"));

  return {
    valid: missing.length === 0,
    missing,
    mode: STRIPE_RUNTIME_MODE,
  };
}

/**
 * Validate mode-scoped config hygiene.
 *
 * WHY: If only unscoped variables are used, it is easy to mix test/live values.
 * This function is advisory and returns warnings to aid deployment hardening.
 */
export function validateStripeModeConfiguration() {
  const modeSuffix = STRIPE_RUNTIME_MODE === "live" ? "LIVE" : "TEST";
  const keys = [
    "STRIPE_PRODUCT_ID",
    "STRIPE_PRICE_ID_1WEEK",
    "STRIPE_PRICE_ID_4WEEK",
    "STRIPE_PRICE_ID_12WEEK",
    "STRIPE_PRICE_ID_LIFETIME",
    "STRIPE_DEFAULT_COUPON_ID",
    "STRIPE_TESTING_COUPON_ID",
  ];

  const warnings: string[] = [];
  for (const key of keys) {
    if (!process.env[`${key}_${modeSuffix}`] && process.env[key]) {
      warnings.push(`Using ${key} without a mode suffix; prefer ${key}_${modeSuffix}`);
    }
  }

  return {
    clean: warnings.length === 0,
    warnings,
    mode: STRIPE_RUNTIME_MODE,
  };
}

/**
 * Get a price ID for a plan with validation.
 */
export function getPriceIdForPlan(planId: string): string {
  const tier = PRICING_TIERS[planId as PriceTierId];

  if (!tier) {
    throw new Error(`Invalid plan ID: ${planId}. Valid options: 1week, 4week, 12week, lifetime`);
  }

  if (!tier.priceId) {
    throw new Error(`Price ID not configured for plan ${planId} in ${STRIPE_RUNTIME_MODE} mode`);
  }

  return tier.priceId;
}

/**
 * Get the payment mode for a plan (subscription or payment).
 */
export function getPaymentModeForPlan(planId: string): "subscription" | "payment" {
  const tier = PRICING_TIERS[planId as PriceTierId];
  return tier?.mode || "subscription";
}

/**
 * Check if Stripe is configured.
 */
export function isStripeConfigured(): boolean {
  const { valid } = validateStripeConfig();
  return valid;
}

/**
 * Get Stripe checkout URLs.
 */
export function getStripeCheckoutUrls() {
  // WHY .trim(): Vercel env vars can pick up trailing newlines from dashboard copy-paste
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").trim();
  return {
    success: `${baseUrl}/checkout/success`,
    cancel: `${baseUrl}/checkout/canceled`,
  };
}

/**
 * Get pricing tier by price ID.
 */
export function getPricingTierByPriceId(priceId: string) {
  return Object.values(PRICING_TIERS).find((tier) => tier.priceId === priceId);
}

/**
 * Get pricing tier by plan ID.
 * Returns the full tier object including multi-currency pricing.
 */
export function getPricingTierById(planId: PriceTierId): PricingTier | undefined {
  return PRICING_TIERS[planId];
}

/**
 * Get all available currencies for a specific plan.
 * Useful for displaying currency options in the UI.
 */
export function getAvailableCurrenciesForPlan(planId: string): SupportedCurrency[] {
  const tier = PRICING_TIERS[planId as PriceTierId];
  if (!tier || !tier.prices) {
    return SUPPORTED_CURRENCIES.slice(); // Return all supported currencies as fallback
  }
  return Object.keys(tier.prices) as SupportedCurrency[];
}

/**
 * Get price info (priceId and amount) for a plan and currency from PRICING_TIERS.
 * This is the preferred method for UI components that need both price ID and display amount.
 */
export function getTierPriceInfo(
  planId: string,
  currency: SupportedCurrency = "usd",
): TierPriceInfo {
  const tier = PRICING_TIERS[planId as PriceTierId];

  if (!tier) {
    throw new Error(
      `Invalid plan ID: ${planId}. Valid options: ${Object.keys(PRICING_TIERS).join(", ")}`,
    );
  }

  const priceInfo = tier.prices?.[currency];

  if (!priceInfo) {
    throw new Error(
      `Currency ${currency} not supported for plan ${planId}. Supported currencies: ${SUPPORTED_CURRENCIES.join(", ")}`,
    );
  }

  return priceInfo;
}
