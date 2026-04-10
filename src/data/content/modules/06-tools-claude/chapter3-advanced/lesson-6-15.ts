/**
 * Lesson 6.15: Responsible AI Use in Professional Settings
 *
 * CHAPTER: 3 - Advanced Features
 * LESSON: 5 of 5 - Ethics and Best Practices
 *
 * DURATION: 12 minutes (critical professional context)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Establish responsible AI use practices for professional work
 *
 * KEY RESPONSIBILITIES:
 * - Address ethical considerations
 * - Provide professional use guidelines
 * - Show how to use Claude responsibly in business contexts
 */

import type { Lesson } from "@/types/content";

export const lesson_6_15: Lesson = {
  id: "lesson-6-15",
  chapterId: "ch6-3-advanced",
  moduleId: "06-tools-claude",
  title: "Responsible AI Use in Professional Settings",
  description: "Best practices for using Claude ethically and effectively in professional contexts",
  order: 15,
  estimatedMinutes: 12,
  xpReward: 100,
  lessonCategory: "tutorial",
  format: "article",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-15-cover.webp",
        imageAlt: "Professional ethics and responsible AI use",
        title: "Responsible AI Use in Professional Settings",
        subtitle: "Use Claude transparently, thoughtfully, and with appropriate oversight",
      },
    },
    // ===========================================================================
    // SECTION 1: Professional Responsibility with AI
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Professional Responsibility with AI",
        paragraphs: [
          "Using AI in professional settings carries real responsibilities. Your choices affect quality, ethics, and how your organization is perceived.",
          "Responsible use isn't about avoiding AI-it's about using it transparently, thoughtfully, and with appropriate human oversight.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Tool Reference
    // ===========================================================================
    {
      id: "section-tool-reference",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "For professional use",
        task: "Review Anthropic's usage policies at anthropic.com/claude/terms",
        feature: "Terms of Service",
        tip: "Always check your organization's AI policies before using Claude for work",
      },
    },
    // ===========================================================================
    // SECTION 3: Core Principles
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Core Principles",
        paragraphs: [
          "Using AI in professional settings carries real responsibilities. Your choices affect the quality of your work, the ethics of your practices, and how your organization is perceived. These foundational principles guide responsible AI use.",
          "",
          "Transparency means being clear when AI is involved in work product or decisions. This isn't about disclosing every AI interaction, but about honesty in situations where AI involvement might be relevant to your audience or stakeholders. When AI plays a significant role in deliverables, people have a right to know.",
          "",
          "Human oversight ensures that critical decisions always have human review. AI can inform decisions, provide analysis, and suggest options, but the final judgment on important matters should rest with qualified humans who can consider context, implications, and nuances that AI might miss.",
          "",
          "Verification is non-negotiable for important facts. Never rely on AI for critical information without independent checking. Claude can be confidently wrong, and the consequences of acting on incorrect AI-generated information can be severe. Treat AI outputs as starting points for verification, not as verified facts.",
          "",
          "Data privacy requires vigilance about what you input. Don't share sensitive, confidential, or proprietary information with AI systems unless you fully understand how that data will be used and stored. When in doubt, redact or generalize.",
          "",
          "Bias awareness means recognizing that AI can reflect or amplify biases present in its training data. Review outputs critically, especially when they involve people or decisions that affect people. AI is not inherently neutral just because it's artificial.",
          "",
          "Attribution means acknowledging AI assistance where appropriate. The specifics depend on your context—your organization may have policies—but honesty about AI's role in your work builds trust and sets realistic expectations.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: The Verification Rule
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "The Verification Rule",
        insights: [
          "Verify anything important enough that you'd verify it from a human colleague",
          "AI is efficient but fallible-critical work requires human confirmation",
          "Professional standard: trust but verify",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Comparison Table
    // ===========================================================================
    {
      id: "section-comparison",
      type: "comparisonTable",
      content: {
        title: "Safe vs. Sensitive Data",
        intro: "Know what's appropriate to share with Claude:",
        columns: [
          { name: "Safe to Input", description: "Generally okay" },
          { name: "Never Input", description: "Keep private", recommended: true },
        ],
        rows: [
          {
            feature: "Examples",
            values: [
              "Public info, general questions, code snippets",
              "Passwords, SSN, financial data, trade secrets",
            ],
          },
          {
            feature: "Personal info",
            values: ["First names, general roles", "Full names with salaries, medical records"],
          },
          {
            feature: "Company data",
            values: ["Public products, general strategies", "Unreleased products, M&A details"],
          },
          {
            feature: "Client data",
            values: ["General project descriptions", "Client names with private details"],
          },
        ],
        footer:
          "When in doubt, redact or summarize. Claude can work well with generalized context.",
      },
    },
    // ===========================================================================
    // SECTION 6: Practical Guidelines
    // ===========================================================================
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Practical Guidelines",
        paragraphs: [
          "**For client work**: Understand your organization's policies on AI use. Some clients require disclosure.",
          "**For confidential data**: Don't input non-public information. Redact or summarize instead.",
          "**For attribution**: 'This draft was prepared with assistance from Claude (Anthropic)' is one way to acknowledge.",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-15-inline-1.webp",
        imageAlt: "Professional workflow and automation process",
      },
    },
    // ===========================================================================
    // SECTION 7: Redaction Practices
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Redaction Practices",
        paragraphs: [
          "When you need to share sensitive context without revealing specifics:",
          "- Replace names with 'Person A, Person B' or roles",
          "- Replace figures with percentages or ranges",
          "- Summarize situations instead of pasting full details",
          "- Use general industry terms instead of company specifics",
          "Claude can work surprisingly well with redacted context for most tasks.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Quick Prompt
    // ===========================================================================
    {
      id: "section-quick-prompt",
      type: "quickPrompt",
      content: {
        heading: "Practice: Responsible Prompting",
        description: "Practice redacting sensitive information before sending to Claude.",
        promptText:
          "I need help with [task]. Here's the redacted context: [replace names with roles, figures with percentages, specifics with generalizations]. What would you recommend?",
      },
    },
    // ===========================================================================
    // SECTION 9: Actionable Task (Inline)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create Your AI Use Policy",
        purpose:
          "Establish personal guidelines for responsible Claude use in your professional work.",
        instructions: [
          "Review your organization's policies on AI use (if any exist)",
          "List 3 types of data you should never input to Claude",
          "Write a personal policy: 'I will always...' and 'I will never...'",
          "Identify one verification habit you'll adopt going forward",
        ],
        deliverable: "A personal AI use policy document with clear do's and don'ts",
        estimatedTime: "10-15 minutes",
        starterPrompt: "Based on this lesson, I will establish these responsible AI practices...",
        successCriteria: [
          "You checked your organization's AI policies (or noted their absence)",
          "You identified data types to never share with AI",
          "You created a personal policy with clear guidelines",
          "You committed to at least one verification habit",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: End-of-Lesson Checkpoint
    // ===========================================================================
    {
      id: "section-quiz",
      type: "checkpoint",
      content: {
        question: "What should you NEVER input into Claude?",
        options: [
          "Questions about general topics",
          "Confidential information, passwords, sensitive personal data, or proprietary secrets",
          "Requests for writing help",
          "Questions about coding",
        ],
        correctAnswer: 1,
        hint: 'Review "What Never to Input" and "Verification Habits" sections if needed.',
      },
    },
    // ===========================================================================
    // SECTION 9: Completion
    // ===========================================================================
    {
      id: "section-7",
      type: "completion",
      content: {
        title: "Course Complete: Claude Mastery",
        description:
          "You've completed all three chapters of Claude Mastery: Essentials, Professional Applications, and Advanced Features. You now have practical skills for using Claude responsibly and effectively in professional work. Claude is a powerful amplifier of your expertise-use it thoughtfully, verify what matters, and always maintain human ownership of critical decisions.",
        xpReward: 100,
        buttonText: "Complete Claude Mastery",
      },
    },
  ],
};
