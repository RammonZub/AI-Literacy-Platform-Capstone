"use client";

/**
 * CheckoutPage
 *
 * Client orchestrator for the versioned checkout experience: pricing selection,
 * Stripe session creation, and layout composition for the `/checkout` experience.
 */

import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { checkoutOfferContent } from "@/data/marketing/checkouts/checkout-content";
import {
  getPricingTiersForCurrency,
  type SupportedCurrency as PricingCurrency,
} from "@/data/checkout/pricing";
import { checkoutPageLayout } from "@/lib/checkout/config";
import { isValidWelcomeCoupon, type SupportedCurrency } from "@/lib/stripe/config";
import { CheckoutActions } from "./CheckoutActions";
import { CheckoutCourseShowcase } from "./CheckoutCourseShowcase";
import { CheckoutFaq } from "./CheckoutFaq";
import { CheckoutGuaranteeCard } from "./CheckoutGuaranteeCard";
import { CheckoutNavbar } from "./CheckoutNavbar";
import { CheckoutPlanSelection } from "./CheckoutPlanSelection";
import { CheckoutStickyActionBar } from "./CheckoutStickyActionBar";
import { CheckoutWhatYouGetCard } from "./CheckoutWhatYouGetCard";

const COUNTDOWN_SECONDS = 15 * 60;

export interface CheckoutPageProps {
  checkoutId: string;
  couponCode: string | null;
  initialCurrency: SupportedCurrency;
  testCountryOverride: string | null;
}

function pad2(n: number): string {
  return n < 10 ? `0${n}` : String(n);
}

export function CheckoutPage({
  checkoutId,
  couponCode,
  initialCurrency,
  testCountryOverride,
}: CheckoutPageProps) {
  const searchParams = useSearchParams();
  const canceled = searchParams.get("canceled") === "true";

  const currency = initialCurrency as PricingCurrency;
  const pricingTiers = useMemo(() => getPricingTiersForCurrency(currency), [currency]);

  const welcome = isValidWelcomeCoupon(couponCode);
  const [selectedPlan, setSelectedPlan] = useState<string>(welcome ? "lifetime" : "4week");
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_SECONDS);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  const minutes = pad2(Math.floor(secondsLeft / 60));
  const seconds = pad2(secondsLeft % 60);

  const scrollToPlans = useCallback(() => {
    document.getElementById("checkout-plans")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const selectedTier = useMemo(
    () => pricingTiers.find((t) => t.id === selectedPlan) ?? pricingTiers[1],
    [pricingTiers, selectedPlan],
  );

  const stickyPriceLabel = selectedTier?.isOneTime
    ? selectedTier.discountedPrice
    : `${selectedTier?.perDay ?? ""} / day`;

  const handleStripeCheckout = useCallback(async () => {
    setCheckoutError(null);
    setIsCheckoutLoading(true);
    try {
      const response = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          checkoutId,
          planId: selectedPlan,
          currency,
          couponCode: couponCode || undefined,
          testCountry: testCountryOverride || undefined,
        }),
      });

      const data: { checkoutUrl?: string; error?: string } = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Could not start checkout");
      }

      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
        return;
      }

      throw new Error("No checkout URL returned");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      setCheckoutError(message);
    } finally {
      setIsCheckoutLoading(false);
    }
  }, [checkoutId, couponCode, currency, selectedPlan, testCountryOverride]);

  const banner = checkoutOfferContent.banner;
  const ctaLabel = banner.ctaLabel;
  const bannerMessage = welcome ? banner.freeAccessMessage : banner.defaultMessage;

  return (
    <div className="min-h-screen bg-[#FAFBFD] pb-6">
      <CheckoutNavbar
        couponCode={couponCode}
        ctaLabel={ctaLabel}
        minutes={minutes}
        onClick={scrollToPlans}
        seconds={seconds}
      />

      <div
        className={`mx-auto w-full px-4 pb-8 pt-4 sm:px-6 ${checkoutPageLayout.contentMaxWidthClass}`}
      >
        {canceled ? (
          <div
            className="mb-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-center text-sm font-medium text-amber-950"
            role="status"
          >
            Checkout was canceled. You can choose a plan below when you&apos;re ready.
          </div>
        ) : null}

        <p className="mb-6 text-center text-[15px] font-medium leading-snug text-[#374151]">
          {bannerMessage}
        </p>

        <CheckoutPlanSelection
          anchorId="checkout-plans"
          couponCode={couponCode}
          onSelectPlan={setSelectedPlan}
          pricingTiers={pricingTiers}
          selectedPlan={selectedPlan}
        />

        <div className="mt-6">
          <CheckoutActions
            ctaLabel="GET MY PLAN"
            error={checkoutError}
            isLoading={isCheckoutLoading}
            onCheckout={handleStripeCheckout}
          />
        </div>

        <div className="mt-10 space-y-8">
          <CheckoutWhatYouGetCard
            highlight={checkoutOfferContent.whatYouGet.highlight}
            items={checkoutOfferContent.whatYouGet.items}
            lead={checkoutOfferContent.whatYouGet.lead}
          />

          <CheckoutCourseShowcase
            accentLine={checkoutOfferContent.courseShowcase.accentLine}
            courses={[...checkoutOfferContent.courseShowcase.courses]}
            footerBody={checkoutOfferContent.courseShowcase.footerBody}
            footerTitle={checkoutOfferContent.courseShowcase.footerTitle}
            title={checkoutOfferContent.courseShowcase.title}
          />

          <CheckoutGuaranteeCard />
          <CheckoutFaq />
        </div>

        <CheckoutPlanSelection
          couponCode={couponCode}
          onSelectPlan={setSelectedPlan}
          pricingTiers={pricingTiers}
          selectedPlan={selectedPlan}
          title="Lock in your access"
        />

        <div className="mt-6">
          <CheckoutActions
            ctaLabel="CONTINUE TO SECURE CHECKOUT"
            error={checkoutError}
            isLoading={isCheckoutLoading}
            onCheckout={handleStripeCheckout}
          />
        </div>
      </div>

      <CheckoutStickyActionBar
        ctaLabel={ctaLabel}
        disabled={isCheckoutLoading}
        priceLabel={stickyPriceLabel}
        selectedPlanName={selectedTier?.name ?? ""}
        onClick={handleStripeCheckout}
      />
    </div>
  );
}

export default CheckoutPage;
