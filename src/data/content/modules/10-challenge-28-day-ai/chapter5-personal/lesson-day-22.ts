/**
 * Day 22: Learning & Skill Development
 *
 * TOOL MASTERY LESSON - ChatGPT as personal tutor
 *
 * ENDING: actionableChallenge - This lesson teaches practical AI tutoring skills using
 * ChatGPT for personalized learning. Students use the Feynman technique, create
 * learning curricula, and actively practice a new skill. The main task is a complete
 * learning session with a new topic.
 * NO gamification
 */

import type { Lesson } from "@/types/content";

export const lessonDay22: Lesson = {
  id: "day-22",
  chapterId: "chapter5-personal",
  moduleId: "10-challenge-28-day-ai",
  title: "Learning & Skill Development",
  description:
    "Use AI as your personal tutor to learn any skill faster. Create structured learning paths and get unstuck instantly.",
  order: 22,
  format: "article",
  lessonCategory: "tutorial",
  estimatedMinutes: 14,

  imageSearchTerms: [
    "online learning education",
    "AI tutoring personal coach",
    "skill development growth",
  ],

  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-22-cover.webp",
        imageAlt: "Learning & Skill Development",
        title: "Day 22: Learning & Skill Development",
        subtitle:
          "Use AI as your personal tutor to learn any skill faster. Create structured learning paths and get unstuck instantly.",
      },
    },
    {
      id: "opening",
      type: "text",
      content: {
        paragraphs: [
          "**Tool for this lesson:** ChatGPT by OpenAI",
          "**Where to access:** chat.openai.com",
          "",
          "Learning something new used to mean: buy a book, watch videos, hope it clicks. Now you have a personal tutor available 24/7 that adapts to your pace, explains things your way, and never gets impatient.",
          "You'll learn how to use ChatGPT as your learning accelerator. Whether it's a professional skill, a hobby, or something you've always been curious about, AI can cut your learning time dramatically.",
        ],
      },
    },
    {
      id: "why-ai-learning",
      type: "text",
      content: {
        title: "Why AI Changes Learning",
        paragraphs: [
          "AI tutoring fundamentally transforms how we learn by removing the constraints of traditional education. Instead of following a fixed curriculum at a predetermined pace, you can move as fast or as slow as you need. The AI adapts to your comprehension in real-time, slowing down when you're struggling and accelerating when concepts click.",
          "",
          "Perhaps most powerful is the flexibility of learning style. Some people grasp concepts through analogies, others need concrete examples, and some prefer methodical step-by-step explanations. ChatGPT can shift between all these approaches within a single conversation, finding what works for your brain. When something doesn't make sense, you get instant feedback instead of struggling alone for hours or waiting for office hours.",
          "",
          "There's also an emotional component that shouldn't be underestimated. AI has endless patience. You can ask the same question ten different ways, and you'll get ten helpful responses without a hint of frustration. This creates a safe space for learning where no question feels stupid. Beyond just answering questions, AI actively connects new concepts to what you already know, building bridges between ideas that might otherwise seem unrelated.",
        ],
      },
    },
    {
      id: "chatgpt-tutor-approach",
      type: "text",
      content: {
        title: "The ChatGPT Tutor Approach",
        paragraphs: [
          "ChatGPT works best as a tutor when you set it up properly. Here's the framework:",
          "",
          "**Step 1: Set Context**",
          "Tell ChatGPT what you want to learn and your current level.",
          "",
          "**Step 2: Choose Your Learning Style**",
          "Tell ChatGPT how you learn best (examples, analogies, step-by-step, etc.)",
          "",
          "**Step 3: Interact Actively**",
          "Ask questions. Ask for clarification. Ask for practice problems.",
          "",
          "**Step 4: Verify Understanding**",
          "Explain it back. Ask ChatGPT to quiz you. Apply it to real situations.",
        ],
      },
    },
    {
      id: "quick-prompt-1",
      type: "quickPrompt",
      content: {
        heading: "Set Up Your Learning Session",
        description: "In ChatGPT, start with this setup prompt. Replace the brackets:",
        promptText:
          "I want to learn [skill or topic]. My current level is [beginner/intermediate/advanced]. I learn best through [examples/analogies/step-by-step/visual descriptions]. \n\nPlease be my tutor. Start by:\n1. Assessing what I already know about this topic\n2. Creating a learning path tailored to my level\n3. Beginning with the first concept\n\nWhenever you explain something, check if I understand before moving on.",
        placeholders: [
          "skill or topic",
          "beginner/intermediate/advanced",
          "examples/analogies/step-by-step/visual descriptions",
        ],
      },
    },
    {
      id: "learning-techniques",
      type: "text",
      content: {
        title: "Techniques for Faster Learning",
        paragraphs: [
          "The way you prompt ChatGPT can dramatically accelerate or hinder your learning. A few powerful techniques consistently outperform others, and they're worth memorizing so they become second nature.",
          "",
          'When you encounter a concept that feels impenetrable, ask ChatGPT to "Explain this like I\'m 10 years old." This forces the AI to strip away jargon and get to the essence of an idea. The simplification often reveals the core logic that was hiding behind technical language. Similarly, requesting "Give me a real-world example of this" transforms abstract principles into something tangible you can visualize and remember.',
          "",
          'Learning sticks when it connects to what you already know. Use the prompt "How does this connect to [something I know]?" to build bridges between new material and your existing knowledge base. This technique leverages the way your brain naturally stores information, making recall easier later.',
          "",
          'Smart learners also anticipate problems. Asking "What are the most common mistakes beginners make?" helps you avoid pitfalls before you encounter them. And finally, active testing cements knowledge. Use "Quiz me on what we just covered" or "Give me a practice problem" to move from passive understanding to active application. This is where real learning happens.',
        ],
      },
    },
    {
      id: "reflection-1",
      type: "reflectionPrompt",
      content: {
        prompt:
          "Think about something you tried to learn but gave up on. How might setting proper context and using AI's adaptive explanations have changed that experience?",
      },
    },
    {
      id: "exercise-step-by-step",
      type: "text",
      content: {
        title: "Exercise: Learn Something New in 15 Minutes",
        paragraphs: [
          "Pick something you've wanted to learn. It could be:",
          "- A professional skill (Excel pivot tables, public speaking basics)",
          "- A practical skill (basic cooking, personal finance concepts)",
          "- A creative skill (photography composition, storytelling)",
          "- An intellectual curiosity (how black holes work, psychology of persuasion)",
          "",
          "Then follow this sequence in ChatGPT:",
          "",
          "1. Use the setup prompt from above",
          "2. Learn the first concept",
          "3. Ask for a practice problem",
          "4. Try to solve it (type your attempt)",
          "5. Ask ChatGPT to evaluate your answer",
          "6. Ask what to learn next",
        ],
      },
    },
    {
      id: "quick-prompt-2",
      type: "quickPrompt",
      content: {
        heading: "Get Unstuck Prompt",
        description: "When you're confused, use this prompt:",
        promptText:
          "I'm stuck on [specific concept]. Here's what I understand so far: [your current understanding]. Here's what's confusing me: [what doesn't make sense]. \n\nCan you explain this differently? Try using [a different analogy/a simpler example/a visual description].",
        placeholders: [
          "specific concept",
          "your current understanding",
          "what doesn't make sense",
          "a different analogy/a simpler example/a visual description",
        ],
      },
    },
    {
      id: "learning-path",
      type: "text",
      content: {
        title: "Creating a Structured Learning Path",
        paragraphs: [
          "For complex skills, ask ChatGPT to create a complete curriculum:",
          "",
          '1. Tell ChatGPT your goal: "I want to learn [skill] well enough to [specific goal]"',
          '2. Ask for a timeline: "Create a [2-week/1-month] learning plan"',
          '3. Request daily breakdown: "What should I learn each day?"',
          '4. Ask for resources: "What free resources should I use alongside our sessions?"',
        ],
      },
    },
    {
      id: "quick-prompt-3",
      type: "quickPrompt",
      content: {
        heading: "Create Your Learning Curriculum",
        description: "In ChatGPT, use this prompt to create a structured plan:",
        promptText:
          "Create a [2-week/1-month] learning plan for [skill]. I want to reach a level where I can [specific goal]. \n\nBreak it down into:\n1. Daily learning objectives (15-30 min per day)\n2. Key concepts to master each week\n3. Practice exercises for each concept\n4. Milestones to check my progress\n5. Free resources I can use alongside this plan",
        placeholders: ["2-week/1-month", "skill", "specific goal"],
      },
    },
    {
      id: "pro-tip",
      type: "text",
      content: {
        title: "Pro Tip: The Feynman Technique with AI",
        paragraphs: [
          "The Feynman Technique is a powerful learning method: explain something in simple terms to test your understanding. AI makes this even better:",
          "",
          '1. After learning a concept, say: "I\'m going to explain this back to you. Listen and tell me what I got wrong or missed."',
          "2. Explain the concept in your own words",
          '3. Ask ChatGPT: "What did I misunderstand? What did I miss?"',
          "4. Re-learn the gaps",
          "5. Repeat until you can explain it clearly",
          "",
          "This technique quickly reveals what you don't actually understand.",
        ],
      },
    },
    {
      id: "reflection-2",
      type: "reflectionPrompt",
      content: {
        prompt:
          "Why does the Feynman Technique work so well with AI? What happens when you try to explain something and discover gaps in your understanding?",
      },
    },
    {
      id: "learning-visual",
      type: "textWithImage",
      content: {
        paragraphs: [
          "**Your Personal Learning Ecosystem**",
          "",
          "Imagine AI as your personalized learning environment that adapts to how you think, what you know, and how you learn best. Unlike a textbook or video course, ChatGPT never moves on until you understand, never judges your questions, and always has another way to explain.",
          "",
          "This is active learning on demand. You're not consuming content—you're in a dialogue that targets exactly what you need, when you need it.",
        ],
        image: {
          src: "/images/courses/lessons/modules/learning-and-education-with-books.webp",
          alt: "Personalized learning ecosystem",
        },
      },
    },
    {
      id: "key-insight",
      type: "highlightCard",
      content: {
        heading: "AI Learning Principles",
        insights: [
          "Set context first: your level, your learning style, your goals",
          "Learn actively: ask questions, solve problems, explain back",
          "Get unstuck fast: ask for different explanations when confused",
          "Create structure: use AI to build a curriculum, not just answer questions",
          "Verify understanding: use the Feynman technique with AI feedback",
        ],
      },
    },
    {
      id: "main-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Learn Something New in 20 Minutes",
        purpose:
          "Experience AI-powered learning by teaching yourself something you've been curious about, using ChatGPT as your personalized tutor.",
        instructions: [
          "1. Choose something you've wanted to learn (professional skill, hobby, curiosity)",
          "2. Open ChatGPT and use the setup prompt with your chosen topic",
          "3. Learn the first concept ChatGPT presents",
          "4. Ask for a practice problem to test your understanding",
          "5. Try to solve it, then ask ChatGPT to evaluate your answer",
          "6. Use the 'get unstuck' prompt if you're confused",
          "7. Explain what you learned back to ChatGPT and ask for feedback",
        ],
        deliverable:
          "A learning session where you: complete the first lesson of a new skill, solve at least one practice problem, receive feedback on your understanding, and have a clear plan for what to learn next (based on the curriculum ChatGPT helped create).",
        estimatedTime: "20 minutes",
        successCriteria: [
          "Chose a specific topic and set your learning context",
          "Engaged actively (not just read—asked questions, solved problems)",
          "Used the Feynman technique to verify understanding",
          "Received and applied feedback from ChatGPT",
          "Can explain one new concept clearly in your own words",
        ],
      },
    },
    {
      id: "checkpoint",
      type: "checkpoint",
      content: {
        question:
          "You're learning Excel and keep getting confused about VLOOKUP. What's the best approach?",
        options: [
          "Watch more YouTube videos until it makes sense",
          "Tell ChatGPT what you understand and what's confusing, ask for a different explanation with an example",
          "Skip VLOOKUP and learn other functions instead",
          "Memorize the syntax without understanding it",
        ],
        correctAnswer: 1,
        hint: "Think about how AI can adapt to your specific confusion...",
      },
    },
  ],
};

export default lessonDay22;
