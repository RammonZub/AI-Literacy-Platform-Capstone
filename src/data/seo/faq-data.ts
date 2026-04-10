/**
 * FAQ data types and content for SEO
 *
 * PURPOSE: Centralized FAQ data for use in:
 * - FAQSection component
 * - FAQPage JSON-LD schema for rich snippets
 *
 * This file centralizes FAQ content.
 */

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * FAQ items for the landing page
 *
 * These questions explain the platform without introducing pricing or sales language.
 */
export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is AI Literacy Platform?",
    answer:
      "AI Literacy Platform is a microlearning platform designed for non-technical professionals who need practical AI skills in short study sessions.",
  },
  {
    question: "Who is AI Literacy Platform for?",
    answer:
      "The evaluated audience is busy non-technical professionals who want structured, work-relevant AI training without long-form technical courses.",
  },
  {
    question: "How long are the lessons?",
    answer:
      "The platform targets short lesson sessions that fit into a busy workday, typically around 15 minutes.",
  },
  {
    question: "Do I need technical experience?",
    answer:
      "No. The curriculum was designed for learners without a technical background and explains concepts in plain language.",
  },
  {
    question: "What makes the onboarding different?",
    answer:
      "The onboarding flow collects assessment answers and uses a deterministic cold-start algorithm to recommend a starting module before any behavioral data exists.",
  },
  {
    question: "What does the thesis evaluate?",
    answer:
      "The thesis evaluates onboarding, personalization, lesson completion, usability, recommendation relevance, and first-session activation.",
  },
  {
    question: "Is the artifact only a landing page?",
    answer:
      "No. The core artifact is the authenticated learning flow: onboarding, recommendations, dashboard, lessons, progress, and telemetry capture.",
  },
];
