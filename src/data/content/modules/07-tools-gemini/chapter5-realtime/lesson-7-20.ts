/**
 * Lesson 7.20: Maps, Travel, and Location Intelligence
 *
 * CHAPTER: 5 - Real-Time Intelligence
 * LESSON: 3 of 3 - Location-Based Decision Making
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach professionals how to use Gemini's integration with
 * Google Maps for business travel planning, local business research,
 * commute optimization, and location-based decision making.
 *
 * KEY RESPONSIBILITIES:
 * - Demonstrate local business recommendations
 * - Show travel planning with real-time data
 * - Teach commute optimization strategies
 * - Introduce location-based reminders and translation features
 *
 * TARGET AUDIENCE: 40-55+ non-technical professionals
 */

import type { Lesson } from "@/types/content";

export const lesson_7_20: Lesson = {
  id: "lesson-7-20",
  chapterId: "ch7-5-realtime",
  moduleId: "07-tools-gemini",
  title: "Maps, Travel, and Location Intelligence",
  description:
    "Navigate the world smarter with Gemini's location intelligence and travel planning capabilities",
  order: 3,
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
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-20-cover.webp",
        imageAlt: "Maps navigation and travel planning with mobile device",
        title: "Maps, Travel, and Location Intelligence",
        subtitle: "Navigate business travel smarter with Gemini's location capabilities",
      },
    },
    // ===========================================================================
    // SECTION 1: The Location Advantage
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why Location Intelligence Matters for Professionals",
        paragraphs: [
          "Every business trip, client meeting, and site visit involves location decisions. The difference between a good choice and a great one often comes down to local knowledge you don't have.",
          "",
          "Gemini's integration with Google Maps gives you that local knowledge instantly—current business hours, real reviews, traffic patterns, and nearby amenities.",
          "",
          "This isn't just about convenience. Better location decisions mean more productive trips, more successful client meetings, and less time wasted on logistics.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Local Business Research
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Finding the Right Places for Business",
        paragraphs: [
          "Gemini can research local businesses with the professional context you need for work situations. When planning client dinners, you can ask for 'highly-rated restaurants in [city] suitable for business meetings, quiet atmosphere, private seating available.' This level of specificity helps Gemini understand that you're not just looking for good food, but for an environment conducive to professional conversation and relationship building.",
          "",
          "Finding appropriate meeting venues becomes easier when you describe your needs clearly. A request like 'Coffee shops in [area] with reliable WiFi and quiet corners for informal meetings' produces recommendations tailored to productive work conversations rather than social gatherings. For business travel, asking about 'business-friendly hotels in [city] near the convention center with good work spaces' surfaces options that prioritize the amenities professionals actually need.",
          "",
          "The same approach works for service providers. Searching for 'Top-rated print shops near [location] that offer same-day service' combines quality filters with time constraints. Even parking intelligence becomes accessible: 'Best parking options near [address] with current rates and availability' helps you plan logistics for client visits or meetings in unfamiliar areas. These queries demonstrate how location intelligence becomes business intelligence when you frame your requests with professional context.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Business Travel Planning
    // ===========================================================================
    {
      id: "section-3",
      type: "textWithImage",
      content: {
        title: "Business Trip Planning Made Simple",
        paragraphs: [
          "Planning a business trip involves coordinating flights, hotels, meetings, and logistics. Gemini can help streamline this process by providing location-aware recommendations.",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-20-inline-1.webp",
        imageAlt: "Business travel planning and location navigation",
      },
    },
    // ===========================================================================
    // SECTION 4: Travel Planning Prompts
    // ===========================================================================
    {
      id: "section-4",
      type: "quickPrompt",
      content: {
        heading: "Business Trip Planning Prompt",
        description: "Use this prompt template to plan your next business trip efficiently.",
        promptText:
          "I'm traveling to [CITY] for business on [DATES]. I need:\n\n1. Hotel recommendations near [MEETING LOCATION/CONFERENCE] suitable for business travelers\n2. Restaurant suggestions for client dinners (quiet, professional atmosphere)\n3. Coffee shops with WiFi for working between meetings\n4. Best transportation options from airport to downtown\n\nConsider: walking distance to meetings, business amenities, and current reviews.",
      },
    },
    // ===========================================================================
    // SECTION 5: Real-Time Travel Intelligence
    // ===========================================================================
    {
      id: "section-5",
      type: "highlightCard",
      content: {
        heading: "Real-Time Travel Information",
        insights: [
          "Check current traffic conditions before heading to meetings",
          'Ask about weather for your destination: "What\'s the weather forecast for [city] this week?"',
          'Find current business hours: "Is [business] open now? What are their hours?"',
          'Get ETA estimates: "How long will it take to get from [A] to [B] right now?"',
          'Discover local events that might affect your plans: "Any major events in [city] this week?"',
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Commute Optimization
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Optimizing Your Daily Commute",
        paragraphs: [
          "If you commute regularly, Gemini can help you reclaim time and reduce stress:",
          "",
          '**Route comparison**: "What\'s the fastest route from [home] to [work] right now? Compare driving vs. public transit."',
          "",
          '**Timing optimization**: "What time should I leave to arrive at [destination] by [time], accounting for current traffic?"',
          "",
          '**Alternative routes**: "Are there any accidents or construction on my usual route today?"',
          "",
          '**Productive stops**: "What\'s a good coffee shop with WiFi on my route where I could work for an hour?"',
          "",
          '**Meeting planning**: "If I have meetings at [locations], what\'s the most efficient order to visit them?"',
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Location-Based Workflows
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Location-Based Professional Workflows",
        paragraphs: [
          "Combining Gemini's location intelligence with your professional needs creates powerful workflows that save time and improve outcomes. Site visit preparation becomes thorough and efficient when you ask 'What should I know about the area around [client address] before my visit?' Gemini can provide context about the neighborhood, nearby amenities, transportation options, and potential challenges to anticipate.",
          "",
          "Multi-stop optimization helps you make the most of travel time. Asking 'I need to visit these 4 locations tomorrow. What's the most efficient route?' produces a sequenced itinerary that minimizes travel time and accounts for traffic patterns. This turns what might be a scattered day of appointments into a smooth, efficient circuit.",
          "",
          "For networking and business development, you can discover professional opportunities by asking Gemini to 'Find professional networking events or business meetups happening in [city] this month.' When evaluating potential office locations, comprehensive questions like 'What amenities, restaurants, and services are within walking distance of [potential office location]?' help you assess whether a space will serve your team's needs. Even relocation decisions benefit from Gemini's ability to 'Compare neighborhoods in [city] for someone who values [criteria],' synthesizing information about commute times, cost of living, and quality of life factors into actionable recommendations.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: International Travel Features
    // ===========================================================================
    {
      id: "section-8",
      type: "textWithImage",
      content: {
        title: "International Travel and Translation",
        paragraphs: [
          "For international business travel, Gemini offers additional capabilities that can help you navigate unfamiliar territories with confidence.",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-20-inline-2.webp",
        imageAlt: "International travel and global navigation",
      },
    },
    // ===========================================================================
    // SECTION 9: International Features Details
    // ===========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "International Travel Intelligence",
        paragraphs: [
          "International business travel presents unique challenges that Gemini can help address. Real-time translation eliminates language barriers when you need them removed most. Asking 'Translate this phrase to [language]' gives you instant communication ability for common business situations, from checking into hotels to navigating local transportation.",
          "",
          "Cultural intelligence prevents embarrassing missteps. Questions like 'What are important business etiquette customs in [country]?' reveal norms around greetings, gift-giving, meeting protocols, and dining etiquette that might differ significantly from your home culture. Understanding these nuances demonstrates respect and builds stronger relationships with international colleagues and clients.",
          "",
          "Practical logistics become manageable with Gemini's assistance. Currency conversion queries like 'What's the current exchange rate between USD and [currency]?' help you understand pricing and budget appropriately. Learning about typical business hours and meeting customs in your destination country prevents scheduling mistakes. Transportation questions such as 'What's the best way to get from [airport] to [city center]?' help you arrive at meetings prepared and on time. These capabilities combine to make international business travel less stressful and more productive, allowing you to focus on your objectives rather than logistics.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: Practical Tips
    // ===========================================================================
    {
      id: "section-10",
      type: "highlightCard",
      content: {
        heading: "Location Intelligence Tips",
        insights: [
          "Be specific with addresses and landmarks for better results",
          "Ask about current conditions, not just general information",
          "Combine location questions with business context for better recommendations",
          "Save useful locations and routes for future reference",
          "Verify critical details (hours, reservations) directly with businesses",
        ],
      },
    },
    // ===========================================================================
    // SECTION 11: Tool Reference
    // ===========================================================================
    {
      id: "section-11",
      type: "toolReference",
      content: {
        tool: "gemini",
        action: "For location-based tasks",
        task: "Use Gemini to research locations, plan business trips, and get real-time travel intelligence",
        feature: "Google Maps Integration",
        tip: "Gemini can access current business hours, traffic conditions, and local recommendations",
      },
    },
    // ===========================================================================
    // SECTION 12: Quick Prompt
    // ===========================================================================
    {
      id: "section-12",
      type: "quickPrompt",
      content: {
        heading: "Try It Now: Plan a Hypothetical Trip",
        description: "Practice using Gemini's location intelligence with this exercise.",
        promptText:
          "I need to plan a day in [NEARBY CITY]. I have a meeting at [TIME] near [LANDMARK/ADDRESS]. Suggest: 1) Where to park, 2) A good coffee shop nearby for pre-meeting prep, 3) A quiet restaurant for lunch after the meeting.",
      },
    },
    // ===========================================================================
    // SECTION 13: Actionable Task (inline at end)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Plan a Real or Hypothetical Business Trip",
        purpose:
          "Practice Gemini's location intelligence by planning a business trip (real upcoming trip or hypothetical scenario).",
        instructions: [
          "Choose a destination (real upcoming trip or a city you'd like to visit for business)",
          "Ask Gemini for business-friendly hotel recommendations near your meeting area",
          "Request restaurant suggestions suitable for client dinners",
          "Find coffee shops with WiFi for working between meetings",
          "Ask about transportation options from airport to your meeting area",
        ],
        deliverable:
          "A complete business trip plan with hotel, restaurant, workspace, and transportation recommendations",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "I need to plan a day in [NEARBY CITY]. I have a meeting at [TIME] near [LANDMARK/ADDRESS]. Suggest: 1) Where to park, 2) A good coffee shop nearby for pre-meeting prep, 3) A quiet restaurant for lunch after the meeting.",
        successCriteria: [
          "You have hotel recommendations with business-friendly features",
          "You have at least 2 restaurant options for client dinners",
          "You have identified workspaces (coffee shops with WiFi)",
          "You know transportation options",
          "The plan is practical and actionable",
        ],
      },
    },
    // ===========================================================================
    // SECTION 14: Chapter Completion
    // ===========================================================================
    {
      id: "section-14",
      type: "completion",
      content: {
        title: "Real-Time Intelligence Chapter Complete",
        description:
          "You've mastered Gemini's real-time capabilities: smart research with live search, industry intelligence and news monitoring, and location-based decision making. In the next chapter, you'll learn advanced professional applications for communication, analysis, and collaboration.",
        xpReward: 100,
        buttonText: "Complete Chapter 5",
      },
    },
  ],
};
