/**
 * Lesson 7.6: The Complete 5-Step Prompting Framework
 *
 * CHAPTER: 2 - The 5-Step Prompting Framework
 * LESSON: 1 of 2 - Master Google's signature framework for consistently excellent results
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach the 5-Step Prompting Framework that transforms vague requests into
 * precise, high-quality prompts that consistently deliver excellent results.
 *
 * KEY RESPONSIBILITIES:
 * - Introduce each step of the framework with clear explanations
 * - Provide before/after examples showing transformation
 * - Highlight common mistakes to avoid
 * - Build practical skills through immediate application
 */

import type { Lesson } from "@/types/content";

export const lesson_7_6: Lesson = {
  id: "lesson-7-6",
  chapterId: "ch7-2-prompting",
  moduleId: "07-tools-gemini",
  title: "The Complete 5-Step Prompting Framework",
  description:
    "Transform vague requests into precise prompts that consistently deliver excellent results",
  order: 6,
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
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-6-cover.webp",
        imageAlt: "Framework and process documentation",
        title: "The Complete 5-Step Prompting Framework",
        subtitle: "Your recipe for consistently excellent AI results",
      },
    },
    // ===========================================================================
    // SECTION 1: Why This Matters
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        paragraphs: [
          "What separates people who get amazing results from AI from those who get mediocre ones? It's not luck or technical skill. It's a systematic approach to crafting prompts.",
          "",
          "Google developed a simple but powerful framework that transforms vague requests into precise instructions. Once you learn it, you'll never go back to throwing random questions at AI again.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: The Framework Analogy
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Why a Framework Changes Everything",
        paragraphs: [
          "Most people use AI like a magic eight ball: they ask vague questions and hope for good answers. This works occasionally, but leads to inconsistent, often disappointing results.",
          "",
          "The 5-Step Prompting Framework is different. It's like having a recipe for success: follow the steps, and you'll get predictable, high-quality outcomes every time.",
          "",
          "Think of it this way: Would you rather say 'cook something' or 'make a 15-minute pasta dish with garlic, olive oil, and parmesan for two people'? One gives you mystery stew. The other gives you exactly what you wanted.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: The Framework Overview
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "The 5 Steps at a Glance",
        insights: [
          "Step 1: Define the Task - Use specific verbs like Analyze, Compare, Summarize, Draft",
          "Step 2: Provide Context - Who's the audience? What's the purpose? Any constraints?",
          "Step 3: Set Tone & Style - Professional or casual? How long? Formatting?",
          "Step 4: Include Examples - Show what good looks like (optional but powerful)",
          "Step 5: Iterate & Refine - First draft, get feedback, improve",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Step 1 Deep Dive
    // ===========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Step 1: Define the Task with Action Verbs",
        paragraphs: [
          "The biggest mistake people make? Being vague about what they want. 'Help me with marketing' could mean anything. 'Write a social media post for Instagram' is specific.",
          "",
          "**Power verbs that work well with Gemini:**",
          "- **Analyze** - Break down complex information",
          "- **Compare** - Show differences and similarities",
          "- **Summarize** - Condense to key points",
          "- **Draft** - Create first version of content",
          "- **Explain** - Make complex topics simple",
          "- **List** - Organize items clearly",
          "- **Rewrite** - Transform existing content",
          "- **Brainstorm** - Generate creative ideas",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Step 2 Deep Dive
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Step 2: Provide Context",
        paragraphs: [
          "Context is the secret sauce. Gemini can't read your mind, but it can use information you provide to tailor responses perfectly.",
          "",
          "**The three W's of context:**",
          "",
          "**WHO** is this for? A CEO needs different language than a new employee. A customer needs different details than a colleague.",
          "",
          "**WHY** do you need this? A presentation for a sales pitch is different from one for internal training.",
          "",
          "**WHAT** constraints exist? Word limits, deadlines, compliance requirements, brand guidelines—these all shape the output.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Visual Break - Steps 3-5
    // ===========================================================================
    {
      id: "section-6",
      type: "textWithImage",
      content: {
        title: "Steps 3-5: Style, Examples, and Iteration",
        paragraphs: [
          "The final three steps polish your prompt from good to great. Tone and style ensure the output sounds right. Examples show Gemini exactly what you're looking for. And iteration? That's where the magic happens—because perfect prompts are built, not born.",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-6-inline-1.webp",
        imageAlt: "Steps and ladder progression",
      },
    },
    // ===========================================================================
    // SECTION 7: Before/After Example
    // ===========================================================================
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "Before & After: See the Difference",
        insights: [
          "BEFORE: 'Write about marketing' - Too vague, could be anything from a tweet to a textbook",
          "AFTER: 'Draft a 300-word blog post about social media marketing for small business owners. Use a friendly, encouraging tone. Include: an introduction, 3 practical tips with examples, and a call-to-action at the end.'",
          "The AFTER uses all 5 steps: Task, Context, Tone, Format, and ready for iteration",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Common Mistakes
    // ===========================================================================
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Common Mistakes to Avoid",
        paragraphs: [
          "Even with a solid framework, certain pitfalls consistently undermine prompt quality. The most common mistake is skipping context entirely. When you say 'Write an email' without explaining who the recipient is or what you're trying to accomplish, Gemini has to guess at tone, length, and content. The result is generic and rarely matches your needs.",
          "",
          "Another frequent problem is being too vague about the task itself. 'Help me with this' doesn't give Gemini any direction about what kind of help you want. Are you looking for analysis, drafting, brainstorming, or something else entirely? Without clarity, you get scattered results that require extensive revision.",
          "",
          "Many people also forget to specify the output format they want. If you need bullet points, a table, or a numbered list, say so explicitly. Otherwise, Gemini will choose a format that may not suit your purpose. Finally, perhaps the biggest mistake is giving up after the first attempt. The first draft from AI is rarely perfect. Treat it as a starting point, ask for revisions, and iterate until you get what you need.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: Tool Reference
    // ===========================================================================
    {
      id: "section-9",
      type: "toolReference",
      content: {
        tool: "gemini",
        action: "For practicing the framework",
        task: "Open Gemini and practice building prompts using each step of the framework",
        tip: "Start with Fast Mode for simple prompts, switch to Thinking Mode for complex ones",
      },
    },
    // ===========================================================================
    // SECTION 10: Quick Prompt
    // ===========================================================================
    {
      id: "section-10",
      type: "quickPrompt",
      content: {
        heading: "Try It Now: Your First 5-Step Prompt",
        description:
          "Think of something you need to write for work this week. Apply the framework step by step:",
        promptText:
          "I need you to [TASK: draft/explain/summarize] a [WHAT: email/report/presentation] about [TOPIC]. This is for [CONTEXT: audience and purpose]. Please write it in [TONE: professional/casual/friendly] style and keep it around [LENGTH: word count]. Here's an example of what I'm looking for: [EXAMPLE: optional but helpful].",
      },
    },
    // ===========================================================================
    // SECTION 11: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Transform a Vague Prompt into a 5-Step Prompt",
        purpose:
          "Practice is the only way to internalize the 5-Step Framework. This exercise takes you from a vague idea to a complete, structured prompt.",
        instructions: [
          "Think of something vague you've wanted help with (e.g., 'write about marketing')",
          "Write your vague prompt as a starting point",
          "Apply each step: Task (what action?), Context (who/why?), Tone (how formal?), Format (how long?), Example (optional)",
          "Write your complete 5-Step prompt",
          "Test it in Gemini and compare the result to what you would have gotten from the vague version",
        ],
        deliverable: "One vague prompt transformed into a complete 5-Step prompt, tested in Gemini",
        estimatedTime: "10-12 minutes",
        starterPrompt:
          "I need you to [TASK: draft/explain/summarize] a [WHAT: email/report/presentation] about [TOPIC]. This is for [CONTEXT: audience and purpose]. Please write it in [TONE: professional/casual/friendly] style and keep it around [LENGTH: word count].",
        successCriteria: [
          "You have identified a vague prompt you might have used before",
          "You have applied all 5 steps to create a structured prompt",
          "You have tested the prompt in Gemini",
          "You can articulate how the structured prompt improved the result",
        ],
      },
    },
    // ===========================================================================
    // SECTION 12: Completion
    // ===========================================================================
    {
      id: "section-12",
      type: "completion",
      content: {
        title: "Framework Mastered",
        description:
          "You've learned the 5-Step Prompting Framework: Task + Context + Tone + Examples + Iterate. This single skill will dramatically improve every interaction you have with Gemini. In the next lesson, you'll learn advanced techniques for complex tasks.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
