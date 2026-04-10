/**
 * Checkout offer page at `/checkout/[checkoutId]`.
 */

import { cookies, headers } from "next/headers";
import type { Metadata } from "next";
import { Suspense } from "react";
import { CheckoutPage } from "@/components/platform/checkout/CheckoutPage";
import { checkoutOfferConfig } from "@/lib/checkout/config";
import {
  getCurrencyForCountry,
  getTestCountryOverride,
  isValidWelcomeCoupon,
  type SupportedCurrency,
} from "@/lib/stripe/config";

interface CommerceCheckoutPageProps {
  params: Promise<{
    checkoutId: string;
  }>;
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

function buildRequestOrigin(headersList: Headers): string {
  const protocol =
    headersList.get("x-forwarded-proto") || headersList.get("x-forwarded-protocol") || "https";
  const host =
    headersList.get("x-forwarded-host") || headersList.get("host") || "localhost:3000";

  return `${protocol}://${host}`;
}

async function ensureCheckoutTrackingSession({
  checkoutId,
  couponCode,
  testCountryOverride,
}: {
  checkoutId: string;
  couponCode: string | null;
  testCountryOverride: string | null;
}) {
  const headersList = await headers();
  const cookieStore = await cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map(({ name, value }) => `${name}=${value}`)
    .join("; ");

  try {
    const response = await fetch(
      `${buildRequestOrigin(headersList)}/api/checkout/create-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(cookieHeader ? { cookie: cookieHeader } : {}),
          ...(headersList.get("x-vercel-ip-country")
            ? { "x-vercel-ip-country": headersList.get("x-vercel-ip-country")! }
            : {}),
          ...(headersList.get("x-vercel-ip-country-region")
            ? { "x-vercel-ip-country-region": headersList.get("x-vercel-ip-country-region")! }
            : {}),
          ...(headersList.get("x-vercel-ip-city")
            ? { "x-vercel-ip-city": headersList.get("x-vercel-ip-city")! }
            : {}),
        },
        body: JSON.stringify({
          checkout_id: checkoutId,
          checkout_version: checkoutOfferConfig.versionId,
          offer_variant: checkoutOfferConfig.offerVariant,
          action: "page_load",
          selected_plan: isValidWelcomeCoupon(couponCode) ? "lifetime" : "4week",
          ...(testCountryOverride ? { testCountry: testCountryOverride } : {}),
        }),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("[CheckoutRoute] Server tracking bootstrap failed:", {
        checkoutId,
        status: response.status,
        body: errorBody || null,
      });
    }
  } catch (error) {
    console.error("[CheckoutRoute] Unexpected server tracking bootstrap error:", {
      checkoutId,
      error,
    });
  }
}

async function detectCurrency(
  searchParamsPromise: CommerceCheckoutPageProps["searchParams"],
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

export default async function CommerceCheckoutPage({ params, searchParams }: CommerceCheckoutPageProps) {
  const { currency, couponCode, testCountryOverride } = await detectCurrency(searchParams);
  const { checkoutId } = await params;

  await ensureCheckoutTrackingSession({
    checkoutId,
    couponCode,
    testCountryOverride,
  });

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
        checkoutId={checkoutId}
        couponCode={couponCode}
        initialCurrency={currency}
        testCountryOverride={testCountryOverride}
      />
    </Suspense>
  );
}
