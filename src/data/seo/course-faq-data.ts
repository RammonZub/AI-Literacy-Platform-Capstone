/**
 * Course-Specific FAQ Data for SEO Schema
 *
 * PURPOSE: Centralized FAQ data for course landing pages
 * Used in FAQPage JSON-LD schema for rich snippets in search results
 *
 * @module data/seo/course-faq-data
 */

import type { FAQItem } from "./faq-data";

/**
 * Get FAQ items for a specific course by slug
 *
 * @param slug - Course slug (e.g., "chatgpt", "28-day-ai-challenge")
 * @returns Array of FAQ items for the course
 */
export function getCourseFAQData(slug: string): FAQItem[] {
  // 28-Day AI Challenge has unique FAQs
  if (slug === "28-day-ai-challenge") {
    return CHALLENGE_FAQS;
  }

  // All other courses share general course FAQs
  return GENERAL_COURSE_FAQS;
}

/**
 * General course FAQs - shared by all standard courses
 *
 * Topics covered:
 * - Learning outcomes
 * - Time commitment
 * - Prerequisites
 * - Certification
 * - Mobile access
 */
const GENERAL_COURSE_FAQS: FAQItem[] = [
  {
    question: "What will I learn in this course?",
    answer:
      "You'll gain practical, hands-on skills you can apply immediately. Each course is designed to teach you real-world applications of AI tools and techniques, from fundamentals to advanced workflows.",
  },
  {
    question: "How long does it take to complete?",
    answer:
      "Each course is designed to be completed in 10-15 hours total, with lessons that take just 15 minutes. Learn at your own pace—finish in a week or spread it over a month.",
  },
  {
    question: "Do I need prior experience with AI?",
    answer:
      "No prior experience required. Our courses start from the beginning and progressively build your skills, whether you're completely new to AI or looking to deepen your expertise.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes! Upon completing 100% of the lessons in a course, you'll earn a verifiable certificate you can share on LinkedIn and include in your resume.",
  },
  {
    question: "Can I access the course on mobile devices?",
    answer:
      "Absolutely. Our platform is fully responsive and works great on phones, tablets, and desktop computers. Learn anywhere, anytime.",
  },
];

/**
 * 28-Day AI Challenge specific FAQs
 *
 * Topics covered:
 * - Challenge overview
 * - Time commitment
 * - Missed days policy
 * - Certification
 * - Repeating the challenge
 */
const CHALLENGE_FAQS: FAQItem[] = [
  {
    question: "What is the 28-Day AI Challenge?",
    answer:
      "A structured learning journey that takes you from AI beginner to confident user in 28 days. You'll complete hands-on projects, unlock new tools daily, and build a lasting AI habit.",
  },
  {
    question: "How much time do I need per day?",
    answer:
      "Just 15-20 minutes per day. Each lesson is designed to fit into your morning coffee, commute, or lunch break. Consistency matters more than intensity.",
  },
  {
    question: "What happens if I miss a day?",
    answer:
      "No problem! You can catch up anytime. The challenge is self-paced, so you can complete lessons on your own schedule. You won't lose progress or be penalized.",
  },
  {
    question: "Is there a certificate for the 28-Day Challenge?",
    answer:
      "Yes! Upon completing all 28 days, you'll earn a verifiable certificate proving your AI proficiency. Share it on LinkedIn to showcase your commitment to learning.",
  },
  {
    question: "Can I repeat the challenge?",
    answer:
      "Absolutely. Many users repeat the challenge to reinforce their skills and explore new tools. Each time through, you'll discover new applications and deepen your understanding.",
  },
];
