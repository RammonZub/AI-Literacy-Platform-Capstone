/**
 * Lesson 1.2: How AI Works Without Technical Jargon
 *
 * PURPOSE: Explain how AI works in plain English so learners can use it more confidently
 *
 *
 * DESIGN PHILOSOPHY:
 * - Editorial, not template-y
 * - Real examples (Sarah, Tom - specific people)
 * - Show, don't tell (conversation examples)
 * - Cinematic moments for emphasis
 * - Content over chrome
 *
 * KEY CONCEPTS:
 * - AI is pattern recognition, not knowledge retrieval
 * - Training process and how models learn
 * - Why AI can be both brilliant and wrong
 * - Importance of prompt quality
 * - Different models have different strengths
 *
 * Duration: 20 minutes
 * XP REWARD: 100 points (Base 50 × 1.0 (10-20min) × 1.0 (beginner) + 50 bonus = 100)
 */

import type { Lesson, LessonSection } from "@/types/content";

export const lesson_1_2: Lesson = {
  id: "foundations-2",
  chapterId: "ch1-why-this-matters",
  moduleId: "01-skills-foundations",
  lessonCategory: "theory",
  title: "How AI Works Without Technical Jargon",
  description: "Get the simple explanation you need to use AI more confidently without technical overload.",
  order: 2,
  estimatedMinutes: 20,
  format: "article",
  coverImage: "/images/courses/lessons/modules/brain-memory-and-thinking-neural-network.webp",
  coverTitle: "How AI Works Without Technical Jargon",
  xpReward: 100,
  sections: [
    // ==========================================================================
    // HERO SECTION
    // ==========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/01-skills-foundations/foundations-2-cover.webp",
        imageAlt: "How AI Actually Works",
        title: "How AI Works Without Technical Jargon",
        subtitle:
          "The simple explanation that helps AI feel less mysterious and more usable.",
      },
    },

    // ==========================================================================
    // SECTION 1: Why This Matters
    // ==========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why This Matters",
        paragraphs: [
          "You do not need to understand the engineering to use AI well.",
          "",
          "What matters is understanding the simple idea behind it: AI responds best when you give it enough context, a clear task, and the kind of output you want.",
          "",
          "If you only remember one thing, remember this: better instructions usually lead to better results. That is true here too.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: How AI Learns
    // ==========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "What You're Actually Talking To",
        paragraphs: [
          "Not a search engine. Not a database. Not a calculator.",
          "",
          "You're talking to a tool that has learned patterns from lots of examples of language. It predicts what is likely to be useful next, based on the prompt you give it.",
          "",
          "## The Training Process",
          "",
          "You do not need the full technical story to use it. The simple version is enough:",
          "",
          "**1. It learns from examples** - It sees a huge range of text and picks up patterns.",
          "",
          "**2. It learns patterns** - It notices that certain kinds of questions usually need certain kinds of answers.",
          "",
          "**3. It responds to your prompt** - What you type in shapes what comes back.",
          "",
          "**4. It creates a new answer each time** - That is why good context matters so much.",
        ],
      },
    },

    // ==========================================================================
    // IMAGE BREAK
    // ==========================================================================
    {
      id: "pattern-image",
      type: "textWithImage",
      content: {
        title: "Pattern Recognition vs Knowledge",
        paragraphs: [
          "Databases store facts. AI learns patterns.",
          "",
          '**Database**: "Paris is the capital of France" -> returns a stored fact.',
          "",
          '**AI**: "Describe Paris" -> builds a response from patterns it has seen in examples of language.',
          "",
          "That is why AI can be creative and useful, but still get things wrong if you do not guide it carefully.",
        ],
        image: {
          src: "/images/courses/lessons/modules/neural-network-ai-technology-visualization.webp",
          alt: "AI pattern recognition visualization",
          caption: "AI generates based on patterns, not stored facts",
        },
      },
    },

    // ==========================================================================
    // SECTION 3: The AI Paradox
    // ==========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Brilliant and Stupid: The AI Paradox",
        paragraphs: [
          "AI can be very good at some tasks and very ordinary at others.",
          "",
          "It is great at drafting, summarizing, reorganizing, and giving you a starting point. It can also help you explore ideas quickly or compare different ways of looking at something.",
          "",
          "It is not as good at certainty, judgment, or facts that need verification. That is why your job is to guide it and check the important parts.",
        ],
      },
    },
    {
      id: "section-3b",
      type: "text",
      content: {
        title: "When AI Gets It Wrong",
        paragraphs: [
          "Sometimes AI sounds confident even when it is guessing.",
          "",
          "**Example**: If you ask about a product, event, or statistic it does not actually know, it may still give you a polished answer based on patterns.",
          "",
          "That is useful when you want a draft or a structure. It is not enough when accuracy really matters.",
          "",
          "The simple rule is: use AI freely for drafts and ideas, then verify anything that would matter if it were wrong.",
          "",
          "**The Rule**: If you would check it with a human, check it with AI too.",
        ],
      },
    },

    // ==========================================================================
    // KEY INSIGHTS CARD
    // ==========================================================================
    {
      id: "key-insight",
      type: "highlightCard",
      content: {
        heading: "The AI Trust Framework",
        insights: [
          "AI is good at patterns, drafts, and structure",
          "It can still be wrong about facts or details",
          "Important information should be checked",
          "Better context usually means better output",
        ],
      },
    },

    // ==========================================================================
    // SECTION 4: The Secret Sauce
    // ==========================================================================
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Context + Goal + Constraints",
        paragraphs: [
          "A simple prompt gets a simple answer. A clearer prompt gets a more useful one.",
          "",
          '**Vague Prompt**: "Write a sales email for my SaaS product."',
          "",
          "Result: A generic draft that could fit almost anything.",
          "",
          '**Specific Prompt**: "Write a sales email for my project management SaaS. Target: freelance designers who struggle with client work. Pain point: missed deadlines. Tone: friendly, not pushy. Goal: get a 2-minute demo request."',
          "",
          "Result: More focused, more useful, and much closer to what was actually needed.",
          "",
          "## Why It Works",
          "",
          "Context helps AI aim at the right pattern instead of the generic one.",
        ],
        image: {
          src: "/images/courses/lessons/modules/ai-technology-artificial-intelligence-concept.webp",
          alt: "Context and prompting visualization",
          caption: "Specificity is the difference between generic and useful",
        },
      },
    },

    // ==========================================================================
    // SECTION 5: Three Key Takeaways
    // ==========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Three Key Takeaways",
        paragraphs: [
          "You now have a simple mental model for how AI works.",
          "",
          "**1. AI works from patterns, not certainty**",
          "",
          "That is why it can help so much with drafts, summaries, and structure.",
          "",
          "**2. Clear prompts lead to better results**",
          "",
          "When you give enough context and a clear goal, the output gets more useful.",
          "",
          "**3. The basics transfer across tools**",
          "",
          "You do not need to relearn everything for every tool.",
          "",
          "The core idea is the same: be clear, be specific, and check the result.",
        ],
      },
    },

    // ==========================================================================
    // TOOL REFERENCE
    // ==========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "general",
        action: "Test the formula",
        task: "Use any AI tool to test the Context + Goal + Constraints formula with a real task",
        feature: "Any AI assistant (ChatGPT, Claude, or Gemini)",
        tip: "Start with one real question you already need help with.",
      },
    },

    // ==========================================================================
    // MAIN CHALLENGE (ACTIONABLE TASK)
    // ==========================================================================
    {
      id: "main-challenge",
      type: "actionableTask",
      content: {
        title: "Your Challenge: Prompt Practice",
        purpose:
          "See the difference context makes by testing the same task two ways.",
        instructions: [
          "1. Open any AI tool you already have access to.",
          "2. Pick one real task you need help with.",
          "3. Write two prompts for the same task:",
          "   - one vague",
          "   - one with context, goal, and a simple constraint",
          "4. Compare the results side by side.",
        ],
        deliverable: "The task you chose, both prompts, and which one was more useful",
        estimatedTime: "5-10 minutes",
        starterPrompt:
          "Context: I work as a [role] at [company type]. Goal: [what you want to achieve]. Constraints: [tone, length, format, audience]. Task: [your specific request].",
        successCriteria: [
          "You tested the same task two ways",
          "You noticed a difference in the output",
          "You understand why more context usually helps",
          "You are ready to try the same idea on a real task",
        ],
      },
    },
  ] as LessonSection[],
};
