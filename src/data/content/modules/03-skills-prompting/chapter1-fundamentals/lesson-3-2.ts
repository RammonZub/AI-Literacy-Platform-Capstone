/**
 * Lesson 3.2: The C-RT-F Framework
 *
 * PURPOSE: Teach a simple, memorable framework for structuring prompts
 *
 * CONTEXT: Second lesson of Module 3. Builds on the context lesson by providing
 * a repeatable structure for effective prompts.
 *
 * KEY RESPONSIBILITIES:
 * - Introduce the C-RT-F framework (Context, Role, Task, Format)
 * - Explain each component with examples
 * - Show how the framework prevents common mistakes
 * - Provide practice exercises
 *
 * IMPLEMENTATION NOTES:
 * - Framework is easy to remember: C-RT-F (like "certificate")
 * - All examples use business contexts
 * - Progressive: explain each letter, then combine
 *
 * - Original: 20 slides → Converted to 13 sections
 * - Added 2 quizzes (after sections 5 and 10)
 * - Added 1 checkpoint (after section 12)
 * - XP: 125 (explicitly set)
 *
 * - Added heroImage section at start
 * - Added highlightCard sections
 * - Added comparisonTable comparing C-RT-F to other frameworks
 * - Added quickPrompt for template practice
 * - Converted actionableTask to inline section
 * - Added textWithImage for visual breaks
 * - Updated moduleId to '03-skills-prompting'
 * - Added lessonCategory: 'theory'
 *
 * @see lesson-3-1.ts - Prerequisite: understanding of context
 * @created 2026-02-03
 * @modified 2026-02-23 - Restructured with new section types
 */

import type { Lesson, LessonSection } from "@/types/content";

