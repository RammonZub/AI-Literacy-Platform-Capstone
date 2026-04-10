/**
 * Lesson 1.4: What AI Is Good At
 *
 * PURPOSE: Show the most useful everyday tasks AI handles well and where it helps most
 *
 * FORMAT: Article with sections, quizzes, and checkpoint
 *
 * KEY CONCEPTS:
 * - Context + Goal + Constraints formula
 * - Four writing types: Professional emails, Long-form, Quick responses, Creative
 * - AI doesn't replace your voice; it solves the blank page problem
 * - Iteration is key
 *
 * Duration: 15 minutes
 * XP: Base 50 x 1.0 (10-20min) x 1.0 (Beginner) + 25 bonus = 75 XP
 */

import type { Lesson } from "@/types/content";

export const lesson_1_4: Lesson = {
  id: "l1-4-writing-with-ai",
  chapterId: "ch2-core-capabilities",
  moduleId: "01-skills-foundations",
  lessonCategory: "tutorial",
  title: "What AI Is Good At",
  description: "Learn the kinds of work AI handles well so you can spot useful wins faster.",
  order: 4,
  estimatedMinutes: 15,
  format: "article",
  coverImage: "/images/courses/lessons/modules/brain-memory-and-thinking-neural-network.webp",
  coverTitle: "Writing with AI",
  xpReward: 75,
  sections: [
    // ==========================================================================
    // HERO SECTION
    // ==========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/01-skills-foundations/l1-4-writing-with-ai-cover.webp",
        imageAlt: "Person writing with AI assistance on laptop",
        title: "What AI Is Good At",
        subtitle: "The practical tasks where AI gives you the fastest, most believable value",
      },
    },

    // ==========================================================================
    // SECTION 1: THE BLANK PAGE PROBLEM
    // ==========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        paragraphs: [
          "AI doesn't replace your voice. It solves the blank page problem.",
          "",
          "You provide the direction. AI provides the draft. You edit. You refine. You make it yours.",
          "",
          "The result? 2-minute emails. 10-minute reports. Your ideas, faster.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: THE SECRET FORMULA
    // ==========================================================================
    {
      id: "section-2",
      type: "textWithImage",
      content: {
        title: "Context + Goal + Constraints",
        paragraphs: [
          "The simple formula that transforms AI from generic to yours",
          "Every great prompt has three parts",
        ],
        imageUrl:
          "/images/courses/modules/01-skills-foundations/l1-4-writing-with-ai-inline-1.webp",
        imageAlt: "Formula diagram showing Context, Goal, and Constraints",
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Why Each Part Matters",
        paragraphs: [
          "**CONTEXT** - Who are you? What's the situation? What's the history? This is the foundation.",
          "",
          "**GOAL** - What are you trying to accomplish? Persuade? Inform? Request? Different goals need different approaches.",
          "",
          "**CONSTRAINTS** - Tone (professional/warm, formal, casual), Length (brief, comprehensive), Format (must-haves, avoid-things). These constraints shape the output.",
        ],
      },
    },

    // ==========================================================================
    // PRO TIP: THE FORMULA
    // ==========================================================================
    {
      id: "highlight-1",
      type: "highlightCard",
      content: {
        heading: "Pro Tip: The Formula Works Everywhere",
        insights: [
          "Without context, AI guesses. Without a goal, AI meanders. Without constraints, AI sounds like everyone else.",
          "Master this formula and you'll get better results than 90% of AI users.",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 1: THE FORMULA
    // ==========================================================================
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context:
          "Without context, AI guesses. Without a goal, AI meanders. Without constraints, AI sounds like everyone else.",
        quiz: {
          question:
            "Which of the following is NOT part of the Context + Goal + Constraints formula?",
          options: [
            "Context - Who are you and what's the situation?",
            "Goal - What are you trying to accomplish?",
            "Constraints - Tone, length, format",
            "Creativity - How imaginative can AI be?",
          ],
          correctAnswer: 3,
        },
      },
    },

    // ==========================================================================
    // SECTION 3: FOUR WRITING TYPES
    // ==========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "You'll Use AI for 4 Types of Writing",
        paragraphs: [
          "Professional emails, Long-form content, Quick responses, Creative & personal. Each uses the same formula: Context + Goal + Constraints.",
        ],
      },
    },
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Type 1: Professional Emails",
        paragraphs: [
          "The most common use case. Also the highest stakes.",
          "",
          "**The Challenge:** Emails need the right tone. Too casual feels unprofessional. Too formal feels robotic. The sweet spot? Professional but warm.",
          "",
          "**Common Scenarios:** Difficult client conversations, following up on proposals, cold outreach to prospects, delivering bad news diplomatically, requesting information or action.",
        ],
      },
    },
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Quick Responses in Action",
        paragraphs: [
          'Quick responses are where AI shines brightest for everyday communication. Consider a colleague who asks, "Can you review my presentation by EOD?" The AI-generated response might be: "I\'d be happy to review! I have a few calls this afternoon, so I can get feedback to you by 6pm rather than EOD—will that work for your timeline?"',
          "",
          "Notice what makes this response effective. It's professional but warm. It sets clear boundaries by proposing an alternative time rather than just saying no. And it maintains the relationship by showing willingness to help. This is the sweet spot for AI-assisted communication: responses that sound like you at your best, delivered in seconds instead of the minutes you'd spend crafting them manually.",
        ],
      },
    },

    // ==========================================================================
    // CHECKPOINT 1: THE EMAIL TEMPLATE
    // ==========================================================================
    {
      id: "checkpoint-1",
      type: "checkpoint",
      content: {
        question:
          "You need to write an email to a long-term client about a project delay caused by their team not providing requirements on time. What's the GOAL in your prompt?",
        options: [
          "Complain about their unresponsiveness",
          "Acknowledge their frustration, diplomatically explain we need their input to continue",
          "Cancel the project immediately",
          "Demand they send requirements within one hour",
        ],
        correctAnswer: 1,
        hint: "Think about maintaining the relationship while being honest about the situation.",
      },
    },

    // ==========================================================================
    // SECTION 4: THE EMAIL TEMPLATE
    // ==========================================================================
    {
      id: "section-7",
      type: "textWithImage",
      content: {
        title: "The Email Template",
        paragraphs: [
          "Copy this. Use it today.",
          "The more specific about recipient and situation, the less AI-generated it sounds",
        ],
        imageUrl:
          "/images/courses/modules/01-skills-foundations/l1-4-writing-with-ai-inline-2.webp",
        imageAlt: "Email template visualization",
      },
    },
    {
      id: "section-8",
      type: "text",
      content: {
        title: "The Complete Template",
        paragraphs: [
          "**CONTEXT:** Write a [type of email] to [recipient]. What's the situation? What's the history? What's the relationship?",
          "",
          "**GOAL:** What do you want to accomplish? Inform? Persuade? Request? Apologize? Celebrate?",
          "",
          "**CONSTRAINTS:** Tone: Professional but warm / Formal / Casual. Length: Under 150 words / Brief / Comprehensive. Must include: [Key point 1], [Key point 2]",
        ],
      },
    },
    {
      id: "section-9",
      type: "textWithBullets",
      content: {
        title: "The Difference Context Makes",
        paragraphs: ["Same AI. Same recipient. The only difference? Context. Goal. Constraints."],
        bullets: [
          '**Bad Prompt:** "Write an email to my client Sarah."',
          'Result: "Subject: Hello. Dear Sarah, I am writing to you today regarding our ongoing business relationship..." [Generic, formal, impersonal]',
          "",
          '**Good Prompt:** "Write an email to long-term client Sarah. Context: Project delayed 2 weeks because she didn\'t provide requirements on time. Goal: Acknowledge frustration, diplomatically explain we need her input. Tone: Professional but warm."',
          'Result: "Hi Sarah, I wanted to reach out about our project timeline. I know you\'re eager to move forward, and I share that sense of urgency..." [Specific, warm, sounds like you]',
        ],
      },
    },

    // ==========================================================================
    // QUICK PROMPT: EMAIL TEMPLATE
    // ==========================================================================
    {
      id: "quick-prompt-email",
      type: "quickPrompt",
      content: {
        heading: "Professional Email Prompt Template",
        description:
          "Use this template for any professional email. Fill in the brackets with your specifics.",
        promptText:
          "Write a [type of email] to [recipient name/role].\n\nCONTEXT: [What's the situation? What's the history between you?]\n\nGOAL: [What do you want to accomplish?]\n\nCONSTRAINTS:\n- Tone: Professional but warm\n- Length: Under 150 words\n- Must include: [Key point 1], [Key point 2]",
        placeholders: [
          "type of email",
          "recipient name/role",
          "What's the situation?",
          "What do you want to accomplish?",
          "Key point 1",
          "Key point 2",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 2: APPLYING THE FORMULA
    // ==========================================================================
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        context: "The formula works for ALL writing types, not just emails.",
        quiz: {
          question:
            "You're writing a thank you note to a colleague who stayed late to help you. Which constraint would be MOST appropriate?",
          options: [
            "Formal, serious tone. Under 50 words.",
            "Casual, warm tone. Mention specific help they provided.",
            "Corporate, detached tone. Include legal disclaimers.",
            "No constraints—let AI be creative.",
          ],
          correctAnswer: 1,
        },
      },
    },

    // ==========================================================================
    // SECTION 5: LONG-FORM & CREATIVE
    // ==========================================================================
    {
      id: "section-10",
      type: "text",
      content: {
        title: "Type 3: Long-Form Content",
        paragraphs: [
          "Blog posts, articles, reports, white papers. AI provides structure and first draft—you add expertise and polish.",
          "",
          "**What Changes:** With long-form, you add two elements:",
          "",
          "**AUDIENCE** - Who are they? What do they care about? What are their objections?",
          "",
          "**STRUCTURE** - Introduction -> Key points -> Conclusion",
          "",
          "You'll still edit. You'll add examples, adjust phrasing, fact-check. But you'll start with 80% done instead of 0%.",
        ],
      },
    },
    {
      id: "section-11",
      type: "textWithImage",
      content: {
        title: "Type 4: Creative & Personal",
        paragraphs: [
          "Thank you notes. Birthday messages. Congratulations.",
          "AI mirrors the specificity YOU provide",
        ],
        imageUrl:
          "/images/courses/modules/01-skills-foundations/l1-4-writing-with-ai-inline-1.webp",
        imageAlt: "Personal writing examples",
      },
    },
    {
      id: "section-12",
      type: "text",
      content: {
        title: "The Specificity Principle",
        paragraphs: [
          '"Write a thank you note" -> Generic thanks',
          "",
          '"Write a thank you to Sarah, who stayed late 3 nights to fix the critical bug before launch" -> Specific, warm, feels like YOU wrote it',
          "",
          "The more specific you are, the less AI-generated it sounds.",
        ],
      },
    },

    // ==========================================================================
    // PRO TIP: SPECIFICITY
    // ==========================================================================
    {
      id: "highlight-2",
      type: "highlightCard",
      content: {
        heading: "Pro Tip: Specificity Beats Templates",
        insights: [
          "Generic prompts produce generic outputs. The magic happens when you add specific details.",
          "Mention names, dates, specific situations, and personal context for results that sound authentically YOU.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 6: CLOSING
    // ==========================================================================
    {
      id: "section-13",
      type: "text",
      content: {
        title: "Try It Today",
        paragraphs: [
          "Pick ONE writing type. Use the template. Create something you actually need.",
          "",
          "**Choose Your Challenge:**",
          "- The difficult client email you've been avoiding",
          "- The blog post you've been meaning to write",
          "- The thank you note that's long overdue",
          "- A Slack response you've been putting off",
          "",
          "2 minutes. That's all it takes to start. See what AI can do for you.",
        ],
      },
    },
    {
      id: "section-14",
      type: "textWithImage",
      content: {
        title: "Your Ideas, Faster",
        paragraphs: [
          "Start writing with AI today",
          "Context + Goal + Constraints. This lesson focused on GENERATION—creating from scratch.",
        ],
        imageUrl:
          "/images/courses/modules/01-skills-foundations/l1-4-writing-with-ai-inline-1.webp",
        imageAlt: "Writing success visualization",
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
        action: "Write something real",
        task: "Use the Context + Goal + Constraints formula to write a real email or document",
        feature: "New conversation",
        tip: "Keep the formula handy - Context + Goal + Constraints works for every writing task",
      },
    },

    // ==========================================================================
    // MAIN CHALLENGE: ACTIONABLE TASK
    // ==========================================================================
    {
      id: "main-challenge",
      type: "actionableTask",
      content: {
        title: "Your Challenge: Write Something Real",
        purpose:
          "Apply the Context + Goal + Constraints formula to a real writing task you've been avoiding. This builds immediate muscle memory.",
        instructions: [
          "Pick ONE real writing task from your actual work or life",
          "Use the Context + Goal + Constraints formula to build your prompt",
          "Generate your draft with AI",
          "Edit and personalize the output",
          "Rate the quality and time saved",
        ],
        deliverable: "Your prompt, the AI-generated output, and your quality rating (1-5)",
        estimatedTime: "5-10 minutes",
        starterPrompt:
          "Write a [email type] to [recipient].\n\nCONTEXT: [Your specific situation]\n\nGOAL: [What you want to accomplish]\n\nCONSTRAINTS:\n- Tone: [Professional/Warm/Casual]\n- Length: [Brief/Detailed]\n- Must include: [Key points]",
        successCriteria: [
          "Your prompt includes all three parts: Context, Goal, and Constraints",
          "The output required minimal editing to sound like you",
          "You saved time compared to writing from scratch",
        ],
      },
    },
  ],
};
