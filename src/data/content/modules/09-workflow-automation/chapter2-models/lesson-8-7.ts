/**
 * Lesson 8.7: Side-by-Side Testing Across Tools
 *
 * CHAPTER: 2 - Routing & Capability
 * PURPOSE: Empirical comparison chat-to-chat using core tools only.
 */

import type { Lesson } from "@/types/content";

export const lesson_8_7: Lesson = {
  id: "lesson-8-7",
  chapterId: "ch8-2-models",
  moduleId: "09-workflow-automation",
  title: "Side-by-Side Testing Across Tools",
  description:
    "Run identical prompts in ChatGPT and Claude (add Gemini if allowed) to learn your personal quality/speed tradeoffs",
  order: 7,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "exercise",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-7-cover.webp",
        imageAlt: "Two chat windows side by side",
        title: "Side-by-Side Testing Across Tools",
        subtitle: "Evidence beats guessing which vendor fits your voice",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Method",
        paragraphs: [
          "1. Write **one** neutral prompt about a real work artifact.",
          "2. Paste it into **ChatGPT** and **Claude** without tweaking.",
          "3. Score clarity, structure, and factual caution 1–5.",
          "4. Note which output you would edit least before shipping.",
          "5. Repeat monthly—vendors update models often.",
        ],
      },
    },
    {
      id: "section-2",
      type: "textWithImage",
      content: {
        title: "Starter scenario",
        paragraphs: [
          "Use a decision brief your team actually owes: budget trade-offs, hiring plan, or vendor comparison.",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-7-inline-1.webp",
        imageAlt: "Notebook with pros and cons columns",
      },
    },
    {
      id: "section-3",
      type: "quickPrompt",
      content: {
        heading: "Neutral test prompt",
        description: "Paste verbatim into each chat session.",
        promptText:
          "A startup has $100,000 and must choose between hiring two senior contributors or four junior contributors. Outline trade-offs for velocity, quality, mentorship load, and 12-month runway. End with a recommendation paragraph plus three explicit risks labeled R1–R3. No invented financial figures.",
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Run the test prompt",
        task: "Compare with Claude in a second window",
        feature: "Identical prompt discipline",
        tip: "If Gemini is approved, add a third column for Workspace-specific tasks later—not this baseline test",
      },
    },
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Log results",
        purpose: "Build personal evidence for your router doc.",
        instructions: [
          "Run the neutral test prompt in ChatGPT and Claude",
          "Record scores and which draft needed fewer edits",
          "Write one sentence: “Next time I will default to ___ for this shape of task because ___.”",
        ],
        deliverable: "Three-row table: criterion / ChatGPT / Claude",
        estimatedTime: "15 minutes",
        starterPrompt: "Use the neutral test prompt.",
        successCriteria: [
          "Prompt was identical across tools",
          "At least one category differs by 2+ points",
        ],
      },
    },
    {
      id: "section-10",
      type: "completion",
      content: {
        title: "Chapter 2 complete",
        description:
          "You can now pair fast/deep thinking with explicit cross-tool tests. Upcoming chapters extend into daily workflows and automation.",
        xpReward: 100,
        buttonText: "Continue",
      },
    },
  ],
};
