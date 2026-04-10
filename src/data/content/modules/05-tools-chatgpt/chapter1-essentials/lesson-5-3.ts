/**
 * Lesson 5.3: Getting What You Need (Be Clear & Specific)
 *
 * CHAPTER: 1 - ChatGPT Essentials
 * LESSON: 3 of 5 - Precision in Prompting
 *
 * DURATION: 12 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach clarity and specificity as core prompting skills
 *
 * KEY CONCEPTS:
 * - Ambiguity kills quality
 * - Specific examples guide AI toward your vision
 * - Length is not the same as specificity
 * - Test your prompt before using it for real work
 *
 * DESIGN NOTES:
 * - Focus on real-world ambiguity examples
 * - Show how to turn abstract into concrete
 * - Emphasize examples over length
 * - Practical testing approach
 */

import type { Lesson } from "@/types/content";

export const lesson_5_3: Lesson = {
  id: "lesson-5-3",
  chapterId: "ch5-1-essentials",
  moduleId: "05-tools-chatgpt",
  lessonCategory: "tutorial", // Skill-building tutorial
  title: "Getting What You Need (Be Clear & Specific)",
  description: "Stop getting close-but-not-quite results by mastering specificity",
  order: 3,
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
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-3-cover.webp",
        imageAlt: "Conversation and dialogue communication concept",
        title: "Getting What You Need",
        subtitle: "Stop getting close-but-not-quite results by mastering specificity",
      },
    },
    // ===========================================================================
    // SECTION 1: The Ambiguity Problem
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Ambiguity Problem",
        paragraphs: [
          '"Write a professional email."',
          "",
          "What does 'professional' mean? Formal? Corporate? Startup-casual? Direct? Diplomatic?",
          "",
          "ChatGPT will pick something. But it might not be what you wanted.",
          "",
          "The problem isn't ChatGPT. The problem is ambiguity.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Abstract vs. Concrete
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Abstract vs. Concrete",
        paragraphs: [
          'Every vague term has a specific alternative. Use it. When you say "Write a professional email," ChatGPT has to guess what you mean by professional. Does that mean formal corporate language? Friendly but polished? Somewhere in between? Instead, specify exactly: "Write a formal email to a senior executive" or "Write a friendly email to a long-time client." Each of these produces dramatically different output.',
          "",
          'The same principle applies everywhere. "Make it shorter" becomes "Reduce to 3 paragraphs or fewer." "Fix the tone" becomes "Make it more diplomatic but still direct" or "Make it warmer while keeping it professional." Even "Rewrite this" is too vague—specify "Rewrite focusing on clarity" or "Rewrite emphasizing the business impact." The pattern is clear: abstract instructions leave room for interpretation, while concrete instructions produce predictable, useful results.',
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Examples Trump Explanations
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Examples Trump Explanations",
        insights: [
          "Instead of explaining style, show it.",
          '"Write like we\'re friends" is okay.',
          "\"Write like this example: 'Hey! Great connecting yesterday...'\" is better.",
          "Examples give ChatGPT concrete patterns to follow. Explanations leave room for interpretation.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Length vs Specificity
    // ===========================================================================
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "Length ≠ Specificity",
        insights: [
          "You don't need a long prompt to be specific. You need specific words.",
          "'Write a sales email for freelance designers under 200 words' is short and precise.",
          "'Write a compelling email that really speaks to the target audience and drives action through persuasive language' is long and vague.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4.5: Clear Communication Visual
    // ===========================================================================
    {
      id: "section-4-5",
      type: "textWithImage",
      content: {
        title: "Precision in Communication",
        paragraphs: [
          "Specific examples guide AI toward your vision. Length is not the same as specificity. The best prompts are concise yet complete.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-3-inline-1.webp",
        imageAlt: "Code and programming precision technology",
      },
    },
    // ===========================================================================
    // SECTION 5: The Test-Before-You-Trust Rule
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "The Test-Before-You-Trust Rule",
        paragraphs: [
          "Before you use ChatGPT output for important work, develop a testing habit. First, read it aloud: does it sound like you? Like your organization? If something feels off when spoken, it will feel off when read. Second, check constraints: did ChatGPT follow your requirements exactly? Sometimes it adds things you didn't ask for or skips things you needed.",
          "",
          "Third, verify facts: are names, dates, and details accurate? ChatGPT can make confident mistakes, especially with specific information. Fourth, compare to examples: does the output match the style you showed? If you provided a sample, the result should feel like it belongs in the same family.",
          "",
          "If anything is off, iterate with ChatGPT. Saying \"This is close, but make it more...\" is how you get from good to great. Each round of feedback sharpens the output until it matches your vision. This back-and-forth isn't a sign of failure—it's the normal process of collaboration.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Quick Prompt
    // ===========================================================================
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "Practice: The Abstract-to-Concrete Challenge",
        description:
          "Take a prompt you've used (or write a new one). Identify 2-3 abstract terms and replace them with concrete specifics. Then test the difference.",
        promptText:
          "I need you to [concrete action]. The context is [specific situation]. Please make it [specific tone/style].",
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
        task: "Open ChatGPT and test your abstract-to-concrete prompt transformation. Compare both versions.",
        feature: "New conversation",
        tip: "Read responses aloud to catch tone mismatches quickly",
      },
    },
    // ===========================================================================
    // ACTIONABLE TASK: Skill-based lesson - keep task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Abstract-to-Concrete Challenge",
        purpose:
          "Replacing abstract terms with concrete specifics eliminates ambiguity and dramatically improves AI output quality. This habit will transform your prompting effectiveness.",
        instructions: [
          "Review your last 3 ChatGPT conversations or prompts",
          "Find 3 abstract words (professional, better, shorter, engaging, etc.)",
          "Replace each abstract word with a specific, measurable alternative",
          "Re-run at least one prompt with the concrete version and compare results",
        ],
        deliverable:
          "A before/after list of 3 abstract-to-concrete word replacements with results comparison",
        estimatedTime: "10 minutes",
        starterPrompt:
          "Instead of saying '[abstract word like professional]', I'll say '[specific: formal corporate style / friendly colleague tone / concise under 200 words / includes 3 bullet points]'.",
        successCriteria: [
          "Identified 3 abstract words from real prompts you've used",
          "Each replacement is specific and measurable",
          "Tested at least one concrete version in ChatGPT",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Completion
    // ===========================================================================
    {
      id: "section-8",
      type: "completion",
      content: {
        title: "Specificity Mastered",
        description:
          "You've learned to replace vague terms with specific ones. That small change transforms ChatGPT from a hit-or-miss tool into a reliable assistant.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
