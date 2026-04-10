/**
 * Lesson 8.2: Why Tool Chains Beat One-Off Prompts
 *
 * CHAPTER: 1 - Getting Started
 * PURPOSE: Curriculum-aligned framing—reducing rework and context loss when moving
 * between ChatGPT, Claude, Gemini, and Midjourney.
 */

import type { Lesson } from "@/types/content";

export const lesson_8_2: Lesson = {
  id: "lesson-8-2",
  chapterId: "ch8-1-essentials",
  moduleId: "09-workflow-automation",
  title: "Why Tool Chains Beat One-Off Prompts",
  description:
    "Reduce hidden rework by naming steps, owners, and handoff artifacts before you prompt",
  order: 2,
  estimatedMinutes: 12,
  xpReward: 100,
  format: "article",
  lessonCategory: "theory",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-2-cover.webp",
        imageAlt: "Linked steps on a timeline",
        title: "Why Tool Chains Beat One-Off Prompts",
        subtitle:
          "Professionals lose time to unclear handoffs—not because models are “too slow.”",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Hidden Cost: Silent Rework",
        paragraphs: [
          "A single flashy answer rarely finishes the job. The expensive part is discovering—three drafts later—that your **research pass never made it into the brief**, or that **legal tone needed Claude**, not the tool you started with.",
          "",
          "Workflow thinking forces you to write down: **inputs**, **owner tool**, **output artifact**, and **verification**. That list is how you avoid repeating entire steps because memory failed.",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Chain, Don’t Hop",
        paragraphs: [
          "**Hopping** is opening random tools until something feels okay. **Chaining** means each step consumes the last artifact on purpose.",
          "",
          "Example: Gemini drafts a grounded outline from Workspace notes → Claude expands reasoning on the two riskiest bullets → Midjourney produces three visual metaphors → ChatGPT formats the client email that references only approved lines.",
          "",
          "Notice verification: someone (you) decides which bullets are risky before Claude expands them. That judgement is the platform view of AI literacy—not blindly accepting first outputs.",
        ],
      },
    },
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Minimum viable metadata for each step",
        insights: [
          "Owner tool (ChatGPT, Claude, Gemini, Midjourney, or automation)",
          "Input artifact (doc name, pasted text, image brief)",
          "Output artifact (outline, table, slide copy, render)",
          "Verifier (you, peer, policy checklist)",
        ],
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "When Fast Turns Still Matter",
        paragraphs: [
          "Latency still shapes habit: long waits encourage tab-switching and loss of focus. But Module 9 does not depend on any single chip story—**predictable** steps beat **hypothetical milliseconds**.",
          "",
          "If a vendor is sluggish one afternoon, finish the step elsewhere and note the exception. The architecture of your workflow survives vendor variance.",
        ],
      },
    },
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Collaboration vs Transactional Use",
        paragraphs: [
          "When handoffs are explicit, AI feels like a teammate with clear responsibilities. When they are implicit, AI feels like a slot machine: you keep pulling until something “looks fine.”",
          "",
          "Professionals need the teammate version. That is why Module 9 spends time on templates, checkpoints, and automation—so habits stay respectable under work pressure.",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-2-inline-1.webp",
        imageAlt: "Team whiteboard with workflow sketch",
      },
    },
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "Practice: Name the chain",
        description: "Paste a real project. You are not asking for prose yet—only structure.",
        promptText:
          "For [project], list 4 steps. For each step give: tool (ChatGPT/Claude/Gemini/Midjourney), input, output, verifier. One line per step.",
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "general",
        action: "Use whichever chat tool is open",
        task: "Run the practice chain on a live assignment",
        feature: "Structured planning before generation",
        tip: "If you cannot verify a step, mark it “human-only” instead of pretending AI covers it",
      },
    },
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Save a reusable template",
        purpose: "Create a snippet you can paste at the start of any Module 9 project.",
        instructions: [
          "Copy the practice prompt and answer it twice for two different assignments",
          "Store the better version in notes or a doc pinned for Module 9",
          "Share it with a teammate if policy allows—feedback surfaces blind spots",
        ],
        deliverable: "Named template file or note titled “Workflow handoff template”",
        estimatedTime: "8 minutes",
        starterPrompt: "Use the Practice: Name the chain prompt.",
        successCriteria: [
          "Every step has an explicit verifier",
          "At least two different tools appear across the chain",
        ],
      },
    },
    {
      id: "section-8",
      type: "completion",
      content: {
        title: "Chains Before Vibes",
        description:
          "You can now explain why silent rework happens and how metadata prevents it. Next lesson moves into concrete chat patterns inside those steps.",
        xpReward: 100,
        buttonText: "Hands-on patterns",
      },
    },
  ],
};
