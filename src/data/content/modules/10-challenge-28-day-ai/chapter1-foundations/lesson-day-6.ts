/**
 * Day 6: Your First Practical Workflow - Emails
 *
 * TUTORIAL LESSON - Practical Application
 * Apply the CTF Framework to real email scenarios.
 *
 * Structure:
 * - Hook with email statistics
 * - The email problem
 * - 3-step AI email workflow
 * - Prompt templates
 * - Quiz
 * - Key insights
 * - Actionable task (draft 3 emails)
 * - NO gamification
 */

import type { Lesson } from "@/types/content";

export const lessonDay6: Lesson = {
  id: "day-6",
  chapterId: "chapter1-foundations",
  moduleId: "10-challenge-28-day-ai",
  title: "Your First Practical Workflow - Emails",
  description:
    "Apply what you've learned to a real problem: email. Cut your email writing time in half with a simple 3-step workflow.",
  order: 6,
  format: "article",
  lessonCategory: "tutorial",
  estimatedMinutes: 12,

  imageSearchTerms: [
    "email inbox productive workspace",
    "professional communication laptop",
    "AI writing assistant email",
  ],

  sections: [
    // === HERO SECTION ===
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-6-cover.webp",
        imageAlt: "Email Workflow",
        title: "Day 6: Your First Practical Workflow",
        subtitle:
          "The average professional spends 28% of their day on email. Let's cut that in half with a simple AI workflow.",
      },
    },

    // === OPENING HOOK ===
    {
      id: "hook",
      type: "text",
      content: {
        paragraphs: [
          "Here's a number that might hurt: **28% of your workday** is spent on email.",
          "",
          "That's about 2.6 hours every day. 12 hours a week. 624 hours a year — that's 78 full workdays.",
          "",
          "What if you could cut that in half? Not by ignoring emails, but by writing them faster without sacrificing quality.",
          "",
          "Today, you'll build your first real AI workflow. By the end, you'll draft emails in 2 minutes that used to take you 15.",
        ],
      },
    },

    // === THE EMAIL PROBLEM ===
    {
      id: "email-problem",
      type: "text",
      content: {
        title: "Why Email Takes So Long",
        paragraphs: [
          "It's not the typing. It's the **thinking**. The real time-sink in email isn't moving your fingers across the keyboard—it's everything that happens before and during the writing process.",
          "",
          "Consider the **blank screen problem**. You stare at that empty compose window, cursor blinking, trying to figure out where to even begin. What do you say? How do you start? Should you reference the previous conversation or assume they remember? This initial friction can eat up minutes before you've written a single word.",
          "",
          "Then there's the **second-guessing spiral**. Is this tone too direct? Too soft? Professional enough? You write a sentence, delete it, rewrite it, then delete it again. Each revision takes time, and the mental energy of constantly evaluating your own words is exhausting. This is especially true for emails to people above you in the hierarchy—bosses, clients, executives—where the stakes feel higher.",
          "",
          "**Perfectionism compounds the problem.** You find yourself rewriting the same sentence five times, convinced that each version still isn't quite right. The email that should take three minutes stretches into fifteen as you polish and repolish prose that the recipient will likely skim in thirty seconds.",
          "",
          "**Context switching** adds yet another layer of friction. When you're responding to a thread, you need to remember what was said before, who said what, and what commitments were already made. This mental reconstruction takes time and cognitive energy, especially if the thread has been going back and forth for days.",
          "",
          "And then there's **tone anxiety**—particularly acute for difficult conversations. Delivering bad news, declining requests, setting boundaries, addressing conflicts. These emails require extra care because the wrong tone can damage relationships. The result? You procrastinate, letting these emails sit in your drafts folder while they mentally nag at you.",
          "",
          "This is where AI transforms your workflow. Not by writing emails for you, but by eliminating the friction. The blank screen disappears—you start with a draft. The second-guessing diminishes—you have something concrete to react to. The perfectionism loosens its grip—you can iterate quickly rather than agonizing over every word from scratch.",
        ],
      },
    },

    // === THE 3-STEP WORKFLOW ===
    {
      id: "workflow",
      type: "textWithBullets",
      content: {
        title: "The 3-Step AI Email Workflow",
        paragraphs: [
          "This is the framework you'll use for almost every email. It works because it separates **thinking** from **writing**:",
        ],
        bullets: [
          "**Step 1: Context (30 seconds)** — Tell the AI who, what, and why",
          "**Step 2: Draft (2 minutes)** — Let AI write the first version",
          "**Step 3: Refine (2 minutes)** — Edit for your voice and specifics",
        ],
      },
    },

    // === IMAGE BREAK ===
    {
      id: "workflow-image",
      type: "textWithImage",
      content: {
        title: "The Workflow in Action",
        paragraphs: [
          "Let's see each step with a real example. Imagine you need to decline a meeting invite professionally.",
        ],
        image: {
          src: "/images/courses/modules/10-challenge-28-day-ai/day-6-inline-1.webp",
          alt: "Email workflow diagram",
          caption: "The 3-step workflow separates thinking from writing",
        },
      },
    },

    // === STEP 1: CONTEXT ===
    {
      id: "step-1",
      type: "text",
      content: {
        title: "Step 1: Context (30 seconds)",
        paragraphs: [
          "This is where you apply the CTF Framework from Day 4. You don't need to write the email — just describe it:",
          "",
          "**Your context prompt:**",
          '> "I need to write an email to [person/role]. The purpose is [what you want]. Key context: [background details]. Tone should be [formal/friendly/direct/etc]."',
          "",
          "**Example for declining a meeting:**",
          '> "I need to write an email to my colleague Sarah. The purpose is to decline her meeting invite for Thursday 2pm because I have a conflict. Key context: We work together frequently and I don\'t want to seem dismissive. Tone should be professional but warm."',
        ],
      },
    },

    // === QUICK PROMPT TEMPLATE ===
    {
      id: "quick-prompt-email",
      type: "quickPrompt",
      content: {
        heading: "Email Context Template",
        description: "Use this template to provide context for any email:",
        promptText:
          "Write an email for me:\n\n**To:** [recipient name/role]\n**Purpose:** [what you want to achieve]\n**Context:** [relevant background]\n**Tone:** [formal/friendly/direct/apologetic/confident]\n**Length:** [short/medium/detailed]",
        placeholders: ["recipient", "purpose", "context", "tone", "length"],
      },
    },

    // === STEP 2: DRAFT ===
    {
      id: "step-2",
      type: "text",
      content: {
        title: "Step 2: Draft (2 minutes)",
        paragraphs: [
          "After your context prompt, AI will generate a draft. Here's what a good output looks like:",
          "",
          "**AI Draft:**",
          '> "Hi Sarah,',
          ">",
          "> Thanks for inviting me to the Thursday 2pm meeting. I really appreciate you including me, but I have a conflict at that time and won't be able to join.",
          ">",
          "> I'd love to catch up on what was discussed. Would it be possible to share the meeting notes afterward? Or if there are specific decisions you need my input on, I'm happy to provide that via email or a quick call later in the week.",
          ">",
          "> Thanks for understanding!",
          ">",
          "> Best,",
          '> [Your name]"',
          "",
          "Notice: The draft is **complete**. It has a greeting, body, and closing. It's professional but warm. This took 2 seconds to generate.",
        ],
      },
    },

    // === STEP 3: REFINE ===
    {
      id: "step-3",
      type: "text",
      content: {
        title: "Step 3: Refine (2 minutes)",
        paragraphs: [
          "Now you make it **yours**. Read through and:",
          "",
          "1. **Check the tone** — Does this sound like you?",
          "2. **Add specifics** — Any names, dates, or details to include?",
          "3. **Cut fluff** — Remove anything unnecessary",
          "4. **Verify accuracy** — Make sure all facts are correct",
          "",
          "**Refined version:**",
          '> "Hi Sarah,',
          ">",
          "> Thanks for the invite! I have a client call at 2pm Thursday so I can't make it, but I'd love to stay in the loop. Could you share the recording or notes when you get a chance?",
          ">",
          "> If there's anything you need my input on specifically, just let me know.",
          ">",
          "> Thanks!",
          '> [Your name]"',
          "",
          "Same message, but now it sounds like **you** wrote it.",
        ],
      },
    },

    // === QUIZ ===
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context:
          "You're about to ask ChatGPT to draft an email to your boss requesting a deadline extension. What information should you include in Step 1 (Context)?",
        quiz: {
          question:
            "You're about to ask ChatGPT to draft an email to your boss requesting a deadline extension. What information should you include in Step 1 (Context)?",
          options: [
            "Just say 'write an email asking for more time'",
            "The project details, why you need more time, your proposed new deadline, and your plan to finish",
            "A detailed list of everything you've done on the project so far",
            "Nothing—let ChatGPT figure it out",
          ],
          correctAnswer: 1,
        },
      },
    },

    // === EMAIL TYPES ===
    {
      id: "email-types",
      type: "text",
      content: {
        title: "This Workflow Works For Every Email Type",
        paragraphs: [
          "The beauty of the 3-step workflow is its universality. Whether you're writing a quick update or navigating a delicate situation, the same process applies: provide context, generate a draft, refine to make it yours.",
          "",
          "For **routine updates**—status reports, check-ins, project progress—the workflow accelerates the mundane. These emails don't require creative brilliance, but they do require clarity and completeness. Feed the context to AI, get a solid draft in seconds, add any personal touches, and move on. What used to take fifteen minutes now takes three.",
          "",
          "**Requests** for information, resources, or help benefit enormously from the structure. AI helps you state clearly what you need, why you need it, and what would be helpful—all the elements that make requests more likely to succeed. The draft gives you a starting point; your refinement ensures it sounds like you and includes the specific details that matter.",
          "",
          "The workflow truly shines for **difficult messages**. Delivering bad news, declining requests, setting boundaries—these are the emails we procrastinate on because they're uncomfortable. AI doesn't feel discomfort. It will draft that difficult conversation starter objectively, giving you something to work with rather than an empty screen. Your job becomes editing for empathy and appropriateness rather than facing the terror of the blank page.",
          "",
          "**External communication** to clients, vendors, and potential partners carries extra weight. These emails reflect on you and your organization. The workflow ensures you include proper context, maintain appropriate formality, and hit all the necessary points without rambling. Generate, refine, send with confidence.",
          "",
          "**Follow-up emails** after meetings, interviews, or important conversations are crucial but often forgotten in the rush of daily work. The workflow makes them easy: describe what happened, what you want to communicate, and the tone you need. AI produces the draft; you personalize it and send. Thirty seconds to professional courtesy.",
          "",
          "Even **personal professional emails**—reaching out to mentors, catching up with former colleagues, networking—follow the same pattern. The context might be more personal, the tone more casual, but the process remains identical. Describe what you want to say, get a draft, make it authentic.",
        ],
      },
    },

    // === COMMON MISTAKES ===
    {
      id: "mistakes",
      type: "text",
      content: {
        title: "Common Mistakes to Avoid",
        paragraphs: [
          "The workflow is simple, but there are pitfalls that can undermine its effectiveness. Being aware of these mistakes helps you avoid them.",
          "",
          'The most common error is **skipping Step 3 entirely**. You get a draft from AI, it looks pretty good, so you hit send without refinement. This is tempting when you\'re busy, but it\'s also how you end up with emails that don\'t sound like you. The AI draft is a starting point, not the final version. Even a thirty-second review—checking that the tone matches your voice and the facts are correct—makes the difference between "this feels generic" and "this feels like a real person wrote it."',
          "",
          "**Vague context in Step 1** produces predictably generic results. If you type \"write an email\" without explaining who it's for, what you want to achieve, and what tone you need, you'll get something technically functional but practically useless. The magic of AI comes from specific context. Take the extra twenty seconds to explain your situation, and the quality improvement is dramatic.",
          "",
          "**Sending without reading** is the dangerous cousin of skipping refinement. Even good AI drafts can contain factual errors—wrong names, incorrect dates, assumptions that don't match reality. Always verify the content before sending, especially for anything important. AI is a drafting tool, not a fact-checker. You remain responsible for accuracy.",
          "",
          "There's also the trap of **over-automating**. Some emails genuinely deserve your full, undivided attention. Condolences, sensitive feedback, deeply personal messages—these aren't candidates for AI assistance. The workflow is a tool for efficiency, not a replacement for human judgment about when efficiency is appropriate.",
          "",
          "Finally, watch out for **losing your voice**. If every email you send starts sounding the same—same structure, same phrases, same cadence—you've become too passive in Step 3. Your refinement should inject personality, idiosyncrasy, and the specific details that make communication feel genuine. AI provides the skeleton; you provide the soul.",
        ],
      },
    },

    // === KEY INSIGHTS ===
    {
      id: "key-insight",
      type: "highlightCard",
      content: {
        heading: "Day 6 Key Takeaways",
        insights: [
          "The 3-step workflow: Context → Draft → Refine",
          "Step 1 (Context) is where you apply CTF — describe what you need",
          "Step 2 (Draft) takes seconds — let AI do the heavy lifting",
          "Step 3 (Refine) is crucial — make it sound like YOU",
          "This workflow works for every email type, from routine to difficult",
        ],
      },
    },

    // === MAIN CHALLENGE ===
    {
      id: "main-challenge",
      type: "actionableTask",
      content: {
        title: "Your Challenge: Draft 3 Real Emails",
        purpose:
          "Apply the 3-step workflow to actual emails you need to write. This builds the muscle memory so the workflow becomes automatic.",
        instructions: [
          "1. Identify 3 emails you've been putting off or need to write this week",
          "2. For each email, use the 3-step workflow:",
          "   - Step 1: Write context (who, what, why, tone)",
          "   - Step 2: Generate the draft",
          "   - Step 3: Refine to make it yours",
          "3. Send at least 1 of them (the other 2 can stay drafts)",
          "4. Time yourself: How long did each email take vs. your usual time?",
        ],
        deliverable: "A note about your 3 emails: what they were for and how long each took",
        estimatedTime: "15-20 minutes",
        starterPrompt:
          "Write an email for me:\n\n**To:** [who]\n**Purpose:** [what you want]\n**Context:** [relevant background]\n**Tone:** [formal/friendly/etc]\n**Length:** [short/medium]",
        successCriteria: [
          "You used the 3-step workflow for all 3 emails",
          "Each email has proper context, greeting, body, and closing",
          "You refined each draft to sound like you",
          "At least 1 email was actually sent",
          "You noticed time savings compared to your usual process",
        ],
      },
    },
  ],
};

export default lessonDay6;
