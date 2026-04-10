/**
 * API Response Utilities
 *
 * PURPOSE: Standardized error handling and response formatting for API routes.
 *
 * CONTEXT: Without consistent error handling, each API route formats errors
 * differently, making debugging harder and client-side error handling fragile.
 *
 * KEY RESPONSIBILITIES:
 * - ApiError class for typed, structured errors
 * - handleApiError() for consistent error responses
 * - successResponse() for consistent success responses
 *
 * @see src/app/api/stripe/webhook/route.ts
 * @see src/app/api/stripe/grant-access-after-signin/route.ts
 */

import { NextResponse } from "next/server";

// ==========================================
// TYPES
// ==========================================

/**
 * Structured API error with HTTP status code and machine-readable error code
 *
 * WHY a custom error class:
 * Standard Error only has a message. API errors need a status code (for HTTP response)
 * and an error code (for client-side handling without parsing message strings).
 */
export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public errorCode: string = "INTERNAL_ERROR",
  ) {
    super(message);
    this.name = "ApiError";
  }
}

// ==========================================
// RESPONSE HELPERS
// ==========================================

/**
 * Create a standardized error response
 *
 * @param error - The error to handle (ApiError or unknown)
 * @param context - Optional context string for logging (e.g., 'webhook', 'grant-access')
 * @returns NextResponse with consistent error format
 */
export function handleApiError(error: unknown, context?: string): NextResponse {
  if (error instanceof ApiError) {
    if (context) {
      console.error(`[${context}] ${error.errorCode}: ${error.message}`);
    }
    return NextResponse.json(
      { error: error.message, code: error.errorCode },
      { status: error.statusCode },
    );
  }

  // Unknown error — log full error, return generic message
  console.error(`[${context || "api"}] Unexpected error:`, error);
  return NextResponse.json(
    { error: "Internal server error", code: "INTERNAL_ERROR" },
    { status: 500 },
  );
}

/**
 * Create a standardized success response
 *
 * @param data - Response payload
 * @param status - HTTP status code (default 200)
 * @returns NextResponse with consistent success format
 */
export function successResponse(data: Record<string, unknown>, status: number = 200): NextResponse {
  return NextResponse.json(data, { status });
}
