/**
 * Day 12: Document Analysis
 *
 * PRODUCTIVITY & RESEARCH LESSON - Master document analysis with AI
 * NO gamification
 *
 * Uses section types:
 * - heroImage: Opening hero section
 * - text: Core content blocks
 * - textWithBullets: Use cases and extraction types
 * - toolReference: Claude for document upload
 * - quickPrompt: Document extraction template
 * - scenarioCard: Contract review scenario
 * - quiz: Knowledge check
 * - highlightCard: Best practices summary
 * - actionableTask: Hands-on challenge
 */

import type { Lesson } from "@/types/content";

export const lessonDay12: Lesson = {
  id: "day-12",
  chapterId: "chapter2-productivity-research",
  moduleId: "10-challenge-28-day-ai",
  title: "Document Analysis",
  description:
    "Master document analysis with AI. Extract key information from contracts, reports, and research papers in minutes, not hours.",
  order: 12,
  format: "article",
  lessonCategory: "tutorial",
  estimatedMinutes: 12,

  imageSearchTerms: [
    "document analysis PDF",
    "contract review legal",
    "executive summary business",
  ],

  sections: [
    // === HERO SECTION ===
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-12-cover.webp",
        imageAlt: "Document Analysis hero image",
        title: "Day 12: Document Analysis",
        subtitle:
          "Master document analysis with AI. Extract key information from contracts, reports, and research papers in minutes, not hours.",
      },
    },

    // === SECTION 1: OPENING ===
    {
      id: "opening",
      type: "text",
      content: {
        paragraphs: [
          "**Tool for this lesson:** Claude by Anthropic (claude.ai)",
          "",
          "A 50-page report should not take 50 minutes to understand.",
          "",
          "Every day, professionals drown in documents: contracts, research papers, financial reports, policy documents, meeting notes. The old way? Read every word, highlight what matters, hope you did not miss anything.",
          "The AI way? Upload the document, ask the right questions, get answers in seconds.",
          "Today you will learn how to extract the signal from the noise in any document.",
        ],
      },
    },

    // === VISUAL BREAK ===
    {
      id: "context-image",
      type: "textWithImage",
      content: {
        title: "Extract Insights, Not Just Words",
        paragraphs: [
          "AI can read a 50-page document in seconds and tell you exactly what matters. The key is knowing what to ask.",
        ],
        image: {
          src: "/images/courses/modules/10-challenge-28-day-ai/day-12-inline-1.webp",
          alt: "Document analysis and information extraction",
          caption: "Turn documents into actionable intelligence",
        },
      },
    },

    // === SECTION 2: USE CASES ===
    {
      id: "use-cases",
      type: "text",
      content: {
        title: "When Document Analysis Saves Your Day",
        paragraphs: [
          "Document analysis is one of the highest-value AI skills you can develop. The return on investment is immediate and substantial: hours of reading compressed into minutes of analysis, with better comprehension and fewer missed details.",
          "**Contract review** becomes dramatically less risky. Instead of hoping you caught every important clause, you can systematically extract key terms, payment schedules, termination conditions, and potential risks before you sign. AI flags unusual terms you might skim past and translates dense legal language into plain English.",
          "**Research papers** and academic articles no longer require page-by-page reading to extract value. You can get the methodology, core findings, and practical implications in a fraction of the time—then decide if you need to dive deeper. This is especially powerful when evaluating whether a source is worth your full attention.",
          "**Meeting notes** transform from archives into action plans. AI pulls out decisions made, action items assigned, and ownership responsibilities that often get lost in lengthy recaps. Instead of re-reading notes to remember what you agreed to, you get a clean summary of commitments.",
          "**Financial reports** reveal their stories faster. AI identifies trends, spots anomalies, and surfaces key metrics relevant to your specific concerns. Rather than hunting through tables for the numbers that matter, you can ask direct questions and get targeted answers.",
          "**Legal documents** and **policy documents** become accessible. These are often written in specialized language that obscures practical implications. AI can translate dense policy text into clear explanations of what applies to your situation and what actions you need to take.",
        ],
      },
    },

    // === SECTION 3: HOW TO UPLOAD ===
    {
      id: "how-to-upload",
      type: "text",
      content: {
        title: "How to Upload Documents in Claude",
        paragraphs: [
          "Claude is the best tool for document analysis because it handles documents up to 150+ pages and truly understands context.",
          "",
          "**Step-by-step:**",
          "1. Open Claude at claude.ai",
          '2. Start a new chat (click "New Chat" in the sidebar)',
          "3. Look for the paperclip icon in the message input area",
          "4. Click the paperclip to upload your document",
          "5. Supported formats: PDF, Word (.docx), text files, and more",
          "6. Once uploaded, type your analysis question and press Enter",
          "",
          "Claude reads the entire document and answers questions based on its contents.",
        ],
      },
    },

    // === SECTION 4: TOOL REFERENCE ===
    {
      id: "tool-reference",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "For document analysis",
        task: "Upload a document using the paperclip icon, then use the prompts below.",
        feature: "Document upload (paperclip icon)",
        tip: "Claude handles documents up to 150+ pages. For very long documents, consider splitting into logical sections.",
      },
    },

    // === SECTION 5: TYPES OF EXTRACTION ===
    {
      id: "extraction-types",
      type: "textWithBullets",
      content: {
        title: "What to Ask For: The 4 Key Extractions",
        paragraphs: [
          "Most document analysis falls into four categories. Learn these and you can handle almost anything:",
        ],
        bullets: [
          "**Summary:** The big picture in 3-5 bullet points. What is this document about? What are the main points?",
          "**Insights:** The hidden gems. What would an expert notice that others might miss? What patterns or anomalies exist?",
          "**Risks/Red Flags:** What could go wrong? What are the potential issues, concerns, or things to watch out for?",
          "**Action Items:** What needs to happen next? Who needs to do what? By when?",
        ],
      },
    },

    // === SECTION 6: QUICK PROMPT - EXTRACTION ===
    {
      id: "quick-prompt-extraction",
      type: "quickPrompt",
      content: {
        heading: "The Universal Document Extraction Prompt",
        description:
          "Upload any document to Claude and use this prompt to get comprehensive analysis:",
        promptText:
          "Please analyze this document. I need:\n\n1. A 3-bullet executive summary\n2. The 3 most important insights\n3. Any risks, concerns, or red flags\n4. Recommended next steps or action items",
        placeholders: [],
      },
    },

    // === SECTION 7: SCENARIO CARD ===
    {
      id: "scenario-contract",
      type: "scenarioCard",
      content: {
        title: "Real-World Scenario: Contract Review",
        situation:
          "You are a freelance consultant about to sign a 12-month retainer contract with a new client. The contract is 18 pages of dense legal language. You need to understand what you are agreeing to before signing.",
        challenge:
          "You have 30 minutes before your call with the client to confirm the agreement. You need to identify key terms, potential issues, and whether this is a fair deal.",
        context:
          "In the past, you have signed contracts that had unfavorable terms you only discovered months later. You want to avoid that mistake again.",
        outcome:
          "Using Claude, you uploaded the contract and asked: 'What are the key terms, payment clauses, termination conditions, and any clauses that could work against me?' In 5 minutes, you identified a non-compete clause that was too broad and a late payment penalty that was excessive. You negotiated both before signing.",
      },
    },

    // === SECTION 8: QUIZ ===
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "Test your understanding of document analysis use cases.",
        quiz: {
          question:
            "You need to quickly understand the key findings from a 40-page industry research report before a meeting in 15 minutes. What is the most efficient approach?",
          options: [
            "Skim-read the entire document as fast as possible",
            "Upload to Claude and ask for a 3-bullet summary plus key insights",
            "Search for keywords in the document",
            "Ask a colleague who has read it",
          ],
          correctAnswer: 1,
        },
      },
    },

    // === SECTION 9: SUMMARIZING FOR AUDIENCES ===
    {
      id: "audience-summary",
      type: "text",
      content: {
        title: "Summarizing for Different Audiences",
        paragraphs: [
          "One document, many audiences. The same information needs different framing depending on who reads it.",
          "",
          "**For executives:** Focus on strategic implications, bottom-line impact, and decisions needed. Keep it under one page.",
          "**For team members:** Include actionable details, specific tasks, and relevant context. Be thorough but organized.",
          "**For clients:** Emphasize what matters to them, benefits, and next steps. Use their language, not internal jargon.",
          "",
          "The power move: Ask Claude to create multiple versions of the same summary for different audiences.",
        ],
      },
    },

    // === SECTION 10: QUICK PROMPT - EXECUTIVE SUMMARY ===
    {
      id: "quick-prompt-executive",
      type: "quickPrompt",
      content: {
        heading: "Executive Summary Template",
        description: "When you need to summarize a document for leadership, use this prompt:",
        promptText:
          "Create an executive summary of this document for senior leadership.\n\nRequirements:\n- Maximum 1 page\n- Lead with the bottom-line impact\n- Include: What is the issue? What are the options? What do you recommend?\n- End with: What decision is needed and by when?\n- Use clear, non-technical language",
        placeholders: [],
      },
    },

    // === SECTION 11: COMPARING DOCUMENTS ===
    {
      id: "comparing-documents",
      type: "text",
      content: {
        title: "Comparing Multiple Documents",
        paragraphs: [
          "Need to compare two contracts? Check what changed between document versions? Find differences across multiple reports?",
          "",
          "Claude can analyze multiple documents at once. Upload two or more files and ask:",
          "",
          '> "Compare these documents. What are the key differences? Which terms changed? What are the implications of each version?"',
          "",
          "**Common comparison tasks:**",
          "- Contract versions: What changed between draft 1 and draft 2?",
          "- Competitor proposals: How do these offers differ?",
          "- Policy updates: What is new in this revised policy?",
          "- Before/after analysis: What changed and why does it matter?",
        ],
      },
    },

    // === SECTION 12: BEST PRACTICES ===
    {
      id: "best-practices",
      type: "highlightCard",
      content: {
        heading: "Document Analysis Best Practices",
        insights: [
          "Always ask for sources: 'Where in the document did you find this?' to verify accuracy",
          "Start broad, then go deep: Get the summary first, then drill into specific sections",
          "Ask follow-up questions: The first answer is rarely complete",
          "Request specific formats: 'As a table', 'As bullet points', 'In order of importance'",
          "For long documents, consider uploading in sections for deeper analysis of each part",
          "Save your prompts: Build a personal library of document analysis prompts that work",
        ],
      },
    },

    // === SECTION 13: MAIN CHALLENGE ===
    {
      id: "main-challenge",
      type: "actionableTask",
      content: {
        title: "Your Challenge: Analyze a Real Document",
        purpose:
          "Apply document analysis to something you actually need to understand. This is not a hypothetical exercise - use a real document from your work or life.",
        instructions: [
          "1. Find a document you have been meaning to review (contract, report, policy, etc.)",
          "2. Open Claude (claude.ai) and start a new chat",
          "3. Upload the document using the paperclip icon",
          "4. Ask for: executive summary, key insights, risks, and action items",
          "5. Ask at least 2 follow-up questions about specific sections that matter to you",
          "6. Save or screenshot your analysis for future reference",
        ],
        deliverable: "Document analysis with summary, risks, and actions",
        estimatedTime: "12-18 minutes",
        starterPrompt:
          "Please analyze this document. I need:\n\n1. A 3-bullet executive summary\n2. The 3 most important insights\n3. Any risks, concerns, or red flags\n4. Recommended next steps or action items",
        successCriteria: [
          "You successfully uploaded a real document to Claude",
          "You received a comprehensive analysis with summary, insights, risks, and actions",
          "You asked at least 2 follow-up questions to deepen your understanding",
          "You can explain the key takeaways from your document to someone else",
        ],
      },
    },
  ],
};

export default lessonDay12;
