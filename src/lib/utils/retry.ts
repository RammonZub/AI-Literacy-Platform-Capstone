/**
 * Retry Utilities
 *
 * PURPOSE: Exponential backoff retry logic for resilient network operations
 *
 * CONTEXT:
 * Network requests can fail temporarily due to:
 * - Connection drops
 * - Server rate limiting
 * - DNS resolution failures
 * - Temporary service unavailability
 *
 * DESIGN:
 * - Exponential backoff: delay doubles with each retry (1s, 2s, 4s, ...)
 * - Jitter: small random variation to prevent thundering herd
 * - Configurable max retries and base delay
 * - Generic - works with any async function
 *
 */

/**
 * Configuration for retry behavior
 */
export interface RetryOptions {
  /**
   * Maximum number of retry attempts
   * @default 3
   */
  maxRetries?: number;

  /**
   * Base delay in milliseconds (first retry uses this)
   * @default 1000 (1 second)
   */
  baseDelay?: number;

  /**
   * Whether to add random jitter to delay (prevents thundering herd)
   * @default true
   */
  jitter?: boolean;

  /**
   * Callback when all retries are exhausted
   * Receives the last error for fallback handling (e.g., localStorage)
   */
  onAllRetriesFailed?: (error: Error) => void | Promise<void>;

  /**
   * Function to determine if an error is retryable
   * @default Returns true for network errors and 5xx status
   */
  isRetryable?: (error: unknown) => boolean;
}

/**
 * Default retry configuration
 */
const DEFAULT_RETRY_OPTIONS: Required<Omit<RetryOptions, "onAllRetriesFailed" | "isRetryable">> = {
  maxRetries: 3,
  baseDelay: 1000,
  jitter: true,
};

/**
 * Retry an async operation with exponential backoff
 *
 * DESIGN RATIONALE:
 * - Exponential backoff prevents hammering the server during outages
 * - Jitter prevents multiple clients from retrying in sync (thundering herd)
 * - isRetryable allows custom logic (e.g., don't retry 404 errors)
 * - onAllRetriesFailed enables graceful degradation (localStorage fallback)
 *
 * @param fn - The async function to retry
 * @param options - Retry configuration
 * @returns The result of the successful operation
 * @throws The last error if all retries fail
 *
 * @example
 * ```ts
 * const data = await retryWithBackoff(
 *   () => fetch('/api/checkout/create-session').then(r => r.json()),
 *   {
 *     maxRetries: 3,
 *     baseDelay: 1000,
 *     onAllRetriesFailed: (error) => {
 *       localStorage.setItem('fallback', JSON.stringify(payload))
 *     }
 *   }
 * )
 * ```
 */
export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  options: RetryOptions = {},
): Promise<T> {
  const opts = { ...DEFAULT_RETRY_OPTIONS, ...options };
  const {
    maxRetries,
    baseDelay,
    jitter,
    onAllRetriesFailed,
    isRetryable = defaultIsRetryable,
  } = opts;

  let lastError: Error | undefined;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      // If this is not a retryable error, throw immediately
      if (!isRetryable(error)) {
        throw lastError;
      }

      // If we've exhausted all retries, handle failure
      if (attempt === maxRetries) {
        if (onAllRetriesFailed) {
          await onAllRetriesFailed(lastError);
        }
        throw lastError;
      }

      // Calculate delay with exponential backoff and optional jitter
      const exponentialDelay = baseDelay * 2 ** attempt;
      const delay = jitter ? exponentialDelay + Math.random() * baseDelay * 0.1 : exponentialDelay;

      // Wait before retrying
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  // TypeScript's control flow analysis doesn't know we always throw or return
  throw lastError!;
}

/**
 * Default isRetryable function
 *
 * DESIGN DECISIONS:
 * - Retry network errors (no response)
 * - Retry 5xx server errors (temporary issues)
 * - Don't retry 4xx client errors (user input issues)
 *
 * @param error - The error to check
 * @returns true if the error is retryable
 */
function defaultIsRetryable(error: unknown): boolean {
  // Network errors (no response)
  if (error instanceof TypeError && error.message.includes("fetch")) {
    return true;
  }

  // Check for Response-like objects with status
  const response = error as { status?: number };
  if (typeof response?.status === "number") {
    // Retry 5xx errors (server issues), don't retry 4xx (client errors)
    return response.status >= 500;
  }

  // Default to retrying unknown errors
  return true;
}

/**
 * Calculate delay for a given retry attempt
 *
 * @param attempt - Current attempt number (0-indexed)
 * @param baseDelay - Base delay in milliseconds
 * @param jitter - Whether to add random jitter
 * @returns Delay in milliseconds
 */
export function calculateRetryDelay(attempt: number, baseDelay: number, jitter: boolean): number {
  const exponentialDelay = baseDelay * 2 ** attempt;
  return jitter ? exponentialDelay + Math.random() * baseDelay * 0.1 : exponentialDelay;
}
