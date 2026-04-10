/**
 * Lesson 6.18: Building Knowledge Bases
 *
 * CHAPTER: 4 - Projects & Knowledge Bases
 * LESSON: 3 of 5 - Creating Institutional Knowledge
 *
 * DURATION: 12 minutes (intermediate)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach learners how to build and maintain effective knowledge bases
 *
 * KEY RESPONSIBILITIES:
 * - Explain what to upload and why
 * - Provide document organization tips
 * - Show how to keep knowledge current
 * - Share knowledge base best practices
 */

import type { Lesson } from "@/types/content";

export const lesson_6_18: Lesson = {
  id: "lesson-6-18",
  chapterId: "ch6-4-projects",
  moduleId: "06-tools-claude",
  title: "Building Knowledge Bases",
  description: "Create institutional knowledge that Claude can reference across all conversations",
  order: 18,
  estimatedMinutes: 12,
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
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-18-cover.webp",
        imageAlt: "Building and organizing knowledge databases",
        title: "Building Knowledge Bases",
        subtitle: "Transform Claude into a specialized expert on YOUR work",
      },
    },
    // ===========================================================================
    // SECTION 1: What to Upload
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "What Belongs in Your Knowledge Base",
        paragraphs: [
          "Not all documents are equally valuable for your knowledge base. The most effective knowledge bases focus on materials that provide lasting context, information you'll reference repeatedly across multiple conversations with Claude.",
          "",
          "Reference documents form the foundation of most effective knowledge bases. These include style guides that define your voice and formatting standards, brand guidelines that ensure consistent messaging, glossaries that clarify terminology specific to your domain, and technical specifications that capture system requirements or constraints. When Claude has access to these references, every response can align with your established standards without you needing to restate them.",
          "",
          "Historical context is another powerful category. Previous reports show patterns of success, past campaigns reveal what resonated with your audience, and lessons learned documents capture hard-won insights that shouldn't be forgotten. Templates and examples similarly provide Claude with concrete models to follow, whether that's email templates with your preferred structure, report formats that have worked well, or presentation structures you want to emulate.",
          "",
          "Client and project briefs deserve special attention because they capture the unique constraints and requirements of specific engagements. Background information, stakeholder details, and explicit constraints help Claude tailor its responses to your exact situation. Research materials like papers, articles, and data sources ensure Claude can ground its responses in the evidence base you've already compiled. Finally, process documentation including workflows, checklists, and standard operating procedures helps Claude understand not just what you're doing but how you approach your work systematically.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Document Quality
    // ===========================================================================
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "Knowledge Base Quality Tips",
        insights: [
          "Clean documents work better: Remove headers, footers, and formatting artifacts",
          "Focused content: One topic per document is clearer than mixed content",
          "Updated versions: Replace outdated files rather than accumulating versions",
          "Descriptive filenames: 'Brand_Guidelines_2024.pdf' not 'Document1.pdf'",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Organization Strategies
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Organizing Your Knowledge Base",
        paragraphs: [
          "A well-organized knowledge base is more effective than a cluttered one.",
          "",
          "**By Category**: Group documents by type (references, templates, research, client info). This helps you find what you need and helps Claude understand document relationships.",
          "",
          "**By Priority**: Put your most frequently referenced documents first. Claude prioritizes earlier uploads when searching for context.",
          "",
          "**By Recency**: For time-sensitive content, keep the most current versions prominent and consider removing obsolete files.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: File Types Deep Dive
    // ===========================================================================
    {
      id: "section-4",
      type: "scenarioCard",
      content: {
        title: "Real-World Scenario",
        situation:
          "Sarah is building a knowledge base for her content marketing project. She has 20 documents ready to upload, including PDFs, Word docs, spreadsheets, and even some image files.",
        challenge:
          "She's unsure which documents will work best and how to prepare them for optimal results with Claude.",
        outcome:
          "Sarah focuses on her 5 most important documents: her brand style guide (PDF), content calendar (converted from spreadsheet to text), previous successful articles (text), audience personas (Word doc), and SEO guidelines (Markdown). She removes headers/footers from PDFs and gives each file a descriptive name.",
      },
    },
    // ===========================================================================
    // SECTION 5: File Types Reference
    // ===========================================================================
    {
      id: "section-5",
      type: "highlightCard",
      content: {
        heading: "Understanding File Types and Claude",
        insights: [
          "PDFs: Excellent for reports, guides, and formatted documents",
          "Word Documents: Good for drafts and editable content",
          "Text/Markdown: Best for raw content - processed quickly and accurately",
          "Code Files: Perfect for technical projects with syntax understanding",
          "Spreadsheets: Supported but best converted to CSV or summarized in text",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Keeping Knowledge Current
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Maintaining Your Knowledge Base",
        paragraphs: [
          "A stale knowledge base can actually be worse than no knowledge base at all. When Claude references outdated information, it can lead to confusing or incorrect responses. The key to maintaining an effective knowledge base is establishing regular maintenance habits that keep your content current and relevant.",
          "",
          "Start by setting a monthly reminder to review your uploaded documents for relevance. During these reviews, ask yourself whether each document still represents your current practices, standards, or situation. Documents that were critical three months ago may no longer be relevant today. Be particularly attentive to version control: when source documents are updated in your organization, make sure to upload the new versions and remove the old ones from your knowledge base.",
          "",
          "Seasonal refreshes are also valuable. When a project ends, remove the project-specific files that are no longer relevant. This prevents Claude from referencing constraints or context that no longer apply. The discipline of pruning ruthlessly will serve you well: if you haven't referenced a document in your conversations with Claude for months, consider whether it truly belongs in your active knowledge base.",
          "",
          "Finally, think holistically about your project configuration. When you add new files to your knowledge base, take a moment to consider whether your custom instructions need updating too. Perhaps your role has evolved, or your preferences have changed. Keeping both your instructions and your knowledge files aligned ensures Claude always has an accurate picture of your context and needs.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Best Practices Summary
    // ===========================================================================
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "Knowledge Base Best Practices",
        insights: [
          "Start small: 3-5 key documents are better than 50 you'll never maintain",
          "Think longevity: Upload documents that will be relevant for weeks/months",
          "Quality over quantity: One clear style guide beats 10 outdated templates",
          "Test effectiveness: Ask Claude questions that should use your uploaded docs",
          "Iterate: Add documents as you discover gaps in Claude's context",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Quick Prompt
    // ===========================================================================
    {
      id: "section-8",
      type: "quickPrompt",
      content: {
        heading: "Practice: Audit Your Knowledge Base",
        description: "Review what you've uploaded to your project and evaluate its value.",
        promptText:
          "Open your project's knowledge base. For each document, ask: 'Would I want Claude to reference this when helping me with [project focus]?' Remove anything that doesn't pass this test.",
      },
    },
    // ===========================================================================
    // SECTION 9: Tool Reference - Claude
    // ===========================================================================
    {
      id: "section-tool-reference",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "For this exercise",
        task: "Upload 3-5 cleaned, well-named documents to your project's knowledge base. Then test by asking Claude questions that should reference your uploaded content.",
        feature: "Project Knowledge Base",
        tip: 'Use the prompt "Based on the documents in our project,..." to explicitly trigger knowledge base references',
      },
    },
    // ===========================================================================
    // SECTION 10: Your Turn - Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Build Your Knowledge Base",
        purpose:
          "Create an effective knowledge base by selecting and organizing the right reference documents.",
        instructions: [
          "Identify 3-5 documents that would help Claude understand your project context",
          "Clean each document (remove headers, footers, irrelevant formatting)",
          "Upload to your project with descriptive filenames",
          "Test by asking Claude questions that should reference your uploaded content",
        ],
        deliverable:
          "A knowledge base with 3-5 well-named, cleaned documents and test results showing Claude using them",
        estimatedTime: "15 minutes",
        successCriteria: [
          "3-5 relevant documents are uploaded to your project",
          "Files have clear, descriptive names",
          "Documents are cleaned of formatting artifacts",
          "Claude correctly references the content when asked relevant questions",
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
        question: "What types of content work well in a Claude Project knowledge base?",
        options: [
          "Only images and videos",
          "Reference documents, style guides, project requirements, previous examples, and templates",
          "Only text messages",
          "Nothing - knowledge bases are not useful",
        ],
        correctAnswer: 1,
        hint: 'Review "Building Your Knowledge Base" section if needed.',
      },
    },
    // ===========================================================================
    // SECTION 12: Completion
    // ===========================================================================
    {
      id: "section-12",
      type: "completion",
      content: {
        title: "Knowledge Base Skills Acquired",
        description:
          "You now understand how to build, organize, and maintain an effective knowledge base. Your projects will have the institutional memory that makes Claude truly powerful for ongoing work. Next, we'll explore professional workflows that leverage this foundation.",
        xpReward: 100,
        buttonText: "Complete Knowledge Base Training",
      },
    },
  ],
};
