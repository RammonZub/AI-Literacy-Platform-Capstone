/**
 * Lesson 6.28: Capstone - Your Claude Mastery System
 *
 * CHAPTER: 6 - Integrations & Team Features
 * LESSON: 4 of 6 - Course Capstone
 *
 * DURATION: 16 minutes
 * XP REWARD: 150 XP (Capstone Bonus)
 *
 * PURPOSE: Integrate all Claude skills into a complete mastery system with implementation plan
 *
 * KEY RESPONSIBILITIES:
 * - Synthesize all course learning
 * - Create complete workflow integration
 * - Provide 30-day implementation plan
 * - Celebrate course completion
 */

import type { Lesson } from "@/types/content";

export const lesson_6_28: Lesson = {
  id: "lesson-6-28",
  chapterId: "ch6-6-integrations",
  moduleId: "06-tools-claude",
  lessonCategory: "tutorial",
  title: "Capstone: Your Claude Mastery System",
  description:
    "Bring together everything you've learned into a complete Claude mastery system and 30-day implementation plan",
  order: 28,
  estimatedMinutes: 16,
  xpReward: 150,
  format: "article",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-28-cover.webp",
        imageAlt: "Claude mastery and achievement celebration",
        title: "Capstone: Your Claude Mastery System",
        subtitle:
          "Bring together everything you've learned into a complete Claude mastery system and 30-day implementation plan",
      },
    },
    // ===========================================================================
    // SECTION 1: Cover Introduction
    // ===========================================================================
    {
      id: "section-cover",
      type: "textWithImage",
      content: {
        title: "Your Claude Mastery System",
        paragraphs: [
          "You've learned the skills. Now it's time to build your complete Claude mastery system—a personalized framework that makes AI assistance a natural, powerful part of everything you do.",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-28-inline-1.webp",
        imageAlt: "Mastery and achievement celebration",
      },
    },
    // ===========================================================================
    // SECTION 2: Your Complete Claude Toolkit
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Your Complete Claude Toolkit",
        paragraphs: [
          "Look at how far you've come. You now have mastery across:",
          "",
          "**Core Skills**: Effective prompting, format control, role assignment",
          "",
          "**Content Creation**: Artifacts for documents, iterative refinement, multi-format output",
          "",
          "**Organization**: Projects for context, knowledge bases, custom instructions",
          "",
          "**Analysis**: Document analysis, multi-file synthesis, research workflows",
          "",
          "**Advanced Features**: Extended Thinking, code generation, Chrome extension",
          "",
          "**Integration**: Automations, team features, personal productivity systems",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: The Complete Workflow
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Your Integrated Daily Workflow",
        insights: [
          "Morning: Start in relevant Project - Plan day with Claude - Review priorities",
          "Throughout day: Chrome extension for research - Artifacts for deliverables - Extended Thinking for complex decisions",
          "Content creation: Draft in Artifact - Iterate with targeted prompts - Export in needed format",
          "Analysis: Upload documents to Project - Ask specific questions - Synthesize into reports",
          "End of day: Summarize accomplishments - Plan tomorrow - Update knowledge bases",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: 30-Day Implementation Plan
    // ===========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "30-Day Implementation Plan",
        paragraphs: [
          "Implementing everything you've learned works best with a structured approach. This 30-day plan breaks down your Claude mastery journey into manageable phases, each building on the previous one.",
          "",
          "During Days 1-7, focus on foundation. Set up your Projects with clear purposes, upload the knowledge files that give Claude context about your work, and create basic templates for your most common tasks. Don't try to do everything—just establish solid foundations.",
          "",
          "Days 8-14 are about building habits. Establish daily routines that include Claude naturally, install the Chrome extension and start using it for research, and practice creating Artifacts for your real work. The goal is making Claude feel like a natural part of your workflow rather than an add-on.",
          "",
          "Days 15-21 expand your capabilities. Add your first automations through Zapier or Make, experiment with Extended Thinking for complex problems, and refine your templates based on what's working. This is where your system starts to feel sophisticated.",
          "",
          "Days 22-30 focus on optimization. Measure your productivity gains compared to your pre-Claude baseline, optimize workflows that could be better, and document your system so you can maintain and improve it over time. Documentation now saves confusion later.",
          "",
          "Beyond the 30 days, maintain your system through weekly reviews, continuous improvement based on what you learn, and regular knowledge base updates as your work evolves. Claude mastery isn't a destination—it's an ongoing practice that compounds over time.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Week-by-Week Details
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Week-by-Week Implementation",
        paragraphs: [
          "**Week 1 - Foundation**",
          "- Create 3 core Projects (Work, Personal, Learning)",
          "- Upload key reference documents",
          "- Create 5 essential prompt templates",
          "- Install and configure Chrome extension",
          "",
          "**Week 2 - Habits**",
          "- Start daily planning routine with Claude",
          "- Use Chrome extension for 3 research tasks",
          "- Create your first Artifact from scratch",
          "- Practice Extended Thinking on one complex problem",
          "",
          "**Week 3 - Automation**",
          "- Set up your first Zapier/Make automation",
          "- Create knowledge base for recurring topic",
          "- Refine templates based on what's working",
          "- Try code generation for a practical task",
          "",
          "**Week 4 - Mastery**",
          "- Complete productivity audit with Claude",
          "- Document your personal workflows",
          "- Measure time saved and quality improvements",
          "- Plan ongoing optimization",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Your Mastery Checklist
    // ===========================================================================
    {
      id: "section-6",
      type: "textWithImage",
      content: {
        title: "Your Mastery Checklist",
        paragraphs: [
          "Mark your progress. You're a Claude master when you:",
          "",
          "[ ] Have organized Projects for all major work contexts",
          "[ ] Use Artifacts for content creation without thinking about it",
          "[ ] Naturally activate Extended Thinking for complex problems",
          "[ ] Use the Chrome extension as part of browsing routine",
          "[ ] Have templates for your top 5 recurring tasks",
          "[ ] Run at least one automation in the background",
          "[ ] Regularly update your knowledge bases",
          "[ ] Can explain Claude's strengths and limitations accurately",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-28-inline-2.webp",
        imageAlt: "Achievement and mastery checklist",
      },
    },
    // ===========================================================================
    // SECTION 7: Continuing Your Journey
    // ===========================================================================
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "Sustaining Your Mastery",
        insights: [
          "Stay current: Follow Claude updates and new features",
          "Community: Engage with other Claude users to learn tips",
          "Experiment: Try new workflows and techniques regularly",
          "Document: Keep notes on what works for your specific context",
          "Share: Teach colleagues and amplify your team's productivity",
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
        action: "For complete mastery",
        task: "Use the complete Claude toolkit: Projects, Artifacts, Extended Thinking, Chrome extension, and automations together",
        feature: "Complete Claude Toolkit",
        tip: "Review your system weekly for optimization opportunities and keep your prompt library organized",
      },
    },
    // ===========================================================================
    // SECTION 9: Quick Prompt
    // ===========================================================================
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Your Claude Vision",
        description: "Create your personal vision for Claude mastery.",
        promptText:
          "Ask Claude: 'Help me create my Claude mastery vision statement. In 30 days, I want to be able to [describe your goals]. Create a one-paragraph vision and 3 key habits I'll maintain.'",
      },
    },
    // ===========================================================================
    // SECTION 10: Your Turn - Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create Your 30-Day Implementation Plan",
        purpose:
          "Develop a concrete, actionable 30-day plan to implement everything you've learned.",
        instructions: [
          "Write your Claude mastery vision statement",
          "Break down weeks 1-4 with specific actions for each",
          "Identify 3 key habits you'll maintain daily",
          "Schedule weekly review times to track progress",
        ],
        deliverable:
          "A complete 30-day implementation plan with weekly milestones, daily habits, and review schedule",
        estimatedTime: "15 minutes",
        successCriteria: [
          "You have a clear vision statement",
          "Each week has 2-3 specific actions",
          "3 daily habits are defined",
          "Review times are scheduled in your calendar",
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
        question: "What is the key to long-term success with Claude?",
        options: [
          "Using Claude for every single task",
          "Building habits, maintaining a prompt library, and continuously refining your workflows",
          "Only using Claude occasionally",
          "Never changing how you use Claude",
        ],
        correctAnswer: 1,
        hint: 'Review "Sustaining Your Claude Mastery" section if needed.',
      },
    },
    // ===========================================================================
    // SECTION 12: Course Completion Celebration
    // ===========================================================================
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Congratulations: Claude Master!",
        description:
          "You've completed the entire Claude Mastery course. From foundational prompting to advanced integrations, you now have the skills to leverage Claude effectively in any professional context. This isn't the end—it's the beginning of your journey as a Claude power user. Your personalized system will evolve, your productivity will compound, and you'll discover new applications we haven't even imagined. Go forth and multiply your capabilities with Claude as your AI partner.",
        xpReward: 150,
        buttonText: "Complete Claude Mastery Course",
      },
    },
  ],
};
