/**
 * Lesson 4.5: Human-AI Collaboration
 *
 * PURPOSE: Master the workflow of editing and polishing AI-generated content
 *
 * CONTEXT: Fifth lesson of Module 4 (Creation). Focuses on the collaboration
 * workflow between human creativity and AI generation.
 *
 * KEY RESPONSIBILITIES:
 * - Teach the collaboration workflow
 * - Show what to keep from AI
 * - Explain what to change yourself
 * - Demonstrate adding your voice and expertise
 * - Emphasize quality control and review
 *
 * IMPLEMENTATION NOTES:
 * - 11-minute lesson converted from 20 slides to ~18 sections
 * - Focuses on the 80/20 rule of AI writing
 * - Uses before/after examples extensively
 * - XP Calculation: Base 125 x 1.0 (10-20min) x 1.0 (Beginner) + 30 (2 quizzes x 10 + 1 checkpoint x 10) = 155 XP
 *
 *
 * DEPENDENCIES:
 * - Module 1 (Foundation): Basic AI familiarity
 * - Lesson 4.1: AI as Writing Partner (prerequisite)
 *
 * @see lesson-4-1.ts - Prerequisite: basic AI writing collaboration
 * @see lesson-4-6.ts - Builds on this with brand voice
 * @created 2026-02-06
 */

import type { Lesson, LessonSection } from "@/types/content";

