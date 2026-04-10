/**
 * Day 27: AI Habits for Long-Term Success
 *
 * HABIT BUILDING LESSON - Sustainable AI practices
 *
 * ENDING: actionableChallenge - This lesson teaches practical habit-building skills,
 * focusing on making AI use sustainable through trigger-action-reward frameworks and
 * accountability systems. Students create a habit system. The main task is installing
 * an accountability system.
 * NO gamification
 */

import type { Lesson } from "@/types/content";

export const lessonDay27: Lesson = {
  id: "day-27",
  chapterId: "chapter6-mastery",
  moduleId: "10-challenge-28-day-ai",
  title: "AI Habits for Long-Term Success",
  description:
    "Build sustainable AI habits that stick. Create accountability systems and reflection practices that keep you growing.",
  order: 27,
  format: "article",
  lessonCategory: "tutorial",
  estimatedMinutes: 12,

  imageSearchTerms: [
    "daily habits routine",
    "consistent practice growth",
    "long term success journey",
  ],

  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-27-cover.webp",
        imageAlt: "Your AI Journey Continues",
        title: "Day 27: AI Habits for Long-Term Success",
        subtitle:
          "Build sustainable AI habits that stick. Create accountability systems and reflection practices that keep you growing.",
      },
    },
    {
      id: "opening",
      type: "text",
      content: {
        paragraphs: [
          "**Tools for this lesson:**",
          "- Claude for reflection: claude.ai",
          "- ChatGPT for planning: chat.openai.com",
          "",
          "You've built your AI workflow system. Now comes the harder part: making it stick.",
          "Most people try new productivity tools with enthusiasm, then gradually stop using them. The difference between those who master AI and those who don't isn't talent. It's habits.",
          "Here's how to build AI habits that last, create accountability systems, and use AI itself to stay on track.",
        ],
      },
    },
    {
      id: "why-habits-fail",
      type: "text",
      content: {
        title: "Why AI Habits Fail (And How to Prevent It)",
        paragraphs: [
          "Most people approach new productivity tools with enthusiasm, only to gradually stop using them. Understanding why this happens is the first step to preventing it. The most common failure mode is being too ambitious, trying to use AI for everything immediately rather than building one habit at a time. This leads to overwhelm and eventually abandonment.",
          "",
          "Habits also fail when there's no clear trigger. Without a specific cue that reminds you to use AI, it simply doesn't happen. You might have the best intentions, but in the flow of daily work, you forget. Similarly, if AI doesn't make your life noticeably better in some immediate way, you'll stop. The reward needs to be tangible and felt, not theoretical.",
          "",
          "Friction is another silent killer of habits. If using AI requires too many steps, opening the right app, finding your prompt, copying and pasting context, you won't do it consistently, especially when you're busy. Finally, what doesn't get measured doesn't get maintained. Without some form of tracking or accountability, habits drift and fade over time. Recognizing these failure modes helps you design habits that actually stick.",
        ],
      },
    },
    {
      id: "habit-framework",
      type: "text",
      content: {
        title: "The AI Habit Framework",
        paragraphs: [
          "Use this framework to design habits that stick:",
          "",
          "**TRIGGER (When)**",
          "What cue will remind you to use AI? Link it to something you already do.",
          "",
          "**ACTION (What)**",
          "What specific AI action will you take? Be precise.",
          "",
          "**REWARD (Why)**",
          "What benefit do you get immediately? The reward must be felt.",
          "",
          "**FRICTION (How easy)**",
          "How can you remove steps between trigger and action?",
        ],
      },
    },
    {
      id: "habit-examples",
      type: "textWithBullets",
      content: {
        title: "Example AI Habits",
        paragraphs: ["Here are proven AI habits with the framework applied:"],
        bullets: [
          "**Morning Email Triage**",
          "  - Trigger: Opening email in the morning",
          "  - Action: Paste tricky emails into Claude for draft responses",
          "  - Reward: Clear inbox in half the time",
          "  - Friction: Keep Claude open in a tab",
          "",
          "**Meeting Prep**",
          "  - Trigger: Seeing a meeting on calendar",
          "  - Action: Ask ChatGPT to generate prep questions",
          "  - Reward: Walking into meetings prepared and confident",
          "  - Friction: Keep the prompt in a notes app",
          "",
          "**Learning on Commute**",
          "  - Trigger: Getting in car/transit",
          "  - Action: Ask ChatGPT (voice) to explain a concept",
          "  - Reward: Productive use of commute time",
          "  - Friction: Use voice mode, no typing needed",
        ],
      },
    },
    {
      id: "reflection-1",
      type: "reflectionPrompt",
      content: {
        prompt:
          "Think about a habit you tried to build but failed. Was it too ambitious, lacked a clear trigger, or had too much friction? How could the framework have helped?",
      },
    },
    {
      id: "quick-prompt-1",
      type: "quickPrompt",
      content: {
        heading: "Design Your AI Habit",
        description: "Use ChatGPT or Claude to design a habit that fits your life:",
        promptText:
          "Help me design an AI habit. Here's my context:\n\nMY SITUATION:\n- I typically struggle with: [task you find difficult or time-consuming]\n- I already have a routine of: [something you do every day]\n- My biggest friction point is: [what makes things hard]\n\nBased on this, suggest:\n1. A specific trigger I can use (linked to my existing routine)\n2. A simple AI action (under 5 minutes)\n3. The immediate reward I'll feel\n4. How to reduce friction\n\nGive me 3 options and recommend the best one.",
        placeholders: [
          "task you find difficult",
          "something you do every day",
          "what makes things hard",
        ],
      },
    },
    {
      id: "accountability",
      type: "text",
      content: {
        title: "Accountability Systems",
        paragraphs: ["Habits need accountability. Here are three systems:"],
      },
    },
    {
      id: "accountability-methods",
      type: "textWithBullets",
      content: {
        paragraphs: [""],
        bullets: [
          "**1. AI-Powered Weekly Review**",
          "  Every Friday, have Claude help you reflect:",
          "  - What AI habits did I maintain this week?",
          "  - What worked? What didn't?",
          "  - What will I adjust next week?",
          "",
          "**2. Streak Tracking**",
          "  Simple calendar or app tracking. Don't break the chain.",
          "  - Mark each day you use AI intentionally",
          "  - Aim for consistency, not perfection",
          "  - 80% consistency beats 100% intensity",
          "",
          "**3. Accountability Partner**",
          "  Find someone also learning AI. Check in weekly.",
          "  - Share one thing that worked",
          "  - Share one challenge",
          "  - Commit to next week's focus",
        ],
      },
    },
    {
      id: "quick-prompt-2",
      type: "quickPrompt",
      content: {
        heading: "Weekly Review Prompt",
        description: "Use this with Claude every Friday:",
        promptText:
          "Help me do my weekly AI reflection.\n\nTHIS WEEK:\n- AI tools I used: [list which ones]\n- Tasks I used AI for: [list 3-5 tasks]\n- Best result: [describe one win]\n- Biggest challenge: [describe one struggle]\n\nPlease ask me 3-5 reflective questions about my AI usage, then help me identify:\n1. One habit to continue\n2. One habit to adjust\n3. One new thing to try next week",
        placeholders: [
          "list which ones",
          "list 3-5 tasks",
          "describe one win",
          "describe one struggle",
        ],
      },
    },
    {
      id: "avoiding-plateau",
      type: "text",
      content: {
        title: "Avoiding the AI Plateau",
        paragraphs: [
          "After the initial learning curve, many people plateau. Here's how to keep growing:",
        ],
      },
    },
    {
      id: "growth-strategies",
      type: "textWithBullets",
      content: {
        paragraphs: [""],
        bullets: [
          "**1. Weekly Experiment**",
          "  Try one new thing each week:",
          "  - A new prompt technique",
          "  - A different tool for a familiar task",
          "  - A new use case you haven't explored",
          "",
          "**2. Follow AI Developments**",
          "  AI changes fast. Stay current:",
          "  - Follow one AI newsletter (The Neuron, Superhuman, Ben's Bites)",
          "  - Check Gemini for AI news monthly",
          "  - Revisit tool features quarterly (they update constantly)",
          "",
          "**3. Teach Others**",
          "  The best way to learn is to teach:",
          "  - Explain AI concepts to colleagues",
          "  - Share prompts that worked for you",
          "  - Help someone get started",
        ],
      },
    },
    {
      id: "reflection-2",
      type: "reflectionPrompt",
      content: {
        prompt:
          "Why does 80% consistency beat 100% intensity? What happens to most people who aim for perfection in building new habits?",
      },
    },
    {
      id: "habits-visual",
      type: "textWithImage",
      content: {
        paragraphs: [
          "**The Compound Effect of AI Habits**",
          "",
          "Small AI habits, repeated consistently, compound into massive capability gains. A daily 5-minute AI task becomes 30 hours of productivity per year. A weekly reflection becomes continuous improvement. These aren't dramatic changes—they're microscopic shifts that transform how you work.",
          "",
          "The goal isn't perfection. It's 80% consistency. Missing a day isn't failure—quitting is.",
        ],
        image: {
          src: "/images/courses/lessons/modules/skill-development-and-continuous-learning.webp",
          alt: "Compound effect of AI habits",
        },
      },
    },
    {
      id: "key-insight",
      type: "highlightCard",
      content: {
        heading: "Habit Success Principles",
        insights: [
          "Start small: One habit, done consistently, beats many habits done inconsistently",
          "Link to existing routines: Attach AI use to things you already do",
          "Track progress: Weekly reviews with Claude keep you accountable",
          "80% consistency: Aim for 4 out of 5 days, not perfection",
        ],
      },
    },
    {
      id: "main-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Install Your AI Habit System",
        purpose:
          "Choose and implement one accountability system that will keep you using AI consistently for the next 30 days, setting the foundation for long-term AI mastery.",
        instructions: [
          "1. Choose ONE accountability system (weekly review, streak tracking, or accountability partner)",
          "2. If weekly review: Save the prompt in Claude and schedule 15min every Friday",
          "3. If streak tracking: Create a simple calendar or tracker for daily checkmarks",
          "4. If accountability partner: Find someone and agree on weekly check-in format",
          "5. Use the habit design prompt to create your first AI habit",
          "6. Write down your commitment and put it somewhere visible",
          "7. Set a 30-day reminder to evaluate and adjust your system",
        ],
        deliverable:
          "A complete habit accountability system including: one chosen method (weekly review prompt, streak tracker, or accountability partnership), one designed AI habit with trigger/action/reward identified, a 30-day commitment written down, and a calendar reminder to evaluate and adjust your system after 30 days.",
        estimatedTime: "20-30 minutes",
        successCriteria: [
          "Chose ONE clear accountability system (not multiple)",
          "System is set up and ready to use immediately",
          "First AI habit is designed around an existing routine",
          "Commitment is written and visible",
          "Have a specific date scheduled for 30-day review",
        ],
      },
    },
    {
      id: "checkpoint",
      type: "checkpoint",
      content: {
        question: "Which principle is most important for building lasting AI habits?",
        options: [
          "Use every AI tool every day",
          "Start with many habits at once for maximum impact",
          "Link habits to existing routines and track progress with 80% consistency",
          "Never miss a day or the habit is ruined",
        ],
        correctAnswer: 2,
        hint: "Think about what makes habits sustainable long-term...",
      },
    },
  ],
};

export default lessonDay27;
