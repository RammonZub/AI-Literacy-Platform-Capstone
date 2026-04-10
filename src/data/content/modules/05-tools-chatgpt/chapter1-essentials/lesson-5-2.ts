/**
 * Lesson 5.2: Your First Powerful Prompts
 *
 * CHAPTER: 1 - ChatGPT Essentials
 * LESSON: 2 of 5 - Moving Beyond Basic Requests
 *
 * DURATION: 15 minutes
 * XP REWARD: 125 XP
 *
 * PURPOSE: Transform users from vague prompters to effective communicators
 *
 * KEY CONCEPTS:
 * - Vague prompts produce generic results
 * - Specific prompts activate targeted patterns
 * - Context + Goal + Constraints formula
 * - Iteration as a natural part of process
 *
 * DESIGN NOTES:
 * - Real examples before and after
 * - Show transformation, don't just explain
 * - Emphasize that iteration is normal
 * - Practical exercise with clear before/after
 */

import type { Lesson } from "@/types/content";

export const lesson_5_2: Lesson = {
  id: "lesson-5-2",
  chapterId: "ch5-1-essentials",
  moduleId: "05-tools-chatgpt",
  lessonCategory: "tutorial", // Skill-building tutorial
  title: "Your First Powerful Prompts",
  description: "Transform vague requests into prompts that get exactly what you need",
  order: 2,
  estimatedMinutes: 15,
  xpReward: 125,
  format: "article",
  sections: [
    // ===========================================================================
    // HERO IMAGE: Lesson opener
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-2-cover.webp",
        imageAlt: "Person typing on keyboard writing prompts",
        title: "Your First Powerful Prompts",
        subtitle: "Transform vague requests into prompts that get exactly what you need",
      },
    },
    // ===========================================================================
    // SECTION 1: The Problem with Vague Prompts
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Prompt Gap",
        paragraphs: [
          "Most people's first interaction with ChatGPT goes something like this: \"Help me write an email.\" And they get back an email. But it's generic, forgettable, and could work for anyone. The problem? The prompt was vague.",
          "",
          "When you give ChatGPT no context about who you are or your situation, it has to guess. When you provide no clear goal for what you want the email to achieve, it defaults to safe, middle-of-the-road content. And when you offer no constraints about what to avoid, you get everything—including things you didn't want.",
          "",
          'This is the prompt gap: the distance between what you meant and what ChatGPT understood. Most users blame the AI for generic responses, but the real culprit is usually underspecified input. Think of it like hiring a contractor—if you say "fix my kitchen" without details, you\'ll get a very different result than if you specify exactly what needs changing.',
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: The Formula That Works
    // ===========================================================================
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "The Formula: Context + Goal + Constraints",
        insights: [
          "Context: Who are you? What's your situation?",
          "Goal: What do you want to happen?",
          "Constraints: What should ChatGPT avoid or include?",
          "This simple structure transforms vague requests into powerful prompts",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: See the Difference
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "See the Difference",
        paragraphs: [
          'Let\'s watch the same request transform with the formula. Here\'s the vague version: "Write a sales email for my software." This prompt gives ChatGPT almost nothing to work with. What software? Who uses it? Why should they care? The result will be a generic template filled with placeholder phrases like "revolutionary solution" and "cutting-edge technology."',
          "",
          "Now here's the transformed version: \"Write a sales email for my project management software. Target: freelance designers who struggle with missed deadlines. Main benefit: never drop a client deadline again. Tone: professional but friendly. Length: under 200 words. Call-to-action: request a 15-minute demo.\" Notice how every sentence gives ChatGPT specific direction. The target audience is defined, the core benefit is clear, the tone is specified, and there's even a length constraint. This prompt will generate an email that speaks directly to freelance designers' pain points and offers a concrete next step.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3.5: Writing Better Prompts Visual
    // ===========================================================================
    {
      id: "section-3-5",
      type: "textWithImage",
      content: {
        title: "The Art of Prompt Engineering",
        paragraphs: [
          "Great prompts are crafted, not discovered. Each word you add shapes the response you receive. Think of it as learning a new language—the language of AI communication.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-2-inline-1.webp",
        imageAlt: "Writing and keyboard technology communication",
      },
    },
    // ===========================================================================
    // SECTION 4: The Prompt Practice
    // ===========================================================================
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "Prompts Don't Need to Be Perfect",
        insights: [
          "Your first attempt won't be perfect. That's not just okay—it's expected.",
          "Think of prompting as a conversation, not a one-shot command.",
          "You'll iterate, refine, and get better with practice.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Why Prompts Fail
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Why Prompts Fail",
        paragraphs: [
          "When ChatGPT doesn't give you what you want, there's usually one of three issues at play. First, missing context: you didn't say who you are or what you're doing. Without this background, ChatGPT has to make assumptions, and those assumptions are often wrong. It might write in a tone that doesn't match your role or include details irrelevant to your situation.",
          "",
          "Second, an unclear goal: ChatGPT doesn't know what outcome you want. Are you trying to inform, persuade, entertain, or analyze? Without this direction, you get content that serves no clear purpose. It might be well-written, but it won't serve your actual need.",
          "",
          "Third, no constraints: ChatGPT doesn't know what it should avoid. This leads to responses that include everything—relevant or not. You might get a five-paragraph essay when you needed three sentences, or technical jargon when you wanted plain language. Constraints aren't limitations; they're guidance that focuses the output on exactly what matters to you.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Practice Transforming
    // ===========================================================================
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "Try It: Transform Your Own Prompt",
        description:
          "Think of something you need ChatGPT to help with this week. Write your first attempt—however vague. Then rewrite it using Context + Goal + Constraints.",
        promptText:
          "I need help with [task]. Context: I am [your situation]. Goal: [what you want to achieve]. Constraints: [what to avoid/include].",
      },
    },
    // ===========================================================================
    // SECTION 6.5: Tool Reference - ChatGPT
    // ===========================================================================
    {
      id: "section-6-5",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "For this exercise",
        task: "Open ChatGPT and test your transformed prompt. Notice how the response quality improves.",
        feature: "New conversation",
        tip: "Save prompts that work well in a document for future reference",
      },
    },
    // ===========================================================================
    // SECTION 7: Actionable Task (Skill-based lesson - keep task)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Apply the Formula to Real Work",
        purpose:
          "Transforming a vague prompt into a structured one demonstrates the immediate power of the Context + Goal + Constraints formula. This becomes your first prompt library entry.",
        instructions: [
          "Choose one task from your actual work this week that involves ChatGPT",
          "Write the prompt you would normally use (the vague version)",
          "Rewrite it using the Context + Goal + Constraints formula",
          "Test both versions in ChatGPT and compare the quality of responses",
        ],
        deliverable: "Two versions of the same prompt (vague and structured) with comparison notes",
        estimatedTime: "10 minutes",
        starterPrompt:
          "Context: I am [your role] working on [project/situation]. Goal: I need [specific output]. Constraints: Keep it [length], use [tone] tone, and avoid [what to exclude].",
        successCriteria: [
          "The structured prompt includes all three elements: Context, Goal, and Constraints",
          "You tested both prompts and noticed a difference in response quality",
          "You saved the structured prompt for future use",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Checkpoint (After practical exercise)
    // ===========================================================================
    {
      id: "section-8",
      type: "completion",
      content: {
        title: "Prompt Practice Complete",
        description:
          "You've written your first structured prompt. That's a skill most ChatGPT users never develop. You're already ahead.",
        xpReward: 125,
        buttonText: "Complete Practice",
      },
    },
  ],
};
