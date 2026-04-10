/**
 * Lesson 6.9: Learning and Skill Development
 *
 * CHAPTER: 2 - Professional Applications
 * LESSON: 4 of 5 - Educational Workflows
 *
 * DURATION: 12 minutes (practical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach learning and skill development workflows
 *
 * KEY RESPONSIBILITIES:
 * - Show Claude's educational capabilities
 * - Provide skill-building patterns
 * - Demonstrate learning acceleration techniques
 */

import type { Lesson } from "@/types/content";

export const lesson_6_9: Lesson = {
  id: "lesson-6-9",
  chapterId: "ch6-2-applications",
  moduleId: "06-tools-claude",
  title: "Learning and Skill Development",
  description: "Accelerate learning and build skills faster with Claude as your tutor",
  order: 9,
  estimatedMinutes: 12,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image at START
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-9-cover.webp",
        imageAlt: "Learning and education with books",
        title: "Learning and Skill Development",
        subtitle: "Accelerate learning and build skills faster with Claude as your tutor",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Claude as Learning Accelerator",
        paragraphs: [
          "Learning new skills is faster with a good teacher. Claude excels at being that teacher—patient, able to adjust explanations to your level, and available to explore questions from multiple angles.",
          "",
          "Where Claude particularly shines: explaining concepts in multiple ways until they click, creating practice exercises tailored to your level, identifying what to learn next, and building structured learning paths.",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Learning Use Cases",
        paragraphs: [
          "Claude serves as an exceptional learning partner when you understand how to engage its capabilities for skill development. The conversational nature of Claude makes it particularly effective for personalized learning experiences.",
          "",
          "Concept explanation is the foundation of learning with Claude. You can ask: 'Explain [concept] to me like I'm [beginner/intermediate]. Use analogies if helpful.' Claude will adjust its explanation to your level and use comparison to things you already understand. If the first explanation doesn't click, you can ask for a different approach.",
          "",
          "Skill planning helps you chart a path forward. Tell Claude: 'I want to learn [skill]. I currently have [your background]. Create a learning roadmap for me.' Claude will break down the skill into components, suggest an order for learning them, and identify resources that match your starting point.",
          "",
          "Practice generation accelerates skill building. Ask Claude: 'Create 3 practice problems of [difficulty level] and explain how to solve them.' Working through these problems with Claude's guidance provides the repetition and feedback that builds real competence.",
          "",
          "Error analysis helps you learn from mistakes. When something goes wrong, share what happened: 'Here's what I tried and what went wrong. Help me understand my mistake and how to avoid it.' Claude can often identify the misconception that led to the error and help you correct your understanding.",
          "",
          "Knowledge checks validate your learning. Ask Claude: 'Test my understanding of [topic]. Ask me questions, explain why my answers are right or wrong, and fill gaps.' This interactive assessment helps you identify what you truly understand and where you need more work.",
        ],
      },
    },
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "The Learning Conversation",
        insights: [
          "Claude learns about how you learn best through conversation",
          "Don't hesitate to say: 'That didn't make sense—try explaining it a different way'",
          "Tell Claude if you learn better with analogies, examples, or diagrams",
        ],
      },
    },
    {
      id: "section-4",
      type: "scenarioCard",
      content: {
        title: "Real-World Scenario",
        situation:
          "Marcus is a sales professional who wants to learn basic Python to automate his reporting. He's never coded before and finds most tutorials either too technical or too slow.",
        challenge:
          "He needs to learn enough Python in 2 weeks to write a simple script that pulls data from a CSV and creates a summary report.",
        outcome:
          "Marcus told Claude his goal and background. Claude created a personalized learning path focusing only on what he needed: file reading, data manipulation, and basic output. After 5 days of 30-minute sessions with Claude, Marcus wrote his first working script.",
      },
    },
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Practical Learning Patterns",
        paragraphs: [
          "**For new skills**: 'I want to learn [skill]. What should I learn first, second, third? For each step, explain what to focus on and what resources might help.'",
          "",
          "**For stuck concepts**: 'I'm trying to understand [concept] but [what's confusing]. Can you explain it a different way?'",
          "",
          "**For practice**: 'Create a [short/long] practice exercise for [topic]. Make it [difficulty level] and include guidance.'",
          "",
          "**For verification**: 'Here's my understanding of [topic]. What am I missing or misunderstanding?'",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-9-inline-1.webp",
        imageAlt: "Skill development and continuous learning",
      },
    },
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "Practice: Personalized Learning",
        description:
          "Choose something you've been meaning to learn and get a personalized learning progression.",
        promptText:
          "I want to understand [topic]. Start by asking me questions to gauge what I already know, then teach me from there in a way that fits my learning style.",
      },
    },
    {
      id: "section-7",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "For learning exercises",
        task: "Open Claude and start a personalized learning conversation on a topic you want to master",
        feature: "New conversation",
        tip: "Ask Claude to create practice exercises after explaining concepts—active practice beats passive reading",
      },
    },
    // ===========================================================================
    // SECTION 8: Your Turn - Actionable Task at END
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Learn Something New",
        purpose:
          "Experience Claude as a personalized tutor by learning something you've been wanting to understand.",
        instructions: [
          "Pick a skill or concept you've been meaning to learn",
          "Tell Claude your current knowledge level and ask for a learning roadmap",
          "Have Claude create 3 practice exercises at your level",
          "Complete one exercise and have Claude evaluate your work",
        ],
        deliverable:
          "A learning roadmap, 3 practice exercises, and Claude's evaluation of your completed exercise",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "I want to learn [topic]. My current knowledge is [level]. Can you create a learning roadmap and 3 practice exercises appropriate for my level?",
        successCriteria: [
          "You have a personalized learning roadmap for a topic you want to learn",
          "You've received 3 practice exercises at your skill level",
          "You completed at least one exercise",
          "You received and understood Claude's evaluation of your work",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: End-of-Lesson Checkpoint
    // ===========================================================================
    {
      id: "section-quiz",
      type: "checkpoint",
      content: {
        question: 'What is the "Learning Conversation" approach with Claude?',
        options: [
          "Claude lectures you continuously",
          "Claude learns about how you learn best through conversation and adapts explanations",
          "You only ask multiple choice questions",
          "Claude tests you without teaching",
        ],
        correctAnswer: 1,
        hint: 'Review "The Learning Conversation" and "Learning Use Cases" sections if needed.',
      },
    },
    {
      id: "section-10",
      type: "completion",
      content: {
        title: "Learning Skills Ready",
        description:
          "You now have practical patterns for using Claude to accelerate learning. The key: be honest about what you do and don't understand, and ask Claude to adapt explanations until they click for you.",
        xpReward: 100,
        buttonText: "Complete Learning Skills",
      },
    },
  ],
};
