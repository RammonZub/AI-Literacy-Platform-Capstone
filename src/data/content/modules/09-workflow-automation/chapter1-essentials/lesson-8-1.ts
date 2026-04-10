/**
 * Lesson 8.1: Confirm Your Four-Tool Stack
 *
 * CHAPTER: 1 - Getting Started
 * PURPOSE: Module 9 assumes the four mastery-path tools:
 * ChatGPT, Claude, Gemini, Midjourney. This lesson verifies access and roles.
 */

import type { Lesson } from "@/types/content";

export const lesson_8_1: Lesson = {
  id: "lesson-8-1",
  chapterId: "ch8-1-essentials",
  moduleId: "09-workflow-automation",
  title: "Confirm Your Four-Tool Stack",
  description:
    "Make sure you can reach ChatGPT, Claude, Gemini, and Midjourney—and know when each leads the next step",
  order: 1,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-1-cover.webp",
        imageAlt: "Four app tiles suggesting a connected toolkit",
        title: "Confirm Your Four-Tool Stack",
        subtitle:
          "Module 9 is about chains. The chain only works if you can open the right link without friction.",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Default Roles (You Can Tune Later)",
        paragraphs: [
          "**ChatGPT** — Broad brainstorming, drafting, formatting, and quick clarifications when you want a flexible generalist.",
          "**Claude** — Long memos, careful reasoning, multi-page review, and tasks where patience and nuance beat raw speed.",
          "**Gemini** — Google Workspace-heavy days, quick research prompts with grounding where your plan allows it, and multimodal inputs your org approves.",
          "**Midjourney** — Visual concepts, campaign imagery, and slide-ready metaphors when text alone will not sell the idea.",
          "",
          "These roles come straight from the curriculum module map (ChatGPT entry, Claude for long text, Gemini for Workspace users, Midjourney for non-designers who need visuals). Your job in Module 9 is to **sequence** them—not to re-learn buttons inside each app.",
        ],
      },
    },
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "60-Second Access Check",
        insights: [
          "ChatGPT: can you start a new chat and paste a three-line brief?",
          "Claude: can you open a project or chat with a long PDF attached (if your plan allows)?",
          "Gemini: can you reach the workspace account your employer expects?",
          "Midjourney: can you reach Discord or the interface your subscription uses?",
        ],
      },
    },
    {
      id: "section-3",
      type: "textWithImage",
      content: {
        title: "If You Do Not Have All Four",
        paragraphs: [
          "Some employers block a vendor. Keep the **workflow shape**: scan → deepen → visualize → verify → ship. Substitute an approved chat tool for the blocked step and note the limitation in your template.",
          "",
          "Do not chase every new model drop during this module. Stability beats novelty when you are learning handoffs.",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-1-inline-1.webp",
        imageAlt: "Professional reviewing apps on a laptop",
      },
    },
    {
      id: "section-4",
      type: "quickPrompt",
      content: {
        heading: "Trace One Real Project",
        description:
          "Pick a work artifact you owe soon (memo, client update, campaign sketch). Paste this into your primary chat tool.",
        promptText:
          "For a [memo / client email / slide outline / social carousel] about [topic], list which of ChatGPT, Claude, Gemini, or Midjourney should own: (1) outline, (2) first draft, (3) fact-check plan, (4) visual concept, (5) final polish. One line each with reasoning.",
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "general",
        action: "Open each tool you confirmed",
        task: "Bookmark or pin the official URLs your organization allows",
        feature: "Consistent entry points reduce breaks in your chain",
        tip: "chat.openai.com · claude.ai · gemini.google.com · midjourney.com (or your approved paths)",
      },
    },
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Stack check — evidence",
        purpose:
          "Prove you can start a session in each available tool before multi-step lessons begin.",
        instructions: [
          "Open each available tool in a clean tab",
          "Start a new conversation named “Module 9 stack check”",
          "Paste the trace prompt and save whichever answer you will reuse",
          "Note any blocked vendor for your manager or IT list",
        ],
        deliverable: "Short note listing which tools succeeded and your chosen handoff order",
        estimatedTime: "10 minutes",
        starterPrompt: "See “Trace One Real Project” above.",
        successCriteria: [
          "At least three tools reachable without support tickets",
          "One written chain for a real artifact you owe",
          "Blockers documented in plain language",
        ],
      },
    },
    {
      id: "section-9",
      type: "completion",
      content: {
        title: "Stack Ready",
        description:
          "You now have explicit roles for the core toolset and evidence you can open them. Next lessons build speed and judgement inside those roles.",
        xpReward: 100,
        buttonText: "Continue",
      },
    },
  ],
};
