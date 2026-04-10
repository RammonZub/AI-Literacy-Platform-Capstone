/**
 * Day 15: AI as Your Thinking Partner
 *
 * CAREER GROWTH LESSON - Using Claude for brainstorming and decision support
 * NO gamification
 */

import type { Lesson } from "@/types/content";

export const lessonDay15: Lesson = {
  id: "day-15",
  chapterId: "chapter3-career",
  moduleId: "10-challenge-28-day-ai",
  title: "AI as Your Thinking Partner",
  description:
    "Transform Claude into your strategic thinking partner for brainstorming, problem-solving, and better decisions.",
  order: 15,
  format: "article",
  lessonCategory: "tutorial",
  estimatedMinutes: 15,

  imageSearchTerms: [
    "strategic thinking brainstorming",
    "AI collaboration workspace",
    "decision making process",
  ],

  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-15-cover.webp",
        imageAlt: "AI as Your Thinking Partner hero image",
        title: "Day 15: AI as Your Thinking Partner",
        subtitle:
          "Transform Claude into your strategic thinking partner for brainstorming, problem-solving, and better decisions.",
      },
    },
    {
      id: "opening",
      type: "text",
      content: {
        paragraphs: [
          "**Tool for this lesson:** Claude by Anthropic",
          "**Where to access:** claude.ai (free, works in any browser)",
          "",
          "The best AI use isn't asking for answers—it's using AI to think better. Claude excels at this because it's designed for nuanced, thoughtful conversation.",
          "You'll learn to use Claude as a thinking partner: brainstorming ideas, working through problems, and making better decisions. By the end, you'll have a powerful new approach for any challenge.",
        ],
      },
    },
    {
      id: "why-claude",
      type: "text",
      content: {
        title: "Why Claude for Thinking",
        paragraphs: [
          "Claude is uniquely suited as a thinking partner because it handles complexity and ambiguity with nuanced reasoning. Unlike tools that rush to answers, Claude admits uncertainty when situations aren't clear-cut rather than forcing false confidence.",
          "What sets Claude apart is its ability to ask thoughtful clarifying questions. Instead of jumping to suggestions, it probes to understand your situation first. This mirrors how the best human consultants work—they listen before they advise.",
          "Claude also excels at maintaining context throughout long conversations. It remembers what you discussed earlier and builds on that foundation, creating a coherent dialogue rather than disconnected exchanges. When you're weighing a complex decision, Claude presents multiple viewpoints fairly, helping you see blind spots rather than just confirming what you already believe.",
        ],
      },
    },
    {
      id: "brainstorming-setup",
      type: "textWithImage",
      content: {
        title: "Step 1: Set Up Claude for Brainstorming",
        paragraphs: [
          "Let's start with a brainstorming session. Follow these steps:",
          "",
          "1. Open your web browser",
          "2. Go to: claude.ai",
          "3. Sign in (or create a free account if needed)",
          '4. Click "Start a new chat" or the "New Chat" button',
          "",
          "You're ready for your first thinking session.",
        ],
        image: {
          src: "/images/courses/modules/10-challenge-28-day-ai/day-15-inline-1.webp",
          alt: "Professional using AI as thinking partner for brainstorming",
          caption: "Set up Claude for strategic thinking sessions",
        },
      },
    },
    {
      id: "brainstorming-exercise",
      type: "text",
      content: {
        title: "Step 2: The Brainstorming Framework",
        paragraphs: [
          "Here's how to brainstorm effectively with Claude:",
          "",
          "**Start with context:** Tell Claude what you're brainstorming about and why.",
          "",
          "**Example opening:**",
          '"I need to brainstorm ideas for [topic]. Here\'s my situation: [brief context]. I want to explore [specific angle]. Ask me clarifying questions before suggesting ideas."',
          "",
          'The key phrase is "Ask me clarifying questions"—this makes Claude pause and understand your situation before jumping to suggestions.',
        ],
      },
    },
    {
      id: "quick-prompt-1",
      type: "quickPrompt",
      content: {
        heading: "Brainstorming Template",
        description: "Open Claude and try this template with a real challenge you're facing:",
        promptText:
          "I need to brainstorm ideas for [challenge or goal]. Here's my situation:\n\n- Context: [what's happening]\n- Constraints: [any limitations]\n- Goal: [what success looks like]\n\nPlease ask me 2-3 clarifying questions before suggesting ideas.",
        placeholders: [
          "challenge or goal",
          "what's happening",
          "any limitations",
          "what success looks like",
        ],
      },
    },
    {
      id: "problem-solving",
      type: "text",
      content: {
        title: "Step 3: Problem-Solving with Claude",
        paragraphs: [
          "Beyond brainstorming, Claude is excellent for working through problems. The technique is different: instead of asking for solutions, walk through the problem together.",
          "",
          "**The Problem-Solving Approach:**",
          "",
          "1. **Describe the problem:** What's happening, what should be happening",
          "2. **Share what you've tried:** This prevents Claude from suggesting things you already did",
          "3. **Ask for diagnostic questions:** Let Claude help you think through causes",
          "4. **Explore solutions together:** Treat Claude's suggestions as starting points, not final answers",
        ],
      },
    },
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "Check your understanding of brainstorming with Claude.",
        quiz: {
          question:
            "You're feeling stuck in your career and ask Claude for suggestions, but its ideas feel generic and don't quite fit your situation. What should you try?",
          options: [
            "Use a different AI tool",
            "Start your prompt with 'Please ask me clarifying questions first' to help Claude understand your situation",
            "Make your prompt much longer with more details",
            "Ask for 'more creative' ideas",
          ],
          correctAnswer: 1,
        },
      },
    },
    {
      id: "quick-prompt-2",
      type: "quickPrompt",
      content: {
        heading: "Problem-Solving Template",
        description: "Use this in Claude when facing a difficult problem:",
        promptText:
          "I'm facing a problem and want to think through it together.\n\n**The problem:** [describe what's wrong]\n**What I've tried:** [list previous attempts]\n**What I think might be the cause:** [your hypothesis]\n\nPlease help me:\n1. Identify what I might be missing\n2. Explore root causes\n3. Suggest approaches I haven't considered\n\nAsk questions to understand my situation better.",
        placeholders: ["describe what's wrong", "list previous attempts", "your hypothesis"],
      },
    },
    {
      id: "decision-support",
      type: "textWithImage",
      content: {
        title: "Step 4: Decision Support Framework",
        paragraphs: [
          'Claude shines when you\'re facing a tough decision. Instead of asking "What should I do?" use Claude to structure your thinking.',
          "",
          "**The Decision Framework:**",
          "",
          "1. **Define the decision:** What exactly are you deciding?",
          "2. **List your options:** What are the realistic choices?",
          "3. **Identify criteria:** What factors matter most to you?",
          "4. **Have Claude play devil's advocate:** Challenge your assumptions",
          "5. **Explore second-order effects:** What happens after you decide?",
        ],
        image: {
          src: "/images/courses/modules/10-challenge-28-day-ai/day-15-inline-2.webp",
          alt: "Professional decision making process with AI assistance",
          caption: "Use Claude to structure complex decisions",
        },
      },
    },
    {
      id: "quick-prompt-3",
      type: "quickPrompt",
      content: {
        heading: "Decision Support Template",
        description: "Use this when facing an important career decision:",
        promptText:
          "Help me think through a decision.\n\n**The decision:** [what you're deciding]\n**Options I'm considering:**\n1. [Option A]\n2. [Option B]\n\n**What matters to me:** [your criteria: salary, growth, work-life balance, etc.]\n\nPlease:\n1. Help me weigh these options against my criteria\n2. Play devil's advocate for each option\n3. Ask what I might be overlooking\n4. Help me think about long-term implications",
        placeholders: ["what you're deciding", "Option A", "Option B", "your criteria"],
      },
    },
    {
      id: "pro-tip",
      type: "text",
      content: {
        title: "Pro Tip: The 'What Am I Missing?' Question",
        paragraphs: [
          "This is the single most powerful question to ask Claude:",
          "",
          "\"Given everything we've discussed, what am I missing? What should I consider that I haven't brought up?\"",
          "",
          "This invites Claude to surface blind spots and assumptions you didn't even know you had. Use it at the end of any brainstorming or decision session.",
        ],
      },
    },
    {
      id: "key-insight",
      type: "highlightCard",
      content: {
        heading: "The Thinking Partner Mindset",
        insights: [
          "Don't ask Claude for answers—ask it to help you think",
          "Always provide context and ask clarifying questions first",
          "Use 'What am I missing?' to surface blind spots",
          "The best results come from back-and-forth conversation, not single prompts",
        ],
      },
    },
    {
      id: "main-task",
      type: "actionableChallenge",
      content: {
        title: "Your Turn: Apply Thinking Partner Framework",
        purpose:
          "Practice using Claude as a strategic thinking partner for a real work challenge you're currently facing.",
        instructions: [
          "Open claude.ai and start a new chat",
          "Choose a work challenge or decision you're currently wrestling with",
          "Use the brainstorming or decision-making template from this lesson",
          "Ask Claude to ask YOU clarifying questions before offering suggestions",
          "Engage in back-and-forth conversation for at least 5 minutes",
          "End with: 'What am I missing? What should I consider that I haven't brought up?'",
        ],
        deliverable:
          "A written summary of your thinking session including: your original challenge, 2-3 key insights from Claude, and 1 concrete next step you'll take.",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "I need to think through a work challenge. Here's my situation:\n\n- **Context:** [describe your work situation]\n- **The challenge:** [what you're wrestling with]\n- **What I've considered so far:** [your current thinking]\n\nPlease ask me 2-3 clarifying questions to help me think through this more deeply before offering any suggestions.",
        successCriteria: [
          "Claude asked you clarifying questions (not just gave answers)",
          "You had a back-and-forth conversation (at least 4-5 exchanges)",
          "You surfaced at least one new insight or blind spot",
          "You identified one concrete action to take",
        ],
      },
    },
    {
      id: "checkpoint",
      type: "checkpoint",
      content: {
        question: "What's the best approach when using Claude as a thinking partner?",
        options: [
          "Ask one question and accept the first answer",
          "Provide context, ask for clarifying questions, and engage in back-and-forth conversation",
          "Use Claude only for simple yes/no questions",
          "Copy Claude's suggestions without modification",
        ],
        correctAnswer: 1,
        hint: "Think about what makes a good thinking partner in real life...",
      },
    },
  ],
};

export default lessonDay15;
