/**
 * Onboarding results — personalized module path (client UI in child for Suspense).
 */

import { Suspense } from "react";
import OnboardingResultsPageClient from "./OnboardingResultsPageClient";

export default function OnboardingResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
        </div>
      }
    >
      <OnboardingResultsPageClient />
    </Suspense>
  );
}
