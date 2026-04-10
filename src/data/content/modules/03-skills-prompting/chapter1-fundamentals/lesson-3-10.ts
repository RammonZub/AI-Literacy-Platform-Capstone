/**
 * Lesson 3.10: Reusable Templates
 *
 * PURPOSE: Teach building a prompt library for efficiency
 *
 * - Original: 10 slides -> Converted to 9 sections
 * - Added 2 quizzes (after sections 4 and 7)
 * - Added 1 checkpoint (after section 8)
 * - XP: 105 (explicitly set)
 *
 * - Fixed moduleId to '03-skills-prompting'
 * - Added lessonCategory: 'challenge'
 * - Added heroImage section at start
 * - Converted actionableTask to inline actionableTask section
 * - Added highlightCard sections
 * - Added quickPrompt sections
 * - Added textWithImage sections
 * - Added scenarioCard for template library building
 *
 * @created 2026-02-03
 * @modified 2026-02-06 - Converted to article format with quizzes and checkpoint
 * @modified 2026-02-23 - Restructured with new section types
 */

import type { Lesson, LessonSection } from "@/types/content";

export const lesson_3_10: Lesson = {
  id: "3-10",
  chapterId: "ch1-fundamentals",
  moduleId: "03-skills-prompting",
  title: "Build Your Prompt Library",
  description: "Save reusable prompts for the work you repeat.",
  order: 10,
  estimatedMinutes: 12,
  xpReward: 105,
  format: "article",
  lessonCategory: "challenge",
  coverImage: "/images/courses/lessons/modules/writing-and-keyboard-technology-communication.webp",
  coverTitle: "Build Your Prompt Library",

  sections: [
    // HERO IMAGE - Visual opener
    {
      id: "hero-image",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/03-skills-prompting/3-10-cover.webp",
        imageAlt: "Organized template library",
        title: "Build Your Prompt Library",
        subtitle: "Keep your best prompts organized and ready",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why Build Template Library?",
        paragraphs: [
          "You repeat the same tasks constantly.",
          "Weekly reports, meeting notes, status updates, follow-up emails, announcements, summaries.",
          "Each time, you write a fresh prompt.",
          "Or you use a template that works.",
          "Templates ensure consistency, save time, and capture your best practices.",
          "Build once, use forever.",
          "Refine as you go.",
        ],
      },
    },
    // HIGHLIGHT CARD - Benefits
    {
      id: "highlight-1",
      type: "highlightCard",
      content: {
        heading: "Benefits of Template Library",
        insights: [
          "**Consistency** - Same task, same quality, every time",
          "**Speed** - No rewriting prompts from scratch",
          "**Quality** - Templates capture your best, refined prompts",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Anatomy of a Good Template",
        paragraphs: [
          "Effective templates have four key elements that make them reliable and reusable. Understanding these elements helps you create templates that work consistently across different situations.",
          'First, every template needs a clear purpose. Label what the template does with a descriptive name like "Weekly Status Update Email" or "Meeting Follow-up Template." This makes it easy to find the right template when you need it.',
          "Second, use fill-in-the-blank sections with brackets for variable content. Mark places where details change each time: [Project name], [Date], [Key achievement], [Blocker]. This shows you exactly what to customize.",
          "Third, establish a fixed structure. The prompt structure stays the same every time you use it - only the specific details change. This consistency is what makes templates powerful.",
          "Fourth, include usage notes that explain when to use this template, what to fill in, and common variations. These notes help you (and others) get the most from each template.",
        ],
      },
    },
    // SCENARIO CARD - Real-world template building
    {
      id: "scenario-1",
      type: "scenarioCard",
      content: {
        title: "Real-World Scenario: Building Your Library",
        situation:
          "Maya is a marketing manager who writes weekly campaign reports, monthly strategy updates, and daily social media posts. She's been writing fresh prompts for each task and finding it time-consuming.",
        challenge:
          "She needs to standardize her AI workflow so she's not reinventing the wheel every time she needs a similar output.",
        context:
          "She's already developed good prompts through trial and error - she just needs to capture them.",
        outcome:
          "Maya identified her 5 most frequent tasks, documented her best prompts as templates with fill-in-the-blank sections, and now saves 30+ minutes per week. Her outputs are also more consistent in quality.",
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Complete Template Example",
        paragraphs: [
          "See a fully developed template in action. This example demonstrates all four elements working together to create a reliable, reusable prompt.",
          'The template name clearly states its purpose: "Weekly Status Update Template." This descriptive name makes it easy to find when you need it and understand what it produces.',
          'Context is established upfront: "I\'m a project manager writing to stakeholders." This role definition shapes the entire output—AI knows to write at an appropriate level of detail for busy readers who need key information quickly.',
          'Variables are marked with brackets for easy customization: "Project: [Project name] | Status: [on track / at risk / delayed]." These fill-in-the-blank sections show exactly what changes each time you use the template.',
          'The task specification breaks down the structure: "Please write a status update email with these 3 sections: 1) This Week: [list completed milestones, 2-3 bullets] 2) Challenges: [describe blockers, 1-2 bullets] 3) Next Week: [priorities and focus areas, 2-3 bullets]." This structure ensures consistent, complete updates every time.',
          'Format constraints complete the template: "Tone: Transparent but solution-oriented | Length: Under 200 words." These constraints produce predictable, professional output that stakeholders can quickly digest.',
        ],
      },
    },
    // QUICK PROMPT - Template builder
    {
      id: "quick-prompt-1",
      type: "quickPrompt",
      content: {
        heading: "Weekly Status Update Template",
        description: "Copy this template and customize it for your own status updates.",
        promptText:
          "I'm a [role] writing to [audience].\n\nWrite a status update email for [project/initiative name].\n\nCurrent status: [on track / at risk / delayed]\n\nInclude these 3 sections:\n1. This Week: [2-3 completed milestones]\n2. Challenges: [1-2 blockers or risks]\n3. Next Week: [2-3 priorities]\n\nTone: [professional/transparent/solution-oriented]\nLength: Under [word count] words",
        placeholders: [
          "role",
          "audience",
          "project/initiative name",
          "on track / at risk / delayed",
          "2-3 completed milestones",
          "1-2 blockers or risks",
          "2-3 priorities",
          "professional/transparent/solution-oriented",
          "word count",
        ],
      },
    },
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "Let's check your understanding of prompt templates.",
        quiz: {
          question: "What's the key benefit of using prompt templates?",
          options: [
            "They make your prompts longer",
            "They ensure consistency and save time on repeated tasks",
            "They only work once",
            "They're harder to use than writing from scratch",
          ],
          correctAnswer: 1,
        },
      },
    },
    // TEXT WITH IMAGE - Visual break
    {
      id: "text-image-1",
      type: "textWithImage",
      content: {
        title: "Organizing Your Library",
        paragraphs: [
          "A template library is only useful if you can find what you need quickly. Organization matters as much as content.",
          "Think about how you work and organize your templates to match your natural workflow.",
        ],
        imageUrl: "/images/courses/modules/03-skills-prompting/3-10-inline-1.webp",
        imageAlt: "Organized template system",
        imageCaption: "Good organization makes templates instantly accessible",
      },
    },
    {
      id: "section-5",
      type: "text",
      content: {
        title: "How to Organize Your Library",
        paragraphs: [
          "Build for easy access and use. A template library is only valuable if you can find what you need quickly—organization matters as much as content quality.",
          'Organizing by task type groups templates by what you\'re creating: emails, reports, summaries, proposals, and announcements. This approach works well when you think in terms of output format. You open your "emails" folder and see all email templates together.',
          "Organizing by audience groups templates by who receives the output: internal team, clients, executives, stakeholders, and customers. This works well when audience is your primary consideration. You know you're writing to executives, so you go straight to that folder.",
          'Organizing by frequency prioritizes templates by how often you use them: daily, weekly, monthly, and occasional. Put your most-used templates at the top or in a "favorites" section. This minimizes search time for routine tasks.',
          'Use searchable names that clearly describe what the template does. "Weekly Status Email to Stakeholders" is better than "Template 1." Good names mean you can find templates by searching, not just browsing. Think about what you\'d type to find this template three months from now.',
        ],
      },
    },
    // HIGHLIGHT CARD - Organization tips
    {
      id: "highlight-2",
      type: "highlightCard",
      content: {
        heading: "Organization Strategies",
        insights: [
          "**Task-first** - Group by what you're creating (emails, reports, summaries)",
          "**Audience-first** - Group by who receives it (team, clients, executives)",
          "**Frequency-first** - Daily, weekly, monthly - put most-used at top",
        ],
      },
    },
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Version Control Your Templates",
        paragraphs: [
          "Templates evolve as you discover improvements.",
          "Track what works, note what doesn't.",
          "When you refine a template, save the old version with a date.",
          "Template_v1, Template_v2, Template_v3.",
          "You can always revert if the new version doesn't work out.",
          "Build your prompt library like software engineers build code.",
          "Version controlled, continuously improving.",
        ],
      },
    },
    // QUICK PROMPT - Email follow-up template
    {
      id: "quick-prompt-2",
      type: "quickPrompt",
      content: {
        heading: "Meeting Follow-Up Template",
        description: "Another essential template for your library - meeting follow-ups.",
        promptText:
          "Write a meeting follow-up email.\n\nMeeting: [meeting topic] with [attendees]\nDate: [date]\n\nInclude:\n1. Key decisions made (2-3 bullets)\n2. Action items with owners and deadlines (3-5 items)\n3. Next steps and follow-up date\n\nTone: [professional/friendly/urgent]\nLength: Under [word count] words",
        placeholders: [
          "meeting topic",
          "attendees",
          "date",
          "2-3 bullets",
          "3-5 items",
          "professional/friendly/urgent",
          "word count",
        ],
      },
    },
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        context: "Let's practice template organization.",
        quiz: {
          question: "Where should you store your most frequently used prompt templates?",
          options: [
            "Buried in a random document",
            "In an easily searchable system organized by task type and frequency",
            "Only in your head",
            "Scattered across multiple files",
          ],
          correctAnswer: 1,
        },
      },
    },
    {
      id: "section-8",
      type: "text",
      content: {
        title: "You've Completed Module 3: Prompt Engineering",
        paragraphs: [
          "You understand why context matters.",
          "You know the C-RT-F framework by heart.",
          "You can organize background information effectively.",
          "You assign professional roles for tailored output.",
          "You use chain of thought for complex problems.",
          "You guide AI with concrete examples.",
          "You specify exact formats for ready-to-use output.",
          "You iterate to refine and improve prompts.",
          "You can troubleshoot and fix failures.",
          "You have templates for consistent excellence.",
          "You are now a prompt engineering expert.",
          "Go forth and prompt with confidence!",
          "Every result you get will be better, faster, and more effective.",
          "This is the power of great prompting.",
        ],
      },
    },
    {
      id: "checkpoint-1",
      type: "checkpoint",
      content: {
        question: "What's the most important benefit of building a prompt template library?",
        options: [
          "You never have to think again",
          "Consistency, efficiency, and capturing your best practices for repeated use",
          "It takes more time than writing from scratch",
          "Templates only work once",
        ],
        correctAnswer: 1,
        hint: "Think about what happens when you repeat the same tasks regularly.",
      },
    },
    // TOOL REFERENCE: Practice with ChatGPT or Claude
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Practice prompting",
        task: "Build 5 reusable prompt templates",
        feature: "Template library with fill-in-the-blank sections",
        tip: "Use [brackets] for variable content that changes each time you use the template",
      },
    },
    // ACTIONABLE TASK - Inline at end (Challenge)
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Challenge: Build Your Template Library",
        purpose:
          "Create the foundation of your personal prompt library with 5 templates for your most common tasks.",
        instructions: [
          "Identify 5 tasks you do regularly that could benefit from AI assistance",
          "For each task, write an optimized C-RT-F prompt",
          "Add fill-in-the-blank sections [like this] for variable content",
          "Save them in your chosen system (Notion, Google Docs, etc.)",
          "Test each template and refine as needed",
          "Organize by task type or frequency",
        ],
        deliverable: "Your template library structure with 5 ready-to-use templates",
        estimatedTime: "15-20 minutes",
        starterPrompt:
          "TEMPLATE: [Template Name]\n\nPurpose: [When to use this]\n\n---\n\nI'm a [role] writing to [audience].\n\nContext: [situation/background]\n\nTask: [specific action needed]\n\nRequirements:\n- [requirement 1]\n- [requirement 2]\n- [requirement 3]\n\nFormat: [structure/length]\nTone: [style]",
        successCriteria: [
          "Each template has a clear purpose and name",
          "Templates include fill-in-the-blank sections for variable content",
          "All 5 templates follow the C-RT-F structure",
          "Templates are organized logically for quick access",
        ],
      },
    },
  ] as LessonSection[],
};
