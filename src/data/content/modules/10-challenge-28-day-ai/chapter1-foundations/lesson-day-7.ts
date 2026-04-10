/**
 * Day 7: Building Your AI Practice Routine
 *
 * TEACHING LESSON - Building Sustainable AI Habits
 * How to make AI a daily habit, decision frameworks for tool selection,
 * and the compound effect of consistent AI practice.
 *
 * Structure:
 * - Hero image
 * - Opening (why this topic matters)
 * - Teaching content: Daily AI Habit, Tool Selection Framework, Compound Effect
 * - Week recap (brief reference)
 * - Key insights card
 * - Actionable practice (quiz-based task at the END)
 * - Week 2 preview
 * - Closing motivation
 */

import type { Lesson } from "@/types/content";

export const lessonDay7: Lesson = {
  id: "day-7",
  chapterId: "chapter1-foundations",
  moduleId: "10-challenge-28-day-ai",
  title: "Building Your AI Practice Routine",
  description:
    "Learn how to make AI a daily habit, choose the right tool for each task, and understand why consistency beats intensity in building lasting AI skills.",
  order: 7,
  format: "article",
  lessonCategory: "review",
  estimatedMinutes: 15,

  imageSearchTerms: [
    "daily habit routine practice consistency",
    "building skills compound growth",
    "sustainable learning practice framework",
  ],

  sections: [
    // === HERO SECTION ===
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-7-cover.webp",
        imageAlt: "Building Your AI Practice Routine",
        title: "Day 7: Building Your AI Practice Routine",
        subtitle:
          "Completing Week 1 is just the beginning. Today you learn how to make AI a lasting part of how you work.",
      },
    },

    // === OPENING ===
    {
      id: "opening",
      type: "text",
      content: {
        paragraphs: [
          "You've made it through six days of learning. You've opened ChatGPT, tried Claude, written prompts with the CTF Framework, and even completed a real workflow. That's more AI practice than most people get in months. But here's the uncomfortable truth: **what you do in the next week matters more than what you did this week.**",
          "",
          "The challenge isn't learning AI once. It's building a practice that lasts. Without a system, the skills you've developed will fade. With the right approach, they compound into something transformative. Today is about making sure you don't just complete this challenge—you emerge from it with a permanent upgrade to how you work.",
          "",
          "We're going to cover three things: why daily practice beats occasional intensity, a simple framework for choosing between AI tools, and the mathematics of compound improvement that explains why this matters more than you think.",
        ],
      },
    },

    // === TEACHING SECTION 1: THE DAILY AI HABIT ===
    {
      id: "daily-habit",
      type: "text",
      content: {
        title: "The Daily AI Habit: Why Consistency Beats Intensity",
        paragraphs: [
          "Most people approach AI like a gym membership in January: intense enthusiasm followed by gradual abandonment. They binge-learn for a weekend, then don't touch it for weeks. This pattern feels productive in the moment but produces almost no lasting change. The alternative—small, consistent practice—feels insignificant day-to-day but creates transformation over time.",
          "",
          "Consider what happens when you use AI for just 10 minutes every workday. That's 50 minutes per week, about 3.5 hours per month, and roughly 40 hours per year. A full work week of AI practice, distributed in tiny increments that barely disrupt your schedule. Now compare that to the person who does one intensive 4-hour session every two months. After a year, you've logged 40 hours of practice while they've managed maybe 24—and more importantly, your practice was spaced out, which research shows dramatically improves retention and skill development.",
          "",
          "The key insight is that AI skills are **perishable but compoundable**. If you don't use prompting techniques for a few weeks, you'll forget the nuances. But if you practice daily, each session builds on the last. The CTF Framework that felt clunky on Day 4 becomes automatic by Day 14. The hesitation you feel before opening ChatGPT disappears when it's as routine as checking email. This is why the 28-day structure matters—not because 28 is a magic number, but because it's long enough to establish a habit while short enough to feel achievable.",
          "",
          "**Your daily AI practice doesn't need to be ambitious.** It can be as simple as: every morning, ask AI to help you prioritize your tasks. Every afternoon, use it to draft one email you've been avoiding. Every evening, have it summarize something you learned that day. The content matters less than the consistency. You're not just completing tasks—you're training your brain to reach for AI automatically when faced with cognitive work.",
        ],
      },
    },

    // === TEACHING SECTION 2: TOOL SELECTION FRAMEWORK ===
    {
      id: "tool-framework",
      type: "text",
      content: {
        title: "Tool Selection Framework: Choosing the Right AI for the Job",
        paragraphs: [
          "By now you've used both ChatGPT and Claude, and you've probably noticed they feel different. ChatGPT is faster, more conversational, and feels like texting a knowledgeable friend. Claude is more measured, better with long documents, and writes with a more natural prose style. These aren't just preferences—they're design decisions that make each tool better suited for specific tasks. Choosing the right tool isn't about which is \"better\" overall; it's about matching capabilities to your needs.",
          "",
          "Here's a practical framework for deciding. **Use ChatGPT when:** you need quick answers, you want to iterate rapidly through multiple versions, you're working with images or voice, or you need something that feels conversational and casual. ChatGPT excels at brainstorming, quick explanations, and tasks where speed matters more than depth. Its mobile app is also significantly better, making it the choice for on-the-go AI use.",
          "",
          "**Use Claude when:** you're working with long documents (anything over a few pages), you need nuanced writing that doesn't sound like AI, you're doing analysis that requires careful reasoning, or you want explanations that go deeper than surface-level. Claude's larger context window means you can paste entire reports, articles, or documents and get coherent analysis of the whole thing. Its writing style is also more natural, which matters when you're generating content that people will actually read.",
          "",
          "There's a third category worth mentioning: **use Gemini when you need current information.** Neither ChatGPT nor Claude is reliable for recent events or real-time data. Gemini searches the web and cites sources, making it the right choice for research questions, current events, or anything where you need to verify where information came from. We'll cover Gemini in depth next week, but start noticing when your questions require current information versus when they're about concepts, writing, or analysis.",
          "",
          "The goal isn't to memorize rules but to develop intuition. After a few weeks of deliberate practice, you'll automatically reach for the right tool without thinking. You'll feel it when ChatGPT is giving you surface-level answers and Claude would go deeper. You'll recognize when a question needs web search, not just AI reasoning. This intuition is part of what separates skilled AI users from beginners—and it only develops through varied, consistent practice.",
        ],
      },
    },

    // === TEACHING SECTION 3: THE COMPOUND EFFECT ===
    {
      id: "compound-effect",
      type: "text",
      content: {
        title: "The Compound Effect: Why Small Daily Improvements Add Up",
        paragraphs: [
          "If you get 1% better at using AI each day, by the end of this challenge you'll be 30% better than you are today. That's the math of compound improvement—small, consistent gains that accumulate into transformation. But here's what makes this powerful: the gains don't just add up linearly. Each improvement makes future improvements easier. Learning to write better prompts makes your next learning session more productive. Understanding one tool deeply helps you learn others faster. Building the habit of daily practice makes every future skill easier to acquire.",
          "",
          "Consider the gap between someone who uses AI thoughtfully and someone who doesn't. The non-user writes an email from scratch in 15 minutes. The skilled AI user takes 2 minutes to prompt, 3 minutes to refine, and produces a better result in 5 minutes total. That's a 10-minute savings on one task. Over a year of similar tasks, that's hours reclaimed. But here's what's harder to see: the skilled user also produces better work, makes fewer mistakes, and has more mental energy for the tasks that actually require human judgment. The compound effect isn't just about time—it's about quality and cognitive capacity.",
          "",
          "There's also a hidden compound effect in confidence. Every successful AI interaction builds your belief that this tool can help you. That confidence makes you more likely to try AI on harder problems. Success breeds success. Conversely, every time you abandon AI out of frustration or forget to use it when it would help, you reinforce the habit of working without it. This is why the early days of practice matter so much—you're not just building skills, you're building identity. You're becoming someone who uses AI as naturally as you use a calculator or search engine.",
          "",
          '**The gap between AI users and non-users is widening every month.** People building daily AI habits now are pulling ahead. People waiting for the "right time" or planning to learn "eventually" are falling behind. Not dramatically, not visibly, but steadily and inevitably. This challenge is your opportunity to be on the right side of that divide. The compound effect works both ways—every day of practice is an investment; every day of waiting is a missed opportunity that compounds too.',
        ],
      },
    },

    // === VISUAL BREAK ===
    {
      id: "context-image",
      type: "textWithImage",
      content: {
        title: "Your Foundation is Set",
        paragraphs: [
          "You've built the essential skills. Now it's about making them permanent through consistent practice.",
        ],
        image: {
          src: "/images/courses/modules/10-challenge-28-day-ai/day-7-inline-1.webp",
          alt: "Building lasting AI habits",
          caption: "Small daily practices compound into transformative skills over time",
        },
      },
    },

    // === WEEK 1 RECAP (BRIEF REFERENCE) ===
    {
      id: "recap",
      type: "textWithBullets",
      content: {
        title: "Week 1 Quick Reference",
        paragraphs: ["Here's what you've learned this week as a quick reference:"],
        bullets: [
          "**Day 1:** AI as an amplifier, not replacement. The opportunity gap.",
          "**Day 2:** ChatGPT basics. Your first conversation.",
          "**Day 3:** ChatGPT advanced. Voice, images, customization.",
          "**Day 4:** CTF Framework. Context + Task + Format.",
          "**Day 5:** Claude fundamentals. Long documents, nuanced writing.",
          "**Day 6:** Email workflow. Your first 3-step AI process.",
        ],
      },
    },

    // === KEY INSIGHTS ===
    {
      id: "key-insight",
      type: "highlightCard",
      content: {
        heading: "Key Insights: Building Your AI Practice",
        insights: [
          "Consistency beats intensity: 10 minutes daily > 2 hours weekly",
          "Tool selection matters: ChatGPT for speed, Claude for depth, Gemini for current info",
          "Skills are perishable: Regular practice prevents regression",
          "The compound effect: Small improvements accumulate into transformation",
          "Confidence compounds: Every success makes the next attempt easier",
        ],
      },
    },

    // === ACTIONABLE PRACTICE: QUIZ-BASED TASK ===
    {
      id: "actionable-practice",
      type: "quiz",
      content: {
        context:
          "**Test Your Understanding: Building an AI Practice** — These questions check whether you can apply today's concepts to real decisions you'll face.",
        quiz: {
          question:
            "You want to build a lasting AI habit. Which approach is most likely to succeed?",
          options: [
            "Schedule a 2-hour AI learning session every Saturday",
            "Use AI for 10 minutes at the same time each workday",
            "Wait until you have a big project that really needs AI help",
            "Switch between different AI tools randomly to stay flexible",
          ],
          correctAnswer: 1,
        },
      },
    },

    {
      id: "actionable-practice-2",
      type: "quiz",
      content: {
        context:
          "**Tool Selection Scenario 1:** You need to analyze a 30-page market research report and extract key insights. Which tool should you use?",
        quiz: {
          question: "What's the best choice for this task?",
          options: [
            "ChatGPT — it's faster and you want quick results",
            "Claude — it handles long documents better and provides deeper analysis",
            "Gemini — you need to search for current market data",
            "Any tool will work equally well for this task",
          ],
          correctAnswer: 1,
        },
      },
    },

    {
      id: "actionable-practice-3",
      type: "quiz",
      content: {
        context:
          "**Tool Selection Scenario 2:** You're walking to a meeting and want to brainstorm ideas for a presentation using voice. Which tool?",
        quiz: {
          question: "What's the best choice for this situation?",
          options: [
            "Claude — it's better at creative brainstorming",
            "ChatGPT mobile app — it has superior voice mode and is designed for on-the-go use",
            "Gemini — you need to search for presentation examples",
            "Wait until you're at a computer to use AI properly",
          ],
          correctAnswer: 1,
        },
      },
    },

    {
      id: "actionable-practice-4",
      type: "quiz",
      content: {
        context: "**The Compound Effect:** Understanding why consistency matters.",
        quiz: {
          question:
            "You practice AI skills for 10 minutes daily for a month (about 5 hours total). Your colleague does one 3-hour session. After 6 months of these patterns, who has stronger AI skills and why?",
          options: [
            "Your colleague — concentrated practice is more effective",
            "You — spaced practice improves retention and each session builds on the last",
            "Equal — total practice time is what matters, not distribution",
            "Impossible to say — it depends on natural talent",
          ],
          correctAnswer: 1,
        },
      },
    },

    // === DAILY PRACTICE CHALLENGE ===
    {
      id: "practice-challenge",
      type: "actionableTask",
      content: {
        title: "Your Daily AI Practice Commitment",
        purpose:
          "Turn today's learning into a concrete plan. You'll define one small daily AI practice that you can maintain, ensuring your Week 1 skills become permanent.",
        instructions: [
          "1. **Choose ONE specific daily practice** (examples: morning task prioritizing with AI, lunch-break learning session, end-of-day summary)",
          "2. **Attach it to an existing habit** (after coffee, before checking email, during commute)",
          "3. **Make it specific and time-bound** ('10 minutes with Claude after morning coffee' not 'use AI more')",
          "4. **Choose your primary tool** for this practice (ChatGPT or Claude) and explain why it fits",
          "5. **Write it down** — commitments we articulate are more likely to stick",
        ],
        deliverable:
          "A brief statement of: (1) Your specific daily AI practice, (2) What existing habit it's attached to, (3) Which tool you'll use and why",
        estimatedTime: "5 minutes",
        starterPrompt:
          "Help me design a sustainable daily AI practice. I want to spend about 10 minutes each day building my AI skills. My current morning routine includes [describe your routine]. What's one specific AI practice I could add that would compound over time?",
        successCriteria: [
          "Your practice is specific (not vague like 'use AI more')",
          "It's attached to an existing habit or time",
          "It's small enough to actually do daily (under 15 minutes)",
          "You've chosen a tool and can explain why it fits",
        ],
      },
    },

    // === WEEK 2 PREVIEW ===
    {
      id: "week2-preview",
      type: "textWithBullets",
      content: {
        title: "Coming Up: Week 2",
        paragraphs: ["Next week expands your toolkit with research and analysis capabilities:"],
        bullets: [
          "**Day 8:** Gemini Fundamentals — AI-powered search that cites sources",
          "**Day 9:** Research Workflow Mastery — Finding and synthesizing information",
          "**Day 10:** Gemini Multimodal AI — Google's AI for images, voice, and integration",
          "**Day 11:** AI-Powered Note Taking — Organizing knowledge with AI",
          "**Day 12:** Document Analysis Deep Dive — Extracting insights from long documents",
          "**Day 13:** Data Analysis Basics — Finding patterns in spreadsheets",
          "**Day 14:** Week 2 Review + Practice — Consolidating your research skills",
        ],
      },
    },

    // === CLOSING ===
    {
      id: "closing",
      type: "highlightCard",
      content: {
        heading: "You're 25% Through the Challenge!",
        insights: [
          "You've built foundational AI skills that most people don't have",
          "You now understand how to make these skills permanent through daily practice",
          "Week 2 will add research and analysis tools to your growing toolkit",
          "The compound effect is already working—each day builds on the last",
          "Keep showing up. Transformation happens through consistency, not intensity.",
        ],
      },
    },
  ],
};

export default lessonDay7;
