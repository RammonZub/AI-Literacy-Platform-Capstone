/**
 * Day 26: Building Your AI Workflow System
 *
 * INTEGRATION LESSON - Combining all four tools into a personal workflow
 *
 * ENDING: actionableChallenge - This lesson teaches practical workflow system building,
 * integrating all four tools into a cohesive personal system. Students create a Tool
 * Decision Map, Prompt Library, and daily routines. The main task is a complete AI
 * workflow system.
 * NO gamification
 */

import type { Lesson } from "@/types/content";

export const lessonDay26: Lesson = {
  id: "day-26",
  chapterId: "chapter6-mastery",
  moduleId: "10-challenge-28-day-ai",
  title: "Building Your AI Workflow System",
  description:
    "Create a personal AI workflow that uses the right tool for each task. Build templates and systems that make AI a seamless part of your day.",
  order: 26,
  format: "article",
  lessonCategory: "tutorial",
  estimatedMinutes: 14,

  imageSearchTerms: [
    "workflow system diagram",
    "productivity tools integrated",
    "system thinking flowchart",
  ],

  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-26-cover.webp",
        imageAlt: "Your AI Journey Continues",
        title: "Day 26: Building Your AI Workflow System",
        subtitle:
          "Create a personal AI workflow that uses the right tool for each task. Build templates and systems that make AI a seamless part of your day.",
      },
    },
    {
      id: "opening",
      type: "text",
      content: {
        paragraphs: [
          "**Tools for this lesson:** Mastery path (ChatGPT, Claude, Gemini, Midjourney)",
          "**Where to access:**",
          "- ChatGPT: chat.openai.com",
          "- Claude: claude.ai",
          "- Gemini: gemini.google.com",
          "- Midjourney: midjourney.com",
          "",
          "You've learned four AI tools, explored career applications, discovered business uses, and integrated AI into your personal life. Now it's time to build a system.",
          "A workflow system means knowing exactly which tool to use for each situation, having templates ready, and making AI feel like a natural extension of your thinking. Let's build that system.",
        ],
      },
    },
    {
      id: "why-system",
      type: "text",
      content: {
        title: "Why You Need an AI Workflow System",
        paragraphs: [
          "Without a system, using AI feels scattered and inconsistent. You might find yourself forgetting which tool works best for a particular task, or wasting mental energy figuring out where to start each time. This friction adds up, and more importantly, it prevents AI from becoming a natural extension of your thinking.",
          "",
          "A workflow system eliminates decision paralysis. When you have a clear framework for choosing tools, you know exactly which one to open for any given task. No more hemming and hawing about whether to use ChatGPT or Claude, no more defaulting to whatever you used last time. The decision is already made, which means you can focus your energy on the actual work.",
          "",
          "Beyond speed, a system dramatically improves consistency. Your results get better because you're matching the right tool to each job rather than using whatever happens to be open. Pre-built prompts for repetitive tasks mean you never start from scratch, and over time, AI use becomes automatic rather than something you have to consciously think about. This is the transition from occasionally using AI to truly working with AI.",
        ],
      },
    },
    {
      id: "workflow-framework",
      type: "text",
      content: {
        title: "The Personal AI Workflow Framework",
        paragraphs: [
          "Your workflow system has three components:",
          "",
          "**1. Tool Decision Map**",
          "A simple guide that tells you which tool to use based on the task type.",
          "",
          "**2. Prompt Library**",
          "Your collection of pre-written prompts for common tasks, customized to your needs.",
          "",
          "**3. Daily/Weekly AI Routines**",
          "Regular times when you use AI for specific purposes (morning planning, weekly review, etc.).",
          "",
          "Let's build each component.",
        ],
      },
    },
    {
      id: "tool-decision-map",
      type: "text",
      content: {
        title: "Component 1: Your Tool Decision Map",
        paragraphs: [
          "We covered the basics in Day 8. Let's make it personal. Here's the expanded decision framework:",
        ],
      },
    },
    {
      id: "decision-map-detailed",
      type: "textWithBullets",
      content: {
        paragraphs: ["Print this or save it as a note:"],
        bullets: [
          "**WRITING TASKS**",
          "  - Quick email/message: ChatGPT (fast, good enough)",
          "  - Important document/proposal: Claude (more nuanced, natural)",
          "  - Content with research: Gemini (grounded, if allowed) + Claude (writing)",
          "",
          "**RESEARCH TASKS**",
          "  - Need citations: Gemini with grounding (always verify)",
          "  - Current events/news: Gemini (grounded) or manual sources",
          "  - Deep analysis of documents: Claude",
          "  - Quick facts: ChatGPT or grounded Gemini",
          "",
          "**CREATIVE TASKS**",
          "  - Brainstorming ideas: ChatGPT (best at divergent thinking)",
          "  - Refining concepts: Claude (thinks more deeply)",
          "  - Visual creativity: Midjourney once the brief is written",
          "",
          "**ANALYSIS TASKS**",
          "  - Long documents (50+ pages): Claude",
          "  - Data/code: ChatGPT",
          "  - Competitive research: Gemini (with sources)",
          "  - Connected to Google Workspace: Gemini",
        ],
      },
    },
    {
      id: "reflection-1",
      type: "reflectionPrompt",
      content: {
        prompt:
          "Why do people who create systems outperform those who don't? What happens to your productivity when AI use becomes automatic rather than a decision you have to make each time?",
      },
    },
    {
      id: "prompt-library",
      type: "text",
      content: {
        title: "Component 2: Your Prompt Library",
        paragraphs: [
          "A prompt library is your collection of go-to prompts for recurring tasks. Instead of reinventing the wheel each time, you copy, paste, and customize.",
          "",
          'Create a note (Notion, Apple Notes, Google Docs) called "My AI Prompts" with these sections:',
        ],
      },
    },
    {
      id: "quick-prompt-1",
      type: "quickPrompt",
      content: {
        heading: "Email Prompt Template",
        description:
          "Add this to your prompt library. Customize the bracketed sections for your typical emails:",
        promptText:
          "Write a professional email for me.\n\nCONTEXT:\n- Recipient: [role/relationship]\n- Purpose: [what I need]\n- Tone: [formal/friendly/direct]\n\nKEY POINTS TO INCLUDE:\n- [point 1]\n- [point 2]\n- [point 3]\n\nCONSTRAINTS:\n- Length: [short/medium/detailed]\n- Include a clear call-to-action\n- End with: [specific next step]",
        placeholders: [
          "role/relationship",
          "what I need",
          "formal/friendly/direct",
          "point 1",
          "point 2",
          "point 3",
          "short/medium/detailed",
          "specific next step",
        ],
      },
    },
    {
      id: "quick-prompt-2",
      type: "quickPrompt",
      content: {
        heading: "Research Prompt Template",
        description: "For grounded Gemini (or manual web search) when you need to research a topic:",
        promptText:
          "Research [topic] for me. Include:\n\n1. A clear explanation of what this is\n2. Key statistics or data points\n3. Recent developments (last 6 months)\n4. Expert opinions or different viewpoints\n5. Sources I can cite\n6. 3-5 actionable takeaways\n\nFormat as a structured summary with bullet points.",
        placeholders: ["topic"],
      },
    },
    {
      id: "quick-prompt-3",
      type: "quickPrompt",
      content: {
        heading: "Document Analysis Template",
        description: "For Claude when analyzing long documents:",
        promptText:
          "Analyze this document and provide:\n\n1. EXECUTIVE SUMMARY (3 sentences max)\n2. KEY POINTS (bullet list)\n3. IMPORTANT DATES/DEADLINES (if any)\n4. ACTION ITEMS (what I need to do)\n5. QUESTIONS I should ask (what's unclear or missing)\n6. POTENTIAL RISKS or concerns\n\nThen tell me: What's the most important thing I should focus on?",
        placeholders: [],
      },
    },
    {
      id: "daily-routines",
      type: "text",
      content: {
        title: "Component 3: Daily/Weekly AI Routines",
        paragraphs: [
          "The most effective AI users don't just use AI randomly. They have routines. Here are templates for daily and weekly AI use:",
        ],
      },
    },
    {
      id: "routine-examples",
      type: "textWithBullets",
      content: {
        paragraphs: ["Choose routines that fit your life:"],
        bullets: [
          "**MORNING PREP (5 min)**",
          "  Tool: ChatGPT or Claude",
          '  Prompt: "Here\'s my schedule for today: [paste calendar]. What should I prioritize? Any potential conflicts or opportunities?"',
          "",
          "**EMAIL PROCESSING (as needed)**",
          "  Tool: Claude (important) or ChatGPT (routine)",
          "  Use your email prompt template",
          "",
          "**WEEKLY REVIEW (15 min, Friday)**",
          "  Tool: Claude",
          "  Prompt: \"Here's what I accomplished this week: [list]. Here's what I didn't finish: [list]. Help me reflect: What went well? What blocked me? What should I prioritize next week?\"",
          "",
          "**LEARNING SESSION (weekly)**",
          "  Tool: ChatGPT or Gemini",
          '  Prompt: "Explain [topic I want to learn] to me. Give me a simple explanation, then a deeper explanation, then 3 practice exercises."',
        ],
      },
    },
    {
      id: "build-your-system",
      type: "text",
      content: {
        title: "Your Action: Build the System",
        paragraphs: [
          "Right now, take 10 minutes to:",
          "",
          "1. **Create your prompt library note**",
          "   - Copy the three templates above",
          "   - Add 2 more templates for tasks you do often",
          "",
          "2. **Save your tool decision map**",
          "   - Screenshot or copy the decision framework",
          "   - Keep it somewhere you'll see it",
          "",
          "3. **Choose one daily routine**",
          "   - Pick morning prep OR weekly review",
          "   - Commit to trying it for 5 days",
        ],
      },
    },
    {
      id: "reflection-2",
      type: "reflectionPrompt",
      content: {
        prompt:
          "Think about tasks you do repeatedly. How much time do you spend figuring out how to approach them each time? What would having a template save you?",
      },
    },
    {
      id: "workflow-visual",
      type: "textWithImage",
      content: {
        paragraphs: [
          "** Your Integrated AI Command Center**",
          "",
          "Imagine your AI workflow as a personal command center. The Tool Decision Map tells you which tool to open for any task. Your Prompt Library provides proven templates for common work. Your Daily Routines make AI use automatic rather than something you have to remember.",
          "",
          "This is the transition from 'using AI sometimes' to 'AI is how I work.' The system does the thinking—you just execute.",
        ],
        image: {
          src: "/images/courses/lessons/modules/strategic-planning-workspace-with-organized-layers.webp",
          alt: "Integrated AI command center",
        },
      },
    },
    {
      id: "key-insight",
      type: "highlightCard",
      content: {
        heading: "The System Mindset",
        insights: [
          "Tool Decision Map = No more guessing which AI to use",
          "Prompt Library = Never start from scratch on common tasks",
          "Daily Routines = AI becomes automatic, not an afterthought",
          "Start simple: One decision map, three prompts, one routine",
        ],
      },
    },
    {
      id: "main-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Build Your Complete AI System",
        purpose:
          "Create a personalized AI workflow system that makes using AI automatic, consistent, and effective for your specific needs and work style.",
        instructions: [
          "1. Create your Tool Decision Map (save screenshot or copy)",
          "2. Start a Prompt Library document with the 3 templates provided",
          "3. Add 2 more prompts for tasks you do frequently",
          "4. Choose ONE daily routine to commit to (morning prep OR weekly review)",
          "5. Set up a recurring calendar reminder for your chosen routine",
          "6. Put your Decision Map and Prompt Library where you'll see them daily",
        ],
        deliverable:
          "A complete AI workflow system including: a personalized Tool Decision Map saved as a reference, a Prompt Library document with 5+ proven templates, one daily/weekly routine scheduled in your calendar, and a physical or digital reminder to use your system for the next 30 days.",
        estimatedTime: "25-35 minutes",
        successCriteria: [
          "Decision Map covers your actual work tasks",
          "Prompt Library has templates customized to your needs",
          "Calendar reminder is set for your chosen routine",
          "System is visible and accessible during your workday",
          "Can explain your workflow to someone else in 2 minutes",
        ],
      },
    },
    {
      id: "checkpoint",
      type: "checkpoint",
      content: {
        question:
          "You're using AI regularly but find yourself forgetting which prompts work best and starting from scratch each time. What would help most?",
        options: [
          "Use more AI tools so you have more options",
          "Build a Prompt Library with your best prompts and create routines for when to use AI",
          "Watch more tutorials about prompting",
          "Ask AI to remember your prompts for you",
        ],
        correctAnswer: 1,
        hint: "Think about what helps you use AI consistently and effectively...",
      },
    },
  ],
};

export default lessonDay26;
