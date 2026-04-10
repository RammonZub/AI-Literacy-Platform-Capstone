/**
 * Platform Layout Client Component
 *
 * PURPOSE: Client-side wrapper for platform layout with paywall enforcement
 *
 * CONTEXT: The platform layout is a Server Component, but PaywallPopup requires
 * client-side rendering. This component bridges that gap and enforces access control.
 *
 * SECURITY:
 * This component is CRITICAL for paywall enforcement. Children are ONLY rendered
 * if hasAccess is true. Users without an active subscription see a BLOCKING,
 * non-dismissible PaywallPopup instead of the platform content.
 *
 * MULTI-TAB SYNC:
 * Uses BroadcastChannel API to synchronize subscription status across tabs.
 * When a user completes payment in one tab, other tabs are notified and refresh
 * to get the updated access status.
 *
 * KEY RESPONSIBILITIES:
 * - Enforce subscription access (BLOCK content if !hasAccess)
 * - Render non-dismissible PaywallPopup for users without access
 * - Synchronize subscription status across browser tabs
 * - Provide paywall context for future upselling features
 *
 * IMPLEMENTATION NOTES:
 * - This is a security-critical component
 * - PaywallPopup cannot be dismissed - users MUST subscribe to continue
 * - Content is never sent to browser until access is granted
 * - BroadcastChannel provides cross-tab communication
 *
 * DEPENDENCIES:
 * - react: Context API for paywall state, useEffect for cross-tab sync
 * - @/components/platform/PaywallPopup: Non-dismissible paywall modal
 *
 * @see src/app/platform/layout.tsx - Server Component layout
 * @see src/components/platform/PaywallPopup.tsx - Paywall modal
 * @created 2026-02-11
 * @modified 2026-02-16 - Fixed critical paywall bypass vulnerability
 * @modified 2026-02-16 - Added multi-tab synchronization
 */

"use client";

import type React from "react";
import { createContext, useContext, useEffect, useRef } from "react";
import { ErrorTracker } from "@/components/analytics";
import { FeedbackPopup, FeedbackTestHelper } from "@/components/platform/feedback";
import { PaywallPopup } from "@/components/platform/PaywallPopup";
import { platformLayout } from "@/data/design/tokens";
import { usePathname } from "next/navigation";

// ==========================================
// TYPES
// ==========================================

/**
 * Paywall context interface
 *
 * PURPOSE: Provides read-only access to subscription status for components
 *
 * ARCHITECTURE CHANGE (2026-02-16):
 * This context reflects paywall state while actual access remains controlled
 * by the `hasAccess` prop from the server.
 *
 * WHY keep this context:
 * - Components can check `showPaywall` to know if user has access
 * - Future: Could be extended for upselling premium features
 * - Keeps a shared paywall visibility signal available to components
 *
 * PAYWALL CONTROL:
 * - Paywall is BLOCKING and controlled by hasAccess (server-side)
 * - No component should be able to dismiss the paywall
 * - If user needs access, they must subscribe (PaywallPopup handles this)
 */
export interface PaywallContextValue {
  /** Whether the paywall popup is currently visible (derived from !hasAccess) */
  showPaywall: boolean;
}

/**
 * BroadcastChannel message types for cross-tab communication
 */
type SubscriptionBroadcastMessage = {
  type: "subscription-activated";
  timestamp: number;
};

// ==========================================
// CONSTANTS
// ==========================================

/**
 * Channel name for subscription status broadcasts
 *
 * WHY: Using a specific, namespaced channel name prevents conflicts
 * with other potential BroadcastChannel usage in the app
 */
const SUBSCRIPTION_CHANNEL = "ai-literacy-subscription";
const isDev = process.env.NODE_ENV === "development";

// ==========================================
// CONTEXT
// ==========================================

/**
 * Paywall context for global paywall state
 *
 * WHY: Using Context API instead of prop drilling because:
 * 1. Multiple components may need to trigger paywall (lesson cards, quiz, etc.)
 * 2. Paywall state is app-wide, not component-specific
 * 3. Avoids passing callbacks through many layers of components
 */
const PaywallContext = createContext<PaywallContextValue | undefined>(undefined);

/**
 * Hook to access paywall context
 *
 * USAGE:
 * ```tsx
 * const { showPaywall } = usePaywall();
 *
 * // Check if user has access
 * if (showPaywall) {
 *   // User doesn't have active subscription
 * }
 * ```
 *
 * NOTE: The paywall cannot be controlled from components. It's purely
 * controlled by the hasAccess prop from the server.
 *
 * @throws {Error} If used outside of PlatformLayoutClient
 * @returns {PaywallContextValue} Paywall state (read-only)
 */
export function usePaywall(): PaywallContextValue {
  const context = useContext(PaywallContext);
  if (!context) {
    throw new Error("usePaywall must be used within PlatformLayoutClient");
  }
  return context;
}

// ==========================================
// COMPONENT
// ==========================================

/**
 * Platform Layout Client Component Props
 */
export interface PlatformLayoutClientProps {
  /** Child content to render with paywall support */
  children: React.ReactNode;
  /** Whether user has active subscription (triggers paywall if false) */
  hasAccess: boolean;
}

