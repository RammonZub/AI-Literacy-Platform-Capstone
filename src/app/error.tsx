/**
 * Global Error Boundary
 *
 * PURPOSE: Catch and display unexpected errors, track to analytics
 *
 * CONTEXT:
 * This is the root error boundary for the entire application.
 * It catches any unhandled errors and displays a user-friendly error page.
 *
 * KEY RESPONSIBILITIES:
 * - Display error message to user
 * - Provide reset button to try again
 * - Track error to `telemetry_events` (client_error) via `/api/analytics/error`
 * - Include error digest for debugging
 *
 * DESIGN RATIONALE:
 * - Client component: Required for error boundaries in Next.js
 * - Non-blocking: Error tracking is fire-and-forget
 * - User-friendly: Simple, clean error UI
 * - Debuggable: Includes error digest in tracking
 *
 * @see src/lib/hooks/useErrorTracking.ts for error tracking hook
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/error
 * @created 2026-02-18 - Updated with error tracking
 */

"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useErrorTracking } from "@/lib/hooks/useErrorTracking";

// ============================================================================
// ERROR BOUNDARY COMPONENT
// ============================================================================

/**
 * Global Error Boundary Props
 */
interface ErrorProps {
  /** The error that was thrown */
  error: Error & { digest?: string };
  /** Function to reset the error boundary */
  reset: () => void;
}

/**
 * Global Error Boundary Component
 *
 * PURPOSE: Catch all unhandled errors and display fallback UI
 *
 * BEHAVIOR:
 * 1. Catches any error thrown in the app
 * 2. Tracks error to telemetry (non-blocking)
 * 3. Displays user-friendly error message
 * 4. Provides reset button to retry
 *
 * @param error - The error that was thrown
 * @param reset - Function to reset the error boundary
 */
export default function Error({ error, reset }: ErrorProps): React.JSX.Element {
  const { trackError } = useErrorTracking();

  // Track error on mount
  useEffect(() => {
    trackError(error, {
      boundary: "global",
      digest: error.digest,
      // Include any additional context
      error_type: "react_error_boundary",
    });
  }, [error, trackError]);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white px-4">
      {/* Error Icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
        <svg
          className="h-8 w-8 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      {/* Error Title */}
      <h2 className="text-2xl font-bold text-gray-900">Something went wrong!</h2>

      {/* Error Message */}
      <p className="mt-2 max-w-md text-center text-gray-600">
        {error.message || "An unexpected error occurred. Please try again."}
      </p>

      {/* Error Digest (for debugging - only in development) */}
      {process.env.NODE_ENV === "development" && error.digest && (
        <p className="mt-2 rounded bg-gray-100 px-3 py-1 font-mono text-xs text-gray-500">
          Error ID: {error.digest}
        </p>
      )}

      {/* Reset Button */}
      <button
        onClick={reset}
        className="mt-6 rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-600"
      >
        Try again
      </button>

      {/* Help Link */}
      <Link
        href="/"
        className="mt-4 text-sm text-gray-500 underline-offset-2 hover:text-gray-700 hover:underline"
      >
        Go back home
      </Link>
    </div>
  );
}
