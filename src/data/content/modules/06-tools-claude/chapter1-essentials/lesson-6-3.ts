/**
 * Lesson 6.3: Effective Conversations with Claude
 *
 * CHAPTER: 1 - Claude Essentials
 * LESSON: 3 of 5 - Communication Best Practices
 *
 * DURATION: 15 minutes (practical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach learners how to communicate effectively with Claude
 *
 * KEY RESPONSIBILITIES:
 * - Explain Claude's conversational strengths
 * - Provide practical prompting patterns
 * - Show examples of good vs. bad prompts
 */

import type { Lesson } from "@/types/content";

export const lesson_6_3: Lesson = {
  id: "lesson-6-3",
  chapterId: "ch6-1-essentials",
  moduleId: "06-tools-claude",
  title: "Effective Conversations with Claude",
  description: "Learn how to communicate effectively to get the best results",
  order: 3,
  estimatedMinutes: 15,
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
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-3-cover.webp",
        imageAlt: "People having a thoughtful conversation",
        title: "Effective Conversations with Claude",
        subtitle: "The quality of your results depends on how you communicate",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Conversations, Not Commands",
        paragraphs: [
          "Claude is designed for conversation, not just commands. This isn't just philosophy—it's practical guidance for better results.",
          "",
          "When you treat interactions as conversations, Claude can ask clarifying questions, make suggestions you didn't anticipate, and help refine your thinking. When you treat it as a command-line tool, you miss out on Claude's biggest strengths.",
          "",
          "Think: 'collaborative discussion' rather than 'query and response.'",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Good Prompt vs. Great Prompt",
        paragraphs: [
          "The difference between adequate and exceptional results often comes down to how you frame the conversation. This isn't about using magic words—it's about giving Claude the context it needs to be genuinely helpful.",
          "",
          "Consider the difference between an adequate prompt and a great one. An adequate prompt might be 'Write an email about the project delay.' Claude will produce something, but it won't know who you're emailing, what the relationship is, or what tone is appropriate.",
          "",
          "A better prompt would be: 'I need to email a client about a 2-day delay. They've been understanding before, but I want to be transparent. Help me draft something reassuring but honest.' Now Claude understands the audience, the relationship history, your communication goals, and the tone you want to strike. The output will be dramatically more useful.",
          "",
          "The same principle applies to analysis tasks. 'Analyze this data' is adequate but vague. A better approach is: 'I have sales data from Q1 and Q2. I'm trying to understand why Q2 performed better. Can you help me analyze what might have changed?' This gives Claude a specific analytical goal and invites the kind of targeted help that produces genuine insights.",
          "",
          "The pattern is clear: context transforms Claude from a generic assistant into a genuinely helpful partner who understands your specific situation.",
        ],
      },
    },
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "The Context Principle",
        insights: [
          "Claude excels when you provide context: your role, your goal, your audience, your constraints",
          "The more Claude understands about your situation, the more helpful and relevant its responses will be",
          "Think: collaborative discussion rather than query and response",
          "Unlike search, context over keywords—tell Claude your situation, not just what you want",
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
        title: "The Power of Context",
        situation:
          "James needs to write a difficult email to a vendor about a pricing dispute. He's frustrated and wants to resolve the issue professionally.",
        challenge:
          "He's not sure how to be firm without damaging the relationship, and his first draft came across as too aggressive.",
        context:
          "This vendor has been reliable for 3 years, and James wants to maintain the partnership.",
        outcome:
          "James provided Claude with context about the relationship, his goals, and his concerns. Claude helped him draft an email that was firm about the pricing issue while acknowledging the vendor's value. The vendor responded positively and they reached a compromise.",
      },
    },
    // ===========================================================================
    // SECTION 5: Contextual Image - Dialogue
    // ===========================================================================
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "The Power of Dialogue",
        paragraphs: [
          "Great conversations with Claude are like great conversations with a thoughtful colleague—they build on each other, explore nuances, and arrive at insights neither party would have reached alone.",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-3-inline-1.webp",
        imageAlt: "Team collaboration and discussion",
      },
    },
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Inviting Refinement",
        paragraphs: [
          "One of Claude's strengths is its ability to help you think through problems. Invite this by:",
          "",
          "**Asking for alternatives**: 'What are other ways to approach this?'",
          "",
          "**Requesting critique**: 'What might be wrong with this plan?'",
          "",
          "**Seeking clarity**: 'Can you explain that example in simpler terms?'",
          "",
          "**Exploring trade-offs**: 'Help me understand the pros and cons of...'",
          "",
          "These aren't just questions—they're invitations for Claude to be genuinely helpful, not just generative.",
        ],
      },
    },
    {
      id: "section-7",
      type: "quickPrompt",
      content: {
        heading: "Practice: Context-Rich Prompting",
        description: "Think of a work task you do regularly and ask Claude how it could help.",
        promptText:
          "Tell Claude: 'I regularly need to [describe task]. Here's my role: [your role]. Here's who I'm doing this for: [audience]. Help me understand how you could make this faster or better for me.'",
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
        task: "Practice context-rich prompting using the template above",
        feature: "New conversation",
        tip: "The more context you provide upfront, the better Claude can help you",
      },
    },
    // ===========================================================================
    // SECTION 9: Actionable Task (at END)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Upgrade a Real Prompt",
        purpose:
          "Practice the context principle by transforming a basic prompt into a context-rich one that gets better results.",
        instructions: [
          "Think of a request you've made to any AI (or wanted to make)",
          "Write it in its original basic form first",
          "Rewrite it using the context principle: add your role, goal, audience, and constraints",
          "Send both to Claude and compare the quality of responses",
        ],
        deliverable:
          "Two versions of a prompt (basic and context-rich) with notes on how the responses differed",
        estimatedTime: "5-10 minutes",
        successCriteria: [
          "You've created a basic prompt and an upgraded context-rich version",
          "Your upgraded prompt includes role, goal, audience, and constraints",
          "You've compared Claude's responses to both versions",
          "You understand why more context leads to better responses",
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
        question: 'What is the "Context Principle" when working with Claude?',
        options: [
          "Only provide context if Claude asks for it",
          "Claude excels when you provide context: your role, goal, audience, and constraints",
          "Keep prompts as short as possible to save time",
          "Only use keywords, not full sentences",
        ],
        correctAnswer: 1,
        hint: 'Review "The Context Principle" and "Inviting Refinement" sections if needed.',
      },
    },
    {
      id: "section-7",
      type: "completion",
      content: {
        title: "Conversational Mastery Begins",
        description:
          "You now understand how to have effective conversations with Claude. Context, clarity, and inviting collaboration are the keys to exceptional results.",
        xpReward: 100,
        buttonText: "Complete Conversation Skills",
      },
    },
  ],
};
