import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assessment results | AI Literacy Platform",
  description:
    "Recommended learning path and optional relevance check (Likert) after the onboarding assessment.",
};

export default function OnboardingResultsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
