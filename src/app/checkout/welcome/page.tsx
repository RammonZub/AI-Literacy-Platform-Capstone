/**
 * Checkout welcome promotions at `/checkout/welcome`.
 */

import { headers } from "next/headers";
import type { Metadata } from "next";
import { Suspense } from "react";
import { CheckoutPage } from "@/components/platform/checkout/CheckoutPage";
import {
  getCurrencyForCountry,
  getTestCountryOverride,
  type SupportedCurrency,
} from "@/lib/stripe/config";

interface CheckoutWelcomePageProps {
  searchParams: Promise<{
    coupon?: string | string[];
    test_country?: string | string[];
  }>;
}

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Secure Checkout",
  robots: {
    index: false,
    follow: false,
  },
};

function getSearchParamValue(value?: string | string[]): string | null {
  if (Array.isArray(value)) {
    return value[0] || null;
  }

  return value || null;
}

async function detectCurrency(
  searchParamsPromise: CheckoutWelcomePageProps["searchParams"],
): Promise<{
  currency: SupportedCurrency;
  couponCode: string | null;
  testCountryOverride: string | null;
}> {
  try {
    const searchParams = await searchParamsPromise;
    const headersList = await headers();
    const testCountryOverride = getTestCountryOverride(
      getSearchParamValue(searchParams.test_country),
    );
    const countryCode = testCountryOverride || headersList.get("x-vercel-ip-country") || "US";

    return {
      currency: getCurrencyForCountry(countryCode),
      couponCode: getSearchParamValue(searchParams.coupon),
      testCountryOverride,
    };
  } catch {
    return {
      currency: "usd",
      couponCode: null,
      testCountryOverride: null,
    };
  }
}

export default async function CheckoutWelcomePage({ searchParams }: CheckoutWelcomePageProps) {
  const { currency, couponCode, testCountryOverride } = await detectCurrency(searchParams);

  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#FFFFFF",
            fontSize: "18px",
            color: "#6B7280",
          }}
        >
          <div>Loading checkout...</div>
        </div>
      }
    >
      <CheckoutPage
        checkoutId="welcome"
        couponCode={couponCode}
        initialCurrency={currency}
        testCountryOverride={testCountryOverride}
      />
    </Suspense>
  );
}
