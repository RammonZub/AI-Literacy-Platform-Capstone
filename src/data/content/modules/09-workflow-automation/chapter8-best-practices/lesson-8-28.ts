/**
 * Lesson 8.28: Troubleshooting Tool Chains
 *
 * CHAPTER: 8 - Best Practices & Implementation
 * PURPOSE: Practical fixes when multi-tool workflows stall (no vendor-specific myths).
 */

import type { Lesson } from "@/types/content";

export const lesson_8_28: Lesson = {
  id: "lesson-8-28",
  chapterId: "ch8-8-best-practices",
  moduleId: "09-workflow-automation",
  title: "Troubleshooting Tool Chains",
  description:
    "Diagnose slow steps, weak outputs, and broken handoffs across ChatGPT, Claude, Gemini, and Midjourney",
  order: 28,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-28-cover.webp",
        imageAlt: "Checklist and repair icons",
        title: "Troubleshooting Tool Chains",
        subtitle: "Most failures are missing context, wrong owner, or skipped verification",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Slow or Timeouts",
        paragraphs: [
          "Check network and vendor status pages first. Then **shrink context**: paste only the section you need, not the whole knowledge base.",
          "",
          "If you stacked every step inside one marathon chat, start a fresh thread with a summary line from the previous pass—long histories cost latency everywhere, not just one brand.",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Low-Quality Output",
        paragraphs: [
          "Before swapping tools, tighten the brief: audience, forbidden claims, length, and what “done” means.",
          "",
          "If the task is reasoning-heavy, move from ChatGPT to **Claude**. If it depends on Workspace files, pivot to **Gemini** per policy. If pixels look wrong, return to the text brief—**Midjourney** cannot fix fuzzy strategy.",
        ],
      },
    },
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Five-minute triage",
        insights: [
          "Name the owner tool for this step",
          "Paste the last approved artifact only",
          "Add one verifier sentence (“Legal must approve pricing lines”)",
          "Try smaller scope, not brute-force regeneration",
          "Log the failure pattern for next week’s template update",
        ],
      },
    },
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Automation failures",
        paragraphs: [
          "When Zapier/Make/Webhooks misbehave, **turn off the bot** and run the chain manually once. Automation should copy a flow you can already complete by hand.",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-28-inline-1.webp",
        imageAlt: "Automation flow diagram with alert badge",
      },
    },
    {
      id: "section-5",
      type: "quickPrompt",
      content: {
        heading: "Debug scaffold",
        description: "Paste into any chat after a bad handoff.",
        promptText:
          "Previous step output:\n[PASTE]\n\nSomething broke because ___. Restate the goal in one sentence, list two missing constraints, and propose the smallest next prompt to unblock me.",
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "general",
        action: "Stay in the tool that owns the failure",
        task: "Run the debug scaffold before switching vendors",
        feature: "Structured reflection",
        tip: "If you cannot fill the blank in “Something broke because…”, you need a human sync",
      },
    },
    {
      id: "section-actionable",
      type: "actionableTask",
      content: {
        title: "Log one incident",
        purpose: "Build institutional memory when teammates inherit your chains.",
        instructions: [
          "Pick the last frustrating AI session",
          "Document symptom → fix → new safeguard",
          "Store shareably (wiki, doc, ticket comment)",
        ],
        deliverable: "Incident note ≤120 words",
        estimatedTime: "8 minutes",
        starterPrompt: "Use the debug scaffold mentally before writing.",
        successCriteria: [
          "Failure class labeled (context, verifier, owner, automation)",
        ],
      },
    },
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Chains are debuggable",
        description:
          "You can separate latency issues from instruction issues and keep automation honest. Finish with a grounded implementation plan next.",
        xpReward: 100,
        buttonText: "Capstone plan",
      },
    },
  ],
};
