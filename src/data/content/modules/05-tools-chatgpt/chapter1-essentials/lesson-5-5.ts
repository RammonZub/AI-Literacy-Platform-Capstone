/**
 * Lesson 5.5: Practice: From Weak to Strong Prompts
 *
 * CHAPTER: 1 - ChatGPT Essentials
 * LESSON: 5 of 5 - Applied Practice
 *
 * DURATION: 15 minutes
 * XP REWARD: 150 XP
 *
 * PURPOSE: Hands-on practice transforming weak prompts into strong ones
 *
 * KEY CONCEPTS:
 * - Recognizing weak prompts (vague, abstract, missing context)
 * - Applying Context + Goal + Constraints formula
 * - Using specificity and patterns
 * - Iterating toward excellence
 *
 * DESIGN NOTES:
 * - Before/after examples are real and relatable
 * - Progressive difficulty (easy wins to complex transformations)
 * - Encourages iteration, not perfection
 * - Chapter 1 checkpoint - should feel like an accomplishment
 */

import type { Lesson } from "@/types/content";

export const lesson_5_5: Lesson = {
  id: "lesson-5-5",
  chapterId: "ch5-1-essentials",
  moduleId: "05-tools-chatgpt",
  lessonCategory: "tutorial", // Skill-building tutorial with practice
  title: "Practice: From Weak to Strong Prompts",
  description: "Transform real prompts and build skills you'll use every day",
  order: 5,
  estimatedMinutes: 15,
  xpReward: 150,
  format: "article",
  sections: [
    // ===========================================================================
    // HERO IMAGE: Lesson opener
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-5-cover.webp",
        imageAlt: "Tools and workspace interface switch",
        title: "Practice: From Weak to Strong Prompts",
        subtitle: "Transform real prompts and build skills you'll use every day",
      },
    },
    // ===========================================================================
    // SECTION 1: Welcome to Prompt Practice
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Welcome to Prompt Practice",
        paragraphs: [
          "You've learned the formula, the importance of specificity, and four prompting patterns.",
          "",
          "Now let's put it all together with real examples.",
          "",
          "You'll see weak prompts and their strong transformations. Then you'll practice on your own.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Example 1 - Email to Client
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Example 1: Email to Client",
        paragraphs: [
          "Here's a weak prompt: \"Write an email to my client about a delay.\" The problems are obvious when you look closer. There's no context about what kind of delay, no goal for what the client should do, and no constraints about tone or details. ChatGPT will produce something generic because it has no choice.",
          "",
          'Now the strong version: "Write an email to my web design client about a 2-day delay on their homepage mockup. Explain it\'s due to unexpected client feedback on an earlier phase. Emphasize that the final result will be better. Offer a 10% discount on their next project. Tone: transparent but reassuring. Under 150 words."',
          "",
          "What changed? Everything. Context was added (web design, mockup delay), the goal became clear (client stays informed and happy), and constraints were set (tone, length). The transformation took thirty seconds to write but produces an email ready to send with minimal edits.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Example 2 - Meeting Agenda
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Example 2: Meeting Agenda",
        paragraphs: [
          "Here's a weak prompt: \"Create a meeting agenda.\" The problems are immediate. No topic, no participants, no goals, no time constraints. ChatGPT will generate a generic template that you'll have to heavily customize anyway, defeating the purpose of using AI.",
          "",
          'Now the strong version: "Create a 60-minute meeting agenda for a project kickoff with 4 people: me (project manager), 2 developers, and 1 client representative. Goals: align on project scope, establish timeline, and assign initial tasks. Include time allocations for each section. Format: bullet points with time estimates."',
          "",
          "What changed? Context was added (participants, project type), goals became explicit (alignment, timeline, assignments), and constraints were clear (60 minutes, format). This prompt produces an agenda you can use immediately, not a template you have to rebuild from scratch.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Example 3 - Research Request
    // ===========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Example 3: Research Request",
        paragraphs: [
          "Here's a weak prompt: \"Research project management tools.\" The problems are fundamental. No focus, no criteria, no use case. You'll get a laundry list of tools with no way to evaluate which ones fit your needs. It's more overwhelming than helpful.",
          "",
          'Now the strong version: "Act as a software advisor. Research project management tools for freelance designers. Criteria: must be under $20/month, include client collaboration features, and work on mobile. Compare the top 3 options. For each, include: price, key features, and best-for situations. Present as a table."',
          "",
          "What changed? A role was added (advisor), context was specified (freelance designers), the goal was clear (compare tools), and constraints were explicit (price, features, mobile, format). This prompt produces a focused comparison table that helps you make a decision, not a list that requires more research to evaluate.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: The Pattern You're Seeing
    // ===========================================================================
    {
      id: "section-5",
      type: "highlightCard",
      content: {
        heading: "The Pattern You're Seeing",
        insights: [
          "Every strong prompt follows the same transformation: Add context. Clarify the goal. Set constraints.",
          "That's it. Weak prompts aren't bad—they're just incomplete.",
          "Strong prompts complete the picture.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5.5: Transformation Journey Visual
    // ===========================================================================
    {
      id: "section-5-5",
      type: "textWithImage",
      content: {
        title: "The Transformation Journey",
        paragraphs: [
          "Every prompt you write is a step toward mastery. The gap between weak and strong is smaller than you think—it's just context, goal, and constraints applied consistently.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-5-inline-1.webp",
        imageAlt: "Team collaboration and learning workspace",
      },
    },
    // ===========================================================================
    // SECTION 6: Your Turn - Transform Three Prompts
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Your Turn: Transform Three Prompts",
        paragraphs: [
          "Choose three tasks from your actual work—things you might ask ChatGPT to help with this week.",
          "",
          "For each:",
          "",
          "1. Write a weak prompt (what you'd normally say)",
          "",
          "2. Transform it using Context + Goal + Constraints",
          "",
          "3. Test both versions in ChatGPT and compare",
          "",
          "Don't worry about perfection. The goal is practice, not mastery.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Quick Prompt
    // ===========================================================================
    {
      id: "section-7",
      type: "quickPrompt",
      content: {
        heading: "Practice: Real-World Prompting",
        description:
          "Think of a specific task you have this week. Write your weak prompt, then transform it. Test both in ChatGPT. Notice the difference in quality and usefulness.",
        promptText:
          "Context: [your situation]. Goal: [what you want]. Constraints: [what to avoid/include]. Please [specific task].",
      },
    },
    // ===========================================================================
    // SECTION 7.5: Tool Reference - ChatGPT
    // ===========================================================================
    {
      id: "section-7-5",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "For this exercise",
        task: "Open ChatGPT and test both your weak and strong prompts. Compare the quality difference.",
        feature: "New conversation",
        tip: 'Keep a "prompt library" document to save your best transformed prompts',
      },
    },
    // ===========================================================================
    // ACTIONABLE TASK: Skill-based lesson - keep task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Three-Task Transformation",
        purpose:
          "Practicing the weak-to-strong transformation on real tasks solidifies the skill and builds your personal prompt library with proven, ready-to-use prompts.",
        instructions: [
          "Write 3 weak prompts for real tasks you have this week (what you'd normally type)",
          "Transform each weak prompt using Context + Goal + Constraints",
          "Test all 6 prompts in ChatGPT (3 weak, 3 strong) and compare results",
          "Save your best transformed prompt - this is your first official prompt library entry",
        ],
        deliverable:
          "A document with 3 weak prompts, 3 transformed strong prompts, and brief comparison notes",
        estimatedTime: "15 minutes",
        starterPrompt:
          "WEAK: [simple vague request]. STRONG: Context: I am [role] working on [project]. Goal: I need [specific output]. Constraints: [tone, length, format, things to avoid].",
        successCriteria: [
          "All 3 transformations include Context, Goal, AND Constraints",
          "You tested both versions and can articulate the difference",
          "Your best prompt is saved in a dedicated prompt library document",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Chapter Complete Summary
    // ===========================================================================
    {
      id: "section-8",
      type: "highlightCard",
      content: {
        heading: "Chapter 1 Complete: What You've Learned",
        insights: [
          "Context + Goal + Constraints: The formula that transforms vague into powerful",
          "Specificity beats length: Precise words, not long explanations",
          "Four patterns: Role-based, Step-by-step, Example-driven, Constraint-based",
          "Patterns combine: Stack them for exponentially better results",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: Completion
    // ===========================================================================
    {
      id: "section-9",
      type: "completion",
      content: {
        title: "Chapter 1 Complete: ChatGPT Essentials",
        description:
          "You've completed the foundation. You understand how to prompt ChatGPT effectively, you've practiced real transformations, and you're ready to move beyond basics.",
        xpReward: 150,
        buttonText: "Complete Chapter 1",
      },
    },
  ],
};
