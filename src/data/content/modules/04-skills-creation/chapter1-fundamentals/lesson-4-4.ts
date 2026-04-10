/**
 * Lesson 4.4: Ad Copy & Descriptions
 *
 * PURPOSE: Learn to use AI for creating compelling marketing copy
 *
 * CONTEXT: Fourth lesson of Module 4 (Creation). Focuses on persuasive
 * copywriting for ads, product descriptions, and landing pages.
 *
 * KEY RESPONSIBILITIES:
 * - Teach ad copy creation with AI
 * - Show product description writing
 * - Demonstrate landing page optimization
 * - Explain A/B testing workflows
 * - Emphasize ethical copywriting practices
 *
 * IMPLEMENTATION NOTES:
 * - 12-minute lesson converted from 22 slides to ~20 sections
 * - Uses before/after examples extensively
 * - Focus on psychological triggers in copy
 * - XP Calculation: Base 125 x 1.0 (10-20min) x 1.1 (Intermediate) + 30 (2 quizzes x 10 + 1 checkpoint x 10) = 168 XP
 *
 *
 * DEPENDENCIES:
 * - Module 1 (Foundation): Basic AI familiarity
 * - Module 2 (Productivity): Iteration concepts
 * - Lesson 4.1: AI as Writing Partner (prerequisite)
 *
 * @see lesson-4-1.ts - Prerequisite: basic AI writing collaboration
 * @see lesson-4-3.ts - Related: social media content
 * @created 2026-02-06
 */

import type { Lesson, LessonSection } from "@/types/content";

