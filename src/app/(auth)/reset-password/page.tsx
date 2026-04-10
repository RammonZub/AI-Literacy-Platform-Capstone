/**
 * Reset Password Page
 *
 * PURPOSE: Allow users to set a new password after clicking reset link
 *
 * CONTEXT:
 * - User arrives from password reset email (sent via resetPasswordForEmail)
 * - Reset link can contain tokens in TWO formats:
 *   1. IMPLICIT FLOW: URL hash (#access_token=...&type=recovery)
 *   2. PKCE FLOW: Query params (?token_hash=...&type=recovery)
 * - Page must handle both flows to establish recovery session
 * - User can set a new password, then must log in again
 *
 * DESIGN DECISIONS:
 * - Handles both implicit and PKCE auth flows
 * - Uses shared PasswordForm component (eliminates duplication)
 * - Shows success state with auto-redirect to login
 * - Client-side validation before server call
 * - Uses Supabase browser client's updateUser (recovery session is already established)
 *
 * FLOW:
 * 1. User clicks reset link from email
 * 2. Page checks for token_hash (PKCE) or hash fragment (implicit)
 * 3. If PKCE: Exchange token_hash for session via verifyOtp
 * 4. If implicit: Browser client auto-detects hash and establishes session
 * 5. User enters new password and confirmation
 * 6. Component calls onSubmit which validates session and updates password
 * 7. On success, show confirmation and redirect to login
 *
 * WHY client-side updateUser instead of Server Action:
 * - Password reset tokens are in URL (client-side only)
 * - The Supabase browser client handles recovery session
 * - updateUser works directly with the active recovery session
 * - This is the standard Supabase pattern for password resets
 *
 * @see /src/app/(auth)/login/page.tsx - Login page for redirect after reset
 * @see /src/lib/supabase/client.ts - Browser client that handles auth tokens
 */

"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import PasswordForm from "@/components/auth/PasswordForm";
import { createClient } from "@/lib/supabase/client";

const isDev = process.env.NODE_ENV === "development";

/**
 * Reset Password Page Content
 *
 * Handles token exchange before showing password form
 */
function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sessionReady, setSessionReady] = useState(false);

  useEffect(() => {
    const establishSession = async () => {
      const supabase = createClient();

      // ========================================
      // Check for PKCE flow (query parameters)
      // ========================================
      const tokenHash = searchParams.get("token_hash");
      const type = searchParams.get("type") || "recovery";

      if (tokenHash) {
        if (isDev) console.log("[ResetPassword] PKCE flow detected, exchanging token...");

        const { error: verifyError } = await supabase.auth.verifyOtp({
          token_hash: tokenHash,
          type: type as "recovery" | "signup" | "invite" | "magiclink" | "email_change",
        });

        if (verifyError) {
          console.error("[ResetPassword] Token verification failed:", verifyError);
          setError("Invalid or expired reset link. Please request a new password reset.");
          setIsLoading(false);
          return;
        }

        if (isDev) console.log("[ResetPassword] Token exchanged successfully");
        setSessionReady(true);
        setIsLoading(false);
        return;
      }

      // ========================================
      // Check for implicit flow (hash fragment)
      // ========================================
      // The Supabase browser client automatically handles hash fragments
      // We just need to verify a session exists
      const hash = window.location.hash;
      if (hash && hash.includes("access_token")) {
        if (isDev) console.log("[ResetPassword] Implicit flow detected, waiting for session...");

        // Give the Supabase client a moment to process the hash
        await new Promise((resolve) => setTimeout(resolve, 500));

        const {
          data: { session },
        } = await supabase.auth.getSession();
        if (session) {
          if (isDev) console.log("[ResetPassword] Session established from hash");
          setSessionReady(true);
          setIsLoading(false);
          return;
        }
      }

      // ========================================
      // No tokens found - check existing session
      // ========================================
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        if (isDev) console.log("[ResetPassword] Existing session found");
        setSessionReady(true);
      } else {
        console.error("[ResetPassword] No session and no tokens found");
        setError("Invalid or expired reset link. Please request a new password reset.");
      }

      setIsLoading(false);
    };

    establishSession();
  }, [searchParams]);

  /**
   * Handle password reset form submission
   */
  const handleSubmit = async (password: string) => {
    const supabase = createClient();

    // Verify session is still valid
    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession();

    if (sessionError || !session) {
      throw new Error("Invalid or expired reset link. Please request a new password reset.");
    }

    // Update password via recovery session
    const { error: updateError } = await supabase.auth.updateUser({
      password: password,
    });

    if (updateError) {
      if (updateError.message.includes("Invalid login")) {
        throw new Error("Invalid or expired reset link. Please request a new password reset.");
      }
      throw updateError;
    }
  };

  // ========================================
  // LOADING STATE
  // ========================================
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-black mx-auto" />
          <p className="text-gray-600">Verifying reset link...</p>
        </div>
      </div>
    );
  }

  // ========================================
  // ERROR STATE
  // ========================================
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="mb-4 text-red-500">
              <svg
                className="h-12 w-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Reset Link Invalid</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <a
              href="/forgot-password"
              className="inline-block px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Request New Link
            </a>
          </div>
        </div>
      </div>
    );
  }

  // ========================================
  // PASSWORD FORM
  // ========================================
  return (
    <>
      <PasswordForm
        mode="reset"
        onSubmit={handleSubmit}
        successRedirect="/login"
        submitLabel="Reset Password"
        loadingLabel="Resetting Password..."
      />

      {/* Back to Login Link */}
      <div className="text-center mt-4">
        <a href="/login" className="text-sm text-gray-500 hover:text-gray-700">
          ← Back to Login
        </a>
      </div>
    </>
  );
}

/**
 * Reset Password Page Component
 *
 * Wraps content in Suspense for useSearchParams
 */
export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-black mx-auto" />
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      }
    >
      <ResetPasswordContent />
    </Suspense>
  );
}
