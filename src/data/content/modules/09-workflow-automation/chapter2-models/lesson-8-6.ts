/**
 * Lesson 8.6: Routing Framework (ChatGPT · Claude · Gemini · Midjourney)
 *
 * CHAPTER: 2 - Routing & Capability
 * PURPOSE: Module 9 explicit mapping from task shape → tool.
 */

import type { Lesson } from "@/types/content";

export const lesson_8_6: Lesson = {
  id: "lesson-8-6",
  chapterId: "ch8-2-models",
  moduleId: "09-workflow-automation",
  title: "Routing Framework (Four Core Tools)",
  description:
    "Pick the lead tool for each step using the syllabus map: ChatGPT, Claude, Gemini, Midjourney",
  order: 6,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "theory",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-6-cover.webp",
        imageAlt: "Four-path decision diagram",
        title: "Routing Framework (Four Core Tools)",
        subtitle: "If the step is wrong, every automation you bolt on later misfires",
      },
    },
    {
      id: "section-1",
      type: "textWithBullets",
      content: {
        title: "Default lead tools by job shape",
        paragraphs: [
          "These defaults come straight from the mastery-path curriculum map (Modules 5–8). Adjust for your employer’s approvals, not for random internet hype.",
        ],
        bullets: [
          "**ChatGPT (Module 5)** —Generalist brainstorming, drafting, rewrites, role-play critiques.",
          "**Claude (Module 6)** —Long documents, careful reasoning, research synthesis, nuanced tone control.",
          "**Gemini (Module 7)** —Google Workspace-heavy workflows, multimodal inputs your policy allows.",
          "**Midjourney (Module 8)** —Marketing visuals when you are not a graphic designer; needs frozen creative briefs.",
        ],
      },
    },
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "If you are stuck choosing",
        insights: [
          "Need breadth and speed → ChatGPT first",
          "Attachment >15 pages → Claude or policy-approved workspace flow",
          "Live Sheet/Docs/Slides coupling → Gemini",
          "Final pixel output → Midjourney after copy approval",
        ],
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Automation Comes After Routing",
        paragraphs: [
          "Zapier, Make, or custom scripts only **encode** decisions you already trust. Module 9 asks you to manual-run the chain a few times, then automate the boring middle steps.",
          "",
          "Never automate a step you cannot verify manually yet—that is how hallucinations scale.",
        ],
      },
    },
    {
      id: "section-4",
      type: "quickPrompt",
      content: {
        heading: "Routing exercise",
        description: "Pick a live assignment and force a decision per step.",
        promptText:
          "I am building [deliverable]. Steps: research, outline, draft, visual concept, final polish. For each step, choose ChatGPT, Claude, Gemini, or Midjourney and cite one sentence why.",
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "general",
        action: "Open your notes",
        task: "Save the routing table you produce",
        feature: "Explainable cold-start style decisions",
        tip: "Match official curriculum wording when documenting for stakeholders",
      },
    },
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Publish a one-page router",
        purpose: "Give yourself a cheat sheet you can paste into project kickoffs.",
        instructions: [
          "Answer the routing exercise for two different deliverables",
          "Highlight where both projects share the same lead tool",
          "Mark any step your IT org blocks",
        ],
        deliverable: "One-page doc or note titled “Core tool router”",
        estimatedTime: "12 minutes",
        starterPrompt: "Use the routing exercise prompt.",
        successCriteria: [
          "Every step names exactly one lead tool",
          "At least three steps differ between the two deliverables",
        ],
      },
    },
    {
      id: "section-10",
      type: "completion",
      content: {
        title: "Router Ready",
        description:
          "You can justify each step with consistent vocabulary. Next you will stress-test choices empirically.",
        xpReward: 100,
        buttonText: "Continue",
      },
    },
  ],
};
