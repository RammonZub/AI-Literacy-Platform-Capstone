/**
 * Component: LoginForm
 *
 * PURPOSE: Client-side login form component for user authentication
 *
 * CONTEXT:
 * This component handles the interactive portion of the login flow. It is
 * used by the login page Server Component, which performs server-side
 * authentication checks before rendering this form.
 *
 * KEY RESPONSIBILITIES:
 * - Capture and validate user credentials (email/password)
 * - Authenticate users via Supabase
 * - Handle authentication errors with user-friendly messages
 * - Redirect users to their intended destination after successful login
 *
 * IMPLEMENTATION NOTES:
 * - Uses 'use client' directive for interactive form handling
 * - Leverages Supabase client for authentication
 * - Shows loading state during authentication to prevent duplicate submissions
 * - Displays error messages inline for better UX
 * - Preserves redirect parameter from URL to return users to their intended destination
 *
 * DESIGN DECISIONS:
 * - WHY client component: Form requires useState, event handlers, and router navigation
 * - WHY separate from page: Allows page to be a Server Component for auth checks
 * - WHY inline error display: Provides immediate feedback without navigation
 * - WHY loading state: Prevents form resubmission and indicates processing
 *
 * DEPENDENCIES:
 * - lucide-react: Mail and Lock icons for input visual indicators
 * - @/lib/supabase/client: Browser Supabase client for authentication
 * - @/components/ui/Button: Consistent button component with blockShadow variant
 * - next/navigation: useRouter and useSearchParams for navigation
 *
 * @see /app/(auth)/login/page.tsx - Parent Server Component that uses this form
 * @author Claude Code
 * @created 2025-02-11
 */

"use client";

import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { createClient } from "@/lib/supabase/client";

/**
 * Props interface for LoginForm component
 *
 * DESIGN: Accepts redirect URL to return users to their intended destination
 * after successful authentication. This preserves the user's flow when
 * they were redirected to login from a protected route.
 */
interface LoginFormProps {
  /**
   * URL to redirect to after successful login
   *
   * WHY: When users try to access protected routes, they're redirected to login
   * with a return URL. This preserves their intended destination.
   *
   * DEFAULT: '/platform' - Main learning dashboard
   */
  redirectTo: string;
}

/**
 * LoginForm Component
 *
 * Renders the interactive login form with email/password inputs.
 * Handles form submission, authentication, and error display.
 *
 * @param {LoginFormProps} props - Component props
 * @returns {JSX.Element} The login form UI
 */
export function LoginForm({ redirectTo }: LoginFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Handle login form submission
   *
   * DETAILED EXPLANATION:
   * This function manages the complete login flow:
   * 1. Clears any previous errors
   * 2. Sets loading state to prevent duplicate submissions
   * 3. Authenticates with Supabase using provided credentials
   * 4. On success, redirects to the intended destination
   * 5. On failure, displays user-friendly error message
   *
   * ERROR HANDLING:
   * - Invalid credentials: Shows "Invalid login credentials"
   * - Network errors: Shows generic error with retry option
   * - Rate limiting: Supabase handles this, error message is displayed
   *
   * @param {React.FormEvent} e - Form submit event
   */
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Navigate to the intended destination
      router.push(redirectTo);
      // Refresh the page to update server components with new auth state
      router.refresh();
    } catch (err: Error | unknown) {
      // Provide user-friendly error message
      const message = err instanceof Error ? err.message : "Failed to login";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">
        {/* ========================================
            SECTION: Logo/Brand
            PURPOSE: Establish visual identity and welcome message
            ======================================== */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black">AI Literacy</h1>
          <p className="text-gray-500 mt-2">
            Welcome back! Sign in to continue.
          </p>
        </div>

        {/* ========================================
            SECTION: Login Form Card
            PURPOSE: Container for authentication form
            DESIGN: Centered card with shadow and border for visual hierarchy
            ======================================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          {/* Error Display */}
          {error && (
            <div
              className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600"
              role="alert"
              aria-live="polite"
            >
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            {/* ========================================
                SECTION: Email Input
                DESIGN: Icon + input pattern for clear field identification
                ACCESSIBILITY: Uses semantic label through placeholder and icon
                ======================================== */}
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                autoComplete="email"
                className="w-full h-14 pl-12 pr-4 border-2 border-gray-200 rounded-xl text-base text-black placeholder-gray-400 outline-none transition-all focus:border-black focus:shadow-md"
              />
            </div>

            {/* ========================================
                SECTION: Password Input
                DESIGN: Lock icon for security indication
                ACCESSIBILITY: Password type hides input, autocomplete for UX
                ======================================== */}
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                autoComplete="current-password"
                className="w-full h-14 pl-12 pr-4 border-2 border-gray-200 rounded-xl text-base text-black placeholder-gray-400 outline-none transition-all focus:border-black focus:shadow-md"
              />
            </div>

            {/* ========================================
                SECTION: Forgot Password Link
                PURPOSE: Provide password recovery option
                DESIGN: Right-aligned link for easy access
                ======================================== */}
            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* ========================================
                SECTION: Submit Button
                DESIGN: Uses Button component with blockShadow for 3D effect
                ACCESSIBILITY: Loading state prevents duplicate submissions
                ======================================== */}
            <Button
              type="submit"
              variant="primary"
              fullWidth
              loading={loading}
              disabled={loading}
              className="h-14 text-lg"
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          {/* ========================================
              SECTION: Sign Up Link
              PURPOSE: Guide new users to the onboarding flow
              DESIGN: Centered link with clear call-to-action
              ======================================== */}
          <div className="text-center mt-4">
            <span className="text-muted-foreground">
              Don&apos;t have an account?{" "}
            </span>
            <Link
              href="/onboarding"
              className="text-primary hover:underline font-medium"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
