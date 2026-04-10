/**
 * Day 24: Health & Fitness Planning
 *
 * TOOL MASTERY LESSON - Claude for nuanced health advice
 *
 * ENDING: actionableChallenge - This lesson teaches practical health and fitness
 * planning skills using Claude for personalized wellness plans. Students create
 * workout plans, meal strategies, and sustainable habits. The main task is a complete
 * wellness system.
 * NO gamification
 * DISCLAIMER: AI is not a doctor - consult professionals for medical advice
 */

import type { Lesson } from "@/types/content";

export const lessonDay24: Lesson = {
  id: "day-24",
  chapterId: "chapter5-personal",
  moduleId: "10-challenge-28-day-ai",
  title: "Health & Fitness Planning",
  description:
    "Use AI to create personalized fitness plans and meal strategies. Build sustainable healthy habits with Claude as your wellness partner.",
  order: 24,
  format: "article",
  lessonCategory: "tutorial",
  estimatedMinutes: 14,

  imageSearchTerms: [
    "fitness planning workout",
    "healthy meal preparation",
    "wellness lifestyle balance",
  ],

  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-24-cover.webp",
        imageAlt: "Health & Fitness Planning",
        title: "Day 24: Health & Fitness Planning",
        subtitle:
          "Use AI to create personalized fitness plans and meal strategies. Build sustainable healthy habits with Claude as your wellness partner.",
      },
    },
    {
      id: "opening",
      type: "text",
      content: {
        paragraphs: [
          "**Tool for this lesson:** Claude by Anthropic",
          "**Where to access:** claude.ai",
          "",
          "**Important disclaimer:** AI provides general guidance, not medical advice. Always consult healthcare professionals for medical decisions, existing conditions, or before starting new exercise programs.",
          "",
          "That said, Claude excels at health and fitness planning because it provides nuanced, personalized advice rather than one-size-fits-all solutions. You'll learn to use Claude for workout planning, meal strategies, and building sustainable healthy habits.",
        ],
      },
    },
    {
      id: "why-claude-health",
      type: "text",
      content: {
        title: "Why Claude for Health & Fitness",
        paragraphs: [
          "Health and fitness planning requires nuance that many AI tools struggle with. Claude excels here because it genuinely acknowledges that the right answer often depends on your specific situation. Instead of generic advice, it provides personalized recommendations that account for your constraints, preferences, and real-life circumstances.",
          "",
          "What sets Claude apart is its willingness to ask clarifying questions. When you describe a fitness goal, it doesn't immediately prescribe a solution. It asks about your schedule, your experience level, your equipment, your past attempts, and your preferences. This questioning process leads to plans you'll actually follow rather than theoretically perfect plans that fall apart in practice.",
          "",
          "Claude is also refreshingly honest about its limitations. It will tell you when to consult a professional rather than guessing about medical concerns. This is especially important for health topics where bad advice can cause real harm. The non-judgmental nature of the conversation creates a safe space to discuss health goals and struggles you might not feel comfortable sharing with a person.",
          "",
          "Perhaps most valuably, Claude considers sustainability and trade-offs rather than just quick fixes. It understands that the best workout plan is the one you'll actually do, and the best diet is the one you can maintain. This thoughtful analysis leads to recommendations that work in the real world, not just on paper.",
        ],
      },
    },
    {
      id: "fitness-planning",
      type: "text",
      content: {
        title: "Part 1: Creating a Fitness Plan",
        paragraphs: [
          "A good fitness plan fits your life, not the other way around. Claude can help create something you'll actually follow.",
          "",
          "**Step 1: Share Your Context**",
          "Tell Claude about your situation honestly:",
          "- Your current fitness level",
          "- Your goals (strength, endurance, weight loss, general health)",
          "- Your constraints (time, equipment, injuries, preferences)",
          "- Your schedule (when can you realistically exercise?)",
        ],
      },
    },
    {
      id: "quick-prompt-1",
      type: "quickPrompt",
      content: {
        heading: "Create Your Fitness Plan",
        description: "In Claude, start with this context-setting prompt:",
        promptText:
          "Help me create a realistic fitness plan. Here's my situation:\n\n- Current fitness level: [sedentary/somewhat active/active]\n- Goals: [strength/weight loss/endurance/general health/other]\n- Available time: [X minutes per day, Y days per week]\n- Equipment available: [gym membership/dumbbells at home/bodyweight only]\n- Constraints or injuries: [any limitations]\n- Preferences: [types of exercise I enjoy or hate]\n\nCreate a weekly workout plan that I can actually stick to. For each workout, include:\n1. Type and duration\n2. Specific exercises\n3. How to progress over time",
        placeholders: [
          "sedentary/somewhat active/active",
          "your main goal",
          "X minutes, Y days",
          "equipment available",
          "any limitations",
          "exercise preferences",
        ],
      },
    },
    {
      id: "fitness-exercise",
      type: "text",
      content: {
        title: "Exercise: Build Your Workout Plan",
        paragraphs: [
          "In Claude, complete these steps:",
          "",
          "1. Use the prompt above with your real situation",
          "2. Ask follow-up questions about any exercises you don't know",
          "3. Request modifications for exercises that seem too hard or too easy",
          '4. Ask: "How will I know if I\'m progressing?"',
          '5. Request: "Create a simple way to track my workouts"',
        ],
      },
    },
    {
      id: "reflection-1",
      type: "reflectionPrompt",
      content: {
        prompt:
          "Think about a fitness or diet plan you tried but couldn't sustain. Why did it fail? How could Claude's personalized, constraint-aware approach have made it workable?",
      },
    },
    {
      id: "meal-planning",
      type: "text",
      content: {
        title: "Part 2: Meal Planning & Nutrition",
        paragraphs: [
          "Meal planning is where most people fail. Claude can help create strategies that work with your life, not against it.",
          "",
          "**Step 1: Define Your Nutrition Context**",
          "- Dietary restrictions or preferences (vegetarian, low-carb, etc.)",
          "- Cooking skill level and time available",
          "- Budget considerations",
          "- Foods you love and hate",
          "- Your specific goals (energy, weight management, muscle building)",
        ],
      },
    },
    {
      id: "quick-prompt-2",
      type: "quickPrompt",
      content: {
        heading: "Create Your Meal Strategy",
        description: "In Claude, use this prompt:",
        promptText:
          "Help me create a practical meal strategy. Here's my context:\n\n- Dietary preferences/restrictions: [vegetarian/gluten-free/etc. or none]\n- Cooking skill: [can barely cook/can follow recipes/comfortable cooking]\n- Time for cooking: [X minutes on weekdays, Y minutes on weekends]\n- Budget: [tight/moderate/flexible]\n- Foods I enjoy: [list 5-10 foods you like]\n- Foods I dislike: [list foods you won't eat]\n- Goal: [weight loss/muscle gain/more energy/general health]\n\nCreate:\n1. A weekly meal framework (not strict recipes, but a structure)\n2. 5 breakfast options I can make in under 10 minutes\n3. A grocery list template for this meal plan\n4. One meal prep strategy to save time during the week",
        placeholders: [
          "dietary restrictions or none",
          "cooking skill level",
          "X minutes weekdays, Y weekends",
          "budget level",
          "foods you enjoy",
          "foods you dislike",
          "your goal",
        ],
      },
    },
    {
      id: "meal-exercise",
      type: "text",
      content: {
        title: "Exercise: Create Your Meal System",
        paragraphs: [
          "In Claude, build a sustainable meal system:",
          "",
          "1. Use the prompt above with your real preferences",
          '2. Ask: "Which of these meals can I batch-cook on Sunday?"',
          '3. Request: "Create a grocery list organized by store section"',
          '4. Ask: "What are healthy snacks I can keep at my desk?"',
          '5. Request: "How can I handle social situations and eating out?"',
        ],
      },
    },
    {
      id: "habit-building",
      type: "text",
      content: {
        title: "Part 3: Building Sustainable Habits",
        paragraphs: [
          "The best fitness and nutrition plan is the one you actually follow. Claude can help with the psychology of habit formation.",
          "",
          "**Key principles:**",
          '- Start smaller than you think (the "2-minute rule")',
          "- Stack new habits onto existing ones",
          "- Design your environment for success",
          "- Plan for obstacles before they happen",
        ],
      },
    },
    {
      id: "quick-prompt-3",
      type: "quickPrompt",
      content: {
        heading: "Design Your Habit System",
        description: "In Claude, use this prompt to create sustainable habits:",
        promptText:
          'I want to build these health habits:\n1. [Habit 1, e.g., "Exercise 3x per week"]\n2. [Habit 2, e.g., "Drink more water"]\n3. [Habit 3, e.g., "Eat breakfast daily"]\n\nFor each habit, help me:\n1. Make it so small I can\'t say no (2-minute version)\n2. Find an existing habit to stack it onto\n3. Design my environment to make it easy\n4. Anticipate what will derail me and plan around it\n\nFocus on sustainability over intensity. I want habits that last years, not weeks.',
        placeholders: ["Habit 1", "Habit 2", "Habit 3"],
      },
    },
    {
      id: "important-disclaimer",
      type: "text",
      content: {
        title: "When to Consult a Professional",
        paragraphs: [
          "AI is a powerful tool, but it has limits. Consult a healthcare professional if:",
          "",
          "- You have any medical conditions or injuries",
          "- You're taking medications that could be affected by diet/exercise",
          "- You're planning significant dietary changes",
          "- You experience pain during exercise",
          "- You have a history of eating disorders",
          "- You're pregnant or postpartum",
          "",
          "Claude will often remind you of this. Take that advice seriously.",
        ],
      },
    },
    {
      id: "pro-tip",
      type: "text",
      content: {
        title: "Pro Tip: The Weekly Check-In",
        paragraphs: [
          "Use Claude as your weekly accountability partner:",
          "",
          "1. At the end of each week, tell Claude:",
          "   - What workouts you completed",
          "   - How your eating went",
          "   - What obstacles you faced",
          "",
          "2. Ask Claude to:",
          "   - Analyze what worked and what didn't",
          "   - Suggest adjustments for next week",
          "   - Help troubleshoot obstacles",
          "",
          "This creates a feedback loop that improves your plan over time.",
        ],
      },
    },
    {
      id: "reflection-2",
      type: "reflectionPrompt",
      content: {
        prompt:
          "Why does the '2-minute rule' work so well for habit formation? How does making habits tiny actually help you achieve bigger goals?",
      },
    },
    {
      id: "health-visual",
      type: "textWithImage",
      content: {
        paragraphs: [
          "**Your Personal Wellness Blueprint**",
          "",
          "Imagine Claude as your wellness architect—designing a fitness and nutrition plan that fits your life, not someone else's. The best health plan isn't the most intense one, but the one you'll actually follow consistently.",
          "",
          "This isn't about dramatic transformations. It's about sustainable systems built around your actual schedule, preferences, and constraints. AI helps you find what works for YOU.",
        ],
        image: {
          src: "/images/courses/lessons/modules/productive-daily-routine-workspace.webp",
          alt: "Personal wellness blueprint",
        },
      },
    },
    {
      id: "key-insight",
      type: "highlightCard",
      content: {
        heading: "AI Health Planning Principles",
        insights: [
          "Personalization over perfection: Create a plan you'll actually follow",
          "Claude's nuance: Ask for modifications, alternatives, and trade-offs",
          "Habit stacking: Attach new behaviors to existing routines",
          "Weekly feedback loop: Use Claude to review progress and adjust",
          "Know the limits: Consult professionals for medical decisions",
        ],
      },
    },
    {
      id: "main-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create Your Sustainable Wellness Plan",
        purpose:
          "Build a personalized fitness and nutrition system that fits your actual life and sets you up for long-term health success.",
        instructions: [
          "1. Open Claude and share your complete fitness context",
          "2. Create your personalized workout plan using the provided prompt",
          "3. Build your meal strategy with real foods you enjoy",
          "4. Design your habit system using the 2-minute rule",
          "5. Set up your weekly check-in framework",
          "6. Save everything in a wellness folder you'll revisit weekly",
        ],
        deliverable:
          "A complete wellness system including: a weekly workout plan matched to your schedule/equipment/constraints, a meal framework with 5 breakfast options and grocery list template, 3 health habits designed as 2-minute actions, and a weekly check-in prompt to track progress.",
        estimatedTime: "25-35 minutes",
        successCriteria: [
          "Workout plan is realistic for your actual schedule",
          "Meal plan uses foods you actually enjoy and can prepare",
          "Habits are small enough to feel easy (2-minute rule)",
          "Have a specific weekly check-in time scheduled",
          "Feel confident you can stick to this plan long-term",
        ],
      },
    },
    {
      id: "checkpoint",
      type: "checkpoint",
      content: {
        question:
          "You want to start exercising but only have 20 minutes, 3 days per week. What's the best approach?",
        options: [
          "Wait until you have more time to start properly",
          "Tell Claude your constraints and ask for a realistic 20-minute plan you can do consistently",
          "Do an intense 60-minute workout once per week instead",
          "Skip exercise and focus only on diet",
        ],
        correctAnswer: 1,
        hint: "Think about what matters most for long-term success...",
      },
    },
  ],
};

export default lessonDay24;
