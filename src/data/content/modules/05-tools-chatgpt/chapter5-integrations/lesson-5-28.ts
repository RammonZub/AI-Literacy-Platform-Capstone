/**
 * Lesson 5.28: Team and Enterprise Features
 *
 * CHAPTER: 5 - Integrations & Capstone
 * LESSON: 28 of 30 - Team & Enterprise Features
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Understand ChatGPT's team and enterprise capabilities for organizations
 *
 * KEY CONCEPTS:
 * - Team workspaces and collaboration
 * - Admin controls and governance
 * - Usage analytics and monitoring
 * - Security and compliance considerations
 */

import type { Lesson } from "@/types/content";

export const lesson_5_28: Lesson = {
  id: "lesson-5-28",
  chapterId: "ch5-5-integrations",
  moduleId: "05-tools-chatgpt",
  title: "Team and Enterprise Features",
  description: "Scale ChatGPT across your organization with proper governance and security",
  order: 28,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // SECTION: Hero Image
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-28-cover.webp",
        imageAlt: "Team collaboration and enterprise productivity",
        title: "Team and Enterprise Features",
        subtitle: "Scale ChatGPT across your organization",
      },
    },
    // ===========================================================================
    // SECTION: Introduction
    // ===========================================================================
    {
      id: "section-intro",
      type: "text",
      content: {
        title: "Scaling AI Across Organizations",
        paragraphs: [
          "Individual productivity with ChatGPT is powerful. But when teams and organizations adopt AI at scale, new considerations emerge: collaboration, governance, security, and compliance.",
          "",
          "This lesson covers what you need to know about deploying ChatGPT in team and enterprise environments.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: ChatGPT Plan Comparison
    // ===========================================================================
    {
      id: "section-plan-comparison",
      type: "textWithBullets",
      content: {
        title: "ChatGPT Plan Comparison",
        paragraphs: ["OpenAI offers different tiers for organizational use:"],
        bullets: [
          "**ChatGPT Team** (Small to medium teams)",
          "  - Dedicated workspace for your team",
          "  - Admin controls for user management",
          "  - Shared GPTs within the workspace",
          "  - Higher message limits",
          "  - Data excluded from training by default",
          "",
          "**ChatGPT Enterprise** (Large organizations)",
          "  - All Team features plus:",
          "  - Advanced security (SSO, SCIM)",
          "  - Unlimited high-speed GPT-4 access",
          "  - Extended context windows",
          "  - Advanced analytics and admin controls",
          "  - Custom data exclusions and retention",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Highlight Card - Team Workspace Benefits
    // ===========================================================================
    {
      id: "section-highlight-workspace",
      type: "highlightCard",
      content: {
        heading: "Team Workspace Benefits",
        insights: [
          "Centralized GPT management—no more GPTs scattered across personal accounts",
          "Shared prompt libraries and best practices across the team",
          "Consistent AI usage policies enforced at the workspace level",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Collaboration Features
    // ===========================================================================
    {
      id: "section-collaboration-features",
      type: "text",
      content: {
        title: "Collaboration Features",
        paragraphs: [
          "Team workspaces transform ChatGPT from an individual tool into a collaborative platform. These features enable teams to work together more effectively with AI assistance.",
          "Shared Custom GPTs allow you to build assistants that everyone on the team can access. Department-specific assistants, company knowledge bases, and workflow tools become shared resources rather than individual recreations. When one person builds a useful GPT, the whole team benefits.",
          "Conversation sharing lets you share specific ChatGPT conversations with teammates for feedback or collaboration. Instead of copying and pasting responses into separate documents, you can simply share the conversation link. This preserves context and makes collaboration more seamless.",
          "Prompt libraries enable teams to build and share effective prompts collectively. When someone discovers a prompt that produces excellent results, they can share it with the team, improving everyone's output quality. This collective knowledge building accelerates team AI literacy.",
          "Consistent brand voice becomes achievable when GPTs are configured with company style guidelines. Rather than each team member prompting differently, shared GPTs ensure all AI-assisted communication maintains organizational standards. This consistency strengthens brand identity across all team outputs.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Visual Break - Admin Governance
    // ===========================================================================
    {
      id: "section-admin-visual",
      type: "textWithImage",
      content: {
        title: "Administrative Governance",
        paragraphs: [
          "Administrators can control how ChatGPT is used within the organization, ensuring alignment with company policies and compliance requirements.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-28-inline-1.webp",
        imageAlt: "Admin controls and governance",
      },
    },
    // ===========================================================================
    // SECTION: Key Admin Capabilities
    // ===========================================================================
    {
      id: "section-admin-capabilities",
      type: "text",
      content: {
        title: "Key Admin Capabilities",
        paragraphs: [
          "Administrators have comprehensive control over how ChatGPT operates within their organization. These capabilities ensure AI usage aligns with company policies and security requirements.",
          "User management is the foundation. Administrators can add and remove users, assign roles with different permission levels, and manage access across the organization. This control ensures only authorized personnel can access company AI resources.",
          "GPT governance provides oversight of custom GPTs before they're shared widely. Administrators can review and approve custom GPTs, preventing unauthorized or problematic tools from spreading through the organization. This quality control protects both security and productivity.",
          "Data controls let administrators configure what information can be shared with ChatGPT. Sensitive data handling policies can be enforced at the workspace level, ensuring compliance with data protection requirements without relying on individual discretion.",
          "Integration management controls which external tools can connect to ChatGPT via Actions. Administrators decide which APIs and services are approved, preventing shadow IT and maintaining security boundaries. Usage policies set clear guidelines for appropriate use, giving employees a framework for responsible AI usage within the organization.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Highlight Card - Analytics
    // ===========================================================================
    {
      id: "section-highlight-analytics",
      type: "highlightCard",
      content: {
        heading: "Analytics and Monitoring",
        insights: [
          "Enterprise plans include detailed usage analytics",
          "Track adoption rates, query volumes, and feature usage across teams",
          "Identify power users and training opportunities",
        ],
      },
    },
    // ===========================================================================
    // SECTION: What Analytics Reveal
    // ===========================================================================
    {
      id: "section-analytics-reveal",
      type: "text",
      content: {
        title: "What Analytics Reveal",
        paragraphs: [
          "Usage analytics help organizations understand:",
          "",
          "**Adoption Patterns**: Which departments are using ChatGPT most? Where is adoption lagging?",
          "",
          "**Feature Utilization**: Are teams using advanced features like custom GPTs and data analysis?",
          "",
          "**Cost Optimization**: Where are message credits being consumed? Are there opportunities for efficiency?",
          "",
          "**Training Needs**: Which teams might benefit from additional training or support?",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Security and Compliance
    // ===========================================================================
    {
      id: "section-security-compliance",
      type: "text",
      content: {
        title: "Security and Compliance",
        paragraphs: [
          "For organizations handling sensitive information, security and compliance features are essential. Team and Enterprise plans provide the controls necessary for responsible organizational AI use.",
          "Data exclusion is configured by default on Team and Enterprise plans—your conversations are excluded from model training. This prevents proprietary information from leaking into future model versions. Always verify this setting is active before deploying ChatGPT in your organization.",
          "Access controls through SSO (Single Sign-On) integration enable centralized authentication and access management. Users log in with their existing corporate credentials, and access can be granted or revoked through your identity provider. This integration streamlines onboarding and offboarding while maintaining security.",
          "Audit logs on Enterprise plans maintain records of conversations and actions for compliance requirements. Regulated industries can demonstrate appropriate AI usage and investigate any incidents that occur. These logs provide the accountability many organizations require.",
          "Data retention policies can be configured based on your organization's requirements. Some organizations need conversations retained for training and quality assurance; others require minimal retention for privacy reasons. Enterprise plans let you control this balance. Third-party Actions require review and approval, ensuring that only authorized external APIs can be accessed through your organization's GPTs.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Rolling Out ChatGPT to Teams
    // ===========================================================================
    {
      id: "section-rollout-tips",
      type: "text",
      content: {
        title: "Rolling Out ChatGPT to Teams",
        paragraphs: [
          "**Start with Champions**: Identify enthusiastic early adopters who can demonstrate value to others.",
          "",
          "**Create Guidelines**: Document what should and shouldn't be shared with ChatGPT. Make it easy to reference.",
          "",
          "**Build Shared Resources**: Create GPTs and prompt libraries that solve common team problems.",
          "",
          "**Measure Impact**: Track time saved, quality improvements, or other metrics that matter to your organization.",
          "",
          "**Iterate**: Gather feedback and adjust your approach. Team needs evolve as AI literacy improves.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Tool Reference - ChatGPT
    // ===========================================================================
    {
      id: "section-tool-reference",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "For this lesson",
        task: "Explore ChatGPT Team or Enterprise settings to understand admin capabilities",
        feature: "Team Workspace",
        tip: "Start with a small pilot group before organization-wide rollout",
      },
    },
    // ===========================================================================
    // SECTION: Quick Prompt
    // ===========================================================================
    {
      id: "section-quick-prompt",
      type: "quickPrompt",
      content: {
        heading: "Plan Your Team Deployment",
        description:
          "If you were to deploy ChatGPT to your team, what would be your first three priorities?",
        promptText:
          "1) [Priority 1: e.g., Create shared GPT for common use case] 2) [Priority 2: e.g., Establish data guidelines] 3) [Priority 3: e.g., Train team on best practices]",
      },
    },
    // ===========================================================================
    // SECTION: Actionable Task (Inline)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Plan a Team AI Rollout",
        purpose:
          "Planning a team AI deployment prepares you to lead AI adoption in your organization. Even for individual contributors, this exercise reveals governance needs.",
        instructions: [
          "Consider your team or department's current AI usage (or lack thereof)",
          "Identify the 3 highest-impact AI use cases for your team",
          "Define what guardrails would be needed (data policies, review processes)",
          "Create a phased rollout plan: pilot, expand, optimize",
        ],
        deliverable: "A team AI deployment plan with use cases, guardrails, and rollout phases",
        estimatedTime: "10 minutes",
        starterPrompt:
          "**Team AI Deployment Plan**: Top 3 Use Cases: 1) [use case], 2) [use case], 3) [use case]. Data Guardrails: [what not to share]. Review Process: [how to quality-check AI output]. Rollout: Phase 1-[pilot], Phase 2-[expand], Phase 3-[optimize].",
        successCriteria: [
          "Identified 3 realistic team use cases",
          "Defined at least 2 data guardrails",
          "Created a 3-phase rollout timeline",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Completion
    // ===========================================================================
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Team and Enterprise Features Understood",
        description:
          "You now understand how ChatGPT scales from individual use to team and enterprise deployment—including admin controls, analytics, and security considerations. This knowledge positions you to lead AI adoption in your organization.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
