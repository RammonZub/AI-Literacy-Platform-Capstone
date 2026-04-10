/**
 * Onboarding assessment — progress rail sections matching the five thesis dimensions
 * (Appendix A.5): Professional Context, Current AI Experience, Motivation & Pain Points,
 * Confidence & Readiness, and Time & Goals.
 */

export interface OnboardingAssessmentProgressSection {
  id: string;
  label: string;
  order: number;
  description: string;
}

export const ONBOARDING_ASSESSMENT_PROGRESS_SECTIONS: OnboardingAssessmentProgressSection[] = [
  {
    id: "professional-context",
    label: "Professional context",
    order: 1,
    description: "Work situation and day-to-day focus.",
  },
  {
    id: "ai-experience",
    label: "Current AI experience",
    order: 2,
    description: "How you use AI tools and how you judge the output.",
  },
  {
    id: "motivation-pain",
    label: "Motivation & pain",
    order: 3,
    description: "Why you want to learn and what frustrates you.",
  },
  {
    id: "confidence-readiness",
    label: "Confidence & readiness",
    order: 4,
    description: "Comfort with technology and readiness to start.",
  },
  {
    id: "time-goals",
    label: "Time & goals",
    order: 5,
    description: "Daily time available and what makes learning worthwhile.",
  },
];
