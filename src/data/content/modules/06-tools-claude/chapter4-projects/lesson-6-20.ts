/**
 * Lesson 6.20: Advanced Project Techniques
 *
 * CHAPTER: 4 - Projects & Knowledge Bases
 * LESSON: 5 of 5 - Power User Strategies
 *
 * DURATION: 12 minutes (advanced)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Cover advanced techniques for maximizing Claude Projects effectiveness
 *
 * KEY RESPONSIBILITIES:
 * - Show cross-project insights techniques
 * - Demonstrate project templates
 * - Cover team sharing considerations
 * - Provide project maintenance best practices
 */

import type { Lesson } from "@/types/content";

export const lesson_6_20: Lesson = {
  id: "lesson-6-20",
  chapterId: "ch6-4-projects",
  moduleId: "06-tools-claude",
  title: "Advanced Project Techniques",
  description: "Power-user strategies for getting the most from Claude Projects",
  order: 20,
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
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-20-cover.webp",
        imageAlt: "Advanced project management and optimization",
        title: "Advanced Project Techniques",
        subtitle: "Power-user strategies for maximum productivity",
      },
    },
    // ===========================================================================
    // SECTION 1: Cross-Project Insights
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Cross-Project Intelligence",
        paragraphs: [
          "While projects are isolated by design, you can manually create connections that yield powerful insights:",
          "",
          "**Pattern Recognition**: After working with Claude on multiple similar projects, ask it to identify patterns across your work. Copy relevant context from one project to another and ask for synthesis.",
          "",
          "**Template Extraction**: When you notice a prompt or workflow working well in one project, save it as a template for others. Document what made it effective.",
          "",
          "**Knowledge Portability**: Some knowledge base documents (style guides, preferences) are worth duplicating across projects. Maintain a 'master' version you copy from.",
          "",
          "**Meta-Analysis**: Periodically start a fresh chat to reflect on how you're using projects. Ask Claude to help you identify workflow improvements.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Project Templates
    // ===========================================================================
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "Creating Reusable Project Templates",
        insights: [
          "Document your best project setups as templates",
          "Include: Standard instructions, typical knowledge files, folder structure",
          "For recurring project types (new clients, quarterly reviews, campaigns)",
          "Saves 30+ minutes of setup per new project",
          "Ensures consistency across similar work",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Project Template Example
    // ===========================================================================
    {
      id: "section-3",
      type: "scenarioCard",
      content: {
        title: "Example: New Client Project Template",
        situation:
          "Jordan runs a consulting business and frequently onboards new clients. Each client needs a similar setup but with customized details.",
        challenge:
          "Setting up each new client project from scratch takes 30-45 minutes and she sometimes forgets to include important elements.",
        outcome:
          "Jordan created a template: Custom Instructions Template with blanks for [role], [client name], [industry], [engagement type], [contacts], and [goals]. Standard Knowledge Files checklist: client brief, brand guidelines, stakeholder map, previous examples, timeline. Initial Prompts to run: summary request and meeting prep questions. New client setup now takes 10 minutes.",
      },
    },
    // ===========================================================================
    // SECTION 4: Team Sharing Considerations
    // ===========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Team Sharing and Collaboration",
        paragraphs: [
          "For teams using Claude for Work, Projects become even more powerful:",
          "",
          "**Shared Projects**: Team members can access the same project, seeing shared knowledge bases and custom instructions.",
          "",
          "**Knowledge Standardization**: Create team-wide projects with approved templates, style guides, and reference materials.",
          "",
          "**Onboarding**: New team members get immediate context by accessing relevant projects rather than asking colleagues for background.",
          "",
          "**Consistency**: Shared instructions ensure everyone's AI interactions align with team standards.",
          "",
          "Note: Team features require Claude for Work plans. Individual users can still share knowledge by exporting and importing documents manually.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Project Maintenance
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Project Maintenance Best Practices",
        paragraphs: [
          "A well-maintained project library is far more valuable than a large, cluttered one. The key to long-term success with Claude Projects is treating them as living workspaces that require regular attention rather than set-and-forget folders.",
          "",
          "Conduct a quarterly audit of all your projects. Review what you have, archive completed projects that are no longer active, delete obsolete ones that are no longer relevant, and update the knowledge bases in your active projects. This regular housekeeping prevents your project library from becoming a graveyard of abandoned work.",
          "",
          "Pay attention to knowledge freshness by setting reminders to update time-sensitive documents. Stale knowledge in your project can lead to outdated advice from Claude, which undermines the value of having persistent context. When circumstances change in your work, make sure your project knowledge reflects those changes.",
          "",
          "Regular conversation cleanup is also important. Archive old conversations that are no longer relevant to keep your project history focused on what matters. A cluttered conversation history makes it harder to find important past interactions and can dilute the context that Claude draws from.",
          "",
          "Remember that custom instructions are not set in stone. As your needs evolve, update your instructions to reflect your current preferences and requirements. Finally, periodically export key conversations or documents you absolutely cannot afford to lose. While Claude preserves your project content, having your own backups of critical materials is always wise.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Advanced Tips
    // ===========================================================================
    {
      id: "section-6",
      type: "highlightCard",
      content: {
        heading: "Power User Tips",
        insights: [
          "Use project descriptions for quick status: 'Active - Q1 priority' or 'On hold'",
          "Create a 'Master Reference' project for documents used everywhere",
          "Name conversations descriptively so you can find them later",
          "Test new knowledge files with specific questions before relying on them",
          "When stuck, ask Claude: 'Based on our project documents, what am I missing?'",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Quick Prompt
    // ===========================================================================
    {
      id: "section-7",
      type: "quickPrompt",
      content: {
        heading: "Practice: Create Your First Template",
        description: "Document a reusable template based on your most common project type.",
        promptText:
          "Think about your most common project type. Create a template document that includes: 1) Custom instructions template with blanks to fill in, 2) List of standard knowledge files to include, 3) First 3 prompts to run in any new instance. Save this somewhere you can reference it.",
      },
    },
    // ===========================================================================
    // SECTION 8: Tool Reference - Claude
    // ===========================================================================
    {
      id: "section-tool-reference",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "For this exercise",
        task: "Create a project template document for your most common project type. Include custom instructions template, standard knowledge files list, and initial prompts to run.",
        feature: "Projects",
        tip: "Keep your template in a notes app or cloud doc for easy access when setting up new projects",
      },
    },
    // ===========================================================================
    // SECTION 9: Chapter Summary
    // ===========================================================================
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Projects Chapter Complete",
        paragraphs: [
          "You've now mastered Claude Projects—one of Claude's most powerful differentiators from other AI assistants.",
          "",
          "**What You've Learned**:",
          "- What Projects are and when to use them",
          "- How to create and configure projects effectively",
          "- Building and maintaining knowledge bases",
          "- Professional workflows for real-world use cases",
          "- Advanced techniques for power users",
          "",
          "**Your Next Step**: Put this into practice. Create at least one project this week for an ongoing initiative. Experience the power of persistent context firsthand.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: Your Turn - Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create a Project Template",
        purpose: "Build a reusable template that will save setup time on future similar projects.",
        instructions: [
          "Identify your most common type of recurring project",
          "Create a template document with: custom instructions template, standard knowledge files list, initial prompts",
          "Save it somewhere accessible (notes app, cloud doc, etc.)",
          "Test by using it to set up a new or existing project",
        ],
        deliverable: "A saved project template document and evidence of using it for project setup",
        estimatedTime: "15 minutes",
        successCriteria: [
          "Template includes custom instructions with fill-in blanks",
          "Template lists standard knowledge files for this project type",
          "Template includes 3 starter prompts",
          "You've tested the template on a real project",
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
        question: "When should you create a new project versus adding to an existing one?",
        options: [
          "Create a new project for every single conversation",
          "Create a new project when the focus, audience, or context is fundamentally different from existing projects",
          "Never create new projects",
          "Create a new project only when the old one is broken",
        ],
        correctAnswer: 1,
        hint: 'Review "Project Organization Strategy" section if needed.',
      },
    },
    // ===========================================================================
    // SECTION 12: Completion
    // ===========================================================================
    {
      id: "section-12",
      type: "completion",
      content: {
        title: "Projects & Knowledge Bases Mastered",
        description:
          "You've completed the Projects chapter! You now understand how to leverage Claude's most powerful organizational feature. This is a key differentiator that sets Claude apart from other AI assistants. Use Projects for any ongoing work where context matters.",
        xpReward: 100,
        buttonText: "Complete Projects Chapter",
      },
    },
  ],
};
