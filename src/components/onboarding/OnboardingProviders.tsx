/**
 * Client wrapper: shares onboarding assessment state between /onboarding and /onboarding/results.
 */

"use client";

import type { ReactNode } from "react";

import { OnboardingProvider } from "@/lib/personalization/context";

export function OnboardingProviders({ children }: { children: ReactNode }): React.ReactElement {
  return <OnboardingProvider>{children}</OnboardingProvider>;
}
