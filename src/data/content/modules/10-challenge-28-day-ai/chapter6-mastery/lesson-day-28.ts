/**
 * Day 28: Your 90-Day AI Mastery Roadmap
 *
 * CULMINATION LESSON - Planning the next 90 days
 *
 * ENDING: actionableChallenge - This lesson synthesizes all learning into a practical
 * 90-day roadmap. Students create personalized plans with phases, milestones, and
 * accountability. The main task is a complete 90-day AI mastery roadmap.
 * NO gamification - feels like a culmination, not a celebration
 */

import type { Lesson } from "@/types/content";

export const lessonDay28: Lesson = {
  id: "day-28",
  chapterId: "chapter6-mastery",
  moduleId: "10-challenge-28-day-ai",
  title: "Your 90-Day AI Mastery Roadmap",
  description:
    "Plan the next 90 days of AI integration. Set meaningful goals, define milestones, and synthesize everything you've learned.",
  order: 28,
  format: "article",
  lessonCategory: "challenge",
  estimatedMinutes: 15,

  imageSearchTerms: [
    "roadmap journey forward",
    "90 day plan timeline",
    "strategic planning horizon",
  ],

  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-28-cover.webp",
        imageAlt: "Your AI Journey Continues",
        title: "Day 28: Your 90-Day AI Mastery Roadmap",
        subtitle:
          "Plan the next 90 days of AI integration. Set meaningful goals, define milestones, and synthesize everything you've learned.",
      },
    },
    {
      id: "opening",
      type: "text",
      content: {
        paragraphs: [
          "**Tools for this lesson:** All four tools",
          "- ChatGPT: chat.openai.com",
          "- Claude: claude.ai",
          "- Gemini: gemini.google.com",
          "- Midjourney: midjourney.com",
          "",
          "This is the final lesson. Not an ending, but a transition point.",
          "In 27 days, you've gone from AI fundamentals to tool mastery, from career applications to business uses, from personal life integration to building systems and habits. You now know more about using AI effectively than most people ever will.",
          "So what's next? What will you do with this knowledge over the next 90 days?",
        ],
      },
    },
    {
      id: "where-you-are",
      type: "text",
      content: {
        title: "Where You Are Now",
        paragraphs: [
          "Take a moment to appreciate what you've built over the past 27 days. You've developed genuine tool mastery aligned with the program mastery path—ChatGPT, Claude, Gemini, and Midjourney—not just how to open each, but when each earns its place in a chain.",
          "",
          "You've also built career skills by applying AI to job searches, performance optimization, and professional development. You understand how AI can enhance your work rather than replace it. On the business side, you've explored how AI can build, market, and grow ventures, from content creation to customer research to strategic planning.",
          "",
          "Perhaps most importantly, you've integrated AI into your personal life, using it for learning, creativity, and managing life administration. You've developed systems thinking, building workflows, habits, and accountability structures that make AI use sustainable. These five pillars, tool mastery, career application, business knowledge, personal integration, and systems thinking, form a foundation that will serve you for years.",
        ],
      },
    },
    {
      id: "90-day-structure",
      type: "text",
      content: {
        title: "The 90-Day AI Mastery Structure",
        paragraphs: [
          "90 days is the right timeframe—long enough for real change, short enough to stay focused.",
          "",
          "Here's the structure:",
          "",
          "**Days 1-30: DEEPEN**",
          "Master what you've learned. Build muscle memory.",
          "",
          "**Days 31-60: EXPAND**",
          "Explore advanced applications. Push boundaries.",
          "",
          "**Days 61-90: INTEGRATE**",
          "Make AI invisible in your workflow. Help others.",
        ],
      },
    },
    {
      id: "phase-1",
      type: "textWithBullets",
      content: {
        title: "Phase 1: Deepen (Days 1-30)",
        paragraphs: ["Focus: Consistency and confidence"],
        bullets: [
          "**Goal:** Use AI daily without thinking about it",
          "",
          "**Weekly Focus Areas:**",
          "Week 1-2: Refine your prompt library. Add 5 more templates.",
          "Week 3-4: Establish your daily AI routine. Make it automatic.",
          "",
          "**Milestone:** 30-day streak of intentional AI use",
          "",
          "**How AI helps:**",
          "- Use Claude for weekly reflections on your progress",
          "- Use ChatGPT to troubleshoot when you get stuck",
        ],
      },
    },
    {
      id: "phase-2",
      type: "textWithBullets",
      content: {
        title: "Phase 2: Expand (Days 31-60)",
        paragraphs: ["Focus: Advanced applications and new territory"],
        bullets: [
          "**Goal:** Apply AI to your most valuable work",
          "",
          "**Weekly Focus Areas:**",
          "Week 5-6: Identify your highest-value tasks. Build AI workflows specifically for them.",
          "Week 7-8: Explore one advanced area: automation, custom GPTs, or API integration.",
          "",
          "**Milestone:** Complete one advanced AI project",
          "",
          "**How AI helps:**",
          "- Use Gemini (grounded, if allowed) or manual sources to research advanced techniques",
          "- Use ChatGPT to learn technical concepts (APIs, automation)",
          "- Use Claude to plan and structure your project",
        ],
      },
    },
    {
      id: "phase-3",
      type: "textWithBullets",
      content: {
        title: "Phase 3: Integrate (Days 61-90)",
        paragraphs: ["Focus: Mastery and teaching"],
        bullets: [
          "**Goal:** AI is invisible in your work. You help others.",
          "",
          "**Weekly Focus Areas:**",
          "Week 9-10: Audit your workflow. Where is AI still missing? Fill gaps.",
          "Week 11-12: Teach someone else. Create a guide. Share your system.",
          "",
          "**Milestone:** Successfully teach AI skills to one other person",
          "",
          "**How AI helps:**",
          "- Use Claude to create teaching materials",
          "- Use ChatGPT to simplify complex concepts for beginners",
        ],
      },
    },
    {
      id: "reflection-1",
      type: "reflectionPrompt",
      content: {
        prompt:
          "Why is 90 days the right timeframe for building AI mastery? What happens if you try to do everything at once instead of deepening, then expanding, then integrating?",
      },
    },
    {
      id: "quick-prompt-1",
      type: "quickPrompt",
      content: {
        heading: "Create Your Personal 90-Day Plan",
        description: "Use Claude or ChatGPT to build your customized roadmap:",
        promptText:
          "Help me create a personal 90-day AI mastery plan.\n\nMY CURRENT SITUATION:\n- Role: [your job/situation]\n- Most valuable use of AI so far: [what's worked best]\n- Biggest gap or challenge: [where I struggle]\n- One ambitious goal for 90 days: [what I want to achieve]\n\nCreate a structured 90-day plan with:\n\n**PHASE 1 (Days 1-30): DEEPEN**\n- 2 specific weekly actions\n- How I'll track consistency\n- One concrete milestone\n\n**PHASE 2 (Days 31-60): EXPAND**\n- 2 specific weekly actions\n- The advanced project I'll tackle\n- One concrete milestone\n\n**PHASE 3 (Days 61-90): INTEGRATE**\n- 2 specific weekly actions\n- Who I'll teach and how\n- One concrete milestone\n\nFor each phase, suggest prompts I can use to stay on track.",
        placeholders: [
          "your job/situation",
          "what has worked best",
          "where you struggle",
          "what you want to achieve",
        ],
      },
    },
    {
      id: "setting-goals",
      type: "text",
      content: {
        title: "Setting Meaningful Goals",
        paragraphs: [
          "Your 90-day goal should be ambitious but achievable. Here are examples by focus area:",
        ],
      },
    },
    {
      id: "goal-examples",
      type: "textWithBullets",
      content: {
        paragraphs: [""],
        bullets: [
          "**Career-Focused Goal Examples:**",
          '  - "Use AI to reduce my weekly work hours by 5 while maintaining output"',
          '  - "Land a new role where AI skills are valued"',
          '  - "Build a portfolio of 10 AI-enhanced projects"',
          "",
          "**Business-Focused Goal Examples:**",
          '  - "Launch an AI-powered side project that generates revenue"',
          '  - "Use AI to create a complete content strategy for my business"',
          '  - "Build automated workflows that save 10 hours/month"',
          "",
          "**Personal-Focused Goal Examples:**",
          '  - "Use AI to learn a new skill to intermediate level"',
          '  - "Create systems that handle 80% of my life admin automatically"',
          '  - "Build a personal knowledge base with AI assistance"',
        ],
      },
    },
    {
      id: "quick-prompt-2",
      type: "quickPrompt",
      content: {
        heading: "Refine Your Goal",
        description: "Use this prompt to make sure your goal is well-defined:",
        promptText:
          "Help me refine my 90-day AI goal.\n\nMY DRAFT GOAL:\n[Your goal here]\n\nPlease evaluate my goal against these criteria:\n1. Is it specific enough?\n2. Is it measurable?\n3. Is it achievable in 90 days?\n4. Is it meaningful to my life/career?\n5. Does it build on what I've learned?\n\nThen suggest:\n- A refined version of my goal\n- 3 smaller milestones along the way\n- How I'll know I've succeeded",
        placeholders: ["Your goal here"],
      },
    },
    {
      id: "key-principles",
      type: "text",
      content: {
        title: "Key Principles for the Next 90 Days",
        paragraphs: ["As you continue your journey, keep these principles in mind:"],
      },
    },
    {
      id: "principles-list",
      type: "text",
      content: {
        title: "Key Principles for the Next 90 Days",
        paragraphs: [
          "As you continue your journey, five principles will serve as your guideposts. First, prioritize progress over perfection. Some weeks will be better than others, and that's completely expected. The goal is consistent forward movement, not flawless execution. Missing a day or having an off week isn't failure, it's just part of the process.",
          "",
          "Second, give yourself permission to experiment freely. Try new prompts, explore new tools, test new approaches. Not everything will work, and that's not just acceptable, it's essential. The insights from failed experiments often teach you more than successes. Third, commit to staying current. AI changes rapidly, and while you don't need to chase every development, checking in monthly on industry news and revisiting tool features quarterly will keep your skills relevant.",
          "",
          "Fourth, make documentation a habit. Keep adding to your prompt library as you discover what works. Your future self will thank you when you can pull up a proven prompt instead of starting from scratch. Finally, help others. Teaching solidifies learning in a way that nothing else does. When you explain a concept to someone else, you understand it more deeply yourself. Share what works, and you'll find your own mastery accelerating.",
        ],
      },
    },
    {
      id: "synthesis",
      type: "text",
      content: {
        title: "A Synthesis of Everything You've Learned",
        paragraphs: ["Let's bring it all together. The core ideas from 28 days:"],
      },
    },
    {
      id: "synthesis-list",
      type: "text",
      content: {
        title: "A Synthesis of Everything You've Learned",
        paragraphs: [
          "Let's bring together the core ideas from these 28 days. Your tool knowledge tracks the program map: ChatGPT for flexible drafting and iteration, Claude for long-form rigor, Gemini for Workspace-grounded scans when policy allows, and Midjourney when the deliverable is visual.",
          "",
          "Your prompting skills have evolved from basic questions to sophisticated interactions. You know to be specific with context, constraints, and desired output. You iterate naturally, refining results through conversation rather than expecting perfection on the first try. And you save what works, building a prompt library that grows more valuable over time.",
          "",
          "You've applied these skills across domains. In your career, AI enhances productivity, supports job searches, and accelerates professional development. For business, it powers content creation, marketing efforts, customer insights, and strategic planning. Personally, it accelerates learning, sparks creativity, and streamlines life administration.",
          "",
          "Most importantly, you've built systems that make all of this sustainable. Decision maps remove the friction of choosing tools. Prompt libraries eliminate starting from scratch. Daily routines link AI use to existing habits. Weekly reviews provide accountability and continuous improvement. These systems are what separate occasional AI users from those who truly work with AI.",
        ],
      },
    },
    {
      id: "reflection-2",
      type: "reflectionPrompt",
      content: {
        prompt:
          "They say 'the best way to learn is to teach.' How does teaching someone else what you've learned about AI actually deepen your own understanding?",
      },
    },
    {
      id: "roadmap-visual",
      type: "textWithImage",
      content: {
        paragraphs: [
          "** Your Path Forward**",
          "",
          "You've reached the end of the 28-day challenge, but this is really just the beginning. The next 90 days are where learning transforms into mastery. Your roadmap has three phases: deepen what you've learned, expand into advanced applications, and integrate AI so fully into your work that it becomes invisible.",
          "",
          "This journey continues beyond the challenge. The foundation you've built—the tools, the prompting skills, the systems—will serve you for years as AI continues to evolve.",
        ],
        image: {
          src: "/images/courses/lessons/modules/achievement-and-course-completion-celebration.webp",
          alt: "Path forward roadmap",
        },
      },
    },
    {
      id: "key-insight",
      type: "highlightCard",
      content: {
        heading: "Your 90-Day Summary",
        insights: [
          "Phase 1 (Days 1-30): Deepen - Build consistency, refine systems",
          "Phase 2 (Days 31-60): Expand - Advanced projects, new territory",
          "Phase 3 (Days 61-90): Integrate - Fill gaps, teach others",
          "One meaningful goal, tracked weekly, reviewed monthly",
        ],
      },
    },
    {
      id: "main-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create Your 90-Day AI Mastery Roadmap",
        purpose:
          "Transform what you've learned over 28 days into a structured 90-day plan that builds lasting AI mastery and meaningful progress toward your goals.",
        instructions: [
          "1. Open Claude or ChatGPT",
          "2. Use the planning prompt to create your personalized 90-day roadmap",
          "3. Define your one meaningful 90-day goal",
          "4. Break down Phase 1 (Days 1-30) with specific weekly actions",
          "5. Set up your accountability system for weekly reviews",
          "6. Write everything down and put it where you'll see it daily",
          "7. Set calendar reminders for weekly reviews and monthly evaluations",
        ],
        deliverable:
          "A complete 90-day AI mastery roadmap including: one specific, measurable 90-day goal aligned with your career/business/personal focus, detailed Phase 1 plan with 2 weekly actions, Phase 2 and Phase 3 outlines with milestones, an accountability system scheduled in your calendar, and a visible reminder of your commitment.",
        estimatedTime: "30-40 minutes",
        successCriteria: [
          "90-day goal is specific, measurable, and meaningful to YOU",
          "Each phase has clear actions and concrete milestones",
          "Weekly review is scheduled in your calendar",
          "Roadmap is written and visible where you work",
          "Feel excited and committed to the next 90 days",
        ],
      },
    },
    {
      id: "final-action",
      type: "text",
      content: {
        title: "Looking Ahead",
        paragraphs: [
          "The AI landscape will keep changing. New tools will emerge. Features will improve. Use cases will expand.",
          "",
          "What won't change is the foundation you've built:",
          "- You know how to think about AI as a tool",
          "- You know how to prompt effectively",
          "- You know how to build systems and habits",
          "- You know how to keep learning",
          "",
          "That foundation is more valuable than any single tool or technique.",
          "",
          "Your AI journey continues. This was just the beginning.",
        ],
      },
    },
    {
      id: "checkpoint",
      type: "checkpoint",
      content: {
        question: "What's the most important thing to do after completing this challenge?",
        options: [
          "Use every AI tool every day",
          "Create a personal 90-day plan with clear phases and milestones",
          "Immediately start teaching others",
          "Wait for the next course to be released",
        ],
        correctAnswer: 1,
        hint: "Think about what transforms learning into lasting change...",
      },
    },
  ],
};

export default lessonDay28;
