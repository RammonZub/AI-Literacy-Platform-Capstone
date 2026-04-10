/**
 * Lesson 1.9: The Main Tools At A Glance
 *
 * PURPOSE: Give learners a calmer map of the main AI tools by use case
 *
 * FORMAT: Article with sections, quizzes, and checkpoint
 *
 * KEY CONCEPTS:
 * - General tools handle most beginner needs
 * - Specialized tools make sense when the job clearly calls for them
 * - Tool choice should start with the task, not the hype
 *
 * Duration: 20 minutes
 * XP: Base 50 x 1.0 (10-20min) x 1.0 (Beginner) + 20 bonus = 70 XP
 */

import type { Lesson } from "@/types/content";

export const lesson_1_9: Lesson = {
  id: "foundations-9",
  chapterId: "ch3-the-toolkit",
  moduleId: "01-skills-foundations",
  title: "The Main Tools At A Glance",
  description: "A practical map of the core tools and what each one is best for.",
  order: 10,
  estimatedMinutes: 20,
  format: "article",
  lessonCategory: "tutorial",
  coverImage: "/images/courses/lessons/modules/brain-memory-and-thinking-neural-network.webp",
  coverTitle: "The Main Tools At A Glance",
  xpReward: 70,
  sections: [
    // === HERO SECTION ===
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/01-skills-foundations/foundations-9-cover.webp",
        imageAlt: "AI tools ecosystem visualization",
        title: "The Main Tools At A Glance",
        subtitle: "A calm overview of the main tools so you can start with the right one.",
      },
    },

    // === MORE THAN CHATBOTS ===
    {
      id: "section-2",
      type: "text",
      content: {
        title: "You Do Not Need Everything",
        paragraphs: [
          "ChatGPT, Claude, and Gemini are the broad tools most beginners start with.",
          "",
          "Beyond those, there are specialized tools for research, images, audio, slides, and everyday work.",
          "",
          "You do not need all of them. You just need to know what kind of job each one is good for.",
        ],
      },
    },

    // === AI-POWERED RESEARCH ===
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Research And Reading",
        paragraphs: [
          "**Gemini (grounded):** Good when you want Workspace-friendly answers with links you can verify (per policy).",
          "",
          "**Consensus:** Useful when you want help scanning research papers.",
          "",
          "**Elicit:** Helpful for finding patterns across academic sources.",
          "",
          "**Use case:** When you need sources and a cleaner summary, not just a chat reply.",
        ],
      },
    },

    // === QUIZ 1 ===
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "Different tools are better for different kinds of work.",
        quiz: {
          question:
            "You need to find cited sources for a research paper. Which tool would you choose?",
          options: ["Midjourney", "Gemini", "ElevenLabs", "Gamma"],
          correctAnswer: 1,
        },
      },
    },

    // === TOOL COMPARISON TABLE ===
    {
      id: "comparison",
      type: "comparisonTable",
      content: {
        title: "Quick Tool Map",
        intro: "Think of this as a quick map, not a shopping list.",
        columns: [
          { name: "ChatGPT", description: "General-purpose helper", recommended: true },
          { name: "Claude", description: "Long documents and careful writing" },
          { name: "Gemini", description: "Useful if you live in Google tools" },
          { name: "Gemini", description: "Workspace + grounded research (when allowed)" },
        ],
        rows: [
          {
            feature: "Best for",
            values: [
              "Everyday tasks",
              "Long documents and nuanced work",
              "Google-connected workflows",
              "Questions that need sources",
            ],
          },
          { feature: "Good starting point", values: ["Yes", "Yes", "Yes", "Sometimes"] },
          { feature: "Strong for writing", values: ["Yes", "Yes", "Yes", "Okay"] },
          { feature: "Strong for research", values: ["Okay", "Yes", "Yes", "Yes"] },
          { feature: "Good for beginners", values: ["Yes", "Yes", "Yes", "Yes"] },
        ],
        footer: "You do not need to learn every tool at once. Start with one, then branch out when you have a reason.",
      },
    },

    // === BEYOND BASIC IMAGE CREATION ===
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Images And Design",
        paragraphs: [
          "**Midjourney:** Strong for polished, creative visuals.",
          "",
          "**DALL-E 3:** Easier to use and good for quick concepts or mockups.",
          "",
          "**Stable Diffusion:** More flexible if you want more control.",
          "",
          "**Adobe Firefly:** Fits well if you already use Adobe tools.",
        ],
      },
    },

    // === AI AUDIO & VOICE ===
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Audio, Notes, And Talking It Through",
        paragraphs: [
          "**ElevenLabs:** Good for realistic text-to-speech.",
          "",
          "**Descript:** Useful when you want to edit audio through the transcript.",
          "",
          "**Otter.ai:** Useful for meeting notes and transcription.",
          "",
          "**NotebookLM:** Helps turn documents into something easier to listen to and review.",
        ],
      },
    },

    // === CHECKPOINT 1 ===
    {
      id: "checkpoint-1",
      type: "checkpoint",
      content: {
        question: "You need to generate presentation slides from text. Which tool would be BEST?",
        options: ["Gemini", "Gamma", "Midjourney", "Cursor"],
        correctAnswer: 1,
        hint: "Think about which tool specializes in presentations.",
      },
    },

    // === AI WRITING ASSISTANTS ===
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Writing And Editing",
        paragraphs: [
          "**Jasper:** Good for marketing writing.",
          "",
          "**Copy.ai:** Similar, with a focus on short-form copy.",
          "",
          "**Grammarly:** Helpful for clarity, tone, and cleanup.",
          "",
          "**Wordtune:** Helpful when you want to rewrite the same idea in a different tone.",
        ],
      },
    },

    // === VISUAL & PRESENTATION AI ===
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Slides And Visuals",
        paragraphs: [
          "**Gamma:** Helpful when you want to turn text into a slide deck quickly.",
          "",
          "**Beautiful.ai:** Helpful for cleaner slide layouts.",
          "",
          "**Canva:** Good for design help, images, and quick visuals.",
          "",
          "**Microsoft Copilot:** Useful if you already work in PowerPoint.",
        ],
      },
    },

    // === AI FOR PRODUCTIVITY ===
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Workflows And Automation",
        paragraphs: [
          "**Zapier:** Useful when you want apps to work together automatically.",
          "",
          "**Notion AI:** Helpful for summaries, drafts, and notes.",
          "",
          "**Otter.ai:** Also useful here for meeting notes.",
          "",
          "**Calendar AI:** Helpful for scheduling and time management.",
        ],
      },
    },

    // === QUIZ 2 ===
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        context: "With so many tools, how do you pick?",
        quiz: {
          question: "What's the BEST approach when choosing an AI tool for a specific task?",
          options: [
            "Always use the newest tool that launched",
            "Start with your use case, then find tools that match",
            "Use the tool with the most features",
            "Ask ChatGPT what to use",
          ],
          correctAnswer: 1,
        },
      },
    },

    // === HOW TO CHOOSE ===
    {
      id: "section-9",
      type: "text",
      content: {
        title: "How To Choose The Right Tool",
        paragraphs: [
          '**1. Start with your use case** - "I need to create a presentation" means you should look for presentation tools first.',
          "",
          "**2. Consider your budget** - Most tools have a free tier. Pay only when you hit a real limit.",
          "",
          "**3. Check integration** - Does it fit the tools you already use?",
          "",
          "**4. Test before committing** - Try it on one real task before you decide it is worth keeping.",
          "",
          "**5. Remember:** General tools often handle most of what you need. Specialized tools are for specific jobs.",
        ],
      },
    },

    // === TOOL REFERENCE - GEMINI ===
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "gemini",
        action: "Try it now",
        task: "Open Gemini and run one grounded question your policy allows; click a source link",
        feature: "Workspace-friendly research (when grounding is on)",
        tip: "If grounding is unavailable, fall back to manual search plus synthesis in Claude or ChatGPT",
      },
    },

    // === KEY INSIGHTS ===
    {
      id: "key-insight",
      type: "highlightCard",
      content: {
        heading: "What Matters Most",
        insights: [
          "General tools cover most everyday needs",
          "Specialized tools are worth learning when the task really calls for them",
          "Research, images, audio, slides, and productivity each have their own tool patterns",
          "Start with the job you need to do, then choose the tool that fits",
        ],
      },
    },

    // === ACTIONABLE TASK ===
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Challenge: Build A Starter Shortlist",
        purpose: "Choose a few tools that actually fit your work so you are not trying to keep track of everything at once.",
        instructions: [
          "Pick 3 tasks you actually do",
          "Match each task to one tool from this lesson",
          "Write down why that tool fits",
          "Choose one tool to try this week",
        ],
        deliverable: "Your 3 tasks, the tools you matched to them, and the one tool you want to try next",
        estimatedTime: "5-10 minutes",
        successCriteria: [
          "You matched tools to real tasks",
          "You can explain your choices in plain English",
          "You picked one tool to explore further",
          "You feel less overwhelmed by the tool landscape",
        ],
      },
    },
  ],
};
