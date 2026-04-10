/**
 * Lesson 3.4: Professional Personas
 *
 * PURPOSE: Teach role-based prompting for tailored outputs
 *
 * CONTEXT: Fourth lesson of Module 3. Focuses on the 'R' in C-RT-F -
 * assigning roles to AI to shape tone, perspective, and expertise.
 *
 * KEY RESPONSIBILITIES:
 * - Show how role assignment affects output
 * - Provide professional role examples
 * - Demonstrate tone matching through roles
 * - Teach when to use which roles
 *
 * - Original: 15 slides → Converted to 10 sections
 * - Added 2 quizzes (after sections 4 and 8)
 * - Added 1 checkpoint (after section 9)
 * - XP: 121 (explicitly set)
 *
 * - Added heroImage section at start
 * - Added highlightCard sections
 * - Added quickPrompt for role templates
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

export const lesson_3_4: Lesson = {
  id: "3-4",
  chapterId: "ch1-fundamentals",
  moduleId: "03-skills-prompting",
  title: "Give AI A Clear Role",
  description: "Use roles to shape tone, perspective, and depth.",
  order: 4,
  estimatedMinutes: 12,
  xpReward: 121,
  format: "article",
  lessonCategory: "tutorial",
  coverImage: "/images/courses/lessons/modules/writing-and-keyboard-technology-communication.webp",
  coverTitle: "Give AI A Clear Role",

  sections: [
    // ==========================================================================
    // HERO IMAGE - Visual introduction to the lesson
    // ==========================================================================
    {
      id: "hero-image",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/03-skills-prompting/3-4-cover.webp",
        imageAlt: "Professional writing and communication",
        title: "Give AI A Clear Role",
        subtitle: "Steer the response without overcomplicating the prompt",
      },
    },

    // ==========================================================================
    // SECTION 1: Why Roles Matter
    // ==========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why Roles Matter",
        paragraphs: [
          "The same task produces different results depending on who you ask.",
          "Ask a lawyer for advice, you get legal precision.",
          "Ask a marketer, you get persuasion and copy.",
          "Ask a consultant, you get frameworks and analysis.",
          "When you tell AI who to be, it adopts that persona's voice, perspective, and expertise.",
          "Role is your tone and style dial.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Role Impact
    // ==========================================================================
    {
      id: "highlight-1",
      type: "highlightCard",
      content: {
        heading: "Role Impact in Action",
        insights: [
          '**No Role Specified**: "Summarize this meeting" → Generic, neutral output, no clear perspective, may miss the point, feels robotic',
          '**Role: Executive Assistant**: "As my executive assistant, summarize this meeting focusing on decisions and action items" → Professional, organized output, captures what matters, action-oriented, sounds like your trusted assistant',
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: How to Specify a Role
    // ==========================================================================
    {
      id: "section-2",
      type: "textWithBullets",
      content: {
        title: "How to Specify a Role",
        paragraphs: ["Follow these guidelines for effective role specification."],
        bullets: [
          '**Start with "Act as"**: "Act as a senior copywriter" or "You are a management consultant." This establishes the persona clearly.',
          '**Add Perspective**: "with 10 years of experience" or "who specializes in B2B marketing." This adds depth and specificity.',
          '**Specify Tone**: "Your tone should be professional but warm" or "Be direct and concise." This fine-tunes the voice.',
          '**Combine with Expertise**: "Act as a lawyer specializing in contract law. Review this for risks and liabilities."',
        ],
      },
    },

    // ==========================================================================
    // QUIZ 1: Test understanding of role specification
    // ==========================================================================
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "Let's check your understanding of role specification.",
        quiz: {
          question: "Which role specification is most effective for a customer service response?",
          options: [
            "Be helpful",
            "Act as a customer success manager who is empathetic, solution-oriented, and professional",
            "You are a person",
            "Make it sound good",
          ],
          correctAnswer: 1,
        },
      },
    },

    // ==========================================================================
    // SECTION 3: Role Determines Tone
    // ==========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Role Determines Tone",
        paragraphs: [
          "The role you choose sets the tone automatically.",
          "Executive assistant = professional, efficient",
          "Marketing copywriter = persuasive, energetic",
          "Legal advisor = cautious, precise",
          "Customer support = empathetic, helpful",
          "You don't need to specify tone separately.",
          "The role carries it.",
          "Pick the right role, get the right tone.",
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
        title: "Role-Based Prompt Examples",
        paragraphs: [
          "See how roles work in real business scenarios.",
          '**Sales Email**: "Act as a consultative salesperson. Write a follow-up email to a prospect who seemed interested but hasn\'t responded."',
          '**Project Report**: "As a senior project manager, write a status update for stakeholders. Focus on completed milestones, current blockers, and revised timeline."',
          '**Customer Response**: "You are a customer success manager. Respond to this complaint. Acknowledge frustration, explain what happened, and offer a solution."',
        ],
        imageUrl: "/images/courses/modules/03-skills-prompting/3-4-inline-1.webp",
        imageAlt: "Creative brainstorming with different perspectives",
        imageCaption: "Different roles bring different perspectives",
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Basic vs Advanced
    // ==========================================================================
    {
      id: "highlight-2",
      type: "highlightCard",
      content: {
        heading: "Basic vs. Advanced Role Specification",
        insights: [
          '**Basic**: "Be a writer" | "Act as a professional" | "You are helpful" → Too generic, produces generic output',
          '**Advanced**: "Act as a senior B2B copywriter with 15 years experience writing for Fortune 500 executives" | "You are a McKinsey-style management consultant. Use structured frameworks and data-driven analysis" → Specific and dimensional, produces tailored, expert output',
        ],
      },
    },

    // ==========================================================================
    // QUIZ 2: Test understanding of role matching
    // ==========================================================================
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        context: "Let's practice matching roles to scenarios.",
        quiz: {
          question:
            "You need AI to analyze a business problem and provide strategic recommendations. Which role is best?",
          options: [
            "Creative writer",
            "Management consultant with expertise in strategic frameworks",
            "Proofreader",
            "Social media manager",
          ],
          correctAnswer: 1,
        },
      },
    },

    // ==========================================================================
    // QUICK PROMPT: Role Template
    // ==========================================================================
    {
      id: "quick-prompt",
      type: "quickPrompt",
      content: {
        heading: "Try This Role Template",
        description: "Copy this template and customize the role for your specific needs.",
        promptText: `ROLE SPECIFICATION:

"Act as a [professional title] with [number] years of experience in [specialty/industry].

Your expertise includes:
- [Expertise area 1]
- [Expertise area 2]
- [Expertise area 3]

Your communication style should be [adjective: professional/casual/authoritative/friendly] and [adjective: concise/detailed/direct/warm].

When responding, prioritize [what matters most: accuracy/persuasion/clarity/action]."

TASK: [Your specific request here]`,
        placeholders: [
          "professional title",
          "number",
          "specialty/industry",
          "Expertise area 1",
          "Expertise area 2",
          "Expertise area 3",
          "adjective: professional/casual/authoritative/friendly",
          "adjective: concise/detailed/direct/warm",
          "what matters most: accuracy/persuasion/clarity/action",
          "Your specific request here",
        ],
      },
    },

    // ==========================================================================
    // SECTION 4: Summary
    // ==========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "You Can Now Assign Professional Roles",
        paragraphs: [
          "You know roles shape tone and perspective.",
          "You have a library of professional personas.",
          "You know how to specify expertise and experience.",
          "You can match roles to scenarios and audiences.",
          "Your prompts will produce tailored, professional output.",
          "In the next lesson, you'll learn chain of thought: how to make AI show its reasoning and think through complex problems step by step.",
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
        question: "What's the key benefit of specifying a role in your prompts?",
        options: [
          "It makes the prompt longer",
          "It automatically sets the tone, perspective, and expertise level of the response",
          "It confuses the AI",
          "It's not necessary for good results",
        ],
        correctAnswer: 1,
        hint: "Think about how different professionals would approach the same task differently.",
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
        task: "Test different roles for the same task",
        feature: "Role assignment with expertise and tone specification",
        tip: 'Add "with 10 years of experience" to make roles more dimensional',
      },
    },

    // ==========================================================================
    // ACTIONABLE TASK: Role Experimentation
    // ==========================================================================
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Role Experimentation",
        purpose: "Discover how different roles produce different outputs for the same task.",
        instructions: [
          "Pick a task you do regularly (email, report, analysis)",
          "Write prompts for the same task using 3 different professional roles",
          "Compare the outputs - how did each role change the result?",
          "Identify which role works best for your needs",
        ],
        deliverable:
          "Three prompts with different roles and your analysis of how each changed the output",
        estimatedTime: "10-15 minutes",
        starterPrompt: `TASK: [Your task here]

ROLE 1: Act as a [role 1]. [Your request]
ROLE 2: Act as a [role 2]. [Your request]
ROLE 3: Act as a [role 3]. [Your request]`,
        successCriteria: [
          "Each prompt uses a distinctly different professional role",
          "Roles are specific with expertise and tone details",
          "Comparison includes specific observations about differences",
          "Best role choice is justified with reasoning",
        ],
      },
    },
  ] as LessonSection[],
};
