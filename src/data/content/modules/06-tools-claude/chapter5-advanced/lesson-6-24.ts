/**
 * Lesson 6.24: Claude Chrome Extension
 *
 * CHAPTER: 5 - Advanced Features Deep Dive
 * LESSON: 4 of 4 - Browser Integration
 *
 * DURATION: 12 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Master the Claude Chrome Extension for seamless browsing workflow integration
 *
 * KEY RESPONSIBILITIES:
 * - Explain installation and setup
 * - Demonstrate web page summarization
 * - Show research workflow integration
 */

import type { Lesson } from "@/types/content";

export const lesson_6_24: Lesson = {
  id: "lesson-6-24",
  chapterId: "ch6-5-advanced",
  moduleId: "06-tools-claude",
  lessonCategory: "tutorial",
  title: "Claude Chrome Extension",
  description:
    "Integrate Claude into your browsing workflow for research and productivity on any webpage",
  order: 24,
  estimatedMinutes: 12,
  xpReward: 100,
  format: "article",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-24-cover.webp",
        imageAlt: "Claude Chrome Extension for browser productivity",
        title: "Claude Chrome Extension",
        subtitle:
          "Integrate Claude into your browsing workflow for research and productivity on any webpage",
      },
    },
    // ===========================================================================
    // SECTION 1: Cover Introduction
    // ===========================================================================
    {
      id: "section-cover",
      type: "textWithImage",
      content: {
        title: "Claude Chrome Extension",
        paragraphs: [
          "The Claude Chrome Extension brings AI assistance directly into your browsing experience. Summarize articles, extract key information, and get writing help—without leaving the webpage.",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-24-inline-1.webp",
        imageAlt: "Browser extension and web browsing productivity",
      },
    },
    // ===========================================================================
    // SECTION 2: Installation and Setup
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Installation and Setup",
        paragraphs: [
          "Getting started with the Claude Chrome Extension is straightforward:",
          "",
          "**Step 1**: Open the Chrome Web Store and search for 'Claude AI' or visit Anthropic's official extension page.",
          "",
          "**Step 2**: Click 'Add to Chrome' and confirm the installation.",
          "",
          "**Step 3**: Pin the extension to your toolbar for easy access.",
          "",
          "**Step 4**: Log in with your Claude account to sync your settings and conversation history.",
          "",
          "The extension works with your existing Claude subscription—no separate account needed.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: The Side Panel Interface
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "The Side Panel Interface",
        paragraphs: [
          "The extension opens as a side panel, keeping the webpage visible while you work with Claude. This design choice is intentional and powerful—you don't have to switch contexts or lose your place on the page to get AI assistance.",
          "",
          "Quick access is built into the interface through keyboard shortcuts. The default shortcut (usually Ctrl/Cmd + Shift + K) lets you open Claude instantly without reaching for your mouse. Learning this shortcut dramatically speeds up your workflow.",
          "",
          "Context awareness is what makes the extension special. Claude can see the content of the page you're viewing, which means you can ask questions about what you're reading without copying and pasting. This seamless integration is the key benefit of the extension over the web interface.",
          "",
          "Floating mode provides a lightweight option for quick questions. When you don't need a full side panel conversation, the floating button lets you ask rapid questions and get immediate answers without interrupting your browsing flow.",
          "",
          "Full conversations are supported in the side panel for when you need extended interaction. You can have multi-turn conversations with Claude about the page content, building understanding through back-and-forth dialogue.",
          "",
          "Export options let you save or copy Claude's responses easily. When Claude provides valuable analysis or summaries, you can capture that content for later use in your notes, documents, or other applications.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Summarizing Web Pages
    // ===========================================================================
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "Web Page Summarization",
        insights: [
          "One click summarizes the current article or page",
          "Extract key points without reading everything",
          "Ask follow-up questions about the content",
          "Perfect for research, news, and long-form content",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Research Workflows
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Research Workflows",
        paragraphs: [
          "The extension transforms how you conduct online research:",
          "",
          "**Multi-source synthesis**: Summarize multiple articles, then ask Claude to find common themes or contradictions.",
          "",
          "**Fact-checking assistance**: 'What claims in this article should I verify?'",
          "",
          "**Note-taking**: 'Extract the key statistics from this report and format them as a table.'",
          "",
          "**Learning acceleration**: 'Explain this technical concept in simpler terms.'",
          "",
          "**Citation help**: 'Generate a citation for this article in APA format.'",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Writing Assistance Anywhere
    // ===========================================================================
    {
      id: "section-6",
      type: "textWithImage",
      content: {
        title: "Writing Assistance Anywhere",
        paragraphs: [
          "The extension works with text fields across the web:",
          "",
          "**Email composition**: Draft, edit, and refine emails in Gmail, Outlook, or any webmail.",
          "**Social media**: Craft posts for LinkedIn, Twitter, or Facebook.",
          "**Form responses**: Get help with applications, surveys, or submissions.",
          "**Comment sections**: Write thoughtful responses to articles or discussions.",
          "",
          "Select any text, right-click, and ask Claude to explain, summarize, or rewrite it.",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-24-inline-2.webp",
        imageAlt: "Writing and content creation assistance",
      },
    },
    // ===========================================================================
    // SECTION 6b: Comparison Table
    // ===========================================================================
    {
      id: "section-6b",
      type: "comparisonTable",
      content: {
        title: "Claude Web Interface vs Chrome Extension",
        intro: "Each access method has unique advantages for different workflows.",
        columns: [{ name: "Feature" }, { name: "Claude Web App" }, { name: "Chrome Extension" }],
        rows: [
          {
            feature: "Context",
            values: ["Manual copy-paste or file upload", "Automatic page awareness"],
          },
          {
            feature: "Multi-turn Chats",
            values: ["Full conversation history", "Session-based in side panel"],
          },
          { feature: "Projects", values: ["Full project management", "Save to existing projects"] },
          { feature: "Artifacts", values: ["Full artifact creation", "View existing artifacts"] },
          {
            feature: "Best For",
            values: ["Deep work, long sessions", "Quick tasks, web research"],
          },
          { feature: "Availability", values: ["claude.ai only", "Any webpage you visit"] },
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Pro Tips
    // ===========================================================================
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "Pro Tips for the Chrome Extension",
        insights: [
          "Set up custom keyboard shortcuts for common actions",
          "Select specific text before opening Claude to focus on that content",
          "Save important findings to a Claude Project for future reference",
          "Open multiple tabs, summarize each, then synthesize in a main conversation",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Tool Reference
    // ===========================================================================
    {
      id: "section-tool-reference",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "For browser integration",
        task: "Install the Claude Chrome Extension and use it to summarize, analyze, or get writing help on any webpage",
        feature: "Chrome Extension",
        tip: "Pin to toolbar for one-click access, and select text before opening for focused context",
      },
    },
    // ===========================================================================
    // SECTION 9: Quick Prompt
    // ===========================================================================
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Try the Extension",
        description: "Install the extension and use it to summarize this or any long article.",
        promptText:
          "After installing the extension, navigate to a long article and use Claude to: 'Summarize this article in 3 bullet points, then list any claims I should verify.'",
      },
    },
    // ===========================================================================
    // SECTION 10: Your Turn - Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Install and Use the Chrome Extension",
        purpose:
          "Get hands-on experience with the Claude Chrome Extension for in-browser productivity.",
        instructions: [
          "Install the Claude Chrome Extension from the Chrome Web Store",
          "Navigate to a long article or document relevant to your work",
          "Use Claude to summarize the content and extract key points",
          "Try at least one additional feature (explain, rewrite, or question)",
        ],
        deliverable: "The extension installed and notes from using it on real content",
        estimatedTime: "10 minutes",
        successCriteria: [
          "Extension is installed and working",
          "You used it to summarize real content",
          "You explored at least one additional feature",
          "You understand how the extension fits your workflow",
        ],
      },
    },
    // ===========================================================================
    // SECTION 11: End-of-Lesson Checkpoint
    // ===========================================================================
    {
      id: "section-quiz",
      type: "checkpoint",
      content: {
        question: "What can you do with the Claude Chrome extension?",
        options: [
          "Only summarize articles",
          "Summarize, explain, rewrite, and analyze content on any webpage without leaving it",
          "Only check your email",
          "Browse the web faster",
        ],
        correctAnswer: 1,
        hint: 'Review "Chrome Extension Capabilities" section if needed.',
      },
    },
    // ===========================================================================
    // SECTION 12: Completion
    // ===========================================================================
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Chrome Extension Mastered",
        description:
          "You now have Claude available wherever you browse. Summarize, research, write, and learn—all without leaving the webpage. This integration dramatically accelerates your online productivity.",
        xpReward: 100,
        buttonText: "Complete Chrome Extension",
      },
    },
  ],
};
