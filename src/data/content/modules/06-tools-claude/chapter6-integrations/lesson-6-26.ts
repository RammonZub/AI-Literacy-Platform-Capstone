/**
 * Lesson 6.26: Team & Enterprise Features
 *
 * CHAPTER: 6 - Integrations & Team Features
 * LESSON: 2 of 6 - Team Collaboration
 *
 * DURATION: 12 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Understand Claude's team and enterprise capabilities for organizational use
 *
 * KEY RESPONSIBILITIES:
 * - Explain team workspace features
 * - Describe admin controls and security
 * - Address enterprise considerations
 */

import type { Lesson } from "@/types/content";

export const lesson_6_26: Lesson = {
  id: "lesson-6-26",
  chapterId: "ch6-6-integrations",
  moduleId: "06-tools-claude",
  lessonCategory: "tutorial",
  title: "Team & Enterprise Features",
  description:
    "Claude for teams and organizations—collaboration, admin controls, and enterprise security",
  order: 26,
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
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-26-cover.webp",
        imageAlt: "Team and enterprise features in Claude",
        title: "Team & Enterprise Features",
        subtitle:
          "Claude for teams and organizations—collaboration, admin controls, and enterprise security",
      },
    },
    // ===========================================================================
    // SECTION 1: Cover Introduction
    // ===========================================================================
    {
      id: "section-cover",
      type: "textWithImage",
      content: {
        title: "Team & Enterprise Features",
        paragraphs: [
          "Claude scales from individual productivity to team collaboration and enterprise deployment. Understand what's available for organizational use.",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-26-inline-1.webp",
        imageAlt: "Team collaboration and enterprise technology",
      },
    },
    // ===========================================================================
    // SECTION 2: Claude for Teams Overview
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Claude for Teams Overview",
        paragraphs: [
          "Claude for Teams extends individual capabilities with collaboration features:",
          "",
          "**Shared Projects**: Team members can access the same Projects with shared knowledge bases and custom instructions.",
          "",
          "**Unified billing**: Central billing management instead of individual subscriptions.",
          "",
          "**Increased usage**: Higher message limits suitable for team workloads.",
          "",
          "**Admin controls**: Manage team members, permissions, and usage.",
          "",
          "Teams plans are designed for groups who want to standardize on Claude and collaborate effectively.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Team Collaboration Features
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Team Collaboration Features",
        paragraphs: [
          "Teams using Claude for Work get enhanced collaboration capabilities that transform Claude from an individual productivity tool into a team force multiplier. Understanding these features helps you evaluate whether team features are right for your organization.",
          "",
          "Shared Projects allow team members to collaborate on documents with persistent context. Instead of each person maintaining their own isolated Claude environment, teams can work together in shared project spaces where everyone benefits from the accumulated knowledge and context.",
          "",
          "Team knowledge bases let you upload documents that everyone can reference. When your organization has reference materials, style guides, or documentation that multiple people need, uploading them once to a shared knowledge base is far more efficient than each person managing their own copy.",
          "",
          "Consistent instructions standardize how Claude responds for the entire team. When everyone in your organization needs Claude to follow specific guidelines, team-level instructions ensure consistency without requiring each person to configure their preferences individually.",
          "",
          "Activity visibility gives admins insight into how teammates are using Claude. This visibility isn't about surveillance—it's about understanding adoption patterns, identifying power users who can train others, and recognizing common use cases that might benefit from additional support or templates.",
          "",
          "Shared Artifacts extend the artifact system to teams, allowing members to access and iterate on content that others have created. A proposal started by one team member can be refined by another, with all the context preserved.",
          "",
          "Workspace integrations connect Claude to the tools your team already uses, including Slack, Google Workspace, and other common platforms. These integrations bring Claude into your existing workflows rather than requiring you to adopt new tools.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Admin Controls
    // ===========================================================================
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "Admin Dashboard Capabilities",
        insights: [
          "Manage team members and access permissions",
          "Monitor usage and message consumption",
          "Set retention and data handling policies",
          "Configure security settings",
          "Access audit logs for compliance",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Enterprise Considerations
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Enterprise Considerations",
        paragraphs: [
          "Larger organizations have additional requirements:",
          "",
          "**SSO/SAML**: Single sign-on integration with enterprise identity providers.",
          "",
          "**Enhanced security**: Additional security controls and compliance features.",
          "",
          "**Data residency**: Options for where conversation data is stored.",
          "",
          "**Custom terms**: Negotiated agreements for enterprise deployments.",
          "",
          "**Dedicated support**: Priority access to support and customer success teams.",
          "",
          "Enterprise plans require direct engagement with Anthropic's sales team.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Security and Compliance
    // ===========================================================================
    {
      id: "section-6",
      type: "textWithImage",
      content: {
        title: "Security and Compliance",
        paragraphs: [
          "Claude for Work includes security features organizations need:",
          "",
          "**Data handling**: Clear policies on how conversation data is used and retained.",
          "",
          "**Access controls**: Role-based permissions for different team members.",
          "",
          "**Audit capabilities**: Logs of activity for compliance requirements.",
          "",
          "**SOC 2 compliance**: Enterprise plans include compliance certifications.",
          "",
          "**No training on your data**: Anthropic's policy on not training on Team/Enterprise conversations.",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-26-inline-2.webp",
        imageAlt: "Enterprise security and compliance features",
      },
    },
    // ===========================================================================
    // SECTION 7: Getting Your Team Started
    // ===========================================================================
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "Team Adoption Strategy",
        insights: [
          "Start with a pilot: Small group first to establish workflows",
          "Create shared Projects: Set up common knowledge bases early",
          "Document best practices: Establish team guidelines",
          "Train together: Ensure everyone understands capabilities",
          "Measure impact: Track time saved and quality improvements",
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
        action: "For team collaboration",
        task: "Explore Claude for Teams to enable shared Projects, knowledge bases, and administrative controls for your organization",
        feature: "Claude for Teams",
        tip: "Start with a small pilot group and set up shared Projects early",
      },
    },
    // ===========================================================================
    // SECTION 9: Quick Prompt
    // ===========================================================================
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Plan Your Team Adoption",
        description: "Think through how Claude would fit your team's workflow.",
        promptText:
          "Ask Claude: 'Help me create a plan to introduce Claude to my team. We work on [describe your team's function]. What shared Projects and knowledge bases would be most valuable?'",
      },
    },
    // ===========================================================================
    // SECTION 10: Your Turn - Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Plan Team Adoption",
        purpose: "Create a practical plan for introducing Claude to your team or organization.",
        instructions: [
          "Identify 3 shared Projects that would benefit your team",
          "For each, list: knowledge files needed, custom instructions, and key use cases",
          "Draft a brief proposal for team leadership (if applicable)",
          "Plan a pilot with 2-3 team members",
        ],
        deliverable:
          "A team adoption plan with proposed Projects, knowledge needs, and pilot strategy",
        estimatedTime: "15 minutes",
        successCriteria: [
          "You identified 3 team Projects with clear purposes",
          "Each project has defined knowledge files and instructions",
          "You have a pilot plan with specific team members",
          "You can articulate the value to leadership",
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
        question: "What team features does Claude offer?",
        options: [
          "Claude is only for individual use",
          "Shared Projects, team knowledge bases, collaboration features, and admin controls",
          "Only individual chat features",
          "Teams need to use different AI tools",
        ],
        correctAnswer: 1,
        hint: 'Review "Team and Enterprise Features" section if needed.',
      },
    },
    // ===========================================================================
    // SECTION 12: Completion
    // ===========================================================================
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Team Features Understood",
        description:
          "You now understand Claude's capabilities for teams and enterprises. Whether you're considering adoption for a small team or evaluating enterprise deployment, you know what features are available and how to approach organizational AI adoption.",
        xpReward: 100,
        buttonText: "Complete Team Features",
      },
    },
  ],
};
