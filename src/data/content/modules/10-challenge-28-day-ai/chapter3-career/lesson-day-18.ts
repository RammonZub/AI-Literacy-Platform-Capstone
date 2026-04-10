/**
 * Day 18: Maintaining Your Career AI System
 *
 * TEACHING LESSON - Career Maintenance
 * How to keep career materials updated with AI, continuous improvement loops,
 * and building a sustainable career maintenance routine.
 *
 * Structure:
 * - Hero image
 * - Opening (why career maintenance matters)
 * - Teaching content: The Career Maintenance Loop
 * - Teaching content: Version Your Career Documents
 * - Teaching content: Continuous Improvement with AI
 * - Teaching content: Building Your Maintenance Routine
 * - Week recap (Days 15-17)
 * - Key insights card
 * - Actionable practice (career document maintenance challenge)
 * - Week 4 preview (Days 19-21)
 * - Closing motivation
 */

import type { Lesson } from "@/types/content";

export const lessonDay18: Lesson = {
  id: "day-18",
  chapterId: "chapter3-career",
  moduleId: "10-challenge-28-day-ai",
  title: "Maintaining Your Career AI System",
  description:
    "Learn how to keep your career materials fresh with AI-powered continuous improvement loops and build a sustainable maintenance routine.",
  order: 18,
  format: "article",
  lessonCategory: "review",
  estimatedMinutes: 15,

  imageSearchTerms: [
    "career maintenance system",
    "professional document organization",
    "continuous career improvement",
  ],

  sections: [
    // === HERO SECTION ===
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-18-cover.webp",
        imageAlt: "Career Maintenance System",
        title: "Day 18: Maintaining Your Career AI System",
        subtitle: "Build a sustainable system to keep your career materials fresh and competitive.",
      },
    },

    // === OPENING ===
    {
      id: "opening",
      type: "text",
      content: {
        paragraphs: [
          "**The biggest career mistake most professionals make?** Letting their materials go stale.",
          "",
          "You create a resume, optimize your LinkedIn once, prepare for interviews when you need a job—and then let everything gather digital dust until the next career crisis. This reactive approach costs you opportunities, increases stress, and means you're always scrambling when it matters most.",
          "",
          "Today, you'll learn how to flip this dynamic. Instead of panic-updating your career materials every few years, you'll build a **continuous improvement system** powered by AI. This system keeps your resume sharp, your LinkedIn current, and your interview skills honed—automatically, in just minutes per week.",
          "",
          "The professionals who maintain their career materials consistently don't just find better jobs faster. They also think more clearly about their growth, spot opportunities others miss, and negotiate from a position of strength because they always know their value.",
        ],
      },
    },

    // === VISUAL BREAK ===
    {
      id: "context-image",
      type: "textWithImage",
      content: {
        title: "Your Career, Always Ready",
        paragraphs: [
          "A well-maintained career system means you're never caught off guard. When opportunity knocks—whether it's a dream job posting, a promotion conversation, or a networking connection—you have polished materials ready to go within minutes, not days.",
        ],
        image: {
          src: "/images/courses/modules/10-challenge-28-day-ai/day-18-inline-1.webp",
          alt: "Organized career documents and continuous improvement",
          caption: "Consistent maintenance beats last-minute scrambles every time",
        },
      },
    },

    // === TEACHING: THE CAREER MAINTENANCE LOOP ===
    {
      id: "maintenance-loop",
      type: "text",
      content: {
        title: "The Career Maintenance Loop",
        paragraphs: [
          "Think of career maintenance like fitness. You can't exercise once a year and expect results. Similarly, updating your resume only when job hunting means you're always starting from behind. The solution is a **Career Maintenance Loop**—a simple, repeatable cycle that keeps everything fresh with minimal effort.",
          "",
          "Here's how the loop works: First, you **capture** new achievements, skills, and experiences as they happen. This doesn't mean rewriting your resume weekly—it means keeping a running log of wins, projects completed, and skills learned. AI makes this capture nearly effortless. At the end of each week or month, spend five minutes telling Claude or ChatGPT what you accomplished, and let it help you phrase these as compelling bullet points.",
          "",
          "Next, you **integrate** these captured items into your master documents. Your master resume becomes a living document that grows with your career. When you need a tailored resume for a specific application, you pull relevant sections from this master version rather than starting from scratch. This integration step happens monthly or quarterly—frequent enough to stay current, but not so often that it becomes a burden.",
          "",
          "Finally, you **refine** based on feedback and results. If you're not getting interviews, your resume might need work. If interviews aren't converting to offers, your stories might need sharpening. AI helps you analyze what's working and what isn't, then suggests specific improvements. This refinement turns your career materials into a continuously improving asset.",
        ],
      },
    },

    // === TEACHING: VERSION YOUR CAREER DOCUMENTS ===
    {
      id: "version-documents",
      type: "text",
      content: {
        title: "Version Your Career Documents",
        paragraphs: [
          "Software developers use version control to track changes over time. You should do the same with your career documents. This approach solves a common problem: you tailor your resume for a job, get busy, and then can't remember what you changed when the next opportunity comes around.",
          "",
          "Start by creating a **master resume**—a comprehensive document that includes everything: all positions, all major achievements, all relevant skills. This master version is never sent to employers. Instead, it serves as your source of truth, the complete picture of your professional value. Update this master resume quarterly with new achievements, skills, and experiences captured in your maintenance loop.",
          "",
          'When you apply for a position, create a **tailored version** specifically for that opportunity. Use AI to help you select the most relevant experiences, adjust language to match the job description, and emphasize the skills that matter most for that role. Save this tailored version with a clear naming convention like "Resume_CompanyName_Role_Date.docx" so you can reference it later.',
          "",
          'The same principle applies to your LinkedIn profile and interview preparation materials. Your LinkedIn should be your "public-facing master"—current, comprehensive, but optimized for discovery by recruiters and your professional network. Keep a document of your best interview stories, refined through practice and real interview feedback, that you can quickly review before any important conversation.',
        ],
      },
    },

    // === TEACHING: CONTINUOUS IMPROVEMENT WITH AI ===
    {
      id: "continuous-improvement",
      type: "text",
      content: {
        title: "Continuous Improvement with AI",
        paragraphs: [
          "AI transforms career maintenance from a tedious chore into a quick, valuable exercise. Instead of dreading resume updates, you can make them painless and even insightful. Here's how to leverage AI for continuous career improvement.",
          "",
          "First, use AI for **achievement extraction**. Most people undersell their accomplishments because they're too close to their own work. At the end of each month, describe your projects and activities to Claude or ChatGPT, and ask it to identify the achievements you might be overlooking. A prompt like \"Here's what I did this month. What achievements should I add to my resume?\" often reveals wins you didn't think to document.",
          "",
          'Second, use AI for **language refinement**. Your master resume bullet points can always be stronger. Periodically paste your bullets into ChatGPT and ask: "Make these more achievement-focused. Add metrics where possible. Use strong action verbs." You\'ll be surprised how much stronger your materials become with this simple exercise. Keep the improvements that resonate, discard the ones that feel inflated.',
          "",
          "Third, use AI for **gap analysis**. Every few months, have Claude review your resume against job descriptions for roles you'd want next. Ask: \"What skills or experiences am I missing for this type of position?\" This analysis helps you identify development opportunities and guides your learning priorities. It also ensures you're building the experiences that will matter for your next career step.",
          "",
          "Finally, use AI for **interview readiness**. Your interview skills atrophy without practice. Once a month, pick one behavioral question and practice your response with ChatGPT. The AI can provide feedback on your STAR story structure, suggest stronger examples, and help you refine your delivery. Five minutes of practice keeps your skills sharp without the pressure of a real interview.",
        ],
      },
    },

    // === TEACHING: BUILDING YOUR MAINTENANCE ROUTINE ===
    {
      id: "maintenance-routine",
      type: "textWithBullets",
      content: {
        title: "Building Your Maintenance Routine",
        paragraphs: [
          "The key to career maintenance is making it automatic. Here's a simple routine that takes less than 30 minutes per month but keeps your materials perpetually fresh:",
        ],
        bullets: [
          "**Weekly (5 minutes):** Send a quick message to yourself or a notes app listing your wins, completed tasks, and new learnings. Don't worry about formatting—just capture the raw material.",
          "**Monthly (15 minutes):** Paste your weekly captures into Claude or ChatGPT. Ask the AI to transform them into polished resume bullet points and add the best ones to your master resume.",
          "**Quarterly (30 minutes):** Review your master resume, LinkedIn profile, and interview stories holistically. Use AI to identify gaps, refine language, and ensure alignment with your career direction.",
          "**Ongoing (as needed):** After any significant project, promotion, or learning experience, capture it immediately while the details are fresh.",
        ],
      },
    },

    {
      id: "routine-continued",
      type: "text",
      content: {
        paragraphs: [
          "This routine works because it's sustainable. You're not trying to do everything at once—you're building habits that compound over time. After six months of this routine, you'll have a master resume that's dramatically stronger than what most people bring to a job search, and you'll be able to produce tailored applications in minutes rather than hours.",
          "",
          "The professionals who get the best opportunities aren't necessarily the most talented—they're the ones who are always prepared. When a recruiter reaches out, they have a polished resume ready within hours. When an internal promotion opens up, they already have their achievements documented. When a networking contact asks what they're working on, they have a compelling answer.",
          "",
          "This readiness isn't luck. It's the result of a simple maintenance system that anyone can build—and now, with AI, it's easier than ever.",
        ],
      },
    },

    // === WEEK 3 RECAP ===
    {
      id: "week-recap",
      type: "textWithBullets",
      content: {
        title: "Week 3 Recap: Your Career AI Toolkit",
        paragraphs: [
          "This week you built career-focused AI skills that will serve you for years. Here's what you learned:",
        ],
        bullets: [
          "**Day 15:** AI as Your Thinking Partner — Using Claude for brainstorming, problem-solving, and decision support through back-and-forth conversation.",
          "**Day 16:** Resume Enhancement with AI — Analyzing resumes, strengthening bullet points, and tailoring for specific jobs with ChatGPT.",
          "**Day 17:** Interview Preparation — Using Claude for analysis and ChatGPT for practice. Developing STAR stories and preparing for tough questions.",
          "**Day 18:** Maintaining Your Career System — Building a sustainable routine to keep your materials fresh with AI-powered continuous improvement.",
        ],
      },
    },

    // === KEY INSIGHTS ===
    {
      id: "key-insights",
      type: "highlightCard",
      content: {
        heading: "Key Insights: Career Maintenance",
        insights: [
          "Career materials go stale quickly—reactive updates leave you scrambling when opportunities arise",
          "The Career Maintenance Loop (capture, integrate, refine) keeps everything fresh with minimal effort",
          "Version your documents: maintain a master resume, create tailored versions for specific applications",
          "Use AI monthly to extract achievements, refine language, and identify skill gaps",
          "A 30-minute monthly routine beats panic-updating every few years",
          "Always-ready professionals get better opportunities because they can act fast",
        ],
      },
    },

    // === ACTIONABLE PRACTICE: CAREER MAINTENANCE CHALLENGE ===
    {
      id: "practice-intro",
      type: "text",
      content: {
        title: "Actionable Practice: Start Your Maintenance System",
        paragraphs: [
          "Let's put these concepts into practice right now. You'll create the foundation for your career maintenance system—a system that will serve you throughout your entire professional life.",
        ],
      },
    },

    {
      id: "maintenance-challenge",
      type: "actionableTask",
      content: {
        title: "Career Document Maintenance Challenge",
        purpose:
          "Build the foundation of your career maintenance system. By the end of this challenge, you'll have a structured approach to keeping your materials perpetually fresh.",
        instructions: [
          "**PART 1: ACHIEVEMENT CAPTURE (10 minutes)**",
          "Think back over the past 3 months. List everything you accomplished: projects completed, problems solved, skills learned, recognition received. Don't filter—write it all down.",
          "",
          "**PART 2: AI REFINEMENT (10 minutes)**",
          "Paste your list into ChatGPT with this prompt:",
          '"Here are my recent accomplishments. Please help me: 1) Identify the 3-5 most impressive achievements I should add to my resume, 2) Rewrite each as achievement-focused bullet points with metrics where possible, 3) Suggest any skills or experiences I might be overlooking."',
          "",
          "**PART 3: MASTER RESUME UPDATE (5 minutes)**",
          "Add your best refined bullet points to your master resume. If you don't have a master resume yet, start one now—it will become your most valuable career document.",
          "",
          "**PART 4: SYSTEM SETUP (5 minutes)**",
          "Create a simple capture system: a note on your phone, a document, or an email to yourself. This is where you'll log wins weekly. Set a monthly calendar reminder to process these captures with AI.",
        ],
        deliverable:
          "A list of 3-5 polished resume bullet points from recent achievements, updated master resume, and a simple capture system for ongoing maintenance",
        estimatedTime: "30 minutes",
        starterPrompt:
          "[In ChatGPT] Here are my accomplishments from the past 3 months:\n\n[List your projects, tasks, wins, and learnings]\n\nPlease help me identify my top achievements and rewrite them as compelling resume bullet points. Include metrics where possible and use strong action verbs.",
        successCriteria: [
          "You listed at least 10 recent accomplishments (no matter how small)",
          "You used AI to transform raw accomplishments into polished bullet points",
          "You added at least 3 refined bullet points to your master resume",
          "You created a simple system to capture future achievements",
          "You set a monthly reminder to process your captures",
        ],
      },
    },

    // === WEEK 4 PREVIEW ===
    {
      id: "week4-preview",
      type: "textWithBullets",
      content: {
        title: "Coming Up: Business + Automation",
        paragraphs: [
          "Week 4 takes your AI skills beyond personal productivity into business building and automation:",
        ],
        bullets: [
          "**Day 19:** Idea Validation with AI — Test business ideas quickly using AI research and analysis",
          "**Day 20:** Zapier & Automation Basics — Connect AI tools to automate repetitive workflows",
          "**Day 21:** Week 4 Review + Mini-Challenge — Consolidate your business and automation skills",
        ],
      },
    },

    // === CLOSING MOTIVATION ===
    {
      id: "closing",
      type: "highlightCard",
      content: {
        heading: "You're Building Career Infrastructure!",
        insights: [
          "You can use AI as a thinking partner for career decisions",
          "You can enhance resumes with achievement-focused bullet points",
          "You can prepare for interviews with STAR stories and practice",
          "You now have a system to keep everything fresh automatically",
          "Career maintenance is a competitive advantage—most people don't do it",
          "Your always-ready approach will pay dividends for years",
        ],
      },
    },
  ],
};

export default lessonDay18;
