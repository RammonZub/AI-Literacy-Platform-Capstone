/**
 * Signup Page (checkout optional)
 *
 * Flow: home → /onboarding → /onboarding/results → /signup → /platform.
 * Optional `?redirect=` after sign-up; defaults to `/platform`. No email verification.
 */

import { Suspense } from "react";
import SignupPageClient from "./SignupPageClient";

export default function SignupPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white text-gray-500">
          Loading…
        </div>
      }
    >
      <SignupPageClient />
    </Suspense>
  );
}
