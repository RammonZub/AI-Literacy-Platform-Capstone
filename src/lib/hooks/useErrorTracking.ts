/**
 * useErrorTracking Hook
 *
 * PURPOSE: Client-side error tracking for landing page and platform pages
 *
 * CONTEXT:
 * This hook provides a simple interface for tracking client-side errors
 * to `telemetry_events` via `/api/analytics/error`. Server diagnostics use `server_diagnostic`.
 * in the analytics and notification utilities.
 *
 * KEY RESPONSIBILITIES:
 * - Track client-side JavaScript errors
 * - Track React error boundary errors
 * - Track unhandled promise rejections
 * - Include stack traces and context for debugging
 * - Non-blocking: Uses sendBeacon or keepalive for reliability
 *
 * DESIGN RATIONALE:
 * - Fire-and-forget: Errors shouldn't block user experience
 * - Reliable: Uses navigator.sendBeacon for page unload scenarios
 * - Privacy-first: Only captures error data, no PII
 * - Lightweight: Minimal bundle overhead
 *
 * USAGE:
 * ```tsx
 * import { useErrorTracking } from '@/lib/hooks/useErrorTracking'
 *
 * function MyComponent() {
 *   const { trackError } = useErrorTracking()
 *
 *   try {
 *     // risky operation
 *   } catch (error) {
 *     trackError(error, { component: 'MyComponent', action: 'submit' })
 *   }
 * }
 * ```
 *
 * ERROR BOUNDARY USAGE:
 * ```tsx
 * // In error.tsx
 * export default function Error({ error, reset }) {
 *   const { trackError } = useErrorTracking()
 *
 *   useEffect(() => {
 *     trackError(error, { boundary: 'global', digest: error.digest })
 *   }, [error, trackError])
 * }
 * ```
 *
 * @see src/app/api/analytics/error/route.ts for the API endpoint
 * @see src/lib/telemetry.ts for persisted telemetry rows
 * @created 2026-02-18
 */

"use client";

import { useCallback, useEffect, useRef } from "react";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/**
 * Error context to include with tracked errors
 *
 * DESIGN: Flexible object for any additional debugging context
 */
export interface ErrorContext {
  /** Component where error occurred */
  component?: string;
  /** Action that triggered the error */
  action?: string;
  /** Error boundary name */
  boundary?: string;
  /** Next.js error digest */
  digest?: string;
  /** Additional context */
  [key: string]: unknown;
}

/**
 * Tracked error payload sent to the API
 *
 * DESIGN: Matches API endpoint expectations
 */
interface ErrorPayload {
  event_name: string;
  page_path: string;
  error_message: string;
  error_stack?: string;
  error_name?: string;
  user_agent?: string;
  context: ErrorContext;
}

/**
 * Hook return type
 */
export interface UseErrorTrackingReturn {
  /**
   * Track a client-side error
   *
   * PURPOSE: Send error to analytics API
   *
   * DESIGN: Fire-and-forget, never throws
   *
   * @param error - The error to track
   * @param context - Additional context for debugging
   */
  trackError: (error: Error | unknown, context?: ErrorContext) => void;

  /**
   * Track a custom event (non-error)
   *
   * PURPOSE: Track page views or custom events to telemetry
   *
   * @param eventName - Event name (e.g., 'page_view', 'custom_event')
   * @param context - Additional context
   */
  trackEvent: (eventName: string, context?: ErrorContext) => void;
}

// ============================================================================
// CONSTANTS
// ============================================================================

/**
 * API endpoint for error tracking
 */
const ERROR_API = "/api/analytics/error";

/**
 * Events that should not be tracked (noise/filtering)
 */