export const lesson_4_5: Lesson = {
  id: "lesson-4-5",
  chapterId: "ch1-fundamentals",
  moduleId: "04-skills-creation",
  lessonCategory: "theory",
  title: "Human-AI Collaboration",
  description:
    "Master the art of collaborating with AI to create polished, authentic content that sounds like you.",
  order: 5,
  estimatedMinutes: 11,
  xpReward: 155,
  format: "article",
  coverImage: "/images/courses/lessons/modules/writing-and-creative-vocabulary.webp",
  coverTitle: "Human-AI Collaboration",
  sections: [
    // ==========================================================================
    // HERO SECTION
    // ==========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/04-skills-creation/lesson-4-5-cover.webp",
        imageAlt: "Human-AI Collaboration",
        title: "Human-AI Collaboration",
        subtitle: "AI accelerates. You authenticate. Together: content that converts.",
      },
    },

    // ==========================================================================
    // SECTION 1: Introduction - The collaboration model
    // ==========================================================================
    {
      id: "s1-intro",
      type: "text",
      content: {
        title: "The New Writing Partnership",
        paragraphs: [
          "AI doesn't replace you. It accelerates you.",
          "Think of AI like a talented junior writer. They generate drafts quickly, need clear direction, don't know your context, lack your expertise and judgment, and learn from feedback.",
          "You're still the senior author. AI just handles the first draft.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: The Collaboration Workflow
    // ==========================================================================
    {
      id: "highlight-workflow",
      type: "highlightCard",
      content: {
        heading: "The Collaboration Workflow",
        insights: [
          "1. Direct: Give AI clear context and goals",
          "2. Generate: AI creates first draft from your brief",
          "3. Review: Read through, mark what works and what doesn't",
          "4. Edit: Add your voice, fix gaps, ensure accuracy",
          "5. Polish: Final review for flow, tone, and impact",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: Full collaboration example
    // ==========================================================================
    {
      id: "s5-example",
      type: "textWithImage",
      content: {
        title: "Full Collaboration: Client Email",
        paragraphs: [
          "Let's see the collaboration workflow in action with a client email example.",
          "AI generates a professional draft. But you add the personal touch about his recent vacation, make the request more specific, soften the deadline, and add value about what happens next.",
          "The combination of AI's structure + your voice = perfect email.",
        ],
        image: {
          src: "/images/courses/lessons/abstract-blue.jpg",
          alt: "Email evolution from AI draft to final polished version",
          caption: "AI provides structure. You add humanity.",
        },
      },
    },

    // ==========================================================================
    // QUIZ 1
    // ==========================================================================
    {
      id: "q1-workflow",
      type: "quiz",
      content: {
        quiz: {
          question: "What is the correct order of the AI collaboration workflow?",
          options: [
            "Generate -> Direct -> Review -> Edit -> Polish",
            "Direct -> Generate -> Review -> Edit -> Polish",
            "Review -> Generate -> Direct -> Edit -> Polish",
            "Direct -> Review -> Generate -> Edit -> Polish",
          ],
          correctAnswer: 1,
        },
        context: "Direction comes first, then AI creates the draft for your review.",
      },
    },

    // ==========================================================================
    // COMPARISON TABLE: Human-only vs AI-only vs Human+AI
    // ==========================================================================
    {
      id: "comparison-approaches",
      type: "comparisonTable",
      content: {
        title: "Three Approaches to Content Creation",
        intro:
          "Understanding the trade-offs helps you choose the right approach for each situation.",
        columns: [
          { name: "Human-Only", description: "Traditional approach" },
          { name: "AI-Only", description: "Fully automated" },
          { name: "Human+AI", description: "Collaborative", recommended: true },
        ],
        rows: [
          { feature: "Time to First Draft", values: ["2-4 hours", "30 seconds", "5 minutes"] },
          { feature: "Quality of First Draft", values: ["High (if skilled)", "Average", "Good"] },
          { feature: "Personal Voice", values: [true, false, true] },
          { feature: "Context Awareness", values: [true, false, "partial"] },
          { feature: "Strategic Judgment", values: [true, false, true] },
          { feature: "Consistency at Scale", values: ["Hard", true, true] },
          { feature: "Authenticity", values: [true, false, true] },
          { feature: "Time Savings", values: ["0%", "90%", "50-70%"] },
          { feature: "Best For", values: ["Personal essays", "Routine updates", "Most content"] },
        ],
        footer:
          "The Human+AI approach combines the best of both: AI speed with human judgment and authenticity.",
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: The Editing Checklist
    // ==========================================================================
    {
      id: "highlight-checklist",
      type: "highlightCard",
      content: {
        heading: "The Essential Editing Checklist",
        insights: [
          "Accuracy: Are all facts, numbers, and names correct?",
          "Context: Add specific details AI couldn't know",
          "Voice: Does this sound like you? Would you say it this way?",
          "Relevance: Cut generic fluff. Keep only what matters for your audience",
          "Impact: Does it achieve your goal? Is the CTA clear?",
        ],
      },
    },

    // ==========================================================================
    // CHECKPOINT
    // ==========================================================================
    {
      id: "c1-checkpoint",
      type: "checkpoint",
      content: {
        question: "Which of these is YOUR unique contribution that AI cannot provide?",
        options: [
          "Grammar and spelling corrections",
          "Proper document structure and formatting",
          "Strategic business judgment about what matters most",
          "Multiple formatting options for documents",
        ],
        correctAnswer: 2,
        hint: "Think about what requires deep business understanding and context.",
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Common AI Patterns to Fix
    // ==========================================================================
    {
      id: "highlight-patterns",
      type: "highlightCard",
      content: {
        heading: "Common AI Patterns to Fix",
        insights: [
          'Overly Formal: "I am writing to inform you" -> "Quick update:" or "I wanted to share:"',
          'Generic Openers: "I hope this email finds you well" -> Delete or replace with personal note',
          'Passive Voice: "Mistakes were made" -> "We made mistakes" (own it)',
          'Corporate Speak: "Leverage synergies" -> "Use our combined strengths"',
          'Weak Transitions: "Furthermore, additionally" -> Just start the next point',
          'Redundant Phrases: "In order to" -> "to", "at this point in time" -> "now"',
        ],
      },
    },

    // ==========================================================================
    // SECTION 3: Iterative refinement
    // ==========================================================================
    {
      id: "s9-iteration",
      type: "text",
      content: {
        title: "Iterative Refinement Process",
        paragraphs: [
          "The best content comes from multiple rounds of refinement. This iterative approach transforms AI's generic output into content that resonates authentically with your audience.",
          "The first pass has AI generate an initial draft from your prompt. This provides the foundation—structure, key points, and a complete narrative arc. Think of it as the rough sketch that you'll develop into a masterpiece.",
          'Your review follows, where you mark sections that need work with specific feedback. Be precise: "This section is too formal" helps AI improve more than "Fix this." Note where context is missing, examples feel generic, or tone drifts from your voice.',
          'Ask AI to refine with targeted requests: "Rewrite section 3 to be more conversational. Add a story about how this played out with a real client." These specific instructions guide AI toward output that matches your vision.',
          "Add your human touch by injecting real examples, inside knowledge, and your personal voice. This is where you contribute what AI cannot: your experience, your relationships, your unique perspective on the topic.",
          "Final polish means reading aloud. Does it sound like you? If any phrase feels unnatural in your mouth, rewrite it. The read-aloud test catches stilted language that silent reading misses.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Voice Preservation
    // ==========================================================================
    {
      id: "highlight-voice",
      type: "highlightCard",
      content: {
        heading: "Preserving Your Voice",
        insights: [
          "Read Aloud: If you wouldn't say it out loud, rewrite it",
          "Use Your Phrases: Add expressions, slang, and patterns you actually use",
          "Share Real Stories: AI anecdotes are generic. Yours are unique.",
          "Take a Position: AI plays it safe. You can have real opinions.",
          "Break Rules Intentionally: If you write in fragments, do that. AI is too proper by default.",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 2
    // ==========================================================================
    {
      id: "q2-voice",
      type: "quiz",
      content: {
        quiz: {
          question: "What is the best way to ensure AI content sounds like you?",
          options: [
            "Accept the AI draft as-is without changes",
            "Read aloud and rewrite anything you wouldn't say",
            "Use formal language throughout",
            "Let AI choose the tone and style",
          ],
          correctAnswer: 1,
        },
        context: "Your voice comes from editing AI content to match how you actually speak.",
      },
    },

    // ==========================================================================
    // QUICK PROMPT: Training AI on Your Voice
    // ==========================================================================
    {
      id: "s14-coaching",
      type: "quickPrompt",
      content: {
        heading: "Training AI on Your Voice",
        description: "Use this process to get AI to write more like you:",
        promptText:
          'STEP 1 - SHARE EXAMPLES: "Here are 3 things I\'ve written. Match this style."\n\nSTEP 2 - DESCRIBE YOUR STYLE: "I\'m conversational, use short sentences, occasionally break grammar for effect, avoid corporate speak."\n\nSTEP 3 - GIVE FEEDBACK: "Too formal. Make it sound like a text from a smart friend."\n\nSTEP 4 - SPECIFY PATTERNS: "Use fragments for emphasis. Start sentences with \'And\' or \'But.\'"',
        placeholders: ["Your writing examples", "Style description", "Feedback"],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Quality Control Checklist
    // ==========================================================================
    {
      id: "highlight-qa",
      type: "highlightCard",
      content: {
        heading: "Quality Control Checklist",
        insights: [
          "Fact Check: Every number, name, date, and claim must be accurate",
          "Tone Check: Does this match how you'd actually talk to this person?",
          "Goal Check: Will this achieve what you set out to do?",
          "Length Check: Is it too long? Would you read all of this?",
          "Clarity Check: Could someone misunderstand anything?",
          "Humanity Check: Would a real human write this?",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Levels of Human Involvement
    // ==========================================================================
    {
      id: "highlight-levels",
      type: "highlightCard",
      content: {
        heading: "Levels of Human Involvement",
        insights: [
          "Minimal Edit: Accept AI draft mostly as-is, fix a few words, quick polish. Result: Generic, average content. Time saved: 80%.",
          "Full Collaboration: Use AI as starting point, add context stories examples, inject your voice and opinions, iterate 2-3 times. Result: Unique, compelling content. Time saved: 50%.",
          "Rule of Thumb: For anything external, strategic, or representing your brand - add your human touch. Internal docs can be lighter edits.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 4: Collaboration results
    // ==========================================================================
    {
      id: "s16-results",
      type: "text",
      content: {
        title: "The Collaboration Impact",
        paragraphs: [
          "The collaboration approach delivers measurable results.",
          "Time saved is 50% compared to writing from scratch. Quality maintained at 95% of human-written quality. Content output increases 200% while maintaining authenticity.",
          "The best writing combines AI's speed with your humanity.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 5: Closing
    // ==========================================================================
    {
      id: "s18-closing",
      type: "text",
      content: {
        title: "Your AI Writing Partner",
        paragraphs: [
          "AI drafts quickly. You add the magic. Together, you create authentic content in half the time.",
          "The collaboration gets better every time. Your voice stays front and center. AI handles the heavy lifting.",
          "The blank page is no longer something to fear. It's just the starting point for your next collaboration with AI.",
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
        tool: "claude",
        action: "Polish and refine AI-generated drafts",
        task: "Iterate on drafts with specific feedback to match your voice",
        feature: "Natural conversation for iterative refinement and voice matching",
        tip: "Share examples of your writing style with Claude and ask it to match your voice in revisions",
      },
    },

    // ==========================================================================
    // ACTIONABLE TASK
    // ==========================================================================
    {
      id: "main-challenge",
      type: "actionableTask",
      content: {
        title: "Practice Human-AI Collaboration",
        purpose: "Experience the full collaboration workflow and discover what only you can add.",
        instructions: [
          "Pick something you need to write: an email, a report section, a social post, or a proposal",
          "Give AI your initial prompt with clear context",
          "Review the draft with a critical eye using the editing checklist",
          "Mark what works and what needs change",
          "Provide specific feedback for AI to refine",
          "Add your human touch: stories, voice, context that AI couldn't know",
        ],
        deliverable: "Both the AI draft and your final version, with notes on what you added",
        estimatedTime: "15-20 minutes",
        successCriteria: [
          "You identified at least 3 things the AI draft got right",
          "You identified at least 3 things that needed your human input",
          "Your final version includes something AI couldn't know (personal story, inside context, your opinion)",
          "The final version sounds like you when read aloud",
          "You can articulate where AI accelerated your work vs where your expertise was essential",
        ],
      },
    },
  ] as LessonSection[],
};
