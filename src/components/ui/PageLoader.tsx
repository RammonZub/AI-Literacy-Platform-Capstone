/**
 * PageLoader Component
 *
 * PURPOSE: Reusable full-page loading spinner for Suspense fallbacks and loading states.
 *
 * WHY THIS EXISTS:
 * - Multiple pages need full-page loading states (auth callback, welcome, etc.)
 * - Duplicating the same JSX in multiple files violates DRY principle
 * - Centralizing the loader ensures consistent loading UX across the app
 *
 * USAGE:
 * - Use as Suspense fallback: `<Suspense fallback={<PageLoader />}>`
 * - Use for conditional loading: `if (isLoading) return <PageLoader message="Custom message" />`
 *
 * @example
 * // As Suspense fallback
 * <Suspense fallback={<PageLoader />}>
 *   <ComponentWithSearchParams />
 * </Suspense>
 *
 * @example
 * // With custom message
 * <PageLoader message="Setting up your account..." />
 *
 * @example
 * // With custom accent color
 * <PageLoader accentColor="bg-blue-600" />
 */

import { cn } from "@/lib/utils";

// ==========================================
// TYPES
// ==========================================

export interface PageLoaderProps {
  /**
   * Loading message displayed below the spinner
   * @default "Loading..."
   */
  message?: string;

  /**
   * Tailwind class for the spinner's accent color (top border)
   * @default "border-t-black"
   */
  accentColor?: string;

  /**
   * Background color class
   * @default "bg-gray-50"
   */
  backgroundColor?: string;

  /**
   * Additional className for the container
   */
  className?: string;
}

// ==========================================
// COMPONENT
// ==========================================

export function PageLoader({
  message = "Loading...",
  accentColor = "border-t-black",
  backgroundColor = "bg-gray-50",
  className,
}: PageLoaderProps) {
  return (
    <div
      className={cn("flex min-h-screen items-center justify-center", backgroundColor, className)}
    >
      <div className="text-center">
        {/* Spinner */}
        <div
          className={cn(
            "mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gray-200 mx-auto",
            accentColor,
          )}
        />
        {/* Loading message */}
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
}

// ==========================================
// PRESET VARIANTS
// ==========================================

/**
 * Auth-themed loader with black accent
 * Use for authentication-related loading states
 */
export function AuthLoader({ message = "Signing you in..." }: { message?: string }) {
  return <PageLoader message={message} accentColor="border-t-black" />;
}

/**
 * Welcome/account-themed loader with blue accent
 * Use for account setup and welcome page loading states
 */
export function AccountLoader({ message = "Setting up your account..." }: { message?: string }) {
  return <PageLoader message={message} accentColor="border-t-blue-600" />;
}
