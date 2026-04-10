/**
 * Lesson 5.10: Practice - Building Your Prompt Library
 *
 * CHAPTER: 2 - ChatGPT Applications
 * LESSON: 10 of 10 - Practice: Building Your Prompt Library
 *
 * DURATION: 12 minutes (practical application)
 * XP REWARD: 150 XP
 */

import type { Lesson } from "@/types/content";

export const lesson_5_10: Lesson = {
  id: "lesson-5-10",
  chapterId: "ch5-2-applications",
  moduleId: "05-tools-chatgpt",
  title: "Practice: Building Your Prompt Library",
  description: "Create reusable prompts for your recurring work tasks",
  order: 10,
  estimatedMinutes: 12,
  xpReward: 150,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // HERO IMAGE - Start of lesson
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-10-cover.webp",
        imageAlt: "Productivity and organization",
        title: "Building Your Prompt Library",
        subtitle: "Create reusable prompts for your recurring work tasks",
      },
    },
    // ===========================================================================
    // TOOL REFERENCE - Where to practice
    // ===========================================================================
    {
      id: "section-tool",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "For this lesson",
        task: "Use ChatGPT to help you organize and refine your prompt library entries",
        feature: "Custom Instructions",
        tip: "Consider adding your most-used prompts to ChatGPT Custom Instructions for instant access",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Value of Reusable Prompts",
        paragraphs: [
          "You've learned the core prompting skills: context, iteration, multi-step breakdown, decision support.",
          "",
          "Now we turn those skills into a **system**.",
          "",
          "Most professionals have recurring tasks: weekly reports, client emails, meeting prep, research briefs. Each time, you could prompt from scratch—or you could build a library of proven prompts that work.",
          "",
          "A prompt library is the difference between using ChatGPT occasionally and making AI a seamless part of your workflow.",
        ],
      },
    },
    // ===========================================================================
    // HIGHLIGHT CARD - Key insight
    // ===========================================================================
    {
      id: "section-highlight",
      type: "highlightCard",
      content: {
        heading: "Your Prompt Library",
        insights: [
          "A collection of reusable prompts for your recurring tasks.",
          "Each prompt is proven, documented, and ready to use.",
          "Build it once, benefit forever.",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "How to Structure a Library Prompt",
        paragraphs: [
          'Good library prompts are more than just the text. They\'re documented for your future self. Start with a prompt name that\'s clear, specific, and searchable. Don\'t call it "Email prompt"—call it "Client follow-up after first meeting." You should be able to find it in seconds when you need it.',
          "",
          'Include the use case: when do you use this prompt? "After initial client discovery meeting, typically 24-48 hours afterward." This context helps you quickly determine if this is the right prompt for your current situation. Then include the prompt itself—the actual text you paste into ChatGPT—with context placeholders like [client name] and [project type] that you can quickly fill in.',
          "",
          'Add notes about what works and what you\'d change: "This prompt works well because it establishes next steps without being pushy. Adjust tone for formal vs. casual clients." These notes capture your learning over time. Finally, include a last-used date stamp so you know if a prompt is current or might need refreshing. A documented prompt is infinitely more useful than a raw text fragment.',
        ],
      },
    },
    // ===========================================================================
    // SCENARIO CARD - Real-world example
    // ===========================================================================
    {
      id: "section-scenario",
      type: "scenarioCard",
      content: {
        title: "Real-World Scenario",
        situation:
          "Elena manages client communications for a consulting firm. She writes similar emails every week: project status updates, meeting follow-ups, scope change requests, and timeline adjustments.",
        challenge:
          "She was spending 30+ minutes drafting each email from scratch, often forgetting to include important details or struggling with the right tone.",
        context:
          "She started documenting her best prompts after noticing she kept rewriting similar emails.",
        outcome:
          "Elena built a library of 12 prompts organized by category. Now she copies a prompt template, fills in the placeholders, and gets a polished draft in under 5 minutes. She saves 3+ hours per week.",
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Example: Weekly Status Report Prompt",
        paragraphs: [
          'Here\'s a complete library entry for a recurring task. The prompt name is "Weekly status report for project manager." The use case: "Every Friday, send to client and internal team." This tells you exactly when to deploy it.',
          "",
          "The prompt itself reads: \"I'm writing a weekly status report for a [project type] project. Audience: [client role] and [internal team]. This week we completed: [list completed items]. We're blocked on: [list blockers]. Next week: [list planned work]. Write a status report that (1) communicates progress clearly, (2) flags blockers with requested action, (3) sets expectations for next week. Keep it to 3 paragraphs. Tone: Professional but not formal. Format: Clear headings, bullet points for completed items.\"",
          "",
          "The notes capture hard-won wisdom: \"Clients appreciate the 'blockers with requested action' format—it moves from passive to active. Add specific metrics when available (e.g., '3 pages completed' not 'progress on pages').\" This is knowledge you don't want to relearn every week. The last used date of 2025-01-10 tells you this prompt is actively maintained. Copy, fill in placeholders, and you have a polished status report in under five minutes.",
        ],
      },
    },
    // ===========================================================================
    // TEXT WITH IMAGE - Visual break
    // ===========================================================================
    {
      id: "section-image",
      type: "textWithImage",
      content: {
        title: "Your Personal Knowledge Base",
        paragraphs: [
          "Your prompt library becomes a personal knowledge base that grows more valuable over time. Each refined prompt saves you time on future tasks.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-10-inline-1.webp",
        imageAlt: "Planning and organization",
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Where to Store Your Library",
        paragraphs: [
          "Your prompt library should be somewhere you can access it quickly. Options:",
          "",
          "**Notion**: Create a 'Prompts' page with sections by task type (Emails, Reports, Client Work, Research). Fast to search.",
          "",
          "**Google Docs**: Simple 'Prompt Library' doc with headings. Good if you already live in Google Workspace.",
          "",
          "**ChatGPT Custom Instructions**: Add your most-used prompts as custom instructions so they're always available.",
          "",
          "**Physical note**: Sounds old-school, but a sheet with your 5 most-used prompts can be surprisingly useful.",
          "",
          "What matters: You can find, copy, and use prompts in under 10 seconds.",
        ],
      },
    },
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Categories to Start With",
        paragraphs: [
          "Don't overthink it. Start with these five categories and add as you discover needs. First is client communication: follow-up emails, status updates, scope changes, delays, and delivery questions. These are the messages that appear in your inbox repeatedly, and each one can be templated and improved over time.",
          "",
          "Second is internal coordination: meeting requests, status reports, resource needs, blockers, and handoffs. These prompts streamline the operational side of your work. Third is research and analysis: competitive analysis, market research, data interpretation, and summary reports. These prompts help you process information faster.",
          "",
          "Fourth is writing and content: blog posts, social media, proposals, presentations, and documentation. This category captures the creative work that benefits from AI assistance. Fifth is personal productivity: weekly planning, daily prioritization, goal review, and decision support. These prompts help you manage yourself more effectively. Start with prompts for tasks you do at least weekly—you'll see immediate value.",
        ],
      },
    },
    {
      id: "section-6",
      type: "text",
      content: {
        title: "The Maintenance Habit",
        paragraphs: [
          "Your prompt library will evolve. Good prompts get refined. Bad prompts get deleted. New tasks get added.",
          "",
          "**Monthly review**: Spend 15 minutes looking at what prompts you used. Which worked? Which need tweaking? What recurring task needs a prompt?",
          "",
          '**Version notes**: When you refine a prompt, keep a note about why. "Added emphasis on tone" helps you remember what mattered.',
          "",
          "**Prune ruthlessly**: If you haven't used a prompt in 2 months, delete it. A small, active library beats a large, cluttered one.",
          "",
          "Over time, you'll build a personal asset that saves you hours every week.",
        ],
      },
    },
    // ===========================================================================
    // QUICK PROMPT - Practice template
    // ===========================================================================
    {
      id: "section-quickprompt",
      type: "quickPrompt",
      content: {
        heading: "Practice: Create Your First Library Entry",
        description:
          "Choose a task you do at least weekly. Create a complete library entry: prompt name, use case, the prompt itself, and notes.",
        promptText: "I need to [task] for [context]. Please [specific request] with [constraints].",
        placeholders: ["task", "context", "specific request", "constraints"],
      },
    },
    // ===========================================================================
    // ACTIONABLE TASK - At END with full format
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Start Your Prompt Library",
        purpose:
          "A prompt library transforms occasional AI use into a systematic workflow. Starting now ensures you capture the value from everything you've learned.",
        instructions: [
          "Create a simple document (Notion, Google Doc, or notes app) titled 'My Prompt Library'",
          "Add your first 3 proven prompts from this course with: name, use case, the prompt text, and notes",
          "Organize by category: Client Communication, Research, Writing, etc.",
          "Test that you can find and copy each prompt in under 10 seconds",
        ],
        deliverable: "A prompt library document with at least 3 categorized, documented prompts",
        estimatedTime: "10 minutes",
        starterPrompt:
          "Copy this structure for each prompt entry:\n\n**Prompt Name**: [Clear, searchable name]\n**Use Case**: [When to use this]\n**The Prompt**: [Full prompt text with placeholders]\n**Notes**: [What works, what to adjust]\n**Last Used**: [Date]",
        successCriteria: [
          "Document is created and accessible within 10 seconds",
          "Contains at least 3 prompts from real tasks you've practiced",
          "Each prompt has all 4 required documentation elements",
        ],
      },
    },
    // ===========================================================================
    // CHECKPOINT - End-of-lesson
    // ===========================================================================
    {
      id: "section-quiz",
      type: "checkpoint",
      content: {
        question: "What are the essential components of a good library prompt entry?",
        options: [
          "Just the prompt text itself",
          "Prompt name, use case, the prompt text, and notes",
          "A creative title and long description",
          "Only when you last used it",
        ],
        correctAnswer: 1,
        hint: 'Review "How to Structure a Library Prompt" and "The Maintenance Habit" sections if needed.',
      },
    },
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Chapter 2 Complete: Your Prompting Foundation",
        description:
          "You've completed Chapter 2: ChatGPT Applications. You now have the core skills that separate casual users from professionals who get consistent value from AI. You can prompt effectively, iterate when needed, break down complex tasks, support your decision-making, and build a reusable prompt library.",
        xpReward: 150,
        buttonText: "Complete Chapter 2",
      },
    },
  ],
};
