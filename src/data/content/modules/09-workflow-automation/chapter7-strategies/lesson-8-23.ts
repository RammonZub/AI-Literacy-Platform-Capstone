/**
 * Lesson 8.23: Building Your Personal AI Stack
 *
 * CHAPTER: 7 - Advanced Strategies
 * LESSON: 1 of 3 - Personal AI Stack
 *
 * DURATION: 15 minutes (strategy planning)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach users how to design and build an integrated AI workflow
 * tailored to their specific needs and daily routines.
 *
 * KEY RESPONSIBILITIES:
 * - Assess current tools and identify friction points
 * - Map AI-enhanced workflows for morning, workday, and evening
 * - Provide a framework for starting small and scaling up
 * - Show how to measure the impact of AI integrations
 */

import type { Lesson } from "@/types/content";

export const lesson_8_23: Lesson = {
  id: "lesson-8-23",
  chapterId: "ch8-7-strategies",
  moduleId: "09-workflow-automation",
  title: "Building Your Personal AI Stack",
  description: "Design an integrated AI workflow tailored to your needs",
  order: 23,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "theory",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-23-cover.webp",
        imageAlt: "Strategic planning workspace with organized layers and architecture",
        title: "Building Your Personal AI Stack",
        subtitle:
          "Design an intentional collection of AI tools that work together to amplify your capabilities",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Stack Mindset",
        paragraphs: [
          "Think of your AI tools like a technology stack. Each layer serves a specific purpose, and the best stacks are intentional, not accidental.",
          "Most people collect AI tools haphazardly—ChatGPT one day, Claude the next—without sequencing. Module 9 expects the opposite: an intentional stack bounded by the four core tools.",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Assessing Your Daily Tools",
        paragraphs: [
          "Before adding AI to your workflow, map what you actually do each day. This audit reveals where AI can have the biggest impact. Start by listing your core applications: email, documents, messaging, calendar, note-taking, and research tools. These are the foundation of your daily work and represent the most immediate opportunities for AI enhancement.",
          "Next, track where you spend the most mental energy throughout your day. These high-cognitive-load activities are prime candidates for AI assistance. When you find yourself struggling to maintain focus or feeling drained after certain tasks, that's a signal that AI could help. Similarly, identify your friction points: those moments that feel slow, repetitive, or mentally draining. These are often the easiest wins when you start integrating AI.",
          "Pay special attention to decision bottlenecks, those points where you get stuck analyzing options or drafting responses. These deliberation moments are where AI excels at providing initial direction that you can then refine with your judgment. Finally, flag your creative blocks, the situations where you struggle to start or iterate on ideas. AI is particularly powerful as a creative catalyst, helping you overcome the blank page problem and explore directions you might not have considered.",
        ],
      },
    },
    {
      id: "section-3",
      type: "textWithImage",
      content: {
        title: "Your AI-Enhanced Workflow Map",
        paragraphs: [
          "Now layer AI into your daily routines. The goal isn't to use AI everywhere, but to place it strategically where it removes friction and amplifies output.",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-23-inline-1.webp",
        imageAlt: "Morning routine planning with coffee and organized schedule",
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Morning Routine AI Layer",
        paragraphs: [
          "Start your day with AI-powered clarity instead of reactive chaos. Email triage improves when you use an approved chat tool for summaries and first-pass replies, then verify tone yourself. Aim to batch similar messages so each pass has a clear handoff instead of endlessly regenerating.",
          "Daily planning also benefits enormously from AI assistance. Ask your AI to prioritize tasks based on deadlines and importance, and you will start each day with a clear sense of direction rather than decision paralysis. Quick research questions that might have derailed your focus for twenty minutes can now be answered in seconds, keeping you on track. Finally, meeting preparation that used to take fifteen minutes of scrambling can be handled in moments with AI-generated agendas and briefing notes. Your mornings become proactive rather than reactive.",
        ],
      },
    },
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Workday Flow AI Layer",
        paragraphs: [
          "During deep work hours, AI becomes your thinking partner. Draft generation transforms from a blank-page struggle into a rapid iteration process. Get your first drafts in seconds, then apply your expertise to refine and personalize them. This approach eliminates the hardest part of writing, getting started, while preserving your unique voice and judgment in the final output.",
          "Research acceleration means quick lookups and fact-checking without the context switching that destroys focus. When you need to verify something or explore a tangent, AI provides instant answers that keep your flow intact. For technical work, code assistance allows you to debug, explain, or generate code snippets instantly, turning frustrating troubleshooting sessions into quick problem-solving exchanges. Document review also becomes dramatically faster when you can summarize long documents and extract key points in seconds rather than reading everything manually.",
        ],
      },
    },
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Evening Wrap-Up AI Layer",
        paragraphs: [
          "End your day with reflection and preparation for tomorrow. A day summary generated with AI assistance helps you reflect on what worked and what did not, turning each day into a learning opportunity rather than just another checked-off list. This reflective practice compounds over time, making you progressively more effective.",
          "Tomorrow preparation becomes effortless when you can generate task lists and priorities based on what you accomplished today and what is coming up. Learning consolidation ensures that insights and information you encountered during the day get summarized and stored for future reference, preventing valuable knowledge from slipping away. Finally, evening often provides the mental space for creative projects, and AI makes an excellent sounding board for brainstorming sessions when your own ideas need a catalyst or counterpoint.",
        ],
      },
    },
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "The Progressive Integration Approach",
        insights: [
          "**Start with one integration**: Pick your highest-friction task and add AI there first",
          "**Build the habit**: Use it daily for two weeks until it becomes automatic",
          "**Then add the next**: Stack integrations slowly, not all at once",
          "Rushing to adopt everything at once leads to abandonment. Slow and steady wins here.",
        ],
      },
    },
    {
      id: "section-8",
      type: "textWithImage",
      content: {
        title: "Scaling Your Stack",
        paragraphs: ["Once your foundation is solid, you can strategically expand."],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-23-inline-1.webp",
        imageAlt: "Growing business analytics and scaling strategy visualization",
      },
    },
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Scaling Up Your AI Stack",
        paragraphs: [
          "After mastering your initial integration, expand strategically. The key is to add complementary integrations that build on your existing workflow rather than starting from scratch in new areas. If you have email automated, the natural next step is calendar management, since these tools interact constantly. This adjacent expansion approach means each new integration reinforces the value of previous ones.",
          "As you develop effective prompts, build a personal library of your best ones. Save them for reuse and refinement, treating them as valuable intellectual property that encodes your expertise and preferences. This library becomes increasingly valuable over time as you iterate and improve your prompts based on results. Share your discoveries with your team to multiply the impact, teaching others the workflows you've found effective.",
          "Documentation is essential for scaling. Create templates that capture your AI workflows so they become repeatable, not just for yourself but for anyone who might benefit from your approach. These templates transform ad-hoc solutions into reliable processes. Finally, as your foundation solidifies, layer in specialized tools designed for your particular field. Domain-specific AI applications can provide expertise that general-purpose models cannot match, but they work best when built on a solid foundation of general AI literacy.",
        ],
      },
    },
    {
      id: "section-10",
      type: "text",
      content: {
        title: "Measuring Your Stack Impact",
        paragraphs: [
          "How do you know if your AI stack is actually working? The most direct metric is time saved: hours per week reclaimed from manual tasks that AI now handles. Track this consciously for a few weeks and you will likely be surprised by how much accumulates. Beyond time, look at tasks completed: has your output volume increased? Has quality improved? These tangible measures provide concrete evidence of value.",
          "Stress reduction is a subtler but equally important metric. Pay attention to your subjective sense of mental load and decision fatigue throughout the day. Are you ending workdays feeling more energized or less drained? Consistency matters too: are you shipping work more reliably, with fewer gaps between intention and completion? Finally, consider your learning velocity. How fast are you acquiring new skills with AI assistance? When information and feedback come quickly, your growth accelerates dramatically.",
        ],
      },
    },
    {
      id: "section-11",
      type: "quickPrompt",
      content: {
        heading: "Map Your Personal Stack",
        description:
          "Use this prompt to audit your current workflow and identify AI opportunities.",
        promptText:
          "Help me audit my daily workflow. I want to identify the best places to integrate AI tools like ChatGPT for speed and other AI for depth.\n\nHere's what I do daily:\n[MORNING: List your morning tasks]\n[WORKDAY: List your core work activities]\n[EVENING: List your end-of-day routines]\n\nFor each area, tell me:\n1. Where AI could have the biggest impact\n2. Which AI tool would be best for that task\n3. How much time I might save\n4. A specific prompt I could use to start",
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Use ChatGPT Console",
        task: "Audit your daily workflow to identify AI integration opportunities",
        feature: "Rapid response for quick workflow analysis",
        tip: "Start with your highest-friction task first - the one that feels most repetitive or draining",
      },
    },
    {
      id: "section-11-actionable",
      type: "actionableTask",
      content: {
        title: "Your Turn: Map Your Personal AI Stack",
        purpose:
          "Design your complete AI stack with specific tools for morning, workday, and evening routines.",
        instructions: [
          "Audit your current daily tasks across morning, workday, and evening",
          "For each routine phase, identify the highest-friction task",
          "Assign a specific AI tool to each friction point",
          "Create one starter prompt for each phase",
          "Plan to implement one integration per week starting next week",
        ],
        deliverable: "A personal AI stack map with tools and prompts for each routine phase",
        estimatedTime: "12-15 minutes",
        starterPrompt:
          "Help me design my AI stack. Here's what I do daily:\n\n**Morning**: [list tasks]\n**Workday**: [list tasks]\n**Evening**: [list tasks]\n\nFor each area, tell me which AI tool to use first and provide a starter prompt.",
        successCriteria: [
          "Mapped all three daily phases with specific tasks",
          "Assigned appropriate AI tools to each friction point",
          "Created 3 ready-to-use starter prompts",
          "Have a one-integration-per-week implementation plan",
        ],
      },
    },
    {
      id: "section-12",
      type: "completion",
      content: {
        title: "Stack Building Skills Ready",
        description:
          "You now have a framework for building your personal AI stack. Remember: start small, build habits, then scale. The best AI users aren't the ones with the most tools, they're the ones with the most intentional stack.",
        xpReward: 100,
        buttonText: "Complete Stack Building",
      },
    },
  ],
};
