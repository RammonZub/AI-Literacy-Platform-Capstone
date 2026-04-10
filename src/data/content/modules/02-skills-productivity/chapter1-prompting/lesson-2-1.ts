/**
 * Lesson 2.1: Advanced Prompt Engineering (ARTICLE FORMAT)
 *
 * PURPOSE: Master prompt structure, patterns, and techniques
 *
 * DESIGN PHILOSOPHY:
 * - Editorial article format for focused reading
 * - Real examples (Sarah, Tom - specific people)
 * - Practical techniques with immediate application
 * - Two comprehension quizzes + one checkpoint
 *
 * XP CALCULATION:
 * - Base: 75 XP (Module 2 standard)
 * - Length: 50 min -> x1.0 (10-20min multiplier)
 * - Difficulty: x1.2 (Intermediate)
 * - Quizzes: +20 XP (2 quizzes x 10)
 * - Checkpoint: +5 XP
 * - Total: 115 XP
 *
 * Duration: 50 minutes
 * XP REWARD: 115 points
 */

import type { Lesson } from "@/types/content";

export const lesson_2_1: Lesson = {
  id: "lesson-2-1",
  chapterId: "ch2-1-prompting",
  moduleId: "02-skills-productivity",
  lessonCategory: "theory",
  title: "Better Prompts For Better Results",
  description: "Learn how clear requests and useful structure lead to better AI output",
  order: 1,
  estimatedMinutes: 20,
  xpReward: 115,
  format: "article",
  coverImage: "/images/courses/lessons/modules/daily-workflow-rhythm-and-productivity.webp",
  coverTitle: "Better Prompts For Better Results",

  sections: [
    // ==========================================================================
    // HERO IMAGE SECTION
    // ==========================================================================
    {
      id: "hero-image",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/02-skills-productivity/lesson-2-1-cover.webp",
        imageAlt: "Advanced prompt engineering workspace",
        title: "Better Prompts For Better Results",
        subtitle: "Learn how clear requests and useful structure lead to better AI output",
      },
    },

    // ==========================================================================
    // SECTION 1: WHY PROMPT ENGINEERING MATTERS
    // ==========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why Your Prompts Feel Hit-or-Miss",
        paragraphs: [
          "Sometimes AI gets it exactly right. Sometimes it misses completely. Same AI. Same tool.",
          "The difference isn't the technology-it's how you ask.",
          "Great prompting is a learnable skill. With practice, you'll consistently get outputs that feel personalized, accurate, and ready-to-use.",
          "First prompt: 70% quality. Second iteration: 90% quality. Third refinement: 95% ready-to-use. The trick? Knowing what to refine.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: SARAH'S EXAMPLE
    // ==========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "What Sarah Discovered",
        paragraphs: [
          "Sarah tried to generate marketing copy with AI. Her first attempt was simple: 'Write marketing copy for our product.' The result was generic, feature-focused copy that could have been for any product. It felt impersonal and completely missed the mark.",
          "Her second attempt was dramatically different. She wrote: 'Write marketing copy for a project management tool targeting small business owners (20-50 employees). Focus on benefits: time saved, reduced stress, team alignment. Tone: practical and encouraging. Length: 200 words. Avoid: jargon, technical terms, vague promises.' This time, the output was specific copy that spoke directly to her audience's pain points. It sounded like it came from someone who genuinely understood their business.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: KEY INSIGHT
    // ==========================================================================
    {
      id: "highlight-1",
      type: "highlightCard",
      content: {
        heading: "The Difference Is Specificity",
        insights: [
          "Vague prompts produce vague outputs-generic, feature-focused, impersonal",
          "Specific prompts produce specific outputs-targeted, benefit-driven, personalized",
          "The second prompt included audience, benefits, tone, length, and constraints-transforming output from 70% to 95% quality",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 1: Check understanding of prompt quality
    // ==========================================================================
    {
      id: "section-3",
      type: "quiz",
      content: {
        quiz: {
          question: "What was the main difference between Sarah's first and second prompts?",
          options: [
            "The length of the prompt",
            "Specific context about audience, benefits, tone, and constraints",
            "Using different AI tools",
            "The time of day she wrote it",
          ],
          correctAnswer: 1,
        },
        context:
          "Sarah's second prompt included specific audience (small business owners), benefits (time saved, reduced stress), tone (practical/encouraging), and constraints (200 words, avoid jargon). This context transformed the output from generic to tailored.",
      },
    },

    // ==========================================================================
    // SECTION 3: THE 4-PART FRAMEWORK
    // ==========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "The 4-Part Prompt Framework",
        paragraphs: [
          "Every great prompt has four parts. Skip any part, and AI has to guess. It guesses wrong. The first part is CONTEXT: Who are you? What's the situation? What's the history? This grounds AI in reality and gives it the background needed to understand your request.",
          "The second part is ROLE: What perspective should AI take? Senior copywriter? Legal analyst? Research assistant? The role shapes voice and expertise level, determining whether the output sounds authoritative, casual, technical, or accessible.",
          "The third part is TASK: What exactly needs to be done? Be specific here. 'Analyze' is vague and leaves too much room for interpretation. 'Identify 3 key strengths' is clear and gives AI a concrete target to hit.",
          "The fourth part is CONSTRAINTS: Tone, length, format requirements. These guardrails keep output focused and eliminate the need for extensive editing later. Think of constraints as the boundaries that channel AI's creativity in exactly the direction you need.",
        ],
      },
    },

    // ==========================================================================
    // QUICK PROMPT: FRAMEWORK TEMPLATE
    // ==========================================================================
    {
      id: "quick-prompt-1",
      type: "quickPrompt",
      content: {
        heading: "The 4-Part Framework Template",
        description:
          "Use this template structure for any prompt. Fill in each section with your specific context.",
        promptText: `CONTEXT: You are a [your role] working on [task]. Situation: [What's happening? What's the history?] Audience: [Who will read this? What do they care about?]

ROLE: Act as a [senior/expert] [role] with [number] years of experience. Your style is [describe: direct, analytical, warm, authoritative].

TASK: Create [type of output] that [specific goal]. Include: [must-have elements] Focus on: [priority areas]

CONSTRAINTS: Tone: [professional/warm/formal/casual] Length: [under X words / brief / comprehensive] Format: [table / bullets / narrative / sections] Avoid: [what to exclude]`,
        placeholders: [
          "your role",
          "task",
          "What's happening? What's the history?",
          "Who will read this? What do they care about?",
          "senior/expert",
          "role",
          "number",
          "describe: direct, analytical, warm, authoritative",
          "type of output",
          "specific goal",
          "must-have elements",
          "priority areas",
          "professional/warm/formal/casual",
          "under X words / brief / comprehensive",
          "table / bullets / narrative / sections",
          "what to exclude",
        ],
      },
    },

    // ==========================================================================
    // SECTION 4: FRAMEWORK IN ACTION - TOM'S EMAIL
    // ==========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Framework in Action: Tom's Email",
        paragraphs: [
          "Tom needed to write an important email to a client about a project delay. Here's how he applied the framework to get exactly the right message. For CONTEXT, he wrote: 'I am a project manager at a design agency. My client Sarah has been waiting 2 weeks longer than expected for deliverables because she didn't provide requirements on time.'",
          "For ROLE, he specified: 'Act as a senior account manager who values long-term client relationships and takes responsibility.' This set the tone as someone who owns problems rather than deflects blame.",
          "For TASK, he requested: 'Write an email that acknowledges the delay, diplomatically explains we need her input to continue, and proposes next steps.' This gave AI a clear three-part objective.",
          "For CONSTRAINTS, he added: 'Tone: Professional but warm. Length: Under 150 words. Must include: timeline update, specific next step with 3 time options. Avoid: blame language, passive-aggressive phrasing.' The email Tom got back was professional, took ownership of the situation, clearly explained what was needed, and offered concrete next steps. Sarah responded positively and provided the materials within 24 hours.",
        ],
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: VISUAL BREAK
    // ==========================================================================
    {
      id: "visual-break-1",
      type: "textWithImage",
      content: {
        title: "From Vague to Specific",
        paragraphs: [
          "The transformation from a vague prompt to a specific one isn't about writing more-it's about writing with intention. Each element of the framework serves a specific purpose.",
        ],
        imageUrl: "/images/courses/modules/02-skills-productivity/lesson-2-1-inline-1.webp",
        imageAlt: "Professional workspace with organized workflow",
        imageCaption: "Structured prompts lead to structured outputs",
      },
    },

    // ==========================================================================
    // SECTION 5: FOUR KEY TECHNIQUES
    // ==========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Four Techniques That Transform Output",
        paragraphs: [
          "Beyond the framework, four techniques separate beginners from advanced prompters. The first is Role-Based Prompting, which sets expertise level and voice before AI writes a single word. Compare these two approaches: Without a role, you might write 'Write marketing copy.' With a role, you'd write 'Act as a senior copywriter with 15 years experience. Write marketing copy that's conversational, benefit-driven, and action-oriented.' The role establishes authority and approach immediately, transforming generic output into expert-level content.",
          "The second technique is Chain of Thought prompting. Ask AI to show its work step-by-step for better reasoning and fewer errors. A typical prompt would be: 'Think through this problem step by step. Explain your reasoning at each stage. Then provide your final answer.' This forces AI to be explicit about its logic, making it much easier to catch errors before they become problems.",
          "The third technique is Few-Shot Prompting. The principle is simple: teach by example. Show AI what you want, don't just tell it. For instance: 'Here are 3 examples of our product description style. Write 2 more in the same style.' Two examples is the minimum; three is ideal. The more examples you provide, the better the pattern recognition becomes.",
          "The fourth technique is Constraint Engineering, which shapes tone, length, and format through precise boundaries. The impact is dramatic: No constraints typically yields 40% useful output. Basic constraints bring you to 70% useful output. Smart constraints achieve 95% ready-to-use output. The more specific your constraints, the less editing you'll need to do later.",
        ],
      },
    },

    // ==========================================================================
    // COMPARISON TABLE: TECHNIQUES
    // ==========================================================================
    {
      id: "comparison-1",
      type: "comparisonTable",
      content: {
        title: "Prompt Techniques Comparison",
        intro: "Each technique serves a different purpose. Choose based on your specific need.",
        columns: [
          { name: "Technique", description: "The method used" },
          { name: "Best For", description: "When to use it" },
          { name: "Example", description: "How to apply it" },
        ],
        rows: [
          {
            feature: "Role-Based",
            values: ["Setting voice/expertise", '"Act as a senior copywriter..."'],
          },
          { feature: "Chain of Thought", values: ["Complex reasoning", '"Think step by step..."'] },
          { feature: "Few-Shot", values: ["Style matching", '"Here are 3 examples..."'] },
          { feature: "Constraints", values: ["Format control", '"Under 200 words, avoid jargon"'] },
        ],
        footer:
          "Combine multiple techniques for best results - e.g., use role + constraints + few-shot together.",
      },
    },

    // ==========================================================================
    // SECTION 6: NEGATIVE PROMPTING
    // ==========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Negative Prompting: What NOT to Do",
        paragraphs: [
          "Sometimes the fastest way to get what you want is to explicitly say what you don't want. Consider the difference between these two approaches. A positive-only prompt might be: 'Write concisely.' The result is often still too verbose and may include unnecessary fluff. But when you add negative constraints: 'Write concisely. Avoid: jargon, passive voice, fluff, redundancies,' the result becomes precise with clear exclusions and no wasted words.",
          "Negative prompting is especially powerful for tone control. Instead of struggling to describe exactly the right tone, you can use contrast: 'Professional but not stiff. Friendly but not casual. Confident but not arrogant.' This approach gives AI clear boundaries within which to work, dramatically improving the accuracy of the output's voice and style.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: NEGATIVE PROMPTING INSIGHT
    // ==========================================================================
    {
      id: "highlight-2",
      type: "highlightCard",
      content: {
        heading: "Negative Prompting Power",
        insights: [
          "Positive instructions alone leave room for interpretation",
          "Adding explicit exclusions narrows the output space dramatically",
          "Best for tone control: 'Professional but not stiff. Friendly but not casual.'",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 2: Check understanding of techniques
    // ==========================================================================
    {
      id: "section-8",
      type: "quiz",
      content: {
        quiz: {
          question: "Which technique involves showing AI examples of the style you want?",
          options: [
            "Role-based prompting",
            "Chain of thought",
            "Few-shot prompting",
            "Constraint engineering",
          ],
          correctAnswer: 2,
        },
        context:
          "Few-shot prompting teaches by example. By showing AI 2-3 examples of your desired style or format, you create a clear pattern for it to follow.",
      },
    },

    // ==========================================================================
    // SECTION 7: THE MASTER TEMPLATE
    // ==========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "The Master Template",
        paragraphs: [
          "This template works for emails, reports, analysis, creative work, and research. Copy it and use it for everything. The master template combines all four framework elements into a single, reusable structure that you can adapt to any situation.",
          "Start with CONTEXT to ground AI in your reality. Write something like: 'You are a marketing manager working on a product launch campaign. Situation: We're entering a competitive market with a differentiated product. Audience: Potential customers who are frustrated with existing solutions.' This gives AI the background it needs to understand your request.",
          "Next, specify the ROLE to set expertise and voice. For example: 'Act as a senior copywriter with 15 years of experience in B2B marketing. Your style is direct, benefit-focused, and conversational.' This establishes authority and tone immediately.",
          "Then define the TASK with crystal clarity. Write: 'Create an email sequence that nurtures leads from awareness to trial signup. Include: attention-grabbing subject lines, clear value propositions, social proof, and strong calls-to-action. Focus on addressing the top three pain points our research identified.'",
          "Finally, add CONSTRAINTS to shape the output. Specify: 'Tone: Professional but approachable. Length: Each email under 200 words. Format: Three emails with clear progression. Avoid: Jargon, pushy sales language, and generic phrases like 'revolutionary' or 'game-changing.''",
        ],
      },
    },

    // ==========================================================================
    // SECTION 8: REAL-WORLD EXAMPLES
    // ==========================================================================
    {
      id: "section-10",
      type: "text",
      content: {
        title: "Real-World Prompt Examples",
        paragraphs: [
          "Here are three examples of the framework applied to different scenarios. Each demonstrates how the same four-part structure adapts to wildly different use cases while maintaining consistent quality.",
          "For strategic analysis, a product manager might write: 'Context: I am a product manager evaluating a new feature opportunity. Our company is a mid-stage startup with limited engineering resources. Role: Act as a senior product strategist with 10 years experience in SaaS who has seen both successful and failed feature launches. Task: Analyze this feature opportunity using a structured framework. Identify strengths, weaknesses, opportunities, and threats with specific evidence for each. Constraints: Format as a table with columns for factor, evidence, and confidence level. Be specific about assumptions. Consider competitive landscape, technical feasibility, and market demand. Focus on business impact, not feature details.'",
          "For creative writing, a fitness coach could use: 'Context: I am a fitness coach creating content for busy professionals who struggle to maintain healthy habits. Role: Act as an engaging fitness writer who makes health feel achievable, not overwhelming. You've helped thousands of people build sustainable routines. Task: Write a 1000-word blog post about sustainable fitness that readers can start implementing today. Constraints: Audience is professionals aged 35-55 with limited time. Focus on micro-habits that take 10 minutes or less. Avoid extreme recommendations like 5am wake-ups, expensive supplements, or restrictive diets. Include concrete examples, science-backed benefits, and realistic implementation steps. Tone should be practical, encouraging, and evidence-based.'",
          "For report transformation, try: 'Context: I need to transform technical documentation for an executive audience who will make a go/no-go decision based on this summary. Role: Act as a business analyst who excels at translating complexity into clarity without losing accuracy. Task: Rewrite this technical report for executives who need the bottom line. Constraints: Focus entirely on business impact, ROI potential, and strategic implications. Remove all technical jargon or explain it briefly when necessary. Suggest data visualizations where they would help. Keep it under 500 words. Tone should be confident and actionable, with clear recommendations.'",
        ],
      },
    },

    // ==========================================================================
    // QUICK PROMPT: REAL-WORLD TEMPLATE
    // ==========================================================================
    {
      id: "quick-prompt-2",
      type: "quickPrompt",
      content: {
        heading: "Strategic Analysis Prompt",
        description: "Use this prompt template for any strategic analysis task.",
        promptText: `Context: I am a [role] evaluating [opportunity/problem].

Role: Act as a senior strategist with 10+ years experience in [industry]. Your analysis is thorough but concise.

Task: Analyze this [opportunity/problem]. Identify:
- Strengths
- Weaknesses
- Opportunities
- Threats

Constraints: Format as table. Be specific. Consider competitive landscape, feasibility, and impact. Focus on actionable insights, not just observations.`,
        placeholders: ["role", "opportunity/problem", "industry", "opportunity/problem"],
      },
    },

    // ==========================================================================
    // SECTION 9: COMMON MISTAKES
    // ==========================================================================
    {
      id: "section-11",
      type: "text",
      content: {
        title: "Common Prompt Mistakes to Avoid",
        paragraphs: [
          "Avoid these common pitfalls that undermine prompt effectiveness. Understanding what goes wrong helps you recognize and fix problems quickly.",
          "The first major mistake is being too vague. A prompt like 'Write something about marketing' gives AI almost nothing to work with. The result will be generic and unfocused. Instead, try 'Write a 300-word blog post about email marketing for small business owners who have less than 500 subscribers.' See how the second version specifies the format, topic, audience, and context? That specificity transforms the output from useless to useful.",
          "The second mistake is contradictory constraints. Saying 'Write something brief but comprehensive' puts AI in an impossible position. Brief and comprehensive are often opposites. Instead, make a clear choice: 'Write a concise summary under 200 words that covers these three key points.' Now AI knows exactly what to prioritize and what to leave out.",
          "The third mistake is providing no examples when style matters. Telling AI 'Write like we do' means nothing without reference points. Instead, say 'Here are two examples of our style. Write three more in the same voice.' Examples give AI a pattern to follow, which is far more effective than abstract descriptions of style.",
          "The fourth mistake is one-and-done thinking. Your first prompt is rarely perfect, and that's expected. Plan to iterate. Each refinement gets you closer to exactly what you want. In iteration one, focus on structure and main points. In iteration two, refine tone and add specificity. In iteration three, polish details and finalize. This systematic approach consistently produces better results than trying to nail everything in one shot.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: MISTAKES TO AVOID
    // ==========================================================================
    {
      id: "highlight-3",
      type: "highlightCard",
      content: {
        heading: "Avoid These Pitfalls",
        insights: [
          "Vague prompts = vague outputs - always be specific about what you want",
          "Contradictory constraints confuse AI - keep constraints aligned",
          "No examples = no pattern to follow - show, don't just tell",
          "One-and-done thinking - plan to iterate and refine",
        ],
      },
    },

    // ==========================================================================
    // CHECKPOINT: Test comprehensive understanding
    // ==========================================================================
    {
      id: "section-12",
      type: "checkpoint",
      content: {
        question:
          "A user asks: 'Write a sales email.' Using the 4-part framework, what would you add to make this an effective prompt?",
        options: [
          "Make the email longer and more detailed",
          "Add context (who you are, situation), role (sales expert), task (what the email should accomplish), and constraints (tone, length, must-haves, avoidances)",
          "Use more professional language",
          "Add more examples of sales emails",
        ],
        correctAnswer: 1,
        hint: "Remember the four parts: Context, Role, Task, and Constraints",
      },
    },

    // ==========================================================================
    // SECTION 10: CONCLUSION
    // ==========================================================================
    {
      id: "section-13",
      type: "text",
      content: {
        title: "You're Ready for Advanced Prompting",
        paragraphs: [
          "You have the framework: Context, Role, Task, Constraints.",
          "You know the techniques: Chain of thought, few-shot, constraints.",
          "You understand the process: Test, evaluate, iterate.",
          "Prompting is a skill that improves with practice.",
          "Start applying these techniques to your daily work.",
          "The better your prompts, the better your outputs.",
          "The better your outputs, the more time you save.",
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
        action: "Open ChatGPT and test the 4-part framework",
        task: "Apply the prompt transformation challenge to your own work",
        feature: "Use ChatGPT to compare outputs from vague vs. specific prompts",
        tip: "Start with a task you do regularly - email, research, or report writing",
      },
    },

    // ==========================================================================
    // ACTIONABLE TASK (INLINE SECTION)
    // ==========================================================================
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Prompt Transformation Challenge",
        purpose: "Apply the 4-part framework to transform a vague prompt into a powerful one.",
        instructions: [
          "Pick ONE task you do regularly: email, research, analysis, or report writing",
          "Write your current prompt (or what you'd typically say to AI)",
          "Apply the 4-part framework: Context, Role, Task, Constraints",
          "Test both prompts in ChatGPT or Claude",
          "Compare the outputs - what changed?",
        ],
        deliverable: "Your before-and-after prompts with a brief comparison of the outputs",
        estimatedTime: "10-15 minutes",
        starterPrompt: `CONTEXT: You are a [your role] working on [specific task]. Situation: [current context]. Audience: [who needs this].

ROLE: Act as a [expert role] with [X] years of experience in [field]. Your style is [describe style].

TASK: Create [output type] that [specific goal]. Include: [key elements].

CONSTRAINTS: Tone: [desired tone]. Length: [word count]. Format: [structure]. Avoid: [exclusions].`,
        successCriteria: [
          "Original prompt is vague (lacks at least 2 framework elements)",
          "Improved prompt includes all 4 framework parts",
          "Improved output is noticeably better than original",
          "You can articulate what specifically improved",
        ],
      },
    },
  ],
};
