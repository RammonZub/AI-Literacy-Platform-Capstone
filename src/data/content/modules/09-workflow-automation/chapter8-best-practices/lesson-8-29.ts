/**
 * Lesson 8.29: 30-Day Workflow Habit Plan (Capstone)
 *
 * CHAPTER: 8 - Best Practices & Implementation
 * PURPOSE: Ground Module 9 in daily practice across the four core tools.
 */

import type { Lesson } from "@/types/content";

export const lesson_8_29: Lesson = {
  id: "lesson-8-29",
  chapterId: "ch8-8-best-practices",
  moduleId: "09-workflow-automation",
  title: "30-Day Workflow Habit Plan",
  description:
    "Turn chaining habits into routine: ChatGPT, Claude, Gemini, Midjourney, plus one automation experiment",
  order: 29,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "review",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-29-cover.webp",
        imageAlt: "Calendar with highlighted streak days",
        title: "30-Day Workflow Habit Plan",
        subtitle: "Micro-passes beat heroic all-nighters—the microlearning design goal",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "How to read this plan",
        paragraphs: [
          "Each week adds one new responsibility to your stack: clarity (Week 1), breadth (Week 2), visuals (Week 3), automation (Week 4).",
          "",
          "If a day implodes, do the smallest action—log one chain, run one verifier—so the habit survives.",
        ],
      },
    },
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "Weekly focus",
        insights: [
          "Week 1 — Daily ChatGPT passes + templates for repeat emails",
          "Week 2 — Weekly Claude deep dive on your longest doc",
          "Week 3 — One Midjourney brief tied to a real stakeholder update",
          "Week 4 — One Make/Zapier handoff you can explain to compliance",
        ],
      },
    },
    {
      id: "section-3",
      type: "textWithImage",
      content: {
        title: "Daily non-negotiables",
        paragraphs: [
          "1. Name the owner tool before typing.",
          "2. Paste only the necessary artifact.",
          "3. Mark [VERIFY] wherever a human must sign off.",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-29-inline-1.webp",
        imageAlt: "Habit tracker sticky notes",
      },
    },
    {
      id: "section-4",
      type: "quickPrompt",
      content: {
        heading: "End-of-week retro prompt",
        description: "Run every Friday to keep chains honest and small.",
        promptText:
          "List three chains I ran, one I will retire, and one automation candidate. Each bullet <15 words.",
      },
    },
    {
      id: "knowledge-check",
      type: "knowledgeCheck",
      content: {
        question: "Which habit most directly matches how Module 9 is designed?",
        options: [
          "Use only one chat forever to avoid confusion",
          "Chain tools for research → draft → visual → delivery with clear handoffs",
          "Automate everything before manual rehearsals",
          "Skip verification to move faster",
        ],
        correctAnswer: 1,
        explanation:
          "Module 9 is explicitly about integrated workflows across the tools from Modules 5–8, not single-tool heroics or unverified automation.",
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "make",
        action: "Open Make or Zapier",
        task: "Draft (do not launch) one scenario that mirrors a chain you already run manually",
        feature: "Automation mirrors manual steps",
        tip: "If you cannot narrate the manual chain, automation is premature",
      },
    },
    {
      id: "section-actionable",
      type: "actionableTask",
      content: {
        title: "Commitment note",
        instructions: [
          "Pick start date",
          "Choose accountability partner or calendar block",
          "Screenshot your Week 1 template folder",
        ],
        deliverable: "Note in your workspace titled “Module 9 — 30 day kickoff”",
        estimatedTime: "10 minutes",
        purpose: "Make the habit visible",
        starterPrompt: "Use weekly focus list above.",
        successCriteria: [
          "Dated start",
          "At least one Gemini or Claude-specific action scheduled (even if lightweight)",
        ],
      },
    },
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Module 9 complete",
        description:
          "You finished Workflow and Automation by combining ChatGPT, Claude, Gemini, and Midjourney into accountable chains, then (optionally) encoding them with automation.",
        xpReward: 100,
        buttonText: "Back to dashboard",
      },
    },
  ],
};
