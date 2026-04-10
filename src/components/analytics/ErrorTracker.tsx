/**
 * Error Tracker Component
 *
 * PURPOSE: Initialize client-side error tracking for a page
 *
 * CONTEXT:
 * This component provides a declarative way to add error tracking to any
 * page. It wraps the useErrorTracking hook in a component that can be
 * easily added to page layouts.
 *
 * KEY RESPONSIBILITIES:
 * - Initialize global error handlers (window.onerror, unhandledrejection)
 * - Provide trackError function via context (optional)
 * - Render nothing (side effects only)
 *
 * DESIGN RATIONALE:
 * - Thin wrapper: Delegates to useErrorTracking hook
 * - No UI: Renders nothing, side effects only
 * - Flexible: Can be added to any page or layout
 * - Non-blocking: Error tracking never blocks user experience
 *
 * USAGE:
 * ```tsx
 * import { ErrorTracker } from '@/components/analytics'
 *
 * export default function PlatformLayout({ children }) {
 *   return (
 *     <>
 *       <ErrorTracker />
 *       {children}
 *     </>
 *   )
 * }
 * ```
 *
 * PLACEMENT:
 * - Landing page: Add to root layout for landing
 * - Platform: Add to platform layout
 * - Quiz: Add to quiz layout
 *
 * WHAT IT CAPTURES:
 * - Unhandled JavaScript errors (window.onerror)
 * - Unhandled promise rejections (unhandledrejection)
 * - Manual errors via trackError function
 *
 * WHAT IT IGNORES:
 * - 404 errors (navigation)
 * - Network errors (handled separately)
 * - ResizeObserver errors (browser noise)
 * - Extension-injected errors
 *
 * @see src/lib/hooks/useErrorTracking.ts for the underlying hook
 * @see src/app/api/analytics/error/route.ts for the API endpoint
 * @created 2026-02-18
 */

"use client";

import { useErrorTracking } from "@/lib/hooks/useErrorTracking";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

// No props needed - component is purely for side effects
// If configuration is needed in the future, add an interface here

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Error Tracker Component
 *
 * PURPOSE: Initialize error tracking for a page
 *
 * DESIGN:
 * - Renders nothing (side effects only)
 * - Sets up global error handlers on mount
 * - Cleans up handlers on unmount
 *
 * @returns null (no UI)
 */
export function ErrorTracker(): null {
  // Initialize the error tracking hook
  // This sets up global handlers for unhandled errors and promise rejections
  useErrorTracking();

  // This component renders nothing (side effects only)
  return null;
}

// ============================================================================
// DEFAULT EXPORT
// ============================================================================

export default ErrorTracker;
