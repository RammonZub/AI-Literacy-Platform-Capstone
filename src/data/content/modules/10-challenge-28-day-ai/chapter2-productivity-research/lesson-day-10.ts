/**
 * Day 10: Gemini Multimodal AI
 *
 * TOOL MASTERY LESSON - Gemini by Google (Merged from Days 5 & 6)
 * NO gamification
 */

import type { Lesson } from "@/types/content";

export const lessonDay10: Lesson = {
  id: "day-10",
  chapterId: "chapter2-productivity-research",
  moduleId: "10-challenge-28-day-ai",
  title: "Gemini Multimodal AI",
  description:
    "Master Google's AI assistant with real-time search, image analysis, and Google Workspace integration.",
  order: 10,
  format: "article",
  lessonCategory: "tutorial",
  estimatedMinutes: 15,

  imageSearchTerms: [
    "Gemini Google AI interface",
    "multimodal AI image analysis",
    "Google Workspace integration",
  ],

  sections: [
    // === HERO SECTION ===
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-10-cover.webp",
        imageAlt: "Gemini Multimodal AI hero image",
        title: "Day 10: Gemini Multimodal AI",
        subtitle:
          "Master Google's AI assistant with real-time search, image analysis, and Google Workspace integration.",
      },
    },

    // === OPENING (COMBINED FROM BOTH LESSONS) ===
    {
      id: "opening",
      type: "text",
      content: {
        paragraphs: [
          "**Tool for this lesson:** Gemini by Google",
          "**Where to access:** gemini.google.com (free with Google account)",
          "",
          "Meet Gemini, Google's AI assistant. If you use Gmail, Google Docs, or any Google tools, Gemini could become your go-to AI.",
          "Gemini's superpower is its connection to Google's ecosystem and real-time web access. It searches the internet automatically, reads your Google Docs, and works seamlessly with tools you already use. Plus, its multimodal capabilities let you analyze images, charts, and documents with ease.",
        ],
      },
    },

    // === GEMINI CAPABILITIES OVERVIEW ===
    {
      id: "capabilities",
      type: "text",
      content: {
        title: "What Makes Gemini Different",
        paragraphs: [
          "Gemini stands apart from other AI assistants in several key ways, most of which stem from its deep integration with Google's ecosystem and its native multimodal capabilities.",
          "The most immediately useful difference is **real-time information access**. Gemini searches the web by default—there's no special mode to enable, no extra step to take. When you ask about current events, recent developments, or anything time-sensitive, Gemini automatically reaches out to the live web. This contrasts with AI tools that primarily rely on training data, which can be months or years out of date.",
          "**Google Workspace integration** is Gemini's superpower if you live in Gmail, Docs, or Drive. Instead of copying and pasting content into an AI chat, you can ask Gemini to search your emails, summarize documents, or find files directly. The AI works within the tools you already use, eliminating the friction of context-switching.",
          "Gemini is also genuinely **multimodal**—it handles images, documents, and code with equal fluency. Upload a photo of a whiteboard and ask for a summary. Share a chart and request analysis. Drop in a screenshot and extract the text. This visual intelligence opens up use cases that text-only AI tools simply can't address.",
          "The **free tier is generous**, including web search automatically rather than gating it behind a subscription. And for complex research projects, Gemini's **Deep Research mode** creates comprehensive reports with sources, planning and executing multi-step research that would take hours to do manually.",
        ],
      },
    },

    // === INTERFACE OVERVIEW ===
    {
      id: "interface-image",
      type: "textWithImage",
      content: {
        title: "Gemini Interface",
        paragraphs: [
          "Gemini's clean interface feels familiar if you use Google products. The key features are easy to find and use.",
        ],
        image: {
          src: "/images/courses/modules/10-challenge-28-day-ai/day-10-inline-1.webp",
          alt: "Gemini AI interface with Google integration",
          caption: "Gemini: Google's multimodal AI assistant",
        },
      },
    },

    // === TOOL REFERENCE ===
    {
      id: "tool-reference",
      type: "toolReference",
      content: {
        tool: "gemini",
        action: "For this lesson",
        task: "Open Gemini at gemini.google.com",
        feature: "Free tier available",
        tip: "Gemini excels at real-time information and image analysis",
      },
    },

    // === FEATURE 1: REAL-TIME WEB SEARCH ===
    {
      id: "feature-realtime",
      type: "text",
      content: {
        title: "Feature 1: Real-Time Web Search",
        paragraphs: [
          "Unlike other AI assistants, Gemini searches the web automatically. No special browsing mode needed.",
          "",
          "**How to use it:**",
          "1. Simply ask about current events, recent news, or live data",
          "2. Gemini searches the web and provides answers with sources",
          "3. Click source links to verify information",
          "",
          '**Example:** "What are the top AI news stories from this week?" will give you actual recent articles with links.',
        ],
      },
    },

    // === QUICK PROMPT: SEARCH TEMPLATE ===
    {
      id: "quick-prompt-search",
      type: "quickPrompt",
      content: {
        heading: "Gemini Search Template",
        description: "Use Gemini's web search capabilities for current information:",
        promptText:
          "Search the web and tell me: [your research question]. Provide sources and summarize the key findings.",
        placeholders: ["your research question"],
      },
    },

    // === FEATURE 2: IMAGE ANALYSIS / MULTIMODAL ===
    {
      id: "feature-multimodal",
      type: "text",
      content: {
        title: "Feature 2: Image Analysis & Multimodal",
        paragraphs: [
          "Gemini can see and analyze images. Upload any photo, chart, screenshot, or diagram and ask questions about it.",
          "",
          "**How to use it:**",
          "1. Click the image icon in Gemini",
          "2. Upload your image",
          "3. Ask questions about what you see",
          "",
          "**Works great for:** Charts and graphs, screenshots, photos with text, diagrams, whiteboard notes",
        ],
      },
    },

    // === SCENARIO CARD: ANALYZING A CHART ===
    {
      id: "scenario-chart",
      type: "scenarioCard",
      content: {
        title: "Scenario: Analyzing a Business Chart",
        situation:
          "Your manager shares a quarterly revenue chart and wants a quick summary before a meeting.",
        challenge: "You have 2 minutes to understand the key trends.",
        context:
          'Upload the chart to Gemini and ask: "Analyze this revenue chart. What are the key trends? Highlight any concerns or positive developments."',
        outcome: "Gemini identifies trends, compares periods, and spots anomalies you might miss.",
      },
    },

    // === FEATURE 3: GOOGLE WORKSPACE INTEGRATION ===
    {
      id: "feature-workspace",
      type: "text",
      content: {
        title: "Feature 3: Google Workspace Integration",
        paragraphs: [
          "Gemini connects directly to your Google tools—Gmail, Docs, Drive, and more.",
          "",
          "**To enable extensions:**",
          "1. Click the Settings icon (gear) in Gemini",
          '2. Go to "Extensions"',
          "3. Enable Google Workspace",
          "",
          "**What you can do:**",
          '- Search Gmail: "Find emails about [topic] from last week and summarize"',
          '- Read Docs: "Summarize my document called [name] from Drive"',
          '- Find files: "List all files related to [project] in my Drive"',
          "",
          "**Privacy note:** Gemini only accesses content when you specifically ask it to.",
        ],
      },
    },

    // === FEATURE 4: DEEP RESEARCH MODE ===
    {
      id: "feature-deep-research",
      type: "text",
      content: {
        title: "Feature 4: Deep Research Mode",
        paragraphs: [
          "For comprehensive research, Gemini can go beyond quick answers. It creates detailed reports with multiple sources.",
          "",
          "**How to trigger it:**",
          'Use phrases like "research thoroughly" or "give me a comprehensive analysis".',
          "",
          "**What happens:**",
          "1. Gemini creates a multi-step research plan",
          "2. Searches multiple sources across the web",
          "3. Compiles findings into a structured report with citations",
          "",
          '**Example:** "Research the current state of AI in healthcare. What are the top applications? Include recent news, key companies, and challenges."',
        ],
      },
    },

    // === QUIZ: WHEN TO USE GEMINI ===
    {
      id: "quiz-when-to-use",
      type: "quiz",
      content: {
        context: "Check your understanding of Gemini's strengths.",
        quiz: {
          question: "Which task is Gemini BEST suited for?",
          options: [
            "Writing a novel from scratch",
            "Finding current news about a company that announced layoffs yesterday",
            "Analyzing a 200-page PDF contract",
            "Creating complex code architecture",
          ],
          correctAnswer: 1,
        },
      },
    },

    // === HIGHLIGHT CARD: GEMINI STRENGTHS (COMBINED) ===
    {
      id: "key-insight",
      type: "highlightCard",
      content: {
        heading: "Gemini's Sweet Spot",
        insights: [
          "Real-time research—searches the web automatically for current information",
          "Google Workspace integration—works with your Gmail, Docs, and Drive",
          "Multimodal analysis—upload images, charts, and documents for insights",
          "Deep Research mode—comprehensive reports with sources and citations",
        ],
      },
    },

    // === MAIN CHALLENGE: VISUAL ANALYSIS ===
    {
      id: "main-challenge",
      type: "actionableTask",
      content: {
        title: "Your Challenge: Gemini Visual Analysis",
        purpose:
          "Experience Gemini's multimodal capabilities by analyzing real images. This task will help you understand how image analysis can accelerate your work.",
        instructions: [
          "1. Open Gemini (gemini.google.com) and start a new chat",
          "2. Find 3 different images to analyze:",
          "   - A screenshot (website, app, or document)",
          "   - A chart or diagram",
          "   - A photo with visible text",
          "3. Upload each image and analyze with different prompts:",
          '   - Screenshot: "What is this showing? Summarize the key information."',
          '   - Chart: "What trends do you see? What conclusions can I draw?"',
          '   - Photo with text: "Extract and summarize all text. What action items are mentioned?"',
          "4. Note the accuracy and usefulness of each analysis",
        ],
        deliverable: "Summary of 3 image analyses with notes on accuracy and usefulness",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "Analyze this image thoroughly: What do you see? What are the key insights? What questions should I ask about this?",
        successCriteria: [
          "You uploaded and analyzed 3 different types of images",
          "Each analysis provided useful, accurate information",
          "You can identify 2-3 work scenarios where image analysis would save time",
          "You understand Gemini's multimodal strengths",
        ],
      },
    },
  ],
};

export default lessonDay10;
