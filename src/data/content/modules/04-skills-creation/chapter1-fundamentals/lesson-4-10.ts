/**
 * Lesson 4.10: Reviewing AI Output
 *
 * PURPOSE: Master quality control and review processes for AI-generated content
 *
 * KEY CONCEPTS:
 * - Quality control checklist
 * - Fact-checking AI content
 * - Brand voice alignment
 * - Legal and ethical review
 * - Continuous improvement
 *
 * - Original: 20 slides → Converted to 17 sections
 * - Added 2 quizzes (after sections 5 and 11)
 * - Added 1 checkpoint (after section 15)
 * - XP: 125 (base) × 0.9 (11min) × 1.0 (intermediate) + 20 (quizzes) + 5 (checkpoint) = 137.5 → 138 XP
 *
 * @created 2025-02-03
 * @modified 2026-02-06 - Converted to article format with quizzes and checkpoint
 * @modified 2026-02-23 - Added heroImage, lessonCategory, inline actionableTask, highlightCard, textWithImage, knowledgeCheck sections
 */

import type { Lesson, LessonSection } from "@/types/content";

export const lesson_4_10: Lesson = {
  id: "lesson-4-10",
  chapterId: "ch1-fundamentals",
  moduleId: "04-skills-creation",
  title: "Reviewing AI Output",
  description:
    "Develop a systematic approach to reviewing AI-generated content for accuracy, brand alignment, and quality.",
  order: 10,
  estimatedMinutes: 11,
  xpReward: 138,
  format: "article",
  lessonCategory: "exercise",
  coverImage: "/images/courses/lessons/modules/creative-design-and-illustration-process.webp",
  coverTitle: "Reviewing AI Output",

  sections: [
    // ==========================================================================
    // HERO IMAGE SECTION (at start)
    // ==========================================================================
    {
      id: "hero-image",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/04-skills-creation/lesson-4-10-cover.webp",
        imageAlt: "AI content review and quality control",
        title: "Reviewing AI Output",
        subtitle: "Your quality control system for AI content",
      },
    },

    // ==========================================================================
    // SECTION 1: Introduction
    // ==========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why Review Matters",
        paragraphs: [
          "AI can confidently generate content that is factually incorrect.",
          "It can be off-brand or generic.",
          "It can be missing critical context.",
          "It can be legally problematic.",
          "It can be emotionally tone-deaf.",
          "AI doesn't know your audience, your industry, your legal constraints, or your reputation.",
          "You publish. You're responsible.",
          "Review everything.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Real Risks
    // ==========================================================================
    {
      id: "hc1-risks",
      type: "highlightCard",
      content: {
        heading: "Real Risks of Unreviewed AI Content",
        insights: [
          "Hallucinations: AI invents facts, stats, quotes, and events that never happened",
          "Legal Liability: Unsubstantiated claims, IP infringement, privacy violations",
          "Brand Damage: Generic or off-brand content erodes credibility",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: The 5-Step Review Framework
    // ==========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "The 5-Step Review Framework",
        paragraphs: [
          "Every piece of AI content deserves systematic review. This five-step framework ensures nothing slips through the cracks.",
          "Start with the accuracy check by verifying all facts, numbers, dates, and claims. AI can confidently state information that's completely false, so treat every specific claim as unverified until you confirm it. This step comes first because even beautifully written content with false facts damages your credibility.",
          "Next is the quality check. Assess logic, flow, clarity, and completeness. Does the argument hold together? Are there gaps in reasoning? Is the main message clear? Quality issues undermine your authority even when the facts are correct.",
          "The brand check ensures voice, tone, and personality alignment. Does this sound like your organization? Would you say it this way? Generic AI content erodes brand distinctiveness, so this check catches content that could have come from anywhere.",
          "The legal check reviews for compliance, permissions, and disclosures. Are there claims that need substantiation? Content that requires attribution? Potential IP issues? When in doubt, legal review is worth the investment. Finally, the impact check confirms the content achieves its intended goal. Every piece should have a purpose—does this accomplish it?",
        ],
      },
    },

    // ==========================================================================
    // KNOWLEDGE CHECK: Review Framework
    // ==========================================================================
    {
      id: "kc1-review-framework",
      type: "knowledgeCheck",
      content: {
        question: "Which review step should come FIRST when evaluating AI content?",
        options: [
          "Check if it sounds like our brand voice",
          "Verify all facts, numbers, dates, and claims",
          "See if it will achieve our goals",
          "Check for legal compliance",
        ],
        correctAnswer: 1,
        explanation:
          "Accuracy comes first because even beautifully written, on-brand content that contains false information can damage your credibility and lead to serious consequences. Fix facts before investing time in other refinements.",
        hint: "Think about what could cause the most damage if left unchecked.",
      },
    },

    // ==========================================================================
    // SECTION 3: Efficient Fact-Checking Workflow
    // ==========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Efficient Fact-Checking Workflow",
        paragraphs: [
          "Systematic fact-checking catches errors without significantly slowing your workflow. The key is having a repeatable process that becomes second nature.",
          "Start by highlighting claims. Go through the AI output and mark every factual claim—statistics, dates, quotes, specific assertions. This visual inventory shows you exactly what needs verification and prevents claims from slipping through unnoticed.",
          "Next, check sources by verifying each claim against original data or authoritative sources. Don't trust AI's citations either—look up the original sources yourself. AI sometimes invents citations that look real but don't exist.",
          "Then correct errors by fixing inaccuracies or removing unverifiable claims entirely. If you can't verify it, don't publish it. There's no shame in cutting a compelling statistic that turns out to be fabricated.",
          "Add citations by linking to sources when appropriate. This builds credibility and gives readers a path to learn more. Finally, do one final read specifically for accuracy. Fresh eyes often catch things you missed the first time through.",
        ],
      },
    },

    // ==========================================================================
    // KNOWLEDGE CHECK: Fact-Checking
    // ==========================================================================
    {
      id: "kc2-fact-checking",
      type: "knowledgeCheck",
      content: {
        question:
          "What should you do with a specific statistic in AI content that you can't verify?",
        options: [
          "Keep it if it sounds plausible",
          "Remove it or replace with a verified statistic",
          "Add a disclaimer that it might not be accurate",
          "Keep it but round the numbers to make them less specific",
        ],
        correctAnswer: 1,
        explanation:
          "If you can't verify a specific statistic, don't publish it. Either remove it entirely or replace it with a verified statistic from a credible source. Your reputation depends on the accuracy of everything you publish.",
        hint: "Your credibility is on the line with every claim you make.",
      },
    },

    // ==========================================================================
    // QUIZ 1: Test understanding of accuracy checking
    // ==========================================================================
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "Let's check your understanding of accuracy verification.",
        quiz: {
          question: "What's the most important rule for fact-checking AI content?",
          options: [
            "If it sounds plausible, it's probably true",
            "If you can't verify it, don't publish it",
            "Only check numbers, not quotes or claims",
            "AI is usually accurate, so spot-checking is enough",
          ],
          correctAnswer: 1,
        },
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: Quality Assessment
    // ==========================================================================
    {
      id: "twi-quality-assessment",
      type: "textWithImage",
      content: {
        title: "Quality Assessment Guide",
        paragraphs: [
          "Beyond accuracy, assess the quality of the content itself.",
          "Check structure and flow: does the content flow logically? Are transitions smooth? Is the structure appropriate for the format? Does each section build on the previous one?",
          "Evaluate clarity and completeness: is the main message clear? Are there confusing points? Are there gaps in the argument? Is the conclusion supported by the content?",
        ],
        imageUrl: "/images/courses/modules/04-skills-creation/lesson-4-10-inline-1.webp",
        imageAlt: "Quality assessment checklist visualization",
      },
    },

    // ==========================================================================
    // KNOWLEDGE CHECK: Quality Assessment
    // ==========================================================================
    {
      id: "kc3-quality",
      type: "knowledgeCheck",
      content: {
        question: "When assessing content quality, which question helps evaluate STRUCTURE?",
        options: [
          "Does it grab attention immediately?",
          "Does each section build logically on the previous one?",
          "Is the tone consistent with our brand?",
          "Are there any legal risks?",
        ],
        correctAnswer: 1,
        explanation:
          "Structure evaluation focuses on how content is organized and connected. Questions about logical flow, transitions, and how sections build on each other help assess structural quality.",
        hint: "Think about the organization and flow of ideas.",
      },
    },

    // ==========================================================================
    // SECTION 5: Brand Alignment Review
    // ==========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Brand Alignment Review",
        paragraphs: [
          "Ensuring AI content sounds like it came from your organization requires checking multiple dimensions of brand alignment.",
          "First, check the voice. Does it sound like us? Would we say it this way? Is the tone consistent with our guidelines? Are we using our approved vocabulary? Voice is the most fundamental brand element—if AI content sounds generic, it fails this test immediately.",
          "Next, evaluate personality. Does the content reflect our brand personality traits? Is it appropriate for our audience? Does it balance professionalism and accessibility correctly? Your brand has a unique personality that should come through in every piece.",
          'Then check specifics. Did we remove AI clichés and generic phrases? Words like "delve," "unlock," and "game-changing" signal AI-generated content to savvy readers. Did we add real examples and stories? Did we inject our unique perspective? These specifics transform generic content into something distinctly yours.',
          "Finally, apply the comparison test. Read the AI content alongside 3 examples of your best content. Does it fit? If it stands out as different, something needs adjustment. This simple comparison catches brand misalignment that might otherwise slip through.",
        ],
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: Legal Review
    // ==========================================================================
    {
      id: "twi-legal-review",
      type: "textWithImage",
      content: {
        title: "Legal & Ethical Review",
        paragraphs: [
          "Before publishing anything publicly, check these critical areas.",
          "Review all claims to ensure product/service claims are accurate and substantiated. Check that you have permission for all images, quotes, and content. Ensure affiliate relationships and sponsored content are clearly disclosed.",
          "Verify you're not revealing confidential information and have protected customer privacy. When in doubt, legal review is worth the cost.",
        ],
        imageUrl: "/images/courses/modules/04-skills-creation/lesson-4-10-inline-1.webp",
        imageAlt: "Legal and ethical review checklist",
      },
    },

    // ==========================================================================
    // KNOWLEDGE CHECK: Legal Review
    // ==========================================================================
    {
      id: "kc4-legal",
      type: "knowledgeCheck",
      content: {
        question: "Which type of content requires the HIGHEST level of review scrutiny?",
        options: [
          "Blog posts and social media updates",
          "Marketing copy and promotional content",
          "Medical claims, financial advice, or legal guidance",
          "Internal team communications",
        ],
        correctAnswer: 2,
        explanation:
          "Content involving medical claims, financial advice, or legal guidance carries the highest risk. Incorrect information could cause serious harm to readers and significant legal liability for your organization. These always require expert or legal review.",
        hint: "Think about which content could cause the most harm if wrong.",
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Common AI Errors
    // ==========================================================================
    {
      id: "hc2-common-errors",
      type: "highlightCard",
      content: {
        heading: "Common AI Errors to Catch",
        insights: [
          "Made-Up Statistics: AI invents plausible-sounding but unsupported numbers. Always verify.",
          'Generic Examples: "For example, a company..." Replace with real, specific examples.',
          'Overconfident Claims: "Everyone knows," "Studies show" — add specificity or remove',
        ],
      },
    },

    // ==========================================================================
    // QUIZ 2: Test understanding of review process
    // ==========================================================================
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        context: "Let's practice identifying red flags in AI content.",
        quiz: {
          question: "Which of these is a red flag that requires verification?",
          options: [
            "Specific statistics with sources cited",
            "Generic phrases like 'one company did this'",
            "Content that matches your brand voice perfectly",
            "Well-structured arguments with clear flow",
          ],
          correctAnswer: 1,
        },
      },
    },

    // ==========================================================================
    // SECTION 9: Systematic vs. Passive Review
    // ==========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Review Approaches: Passive vs. Systematic",
        paragraphs: [
          "The difference in thoroughness and confidence between passive and systematic review approaches is significant. Understanding this distinction helps you choose the right level of scrutiny for each piece.",
          "Passive review is fast but risky. You skim content quickly, fixing obvious errors as you spot them. You assume the rest is fine because nothing jumped out at you. Publishing happens quickly, which feels efficient. The risk is that hidden errors slip through—subtle inaccuracies, brand misalignments, or legal issues that aren't immediately visible on a quick scan.",
          "Systematic review takes more time but delivers confidence. You use a checklist for every piece, ensuring no aspect goes unexamined. You verify all facts and claims before publishing. You check brand alignment carefully against your guidelines. Legal review happens for any public content that makes claims. The result is confidence that what you publish is accurate and appropriate. The time investment is typically five to ten minutes per piece—a worthwhile trade for the credibility you protect.",
        ],
      },
    },

    // ==========================================================================
    // QUICK PROMPT: Meta-Review
    // ==========================================================================
    {
      id: "section-10",
      type: "quickPrompt",
      content: {
        heading: "Meta-Review: AI Checking AI",
        description: "Use AI itself to help identify potential issues in content:",
        promptText:
          "Review this content and flag any claims that sound like facts or statistics. Identify anything that needs verification: [paste content]",
        placeholders: ["Content to review"],
      },
    },

    // ==========================================================================
    // KNOWLEDGE CHECK: Review Process
    // ==========================================================================
    {
      id: "kc5-review-process",
      type: "knowledgeCheck",
      content: {
        question: "What is the main advantage of systematic review over passive review?",
        options: [
          "It's faster to complete",
          "You catch hidden errors and gain confidence in what you publish",
          "You don't need to understand the content",
          "AI can do it automatically without human input",
        ],
        correctAnswer: 1,
        explanation:
          "Systematic review uses a checklist to ensure every aspect is verified. While it takes 5-10 minutes per piece, it catches hidden errors that passive skimming misses and gives you confidence that what you publish is accurate and appropriate.",
        hint: "Think about what you're trading time for.",
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: Continuous Improvement
    // ==========================================================================
    {
      id: "twi-continuous-improvement",
      type: "textWithImage",
      content: {
        title: "Use Reviews to Improve AI Performance",
        paragraphs: [
          "Every review is feedback for your next AI session.",
          "Track errors that AI makes repeatedly and document these patterns. Update your prompts by adding 'don't' instructions for common errors and providing examples of what to avoid.",
          "Refine your brand voice guidelines based on review findings. Over time, AI learns your preferences and makes fewer mistakes.",
        ],
        imageUrl: "/images/courses/lessons/abstract-blue.jpg",
        imageAlt: "Continuous improvement loop for AI content quality",
      },
    },

    // ==========================================================================
    // CHECKPOINT: Final knowledge check
    // ==========================================================================
    {
      id: "checkpoint-1",
      type: "checkpoint",
      content: {
        question: "What's the most important principle of reviewing AI content?",
        options: [
          "Skim quickly to save time",
          "Use systematic checklists and verify everything you can't confirm as accurate",
          "Assume AI is mostly accurate",
          "Only review legal content, not marketing content",
        ],
        correctAnswer: 1,
        hint: "Think about the balance between thoroughness and efficiency.",
      },
    },

    // ==========================================================================
    // SECTION 13: Continuous Improvement Loop
    // ==========================================================================
    {
      id: "section-13",
      type: "text",
      content: {
        title: "Continuous Improvement Loop",
        paragraphs: [
          "Building review insights back into your process creates a continuous improvement loop that makes AI increasingly effective for your specific needs.",
          "Start with weekly reviews. Sample 5 pieces of AI content and identify patterns of errors. Are there specific types of mistakes AI makes repeatedly? Does it always use certain clichés? Does it struggle with particular topics? Pattern recognition is the key to systematic improvement.",
          "Update your prompts based on these findings. Add prohibitions for errors you've identified (\"Never use the phrase 'game-changing'\") and corrections for common issues. Each update makes AI less likely to repeat the same mistakes.",
          "Share learnings across your team through regular syncs. When one person discovers a prompt improvement or identifies a common error pattern, everyone should benefit. Collective learning accelerates improvement for the whole organization.",
          "Track quality metrics over time. Monitor error rates, revision time, and the proportion of content that needs significant editing. Improvement should be visible in your metrics. The more you review and refine, the better AI performs for you—this investment compounds over time.",
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
        action: "Use ChatGPT or Claude for systematic content review",
        task: "Apply the 5-step review framework to verify AI-generated content",
        feature: "Use AI to help flag claims that need verification",
        tip: "Start with accuracy - even beautifully written content with false facts damages credibility",
      },
    },

    // ==========================================================================
    // ACTIONABLE TASK SECTION (inline at end)
    // ==========================================================================
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Review AI Content Like a Pro",
        purpose:
          "Apply the systematic review framework to real AI-generated content and build your quality control muscle.",
        instructions: [
          "Use AI to create a piece of content (email, social post, or short article)",
          "Apply the full 5-step review checklist: Accuracy (verify all facts), Quality (check logic and flow), Brand (ensure voice alignment), Legal (review claims and permissions), Impact (confirm it achieves the goal)",
          "Document every issue you find and correction you make",
          "Note patterns of errors that could be prevented with better prompts",
          "Update your prompts based on what you learned",
        ],
        deliverable:
          "The original AI content, your reviewed version with changes marked, and a summary of: 1) issues found in each category, 2) corrections made, 3) prompt improvements for next time.",
        estimatedTime: "20-30 minutes",
        starterPrompt:
          "Create [content type] for [audience] about [topic].\n\nGoal: [what you want to achieve]\nTone: [brand voice adjectives]\nLength: [word/character count]\n\nInclude: [required elements]\nAvoid: [things to never include]",
        successCriteria: [
          "All factual claims are verified or removed",
          "Content flows logically with clear transitions",
          "Voice and tone match your brand guidelines",
          "No unsubstantiated claims or legal risks remain",
          "At least one prompt improvement is documented for future use",
        ],
      },
    },
  ] as LessonSection[],
};
