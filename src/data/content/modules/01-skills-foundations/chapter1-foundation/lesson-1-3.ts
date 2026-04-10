/**
 * Lesson 1.3: The AI Tool Landscape
 *
 * PURPOSE: Map the AI ecosystem so learners can navigate without overwhelm
 *
 * FORMAT: Article with sections, quizzes, and checkpoint
 *
 * KEY CONCEPTS:
 * - Major players: OpenAI, Anthropic, Google, Meta, specialized startups
 * - Tool categories: Conversational, Image, Video, Audio, Code, Specialized
 * - Transferable skills across all tools
 * - Start simple, expand as needed
 * - Free tiers handle 90% of tasks
 *
 * Duration: 20 minutes
 * XP: 70 (Base 50 × 1.0 (10-20min) × 1.0 (Beginner) + 20 bonus = 70 XP)
 */

import type { Lesson, LessonSection } from "@/types/content";

export const lesson_1_3: Lesson = {
  id: "l1-3-ai-landscape",
  chapterId: "ch1-why-this-matters",
  moduleId: "01-skills-foundations",
  lessonCategory: "theory",
  title: "The AI Tool Landscape",
  description: "Get a calmer map of the major tools so you can choose without guessing.",
  order: 3,
  estimatedMinutes: 20,
  format: "article",
  coverImage: "/images/courses/lessons/modules/brain-memory-and-thinking-neural-network.webp",
  coverTitle: "The AI Tool Landscape",
  xpReward: 70,
  sections: [
    // ==========================================================================
    // HERO SECTION
    // ==========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/01-skills-foundations/l1-3-ai-landscape-cover.webp",
        imageAlt: "The AI Landscape",
        title: "The AI Tool Landscape",
        subtitle:
          "A calmer map of the tools people talk about most, so you can navigate them with confidence.",
      },
    },

    // ==========================================================================
    // SECTION 1: Information Overload
    // ==========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Noise Problem",
        paragraphs: [
          "New AI tools appear all the time, and that can make the landscape feel louder than it really is.",
          "",
          "You do not need to know every tool to get started.",
          "",
          "What you need is a simple way to tell which tools are for talking, which are for research, and which are for more specific tasks.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: The Big Five
    // ==========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "The Big Five",
        paragraphs: [
          "A few major players come up again and again. Knowing the main names helps you feel oriented without needing a full catalog.",
          "",
          "OpenAI is the company behind ChatGPT. For many beginners, that is the easiest place to start because it is familiar and broad.",
          "",
          "Anthropic makes Claude, which is strong for careful writing, analysis, and long documents.",
          "",
          "Google brings Gemini and NotebookLM, which fit nicely if you already use Google tools.",
          "",
          "Meta and other companies help power parts of the broader ecosystem, even if you do not use them directly.",
          "",
          "Then there are specialized tools that do one thing especially well, like research, images, or video.",
        ],
      },
    },

    // ==========================================================================
    // IMAGE BREAK
    // ==========================================================================
    {
      id: "comparison-image",
      type: "textWithImage",
      content: {
        title: "ChatGPT vs Claude: What's the Difference?",
        paragraphs: [
          "They're 80% similar. The skills you learn—prompting, verification, context—work on both. Don't overthink the choice.",
        ],
        image: {
          src: "/images/courses/lessons/modules/neural-network-ai-technology-visualization.webp",
          alt: "AI tool comparison visualization",
          caption: "Choose one to start—your skills will transfer",
        },
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Quick Comparison",
        paragraphs: [
          "ChatGPT is a strong starting point when you want a broad, flexible assistant.",
          "",
          "Claude is often a good fit when you are working with long writing, careful analysis, or documents that need more nuance.",
          "",
          "The main point is not to pick the perfect tool forever. It is to start with one, learn the basics, and branch out when you have a reason.",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 1: TOOL CATEGORIES
    // ==========================================================================
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context:
          "Every AI tool fits into one of these categories. Knowing the category makes the tool easier to understand.",
        quiz: {
          question:
            "Which AI tool category would you use to create a professional headshot for LinkedIn?",
          options: ["Conversational AI", "Image Generation", "Video Generation", "Audio & Voice"],
          correctAnswer: 1,
        },
      },
    },

    // ==========================================================================
    // SECTION 3: Six Tool Categories
    // ==========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Six Tool Categories",
        paragraphs: [
          "A simple category system is enough for now. You do not need every product on the market.",
        ],
      },
    },
    {
      id: "section-5",
      type: "text",
      content: {
        title: "The Six Categories",
        paragraphs: [
          "Think of the landscape in a few broad buckets:",
          "",
          "Conversational tools are for thinking, writing, and general help. This is where most beginners should start.",
          "",
          "Image tools turn text into visuals. They help when you need a quick concept, graphic, or visual idea.",
          "",
          "Video tools are for moving images and are still evolving quickly.",
          "",
          "Audio and voice tools help with speaking, listening, and turn-to-audio workflows.",
          "",
          "Code tools are for people who write software or simple scripts.",
          "",
          "Specialized tools solve a specific problem well, like research, presentations, or editing.",
        ],
      },
    },

    // ==========================================================================
    // KEY INSIGHTS CARD
    // ==========================================================================
    {
      id: "key-insight-1",
      type: "highlightCard",
      content: {
        heading: "The 80/20 Rule for AI Tools",
        insights: [
          "One conversational tool will handle most everyday work",
          "Start simple before adding more tools",
          "Specialized tools are useful when you have a specific need",
          "The way you ask matters across all of them",
        ],
      },
    },

    // ==========================================================================
    // CHECKPOINT 1: TOOL SELECTION
    // ==========================================================================
    {
      id: "checkpoint-1",
      type: "checkpoint",
      content: {
        question:
          "You need to write a difficult email to a client. Which type of AI tool should you use?",
        options: [
          "Image Generation tool",
          "Conversational AI tool",
          "Code Assistant",
          "Video Generation tool",
        ],
        correctAnswer: 1,
        hint: "Think about which category handles writing and communication tasks.",
      },
    },

    // ==========================================================================
    // SECTION 4: Free vs Paid
    // ==========================================================================
    {
      id: "section-6",
      type: "textWithImage",
      content: {
        title: "Start Free",
        paragraphs: [
          "90% of tasks work on free tiers.",
          "",
          "You can complete this entire course on free tiers.",
        ],
        image: {
          src: "/images/courses/lessons/modules/ai-technology-artificial-intelligence-concept.webp",
          alt: "Free AI capabilities",
          caption: "Start free—upgrade only when you hit real limitations",
        },
      },
    },
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Free vs Paid: What Actually Changes",
        paragraphs: [
          "Upgrade only when you consistently hit limitations. The signs you're ready include using AI 10 or more hours weekly, needing faster responses during peak hours, or wanting advanced features that free tiers don't include.",
          "",
          "Free tiers are remarkably capable. You get full access to the core model with all essential features. The usage limits are generous enough for learning and occasional professional use. No credit card is required to start. For most people starting their AI journey, free tiers handle everything they need.",
          "",
          "Paid tiers add convenience rather than fundamental capability. You get faster responses by skipping the queue during busy periods. You maintain access when free tiers might be temporarily restricted. Advanced features like image generation and web browsing become available. And you get higher usage limits if you're a power user. But here's the key point: the underlying AI intelligence is the same. A paid subscription makes the experience smoother—it doesn't make the AI smarter.",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 2: FREE VS PAID
    // ==========================================================================
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        context: "Free tiers are powerful, but paid tiers have their place.",
        quiz: {
          question: "When should you upgrade from a free AI tier to a paid subscription?",
          options: [
            "Immediately after creating your account",
            "When you consistently hit usage limits or need advanced features",
            "When a new tool launches",
            "Never—free tiers are always sufficient",
          ],
          correctAnswer: 1,
        },
      },
    },

    // ==========================================================================
    // SECTION 5: Getting Started
    // ==========================================================================
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Your Starter Toolkit",
        paragraphs: [
          "**Step 1:** Create a free ChatGPT account (chat.openai.com) OR Create a free Claude account (claude.ai)",
          "",
          "**Step 2:** Ask a real question you're curious about",
          "",
          "**Step 3:** Notice the response style",
          "",
          "**Step 4:** Start using it for real tasks",
          "",
          "That's it. One tool. Fifteen minutes. You've started.",
        ],
      },
    },
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Tools Connect and Complement",
        paragraphs: [
          "The real power of AI emerges when you combine tools strategically. Rather than treating each tool as a standalone solution, think about how they can work together in your workflow. ChatGPT paired with DALL-E lets you generate text and images in a single conversation—describe what you need, iterate on the text, then create matching visuals without leaving the chat. This integration speeds up content creation dramatically.",
          "",
          "Claude connects smoothly with Google Docs, allowing you to write directly into documents you're already working on. This eliminates the copy-paste step and keeps your work organized in familiar systems. Gemini (with org-approved grounding) paired with Notion or Docs can create a research workflow—capture grounded answers, then file the excerpts you verified. NotebookLM combined with Google Drive transforms how you interact with your existing documents, letting you upload materials you already have and ask questions about them in natural language.",
          "",
          "These combinations aren't complicated integrations requiring technical setup. They're simple workflows that multiply what each tool can do alone. As you get comfortable with individual tools, start experimenting with these pairings. You'll discover combinations that match your specific needs and working style.",
        ],
      },
    },
    {
      id: "section-10",
      type: "text",
      content: {
        title: "How to Stay Updated Without Overwhelm",
        paragraphs: [
          "The AI landscape changes weekly. Here's how to keep up:",
          "",
          "**1. Follow 2-3 trusted sources** (not 50). TechCrunch, The Verge, specialized newsletters.",
          "",
          "**2. Focus on skills, not tools.** Prompting, workflow design, critical thinking transfer everywhere.",
          "",
          "**3. Learn just-in-time.** Don't study every new tool. Learn when you have a specific need.",
          "",
          "**4. Trust that fundamentals stay stable.** Interfaces change, but core principles remain constant.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 6: Key Principles
    // ==========================================================================
    {
      id: "section-11",
      type: "textWithImage",
      content: {
        title: "You Have the Map",
        paragraphs: [
          "Start with one. Master it. Expand when needed.",
          "",
          "The landscape changes constantly. Your skills are the constant.",
        ],
        image: {
          src: "/images/courses/lessons/modules/brain-memory-and-thinking-neural-network.webp",
          alt: "AI landscape map",
          caption: "You now have the map—navigate with confidence",
        },
      },
    },

    // ==========================================================================
    // KEY INSIGHTS CARD 2
    // ==========================================================================
    {
      id: "key-insight-2",
      type: "highlightCard",
      content: {
        heading: "Three Core Principles",
        insights: [
          "Master one tool first — ChatGPT or Claude covers 80% of use cases",
          "Skills transfer everywhere — Prompting, workflow design, critical thinking work across ALL tools",
          "Add tools just-in-time — Don't build a massive toolkit. Expand when you have specific needs",
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
        tool: "general",
        action: "Build your toolkit",
        task: "Choose one primary tool to start with, then test one second tool with the same question",
        feature: "Free account signup",
        tip: "Start with one tool and keep the comparison simple.",
      },
    },

    // ==========================================================================
    // MAIN CHALLENGE (ACTIONABLE TASK)
    // ==========================================================================
    {
      id: "main-challenge",
      type: "actionableTask",
      content: {
        title: "Your Challenge: Build Your Toolkit",
        purpose:
          "Pick one starting tool and compare it with one other option so the landscape feels more manageable.",
        instructions: [
          "1. Create a free account in one conversational AI tool if you have not already.",
          '2. Try the same question in a second tool: "Explain [topic you\'re curious about] in simple terms with an example."',
          "3. Compare the tone, clarity, and speed.",
          "4. Choose one tool as your starting point for this course.",
        ],
        deliverable: "The two tools you tested, what you asked, and which one you want to start with",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "Explain [your topic here] in simple terms. Give me a concrete example I can relate to.",
        successCriteria: [
          "You tested at least two tools with the same prompt",
          "You noticed a difference in the responses",
          "You chose one starting tool",
          "You understand that the choice is not permanent",
        ],
      },
    },
  ] as LessonSection[],
};
