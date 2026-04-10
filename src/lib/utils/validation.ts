/**
 * Validation Utilities
 *
 * PURPOSE: Shared validation logic for forms across the application
 *
 * CONTEXT:
 * - Password forms were duplicating validation logic in multiple places
 * - Extracting to shared utilities ensures consistency and testability
 * - Changes to validation rules only need to be made in one place
 *
 * KEY RESPONSIBILITIES:
 * - Password requirement validation (length, match)
 * - Email format validation (if needed)
 * - Consistent error messages
 *
 * IMPLEMENTATION NOTES:
 * - Pure functions (no React dependencies) for easy testing
 * - Return type-safe validation results
 * - Error messages are user-friendly and actionable
 *
 * DEPENDENCIES:
 * - None (standalone utilities)
 *
 * @see /src/app/(auth)/reset-password/page.tsx - Uses password validation
 * @see /src/app/platform/setup-password/page.tsx - Uses password validation
 */

// ==========================================
// TYPES
// ==========================================

/**
 * Result of a validation operation
 *
 * WHY this interface exists:
 * - Provides type safety for validation results
 * - Makes it clear what fields are expected
 * - Allows for future expansion (e.g., field-level errors)
 */
export interface ValidationResult {
  /** Whether the validation passed */
  valid: boolean;

  /** Error message to display to user (undefined if valid) */
  error?: string;
}

// ==========================================
// PASSWORD VALIDATION
// ==========================================

/**
 * Minimum password length requirement
 *
 * WHY: Centralized constant ensures consistency across all password forms
 * and makes it easy to change the requirement in one place.
 */
export const PASSWORD_MIN_LENGTH = 8;

/**
 * Maximum password length requirement
 *
 * WHY: Supabase Auth has a 72-character maximum due to bcrypt hashing limitations.
 * Passwords longer than 72 characters will be truncated, causing authentication
 * failures. See: https://github.com/supabase/supabase/discussions/34207
 */
export const PASSWORD_MAX_LENGTH = 72;

/**
 * Validate password requirements
 *
 * DETAILED EXPLANATION:
 * Checks that a password meets minimum length requirements.
 * This is a simple validation - stronger requirements (complexity, character types)
 * can be added here when needed.
 *
 * DESIGN RATIONALE:
 * - Simple length check is the current requirement
 * - Returning structured result allows for future field-level errors
 * - Error message is clear and actionable
 *
 * @param password - The password to validate
 * @returns ValidationResult with valid status and optional error message
 *
 * @example
 * const result = validatePassword('short')
 * // result.valid === false, result.error === 'Password must be at least 8 characters'
 *
 * @example
 * const result = validatePassword('longenoughpassword')
 * // result.valid === true, result.error === undefined
 */
export function validatePassword(password: string): ValidationResult {
  // Check minimum length
  if (password.length < PASSWORD_MIN_LENGTH) {
    return {
      valid: false,
      error: `Password must be at least ${PASSWORD_MIN_LENGTH} characters`,
    };
  }

  // Check maximum length (Supabase limit)
  if (password.length > PASSWORD_MAX_LENGTH) {
    return {
      valid: false,
      error: `Password must be less than ${PASSWORD_MAX_LENGTH} characters`,
    };
  }

  // Password meets all requirements
  return { valid: true };
}

/**
 * Validate password confirmation match
 *
 * DETAILED EXPLANATION:
 * Checks that two password values match exactly.
 * This is critical for security - users must confirm they know their password.
 *
 * DESIGN RATIONALE:
 * - Comparison is case-sensitive (as it should be)
 * - Clear error message tells user exactly what's wrong
 * - Used after both password fields are filled
 *
 * @param password - The password value
 * @param confirmPassword - The confirmation password value
 * @returns ValidationResult with valid status and optional error message
 *
 * @example
 * const result = validatePasswordMatch('password123', 'password456')
 * // result.valid === false, result.error === 'Passwords do not match'
 *
 * @example
 * const result = validatePasswordMatch('password123', 'password123')
 * // result.valid === true, result.error === undefined
 */
export function validatePasswordMatch(password: string, confirmPassword: string): ValidationResult {
  // Check if passwords match
  if (password !== confirmPassword) {
    return {
      valid: false,
      error: "Passwords do not match",
    };
  }

  // Passwords match
  return { valid: true };
}

/**
 * Validate complete password reset form (new password + confirmation)
 *
 * DETAILED EXPLANATION:
 * Combines password and confirmation validation for password reset forms.
 * This is the common validation pattern used across reset-password and setup-password.
 *
 * DESIGN RATIONALE:
 * - Validates password first (more likely to fail)
 * - Only checks confirmation if password is valid
 * - Early return pattern for efficiency
 * - Returns first error found (user fixes one thing at a time)
 *
 * @param password - The new password value
 * @param confirmPassword - The confirmation password value
 * @returns ValidationResult with valid status and first error message found
 *
 * @example
 * const result = validatePasswordReset('short', 'short')
 * // result.valid === false, result.error === 'Password must be at least 8 characters'
 *
 * @example
 * const result = validatePasswordReset('password123', 'password456')
 * // result.valid === false, result.error === 'Passwords do not match'
 *
 * @example
 * const result = validatePasswordReset('password123', 'password123')
 * // result.valid === true, result.error === undefined
 */
export function validatePasswordReset(password: string, confirmPassword: string): ValidationResult {
  // Validate password requirements first
  const passwordResult = validatePassword(password);
  if (!passwordResult.valid) {
    return passwordResult;
  }

  // Validate passwords match
  return validatePasswordMatch(password, confirmPassword);
}
