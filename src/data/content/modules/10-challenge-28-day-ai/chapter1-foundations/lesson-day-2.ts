/**
 * Day 2: ChatGPT Fundamentals
 *
 * TOOL MASTERY LESSON - Teaches specific tool usage
 *
 * Structure:
 * - Opening with tool specification
 * - Step-by-step account setup
 * - Interface walkthrough
 * - First conversation exercise
 * - Uses new interactive sections: toolReference, knowledgeCheck, progressIndicator
 * - NO gamification (no XP, no completion celebration)
 */

import type { Lesson } from "@/types/content";

export const lessonDay2: Lesson = {
  id: "day-2",
  chapterId: "chapter1-foundations",
  moduleId: "10-challenge-28-day-ai",
  title: "ChatGPT Fundamentals",
  description:
    "Master the world's most popular AI assistant. Set up your account, learn the interface, and have your first conversation.",
  order: 2,
  format: "article",
  lessonCategory: "tutorial",
  estimatedMinutes: 12,

  imageSearchTerms: [
    "ChatGPT interface screenshot",
    "OpenAI logo blue green",
    "AI chat conversation interface",
  ],

  sections: [
    // === HERO SECTION ===
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-2-cover.webp",
        imageAlt: "ChatGPT Fundamentals hero image",
        title: "Day 2: ChatGPT Fundamentals",
        subtitle:
          "Master the world's most popular AI assistant. Set up your account, learn the interface, and have your first conversation.",
      },
    },

    // === SECTION 1: OPENING WITH TOOL SPECIFICATION ===
    {
      id: "opening",
      type: "text",
      content: {
        paragraphs: [
          "**Tool for this lesson:** ChatGPT by OpenAI",
          "",
          "ChatGPT is everywhere. Over 200 million people use it monthly, and for good reason—it handles pretty much anything you throw at it. Writing emails, brainstorming ideas, explaining complex topics... it's surprisingly good at all of it.",
          "Over the next 12 minutes, you'll set up your account, get comfortable with the interface, and have your first real conversation. You'll see pretty quickly why ChatGPT belongs in everyone's toolkit.",
        ],
      },
    },

    // === SECTION 2: TEXT WITH IMAGE ===
    {
      id: "opening-image",
      type: "textWithImage",
      content: {
        title: "ChatGPT Interface",
        paragraphs: [
          "The interface is clean and straightforward. Everything you need is right where you'd expect it.",
        ],
        image: {
          src: "/images/courses/modules/10-challenge-28-day-ai/day-2-inline-1.webp",
          alt: "ChatGPT interface showing chat area and message input",
          caption: "ChatGPT's clean, user-friendly interface",
        },
      },
    },

    // === SECTION 3: TOOL REFERENCE - WHERE TO ACCESS ===
    {
      id: "tool-access",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "For this lesson",
        task: "Open ChatGPT in a new tab so you can follow along with the exercises.",
        feature: "Free tier available",
        tip: "Keep ChatGPT open in a separate tab for easy reference",
      },
    },

    // === SECTION 4: WHAT CHATGPT EXCELS AT ===
    {
      id: "chatgpt-strengths",
      type: "text",
      content: {
        title: "What ChatGPT Does Best",
        paragraphs: [
          "ChatGPT shines at anything requiring creativity, reasoning, or general knowledge. Understanding its strengths helps you know when to reach for it versus other tools.",
          "",
          "For **creative writing**, ChatGPT is remarkably versatile. It can draft professional emails that sound like you, write blog posts in your preferred style, generate social media content that fits your brand voice, and even craft stories or narratives when you need them. The key is giving it enough context about your desired tone and audience—something you'll master by Day 4.",
          "",
          "When you're stuck and need **brainstorming** power, ChatGPT excels at generating options. Project names, business ideas, solutions to thorny problems, creative angles for a presentation—describe what you're looking for and it will produce a range of possibilities you might not have considered. You can then refine, combine, or discard these ideas as you see fit.",
          "",
          "ChatGPT also serves as an excellent **learning companion**. Ask it to explain a concept you've always found confusing, and it will break it down in plain language. Need to understand something for work? Preparing for a presentation on an unfamiliar topic? Want to explore a new field? ChatGPT can guide you through the fundamentals and answer follow-up questions as they arise.",
          "",
          "For those who work with code, ChatGPT offers substantial **programming assistance**. It can write code snippets, help debug errors, explain what a piece of code does, and suggest improvements. Even if you're not a developer, this capability extends to things like Excel formulas, SQL queries, and basic automation scripts.",
          "",
          "Finally, ChatGPT excels at **analysis and synthesis**. Feed it a long document and ask for a summary. Request that it extract key points from a meeting transcript. Ask it to compare two options and highlight trade-offs. What would take you an hour to read and process, ChatGPT can distill in seconds.",
        ],
      },
    },

    // === SECTION 5: ACCOUNT SETUP ===
    {
      id: "account-setup",
      type: "text",
      content: {
        title: "Step 1: Create Your ChatGPT Account",
        paragraphs: [
          "If you already have a ChatGPT account, skip to Step 2. Otherwise, here's exactly what to do:",
          "",
          "1. In your browser, go to the ChatGPT URL (chat.openai.com)",
          '2. Click the "Sign up" button',
          "3. You can sign up with Google, Microsoft, Apple, or your email",
          "4. Verify your email and phone number (OpenAI requires both)",
          "5. Once verified, you'll see the ChatGPT chat interface",
          "",
          "The free tier (GPT-3.5) works perfectly fine for most people. ChatGPT Plus is $20/month and gives you GPT-4, which is smarter, but you don't need it to get started.",
        ],
      },
    },

    // === SECTION 6: INTERFACE WALKTHROUGH ===
    {
      id: "interface",
      type: "textWithBullets",
      content: {
        title: "Step 2: Understanding the Interface",
        paragraphs: ["Look at your ChatGPT screen. Here's what you're seeing:"],
        bullets: [
          "**Left sidebar:** Your conversation history. Each chat is saved automatically.",
          "**New Chat button:** Starts a fresh conversation with no previous context",
          "**Main area:** Where your conversation appears",
          "**Text box at bottom:** Where you type your messages",
          "**Paperclip icon:** Attach files or images (useful for document analysis)",
          "**Microphone icon:** Speak instead of type (mobile only)",
        ],
      },
    },

    // === SECTION 7: FIRST CONVERSATION ===
    {
      id: "first-conversation",
      type: "text",
      content: {
        title: "Step 3: Your First ChatGPT Conversation",
        paragraphs: [
          "Let's have a real conversation. Follow these exact steps:",
          "",
          '1. Click "New Chat" in the top-left of your screen',
          "2. Click in the text box at the bottom",
          '3. Type: "Hello! I\'m new to AI. Can you tell me what you can help me with?"',
          "4. Press Enter or click the send button",
          "5. Read the response",
          "",
          "That's it—you just had your first AI conversation. Notice how ChatGPT responds naturally. It feels less like using software and more like chatting with a helpful colleague.",
        ],
      },
    },

    // === SECTION 8: QUIZ (Tests Section 4 content - providing context) ===
    {
      id: "check-1",
      type: "quiz",
      content: {
        context: "Let's test what you learned about giving ChatGPT context.",
        quiz: {
          question:
            "You're emailing your boss to request a deadline extension. What context should you give ChatGPT for the best result?",
          options: [
            "Just say 'Write an email asking for more time'",
            "Explain the project, why you need more time, your proposed new deadline, and how you'll ensure it's done",
            "Tell ChatGPT to make me sound like I'm working really hard",
            "Ask ChatGPT what excuses usually work for deadline extensions",
          ],
          correctAnswer: 1,
        },
      },
    },

    // === SECTION 9: QUICK PROMPT EXERCISE ===
    {
      id: "quick-prompt-1",
      type: "quickPrompt",
      content: {
        heading: "Try This Now: Ask About Your Work",
        description: "In the same ChatGPT conversation, type this prompt and press Enter:",
        promptText:
          "I work as a [your job title]. What are 3 ways you could help me be more productive in my role?",
        placeholders: ["your job title"],
      },
    },

    // === SECTION 10: TOOL REFERENCE FOR EXERCISE ===
    {
      id: "tool-exercise",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "For the exercise above",
        task: "Copy the prompt and paste it into your ChatGPT conversation. Replace [your job title] with your actual role.",
        tip: "The more specific you are about your role, the better the suggestions",
      },
    },

    // === SECTION 11: TIPS FOR BETTER RESULTS ===
    {
      id: "tips",
      type: "text",
      content: {
        title: "Getting Better Results from ChatGPT",
        paragraphs: [
          "The quality you get from ChatGPT depends entirely on how you ask. Small changes in your approach can dramatically improve your results.",
          "",
          '**Specificity is everything.** A prompt like "Help me write a professional email to my boss about a raise" will produce far better output than "Help with email." The first gives ChatGPT clear direction about audience, purpose, and tone. The second leaves everything to guesswork. When you\'re specific about what you need, ChatGPT can be specific in return.',
          "",
          '**Context transforms quality.** When you share relevant background—"I\'m a software developer with 2 years experience" or "This is for a client presentation to non-technical executives"—ChatGPT tailors its response to your situation. Without context, you get generic advice. With context, you get advice that actually fits your circumstances.',
          "",
          '**Treat it as a conversation, not a one-shot request.** If the first response isn\'t quite right, don\'t start over. Ask follow-up questions: "Can you make it more concise?" or "That\'s too formal, can you sound more friendly?" Each round of back-and-forth refines the output. Most people give up too early—the best results often come after two or three iterations.',
          "",
          "**Start fresh for new topics.** Each ChatGPT conversation builds context over time. This is powerful when you want continuity, but it becomes counterproductive when you switch to something completely different. Starting a new chat for a new topic keeps your conversations focused and prevents irrelevant context from bleeding into unrelated tasks.",
        ],
      },
    },

    // === SECTION 12: QUIZ ===
    {
      id: "check-final",
      type: "quiz",
      content: {
        context:
          "You asked ChatGPT to write an email, but the response sounds too formal. What's the best approach?",
        quiz: {
          question:
            "You asked ChatGPT to write an email, but it sounds too formal. What's the best approach?",
          options: [
            "Start over with a completely new chat",
            "Ask ChatGPT to make it more casual and explain what 'too formal' means to you",
            "Just use it as-is since formal is always better",
            "Try writing it yourself without AI",
          ],
          correctAnswer: 1,
        },
      },
    },

    // === MAIN CHALLENGE: HANDS-ON TOOL PRACTICE ===
    {
      id: "main-challenge",
      type: "actionableTask",
      content: {
        title: "Your Challenge: Complete a Real ChatGPT Project",
        purpose:
          "Let's put this into practice. You'll complete a real task with ChatGPT and see firsthand how these techniques make a difference.",
        instructions: [
          "1. Open ChatGPT and start a new chat",
          "2. Choose ONE of these practical tasks based on your interests:",
          "   - Write a professional email about a topic of your choice",
          "   - Brainstorm 10 ideas for a project you're working on",
          "   - Ask ChatGPT to explain a concept you've always wanted to understand",
          "3. Use the tips from this lesson: be specific, give context, and continue the conversation",
          "4. Ask at least 2 follow-up questions to refine the result",
          "5. Copy or screenshot your best exchange",
        ],
        deliverable:
          "A completed ChatGPT conversation showing your prompt, ChatGPT's response, and at least 2 follow-up refinements",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "Help me [describe what you want to accomplish]. My context is [share relevant background]. Please [specific request about format or style].",
        successCriteria: [
          "You started a new ChatGPT conversation from scratch",
          "Your initial prompt was specific and included context",
          "You asked at least 2 follow-up questions to improve the result",
          "You can see how each follow-up made the response better",
        ],
      },
    },
  ],
};

export default lessonDay2;
