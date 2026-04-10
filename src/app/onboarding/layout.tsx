import type { Metadata } from "next";

import { OnboardingProviders } from "@/components/onboarding/OnboardingProviders";

export const metadata: Metadata = {
  title: "Onboarding assessment | AI Literacy Platform",
  description:
    "Eleven-item onboarding questionnaire that informs personalized module recommendations.",
};

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return <OnboardingProviders>{children}</OnboardingProviders>;
}
