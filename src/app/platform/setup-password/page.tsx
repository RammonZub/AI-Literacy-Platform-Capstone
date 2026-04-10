/**
 * Password Setup Page
 *
 * PURPOSE: Allow users who signed in via magic link to set a password
 *
 * CONTEXT:
 * - User arrives from welcome page after magic link authentication
 * - They have an active session but no password set
 * - Setting a password enables future email/password logins
 *
 * DESIGN DECISIONS:
 * - Uses shared PasswordForm component (eliminates duplication)
 * - Passes Server Action call to onSubmit handler
 * - Consistent styling and validation with reset-password flow
 *
 * FLOW:
 * - User must be authenticated (magic link session)
 * - Shows password form with confirmation
 * - Calls Server Action to update password via Supabase Auth
 * - Redirects to platform after success
 *
 * @see /src/components/auth/PasswordForm.tsx - Shared password form component
 * @see /src/lib/utils/validation.ts - Shared validation utilities
 * @see ./actions.ts - Server Action for password update
 */

"use client";

import PasswordForm from "@/components/auth/PasswordForm";
import { setUserPassword } from "./actions";

/**
 * Password Setup Page Component
 *
 * Uses the shared PasswordForm component with Server Action authentication
 * for first-time password setup after magic link authentication.
 */
export default function SetupPasswordPage() {
  /**
   * Handle password setup form submission
   *
   * DETAILED EXPLANATION:
   * Validates the password, then calls the Server Action which updates
   * the password via Supabase Auth on the server side.
   *
   * SERVER ACTION PATTERN:
   * - More secure than client-side password updates
   * - Works with Next.js 16 Server Actions
   * - Allows server-side validation before Supabase call
   *
   * ERROR HANDLING:
   * - Server Action returns { error: string } on failure
   * - Throw error to trigger form error display
   * - Loading state managed by PasswordForm component
   */
  const handleSubmit = async (password: string) => {
    // ========================================
    // CALL SERVER ACTION TO UPDATE PASSWORD
    // ========================================
    // WHY: Use Server Action to securely update password on the server.
    // This works from client components while maintaining security.

    const result = await setUserPassword(password);

    if (result.error) {
      throw new Error(result.error);
    }
  };

  // ========================================
  // RENDER SHARED PASSWORD FORM
  // ========================================
  // WHY: Using shared component eliminates 150+ lines of duplication
  // and ensures consistent validation and styling across password flows.

  return (
    <PasswordForm
      mode="setup"
      onSubmit={handleSubmit}
      successRedirect="/platform"
      submitLabel="Set Password"
      loadingLabel="Setting Password..."
    />
  );
}
