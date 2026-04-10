/**
 * Lesson 6.22: Artifacts Mastery
 *
 * CHAPTER: 5 - Advanced Features Deep Dive
 * LESSON: 2 of 4 - Advanced Artifact Techniques
 *
 * DURATION: 14 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Master advanced Artifact techniques for sophisticated content creation
 *
 * KEY RESPONSIBILITIES:
 * - Demonstrate iterative refinement workflows
 * - Show multi-artifact project management
 * - Provide best practices for artifact organization
 */

import type { Lesson } from "@/types/content";

export const lesson_6_22: Lesson = {
  id: "lesson-6-22",
  chapterId: "ch6-5-advanced",
  moduleId: "06-tools-claude",
  lessonCategory: "tutorial",
  title: "Artifacts Mastery",
  description: "Advanced techniques for creating, refining, and managing sophisticated artifacts",
  order: 22,
  estimatedMinutes: 14,
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
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-22-cover.webp",
        imageAlt: "Artifacts mastery and advanced document creation",
        title: "Artifacts Mastery",
        subtitle:
          "Advanced techniques for creating, refining, and managing sophisticated artifacts",
      },
    },
    // ===========================================================================
    // SECTION 1: Cover Introduction
    // ===========================================================================
    {
      id: "section-cover",
      type: "textWithImage",
      content: {
        title: "Artifacts Mastery",
        paragraphs: [
          "You've created basic Artifacts. Now let's master the advanced techniques that turn Artifacts into a powerful content creation system.",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-22-inline-1.webp",
        imageAlt: "Advanced content creation and document management",
      },
    },
    // ===========================================================================
    // SECTION 2: Beyond Basic Artifacts
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Beyond Basic Artifacts",
        paragraphs: [
          "Artifacts are more than just pretty documents. They're a complete content creation environment with advanced capabilities:",
          "",
          "**Iterative development**: Refine artifacts through conversation while maintaining version history.",
          "",
          "**Multi-format output**: Start with one format, convert to others as needed.",
          "",
          "**Cross-artifact linking**: Build document systems with interconnected pieces.",
          "",
          "**Persistent workspace**: Artifacts persist across sessions, building your content library.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Iterative Refinement Workflow
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "The Iterative Refinement Workflow",
        paragraphs: [
          "Power users don't create perfect artifacts in one shot. They embrace an iterative approach that produces better results through successive refinement. Understanding this workflow transforms how you work with Claude on substantial content.",
          "",
          "Start rough. Get the core content down first—polish comes later. Many users make the mistake of trying to get everything perfect on the first attempt, which leads to overthinking and slow progress. A rough draft gives you something concrete to improve, which is far more productive than trying to generate perfection from nothing.",
          "",
          "Use targeted refinement to improve specific sections. Instead of asking Claude to 'make it better,' ask for specific improvements: 'Make the executive summary more compelling' or 'Add more evidence to support the main argument in section two.' Specific requests yield specific improvements.",
          "",
          "Format iteration lets you transform the same content for different contexts. You might ask Claude to 'Convert this to a formal report format' or 'Make this more visual with better structure.' The core content stays the same while the presentation adapts to your needs.",
          "",
          "Length adjustment is a common iteration need. You can ask Claude to 'Expand section 3 with more detail' when you need depth, or 'Condense the whole thing to one page' when you need brevity. Artifacts make this kind of adjustment easy because you're working with structured content.",
          "",
          "Tone shifts let you adapt the same content for different audiences. Requests like 'Make this more conversational' or 'Make it more formal for the board' transform how your content feels without changing its substance. This flexibility is one of the most valuable aspects of the iterative workflow.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Multi-Artifact Projects
    // ===========================================================================
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "Multi-Artifact Project Strategy",
        insights: [
          "Break large projects into separate artifacts for each component",
          "Create a master artifact that links or summarizes the pieces",
          "Iterate on individual artifacts without affecting others",
          "Assemble final deliverables from refined components",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Code Artifacts
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Code Artifacts: A Special Category",
        paragraphs: [
          "Claude can create code artifacts—actual working code that you can copy and use:",
          "",
          "**For non-coders**: Get spreadsheet formulas, simple scripts, or automation code without needing programming knowledge.",
          "",
          "**For developers**: Get boilerplate code, algorithms, or complete functions to integrate into projects.",
          "",
          "**The key advantage**: Code artifacts include syntax highlighting and can be iterated on: 'Add error handling' or 'Make this more efficient.'",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Document Artifacts
    // ===========================================================================
    {
      id: "section-6",
      type: "textWithImage",
      content: {
        title: "Document Artifacts Deep Dive",
        paragraphs: [
          "Document artifacts support various professional formats:",
          "",
          "**Reports**: Executive summaries, board reports, research findings",
          "**Proposals**: Business proposals, project plans, pitch decks",
          "**Documentation**: Process docs, user guides, SOPs",
          "**Communications**: Formal letters, announcements, memos",
          "",
          "Each format has conventions. Claude knows these—just specify what you need.",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-22-inline-2.webp",
        imageAlt: "Professional document creation and management",
      },
    },
    // ===========================================================================
    // SECTION 6b: Comparison Table
    // ===========================================================================
    {
      id: "section-6b",
      type: "comparisonTable",
      content: {
        title: "Artifact Types Compared",
        intro: "Different artifact types serve different purposes in your workflow.",
        columns: [
          { name: "Artifact Type" },
          { name: "Best For" },
          { name: "Iteration Style" },
          { name: "Export Options" },
        ],
        rows: [
          {
            feature: "Documents",
            values: [
              "Reports, proposals, guides",
              "Section-by-section refinement",
              "Markdown, PDF, copy",
            ],
          },
          {
            feature: "Code",
            values: [
              "Scripts, formulas, functions",
              "Feature additions, debugging",
              "Copy to clipboard",
            ],
          },
          {
            feature: "Diagrams",
            values: ["Visual workflows, charts", "Add elements, restructure", "SVG, PNG"],
          },
          {
            feature: "Dashboards",
            values: ["Data visualization, metrics", "Add charts, filters", "Screenshot"],
          },
          {
            feature: "Presentations",
            values: ["Slides, pitch decks", "Slide content, flow changes", "Export slides"],
          },
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Best Practices
    // ===========================================================================
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "Artifact Best Practices",
        insights: [
          "Name artifacts clearly: 'Q4 Marketing Plan v3' not 'Marketing thing'",
          "Start with structure: Ask for an outline first, then expand",
          "Save versions before major changes for comparison",
          "Export regularly: Download important artifacts as backup",
          "Build templates: Turn successful artifacts into reusable patterns",
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
        action: "For this lesson",
        task: "Open Claude and use Artifacts to create and iterate on documents, code, or diagrams",
        feature: "Artifacts",
        tip: "Use iterative refinement for polished results, and store artifacts in Projects for organization",
      },
    },
    // ===========================================================================
    // SECTION 9: Quick Prompt
    // ===========================================================================
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Practice Iterative Refinement",
        description: "Create an artifact and refine it through multiple iterations.",
        promptText:
          "Ask Claude: 'Create a one-page project brief for [your current project]. Then I'll ask you to refine specific sections.'",
      },
    },
    // ===========================================================================
    // SECTION 10: Your Turn - Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Master Iterative Artifact Refinement",
        purpose: "Practice the iterative refinement workflow that makes Artifacts so powerful.",
        instructions: [
          "Ask Claude to create an Artifact for a real document you need",
          "Request 3 specific refinements (expand section, change tone, add detail)",
          "Try at least one format change (different structure or style)",
          "Export or copy the final version for actual use",
        ],
        deliverable:
          "An Artifact document with at least 3 refinement iterations and the final exported version",
        estimatedTime: "15 minutes",
        starterPrompt:
          "Create an Artifact for [document type] about [topic]. I'll refine it through multiple iterations.",
        successCriteria: [
          "You created an Artifact for real content",
          "You made at least 3 specific refinements",
          "You tried a format change",
          "You exported the final version for use",
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
        question: "What are Artifacts best used for?",
        options: [
          "Storing chat history only",
          "Creating and iterating on substantial content like documents, code, and diagrams",
          "Managing your Claude account settings",
          "Viewing images only",
        ],
        correctAnswer: 1,
        hint: 'Review "Advanced Artifact Workflows" section if needed.',
      },
    },
    // ===========================================================================
    // SECTION 12: Completion
    // ===========================================================================
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Artifact Mastery Achieved",
        description:
          "You now have advanced skills for creating, refining, and managing Artifacts. You can build sophisticated document systems, iterate efficiently, and maintain a professional content library.",
        xpReward: 100,
        buttonText: "Complete Artifacts Mastery",
      },
    },
  ],
};
