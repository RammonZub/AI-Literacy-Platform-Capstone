/**
 * Lesson 2.7: Make.com for Workflow Automation (ARTICLE FORMAT)
 *
 * STAR LESSON - Higher XP reward
 *
 * XP CALCULATION:
 * - Base: 75 XP
 * - Length: 50 min -> x1.0
 * - Difficulty: x1.5 (Advanced)
 * - Quizzes: +20 XP
 * - Checkpoint: +5 XP
 * - Total: 135 XP (STAR lesson)
 *
 * Duration: 50 minutes
 * XP REWARD: 135 points
 *
 * lessonCategory: tutorial - Hands-on automation platform tutorial
 */

import type { Lesson } from "@/types/content";

export const lesson_2_7: Lesson = {
  id: "lesson-2-7",
  chapterId: "ch2-3-integration",
  moduleId: "02-skills-productivity",
  title: "Automate Repetitive Work Without Coding",
  description: "Learn the basics of Make.com and simple AI automation patterns",
  order: 7,
  estimatedMinutes: 15,
  xpReward: 135,
  format: "article",
  coverImage: "/images/courses/lessons/modules/daily-workflow-rhythm-and-productivity.webp",
  coverTitle: "Automate Repetitive Work Without Coding",
  lessonCategory: "tutorial",

  sections: [
    // ==========================================================================
    // HERO IMAGE
    // ==========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/02-skills-productivity/lesson-2-7-cover.webp",
        imageAlt: "Make.com automation platform interface",
        title: "Automate Repetitive Work Without Coding",
        subtitle: "Learn the basics of Make.com and simple AI automation patterns",
      },
    },

    // ==========================================================================
    // SECTION 1: THE AUTOMATION OPPORTUNITY
    // ==========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Automation Opportunity",
        paragraphs: [
          "You repeat tasks daily. Weekly. Monthly.",
          "Data entry. Report generation. Email responses. Social posts.",
          "These tasks follow patterns. Patterns can be automated.",
          "AI plus automation equals your digital workforce.",
          "Work 24/7. Never tire. Never make mistakes. You focus on what only humans can do.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Key Insight
    // ==========================================================================
    {
      id: "highlight-1",
      type: "highlightCard",
      content: {
        heading: "Why Automation Matters",
        insights: [
          "The average knowledge worker spends 40% of their time on repetitive tasks that could be automated",
          "Once set up, automations run 24/7 without supervision - earning their setup time back within weeks",
          "The best automations connect your tools together, creating seamless workflows between apps",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: WHAT IS MAKE.COM?
    // ==========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "What Is Make.com?",
        paragraphs: [
          "Make.com (formerly Integromat) is a visual automation platform that connects your apps and services.",
          "No coding required. No developers needed.",
          "Build automations by dragging and dropping modules on a visual canvas.",
          "Connect Gmail, Google Sheets, Slack, Notion, OpenAI, and 1,000+ other apps.",
          "Create scenarios that trigger automatically when specific conditions are met.",
          "From idea to automation in minutes, not months.",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 1: Check understanding of automation basics
    // ==========================================================================
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        quiz: {
          question: "What makes Make.com different from manual task management?",
          options: [
            "It's cheaper than other tools",
            "You build visual workflows that run automatically across multiple apps",
            "It only works with Google products",
            "It requires developers to set up",
          ],
          correctAnswer: 1,
        },
        context:
          "Make.com's power lies in its visual canvas where you connect apps through triggers and actions. Once a scenario is active, it runs automatically - watching for triggers, processing data, and performing actions across your connected tools.",
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: Visual workflow example
    // ==========================================================================
    {
      id: "section-3",
      type: "textWithImage",
      content: {
        title: "The Make.com Canvas",
        paragraphs: [
          "The Make.com interface shows your automation as a visual flow chart.",
          "Each circle represents a module - an app or service. Arrows show data flowing between them.",
          "You can see exactly what happens at each step, making it easy to debug and optimize your workflows.",
        ],
        imageUrl: "/images/courses/modules/02-skills-productivity/lesson-2-7-inline-1.webp",
        imageAlt: "Make.com visual workflow canvas showing connected modules",
        imageCaption:
          "A typical Make.com scenario: trigger (left) flows through processing to output (right)",
      },
    },

    // ==========================================================================
    // SECTION 3: CORE CONCEPTS
    // ==========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Core Concepts: Scenarios, Modules, and Routes",
        paragraphs: [
          "Understanding these three concepts unlocks Make.com's power. Together, they form the building blocks of every automation you'll create.",
          "A scenario is a complete automation workflow. Think of it as a recipe: 'When X happens, do Y, then Z.' Each scenario runs on a schedule or when triggered by specific events. Your scenario might watch for new emails, process them through AI, and save results to a spreadsheet—all without your involvement after setup.",
          "A module represents a single step in your scenario. Modules can be triggers that watch for new emails, actions that create spreadsheet rows, or tools like filters and routers. Each module performs one specific function, and you connect multiple modules together to build complex workflows.",
          "Routes define the path data takes through your scenario. Routes can branch based on conditions you define. For example: 'If email is from VIP client, notify immediately. Otherwise, log for later.' This conditional logic makes your automations smart enough to handle different situations appropriately.",
          "Connections are your links to external apps. Make.com connects to your Gmail, Slack, Sheets, and over a thousand other services through secure OAuth authentication. You authorize each connection once, and Make.com handles the rest securely.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 4: CREATING YOUR FIRST SCENARIO
    // ==========================================================================
    {
      id: "section-5",
      type: "textWithBullets",
      content: {
        title: "Creating Your First Scenario",
        paragraphs: ["Build your first automation in six steps."],
        bullets: [
          "1. CREATE SCENARIO: Click 'Create a new scenario' from your dashboard. You'll see an empty canvas.",
          "2. ADD TRIGGER: Click the + button and search for your trigger app (e.g., Gmail). Select 'Watch emails' to monitor for new messages.",
          "3. CONNECT APP: Authenticate with your Google account. Make.com will only access what you authorize.",
          "4. ADD ACTION: Click + after your trigger. Search for the next app (e.g., Google Sheets). Select 'Add a row' to log email data.",
          "5. MAP DATA: Connect fields from the trigger to the action. Drag 'Subject' to the 'Subject' column, 'From' to 'Sender', etc.",
          "6. ACTIVATE: Click 'Scheduling' to set how often the scenario runs (every 15 minutes, hourly, etc.). Toggle it ON.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Pro Tips
    // ==========================================================================
    {
      id: "highlight-2",
      type: "highlightCard",
      content: {
        heading: "Pro Tips for Make.com",
        insights: [
          "Start simple: Build a basic two-step scenario first. Add complexity only after it works reliably.",
          "Use filters: Not every email needs processing. Add filters to route only relevant data through your scenario.",
          "Test frequently: Run scenarios manually during development to catch errors before going live.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 5: AUTOMATION PATTERNS
    // ==========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Five Essential Automation Patterns",
        paragraphs: [
          "These five patterns cover nearly 90% of automation needs. Once you understand them, you'll see opportunities to automate everywhere.",
          "The Monitor pattern watches for new items - emails arriving in your inbox, form submissions on your website, calendar events being created, or files appearing in a folder. This is your trigger, the starting point that initiates your automation. Without monitoring, your scenario never knows when to begin.",
          "The Process pattern transforms raw data into useful information. You might extract key details from an email, categorize a support ticket by topic, or use AI to summarize a long document. Processing turns noise into signal, making downstream actions more effective.",
          "The Route pattern sends different data to different destinations based on conditions you define. VIP client emails might trigger immediate Slack notifications, while newsletters get archived to a reading list for later. Routing makes your automations smart enough to handle each situation appropriately.",
          "The Act pattern creates, updates, or notifies. This is where your automation actually does work: adding rows to spreadsheets, sending messages, creating tasks, updating databases, or posting to social media. The actions are the tangible outputs of your workflow.",
          "The Report pattern closes the loop by sending summaries or alerts when work is complete. A daily digest of processed items helps you stay informed without constant checking. An alert when something fails ensures problems get attention quickly. Reporting gives you confidence that your automations are running smoothly.",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 2: Check understanding of workflow design
    // ==========================================================================
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        quiz: {
          question: "What's the first step in designing an automation workflow?",
          options: [
            "Writing the code",
            "Identifying the trigger that starts the automation",
            "Choosing the colors for your scenario",
            "Testing the output",
          ],
          correctAnswer: 1,
        },
        context:
          "Every automation starts with a trigger - the event that initiates the workflow. Common triggers include: new email, form submission, scheduled time, or webhook from an external system. Without a clear trigger, the automation has no starting point.",
      },
    },

    // ==========================================================================
    // SECTION 6: REAL-WORLD EXAMPLES
    // ==========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Real-World Automation Examples",
        paragraphs: [
          "These workflows demonstrate how businesses automate common tasks using Make.com's visual builder. Each example solves a real problem that wastes hours of human time.",
          "Email processing automates the tedious work of handling attachments. When a new email arrives with an attachment, Make.com saves the file to Google Drive, logs the sender and subject to a tracking spreadsheet, and sends a Slack notification to the right team. No more manual downloading or data entry - every attachment is captured and organized automatically.",
          "Lead capture workflows ensure no inquiry falls through the cracks. A form submission on your website triggers AI analysis that identifies the prospect's intent and urgency. Hot leads trigger immediate notifications to your sales team, while other contacts are added to your CRM with a personalized auto-response. The difference: sales reps focus on qualified prospects while every lead gets appropriate follow-up.",
          "Content pipelines transform editorial calendars into published content without manual coordination. When a content marketer adds a new row to a Google Sheets calendar, AI generates a first draft based on the topic. Make.com creates a Google Doc, posts a notification to Slack for review, and once approved, schedules social media posts across platforms. What once required constant back-and-forth now flows seamlessly from idea to publication.",
          "Invoice processing eliminates data entry and prevents late payments. When an email with 'invoice' in the subject arrives, AI extracts the vendor name, amount, and due date. Make.com creates a row in your accounting spreadsheet, adds the due date to your calendar, and notifies the finance team for review. Payments happen on time, and your financial records stay accurate without manual effort.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 7: AI INTEGRATIONS
    // ==========================================================================
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Adding AI to Your Automations",
        paragraphs: [
          "Make.com connects to OpenAI, Anthropic Claude, and other AI services. This transforms simple automations into intelligent workflows that can understand, analyze, and generate content.",
          "The OpenAI module lets you send text to GPT-4 for analysis, summarization, or generation. Use it to categorize emails, extract data from unstructured text, or draft responses. The module handles the API communication, so you just configure what you want analyzed and where to send the results.",
          "The Anthropic module connects Claude for longer-context tasks, document analysis, and nuanced writing. When you need AI to understand complex documents or produce sophisticated outputs, Claude excels at maintaining context and quality.",
          "Two powerful patterns emerge when combining AI with automation. First, AI as processor: a trigger receives data, AI analyzes it, and actions use the AI output. For example, a new support ticket arrives, AI categorizes urgency and drafts a response, then the ticket routes to the appropriate team. Second, AI as decision maker: use AI to determine which route to take in your workflow. The AI might classify incoming items as urgent or routine, routing urgent items for immediate notification while queuing routine items for batch processing.",
        ],
      },
    },

    // ==========================================================================
    // CHECKPOINT: Test comprehensive understanding
    // ==========================================================================
    {
      id: "checkpoint-1",
      type: "checkpoint",
      content: {
        question:
          "Describe a repetitive task you do weekly. How would you automate it with Make.com?",
        options: [
          "I don't have any repetitive tasks",
          "Design includes: Clear trigger (what starts it), processing steps (what happens to the data), output actions (what gets created/updated), and notifications (how you know it worked)",
          "Just tell Make.com to 'do my work'",
          "Hire a developer to build it",
        ],
        correctAnswer: 1,
        hint: "Think about trigger, process, output, and notification",
      },
    },

    // ==========================================================================
    // SECTION 8: ADVANCED TECHNIQUES
    // ==========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Advanced Techniques",
        paragraphs: [
          "Take your automations to the next level with these powerful techniques that handle complex real-world scenarios.",
          "Conditional routing uses the Router module to create branches in your workflow. You can define multiple paths: 'If email is from client, notify in #urgent. If from vendor, log to Sheet. Else, archive.' This allows a single scenario to handle different situations intelligently without creating separate automations for each case.",
          "Iterators process arrays of items one at a time through your workflow. When a new spreadsheet arrives with 50 rows, an iterator processes each row individually through your scenario. This is essential for batch processing where each item needs individual attention.",
          "Error handling adds fallback routes for when things go wrong. If the main action fails—perhaps an API is down or data is malformed—you can log the error, notify yourself, and even attempt alternative actions. Robust automations anticipate failures and handle them gracefully.",
          "Webhooks connect apps that aren't natively supported by Make.com. Any application that can send HTTP requests can trigger your scenarios. This opens up integration possibilities with virtually any tool, custom internal systems, or services not yet in Make.com's directory.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 9: GETTING STARTED
    // ==========================================================================
    {
      id: "section-10",
      type: "text",
      content: {
        title: "Getting Started with Make.com",
        paragraphs: [
          "Ready to build your first automation?",
          "Create a free account at make.com. The free tier includes 1,000 operations per month - plenty for learning.",
          "Start with a simple two-step scenario: one trigger, one action. Get it working before adding complexity.",
          "Browse the template library for pre-built scenarios you can customize. Thousands of templates cover common use cases.",
          "Join the Make community forum for help. The community shares tips, solves problems, and posts innovative scenarios.",
        ],
      },
    },

    // ==========================================================================
    // TOOL REFERENCE: Make.com
    // ==========================================================================
    {
      id: "tool-reference",
      type: "toolReference",
      content: {
        tool: "make",
        action: "Visit make.com and create a free account",
        task: "Build your first automation with one trigger and one action",
        feature: "Visual canvas for connecting apps without writing code",
        tip: "Start simple - the free tier includes 1,000 operations per month",
      },
    },

    // ==========================================================================
    // ACTIONABLE TASK: Automation Challenge
    // ==========================================================================
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Build Your First Automation",
        purpose: "Apply what you learned by creating a real automation that saves you time",
        instructions: [
          "Sign up for a free Make.com account at make.com",
          "Identify ONE repetitive task you do regularly (email processing, data entry, notifications)",
          "Create a new scenario with: one trigger (what starts it), one action (what happens)",
          "Test your scenario manually to verify it works correctly",
          "Activate the scenario and let it run for 24 hours",
        ],
        deliverable:
          "Your first working Make.com scenario - share what you automated and how much time it will save you weekly",
        estimatedTime: "15-20 minutes",
        starterPrompt:
          "I want to automate [TASK NAME]. The trigger is [WHAT STARTS IT]. When triggered, the automation should [WHAT HAPPENS]. I want to be notified by [HOW YOU KNOW IT WORKED].",
        successCriteria: [
          "Scenario has at least one trigger and one action module",
          "Data flows correctly from trigger to action (check by running once)",
          "Scenario is activated and will run automatically",
        ],
      },
    },
  ],
};
