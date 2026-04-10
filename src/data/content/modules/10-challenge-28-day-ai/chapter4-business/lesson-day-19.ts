/**
 * Day 19: Idea Validation with AI
 *
 * TOOL MASTERY LESSON - Using Gemini for business research
 *
 * ENDING: actionableChallenge - This lesson teaches practical business research skills
 * using Gemini. Students validate real business ideas with market data, competitor
 * analysis, and customer pain points. The main task is a complete market validation
 * exercise with specific deliverables.
 * NO gamification
 */

import type { Lesson } from "@/types/content";

export const lessonDay19: Lesson = {
  id: "day-19",
  chapterId: "chapter4-business",
  moduleId: "10-challenge-28-day-ai",
  title: "Idea Validation with AI",
  description:
    "Use Gemini to validate your business ideas with real market data. Research competitors, market size, and customer needs with verified sources.",
  order: 19,
  format: "article",
  lessonCategory: "tutorial",
  estimatedMinutes: 15,

  imageSearchTerms: [
    "business idea validation",
    "market research analysis",
    "startup competitor research",
  ],

  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-19-cover.webp",
        imageAlt: "Idea Validation with AI hero image",
        title: "Day 19: Idea Validation with AI",
        subtitle:
          "Use Gemini to validate your business ideas with real market data. Research competitors, market size, and customer needs with verified sources.",
      },
    },
    {
      id: "opening",
      type: "text",
      content: {
        paragraphs: [
          "**Tool for this lesson:** Gemini AI",
          "**Where to access:** gemini.google.com (follow your workspace policy)",
          "",
          "Most business ideas fail. Not because execution is hard (though it is), but because the idea itself wasn't validated. People build products nobody wants.",
          "Today, you'll learn to validate ideas with data, not guesses. Gemini will help you research markets, competitors, and customer needs. Every answer comes with sources you can verify. By the end, you'll know if your idea is worth pursuing.",
        ],
      },
    },
    {
      id: "why-gemini-business",
      type: "text",
      content: {
        title: "Why Gemini for Business Research",
        paragraphs: [
          "Business decisions demand verified information, not AI hallucinations. When you're deciding whether to invest months of your life into a business idea, you need confidence that your market data is real—not invented by an AI that confidently makes things up. Gemini addresses this fundamental problem by providing citations by default: every claim links to a source you can verify independently.",
          "Unlike static AI models trained on outdated data, Gemini searches the live web for current market information. You get real-time data about market sizes, competitor news, and industry trends—information that might be months old in other AI tools. This freshness matters enormously when researching fast-moving markets or recent competitive developments.",
          "The research process with Gemini encourages healthy skepticism. Instead of blindly trusting AI-generated claims, you can click through to original sources and verify them yourself before making decisions. For complex questions, Pro Search digs deeper across multiple sources, and because everything is cited, you can share your findings with partners or investors who want to see the evidence behind your conclusions.",
        ],
      },
    },
    {
      id: "reflection-1",
      type: "reflectionPrompt",
      content: {
        prompt:
          "Why do you think verifiable citations are critical when making business decisions based on AI research? What could go wrong without them?",
      },
    },
    {
      id: "market-size",
      type: "text",
      content: {
        title: "Step 1: Research Market Size",
        paragraphs: [
          "Before building anything, understand the market. Is it big enough to be worth your time?",
          "",
          "**Open Gemini and search:**",
          "",
          "```",
          "What is the market size for [your product/service category]?",
          "",
          "Include:",
          "- Total addressable market (TAM)",
          "- Recent growth rate",
          "- Projected growth over 5 years",
          "- Key market drivers",
          "- Source links for all data",
          "```",
          "",
          "**Example for an AI writing tool:**",
          '"What is the market size for AI writing and content generation tools? Include TAM, growth rate, projections, and sources."',
        ],
      },
    },
    {
      id: "quick-prompt-1",
      type: "quickPrompt",
      content: {
        heading: "Research Your Market Size",
        description: "Copy this into Gemini and fill in your idea:",
        promptText:
          "What is the market size for [your product/service category]?\n\nInclude:\n- Total addressable market (TAM)\n- Recent growth rate\n- Projected growth over 5 years\n- Key market drivers\n- Source links for all data",
        placeholders: ["your product/service category"],
      },
    },
    {
      id: "competitor-research",
      type: "text",
      content: {
        title: "Step 2: Analyze Competitors",
        paragraphs: [
          "Competitors prove there's a market. Your job is to find gaps they're missing.",
          "",
          "**Search in Gemini:**",
          "",
          "```",
          "Who are the main competitors in [your market]?",
          "",
          "For each competitor, include:",
          "- Company name and brief description",
          "- Their target customer",
          "- Their pricing (if available)",
          "- Their main strengths",
          "- Potential weaknesses or gaps",
          "- News about them in the last 12 months",
          "- Source links",
          "```",
          "",
          "Gemini will search company websites, news articles, and review sites to build a competitor profile.",
        ],
      },
    },
    {
      id: "quick-prompt-2",
      type: "quickPrompt",
      content: {
        heading: "Analyze Your Competitors",
        description: "Copy this into Gemini:",
        promptText:
          "Who are the main competitors in [your market]?\n\nFor each competitor, include:\n- Company name and brief description\n- Their target customer\n- Their pricing (if available)\n- Their main strengths\n- Potential weaknesses or gaps\n- News about them in the last 12 months\n- Source links",
        placeholders: ["your market"],
      },
    },
    {
      id: "customer-pain",
      type: "text",
      content: {
        title: "Step 3: Understand Customer Pain Points",
        paragraphs: [
          "Products succeed when they solve real problems. Find out what problems your potential customers actually have.",
          "",
          "**Search in Gemini:**",
          "",
          "```",
          "What are the biggest challenges and pain points for [your target customer]",
          "when it comes to [the problem your idea solves]?",
          "",
          "Include:\n- Common complaints from forums, reviews, and social media\n- What solutions they currently use\n- What they dislike about current solutions\n- Language they use to describe the problem (for marketing)\n- Source links",
          "```",
          "",
          '**Example:** "What are the biggest challenges for small business owners when it comes to managing their finances?"',
        ],
      },
    },
    {
      id: "quick-prompt-3",
      type: "quickPrompt",
      content: {
        heading: "Research Customer Pain Points",
        description: "Copy this into Gemini:",
        promptText:
          "What are the biggest challenges and pain points for [your target customer] when it comes to [the problem your idea solves]?\n\nInclude:\n- Common complaints from forums, reviews, and social media\n- What solutions they currently use\n- What they dislike about current solutions\n- Language they use to describe the problem (for marketing)\n- Source links",
        placeholders: ["your target customer", "the problem your idea solves"],
      },
    },
    {
      id: "pro-search-tip",
      type: "text",
      content: {
        title: "Feature: Pro Search for Deep Research",
        paragraphs: [
          "For complex business research, use Pro Search. It's more thorough:",
          "",
          "**When to use Pro Search:**",
          "- Multi-part research questions",
          "- Competitive analysis requiring multiple sources",
          "- Market research that needs recent data",
          "- When you need comprehensive, not quick, answers",
          "",
          '**To activate:** Toggle "Pro" before your search, or click "Pro Search" when prompted.',
          "",
          "Pro Search takes 1-2 minutes but provides deeper analysis with more sources.",
        ],
      },
    },
    {
      id: "reflection-2",
      type: "reflectionPrompt",
      content: {
        prompt:
          "Think about a product or service you've used that seemed to miss the mark. What customer pain point were they not addressing? How could proper research have helped?",
      },
    },
    {
      id: "trend-validation",
      type: "text",
      content: {
        title: "Step 4: Validate Market Trends",
        paragraphs: [
          "Is your idea riding a growing trend or a declining one? Trends matter for timing.",
          "",
          "**Search in Gemini:**",
          "",
          "```",
          "What are the current and emerging trends in [your industry/category]?",
          "",
          "Include:\n- Growing trends (opportunities)\n- Declining trends (risks)\n- New technologies or approaches\n- Expert predictions for the next 2-3 years\n- Source links",
          "```",
        ],
      },
    },
    {
      id: "quick-prompt-4",
      type: "quickPrompt",
      content: {
        heading: "Validate Market Trends",
        description: "Copy this into Gemini:",
        promptText:
          "What are the current and emerging trends in [your industry/category]?\n\nInclude:\n- Growing trends (opportunities)\n- Declining trends (risks)\n- New technologies or approaches\n- Expert predictions for the next 2-3 years\n- Source links",
        placeholders: ["your industry/category"],
      },
    },
    {
      id: "validation-checklist",
      type: "text",
      content: {
        title: "Your Idea Validation Checklist",
        paragraphs: [
          "After your Gemini research, you should be able to answer six critical questions with confidence. First, is the market big enough to be worth pursuing? For venture-backed startups, you generally need a total addressable market of $1 billion or more, but bootstrapped businesses can thrive in smaller markets. The key is understanding whether the opportunity matches your ambitions and resources.",
          "Second, who else is solving this problem and what gaps exist in their offerings? Competitors validate that demand exists, but you need to find the openings they're missing. Third, do people actually have this problem? You need evidence from forums, reviews, and conversations—not just your intuition. Fourth, is this a growing or shrinking market? Timing matters enormously; entering a declining market is swimming upstream.",
          "Fifth, based on competitor weaknesses you've identified, how could you differentiate? Your unique positioning should emerge directly from gaps in the competitive landscape. Finally, can you verify all your key claims with independent sources? If you're making a pitch or deciding to invest your time, you need citations that would hold up under scrutiny. These six answers form the foundation of a validated business concept.",
        ],
      },
    },
    {
      id: "market-visual",
      type: "textWithImage",
      content: {
        paragraphs: [
          "**Visualizing Your Market Position**",
          "",
          "As you conduct your research, imagine a map of your market. You're plotting where competitors are located, what customer needs are unmet, and where your business fits in this landscape.",
          "",
          "Gemini helps you fill in this map with real data. Each search adds another layer: market size, competitor weaknesses, customer pain points, emerging trends. By the end, you have a complete picture of where opportunities exist.",
        ],
        imageSearchTerm: "market analysis competitive landscape visualization",
        image: {
          src: "/images/courses/modules/10-challenge-28-day-ai/day-19-inline-1.webp",
          alt: "Competitive analysis market landscape",
        },
      },
    },
    {
      id: "key-insight",
      type: "highlightCard",
      content: {
        heading: "The Validation Mindset",
        insights: [
          "Good research doesn't confirm your idea. It challenges it.",
          "Look for reasons your idea might fail, not just reasons it might work.",
          "Every claim should have a source you can verify.",
          "Competitors prove demand. Find the gap they're missing.",
          "Customer language is marketing gold. Use their words.",
        ],
      },
    },
    {
      id: "main-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Validate Your Business Idea",
        purpose:
          "Before investing time and money, validate that your business idea has real market potential using Gemini's research capabilities.",
        instructions: [
          "1. Open Gemini (gemini.google.com)",
          "2. Use the Market Size prompt to research your market's potential",
          "3. Use the Competitor Research prompt to identify who you're up against",
          "4. Use the Customer Pain Points prompt to find unmet needs",
          "5. Use the Market Trends prompt to understand timing",
          "6. Compile findings into a one-page validation summary",
        ],
        deliverable:
          "A one-page market validation document including: market size data, 3-5 main competitors with notes on their gaps, top 5 customer pain points you could address, and 3 key trends affecting your market (all with source citations).",
        estimatedTime: "20-30 minutes",
        successCriteria: [
          "All claims include source citations from Gemini",
          "Identified at least 3 specific competitor weaknesses you could exploit",
          "Found 5+ customer complaints that represent opportunities",
          "Can articulate whether your market is growing or shrinking",
          "Have a clear answer on whether this idea is worth pursuing",
        ],
      },
    },
    {
      id: "checkpoint",
      type: "checkpoint",
      content: {
        question: "What's the most important outcome of idea validation research?",
        options: [
          "Finding proof that your idea is perfect",
          "Understanding the real market, competitors, and customer needs with verified data",
          "Getting Gemini to write your business plan",
          "Finding investors who will give you money",
        ],
        correctAnswer: 1,
        hint: "Think about what makes research valuable for decision-making...",
      },
    },
  ],
};

export default lessonDay19;