export const lesson_4_4: Lesson = {
  id: "lesson-4-4",
  chapterId: "ch1-fundamentals",
  moduleId: "04-skills-creation",
  lessonCategory: "tutorial",
  title: "Ad Copy & Descriptions",
  description:
    "Create compelling ad copy and product descriptions that convert browsers into buyers using AI assistance.",
  order: 4,
  estimatedMinutes: 12,
  xpReward: 168,
  format: "article",
  coverImage: "/images/courses/lessons/modules/creative-design-and-illustration-process.webp",
  coverTitle: "Ad Copy & Descriptions",
  sections: [
    // ==========================================================================
    // HERO SECTION
    // ==========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/04-skills-creation/lesson-4-4-cover.webp",
        imageAlt: "Ad Copy & Descriptions",
        title: "Ad Copy & Descriptions",
        subtitle: "Words that convert. AI generates variations, you pick winners.",
      },
    },

    // ==========================================================================
    // SECTION 1: Introduction
    // ==========================================================================
    {
      id: "s1-intro",
      type: "text",
      content: {
        title: "The Copywriting Challenge",
        paragraphs: [
          "Great copy is the difference between a scroll and a click. A browse and a purchase.",
          "But writing great copy is hard. It takes deep understanding of your audience, dozens of iterations to find what works, knowledge of persuasion psychology, and endless A/B testing.",
          "AI doesn't replace the need for testing. But it makes generating variations effortless.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: Comparison
    // ==========================================================================
    {
      id: "s2-comparison",
      type: "text",
      content: {
        title: "Copywriting: Then vs. Now",
        paragraphs: [
          "The difference in speed and volume between manual and AI-assisted copywriting is dramatic. This transformation changes how you approach every piece of marketing content.",
          "The manual process moves slowly. You brainstorm five to ten headline ideas, often hitting a creative wall. You write one version of body copy because creating alternatives feels too time-consuming. You test one headline at a time, stretching optimization across months. Finding winning combinations takes weeks, and you're constantly limited by your own creativity and energy.",
          "AI-assisted copywriting transforms the workflow. You generate fifty headline options in seconds, exploring angles you might never have considered. You create twenty body copy variations for testing without extra effort. You test multiple angles simultaneously, compressing months of learning into days. You explore creative directions you wouldn't think of naturally, expanding your creative range.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 3: Real example - Facebook ad
    // ==========================================================================
    {
      id: "s4-ad-example",
      type: "text",
      content: {
        title: "Real Example: Facebook Ad Copy",
        paragraphs: [
          "You're running ads for a time management course.",
          "The key is giving AI the right context about your audience, their pain points, and your unique angle.",
        ],
      },
    },

    // ==========================================================================
    // QUICK PROMPT: Ad Prompt Template
    // ==========================================================================
    {
      id: "s5-ad-prompt",
      type: "quickPrompt",
      content: {
        heading: "Your Brief to AI",
        description: "Use this structured prompt for ad copy:",
        promptText:
          "Product: 4-week online course - Time Management for Busy Professionals\n\nTarget Audience: Professionals 30-50, overwhelmed with work and life, feel like they're constantly behind\n\nKey Benefits: Reclaim 10+ hours/week, stop feeling guilty about downtime, actually finish your to-do list\n\nUnique Angle: Not about \"discipline\" - it's about systems and prioritization\n\nOffer: $197 (normally $497), 100 students only, starts Monday\n\nTone: Empathetic (we know it's hard), confident (we have the solution), not scammy",
        placeholders: [
          "Product details",
          "Target audience",
          "Key benefits",
          "Unique angle",
          "Offer",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 1
    // ==========================================================================
    {
      id: "q1-headlines",
      type: "quiz",
      content: {
        quiz: {
          question: "Which headline is most effective?",
          options: [
            "Time Management Course Available Now",
            "Reclaim 10 Hours Every Week (Without Working Harder)",
            "Learn to Manage Your Time Better",
            "Our New Course Will Help You",
          ],
          correctAnswer: 1,
        },
        context: "Specific benefits with numbers outperform generic headlines.",
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Headline Variations
    // ==========================================================================
    {
      id: "highlight-headlines",
      type: "highlightCard",
      content: {
        heading: "Headline Variations Using Different Triggers",
        insights: [
          'WEAK: "Time Management Course Available Now" - No emotion, no specificity',
          'PAIN AVOIDANCE: "Stop Waking Up Already Behind: A 4-Week System"',
          'SPECIFIC BENEFIT: "Reclaim 10 Hours Every Week (Without Working Harder)"',
          'CONTRARIAN POSITION: "The Time Management Course for People Who Hate Time Management Advice"',
          'SOCIAL PROOF: "Join 1,200+ Professionals Who Ditched Overwhelm for Good"',
          'EMOTIONAL RELIEF: "Finally: A System That Works Even When You\'re Exhausted"',
        ],
      },
    },

    // ==========================================================================
    // SECTION 4: Ad evolution
    // ==========================================================================
    {
      id: "s7-evolution",
      type: "textWithImage",
      content: {
        title: "Facebook Ad Evolution",
        paragraphs: [
          "After AI generates a draft, your marketing refinements make the difference.",
          "You add specific pain, make benefits concrete, add social proof, strengthen urgency, and break into shorter paragraphs for readability.",
        ],
        image: {
          src: "/images/courses/lessons/abstract-blue.jpg",
          alt: "Ad evolution from AI draft to final polished version",
          caption: "AI drafts. You convert features into emotional benefits.",
        },
      },
    },

    // ==========================================================================
    // CHECKPOINT
    // ==========================================================================
    {
      id: "c1-checkpoint",
      type: "checkpoint",
      content: {
        question: "What is the primary difference between features and benefits in copy?",
        options: [
          "Features are what it does, benefits are what it does for them",
          "Features are shorter than benefits",
          "Benefits are technical specifications",
          "There is no difference",
        ],
        correctAnswer: 0,
        hint: "Think about what matters to the customer - the specs or the outcome?",
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Product Description Principles
    // ==========================================================================
    {
      id: "highlight-product",
      type: "highlightCard",
      content: {
        heading: "Product Descriptions That Sell",
        insights: [
          "Lead with Benefits: Features are what it does. Benefits are what it does FOR THEM",
          "Address Objections: Pre-emptively answer doubts with guarantees or assurances",
          "Create Scenarios: Paint a picture of how the product fits their life",
          'Use Sensory Language: "Silky smooth" creates an experience better than "luxurious"',
          'Be Specific: "Free 2-day delivery or your order is free" beats "Fast shipping"',
        ],
      },
    },

    // ==========================================================================
    // QUICK PROMPT: Product Description Brief
    // ==========================================================================
    {
      id: "s9-coffee-example",
      type: "quickPrompt",
      content: {
        heading: "Product Description Brief",
        description: "Use this structure for product descriptions:",
        promptText:
          "Product: BrewMaster Pro - Automatic coffee maker with grinder\n\nTarget Customer: Coffee lovers who want cafe quality at home, busy professionals, age 30-50\n\nKey Features: Built-in grinder, programmable, thermal carafe, 24-hour timer, auto-clean\n\nUnique Advantages: Fresh ground every time, wake up to ready coffee, saves $150/month vs coffee shops\n\nPrice Point: Premium ($299) but saves money vs daily cafe visits",
        placeholders: [
          "Product name",
          "Target customer",
          "Key features",
          "Unique advantages",
          "Price",
        ],
      },
    },

    // ==========================================================================
    // SECTION 5: Feature vs benefit comparison
    // ==========================================================================
    {
      id: "s10-comparison",
      type: "text",
      content: {
        title: "Features vs. Benefits",
        paragraphs: [
          "The difference between features and benefits is subtle but critical. Features are technical specifications. Benefits are emotional outcomes. Mastering this distinction transforms your copy from informative to persuasive.",
          'Feature-focused copy states what a product has: "This laptop has 16GB RAM and a 512GB SSD." The reader\'s response is confusion: "Is that good? What does that mean for me?" Technical specifications require the reader to translate features into personal relevance—a cognitive burden many won\'t undertake.',
          'Benefit-focused copy translates those same specs into outcomes: "Run 20+ browser tabs without slowing down. Store thousands of photos. Never wait for your computer again." The reader\'s response becomes desire: "I need that!" Benefits meet the reader where they are, answering the only question that matters: what\'s in it for me?',
          "AI excels at this translation. Feed AI a list of features, and it instantly generates benefit-focused copy. Your job shifts from writing every word to selecting the most compelling benefits and ensuring accuracy.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 6: Emotional triggers
    // ==========================================================================
    {
      id: "s11-triggers",
      type: "text",
      content: {
        title: "Emotional Triggers in Copy",
        paragraphs: [
          "People buy based on emotion. They justify with logic.",
          "AI can help you tap into powerful triggers: Fear of missing out (FOMO), Desire for status or recognition, Wanting to belong, Avoiding pain or loss, Hope for a better future, Guilt or regret, Pride and achievement.",
          "Use them ethically. Your product should deliver on the emotional promise.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: A/B Testing Workflow
    // ==========================================================================
    {
      id: "highlight-ab-testing",
      type: "highlightCard",
      content: {
        heading: "AI-Powered A/B Testing Workflow",
        insights: [
          "1. Generate Variations: AI creates 20+ headline and body copy options",
          "2. Select Candidates: Choose 3-5 strongest options for testing",
          "3. Run Test: Split test with equal traffic",
          "4. Analyze Results: Compare click-through and conversion rates",
          "5. Iterate: Use winner as baseline, generate new variations",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 2
    // ==========================================================================
    {
      id: "q2-cta",
      type: "quiz",
      content: {
        quiz: {
          question: "Which CTA is most effective?",
          options: ["Submit", "Click here", "Get Instant Access", "Learn more"],
          correctAnswer: 2,
        },
        context: "Benefit-focused CTAs that tell users what they get outperform generic options.",
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Landing Page Elements
    // ==========================================================================
    {
      id: "highlight-landing-page",
      type: "highlightCard",
      content: {
        heading: "Landing Page Copy Elements",
        insights: [
          "Headline: One clear message - What do I get? Why do I want it?",
          "Subheadline: Elaborate on the headline, add credibility or specifics",
          "Benefits: 3-5 bullet points - What's in it for them?",
          'Social Proof: Testimonials, reviews, "as seen in," customer count',
          "Offer Stack: What they get, what it's worth, what they pay",
          'CTA Button: Action-oriented like "Get Instant Access" not "Submit"',
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Copywriting Formulas
    // ==========================================================================
    {
      id: "highlight-formulas",
      type: "highlightCard",
      content: {
        heading: "Proven Copywriting Formulas",
        insights: [
          "AIDA: Attention -> Interest -> Desire -> Action. The classic framework.",
          "PAS: Problem -> Agitation -> Solution. Identify pain, make it worse, offer relief.",
          "FAB: Features -> Advantages -> Benefits. What it has -> what it does -> what it does for them.",
          "4 Ps: Promise -> Picture -> Proof -> Push. Make a promise, paint a picture, prove it, ask for action.",
          "4 Us: Urgent -> Unique -> Useful -> Ultra-specific. Tick all four boxes for compelling copy.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 7: Trust vs scammy
    // ==========================================================================
    {
      id: "s20-trust",
      type: "text",
      content: {
        title: "Trustworthy vs. Scammy Copy",
        paragraphs: [
          "The line between persuasion and manipulation is thin. Staying on the right side preserves your reputation and builds lasting customer relationships. Understanding the difference helps you write copy that converts without crossing ethical boundaries.",
          'Scammy copy reveals itself through several red flags. Unrealistic promises like "Lose 20 lbs overnight" set expectations no product can meet. False urgency like "This email is ONLY for you!" manipulates emotions without genuine scarcity. Hiding price or terms creates suspicion that damages trust. Too many exclamation points signals desperation rather than enthusiasm. Vague claims with no specifics prevent readers from evaluating whether the offer fits their needs.',
          "Trustworthy copy takes the opposite approach. Realistic promises come with specific numbers that readers can verify. Genuine urgency stems from limited supply or real deadlines, not manufactured pressure. Transparent pricing and terms respect the customer's right to make informed decisions. A professional confident tone conveys authority without hype. Specific claims include proof points that back up assertions. Most importantly, trustworthy copy respects the customer's intelligence, treating readers as partners rather than targets.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 8: A/B testing impact
    // ==========================================================================
    {
      id: "s19-impact",
      type: "text",
      content: {
        title: "The Impact of A/B Testing",
        paragraphs: [
          "Testing beats guessing every time.",
          "Click-through rates improve by 127% on average from testing. Conversion rates see 45% lift from optimized copy. With AI, you can test 500% more variations than manual writing allows.",
          "The combination of AI generation plus systematic testing is unbeatable.",
        ],
      },
    },

    // ==========================================================================
    // TOOL REFERENCE
    // ==========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Generate ad copy and product descriptions",
        task: "Create multiple headline and copy variations for A/B testing",
        feature: "Rapid generation of persuasive copy with different emotional angles",
        tip: "Ask ChatGPT to create 20 headline variations using different psychological triggers, then pick the best 3 to test",
      },
    },

    // ==========================================================================
    // ACTIONABLE TASK
    // ==========================================================================
    {
      id: "main-challenge",
      type: "actionableTask",
      content: {
        title: "Create Converting Copy",
        purpose: "Apply AI-powered copywriting to create variations you can test for real results.",
        instructions: [
          "Pick ONE thing you're promoting: a product or service, a lead magnet or newsletter signup, or an event or webinar",
          "Give AI the product details and target audience using the prompt structure",
          "Generate 20 headlines and 5 ad variations with AI",
          "Select your top 3 to A/B test based on different emotional triggers",
          "Explain your choices and how you'd test them",
        ],
        deliverable: "20 headlines, 5 ad variations, and 3 selected for testing with rationale",
        estimatedTime: "15-20 minutes",
        successCriteria: [
          "Your brief included specific audience, benefits, and unique angle",
          "Headlines use different psychological triggers (not all the same approach)",
          "You selected headlines that test different hypotheses",
          "Your ad variations have clear, benefit-focused CTAs",
          "You have a plan for how to test and measure results",
        ],
      },
    },
  ] as LessonSection[],
};
