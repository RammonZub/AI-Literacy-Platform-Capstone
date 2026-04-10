/**
 * Lesson 6.19: Project Workflows for Professionals
 *
 * CHAPTER: 4 - Projects & Knowledge Bases
 * LESSON: 4 of 5 - Professional Use Cases
 *
 * DURATION: 12 minutes (practical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Show real-world professional workflows using Claude Projects
 *
 * KEY RESPONSIBILITIES:
 * - Demonstrate client project setup
 * - Show research project organization
 * - Provide ongoing document workflow examples
 * - Cover multi-project management strategies
 */

import type { Lesson } from "@/types/content";

export const lesson_6_19: Lesson = {
  id: "lesson-6-19",
  chapterId: "ch6-4-projects",
  moduleId: "06-tools-claude",
  title: "Project Workflows for Professionals",
  description: "Real-world workflows for client work, research, and ongoing initiatives",
  order: 19,
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
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-19-cover.webp",
        imageAlt: "Professional team workflows and collaboration",
        title: "Project Workflows for Professionals",
        subtitle: "Real-world patterns for client work, research, and ongoing initiatives",
      },
    },
    // ===========================================================================
    // SECTION 1: Client Project Setup
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Workflow 1: Client Project Management",
        paragraphs: [
          "For consultants, freelancers, and agency professionals, client work is the perfect use case for Projects.",
          "",
          "**Setup**: Create one project per major client with their name as prefix (e.g., 'Client: Acme Corp').",
          "",
          "**Knowledge Base**: Upload the client's brand guidelines, previous work examples, project briefs, meeting notes, and any background documents that provide context.",
          "",
          "**Custom Instructions**: Include the client's industry, their communication preferences, your role in the engagement, and any specific constraints or requirements.",
          "",
          "**Day-to-Day**: Every conversation in this project now has full client context. You can say 'Draft a proposal for the new initiative' and Claude already knows which client, what tone, and what background.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Research Project
    // ===========================================================================
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "Workflow 2: Research Projects",
        insights: [
          "Create project for each research initiative",
          "Upload papers, articles, and source materials",
          "Set instructions for citation format and rigor level",
          "Claude accumulates understanding as you add sources",
          "Perfect for literature reviews, market research, competitive analysis",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Content Creation
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Workflow 3: Content Creation Series",
        paragraphs: [
          "For writers, marketers, and content creators working on ongoing series, Claude Projects offer a powerful way to maintain consistency while accelerating production. The key is setting up a dedicated project for each content series you produce.",
          "",
          "Start by creating one project per content series, using clear naming conventions like 'Blog: Leadership Series' or 'Newsletter: Monthly Insights.' This separation ensures each content type has its own context without cross-contamination between different series.",
          "",
          "Your knowledge base should include your style guide, previous pieces in the series, audience personas, and content calendar. These documents give Claude the context it needs to produce content that matches your established voice and meets your audience's expectations. The more complete your knowledge base, the more consistently Claude can help.",
          "",
          "In your custom instructions, specify your voice, typical structure, word count preferences, and any SEO requirements you follow. Be explicit about what makes your content distinctive. The goal is to codify your editorial decisions so Claude can apply them consistently.",
          "",
          "The real benefit emerges over time: Claude maintains consistency across all pieces in the series automatically. New content matches existing tone and style without you needing to re-explain your preferences every time. This consistency is what transforms Claude from a helpful tool into a genuine content partner.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Client Project Scenario
    // ===========================================================================
    {
      id: "section-4",
      type: "scenarioCard",
      content: {
        title: "Real-World Scenario: Client Onboarding",
        situation:
          "Alex, a freelance copywriter, just landed a new client - a sustainable fashion brand. She needs to quickly get up to speed and start producing on-brand content.",
        challenge:
          "The client has provided a 40-page brand guidelines PDF, examples of past content, and their content calendar. Alex needs to absorb all this quickly and start producing.",
        outcome:
          "Alex creates a 'Client: Evergreen Fashion' project. She uploads the brand guide, past examples, and calendar. In custom instructions, she specifies her role and the brand's sustainable focus. Now when she asks Claude to 'Draft an Instagram caption for our spring collection,' the output is instantly on-brand.",
      },
    },
    // ===========================================================================
    // SECTION 5: Ongoing Document Workflows
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Workflow 4: Document Lifecycle Management",
        paragraphs: [
          "Projects excel at managing documents through their lifecycle:",
          "",
          "**Drafting**: Start documents in project chats, knowing Claude has your templates and style guides.",
          "",
          "**Review**: Upload stakeholder feedback and ask Claude to help incorporate changes while maintaining consistency.",
          "",
          "**Iteration**: Each version builds on previous context—Claude remembers what was changed and why.",
          "",
          "**Final Polish**: Reference your quality standards and brand guidelines that are already in the knowledge base.",
          "",
          "**Archive**: When complete, the project preserves the full history of how the document evolved.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Multi-Project Management
    // ===========================================================================
    {
      id: "section-6",
      type: "highlightCard",
      content: {
        heading: "Managing Multiple Projects",
        insights: [
          "Use consistent naming prefixes (Client:, Research:, Personal:)",
          "Regular housekeeping: Archive completed projects",
          "Use description field for status and next actions",
          "Identify which project is the 'home' for shared documents",
          "Review knowledge base before diving into a project",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Weekly Routine
    // ===========================================================================
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "Weekly Project Maintenance Routine",
        insights: [
          "Monday: Review active projects and priorities",
          "Wednesday: Update knowledge bases with new materials",
          "Friday: Clean up completed conversations, add new docs",
          "End of Month: Archive finished projects, prune stale files",
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
        heading: "Practice: Design Your Project Structure",
        description: "Plan how you'll organize your professional work in Claude Projects.",
        promptText:
          "List 3-5 ongoing areas of your work (clients, projects, initiatives). For each, write down: 1) A clear project name, 2) 3-5 documents you'd upload, 3) Key custom instructions you'd include. This becomes your project roadmap.",
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
        task: "Choose one workflow pattern from this lesson (client, research, content, or document). Create or configure a project following that pattern and complete a real work task.",
        feature: "Projects",
        tip: "Use consistent project naming conventions so you can quickly find the right project later",
      },
    },
    // ===========================================================================
    // SECTION 10: Your Turn - Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Apply a Professional Workflow",
        purpose: "Implement a complete professional workflow pattern using Claude Projects.",
        instructions: [
          "Choose one workflow pattern from this lesson (client, research, content, or document)",
          "Create or configure a project following that pattern",
          "Run through a real work task using the project",
          "Note what worked well and what could be improved",
        ],
        deliverable:
          "A configured project following a professional workflow pattern and notes on your experience",
        estimatedTime: "15 minutes",
        successCriteria: [
          "You created/configured a project following a specific workflow pattern",
          "The project has appropriate custom instructions for the workflow type",
          "You completed a real work task using the project",
          "You have notes on improvements for future use",
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
        question: "What is the key benefit of using Projects for professional workflows?",
        options: [
          "They make Claude respond faster",
          "They eliminate the need to repeat context across multiple conversations about the same work",
          "They are required to use Claude",
          "They only work for coding projects",
        ],
        correctAnswer: 1,
        hint: 'Review "Professional Workflow Patterns" section if needed.',
      },
    },
    // ===========================================================================
    // SECTION 12: Completion
    // ===========================================================================
    {
      id: "section-12",
      type: "completion",
      content: {
        title: "Professional Workflows Mastered",
        description:
          "You now have practical workflow patterns for client work, research, content creation, and document management. These templates will save you countless hours of context-setting. In our final lesson, we'll cover advanced techniques for power users.",
        xpReward: 100,
        buttonText: "Complete Professional Workflows",
      },
    },
  ],
};