const IGNORED_ERROR_MESSAGES = [
  "ResizeObserver loop limit exceeded",
  "Network request failed",
  "Failed to fetch",
  "Load failed",
  "Non-Error promise rejection captured",
  "Script error.",
  "NetworkError",
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Check if an error should be ignored
 *
 * PURPOSE: Filter out noise from browser extensions, network issues, etc.
 *
 * @param message - Error message to check
 * @returns True if error should be ignored
 */
function shouldIgnoreError(message: string): boolean {
  return IGNORED_ERROR_MESSAGES.some((ignored) =>
    message.toLowerCase().includes(ignored.toLowerCase()),
  );
}

/**
 * Extract error information from various error types
 *
 * PURPOSE: Handle both Error objects and unknown thrown values
 *
 * @param error - Thrown value (could be Error, string, or unknown)
 * @returns Normalized error information
 */
function extractErrorInfo(error: unknown): {
  message: string;
  stack?: string;
  name?: string;
} {
  if (error instanceof Error) {
    return {
      message: error.message,
      stack: error.stack,
      name: error.name,
    };
  }

  if (typeof error === "string") {
    return { message: error };
  }

  if (typeof error === "object" && error !== null) {
    const anyError = error as Record<string, unknown>;
    return {
      message: String(anyError.message || anyError.error || "Unknown error"),
      stack: anyError.stack ? String(anyError.stack) : undefined,
      name: anyError.name ? String(anyError.name) : undefined,
    };
  }

  return { message: "Unknown error" };
}

/**
 * Send error payload to API
 *
 * PURPOSE: Fire-and-forget error tracking
 *
 * DESIGN:
 * - Uses sendBeacon for page unload scenarios
 * - Falls back to fetch with keepalive
 * - Never throws errors
 *
 * @param payload - Error payload to send
 */
function sendErrorEvent(payload: ErrorPayload): void {
  try {
    const body = JSON.stringify(payload);

    // Use sendBeacon for reliability during page unload
    if (navigator.sendBeacon) {
      const blob = new Blob([body], { type: "application/json" });
      navigator.sendBeacon(ERROR_API, blob);
    } else {
      // Fallback to fetch with keepalive
      fetch(ERROR_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      }).catch(() => {
        // Silently ignore - error tracking shouldn't cause more errors
      });
    }
  } catch {
    // Silently ignore - error tracking shouldn't cause more errors
  }
}

// ============================================================================
// HOOK IMPLEMENTATION
// ============================================================================

/**
 * useErrorTracking Hook
 *
 * PURPOSE: Track client-side errors to telemetry via POST /api/analytics/error
 *
 * @returns Error tracking functions
 */
export function useErrorTracking(): UseErrorTrackingReturn {
  // Track if global handlers have been set up
  const handlersSetUp = useRef(false);

  /**
   * Track a client-side error
   *
   * PURPOSE: Send error to analytics API
   *
   * DESIGN:
   * - Normalizes error objects
   * - Filters out noise
   * - Includes page context
   * - Non-blocking
   */
  const trackError = useCallback((error: Error | unknown, context: ErrorContext = {}) => {
    // Extract error info
    const { message, stack, name } = extractErrorInfo(error);

    // Filter out noise
    if (shouldIgnoreError(message)) {
      return;
    }

    // Build payload
    const payload: ErrorPayload = {
      event_name: "client_error",
      page_path: typeof window !== "undefined" ? window.location.pathname : "",
      error_message: message.slice(0, 1000), // Truncate long messages
      error_stack: stack?.slice(0, 5000), // Truncate long stacks
      error_name: name,
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent.slice(0, 500) : undefined,
      context: {
        ...context,
        timestamp: new Date().toISOString(),
        url: typeof window !== "undefined" ? window.location.href : undefined,
      },
    };

    sendErrorEvent(payload);
  }, []);

  /**
   * Track a custom event (non-error)
   *
   * PURPOSE: Track page views or custom events to telemetry
   *
   * DESIGN: Same infrastructure as error tracking, different event name
   */
  const trackEvent = useCallback((eventName: string, context: ErrorContext = {}) => {
    const payload: ErrorPayload = {
      event_name: eventName,
      page_path: typeof window !== "undefined" ? window.location.pathname : "",
      error_message: "", // No error for custom events
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent.slice(0, 500) : undefined,
      context: {
        ...context,
        timestamp: new Date().toISOString(),
        url: typeof window !== "undefined" ? window.location.href : undefined,
      },
    };

    sendErrorEvent(payload);
  }, []);

  /**
   * Set up global error handlers
   *
   * PURPOSE: Catch unhandled errors and promise rejections
   *
   * DESIGN: Only set up once per page load
   */
  useEffect(() => {
    if (handlersSetUp.current) return;
    handlersSetUp.current = true;

    /**
     * Handle unhandled errors
     */
    const handleError = (event: ErrorEvent) => {
      trackError(event.error || event.message, {
        source: "global_handler",
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      });
    };

    /**
     * Handle unhandled promise rejections
     */
    const handleRejection = (event: PromiseRejectionEvent) => {
      trackError(event.reason, {
        source: "unhandled_rejection",
      });
    };

    // Add global handlers
    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, [trackError]);

  return {
    trackError,
    trackEvent,
  };
}

// ============================================================================
// DEFAULT EXPORT
// ============================================================================

export default useErrorTracking;
