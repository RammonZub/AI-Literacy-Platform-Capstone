/**
 * Lesson 3.1: Why Context Matters in Prompting
 *
 * PURPOSE: Teach the importance of providing background information to AI
 *
 * CONTEXT: First lesson of Module 3 (Prompt Engineering). Establishes the
 * fundamental principle that context transforms vague prompts into precise outputs.
 *
 * KEY RESPONSIBILITIES:
 * - Show why AI can't read minds
 * - Demonstrate the difference between vague and detailed prompts
 * - Teach the 3 types of context AI needs
 * - Provide practical business examples
 *
 * IMPLEMENTATION NOTES:
 * - Designed for 30-55+ professional persona (non-technical)
 * - All examples use business contexts (emails, reports, meetings)
 * - Progressive: starts simple, builds to practical application
 * - No coding examples or technical jargon
 *
 * - Original: 20 slides → Converted to 12 sections
 * - Added 2 quizzes (after sections 4 and 8)
 * - Added 1 checkpoint (after section 11)
 * - XP: 125 (explicitly set)
 *
 * - Added heroImage section at start
 * - Added highlightCard sections
 * - Converted actionableTask to inline section
 * - Added textWithImage for visual breaks
 * - Updated moduleId to '03-skills-prompting'
 * - Added lessonCategory: 'theory'
 *
 * DEPENDENCIES:
 * - Module 1 (Foundation): Basic AI familiarity
 * - Module 2 (Productivity): Context concepts
 *
 * @see lesson-3-2.ts - Builds on this with the C-RT-F framework
 * @created 2026-02-03
 * @modified 2026-02-23 - Restructured with new section types
 */

import type { Lesson, LessonSection } from "@/types/content";

