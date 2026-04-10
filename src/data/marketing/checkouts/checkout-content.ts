/**
 * Checkout offer content
 *
 * Marketing copy and module-driven cards for the `/checkout` experience.
 * CURRICULUM: `courseShowcase.courses` comes from `src/data/content` modules.
 */

import type { Module } from "@/types/content";
import { getModuleLessons, modules } from "@/data/content";

export interface CheckoutCourseCard {
  id: string;
  imageSrc: string;
  lessonsLabel: string;
  subtitle: string;
  title: string;
}

export interface CheckoutBenefitItem {
  description: string;
  id: string;
}

const CHALLENGE_MODULE_ID = "10-challenge-28-day-ai";

function checkoutCourseSubtitle(module: Module): string {
  if (module.id === CHALLENGE_MODULE_ID) {
    return "Module 10 — one lesson per day with streak-friendly progress.";
  }
  const text = module.description.trim().replace(/\s+/g, " ");
  if (text.length <= 88) return text;
  return `${text.slice(0, 87).trim()}…`;
}

export const checkoutCourseShowcaseCourses: CheckoutCourseCard[] = modules.map((m) => ({
  id: m.id,
  title: m.title,
  subtitle: checkoutCourseSubtitle(m),
  lessonsLabel: `${getModuleLessons(m.id).length} lessons`,
  imageSrc: m.imageUrl,
}));

export const checkoutOfferContent = {
  banner: {
    ctaLabel: "Continue to checkout",
    defaultMessage:
      "Assessment and personalized recommendation are free first. After account creation you receive a three-day trial of full lesson access, then choose weekly (~$13), monthly ($50), or lifetime (~$140) paid access in USD (see list prices in checkout configuration).",
    freeAccessMessage:
      "Complimentary full access applied for this session (pilot / welcome offer).",
  },
  whatYouGet: {
    lead: "What you get with",
    highlight: "this program",
    items: [
      "214 article-based lessons across 10 modules",
      "Includes the 28-Day AI Challenge (Module 10) for daily microlearning habits",
      "Bite-sized lessons (~15 minutes) that fit fragmented professional time",
      "Learning paths tailored to your role, goals, and AI experience from onboarding",
      "Streaks, XP, and completion certificates that support engagement without gimmicks",
    ],
  },
  courseShowcase: {
    title: "Explore practical AI courses in minutes a day",
    accentLine: "",
    footerTitle: "Learn 6 times more efficiently",
    footerBody: "Short, practical lessons help you learn faster than scattered tutorials.",
    courses: checkoutCourseShowcaseCourses,
  },
  reassurance: [
    "Cancel anytime",
    "Secure checkout",
    "Instant access after payment",
  ],
} as const;

export default checkoutOfferContent;
