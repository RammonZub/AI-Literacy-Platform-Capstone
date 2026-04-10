/**
 * Lesson 8.4: Fast Pass vs Deep Pass
 *
 * CHAPTER: 2 - Routing & Capability
 * PURPOSE: Module 9—choose a lighter model tier for scans, heavier tiers for
 * reasoning, without relying on vendor hardware myths.
 */

import type { Lesson } from "@/types/content";

export const lesson_8_4: Lesson = {
  id: "lesson-8-4",
  chapterId: "ch8-2-models",
  moduleId: "09-workflow-automation",
  title: "Fast Pass vs Deep Pass",
  description:
    "Use smaller model settings for outlines and checks; escalate when reasoning, risk, or document length demand it",
  order: 4,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "theory",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-4-cover.webp",
        imageAlt: "Dial between fast and thorough modes",
        title: "Fast Pass vs Deep Pass",
        subtitle: "Same workflow discipline; different horsepower per step",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Two Layers in Every Chain",
        paragraphs: [
          "**Fast pass** — Cheap mentally and often computationally: classify, outline, reformat, generate first guesses, compress a thread.",
          "**Deep pass** — Where mistakes are expensive: multi-step reasoning, policy-sensitive advice, long PDFs, code you will ship, executive narrative.",
          "",
          "Module 9 assumes you already know ChatGPT, Claude, Gemini, and Midjourney from Modules 5–8. Here you decide **which step deserves which depth**.",
        ],
      },
    },
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "Heuristics that survive vendor churn",
        insights: [
          "If the step is reversible in under two minutes → fast pass",
          "If wrong output could embarrass you in front of a client → deep pass + human verifier",
          "If context is dozens of pages → bias toward Claude or Gemini with workspace grounding (per your policy)",
          "If the deliverable is visual → Midjourney after the brief is frozen in text",
        ],
      },
    },
    {
      id: "section-3",
      type: "textWithImage",
      content: {
        title: "Exercise: Same Prompt, Two Depths",
        paragraphs: [
          "In **ChatGPT**, run your vendor’s lighter default for Pass A, then rerun with the stronger mode for Pass B.",
          "You should see Pass A useful for structure, Pass B better for nuance. If Pass A is “good enough,” that is your workflow saving time.",
          "Repeat once in **Claude** if you work with long attachments—notice when the attachment-heavy path wins.",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-4-inline-1.webp",
        imageAlt: "Two monitors comparing draft quality",
      },
    },
    {
      id: "section-4",
      type: "quickPrompt",
      content: {
        heading: "Starter comparison prompt",
        description: "Paste into lighter mode, capture output, then rerun in stronger mode.",
        promptText:
          "Summarize the trade-offs between fast and deep AI passes for compliance-heavy emails. Three bullets, one sentence each, then one sentence on when legal review is mandatory.",
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Open ChatGPT",
        task: "Run the comparison twice with different model tiers",
        feature: "Model picker inside one vendor",
        tip: "Name your chat “Fast vs deep — Module 9” so you can find the transcript",
      },
    },
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Document your defaults",
        purpose: "Write down which mode you use for scan vs deepen inside each vendor you pay for.",
        instructions: [
          "Run the starter prompt twice in ChatGPT (light vs strong)",
          "Optionally run once in Claude if you use attachments",
          "Record which output you would ship with minimal edits",
        ],
        deliverable: "Note with two bullets: “Scan default” / “Deep default” per vendor",
        estimatedTime: "10 minutes",
        starterPrompt: "Use the starter comparison prompt above.",
        successCriteria: [
          "At least one observed quality jump from light to strong mode",
          "Explicit note on when you stop cheap passes and call a human",
        ],
      },
    },
    {
      id: "section-10",
      type: "completion",
      content: {
        title: "Routing Within a Vendor",
        description:
          "You can now separate fast pass from deep pass without memorizing chip marketing. Next lesson stretches the same idea across harder tasks.",
        xpReward: 100,
        buttonText: "Continue",
      },
    },
  ],
};
