/**
 * Day 4: The CTF Framework for Effective Prompting
 *
 * THEORY LESSON - Prompting Fundamentals
 * The most important lesson in the entire challenge. Teaches the CTF Framework
 * (Context, Task, Format) that students will use for every AI interaction.
 *
 * CRITICAL: This lesson MUST come before advanced tool tutorials.
 * Students learn prompting fundamentals on Day 4 (not Day 9) to build good habits early.
 *
 * Prose-first writing: Minimal bullets, connected paragraphs, substantive content.
 */

import type { Lesson } from "@/types/content";

export const lessonDay4CTF: Lesson = {
  id: "day-4",
  chapterId: "chapter1-foundations",
  moduleId: "10-challenge-28-day-ai",
  title: "The CTF Framework for Effective Prompting",
  description:
    "Master the three-part formula that transforms vague requests into precise, high-quality AI outputs. This is the most important lesson in the challenge.",
  order: 4,
  format: "article",
  lessonCategory: "theory",
  estimatedMinutes: 15,

  imageSearchTerms: [
    "prompt engineering framework diagram",
    "AI communication structure visual",
    "effective prompting colorful illustration",
  ],

  sections: [
    // === HERO SECTION ===
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-4-cover.webp",
        imageAlt: "CTF Framework for Prompting",
        title: "Day 4: The CTF Framework for Effective Prompting",
        subtitle:
          "The three-part formula that separates AI power users from everyone else. Master this, and every AI interaction improves.",
      },
    },

    // === OPENING HOOK ===
    {
      id: "hook",
      type: "text",
      content: {
        paragraphs: [
          "You've had your first conversations with ChatGPT. Maybe you got exactly what you wanted. More likely, you got something *close* but not quite right—an answer that was too long, too vague, or missed the point entirely.",
          "",
          "Here's the secret that separates AI power users from everyone else: the quality of your output depends entirely on the structure of your input. Most people type the first thing that comes to mind and hope for the best. That's like walking into a restaurant and saying \"I want food\"—technically valid, but you'll get something random.",
          "",
          "Today you'll learn the CTF Framework: a simple three-part structure that transforms vague requests into precise, high-quality outputs. This single lesson will improve every AI interaction you have for the rest of your life.",
        ],
      },
    },

    // === WHAT CTF IS ===
    {
      id: "what-ctf-is",
      type: "text",
      content: {
        title: "What CTF Means",
        paragraphs: [
          "CTF stands for **Context, Task, Format**—the three elements every effective prompt needs. Think of it as a contract between you and the AI. You're not just asking for something; you're specifying the situation, the action, and the delivery.",
          "",
          '**Context** tells the AI who you are, what you\'re working on, and why you need help. Without context, the AI has to guess—and guessing leads to generic responses. Context includes your role ("I\'m a marketing manager"), your situation ("I\'m preparing a quarterly presentation"), and any relevant constraints ("My audience is non-technical executives").',
          "",
          '**Task** specifies exactly what you want the AI to do. Not "help me with this" but "write a three-paragraph executive summary." The more specific your task, the more targeted the output. Vague tasks produce vague results.',
          "",
          "**Format** defines how you want the output structured. A bulleted list? A table? A 500-word essay? A single sentence? The same information presented in different formats serves different purposes—so tell the AI which format you need.",
        ],
      },
    },

    // === IMAGE BREAK ===
    {
      id: "framework-visual",
      type: "textWithImage",
      content: {
        title: "The Framework in Action",
        paragraphs: [
          "Before we dive into examples, here's how the three parts work together. Context sets the stage, Task defines the action, and Format shapes the delivery. Skip any one of them, and you're leaving quality on the table.",
        ],
        image: {
          src: "/images/courses/modules/10-challenge-28-day-ai/day-4-inline-1.webp",
          alt: "CTF Framework diagram showing Context, Task, and Format",
          caption: "The three elements work together—missing any one reduces output quality",
        },
      },
    },

    // === BEFORE AND AFTER ===
    {
      id: "before-after",
      type: "text",
      content: {
        title: "See the Difference",
        paragraphs: [
          "Let's look at the same request, with and without CTF. Watch how the output quality transforms.",
          "",
          '**Without CTF:** "Write an email about the price increase."',
          "",
          "The AI has no idea who you are, who you're emailing, what tone to use, or how long the email should be. You'll get a generic template that sounds like it was written by... well, an AI that doesn't know you.",
          "",
          "**With CTF:** \"I'm a SaaS product manager (Context). Write an email to our enterprise customers explaining a 15% price increase effective next quarter. Be empathetic but confident, acknowledge their loyalty, and emphasize the added value they'll receive (Task). Format as a professional email under 200 words with a clear subject line (Format).\"",
          "",
          "Now the AI knows your role, your audience, the specific situation, the tone you need, and exactly how you want it delivered. The output will be dramatically better—not because the AI is smarter, but because you communicated clearly.",
        ],
      },
    },

    // === QUIZ 1 ===
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "Let's check your understanding of the three CTF components.",
        quiz: {
          question:
            "You ask AI to 'analyze this spreadsheet' but don't explain what the spreadsheet contains or what analysis you need. Which CTF element is missing?",
          options: [
            "Context — the AI doesn't know what the data is or why you're analyzing it",
            "Task — 'analyze' is too vague to be a real task",
            "Format — you didn't say how to present the analysis",
            "All of the above — this prompt has multiple issues",
          ],
          correctAnswer: 0,
        },
      },
    },

    // === THE 4 WS FOR CONTEXT ===
    {
      id: "four-ws",
      type: "text",
      content: {
        title: "The 4 Ws: Building Strong Context",
        paragraphs: [
          "Context is where most prompts fail. People jump straight to what they want, skipping the essential background that helps the AI understand their situation. The 4 Ws framework ensures you never skip context again.",
          "",
          '**Who are you?** Your role matters. A prompt from a CEO reads differently than one from an intern. "I\'m a first-time manager" sets different expectations than "I\'m an executive with 20 years experience."',
          "",
          "**What are you working on?** Give the AI the big picture. Are you writing a report? Preparing for a meeting? Debugging code? The AI tailors its response when it understands your broader goal.",
          "",
          '**Why do you need this?** Explain the purpose. "I need to convince skeptical stakeholders" produces different output than "I need to document this for future reference." Purpose shapes tone and emphasis.',
          "",
          "**What constraints exist?** Share the boundaries. Time limits, word counts, audience considerations, brand guidelines—anything that restricts the solution space helps the AI give you something usable.",
        ],
      },
    },

    // === SCENARIO CARD ===
    {
      id: "scenario",
      type: "scenarioCard",
      content: {
        title: "Real Example: Sarah's Missing Context",
        situation:
          'Sarah, a marketing manager, needs help writing social media copy. She types: "Write tweets about our new product launch."',
        challenge:
          "The AI produces generic promotional tweets that don't match her company's voice or target audience.",
        context:
          "Sarah forgot to include Context. She didn't mention her company (B2B software), her audience (IT decision-makers), her brand voice (professional but friendly), or the product's key differentiator (AI-powered automation).",
        outcome:
          'When Sarah adds Context—"I\'m a B2B marketing manager launching an AI automation tool for IT teams. Our voice is professional but approachable. The key differentiator is no-code setup"—the tweets transform from generic to targeted and on-brand.',
      },
    },

    // === QUIZ 2 ===
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        context: "Test your understanding of the 4 Ws.",
        quiz: {
          question: "Which of these is the BEST context statement?",
          options: [
            "I need help with something.",
            "I'm a freelance graphic designer creating a proposal for a restaurant client who wants a modern rebrand.",
            "Can you write a proposal?",
            "I work in design.",
          ],
          correctAnswer: 1,
        },
      },
    },

    // === TASK SPECIFICITY ===
    {
      id: "task-specificity",
      type: "text",
      content: {
        title: "Making Your Task Crystal Clear",
        paragraphs: [
          'Vague tasks are the enemy of good AI output. "Help me with this" is not a task—it\'s a category. "Write a one-paragraph summary of this article highlighting the three main arguments" is a task.',
          "",
          "The key to task specificity is using **action verbs** and **defining done**. Action verbs tell the AI exactly what operation to perform: write, summarize, analyze, compare, brainstorm, debug, explain, transform. Each verb produces a different type of output.",
          "",
          'Defining done means specifying what completion looks like. "Brainstorm ideas" could produce five ideas or fifty. "Brainstorm exactly ten creative campaign concepts" gives you exactly what you need. The AI isn\'t guessing—you\'re directing.',
          "",
          'Avoid the temptation to combine multiple tasks in one prompt. "Analyze this data and create a presentation and write speaker notes" will produce mediocre results on all three. Better to tackle each task separately with full CTF structure for each.',
        ],
      },
    },

    // === FORMAT OPTIONS ===
    {
      id: "format-options",
      type: "text",
      content: {
        title: "Choosing the Right Format",
        paragraphs: [
          "Format is the most overlooked element of CTF, but it's often what separates usable output from unusable noise. The same information in different formats serves different purposes entirely.",
          "",
          "Consider these format options and when to use each. A **bulleted list** works for quick scanning and reference—great for checklists, feature lists, and key points. A **numbered list** implies sequence and priority—use for steps, rankings, and processes. A **table** enables comparison—ideal for feature comparisons, pros/cons, and structured data.",
          "",
          "A **paragraph** creates narrative flow—best for explanations, stories, and persuasive content. A **short response** (1-3 sentences) works for quick answers and definitions. A **detailed response** (500+ words) suits deep dives and comprehensive coverage.",
          "",
          'You can also specify **structural elements**: "Include a clear heading," "Start with a one-sentence summary," "End with a call to action." These directives give you output that\'s ready to use, not just technically correct.',
        ],
      },
    },

    // === QUICK PROMPT TEMPLATE ===
    {
      id: "ctf-template",
      type: "quickPrompt",
      content: {
        heading: "Your CTF Prompt Template",
        description:
          "Use this structure for every AI request. Fill in each bracket with your specific details.",
        promptText:
          "[Context] I am [your role]. I'm working on [project/situation]. The background is [relevant details]. My constraints are [any limitations].\n\n[Task] Please [specific action verb] [exactly what you want].\n\n[Format] Present this as [output structure: bullets/table/paragraph/etc.]. Keep it [length constraint].",
        placeholders: [
          "your role and situation",
          "specific action and deliverable",
          "desired format and length",
        ],
      },
    },

    // === COMMON MISTAKES ===
    {
      id: "mistakes",
      type: "text",
      content: {
        title: "Common CTF Mistakes to Avoid",
        paragraphs: [
          "Even with the framework, it's easy to slip into bad habits. Here are the most common mistakes and how to fix them.",
          "",
          '**Mistake 1: Skipping context because "the AI should know."** The AI doesn\'t know your situation unless you tell it. Every prompt is a fresh conversation—assume zero prior knowledge and provide full context.',
          "",
          '**Mistake 2: Using vague verbs.** "Help me," "give me ideas," and "do something with this" aren\'t tasks—they\'re categories. Replace with specific actions: "write," "list," "analyze," "compare," "summarize."',
          "",
          "**Mistake 3: Forgetting format until you see the output.** If you get a 10-paragraph essay when you wanted bullet points, that's on you. Specify format upfront and save yourself the regeneration.",
          "",
          "**Mistake 4: Overloading one prompt.** Trying to do too much in a single request produces scattered, unfocused output. Complex projects deserve multiple prompts, each with full CTF structure.",
        ],
      },
    },

    // === KEY INSIGHTS ===
    {
      id: "key-insight",
      type: "highlightCard",
      content: {
        heading: "Day 4 Key Takeaways",
        insights: [
          "CTF = Context + Task + Format — the three elements every effective prompt needs",
          "Context answers the 4 Ws: Who you are, What you're working on, Why you need it, What constraints exist",
          'Tasks need specific action verbs and clear definitions of "done"',
          "Format specifies how you want output structured — specify it upfront, not after",
          "This framework improves EVERY AI interaction you'll ever have",
        ],
      },
    },

    // === MAIN CHALLENGE ===
    {
      id: "main-challenge",
      type: "actionableTask",
      content: {
        title: "Your Challenge: Transform a Weak Prompt",
        purpose:
          "Apply the CTF Framework immediately. You'll take a vague, ineffective prompt and transform it into a structured request that produces dramatically better output.",
        instructions: [
          "1. Think of a real task you need help with (work project, personal goal, creative endeavor)",
          "2. Write the lazy version first: just say what you want without structure",
          "3. Now rewrite it using CTF: add Context (the 4 Ws), specify the Task (action verb + done criteria), and define the Format",
          "4. Test both versions in ChatGPT or Claude and compare the outputs",
          "5. Notice the difference—this is the power of structured prompting",
        ],
        deliverable: "Your before/after prompts and a brief note on how the outputs differed",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "[Context] I am [who you are]. I'm working on [what]. The background is [relevant details].\n\n[Task] Please [specific action] [exactly what you need].\n\n[Format] Present this as [structure]. Keep it [length constraint].",
        successCriteria: [
          "Your CTF prompt includes all three elements: Context, Task, and Format",
          "Context includes at least 2 of the 4 Ws",
          'Task uses a specific action verb (not "help me")',
          "Format specifies both structure and length",
          "You noticed a clear quality difference between outputs",
        ],
      },
    },
  ],
};

export default lessonDay4CTF;
