/**
 * Lesson 5.4: Prompt Patterns That Work
 *
 * CHAPTER: 1 - ChatGPT Essentials
 * LESSON: 4 of 5 - Reusable Prompt Frameworks
 *
 * DURATION: 15 minutes
 * XP REWARD: 125 XP
 *
 * PURPOSE: Teach proven prompting patterns that apply across situations
 *
 * KEY CONCEPTS:
 * - Role-based prompting (act as X)
 * - Step-by-step patterns (chain of thought)
 * - Example-driven prompting (few-shot)
 * - Constraint-based prompting
 *
 * DESIGN NOTES:
 * - Each pattern is immediately practical
 * - Show when to use each pattern
 * - Emphasize that patterns combine
 * - Real examples before theory
 */

import type { Lesson } from "@/types/content";

export const lesson_5_4: Lesson = {
  id: "lesson-5-4",
  chapterId: "ch5-1-essentials",
  moduleId: "05-tools-chatgpt",
  lessonCategory: "tutorial", // Skill-building tutorial
  title: "Prompt Patterns That Work",
  description: "Learn the prompting frameworks professionals use every day",
  order: 4,
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
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-4-cover.webp",
        imageAlt: "Brain memory and thinking neural network",
        title: "Prompt Patterns That Work",
        subtitle: "Learn the prompting frameworks professionals use every day",
      },
    },
    // ===========================================================================
    // SECTION 1: Patterns, Not Templates
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Patterns, Not Templates",
        paragraphs: [
          "Great prompts follow patterns. Not rigid templates—flexible frameworks you adapt to any situation.",
          "",
          "These four patterns cover 80% of professional use cases. Master them, and you can handle almost anything.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Pattern 1 - Role-Based Prompting
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Pattern 1: Role-Based Prompting",
        paragraphs: [
          'Tell ChatGPT who to be. It changes the entire response. When you say "Act as a senior editor," ChatGPT shifts into a different mode—more critical, more focused on clarity and flow, more attuned to what readers will notice. The same request framed as "Act as a concerned customer" produces completely different output, emphasizing emotional resonance and practical concerns rather than stylistic polish.',
          "",
          'Try "Act as a skeptic. Challenge the assumptions in..." and watch how ChatGPT suddenly pushes back, asks hard questions, and finds weaknesses you might have missed. This pattern works because different roles activate different knowledge patterns and perspectives within the model. Use role-based prompting for writing, editing, feedback, brainstorming, and any situation where perspective matters. The key is to choose a role that has the expertise or viewpoint you need, then let that persona guide the response.',
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Pattern 2 - Step-by-Step Reasoning
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Pattern 2: Step-by-Step Reasoning",
        paragraphs: [
          'For complex tasks, ask ChatGPT to show its work. A prompt like "Think step-by-step. First, identify the main issue. Then, analyze causes. Finally, recommend solutions" forces the AI to break down its thinking process rather than jumping straight to conclusions. This doesn\'t just give you better answers—it shows you the logic behind them, so you can evaluate whether the reasoning holds up.',
          "",
          "Try framing requests as \"Break this down: What's working? What's not? What should change?\" This structured approach works especially well for analysis, problem-solving, strategic thinking, and complex decisions where the journey matters as much as the destination. When you can see each step of ChatGPT's reasoning, you can catch errors early, redirect the analysis if it goes off track, and build confidence that the final recommendation is sound. Step-by-step prompting transforms ChatGPT from a magic answer box into a thinking partner that shows its work.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Pattern 3 - Example-Driven Prompting
    // ===========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Pattern 3: Example-Driven Prompting",
        paragraphs: [
          'Show ChatGPT what you want through examples. A prompt like "Here\'s a good email: [paste example]. Write a similar one for [new situation]" gives the AI a concrete target to aim for. Instead of trying to explain abstract concepts like "professional but warm tone" or "concise yet thorough," you simply provide an example that embodies those qualities and let ChatGPT pattern-match.',
          "",
          'This works because examples provide concrete patterns, while explanations leave room for interpretation. You can also use this for formatting: "Format your response like this: [example structure]" removes ambiguity about organization. Or for creative work: "Here are three headlines I like. Generate five more in this style." Example-driven prompting excels for writing, formatting, style matching, and content creation—any situation where showing is clearer than telling. The more specific your examples, the more precisely ChatGPT can match what you\'re looking for.',
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Pro Tip - Patterns Combine
    // ===========================================================================
    {
      id: "section-5",
      type: "highlightCard",
      content: {
        heading: "Pro Tip: Patterns Combine",
        insights: [
          "The most powerful prompts use multiple patterns together.",
          "A role ('act as a senior editor') + examples ('here's my style') + step-by-step reasoning ('analyze this section by section') produces exceptional results.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5.5: Building Your Toolkit Visual
    // ===========================================================================
    {
      id: "section-5-5",
      type: "textWithImage",
      content: {
        title: "Building Your Prompt Toolkit",
        paragraphs: [
          "Each pattern is a tool in your arsenal. Role-based prompting sets the perspective. Step-by-step reasoning ensures logical flow. Examples provide concrete targets. Constraints prevent common mistakes.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-4-inline-1.webp",
        imageAlt: "Technology tools and interface systems",
      },
    },
    // ===========================================================================
    // SECTION 6: Pattern 4 - Constraint-Based Prompting
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Pattern 4: Constraint-Based Prompting",
        paragraphs: [
          "Tell ChatGPT what NOT to do. Guardrails prevent common issues and often produce better results than positive instructions alone.",
          'Consider a prompt like "Write a sales email. Don\'t use: hype, exclamation points, or urgency tactics." By explicitly ruling out the lazy tactics that make most sales emails feel spammy, you force ChatGPT to find more authentic persuasive approaches. The constraint drives creativity in a better direction.',
          'The same principle applies to technical explanations: "Explain this technical concept. Avoid: jargon, acronyms, or assumptions about prior knowledge." This constraint forces ChatGPT to find accessible language and build from fundamentals, resulting in explanations that actually help rather than impress without illuminating.',
          "Use constraint-based prompting for style control, tone management, and avoiding common pitfalls. The pattern works because negative constraints are often clearer than positive ones—you usually know exactly what you don't want, even when you struggle to articulate what you do want. Combining constraints with other patterns amplifies their power: a role-based prompt with clear constraints produces remarkably targeted output.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6.5: Pattern Summary Card
    // ===========================================================================
    {
      id: "section-6-5",
      type: "highlightCard",
      content: {
        heading: "The Four Patterns at a Glance",
        insights: [
          "**Role-Based**: 'Act as a...' - Sets perspective and expertise",
          "**Step-by-Step**: 'Think through this...' - Forces logical structure",
          "**Example-Driven**: 'Here's what I want...' - Provides concrete targets",
          "**Constraint-Based**: 'Don't include...' - Prevents unwanted elements",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Quick Prompt Practice
    // ===========================================================================
    {
      id: "section-7",
      type: "quickPrompt",
      content: {
        heading: "Practice: Combine Two Patterns",
        description:
          "Choose a real task you have. Write a prompt that combines at least two patterns (Role + Examples, or Step-by-Step + Constraints, or any other combination).",
        promptText:
          "Act as a [role]. Here's an example of what I want: [example]. Please [task] step-by-step, avoiding [constraints].",
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
        task: "Open ChatGPT and test your combined-pattern prompt. Notice how multiple patterns work together.",
        feature: "New conversation",
        tip: "Pattern combinations are most powerful for complex professional tasks",
      },
    },
    // ===========================================================================
    // ACTIONABLE TASK: Skill-based lesson - keep task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Combine Two Patterns",
        purpose:
          "Combining prompting patterns creates more powerful and targeted results. Mastering pattern combination multiplies your prompting effectiveness.",
        instructions: [
          "Choose a real email or document you need to write this week",
          "Identify which two patterns would work best (Role + Example, Step-by-Step + Constraints, etc.)",
          "Write a prompt that combines both patterns explicitly",
          "Test it in ChatGPT and note how the combined patterns improve the output",
        ],
        deliverable: "A combined-pattern prompt with the ChatGPT output and notes on what worked",
        estimatedTime: "10 minutes",
        starterPrompt:
          "Act as a [specific role]. Here's an example of my style: '[paste example]'. Now [task] step-by-step, avoiding [specific things to avoid].",
        successCriteria: [
          "Prompt clearly uses two different patterns from the lesson",
          "The patterns are combined logically (not just pasted together)",
          "Output is noticeably better than a simple one-pattern prompt would produce",
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
        title: "Pattern Toolkit Complete",
        description:
          "You now have four prompting patterns that work across almost any professional task. Role-based, step-by-step, example-driven, and constraint-based prompting are the foundation of advanced AI use.",
        xpReward: 125,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
