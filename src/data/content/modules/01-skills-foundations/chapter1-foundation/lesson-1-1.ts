/**
 * Lesson 1.1: What AI Actually Is
 *
 * PURPOSE: Welcome learners and set expectations for the AI Fundamentals course
 *
 * KEY CONCEPTS:
 * - AI proficiency is about asking the right questions, not technical skill
 * - The gap between basic users (5%) and proficient users (95%)
 * - Real-world applications across work and personal life
 * - The compound effect of small daily improvements
 *
 *
 * DURATION: 44 minutes
 * XP REWARD: 100 points (Base 50 × 2.0 (45+ min) × 1.0 (beginner) = 100)
 */

import type { Lesson, LessonSection } from "@/types/content";

export const lesson_1_1: Lesson = {
  id: "l1-1-welcome-introduction",
  chapterId: "ch1-why-this-matters",
  moduleId: "01-skills-foundations",
  lessonCategory: "theory",
  title: "What AI Actually Is",
  description:
    "Start with a plain-English view of AI and generative AI before the course moves into practical use.",
  order: 1,
  estimatedMinutes: 44,
  format: "article",
  coverImage: "/images/courses/lessons/modules/brain-memory-and-thinking-neural-network.webp",
  coverTitle: "What AI Actually Is",
  xpReward: 100,
  sections: [
    // ==========================================================================
    // HERO SECTION
    // ==========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc:
          "/images/courses/modules/01-skills-foundations/l1-1-welcome-introduction-cover.webp",
        imageAlt: "AI Foundations",
        title: "What AI Actually Is",
        subtitle:
          "A calm, practical starting point for beginners. No jargon, no hype - just what you need to know.",
      },
    },

    // ==========================================================================
    // SECTION 1: Introduction
    // ==========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why You Are Here",
        paragraphs: [
          "You've probably heard a lot about AI, but the real question is simple: what is it, and how does it help me?",
          "",
          "For most people, AI is a tool that can help with writing, thinking, planning, and reading faster. The skill is not being technical. The skill is knowing how to ask for what you need.",
          "",
          "Think of it like learning to search well or write a clear email. Small changes in how you ask lead to much better results.",
        ],
      },
    },
    {
      id: "section-1b",
      type: "text",
      content: {
        title: "What is 'AI Proficiency'?",
        paragraphs: [
          "AI proficiency is just the ability to use these tools well enough to get useful results.",
          "",
          "That means knowing what you want, giving enough context, and checking the output before you use it. It is a practice, not a personality trait. You do not need to be technical to get good at it.",
          "",
          "The same basics work across roles and industries. Once you understand the pattern, you can use it anywhere.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: Then vs Now
    // ==========================================================================
    {
      id: "section-2",
      type: "textWithImage",
      content: {
        title: "Then vs. Now: The Pattern Repeats",
        paragraphs: [
          "Every big technology shift changes how work gets done. AI is doing that now, but in a way you can start learning today.",
        ],
        image: {
          src: "/images/courses/lessons/modules/neural-network-ai-technology-visualization.webp",
          alt: "Technology evolution visualization",
          caption:
            "The point is not to know everything. It is to start using the new tools with confidence.",
        },
      },
    },
    {
      id: "section-2b",
      type: "text",
      content: {
        title: "Two Eras of Change",
        paragraphs: [
          "In the internet era, we learned to search. In the AI era, we learn to ask.",
          "",
          "That means you can talk to a tool the way you would ask a colleague for help. You can draft a message, summarize a document, brainstorm an idea, or get a second opinion on a decision.",
          "",
          "You do not need to catch every new tool. You only need to understand the basic pattern so you can use the right tool when it matters.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 3: The 5% vs 95% Gap - HIGHLIGHT CARD
    // ==========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "The Beginner Opportunity",
        insights: [
          "Most people still use AI casually or not at all",
          "That means there is room to learn without feeling behind",
          "The goal is not to become technical",
          "The goal is to use AI well enough that it helps your actual work",
        ],
      },
    },

    // ==========================================================================
    // SECTION 4: Real Work Results
    // ==========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Real Work, Real Results",
        paragraphs: [
          "AI does not replace your judgment. It helps you get to a better first draft, a clearer summary, or a more useful starting point.",
          "",
          "That matters in work you already do: writing, research, planning, and decisions. AI can help you start faster, think more clearly, and spend less time staring at a blank page.",
          "",
          "You still make the final call. The difference is that you are starting from something useful instead of starting from zero.",
          "",
          "The impact will look different for each person, but the pattern is the same: less friction, more clarity, and a better first step.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 5: Beyond the Office
    // ==========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Beyond the Office",
        paragraphs: [
          "AI is not just for work. You can use it to understand a confusing topic, plan a trip, compare options, or get help making a decision.",
          "",
          "That might mean asking for a plain-English explanation, a side-by-side comparison, or a shortlist of questions to ask next.",
          "",
          "The value is not that AI makes choices for you. The value is that it helps you understand the choice more clearly.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 6: The Time Investment
    // ==========================================================================
    {
      id: "section-6",
      type: "textWithImage",
      content: {
        title: "The Learning Investment",
        paragraphs: [
          "You do not need to spend weeks learning the basics.",
          "",
          "A small daily habit is enough to build confidence and start seeing where AI helps.",
        ],
        image: {
          src: "/images/courses/lessons/modules/ai-technology-artificial-intelligence-concept.webp",
          alt: "Time savings visualization",
          caption: "Small daily practice is enough to build a real starting point",
        },
      },
    },

    // ==========================================================================
    // SECTION 7: Your Learning Journey
    // ==========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Your Learning Journey",
        paragraphs: [
          "This course is meant to feel manageable. You learn a little, try a little, and then use it on a real task.",
          "",
          "By the end of this lesson, you should understand what AI is, why it matters, and where it can fit into your own work. Later lessons will add tools, workflows, and a simple path forward.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 8: Real Results - The Compound Effect
    // ==========================================================================
    {
      id: "section-8",
      type: "text",
      content: {
        title: "The Compound Effect",
        paragraphs: [
          "Small improvements add up.",
          "",
          "If AI saves you a little time on writing, a little time on research, and a little time on planning, that starts to matter quickly.",
          "",
          "The goal is not dramatic transformation on day one. The goal is steady progress that makes your work feel easier.",
          "",
          "That is how confidence grows: one useful task at a time.",
          "",
          "By the end of this course, the change should feel practical, not dramatic. More clarity. Less guessing. Better starting points.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 9: Course Roadmap
    // ==========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Your Course Roadmap",
        paragraphs: [
          "The course is built in a simple order.",
          "",
          "**Chapter 1** gives you the basic mental model.",
          "",
          "**Chapter 2** shows you what AI helps with in real work.",
          "",
          "**Chapter 3** helps you choose tools more calmly and use them safely.",
          "",
          "**Chapter 4** helps you complete one useful workflow and decide what comes next.",
        ],
      },
    },
    {
      id: "section-9b",
      type: "text",
      content: {
        title: "What You'll Master",
        paragraphs: [
          "By the end of this course, you should be able to explain AI in plain English and know where it fits in your own work.",
          "",
          "You should also have a simple first workflow, a clearer sense of which tool to start with, and a better feel for when to verify or slow down.",
          "",
          "The real win is confidence: not knowing everything, but knowing enough to start well and keep going.",
        ],
      },
    },

    // ==========================================================================
    // KEY INSIGHTS CARD
    // ==========================================================================
    {
      id: "key-insights",
      type: "highlightCard",
      content: {
        heading: "Three Simple Principles",
        insights: [
          "Start small. 15 minutes is enough to build momentum.",
          "Use it on real work, not just theory.",
          "Your first attempt does not need to be perfect.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 10: Ready to Begin
    // ==========================================================================
    {
      id: "section-10",
      type: "text",
      content: {
        title: "Ready to Begin?",
        paragraphs: [
          "Start small. Keep it simple.",
          "",
          "You do not need to become an expert to benefit from AI.",
          "",
          "You only need a clear starting point and a little practice.",
          "",
          "Let's begin.",
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
        tool: "chatgpt",
        action: "Start using AI",
        task: "Open ChatGPT and explore how it can help with your first identified opportunity",
        feature: "New conversation",
        tip: "Bookmark chat.openai.com for quick access - you'll use it throughout this course",
      },
    },

    // ==========================================================================
    // MAIN CHALLENGE (ACTIONABLE TASK)
    // ==========================================================================
    {
      id: "main-challenge",
      type: "actionableTask",
      content: {
        title: "Your Challenge: The Opportunity Audit",
        purpose:
          "Identify one or two places in your work or life where AI could realistically help first.",
        instructions: [
          "1. Think about your typical week. Where do you repeat the same tasks or feel slowed down?",
          "2. List 3 specific areas where AI might help.",
          "3. For each one, write what would become easier if you had a better first draft, summary, or starting point.",
          "4. Choose one area to focus on first.",
        ],
        deliverable: "A list of 3 possible AI opportunities, with one priority chosen",
        estimatedTime: "5-10 minutes",
        successCriteria: [
          "You have 3 specific areas identified",
          "Each one is tied to a real task you already do",
          "You've chosen one area to focus on first",
          "You can explain why that one feels like a good starting point",
        ],
      },
    },
  ] as LessonSection[],
};
