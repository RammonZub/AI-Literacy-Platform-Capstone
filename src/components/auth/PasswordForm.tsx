/**
 * Password Form Component
 *
 * PURPOSE: Shared password form for password reset and first-time setup
 *
 * CONTEXT:
 * - Eliminates 150+ lines of duplication between reset-password and setup-password
 * - Provides consistent UX and validation across password flows
 * - Shared password form logic
 *
 * KEY RESPONSIBILITIES:
 * - Display password and confirmation input fields
 * - Client-side validation before submission
 * - Show loading and error states
 * - Display success message with auto-redirect
 *
 * IMPLEMENTATION NOTES:
 * - Uses Tailwind CSS (project standard)
 * - Follows design tokens (iOS Blue #007AFF primary color)
 * - Validation via shared utilities in /src/lib/utils/validation.ts
 * - Success state with configurable redirect URL
 *
 * DEPENDENCIES:
 * - React (useState, useEffect)
 * - Next.js router for navigation
 * - Button component for submit action
 * - Validation utilities for consistent logic
 *
 * @see /src/app/(auth)/reset-password/page.tsx - Reset password usage
 * @see /src/app/platform/setup-password/page.tsx - Setup password usage
 * @see /src/lib/utils/validation.ts - Validation utilities
 */

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BrandGrainMark } from "@/components/shared/BrandGrainMark";
import Button from "@/components/ui/Button";
import { type ValidationResult, validatePasswordReset } from "@/lib/utils/validation";

// ==========================================
// TYPES & INTERFACES
// ==========================================

/**
 * Props for PasswordForm component
 *
 * DESIGN DECISIONS:
 * - mode: Distinguishes between 'reset' and 'setup' for labels/messaging
 * - onSubmit: Async callback that handles the actual password update
 * - successRedirect: Where to send user after successful password change
 * - submitLabel/loadingLabel: Customizable button text for flexibility
 */
export interface PasswordFormProps {
  /** Form mode - affects heading and labels */
  mode: "reset" | "setup";

  /** Async function to call when form is submitted */
  onSubmit: (password: string) => Promise<void>;

  /** URL to redirect to after success (e.g., '/login' or '/platform') */
  successRedirect: string;

  /** Text for submit button when not loading */
  submitLabel?: string;

  /** Text for submit button when loading */
  loadingLabel?: string;
}

// ==========================================
// COMPONENT
// ==========================================

/**
 * PasswordForm Component
 *
 * A shared password form component used by both password reset and
 * first-time password setup flows.
 *
 * WHY shared component:
 * - Eliminates 150+ lines of duplicated code
 * - Ensures consistent validation and error handling
 * - Makes UI/behavior changes only require one file update
 * - Easier to test validation logic in isolation
 */
