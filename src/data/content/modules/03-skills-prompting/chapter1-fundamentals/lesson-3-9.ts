/**
 * Lesson 3.9: Fixing Failed Prompts
 *
 * PURPOSE: Teach troubleshooting and debugging of prompts
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

export const lesson_3_9: Lesson = {
  id: "3-9",
  chapterId: "ch1-fundamentals",
  moduleId: "03-skills-prompting",
  title: "Fix A Prompt That Missed The Mark",
  description: "Diagnose weak prompts and tighten them fast.",
  order: 9,
  estimatedMinutes: 12,
  xpReward: 105,
  format: "article",
  lessonCategory: "tutorial",
  coverImage:
    "/images/courses/lessons/modules/creative-brainstorming-session-with-sticky-notes.webp",
  coverTitle: "Fix A Prompt That Missed The Mark",

  sections: [
    // HERO IMAGE - Visual opener
    {
      id: "hero-image",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/03-skills-prompting/3-9-cover.webp",
        imageAlt: "Problem solving and debugging",
        title: "Fix A Prompt That Missed The Mark",
        subtitle: "A simple way to repair off-target results",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why Prompts Fail",
        paragraphs: [
          "Most prompt failures fall into predictable patterns.",
          "Missing context, unclear task, wrong format, forgotten constraints, vague role.",
          "Once you recognize the pattern, the fix becomes obvious.",
          "Prompt debugging isn't magic.",
          "It's systematic diagnosis.",
          "Find the gap, fill it, fix it.",
        ],
      },
    },
    // HIGHLIGHT CARD - Failure patterns
    {
      id: "highlight-1",
      type: "highlightCard",
      content: {
        heading: "Common Failure Patterns",
        insights: [
          "**Missing context** - AI doesn't know who you are or the situation",
          "**Unclear task** - The action you want isn't specific enough",
          "**Wrong format** - Output structure doesn't match your needs",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "The C-RT-F Diagnostic Framework",
        paragraphs: [
          "Check each component systematically to find the failure. This diagnostic approach transforms prompt debugging from frustrating guesswork into a reliable process.",
          "First, check context. Ask yourself: Who are you? What's the situation? If AI seems confused about the background or purpose, context is missing. Add information about your role, the audience, and why this task matters.",
          "Second, check role. Is the tone wrong? Is the output off-target in style or depth? These symptoms usually mean you need to specify or adjust the role. Tell AI who to be when responding—a senior manager writes differently than a peer.",
          "Third, check task. Was the action unclear? Sometimes we describe what we want in general terms without being explicit about the specific action. Be crystal clear about what AI should do—write, analyze, summarize, compare, or generate.",
          "Fourth, check format. Is the output badly organized? Does it ramble or miss key sections? Specify exact structure and length requirements. AI needs to know whether you want bullets, paragraphs, a table, or a specific section structure.",
        ],
      },
    },
    // QUICK PROMPT - Diagnostic template
    {
      id: "quick-prompt-1",
      type: "quickPrompt",
      content: {
        heading: "C-RT-F Diagnostic Template",
        description:
          "Use this template to systematically diagnose what's wrong with a failed prompt.",
        promptText:
          "DIAGNOSING FAILED PROMPT:\n\"[paste your failed prompt]\"\n\nC - CONTEXT CHECK:\n- Who am I? [role]\n- What's the situation? [background]\n- Who's the audience? [recipient]\n- What's the goal? [objective]\n\nR - ROLE CHECK:\n- What tone/persona is needed? [style]\n- What expertise level? [depth]\n\nT - TASK CHECK:\n- What specific action? [verb]\n- What should output include? [requirements]\n\nF - FORMAT CHECK:\n- What structure? [sections/list/table]\n- What length? [word/bullet count]",
        placeholders: [
          "paste your failed prompt",
          "role",
          "background",
          "recipient",
          "objective",
          "style",
          "depth",
          "verb",
          "requirements",
          "sections/list/table",
          "word/bullet count",
        ],
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Common Prompt Failures and Fixes",
        paragraphs: [
          "Match the problem to the solution for faster debugging. When you recognize the symptom, you know exactly what to add.",
          "If your output feels generic and robotic, add specific role and context. Tell AI who you are, who the audience is, and what situation you're in. This transforms impersonal text into targeted communication.",
          'When the tone is wrong—too formal, too casual, or just off—specify the role, audience, or tone explicitly. A simple instruction like "write as a peer to a colleague" or "professional but warm tone" fixes most tone issues.',
          'If output is too long or too short, add a word count or length constraint. Numbers work better than vague terms: "under 200 words" produces more consistent results than "keep it brief."',
          "When key points go missing, list must-include items explicitly. AI can't read your mind about what matters—spell out the specific topics, facts, or angles you need covered.",
          'Poor structure responds to format specification. Define exact sections, bullets, or organization. Instead of "summarize this," say "summarize in 3 sections: key points, implications, and next steps."',
          "When AI misinterprets your request entirely, add examples to clarify. Show what good output looks like. One example often communicates more clearly than paragraphs of explanation.",
        ],
      },
    },
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "Let's practice diagnosing prompt failures.",
        quiz: {
          question: "Your AI output sounds robotic and generic. What's most likely missing?",
          options: [
            "More technical jargon",
            "A specific role and context about who you are",
            "A longer prompt",
            "Fewer words",
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
        title: "Before and After: Fixed Prompts",
        paragraphs: [
          "See how diagnosing and fixing transforms results. Each fix targets a specific gap identified through the C-RT-F framework.",
          "The key is being systematic - don't just add random things, target the specific component that's failing.",
        ],
        imageUrl: "/images/courses/modules/03-skills-prompting/3-9-inline-1.webp",
        imageAlt: "Before and after comparison",
        imageCaption: "Targeted fixes produce dramatically better results",
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Before and After: Fixed Prompts",
        paragraphs: [
          "See how diagnosing and fixing transforms results. Each example shows a specific gap identified and filled.",
          'Fix 1 addresses generic output. The before prompt was simply "Write an announcement." The after prompt adds context and structure: "As the CEO, announce the new policy to all employees. Explain why it benefits them, when it takes effect, and where to find details. Inspiring but professional tone, 150 words." The fix added role, audience, specific requirements, tone, and length.',
          'Fix 2 solves wrong format. The before prompt was "Summarize the meeting." The after version specifies: "Summarize as 3 sections: Decisions Made, Action Items, Next Steps. Use bullet points throughout. Under 200 words." The fix added structure, format, and length constraints.',
          'Fix 3 tackles missing key points. The before prompt was "Describe our product." The after version lists requirements: "Describe our product including: target audience, key benefits, pricing, and what makes us different from competitors. 3-4 paragraphs." The fix added a checklist of must-include items and structure guidance.',
        ],
      },
    },
    // HIGHLIGHT CARD - Fix mapping
    {
      id: "highlight-2",
      type: "highlightCard",
      content: {
        heading: "Problem -> Fix Mapping",
        insights: [
          "**Robotic output?** -> Add role ('As a senior manager...')",
          "**Missing information?** -> List must-include items",
          "**Wrong structure?** -> Specify exact format ('3 sections, 5 bullets each')",
        ],
      },
    },
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        context: "Let's practice applying fixes.",
        quiz: {
          question:
            "Your AI output is missing important information you needed. What's the best fix?",
          options: [
            "Use a shorter prompt",
            "Add a list of must-include items to your prompt",
            "Ask AI to guess what you need",
            "Remove all context",
          ],
          correctAnswer: 1,
        },
      },
    },
    {
      id: "section-6",
      type: "text",
      content: {
        title: "You Can Now Fix Any Prompt",
        paragraphs: [
          "You have a diagnostic framework.",
          "You know common failure patterns.",
          "You can systematically troubleshoot issues.",
          "In the final lesson, you'll learn reusable templates: how to build a library of prompt templates for common tasks, saving time and ensuring consistency.",
        ],
      },
    },
    {
      id: "checkpoint-1",
      type: "checkpoint",
      content: {
        question: "What's the first step in troubleshooting a failed prompt?",
        options: [
          "Give up and try a different AI",
          "Identify what went wrong using the C-RT-F diagnostic framework",
          "Use the exact same prompt again",
          "Make the prompt more vague",
        ],
        correctAnswer: 1,
        hint: "Think about checking Context, Role, Task, and Format.",
      },
    },
    // TOOL REFERENCE: Practice with ChatGPT or Claude
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Practice prompting",
        task: "Diagnose and fix a failed prompt",
        feature: "C-RT-F diagnostic framework",
        tip: "Start by identifying which of the 4 components (Context, Role, Task, Format) is weakest",
      },
    },
    // ACTIONABLE TASK - Inline at end
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Prompt Fixing Practice",
        purpose: "Apply the C-RT-F diagnostic framework to fix a prompt that hasn't worked well.",
        instructions: [
          "Take a prompt that hasn't worked well for you",
          "Identify what went wrong with the output",
          "Use the C-RT-F diagnostic to find the gap",
          "Write the fixed prompt targeting that specific gap",
          "Test the fixed version",
          "Compare the results",
        ],
        deliverable: "The before prompt, after prompt, and what you learned from the fix",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          'FAILED PROMPT:\n"[paste your prompt that didn\'t work]"\n\nPROBLEM:\n[What was wrong with the output?]\n\nDIAGNOSIS:\n- Context gap: [what was missing]\n- Role gap: [what was missing]\n- Task gap: [what was missing]\n- Format gap: [what was missing]\n\nFIXED PROMPT:\n"[your improved prompt]"',
        successCriteria: [
          "Diagnosis identifies a specific C-RT-F gap",
          "Fix directly addresses the diagnosed gap",
          "Fixed prompt produces noticeably better output",
        ],
      },
    },
  ] as LessonSection[],
};
