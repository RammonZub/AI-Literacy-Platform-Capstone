/**
 * Shared Learn Landing Content
 *
 * PURPOSE: Centralize platform-wide copy and defaults that apply across
 * all `/learn/[slug]` landing pages.
 *
 * CONTEXT: This file holds brand-level positioning and reusable marketing copy.
 * Per-course copy lives in `src/data/marketing/learn/courses/`.
 *
 * KEY RESPONSIBILITIES:
 * - Define shared platform positioning and trust language
 * - Provide default CTA metadata for learn landing sections
 * - Provide shared FAQ, proof, and editorial support copy
 *
 * @see src/data/marketing/learn/courses - Course-specific landing configs
 * @see src/lib/marketing/learn/build-course-landing-data.ts - Merge layer
 */

import type {
  FAQ,
  LandingCta,
  SharedLearnLandingConfig,
  Testimonial,
} from "@/types/course-landing";
import { SITE_BRAND_NAME, SITE_SUPPORT_EMAIL } from "@/lib/site-brand";

/**
 * Shared testimonial bank for course landing pages.
 *
 * NOTE: These are not currently rendered on `/learn/[slug]`, but they remain
 * part of the landing data contract for future trust-section work.
 */
export const sharedLearnTestimonials: Testimonial[] = [
  {
    quote:
      "The prompt engineering course completely changed how I work. I save at least 2 hours every day on email and reports.",
    author: "Sarah Chen",
    role: "Marketing Director, Tech Startup",
    company: "Series B Startup",
  },
  {
    quote:
      "I was skeptical about AI tools, but this platform made it click. Now I use ChatGPT daily for client presentations and strategy work.",
    author: "Michael Torres",
    role: "Consultant, Deloitte",
    company: "Deloitte",
  },
  {
    quote:
      "As a teacher, I needed to understand AI without getting overwhelmed. The AI Foundations course was perfect - clear, practical, and immediately useful.",
    author: "Emily Rodriguez",
    role: "High School Teacher",
    company: "Public School District",
  },
  {
    quote:
      "The 28-Day Challenge built a genuine habit. Now I can't imagine working without AI assistance. It's like having a brilliant junior analyst.",
    author: "David Kim",
    role: "Product Manager, Amazon",
    company: "Amazon",
  },
  {
    quote:
      "Midjourney Mastery unlocked creativity I didn't know I had. I now create all my own marketing visuals in minutes instead of waiting days for designers.",
    author: "Jessica Park",
    role: "Founder, E-commerce Brand",
    company: "D2C Brand",
  },
  {
    quote:
      "Claude has become my go-to for writing and analysis. This course showed me capabilities I never knew existed.",
    author: "Robert Thompson",
    role: "Content Lead, HubSpot",
    company: "HubSpot",
  },
  {
    quote:
      "The content creation module paid for itself in a week. I'm producing 3x the blog content with better quality.",
    author: "Amanda Foster",
    role: "Content Marketing Manager",
    company: "SaaS Company",
  },
  {
    quote:
      "Finally, a course that respects my time. 15-minute lessons I can finish during lunch. No fluff, just practical skills.",
    author: "Christopher Lee",
    role: "Software Engineer, Google",
    company: "Google",
  },
  {
    quote:
      "Gemini's multimodal capabilities changed how I do research. The course projects were directly applicable to my workflow.",
    author: "Sophie Wang",
    role: "Research Analyst, McKinsey",
    company: "McKinsey & Company",
  },
];

export const sharedLearnFaqs: FAQ[] = [
  {
    question: "What if AI usually makes me slower?",
    answer:
      `That is exactly the kind of problem ${SITE_BRAND_NAME} is built for. We focus on the tasks AI actually helps with, the situations where it does not, and how to get useful output without wasting time fixing generic results.`,
  },
  {
    question: "Is this still for me if I'm non-technical?",
    answer:
      `Yes. ${SITE_BRAND_NAME} is designed for busy professionals, not engineers. If you can use email, documents, and meetings as part of your job, you can follow this.`,
  },
  {
    question: "How much time will this realistically save?",
    answer:
      "We aim for realistic gains, not hype. Most people start by saving time on emails, meeting notes, research, and first drafts, then build from there as their judgment gets stronger.",
  },
];

function createLandingCta(
  label: string,
  href: string,
  variant: LandingCta["variant"],
  trackingName: string,
  location: string,
): LandingCta {
  return { label, href, variant, trackingName, location };
}

