/**
 * Lesson 3.7: Structured Outputs
 *
 * PURPOSE: Teach how to specify exact output formats
 *
 * - Original: 8 slides -> Converted to 7 sections
 * - Added 2 quizzes (after sections 3 and 5)
 * - Added 1 checkpoint (after section 6)
 * - XP: 105 (explicitly set)
 *
 * - Fixed moduleId to '03-skills-prompting'
 * - Added lessonCategory: 'tutorial'
 * - Added heroImage section at start
 * - Converted actionableTask to inline actionableTask section
 * - Added highlightCard sections
 * - Added quickPrompt sections
 * - Added textWithImage sections
 *
 * @created 2026-02-03
 * @modified 2026-02-06 - Converted to article format with quizzes and checkpoint
 * @modified 2026-02-23 - Restructured with new section types
 */

import type { Lesson, LessonSection } from "@/types/content";

export const lesson_3_7: Lesson = {
  id: "3-7",
  chapterId: "ch1-fundamentals",
  moduleId: "03-skills-prompting",
  title: "Ask For The Format You Need",
  description: "Set structure and length so the output is ready to use.",
  order: 7,
  estimatedMinutes: 12,
  xpReward: 105,
  format: "article",
  lessonCategory: "tutorial",
  coverImage: "/images/courses/lessons/modules/writing-and-keyboard-technology-communication.webp",
  coverTitle: "Ask For The Format You Need",

  sections: [
    // HERO IMAGE - Visual opener
    {
      id: "hero-image",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/03-skills-prompting/3-7-cover.webp",
        imageAlt: "Structured writing and formatting",
        title: "Ask For The Format You Need",
        subtitle: "Get the shape of the answer right the first time",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why Format Matters",
        paragraphs: [
          "Great content, wrong format = rework.",
          "AI knows how to write, but it doesn't know how you need the information organized.",
          "Specify the format upfront, get output ready to use.",
          "No reformatting, no reorganizing, just copy and paste.",
        ],
      },
    },
    // HIGHLIGHT CARD - Key insight
    {
      id: "highlight-1",
      type: "highlightCard",
      content: {
        heading: "The Format Formula",
        insights: [
          "**Be specific about structure** - List exact sections, headings, and their order",
          "**Set clear length constraints** - Word counts, bullet counts, paragraph limits",
          "**Define the organization** - Tables, lists, sections, or specific layouts",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Format Specification Examples",
        paragraphs: [
          "Being specific about structure and length transforms AI output from usable to ready-to-use. Let's examine three common format specifications and why they work.",
          'For email format, specify every component: "Email format with: compelling subject line, professional greeting, 2-3 body paragraphs, clear call to action, professional sign-off. Under 200 words total." This tells AI exactly what elements to include and sets a length constraint that prevents verbose output.',
          'For table format, define the structure precisely: "Create a table with 4 columns: Feature, Description, Benefit, Priority. Include 8 rows for the key features." The column names guide AI on what information to include, and the row count sets expectations for depth of coverage.',
          'For list format, specify both structure and content: "Numbered list with 5 action items. Each item should have a bold heading followed by a 1-sentence explanation." This ensures consistent formatting across all items while keeping explanations concise.',
        ],
      },
    },
    // QUICK PROMPT - Email format template
    {
      id: "quick-prompt-1",
      type: "quickPrompt",
      content: {
        heading: "Email Format Template",
        description: "Get perfectly formatted emails every time with this structure specification.",
        promptText:
          "Write an email about [topic].\n\nFormat requirements:\n- Subject line: [specific style, e.g., action-oriented]\n- Greeting: [professional/friendly]\n- Body: 2-3 short paragraphs\n- Call to action: clear next step\n- Sign-off: [your preferred closing]\n\nLength: Under [word count] words\nTone: [professional/casual/urgent]",
        placeholders: [
          "topic",
          "specific style, e.g., action-oriented",
          "professional/friendly",
          "your preferred closing",
          "word count",
          "professional/casual/urgent",
        ],
      },
    },
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "Let's check your understanding of format specification.",
        quiz: {
          question: "Which format specification is most effective?",
          options: [
            "Keep it short",
            "Email format, under 200 words, with subject line, greeting, 3 body paragraphs, and call to action",
            "Write an email",
            "Make it look nice",
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
        title: "The Power of Precise Specifications",
        paragraphs: [
          "Vague instructions lead to vague outputs. When you specify exact structures, word counts, and formats, AI can deliver exactly what you need.",
          "Think about the last time you had to reformat AI output. That time could have been saved with a better format specification upfront.",
        ],
        imageUrl: "/images/courses/modules/03-skills-prompting/3-7-inline-1.webp",
        imageAlt: "Organized document structure",
        imageCaption: "Clear structure saves time on both ends",
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Specifying Length",
        paragraphs: [
          'Being specific about length constraints eliminates the subjectivity that leads to disappointing outputs. Vague instructions like "Keep it short," "Not too long," or "Be concise" leave room for interpretation—your short might be AI\'s long, leading to outputs that still require editing.',
          'Specific length constraints produce predictable output every time. Instead of "Keep it short," specify "Under 200 words." Instead of "A few bullets," say "3-5 bullets, 10 words each." Instead of "Brief summary," use "2 paragraphs maximum." These precise constraints give AI clear boundaries that produce consistent results.',
          "The pattern is simple: replace subjective terms with numbers. Count words, bullets, paragraphs, or sections. AI excels at counting and will adhere to numerical constraints precisely. This transforms format from a guessing game into a reliable specification.",
        ],
      },
    },
    // QUICK PROMPT - Table format template
    {
      id: "quick-prompt-2",
      type: "quickPrompt",
      content: {
        heading: "Table Format Template",
        description: "Get structured data outputs with precise column and row specifications.",
        promptText:
          "Create a table about [topic].\n\nTable structure:\n- Columns: [Column 1], [Column 2], [Column 3], [Column 4]\n- Rows: [number] rows covering [scope]\n- Format: Markdown table\n\nEach cell should be [brief/detailed - max X words]",
        placeholders: [
          "topic",
          "Column 1",
          "Column 2",
          "Column 3",
          "Column 4",
          "number",
          "scope",
          "brief/detailed - max X words",
        ],
      },
    },
    // HIGHLIGHT CARD - Format tips
    {
      id: "highlight-2",
      type: "highlightCard",
      content: {
        heading: "Format Specification Tips",
        insights: [
          "**Always include word count** - 'Under 200 words' is better than 'short'",
          "**Number your sections** - '3 sections: 1) Summary, 2) Details, 3) Next Steps'",
          "**Specify bullet format** - '5 bullets, each under 15 words'",
        ],
      },
    },
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        context: "Let's practice specifying formats.",
        quiz: {
          question: "You need a weekly project report. How should you specify the format?",
          options: [
            "Write a report",
            "Format: 3 sections (This Week, Challenges, Next Week). Each section has 3-4 bullet points. Under 300 words total. Professional tone.",
            "Make it look professional",
            "Keep it brief",
          ],
          correctAnswer: 1,
        },
      },
    },
    {
      id: "section-6",
      type: "text",
      content: {
        title: "You Can Now Specify Any Format",
        paragraphs: [
          "You know how to describe the exact structure you need.",
          "You can specify length, sections, and organization.",
          "Your outputs will be ready to use.",
          "In the next lesson, you'll learn iterative refinement: how to improve prompts through trial and feedback, turning good prompts into great ones.",
        ],
      },
    },
    {
      id: "checkpoint-1",
      type: "checkpoint",
      content: {
        question: "What's the key to getting ready-to-use output from AI?",
        options: [
          "Using vague format descriptions",
          "Specifying exact format, structure, and length upfront",
          "Letting AI decide the format",
          "Not mentioning format at all",
        ],
        correctAnswer: 1,
        hint: "Think about what you need to tell AI so you can use the output without editing.",
      },
    },
    // TOOL REFERENCE: Practice with ChatGPT or Claude
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Practice prompting",
        task: "Create a prompt with exact format specifications",
        feature: "Precise structure, length constraints, and output format",
        tip: 'Always include specific word counts or bullet counts - "short" is subjective, "under 200 words" is precise',
      },
    },
    // ACTIONABLE TASK - Inline at end
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Format Specification Practice",
        purpose:
          "Create a precise format specification for a task you do regularly and see how it improves output quality.",
        instructions: [
          "Pick a format type (email, list, table, report)",
          "Specify the exact structure (sections, headings, columns)",
          "Set clear length constraints (word count, bullet count)",
          "Test your specification with AI",
          "Refine based on the results",
        ],
        deliverable: "Your format specification and a comparison of output before/after using it",
        estimatedTime: "5-10 minutes",
        starterPrompt:
          "Write [content type] about [topic].\n\nFormat requirements:\n- Structure: [exact sections/columns/elements]\n- Length: [specific word/bullet count]\n- Style: [tone and formatting details]\n\nThe output should be ready to [use case - paste into email, present to team, etc.]",
        successCriteria: [
          "Format specification includes exact structure elements",
          "Length constraints are specific (numbers, not vague terms)",
          "AI output requires no reformatting to be usable",
        ],
      },
    },
  ] as LessonSection[],
};
