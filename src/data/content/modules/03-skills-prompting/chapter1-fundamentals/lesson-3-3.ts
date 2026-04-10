/**
 * Lesson 3.3: Organizing Background Info
 *
 * PURPOSE: Teach how to structure and organize context information effectively
 *
 * CONTEXT: Third lesson of Module 3. Focuses on how to present background
 * information in a clear, organized way that AI can process effectively.
 *
 * KEY RESPONSIBILITIES:
 * - Show how to structure background information
 * - Teach the "inverted pyramid" for context
 * - Demonstrate grouping related information
 * - Provide templates for common scenarios
 *
 * - Original: 15 slides → Converted to 10 sections
 * - Added 2 quizzes (after sections 4 and 7)
 * - Added 1 checkpoint (after section 9)
 * - XP: 105 (explicitly set)
 *
 * - Added heroImage section at start
 * - Added highlightCard sections
 * - Converted actionableTask to inline section
 * - Added textWithImage for visual breaks
 * - Updated moduleId to '03-skills-prompting'
 * - Added lessonCategory: 'tutorial'
 *
 * @see lesson-3-2.ts - Builds on C-RT-F framework
 * @created 2026-02-03
 * @modified 2026-02-23 - Restructured with new section types
 */

import type { Lesson, LessonSection } from "@/types/content";

