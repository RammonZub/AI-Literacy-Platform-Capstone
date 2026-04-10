import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const STRIPE_ENV_KEYS = [
  "STRIPE_SECRET_KEY",
  "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY",
  "STRIPE_PRICE_ID_1WEEK",
  "STRIPE_PRICE_ID_4WEEK",
  "STRIPE_PRICE_ID_12WEEK",
  "STRIPE_PRICE_ID_LIFETIME",
  "STRIPE_PRICE_ID_1WEEK_TEST",
  "STRIPE_PRICE_ID_4WEEK_TEST",
  "STRIPE_PRICE_ID_12WEEK_TEST",
  "STRIPE_PRICE_ID_LIFETIME_TEST",
  "STRIPE_PRICE_ID_1WEEK_LIVE",
  "STRIPE_PRICE_ID_4WEEK_LIVE",
  "STRIPE_PRICE_ID_12WEEK_LIVE",
  "STRIPE_PRICE_ID_LIFETIME_LIVE",
  "STRIPE_DEFAULT_COUPON_ID",
  "STRIPE_DEFAULT_COUPON_ID_TEST",
  "STRIPE_DEFAULT_COUPON_ID_LIVE",
  "STRIPE_TESTING_COUPON_ID",
  "STRIPE_TESTING_COUPON_ID_TEST",
  "STRIPE_TESTING_COUPON_ID_LIVE",
] as const;

const originalEnv: Partial<Record<string, string | undefined>> = {};
for (const key of STRIPE_ENV_KEYS) {
  originalEnv[key] = process.env[key];
}

function clearStripeEnv() {
  for (const key of STRIPE_ENV_KEYS) {
    delete process.env[key];
  }
}

describe("stripe config mode-scoped resolution", () => {
  beforeEach(() => {
    vi.resetModules();
    clearStripeEnv();
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = "pk_test_default";
  });

  afterEach(() => {
    clearStripeEnv();
    for (const key of STRIPE_ENV_KEYS) {
      const value = originalEnv[key];
      if (value !== undefined) {
        process.env[key] = value;
      }
    }
  });

  it("uses LIVE-scoped env values when runtime key is live", async () => {
    process.env.STRIPE_SECRET_KEY = "sk_live_config_mode_fixture";
    process.env.STRIPE_PRICE_ID_1WEEK_LIVE = "price_live_1week";
    process.env.STRIPE_PRICE_ID_4WEEK_LIVE = "price_live_4week";
    process.env.STRIPE_PRICE_ID_12WEEK_LIVE = "price_live_12week";
    process.env.STRIPE_PRICE_ID_LIFETIME_LIVE = "price_live_lifetime";
    process.env.STRIPE_DEFAULT_COUPON_ID_LIVE = "coupon_live_default";

    const config = await import("../config");

    expect(config.STRIPE_RUNTIME_MODE).toBe("live");
    expect(config.STRIPE_PRICE_ID_1WEEK).toBe("price_live_1week");
    expect(config.STRIPE_DEFAULT_COUPON_ID).toBe("coupon_live_default");
    expect(config.getPriceIdForPlanAndCurrency("4week", "eur")).toBe(
      "price_1T5sUlBadJZR5aJfwWWQnlIQ",
    );
    expect(config.getPriceForPlanAndCurrency("lifetime", "cad")).toBe(18900);
    expect(config.validatePriceIds().valid).toBe(true);
  });

  it("falls back to unscoped env values when mode-scoped vars are missing", async () => {
    process.env.STRIPE_SECRET_KEY = "sk_test_config_mode_fixture";
    process.env.STRIPE_PRICE_ID_1WEEK = "price_unscoped_1week";
    process.env.STRIPE_PRICE_ID_4WEEK = "price_unscoped_4week";
    process.env.STRIPE_PRICE_ID_12WEEK = "price_unscoped_12week";
    process.env.STRIPE_PRICE_ID_LIFETIME = "price_unscoped_lifetime";
    process.env.STRIPE_DEFAULT_COUPON_ID = "coupon_unscoped_default";

    const config = await import("../config");

    expect(config.STRIPE_RUNTIME_MODE).toBe("test");
    expect(config.STRIPE_PRICE_ID_1WEEK).toBe("price_unscoped_1week");
    expect(config.STRIPE_DEFAULT_COUPON_ID).toBe("coupon_unscoped_default");
    expect(config.getPriceIdForPlanAndCurrency("4week", "eur")).toBe(
      "price_1T5qjJBadJZR5aJfwmn4VX8g",
    );
    expect(config.getPriceForPlanAndCurrency("lifetime", "cad")).toBe(18900);
    expect(config.validatePriceIds().valid).toBe(true);
  });

  it("reports mode-aware missing hints when required price IDs are absent", async () => {
    process.env.STRIPE_SECRET_KEY = "sk_live_config_missing_prices";

    const config = await import("../config");
    const result = config.validatePriceIds();

    expect(result.valid).toBe(false);
    expect(result.missing).toContain(
      "STRIPE_PRICE_ID_1WEEK_LIVE (or STRIPE_PRICE_ID_1WEEK)",
    );
    expect(result.missing).toContain(
      "STRIPE_PRICE_ID_LIFETIME_LIVE (or STRIPE_PRICE_ID_LIFETIME)",
    );
  });
});