export function PasswordForm({
  mode,
  onSubmit,
  successRedirect,
  submitLabel: defaultSubmitLabel = "Set Password",
  loadingLabel: defaultLoadingLabel = "Setting Password...",
}: PasswordFormProps) {
  const router = useRouter();

  // ==========================================
  // STATE
  // ==========================================

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Timeout ref
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // ==========================================
  // CONFIGURATION BY MODE
  // ==========================================

  // WHY: Mode-specific configuration allows one component to serve multiple flows
  // while maintaining appropriate messaging for each context.

  const isResetMode = mode === "reset";

  const config = {
    title: isResetMode ? "Reset Your Password" : "Set Your Password",
    description: isResetMode
      ? "Enter your new password below. Make sure it's at least 8 characters long."
      : "Choose a password for future logins. You'll still be able to use magic links.",
    submitLabel: defaultSubmitLabel,
    loadingLabel: defaultLoadingLabel,
  };

  // ==========================================
  // EVENT HANDLERS
  // ==========================================

  /**
   * Handle password form submission
   *
   * DETAILED EXPLANATION:
   * Validates password requirements using shared utilities, then calls
   * the provided onSubmit function. Shows success state and redirects
   * after 2 seconds.
   *
   * VALIDATION FLOW:
   * 1. Check password minimum length (8 characters)
   * 2. Check passwords match exactly
   * 3. Only proceed if both validations pass
   *
   * ERROR HANDLING:
   * - Catches errors from onSubmit and displays user-friendly message
   * - Resets loading state on error so user can retry
   * - Preserves error until form is resubmitted
   *
   * SUCCESS FLOW:
   * 1. Set success state to show checkmark
   * 2. Auto-redirect after 2 seconds using timeout
   * 3. Clear the timeout on unmount to prevent memory leaks
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ========================================
    // CLIENT-SIDE VALIDATION
    // ========================================
    // WHY: Validate before API call to provide immediate feedback
    // and reduce unnecessary API requests.

    const validationResult: ValidationResult = validatePasswordReset(password, confirmPassword);

    if (!validationResult.valid) {
      setError(validationResult.error || "Invalid password");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // ========================================
      // CALL PARENT HANDLER
      // ========================================
      // WHY: Defer actual password update to parent component
      // which may use different methods (client vs server-side)

      await onSubmit(password);

      // Show success state
      setSuccess(true);

      // Auto-redirect after 2 seconds
      // WHY: Give user time to see success message before redirect
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        router.push(successRedirect);
      }, 2000);
    } catch (err) {
      // ========================================
      // ERROR HANDLING
      // ========================================
      // WHY: Provide user-friendly error message and allow retry

      const errorMessage =
        err instanceof Error ? err.message : "Failed to update password. Please try again.";
      setError(errorMessage);
      setIsLoading(false);
    }
  };

  // ==========================================
  // EFFECTS
  // ==========================================

  /**
   * Clear timeout on unmount
   *
   * WHY: Prevents memory leaks and "state update on unmounted component" warnings
   * if user navigates away before the timeout completes.
   */
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // ==========================================
  // SUCCESS STATE
  // ==========================================
  // WHY: Show clear visual confirmation before redirecting

  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 p-5">
        <div className="w-full max-w-md text-center">
          {/* Logo Icon */}
          <div className="mb-8 flex justify-center">
            <BrandGrainMark size="lg" shape="rounded" />
          </div>

          {/* Success Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500">
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Success Message */}
          <h1 className="mb-2 text-xl font-bold text-gray-900">
            Password {isResetMode ? "Reset" : "Set"}!
          </h1>
          <p className="mb-1 text-gray-600">Your password has been updated.</p>
          <p className="text-sm text-gray-500">
            Redirecting you to {isResetMode ? "login" : "platform"}...
          </p>
        </div>
      </div>
    );
  }

  // ==========================================
  // FORM STATE
  // ==========================================

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-5">
      <div className="w-full max-w-md">
        {/* Logo Icon */}
        <div className="mb-8 flex justify-center">
          <BrandGrainMark size="lg" shape="rounded" />
        </div>

        {/* Header */}
        <h1 className="mb-2 text-xl font-bold text-gray-900 text-center">{config.title}</h1>
        <p className="mb-8 text-sm text-gray-500 text-center">{config.description}</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Error Message */}
          {error && <div className="rounded-xl bg-red-50 p-3 text-sm text-red-600">{error}</div>}

          {/* Password Input */}
          <div className="flex flex-col gap-2 text-left">
            <label htmlFor="password" className="text-sm font-semibold text-gray-700">
              {isResetMode ? "New Password" : "Password"}
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters"
              minLength={8}
              required
              disabled={isLoading}
              className="rounded-xl border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="flex flex-col gap-2 text-left">
            <label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-700">
              Confirm {isResetMode ? "New Password" : "Password"}
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter password"
              minLength={8}
              required
              disabled={isLoading}
              className="rounded-xl border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={isLoading}
            loading={isLoading}
          >
            {isLoading ? config.loadingLabel : config.submitLabel}
          </Button>

          {/* Skip Link - Only for setup mode */}
          {!isResetMode && (
            <button
              type="button"
              onClick={() => router.push("/platform")}
              className="text-center text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              disabled={isLoading}
            >
              Skip for now
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

// ==========================================
// EXPORTS
// ==========================================

export default PasswordForm;
