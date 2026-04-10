/**
 * Forgot Password Page
 *
 * PURPOSE: Allow users to request a password reset email
 *
 * CONTEXT:
 * Part of the authentication flow. Users who forgot their password can enter
 * their email address to receive a reset link.
 *
 * DESIGN:
 * - Web app design language (black/gray scale, NOT iOS Blue)
 * - Uses existing Button component with blockShadow variant
 * - Matches login page aesthetic for consistency
 * - Centered card layout with consistent spacing
 *
 * IMPLEMENTATION NOTES:
 * - Reuses Button component (no inline styles for buttons)
 * - Uses Supabase's resetPasswordForEmail() method
 * - Email link continues to /reset-password
 * - Shows success state after email is sent
 * - Includes back to login link
 *
 * FLOW:
 * 1. User enters email address
 * 2. Supabase sends password reset email
 * 3. User sees "Check your email" success message
 * 4. User clicks link in email to reset password
 * 5. User is redirected to /reset-password to set new password
 *
 * @see /app/(auth)/login/page.tsx - Matching login design
 * @see /app/(auth)/reset-password/page.tsx - Password reset page
 * @see /components/ui/Button.tsx - Button component used
 */

"use client";

import { Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { createClient } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const supabase = createClient();

      // Get the current origin for the redirect URL
      const origin = typeof window !== "undefined" ? window.location.origin : "";

      // Send password reset email
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${origin}/reset-password`,
      });

      if (error) throw error;

      // Show success message
      setSuccess(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to send reset email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black">AI Literacy</h1>
          <p className="text-gray-500 mt-2">
            {success
              ? "Check your email inbox"
              : "Enter your email to receive a password reset link"}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
              {error}
            </div>
          )}

          {success ? (
            // Success State
            <div className="text-center py-4">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Email sent!</h3>
              <p className="text-gray-600 mb-6">
                We&apos;ve sent a password reset link to <strong>{email}</strong>. Please check your
                inbox and follow the instructions.
              </p>
              <div className="text-sm text-gray-500 mb-6">
                Didn&apos;t receive the email? Check your spam folder or{" "}
                <button
                  onClick={() => setSuccess(false)}
                  className="text-black font-semibold hover:underline"
                >
                  try again
                </button>
              </div>
            </div>
          ) : (
            // Form State
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="w-full h-14 pl-12 pr-4 border-2 border-gray-200 rounded-xl text-base text-black placeholder-gray-400 outline-none transition-all focus:border-black focus:shadow-md"
                />
              </div>

              {/* Submit Button - Uses existing Button component */}
              <Button
                type="submit"
                variant="primary"
                fullWidth
                loading={loading}
                disabled={loading}
                className="h-14 text-lg"
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </Button>
            </form>
          )}
        </div>

        {/* Back to Login Link */}
        <div className="text-center mt-6">
          <Link
            href="/login"
            className="inline-flex items-center text-sm text-gray-600 hover:text-black transition-colors"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              role="img"
              aria-label="Arrow pointing left - back to login"
            >
              <title>Back to login</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
