/**
 * Paywall Popup Component
 *
 * PURPOSE: Show expired subscribers a BLOCKING re-subscribe screen.
 * Users cannot dismiss this - they MUST subscribe to continue.
 *
 * CONTEXT: When a user's subscription has expired or is inactive, they need a clear
 * path to re-subscribe. This is a BLOCKING paywall that prevents platform access
 * until the user has an active subscription.
 *
 * SECURITY NOTE:
 * This paywall is NON-DISMISSIBLE by design.
 * Users without access can only:
 * 1. Click "Get subscription" → creates Stripe checkout session → redirects to Stripe
 * 2. Sign out (via Sign Out button below main action)
 *
 * ACCESSIBILITY:
 * - Uses role="dialog" and aria-modal="true" for screen readers
 * - aria-labelledby points to the dialog title
 * - Error messages have role="alert" for immediate announcement
 * - Focus is managed within the modal
 * - Keyboard users cannot Tab to background elements (focus trap via aria-modal)
 *
 * KEY RESPONSIBILITIES:
 * - Display subscription inactive message to expired users
 * - Create Stripe checkout session via /api/stripe/paywall-checkout
 * - Redirect to Stripe Checkout for payment
 * - BLOCK platform access until subscription is active (non-dismissible)
 * - Provide sign-out option for users who want to switch accounts
 *
 * IMPLEMENTATION NOTES:
 * - Backdrop: z-50 for layering above most content
 * - Modal: z-60 to ensure it's above backdrop
 * - Centered card with rounded corners (rounded-2xl)
 * - TWO BUTTONS: "Get subscription" (primary) + "Sign out" (secondary)
 * - Loading state during API call
 * - Error handling with retry option
 *
 * DESIGN RATIONALE:
 * - Blocking modal ensures users cannot bypass paywall
 * - Direct Stripe checkout for the paywall path
 * - Sign out button allows account switching
 *
 * DEPENDENCIES:
 * - react: useState for loading/error state
 * - next/navigation: router for sign-out redirect
 * - No external component dependencies (self-contained)
 *
 * Usage Example:
 * ```tsx
 * // In PlatformLayoutClient - blocking paywall for users without access
 * {hasAccess ? (
 *   children
 * ) : (
 *   <PaywallPopup isOpen={true} />
 * )}
 * ```
 *
 * @see PlatformLayoutClient - Uses this component for access control
 * @see /api/stripe/paywall-checkout - API endpoint for creating checkout sessions
 */

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import PlatformRail from "@/components/layout/PlatformRail";
import { useUser } from "@/lib/hooks/useUser";

// ==========================================
// TYPES
// ==========================================

/**
 * Props for PaywallPopup component
 *
 * DESIGN RATIONALE:
 * - Minimal props: only visibility control needed
 * - No data props needed: message is static/standardized
 * - No close callback: this is a BLOCKING paywall (users MUST subscribe)
 *
 * SECURITY NOTE:
 * This paywall cannot be dismissed. Users without an active subscription
 * must go through checkout to regain access. This prevents paywall bypass.
 */
interface PaywallPopupProps {
  /** Controls whether the popup is visible */
  isOpen: boolean;
}

// ==========================================
// COMPONENT
// ==========================================

/**
 * PaywallPopup Component
 *
 * BLOCKING modal popup for expired subscribers, offering quick re-subscription path.
 * Creates a Stripe checkout session and redirects to Stripe for payment.
 *
 * SECURITY: This is a non-dismissible paywall. Users MUST click "Get subscription"
 * to proceed - there is no "Maybe later" option to prevent paywall bypass.
 *
 * @example
 * <PaywallPopup isOpen={!hasAccess} />
 */
