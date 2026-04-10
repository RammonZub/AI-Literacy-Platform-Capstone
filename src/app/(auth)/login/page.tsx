/**
 * Login Page
 *
 * PURPOSE: User authentication entry point
 *
 * CONTEXT:
 * Part of the authentication flow. Users who try to access protected routes
 * (/, /module/*, /profile, etc.) are redirected here with a return URL.
 *
 * DESIGN:
 * - Server Component that checks authentication before rendering
 * - Redirects authenticated users to their intended destination
 * - Only shows login form for unauthenticated users
 * - Web app design language (black/gray scale, NOT iOS Blue)
 * - Uses existing Button component with blockShadow variant
 * - Uses existing Input component for consistent form inputs
 * - Matches platform aesthetic (learning UI)
 *
 * IMPLEMENTATION NOTES:
 * - Mirrors the signup page structure and shared auth redirect flow
 * - Server-side authentication check prevents authenticated users from seeing login form
 * - Reuses Button and Input components (no inline styles)
 * - Returns users to their original destination after login
 * - Centered card layout with consistent spacing
 *
 * DESIGN RATIONALE:
 * - WHY Server Component: Enables server-side auth check before any client-side rendering
 * - WHY redirect auth users: Prevents unnecessary login form display and improves UX
 * - WHY separate LoginForm: Allows page to be server component while form handles interactivity
 * - WHY /platform default: Main learning dashboard is the primary post-login destination
 *
 * DEPENDENCIES:
 * - @/lib/supabase/server: Server-side Supabase client for auth check
 * - @/app/(auth)/login/LoginForm: Client component for form interactivity
 *
 * @see /app/(auth)/signup/page.tsx - Matching signup design
 * @see /src/proxy.ts - Route protection logic
 * @see /components/ui/Button.tsx - Button component used
 * @see /components/ui/Input.tsx - Input component used
 * @author Claude Code
 * @created 2024-01-01
 * @modified 2025-02-11 - Converted to Server Component with auth redirect
 */

import { redirect } from "next/navigation";
import { getSafeRedirect } from "@/lib/security/redirect-validation";
import { createClient } from "@/lib/supabase/server";
import { LoginForm } from "./LoginForm";

/**
 * Login Page Server Component
 *
 * Checks authentication status server-side:
 * - If authenticated: Redirects to the intended destination
 * - If not authenticated: Shows the login form
 *
 * @param {Object} props - Component props
 * @param {Promise<{redirect?: string}>} props.searchParams - URL search parameters
 * @returns {JSX.Element} Either redirects or renders the login form
 */
export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string }>;
}) {
  const params = await searchParams;
  const supabase = await createClient();

  // ========================================
  // SERVER-SIDE AUTHENTICATION CHECK
  // ========================================
  // WHY: Check authentication on the server to avoid showing the login form
  // to users who are already authenticated. This provides a smoother UX
  // and reduces client-side JavaScript execution.
  //
  // DESIGN: Uses getUser() to verify auth state against Supabase Auth server.
  // This avoids stale-cookie false positives after sign-out.
  // ========================================

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // If user is already authenticated, redirect to intended destination
  // WHY: Users who are already logged in shouldn't see the login form.
  // Redirecting them immediately improves the user experience.
  if (user) {
    // Use the redirect parameter if provided, otherwise default to /platform
    // WHY: Preserve the user's intended destination when they were redirected
    // to login from a protected route.
    // SECURITY: Validate redirect to prevent open redirect attacks
    redirect(getSafeRedirect(params.redirect, "/platform"));
  }

  // ========================================
  // RENDER LOGIN FORM
  // ========================================
  // Only reached if user is not authenticated
  // Pass the redirect URL to the form so it can redirect after successful login
  // ========================================

  // SECURITY: Validate redirect before passing to client component
  const safeRedirect = getSafeRedirect(params.redirect, "/platform");
  return <LoginForm redirectTo={safeRedirect} />;
}
