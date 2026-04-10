/**
 * Lesson 5.9: Prompting for Better Decisions
 *
 * CHAPTER: 2 - ChatGPT Applications
 * LESSON: 9 of 10 - Prompting for Better Decisions
 *
 * DURATION: 12 minutes (decision-making support)
 * XP REWARD: 120 XP
 */

import type { Lesson } from "@/types/content";

export const lesson_5_9: Lesson = {
  id: "lesson-5-9",
  chapterId: "ch5-2-applications",
  moduleId: "05-tools-chatgpt",
  title: "Prompting for Better Decisions",
  description: "Use AI to think through options without letting AI decide for you",
  order: 9,
  estimatedMinutes: 12,
  xpReward: 120,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // HERO IMAGE - Start of lesson
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-9-cover.webp",
        imageAlt: "Productivity and decision making",
        title: "Prompting for Better Decisions",
        subtitle: "Use AI to think through options without letting AI decide for you",
      },
    },
    // ===========================================================================
    // TOOL REFERENCE - Where to practice
    // ===========================================================================
    {
      id: "section-tool",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "For this lesson",
        task: "Open ChatGPT to practice decision-support prompting",
        feature: "New conversation",
        tip: "Start fresh for each decision to avoid mixing contexts from different problems",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "AI as Thinking Partner, Not Decision Maker",
        paragraphs: [
          "One of the most valuable uses of ChatGPT is also one of the most misunderstood: **decision support.**",
          "",
          "Professionals face decisions every day: hire this candidate or that one? Launch now or wait? Raise prices or hold steady?",
          "",
          "ChatGPT can help you think through decisions systematically—but **you should still decide.** AI can point out considerations you missed, outline trade-offs, and play devil's advocate. But the final call is yours.",
        ],
      },
    },
    // ===========================================================================
    // HIGHLIGHT CARD - Key insight
    // ===========================================================================
    {
      id: "section-highlight",
      type: "highlightCard",
      content: {
        heading: "The Golden Rule of AI Decisions",
        insights: [
          "Use ChatGPT to expand your thinking, not replace it",
          "AI is excellent at identifying factors you might overlook and playing out scenarios",
          "It should inform your judgment, not substitute for it",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Effective Decision-Support Prompts",
        paragraphs: [
          "Here's how to prompt for decision support that actually helps. Start by framing the decision clearly: \"I'm deciding between [Option A] and [Option B]. Here's context: [your situation].\" This gives ChatGPT the basic parameters without asking it to choose for you.",
          "",
          'Next, ask for considerations you might have missed: "What factors should I consider? What am I not thinking about? What are the trade-offs?" This expands your thinking rather than narrowing it. Then request scenario analysis: "Play out what happens if I choose A. Then play out B. What do I gain or lose in each?" Seeing both paths laid out often clarifies the real stakes.',
          "",
          'The most valuable step is inviting challenge: "Argue against my preferred option. What\'s the strongest case against it?" This counteracts your natural bias toward the choice you\'re already leaning toward. Finally, ask for summary, not decision: "Summarize the key considerations but don\'t tell me what to do. I need to decide." This keeps the human in charge of the final call while benefiting from AI-powered analysis.',
        ],
      },
    },
    // ===========================================================================
    // SCENARIO CARD - Real-world example
    // ===========================================================================
    {
      id: "section-scenario",
      type: "scenarioCard",
      content: {
        title: "Real-World Scenario",
        situation:
          "Marcus is hiring a project manager for his 4-person marketing agency. He's torn between two candidates: Candidate A has 5 years experience with a strong process background but is quiet. Candidate B has only 2 years experience but is very personable and learns quickly.",
        challenge:
          "Marcus is leaning toward Candidate A because of experience, but Candidate B really impressed him in the interview. His team is client-facing and fast-paced.",
        context:
          "This is a critical hire—Marcus doesn't have time to hire again if it doesn't work out.",
        outcome:
          "Using ChatGPT as a thinking partner, Marcus realized that in a small, client-facing team, personality and quick learning might matter more than deep experience. He hired Candidate B, built in process training, and the hire worked out beautifully.",
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Real Example: Hiring Decision",
        paragraphs: [
          "Here's how Marcus used ChatGPT without abdicating the decision. His opening prompt laid out the situation: \"I'm hiring a project manager for my marketing agency. Candidate A: 5 years experience, managed teams of 3-5, strong process background, quiet demeanor. Candidate B: 2 years experience, managed 1-2 people, very personable, quick learner. Our team is 4 people, fast-paced, client-facing. I'm leaning toward Candidate A but Candidate B impressed me. Help me think through this.\"",
          "",
          'Notice what he didn\'t ask: "Who should I hire?" Instead, he asked targeted questions: What factors matter most for a PM in a small, fast-paced agency? What are the risks of each candidate? What would success look like for each in 6 months? Make the strongest argument against my preference for Candidate A.',
          "",
          "The result was clarity. Marcus saw that experience matters (Candidate A's strength) but client-facing personality is critical for his small team (Candidate B's strength). He realized he'd have to mentor A on soft skills, but A brings process discipline that B lacks. His decision was to hire Candidate B, knowing he'd need to build in process training. The conversation helped him see the trade-off explicitly rather than relying on gut instinct alone.",
        ],
      },
    },
    // ===========================================================================
    // TEXT WITH IMAGE - Visual break
    // ===========================================================================
    {
      id: "section-image",
      type: "textWithImage",
      content: {
        title: "Human Judgment Matters",
        paragraphs: [
          "AI can analyze data and surface considerations, but the weight of final decisions rests with you. Your experience, values, and accountability are irreplaceable.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-9-inline-1.webp",
        imageAlt: "Learning and education",
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "When AI Should NOT Decide",
        paragraphs: [
          "There are decisions where AI input is valuable but AI should never have the final say:",
          "",
          "**People decisions**: Hiring, firing, promotions, team conflicts",
          "**Ethical decisions**: Right vs. wrong, gray areas, value judgments",
          "**Strategic bets**: Product launches, major investments, career changes",
          "**Client relationships**: Delivering bad news, negotiating, setting boundaries",
          "",
          "In these cases, use ChatGPT to expand your thinking—but you live with the consequences, so you decide.",
        ],
      },
    },
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Decision Journaling with AI",
        paragraphs: [
          "Here's a powerful practice: use ChatGPT to create a decision record you can learn from. Before deciding, prompt: \"I'm about to decide [X]. Help me think through considerations.\" This captures your thinking at the moment of decision, before you know the outcome.",
          "",
          'After deciding, create the record: "I decided on [X]. Here\'s my reasoning: [your reasons]. Summarize this in a decision log format." This formalizes what you were thinking so you can review it later. Then, weeks or months later, return to it: "Three months ago, I decided [X] because [reasons]. Here\'s what actually happened: [outcome]. What can I learn?"',
          "",
          "This builds your decision-making muscle over time. You're not just making decisions—you're learning from them systematically. The combination of AI-assisted analysis and structured reflection creates a feedback loop that improves your judgment with each important choice.",
        ],
      },
    },
    // ===========================================================================
    // QUICK PROMPT - Practice template
    // ===========================================================================
    {
      id: "section-quickprompt",
      type: "quickPrompt",
      content: {
        heading: "Practice: Decision Support",
        description:
          "Think of a decision you're facing. Don't ask ChatGPT what to do—ask it to help you think through it. Try at least 3 of the 5 prompting approaches from this lesson.",
        promptText:
          "I'm deciding between [Option A] and [Option B]. Context: [your situation]. Please: 1) List factors I might be overlooking, 2) Make the strongest argument AGAINST my preference for [preferred option], 3) Summarize key considerations but do NOT tell me what to decide.",
      },
    },
    // ===========================================================================
    // ACTIONABLE TASK - At END with full format
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Decision Support Session",
        purpose:
          "Using AI as a thinking partner (not decision maker) expands your perspective while keeping human judgment where it belongs. This session will help clarify a real decision you're facing.",
        instructions: [
          "Think of a real decision you're facing (career, project, client, hiring, etc.)",
          "Ask ChatGPT to list factors you might be overlooking",
          "Request the strongest argument AGAINST your preferred choice",
          "Ask ChatGPT to summarize considerations but NOT to tell you what to decide",
        ],
        deliverable:
          "A decision analysis document with considerations, counter-arguments, and your personal next step",
        estimatedTime: "10 minutes",
        starterPrompt:
          "I'm deciding between [Option A] and [Option B]. Context: [your situation]. Please: 1) List factors I might be overlooking, 2) Make the strongest argument AGAINST my preference for [preferred option], 3) Summarize key considerations but do NOT tell me what to decide.",
        successCriteria: [
          "You did NOT ask ChatGPT to make the decision for you",
          "You received at least 3 considerations you hadn't fully thought through",
          "You got a strong counter-argument to your preference",
        ],
      },
    },
    // ===========================================================================
    // CHECKPOINT - End-of-lesson
    // ===========================================================================
    {
      id: "section-quiz",
      type: "checkpoint",
      content: {
        question: "What is the golden rule of using AI for decisions?",
        options: [
          "Let AI make all decisions to save time",
          "Use ChatGPT to expand your thinking, not replace it",
          "Never use AI for any decision-making",
          "Only use AI for minor decisions",
        ],
        correctAnswer: 1,
        hint: 'Review "The Golden Rule of AI Decisions" and "Effective Decision-Support Prompts" sections if needed.',
      },
    },
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Decision-Support Mastery",
        description:
          "You now know how to use AI to expand your thinking without letting AI think for you. You get the benefits of AI perspectives while keeping human judgment where it belongs.",
        xpReward: 120,
        buttonText: "Complete Decision-Support Practice",
      },
    },
  ],
};
