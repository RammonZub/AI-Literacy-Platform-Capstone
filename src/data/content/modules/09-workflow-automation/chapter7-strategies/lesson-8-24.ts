/**
 * Lesson 8.24: Layered Multi-Tool Passes
 *
 * CHAPTER: 7 - Advanced Strategies
 * PURPOSE: Fast scan → deep reasoning → synthesis using core tools (no latency myths).
 */

import type { Lesson } from "@/types/content";

export const lesson_8_24: Lesson = {
  id: "lesson-8-24",
  chapterId: "ch8-7-strategies",
  moduleId: "09-workflow-automation",
  title: "Layered Multi-Tool Passes",
  description:
    "Scan with ChatGPT or Gemini, deepen with Claude, visualize with Midjourney only after copy approval",
  order: 24,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "theory",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-24-cover.webp",
        imageAlt: "Layered workflow diagram",
        title: "Layered Multi-Tool Passes",
        subtitle: "Same pattern this module uses: research, draft, graphics, delivery",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Three Layers, Not Three Vendors by Default",
        paragraphs: [
          "**Layer A – Scan** — Shrink the problem: outline, classify, checklist, rough cut.",
          "**Layer B – Deepen** — Reason about consequences, reconcile long sources, stress-test tone.",
          "**Layer C – Ship** — Format for audience; attach visuals only when brief is frozen.",
          "",
          "Layers map to tools only after you know the risk: speed-first chats for A, Claude-heavy work for B, Midjourney strictly in C for visuals.",
        ],
      },
    },
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "When to stop early",
        insights: [
          "Internal working note? Layer A can finish.",
          "Client-facing PDF? Needs B + human verifier.",
          "Campaign visual? Layer C after brand + claims review.",
        ],
      },
    },
    {
      id: "section-3",
      type: "textWithImage",
      content: {
        title: "Example — Long report to exec summary",
        paragraphs: [
          "Run Layer A in ChatGPT or Gemini: “Summarize each section in two sentences and flag two open questions.”",
          "Send flagged sections only to Claude for Layer B: “Stress-test assumptions; mark [VERIFY].”",
          "Return to your fastest chat for Layer C: “Produce a 120-word exec summary + five actions; no new stats.”",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-24-inline-1.webp",
        imageAlt: "Annotated document with margin notes",
      },
    },
    {
      id: "section-4",
      type: "quickPrompt",
      content: {
        heading: "Handoff template",
        description: "Paste between tools to preserve context.",
        promptText:
          "Layer A output:\n[PASTE]\n\nYou are Layer B. Do not rewrite everything—only deepen the flagged items and add [VERIFY] where humans must confirm.",
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "Open Claude for Layer B",
        task: "Run the handoff template on a real document slice",
        feature: "Long-context reasoning",
        tip: "If Layer A ballooned past two pages, re-split before Claude",
      },
    },
    {
      id: "section-actionable",
      type: "actionableTask",
      content: {
        title: "Trace layers on a live doc",
        purpose: "Prove you can stop after A when appropriate.",
        instructions: [
          "Pick a PDF or memo you already have permission to use",
          "Complete Layer A only; decide honestly if B is required",
          "If yes, run Layer B on ≤2 flagged sections",
        ],
        deliverable: "Photo or export showing A output + optional B markup",
        estimatedTime: "15 minutes",
        starterPrompt: "Use the handoff template.",
        successCriteria: [
          "Explicit decision on whether Layer B ran",
          "Any verify tags surfaced to a human",
        ],
      },
    },
    {
      id: "section-5",
      type: "completion",
      content: {
        title: "Layers mastered",
        description:
          "You can explain scan vs deepen vs ship without vendor folklore. Hybrid strategy is next.",
        xpReward: 100,
        buttonText: "Continue",
      },
    },
  ],
};
