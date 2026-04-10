/**
 * Lesson 7.9: Google Docs — Your AI Writing Partner
 *
 * CHAPTER: 3 - Gemini + Google Workspace
 * LESSON: 2 of 5 - AI-Powered Document Creation
 *
 * DURATION: 15 minutes (practical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Master AI writing assistance in Google Docs
 *
 * KEY RESPONSIBILITIES:
 * - Teach "Help me write" and other Docs AI features
 * - Show rewrite and refinement workflows
 * - Provide practical examples for professional documents
 *
 * TARGET AUDIENCE: 40-55+ non-technical professionals
 */

import type { Lesson } from "@/types/content";

export const lesson_7_9: Lesson = {
  id: "lesson-7-9",
  chapterId: "ch7-3-workspace",
  moduleId: "07-tools-gemini",
  title: "Google Docs — Your AI Writing Partner",
  description: "Learn how Gemini can help you write, rewrite, and refine documents in Google Docs",
  order: 2,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-9-cover.webp",
        imageAlt: "Writing and document editing on a laptop",
        title: "Google Docs — Your AI Writing Partner",
        subtitle: "From blank page to polished document",
      },
    },
    // ===========================================================================
    // SECTION 1: The Writing Challenge
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why Writing Feels Hard",
        paragraphs: [
          "Most professionals write constantly—reports, proposals, emails, documentation. Yet the blank page still intimidates. You know what you want to say, but putting it into words takes time and mental energy.",
          "",
          "Gemini doesn't replace your expertise. Instead, it handles the heavy lifting of getting words on the page. You provide the ideas and direction; AI provides the draft. Then you refine until it's perfect.",
          "",
          "Think of it as having a tireless writing assistant who never gets writer's block.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Help Me Write
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: '"Help Me Write" — From Blank to Draft',
        paragraphs: [
          'The "Help me write" feature generates complete drafts from your instructions, transforming the often intimidating blank page into a useful starting point. To use it effectively, open Google Docs and start a new document. Look for the sparkle icon in the toolbar, which represents the AI assistance features. Clicking this icon opens a prompt box where you describe what you need.',
          "",
          "The key to getting great results lies in being specific about your topic, audience, and desired length. A vague request like 'write a report' produces generic content. But a detailed request like 'write a project status update for department heads, covering progress on the website redesign, one challenge we solved, and next steps, about 300 words in a confident but realistic tone' yields a focused, useful draft.",
          "",
          "Once Gemini generates your draft, remember that it's a starting point, not the finish line. Review the content carefully, add your specific details and examples, and refine the language to match your voice. The magic of AI-assisted writing comes from this collaboration between your expertise and Gemini's ability to quickly generate structured content.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Scenario - Writing Examples
    // ===========================================================================
    {
      id: "section-3",
      type: "scenarioCard",
      content: {
        title: "Real-World Writing Scenario",
        situation:
          "You need to write a project status update for the quarterly review. Your audience is department heads who want concise, confident updates.",
        challenge:
          "You've been putting it off because starting is the hardest part. You have all the information but organizing it feels overwhelming.",
        context: "This type of document is routine but time-consuming.",
        outcome:
          "Using 'Help me write' with the prompt: 'Write a project status update for the quarterly review. Audience: department heads. Include: progress summary, one challenge we solved, next steps, and a timeline. Tone: confident but realistic. Length: 300 words.' In 30 seconds, you have a structured draft that you customize with your specific data.",
      },
    },
    // ===========================================================================
    // SECTION 4: Rewrite Feature
    // ===========================================================================
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Rewrite: Transform Existing Text",
        paragraphs: [
          "Already have text but it's not quite right? Select any text in your document and use Gemini's rewrite options.",
          "",
          "**Formalize** — Make casual text more professional for formal audiences",
          "",
          "**Shorten** — Condense verbose paragraphs into concise statements",
          "",
          "**Expand** — Add detail and context to brief points",
          "",
          "**Rephrase** — Say the same thing differently for clarity or variety",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-9-inline-1.webp",
        imageAlt: "Document editing and revision process",
      },
    },
    // ===========================================================================
    // SECTION 5: Key Capabilities - HighlightCard
    // ===========================================================================
    {
      id: "section-5",
      type: "highlightCard",
      content: {
        heading: "Docs AI Capabilities",
        insights: [
          "Generate first drafts from brief descriptions",
          "Rewrite text in different tones and lengths",
          "Create executive summaries from longer content",
          "Expand bullet points into full paragraphs",
          "Proofread and suggest improvements",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Workflow Example
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "A Complete Writing Workflow",
        paragraphs: [
          "Here's how a professional might use Docs AI from start to finish:",
          "",
          '**Step 1:** Use "Help me write" to generate a first draft from your outline or notes',
          "",
          "**Step 2:** Review the draft and identify sections that need more detail or different focus",
          "",
          "**Step 3:** Select weak paragraphs and use Rewrite to improve them",
          "",
          "**Step 4:** Add your specific examples, data, and personal insights",
          "",
          "**Step 5:** Use Rewrite one more time to ensure consistent tone throughout",
          "",
          "The result: A polished document in half the time it would normally take.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Tool Reference - Gemini
    // ===========================================================================
    {
      id: "section-7",
      type: "toolReference",
      content: {
        tool: "gemini",
        action: "For this lesson",
        task: 'Open Google Docs and look for the "Help me write" sparkle icon in the toolbar. You can also select existing text to see rewrite options.',
        feature: "Help me write & Rewrite",
        tip: "The more specific your prompt (audience, tone, length), the better your first draft will be.",
      },
    },
    // ===========================================================================
    // SECTION 8: Quick Prompt
    // ===========================================================================
    {
      id: "section-8",
      type: "quickPrompt",
      content: {
        heading: "Try It Now: Create a Document",
        description: "Open Google Docs and create a real document you need using AI assistance.",
        promptText:
          "In a new Google Doc, click 'Help me write' and try: 'Write a [document type: meeting notes / project summary / proposal] for [specific purpose]. Include [key points]. Tone: [professional / casual / formal]. Length: [desired length].'",
      },
    },
    // ===========================================================================
    // SECTION 9: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create a Document with AI Assistance",
        purpose:
          "Experience the full Docs AI workflow by creating a real document you need, from blank page to polished draft.",
        instructions: [
          "Open Google Docs and start a new document",
          "Use 'Help me write' with a specific prompt for a document you actually need",
          "Review the generated draft and identify 2-3 sections to improve",
          "Use the Rewrite feature on at least one paragraph to change tone or length",
          "Add your own specific examples, data, or personal insights",
        ],
        deliverable:
          "One complete document created with AI assistance, customized with your personal input",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "In a new Google Doc, click 'Help me write' and try: 'Write a [document type: meeting notes / project summary / proposal] for [specific purpose]. Include [key points]. Tone: [professional / casual / formal]. Length: [desired length].'",
        successCriteria: [
          "You have generated a complete first draft using 'Help me write'",
          "You have used Rewrite on at least one section",
          "You have added your own specific content (examples, data, insights)",
          "The document is ready for actual use or sharing",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: Completion
    // ===========================================================================
    {
      id: "section-10",
      type: "completion",
      content: {
        title: "Docs Writing Partner Activated",
        description:
          "You now know how to use Gemini in Google Docs to generate drafts, rewrite text, and create polished documents faster. Your writing productivity just leveled up.",
        xpReward: 100,
        buttonText: "Complete Docs Mastery",
      },
    },
  ],
};
