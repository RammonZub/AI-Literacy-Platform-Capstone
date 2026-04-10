/**
 * Lesson 6.11: Artifacts and Long-Form Content
 *
 * CHAPTER: 3 - Advanced Features
 * LESSON: 1 of 5 - Artifacts Feature
 *
 * DURATION: 12 minutes (advanced practical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach Claude's Artifacts feature for long-form content
 *
 * KEY RESPONSIBILITIES:
 * - Explain the Artifacts feature
 * - Show practical use cases
 * - Provide artifact workflow patterns
 */

import type { Lesson } from "@/types/content";

export const lesson_6_11: Lesson = {
  id: "lesson-6-11",
  chapterId: "ch6-3-advanced",
  moduleId: "06-tools-claude",
  title: "Artifacts and Long-Form Content",
  description:
    "Master Claude's Artifacts feature for creating and iterating on substantial content",
  order: 11,
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
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-11-cover.webp",
        imageAlt: "Creative design workspace with code and content creation",
        title: "Artifacts and Long-Form Content",
        subtitle: "Create, preview, and iterate on substantial content with Claude",
      },
    },
    // ===========================================================================
    // SECTION 1: What Are Artifacts?
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "What Are Artifacts?",
        paragraphs: [
          "Artifacts are Claude's way of creating substantial, standalone content-code, documents, HTML pages-that you can preview, review, and iterate on together.",
          "Think of Artifacts as a shared canvas: Claude creates something, you see it rendered, you can discuss changes, and Claude updates it in real time. This is transformative for long-form work.",
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
        action: "For this lesson",
        task: "Open Claude and ask it to create an artifact to see the feature in action",
        feature: "Artifacts",
        tip: "Artifacts appear in a side panel where you can preview code, documents, and more",
      },
    },
    // ===========================================================================
    // SECTION 3: Artifact Use Cases
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Artifact Use Cases",
        paragraphs: [
          "Artifacts shine for content you'll want to review and iterate on. Understanding when to request an artifact versus a regular response helps you get the most from Claude's capabilities.",
          "",
          "Code is perhaps the most powerful artifact use case. When you ask Claude to create scripts, utilities, or components as artifacts, you can see the code rendered with proper syntax highlighting, discuss improvements while viewing the actual code, and iterate directly on the artifact until it's exactly what you need.",
          "",
          "Documents benefit enormously from the artifact format. Reports, proposals, and specifications created as artifacts let you review the structure and content together in a dedicated panel. You can ask Claude to expand sections, reorganize content, or adjust the tone while maintaining a clear view of the whole document.",
          "",
          "Web pages are particularly well-suited to artifacts. Claude can create HTML that you can preview directly in the artifact panel, test for functionality, and refine conversationally. This iterative approach is far more efficient than the traditional cycle of writing code, saving files, and refreshing browsers.",
          "",
          "Data formats like JSON, CSV, and XML become easier to work with as artifacts. You can validate the structure visually before using the data, ask Claude to fix formatting issues, and iterate until the format is exactly what your systems require.",
          "",
          "Diagrams created through Mermaid or ASCII art let you visualize concepts you're discussing. Having these as artifacts means you can refine them through conversation, adjusting layouts and adding elements until the visualization clearly communicates your ideas.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: The Artifact Workflow
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "The Artifact Workflow",
        insights: [
          "Claude creates the artifact -> You preview it -> You request changes -> Claude updates",
          "Conversational iteration is far more effective than 'give me final code' prompts",
          "Build and refine collaboratively through back-and-forth",
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
        title: "Regular Response vs. Artifact",
        intro: "Understanding when to request an artifact vs. a regular response:",
        columns: [
          { name: "Regular Response", description: "Standard chat output" },
          { name: "Artifact", description: "Dedicated preview panel", recommended: true },
        ],
        rows: [
          {
            feature: "Best for",
            values: ["Quick answers, explanations", "Code, documents, long content"],
          },
          { feature: "Preview", values: [false, true] },
          { feature: "Iteration", values: ["Copy and paste", "Direct updates in place"] },
          { feature: "File size", values: ["Short to medium", "Long-form content"] },
          { feature: "Export", values: ["Copy text", "Download or copy code"] },
        ],
        footer:
          "Ask Claude to create an artifact when you need to see, preview, or iterate on substantial content.",
      },
    },
    // ===========================================================================
    // SECTION 6: Practical Artifact Patterns
    // ===========================================================================
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Practical Artifact Patterns",
        paragraphs: [
          "**For code**: 'Create a [language] script that [does X]. Put it in an artifact so I can see the structure.'",
          "**For documents**: 'Help me draft a [document type] for [purpose]. Create it as an artifact so I can review the sections.'",
          "**For iteration**: 'Now change [specific aspect] and explain how you updated it.'",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-11-inline-1.webp",
        imageAlt: "Code and content building on screen",
      },
    },
    // ===========================================================================
    // SECTION 7: Quick Prompt
    // ===========================================================================
    {
      id: "section-5",
      type: "quickPrompt",
      content: {
        heading: "Practice: Artifact Creation",
        description: "Ask Claude to create something useful for you as an artifact.",
        promptText:
          "Create a [type] artifact that [does something]. Make it something I can actually use, and walk me through how it works.",
      },
    },
    // ===========================================================================
    // SECTION 8: Actionable Task (Inline)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create and Iterate an Artifact",
        purpose:
          "Experience the power of Claude's Artifacts feature by creating and iteratively refining substantial content.",
        instructions: [
          "Think of a document you've been meaning to create (report, proposal, code)",
          "Ask Claude to create it as an artifact so you can see the structure",
          "Request 3 specific changes and watch Claude update it",
          "Compare: How does iterative refinement feel different from one-shot requests?",
        ],
        deliverable: "An Artifact document with at least 3 iterations of refinements",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "Create a [document type] for [purpose]. Put it in an artifact so I can see the structure. Then I'll ask you to make specific improvements.",
        successCriteria: [
          "You created an Artifact with Claude",
          "You made at least 3 specific refinement requests",
          "You experienced the iterative improvement process",
          "You understand how Artifacts differ from regular chat responses",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: End-of-Lesson Checkpoint
    // ===========================================================================
    {
      id: "section-quiz",
      type: "checkpoint",
      content: {
        question: "What are Artifacts in Claude?",
        options: [
          "Historical conversation logs",
          "Substantial standalone content that can be previewed and iterated on together",
          "Deleted messages",
          "System configuration files",
        ],
        correctAnswer: 1,
        hint: 'Review "What Are Artifacts?" and "The Artifact Workflow" sections if needed.',
      },
    },
    // ===========================================================================
    // SECTION 10: Completion
    // ===========================================================================
    {
      id: "section-7",
      type: "completion",
      content: {
        title: "Artifact Skills Ready",
        description:
          "You now understand how to use Claude's Artifacts feature for collaborative, iterative creation of substantial content. This transforms how you'll work with Claude on complex, multi-step projects.",
        xpReward: 100,
        buttonText: "Complete Artifact Skills",
      },
    },
  ],
};
