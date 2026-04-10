/**
 * Lesson 3.5: Chain of Thought
 *
 * PURPOSE: Teach step-by-step reasoning for complex problems
 *
 * - Original: 11 slides → Converted to 8 sections
 * - Added 2 quizzes (after sections 3 and 6)
 * - Added 1 checkpoint (after section 7)
 * - XP: 121 (explicitly set)
 *
 * - Added heroImage section at start
 * - Added highlightCard sections
 * - Added scenarioCard for chain of thought example
 * - Added quickPrompt for template practice
 * - Converted actionableTask to inline section
 * - Added textWithImage for visual breaks
 * - Updated moduleId to '03-skills-prompting'
 * - Added lessonCategory: 'theory'
 *
 * @created 2026-02-03
 * @modified 2026-02-23 - Restructured with new section types
 */

import type { Lesson, LessonSection } from "@/types/content";

export const lesson_3_5: Lesson = {
  id: "3-5",
  chapterId: "ch1-fundamentals",
  moduleId: "03-skills-prompting",
  title: "Ask AI To Think Step By Step",
  description: "Use step-by-step prompting for harder decisions and problems.",
  order: 5,
  estimatedMinutes: 12,
  xpReward: 121,
  format: "article",
  lessonCategory: "theory",
  coverImage:
    "/images/courses/lessons/modules/strategic-planning-workspace-with-organized-layers.webp",
  coverTitle: "Ask AI To Think Step By Step",

  sections: [
    // ==========================================================================
    // HERO IMAGE - Visual introduction to the lesson
    // ==========================================================================
    {
      id: "hero-image",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/03-skills-prompting/3-5-cover.webp",
        imageAlt: "Strategic planning with step-by-step organization",
        title: "Ask AI To Think Step By Step",
        subtitle: "A simple way to make the reasoning easier to follow",
      },
    },

    // ==========================================================================
    // SECTION 1: Why See the Reasoning?
    // ==========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why See the Reasoning?",
        paragraphs: [
          "Complex problems need clear thinking.",
          "When AI shows its step-by-step reasoning, you can verify the logic, catch mistakes early, and understand the conclusion.",
          "Chain of thought prompting makes AI think out loud like an expert consultant working through a problem with you.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: How Chain of Thought Works
    // ==========================================================================
    {
      id: "highlight-1",
      type: "highlightCard",
      content: {
        heading: "How Chain of Thought Works",
        insights: [
          '**Trigger the Reasoning**: Add phrases like "Think step by step" or "Show your reasoning" or "Walk me through your logic."',
          "**AI Breaks It Down**: Instead of jumping to an answer, AI shows each step of its thinking process.",
          "**You See the Path**: You can follow the logic, verify each assumption, and agree (or disagree) before the final answer.",
        ],
      },
    },

    // ==========================================================================
    // SCENARIO CARD: Chain of Thought Example
    // ==========================================================================
    {
      id: "scenario-card",
      type: "scenarioCard",
      content: {
        title: "Real-World Scenario: Product Launch Decision",
        situation:
          "You're a product manager at a mid-sized tech company. Your team has been developing a new feature for 6 months. Development is complete, but you need to decide: launch in October or wait until November?",
        challenge:
          "There are competing factors to consider: competitor launches, marketing events, development buffer time, and sales cycle timing. You need a clear recommendation with transparent reasoning.",
        context:
          "This is a strategic decision that affects multiple departments and requires buy-in from leadership.",
        outcome:
          "Using chain of thought prompting, AI analyzed: (1) COMPETITION - October has 3 major launches vs November being clearer; (2) READINESS - Development complete Oct 15, QA needs 2 weeks; (3) MARKETING - Your conference is Nov 5-7, perfect timing; (4) SALES - Q4 budget cycles favor early November. CONCLUSION: November 12th gives QA time, conference buzz, and budget alignment.",
      },
    },

    // ==========================================================================
    // QUIZ 1: Test understanding of chain of thought
    // ==========================================================================
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "Let's check your understanding of chain of thought prompting.",
        quiz: {
          question: "Which phrase is most effective for triggering step-by-step reasoning?",
          options: [
            "Give me the answer quickly",
            "Think step by step and show your reasoning",
            "Skip the details",
            "Just tell me what to do",
          ],
          correctAnswer: 1,
        },
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: With vs Without
    // ==========================================================================
    {
      id: "highlight-2",
      type: "highlightCard",
      content: {
        heading: "With vs. Without Chain of Thought",
        insights: [
          '**Direct Answer**: "Should we launch in October or November?" → "November is better." → No reasoning shown, can\'t verify logic, may miss important factors',
          "**Chain of Thought**: Step-by-step analysis, each factor considered, reasoning is transparent, can challenge or refine assumptions, confidence in the conclusion",
        ],
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: Visual break
    // ==========================================================================
    {
      id: "text-image-1",
      type: "textWithImage",
      content: {
        title: "Best Use Cases for Chain of Thought",
        paragraphs: [
          "Use chain of thought when the path matters as much as the answer.",
          "Strategic decisions with multiple factors benefit from seeing the reasoning.",
          "Problem diagnosis and troubleshooting become clearer when AI shows its process.",
          "Trade-off analysis between options requires transparent logic.",
          "Resource allocation decisions need defensible reasoning.",
        ],
        imageUrl: "/images/courses/modules/03-skills-prompting/3-5-inline-1.webp",
        imageAlt: "Brainstorming with step-by-step analysis",
        imageCaption: "Chain of thought works best for complex decisions",
      },
    },

    // ==========================================================================
    // QUIZ 2: Test understanding of chain of thought application
    // ==========================================================================
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        context: "Let's practice applying chain of thought.",
        quiz: {
          question:
            "You're deciding between two job offers. Which prompt would give you the most useful analysis?",
          options: [
            "Which job should I take?",
            "Think step by step and compare these two job offers: Job A has higher salary but longer commute. Job B has lower salary but remote work. Walk me through your reasoning.",
            "Just give me a quick answer",
            "Pick one randomly",
          ],
          correctAnswer: 1,
        },
      },
    },

    // ==========================================================================
    // QUICK PROMPT: Chain of Thought Template
    // ==========================================================================
    {
      id: "quick-prompt",
      type: "quickPrompt",
      content: {
        heading: "Try This Chain of Thought Template",
        description: "Copy this template when you need AI to think through a complex problem.",
        promptText: `I need help making a decision about [topic/decision].

CONTEXT:
- [Background information]
- [Key stakeholders/constraints]
- [Timeline or urgency]

Please think step by step and:

1. First, identify the key factors I should consider
2. Analyze each factor and its implications
3. Consider any trade-offs between options
4. Provide a clear recommendation with your reasoning
5. Highlight any assumptions you're making that I should verify

Show your thinking process so I can follow your logic.`,
        placeholders: [
          "topic/decision",
          "Background information",
          "Key stakeholders/constraints",
          "Timeline or urgency",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: Summary
    // ==========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "You Can Now Use Chain of Thought",
        paragraphs: [
          "You know how to make AI show its reasoning.",
          "You have trigger phrases that activate thinking.",
          "You understand when chain of thought helps most.",
          "In the next lesson, you'll learn example-based learning: how to show AI what you want by providing concrete examples that shape the output precisely.",
        ],
      },
    },

    // ==========================================================================
    // CHECKPOINT: Final knowledge check
    // ==========================================================================
    {
      id: "checkpoint-1",
      type: "checkpoint",
      content: {
        question: "What's the primary benefit of chain of thought prompting?",
        options: [
          "It makes AI respond faster",
          "It shows the reasoning process so you can verify the logic",
          "It produces shorter answers",
          "It's only useful for simple questions",
        ],
        correctAnswer: 1,
        hint: "Think about being able to see HOW AI arrived at its conclusion.",
      },
    },

    // ==========================================================================
    // TOOL REFERENCE: Practice with ChatGPT or Claude
    // ==========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Practice prompting",
        task: "Apply chain of thought to a complex decision",
        feature: 'Step-by-step reasoning with "Think step by step"',
        tip: 'Add "Show your reasoning" to see the full thought process',
      },
    },

    // ==========================================================================
    // ACTIONABLE TASK: Chain of Thought Practice
    // ==========================================================================
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Chain of Thought Practice",
        purpose: "Apply chain of thought prompting to a real decision or problem you are facing.",
        instructions: [
          "Pick a decision or problem you're currently facing",
          "Write a prompt asking AI to think step by step",
          "Include relevant context and constraints",
          "Review the reasoning - does it make sense?",
          "Identify any factors AI might have missed",
        ],
        deliverable:
          "Your chain of thought prompt, the reasoning AI produced, and your assessment of the logic",
        estimatedTime: "10-15 minutes",
        starterPrompt: `I need to make a decision about [your decision].

CONTEXT:
- [Background: what led to this decision]
- [Constraints: budget, time, resources]
- [Stakeholders: who is affected]

Please think step by step and show your reasoning as you analyze this decision. Consider all relevant factors and explain your logic clearly.`,
        successCriteria: [
          "Prompt includes phrase to trigger step-by-step reasoning",
          "Context provides enough background for analysis",
          "Reasoning is transparent and logical",
          "You can identify at least one insight from the reasoning",
          "You can verify or challenge the assumptions made",
        ],
      },
    },
  ] as LessonSection[],
};