export const lesson_3_2: Lesson = {
  id: "3-2",
  chapterId: "ch1-fundamentals",
  moduleId: "03-skills-prompting",
  title: "A Simple Prompt Recipe",
  description: "Use one beginner-friendly structure to make prompts clearer and easier to reuse.",
  order: 2,
  estimatedMinutes: 15,
  xpReward: 125,
  format: "article",
  lessonCategory: "theory",
  coverImage:
    "/images/courses/lessons/modules/strategic-planning-workspace-with-organized-layers.webp",
  coverTitle: "A Simple Prompt Recipe",

  sections: [
    // ==========================================================================
    // HERO IMAGE - Visual introduction to the lesson
    // ==========================================================================
    {
      id: "hero-image",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/03-skills-prompting/3-2-cover.webp",
        imageAlt: "Strategic planning workspace with organized layers",
        title: "A Simple Prompt Recipe",
        subtitle: "One structure you can use again and again",
      },
    },

    // ==========================================================================
    // SECTION 1: Why You Need a Framework
    // ==========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why You Need a Framework",
        paragraphs: [
          "Without a structure, prompts are hit-or-miss.",
          "You forget important details.",
          "You're not sure what to include.",
          "You waste time iterating.",
          "A framework solves all of this.",
          "It's like a recipe - follow the steps, get the result.",
          "C-RT-F is that recipe for prompting.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Meet C-RT-F
    // ==========================================================================
    {
      id: "highlight-1",
      type: "highlightCard",
      content: {
        heading: "Meet C-RT-F",
        insights: [
          "**C - Context**: Who are you? What's the situation?",
          "**R - Role**: Who should AI be?",
          "**T - Task**: What exactly needs doing?",
          "**F - Format**: What should the output look like?",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: C is for Context
    // ==========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "C is for Context",
        paragraphs: [
          "Context is the background information AI needs to understand your situation. It answers three fundamental questions: who you are, what's happening, and why it matters. Without this foundation, AI is essentially guessing at your intent.",
          'Consider a sales manager who needs help crafting a follow-up message. Instead of saying "write a follow-up email," they provide rich context: "I\'m a sales manager following up on a conference demo. The prospect showed interest but hasn\'t responded to two emails. Our product costs $50k/year and targets mid-size companies."',
          "This context works because AI now knows your role, understands the situation completely, sees the prospect's current status, appreciates the price point, and recognizes the target market. Every detail you provide helps AI craft a response that fits your exact circumstances. The more context you give, the more tailored and useful the output becomes.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 3: R is for Role
    // ==========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "R is for Role",
        paragraphs: [
          "Role tells AI who to be when responding. This single instruction shapes everything about the output—the tone, the vocabulary, the level of detail, even the assumptions AI makes about what matters most.",
          "Think about it this way: should AI respond as a professional editor, bringing precision and polish? Should it be a casual colleague, offering friendly and approachable suggestions? Or should it take on the persona of an expert consultant, providing authoritative analysis?",
          'The examples are telling. When you say "Act as a senior copywriter," you get professional, persuasive language designed to sell. When you say "Be my thoughtful assistant," you get helpful, collaborative suggestions that work with you. When you say "Respond as a legal expert," you get precise, cautious, authoritative advice that leaves no room for misinterpretation.',
          "This is why role matters so much. The same request with a different role produces completely different results. Choose the role that matches your needs.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 4: T is for Task
    // ==========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "T is for Task",
        paragraphs: [
          "Task is the specific action you want AI to perform. This seems obvious, but it's where most prompts fail. Vague tasks produce vague results. Precise tasks produce precise results.",
          'What exactly should AI do? Write, analyze, summarize, create, compare, explain? The verb matters. "Write a 200-word email" tells AI exactly what to produce. "Analyze these three options" signals that AI should compare and evaluate. "Create a 5-step plan" means structured output with sequential steps.',
          'Contrast these with bad examples that produce poor results. "Help with this" gives AI no direction. "Make it better" doesn\'t specify what improvement looks like. "Something about sales" is so vague that AI can only guess. The pattern is clear: specific tasks with clear verbs and defined outputs consistently outperform vague requests.',
        ],
      },
    },

    // ==========================================================================
    // QUIZ 1: Test understanding of C-RT-F components
    // ==========================================================================
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "Let's check your understanding of the C-RT-F components.",
        quiz: {
          question: "In the C-RT-F framework, what does 'R' stand for?",
          options: [
            "Results - What you want to achieve",
            "Role - Who AI should be when responding",
            "Review - How to check the output",
            "Rewrite - How to improve the prompt",
          ],
          correctAnswer: 1,
        },
      },
    },

    // ==========================================================================
    // SECTION 5: F is for Format
    // ==========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "F is for Format",
        paragraphs: [
          "Format specifies how the output should look. This is often the forgotten element, but it makes the difference between usable and unusable output.",
          "Think about the formats you use daily. Emails, memos, reports, and presentations each have distinct structures. Bullet points work for quick scanning, numbered lists for sequences, tables for comparisons. You might need a single paragraph that's concise, or a detailed deep-dive. The tone might be professional, casual, or friendly—each appropriate for different situations.",
          "Why does format matter so much? Without it, AI guesses—and often guesses wrong. You might need a bullet-point summary but get a long paragraph. You might want a formal report but receive casual prose. With format specified, you get exactly what you need in the shape you need it.",
        ],
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: Visual break
    // ==========================================================================
    {
      id: "text-image-1",
      type: "textWithImage",
      content: {
        title: "Putting C-RT-F Together",
        paragraphs: [
          "See how all four components work in harmony.",
          "Start with Context - the foundation everything else builds on.",
          "Then assign a Role to shape the tone, voice, and perspective.",
          "Specify the Task clearly so AI knows exactly what action to perform.",
          "Finally, define the Format so you get output in the shape you need.",
        ],
        imageUrl: "/images/courses/modules/03-skills-prompting/3-2-inline-1.webp",
        imageAlt: "Creative brainstorming session with organized sticky notes",
        imageCaption: "Four elements working together for perfect prompts",
      },
    },

    // ==========================================================================
    // COMPARISON TABLE: C-RT-F vs Other Frameworks
    // ==========================================================================
    {
      id: "comparison-table",
      type: "comparisonTable",
      content: {
        title: "C-RT-F vs Other Prompting Frameworks",
        intro: "How does C-RT-F compare to other popular prompting frameworks?",
        columns: [
          { name: "C-RT-F", recommended: true },
          { name: "CREATE" },
          { name: "RTF" },
          { name: "No Framework" },
        ],
        rows: [
          { feature: "Easy to remember", values: [true, false, true, true] },
          { feature: "Covers role assignment", values: [true, true, false, false] },
          { feature: "Specifies output format", values: [true, true, true, false] },
          { feature: "Context-first approach", values: [true, true, false, false] },
          { feature: "Components", values: ["4", "6", "3", "0"] },
          {
            feature: "Best for",
            values: ["Business use", "Creative work", "Simple tasks", "Experts only"],
          },
        ],
        footer:
          "C-RT-F strikes the ideal balance: comprehensive enough for professional use, simple enough to remember.",
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Complete Example
    // ==========================================================================
    {
      id: "highlight-2",
      type: "highlightCard",
      content: {
        heading: "Complete C-RT-F Example",
        insights: [
          "**C - Context**: \"I'm a project manager at a marketing agency. Our client is launching a new product next month. Development is complete but we're behind on testing due to scope changes. I need to inform my director and request additional QA resources.\"",
          '**R - Role**: "Act as a professional project manager who is proactive and solution-oriented."',
          '**T - Task**: "Write a status update email that explains the delay, outlines the new risks, and requests two additional QA testers for one week."',
          '**F - Format**: "Email format, under 250 words, professional but direct tone. Include: current status, delay explanation, resource request, and revised timeline."',
        ],
      },
    },

    // ==========================================================================
    // SECTION 6: With vs Without C-RT-F
    // ==========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "With vs. Without C-RT-F",
        paragraphs: [
          'The difference between using the framework and not using it is dramatic. Consider what happens when you write "Update on the project" as your entire prompt. The result is vague and incomplete, missing crucial context about which project and what aspects matter. The task is unclear—is this a status report, a request for help, or something else? No format is specified, so you might get a paragraph when you need bullets. This approach requires multiple iterations to get anywhere useful.',
          "Now compare that to a prompt built with C-RT-F. You provide full context about who you are and the situation. You assign a clear role so AI knows what perspective to take. You specify exactly what task needs doing. You define the format so the output shape matches your needs. The result is complete and precise. AI has everything it needs in one prompt. The output is ready to use. One shot, success.",
          "The framework doesn't add work—it eliminates rework. A few extra seconds upfront saves minutes of back-and-forth iteration.",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 2: Test understanding of C-RT-F application
    // ==========================================================================
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        context: "Let's practice applying C-RT-F to a real scenario.",
        quiz: {
          question:
            "You need to write a meeting follow-up email. Which C-RT-F element specifies 'email, under 200 words, professional tone'?",
          options: ["Context", "Role", "Task", "Format"],
          correctAnswer: 3,
        },
      },
    },

    // ==========================================================================
    // QUICK PROMPT: C-RT-F Template
    // ==========================================================================
    {
      id: "quick-prompt",
      type: "quickPrompt",
      content: {
        heading: "Try This C-RT-F Template",
        description: "Copy this template and fill in the brackets with your specific details.",
        promptText: `CONTEXT: I'm a [your role] working on [project/situation]. [Any relevant background: timeline, budget, stakeholders, constraints]

ROLE: Act as a [type of professional: e.g., senior copywriter, management consultant, technical writer]. Your tone should be [professional/casual/authoritative/friendly].

TASK: [Specific action: write/analyze/summarize/create] [what] for [purpose/audience].

FORMAT: [Output type: email/report/list/table], [length constraint], [style notes].`,
        placeholders: [
          "your role",
          "project/situation",
          "type of professional",
          "Specific action",
          "what",
          "purpose/audience",
          "Output type",
          "length constraint",
          "style notes",
        ],
      },
    },

    // ==========================================================================
    // SECTION 7: Why Frameworks Work
    // ==========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Why Frameworks Work",
        paragraphs: [
          "Frameworks reduce cognitive load.",
          'You don\'t have to think "what should I include?"',
          "The framework tells you.",
          "C-RT-F becomes second nature.",
          "You'll automatically include all four elements.",
          "Your prompts will consistently produce great results.",
          "No more guesswork. No more forgetting key details.",
          "Just follow the formula.",
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
        question: "What are the four components of the C-RT-F framework?",
        options: [
          "Context, Results, Task, Format",
          "Context, Role, Task, Format",
          "Context, Role, Time, Format",
          "Content, Role, Task, Format",
        ],
        correctAnswer: 1,
        hint: "Think about the acronym: C-R-T-F",
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
        task: "Write a C-RT-F prompt with all four components",
        feature: "Context, Role, Task, Format framework",
        tip: 'Use "Act as a..." to quickly assign the role component',
      },
    },

    // ==========================================================================
    // ACTIONABLE TASK: C-RT-F Practice
    // ==========================================================================
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: C-RT-F Practice",
        purpose: "Apply the C-RT-F framework to tasks you do regularly and see the difference.",
        instructions: [
          "Take 3 tasks you do regularly (emails, reports, updates, etc.)",
          "For each task, write a C-RT-F prompt with all four elements",
          "C: Who are you? What's the situation?",
          "R: What role should AI take?",
          "T: What specific task needs doing?",
          "F: What format should the output be?",
        ],
        deliverable: "Three C-RT-F prompts for your regular tasks",
        estimatedTime: "10-15 minutes",
        starterPrompt: `CONTEXT: I'm a [your role] working on [project/situation]. [Background details]

ROLE: Act as a [professional type] who is [tone/expertise level].

TASK: [Specific action] [what to produce] for [purpose].

FORMAT: [Output format], [length], [tone/style].`,
        successCriteria: [
          "Each prompt includes all four C-RT-F elements",
          "Context provides relevant background",
          "Role is specific enough to shape tone",
          "Task is clear and actionable",
          "Format specifies output shape",
        ],
      },
    },
  ] as LessonSection[],
};
