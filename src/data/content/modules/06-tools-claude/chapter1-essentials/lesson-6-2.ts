/**
 * Lesson 6.2: Getting Started with Claude
 *
 * CHAPTER: 1 - Claude Essentials
 * LESSON: 2 of 5 - Setting Up and Accessing Claude
 *
 * DURATION: 10 minutes (practical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Help learners access Claude and understand the interface options
 *
 * KEY RESPONSIBILITIES:
 * - Explain different access methods (web, API)
 * - Set up expectations for what they'll see
 * - Provide practical guidance for first interaction
 */

import type { Lesson } from "@/types/content";

export const lesson_6_2: Lesson = {
  id: "lesson-6-2",
  chapterId: "ch6-1-essentials",
  moduleId: "06-tools-claude",
  title: "Getting Started with Claude",
  description: "Learn how to access Claude and navigate its interface",
  order: 2,
  estimatedMinutes: 10,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-2-cover.webp",
        imageAlt: "Person working on laptop with AI interface",
        title: "Getting Started with Claude",
        subtitle:
          "Ready to begin your journey with Claude? Access one of the most capable AI assistants today.",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Accessing Claude",
        paragraphs: [
          "Claude is accessible through multiple channels, designed to meet different needs—from individual use to business integration.",
          "",
          "**claude.ai**: The primary web interface for chatting with Claude. No installation required—just create an account and start conversing.",
          "",
          "**API**: For developers and businesses, Anthropic offers an API to integrate Claude into applications, workflows, and custom tools.",
          "",
          "For most learners starting out, claude.ai is where you'll begin.",
        ],
      },
    },
    {
      id: "section-2",
      type: "textWithBullets",
      content: {
        title: "Creating Your Account",
        paragraphs: ["Getting started with Claude takes just a few minutes:"],
        bullets: [
          "**Visit claude.ai** and click 'Sign Up' or 'Get Started'",
          "**Choose your sign-up method**: Email/password, Google, or Apple ID",
          "**Verify your email** (check your inbox for a confirmation link)",
          "**Choose your plan**: Free tier available, with Pro options for heavier usage",
          "**Start chatting**: No credit card required for the free tier",
        ],
      },
    },
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Claude's Interface Philosophy",
        insights: [
          "Clean interface designed for extended dialogues",
          "Encourages back-and-forth exploration of topics",
          "Simple chat interface—focus on conversation quality",
          "Not about bells and whistles, but thoughtful interaction",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Real-World Scenario
    // ===========================================================================
    {
      id: "section-4",
      type: "scenarioCard",
      content: {
        title: "Getting Started Scenario",
        situation:
          "Elena just got assigned a new project that requires researching unfamiliar topics quickly. Her colleague suggested trying Claude.",
        challenge:
          "She's never used an AI assistant before and feels unsure about where to start or what to expect.",
        context: "She has 30 minutes before her next meeting to set up and try it out.",
        outcome:
          "Elena created her account in 2 minutes, asked Claude to help her understand the basics of her research topic, and left the conversation with a clear outline and 5 sources to explore. She now uses Claude daily.",
      },
    },
    // ===========================================================================
    // SECTION 5: Contextual Image - Interface
    // ===========================================================================
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "A Clean, Focused Interface",
        paragraphs: [
          "Claude's web interface is intentionally minimal. Rather than overwhelming you with options, it focuses on what matters most: quality conversations. The design encourages extended dialogues where you can explore ideas deeply.",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-2-inline-1.webp",
        imageAlt: "Clean modern computer interface",
      },
    },
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Free Tier vs. Pro",
        paragraphs: [
          "Claude offers a free tier that's genuinely useful for learning and moderate use. This isn't a crippled demo—it's a fully functional version of Claude that lets you experience the full power of conversational AI without any financial commitment.",
          "",
          "The Free Tier provides enough daily usage for most individual learners to explore Claude's capabilities thoroughly. You get access to Claude's core capabilities, including the ability to have extended conversations, create artifacts, and use projects. For exploring and learning, the free tier is an excellent starting point.",
          "",
          "The Pro Tier offers higher usage limits for power users who find themselves hitting the free tier caps. It also provides priority access during busy periods when demand is high, and early access to new features as they're released. For professionals who use Claude as a core part of their daily workflow, these benefits often justify the subscription cost.",
          "",
          "Our recommendation: Start with the free tier. Use it extensively during this course and in your daily work. Upgrade only if you consistently hit usage limits and find yourself wanting more. There's no rush—Claude's capabilities are fully available to explore on the free tier.",
        ],
      },
    },
    {
      id: "section-7",
      type: "quickPrompt",
      content: {
        heading: "Your First Claude Conversation",
        description: "Now that you have access, try your first meaningful prompt.",
        promptText:
          "Help me understand [a topic you're curious about]. Start by asking me what I already know about it, so you can tailor your explanation.",
      },
    },
    // ===========================================================================
    // SECTION 8: Tool Reference
    // ===========================================================================
    {
      id: "section-8",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "For this lesson",
        task: "Create your Claude account and have your first conversation",
        feature: "New conversation",
        tip: "Bookmark claude.ai for quick access during this course",
      },
    },
    // ===========================================================================
    // SECTION 9: Actionable Task (at END)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Set Up Claude Today",
        purpose:
          "Get hands-on experience with Claude's interface and understand how it can help in your specific role.",
        instructions: [
          "If you haven't already, create your Claude account at claude.ai",
          "Explore the interface - notice how clean and conversation-focused it is",
          "Ask Claude: 'What are 5 ways you could help someone in my role?'",
          "Save or note the response - you'll reference it in the next lesson",
        ],
        deliverable:
          "A Claude account set up and a saved response listing 5 ways Claude can help your role",
        estimatedTime: "5-10 minutes",
        starterPrompt:
          "I'm a [your role] in [your industry]. What are 5 specific ways you could help me be more effective at my work?",
        successCriteria: [
          "You have an active Claude account",
          "You've explored the interface and understand its layout",
          "You have a saved list of ways Claude can help your role",
          "You're ready to start using Claude for real tasks",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: End-of-Lesson Checkpoint
    // ===========================================================================
    {
      id: "section-checkpoint",
      type: "checkpoint",
      content: {
        question: "Where can you access Claude for personal use?",
        options: [
          "Only through mobile apps",
          "Only through API integration",
          "claude.ai web interface and API",
          "Only through enterprise software",
        ],
        correctAnswer: 2,
        hint: 'Review "Accessing Claude" and "Claude Interface Philosophy" sections if needed.',
      },
    },
    {
      id: "section-7",
      type: "completion",
      content: {
        title: "You're Ready to Use Claude",
        description:
          "You now have access to Claude and understand how to navigate its interface. Next up: learning how to have effective conversations with Claude.",
        xpReward: 100,
        buttonText: "Complete Setup",
      },
    },
  ],
};
