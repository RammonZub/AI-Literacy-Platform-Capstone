/**
 * Lesson 8.18: Long Document Analysis
 *
 * CHAPTER: 5 - Audio & Long Documents
 * LESSON: 3 of 4 - Processing Extended Context
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Master Kimi K2's 256K context window for analyzing long documents
 *
 * KEY RESPONSIBILITIES:
 * - Introduce Kimi K2's 256K context capabilities
 * - Demonstrate PDF analysis workflow
 * - Show contract and legal review techniques
 * - Cover research paper analysis
 * - Explain multi-document comparison
 */

import type { Lesson } from "@/types/content";

export const lesson_8_18: Lesson = {
  id: "lesson-8-18",
  chapterId: "ch8-5-audio",
  moduleId: "09-workflow-automation",
  title: "Long Document Analysis",
  description: "Process entire books, contracts, and research papers with 256K context",
  order: 18,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // HERO IMAGE SECTION
    // ===========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-18-cover.webp",
        imageAlt: "Documents and paperwork analysis",
        title: "Long Document Analysis",
        subtitle: "Analyze entire books, contracts, and research papers with 256K context",
      },
    },
    // ===========================================================================
    // SECTION 1: The 256K Context Revolution
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Kimi K2's 256K Context",
        paragraphs: [
          "Most AI models max out around 32K-128K tokens, roughly 25-100 pages of text. Kimi K2 on ChatGPT breaks this barrier with **256K tokens**, approximately **200 pages** of content in a single context.",
          "",
          "This isn't just about fitting more text. It's about understanding the full picture:",
          "- References to concepts defined 100 pages earlier",
          "- Consistency checks across an entire document",
          "- Questions that require synthesizing information from multiple chapters",
          "",
          "On ChatGPT, this massive context processes at speed, making practical what was previously theoretical.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: PDF Analysis Workflow
    // ===========================================================================
    {
      id: "section-2",
      type: "textWithBullets",
      content: {
        title: "PDF Analysis Workflow",
        paragraphs: ["Here's how to analyze lengthy PDFs effectively:"],
        bullets: [
          "**Step 1 - Extract**: Convert your PDF to text using any PDF reader or extraction tool",
          "**Step 2 - Chunk if needed**: Documents over 256K tokens need strategic splitting",
          "**Step 3 - Upload**: Paste the text into your ChatGPT conversation with Kimi K2",
          "**Step 4 - Query**: Ask specific questions about content, themes, or details",
          "**Step 5 - Iterate**: Follow up with deeper questions based on initial responses",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: What 256K Enables
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "What 256K Tokens Enables",
        insights: [
          "An entire business book (~150-200 pages) in one conversation",
          "Complete annual reports with all financial statements",
          "Full technical documentation for complex systems",
          "Entire legal contracts including all appendices and exhibits",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Contract and Legal Review
    // ===========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Contract and Legal Review",
        paragraphs: [
          "Legal documents are notorious for their length and complexity. Kimi K2 makes comprehensive review practical:",
          "",
          "**Key terms extraction**: 'What are all the defined terms in this contract and what do they mean?'",
          "",
          "**Obligation identification**: 'List all the obligations the vendor has to our company.'",
          "",
          "**Termination analysis**: 'Under what circumstances can either party terminate this agreement? What notice periods apply?'",
          "",
          "**Risk assessment**: 'What clauses create potential liability for our company?'",
          "",
          "**Important caveat**: AI analysis assists legal review but doesn't replace qualified legal advice for critical decisions.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Legal Document Visual
    // ===========================================================================
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Contract Analysis in Action",
        paragraphs: [
          "Instead of spending hours searching through dense legal language, you can ask natural questions and get precise answers with citations to specific sections.",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-18-inline-1.webp",
        imageAlt: "Legal documents and contract review",
      },
    },
    // ===========================================================================
    // SECTION 6: Research Paper Analysis
    // ===========================================================================
    {
      id: "section-6",
      type: "textWithBullets",
      content: {
        title: "Research Paper Analysis",
        paragraphs: ["Academic papers become more accessible with guided analysis:"],
        bullets: [
          "**Main contribution**: 'What is the primary contribution of this research?'",
          "**Methodology**: 'Explain the research methodology in simple terms.'",
          "**Key findings**: 'Summarize the main findings and their significance.'",
          "**Limitations**: 'What limitations does the authors acknowledge?'",
          "**Related work**: 'How does this paper relate to previous research in the field?'",
          "**Practical implications**: 'What are the real-world applications of this research?'",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Comparing Multiple Documents
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Comparing Multiple Documents",
        paragraphs: [
          "The 256K context enables powerful cross-document analysis:",
          "",
          "- **Version comparison**: 'What changed between v1 and v2 of this specification?'",
          "- **Competitor analysis**: 'Compare the feature sets described in these two product documents.'",
          "- **Consistency checking**: 'Are there any contradictions between the executive summary and the detailed findings?'",
          "- **Comprehensive synthesis**: 'What themes appear across all five of these customer feedback reports?'",
          "",
          "For documents exceeding 256K, split strategically (e.g., by chapter) and synthesize findings across conversations.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Quick Prompt Example
    // ===========================================================================
    {
      id: "section-8",
      type: "quickPrompt",
      content: {
        heading: "Analyze a Long Document",
        description: "Use this structured prompt for comprehensive document analysis:",
        promptText:
          "I've pasted a long document below. Please analyze it and provide:\n\n1. **Executive Summary**: A 3-sentence overview of what this document is about\n2. **Key Points**: The 5 most important takeaways\n3. **Structure**: How the document is organized\n4. **Critical Details**: Any specific numbers, dates, or named entities I should know\n5. **Questions**: 3 questions I should ask to better understand this document\n\nHere's the document:\n\n[PASTE YOUR DOCUMENT HERE]",
      },
    },
    // ===========================================================================
    // SECTION 9: Tool Reference
    // ===========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Use ChatGPT Console",
        task: "Analyze long documents with Kimi K2",
        feature: "Kimi K2 - 256K context window (~200 pages in one conversation)",
        tip: "Select Kimi K2 model for documents over 100 pages. Split documents exceeding 256K tokens by chapter.",
      },
    },
    // ===========================================================================
    // SECTION 10: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Analyze a Long Document",
        purpose: "Use Kimi K2's 256K context to analyze a lengthy document you've been avoiding.",
        instructions: [
          "Find a long document (report, contract, research paper) you need to understand",
          "Select 'kimi-k2' in ChatGPT Console (or use Kimi K2 if available)",
          "Paste the document and use the structured analysis prompt",
          "Ask 2-3 follow-up questions based on the initial analysis",
          "Extract key decisions, obligations, or insights",
        ],
        deliverable:
          "A comprehensive analysis of a long document with key points and follow-up insights",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "I've pasted a long document. Please analyze it and provide:\n\n1. **Executive Summary**: 3-sentence overview\n2. **Key Points**: 5 most important takeaways\n3. **Critical Details**: Specific numbers, dates, or named entities\n4. **Questions**: 3 questions I should ask to understand this better\n5. **Action Items**: What I need to do based on this document\n\nHere's the document:\n\n[PASTE YOUR DOCUMENT HERE]",
        successCriteria: [
          "Analyzed a document that would take 20+ minutes to read manually",
          "Received a comprehensive structured analysis",
          "Asked follow-up questions that clarified details",
          "Total time under 10 minutes",
        ],
      },
    },
    // ===========================================================================
    // SECTION 11: Completion
    // ===========================================================================
    {
      id: "section-10",
      type: "completion",
      content: {
        title: "Long Document Analysis Mastered",
        description:
          "You can now process documents that would overwhelm most AI systems. Kimi K2's 256K context opens up analysis of books, contracts, research papers, and complex documentation. In the final lesson, you'll combine everything into a complete audio-to-action pipeline.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
