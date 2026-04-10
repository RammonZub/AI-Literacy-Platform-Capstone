/**
 * Education & Learning Prompts
 *
 * PURPOSE: Prompts for study guides, lesson plans, quizzes, explanations, and research papers.
 *
 * DOMAIN: Education & Learning
 * CATEGORIES:
 * - Study Guides
 * - Lesson Plans
 * - Quizzes & Assessments
 * - Complex Explanations
 * - Research Papers
 *
 * @see src/types/resources.ts - Prompt type definition
 */

import type { Prompt } from "@/types/resources";

/**
 * Education & Learning prompts collection
 *
 * Each prompt is tested across ChatGPT, Claude, and Gemini.
 * Best tool indicates which gives the most consistent results.
 */
export const educationLearningPrompts: Prompt[] = [
  // ============================================================================
  // STUDY GUIDES
  // ============================================================================

  {
    id: "study-plan-creator",
    title: "Personalized Study Plan",
    description:
      "Create a structured study plan based on your learning style, schedule, and goals.",
    promptText: `Create a personalized study plan for me.

Subject or exam I'm studying for:
[SUBJECT/EXAM]

My timeline:
- Study period: [TIMEFRAME: DAYS/WEEKS/MONTHS]
- Hours per day available: [HOURS]
- Highest energy time: [MORNING/AFTERNOON/EVENING]

Learning preferences:
- Learning style: [VISUAL/AUDITORY/KINESTHETIC/READING]
- Best study methods: [WHAT WORKS FOR ME]
- What doesn't work: [WHAT DOESN'T WORK]

Current knowledge level:
[KNOWLEDGE LEVEL]

Please provide:
1. A day-by-day study schedule
2. Specific study techniques for my learning style
3. How to break down the material into manageable chunks
4. Review schedule to prevent forgetting
5. Practice and testing strategies
6. How to adjust if I fall behind`,
    placeholders: [
      "SUBJECT/EXAM",
      "TIMEFRAME: DAYS/WEEKS/MONTHS",
      "HOURS",
      "MORNING/AFTERNOON/EVENING",
      "VISUAL/AUDITORY/KINESTHETIC/READING",
      "WHAT WORKS FOR ME",
      "WHAT DOESN'T WORK",
      "KNOWLEDGE LEVEL",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "education-learning",
    categoryId: "study-guides",
    exampleOutput:
      "A detailed study plan with daily schedules, techniques matched to your learning style, and strategies for retention and testing.",
    customizationNotes: [
      "Be specific about the exam format if known",
      "Include any topics you find particularly difficult",
      "Mention past study experiences and what helped",
    ],
    tags: ["study-plan", "scheduling", "exam-prep"],
    order: 1,
  },

  {
    id: "flashcard-generator",
    title: "Flashcard Creator",
    description: "Turn any content into effective flashcards for active recall practice.",
    promptText: `Turn this content into flashcards for active recall practice.

Content to study:
[CONTENT OR TOPIC]

My goals:
- What I need to learn: [LEARNING OBJECTIVES]
- Format preference: [QUESTION-ANSWER/FILL-BLANK/DEFINITION/ETC]
- Flashcard app: [ANKI/QUIZLET/PHYSICAL/ETC]

Please create:
1. 20-50 flashcards covering the key concepts
2. Front of card: Question or prompt
3. Back of card: Answer or explanation
4. Cards organized by topic or difficulty
5. Cloze deletion cards for detailed information
6. Tips for effective flashcard practice`,
    placeholders: [
      "CONTENT OR TOPIC",
      "LEARNING OBJECTIVES",
      "QUESTION-ANSWER/FILL-BLANK/DEFINITION/ETC",
      "ANKI/QUIZLET/PHYSICAL/ETC",
    ],
    bestTool: "chatgpt",
    difficulty: "beginner",
    domainId: "education-learning",
    categoryId: "study-guides",
    exampleOutput:
      "A set of well-designed flashcards with questions on front, answers on back, organized by topic with practice tips.",
    customizationNotes: [
      "Include the actual content you need to learn",
      "Specify if you want cards for memorization or understanding",
      "Mention any particularly tricky concepts",
    ],
    tags: ["flashcards", "active-recall", "memorization"],
    order: 2,
  },

  {
    id: "content-summarizer",
    title: "Study Summary Generator",
    description: "Create concise summaries of any content for quick review.",
    promptText: `Summarize this content for effective studying.

Content to summarize:
[CONTENT - TEXT, NOTES, OR TOPIC DESCRIPTION]

My summary needs:
- Purpose: [EXAM PREP/QUICK REVIEW/CONCEPTUAL UNDERSTANDING]
- Detail level: [BRIEF/MODERATE/COMPREHENSIVE]
- Focus areas: [WHAT'S MOST IMPORTANT]

Please provide:
1. A hierarchical summary (main points → supporting details)
2. Key concepts and definitions
3. Important relationships and connections
4. What to memorize vs. what to understand
5. A "cheat sheet" version for quick review
6. Practice questions to test understanding`,
    placeholders: [
      "CONTENT - TEXT, NOTES, OR TOPIC DESCRIPTION",
      "EXAM PREP/QUICK REVIEW/CONCEPTUAL UNDERSTANDING",
      "BRIEF/MODERATE/COMPREHENSIVE",
      "WHAT'S MOST IMPORTANT",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "education-learning",
    categoryId: "study-guides",
    exampleOutput:
      "A structured summary with main concepts, key details, important relationships, and practice questions for testing.",
    customizationNotes: [
      "Include as much source content as needed",
      "Specify the source if from a textbook or course",
      "Mention your current understanding level",
    ],
    tags: ["summary", "review", "study-guide"],
    order: 3,
  },

  {
    id: "comparative-study-chart",
    title: "Concept Comparison Charts",
    description: "Create comparison charts to understand similar concepts and their differences.",
    promptText: `Create comparison charts to help me understand these related concepts.

Concepts to compare:
[LIST OF RELATED CONCEPTS]

What I find confusing:
[WHAT MIXES ME UP]

Please create:
1. A comparison table with key dimensions
2. For each concept:
   - Core definition
   - Key characteristics
   - When to use it
   - Common mistakes
   - Memory tricks
3. Side-by-side comparisons
4. Practice questions to test discrimination
5. Mnemonics or mental models to remember differences`,
    placeholders: ["LIST OF RELATED CONCEPTS", "WHAT MIXES ME UP"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "education-learning",
    categoryId: "study-guides",
    exampleOutput:
      "A detailed comparison chart with definitions, characteristics, use cases, common mistakes, and memory tricks for each concept.",
    customizationNotes: [
      "List specific concepts that confuse you",
      "Include examples if you have them",
      "Mention the context (course, subject, etc.)",
    ],
    tags: ["comparison", "concepts", "study-aid"],
    order: 4,
  },

  {
    id: "exam-prep-checklist",
    title: "Exam Preparation Checklist",
    description: "Create a comprehensive checklist to prepare thoroughly for any exam.",
    promptText: `Create a comprehensive exam preparation checklist for me.

Exam details:
- Subject: [SUBJECT]
- Exam type: [MULTIPLE CHOICE/ESSAY/PRACTICAL/MIXED]
- Time until exam: [TIMEFRAME]
- Topics covered: [TOPIC LIST]

My current status:
- Topics I'm confident in: [STRONG AREAS]
- Topics I need to work on: [WEAK AREAS]
- Study materials I have: [RESOURCES]

Please create:
1. A week-by-week preparation checklist
2. Daily study tasks in the final week
3. Day-before-exam checklist
4. Morning-of-exam checklist
5. Practice exam strategies
6. What to bring and what to expect`,
    placeholders: [
      "SUBJECT",
      "MULTIPLE CHOICE/ESSAY/PRACTICAL/MIXED",
      "TIMEFRAME",
      "TOPIC LIST",
      "STRONG AREAS",
      "WEAK AREAS",
      "RESOURCES",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "education-learning",
    categoryId: "study-guides",
    exampleOutput:
      "A comprehensive exam prep checklist with week-by-week tasks, final day strategies, and exam-day preparation.",
    customizationNotes: [
      "Be specific about the exam format and duration",
      "Include any special requirements (calculators, etc.)",
      "Share your exam anxiety level if relevant",
    ],
    tags: ["exam-prep", "checklist", "test-taking"],
    order: 5,
  },

  // ============================================================================
  // LESSON PLANS
  // ============================================================================

  {
    id: "lesson-plan-generator",
    title: "Complete Lesson Plan",
    description: "Create a detailed lesson plan with objectives, activities, and assessments.",
    promptText: `Create a complete lesson plan for me.

Lesson details:
- Subject: [SUBJECT]
- Topic: [TOPIC]
- Duration: [TIME]
- Grade/level: [GRADE LEVEL]

Student profile:
- Number of students: [NUMBER]
- Background knowledge: [WHAT THEY ALREADY KNOW]
- Learning needs: [SPECIAL NEEDS OR CHALLENGES]
- Engagement strategies that work: [WHAT ENGAGES THEM]

My teaching goals:
[LEARNING OBJECTIVES]

Please provide:
1. Clear learning objectives (SWBAT - Students Will Be Able To...)
2. Required materials and preparation
3. Lesson structure with timing:
   - Hook/introduction
   - Direct instruction
   - Guided practice
   - Independent practice
   - Closure
4. Differentiation strategies
5. Assessment methods
6. Homework or extension activities
7. Backup plan if technology fails or lesson runs short`,
    placeholders: [
      "SUBJECT",
      "TOPIC",
      "TIME",
      "GRADE LEVEL",
      "NUMBER",
      "WHAT THEY ALREADY KNOW",
      "SPECIAL NEEDS OR CHALLENGES",
      "WHAT ENGAGES THEM",
      "LEARNING OBJECTIVES",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "education-learning",
    categoryId: "lesson-plans",
    exampleOutput:
      "A complete lesson plan with objectives, materials, timed structure, differentiation strategies, assessments, and backup plans.",
    customizationNotes: [
      "Include any curriculum standards that apply",
      "Mention classroom setup constraints",
      "Share past lessons that worked well with this group",
    ],
    tags: ["lesson-plan", "teaching", "curriculum"],
    order: 6,
  },

  {
    id: "learning-objectives-writer",
    title: "Learning Objectives Generator",
    description: "Write clear, measurable learning objectives using Bloom's Taxonomy.",
    promptText: `Write clear, measurable learning objectives for my lesson.

Topic: [TOPIC]
Grade level: [GRADE]
Time available: [DURATION]

What students should understand:
[CONTENT GOALS]

Skills students should develop:
[SKILL GOALS]

Please create:
1. 3-5 clear learning objectives using SMART criteria
2. Objectives at different Bloom's Taxonomy levels
3. Measurable success criteria for each objective
4. How to assess each objective
5. Common misconceptions to address
6. Real-world applications of these objectives`,
    placeholders: ["TOPIC", "GRADE", "DURATION", "CONTENT GOALS", "SKILL GOALS"],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "education-learning",
    categoryId: "lesson-plans",
    exampleOutput:
      "Clear, measurable learning objectives at various Bloom's levels with success criteria and assessment methods.",
    customizationNotes: [
      "Include the specific standards you need to address",
      "Mention the assessment type you plan to use",
      "Share your students' skill levels if they vary",
    ],
    tags: ["learning-objectives", "bloom-taxonomy", "assessment"],
    order: 7,
  },

  {
    id: "classroom-activity-designer",
    title: "Engaging Classroom Activity",
    description: "Design interactive activities that reinforce learning and engage students.",
    promptText: `Design an engaging classroom activity for my lesson.

Topic: [TOPIC]
Grade level: [GRADE]
Class size: [NUMBER OF STUDENTS]
Time available: [DURATION]

Activity constraints:
- Space available: [ROOM SETUP]
- Materials available: [MATERIALS]
- Technology: [AVAILABLE TECH]

What I want students to practice:
[LEARNING GOAL]

What challenges I face:
[CHALLENGES: ENGAGEMENT/DIFFERENTIATION/ASSESSMENT/ETC]

Please design:
1. A complete activity with clear instructions
2. How it connects to learning objectives
3. Step-by-step implementation guide
4. Grouping strategies
5. Differentiation for different levels
6. How to assess learning during/after the activity
7. Fallback options if things don't go as planned`,
    placeholders: [
      "TOPIC",
      "GRADE",
      "NUMBER OF STUDENTS",
      "DURATION",
      "ROOM SETUP",
      "MATERIALS",
      "AVAILABLE TECH",
      "LEARNING GOAL",
      "CHALLENGES: ENGAGEMENT/DIFFERENTIATION/ASSESSMENT/ETC",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "education-learning",
    categoryId: "lesson-plans",
    exampleOutput:
      "A complete classroom activity with instructions, implementation guide, differentiation strategies, and assessment methods.",
    customizationNotes: [
      "Include any specific engagement challenges",
      "Mention students with special needs",
      "Share activities that have or haven't worked before",
    ],
    tags: ["activities", "engagement", "interactive"],
    order: 8,
  },

  {
    id: "differentiation-strategist",
    title: "Differentiation Strategy Plan",
    description: "Create strategies to teach diverse learners with varying needs and abilities.",
    promptText: `Help me differentiate this lesson for diverse learners.

Topic: [TOPIC]
Grade level: [GRADE]

My diverse learners include:
[STUDENT NEEDS: IEP/ELL/ADVANCED/STRUGGLING/ETC]

Current lesson approach:
[BRIEF LESSON DESCRIPTION]

Challenges I'm facing:
[DIFFERENTIATION CHALLENGES]

Please provide:
1. Content differentiation (what students learn)
2. Process differentiation (how students learn)
3. Product differentiation (how students demonstrate learning)
4. Specific strategies for each student group
5. Tiered activities for different readiness levels
6. How to manage multiple activities simultaneously
7. Assessment options for different learners`,
    placeholders: [
      "TOPIC",
      "GRADE",
      "STUDENT NEEDS: IEP/ELL/ADVANCED/STRUGGLING/ETC",
      "BRIEF LESSON DESCRIPTION",
      "DIFFERENTIATION CHALLENGES",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "education-learning",
    categoryId: "lesson-plans",
    exampleOutput:
      "Comprehensive differentiation strategies with specific approaches for content, process, and product at multiple levels.",
    customizationNotes: [
      "Be specific about student needs and accommodations",
      "Include any IEP requirements that apply",
      "Mention your comfort level with differentiation",
    ],
    tags: ["differentiation", "inclusive-teaching", "diverse-learners"],
    order: 9,
  },

  {
    id: "assessment-creator",
    title: "Student Assessment Design",
    description: "Create fair, effective assessments that measure true understanding.",
    promptText: `Design effective assessments for my lesson.

Topic: [TOPIC]
Grade level: [GRADE]
Learning objectives:
[OBJECTIVES]

Assessment constraints:
- Type: [QUIZ/TEST/PROJECT/PRESENTATION/PERFORMANCE]
- Duration: [TIME ALLOWED]
- Format: [DIGITAL/PAPER/ORAL/ETC]

What I want to measure:
[WHAT YOU WANT TO ASSESS]

Please create:
1. Assessment questions/tasks that align with objectives
2. A variety of question types (multiple choice, short answer, application, etc.)
3. Clear instructions for students
4. Point values and rubric
5. Answer key or scoring guide
6. How to interpret results and adjust instruction
7. Accommodations for different needs`,
    placeholders: [
      "TOPIC",
      "GRADE",
      "OBJECTIVES",
      "QUIZ/TEST/PROJECT/PRESENTATION/PERFORMANCE",
      "TIME ALLOWED",
      "DIGITAL/PAPER/ORAL/ETC",
      "WHAT YOU WANT TO ASSESS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "education-learning",
    categoryId: "lesson-plans",
    exampleOutput:
      "A complete assessment with aligned questions, scoring rubric, answer key, and guidance on using results.",
    customizationNotes: [
      "Include the specific skills or understanding you need to assess",
      "Mention any special considerations for your students",
      "Share if this is formative or summative assessment",
    ],
    tags: ["assessment", "testing", "evaluation"],
    order: 10,
  },

  // ============================================================================
  // QUIZZES & ASSESSMENTS
  // ============================================================================

  {
    id: "quiz-generator",
    title: "Quiz Creator",
    description: "Generate quizzes with various question types for any topic.",
    promptText: `Create a quiz for me to test understanding.

Topic: [TOPIC]
Difficulty level: [BEGINNER/INTERMEDIATE/ADVANCED]
Quiz purpose: [SELF-ASSESSMENT/CLASSROOM/EXAM PREP]

Content to cover:
[CONTENT OR TOPIC DESCRIPTION]

Quiz specifications:
- Number of questions: [NUMBER]
- Question types: [MULTIPLE CHOICE/TRUE-FALSE/FILL IN BLANK/SHORT ANSWER/MIXED]
- Time limit: [TIME OR NONE]

Please provide:
1. [NUMBER] questions covering the topic thoroughly
2. Questions organized by difficulty or topic
3. An answer key with explanations
4. What each question tests (knowledge, application, analysis)
5. How to interpret your score
6. What to review based on wrong answers`,
    placeholders: [
      "TOPIC",
      "BEGINNER/INTERMEDIATE/ADVANCED",
      "SELF-ASSESSMENT/CLASSROOM/EXAM PREP",
      "CONTENT OR TOPIC DESCRIPTION",
      "NUMBER",
      "MULTIPLE CHOICE/TRUE-FALSE/FILL IN BLANK/SHORT ANSWER/MIXED",
      "TIME OR NONE",
    ],
    bestTool: "chatgpt",
    difficulty: "beginner",
    domainId: "education-learning",
    categoryId: "quizzes",
    exampleOutput:
      "A well-structured quiz with questions at the specified difficulty level, complete with answer key and explanations.",
    customizationNotes: [
      "Include specific content or concepts to cover",
      "Mention any particular areas to focus on",
      "Share if this is for a specific exam or course",
    ],
    tags: ["quiz", "test", "assessment", "practice"],
    order: 11,
  },

  {
    id: "answer-key-explainer",
    title: "Answer Key with Explanations",
    description: "Create detailed answer keys that explain why answers are correct or incorrect.",
    promptText: `Create an answer key with detailed explanations for this quiz.

Quiz questions:
[QUIZ QUESTIONS]

My answers (optional):
[MY ANSWERS - OR LEAVE BLANK]

Please provide:
1. The correct answer for each question
2. Detailed explanation of why it's correct
3. Common mistakes and why wrong answers are tempting
4. The concept or principle being tested
5. Tips for similar questions in the future
6. If I provided answers: which I got right/wrong and why`,
    placeholders: ["QUIZ QUESTIONS", "MY ANSWERS - OR LEAVE BLANK"],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "education-learning",
    categoryId: "quizzes",
    exampleOutput:
      "A comprehensive answer key with correct answers, detailed explanations, common mistakes, and personalized feedback if answers were provided.",
    customizationNotes: [
      "Include the full quiz questions for context",
      "Add your answers if you want personalized feedback",
      "Mention the subject and level",
    ],
    tags: ["answer-key", "explanations", "feedback"],
    order: 12,
  },

  {
    id: "rubric-generator",
    title: "Assessment Rubric Creator",
    description: "Create clear, fair rubrics for grading assignments and projects.",
    promptText: `Create a grading rubric for this assignment.

Assignment details:
- Type: [ESSAY/PROJECT/PRESENTATION/ETC]
- Topic: [TOPIC]
- Grade level: [GRADE]

What I'm assessing:
[ASSESSMENT CRITERIA OR LEARNING OBJECTIVES]

Scaling needs:
- Scale type: [POINTS/LEVELS/DESCRIPTIVE]
- Maximum score: [POINTS OR LEVELS]

Please create:
1. A clear rubric with criteria categories
2. Performance descriptors for each level
3. Point distributions if using points
4. What distinguishes each level from the next
5. Examples of work at each level (if possible)
6. How to use this rubric for feedback
7. Student-friendly version of the rubric`,
    placeholders: [
      "ESSAY/PROJECT/PRESENTATION/ETC",
      "TOPIC",
      "GRADE",
      "ASSESSMENT CRITERIA OR LEARNING OBJECTIVES",
      "POINTS/LEVELS/DESCRIPTIVE",
      "POINTS OR LEVELS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "education-learning",
    categoryId: "quizzes",
    exampleOutput:
      "A comprehensive rubric with clear criteria, performance descriptors, scoring guidance, and a student-friendly version.",
    customizationNotes: [
      "Include the specific assignment prompt if available",
      "Mention any particular skills or outcomes to emphasize",
      "Share your grading philosophy if relevant",
    ],
    tags: ["rubric", "grading", "assessment"],
    order: 13,
  },

  {
    id: "exam-blueprint",
    title: "Exam Blueprint Designer",
    description: "Design a comprehensive exam blueprint that ensures balanced coverage.",
    promptText: `Create an exam blueprint for balanced test design.

Subject: [SUBJECT]
Topic list to cover:
[TOPIC LIST WITH IMPORTANCE]

Exam specifications:
- Duration: [TIME]
- Format: [QUESTION TYPES]
- Difficulty balance: [EASY/MEDIUM/HARD RATIO]

Learning objectives to assess:
[OBJECTIVES]

Please provide:
1. An exam blueprint table showing:
   - Topics and their weight/importance
   - Number of questions per topic
   - Question types per topic
   - Difficulty distribution
   - Cognitive levels (knowledge, application, analysis)
2. Question allocation by type and difficulty
3. Time allocation recommendations per section
4. How to ensure the exam matches the blueprint
5. Blueprint adjustments based on results`,
    placeholders: [
      "SUBJECT",
      "TOPIC LIST WITH IMPORTANCE",
      "TIME",
      "QUESTION TYPES",
      "EASY/MEDIUM/HARD RATIO",
      "OBJECTIVES",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "education-learning",
    categoryId: "quizzes",
    exampleOutput:
      "A detailed exam blueprint with topic coverage, question distribution, cognitive levels, and implementation guidance.",
    customizationNotes: [
      "Include specific learning standards if applicable",
      "Mention the importance of each topic",
      "Share any constraints on question types",
    ],
    tags: ["exam-design", "blueprint", "test-construction"],
    order: 14,
  },

  {
    id: "diagnostic-assessment",
    title: "Diagnostic Assessment Creator",
    description: "Create assessments that identify learning gaps and student needs.",
    promptText: `Create a diagnostic assessment to identify learning gaps.

Subject: [SUBJECT]
Grade level: [GRADE]
Prerequisites students should have:
[EXPECTED PRIOR KNOWLEDGE]

Purpose of diagnostic:
[WHAT YOU NEED TO IDENTIFY]

Please provide:
1. A diagnostic assessment with 15-30 questions
2. Questions organized by prerequisite skill/concept
3. Each question tests a specific foundational skill
4. An analysis key showing:
   - What each question reveals about student understanding
   - Common misconceptions wrong answers indicate
   - Where to intervene if students miss certain questions
5. How to group students based on results
6. Recommended interventions for different patterns`,
    placeholders: ["SUBJECT", "GRADE", "EXPECTED PRIOR KNOWLEDGE", "WHAT YOU NEED TO IDENTIFY"],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "education-learning",
    categoryId: "quizzes",
    exampleOutput:
      "A diagnostic assessment with analysis guidance that identifies specific learning gaps and intervention strategies.",
    customizationNotes: [
      "Be specific about the prerequisites for your course",
      "Include any common gaps from past experience",
      "Mention the time available for assessment",
    ],
    tags: ["diagnostic", "assessment", "learning-gaps"],
    order: 15,
  },

  // ============================================================================
  // COMPLEX EXPLANATIONS
  // ============================================================================

  {
    id: "concept-explainer",
    title: "Complex Concept Explainer",
    description: "Get clear explanations of difficult concepts using analogies and examples.",
    promptText: `Explain this concept in a way I can understand.

Concept I need explained:
[CONCEPT OR TOPIC]

My background:
- Current knowledge level: [BEGINNER/INTERMEDIATE/ADVANCED]
- Subject area: [CONTEXT]
- What I already understand: [RELATED KNOWLEDGE]

What confuses me:
[CONFUSION OR QUESTIONS]

Preferred explanation style:
- [VISUAL/ANALOGIES/STEP-BY-STEP/REAL-WORLD EXAMPLES]

Please provide:
1. A simple explanation in plain language
2. An analogy or metaphor that makes it click
3. Real-world examples of the concept
4. Visual description (if helpful)
5. Common misconceptions and what's actually true
6. How this connects to what I already know
7. Practice problems or questions to check understanding`,
    placeholders: [
      "CONCEPT OR TOPIC",
      "BEGINNER/INTERMEDIATE/ADVANCED",
      "CONTEXT",
      "RELATED KNOWLEDGE",
      "CONFUSION OR QUESTIONS",
      "VISUAL/ANALOGIES/STEP-BY-STEP/REAL-WORLD EXAMPLES",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "education-learning",
    categoryId: "explanations",
    exampleOutput:
      "A clear explanation with analogies, examples, visual descriptions, and connections to prior knowledge.",
    customizationNotes: [
      "Be honest about what you don't understand",
      "Include the context (course, subject, etc.)",
      "Mention if you're a visual or conceptual learner",
    ],
    tags: ["explanation", "concept", "analogy"],
    order: 16,
  },

  {
    id: "analogy-generator",
    title: "Analogy & Metaphor Creator",
    description: "Generate analogies and metaphors to make complex ideas memorable.",
    promptText: `Create analogies and metaphors for this concept.

Concept to analogize:
[CONCEPT]

Target audience:
[AGE/BACKGROUND LEVEL]

Subject area:
[CONTEXT - HELPS CREATE RELEVANT ANALOGIES]

What I want to emphasize:
[KEY ASPECTS TO ILLUSTRATE]

Please provide:
1. Multiple analogies from different domains (everyday life, sports, nature, etc.)
2. For each analogy:
   - The analogy explained
   - Where it works well
   - Where it breaks down (limitations)
   - How to present it clearly
3. Visual metaphors if applicable
4. A "choose your favorite" selection
5. How to help students create their own analogies`,
    placeholders: [
      "CONCEPT",
      "AGE/BACKGROUND LEVEL",
      "CONTEXT - HELPS CREATE RELEVANT ANALOGIES",
      "KEY ASPECTS TO ILLUSTRATE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "education-learning",
    categoryId: "explanations",
    exampleOutput:
      "Multiple analogies with detailed explanations of where each works and breaks down, plus guidance on presenting them.",
    customizationNotes: [
      "Include the specific aspects of the concept you want to highlight",
      "Mention student interests for relevant analogies",
      "Share what hasn't worked in the past",
    ],
    tags: ["analogies", "metaphors", "teaching-tools"],
    order: 17,
  },

  {
    id: "step-by-step-explainer",
    title: "Step-by-Step Process Explainer",
    description: "Break down complex processes into clear, sequential steps.",
    promptText: `Explain this process step by step.

Process I need to understand:
[PROCESS OR PROCEDURE]

My current understanding:
[WHAT I ALREADY KNOW]

Where I get confused:
[CONFUSING PARTS]

Please provide:
1. An overview of what the process accomplishes
2. Step-by-step breakdown with:
   - What happens at each step
   - Why this step is necessary
   - What to watch out for
   - How to tell if you did it right
3. A flowchart-style description
4. Common mistakes at each step
5. What happens if you skip or mess up a step
6. Memory tricks to remember the sequence
7. Practice examples with solutions`,
    placeholders: ["PROCESS OR PROCEDURE", "WHAT I ALREADY KNOW", "CONFUSING PARTS"],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "education-learning",
    categoryId: "explanations",
    exampleOutput:
      "A clear step-by-step explanation with common mistakes, tips, and practice examples for any process.",
    customizationNotes: [
      "Include the full context if this is part of a larger procedure",
      "Mention if there are variations in how it's done",
      "Share any particular sticking points",
    ],
    tags: ["process", "step-by-step", "procedures"],
    order: 18,
  },

  {
    id: "why-it-works-explainer",
    title: '"Why It Works" Deep Dive',
    description: "Understand the underlying reasons and mechanisms behind concepts.",
    promptText: `Explain WHY this concept works, not just HOW.

Concept or technique:
[CONCEPT OR TECHNIQUE]

I know the basics but don't understand:
[WHAT YOU WANT TO GO DEEPER ON]

Please provide:
1. The underlying principle or mechanism
2. WHY it works at a fundamental level
3. Historical context or discovery (if relevant)
4. Real-world evidence or examples
5. What would happen if the principle were different
6. Common misunderstandings about why it works
7. Connections to related concepts
8. Further resources for deeper exploration`,
    placeholders: ["CONCEPT OR TECHNIQUE", "WHAT YOU WANT TO GO DEEPER ON"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "education-learning",
    categoryId: "explanations",
    exampleOutput:
      "A deep exploration of the underlying mechanisms and principles with historical context and connections.",
    customizationNotes: [
      "Include the specific aspects you want to understand deeper",
      "Mention your level of expertise",
      "Share related concepts you already understand",
    ],
    tags: ["deep-understanding", "mechanisms", "principles"],
    order: 19,
  },

  {
    id: "comparison-explainer",
    title: "Concept Comparison Explainer",
    description: "Understand the differences and relationships between similar concepts.",
    promptText: `Help me understand the differences between these similar concepts.

Concepts to compare:
[LIST OF SIMILAR CONCEPTS]

What confuses me:
[SPECIFIC CONFUSION]

My knowledge level:
[BEGINNER/INTERMEDIATE/ADVANCED]

Please provide:
1. For each concept:
   - Clear, simple definition
   - Key characteristics
   - When to use it
2. Side-by-side comparison focusing on differences
3. The most important distinctions to remember
4. Memory tricks or mnemonics to tell them apart
5. Practice examples asking "which concept applies here?"
6. Visual or conceptual framework to organize them
7. How experts in this field think about the differences`,
    placeholders: [
      "LIST OF SIMILAR CONCEPTS",
      "SPECIFIC CONFUSION",
      "BEGINNER/INTERMEDIATE/ADVANCED",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "education-learning",
    categoryId: "explanations",
    exampleOutput:
      "A detailed comparison of similar concepts with clear distinctions, memory tricks, and practice examples.",
    customizationNotes: [
      "List the specific concepts that confuse you",
      "Include examples if you have them",
      "Mention the context (course, subject)",
    ],
    tags: ["comparison", "distinctions", "concept-clarity"],
    order: 20,
  },

  // ============================================================================
  // RESEARCH PAPERS
  // ============================================================================

  {
    id: "research-outline-builder",
    title: "Research Paper Outline",
    description: "Create structured outlines for research papers and academic writing.",
    promptText: `Create a detailed outline for my research paper.

Research topic:
[TOPIC OR RESEARCH QUESTION]

Paper type:
[TYPE: ARGUMENTATIVE/ANALYTICAL/LITERATURE REVIEW/EXPERIMENTAL]

Length requirements:
[WORD OR PAGE COUNT]

My research so far:
[KEY SOURCES OR FINDINGS]

My thesis or main argument:
[THESIS STATEMENT - OR WRITE "HELP ME FORMULATE"]

Please provide:
1. A detailed outline with:
   - Section headings and subheadings
   - What each section should accomplish
   - Suggested length for each section
2. How to organize my arguments/findings
3. Where specific evidence or sources should go
4. Transitions between sections
5. A strong introduction structure
6. A conclusion framework that doesn't just repeat the intro`,
    placeholders: [
      "TOPIC OR RESEARCH QUESTION",
      "TYPE: ARGUMENTATIVE/ANALYTICAL/LITERATURE REVIEW/EXPERIMENTAL",
      "WORD OR PAGE COUNT",
      "KEY SOURCES OR FINDINGS",
      'THESIS STATEMENT - OR WRITE "HELP ME FORMULATE"',
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "education-learning",
    categoryId: "research-papers",
    exampleOutput:
      "A comprehensive research outline with section structure, purpose, length guidance, and organizational strategy.",
    customizationNotes: [
      "Include your research question even if tentative",
      "Mention any required sections from your instructor",
      "Share key sources you plan to use",
    ],
    tags: ["research", "outline", "academic-writing"],
    order: 21,
  },

  {
    id: "thesis-statement-crafter",
    title: "Thesis Statement Developer",
    description: "Craft strong, arguable thesis statements for academic papers.",
    promptText: `Help me develop a strong thesis statement.

My topic:
[TOPIC]

My main argument so far:
[ROUGH ARGUMENT OR IDEA]

Paper requirements:
- Type: [PAPER TYPE]
- Length: [LENGTH]
- What I need to prove: [REQUIREMENTS]

Please help me:
1. Refine my argument into a clear thesis statement
2. Ensure it's arguable (not just a statement of fact)
3. Make it specific and focused
4. Create 2-3 alternative versions to choose from
5. Explain what makes each version strong
6. Suggest how each thesis would shape the paper
7. Check that the thesis is neither too broad nor too narrow`,
    placeholders: ["TOPIC", "ROUGH ARGUMENT OR IDEA", "PAPER TYPE", "LENGTH", "REQUIREMENTS"],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "education-learning",
    categoryId: "research-papers",
    exampleOutput:
      "Multiple polished thesis statement options with explanations of their strengths and implications for the paper.",
    customizationNotes: [
      "Include your rough ideas even if undeveloped",
      "Mention any counterarguments you need to address",
      "Share assignment requirements if specific",
    ],
    tags: ["thesis", "argument", "academic-writing"],
    order: 22,
  },

  {
    id: "literature-review-helper",
    title: "Literature Review Guide",
    description: "Organize and synthesize sources for a literature review.",
    promptText: `Help me organize my literature review.

Research topic:
[TOPIC OR RESEARCH QUESTION]

My sources:
[LIST OF SOURCES OR FINDINGS]

What I'm trying to show:
[RESEARCH GAP OR ARGUMENT]

Please provide:
1. How to group sources by theme, method, or finding
2. A structure for organizing the review
3. How to synthesize (not just summarize) sources
4. Where to highlight:
   - Agreements between sources
   - Disagreements or debates
   - Gaps in the research
5. Transitional phrases to move between sources
6. How to establish the research gap my work addresses
7. A framework paragraph showing synthesis in action`,
    placeholders: [
      "TOPIC OR RESEARCH QUESTION",
      "LIST OF SOURCES OR FINDINGS",
      "RESEARCH GAP OR ARGUMENT",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "education-learning",
    categoryId: "research-papers",
    exampleOutput:
      "A literature review organization strategy with thematic grouping, synthesis guidance, and example frameworks.",
    customizationNotes: [
      "Include enough detail about each source to see patterns",
      "Mention your research question even if developing",
      "Share the required length if specified",
    ],
    tags: ["literature-review", "synthesis", "research"],
    order: 23,
  },

  {
    id: "citation-helper",
    title: "Citation & Reference Guide",
    description: "Get help with citations, references, and avoiding plagiarism.",
    promptText: `Help me cite this source correctly.

Citation style:
[APA/MLA/CHICAGO/HARVARD/OTHER]

Source type:
[BOOK/ARTICLE/WEBSITE/VIDEO/ETC]

Source information:
[INFORMATION ABOUT THE SOURCE]

Where I'm using it:
[CONTEXT IN MY PAPER]

Please provide:
1. The properly formatted citation
2. The reference list entry
3. How to include in-text citations
4. How to introduce quotes or paraphrases
5. How to integrate this source smoothly
6. Common citation mistakes to avoid
7. Tips for organizing references`,
    placeholders: [
      "APA/MLA/CHICAGO/HARVARD/OTHER",
      "BOOK/ARTICLE/WEBSITE/VIDEO/ETC",
      "INFORMATION ABOUT THE SOURCE",
      "CONTEXT IN MY PAPER",
    ],
    bestTool: "chatgpt",
    difficulty: "beginner",
    domainId: "education-learning",
    categoryId: "research-papers",
    exampleOutput:
      "Properly formatted citations and references with guidance on integration and common mistakes.",
    customizationNotes: [
      "Include all available source information",
      "Mention the edition if relevant",
      "Share your instructor's specific requirements",
    ],
    tags: ["citations", "references", "academic-integrity"],
    order: 24,
  },

  {
    id: "research-question-refiner",
    title: "Research Question Developer",
    description: "Refine and strengthen research questions for academic projects.",
    promptText: `Help me develop a strong research question.

My topic:
[BROAD TOPIC]

My current research question:
[EXISTING QUESTION OR IDEA]

Constraints:
- Type of research: [QUALITATIVE/QUANTITATIVE/MIXED]
- Access: [WHAT RESOURCES/SUBJECTS I HAVE]
- Time: [TIMELINE]

Please help me:
1. Evaluate my current question (strengths and weaknesses)
2. Refine it to be:
   - Specific and focused
   - Researchable (answerable with available resources)
   - Significant (worth answering)
   - Original (contributing new knowledge)
3. Provide 2-3 alternative versions
4. Explain how each version would shape the research
5. Suggest how to operationalize variables or concepts
6. Identify potential methodological approaches`,
    placeholders: [
      "BROAD TOPIC",
      "EXISTING QUESTION OR IDEA",
      "QUALITATIVE/QUANTITATIVE/MIXED",
      "WHAT RESOURCES/SUBJECTS I HAVE",
      "TIMELINE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "education-learning",
    categoryId: "research-papers",
    exampleOutput:
      "Evaluation and refinement of research questions with alternative versions and methodological guidance.",
    customizationNotes: [
      "Include your field of study",
      "Mention any particular theories or frameworks",
      "Share your access to data or subjects",
    ],
    tags: ["research-question", "research-design", "methodology"],
    order: 25,
  },
];
