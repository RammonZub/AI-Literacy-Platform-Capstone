/**
 * Day 5: Claude Fundamentals
 *
 * TOOL MASTERY LESSON - Claude by Anthropic
 * NO gamification
 */

import type { Lesson } from "@/types/content";

export const lessonDay5: Lesson = {
  id: "day-5",
  chapterId: "chapter1-foundations",
  moduleId: "10-challenge-28-day-ai",
  title: "Claude Fundamentals",
  description:
    "Meet Claude by Anthropic—the AI known for nuanced reasoning, honest responses, and handling long documents.",
  order: 5,
  format: "article",
  lessonCategory: "tutorial",
  estimatedMinutes: 12,

  imageSearchTerms: [
    "Claude AI Anthropic interface",
    "AI assistant conversation clean",
    "document analysis professional",
  ],

  sections: [
    // === HERO SECTION ===
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-5-cover.webp",
        imageAlt: "Claude Fundamentals hero image",
        title: "Day 5: Claude Fundamentals",
        subtitle:
          "Meet Claude by Anthropic—the AI known for nuanced reasoning, honest responses, and handling long documents.",
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
          "You've learned ChatGPT. Now meet its main competitor: Claude. Created by Anthropic, Claude stands out for being more thoughtful, honest about its limitations, and exceptionally good at working with long documents.",
          "Many professionals use both—ChatGPT for some tasks, Claude for others. Here's why Claude deserves a spot in your toolkit.",
        ],
      },
    },
    {
      id: "opening-image",
      type: "textWithImage",
      content: {
        title: "Claude Interface",
        paragraphs: [
          "Claude's clean interface is designed for thoughtful conversations and serious document analysis.",
        ],
        image: {
          src: "/images/courses/modules/10-challenge-28-day-ai/day-5-inline-1.webp",
          alt: "Claude AI interface showing clean design and document upload",
          caption: "Claude's minimalist, powerful interface",
        },
      },
    },
    {
      id: "claude-vs-chatgpt",
      type: "text",
      content: {
        title: "Claude vs. ChatGPT: What's Different?",
        paragraphs: [
          "Both are excellent AI assistants, but they shine in different ways. Understanding these differences helps you choose the right tool for each task.",
          "",
          "The most significant difference is how each handles **long documents**. Claude can comfortably process 150+ pages in a single conversation, maintaining context and coherence throughout. ChatGPT, while capable, tends to struggle after about 50 pages—losing track of earlier sections or providing shallower analysis. If you regularly work with lengthy reports, contracts, or research papers, Claude's extended context window is a game-changer.",
          "",
          'Claude also distinguishes itself through **nuanced reasoning**. When you ask a complex question, Claude is more likely to acknowledge that "it depends" and walk you through the relevant trade-offs. Rather than giving you a single definitive answer, it explores the considerations that should inform your decision. This makes Claude particularly valuable for strategic thinking, ethical questions, and situations where there\'s no single right answer.',
          "",
          "Related to this is Claude's approach to **uncertainty**. When Claude doesn't know something or lacks sufficient information, it will typically tell you rather than making a confident guess. ChatGPT, while improved in recent versions, can still sometimes present speculation as fact. For high-stakes decisions where accuracy matters more than speed, Claude's intellectual honesty is a significant advantage.",
          "",
          "Many users also notice a difference in **writing style**. Claude's output tends to feel more natural and human-like, while ChatGPT can sometimes sound slightly formulaic or overly polished. This isn't universally true—both can produce excellent writing with the right prompting—but if you've ever felt that AI-generated text \"sounds like AI,\" you might find Claude's output requires less editing to feel authentic.",
          "",
          "Finally, Claude has built a reputation for superior **document analysis**. Upload a PDF, Word document, or text file, and Claude excels at summarizing key points, answering specific questions about the content, identifying patterns across sections, and extracting actionable insights. While ChatGPT offers similar capabilities, Claude's combination of long context and analytical depth makes it the preferred choice for serious document work.",
        ],
      },
    },
    {
      id: "when-to-use-claude",
      type: "text",
      content: {
        title: "When to Choose Claude Over ChatGPT",
        paragraphs: [
          "Knowing when to reach for Claude versus ChatGPT will make you more effective with both tools. Here are the situations where Claude typically delivers better results.",
          "",
          "First and foremost, choose Claude when you need to **analyze long documents**. If you're working with a 50-page contract, a detailed research report, or a comprehensive policy document, Claude's extended context window means it can actually read and understand the entire thing. You can ask questions that require connecting information across different sections, and Claude will maintain coherence throughout the conversation.",
          "",
          "Claude also excels when you need **thoughtful, nuanced responses** to complex questions. If you're wrestling with a strategic decision, exploring a philosophical question, or trying to understand a complicated situation with multiple stakeholders and competing interests, Claude's tendency to acknowledge trade-offs and explore different perspectives becomes valuable. You'll get analysis that helps you think, not just answers.",
          "",
          "When the **quality of writing matters**—particularly for content that needs to sound genuinely human—Claude often requires less post-editing. If you've ever spent time \"humanizing\" AI-generated text, you'll appreciate Claude's more natural prose style. This is especially true for longer-form content like articles, reports, or thoughtful correspondence.",
          "",
          "Choose Claude when you need **honest assessments** rather than confident assertions. In situations where accuracy matters more than feeling certain—medical information, financial decisions, legal questions—Claude's willingness to admit uncertainty can prevent costly mistakes. It won't always have the answer, but it also won't pretend to know something it doesn't.",
          "",
          "Finally, Claude is particularly strong for exploring **ethical considerations and balanced perspectives**. When you're thinking through the implications of a decision, considering stakeholder impact, or navigating a sensitive situation, Claude's measured approach helps you see multiple angles rather than rushing to a single conclusion.",
        ],
      },
    },
    {
      id: "account-setup",
      type: "text",
      content: {
        title: "Step 1: Create Your Claude Account",
        paragraphs: [
          "If you don't have a Claude account yet, here's what to do:",
          "",
          "1. Open your web browser",
          "2. Go to: claude.ai",
          '3. Click "Try Claude" or "Sign Up"',
          "4. Sign up with Google or your email",
          "5. Verify your account",
          "6. You'll see Claude's clean chat interface",
          "",
          "The free tier gives you access to Claude 3.5 Sonnet, which works great for most tasks. The paid tier (Claude Pro at $20/month) gives you more messages per day and access to Claude Opus for complex stuff.",
        ],
      },
    },
    {
      id: "interface",
      type: "textWithBullets",
      content: {
        title: "Step 2: Understanding Claude's Interface",
        paragraphs: ["Claude's interface is clean and minimal. Here's what you're looking at:"],
        bullets: [
          "**Left sidebar:** Your conversation history (like ChatGPT)",
          "**New Chat button:** Start a fresh conversation",
          "**Main area:** Where your conversation appears",
          "**Text box at bottom:** Where you type your messages",
          "**Paperclip icon:** Upload documents (PDF, Word, text files)",
          "**Claude's approach:** Notice how Claude asks clarifying questions and shows its reasoning",
        ],
      },
    },
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context:
          "You need to analyze a 50-page contract for key terms and risks. You want thorough, nuanced analysis. Which tool should you use?",
        quiz: {
          question:
            "You need to analyze a 50-page contract for key terms and risks. You want thorough, nuanced analysis. Which tool should you use?",
          options: [
            "ChatGPT - it's faster and handles everything",
            "Claude - it handles long documents and provides more nuanced analysis",
            "Gemini - for real-time web browsing",
            "Gemini - for finding source citations",
          ],
          correctAnswer: 1,
        },
      },
    },
    {
      id: "first-conversation",
      type: "text",
      content: {
        title: "Step 3: Your First Claude Conversation",
        paragraphs: [
          "Let's experience Claude's thoughtful approach firsthand:",
          "",
          '1. In Claude, click "Start a new chat"',
          '2. Type: "I\'m trying to decide between two job offers. What factors should I consider?"',
          "3. Press Enter",
          "",
          "Notice how Claude responds. You'll likely see it mention trade-offs, ask about your priorities, or acknowledge that \"it depends\" on your situation. This is Claude's style—thoughtful rather than prescriptive.",
        ],
      },
    },
    {
      id: "quick-prompt-1",
      type: "quickPrompt",
      content: {
        heading: "Try Claude's Document Analysis",
        description: "Claude excels at analyzing documents. Try this prompt:",
        promptText:
          "I'm going to share a document with you. Please read it and tell me: What are the 3 most important points? What questions should I ask about this? What am I missing?",
        placeholders: [],
      },
    },
    {
      id: "upload-exercise",
      type: "text",
      content: {
        title: "Try It: Upload a Document",
        paragraphs: [
          "Claude's document handling is its superpower. Try it now:",
          "",
          "1. Find a document on your computer (PDF, Word doc, or text file)",
          "2. In Claude, click the paperclip icon",
          "3. Select your document",
          '4. Type: "Summarize this in 3 bullet points and tell me what action items are mentioned."',
          "5. Press Enter",
          "",
          "Claude will read your entire document and answer your questions. This even works for documents 100+ pages long.",
        ],
      },
    },
    {
      id: "key-insight",
      type: "highlightCard",
      content: {
        heading: "Claude's Superpower",
        insights: [
          "Upload long documents and ask questions about them",
          "Get nuanced answers that acknowledge trade-offs",
          "Use Claude when you need thoughtful analysis over quick answers",
        ],
      },
    },
    {
      id: "checkpoint",
      type: "checkpoint",
      content: {
        question: "You need to analyze a 75-page research report. Which tool should you use?",
        options: [
          "ChatGPT—it's faster",
          "Claude—it handles long documents much better",
          "Either one works equally well",
          "Neither—AI can't handle documents that long",
        ],
        correctAnswer: 1,
        hint: "Think about what we said regarding document length...",
      },
    },

    // === MAIN CHALLENGE: HANDS-ON TOOL PRACTICE ===
    {
      id: "main-challenge",
      type: "actionableTask",
      content: {
        title: "Your Turn: Experience Claude's Document Analysis",
        purpose:
          "Claude's superpower is working with long documents. This task will give you hands-on experience with Claude's unique strength and show you why it's the go-to tool for document analysis.",
        instructions: [
          "1. Open Claude (claude.ai) and start a new chat",
          "2. Find a document on your computer that's at least 3-5 pages long (PDF, Word, or text file)",
          "3. Upload the document using the paperclip icon",
          "4. Ask Claude to analyze it with this prompt:",
          '   "Read this document and give me: 1) A 3-bullet summary, 2) The 3 most important insights, 3) 3 questions I should ask about this"',
          "5. Ask at least 2 follow-up questions based on Claude's analysis",
          "6. (Optional) Try the same document in ChatGPT and compare the results",
        ],
        deliverable:
          "A summary of Claude's analysis of your document, including the 3-bullet summary and 3 most important insights",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "Please analyze this document thoroughly. I need: 1) A concise 3-bullet point summary, 2) The three most important insights or takeaways, 3) Three strategic questions I should consider based on this content.",
        successCriteria: [
          "You successfully uploaded a document to Claude",
          "Claude provided a meaningful summary and insights",
          "You asked at least 2 follow-up questions to deepen your understanding",
          "You can explain when you'd choose Claude over ChatGPT for document work",
        ],
      },
    },
  ],
};

export default lessonDay5;
