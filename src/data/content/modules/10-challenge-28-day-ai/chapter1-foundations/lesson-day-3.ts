/**
 * Day 3: ChatGPT Advanced Features
 *
 * TOOL MASTERY LESSON - ChatGPT advanced features
 * NO gamification
 *
 * Uses new section types:
 * - scenarioCard: Real-world use case scenarios
 * - reflectionPrompt: Personal reflection questions
 * - comparisonTable: Free vs Plus tier comparison
 * - toolReference: Exercise tool guidance
 */

import type { Lesson } from "@/types/content";

export const lessonDay3: Lesson = {
  id: "day-3",
  chapterId: "chapter1-foundations",
  moduleId: "10-challenge-28-day-ai",
  title: "ChatGPT Advanced Features",
  description:
    "Go beyond basics: master conversation memory, custom instructions, and organize your chats like a pro.",
  order: 3,
  format: "article",
  lessonCategory: "tutorial",
  estimatedMinutes: 12,

  imageSearchTerms: [
    "ChatGPT settings interface",
    "AI conversation threads organized",
    "productivity workspace digital tools",
  ],

  sections: [
    // === HERO SECTION ===
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-3-cover.webp",
        imageAlt: "ChatGPT Advanced Features hero image",
        title: "Day 3: ChatGPT Advanced Features",
        subtitle:
          "Go beyond basics: master conversation memory, custom instructions, and organize your chats like a pro.",
      },
    },

    // === SECTION 1: OPENING ===
    {
      id: "opening",
      type: "text",
      content: {
        paragraphs: [
          "**Prerequisite:** Day 2: ChatGPT Fundamentals (account created)",
          "",
          "Yesterday you got comfortable with ChatGPT basics. Now we're going deeper—these are the features that separate casual users from people who get consistently great results. You'll learn conversation memory, custom instructions, and chat organization.",
          "These features are built into ChatGPT but most people never touch them. By the end of this lesson, you'll be getting better results than 90% of users.",
        ],
      },
    },

    // === SECTION 2: TEXT WITH IMAGE ===
    {
      id: "opening-image",
      type: "textWithImage",
      content: {
        title: "ChatGPT Advanced Interface",
        paragraphs: [
          "ChatGPT's advanced features live in simple settings and smart conversation management.",
        ],
        image: {
          src: "/images/courses/modules/10-challenge-28-day-ai/day-3-inline-1.webp",
          alt: "ChatGPT settings and conversation management features",
          caption: "Unlock ChatGPT's power user features",
        },
      },
    },

    // === SECTION 3: TOOL REFERENCE ===
    {
      id: "tool-access",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "For this lesson",
        task: "Keep ChatGPT open in a tab so you can try each feature as we cover it.",
        tip: "Having ChatGPT open while learning helps concepts stick",
      },
    },

    // === SECTION 4: CHATGPT TIERS COMPARISON ===
    {
      id: "tiers-comparison",
      type: "comparisonTable",
      content: {
        title: "ChatGPT Free vs Plus: What You Get",
        intro: "Before diving into features, understand what's available at each tier.",
        columns: [
          { name: "Free", description: "GPT-3.5" },
          { name: "Plus ($20/mo)", description: "GPT-4", recommended: true },
        ],
        rows: [
          { feature: "Model intelligence", values: ["Good", "Excellent"] },
          { feature: "Conversation memory", values: [true, true] },
          { feature: "Custom instructions", values: [true, true] },
          { feature: "File uploads", values: ["partial", true] },
          { feature: "Image generation", values: [false, true] },
          { feature: "Web browsing", values: ["partial", true] },
          { feature: "Response speed", values: ["Fast", "Priority"] },
        ],
        footer:
          "The free tier is enough for this entire course. Upgrade only if you need GPT-4's extra intelligence for complex tasks.",
      },
    },

    // === SECTION 5: CONVERSATION MEMORY ===
    {
      id: "conversation-memory",
      type: "text",
      content: {
        title: "Feature 1: Conversation Memory",
        paragraphs: [
          "ChatGPT remembers everything in your conversation. This is powerful when used right.",
          "",
          "**How it works:** Within a single chat, ChatGPT remembers everything you've said. You can refer back to earlier messages without repeating yourself.",
        ],
      },
    },

    // === SECTION 6: SCENARIO CARD ===
    {
      id: "scenario-memory",
      type: "scenarioCard",
      content: {
        title: "Real-World Scenario",
        situation:
          "You're a content marketer working on a month-long campaign. Over several days, you've been refining blog posts, social media captions, and email sequences with ChatGPT in the same conversation.",
        challenge:
          "You need to ensure all content maintains a consistent brand voice and references the same key messaging across 15+ pieces of content.",
        context:
          "Without conversation memory, you'd have to paste your brand guidelines into every new chat.",
        outcome:
          "By keeping everything in one chat, ChatGPT remembers your brand voice from day 1 and maintains consistency across all 15 pieces—no repeating yourself.",
      },
    },

    // === SECTION 7: EXERCISE WITH TOOL REFERENCE ===
    {
      id: "exercise-memory",
      type: "text",
      content: {
        title: "Try It: Use Conversation Memory",
        paragraphs: ["Let's see conversation memory in action:"],
      },
    },
    {
      id: "tool-exercise-memory",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Follow these steps",
        task: '1. Click "New Chat"\n2. Type: "I\'m planning a weekend trip to Paris. Give me a 3-day itinerary."\n3. After it responds, type: "Can you add a museum visit to day 2?"\n4. Then type: "What should I pack for this itinerary in April?"',
        feature: "New Chat button (top-left)",
        tip: "Notice how the packing list references your specific itinerary!",
      },
    },

    // === SECTION 8: CUSTOM INSTRUCTIONS ===
    {
      id: "custom-instructions",
      type: "text",
      content: {
        title: "Feature 2: Custom Instructions",
        paragraphs: [
          "Custom Instructions tell ChatGPT how to respond to you—every single time. Set it once, and all your chats use these preferences automatically.",
          "",
          "**How to set it up:**",
          "1. In ChatGPT, click your profile picture (bottom-left)",
          '2. Click "Customize ChatGPT"',
          "3. Fill in both text boxes (template below)",
        ],
      },
    },
    {
      id: "quick-prompt-1",
      type: "quickPrompt",
      content: {
        heading: "Set Up Your Custom Instructions",
        description: "Go to ChatGPT now and fill in both boxes. Use this template:",
        promptText:
          "ABOUT ME:\nI am a [your role] at [company type]. My background is in [field/experience]. I use AI primarily for [main use cases].\n\nHOW I WANT RESPONSES:\n- Tone: [professional/casual/technical]\n- Format: [bullets/paragraphs/short sections]\n- Length: [concise/detailed - be specific]\n- Other: [any other preferences]",
        placeholders: [
          "your role",
          "company type",
          "field/experience",
          "main use cases",
          "professional/casual/technical",
          "bullets/paragraphs",
          "concise/detailed",
        ],
      },
    },

    // === SECTION 9: REFLECTION PROMPT ===
    {
      id: "reflection",
      type: "reflectionPrompt",
      content: {
        title: "Reflect on Your AI Use",
        intro: "Taking a moment to connect these concepts to your work makes them stick.",
        reflections: [
          {
            question:
              "What tasks do you do repeatedly that would benefit from Custom Instructions?",
            placeholder: "Think about emails, reports, brainstorming sessions...",
            context:
              "Common examples: writing in a specific tone, formatting preferences, domain expertise",
          },
          {
            question: "What's your biggest frustration when using AI right now?",
            placeholder: "Vague answers? Too long responses? Wrong tone?",
          },
        ],
        allowWriting: true,
        encouragement: "Your reflections will help you set better Custom Instructions.",
      },
    },

    // === SECTION 10: QUIZ (Tests Conversation Memory from Section 5-7) ===
    {
      id: "check-memory",
      type: "quiz",
      content: {
        context: "Let's test your understanding of conversation memory.",
        quiz: {
          question:
            "You've been using ChatGPT to plan a vacation. Now you need help writing a work presentation. What should you do?",
          options: [
            "When you want to refine the current response",
            "Start a new chat so the work context is separate from vacation planning",
            "When you want to ask follow-up questions",
            "Never, always use the same chat",
          ],
          correctAnswer: 1,
        },
      },
    },

    // === SECTION 11: CHAT ORGANIZATION ===
    {
      id: "chat-organization",
      type: "textWithBullets",
      content: {
        title: "Feature 3: Organize Your Chats",
        paragraphs: [
          "After a few weeks, your sidebar will fill with dozens of chats. Here's how to stay on top of it:",
        ],
        bullets: [
          "**Rename chats:** Hover over any chat, click the pencil icon, give it a descriptive name",
          '**Use folders:** Click the folder icon to create folders like "Work", "Personal", "Learning"',
          "**Delete old chats:** Hover and click the trash icon for chats you no longer need",
          "**Pin important chats:** Hover and click the pin icon to keep frequent chats at the top",
        ],
      },
    },

    // === SECTION 12: QUIZ (Tests Custom Instructions from Section 8-9) ===
    {
      id: "check-final",
      type: "quiz",
      content: {
        context:
          "You're a marketing manager who always needs concise, bulleted responses. ChatGPT keeps giving you long paragraphs. What's the most efficient solution?",
        quiz: {
          question:
            "You're a marketing manager who always needs concise, bulleted responses. ChatGPT keeps giving you long paragraphs. What's the most efficient solution?",
          options: [
            "Type this request at the start of every chat",
            "Set your preferred format in Custom Instructions once so all chats use it",
            "Upgrade to ChatGPT Plus",
            "It's not possible to set default preferences",
          ],
          correctAnswer: 1,
        },
      },
    },

    // === MAIN CHALLENGE: HANDS-ON TOOL PRACTICE ===
    {
      id: "main-challenge",
      type: "actionableTask",
      content: {
        title: "Your Turn: Set Up Your ChatGPT Power User Environment",
        purpose:
          "Configure ChatGPT to work optimally for YOUR specific needs. This one-time setup will save you hours and make every future ChatGPT interaction better.",
        instructions: [
          "1. Open ChatGPT and access your Custom Instructions (profile picture → Customize ChatGPT)",
          "2. Fill in both fields with honest, specific details about your work and preferences:",
          "   - What do you do? What's your background?",
          "   - How do you prefer responses? (tone, format, length)",
          "   - What are your common use cases?",
          "3. Test your Custom Instructions by starting a new chat",
          '4. Ask: "Give me a summary of who I am and how I prefer to work" (you should see your custom settings reflected)',
          "5. Create at least 2 organized folders for your chat history (e.g., Work, Personal, Learning)",
        ],
        deliverable:
          "A screenshot or description of your Custom Instructions setup showing both fields filled with your personalized settings",
        estimatedTime: "8-10 minutes",
        starterPrompt:
          "About me: I'm a [your role] working in [industry/field]. I mainly use AI for [primary tasks]. I prefer [tone] responses that are [format preference] and approximately [length preference].",
        successCriteria: [
          "Both Custom Instructions fields are filled with specific, personalized information",
          "You tested the setup with a new chat and saw it working",
          "You created at least 2 folders to organize your chat history",
          "You can explain how this setup will save you time in future ChatGPT use",
        ],
      },
    },
  ],
};

export default lessonDay3;
