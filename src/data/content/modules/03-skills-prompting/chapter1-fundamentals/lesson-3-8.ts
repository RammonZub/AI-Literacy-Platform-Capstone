/**
 * Lesson 3.8: Better Prompts Iteratively
 *
 * PURPOSE: Teach iterative refinement of prompts
 *
 * - Original: 8 slides -> Converted to 7 sections
 * - Added 2 quizzes (after sections 3 and 5)
 * - Added 1 checkpoint (after section 6)
 * - XP: 105 (explicitly set)
 *
 * - Fixed moduleId to '03-skills-prompting'
 * - Added lessonCategory: 'exercise'
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

export const lesson_3_8: Lesson = {
  id: "3-8",
  chapterId: "ch1-fundamentals",
  moduleId: "03-skills-prompting",
  title: "Improve Prompts In Rounds",
  description: "Refine prompts instead of starting from scratch.",
  order: 8,
  estimatedMinutes: 12,
  xpReward: 105,
  format: "article",
  lessonCategory: "exercise",
  coverImage:
    "/images/courses/lessons/modules/strategic-planning-workspace-with-organized-layers.webp",
  coverTitle: "Improve Prompts In Rounds",

  sections: [
    // HERO IMAGE - Visual opener
    {
      id: "hero-image",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/03-skills-prompting/3-8-cover.webp",
        imageAlt: "Iterative improvement process",
        title: "Improve Prompts In Rounds",
        subtitle: "Make small changes until the output improves",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Iteration Mindset",
        paragraphs: [
          "Great prompts aren't born perfect.",
          "They evolve through refinement.",
          "First draft gets you 70% there.",
          "Second iteration reaches 90%.",
          "Third pass hits 99%.",
          "Think of prompting like editing.",
          "You don't expect the first draft to be the final version.",
          "Prompting works the same way.",
          "Iterate, improve, perfect.",
        ],
      },
    },
    // HIGHLIGHT CARD - Iteration levels
    {
      id: "highlight-1",
      type: "highlightCard",
      content: {
        heading: "The 70-90-99 Rule",
        insights: [
          "**First draft (70%)** - Gets the basic task done, but may miss nuance",
          "**Second iteration (90%)** - Adds context and constraints, much better output",
          "**Third pass (99%)** - Fine-tunes format and tone, production-ready",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "The Iteration Process",
        paragraphs: [
          "Follow this cycle to improve your prompts systematically. Each step builds on the previous one, creating a feedback loop that produces better results.",
          "Start by writing your first draft using C-RT-F. Give it your best shot with the context, role, task, and format you think will work. Don't worry about perfection—this is your starting point, not your finish line.",
          "Test and review by running the prompt and examining the output carefully. Look at what worked and what didn't. Be honest about gaps between what you wanted and what you got.",
          "Identify gaps by asking what's missing and what could be better. Did AI understand the context? Was the format right? Did it include all the key points? These questions reveal what your next iteration needs.",
          "Refine and retest by adding missing context, adjusting constraints, and trying again. Each iteration should address specific gaps you identified. This focused approach is faster than random changes.",
        ],
      },
    },
    // QUICK PROMPT - Iteration diagnostic
    {
      id: "quick-prompt-1",
      type: "quickPrompt",
      content: {
        heading: "Prompt Refinement Checklist",
        description: "Use this checklist to diagnose what your prompt needs in the next iteration.",
        promptText:
          "Review my AI output and identify improvements:\n\n1. CONTEXT: Is the role/situation clear?\n   Current: [analyze]\n   Add: [what's missing]\n\n2. TASK: Is the action specific?\n   Current: [analyze]\n   Add: [what's missing]\n\n3. FORMAT: Is the output structure defined?\n   Current: [analyze]\n   Add: [what's missing]\n\n4. CONSTRAINTS: Are length/tone limits set?\n   Current: [analyze]\n   Add: [what's missing]",
        placeholders: [
          "analyze",
          "what's missing",
          "analyze",
          "what's missing",
          "analyze",
          "what's missing",
          "analyze",
          "what's missing",
        ],
      },
    },
    // TEXT WITH IMAGE - Visual break
    {
      id: "text-image-1",
      type: "textWithImage",
      content: {
        title: "Prompt Evolution in Practice",
        paragraphs: [
          "Watch a prompt improve through 3 iterations. Each version adds something the previous one missed.",
          "The key is being honest about what's not working and systematically addressing each gap.",
        ],
        imageUrl: "/images/courses/modules/03-skills-prompting/3-8-inline-1.webp",
        imageAlt: "Iterative brainstorming process",
        imageCaption: "Each iteration brings you closer to the perfect prompt",
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Prompt Evolution Example",
        paragraphs: [
          "Watch a prompt improve through 3 iterations. This real example shows how each pass adds crucial information that the previous version lacked.",
          'Iteration 1 scored 70%: "Write an email about the project delay." This prompt is too vague. It\'s missing who is writing, who receives it, what caused the delay, what action is needed, and what tone to use. AI has to guess at all of these, producing generic output.',
          "Iteration 2 reached 90%: \"I'm the project manager writing to the VP. Our website redesign is delayed 2 weeks due to scope changes. Write an email that explains the delay and requests approval.\" This version adds crucial context: roles, specific delay, and clear action request. But it's still missing format details.",
          'Iteration 3 achieved 99%: "I\'m the project manager writing to the VP. Our website redesign is delayed 2 weeks due to scope changes. Write an email that: 1) explains the delay honestly, 2) shows we have a plan, 3) requests approval for the timeline extension, 4) offers a demo of progress. Professional but direct tone, under 200 words." This version has complete context, clear task breakdown, specific format, and defined tone. The result is production-ready.',
        ],
      },
    },
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "Let's check your understanding of iterative prompting.",
        quiz: {
          question: "What's the key to successful prompt iteration?",
          options: [
            "Give up after the first attempt",
            "Test, identify gaps, and refine based on what's missing",
            "Use the same prompt every time",
            "Expect perfection on the first try",
          ],
          correctAnswer: 1,
        },
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Diagnostic Questions for Iteration",
        paragraphs: [
          "When output isn't right, asking the right questions reveals what to fix. These diagnostic questions guide your refinement process.",
          "Ask what context you missed that would help AI understand the situation better. Perhaps you didn't explain who the audience is, what the background situation involves, or what constraints exist in the real world.",
          "Consider what format you should have specified. Did you need sections, bullets, a table, or a specific structure? Format specifications often make the difference between usable and perfect output.",
          "Think about what examples would guide AI better. A single example of the tone, style, or format you want can replace paragraphs of explanation. Examples teach patterns that descriptions cannot.",
          "Review what constraints you should add. Length limits, topics to avoid, required elements, and tone guidelines all help AI produce exactly what you need.",
          "Finally, consider what tone or persona would work better. Should AI write as a peer, an expert, a beginner-friendly guide, or a formal professional? The right voice transforms how content lands with readers.",
        ],
      },
    },
    // HIGHLIGHT CARD - Diagnostic tips
    {
      id: "highlight-2",
      type: "highlightCard",
      content: {
        heading: "Quick Diagnostic Questions",
        insights: [
          "**Output too generic?** -> Add role and specific context",
          "**Wrong format?** -> Specify exact structure and length",
          "**Missing key points?** -> List must-include items explicitly",
        ],
      },
    },
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        context: "Let's practice diagnosing prompt issues.",
        quiz: {
          question: "Your AI output is too long. What should you do first?",
          options: [
            "Give up on using AI",
            "Add a specific word count or length constraint to your prompt",
            "Use a shorter prompt",
            "Ask AI to write less",
          ],
          correctAnswer: 1,
        },
      },
    },
    {
      id: "section-6",
      type: "text",
      content: {
        title: "You Know How to Iterate",
        paragraphs: [
          "You have a process for refining prompts.",
          "You know what to check in each iteration.",
          "You can diagnose what's missing.",
          "In the next lesson, you'll learn troubleshooting: how to fix failed prompts completely, diagnose what went wrong, and get back on track.",
        ],
      },
    },
    {
      id: "checkpoint-1",
      type: "checkpoint",
      content: {
        question: "What's the best approach when your prompt doesn't give you the output you want?",
        options: [
          "Never use AI again",
          "Identify what's missing or wrong, add that information, and try again",
          "Use the exact same prompt",
          "Blame the AI",
        ],
        correctAnswer: 1,
        hint: "Think about the iteration process: test, identify gaps, refine.",
      },
    },
    // TOOL REFERENCE: Practice with ChatGPT or Claude
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Practice prompting",
        task: "Take a prompt through 3 iterations",
        feature: "70-90-99 refinement process",
        tip: "Keep a version history of your iterations so you can see what changed",
      },
    },
    // ACTIONABLE TASK - Inline at end
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Iteration Practice",
        purpose: "Take a prompt through 3 iterations and document what improves at each stage.",
        instructions: [
          "Take a prompt you use regularly",
          "Run it and examine the output (Iteration 1)",
          "Identify what could be better",
          "Add missing context, format, or constraints (Iteration 2)",
          "Test the refined version",
          "Fine-tune for perfection (Iteration 3)",
          "Document what changed and why it improved",
        ],
        deliverable: "Your before and after prompts with notes on what each iteration fixed",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "ITERATION 1 (Original):\n[Your current prompt]\n\nITERATION 2 (After first review):\nAdded: [what you added]\nResult: [how output improved]\n\nITERATION 3 (Final):\nAdded: [final refinements]\nResult: [final output quality]",
        successCriteria: [
          "Iteration 2 shows measurable improvement over Iteration 1",
          "Iteration 3 addresses all remaining issues",
          "You can articulate what each addition fixed",
        ],
      },
    },
  ] as LessonSection[],
};
