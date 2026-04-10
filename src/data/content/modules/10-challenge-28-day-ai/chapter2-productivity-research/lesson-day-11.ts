/**
 * Day 11: AI-Powered Note Taking
 *
 * TOOL MASTERY LESSON - Transform raw notes into structured knowledge
 *
 * Structure:
 * - Opening with practical problem
 * - Why traditional note-taking fails
 * - How AI transforms note-taking workflow
 * - Real prompts and exercises
 * - Uses new interactive sections: toolReference, scenarioCard, highlightCard
 * - NO gamification (no XP, no completion celebration)
 */

import type { Lesson } from "@/types/content";

export const lessonDay11: Lesson = {
  id: "day-11",
  chapterId: "chapter2-productivity-research",
  moduleId: "10-challenge-28-day-ai",
  title: "AI-Powered Note Taking",
  description:
    "Transform raw notes into structured knowledge. Use AI to summarize meetings, extract action items, and build a personal knowledge system.",
  order: 11,
  format: "article",
  lessonCategory: "tutorial",
  estimatedMinutes: 12,

  imageSearchTerms: [
    "digital note-taking organized",
    "meeting notes action items",
    "knowledge management system",
  ],

  sections: [
    // === HERO SECTION ===
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-11-cover.webp",
        imageAlt: "AI-powered note taking transformation",
        title: "Day 11: AI-Powered Note Taking",
        subtitle:
          "Transform raw notes into structured knowledge. Use AI to summarize meetings, extract action items, and build a personal knowledge system.",
      },
    },

    // === SECTION 1: OPENING - YOUR NOTES ARE GOLD ===
    {
      id: "opening",
      type: "text",
      content: {
        paragraphs: [
          "**Tool for this lesson:** Claude (or ChatGPT)",
          "",
          "Your notes are gold. But right now, that gold is buried.",
          "",
          "Think about it. You've taken hundreds of notes. Meeting notes, lecture notes, article highlights, random ideas scribbled in moments of inspiration. But when you need them? They're impossible to find. The insights are lost in walls of text. The action items buried in paragraphs.",
          "",
          "Today, you'll learn to use AI as your note-taking superpower. Not to take notes for you, but to transform the messy notes you already have into structured, searchable, actionable knowledge.",
        ],
      },
    },

    // === VISUAL BREAK ===
    {
      id: "context-image",
      type: "textWithImage",
      content: {
        title: "From Chaos to Clarity",
        paragraphs: [
          "AI can transform your messy notes into organized, actionable knowledge. The key is knowing how to prompt it effectively.",
        ],
        image: {
          src: "/images/courses/modules/10-challenge-28-day-ai/day-11-inline-1.webp",
          alt: "Organized note-taking and knowledge management",
          caption: "Your notes contain gold—AI helps you extract it",
        },
      },
    },

    // === SECTION 2: WHY TRADITIONAL NOTE-TAKING FAILS ===
    {
      id: "traditional-failure",
      type: "text",
      content: {
        title: "Why Traditional Note-Taking Fails",
        paragraphs: [
          "We've all been there. You take great notes during a meeting or while reading something important. You capture the key points, jot down action items, highlight the important stuff. But a week later? Those notes have become nearly useless.",
          "The most frustrating experience is knowing you wrote something down but being unable to find it. You remember the insight existed—you can even recall the general topic—but scrolling through pages of notes reveals nothing. That key insight is lost in the noise, buried under other content that seemed important at the time.",
          "The structure problem compounds this. Notes tend to be walls of text with no clear organization. Action items hide somewhere in paragraph three. Follow-up questions get lost in the shuffle. Without explicit structure, even well-written notes become hard to navigate when you need them.",
          "Perhaps most critically, the **context evaporates**. You read your own notes and think: why did I write this down? What was I trying to remember? The connections that seemed obvious in the moment become opaque days later. The insight that felt crystal clear now requires detective work to reconstruct.",
          "This isn't a note-taking problem—it's a note-transformation problem. Your raw notes contain gold. But without processing, that gold stays buried.",
        ],
      },
    },

    // === SECTION 3: HOW AI TRANSFORMS NOTE-TAKING ===
    {
      id: "ai-transformation",
      type: "text",
      content: {
        title: "How AI Transforms Your Notes",
        paragraphs: [
          "AI doesn't replace your note-taking—it amplifies it. Think of AI as a processing engine that takes your raw captures and transforms them into structured, actionable knowledge.",
          "**Summarization** is the most obvious transformation. Two pages of scattered notes become five crystallized key points. AI identifies what matters most and surfaces it, cutting through the noise you inevitably capture in the moment. This alone can save you 15 minutes of review time before every meeting.",
          "**Action extraction** ensures nothing falls through the cracks. AI scans your notes for commitments, deadlines, and follow-ups—surfacing them explicitly rather than leaving them buried. Never again miss a deliverable because it was hidden in paragraph four of your meeting notes.",
          "**Question identification** is surprisingly valuable. AI can surface the open questions and unresolved issues that your notes imply but don't explicitly state. These are often the most important things to follow up on, yet they're easy to miss when you're focused on what was said rather than what remains unclear.",
          "Perhaps most powerfully, AI can find **connections across different note sets**. Paste notes from two different meetings on related topics, and AI will identify common themes, contradictions, and gaps. This transforms isolated notes into connected knowledge—your past work starts compound interest.",
          "**Format transformation** is the final piece. Messy bullet points become clean structures. Raw paragraphs become organized sections. Notes optimized for capture become notes optimized for retrieval. The format serves the purpose, not the other way around.",
        ],
      },
    },

    // === SECTION 4: THE AI NOTE-TAKING WORKFLOW ===
    {
      id: "workflow",
      type: "text",
      content: {
        title: "The AI Note-Taking Workflow",
        paragraphs: [
          "Here's the workflow that changes everything:",
          "",
          "**Step 1:** Take notes as you normally would. Don't overthink it. Capture everything.",
          "",
          "**Step 2:** Paste your raw notes into an AI tool (Claude works great for this).",
          "",
          "**Step 3:** Ask the AI to transform them. We'll cover specific prompts next.",
          "",
          "**Step 4:** Review and refine the AI output. Add your own judgment.",
          "",
          "**Step 5:** Save the transformed version in your note system.",
          "",
          "The magic isn't in any single step—it's in making this a habit. Every important note gets the AI treatment.",
        ],
      },
    },

    // === SECTION 5: QUICK PROMPT - MEETING NOTES ===
    {
      id: "meeting-notes-prompt",
      type: "quickPrompt",
      content: {
        heading: "Try This: Meeting Notes Summarization",
        description:
          "This prompt transforms raw meeting notes into structured, actionable summaries. Copy and paste into Claude or ChatGPT:",
        promptText:
          'Here are my raw notes from [context - e.g., "team standup" or "client call"]. Please:\n\n1. Summarize the key points\n2. Extract action items with owners/deadlines\n3. Identify open questions or follow-ups\n4. Suggest how to organize for future reference\n\n[PASTE YOUR NOTES HERE]',
        placeholders: ['context - e.g., "team standup" or "client call"', "PASTE YOUR NOTES HERE"],
      },
    },

    // === SECTION 6: TOOL REFERENCE - CLAUDE ===
    {
      id: "tool-reference",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "For note transformation",
        task: "Paste your raw notes into Claude and use the prompts in this lesson.",
        tip: "Claude excels at understanding context and extracting structure from chaos",
      },
    },

    // === SECTION 7: SCENARIO CARD - REAL EXAMPLE ===
    {
      id: "scenario",
      type: "scenarioCard",
      content: {
        title: "Real-World Scenario",
        situation:
          "You just finished a 45-minute product planning meeting. Your notes are 3 pages of scattered thoughts: feature ideas mixed with concerns, random numbers, names mentioned, and questions that came up. You need to send a summary to your team and create a follow-up plan.",
        challenge:
          "You have 10 minutes before your next meeting. Your notes are too messy to share as-is, and you don't have time to manually reorganize them.",
        outcome:
          "You paste your notes into Claude with the meeting notes prompt. In 30 seconds, you have: a clean 5-point summary, 3 action items with suggested owners, and 2 open questions flagged for follow-up. You tweak one item, copy the result to Slack, and make your next meeting with time to spare.",
      },
    },

    // === SECTION 8: QUIZ - NOTE TRANSFORMATION BENEFITS ===
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "Let's check your understanding of AI-powered note transformation.",
        quiz: {
          question: "What's the primary benefit of using AI for note transformation?",
          options: [
            "AI takes notes for you during meetings",
            "AI helps you stop taking notes entirely",
            "AI transforms messy notes into structured, searchable knowledge",
            "AI automatically files your notes in the right folders",
          ],
          correctAnswer: 2,
        },
      },
    },

    // === SECTION 9: EXTRACTING INSIGHTS AND CONNECTIONS ===
    {
      id: "insights-connections",
      type: "text",
      content: {
        title: "Extracting Insights and Connections",
        paragraphs: [
          "The real power of AI note-taking isn't just organizing one set of notes—it's finding connections across everything you've captured.",
          "",
          "Try this: Paste notes from two different meetings on the same topic. Ask the AI to find common themes, contradictions, or gaps. You'll be surprised what emerges.",
          "",
          'Or take your notes from a book or article and ask: "What are the 3 most actionable insights here?" The AI will surface what matters most, cutting through the noise.',
        ],
      },
    },

    // === SECTION 10: QUICK PROMPT - KNOWLEDGE EXTRACTION ===
    {
      id: "knowledge-extraction-prompt",
      type: "quickPrompt",
      content: {
        heading: "Try This: Knowledge Extraction",
        description:
          "This prompt helps you extract the most valuable insights from research notes or article highlights:",
        promptText:
          'Here are my notes/highlights from [source - e.g., "Atomic Habits book" or "competitor research"]. Please:\n\n1. Extract the 3-5 most actionable insights\n2. Identify any surprising or counterintuitive points\n3. Suggest how I might apply this to [your context]\n4. Flag any ideas that need more research\n\n[PASTE YOUR NOTES HERE]',
        placeholders: [
          'source - e.g., "Atomic Habits book"',
          "your context",
          "PASTE YOUR NOTES HERE",
        ],
      },
    },

    // === SECTION 11: STUDY MATERIALS AND FLASHCARDS ===
    {
      id: "study-materials",
      type: "text",
      content: {
        title: "Creating Study Materials and Flashcards",
        paragraphs: [
          "If you're learning something new, AI can transform your notes into study materials:",
          "",
          '**Flashcards:** Paste your notes and ask: "Create 10 flashcards from these notes in a question/answer format." You\'ll get ready-to-use review material.',
          "",
          '**Practice questions:** Ask: "What are 5 quiz questions that test understanding of these concepts?" Great for self-testing.',
          "",
          '**Summary sheets:** Request: "Create a one-page summary sheet with key definitions and concepts." Perfect for last-minute review.',
          "",
          "The key insight: Your notes contain everything you need to learn. AI just helps you extract it in different formats.",
        ],
      },
    },

    // === SECTION 12: HIGHLIGHT CARD - BEST PRACTICES ===
    {
      id: "best-practices",
      type: "highlightCard",
      content: {
        heading: "AI Note-Taking Best Practices",
        insights: [
          "Always review AI output before saving—add your judgment and correct any errors",
          "Keep your original raw notes somewhere; sometimes the messiness has value",
          "The more context you give the AI (who, what, why), the better the transformation",
          "Make this a habit: treat AI transformation as part of your note-taking process, not an extra step",
        ],
      },
    },

    // === SECTION 13: MAIN CHALLENGE - TRANSFORM MESSY NOTES ===
    {
      id: "main-challenge",
      type: "actionableTask",
      content: {
        title: "Your Challenge: Transform Your Messy Notes",
        purpose:
          "Take real notes from your own life and transform them into structured, actionable knowledge using AI.",
        instructions: [
          "1. Find a set of messy notes from your own life (meeting notes, lecture notes, article highlights, or brainstorm scribbles)",
          "2. Open Claude (claude.ai) or ChatGPT (chat.openai.com)",
          "3. Paste your notes and use one of the prompts from this lesson",
          "4. Review the AI output and refine it—add your own edits and corrections",
          "5. Save both your original notes AND the transformed version",
        ],
        deliverable: "Your before (raw notes) and after (AI-transformed) versions",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "Here are my raw notes from [context]. Please:\n1. Summarize the key points\n2. Extract action items with owners/deadlines\n3. Identify open questions or follow-ups\n4. Suggest how to organize for future reference\n\n[PASTE YOUR NOTES]",
        successCriteria: [
          "You found and used real notes from your own life",
          "You used one of the prompts from this lesson",
          "You reviewed and refined the AI output",
          "You now have a structured version you can actually use",
        ],
      },
    },
  ],
};

export default lessonDay11;