/**
 * Platform Layout Client Component
 *
 * Provides client-side interactivity for platform layout including
 * paywall enforcement for users without active subscriptions.
 *
 * SECURITY: Children are only rendered if hasAccess is true.
 * Users without access see a non-dismissible PaywallPopup.
 *
 * MULTI-TAB: Listens for subscription changes from other tabs and
 * refreshes to get updated access status.
 *
 * @param {PlatformLayoutClientProps} props - Component props
 * @returns {JSX.Element} Children with paywall context provider
 */
export function PlatformLayoutClient({ children, hasAccess }: PlatformLayoutClientProps) {
  const pathname = usePathname();

  // ------------------------------------
  // REFS
  // ------------------------------------

  /**
   * Track previous hasAccess to detect changes
   *
   * WHY: We need to broadcast when access changes from false to true
   * (i.e., when payment completes in this tab)
   */
  const previousHasAccess = useRef(hasAccess);

  // ------------------------------------
  // MULTI-TAB SYNCHRONIZATION
  // ------------------------------------

  /**
   * Cross-tab subscription status synchronization
   *
   * PROBLEM: If user has multiple tabs open and completes payment in one,
   * other tabs still show the paywall because hasAccess was computed
   * server-side when the page loaded.
   *
   * SOLUTION: Use BroadcastChannel API to:
   * 1. Listen for 'subscription-activated' from other tabs
   * 2. Refresh the page to get updated hasAccess from server
   * 3. Broadcast when this tab gains access (payment completed)
   *
   * WHY page refresh instead of state update:
   * - hasAccess comes from Server Component props
   * - We can't modify server-computed props client-side
   * - Refresh ensures server re-evaluates access with fresh DB data
   */
  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") return;

    // Check if BroadcastChannel is supported (all modern browsers)
    if (!("BroadcastChannel" in window)) {
      if (isDev)
        console.warn("[PlatformLayout] BroadcastChannel not supported, multi-tab sync disabled");
      return;
    }

    const channel = new BroadcastChannel(SUBSCRIPTION_CHANNEL);

    // ------------------------------------
    // Listen for subscription activation from OTHER tabs
    // ------------------------------------
    const handleMessage = (event: MessageEvent<SubscriptionBroadcastMessage>) => {
      if (event.data?.type === "subscription-activated") {
        if (isDev)
          console.log(
            "[PlatformLayout] Received subscription-activated from another tab, refreshing...",
          );
        // Refresh to get updated hasAccess from server
        window.location.reload();
      }
    };

    channel.addEventListener("message", handleMessage);

    // ------------------------------------
    // Broadcast when THIS tab gains access
    // ------------------------------------
    // Detect transition from no access → has access
    if (hasAccess && !previousHasAccess.current) {
      if (isDev) console.log("[PlatformLayout] Access gained, broadcasting to other tabs...");
      const message: SubscriptionBroadcastMessage = {
        type: "subscription-activated",
        timestamp: Date.now(),
      };
      channel.postMessage(message);
    }

    // Update ref for next comparison
    previousHasAccess.current = hasAccess;

    // Close the channel on unmount
    return () => {
      channel.removeEventListener("message", handleMessage);
      channel.close();
    };
  }, [hasAccess]);

  /**
   * Keep the root platform rail width aligned with the current route.
   *
   * WHY THIS EXISTS:
   * The desktop sidebar positions itself using `--platform-rail-max`. The
   * dashboard uses a wider desktop composition than the rest of the platform,
   * so the root variable must change at the layout level. If the page widens
   * itself locally without updating the root variable, the sidebar is computed
   * against the old narrow width and overlaps the content.
   */
  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const platformRoot = document.getElementById("platform-root");
    if (!platformRoot) {
      return;
    }

    const isDashboardRoute = pathname === "/platform";
    const railMax = isDashboardRoute ? "84rem" : platformLayout.railMax;

    platformRoot.style.setProperty("--platform-rail-max", railMax);

    return () => {
      platformRoot.style.setProperty("--platform-rail-max", platformLayout.railMax);
    };
  }, [pathname]);

  // ------------------------------------
  // CONTEXT VALUE
  // ------------------------------------
  // NOTE: Context kept for future use (e.g., upselling premium features)
  // Currently, the paywall is purely based on hasAccess prop

  const contextValue: PaywallContextValue = {
    showPaywall: !hasAccess,
  };

  // ------------------------------------
  // RENDER
  // ------------------------------------

  return (
    <PaywallContext.Provider value={contextValue}>
      {/* Track client-side errors for all platform pages */}
      {/* Page tracking is handled by SimplePageTracker in root layout */}
      <ErrorTracker />
      {/* Dev-only: Feedback popup tester - run window.devShowFeedback() in console */}
      {isDev && <FeedbackTestHelper />}
      {isDev && <FeedbackPopup isOpen={false} />}
      {/* SECURITY: Only render children if user has active subscription */}
      {hasAccess ? (
        children
      ) : (
        /* Show non-dismissible paywall for users without access */
        <PaywallPopup isOpen={true} />
      )}
    </PaywallContext.Provider>
  );
}

/**
 * Default export for named imports
 *
 * WHY: Some projects prefer default exports for components.
 * This provides both options.
 */
export default PlatformLayoutClient;