export const lesson_3_1: Lesson = {
  id: "3-1",
  chapterId: "ch1-fundamentals",
  moduleId: "03-skills-prompting",
  title: "Why Context Matters",
  description:
    "Learn why giving AI the right background turns vague replies into useful ones.",
  order: 1,
  estimatedMinutes: 15,
  xpReward: 125,
  format: "article",
  lessonCategory: "theory",
  coverImage: "/images/courses/lessons/modules/writing-and-keyboard-technology-communication.webp",
  coverTitle: "Why Context Matters",

  sections: [
    // ==========================================================================
    // HERO IMAGE - Visual introduction to the lesson
    // ==========================================================================
    {
      id: "hero-image",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/03-skills-prompting/3-1-cover.webp",
        imageAlt: "Professional writing and communication with AI assistance",
        title: "Why Context Matters",
        subtitle: "The simplest way to stop getting generic answers",
      },
    },

    // ==========================================================================
    // SECTION 1: Introduction (Hook: Sarah's Story)
    // ==========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Sarah's Frustration",
        paragraphs: [
          "Sarah, a marketing manager, asked AI for help with an email.",
          '"Write an email about the quarterly review meeting."',
          "What she got: A generic invitation that missed everything important.",
          "No sense of urgency. No context about the project. No clear ask.",
          "Sarah's mistake? She expected AI to read her mind.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: The Core Problem
    // ==========================================================================
    {
      id: "highlight-1",
      type: "highlightCard",
      content: {
        heading: "The Core Problem",
        insights: [
          "AI is incredibly smart at processing language, but it cannot guess what you're thinking",
          "AI only knows what you tell it",
          "When your prompt lacks context, AI fills in the gaps with assumptions",
          "When you provide rich context, AI delivers exactly what you need",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: The Context Difference (Comparison)
    // ==========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "The Context Difference",
        paragraphs: [
          "The difference between vague and context-rich prompts is dramatic.",
          'Consider what happens when you ask AI to "Write an email about the meeting." Without any background information, AI produces generic output that misses the urgency of your situation, lacks a clear call to action, and forces you to iterate multiple times before getting something usable. You waste time going back and forth, trying to steer the AI toward what you actually needed.',
          'Now compare that to a prompt with proper context: "Write a follow-up email after our Q3 planning session. We decided to launch the campaign in October. Need to remind the team to submit their materials by Friday." This prompt is specific and actionable. It includes a clear deadline. It sets the right tone for the situation. Most importantly, it succeeds in one shot because AI has everything it needs to understand your intent.',
          "The lesson is clear: context transforms vague, frustrating interactions into precise, productive ones. When you give AI the background it needs, it responds with exactly what you want.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 3: The 3 Types of Context
    // ==========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "The 3 Types of Context AI Needs",
        paragraphs: [
          "AI needs three types of information to give you the best results. When you include all three, your prompts become consistently effective.",
          "First, AI needs to know who you are. This includes your role, your relationship to the recipient, and your expertise level. A CFO writing to the board needs a different tone than an intern writing to their manager. When AI understands your position, it can match the right perspective and voice to your output.",
          "Second, AI needs to understand the situation. What happened? What's the background? What led to this moment? Think of it as setting the scene for someone who wasn't there. AI responds much better when it has the full story, including the context that shapes your request.",
          "Third, AI needs clarity about what you want. The specific outcome you need matters enormously. Is this an invitation? A reminder? A request? A summary? Being explicit about your goal helps AI structure the response appropriately and include the right elements for success.",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 1: Test understanding of context types
    // ==========================================================================
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "Let's check your understanding of the three types of context.",
        quiz: {
          question: "Which of the following is NOT one of the 3 types of context AI needs?",
          options: [
            "Who you are (your role and expertise)",
            "The situation (background and context)",
            "What you want (specific outcome)",
            "Your favorite color and hobbies",
          ],
          correctAnswer: 3,
        },
      },
    },

    // ==========================================================================
    // SECTION 4: Sarah's Improvement (Example)
    // ==========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Sarah's Improved Prompt",
        paragraphs: [
          "Let's see how context transforms Sarah's original vague prompt into something that works.",
          'Her first attempt was simply: "Write an email about the quarterly review meeting." This left AI completely in the dark. It didn\'t know who the email was for, what happened at the meeting, or what action was needed from recipients. The result was generic and unhelpful.',
          "Sarah's improved version tells a complete story: \"Write a follow-up email to the marketing team after our Q3 planning meeting. I'm the marketing manager. We decided to launch the new campaign in October. I need everyone to submit their creative assets by Friday at 5 PM. Tone should be professional but motivating.\"",
          "Now AI has everything it needs. It knows who Sarah is, understands the situation completely, has a clear deadline to work with, and knows exactly what tone to strike. The output is targeted, actionable, and ready to send without iteration.",
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
        title: "Context in Action",
        paragraphs: [
          'When Tom, a management consultant, asked AI to "Help me prepare for a client meeting," he got a generic response asking for more information.',
          "His second attempt included all the context: who he was (management consultant), the client (mid-sized retail company), the situation (second meeting, problem diagnosed), the goal (present 3 solution options), and the audience (CEO and CFO).",
          "The result? AI gave him exactly what he needed - a structured presentation framework tailored to his specific situation.",
        ],
        imageUrl: "/images/courses/modules/03-skills-prompting/3-1-inline-1.webp",
        imageAlt: "Strategic planning workspace with organized layers",
        imageCaption: "Organized context leads to organized outputs",
      },
    },

    // ==========================================================================
    // SECTION 5: How to Add Context (Step-by-Step)
    // ==========================================================================
    {
      id: "section-5",
      type: "textWithBullets",
      content: {
        title: "How to Add Context to Any Prompt",
        paragraphs: ["Follow these 4 steps before you hit send on your next prompt."],
        bullets: [
          '**1. Identify Who You Are**: Start with your role. "I\'m a [position]" or "As a [role]..." This helps AI understand your perspective and expertise level.',
          "**2. Describe the Situation**: What's happening? What led to this? What background matters? Think of it as setting the scene for someone who wasn't there.",
          "**3. Clarify the Audience**: Who will read or use this output? A client? Your boss? Your team? The audience determines the tone and depth.",
          "**4. Specify the Outcome**: What exactly do you need? An email? A summary? A plan? A presentation? Be explicit about the format and goal.",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 2: Test understanding of context application
    // ==========================================================================
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        context: "Let's practice applying context to a real scenario.",
        quiz: {
          question:
            "You need AI to write a follow-up email after a sales demo. Which information is most essential to include?",
          options: [
            "Just ask for a follow-up meeting",
            "Your role, what was discussed, prospect's interest level, and next step you want",
            "The company's entire history and product catalog",
            "A long list of all your previous clients",
          ],
          correctAnswer: 1,
        },
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Real Example
    // ==========================================================================
    {
      id: "highlight-2",
      type: "highlightCard",
      content: {
        heading: "Real Example: Project Status Update",
        insights: [
          '**The Vague Version**: "Write a project update." → What project? Who is it for? What\'s the status?',
          "**The Context-Rich Version**: \"Write a weekly status update for the website redesign project. I'm the project manager reporting to the VP of Marketing. Development is 80% complete, but we're delayed by 2 weeks due to scope changes.\"",
          "**The Result**: AI produces a professional, balanced update that acknowledges the delay while framing the additional budget as an investment in better outcomes.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 6: The Golden Rule
    // ==========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "The Golden Rule of Context",
        paragraphs: [
          "When in doubt, add more context.",
          "You'll rarely regret including too much background.",
          "You'll almost always regret including too little.",
          "AI can ignore information it doesn't need.",
          "But it cannot invent information you never provided.",
          "Be generous with context. Be specific about details.",
          "Your results will transform.",
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
        question: "What's the most important rule for adding context to your prompts?",
        options: [
          "Keep it as short as possible",
          "When in doubt, add more context - AI can ignore what it doesn't need",
          "Never include more than 3 sentences",
          "Let AI guess the missing information",
        ],
        correctAnswer: 1,
        hint: "Think about whether AI can work with too much information versus too little.",
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
        task: "Rewrite a vague prompt into a context-rich prompt",
        feature: "Adding who you are, the situation, and desired outcome",
        tip: 'Start with "I am a..." to immediately establish context',
      },
    },

    // ==========================================================================
    // ACTIONABLE TASK: Context Challenge
    // ==========================================================================
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Context Challenge",
        purpose: "Apply the context framework to your own work and see the difference it makes.",
        instructions: [
          "Pick a task you do regularly: email, report, meeting notes, or update",
          "Write your current vague prompt (how you typically ask)",
          "Rewrite it using the context checklist: Who, Situation, Audience, Goal, Format",
          "If you can, test both in an AI tool and compare the results",
        ],
        deliverable: "Your before-and-after prompts with a note about what context you added",
        estimatedTime: "5-10 minutes",
        successCriteria: [
          "Vague prompt is missing at least 2 context types",
          "Improved prompt clearly includes who you are",
          "Improved prompt describes the situation",
          "Improved prompt specifies the desired outcome",
        ],
      },
    },
  ] as LessonSection[],
};
