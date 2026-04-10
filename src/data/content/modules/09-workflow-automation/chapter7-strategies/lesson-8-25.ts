/**
 * Lesson 8.25: Hybrid Strategies (Core Toolset Only)
 *
 * CHAPTER: 7 - Advanced Strategies
 * PURPOSE: Route across ChatGPT, Claude, Gemini, and Midjourney without introducing
 * extra vendors beyond this curriculum’s four-tool stack.
 */

import type { Lesson } from "@/types/content";

export const lesson_8_25: Lesson = {
  id: "lesson-8-25",
  chapterId: "ch8-7-strategies",
  moduleId: "09-workflow-automation",
  title: "Hybrid Strategies (Core Toolset)",
  description:
    "Combine ChatGPT, Claude, Gemini, and Midjourney deliberately—fast scans, deep reasoning, Workspace flow, then visuals",
  order: 25,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "theory",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-25-cover.webp",
        imageAlt: "Branching workflow arrows",
        title: "Hybrid Strategies (Core Toolset)",
        subtitle:
          "The platform teaches four mastery-path tools; Module 9 sequences them like a production line",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Stop Maxing One Chat",
        paragraphs: [
          "A common failure mode is sentimental attachment to whichever app opened first. Hybrid strategy means **each step has a job**, and you pick the tool that matches that job.",
          "",
          "There is no moral prize for using only one vendor. There *is* professional risk in using the wrong one for long documents, visuals, or Workspace-heavy work.",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "When Each Core Tool Leads",
        paragraphs: [
          "**ChatGPT** leads early exploration, formatting, and most drafting loops.",
          "**Claude** leads when nuance, extended context, or careful restructuring dominates.",
          "**Gemini** leads when Google Workspace artifacts and org-approved multimodal inputs are central.",
          "**Midjourney** leads only once language around the visual is frozen—never the reverse.",
        ],
      },
    },
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Practical 70/30 habit",
        insights: [
          "~70% of micro-steps stay in your fastest familiar chat (often ChatGPT)",
          "~30% intentionally jump to Claude/Gemini/Midjourney for depth, grounding, or pixels",
          "Escalate because of *risk*, not because of vague dissatisfaction",
          "Write the escalation reason in one sentence before switching tools",
        ],
      },
    },
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Research → Brief → Visual → Ship",
        paragraphs: [
          "Example hybrid chain aligned with Module 9:",
          "",
          "1. Scan sources or notes (ChatGPT or Gemini, depending on where files live).",
          "2. Deepen analysis on the riskiest claims (Claude).",
          "3. Produce visual concepts from an approved creative brief (Midjourney).",
          "4. Package the narrative for stakeholders (back to ChatGPT or Claude for tone control).",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-25-inline-1.webp",
        imageAlt: "Workflow documentation on a desk",
      },
    },
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Cost and Governance",
        paragraphs: [
          "Workspace policies, retention settings, and data residency matter more than saving a few cents per thousand tokens. Pick the tool your compliance story can defend.",
          "",
          "When citations matter, use the **grounding features your org allows**—often Gemini with Google sources or manual verification—not unnamed “search bots.”",
        ],
      },
    },
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "Write your hybrid rules",
        description: "Fill brackets; keep vendors inside the four core tools.",
        promptText:
          "For tasks: [A], [B], [C], specify lead tool (ChatGPT/Claude/Gemini/Midjourney), escalation trigger, and verifier. One bullet each.",
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "general",
        action: "Open the tools you listed",
        task: "Run one real task using the chain you wrote",
        feature: "Explicit handoffs",
        tip: "If a step cannot name a verifier, it is not ready to automate",
      },
    },
    {
      id: "section-actionable",
      type: "actionableTask",
      content: {
        title: "Prove the handoff",
        purpose: "Execute one multi-step assignment with documented switches.",
        instructions: [
          "Pick a work task due this week",
          "Run at least two distinct tools deliberately",
          "Screenshot or log timestamps at each handoff",
        ],
        deliverable: "Short log: Step → Tool → Output artifact",
        estimatedTime: "20 minutes",
        starterPrompt: "Use your hybrid rules prompt.",
        successCriteria: [
          "Minimum two core tools touched",
          "Each handoff names the input artifact",
        ],
      },
    },
    {
      id: "section-7",
      type: "completion",
      content: {
        title: "Hybrid, not chaotic",
        description:
          "You can explain which tool leads each kind of step and why—matching the transparency goal of rule-based personalization.",
        xpReward: 100,
        buttonText: "Continue",
      },
    },
  ],
};
