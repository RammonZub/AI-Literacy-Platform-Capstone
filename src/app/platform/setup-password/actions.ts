/**
 * Setup Password Server Actions
 *
 * PURPOSE: Server-side mutations for setting user password
 *
 * CONTEXT:
 * - Called from setup-password page after magic link authentication
 * - They have an active session but no password set
 * - Setting a password enables future email/password logins
 *
 * KEY RESPONSIBILITIES:
 * - Validate password requirements
 * - Update user password via Supabase Auth
 * - Return error messages for client display
 *
 * IMPLEMENTATION NOTES:
 * - All mutations are authenticated
 * - Uses Supabase Auth's updateUser API for password updates
 * - Returns structured responses for client handling
 * - Now uses shared validation utilities from @/lib/utils/validation
 *
 * DEPENDENCIES:
 * - @/lib/supabase/server: Supabase server client
 * - @/lib/utils/validation: Shared password validation utilities
 * - next/navigation: For redirects after success
 *
 * @see /src/app/platform/setup-password/page.tsx - Page that calls this action
 * @see /src/lib/utils/validation.ts - Validation utilities
 */

"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

/**
 * Set user password
 *
 * DETAILED EXPLANATION:
 * Validates the password, then uses Supabase Auth to update
 * the password. Users can set a password after magic link sign-in
 * to enable future email/password logins.
 *
 * VALIDATION:
 * - Uses shared validation utilities for consistency
 * - Enforces minimum 8 characters and maximum 72 characters
 * - Maximum of 72 matches Supabase bcrypt limitation
 *   See: https://github.com/supabase/supabase/discussions/34207
 *
 * SECURITY:
 * - Requires user to be authenticated (magic link session)
 * - This prevents unauthorized password modifications
 *
 * ERROR HANDLING:
 * - Returns structured error message for client display
 * - Logs errors for debugging
 *
 * @param password - The new password (must be at least 8 characters)
 * @returns Success or error response
 *
 * @example
 * const result = await setUserPassword('newSecurePassword123')
 * if (result.error) {
 *   // Show error to user
 * } else {
 *   // Redirect to platform
 * }
 */
export async function setUserPassword(password: string) {
  const supabase = await createClient();

  // ========================================
  // STEP 1: Get authenticated user
  // ========================================
  // WHY: Must verify user is authenticated before allowing password change.
  // This prevents unauthorized password modifications.

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return { error: "Authentication required" };
  }

  // ========================================
  // STEP 2: Validate password requirements
  // ========================================
  // WHY: Use shared validation utilities for consistency and to avoid
  // duplicating validation logic. This ensures that validation rules
  // are defined in one place and are easily testable.

  const { validatePassword } = await import("@/lib/utils/validation").then((m) => ({
    validatePassword: m.validatePassword,
  }));

  const validationResult = validatePassword(password);

  if (!validationResult.valid) {
    return { error: validationResult.error };
  }

  // ========================================
  // STEP 3: Update password via Supabase Auth
  // ========================================
  // WHY: Use Supabase Auth's updateUser API to securely update
  // user's password. This handles hashing and storage securely.

  const { error: updateError } = await supabase.auth.updateUser({
    password: password,
  });

  if (updateError) {
    console.error("Failed to set user password:", updateError);
    return { error: "Failed to set password. Please try again." };
  }

  // ========================================
  // STEP 4: Return success
  // ========================================
  // WHY: Return success response so client can show success state
  // and redirect to platform.

  redirect("/platform");
}
