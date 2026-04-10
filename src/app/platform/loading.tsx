/**
 * Platform Loading State
 *
 * PURPOSE: Show loading UI while platform layout fetches user data and checks access
 *
 * CONTEXT: The platform layout (layout.tsx) is a Server Component that:
 * 1. Verifies user authentication
 * 2. Fetches user profile from database
 * 3. Determines if user has access to the learner platform
 *
 * This loading.tsx shows while that server-side work happens, preventing:
 * - Flash of paywall for users WITH access (hasAccess=true comes back slow)
 * - Flash of content for users WITHOUT access (hasAccess=false comes back slow)
 *
 * WHY A CENTERED SPINNER:
 * - Neutral UI that doesn't reveal anything about access state
 * - Consistent with app's minimal aesthetic
 * - Works for both access granted and access denied scenarios
 *
 * @see src/app/platform/layout.tsx - Server Component that does the auth check
 */

import PlatformPageShell from "@/components/layout/PlatformPageShell";

export default function PlatformLoading() {
  return (
    <PlatformPageShell
      className="flex items-center"
      railClassName="flex min-h-screen items-center justify-center py-0"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
        <p className="text-sm text-gray-500">Loading...</p>
      </div>
    </PlatformPageShell>
  );
}