export function PaywallPopup({ isOpen }: PaywallPopupProps) {
  // ------------------------------------
  // HOOKS
  // ------------------------------------
  const { signOut } = useUser();

  // ------------------------------------
  // REFS
  // ------------------------------------

  /**
   * Ref for the modal container element
   * Used for focus trap implementation
   */
  const modalRef = useRef<HTMLDivElement>(null);

  /**
   * AbortController for canceling fetch requests on unmount
   *
   * WHY useRef: We need a stable reference across renders that doesn't trigger
   * re-renders when updated. Using useState would cause unnecessary re-renders.
   *
   * PATTERN:
   * - Create new controller before fetch
   * - Pass signal to fetch
   * - Abort on unmount or when starting a new request
   */
  const abortControllerRef = useRef<AbortController | null>(null);

  // ------------------------------------
  // STATE
  // ------------------------------------

  /**
   * Loading state for checkout session creation
   *
   * WHY: Prevents duplicate API calls and shows user feedback
   */
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Error state for failed checkout session creation
   *
   * WHY: Shows user-friendly error message with retry option
   */
  const [error, setError] = useState<string | null>(null);

  // ------------------------------------
  // Abort pending requests on unmount
  // ------------------------------------

  /**
   * Abort any pending fetch requests when component unmounts
   *
   * WHY: Prevents "setState on unmounted component" errors and memory leaks
   * if the user navigates away while the checkout request is in flight.
   */
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  // ------------------------------------
  // FOCUS TRAP
  // ------------------------------------

  /**
   * Handle keyboard navigation within the modal
   *
   * WHY: Prevents keyboard users from Tab-ing to elements behind the modal.
   * aria-modal="true" helps screen readers, but doesn't prevent visual focus.
   *
   * IMPLEMENTATION:
   * - Tab cycles through focusable elements within the modal
   * - Shift+Tab goes backwards
   * - Focus wraps around at boundaries
   */
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key !== "Tab" || !modalRef.current) return;

    // Get all focusable elements within the modal
    const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // If Shift+Tab on first element, wrap to last
    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement?.focus();
    }
    // If Tab on last element, wrap to first
    else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement?.focus();
    }
  }, []);

  /**
   * Set up focus trap when modal opens
   *
   * WHY: Ensures keyboard users cannot escape the modal focus context
   */
  useEffect(() => {
    if (!isOpen) return;

    // Add event listener for Tab key
    document.addEventListener("keydown", handleKeyDown);

    // Focus the first focusable element when modal opens
    // The autoFocus prop on the primary button handles this,
    // but this is a fallback
    const timer = setTimeout(() => {
      const firstButton = modalRef.current?.querySelector<HTMLElement>(
        "button:not([disabled])",
      );
      firstButton?.focus();
    }, 0);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, handleKeyDown]);

  // Early return: don't render if closed
  if (!isOpen) return null;

  // ------------------------------------
  // HANDLERS
  // ------------------------------------

  /**
   * Handle subscription action
   *
   * FLOW:
   * 1. Abort any previous request (prevents race conditions)
   * 2. Call /api/stripe/paywall-checkout to create Stripe session
   * 3. Redirect to Stripe Checkout URL
   * 4. Stripe handles payment, then redirects to /checkout/success
   *
   * WHY: Creates a seamless checkout flow for authenticated users
   * without repeating the onboarding assessment.
   */
  const handleGetSubscription = async () => {
    // Prevent duplicate clicks
    if (isLoading) return;

    // Abort any previous request to prevent race conditions
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new AbortController for this request
    abortControllerRef.current = new AbortController();

    setIsLoading(true);
    setError(null);

    try {
      // Call the paywall checkout API with abort signal
      const response = await fetch("/api/stripe/paywall-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ planId: "4week" }),
        signal: abortControllerRef.current.signal,
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle specific error cases
        if (response.status === 401) {
          throw new Error("Please log in to continue");
        }
        throw new Error(data.error || "Failed to create checkout session");
      }

      // Redirect to Stripe Checkout
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
        // Return early to prevent state updates after redirect
        return;
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (err) {
      // Don't show error if request was intentionally aborted (e.g., unmount or new request)
      // Check both Error and DOMException (fetch abort throws DOMException)
      if (
        (err instanceof Error && err.name === "AbortError") ||
        (err instanceof DOMException && err.name === "AbortError")
      ) {
        console.log("[PaywallPopup] Request aborted");
        return;
      }

      console.error("[PaywallPopup] Checkout error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
      setIsLoading(false);
    }
  };

  /**
   * Handle sign out action
   *
   * WHY: TopNav is not visible when paywall is shown (it's inside the
   * blocked children). Users need a way to sign out and switch accounts.
   *
   * FLOW: Redirect to login page which will clear the session
   */
  const handleSignOut = async () => {
    await signOut();
  };

  // ------------------------------------
  // RENDER
  // ------------------------------------

  return (
    <>
      {/* ==========================================
          BACKDROP OVERLAY
          Semi-transparent black background with blur effect
          z-50: Above normal content, below modal
          ========================================== */}
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* ==========================================
          CENTERED MODAL
          Main popup card with subscription message
          z-60: Above backdrop (z-50) and TopNav (z-50)
          ARIA: dialog + aria-modal for screen reader accessibility
          ========================================== */}
      <div className="fixed inset-0 z-60">
        <PlatformRail className="h-full flex items-center justify-center">
          <div
            ref={modalRef}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="paywall-title"
            aria-describedby="paywall-description"
          >
            {/* ==========================================
              HEADING
              Bold, urgent message about subscription status
              ========================================== */}
            <h2
              id="paywall-title"
              className="text-2xl font-bold text-gray-900 mb-4"
            >
              Subscription Inactive
            </h2>

            {/* ==========================================
              DESCRIPTION
              Clear explanation of why access is blocked
              ========================================== */}
            <p
              id="paywall-description"
              className="text-gray-600 mb-6 leading-relaxed"
            >
              You no longer have an active subscription. Get one to continue
              accessing the platform.
            </p>

            {/* ==========================================
              ERROR MESSAGE
              Show if checkout session creation failed
              role="alert" for immediate screen reader announcement
              ========================================== */}
            {error && (
              <div
                className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg"
                role="alert"
                aria-live="polite"
              >
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            {/* ==========================================
              ACTION BUTTONS
              Primary: Get subscription
              Secondary: Sign out (for account switching)
              ========================================== */}
            <div className="space-y-3">
              {/* Primary action: Get subscription */}
              <button
                onClick={handleGetSubscription}
                disabled={isLoading}
                className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                autoFocus
              >
                {isLoading ? (
                  <>
                    {/* Loading spinner */}
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Processing...</span>
                  </>
                ) : (
                  "Get subscription"
                )}
              </button>

              {/* Secondary action: Sign out */}
              <button
                onClick={handleSignOut}
                disabled={isLoading}
                className="w-full text-gray-500 py-2 text-sm hover:text-gray-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 rounded-lg"
              >
                Sign out
              </button>
            </div>
          </div>
        </PlatformRail>
      </div>
    </>
  );
}

export default PaywallPopup;
