/**
 * Lesson 6.17: Creating Your First Project
 *
 * CHAPTER: 4 - Projects & Knowledge Bases
 * LESSON: 2 of 5 - Hands-On Project Setup
 *
 * DURATION: 12 minutes (practical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Guide learners through creating and configuring their first Claude project
 *
 * KEY RESPONSIBILITIES:
 * - Walk through project creation step-by-step
 * - Show how to add custom instructions
 * - Demonstrate knowledge file uploads
 * - Explain project settings and configuration
 */

import type { Lesson } from "@/types/content";

export const lesson_6_17: Lesson = {
  id: "lesson-6-17",
  chapterId: "ch6-4-projects",
  moduleId: "06-tools-claude",
  title: "Creating Your First Project",
  description: "Set up your first Claude project with custom instructions and knowledge files",
  order: 17,
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
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-17-cover.webp",
        imageAlt: "Creating and setting up new projects",
        title: "Creating Your First Project",
        subtitle: "Get hands-on and build a fully configured Claude project",
      },
    },
    // ===========================================================================
    // SECTION 1: Step-by-Step Creation
    // ===========================================================================
    {
      id: "section-1",
      type: "textWithBullets",
      content: {
        title: "Step 1: Create Your Project",
        paragraphs: ["Creating a project takes just a few clicks:"],
        bullets: [
          "1. Click 'Projects' in the left sidebar of Claude's interface",
          "2. Click the '+' or 'New Project' button",
          "3. Give your project a clear, descriptive name (e.g., 'Q1 Marketing Strategy' or 'Client: Acme Corp')",
          "4. Add a brief description to remind yourself of the project's purpose",
          "5. Click 'Create Project'",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Naming Best Practices
    // ===========================================================================
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "Project Naming That Works",
        insights: [
          "Be specific: 'Client: TechStart Onboarding' not 'Client Work'",
          "Include context: '2024 Content Calendar' not 'Content'",
          "Use consistent prefixes: 'Client:', 'Research:', 'Project:'",
          "Make it findable: You'll thank yourself later",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Custom Instructions
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Step 2: Set Custom Instructions",
        paragraphs: [
          "Custom instructions tell Claude how to behave in this project. This is where Projects become truly powerful—instead of restating your preferences in every conversation, you define them once and Claude applies them automatically.",
          "",
          "To access instructions, look for 'Project Instructions' or 'Custom Instructions' in your project settings. This is typically found in a configuration menu or settings area within your project workspace. The interface is straightforward—you'll find a text area where you can write instructions that apply to every conversation in this project.",
          "",
          "What should you include in your custom instructions? Start with your role and context. Tell Claude who you are: 'I'm a marketing manager at a B2B SaaS company' or 'I'm a freelance consultant specializing in healthcare.' This context helps Claude tailor its responses to your expertise level and professional domain.",
          "",
          "Next, specify your output preferences. Do you want Claude to format responses with bullet points first, then details? Do you prefer concise summaries or detailed explanations? Should Claude ask clarifying questions before diving in? These preferences save you from reformatting or clarifying in every conversation.",
          "",
          "Include tone guidelines that match your communication style. If you want professional but friendly responses, say so. If you need formal language for board communications, specify that. Claude adapts well to tone instructions when they're explicit.",
          "",
          "Finally, add domain context specific to this project. If this project focuses on healthcare compliance, mention that so Claude knows to consider regulatory aspects in its responses. If it's about creative marketing, Claude will adjust accordingly.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Example Instructions
    // ===========================================================================
    {
      id: "section-4",
      type: "scenarioCard",
      content: {
        title: "Example: Custom Instructions Template",
        situation:
          "You're setting up a project for ongoing client work. You want Claude to understand your context and preferences from the start.",
        challenge:
          "How do you write custom instructions that cover everything Claude needs to know without being overwhelming?",
        outcome:
          "Use this template: 'My Context: I'm a [role] at [company type]. I'm working on [project focus]. Output Style: Format responses with clear headings and bullet points. Start with key takeaways, then provide details. Tone: Professional but conversational. Preferences: When suggesting ideas, provide 3 options with pros/cons.'",
      },
    },
    // ===========================================================================
    // SECTION 5: Uploading Knowledge Files
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Step 3: Upload Knowledge Files",
        paragraphs: [
          "Knowledge files are where Projects truly shine. When you upload documents to a project, Claude can reference them in any conversation within that project context. This means you don't have to repeatedly paste the same reference material or explain your project background every time you start a new chat.",
          "",
          "To add knowledge files, click 'Add Knowledge' or the upload icon in your project interface. Claude supports a wide range of formats including PDFs, Word documents, text files, code files, and Markdown. Each format is processed appropriately, with text-based formats generally being processed most quickly and accurately.",
          "",
          "The question of what to upload is just as important as how. Think about the reference materials you find yourself reaching for repeatedly: style guides that define your brand voice, previous work that shows the quality you're aiming for, templates that structure your outputs, research papers that inform your decisions, or client briefs that capture project requirements. These are all excellent candidates for your knowledge base.",
          "",
          "A best practice when starting out is to begin with just two or three key documents. You can always add more as you discover what's useful through actual use. Starting small helps you understand how Claude references your content and lets you evaluate which documents are actually providing value in your workflows.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Project Settings
    // ===========================================================================
    {
      id: "section-6",
      type: "highlightCard",
      content: {
        heading: "Project Settings Overview",
        insights: [
          "Name & Description: Edit anytime as project evolves",
          "Custom Instructions: Your persistent preferences",
          "Knowledge Files: Your reference library",
          "Model Selection: Choose Claude model for this project",
          "Privacy: Control data handling settings",
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
        heading: "Practice: Create Your First Project",
        description: "Now create a real project for something you're working on.",
        promptText:
          "Go to Claude and create a project for an ongoing initiative. Name it clearly, write 3-4 lines of custom instructions, and upload one relevant document. Then start a conversation and notice how Claude already understands your context.",
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
        task: "Create a new project with custom instructions and upload at least one knowledge file. Test by asking Claude a question that should use your project context.",
        feature: "Projects > New Project",
        tip: "Start with just 2-3 key documents. You can always add more as you discover what's useful.",
      },
    },
    // ===========================================================================
    // SECTION 9: Your Turn - Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create and Test Your First Project",
        purpose:
          "Get hands-on experience creating a Claude Project with custom instructions and knowledge files.",
        instructions: [
          "Go to Claude and create a project for one of your ongoing initiatives",
          "Write 3-5 lines of custom instructions specific to this project",
          "Upload at least one relevant reference document",
          "Start a conversation and ask something that should use your project context",
        ],
        deliverable:
          "A created Claude Project with custom instructions, at least one knowledge file, and a test conversation showing Claude using the context",
        estimatedTime: "10-15 minutes",
        successCriteria: [
          "You created a Claude Project with a clear name",
          "Custom instructions are specific to the project purpose",
          "At least one knowledge file is uploaded",
          "You tested that Claude correctly uses the project context",
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
        question: "What are the three key components of a Claude Project?",
        options: [
          "Name, icon, and color",
          "Project name, custom instructions, and knowledge files",
          "Username, password, and email",
          "Just the project name",
        ],
        correctAnswer: 1,
        hint: 'Review "Creating Your First Project" section if needed.',
      },
    },
    // ===========================================================================
    // SECTION 11: Completion
    // ===========================================================================
    {
      id: "section-11",
      type: "completion",
      content: {
        title: "First Project Created",
        description:
          "You've just set up your first Claude project with custom instructions and knowledge files. This foundation will save you hours of context-setting in future conversations. Next, we'll dive deeper into building effective knowledge bases.",
        xpReward: 100,
        buttonText: "Complete Project Setup",
      },
    },
  ],
};