export const lesson_3_3: Lesson = {
  id: "3-3",
  chapterId: "ch1-fundamentals",
  moduleId: "03-skills-prompting",
  title: "Organizing Background Info",
  description: "Turn messy context into something AI can follow.",
  order: 3,
  estimatedMinutes: 12,
  xpReward: 105,
  format: "article",
  lessonCategory: "tutorial",
  coverImage:
    "/images/courses/lessons/modules/creative-brainstorming-session-with-sticky-notes.webp",
  coverTitle: "Organizing Background Info",

  sections: [
    // ==========================================================================
    // HERO IMAGE - Visual introduction to the lesson
    // ==========================================================================
    {
      id: "hero-image",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/03-skills-prompting/3-3-cover.webp",
        imageAlt: "Creative brainstorming session with organized sticky notes",
        title: "Organizing Background Info",
        subtitle: "Make the important details easier to follow",
      },
    },

    // ==========================================================================
    // SECTION 1: Why Organization Matters
    // ==========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why Organization Matters",
        paragraphs: [
          "You can have all the right context, but if it's disorganized, AI will miss things.",
          "Information needs structure.",
          "Related points should be grouped.",
          "The most important details should come first.",
          "Clear organization helps AI prioritize, understand relationships, and produce better outputs.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: The Inverted Pyramid
    // ==========================================================================
    {
      id: "highlight-1",
      type: "highlightCard",
      content: {
        heading: "The Inverted Pyramid for Context",
        insights: [
          "**Start with the Most Important**: Begin with the critical information that absolutely must be included. This is the foundation.",
          "**Add Supporting Details**: Follow with important but less critical context that adds depth and clarity.",
          "**End with Nice-to-Have**: Finish with background that's helpful but not essential. If space runs out, this goes first.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: Disorganized vs. Organized Context
    // ==========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Disorganized vs. Organized Context",
        paragraphs: [
          "The difference between disorganized and organized context is clarity. When information is scattered, AI struggles to identify what matters most. Key details get buried, relationships between facts become unclear, and the resulting output reflects that confusion.",
          "Consider a disorganized prompt: \"The project is about the new product launch which is happening in October and we're behind schedule because the design team had some issues but we're working on it and I'm the project manager reporting to the VP who wants updates every week and we have a budget of $50k and there are 5 people on the team.\" This wall of text makes it hard to extract the essential facts. The timeline, budget, team size, and blockers are all mixed together.",
          'Now see the same information organized: "PROJECT: New product launch | STATUS: Behind schedule | TIMELINE: Launch October 15th (4 weeks away) | BUDGET: $50k | TEAM: 5 people | BLOCKER: Design team issues." Clear structure puts key facts front and center. AI can instantly grasp what matters and respond appropriately.',
        ],
      },
    },

    // ==========================================================================
    // SECTION 3: Group Related Information
    // ==========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Group Related Information",
        paragraphs: [
          "Use clear categories to organize your context. When information is grouped logically, AI can process it more effectively and produce better outputs. Three principles guide effective grouping.",
          "First, use clear categories. Group information by topic: Project details, Timeline, Budget, People, Challenges. Each category should contain only related information. This prevents AI from conflating different aspects of your request.",
          'Second, use visual separators. Separate groups with line breaks, labels, or bullet points. Visual structure helps both you and AI see the organization clearly. Labels like "TIMELINE:" or "BUDGET:" act as signposts.',
          "Third, be consistent. Use the same grouping pattern for similar prompts. Consistency builds muscle memory—you'll naturally organize your thoughts in these categories over time, making prompt creation faster and more reliable.",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 1: Test understanding of context organization
    // ==========================================================================
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "Let's check your understanding of context organization.",
        quiz: {
          question: "According to the inverted pyramid method, what information should come first?",
          options: [
            "Nice-to-have background information",
            "Critical information that must be included",
            "Historical details and trivia",
            "Optional footnotes and references",
          ],
          correctAnswer: 1,
        },
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: Visual break
    // ==========================================================================
    {
      id: "text-image-1",
      type: "textWithImage",
      content: {
        title: "When to Use Chronological Order",
        paragraphs: [
          "For stories, timelines, or sequences, chronological order works best.",
          '"First we did X, then Y happened, which led to Z, and now we\'re here."',
          "This narrative structure helps AI understand cause and effect, see how events connect, and appreciate the journey.",
          "Use it for: project histories, customer stories, timeline explanations, sequence of events.",
        ],
        imageUrl: "/images/courses/modules/03-skills-prompting/3-3-inline-1.webp",
        imageAlt: "Strategic planning workspace with organized layers",
        imageCaption: "Choose the right structure for your content type",
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Context Priority Rules
    // ==========================================================================
    {
      id: "highlight-2",
      type: "highlightCard",
      content: {
        heading: "Context Priority Rules",
        insights: [
          "**Mandatory Information First**: Any detail that, if missing, would make the output unusable.",
          "**Action Items Up Front**: What needs to happen? Deadlines? Requests?",
          "**Constraints Before Preferences**: Mention what CAN'T be done before what you'd like.",
          "**Audience Before Tone**: Who is this for? The audience determines everything else.",
          "**Essential Before Nice-to-Have**: Critical details first. Background color comes later.",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 2: Test understanding of context application
    // ==========================================================================
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        context: "Let's practice prioritizing context information.",
        quiz: {
          question:
            "You're writing a prompt for a project update. Which information should come FIRST?",
          options: [
            "The color scheme you prefer for the document",
            "Current project status and key blockers",
            "Historical background from 3 years ago",
            "Optional nice-to-have details about the team",
          ],
          correctAnswer: 1,
        },
      },
    },

    // ==========================================================================
    // SECTION 4: Structure Templates
    // ==========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Structure Templates for Common Scenarios",
        paragraphs: [
          "Use these patterns for frequent tasks. Templates save time and ensure you don't forget important details.",
          "For project updates, follow this sequence: Essential information first, then Status, Timeline, Budget, Risks, and finally Next steps. This prioritization ensures stakeholders immediately understand the most critical information before diving into details.",
          "For meeting follow-ups, structure matters: Attendees, Key decisions, Action items, Deadlines, and Next meeting. This captures what happened and what needs to happen next in a logical flow.",
          "For customer communications, think in terms of: Customer type, Issue history, Current situation, Desired outcome, and Offer/solution. This customer-centric structure keeps the focus on serving their needs effectively.",
          "For report summaries, the pattern is: Purpose, Key findings, Supporting data, Recommendations, and Next actions. This executive-summary approach respects readers' time while providing complete information.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 5: How to Structure Any Context
    // ==========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "How to Structure Any Context",
        paragraphs: [
          "Follow this 4-step process:",
          "1. Identify the Essentials - What information absolutely must be included?",
          "2. Choose Your Structure - Chronological for timelines, category-based for projects, priority-based for requests.",
          "3. Group Related Items - Cluster related information together with clear labels.",
          "4. Order by Priority - Most critical first. Supporting details second. Nice-to-haves last.",
        ],
      },
    },

    // ==========================================================================
    // CHECKPOINT: Final knowledge check
    // ==========================================================================
    {
      id: "checkpoint-1",
      type: "checkpoint",
      content: {
        question: "What's the best approach when you're not sure how to organize your context?",
        options: [
          "Put everything in random order",
          "Start with mandatory information, then supporting details, then nice-to-haves",
          "Leave out the important details to save space",
          "Let AI figure out the organization",
        ],
        correctAnswer: 1,
        hint: "Think about the inverted pyramid approach.",
      },
    },

    // ==========================================================================
    // TOOL REFERENCE: Practice with ChatGPT or Claude
    // ==========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Practice prompting",
        task: "Structure context using the inverted pyramid method",
        feature: "Essential info first, supporting details second",
        tip: "Use labels like PROJECT:, STATUS:, TIMELINE: to organize information",
      },
    },

    // ==========================================================================
    // ACTIONABLE TASK: Context Organization Practice
    // ==========================================================================
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Context Organization Practice",
        purpose: "Create a reusable context template for a task you do regularly.",
        instructions: [
          "Pick a task you do regularly (emails, reports, updates)",
          "Identify the essential information categories for this task",
          "Determine the best structure (chronological, priority-based, or category-based)",
          "Create a reusable template with labeled sections",
          "Test it with an example from your work",
        ],
        deliverable: "A reusable context template with an example of how you applied it",
        estimatedTime: "10-15 minutes",
        starterPrompt: `TASK: [What task you're doing]

ESSENTIAL INFO:
- [Category 1]: [Details]
- [Category 2]: [Details]
- [Category 3]: [Details]

SUPPORTING DETAILS:
- [Additional context]

DESIRED OUTPUT:
- [What you need from AI]`,
        successCriteria: [
          "Template has clear, labeled sections",
          "Essential information is separated from supporting details",
          "Structure is consistent and reusable",
          "Most critical information comes first",
        ],
      },
    },
  ] as LessonSection[],
};
