/**
 * Lesson 8.27: Time, Money, and Subscriptions
 *
 * CHAPTER: 8 - Best Practices & Implementation
 * PURPOSE: Align spend with product pricing (weekly / monthly / lifetime)
 * and emphasize ROI in hours—not exotic token tiers tied to one vendor.
 */

import type { Lesson } from "@/types/content";

export const lesson_8_27: Lesson = {
  id: "lesson-8-27",
  chapterId: "ch8-8-best-practices",
  moduleId: "09-workflow-automation",
  title: "Time, Money, and Subscriptions",
  description:
    "Budget ChatGPT, Claude, Gemini, and Midjourney like any professional toolkit—track hours saved, not hype",
  order: 27,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "theory",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-27-cover.webp",
        imageAlt: "Calculator and laptop",
        title: "Time, Money, and Subscriptions",
        subtitle:
          "Microlearning plus paid access is common; treat AI subscriptions the same way—prove value weekly",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "What You Are Really Buying",
        paragraphs: [
          "Subscriptions to ChatGPT Plus, Claude Pro, Gemini Advanced, or Midjourney buy **throughput and clarity**, not magic.",
          "",
          "Your finance question is always: *Did this tier remove a recurring bottleneck I can name?* If not, downgrade or consolidate.",
        ],
      },
    },
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "Baseline hygiene",
        insights: [
          "Start new chats when the topic shifts—long threads inflate cost and confusion",
          "Paste only the slice of a document each step needs",
          "Keep a manual verify list for numbers, citations, and client promises",
          "Prefer org-approved accounts; personal shortcuts create compliance debt",
        ],
      },
    },
    {
      id: "section-3",
      type: "textWithImage",
      content: {
        title: "ROI in Minutes",
        paragraphs: [
          "Estimate minutes saved per week on three recurring tasks (status email, slide cleanup, research memo). Multiply by 48 working weeks and your loaded hourly cost. Compare to the sum of subscriptions you actually need for those tasks.",
          "",
          "This matches the pattern that modest, specific productivity claims outperform vague “10× transformation” messaging.",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-27-inline-1.webp",
        imageAlt: "Simple spreadsheet sketch",
      },
    },
    {
      id: "section-4",
      type: "quickPrompt",
      content: {
        heading: "ROI prompt",
        description: "Run in any chat tool; substitute your real numbers.",
        promptText:
          "Task A saves ~__ minutes/week, Task B ~__, Task C ~__. My approximate loaded hourly cost is $__. Aggregate annual hours saved × cost, then compare to $__/month in AI subscriptions I pay. Flag if any task should be automated instead of chatted.",
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "general",
        action: "Open billing pages you actually use",
        task: "Cancel duplicate tools that duplicate the same layer",
        feature: "Portfolio view of spend",
        tip: "If two tools both claim “general chat,” keep the one your IT team supports",
      },
    },
    {
      id: "section-actionable",
      type: "actionableTask",
      content: {
        title: "One-page budget note",
        purpose: "Give yourself permission to spend—or cut—with evidence.",
        instructions: [
          "List each paid AI line item",
          "Tie each line item to a workflow step from Module 9",
          "Mark optional vs required for the next 30 days",
        ],
        deliverable: "Note titled “AI stack budget — core tools”",
        estimatedTime: "10 minutes",
        starterPrompt: "Use the ROI prompt.",
        successCriteria: [
          "Every subscription names at least one workflow step",
          "At least one optional line flagged for cancellation or trial pause",
        ],
      },
    },
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Spend like an operator",
        description:
          "You can justify subscriptions with time math and modest, specific claims—next up: troubleshooting when chains break.",
        xpReward: 100,
        buttonText: "Continue",
      },
    },
  ],
};