/**
 * Shared platform landing defaults.
 *
 * These defaults preserve current `/learn/[slug]` behavior while letting the
 * data layer move to a clearer shared + per-course split.
 */
export const sharedLearnLandingConfig: SharedLearnLandingConfig = {
  defaultHeroPrimaryCta: createLandingCta(
    "Find your best AI path",
    "/onboarding",
    "primary",
    "course_primary_cta",
    "hero",
  ),
  defaultHeroSecondaryCta: createLandingCta(
    "See what's inside",
    "#program-overview",
    "secondary",
    "course_secondary_cta",
    "hero",
  ),
  defaultCertificateCta: createLandingCta(
    "Start your path",
    "/onboarding",
    "primary",
    "course_certificate_cta",
    "certificate",
  ),
  benefits: [
    {
      title: "Catch up without burning out.",
      body: "15-minute lessons plus a tailored weekly AI newsletter.",
    },
    {
      title: "Learn where AI actually helps.",
      body: "See how it can support emails, meeting notes, research, drafts, and repetitive tasks.",
    },
    {
      title: "Finally feel confident with AI.",
      body: "No jargon. No technical background. Just clear, usable guidance.",
    },
    {
      title: "Know exactly what works.",
      body: "We filter the noise so you stop guessing and stop babysitting bad AI output.",
    },
  ],
  platformPositioning: {
    eyebrow: `What ${SITE_BRAND_NAME} does`,
    heading: `${SITE_BRAND_NAME} is your AI filter for what actually helps at work.`,
    body: `New AI tools launch daily. Most are noise. ${SITE_BRAND_NAME} gives you one clear path: what to use, what to ignore, and how to build practical AI skill without falling into another overwhelming course.`,
    bullets: [
      "Short lessons built for busy workdays",
      "Practical workflows instead of trend-chasing",
      "Better judgment on what helps and what does not",
    ],
  },
  whyNow: {
    eyebrow: "Why this matters now",
    heading: "Why so many people still feel behind with AI",
    paragraphs: [
      "AI is already showing up in job expectations, but most people still do not have one clear path. They try a tool, get generic output, waste time fixing it, and come away feeling even more behind.",
      `${SITE_BRAND_NAME} is built to change that. We teach what actually helps at work, what to avoid, and how to build enough confidence to use AI on your terms instead of feeling pushed around by the hype.`,
    ],
  },
  newsletter: {
    heading: "Get tailored AI updates that help you work with more clarity",
    body: "AI made simple for the rest of us. Get tailored news from the AI world, simple concept breakdowns, practical tips, recommended workflows, and useful tools that help you stay balanced, more productive, and get better outcomes at work.",
    actionLabel: "Join the list",
    disclaimer:
      "We currently route newsletter interest through our support inbox until a dedicated signup provider is connected.",
    fallbackHrefTemplate: `mailto:${SITE_SUPPORT_EMAIL}?subject=${encodeURIComponent(`Keep me updated on ${SITE_BRAND_NAME} courses`)}`,
  },
  proofSections: [
    {
      eyebrow: "From overwhelmed to in control",
      heading: "Build an AI habit you can actually keep.",
      body: "Short lessons, small wins, and a format that fits into a real workday so you keep moving instead of falling behind.",
    },
    {
      eyebrow: "Ready for real work",
      heading: "Use prompts and workflows the same day you learn them.",
      body: "Emails, meetings, research, planning, and repetitive admin work without endless trial and error.",
    },
  ],
  sharedFaqs: sharedLearnFaqs,
  testimonials: sharedLearnTestimonials,
};

/**
 * Default course-specific FAQ entries built from the module title.
 */
export function buildDefaultCourseFaqs(title: string): FAQ[] {
  return [
    {
      question: `Is ${title} suitable for beginners?`,
      answer: `Yes! ${title} is designed to be accessible to beginners while offering valuable insights for intermediate learners as well.`,
    },
    {
      question: `What will I be able to do after completing ${title}?`,
      answer: `After completing ${title}, you'll have practical skills you can apply immediately to your work or personal projects.`,
    },
  ];
}

/**
 * Deterministically select up to 3 testimonial slots for a course.
 *
 * WHY: This preserves the existing "shared pool + per-course slice" behavior
 * while we keep the trust layer out of the current visual flow.
 */
export function getSharedTestimonialsForModule(moduleId: string): Testimonial[] {
  const index = Number.parseInt(moduleId.split("-")[0] ?? "0", 10);
  const start = (index - 1) * 3;
  return sharedLearnTestimonials.slice(start, start + 3);
}
