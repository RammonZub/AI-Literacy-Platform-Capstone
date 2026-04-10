/**
 * Day 23: Custom GPTs for Personal Use
 *
 * TOOL MASTERY LESSON - ChatGPT Plus GPT Builder
 *
 * ENDING: actionableTask - This lesson teaches how to create personalized AI
 * assistants using ChatGPT Plus GPT Builder. Students build custom GPTs that
 * know their preferences, goals, and workflows. The main task is creating a
 * personal GPT for a real problem.
 * NO gamification
 * REQUIRES: ChatGPT Plus subscription
 */

import type { Lesson } from "@/types/content";

export const lessonDay23: Lesson = {
  id: "day-23",
  chapterId: "chapter5-personal",
  moduleId: "10-challenge-28-day-ai",
  title: "Custom GPTs for Personal Use",
  description:
    "Create your own personalized AI assistants. Build custom GPTs that know your preferences, goals, and workflows.",
  order: 23,
  format: "article",
  lessonCategory: "tutorial",
  estimatedMinutes: 15,

  imageSearchTerms: [
    "custom AI assistant personalization",
    "personalized digital assistant",
    "AI workflow automation personal",
  ],

  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-23-cover.webp",
        imageAlt: "Custom GPTs for Personal Use",
        title: "Day 23: Custom GPTs for Personal Use",
        subtitle:
          "Create your own personalized AI assistants. Build custom GPTs that know your preferences, goals, and workflows.",
      },
    },
    {
      id: "opening",
      type: "text",
      content: {
        paragraphs: [
          "**Tool for this lesson:** ChatGPT Plus by OpenAI",
          "**Where to access:** chat.openai.com (requires Plus subscription)",
          "",
          "Every time you start a new chat, you repeat yourself. You explain your situation, your preferences, your context. What if your AI already knew all of that?",
          "",
          "Custom GPTs are personalized AI assistants that remember your preferences, follow your instructions, and have access to your documents. Think of them as AI specialists designed exactly for your needs.",
          "",
          "**Important note:** Custom GPTs require a ChatGPT Plus subscription ($20/month). If you don't have Plus, you can still learn the concepts and apply them when you upgrade, or use Claude Projects for similar functionality.",
        ],
      },
    },
    {
      id: "what-are-custom-gpts",
      type: "text",
      content: {
        title: "What Are Custom GPTs?",
        paragraphs: [
          "Custom GPTs are specialized versions of ChatGPT that you configure once and use repeatedly. Think of them as AI assistants with persistent memory of your preferences, context, and reference materials. Instead of starting fresh with every conversation, a custom GPT already knows your situation and can dive straight into helping.",
          "",
          "The power comes from combining several elements. First, custom instructions tell the GPT how to behave, what tone to use, and what format to use for outputs. This means consistent responses every time, without re-explaining your preferences. Second, knowledge files let you upload documents the GPT can reference, such as recipes, workout plans, study materials, or style guides. The AI draws from these whenever relevant, making its responses deeply personalized.",
          "",
          "You can also enable specific capabilities like web browsing, image generation, or code execution depending on what your custom GPT needs to do. The key insight is that your preferences become baked in. Your dietary restrictions, fitness goals, writing style, and work context are all remembered automatically. And because custom GPTs are always available, you can access your personalized assistant anytime without the friction of re-explaining context.",
        ],
      },
    },
    {
      id: "gpt-builder-interface",
      type: "textWithImage",
      content: {
        title: "The GPT Builder Interface",
        paragraphs: [
          "ChatGPT Plus includes a visual builder that makes creating custom GPTs surprisingly easy. You don't need to code anything.",
          "",
          "The builder has two modes:",
          "- **Create mode:** Chat with the GPT Builder to describe what you want",
          "- **Configure mode:** Manually set instructions, upload files, and toggle capabilities",
          "",
          "Most people start in Create mode (conversational), then fine-tune in Configure mode.",
        ],
        image: {
          src: "/images/courses/lessons/modules/growing-business-analytics-and-scaling-strategy-vi.webp",
          alt: "GPT Builder interface",
        },
      },
    },
    {
      id: "tool-reference",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "To build your custom GPT",
        task: 'Open ChatGPT, click your profile picture, then select "My GPTs" and click "Create a GPT"',
        feature: "GPT Builder",
        tip: "Use the conversational Create mode first, then switch to Configure for fine-tuning",
      },
    },
    {
      id: "creating-first-gpt",
      type: "text",
      content: {
        title: "Step-by-Step: Creating Your First Custom GPT",
        paragraphs: [
          "**Step 1: Start the Builder**",
          "In ChatGPT Plus, click your profile > My GPTs > Create a GPT",
          "",
          "**Step 2: Describe Your GPT (Create Mode)**",
          "Tell the builder what you want in plain language:",
          "- What should this GPT help you with?",
          "- Who are you (your role, situation)?",
          "- What tone should it use?",
          "- Any specific formats you prefer?",
          "",
          "**Step 3: Fine-Tune in Configure Mode**",
          "Switch to the Configure tab to:",
          "- Edit the system instructions directly",
          "- Upload knowledge files",
          "- Toggle capabilities (web browsing, DALL-E, code interpreter)",
          "",
          "**Step 4: Test and Refine**",
          "Use the preview panel on the right to test your GPT. Keep adjusting until it behaves exactly how you want.",
        ],
      },
    },
    {
      id: "personal-gpt-ideas",
      type: "text",
      content: {
        title: "Personal GPT Ideas",
        paragraphs: [
          "The best custom GPTs solve problems you encounter repeatedly. Consider a Personal Meal Planner that knows your dietary restrictions, allergies, favorite cuisines, and cooking skill level. Instead of explaining your gluten-free, dairy-free needs every time you want recipe ideas, you simply ask what to make for dinner, and it suggests recipes based on what you actually have in your fridge.",
          "",
          "A Workout Buddy GPT takes the same approach for fitness. It knows your current fitness level, your goals, what equipment you have access to, and how much time you can realistically commit. The workouts it creates are ones you'll actually do because they're built around your real constraints, not an idealized version of your life.",
          "",
          "For students or lifelong learners, a Study Assistant GPT can be transformative. It knows your learning style, your current courses, and the specific areas where you tend to struggle. When you need a concept explained, it does so in a way that makes sense to you, using analogies and examples from domains you already understand.",
          "",
          "Writers often benefit from a Writing Coach GPT that knows their voice, common mistakes, and style preferences. It helps you write consistently without losing your personality in the process. The feedback it gives is calibrated to your specific tendencies, not generic writing advice.",
        ],
      },
    },
    {
      id: "gpt-instructions-template",
      type: "quickPrompt",
      content: {
        heading: "GPT Instructions Template",
        description:
          "Use this structure when writing your custom GPT instructions in Configure mode:",
        promptText:
          "## Role\nYou are a [specific role, e.g., personal meal planner] for [user's name/situation].\n\n## Context\n[Key information about the user]\n- [Preference/constraint 1]\n- [Preference/constraint 2]\n- [Preference/constraint 3]\n\n## Instructions\n1. [Primary instruction]\n2. [Secondary instruction]\n3. [Format instruction]\n\n## Tone\n[Describe the personality/tone: friendly, professional, encouraging, etc.]\n\n## Format\n[Describe how responses should be structured]\n\n## Constraints\n- [What NOT to do]\n- [What to avoid]",
        placeholders: [
          "specific role",
          "user's name/situation",
          "Preference/constraint 1",
          "Primary instruction",
          "Describe the personality/tone",
        ],
      },
    },
    {
      id: "scenario-card",
      type: "scenarioCard",
      content: {
        title: "Real Scenario: Personal Recipe Assistant",
        situation:
          "Maria loves cooking but has multiple dietary restrictions: gluten-free, dairy-free, and low sodium. She's also cooking for a family of four with picky eaters, and she wants meals that take under 30 minutes on weeknights. Every time she asked ChatGPT for recipes, she had to re-explain all these constraints.",
        challenge:
          "She needs meal suggestions that automatically account for ALL her requirements without re-explaining every time, plus use ingredients she typically has on hand.",
        outcome:
          "Maria created a 'Family Meal Planner' GPT with her dietary constraints, family preferences, and common pantry items uploaded as a knowledge file. Now she just says 'What's for dinner?' and gets perfect suggestions instantly.",
      },
    },
    {
      id: "knowledge-files",
      type: "text",
      content: {
        title: "Adding Knowledge Files to Your GPT",
        paragraphs: [
          "Knowledge files make your GPT truly personal. Upload documents that contain information your GPT should reference:",
          "",
          "**What to upload:**",
          "- Your favorite recipes or meal plan templates",
          "- Your workout history or fitness goals",
          "- Course syllabi or study materials",
          "- Your writing samples (for style matching)",
          "- Your schedule or routine documents",
          "",
          "**How to upload:**",
          "1. In Configure mode, scroll to 'Knowledge'",
          "2. Click 'Upload files'",
          "3. Select PDFs, text files, or documents",
          "4. The GPT will reference these when answering",
          "",
          "**Privacy note:** Uploaded files stay private to your GPT. They're not used to train OpenAI's models.",
        ],
      },
    },
    {
      id: "quiz",
      type: "quiz",
      content: {
        quiz: {
          question: "What's the main benefit of a custom GPT over regular ChatGPT?",
          options: [
            "It's faster at generating responses",
            "It remembers your context and preferences without re-explaining",
            "It can access the internet (regular ChatGPT cannot)",
            "It's free while regular ChatGPT costs money",
          ],
          correctAnswer: 1,
          explanation:
            "Custom GPTs store your instructions, preferences, and knowledge files so you don't have to repeat context every conversation.",
        },
      },
    },
    {
      id: "sharing-vs-private",
      type: "text",
      content: {
        title: "Sharing vs. Keeping Private",
        paragraphs: [
          "When you create a custom GPT, you have three visibility options:",
          "",
          "**Only me:** Completely private. Only you can access it. Best for personal information.",
          "",
          "**Anyone with a link:** Shareable via URL. Friends or colleagues can use it (requires them to have ChatGPT Plus). Good for sharing useful tools you've created.",
          "",
          "**Everyone:** Publicly listed in the GPT Store. Anyone can discover and use it. Best for generally useful tools without personal information.",
          "",
          "For personal GPTs with your private information, always choose 'Only me'.",
        ],
      },
    },
    {
      id: "best-practices",
      type: "highlightCard",
      content: {
        heading: "Custom GPT Best Practices",
        insights: [
          "Be specific in instructions: Vague instructions lead to vague responses",
          "Iterate on your instructions: Test, refine, test again until behavior is consistent",
          "Use knowledge files for reference material: Don't paste long documents into instructions",
          "Start narrow: A GPT that does one thing well is more useful than one that does many things poorly",
          "Update as your needs change: Your GPT evolves with you, update instructions and files over time",
        ],
      },
    },
    {
      id: "main-task",
      type: "actionableTask",
      content: {
        title: "Your Challenge: Build Your Personal GPT",
        purpose: "Create a custom GPT that solves a real problem in your life.",
        instructions: [
          "1. Identify a personal task you do repeatedly (meal planning, workouts, studying, writing)",
          "2. Open ChatGPT Plus GPT Builder",
          "3. Create a GPT with custom instructions using the template provided",
          "4. Upload 1-2 knowledge files if relevant (recipes, workout logs, study notes)",
          "5. Test with 5 different prompts and refine instructions based on results",
        ],
        deliverable:
          "A working custom GPT that: has clear instructions tailored to your specific needs, includes at least one knowledge file (if applicable), produces consistent, helpful responses without needing context re-explanation, and is set to private (Only me) visibility.",
        estimatedTime: "20-25 minutes",
        successCriteria: [
          "GPT has a specific, narrow purpose (not too broad)",
          "Instructions include your personal context and preferences",
          "Tested with 5 different prompts and got useful results",
          "Refined instructions at least once based on testing",
          "GPT is saved and ready to use for future conversations",
        ],
      },
    },
    {
      id: "checkpoint",
      type: "checkpoint",
      content: {
        question: "What should you upload to make your GPT truly personal?",
        options: [
          "Your social media profiles",
          "Knowledge files with your preferences, recipes, or reference materials",
          "Photos of yourself",
          "Your email inbox",
        ],
        correctAnswer: 1,
        hint: "Think about what information would help the GPT give better, more personalized responses...",
      },
    },
  ],
};

export default lessonDay23;
