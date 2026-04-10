/**
 * Day 1: What AI Is & Why It Matters Now
 *
 * THEORY LESSON - AI Foundations
 * The critical first lesson that establishes context before any tool tutorials.
 *
 * Structure:
 * - Hero image with welcoming message
 * - Opening hook (relatable scenario)
 * - What AI actually is (plain language)
 * - Why NOW matters (not in 5 years)
 * - What you'll build in 28 days (preview)
 * - Quiz for engagement
 * - Key insights card
 * - Actionable task (sign up)
 * - NO gamification
 */

import type { Lesson } from "@/types/content";

export const lessonDay1: Lesson = {
  id: "day-1",
  chapterId: "chapter1-foundations",
  moduleId: "10-challenge-28-day-ai",
  title: "What AI Is & Why It Matters Now",
  description:
    "Understand what AI actually is (no jargon) and why 2024-2026 is the time to learn it. The practical foundation for everything that follows.",
  order: 1,
  format: "article",
  lessonCategory: "theory",
  estimatedMinutes: 12,

  imageSearchTerms: [
    "artificial intelligence concept bright colorful",
    "technology transformation modern workspace",
    "AI assistant helpful friendly",
  ],

  sections: [
    // === HERO SECTION ===
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-1-cover.webp",
        imageAlt: "AI Foundations",
        title: "Day 1: What AI Is & Why It Matters Now",
        subtitle:
          "The practical foundation that changes how you think about AI. No jargon, no hype — just what you need to know.",
      },
    },

    // === OPENING HOOK ===
    {
      id: "hook",
      type: "text",
      content: {
        paragraphs: [
          "You've heard AI will change everything. Replace jobs. Transform industries. Maybe even threaten humanity.",
          "",
          "But what does that actually mean for YOU, today, in your work and life?",
          "",
          "Here's what nobody tells you: AI isn't coming in 5 years. It's here now. And the gap between people who know how to use it and those who don't is growing every day.",
          "",
          "The good news? You don't need to be technical. You don't need to understand neural networks. You just need to know how to work with these tools — and that's exactly what this challenge teaches.",
        ],
      },
    },

    // === WHAT AI IS ===
    {
      id: "what-ai-is",
      type: "text",
      content: {
        title: "What AI Actually Is (In Plain Language)",
        paragraphs: [
          "When we say 'AI' in this course, we're talking about **Large Language Models (LLMs)** — tools like ChatGPT, Claude, and Gemini. At their core, these systems are sophisticated pattern matchers, trained on billions of text examples to predict what comes next. Think of it like autocomplete on steroids: given a prompt, the model generates the most likely continuation based on everything it has learned.",
          "",
          "What makes these tools remarkable is how you interact with them. You don't need code, technical jargon, or special commands. You simply have a conversation in plain English (or Spanish, French, Mandarin—virtually any language). Ask a question, get an answer. Request help with a task, receive a draft. Describe a problem, explore solutions together.",
          "",
          "These AI systems excel as creative assistants. They can write emails, analyze documents, brainstorm ideas, explain complex topics, and help you think through challenging problems. They're incredibly versatile—useful for everything from drafting a difficult conversation to breaking down a technical concept into simple terms.",
          "",
          "But here's the crucial caveat: they're not perfect. AI can confidently state incorrect information, invent facts that don't exist, and miss nuances that a human would catch. This means you should always verify important information, especially for anything high-stakes. Think of AI as a brilliant but occasionally unreliable colleague—one whose work you'd want to double-check before sending to the CEO.",
          "",
          "Despite these limitations, the practical value is enormous. For writing, analyzing, researching, and automating repetitive mental tasks, these tools can reduce hours of work to minutes. The key is learning to direct them effectively—which is exactly what this challenge teaches.",
        ],
      },
    },

    // === IMAGE BREAK ===
    {
      id: "context-image",
      type: "textWithImage",
      content: {
        title: "AI as Your Thinking Partner",
        paragraphs: [
          "Think of AI less like a search engine and more like a smart colleague who's available 24/7, never gets tired, and can help with almost any mental task.",
        ],
        image: {
          src: "/images/courses/modules/10-challenge-28-day-ai/day-1-inline-1.webp",
          alt: "AI as collaborative partner",
          caption: "AI works best as an amplifier of your skills, not a replacement",
        },
      },
    },

    // === WHY NOW ===
    {
      id: "why-now",
      type: "textWithBullets",
      content: {
        title: "Why NOW Matters (Not In 5 Years)",
        paragraphs: [
          "AI research has existed for decades. So why is everyone talking about it right now?",
        ],
        bullets: [
          "**November 2022:** ChatGPT launched — first AI that felt genuinely useful to regular people",
          "**2023:** Massive improvements. Tools became faster, smarter, and more accessible",
          "**2024-2025:** Quality reached 'daily use' level. These tools actually work now",
          "**2026 and beyond:** The gap between AI-users and non-users will define professional success",
          "",
          "**The window:** Early adopters are building skills while others wait. Every month you delay, you fall further behind.",
        ],
      },
    },

    // === QUIZ 1 ===
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "Let's check your understanding of what AI actually is.",
        quiz: {
          question: "Which statement about AI (Large Language Models) is TRUE?",
          options: [
            "AI is perfect and never makes mistakes",
            "AI will definitely replace all human jobs within 5 years",
            "AI is a tool that amplifies human capabilities when used well",
            "AI is only useful for programmers and technical people",
          ],
          correctAnswer: 2,
        },
      },
    },

    // === WHAT YOU'LL BUILD ===
    {
      id: "what-youll-build",
      type: "textWithBullets",
      content: {
        title: "What You'll Build in 28 Days",
        paragraphs: [
          "By the end of this challenge, you'll have practical skills that most professionals don't have yet. Here's your journey:",
        ],
        bullets: [
          "**Week 1 (Days 1-7):** Master the fundamentals — what AI is, your first tool, and how to prompt effectively",
          "**Week 2 (Days 8-14):** Become a multi-tool user — Claude, Gemini, Midjourney, plus analysis skills",
          "**Week 3 (Days 15-21):** Apply to your life — career, business, and automation basics",
          "**Week 4 (Days 22-28):** Advanced mastery — Custom GPTs, AI agents, and your personal workflow system",
          "",
          "**The result:** You'll be able to complete in 15 minutes what used to take you an hour.",
        ],
      },
    },

    // === THE MINDSET SHIFT ===
    {
      id: "mindset",
      type: "text",
      content: {
        title: "The Mindset Shift",
        paragraphs: [
          "Before we dive into tools, let's establish the right mental framework:",
          "",
          "**❌ Wrong mindset:** 'AI will replace me. I need to learn it to survive.'",
          "",
          "**✅ Right mindset:** 'AI will amplify me. I'm learning it to become more effective.'",
          "",
          "The research is clear: people who use AI as a collaborator outperform those who use it as a crutch. Your goal isn't to have AI do your work — it's to have AI help you do your best work.",
          "",
          "The professionals who thrive will be those who can **direct AI effectively**, **evaluate its outputs critically**, and **integrate it into real workflows**. That's exactly what this challenge teaches.",
        ],
      },
    },

    // === QUIZ 2 ===
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        context: "One more check on the core concept.",
        quiz: {
          question: "What's the best way to think about AI tools like ChatGPT and Claude?",
          options: [
            "As replacements for human workers that will do everything for me",
            "As amplifiers that help me work faster and think better",
            "As search engines that just find information",
            "As entertainment tools with no practical use",
          ],
          correctAnswer: 1,
        },
      },
    },

    // === KEY INSIGHTS ===
    {
      id: "key-insight",
      type: "highlightCard",
      content: {
        heading: "Day 1 Key Takeaways",
        insights: [
          "AI is here NOW, not in 5 years — the tools are mature and ready for daily use",
          "Think of AI as an amplifier of your skills, not a replacement",
          "The gap between AI-users and non-users is growing every day",
          "No technical background needed — you just need to learn how to direct these tools",
        ],
      },
    },

    // === MAIN CHALLENGE ===
    {
      id: "main-challenge",
      type: "actionableTask",
      content: {
        title: "Your Challenge: Set Up Your First AI Tool",
        purpose:
          "Get your first AI tool set up and have your first conversation. This removes the barrier to entry and gives you immediate hands-on experience with AI interaction.",
        instructions: [
          "1. Go to **chat.openai.com** and create a free account (Google login is fastest)",
          "2. Once you're in, introduce yourself with this prompt:",
          "   \"Hi, I'm [your name]. I work as a [your role] and I'm learning to use AI tools. What are three things you could help me with today?\"",
          "3. Read the response and ask one follow-up question about something that interests you",
          "4. Notice: Did you get a useful response? What would make your question better?",
        ],
        deliverable: "A screenshot or short note about your first AI conversation",
        estimatedTime: "5-10 minutes",
        starterPrompt:
          "Hi, I'm [your name] and I work as a [your role]. I'm new to AI tools. What are three things you could help me with today?",
        successCriteria: [
          "You have a ChatGPT account set up and can access it",
          "You've had your first AI conversation and received a helpful response",
          "You understand that follow-up questions improve results",
          "You're ready to learn more structured prompting tomorrow",
        ],
      },
    },
  ],
};

export default lessonDay1;
