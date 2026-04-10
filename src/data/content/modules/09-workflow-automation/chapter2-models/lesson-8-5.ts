/**
 * Lesson 8.5: When “Bigger” or a Different Vendor Wins
 *
 * CHAPTER: 2 - Routing & Capability
 * PURPOSE: Deep passes, long context, and high-stakes outputs—aligned to core tools.
 */

import type { Lesson } from "@/types/content";

export const lesson_8_5: Lesson = {
  id: "lesson-8-5",
  chapterId: "ch8-2-models",
  moduleId: "09-workflow-automation",
  title: "When “Bigger” or a Different Vendor Wins",
  description:
    "Escalate model tier or switch to Claude, Gemini, or Midjourney when the step’s risk and complexity demand it",
  order: 5,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "theory",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-5-cover.webp",
        imageAlt: "High-resolution insight diagram",
        title: "When “Bigger” or a Different Vendor Wins",
        subtitle: "Deep reasoning is a routing decision—not a personality flex",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Signals You Need More Depth",
        paragraphs: [
          "Reach for stronger models or different vendors when you see **multi-step dependencies**, **conflicting instructions**, **client-visible tone**, or **long attachments** that must stay consistent.",
          "",
          "**Claude** is the default choice when a single chat session must hold large collateral or subtle reasoning (Modules 6–9 assume you practiced there).",
          "**Gemini** fits when Workspace data, multimodal inputs, or Google-centric grounding is part of the chain (Module 7).",
          "**Midjourney** enters only after the visual brief is stable—never before copy and claims are verified (Module 8).",
        ],
      },
    },
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "Deep-pass checklist",
        insights: [
          "Would a mistaken paragraph create rework for someone else? → deep pass",
          "Does the step combine legal, finance, or safety language? → human + deep pass",
          "Are you synthesizing >10 pages without a outline? → pause, re-outline, then Claude/Gemini",
          "Are you briefing visuals? → text brief in chat, then Midjourney with frozen prompts",
        ],
      },
    },
    {
      id: "section-3",
      type: "textWithImage",
      content: {
        title: "Cost Is Not Just Money",
        paragraphs: [
          "Waiting a few seconds for a heavier model can be cheaper than sending a sloppy deck to a client.",
          "",
          "Track **time-to-confidence**: if you still do not trust the output after two revisits, you are in the wrong tier—or missing a verifier.",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-5-inline-1.webp",
        imageAlt: "Executive reviewing marked-up document",
      },
    },
    {
      id: "section-4",
      type: "quickPrompt",
      content: {
        heading: "Deep-pass prompt shell",
        description: "Use after your fast outline exists.",
        promptText:
          "Here is the approved outline:\n[PASTE]\n\nTask: expand only section 2 into executive-ready prose. Flag uncertainties as [VERIFY]. No new statistics.",
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "Open Claude",
        task: "Try the deep-pass shell on a sensitive draft",
        feature: "Long-context reasoning",
        tip: "Paste the outline from ChatGPT/Gemini to preserve chain context",
      },
    },
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Escalate once on purpose",
        purpose: "Prove you can restart in a stronger tier without throwing away earlier work.",
        instructions: [
          "Draft an outline in your fastest chat mode",
          "Copy only the outline into Claude (or stronger ChatGPT mode)",
          "Expand one section with the deep-pass shell",
          "Highlight every [VERIFY] you owe a human",
        ],
        deliverable: "Two artifacts: outline + expanded section with verify tags",
        estimatedTime: "12 minutes",
        starterPrompt: "Use the deep-pass shell.",
        successCriteria: [
          "At least one explicit [VERIFY] marker",
          "No net-new facts invented in the expanded section",
        ],
      },
    },
    {
      id: "section-10",
      type: "completion",
      content: {
        title: "Depth on Demand",
        description:
          "You now know when core tools deserve a heavy pass. Next: a reusable routing framework across all four.",
        xpReward: 100,
        buttonText: "Continue",
      },
    },
  ],
};
