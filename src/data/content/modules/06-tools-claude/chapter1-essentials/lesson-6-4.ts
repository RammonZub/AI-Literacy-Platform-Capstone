/**
 * Lesson 6.4: Claude's Transparency and Limitations
 *
 * CHAPTER: 1 - Claude Essentials
 * LESSON: 4 of 5 - Understanding Boundaries
 *
 * DURATION: 12 minutes (educational)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach learners about Claude's honest approach to limitations
 *
 * KEY RESPONSIBILITIES:
 * - Explain Claude's transparency about uncertainty
 * - Set realistic expectations
 * - Show how to work within limitations effectively
 */

import type { Lesson } from "@/types/content";

export const lesson_6_4: Lesson = {
  id: "lesson-6-4",
  chapterId: "ch6-1-essentials",
  moduleId: "06-tools-claude",
  title: "Claude's Transparency and Limitations",
  description: "Understand what Claude can and cannot do, and why its honesty is a strength",
  order: 4,
  estimatedMinutes: 12,
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
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-4-cover.webp",
        imageAlt: "Digital earth and global technology network",
        title: "Claude's Transparency and Limitations",
        subtitle:
          "Understanding what Claude can and cannot do is essential for using it effectively",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Honesty as a Feature",
        paragraphs: [
          "Most AI tools will confidently give wrong answers. Claude is designed to do something different: be honest about what it knows and doesn't know.",
          "",
          "This isn't a limitation—it's a deliberate design choice. When Claude says 'I'm not sure' or 'I don't have enough information,' that's transparency, not failure.",
          "",
          "In professional settings, this matters. An assistant who confidently misleads you is worse than one who says 'I need more information.' Claude is built to be the latter.",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "What Claude Won't Do",
        paragraphs: [
          "Claude has boundaries that reflect its commitment to being harmless and honest. Understanding these boundaries helps you work more effectively with Claude and know when to seek other resources.",
          "",
          "Claude won't provide real-time information. If you ask 'Who won the game yesterday?' Claude will explain that it doesn't have access to current information, including recent events, current stock prices, or the latest news. This isn't a limitation to work around—it's a fundamental aspect of how Claude is designed.",
          "",
          "Claude won't give definitive advice on critical decisions in domains like legal, medical, or financial matters. Claude can provide information, explain concepts, and help you think through problems, but it will always defer to qualified professionals for decisions that require specialized expertise. This isn't Claude being unhelpful—it's Claude being responsible.",
          "",
          "Claude won't pretend to certainty when certainty isn't warranted. If something is ambiguous, if Claude's training data is unclear on a topic, or if there's legitimate debate among experts, Claude will say so rather than presenting a false consensus. This intellectual honesty is a feature, not a bug.",
          "",
          "Finally, Claude won't bypass safety considerations. Requests that could cause harm—whether to individuals, groups, or systems—will be met with thoughtful refusal and often an explanation of why the request is problematic. These boundaries exist to ensure Claude remains a beneficial tool.",
        ],
      },
    },
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "The Knowledge Cutoff",
        insights: [
          "Claude's training data has a cutoff date",
          "It cannot access real-time information, browse the web, or retrieve current events",
          "For anything time-sensitive, provide context and verify independently",
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
        title: "When Claude Says 'I Don't Know'",
        situation:
          "Priya asked Claude about recent changes to tax regulations that affect her small business consulting work.",
        challenge:
          "She needed current, accurate information to advise her clients correctly, but Claude couldn't provide definitive answers about recent changes.",
        context: "Her clients rely on her for up-to-date guidance on tax matters.",
        outcome:
          "Instead of giving potentially outdated information, Claude explained its knowledge cutoff, helped Priya create a research checklist, and suggested specific questions to ask official sources. Priya appreciated the honesty and used Claude to prepare for her research on official government websites.",
      },
    },
    // ===========================================================================
    // SECTION 5: Contextual Image - Boundaries
    // ===========================================================================
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Working Within Boundaries",
        paragraphs: [
          "Every tool has its domain of excellence. Claude's boundaries are clearly defined, and understanding them helps you leverage its strengths while knowing when to seek additional resources or expertise.",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-4-inline-1.webp",
        imageAlt: "Person focusing on work with technology",
      },
    },
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Working Within Limitations",
        paragraphs: [
          "Claude's limitations become less limiting when you know how to work with them:",
          "",
          "**For time-sensitive topics**: Provide the current context as part of your prompt",
          "",
          "**For specialist topics**: Use Claude for explanation and synthesis, not definitive advice",
          "",
          "**For verification**: Ask Claude to 'help me create a checklist to verify this' rather than 'is this correct'",
          "",
          "**For uncertainty**: Explicitly ask 'What are you uncertain about here?' to get transparent assessment",
        ],
      },
    },
    {
      id: "section-7",
      type: "quickPrompt",
      content: {
        heading: "Test Transparency",
        description: "Ask Claude something it shouldn't know and observe its honest response.",
        promptText:
          "Ask Claude something it shouldn't know: 'Who won [last night's game / recent award / current event]?' Notice how it responds. Then ask: 'How do you recommend I find this information?'",
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
        action: "For this exercise",
        task: "Test Claude transparency by asking about real-time information",
        feature: "New conversation",
        tip: "Claude's honesty about limitations is a feature—use it to understand when to verify elsewhere",
      },
    },
    // ===========================================================================
    // SECTION 9: Quiz
    // ===========================================================================
    {
      id: "section-quiz",
      type: "quiz",
      content: {
        context: "Quick check on your understanding of Claude's transparency and limitations.",
        quiz: {
          question: "Why is Claude's honesty about its limitations considered a strength?",
          options: [
            "It makes Claude seem more human-like",
            "In professional settings, an assistant who admits uncertainty is more trustworthy than one who confidently misleads",
            "It reduces the amount of computing power needed",
            "It's required by law for AI companies",
          ],
          correctAnswer: 1,
        },
      },
    },
    // ===========================================================================
    // SECTION 10: Actionable Task (at END)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Test Claude's Boundaries",
        purpose:
          "Experience Claude transparency firsthand by asking questions that test its honesty about limitations.",
        instructions: [
          "Ask Claude 3 questions it shouldn't be able to answer definitively",
          "Observe how Claude responds to each—does it admit uncertainty?",
          "For each limitation, ask Claude to suggest how you could find accurate information",
          "Reflect on why this transparency is valuable in professional settings",
        ],
        deliverable:
          "Notes on Claude responses to unanswerable questions and its suggestions for finding accurate information",
        estimatedTime: "5-10 minutes",
        starterPrompt:
          "I want to understand your limitations. What are 3 questions you can't answer definitively, and why?",
        successCriteria: [
          "You asked Claude questions that test its knowledge boundaries",
          "You observed Claude's honest responses about uncertainty",
          "You received helpful suggestions for alternative information sources",
          "You understand why transparency about limitations is valuable",
        ],
      },
    },
    // ===========================================================================
    // SECTION 11: End-of-Lesson Checkpoint
    // ===========================================================================
    {
      id: "section-checkpoint",
      type: "checkpoint",
      content: {
        question: "Why is Claude honesty about uncertainty considered a feature, not a bug?",
        options: [
          "It saves Claude from having to research answers",
          "An assistant who admits uncertainty is more trustworthy than one who confidently misleads you",
          "It makes Claude easier to program",
          "It reduces server costs",
        ],
        correctAnswer: 1,
        hint: 'Review "Honesty as a Feature" and "The Knowledge Cutoff" sections if needed.',
      },
    },
    {
      id: "section-7",
      type: "completion",
      content: {
        title: "Working Within Boundaries",
        description:
          "Understanding Claude's limitations and honest approach makes you a more effective AI user. You now know when to rely on Claude and when to seek verification or professional expertise.",
        xpReward: 100,
        buttonText: "Complete Limitations Understanding",
      },
    },
  ],
};
