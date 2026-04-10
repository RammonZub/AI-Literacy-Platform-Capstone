/**
 * Lesson 2.3: Iterative Refinement (ARTICLE FORMAT)
 *
 * XP CALCULATION:
 * - Base: 75 XP
 * - Length: 50 min -> x1.0
 * - Difficulty: x1.2 (Intermediate)
 * - Quizzes: +20 XP
 * - Checkpoint: +5 XP
 * - Total: 115 XP
 *
 * Duration: 50 minutes
 * XP REWARD: 115 points
 */

import type { Lesson } from "@/types/content";

export const lesson_2_3: Lesson = {
  id: "lesson-2-3",
  chapterId: "ch2-1-prompting",
  moduleId: "02-skills-productivity",
  lessonCategory: "exercise",
  title: "Improve Weak Outputs Fast",
  description: "Learn how to refine and troubleshoot AI answers without starting over",
  order: 3,
  estimatedMinutes: 15,
  xpReward: 115,
  format: "article",
  coverImage:
    "/images/courses/lessons/modules/professional-workspace-with-tools-and-technology.webp",
  coverTitle: "Improve Weak Outputs Fast",

  sections: [
    // ==========================================================================
    // HERO IMAGE SECTION
    // ==========================================================================
    {
      id: "hero-image",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/02-skills-productivity/lesson-2-3-cover.webp",
        imageAlt: "Iterative refinement workspace",
        title: "Improve Weak Outputs Fast",
        subtitle: "Learn how to refine and troubleshoot AI answers without starting over",
      },
    },

    // ==========================================================================
    // SECTION 1: WHY ITERATION MATTERS
    // ==========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why Iteration Matters",
        paragraphs: [
          "First drafts are rarely perfect. Neither are first AI outputs.",
          "But unlike human drafts, AI outputs are instantly regeneratable.",
          "One prompt gets you 70% of the way. A refinement push gets you to 95%.",
          "The gap between first draft and final draft isn't quality-it's specificity. Each iteration closes that gap.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: THE 70-95 RULE
    // ==========================================================================
    {
      id: "highlight-1",
      type: "highlightCard",
      content: {
        heading: "The 70-95 Rule",
        insights: [
          "First prompt: 70% quality - good starting point, needs refinement",
          "First iteration: 90% quality - much closer, minor adjustments needed",
          "Second iteration: 95% quality - ready to use, polished and specific",
          "Each iteration adds specificity that closes the quality gap",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: THE ITERATION LOOP
    // ==========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "The Iteration Loop",
        paragraphs: [
          "Master this four-step process for continuous improvement. The iteration loop is the engine that transforms good outputs into great ones through systematic refinement rather than random regeneration.",
          "The first step is Generate. Get your initial output from AI using the prompting techniques you've learned. Don't expect perfection on the first try. This is your starting point, not your finish line. The goal is to get something on the page that you can work with.",
          "The second step is Evaluate. Assess the quality of the output against your requirements. Did AI understand your intent? Is the tone right? Are key points covered? Is anything missing or wrong? This evaluation phase is where you develop your critical eye for AI output quality.",
          "The third step is Identify. What specifically needs improvement? Be precise. Is it the tone that feels off? Is it too long or too short? Does it lack specificity? Are the examples weak? The more specific your diagnosis, the more effective your next iteration will be.",
          "The fourth step is Refine. Request specific changes based on your evaluation. Don't just say 'make it better.' Say 'shorten the introduction to two sentences, add a concrete example in the second paragraph, and make the tone more conversational.' Specific requests get specific results.",
          "Then repeat until excellent. Four steps. Infinite improvement potential. Each cycle brings you closer to exactly what you need.",
        ],
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: VISUAL BREAK
    // ==========================================================================
    {
      id: "visual-break-1",
      type: "textWithImage",
      content: {
        title: "The Iteration Cycle",
        paragraphs: [
          "Think of iteration as a cycle, not a linear process. Each pass through Generate-Evaluate-Identify-Refine brings you closer to excellence. The key is knowing what to refine at each stage.",
        ],
        imageUrl: "/images/courses/modules/02-skills-productivity/lesson-2-3-inline-1.webp",
        imageAlt: "Continuous improvement cycle visualization",
        imageCaption: "Four steps. Infinite improvement.",
      },
    },

    // ==========================================================================
    // QUICK PROMPT: ITERATION TEMPLATE
    // ==========================================================================
    {
      id: "quick-prompt-1",
      type: "quickPrompt",
      content: {
        heading: "Iteration Request Template",
        description: "Use this template to request specific refinements from AI.",
        promptText: `Looking at your previous response, I need the following refinements:

1. [What to change/improve]
2. [What to add/emphasize]
3. [What to remove/de-emphasize]

Keep everything else the same but make these specific adjustments.`,
        placeholders: [
          "What to change/improve",
          "What to add/emphasize",
          "What to remove/de-emphasize",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 1: Check understanding of iteration basics
    // ==========================================================================
    {
      id: "section-3",
      type: "quiz",
      content: {
        quiz: {
          question: 'What\'s the purpose of the "Identify" step in the iteration loop?',
          options: [
            "To generate new content",
            "To assess what needs improvement before refining",
            "To finalize the output",
            "To add more examples",
          ],
          correctAnswer: 1,
        },
        context:
          "The Identify step is crucial-before you can refine effectively, you need to pinpoint exactly what needs improvement. This prevents random changes and ensures each iteration moves you closer to your goal.",
      },
    },

    // ==========================================================================
    // SECTION 3: SIX REFINEMENT TECHNIQUES
    // ==========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Six Refinement Techniques",
        paragraphs: [
          "These techniques transform good outputs into great ones. The first technique is Tone Shift, which adjusts how formal, casual, warm, or direct the output feels. A typical prompt would be: \"Make this more professional but warmer. Add personal touch while maintaining authority.\" This technique is essential when the AI's default tone doesn't match your relationship with the intended audience.",
          'The second technique is Length Control, allowing you to shorten, expand, or add detail as needed. For example: "Shorten to 150 words by removing fluff. Keep all key points." This is invaluable when you need to fit content into specific constraints like email character limits or presentation slide space.',
          'The third technique is Format Change, transforming the structure from one format to another such as table, bullets, narrative, or JSON. A prompt like "Reformat this as a table. Organize by category" can make dense information instantly more digestible and actionable.',
          'The fourth technique is Audience Shift, adapting content for technical, executive, or general audiences. When you prompt "Rewrite for executive audience. Focus on business impact, not technical details," you\'re asking AI to translate expertise into the language and priorities of a different reader type.',
          'The fifth technique is Style Transfer, matching an example or emulating a specific writer\'s voice. A prompt like "Rewrite in the style of this example. Match the voice and structure" gives AI a concrete pattern to follow, which is especially useful for brand consistency or matching established communication styles.',
          'The sixth technique is Content Focus, which adds, removes, or emphasizes specific elements. For instance: "Emphasize the benefits. Downplay the features. Add concrete examples." This technique reshapes the weight and balance of information to better serve your communication goals.',
        ],
      },
    },

    // ==========================================================================
    // COMPARISON TABLE: REFINEMENT TECHNIQUES
    // ==========================================================================
    {
      id: "comparison-1",
      type: "comparisonTable",
      content: {
        title: "Refinement Techniques at a Glance",
        intro: "Each technique serves a specific purpose. Choose based on what your output needs.",
        columns: [
          { name: "Technique" },
          { name: "What It Changes", recommended: true },
          { name: "Example Prompt" },
        ],
        rows: [
          {
            feature: "Tone Shift",
            values: ["Voice and feeling", '"Make it more professional but warmer"'],
          },
          {
            feature: "Length Control",
            values: ["Word count and depth", '"Shorten to 150 words, keep key points"'],
          },
          {
            feature: "Format Change",
            values: ["Structure and layout", '"Reformat as a table organized by category"'],
          },
          {
            feature: "Audience Shift",
            values: ["Reader perspective", '"Rewrite for executives, focus on ROI"'],
          },
          {
            feature: "Style Transfer",
            values: ["Voice and approach", '"Match the style of this example"'],
          },
          {
            feature: "Content Focus",
            values: ["Emphasis and detail", '"Emphasize benefits, add examples"'],
          },
        ],
        footer: "Combine multiple techniques in a single iteration for comprehensive refinement.",
      },
    },

    // ==========================================================================
    // QUICK PROMPT: TONE SHIFT
    // ==========================================================================
    {
      id: "quick-prompt-2",
      type: "quickPrompt",
      content: {
        heading: "Tone Shift Prompts",
        description: "Use these prompts to adjust the tone of AI outputs.",
        promptText: `Make this [more/less] [adjective] while keeping [what to preserve].

Specific adjustments:
- Make it more [professional/casual/warm/direct/confident/humble]
- But keep it [friendly/authoritative/approachable/formal]
- The voice should sound like [description of ideal tone]`,
        placeholders: [
          "more/less",
          "adjective",
          "what to preserve",
          "professional/casual/warm/direct/confident/humble",
          "friendly/authoritative/approachable/formal",
          "description of ideal tone",
        ],
      },
    },

    // ==========================================================================
    // SCENARIO CARD: TOM'S EMAIL ITERATION
    // ==========================================================================
    {
      id: "scenario-1",
      type: "scenarioCard",
      content: {
        title: "Real-World Scenario: Tom's Email Iteration",
        situation:
          "Tom needed to write an email introducing a new service to potential clients. His first AI-generated attempt was generic and feature-focused-sounding like everyone else in his industry.",
        challenge:
          "Transform a generic, impersonal email into something that sounds authentic and connects with potential clients-all in under 90 seconds.",
        context:
          "Tom had a list of potential clients he'd never contacted before. First impressions mattered.",
        outcome:
          "Three iterations. 90 seconds. Output that was 95% ready to send. Iteration 1 fixed structure, Iteration 2 added specificity and benefits, Iteration 3 polished tone to sound authentic. The result: an email that sounded like Tom actually wrote it.",
      },
    },

    // ==========================================================================
    // SECTION 4: TOM'S EMAIL ITERATION (DETAILED)
    // ==========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Tom's Three-Iteration Process",
        paragraphs: [
          'Here\'s exactly what Tom did to transform his email from generic to personalized. In Iteration 1, he focused on structure with the prompt: "Write an email introducing our new service to potential clients." The result was generic and feature-focused, sounding like everyone else in his industry.',
          'In Iteration 2, he added specificity: "Shorten to under 150 words. Focus on benefits, not features. Add specific call to action." The result was better, but still not quite right. It needed more personality.',
          'In Iteration 3, he polished the tone: "Make it warmer and more personal. Add a question that invites response." The result was perfect. It sounded like Tom actually wrote it himself. Three iterations. 90 seconds. Output that was 95% ready to send. That\'s the power of systematic iteration.',
        ],
      },
    },

    // ==========================================================================
    // SCENARIO CARD: ITERATION EXAMPLE 2
    // ==========================================================================
    {
      id: "scenario-2",
      type: "scenarioCard",
      content: {
        title: "Scenario: Sarah's Report Transformation",
        situation:
          "Sarah had a 10-page technical report that needed to become a 1-page executive summary. The AI's first attempt included too much technical detail.",
        challenge:
          "Transform a detailed technical document into a concise executive summary that highlights business impact without losing credibility.",
        outcome:
          "Iteration 1 removed jargon and shortened to 2 pages. Iteration 2 reorganized around business outcomes. Iteration 3 added a clear recommendation section. Final result: 1 page, 3 key points, clear next steps. Executives read it in 2 minutes and made a decision.",
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: ITERATION INSIGHT
    // ==========================================================================
    {
      id: "highlight-2",
      type: "highlightCard",
      content: {
        heading: "The Iteration Mindset",
        insights: [
          "Iteration 1: Fix structure and main points (70% -> 85%)",
          "Iteration 2: Refine tone and add specificity (85% -> 92%)",
          "Iteration 3: Polish details and finalize (92% -> 95%+)",
          "Each iteration has a specific focus-don't try to fix everything at once",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 2: Check understanding of refinement techniques
    // ==========================================================================
    {
      id: "section-6",
      type: "quiz",
      content: {
        quiz: {
          question: "You want to transform a technical document for executives. Which technique?",
          options: ["Tone shift", "Audience shift", "Length control", "Format change"],
          correctAnswer: 1,
        },
        context:
          "Audience shift is the right technique when you need to adapt content for a different reader type. For executives, you'd focus on business impact, ROI, and strategic implications while removing technical jargon.",
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: VISUAL BREAK 2
    // ==========================================================================
    {
      id: "visual-break-2",
      type: "textWithImage",
      content: {
        title: "Knowing When to Stop",
        paragraphs: [
          'Iteration is powerful, but knowing when to stop is equally important. Not every output needs to be perfect-sometimes "good enough" is actually good enough.',
        ],
        imageUrl: "/images/courses/modules/02-skills-productivity/lesson-2-3-inline-2.webp",
        imageAlt: "Balanced workflow",
        imageCaption: "Perfect is the enemy of done",
      },
    },

    // ==========================================================================
    // SECTION 5: WHEN TO STOP ITERATING
    // ==========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "When to Stop Iterating",
        paragraphs: [
          "Know when good enough is actually good enough. You should stop iterating when the output meets all your requirements, when further changes would be purely subjective preferences rather than objective improvements, when you're seeing diminishing returns on time invested, and when the output is genuinely good enough for its intended purpose.",
          "Remember that AI output is a starting point, not the final product. Your judgment and expertise matter more than another iteration. The goal is progress, not perfection. Knowing when to stop is itself a skill that develops with practice.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: STOP CRITERIA
    // ==========================================================================
    {
      id: "highlight-3",
      type: "highlightCard",
      content: {
        heading: "Stop Iterating When...",
        insights: [
          "Output meets all stated requirements",
          "Further changes are purely subjective preferences",
          "Diminishing returns on time invested (95%+ quality)",
          "Output is good enough for its intended purpose",
        ],
      },
    },

    // ==========================================================================
    // CHECKPOINT: Test comprehensive understanding
    // ==========================================================================
    {
      id: "section-8",
      type: "checkpoint",
      content: {
        question:
          "Describe a 3-iteration plan to improve a weak AI output. What would you do in each iteration?",
        options: [
          "Regenerate the output 3 times with the same prompt",
          "Iteration 1: Focus on structure and main points. Iteration 2: Refine tone and add specificity. Iteration 3: Polish details and finalize",
          "Use 3 different AI tools to generate the output",
          "Ask the AI to make it longer in each iteration",
        ],
        correctAnswer: 1,
        hint: "Think about how each iteration builds on the previous one with a specific focus",
      },
    },

    // ==========================================================================
    // SECTION 6: CONCLUSION
    // ==========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "You Are an Iteration Master",
        paragraphs: [
          "You understand the iteration loop: Generate, evaluate, identify, refine.",
          "You have techniques for tone, length, detail, format, audience.",
          "You know quality metrics and when to stop iterating.",
          "Iteration is where good prompters become great. Practice it. Master it.",
        ],
      },
    },

    // ==========================================================================
    // TOOL REFERENCE
    // ==========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Open ChatGPT and practice the refinement loop",
        task: "Apply 2-3 refinement techniques to transform a good output into great",
        feature: "Use iterative prompting to improve tone, length, or audience fit",
        tip: "Start with a previous AI output and identify specific areas for improvement",
      },
    },

    // ==========================================================================
    // ACTIONABLE TASK (INLINE SECTION)
    // ==========================================================================
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Refinement Practice",
        purpose: "Apply 2-3 refinement techniques to transform a good AI output into a great one.",
        instructions: [
          "Take a previous AI output you've used (or generate a new one now)",
          "Identify 2-3 specific areas for improvement",
          "Apply refinement techniques from this lesson",
          "Compare before and after versions",
          "Note which technique had the biggest impact",
        ],
        deliverable:
          "Your starting output, the refinements you made, and your assessment of the improvement",
        estimatedTime: "10-15 minutes",
        starterPrompt: `Looking at your previous response, please refine it with these specific changes:

1. [Adjust tone]: Make it [more/less] [formal/casual/warm]
2. [Change length]: [Shorten to X words / Expand with more detail about Y]
3. [Shift audience]: Rewrite for [technical/executive/general] audience

Keep the core message but apply these refinements.`,
        successCriteria: [
          "Started with a clear AI output to improve",
          "Applied at least 2 different refinement techniques",
          "Final output is noticeably better than starting version",
          "Can articulate what specifically improved and why",
        ],
      },
    },
  ],
};
