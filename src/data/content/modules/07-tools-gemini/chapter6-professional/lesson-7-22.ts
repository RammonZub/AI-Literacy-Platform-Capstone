/**
 * Lesson 7.22: Research and Analysis Workflows
 *
 * CHAPTER: 6 - Advanced Professional Applications
 * LESSON: 2 of 4 - Research and Analysis Workflows
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Build systematic research and analysis workflows using Gemini
 *
 * KEY RESPONSIBILITIES:
 * - Conduct competitive analysis efficiently
 * - Review and analyze documents
 * - Create executive summaries
 * - Perform strategic analysis (SWOT, PESTLE)
 * - Structure research reports effectively
 */

import type { Lesson } from "@/types/content";

export const lesson_7_22: Lesson = {
  id: "lesson-7-22",
  chapterId: "ch7-6-professional",
  moduleId: "07-tools-gemini",
  title: "Research and Analysis Workflows",
  description: "Transform information into insights with systematic research workflows",
  order: 2,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-22-cover.webp",
        imageAlt: "Research and data analysis workspace",
        title: "Research and Analysis Workflows",
        subtitle: "Turn hours of research into minutes with Gemini's analysis capabilities",
      },
    },
    // ===========================================================================
    // SECTION 1: The Research Advantage
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why Gemini Changes Research",
        paragraphs: [
          "Traditional research means opening dozens of tabs, skimming articles, copying notes, and hoping nothing important was missed.",
          "",
          "Gemini's real-time Google Search integration fundamentally changes this. Instead of searching for information, you have a research assistant that finds, reads, synthesizes, and cites sources.",
          "",
          "The key advantage: Gemini can access current information, not just training data. This means competitive intelligence, market trends, and news analysis are always up-to-date.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Competitive Analysis Workflow
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Competitive Analysis Made Simple",
        paragraphs: [
          "A complete competitive analysis that once took hours can now be accomplished in minutes using Gemini's real-time search capabilities. Begin by listing your competitors and asking Gemini to research their recent activities. This initial scan surfaces news, announcements, and developments you might otherwise miss, giving you a current picture of the competitive landscape.",
          "",
          "Next, request a comparison table with key metrics such as pricing, features, and market positioning. Gemini can organize this information into a structured format that makes similarities and differences immediately apparent. Follow this by asking for strengths and weaknesses of each competitor. Gemini's analysis, combined with your industry knowledge, produces insights that neither could generate alone.",
          "",
          "The synthesis step is where real value emerges. Ask Gemini 'What gaps exist in the market?' to identify opportunities your competitors may have overlooked. This question prompts analysis that connects the dots between competitive offerings and unmet customer needs. Finally, generate an executive summary with actionable recommendations. This distills your research into a format that decision-makers can quickly absorb and act upon. The entire workflow produces professional-quality competitive intelligence in a fraction of the traditional time investment.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Document Review and Analysis
    // ===========================================================================
    {
      id: "section-3",
      type: "textWithImage",
      content: {
        title: "Document Review at Scale",
        paragraphs: [
          "Long documents, contracts, and reports consume hours of reading time. Gemini can analyze these documents in seconds.",
          "",
          "Upload a PDF or paste document text, then ask targeted questions. Gemini identifies key terms, flags potential concerns, summarizes sections, and extracts specific data points.",
          "",
          "Important: Always verify critical information. AI helps you find what matters faster, but your professional judgment validates it.",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-22-inline-1.webp",
        imageAlt: "Document analysis and review process",
      },
    },
    // ===========================================================================
    // SECTION 4: Executive Summary Creation
    // ===========================================================================
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "Executive Summary Formula",
        insights: [
          "Start with the bottom line: What's the key takeaway?",
          "Limit to 3-5 bullet points for busy executives",
          "Include one compelling data point or metric",
          "End with clear next steps or recommendations",
          "Keep it under one page—brevity is the goal",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Strategic Analysis Frameworks
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Strategic Analysis Frameworks",
        paragraphs: [
          "Gemini excels at structured analysis frameworks that would otherwise take hours:",
          "",
          "**SWOT Analysis**: Provide context about your situation and ask Gemini to identify strengths, weaknesses, opportunities, and threats.",
          "",
          "**PESTLE Analysis**: Request analysis of Political, Economic, Social, Technological, Legal, and Environmental factors affecting your industry.",
          "",
          "**Porter's Five Forces**: Analyze competitive dynamics in your market.",
          "",
          "The power is in iteration: Start with Gemini's analysis, then refine based on your specific knowledge and context.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Analysis Framework Comparison
    // ===========================================================================
    {
      id: "section-6",
      type: "comparisonTable",
      content: {
        title: "Strategic Analysis Frameworks Compared",
        intro: "Choose the right framework based on your analysis needs:",
        columns: [
          { name: "Framework", description: "Type of analysis" },
          { name: "Best For", description: "When to use" },
          { name: "Output", description: "What you get" },
        ],
        rows: [
          {
            feature: "SWOT",
            values: ["Internal + External", "Strategic planning", "4-quadrant analysis"],
          },
          {
            feature: "PESTLE",
            values: ["External factors", "Market assessment", "Environmental scan"],
          },
          {
            feature: "Porter's Five Forces",
            values: ["Competitive dynamics", "Industry analysis", "Competitive position"],
          },
          {
            feature: "Competitive Matrix",
            values: ["Competitor comparison", "Product decisions", "Feature comparison"],
          },
          {
            feature: "Gap Analysis",
            values: ["Current vs. desired", "Improvement planning", "Action priorities"],
          },
        ],
        footer: "Combine multiple frameworks for comprehensive strategic analysis.",
      },
    },
    // ===========================================================================
    // SECTION 7: Research Report Structure
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Building Research Reports",
        paragraphs: [
          "A clear structure transforms research from interesting information into actionable intelligence. The executive summary leads every research report, distilling key findings into 3-5 bullet points that busy stakeholders can absorb in under a minute. This section answers the question: 'What do I need to know if I only have thirty seconds?'",
          "",
          "The background section explains why this research matters and what specific questions you set out to answer. This context helps readers understand the scope and relevance of your findings. The methodology section describes how you gathered information, which builds credibility and allows others to assess the reliability of your conclusions. Transparency about sources and methods distinguishes professional research from casual opinion.",
          "",
          "Your findings should be organized by theme or category rather than simply listing everything you discovered. This thematic organization makes the information more digestible and highlights patterns. The analysis section interprets what these findings mean for your organization, connecting research insights to business implications. Recommendations follow with specific, actionable next steps that decision-makers can approve and implement. Finally, an appendix contains sources, data tables, and supporting materials that provide depth for readers who want to dig deeper. This structure ensures your research drives action rather than simply occupying file space.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Tool Reference
    // ===========================================================================
    {
      id: "section-8",
      type: "toolReference",
      content: {
        tool: "gemini",
        action: "For research and analysis",
        task: "Use Gemini to conduct competitive analysis, create SWOT analyses, and synthesize research findings",
        feature: "Real-Time Search + Document Analysis",
        tip: "Always cite sources when using Gemini's research for reports or presentations",
      },
    },
    // ===========================================================================
    // SECTION 9: Quick Prompt - Competitive Analysis
    // ===========================================================================
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Try It Now: Quick Competitive Analysis",
        description: "Practice conducting a competitive analysis with Gemini's real-time search.",
        promptText:
          "Research the project management software market. Create a comparison of the top 3 tools (like Asana, Monday.com, and Notion) focusing on: pricing tiers, key features, target audience, and main differentiators. Then identify one gap or opportunity in this market.",
      },
    },
    // ===========================================================================
    // SECTION 10: Actionable Task (inline at end)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Complete a Strategic Analysis",
        purpose:
          "Apply research and analysis workflows by completing a SWOT or competitive analysis on a topic relevant to your work.",
        instructions: [
          "Choose a topic: a competitor, your team/department, or a business opportunity",
          "Ask Gemini to create a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats)",
          "Request real-time research: 'What are the latest developments related to [topic]?'",
          "Ask Gemini to identify one gap or opportunity from the analysis",
          "Create a 3-bullet executive summary of your findings",
        ],
        deliverable: "One complete SWOT or competitive analysis with sources and executive summary",
        estimatedTime: "12-15 minutes",
        starterPrompt:
          "Research the project management software market. Create a comparison of the top 3 tools (like Asana, Monday.com, and Notion) focusing on: pricing tiers, key features, target audience, and main differentiators. Then identify one gap or opportunity in this market.",
        successCriteria: [
          "You have completed a structured analysis (SWOT or competitive)",
          "You included real-time research with sources",
          "You identified at least one insight or opportunity",
          "You created a concise executive summary",
          "The analysis is relevant to your actual work context",
        ],
      },
    },
    // ===========================================================================
    // SECTION 11: Completion
    // ===========================================================================
    {
      id: "section-11",
      type: "completion",
      content: {
        title: "Research Mastery Achieved",
        description:
          "You now have systematic workflows for turning information into insights. Remember: Gemini accelerates research, but your expertise and judgment make it valuable. Always verify critical facts and add your professional context.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
