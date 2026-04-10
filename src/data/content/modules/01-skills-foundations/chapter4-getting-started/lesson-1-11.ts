/**
 * Lesson 1.11: Your First Real AI Project (CHALLENGE FORMAT)
 *
 * PURPOSE: Guide learners through completing their first real AI project
 *
 * FORMAT: Article with hero, scenario, and inline actionable task
 *
 * KEY CONCEPTS:
 * - Moving from passive learning to active application
 * - Four project paths: Writing, Research, Organization, Creative
 * - The project workflow: Prompt -> Review -> Iterate -> Refine -> Complete
 *
 * Duration: 30 minutes
 * XP: Base 50 x 1.2 (20-30min) x 1.0 (Beginner) + 50 bonus = 110 XP
 */

import type { Lesson } from "@/types/content";

export const lesson_1_11: Lesson = {
  id: "foundations-11",
  chapterId: "ch4-getting-started",
  moduleId: "01-skills-foundations",
  lessonCategory: "challenge",
  title: "Your First Real AI Workflow",
  description: "Complete a real task using AI from start to finish.",
  order: 12,
  estimatedMinutes: 30,
  format: "article",
  coverImage: "/images/courses/lessons/modules/brain-memory-and-thinking-neural-network.webp",
  coverTitle: "Your First Real AI Workflow",
  xpReward: 110,

  imageSearchTerms: [
    "hands-on learning project workspace",
    "first project achievement milestone",
    "AI practical application learning",
  ],

  sections: [
    // === HERO SECTION ===
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/01-skills-foundations/foundations-11-cover.webp",
        imageAlt: "Your First Real AI Project",
        title: "Your First Real AI Workflow",
        subtitle: "Complete one useful task with AI from start to finish.",
      },
    },

    // === OPENING ===
    {
      id: "opening",
      type: "text",
      content: {
        paragraphs: [
          "**Most courses:** Watch, read, understand. Maybe try a small exercise.",
          "",
          "**This lesson:** Actually complete a real project using AI.",
          "",
          'The goal is to move from "I understand how this works" to "I have used this on something real."',
          "",
          "This is where the course starts to feel useful.",
        ],
      },
    },

    // === SCENARIO: CHOOSE YOUR PATH ===
    {
      id: "scenario",
      type: "scenarioCard",
      content: {
        title: "Choose Your Project Path",
        situation:
          "You've learned the basics of AI. Now you need to use it for something real in your work or life.",
        challenge:
          "Pick one project path and commit to finishing it during this session. The best path is one that matches something you actually need to do.",
        context:
          "This is not just practice. By the end of the lesson, you should have something you can actually use.",
        outcome:
          "A small real win matters more than a perfect demo.",
      },
    },

    // === FOUR PROJECT OPTIONS ===
    {
      id: "project-paths",
      type: "text",
      content: {
        title: "Four Project Paths",
        paragraphs: [
          "Choose the path that matches something you **actually need to do**. The key to this exercise is selecting a real task from your own work or life, not a pretend scenario.",
          "",
          "**Path A: Writing Project** is for a real message that feels hard to start. That might be a client email, a project update, a proposal, or a response you want to handle carefully.",
          "",
          "**Path B: Research Project** is for the moments when you need to understand something before you act. That might be a trend, a new tool, a competitor, or a topic you have not had time to dig into.",
          "",
          "**Path C: Organization Project** is for anything that feels messy. It could be a plan, a timeline, a repeatable process, or a simple decision framework.",
          "",
          "**Path D: Creative Project** is for something you want to make. It could be ideas for a campaign, content for social media, a presentation concept, or a first draft of something original.",
        ],
      },
    },

    // === PATH A: WRITING ===
    {
      id: "path-a",
      type: "text",
      content: {
        title: "Path A: Write Something Real",
        paragraphs: [
          "Write a real work message using AI.",
          "",
          "**Examples:**",
          "- Difficult email to a client",
          "- Project update for stakeholders",
          "- Proposal for a new initiative",
          "- Response to a complaint",
          "",
          "**Process:**",
          "1. Identify what you need to write",
          "2. Give AI the situation and the goal",
          "3. Get a first draft",
          "4. Make one or two improvements",
          "5. Save it or send it",
          "",
          "**Time budget:** 10-15 minutes",
        ],
      },
    },

    // === PATH B: RESEARCH ===
    {
      id: "path-b",
      type: "text",
      content: {
        title: "Path B: Learn Something You Need to Know",
        paragraphs: [
          "Use AI to help you understand a topic.",
          "",
          "**Examples:**",
          "- Industry trend you've heard about",
          "- New technology your team is considering",
          "- Competitor or market analysis",
          "- Best practices for something you do",
          "",
          "**Process:**",
          "1. Define your question",
          "2. Ask AI to explain it in plain English",
          "3. Follow up with one or two clarifying questions",
          "4. Ask what it means in practice",
          "5. Write down the short version",
        ],
      },
    },

    // === QUIZ ===
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "The best path matches something you actually need to do.",
        quiz: {
          question:
            "You have a difficult email to a client that you've been avoiding. Which project path should you choose?",
          options: [
            "Path A: Writing Project",
            "Path B: Research Project",
            "Path C: Organization Project",
            "Path D: Creative Project",
          ],
          correctAnswer: 0,
        },
      },
    },

    // === HOW TO WORK THROUGH YOUR PROJECT ===
    {
      id: "workflow",
      type: "textWithBullets",
      content: {
        title: "The Project Workflow",
        paragraphs: ["Follow these steps to complete your project:"],
        bullets: [
          "**Step 1: Start with context** - Give AI enough detail to understand the task",
          "**Step 2: Review the first draft** - Notice what helps and what still needs work",
          '**Step 3: Iterate** - "This is close, but..." Ask for the change you need',
          "**Step 4: Refine** - Add your own judgment and final details",
          "**Step 5: Complete** - You now have something usable",
        ],
      },
    },

    // === KEY TIPS ===
    {
      id: "key-insight",
      type: "highlightCard",
      content: {
        heading: "Make the Most of This Session",
        insights: [
          "Choose something real - not a hypothetical, something you actually need to do",
          "Be specific - the more context you give, the better the output",
          "Don't settle for \"good enough\" - iterate until it's actually usable",
          "Notice the process - pay attention to how you're working with AI",
          "Timebox appropriately - spend 10-15 minutes, not an hour",
        ],
      },
    },

    // === THE TEMPLATE ===
    {
      id: "template",
      type: "quickPrompt",
      content: {
        heading: "Universal Project Template",
        description: "Use this template to start any AI project:",
        promptText:
          "I need to [complete task]. Here's the context: [Provide 3-5 sentences of context]. The goal is [desired outcome]. The tone should be [tone]. Can you help me with this?",
        placeholders: ["task", "context", "goal", "tone"],
      },
    },

    // === EXAMPLE ===
    {
      id: "example",
      type: "text",
      content: {
        title: "Example in Action",
        paragraphs: [
          "**Example context prompt:**",
          "> \"I need to write a follow-up email to a client. They expressed concern about our pricing. Here's the situation: we've worked together for 2 years, they're considering a competitor who's 20% cheaper. The goal is to acknowledge their concern, explain our value, and open a discussion. The tone should be understanding but confident.\"",
          "",
          "AI will generate a draft in seconds. Your job is to refine it.",
        ],
      },
    },

    // === ITERATION TIPS ===
    {
      id: "iteration",
      type: "text",
      content: {
        title: "When the First Draft Isn't Perfect",
        paragraphs: [
          '**Use iteration prompts:** "This is close, but..."',
          "",
          '- "...make it more concise"',
          '- "...add more specific details about X"',
          '- "...soften the tone in the second paragraph"',
          '- "...emphasize this point more strongly"',
          "",
          "**Each iteration gets you closer.** Don't expect perfection on the first try. 1-3 iterations are normal.",
        ],
      },
    },

    // === QUIZ 2 ===
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        context: "Iteration is how you go from generic to great.",
        quiz: {
          question: "How many iterations should you typically expect before getting usable output?",
          options: [
            "Zero - first draft is always perfect",
            "1-3 iterations are normal",
            "At least 10 iterations",
            "You should never need to iterate",
          ],
          correctAnswer: 1,
        },
      },
    },

    // === MAKING IT YOURS ===
    {
      id: "making-it-yours",
      type: "text",
      content: {
        title: "Making It Yours",
        paragraphs: [
          "**Final polish steps:**",
          "1. Read through the final output",
          "2. Add personal touches only you would know",
          "3. Check for accuracy and appropriateness",
          "4. Make sure it sounds like you",
          "",
          "**AI gave you a draft. Now make it yours.**",
        ],
      },
    },

    // === CLOSING IMAGE ===
    {
      id: "closing-image",
      type: "textWithImage",
      content: {
        title: "You Did It",
        paragraphs: [
          "You just completed a real task using AI.",
          "",
          "This is what AI fluency looks like. Not watching videos. Not reading about it. **Actually doing it.**",
        ],
        image: {
          src: "/images/courses/lessons/modules/ai-technology-artificial-intelligence-concept.webp",
          alt: "Project completion celebration",
          caption: "Completing real work with AI is the goal",
        },
      },
    },

    // === TOOL REFERENCE ===
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "general",
        action: "Complete your first project",
        task: "Use any AI tool to complete a real task from one of the four project paths",
        feature:
          "Choose the tool that fits your task (ChatGPT for writing, Claude for analysis, etc.)",
        tip: "Start with what you have - the universal project template works with any AI assistant",
      },
    },

    // === ACTIONABLE TASK (Inline) ===
    {
      id: "main-challenge",
      type: "actionableTask",
      content: {
        title: "Complete Your First Real AI Project",
        purpose:
          "This lesson is the task. You're not just learning about AI - you're actually using it to complete something real.",
        instructions: [
          "Choose your path (A-D above) based on something you actually need to do",
          "Open your AI tool of choice (ChatGPT, Claude, etc.)",
          "Apply the project workflow: Context -> Draft -> Iterate -> Refine",
          "Iterate until you have something usable",
          "Complete the task or have it ready to complete",
        ],
        deliverable:
          "A brief description of: (1) Which path you chose and why, (2) What you created or accomplished, (3) How many iterations it took, (4) What surprised you about the process",
        estimatedTime: "15-25 minutes",
        starterPrompt:
          "I need to [complete task]. Here's the context: [Provide 3-5 sentences of context]. The goal is [desired outcome]. The tone should be [tone]. Can you help me with this?",
        successCriteria: [
          "You chose a REAL task you actually need to do (not a hypothetical)",
          "You provided clear context to the AI",
          "You iterated at least once to improve the output",
          "You refined the final result to make it yours",
          "You completed or significantly advanced the task",
        ],
      },
    },
  ],
};
