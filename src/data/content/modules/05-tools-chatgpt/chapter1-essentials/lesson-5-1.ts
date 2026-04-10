/**
 * Lesson 5.1: What is ChatGPT?
 *
 * CHAPTER: 1 - ChatGPT Essentials
 * LESSON: 1 of 5 - Welcome to Your AI Journey
 *
 * DURATION: 12 minutes (introductory)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Introduce ChatGPT with proper context, responsible AI awareness, and practical value
 *
 * KEY RESPONSIBILITIES:
 * - Set realistic expectations about AI capabilities
 * - Introduce hallucination concept upfront (per course outline)
 * - Show immediate practical value for professional work
 * - Establish responsible AI mindset from day one
 */

import type { Lesson } from "@/types/content";

export const lesson_5_1: Lesson = {
  id: "lesson-5-1",
  chapterId: "ch5-1-essentials",
  moduleId: "05-tools-chatgpt",
  lessonCategory: "theory", // Introductory/theoretical lesson
  title: "What is ChatGPT?",
  description: "Understand the AI tool that transformed how we work and communicate",
  order: 1,
  estimatedMinutes: 12,
  xpReward: 100,
  format: "article",
  sections: [
    // ===========================================================================
    // HERO IMAGE: Lesson opener
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-1-cover.webp",
        imageAlt: "AI technology artificial intelligence concept",
        title: "What is ChatGPT?",
        subtitle: "Understand the AI tool that transformed how we work and communicate",
      },
    },
    // ===========================================================================
    // SECTION 1: Why This Matters (Professional Hook)
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why This Matters to Your Work",
        paragraphs: [
          "Imagine having a research assistant who never sleeps, a writing partner who works at your pace, and a brainstorming partner available 24/7.",
          "",
          "That's the potential of ChatGPT—not to replace your expertise, but to amplify it.",
          "",
          "In December 2022, ChatGPT was released to the public. Within two months, it reached 100 million active users. By January 2023—just 60 days later—it hit 1 billion users.",
          "",
          "This wasn't gradual adoption. It was a paradigm shift in how humans interact with information and technology.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: The Old Way vs. New Way (Concrete Example)
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Before ChatGPT: The Old Way",
        paragraphs: [
          "Consider how you'd research 'writing a difficult email to a client about delays.' The old workflow meant opening ten or more browser tabs to find advice, templates, and examples. You'd manually read through articles, piecing together what applies to your specific situation. Then you'd draft multiple versions without any real-time feedback, hoping one of them sounds right.",
          "",
          "This process could easily consume an hour or more. And at the end, you still might not have an email that feels quite right for your specific client relationship and situation. The friction between having a need and getting help was enormous. Search engines gave you information, but you had to do all the synthesis yourself.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: ChatGPT's Value Proposition
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Enter ChatGPT: Conversational AI",
        paragraphs: [
          "ChatGPT isn't search—it's conversational. You don't hunt for answers. You talk to it like a colleague who knows everything.",
          "",
          "The difference is profound. With ChatGPT, you describe your situation once, get an immediate, thoughtful response. No perfect keywords required.",
          "",
          "For that difficult client email, you'd say: 'I need to write to a client about a 2-day delay on their project. They've been understanding before, but I want to be transparent. Help me draft something reassuring but honest.'",
          "",
          "ChatGPT responds with a draft you can review, edit, and send.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: The Power of Prompting (with context)
    // ===========================================================================
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "The Power of Prompting",
        insights: [
          "Good prompts transform ChatGPT from a chatbot into a powerful assistant",
          "The key is context over keywords",
          "Tell ChatGPT your situation, not just what you want",
          "Unlike search, ChatGPT remembers context across the conversation",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4.5: Conversational AI Visual
    // ===========================================================================
    {
      id: "section-4-5",
      type: "textWithImage",
      content: {
        title: "Conversational AI in Action",
        paragraphs: [
          "ChatGPT responds with a draft you can review, edit, and send. The conversation continues, refining the output until it matches exactly what you need.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-1-inline-1.webp",
        imageAlt: "AI conversation and dialogue technology",
      },
    },
    // ===========================================================================
    // SECTION 5: Responsible AI Introduction (Per Course Outline)
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Reality Check: What ChatGPT Can and Can't Do",
        paragraphs: [
          "ChatGPT is powerful, but it's not perfect. Understanding its limitations is just as important as understanding its capabilities. ChatGPT excels at drafting, brainstorming, explaining complex topics, organizing information, and suggesting improvements. These are the tasks where it truly shines and can save you significant time.",
          "",
          "However, ChatGPT is not reliable for current events after its training cutoff, specific facts without verification, legal or medical advice, or critical decisions without human review. The most important limitation to understand is what researchers call the hallucination problem: ChatGPT can confidently state incorrect information. It's not lying—it's generating based on patterns, not retrieving verified facts from a database.",
          "",
          "Your rule should be simple: always verify important information. If you'd fact-check a human colleague, fact-check ChatGPT. This mindset will keep you safe while still benefiting from everything AI has to offer.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5.5: Key Insight Card
    // ===========================================================================
    {
      id: "section-5-5",
      type: "highlightCard",
      content: {
        heading: "Remember: AI Augments, Not Replaces",
        insights: [
          "ChatGPT is a tool that amplifies your capabilities",
          "Your judgment, expertise, and creativity remain essential",
          "The best results come from human-AI collaboration",
          "Think of it as a smart assistant, not an oracle",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Quick Prompt (More Targeted)
    // ===========================================================================
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "Try It Now: Ask ChatGPT About Your Work",
        description: "Open ChatGPT and ask about ways it can help with your specific role.",
        promptText:
          "As a [your job role], what are three ways you could help me be more productive?",
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
        task: "Open ChatGPT and ask the question above. See what it suggests for your role.",
        feature: "New conversation",
        tip: "Start with a fresh conversation for each new topic to keep context clean",
      },
    },
    // NOTE: Introductory lesson - conceptual content uses quiz only, not task
    // ===========================================================================
    // SECTION 7.5: End-of-Lesson Checkpoint
    // ===========================================================================
    // NOTE: CheckpointSectionContent only supports single questions
    // Using the most important concept check here
    {
      id: "section-quiz",
      type: "checkpoint",
      content: {
        question: 'What is a "hallucination" in the context of ChatGPT?',
        options: [
          "When ChatGPT crashes and stops responding",
          "When ChatGPT confidently states incorrect information",
          "When ChatGPT refuses to answer a question",
          "When ChatGPT responds too slowly",
        ],
        correctAnswer: 1, // Index of correct answer (0-based)
        hint: 'Review the "Reality Check" section if you need a refresher.',
      },
    },
    // ===========================================================================
    // SECTION 8: Completion (After practical exercise)
    // ===========================================================================
    {
      id: "section-8",
      type: "completion",
      content: {
        title: "Your First AI Conversation",
        description:
          "You've just had your first real interaction with an AI. You've also learned something crucial: AI is powerful but requires human judgment. That mindset will serve you throughout this course.",
        xpReward: 100,
        buttonText: "Complete First Conversation",
      },
    },
  ],
};
