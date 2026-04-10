/**
 * Lesson 7.1: Welcome — What Is AI Literacy and Why Does It Matter?
 *
 * CHAPTER: 1 - Getting Started — Your AI Partner at Work
 * LESSON: 1 of 5 - Welcome to Your AI Journey
 *
 * DURATION: 15 minutes (introductory)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Introduce AI literacy concepts and set learners up for success
 *
 * KEY RESPONSIBILITIES:
 * - Demystify AI literacy for non-technical professionals
 * - Build confidence by relating AI to familiar skills
 * - Establish practical expectations for the course
 * - Create excitement about Gemini as their AI partner
 */

import type { Lesson } from "@/types/content";

export const lesson_7_1: Lesson = {
  id: "lesson-7-1",
  chapterId: "ch7-1-essentials",
  moduleId: "07-tools-gemini",
  title: "Welcome — What Is AI Literacy and Why Does It Matter?",
  description: "Discover what AI literacy means and why it matters for your professional life",
  order: 1,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "theory",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-1-cover.webp",
        imageAlt: "Artificial intelligence technology concept",
        title: "Welcome to AI Literacy",
        subtitle: "Your journey to mastering AI starts here",
      },
    },
    // ===========================================================================
    // SECTION 1: Introduction
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        paragraphs: [
          "You're about to learn one of the most valuable skills for the modern workplace—and the good news? You already have the foundations.",
          "",
          "AI literacy isn't about becoming a programmer. It's about learning to have productive conversations with AI tools like Gemini.",
          "",
          "Think of it like learning email, a smartphone, or video conferencing—skills that once seemed complex but are now second nature.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: What AI Literacy Really Means
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "What AI Literacy Really Means",
        paragraphs: [
          "AI literacy is simply understanding how to work with AI tools to make your life easier. You don't need to understand how your phone works internally to use it well. Similarly, you don't need to understand AI's inner workings to use it effectively.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: What You Need
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "What You DO Need",
        insights: [
          "Clear communication: Asking for what you want",
          "Good judgment: Knowing when AI helps and when it doesn't",
          "Practical experience: Trying things and learning what works",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Your Natural Advantages
    // ===========================================================================
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "Your Natural Advantages",
        insights: [
          "Decades of communication experience = better AI prompts",
          "Professional judgment = knowing when to trust AI output",
          "Domain expertise = asking the right questions",
          "Life experience = understanding context AI lacks",
          "Your experience + AI = powerful combination",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Visual Break
    // ===========================================================================
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Your Experience Is Your Superpower",
        paragraphs: [
          "Many people think AI puts experienced professionals at a disadvantage. The opposite is true. Your years of experience give you context, judgment, and communication skills that make you BETTER at using AI than someone without that background.",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-1-inline-1.webp",
        imageAlt: "Professional collaboration and teamwork",
      },
    },
    // ===========================================================================
    // SECTION 6: Why This Matters Now
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Why This Matters Now",
        paragraphs: [
          "AI is transforming how work gets done, and developing AI literacy today puts you ahead of the curve. Tasks that once took hours can now take minutes when you know how to work with AI effectively. You gain access to information and analysis that simply wasn't available before, enabling better decisions in less time.",
          "",
          "The professionals who embrace AI now are increasingly in demand. They spend less time on tedious tasks and more time on work that matters. Think about it this way: a decade ago, email skills were optional. Today, they're essential. AI literacy is following the same trajectory. The question isn't whether you'll need these skills—it's whether you'll develop them early or play catch-up later.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: What This Course Delivers
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "What This Course Delivers",
        paragraphs: [
          "This Gemini course is designed specifically for busy professionals like you. With 27 bite-sized lessons of about 15 minutes each, you can learn at your own pace without overwhelming your schedule. There's no technical jargon—every term is explained in plain language you can understand.",
          "",
          "Every lesson includes practical examples you can apply immediately at work. The focus is on the Google ecosystem you already know: Gmail, Docs, Sheets, and more. You'll also learn to use AI anywhere with mobile-first features, and discover Gemini's unique ability to access real-time information through live search. This isn't theory—it's practical skills you'll use starting today.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Learning Approach
    // ===========================================================================
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Our Learning Approach",
        paragraphs: [
          "This isn't a lecture. It's hands-on practice with immediate results.",
          "",
          "**Learn by doing**: Every lesson includes something to try right now",
          "**Build gradually**: Start simple, add sophistication over time",
          "**Apply immediately**: Every skill has a real workplace application",
          "**Take breaks**: Learning isn't a race—go at your own pace",
          "",
          "By the end of this course, you'll have a personal library of prompts, workflows, and techniques that make AI work for YOU.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: Quick Prompt
    // ===========================================================================
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Set Your Intention",
        description:
          "Before we dive in, think about what you want to achieve. Complete this sentence for yourself:",
        promptText:
          "I want to use Gemini to help me with [your biggest work challenge or most time-consuming task].",
      },
    },
    // ===========================================================================
    // SECTION 10: Completion
    // ===========================================================================
    {
      id: "section-11",
      type: "completion",
      content: {
        title: "Your AI Journey Begins",
        description:
          "You've taken the first step into AI literacy. You now understand that AI literacy is a learnable skill that builds on strengths you already have. Next up: discovering what makes Gemini unique.",
        xpReward: 100,
        buttonText: "Begin My AI Journey",
      },
    },
  ],
};
