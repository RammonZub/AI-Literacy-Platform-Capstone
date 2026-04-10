/**
 * Lesson 1.12: Your Path Forward
 *
 * PURPOSE: Help learners leave the course with a realistic next-step plan they can keep using
 *
 * FORMAT: Article with hero, knowledge checks, reflection, and highlight cards
 *
 * KEY CONCEPTS:
 * - What learners have accomplished in AI Fundamentals
 * - The most useful next courses to take
 * - A simple daily habit for staying consistent
 * - Turning learning into one real next step
 *
 * Duration: 16 minutes
 * XP: Base 50 x 0.8 (<10min reading) x 1.0 (Beginner) + 20 bonus = 60 XP
 */

import type { Lesson } from "@/types/content";

export const lesson_1_12: Lesson = {
  id: "foundations-12",
  chapterId: "ch4-getting-started",
  moduleId: "01-skills-foundations",
  lessonCategory: "review",
  title: "Your Path Forward",
  description: "Turn what you learned into a simple plan you can keep using.",
  order: 13,
  estimatedMinutes: 16,
  format: "article",
  coverImage: "/images/courses/lessons/modules/brain-memory-and-thinking-neural-network.webp",
  coverTitle: "Your Path Forward",
  xpReward: 60,

  imageSearchTerms: [
    "learning roadmap journey milestone",
    "future planning goal achievement",
    "path forward progress success",
  ],

  sections: [
    // === HERO SECTION ===
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/01-skills-foundations/foundations-12-cover.webp",
        imageAlt: "Your AI Journey Roadmap",
        title: "Your Path Forward",
        subtitle: "A simple next step so the course turns into a habit, not just a nice idea.",
      },
    },

    // === OPENING ===
    {
      id: "opening",
      type: "text",
      content: {
        paragraphs: [
          "**Congratulations on completing the course.**",
          "",
          "You do not need to know everything yet. You just need a small plan you can actually keep.",
          "",
          "This lesson is here to help you leave with momentum instead of a vague feeling.",
        ],
      },
    },

    // === WHAT YOU'VE LEARNED ===
    {
      id: "what-you-learned",
      type: "text",
      content: {
        title: "What You've Learned So Far",
        paragraphs: [
          "In this course, you learned what AI is, why it can feel overwhelming, and where it actually helps. You saw that ChatGPT is a sensible place to begin, learned that other tools exist for specific jobs, and got a first look at how to use AI in real work without overthinking it.",
          "",
          "You also practiced safer habits, tried a real workflow, and built a simple mental map you can keep using.",
        ],
      },
    },

    // === KEY TAKEAWAYS ===
    {
      id: "key-takeaways",
      type: "highlightCard",
      content: {
        heading: "Module 1 Key Takeaways",
        insights: [
          "AI works best when you give it clear context",
          "You do not need to master every tool to get value",
          "Small, repeatable use beats random experimentation",
          "Human judgment still matters",
        ],
      },
    },

    // === THE ROAD AHEAD ===
    {
      id: "road-ahead",
      type: "text",
      content: {
        title: "The Road Ahead",
        paragraphs: [
          "If you want to keep going, the next modules build on this foundation in a simple order:",
          "",
          "**AI Productivity** helps you use AI on recurring work like writing, meetings, notes, research, and follow-through.",
          "",
          "**Prompt Engineering** helps you get better results from your prompts, fix weak answers, and build a reusable prompt library.",
          "",
          "Those two courses are where the basics turn into daily use.",
        ],
      },
    },

    // === KNOWLEDGE CHECK 1 ===
    {
      id: "knowledge-check-1",
      type: "knowledgeCheck",
      content: {
        question: "What is the best next step after finishing AI Fundamentals?",
        options: [
          "Try every new AI tool that launches this week",
          "Use AI on one real task you already do",
          "Ignore AI until it feels less noisy",
          "Jump straight into advanced automation",
        ],
        correctAnswer: 1,
        explanation:
          "The course is most useful when you apply it to one real task. That is how the basics turn into a habit.",
        hint: "Think about the smallest step that would help you keep going.",
      },
    },

    // === WHY THE NEXT COURSES MATTER ===
    {
      id: "why-prompting",
      type: "text",
      content: {
        title: "Why The Next Courses Matter",
        paragraphs: [
          "Most people ask AI vague questions and get vague answers back.",
          "",
          "Prompting is just learning how to ask for what you actually need.",
          "",
          "**What you'll learn next:**",
          "- how to give better context",
          "- how to ask for the shape you need",
          "- how to improve a weak answer without starting over",
          "- how to build habits that make the work easier next time",
          "",
          "**By the end of AI Productivity and Prompt Engineering:** your AI work should feel calmer, clearer, and more repeatable.",
        ],
      },
    },

    // === AI FOR CORE WORK TASKS ===
    {
      id: "core-tasks",
      type: "text",
      content: {
        title: "AI For Core Work Tasks",
        paragraphs: [
          "The next courses focus on practical work: writing, meeting notes, summaries, research, and simple workflows you can reuse. The goal is not to make AI the center of your job. The goal is to make it useful in the parts of your job that currently take too long.",
        ],
      },
    },

    // === KNOWLEDGE CHECK 2 ===
    {
      id: "knowledge-check-2",
      type: "knowledgeCheck",
      content: {
        question: "What should AI feel like in your workflow after the next two courses?",
        options: [
          "A random side project you use once in a while",
          "A tool that helps with recurring work and saves time",
          "Something only experts can use",
          "A replacement for your own thinking",
        ],
        correctAnswer: 1,
        explanation:
          "The next courses are meant to make AI feel practical and normal, not mysterious.",
        hint: "Think about the kind of tool you would actually keep using.",
      },
    },

    // === MAKING IT STICK ===
    {
      id: "making-it-stick",
      type: "text",
      content: {
        title: "Making It Stick",
        paragraphs: [
          "**15 minutes a day is enough.**",
          "",
          "**The formula:** Trigger -> Action -> Reward",
          "",
          "**Trigger:** Pick one regular moment in your day, like morning coffee, lunch, or the end of the workday.",
          "",
          "**Action:** Use AI on one real task, not a pretend exercise.",
          "",
          "**Reward:** Notice what got easier and keep the useful part.",
          "",
          "**The key:** Small and steady beats occasional and intense.",
        ],
      },
    },

    // === KNOWLEDGE CHECK 3 ===
    {
      id: "knowledge-check-3",
      type: "knowledgeCheck",
      content: {
        question: "What's the MOST important factor in making AI skills stick?",
        options: [
          "Using the newest tool every week",
          "Consistent daily practice (15 minutes)",
          "Reading about AI for hours each week",
          "Following every AI news source",
        ],
        correctAnswer: 1,
        explanation:
          "Consistency is the key to building any new skill. Small daily practice works better than occasional marathon sessions.",
        hint: "Think about the habit-building formula: Trigger -> Action -> Reward.",
      },
    },

    // === PICK YOUR TIME ===
    {
      id: "pick-time",
      type: "text",
      content: {
        title: "Pick Your Time",
        paragraphs: [
          "**Morning learners:**",
          "- Fresh mind, fewer distractions",
          "- A clean start before the day gets busy",
          "- Easier to protect before meetings and messages pile up",
          "",
          "**Lunch learners:**",
          "- A natural reset in the middle of the day",
          "- Good use of a short break",
          "- Helps you return to work with one useful idea",
          "",
          "**Evening learners:**",
          "- A quiet way to reflect on the day",
          "- Good for planning how to use AI tomorrow",
          "- Helps you wind down with something useful",
          "",
          "**What matters:** Pick a time you can actually protect.",
        ],
      },
    },

    // === STAY ON TRACK ===
    {
      id: "stay-on-track",
      type: "text",
      content: {
        title: "Stay On Track",
        paragraphs: [
          "Strategies for maintaining momentum:",
          "",
          "**Track your progress** so you can see what you have actually finished.",
          "",
          "**Build streaks** if that helps you, but do not make them the only thing that matters.",
          "",
          "**Write down your goal** so it feels real enough to return to.",
          "",
          "**When you miss a day**, just start again the next day. Missing one day is normal.",
        ],
      },
    },

    // === KNOWLEDGE CHECK 4 ===
    {
      id: "knowledge-check-4",
      type: "knowledgeCheck",
      content: {
        question: "What should you do if you miss a day of learning?",
        options: [
          "Start over from the beginning",
          "Give up because you broke your streak",
          "Just get back on track the next day",
          "Double up on lessons to catch up",
        ],
        correctAnswer: 2,
        explanation:
          "Missing a day is normal and doesn't mean you've failed. The key is to get back on track immediately.",
        hint: "Think about what's sustainable long-term.",
      },
    },

    // === WRITE IT DOWN ===
    {
      id: "write-it-down",
      type: "text",
      content: {
        title: "Write It Down",
        paragraphs: [
          "**My AI learning goal:** ________________________________",
          "",
          '**Be specific:** Not "be better at AI" but "use AI for [specific task] and save [small amount of time] each week."',
          "",
          "**My chosen learning time:** ________________________________",
          "",
          "**One thing I'll do with AI next week:** ________________________________",
          "",
          "**This goal will keep the habit from drifting.**",
        ],
      },
    },

    // === REFLECTION PROMPT ===
    {
      id: "reflection",
      type: "reflectionPrompt",
      content: {
        title: "Reflect On Your Progress",
        intro: "A quick reflection helps the course stick and makes the next step easier to choose.",
        reflections: [
          {
            question: "What feels clearer now?",
            placeholder: "Name one thing that feels less confusing than it did before...",
          },
          {
            question: "What is one task you could use AI on this week?",
            context: "Pick something real and small.",
            placeholder: "Write the task and where you might try it...",
          },
          {
            question: "What still feels uncertain?",
            placeholder: "A useful next course starts with a real gap...",
          },
        ],
        allowWriting: true,
        encouragement: "Keep it simple. The point is to notice what you now understand and what still needs practice.",
      },
    },

    // === CLOSING HIGHLIGHT ===
    {
      id: "closing-highlight",
      type: "highlightCard",
      content: {
        heading: "You're Off To A Good Start",
        insights: [
          "You know enough to keep going without feeling lost",
          "You have one real workflow and a simple way to repeat it",
          "The next courses will make AI more useful in day-to-day work",
          "Small practice will do more for you than trying to learn everything at once",
        ],
      },
    },

    // === CLOSING ===
    {
      id: "closing",
      type: "textWithImage",
      content: {
        title: "Keep Showing Up",
        paragraphs: [
          "15 minutes a day is enough to keep the habit alive.",
          "",
          "You do not need to rush it.",
          "",
          "**See you in AI Productivity.**",
        ],
        image: {
          src: "/images/courses/lessons/modules/ai-technology-artificial-intelligence-concept.webp",
          alt: "Journey forward",
          caption: "The next step is simply to keep going",
        },
      },
    },

    // === TOOL REFERENCE ===
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "general",
        action: "Lock in your commitment",
        task: "Write down your AI learning goal and chosen daily practice time",
        feature: "Notes app or journal",
        tip: "Writing it down makes the plan easier to return to when the week gets busy.",
      },
    },

    // === ACTIONABLE TASK (Inline) ===
    {
      id: "main-task",
      type: "actionableTask",
      content: {
        title: "Lock In Your Learning Commitment",
        purpose: "Turn the course into something you will actually keep doing.",
        instructions: [
          "Write down one specific way you want to use AI",
          "Choose a daily time that feels realistic",
          "Write down one thing you want to try in the next week",
          "Optional: Tell someone so it feels a little more real",
        ],
        deliverable: "Your goal, your chosen learning time, and one next-week AI task",
        estimatedTime: "5 minutes",
        starterPrompt:
          "My AI Learning Commitment:\n\n**Goal:** I want to use AI for...\n\n**Learning Time:** I will learn at [time] each day because...\n\n**Next task:** This week I will try AI on...",
        successCriteria: [
          "Your goal is specific",
          "You chose a realistic time",
          "You identified one real task",
          "The plan feels doable, not ambitious for its own sake",
        ],
      },
    },
  ],
};
