/**
 * Lesson 7.27: Your AI Mastery System - Prompt Library, Routines, and 90-Day Plan
 *
 * CHAPTER: 8 - Building Your AI-Powered Future
 * LESSON: 1 of 1 - Final Lesson
 *
 * DURATION: 15 minutes (capstone)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Create a lasting personal AI system with organized prompts, sustainable
 * routines, and a clear 90-day mastery plan for continued growth.
 *
 * KEY RESPONSIBILITIES:
 * - Provide a framework for organizing prompts into a reusable library
 * - Establish daily and weekly AI routines that fit busy professional schedules
 * - Offer strategies for staying current as AI evolves
 * - Guide knowledge sharing and teaching others
 * - Deliver a concrete 30-60-90 day plan for AI mastery
 * - Celebrate course completion with a sense of accomplishment
 */

import type { Lesson } from "@/types/content";

export const lesson_7_27: Lesson = {
  id: "lesson-7-27",
  chapterId: "ch7-8-future",
  moduleId: "07-tools-gemini",
  title: "Your AI Mastery System",
  description:
    "Build your complete personal AI system with prompt library, routines, and a 90-day mastery plan",
  order: 27,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "challenge",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-27-cover.webp",
        imageAlt: "Future growth and success with AI technology",
        title: "Your AI Mastery System",
        subtitle: "The final step: Building lasting habits for AI-powered productivity",
      },
    },
    // ===========================================================================
    // SECTION 1: Introduction
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Bringing It All Together",
        paragraphs: [
          "You've learned the fundamentals, explored Workspace integrations, mastered mobile AI, and practiced responsible use. Now it's time to build a lasting system that makes AI a seamless part of your professional life.",
          "",
          "This final lesson brings everything together into a complete Personal AI System you can use and refine for years to come.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Your Prompt Library
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Building Your Prompt Library",
        paragraphs: [
          "Every prompt you've crafted during this course is valuable. Instead of reinventing the wheel each time, organize these into a personal library you can quickly access and reuse.",
          "",
          "A well-organized prompt library transforms occasional AI use into consistent, efficient productivity.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Prompt Library Organization
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "How to Organize Your Prompts",
        paragraphs: [
          "Creating a simple organization system for your prompts pays dividends every time you use AI. You don't need fancy software to make this work. A Google Doc, your phone's Notes app, or a Notion page all serve the purpose perfectly. The key is establishing a structure you'll actually use consistently.",
          "",
          "Consider organizing prompts by task type, grouping email drafting prompts together, research prompts in another section, and analysis prompts in a third. This approach lets you quickly find the right prompt for the job at hand. Alternatively, organize by frequency with daily prompts at the top where they're easiest to access, weekly prompts below them, and occasional prompts at the bottom. This puts your most-used tools front and center.",
          "",
          "You might also organize by tool, keeping Gmail prompts separate from Docs prompts, mobile prompts separate from desktop prompts. For complex projects, consider project-based collections that group client-specific, team-specific, or initiative-specific prompts together. Whichever approach you choose, include placeholders using brackets like [CLIENT_NAME], [DATE], or [TOPIC] to make customization quick and consistent. A well-organized prompt library transforms occasional AI use into systematic productivity.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Highlight Card - Prompt Library Best Practices
    // ===========================================================================
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "Prompt Library Essentials",
        insights: [
          "Include the prompt text, when you use it, and what makes it work",
          "Note any variations you've found helpful",
          "Rate prompts 1-5 for quality to prioritize your best ones",
          "Review and prune quarterly - remove what no longer serves you",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Daily and Weekly Routines
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Creating AI Routines That Stick",
        paragraphs: [
          "The professionals who get the most from AI don't use it randomly - they have routines. Small, consistent habits compound into massive productivity gains over time.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Daily Routine
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Your Daily AI Routine (10-15 minutes)",
        paragraphs: [
          "A simple daily pattern makes AI assistance a natural part of your workflow without requiring major schedule changes. In the morning, spend about five minutes asking Gemini for a daily briefing. This might include reviewing your calendar for the day, identifying your top priority tasks, and getting a quick summary of news relevant to your industry. This sets clear direction before the day's demands begin pulling you in different directions.",
          "",
          "Midday offers an opportunity for voice-powered productivity. During your commute or a walking break, use Gemini's voice features to capture ideas that occur to you, dictate messages you need to send, or brainstorm solutions to problems you've been wrestling with. These in-between moments, often wasted, become productive thinking time. Voice input makes this possible without disrupting your movement or requiring you to stop and type.",
          "",
          "At the end of the day, take five minutes to synthesize what you accomplished, draft tomorrow's priority list, and clear your inbox with AI assistance. This closing routine creates a clean slate for the next day while the details are fresh. The pattern is simple but powerful: morning orientation, midday capture, evening wrap-up. Total time investment is just 10-15 minutes, yet the impact on your productivity and mental clarity compounds significantly over time.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Weekly Routine
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Your Weekly AI Routine (30 minutes)",
        paragraphs: [
          "Once a week, dedicate focused time to AI-assisted planning that keeps you aligned with your bigger goals. On Monday morning, spend about ten minutes on week planning with AI assistance. Review your calendar for the week, identify your top priorities across all your responsibilities, and prepare for important meetings. This weekly view helps you spot conflicts and opportunities that daily planning might miss.",
          "",
          "Wednesday offers a natural midweek check-in point. Take ten minutes to assess your progress against the priorities you set on Monday. Which items are moving forward? Which feel stuck? Use Gemini to help troubleshoot stuck items and adjust your plans based on how the week has actually unfolded. Real life rarely follows the script exactly, and midweek adjustment keeps you responsive rather than rigid.",
          "",
          "Friday afternoon is ideal for week review. Spend ten minutes documenting your accomplishments, capturing lessons learned, and preparing for the following week. This reflection transforms experience into insight and ensures you start each Monday with clarity. The weekly routine totals about 30 minutes, a small investment that dramatically improves your ability to work strategically rather than just reacting to whatever demands attention in the moment.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Staying Current
    // ===========================================================================
    {
      id: "section-8",
      type: "textWithImage",
      content: {
        title: "Staying Current as AI Evolves",
        paragraphs: [
          "AI changes rapidly. Google updates Gemini regularly with new features and capabilities. Here's how to stay informed without getting overwhelmed.",
          "",
          "**Follow Google's updates**: Check the Gemini update page monthly for new features.",
          "",
          "**Set a monthly 'AI exploration' appointment**: Spend 30 minutes experimenting with a new feature or technique.",
          "",
          "**Learn from your peers**: Share discoveries with colleagues who also use AI.",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-27-inline-1.webp",
        imageAlt: "Organized library and continuous learning",
      },
    },
    // ===========================================================================
    // SECTION 9: Teaching Others
    // ===========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Teaching Others and Sharing Knowledge",
        paragraphs: [
          "One of the best ways to solidify your own learning is to teach others. Plus, you'll help your colleagues and organization benefit from AI too.",
          "",
          "When sharing what you've learned:",
          "",
          "- Start with quick wins that provide immediate value",
          "- Focus on practical applications, not theory",
          "- Share your favorite prompts and workflows",
          "- Be honest about limitations and verification needs",
          "- Encourage questions and experimentation",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: 30-60-90 Day Plan
    // ===========================================================================
    {
      id: "section-10",
      type: "text",
      content: {
        title: "Your 30-60-90 Day Mastery Plan",
        paragraphs: [
          "Here's a structured plan to build lasting AI mastery. Adjust the timeline based on your schedule, but maintain the progression.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 11: 30-Day Plan
    // ===========================================================================
    {
      id: "section-11",
      type: "highlightCard",
      content: {
        heading: "Days 1-30: Building Daily Habits",
        insights: [
          "Use Gemini at least once every workday",
          "Create your first 10 saved prompts",
          "Master the 5-Step Prompting Framework until it's automatic",
          "Complete your daily routine 5 days per week",
          "Try voice input on mobile at least 3 times",
        ],
      },
    },
    // ===========================================================================
    // SECTION 12: 60-Day Plan
    // ===========================================================================
    {
      id: "section-12",
      type: "highlightCard",
      content: {
        heading: "Days 31-60: Integrating Workspace and Mobile",
        insights: [
          "Use Gemini in Gmail, Docs, and Sheets weekly",
          "Build 2 complete workflows (e.g., meeting prep, project tracking)",
          "Expand your prompt library to 25+ prompts",
          "Use Gemini Live for at least one productive conversation",
          "Teach one colleague something you've learned",
        ],
      },
    },
    // ===========================================================================
    // SECTION 13: 90-Day Plan
    // ===========================================================================
    {
      id: "section-13",
      type: "highlightCard",
      content: {
        heading: "Days 61-90: Advanced Applications",
        insights: [
          "Tackle complex projects with AI assistance",
          "Create 3 signature workflows for your specific role",
          "Use real-time research for at least one important decision",
          "Review and optimize your prompt library",
          "Share your AI system with your team or department",
        ],
      },
    },
    // ===========================================================================
    // SECTION 14: Quick Prompt - 90-Day Plan
    // ===========================================================================
    {
      id: "section-14",
      type: "quickPrompt",
      content: {
        heading: "Create Your 90-Day Plan Now",
        description:
          "Use this prompt with Gemini to generate your personalized 90-day AI mastery plan:",
        promptText:
          "I'm a [YOUR ROLE] and I've just completed a Gemini course. Help me create a 90-day plan to build lasting AI habits. My main work challenges are: [LIST 2-3 CHALLENGES]. My goals for using AI are: [LIST 2-3 GOALS]. Create a week-by-week plan for my first 30 days, with specific, achievable actions I can take daily.",
      },
    },
    // ===========================================================================
    // SECTION 15: Tool Reference - Gemini
    // ===========================================================================
    {
      id: "section-15",
      type: "toolReference",
      content: {
        tool: "gemini",
        action: "For this capstone exercise",
        task: "Use Gemini to generate your personalized 90-day AI mastery plan based on your role and goals",
        feature: "Extended thinking",
        tip: "The more specific you are about your challenges, the more tailored your plan will be",
      },
    },
    // ===========================================================================
    // SECTION 16: Knowledge Check 1 - Module Review
    // ===========================================================================
    {
      id: "section-knowledge-check-1",
      type: "knowledgeCheck",
      content: {
        question:
          "Which prompting framework helps structure effective AI requests with Context, Task, and Constraints?",
        options: [
          "The FAST Framework",
          "The 5-Step Prompting Framework",
          "The SMART Method",
          "The ABC System",
        ],
        correctAnswer: 1,
        explanation:
          "The 5-Step Prompting Framework (Context, Task, Format, Constraints, Examples) provides a reliable structure for crafting effective AI prompts. This framework was covered in Chapter 2.",
        hint: "Think about the framework with 5 components that starts with Context...",
      },
    },
    // ===========================================================================
    // SECTION 17: Knowledge Check 2 - Module Review
    // ===========================================================================
    {
      id: "section-knowledge-check-2",
      type: "knowledgeCheck",
      content: {
        question: "What is Gemini's key advantage when it comes to getting current information?",
        options: [
          "It has access to all private databases",
          "It can search Google in real-time and provide source links",
          "It only uses pre-2024 training data",
          "It automatically knows everything without searching",
        ],
        correctAnswer: 1,
        explanation:
          "Gemini's real-time search capability allows it to find current information on Google and provide source links for verification. This makes it especially useful for research and staying up-to-date.",
        hint: "Think about what makes Gemini different from AI models without web access...",
      },
    },
    // ===========================================================================
    // SECTION 18: Knowledge Check 3 - Module Review
    // ===========================================================================
    {
      id: "section-knowledge-check-3",
      type: "knowledgeCheck",
      content: {
        question: "What types of information should you NEVER share with any AI system?",
        options: [
          "General questions about productivity",
          "Writing and editing requests",
          "Passwords, credentials, client confidential data, and financial account numbers",
          "Questions about how AI works",
        ],
        correctAnswer: 2,
        explanation:
          "Sensitive information like passwords, credentials, confidential client data, financial details, and personal health information should never be shared with AI systems. Always sanitize prompts to remove identifying details.",
        hint: "Think about what you wouldn't write on a postcard...",
      },
    },
    // ===========================================================================
    // SECTION 19: Knowledge Check 4 - Module Review
    // ===========================================================================
    {
      id: "section-knowledge-check-4",
      type: "knowledgeCheck",
      content: {
        question:
          "When using Gemini in Google Workspace (Gmail, Docs, Sheets), what's the main benefit?",
        options: [
          "It replaces the need for human review entirely",
          "It works directly within your documents without switching apps",
          "It automatically shares all your data with Google",
          "It only works with English text",
        ],
        correctAnswer: 1,
        explanation:
          "The key benefit of Workspace integration is seamless AI assistance directly within your documents, emails, and spreadsheets. You can draft, summarize, and analyze without leaving your work context.",
        hint: "Think about what makes Workspace integration convenient...",
      },
    },
    // ===========================================================================
    // SECTION 20: Knowledge Check 5 - Module Review
    // ===========================================================================
    {
      id: "section-knowledge-check-5",
      type: "knowledgeCheck",
      content: {
        question:
          "What should you always do before publishing or sharing AI-generated content publicly?",
        options: [
          "Nothing - AI is always accurate",
          "Only check for spelling errors",
          "Verify statistics, claims about people/companies, and review for accuracy",
          "Delete the AI conversation history",
        ],
        correctAnswer: 2,
        explanation:
          "Always verify AI-generated content before public sharing, especially statistics, claims about specific people or companies, and any factual information. AI can hallucinate confident-sounding but incorrect details.",
        hint: "Remember the golden rule: trust but verify...",
      },
    },
    // ===========================================================================
    // SECTION 21: Actionable Task (Inline) - Final Deliverable
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Build Your Complete AI System",
        purpose:
          "Create the foundational elements of your personal AI system that will serve you long after this course",
        instructions: [
          "Create a new document titled 'My AI System'",
          "Add your Personal AI Use Policy from the previous lesson",
          "Create your first 5 prompt templates with placeholders",
          "Write out your daily and weekly AI routine",
          "Generate your 90-day plan using the prompt above",
        ],
        deliverable: "A complete personal AI system document ready for daily use",
        estimatedTime: "15-20 minutes",
        starterPrompt:
          "I'm creating my personal AI system document. Help me structure it with sections for:\n1. My AI Use Policy\n2. My Top 5 Prompt Templates (for [YOUR COMMON TASKS])\n3. My Daily AI Routine\n4. My Weekly AI Routine\n5. My 90-Day Learning Goals",
        successCriteria: [
          "Document includes all 5 sections",
          "At least 5 reusable prompt templates with placeholders",
          "Daily and weekly routines are realistic for your schedule",
          "90-day plan has specific, measurable milestones",
          "Document is saved somewhere you'll actually reference it",
        ],
      },
    },
    // ===========================================================================
    // SECTION 22: Final Deliverable Summary
    // ===========================================================================
    {
      id: "section-21",
      type: "text",
      content: {
        title: "Your Complete Personal AI System",
        paragraphs: [
          "By completing this course, you've built the foundation for a complete Personal AI System. Your system now includes:",
          "",
          "**A Prompt Library** with tested, refined prompts for your most common tasks",
          "",
          "**Daily and Weekly Routines** that make AI use automatic and sustainable",
          "",
          "**Real-Time Intelligence skills** for current, informed decision-making",
          "",
          "**Mobile Mastery** for productivity anywhere",
          "",
          "**Privacy Awareness** to use AI safely and responsibly",
          "",
          "**A 90-Day Plan** for continued growth and mastery",
        ],
      },
    },
    // ===========================================================================
    // SECTION 23: Course Completion
    // ===========================================================================
    {
      id: "section-22",
      type: "textWithImage",
      content: {
        title: "Congratulations, Gemini Master!",
        paragraphs: [
          "You've completed all 27 lessons of the Gemini Master Course. From understanding AI basics to mastering mobile features, Workspace integrations, real-time research, and responsible use - you now have practical skills that will serve you for years.",
          "",
          "Remember: AI is not here to replace your expertise. It's here to amplify it. Your years of professional experience, judgment, and wisdom combined with AI capabilities make you more effective than ever.",
          "",
          "Go forth and put your new skills to work. Start small, stay consistent, and watch your productivity transform.",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-27-inline-2.webp",
        imageAlt: "Celebration and achievement",
      },
    },
    // ===========================================================================
    // SECTION 24: Completion Section
    // ===========================================================================
    {
      id: "section-23",
      type: "completion",
      content: {
        title: "Course Complete: Gemini Mastery",
        description:
          "You've completed all 8 chapters of Gemini Mastery: Getting Started, The 5-Step Prompting Framework, Google Workspace Integration, Mobile-First Mastery, Real-Time Intelligence, Advanced Professional Applications, Privacy and Responsible AI, and Building Your AI-Powered Future. You now have a complete Personal AI System with prompts, routines, and a 90-day mastery plan. Welcome to the future of productive work.",
        xpReward: 100,
        buttonText: "Complete Gemini Mastery",
      },
    },
  ],
};
