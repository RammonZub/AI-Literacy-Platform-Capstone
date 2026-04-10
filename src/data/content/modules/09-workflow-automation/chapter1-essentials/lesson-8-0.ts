/**
 * Lesson 8.0: Workflow Mindset & Module Overview
 *
 * CHAPTER: 1 - Getting Started
 * LESSON: 0 of 4 - Foundation Lesson
 *
 * PURPOSE: Frame Module 9 (Workflow and Automation):
 * chaining ChatGPT, Claude, Gemini, and Midjourney for multi-step work—not a
 * separate “fifth tool” course.
 */

import type { Lesson } from "@/types/content";

export const lesson_8_0: Lesson = {
  id: "lesson-8-0",
  chapterId: "ch8-1-essentials",
  moduleId: "09-workflow-automation",
  title: "Workflow Mindset & Module Overview",
  description:
    "Connect the tools from Modules 5–8 into coherent, repeatable professional workflows",
  order: 0,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "theory",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-0-cover.webp",
        imageAlt: "Connected workflow nodes representing multi-step AI projects",
        title: "Workflow Mindset & Module Overview",
        subtitle:
          "Move from “which app is coolest?” to a calm, repeatable way to finish real projects",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "What This Module Is (and Is Not)",
        paragraphs: [
          "Modules 5–8 gave you dedicated practice with **ChatGPT**, **Claude**, **Gemini**, and **Midjourney**. Module 9 is different: it is where those tools stop being separate toys and start behaving like a **single workflow** you can reuse.",
          "",
          "The syllabus describes Module 9 as **Workflow and Automation**: combining AI tools into integrated chains for multi-step projects—research, drafting, visuals, and delivery—instead of treating each tool as a standalone shortcut.",
          "",
          "You are not learning a mystery fifth chat product here. You are learning **routing**, **handoffs**, **automation** (for example Zapier or Make), and **quality checks** so outputs stay accurate and on-brand.",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Why Workflows Matter More Than Raw Speed",
        paragraphs: [
          "Fast replies help, but professionals burn time on a different problem: **rework** caused by unclear steps, wrong tool for the step, or skipping verification.",
          "",
          "A simple chain might look like: **Gemini or ChatGPT** for a fast scan and outline → **Claude** for long-document reasoning → **Midjourney** (when visuals matter) → back to **ChatGPT or Claude** for final packaging. The exact order changes by project; what stays constant is that **each step has a job**.",
          "",
          "Automation extends the same idea: one trigger (new row in a sheet, new email label, form submission) can kick off a predictable sequence so you are not manually copy-pasting between tabs.",
        ],
      },
    },
    {
      id: "section-3",
      type: "textWithImage",
      content: {
        title: "Chat Interface vs Automation",
        paragraphs: [
          "**Chat apps** (browser or mobile) are where you learn, draft, and judge quality. Most lessons assume you are working here.",
          "",
          "**Automation** connects systems: scheduling, CRMs, email, files, and AI endpoints. You will see Zapier/Make-style patterns where they fit Module 9—enough to design responsibly, without assuming you are an engineer.",
          "",
          "Both belong in Module 9 because real adoption happens when chat skills turn into **repeatable workflows** your future self can trust.",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-0-inline-1.webp",
        imageAlt: "Notebook and laptop representing planned work across tools",
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "How the Next Lessons Are Organized",
        paragraphs: [
          "Chapter 1 grounds the mindset and your **four-tool stack**. Later chapters walk through choosing the right tool for each step, building daily and project workflows, combining research and drafting passes, working with longer inputs, connecting systems, and finishing with implementation habits.",
          "",
          "Every exercise is written so you can substitute the vendor you actually pay for—as long as you keep the **role** of each step (scan, deepen, visualize, verify, ship).",
        ],
      },
    },
    {
      id: "section-5",
      type: "highlightCard",
      content: {
        heading: "What You Need",
        insights: [
          "Working logins for the tools you rely on from Modules 5–8 (or equivalents you approve for work)",
          "15–20 minutes per lesson in a real browser session",
          "Willingness to name your workflow steps out loud before prompting",
          "No new hardware assumptions—mobile-friendly habits are fine",
        ],
      },
    },
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "Warm-Up Prompt",
        description:
          "Use any chat tool you already trust. The point is to describe a workflow, not to benchmark latency.",
        promptText:
          "List 4 steps I should follow to turn a rough research question into a one-page brief with a visual concept, using ChatGPT, Claude, Gemini, and Midjourney where each fits best. Keep each step one sentence.",
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "general",
        action: "Open your primary chat tool",
        task: "Run the warm-up prompt and save the step list somewhere you will reuse",
        feature: "Structured handoffs between steps",
        tip: "If you only have one paid account, keep the same step names and substitute tools honestly",
      },
    },
    {
      id: "section-8",
      type: "completion",
      content: {
        title: "Ready for Your Stack Check",
        description:
          "Next, you will confirm access to the four core tools and how you will use each role in chains.",
        xpReward: 100,
        buttonText: "Continue to stack check",
      },
    },
  ],
};
