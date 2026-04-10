/**
 * Day 21: From Idea to Automation Pipeline
 *
 * CONCEPT LESSON - Connecting validation to automation
 *
 * Teaching: How to connect validation -> implementation -> automation,
 * the build-measure-learn cycle for AI workflows, when to validate vs automate.
 *
 * ENDING: actionableChallenge - Pipeline challenge at the end
 * NO gamification
 */

import type { Lesson } from "@/types/content";

export const lessonDay21: Lesson = {
  id: "day-21",
  chapterId: "chapter4-business",
  moduleId: "10-challenge-28-day-ai",
  title: "From Idea to Automation Pipeline",
  description:
    "Learn how to connect validation, implementation, and automation into a complete workflow. Master the build-measure-learn cycle for AI-powered business processes.",
  order: 21,
  format: "article",
  lessonCategory: "tutorial",
  estimatedMinutes: 15,

  imageSearchTerms: [
    "automation pipeline workflow",
    "business process automation",
    "idea to implementation flow",
  ],

  sections: [
    // === HERO SECTION ===
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-21-cover.webp",
        imageAlt: "From Idea to Automation Pipeline",
        title: "Day 21: From Idea to Automation Pipeline",
        subtitle:
          "Connect validation, implementation, and automation into a powerful workflow that turns ideas into reliable systems.",
      },
    },

    // === OPENING ===
    {
      id: "opening",
      type: "text",
      content: {
        paragraphs: [
          "You've learned two powerful skills this week. Day 19 taught you to validate ideas with real data before investing time and money. Day 20 showed you how to automate repetitive tasks with Zapier. But here's what most people miss: these aren't separate skills. They're stages in a pipeline.",
          "The most successful AI users don't just validate ideas or just automate tasks. They build systems where validated ideas flow naturally into automation. They know when to research, when to build, and when to hand off to automated workflows. Today, you'll learn to see your work as a pipeline, connecting these skills into something greater than the sum of its parts.",
        ],
      },
    },

    // === SECTION 1: The Validation-Automation Connection ===
    {
      id: "validation-automation-connection",
      type: "text",
      content: {
        title: "The Validation-Automation Connection",
        paragraphs: [
          "Validated ideas deserve automation. This simple principle transforms how you approach both skills. When you validate an idea with Gemini and discover real market demand, documented customer pain points, and clear competitor gaps, you're not just gathering information. You're building the business case for investment, and that investment often includes automation.",
          "Consider a practical example. You validate that small business owners struggle with invoice follow-ups, a pain point confirmed across forums and competitor reviews. You also discover that current solutions are either too expensive or too complex. This validation does more than confirm the opportunity; it tells you exactly what to automate. You're not automating randomly. You're automating the specific workflow that your research identified as painful and underserved.",
          "The connection works in reverse too. When you notice a task you're repeatedly automating for yourself or others, that's a signal to validate. Is this a broader problem? Would others pay for this automation? The act of automating something repeatedly is itself a form of validation that you've found a recurring pain point. Your automation instincts and validation research should inform each other constantly.",
        ],
      },
    },

    // === SECTION 2: The Build-Measure-Learn Cycle ===
    {
      id: "build-measure-learn",
      type: "text",
      content: {
        title: "The Build-Measure-Learn Cycle for AI Workflows",
        paragraphs: [
          "The most effective AI users treat their workflows as experiments, not fixed solutions. You validate an idea, build a simple version, measure how it performs, and learn from the results. Then you repeat. This cycle, borrowed from lean startup methodology, is perfectly suited to AI workflows because AI tools make each stage faster and cheaper than ever before.",
          "In the build phase, you create the minimum viable version of your solution. Using ChatGPT or Claude, you draft the emails, templates, or content. Using Zapier, you connect the basic trigger and action. You're not trying to build the perfect system. You're trying to build something that works well enough to test. AI accelerates this phase dramatically; what used to take weeks of development now takes hours of prompting.",
          "The measure phase is where many people fail. They build something and assume it works. But you need real data. How many emails did your automated follow-up sequence send? What percentage got responses? How much time did you save compared to doing it manually? Zapier provides task history that shows exactly when automations ran and whether they succeeded. This data transforms gut feelings into actionable insights.",
          "The learn phase is where you decide what happens next. Did your automation save meaningful time? Did your validated idea actually resonate with real customers? Based on what you measured, you have three choices: persevere and improve the current approach, pivot to a different angle on the same problem, or abandon this direction entirely and move to something else. AI makes all three options cheap. The cost of being wrong is low when you can rebuild in minutes.",
        ],
      },
    },

    // === VISUAL BREAK ===
    {
      id: "cycle-visual",
      type: "textWithImage",
      content: {
        paragraphs: [
          "**The Continuous Improvement Loop**",
          "",
          "Think of your AI workflows as living systems, not finished products. Each cycle of building, measuring, and learning makes your pipeline more effective. Over time, small improvements compound into dramatic efficiency gains.",
        ],
        image: {
          src: "/images/courses/modules/10-challenge-28-day-ai/day-21-inline-1.webp",
          alt: "Build measure learn cycle visualization",
        },
      },
    },

    // === SECTION 3: When to Automate ===
    {
      id: "when-to-automate",
      type: "text",
      content: {
        title: "When to Automate: A Decision Framework",
        paragraphs: [
          "Not everything should be automated. Automation has costs: setup time, maintenance, and the risk of automating something that shouldn't exist at all. Before you build any automation, run it through this decision framework to ensure you're investing your time wisely.",
          "First, ask whether the task is truly repetitive. If you do something once a month, automation might not be worth it. The setup time could exceed the lifetime savings. But if you do something daily or weekly, even small time savings compound quickly. A five-minute task automated daily saves over thirty hours per year. The frequency of repetition is your primary filter for automation investment.",
          "Second, consider whether the task is stable or changing. If you're still figuring out how to do something well, don't automate it yet. You'll lock in a suboptimal process and make it harder to improve. Wait until you've done the task manually enough times to understand the nuances. Then automate the version that actually works. Premature automation is a form of technical debt.",
          "Third, evaluate the cost of errors. If an automation fails or produces bad output, what happens? For low-stakes tasks like organizing files or formatting routine emails, errors are annoying but not catastrophic. These are great automation candidates. For high-stakes tasks like customer communications or financial processes, build in safeguards. Have humans review automated outputs, or start with automation that assists rather than replaces human judgment.",
        ],
      },
    },

    // === WEEK RECAP ===
    {
      id: "week-recap",
      type: "textWithBullets",
      content: {
        title: "Business + Automation: What You've Learned",
        paragraphs: [
          "This week gave you the foundation for AI-powered business workflows. Here's what you now understand:",
        ],
        bullets: [
          "**Day 19 (Idea Validation):** How to use Gemini to research market size, analyze competitors, identify customer pain points, and validate assumptions with cited sources before investing time and money.",
          "**Day 20 (Zapier & Automation):** How to connect AI tools to automate repetitive workflows, create triggers and actions, and build simple automation chains that save hours of manual work.",
          "**Day 21 (Pipeline Thinking):** How to connect validation, implementation, and automation into a complete workflow, apply the build-measure-learn cycle, and decide when automation is worth the investment.",
        ],
      },
    },

    // === KEY INSIGHTS ===
    {
      id: "key-insights",
      type: "highlightCard",
      content: {
        heading: "Pipeline Thinking: Key Principles",
        insights: [
          "Validated ideas deserve automation. Research tells you what's worth building.",
          "Build-measure-learn: Treat workflows as experiments, not fixed solutions.",
          "Automate what's repetitive, stable, and low-risk to fail.",
          "Don't automate processes you haven't figured out yet.",
          "Your automation instincts and validation research should inform each other.",
        ],
      },
    },

    // === ACTIONABLE PRACTICE (Quiz at END) ===
    {
      id: "pipeline-quiz",
      type: "quiz",
      content: {
        context:
          "**Test Your Pipeline Thinking** — Before the challenge, check your understanding of when and how to connect validation to automation.",
        quiz: {
          question:
            "You've validated that a problem exists and competitors are underserving customers. What's the best next step?",
          options: [
            "Immediately build complex automation to solve the problem at scale",
            "Build a minimum viable version, measure how it performs, then decide whether to automate further",
            "Skip automation entirely and do everything manually to keep it simple",
            "Wait until you have more validation data before building anything",
          ],
          correctAnswer: 1,
        },
      },
    },

    // === MAIN CHALLENGE ===
    {
      id: "main-challenge",
      type: "actionableTask",
      content: {
        title: "Pipeline Challenge: Validate, Build, Automate",
        purpose:
          "Put the complete pipeline into practice. Take an idea from validation through building to identifying automation opportunities.",
        instructions: [
          "**This challenge connects everything you learned this week.**",
          "",
          "**PHASE 1: VALIDATE (10 minutes)**",
          "1. Choose an idea you want to test (business, project, or workflow improvement)",
          "2. Use Gemini to research:",
          "   - Is this a real problem people have?",
          "   - What solutions already exist?",
          "   - What gaps remain unfilled?",
          "3. Write down: Is this worth pursuing? (Yes/No + one reason)",
          "",
          "**PHASE 2: BUILD (10 minutes)**",
          "4. If validated, create a minimum viable solution:",
          "   - Use ChatGPT/Claude to draft templates, emails, or content",
          "   - Keep it simple—this is a test, not a final product",
          "",
          "**PHASE 3: IDENTIFY AUTOMATION (5 minutes)**",
          "5. Look at your solution and identify:",
          "   - What part happens repeatedly?",
          "   - Could Zapier automate any trigger-action pairs?",
          "   - Is this stable enough to automate, or does it need more testing?",
          "",
          "**PHASE 4: DECIDE (2 minutes)**",
          "6. Make a decision: Persevere (improve current approach), Pivot (try different angle), or Abandon (move to something else)",
        ],
        deliverable:
          "A completed pipeline worksheet with: validation findings, minimum viable solution draft, automation opportunities identified, and a clear decision on next steps.",
        estimatedTime: "25-30 minutes",
        starterPrompt:
          "[Context] I am validating an idea for [describe your idea].\n\n[Research Task] Help me understand:\n1. Is this a real problem? What evidence exists?\n2. What solutions already exist? What are their weaknesses?\n3. What specific gap could I fill?\n\nInclude sources for all claims.",
        successCriteria: [
          "Completed validation research with cited sources",
          "Made a clear Yes/No decision on whether to pursue",
          "Created a minimum viable solution (draft, template, or outline)",
          "Identified at least one potential automation opportunity",
          "Documented a clear next-step decision (persevere/pivot/abandon)",
        ],
      },
    },

    // === WHAT'S NEXT PREVIEW ===
    {
      id: "whats-next-preview",
      type: "textWithBullets",
      content: {
        title: "Coming Up: Personal Life & Mastery",
        paragraphs: [
          "You've completed the Business + Automation chapter. The final stretch focuses on personal applications and building lasting AI habits:",
        ],
        bullets: [
          "**Day 22:** Learning & Skill Development — Accelerate how you acquire new knowledge",
          "**Day 23:** Custom GPTs for Personal Use — Build your own AI assistants",
          "**Day 24:** Health & Fitness Planning — AI for wellness and exercise",
          "**Day 25:** AI Agents Overview — The cutting edge of AI automation",
          "**Day 26:** Building Your AI Workflow System — Create your personal setup",
          "**Day 27:** AI Habits for Long-Term Success — Make AI skills stick",
          "**Day 28:** Your 90-Day AI Mastery Roadmap — What comes after the challenge",
        ],
      },
    },

    // === CLOSING MOTIVATION ===
    {
      id: "closing",
      type: "highlightCard",
      content: {
        heading: "You're 75% Through the Challenge!",
        insights: [
          "You can validate ideas with AI research before investing",
          "You can build automations to save time on repetitive tasks",
          "You understand how to connect validation to automation in a pipeline",
          "You know when to automate and when to wait",
          "7 days remain: Personal life applications and mastery await",
        ],
      },
    },
  ],
};

export default lessonDay21;
