/**
 * Health & Personal Wellness Prompts
 *
 * PURPOSE: Prompts for meal planning, fitness, stress management, sleep optimization, and journaling.
 *
 * DOMAIN: Health & Personal Wellness
 * CATEGORIES:
 * - Meal Planning
 * - Fitness
 * - Stress Management
 * - Sleep Optimization
 * - Journaling
 *
 * @see src/types/resources.ts - Prompt type definition
 */

import type { Prompt } from "@/types/resources";

/**
 * Health & Wellness prompts collection
 *
 * Each prompt is tested across ChatGPT, Claude, and Gemini.
 * Best tool indicates which gives the most consistent results.
 */
export const healthWellnessPrompts: Prompt[] = [
  // ============================================================================
  // MEAL PLANNING
  // ============================================================================

  {
    id: "weekly-meal-plan",
    title: "Weekly Meal Plan Generator",
    description: "Create a personalized weekly meal plan with recipes and shopping lists.",
    promptText: `Create a weekly meal plan for me based on my preferences and goals.

My details:
- Dietary restrictions: [RESTRICTIONS]
- Goals: [WEIGHT LOSS/MAINTAIN/GAIN/MUSCLE BUILD/ENERGY]
- Budget: [BUDGET LEVEL]
- Cooking time preference: [QUICK/MODERATE/EXTENSIVE]
- Household size: [NUMBER OF PEOPLE]
- Days I have more time to cook: [DAYS]

Please provide:
1. A 7-day meal plan (breakfast, lunch, dinner, snacks)
2. Recipes for each meal with ingredients and instructions
3. A consolidated grocery list organized by section
4. Meal prep suggestions to save time
5. Estimated cost per serving
6. Nutritional highlights for key meals`,
    placeholders: [
      "RESTRICTIONS",
      "WEIGHT LOSS/MAINTAIN/GAIN/MUSCLE BUILD/ENERGY",
      "BUDGET LEVEL",
      "QUICK/MODERATE/EXTENSIVE",
      "NUMBER OF PEOPLE",
      "DAYS",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "health-wellness",
    categoryId: "meal-planning",
    exampleOutput:
      "A complete 7-day meal plan with diverse recipes, organized shopping list, prep suggestions, and nutritional notes tailored to your goals.",
    customizationNotes: [
      "Be specific about allergies and intolerances",
      "Include cuisines you enjoy or want to avoid",
      "Mention kitchen equipment available (air fryer, slow cooker, etc.)",
    ],
    tags: ["meals", "meal-prep", "recipes", "grocery-list"],
    order: 1,
  },

  {
    id: "grocery-list-optimizer",
    title: "Smart Grocery List Organizer",
    description: "Organize your grocery list efficiently and find money-saving substitutions.",
    promptText: `Help me optimize my grocery list for efficiency and savings.

My grocery list:
[SHOPPING LIST ITEMS]

Store preferences:
- Store I shop at: [STORE]
- Budget: [TIGHT/MODERATE/FLEXIBLE]
- Open to substitutions: [YES/NO]

Please provide:
1. A reorganized list by store section for efficient shopping
2. Potential substitutions that save money without sacrificing quality
3. Items that can be bought in bulk for savings
4. Seasonal alternatives that are fresher and cheaper
5. A checklist format I can use while shopping`,
    placeholders: ["SHOPPING LIST ITEMS", "STORE", "TIGHT/MODERATE/FLEXIBLE", "YES/NO"],
    bestTool: "chatgpt",
    difficulty: "beginner",
    domainId: "health-wellness",
    categoryId: "meal-planning",
    exampleOutput:
      "An aisle-organized shopping list with money-saving substitutions, bulk-buy recommendations, and a convenient checklist format.",
    customizationNotes: [
      "Include quantities needed for each item",
      "Mention if you comparison shop at multiple stores",
      "Note any brand preferences or deal-breakers",
    ],
    tags: ["grocery", "shopping", "budget", "optimization"],
    order: 2,
  },

  {
    id: "recipe-modifier",
    title: "Recipe Modifier for Dietary Needs",
    description:
      "Adapt any recipe to fit dietary restrictions, substitutions, or ingredient availability.",
    promptText: `Help me modify this recipe to fit my needs.

Original recipe:
[RECIPE WITH INGREDIENTS AND INSTRUCTIONS]

My modifications needed:
- Dietary restrictions: [RESTRICTIONS]
- Ingredients I have/don't have: [INGREDIENT CHANGES]
- Other preferences: [PREFERENCES]

Please provide:
1. The modified recipe with all substitutions
2. Explanation of why each substitution works
3. Any adjustments to cooking times or techniques
4. How the changes might affect taste and texture
5. Nutritional impact of the changes`,
    placeholders: [
      "RECIPE WITH INGREDIENTS AND INSTRUCTIONS",
      "RESTRICTIONS",
      "INGREDIENT CHANGES",
      "PREFERENCES",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "health-wellness",
    categoryId: "meal-planning",
    exampleOutput:
      "A fully adapted recipe with substituted ingredients, cooking adjustments, and explanations of how changes affect the final dish.",
    customizationNotes: [
      "Include the full original recipe for context",
      "Be specific about severity of allergies or intolerances",
      "Mention cooking equipment limitations if any",
    ],
    tags: ["recipes", "substitutions", "dietary", "cooking"],
    order: 3,
  },

  {
    id: "meal-prep-strategist",
    title: "Meal Prep Strategy Session",
    description: "Create an efficient meal prep plan that saves time and reduces food waste.",
    promptText: `Design a meal prep strategy that works for my lifestyle.

My situation:
- Meals to prep: [NUMBER MEALS] per day for [NUMBER DAYS]
- Storage containers: [CONTAINER TYPE/COUNT]
- Prep time available: [HOURS] on [DAY]
- Equipment: [OVEN/SLOW COOKER/SHEET PAN/ETC]
- My biggest meal prep challenge: [CHALLENGE]

Please create:
1. A strategic prep plan (what to make when)
2. Batch cooking recommendations
3. Storage guidelines for each item
4. Reheating instructions
5. How to prevent "prep fatigue" with variety
6. A grocery list organized by prep workflow`,
    placeholders: [
      "NUMBER MEALS",
      "NUMBER DAYS",
      "CONTAINER TYPE/COUNT",
      "HOURS",
      "DAY",
      "OVEN/SLOW COOKER/SHEET PAN/ETC",
      "CHALLENGE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "health-wellness",
    categoryId: "meal-planning",
    exampleOutput:
      "A strategic meal prep workflow with batch cooking recommendations, storage guidelines, and variety strategies to prevent boredom.",
    customizationNotes: [
      "Be realistic about your prep tolerance",
      "Include your energy levels on prep day",
      "Mention foods you hate eating as leftovers",
    ],
    tags: ["meal-prep", "batch-cooking", "organization"],
    order: 4,
  },

  {
    id: "nutritional-balancer",
    title: "Nutritional Meal Analyzer",
    description: "Analyze and balance your meals for optimal nutrition.",
    promptText: `Analyze the nutritional balance of my eating plan and suggest improvements.

What I typically eat in a day:
[DAILY FOOD LOG]

My goals:
- Primary goal: [GOAL]
- Activity level: [SEDENTARY/MODERATE/VERY ACTIVE]
- Concerns: [NUTRITIONAL CONCERNS]

Please analyze:
1. Current nutritional strengths and gaps
2. Protein, carb, and fat balance
3. Micronutrients I may be missing
4. Simple swaps to improve nutritional quality
5. 5 easy additions that would have the biggest impact
6. A sample "optimized" day of eating`,
    placeholders: [
      "DAILY FOOD LOG",
      "GOAL",
      "SEDENTARY/MODERATE/VERY ACTIVE",
      "NUTRITIONAL CONCERNS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "health-wellness",
    categoryId: "meal-planning",
    exampleOutput:
      "A nutritional analysis identifying gaps in your diet, simple improvements, and a sample day of optimized eating.",
    customizationNotes: [
      "Be honest about what you actually eat (not what you should eat)",
      "Include supplements if you take any",
      "Mention any digestive sensitivities",
    ],
    tags: ["nutrition", "healthy-eating", "balance"],
    order: 5,
  },

  // ============================================================================
  // FITNESS
  // ============================================================================

  {
    id: "workout-plan-generator",
    title: "Personalized Workout Plan",
    description: "Create a customized workout plan based on your goals, equipment, and schedule.",
    promptText: `Create a personalized workout plan for me.

My details:
- Goal: [MUSCLE GAIN/FAT LOSS/STRENGTH/ENDURANCE/GENERAL FITNESS]
- Experience level: [BEGINNER/INTERMEDIATE/ADVANCED]
- Days per week: [NUMBER]
- Minutes per session: [TIME]
- Equipment available: [EQUIPMENT]
- Injuries or limitations: [LIMITATIONS]

Please provide:
1. A weekly workout schedule
2. Detailed exercises for each workout (sets, reps, rest)
3. Form cues and safety notes
4. Progressive overload plan for 8 weeks
5. Warm-up and cool-down routines
6. How to know when to increase weight/difficulty`,
    placeholders: [
      "MUSCLE GAIN/FAT LOSS/STRENGTH/ENDURANCE/GENERAL FITNESS",
      "BEGINNER/INTERMEDIATE/ADVANCED",
      "NUMBER",
      "TIME",
      "EQUIPMENT",
      "LIMITATIONS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "health-wellness",
    categoryId: "fitness",
    exampleOutput:
      "A complete workout plan with exercise details, weekly schedule, progression strategy, and important safety considerations.",
    customizationNotes: [
      "Be specific about past injuries or problem areas",
      "Include exercises you love or hate",
      "Mention time of day you usually work out",
    ],
    tags: ["workout", "exercise", "fitness-plan"],
    order: 6,
  },

  {
    id: "exercise-explainer",
    title: "Exercise Technique Explainer",
    description: "Get detailed explanations of how to perform exercises with proper form.",
    promptText: `Explain how to properly perform this exercise.

Exercise name:
[EXERCISE NAME]

My context:
- Experience level: [BEGINNER/INTERMEDIATE/ADVANCED]
- Equipment available: [EQUIPMENT]
- Any relevant injuries: [INJURIES]

Please explain:
1. Step-by-step setup and execution
2. Common form mistakes and how to avoid them
3. What muscles should be working
4. Cues to remember during the movement
5. Breathing technique
6. How to make it easier or harder
7. Warning signs that something is wrong`,
    placeholders: ["EXERCISE NAME", "BEGINNER/INTERMEDIATE/ADVANCED", "EQUIPMENT", "INJURIES"],
    bestTool: "chatgpt",
    difficulty: "beginner",
    domainId: "health-wellness",
    categoryId: "fitness",
    exampleOutput:
      "A detailed exercise breakdown with form cues, common mistakes, muscle targets, and regression/progression options.",
    customizationNotes: [
      "Specify if you want dumbbell, barbell, or bodyweight variations",
      "Mention if you have mobility limitations",
      "Include any specific concerns about the movement",
    ],
    tags: ["exercise", "form", "technique", "instructional"],
    order: 7,
  },

  {
    id: "fitness-progress-tracker",
    title: "Fitness Progress Analyzer",
    description: "Track and analyze your fitness progress over time.",
    promptText: `Help me analyze my fitness progress and plan next steps.

My data:
[BASIS OF TRACKING: WEIGHTS/REPS/TIMES/MEASUREMENTS/PHOTOS]

My starting point:
[STARTING STATS]

Current stats:
[CURRENT STATS]

My goals:
[GOALS]

Workouts I've been doing:
[ROUTINE DESCRIPTION]

Please analyze:
1. What progress I've made (be specific)
2. What's working well in my current routine
3. Plateaus or areas lacking progress
4. Specific adjustments to try next
5. New goals that make sense given my progress
6. How to track progress more effectively`,
    placeholders: [
      "BASIS OF TRACKING: WEIGHTS/REPS/TIMES/MEASUREMENTS/PHOTOS",
      "STARTING STATS",
      "CURRENT STATS",
      "GOALS",
      "ROUTINE DESCRIPTION",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "health-wellness",
    categoryId: "fitness",
    exampleOutput:
      "A progress analysis highlighting wins, identifying plateaus, and providing specific adjustments to keep improving.",
    customizationNotes: [
      "Include both quantitative and qualitative data",
      "Share how workouts have been feeling",
      "Mention any life changes affecting your routine",
    ],
    tags: ["progress", "tracking", "analysis", "goals"],
    order: 8,
  },

  {
    id: "home-workout-designer",
    title: "No-Equipment Home Workout",
    description: "Design effective workouts you can do at home with minimal or no equipment.",
    promptText: `Design a home workout that requires minimal equipment.

My situation:
- Available space: [SPACE DESCRIPTION]
- Equipment: [NONE/MINIMAL EQUIPMENT]
- Time available: [MINUTES]
- Intensity preference: [LOW/MODERATE/HIGH]
- Fitness level: [BEGINNER/INTERMEDIATE/ADVANCED]
- Goals: [GOALS]

Please create:
1. A complete workout (warm-up, main, cool-down)
2. Exercise substitutions if I don't have specific equipment
3. How to make each exercise easier or harder
4. A progression plan to increase difficulty over time
5. How to know if you're pushing hard enough`,
    placeholders: [
      "SPACE DESCRIPTION",
      "NONE/MINIMAL EQUIPMENT",
      "MINUTES",
      "LOW/MODERATE/HIGH",
      "BEGINNER/INTERMEDIATE/ADVANCED",
      "GOALS",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "health-wellness",
    categoryId: "fitness",
    exampleOutput:
      "A complete home workout with exercise options, difficulty modifications, and a progression plan for continued improvement.",
    customizationNotes: [
      "Be honest about your space limitations",
      "Mention neighbors/noise considerations if relevant",
      "Include household items you have available",
    ],
    tags: ["home-workout", "no-equipment", "bodyweight"],
    order: 9,
  },

  {
    id: "injury-modified-workout",
    title: "Injury-Modified Workout Plan",
    description: "Adapt workouts around injuries, pain, or physical limitations.",
    promptText: `Create a workout plan that works around my physical limitations.

My injury/limitation:
[INJURY OR LIMITATION]

Medical guidance:
[DOCTOR RECOMMENDATIONS OR RESTRICTIONS]

My fitness goals:
[GOALS]

Equipment available:
[EQUIPMENT]

Please provide:
1. Safe exercises I CAN do
2. Exercises to avoid completely
3. Modifications for common movements
4. How to maintain fitness while healing
5. Warning signs to watch for
6. When and how to gradually return to normal training`,
    placeholders: [
      "INJURY OR LIMITATION",
      "DOCTOR RECOMMENDATIONS OR RESTRICTIONS",
      "GOALS",
      "EQUIPMENT",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "health-wellness",
    categoryId: "fitness",
    exampleOutput:
      "A carefully designed workout plan with safe exercises, clear modifications, and guidance for training around your limitations.",
    customizationNotes: [
      "Share as much detail from your medical provider as possible",
      "Include what movements feel okay vs. problematic",
      "Mention your timeline if known",
    ],
    tags: ["injury", "modification", "rehabilitation"],
    order: 10,
  },

  // ============================================================================
  // STRESS MANAGEMENT
  // ============================================================================

  {
    id: "stress-assessment",
    title: "Personal Stress Assessment",
    description: "Identify your stress sources, patterns, and personalized management strategies.",
    promptText: `Help me assess my stress levels and identify management strategies.

My current stressors:
[STRESSORS I'M DEALING WITH]

My stress symptoms:
[PHYSICAL/EMOTIONAL SYMPTOMS]

Current coping mechanisms:
[WHAT I CURRENTLY DO]

My situation:
- Work environment: [DESCRIPTION]
- Personal commitments: [COMMITMENTS]
- Support system: [SUPPORT LEVEL]

Please analyze:
1. My primary stress sources and their impact
2. Patterns in when/why I feel most stressed
3. Current coping mechanisms that help or hurt
4. 5-10 personalized stress reduction techniques
5. Which techniques to try in different situations
6. How to build a sustainable stress management routine`,
    placeholders: [
      "STRESSORS I'M DEALING WITH",
      "PHYSICAL/EMOTIONAL SYMPTOMS",
      "WHAT I CURRENTLY DO",
      "DESCRIPTION",
      "COMMITMENTS",
      "SUPPORT LEVEL",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "health-wellness",
    categoryId: "stress-management",
    exampleOutput:
      "A personalized stress analysis identifying triggers, evaluating current coping strategies, and recommending tailored stress management techniques.",
    customizationNotes: [
      "Be honest about your stress levels",
      "Include both major and minor stressors",
      "Share what time of day is most stressful",
    ],
    tags: ["stress", "assessment", "mental-health", "wellness"],
    order: 11,
  },

  {
    id: "mindfulness-techniques",
    title: "Mindfulness & Meditation Guide",
    description: "Learn and practice mindfulness techniques for stress reduction.",
    promptText: `Teach me mindfulness techniques that fit my lifestyle.

My experience with meditation:
[EXPERIENCE LEVEL]

My biggest mental challenges:
[CHALLENGES: ANXIOUS THOUGHTS/RUMINATION/DISTRACTION/ETC]

Time I can dedicate:
[MINUTES PER DAY]

Preferences:
- [GUIDED/SELF-DIRECTED]
- [MOVEMENT/STILLNESS/BOTH]

Please provide:
1. 3-5 specific mindfulness techniques to try
2. Step-by-step instructions for each
3. How to fit practice into my daily routine
4. What to expect (it's normal for thoughts to wander)
5. How to know if it's helping
6. Troubleshooting common challenges`,
    placeholders: [
      "EXPERIENCE LEVEL",
      "CHALLENGES: ANXIOUS THOUGHTS/RUMINATION/DISTRACTION/ETC",
      "MINUTES PER DAY",
      "GUIDED/SELF-DIRECTED",
      "MOVEMENT/STILLNESS/BOTH",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "health-wellness",
    categoryId: "stress-management",
    exampleOutput:
      "Practical mindfulness techniques with clear instructions, routine integration tips, and realistic expectations for beginners.",
    customizationNotes: [
      "Be honest about your skepticism if you have any",
      "Include any past meditation experiences",
      "Mention what type of learner you are (visual, auditory, etc.)",
    ],
    tags: ["mindfulness", "meditation", "stress-relief"],
    order: 12,
  },

  {
    id: "burnout-prevention",
    title: "Burnout Prevention & Recovery",
    description: "Identify burnout signs and create a recovery plan.",
    promptText: `Help me prevent or recover from burnout.

My current state:
[DESCRIBE HOW YOU'RE FEELING]

Work situation:
[WORK LOAD/ENVIRONMENT/STRESSORS]

My warning signs:
[SYMPTOMS OF APPROACHING BURNOUT]

What self-care I currently do:
[CURRENT SELF-CARE]

Please help me with:
1. Am I showing signs of burnout? (specific indicators)
2. Immediate actions to take if I'm in burnout territory
3. Sustainable habits that prevent future burnout
4. Setting boundaries at work and home
5. Recovery timeline and expectations
6. When to seek professional help`,
    placeholders: [
      "DESCRIBE HOW YOU'RE FEELING",
      "WORK LOAD/ENVIRONMENT/STRESSORS",
      "SYMPTOMS OF APPROACHING BURNOUT",
      "CURRENT SELF-CARE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "health-wellness",
    categoryId: "stress-management",
    exampleOutput:
      "A burnout assessment with specific warning signs, immediate recovery actions, and long-term prevention strategies.",
    customizationNotes: [
      "Share how long you've been feeling this way",
      "Include any major life changes or stressors",
      "Be honest about work-life balance",
    ],
    tags: ["burnout", "recovery", "boundaries", "mental-health"],
    order: 13,
  },

  {
    id: "quick-stress-reset",
    title: "Quick Stress Reset Techniques",
    description: "Fast, effective techniques to manage stress in the moment.",
    promptText: `Give me quick stress relief techniques I can use anywhere.

My typical stressful situations:
[SITUATIONS WHERE I FEEL STRESSED]

What usually happens:
[PHYSICAL/EMOTIONAL RESPONSE]

My constraints:
- Time available: [SECONDS/MINUTES]
- Location restrictions: [CAN/CAN'T LEAVE ROOM/AUDIO/ETC]

Please provide:
1. 5-10 techniques that take 5 minutes or less
2. Techniques organized by time needed (1 min, 3 min, 5 min)
3. What works in different settings (office, home, public)
4. How to remember to use these in the moment
5. Which techniques are most effective for specific stress symptoms`,
    placeholders: [
      "SITUATIONS WHERE I FEEL STRESSED",
      "PHYSICAL/EMOTIONAL RESPONSE",
      "SECONDS/MINUTES",
      "CAN/CAN'T LEAVE ROOM/AUDIO/ETC",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "health-wellness",
    categoryId: "stress-management",
    exampleOutput:
      "Quick stress relief techniques organized by duration and setting, with specific recommendations for different stress symptoms.",
    customizationNotes: [
      "Be specific about typical stressful situations",
      "Mention if you're in a private or public space",
      "Include what has or hasn't worked before",
    ],
    tags: ["stress", "quick-relief", "breathing", "coping"],
    order: 14,
  },

  {
    id: "work-life-boundaries",
    title: "Healthy Work-Life Boundaries",
    description: "Establish and maintain boundaries that protect your wellbeing.",
    promptText: `Help me establish better work-life boundaries.

Current situation:
[WORK ARRANGEMENT: REMOTE/HYBRID/OFFICE]

Challenges I'm facing:
[BOUNDARY CHALLENGES]

My struggles:
- [SAYING NO/CHECKING EMAILS/AFTER-HOURS WORK/ETC]

Ideal balance would look like:
[DESCRIPTION OF WHAT YOU WANT]

Please create:
1. Specific boundaries to set (with exact wording)
2. How to communicate boundaries to others
3. What to do when boundaries are tested
4. Technology settings that help
5. Signs that my boundaries need adjustment
6. How to maintain boundaries without guilt`,
    placeholders: [
      "WORK ARRANGEMENT: REMOTE/HYBRID/OFFICE",
      "BOUNDARY CHALLENGES",
      "SAYING NO/CHECKING EMAILS/AFTER-HOURS WORK/ETC",
      "DESCRIPTION OF WHAT YOU WANT",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "health-wellness",
    categoryId: "stress-management",
    exampleOutput:
      "Specific boundary statements with communication scripts, enforcement strategies, and tools to maintain healthy work-life separation.",
    customizationNotes: [
      "Be honest about where you struggle most",
      "Include your workplace culture context",
      "Mention any specific people who challenge your boundaries",
    ],
    tags: ["boundaries", "work-life-balance", "wellness"],
    order: 15,
  },

  // ============================================================================
  // SLEEP OPTIMIZATION
  // ============================================================================

  {
    id: "sleep-analysis",
    title: "Sleep Quality Analyzer",
    description: "Analyze your sleep patterns and identify improvement opportunities.",
    promptText: `Analyze my sleep patterns and help me improve.

My typical sleep:
[USUAL BEDTIME] - [USUAL WAKE TIME] = [HOURS SLEPT]

Sleep challenges:
[ISSUES: FALLING ASLEEP/STAYING ASLEEP/WAKING UP/ETC]

My routine:
[EVENING ROUTINE DESCRIPTION]

Environment:
[NOISE/LIGHT/TEMP/ETC]

Daytime habits:
[CAFFEINE/EXERCISE/NAPS/SCREEN TIME]

Please analyze:
1. My current sleep patterns and red flags
2. Likely causes of my sleep issues
3. My biggest sleep disruptors
4. 5-10 specific improvements to try
5. Ideal bedtime routine for me
6. What to expect as I make changes`,
    placeholders: [
      "USUAL BEDTIME",
      "USUAL WAKE TIME",
      "HOURS SLEPT",
      "ISSUES: FALLING ASLEEP/STAYING ASLEEP/WAKING UP/ETC",
      "EVENING ROUTINE DESCRIPTION",
      "NOISE/LIGHT/TEMP/ETC",
      "CAFFEINE/EXERCISE/NAPS/SCREEN TIME",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "health-wellness",
    categoryId: "sleep",
    exampleOutput:
      "A sleep analysis identifying disruptors, root causes of issues, and personalized improvement strategies.",
    customizationNotes: [
      "Include sleep data if you track it",
      "Be honest about evening habits",
      "Mention any medical conditions or medications",
    ],
    tags: ["sleep", "analysis", "health"],
    order: 16,
  },

  {
    id: "bedtime-routine-designer",
    title: "Personalized Bedtime Routine",
    description: "Create an optimal bedtime routine for better sleep quality.",
    promptText: `Design a bedtime routine that helps me sleep better.

Current bedtime routine:
[CURRENT ROUTINE]

My sleep goals:
[GOALS: FALL ASLEEP FASTER/WAKE LESS/ETC]

My evening constraints:
-Time available: [TIME AVAILABLE]
- Household: [LONE SLEEPER/PARTNER/KIDS/PETS]
- Preferences: [QUIET/READING/BATH/ETC]

My challenges:
[CHALLENGES]

Please create:
1. A step-by-step bedtime routine
2. What to do at each step and why
3. How long the routine should take
4. What to avoid in the hours before bed
5. Adjustments for different schedules (early/late)
6. How to make the routine stick long-term`,
    placeholders: [
      "CURRENT ROUTINE",
      "GOALS: FALL ASLEEP FASTER/WAKE LESS/ETC",
      "TIME AVAILABLE",
      "LONE SLEEPER/PARTNER/KIDS/PETS",
      "QUIET/READING/BATH/ETC",
      "CHALLENGES",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "health-wellness",
    categoryId: "sleep",
    exampleOutput:
      "A personalized bedtime routine with specific activities, timing, and explanations for how each step improves sleep quality.",
    customizationNotes: [
      "Include what you currently do that works",
      "Share your natural rhythm (night owl vs. early bird)",
      "Mention any barriers to consistency",
    ],
    tags: ["sleep", "routine", "bedtime", "habits"],
    order: 17,
  },

  {
    id: "sleep-environment-optimizer",
    title: "Sleep Environment Makeover",
    description: "Optimize your bedroom environment for better sleep.",
    promptText: `Help me optimize my bedroom for sleep.

Current setup:
- Light: [LIGHTING SITUATION]
- Noise: [NOISE LEVEL]
- Temperature: [USUAL TEMP AND PREFERENCES]
- Bedding: [MATTRESS/PILLOW/BLANKETS]
- Electronics: [TV/PHONE/COMPUTER IN ROOM]

My budget for improvements:
[BUDGET LEVEL]

My home situation:
[RENT/OWN, ALONE/SHARE ROOM, ETC.]

Please recommend:
1. Priority improvements sorted by impact
2. Budget-friendly vs. premium options
3. Changes I can make today vs. investments
4. Setup for different sleep preferences (hot/cold sleepers)
5. How to maintain good sleep hygiene
6. What makes the biggest difference for most people`,
    placeholders: [
      "LIGHTING SITUATION",
      "NOISE LEVEL",
      "USUAL TEMP AND PREFERENCES",
      "MATTRESS/PILLOW/BLANKETS",
      "TV/PHONE/COMPUTER IN ROOM",
      "BUDGET LEVEL",
      "RENT/OWN, ALONE/SHARE ROOM, ETC.",
    ],
    bestTool: "chatgpt",
    difficulty: "beginner",
    domainId: "health-wellness",
    categoryId: "sleep",
    exampleOutput:
      "Prioritized recommendations for optimizing your sleep environment with options for different budgets and situations.",
    customizationNotes: [
      "Describe your current sleep quality",
      "Mention if you share your bedroom",
      "Include any sensitivity issues (light, noise, temperature)",
    ],
    tags: ["sleep", "environment", "bedroom"],
    order: 18,
  },

  {
    id: "sleep-schedule-reset",
    title: "Sleep Schedule Reset",
    description: "Fix your circadian rhythm and establish a healthy sleep schedule.",
    promptText: `Help me fix my sleep schedule.

Current problematic pattern:
[BEDTIME AND WAKE TIME]

Ideal schedule would be:
[DESIRED BEDTIME AND WAKE TIME]

What's going wrong:
[ISSUES: CAN'T FALL ASLEEP/OVERSLEEP/INCONSISTENT/ETC]

Constraints:
- Work/school schedule: [COMMITMENTS]
- Can adjust: [WHAT CAN CHANGE]

Please create:
1. A gradual plan to shift my schedule (if needed)
2. Daily schedule for the next 7-14 days
3. Morning routine to support the new schedule
4. Evening routine to prepare for sleep
5. How to handle setbacks (late nights, etc.)
6. Strategies to maintain consistency long-term`,
    placeholders: [
      "BEDTIME AND WAKE TIME",
      "DESIRED BEDTIME AND WAKE TIME",
      "ISSUES: CAN'T FALL ASLEEP/OVERSLEEP/INCONSISTENT/ETC",
      "COMMITMENTS",
      "WHAT CAN CHANGE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "health-wellness",
    categoryId: "sleep",
    exampleOutput:
      "A structured plan to reset your sleep schedule with daily actions, morning/evening routines, and setback recovery strategies.",
    customizationNotes: [
      "Be honest about what keeps you up late",
      "Include your natural sleep tendencies",
      "Mention how long this problem has existed",
    ],
    tags: ["sleep", "schedule", "circadian-rhythm"],
    order: 19,
  },

  {
    id: "sleep-tracking-guide",
    title: "Sleep Tracking & Analysis",
    description: "Learn to track and interpret your sleep data.",
    promptText: `Guide me in tracking and understanding my sleep.

Tracking method(s):
[TRACKING METHOD: SMARTWATCH/APP/JOURNAL/NONE]

My sleep concerns:
[CONCERNS]

Data I can collect:
[DATA AVAILABLE OR CAN COLLECT]

Please explain:
1. What sleep metrics matter most (and why)
2. How to track effectively without obsessing
3. Patterns to look for in my data
4. What good vs. bad sleep looks like in numbers
5. How often to review my sleep data
6. When data is helpful vs. when to listen to my body`,
    placeholders: [
      "TRACKING METHOD: SMARTWATCH/APP/JOURNAL/NONE",
      "CONCERNS",
      "DATA AVAILABLE OR CAN COLLECT",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "health-wellness",
    categoryId: "sleep",
    exampleOutput:
      "A guide to tracking sleep with key metrics explained, pattern recognition tips, and advice on healthy data habits.",
    customizationNotes: [
      "Mention specific device/app if you use one",
      "Share any data you've already collected",
      "Include if you tend to obsess over metrics",
    ],
    tags: ["sleep", "tracking", "data", "metrics"],
    order: 20,
  },

  // ============================================================================
  // JOURNALING
  // ============================================================================

  {
    id: "journal-prompts",
    title: "Personalized Journal Prompts",
    description: "Get journaling prompts tailored to your emotional needs and goals.",
    promptText: `Give me journaling prompts that match what I need right now.

Current emotional state:
[HOW I'M FEELING]

What's on my mind:
[WHAT'S BOTHERING ME OR EXCITING ME]

My journaling goals:
[GOALS: CLARITY/HEALING/CREATIVITY/GROWTH/ETC]

Journaling experience:
[EXPERIENCE LEVEL]

My preferred style:
- [STREAM OF CONSCIOUSNESS/STRUCTURED/PROMPT-BASED]

Please provide:
1. 10-15 journaling prompts specific to my situation
2. Prompts organized by intensity (light to deep)
3. How to approach each prompt
4. What to do if I feel stuck
5. A simple journaling routine to build
6. Signs that journaling is helping`,
    placeholders: [
      "HOW I'M FEELING",
      "WHAT'S BOTHERING ME OR EXCITING ME",
      "GOALS: CLARITY/HEALING/CREATIVITY/GROWTH/ETC",
      "EXPERIENCE LEVEL",
      "STREAM OF CONSCIOUSNESS/STRUCTURED/PROMPT-BASED",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "health-wellness",
    categoryId: "journaling",
    exampleOutput:
      "Personalized journal prompts ranging from light reflection to deep exploration, with guidance on how to approach each.",
    customizationNotes: [
      "Be honest about your emotional state",
      "Include past journaling experiences",
      'Mention if you\'re a "feelings" person or more analytical',
    ],
    tags: ["journaling", "prompts", "reflection", "self-awareness"],
    order: 21,
  },

  {
    id: "gratitude-practice",
    title: "Gratitude Practice Guide",
    description: "Build a sustainable gratitude journaling practice.",
    promptText: `Help me build a gratitude practice that actually sticks.

My past experience with gratitude:
[EXPERIENCE]

My skepticism about gratitude practice:
[HESITATIONS OR RESISTANCE]

What I'm hoping for:
[DESIRED OUTCOME]

Time I can commit:
[TIME AVAILABLE]

Please provide:
1. A gratitude practice that fits my skepticism/style
2. Specific prompts beyond "what are you grateful for"
3. How to find gratitude during difficult times
4. A simple daily/weekly routine
5. How to know if it's making a difference
6. Ways to deepen the practice over time`,
    placeholders: ["EXPERIENCE", "HESITATIONS OR RESISTANCE", "DESIRED OUTCOME", "TIME AVAILABLE"],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "health-wellness",
    categoryId: "journaling",
    exampleOutput:
      "A realistic gratitude practice with specific prompts, techniques for difficult times, and guidance on noticing changes.",
    customizationNotes: [
      "Be honest about any skepticism",
      "Share what has or hasn't worked before",
      "Mention if you're going through a hard time",
    ],
    tags: ["gratitude", "journaling", "wellness", "positivity"],
    order: 22,
  },

  {
    id: "reflective-journaling",
    title: "Reflective Journaling Framework",
    description: "Structure your journaling for deeper self-reflection and growth.",
    promptText: `Teach me a framework for reflective journaling.

What I want to reflect on:
[TOPIC OR AREA OF LIFE]

My journaling style:
[PREFERENCE]

Time I have available:
[TIME]

My experience with journaling:
[EXPERIENCE]

Please provide:
1. A clear framework or structure to follow
2. Step-by-step guidance for each reflection session
3. Questions that lead to genuine insights
4. How to move from description to insight to action
5. How to review past entries and notice patterns
6. A sample entry to see how it works in practice`,
    placeholders: ["TOPIC OR AREA OF LIFE", "PREFERENCE", "TIME", "EXPERIENCE"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "health-wellness",
    categoryId: "journaling",
    exampleOutput:
      "A structured framework for reflective journaling with guiding questions, examples, and guidance on extracting insights.",
    customizationNotes: [
      "Include the specific area you want to reflect on",
      "Share if you prefer daily or periodic reflection",
      "Mention any past therapy or coaching frameworks you like",
    ],
    tags: ["journaling", "reflection", "growth", "self-awareness"],
    order: 23,
  },

  {
    id: "problem-solving-journal",
    title: "Problem-Solving Journal Sessions",
    description: "Use journaling to work through problems, decisions, and confusion.",
    promptText: `Guide me through a problem-solving journal session.

The problem or decision I'm facing:
[DESCRIPTION OF THE ISSUE]

My thoughts so far:
[MY CURRENT THINKING]

What's keeping me stuck:
[OBSTACLES OR CONFUSION]

Please help me journal through this by:
1. Asking me 5-10 powerful questions
2. Suggesting different angles to consider
3. Helping me uncover assumptions I'm making
4. Guiding me to generate options
5. Creating a structure for decision-making
6. Identifying the very next step`,
    placeholders: ["DESCRIPTION OF THE ISSUE", "MY CURRENT THINKING", "OBSTACLES OR CONFUSION"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "health-wellness",
    categoryId: "journaling",
    exampleOutput:
      "Guiding questions to help you think through your problem, uncover blind spots, and identify next steps.",
    customizationNotes: [
      "Include all the complexity of the situation",
      "Share constraints or limitations",
      "Mention any solutions you've already considered",
    ],
    tags: ["journaling", "problem-solving", "decisions"],
    order: 24,
  },

  {
    id: "journal-habit-builder",
    title: "Sustainable Journaling Habit",
    description: "Build a journaling practice that fits your life and actually lasts.",
    promptText: `Help me build a journaling habit I can stick with.

My past journaling attempts:
[PAST EXPERIENCES: WHAT WORKED/WHAT DIDN'T]

What I want from journaling:
[GOALS]

My schedule and energy:
[WHEN I HAVE TIME AND ENERGY]

Obstacles to consistency:
[CHALLENGES]

Please create:
1. A realistic journaling plan based on my actual life
2. Minimum viable habit (what counts as a win)
3. Best time and place for me to journal
4. How to recover when I miss a day
5. Ways to keep it interesting
6. Signs it's time to adjust my practice`,
    placeholders: [
      "PAST EXPERIENCES: WHAT WORKED/WHAT DIDN'T",
      "GOALS",
      "WHEN I HAVE TIME AND ENERGY",
      "CHALLENGES",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "health-wellness",
    categoryId: "journaling",
    exampleOutput:
      "A realistic journaling habit plan with a minimum viable practice, recovery strategies, and guidance for long-term sustainability.",
    customizationNotes: [
      "Be honest about why past attempts failed",
      "Include your most energetic/reflective time of day",
      "Mention if you're motivated by routine or variety",
    ],
    tags: ["journaling", "habits", "consistency", "routine"],
    order: 25,
  },
];
