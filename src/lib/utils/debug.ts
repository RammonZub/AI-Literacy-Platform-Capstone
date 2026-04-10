/**
 * Debug Logging Utilities
 *
 * PURPOSE: Provide development-only logging helpers that are automatically
 * disabled in production to prevent sensitive data leakage and log pollution.
 *
 * WHY THIS EXISTS:
 * - Multiple files need debug logging (proxy, auth pages, etc.)
 * - Duplicating the same pattern violates DRY principle
 * - Centralizing ensures consistent behavior across the codebase
 * - Production logs should be clean and not expose sensitive data
 *
 * USAGE:
 * ```typescript
 * import { createDebugLogger } from '@/lib/utils/debug'
 *
 * const debugLog = createDebugLogger('MY_MODULE')
 * debugLog('Something happened', { data: 'value' })
 * // Output (dev only): [MY_MODULE] Something happened: { data: 'value' }
 * ```
 *
 * @example
 * // In a client component
 * const debugLog = createDebugLogger('AUTH')
 * debugLog('User signed in', { userId: user.id })
 *
 * @example
 * // In a server component or API route
 * const debugLog = createDebugLogger('API')
 * debugLog('Request received', { method: request.method })
 */

// ==========================================
// TYPES
// ==========================================

export type DebugLogger = (label: string, data: Record<string, unknown>) => void;

// ==========================================
// ENVIRONMENT CHECK
// ==========================================

/**
 * Check if we're in development mode
 * Works in both browser and Node.js environments
 */
export const isDevelopment = process.env.NODE_ENV !== "production";

// ==========================================
// LOGGER FACTORY
// ==========================================

/**
 * Create a debug logger with a custom prefix
 *
 * WHY a factory: Each module gets its own prefixed logger (e.g., [PROXY], [CALLBACK])
 * making it easy to filter logs in the console by module.
 *
 * @param prefix - The prefix to use for all logs from this logger (e.g., 'PROXY', 'AUTH')
 * @returns A debug log function that only logs in development
 *
 * @example
 * const debugLog = createDebugLogger('WELCOME')
 * debugLog('Page mounted', { isNewSubscriber: true })
 * // Output: [WELCOME] Page mounted: { isNewSubscriber: true }
 */
export function createDebugLogger(prefix: string): DebugLogger {
  return (label: string, data: Record<string, unknown>): void => {
    if (isDevelopment) {
      console.log(`[${prefix}] ${label}:`, data);
    }
  };
}

// ==========================================
// CONVENIENCE LOGGERS
// ==========================================

/**
 * Pre-configured logger for proxy/middleware
 */
export const proxyDebugLog = createDebugLogger("PROXY");

/**
 * Pre-configured logger for auth callback
 */
export const authCallbackDebugLog = createDebugLogger("CALLBACK");

/**
 * Pre-configured logger for welcome page
 */
export const welcomeDebugLog = createDebugLogger("WELCOME");
