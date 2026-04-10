/**
 * Productivity & Organization Prompts
 *
 * PURPOSE: Prompts for daily planning, task management, goal setting, and workflow optimization.
 *
 * DOMAIN: Productivity & Organization
 * CATEGORIES:
 * - Daily Planning
 * - Task Management
 * - Goal Setting
 * - Time Management
 * - Meeting Productivity
 * - Habit Tracking
 *
 * @see src/types/resources.ts - Prompt type definition
 */

import type { Prompt } from "@/types/resources";

/**
 * Productivity prompts collection
 *
 * Each prompt is tested across ChatGPT, Claude, and Gemini.
 * Best tool indicates which gives the most consistent results.
 */
export const productivityPrompts: Prompt[] = [
  // ============================================================================
  // DAILY PLANNING
  // ============================================================================

  {
    id: "task-prioritization-matrix",
    title: "Task Prioritization Matrix",
    description: "Organize tasks by urgency and importance using the Eisenhower Matrix framework.",
    promptText: `Help me prioritize the following tasks using the Eisenhower Matrix. For each task, indicate if it's:

1. Urgent & Important (Do First)
2. Important but Not Urgent (Schedule)
3. Urgent but Not Important (Delegate)
4. Neither (Eliminate)

My tasks:
[YOUR TASKS HERE]

For each task, provide:
- Which quadrant it belongs in
- A brief explanation of why
- A suggested action or timeline`,
    placeholders: ["YOUR TASKS HERE"],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "productivity",
    categoryId: "daily-planning",
    exampleOutput:
      "The AI will categorize each task into one of four quadrants, explain the reasoning, and suggest when to tackle each task. Expect a structured list with clear recommendations.",
    customizationNotes: [
      "Add deadlines to tasks for more specific prioritization",
      "Include project context for better recommendations",
      "Add time estimates if you want the AI to suggest scheduling",
    ],
    tags: ["tasks", "prioritization", "eisenhower", "daily-planning"],
    order: 1,
  },

  {
    id: "daily-plan-generator",
    title: "Daily Plan Generator",
    description:
      "Create a structured daily schedule based on your tasks, meetings, and energy levels.",
    promptText: `Create a daily plan for me based on the following information:

My tasks for today:
[YOUR TASKS]

My meetings/appointments:
[YOUR MEETINGS]

My energy levels:
- Morning: [HIGH/MEDIUM/LOW]
- Afternoon: [HIGH/MEDIUM/LOW]
- Evening: [HIGH/MEDIUM/LOW]

Please create:
1. A time-blocked schedule
2. Task grouping suggestions (batch similar tasks)
3. Buffer time recommendations
4. Priority order for tasks`,
    placeholders: ["YOUR TASKS", "YOUR MEETINGS", "HIGH/MEDIUM/LOW"],
    bestTool: "chatgpt",
    difficulty: "beginner",
    domainId: "productivity",
    categoryId: "daily-planning",
    exampleOutput:
      "A detailed time-blocked schedule with specific time slots, task groupings, and recommendations for breaks and buffer time.",
    customizationNotes: [
      "Include commute time if working hybrid",
      "Add your lunch break timing preference",
      "Specify your working hours for a more accurate schedule",
    ],
    tags: ["planning", "schedule", "daily", "time-blocking"],
    order: 2,
  },

  {
    id: "weekly-review-template",
    title: "Weekly Review Template",
    description:
      "Reflect on the past week and plan the next one with this structured review prompt.",
    promptText: `Help me conduct a weekly review. I'll provide information about my week, and you'll help me reflect and plan.

What I accomplished this week:
[ACCOMPLISHMENTS]

What didn't go as planned:
[CHALLENGES]

Key learnings:
[LEARNINGS]

Priorities for next week:
[NEXT WEEK PRIORITIES]

Please provide:
1. A summary of themes from this week
2. Patterns in what worked vs. what didn't
3. 3-5 specific recommendations for next week
4. Questions I should ask myself to improve`,
    placeholders: ["ACCOMPLISHMENTS", "CHALLENGES", "LEARNINGS", "NEXT WEEK PRIORITIES"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "productivity",
    categoryId: "daily-planning",
    exampleOutput:
      "A thoughtful analysis of your week with patterns identified, actionable recommendations, and reflective questions to improve future performance.",
    customizationNotes: [
      "Add metrics or KPIs if you track them",
      "Include team or project-specific context",
      "Rate your energy/stress levels for additional insights",
    ],
    tags: ["review", "reflection", "weekly", "planning"],
    order: 3,
  },

  // ============================================================================
  // TASK MANAGEMENT
  // ============================================================================

  {
    id: "break-down-large-task",
    title: "Break Down Large Task",
    description: "Transform an overwhelming task into manageable, actionable steps.",
    promptText: `I have a large, complex task that feels overwhelming. Help me break it down into manageable steps.

The task is:
[YOUR LARGE TASK]

Context and constraints:
- Deadline: [DEADLINE]
- Resources available: [RESOURCES]
- My role: [YOUR ROLE]

Please provide:
1. A breakdown into 5-10 smaller, specific tasks
2. Estimated time for each subtask
3. Dependencies between tasks
4. A suggested order of execution
5. The very first small action I can take right now`,
    placeholders: ["YOUR LARGE TASK", "DEADLINE", "RESOURCES", "YOUR ROLE"],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "productivity",
    categoryId: "task-management",
    exampleOutput:
      "A hierarchical task breakdown with time estimates, dependencies mapped, and a clear starting point to overcome procrastination.",
    customizationNotes: [
      "Be specific about the task outcome you want",
      "Mention any blockers or dependencies you know about",
      "Include your experience level with this type of task",
    ],
    tags: ["tasks", "breakdown", "project-management", "overwhelm"],
    order: 4,
  },

  {
    id: "meeting-action-items",
    title: "Meeting Action Items Extractor",
    description: "Extract and organize action items from meeting notes or transcripts.",
    promptText: `Extract action items from the following meeting notes:

[MEETING NOTES]

Please organize the output as:
1. Action items table with:
   - Task description
   - Owner/assignee
   - Due date (if mentioned)
   - Priority (High/Medium/Low)
2. Decisions made during the meeting
3. Open questions that need follow-up
4. Suggested next meeting agenda items`,
    placeholders: ["MEETING NOTES"],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "productivity",
    categoryId: "task-management",
    exampleOutput:
      "A clean table of action items with owners and deadlines, followed by decisions made and questions that remain open.",
    customizationNotes: [
      "Include the meeting date and attendees for context",
      "Add project context if the meeting is part of a larger initiative",
      "Mention your role if you need items assigned to you highlighted",
    ],
    tags: ["meetings", "action-items", "notes", "organization"],
    order: 5,
  },

  // ============================================================================
  // GOAL SETTING
  // ============================================================================

  {
    id: "smart-goal-creator",
    title: "SMART Goal Creator",
    description:
      "Transform vague goals into specific, measurable, achievable, relevant, and time-bound objectives.",
    promptText: `Help me turn my goal into a SMART goal.

My goal is:
[YOUR GOAL]

Current situation:
[CURRENT SITUATION]

Resources available:
[RESOURCES]

Please help me refine this into a SMART goal by providing:
1. Specific: What exactly will I accomplish?
2. Measurable: How will I know when it's achieved? What metrics?
3. Achievable: Is this realistic given my resources? What do I need?
4. Relevant: Why does this matter? How does it connect to bigger picture?
5. Time-bound: What's the deadline and key milestones?

Then provide:
- A concise SMART goal statement
- 3-5 key milestones
- Potential obstacles and how to overcome them`,
    placeholders: ["YOUR GOAL", "CURRENT SITUATION", "RESOURCES"],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "productivity",
    categoryId: "goal-setting",
    exampleOutput:
      "A well-formed SMART goal statement with specific metrics, timeline, milestones, and identified obstacles with mitigation strategies.",
    customizationNotes: [
      "Be honest about your current starting point",
      "Include any constraints or limitations",
      "Mention stakeholders who need to be involved",
    ],
    tags: ["goals", "smart", "planning", "objectives"],
    order: 6,
  },

  {
    id: "okr-generator",
    title: "OKR Generator",
    description: "Create Objectives and Key Results for personal or team goals.",
    promptText: `Help me create OKRs (Objectives and Key Results) for:

Context:
- Role/Team: [YOUR ROLE OR TEAM]
- Time period: [QUARTER/YEAR]
- Strategic focus: [STRATEGIC PRIORITIES]

My rough goals:
[ROUGH GOALS]

Please create:
1. 1-2 inspiring Objectives (qualitative, ambitious)
2. 3-4 Key Results for each Objective (quantitative, measurable)
3. Weekly/daily actions that support these KRs
4. How to track progress
5. Signs that indicate I'm on track vs. off track`,
    placeholders: ["YOUR ROLE OR TEAM", "QUARTER/YEAR", "STRATEGIC PRIORITIES", "ROUGH GOALS"],
    bestTool: "chatgpt",
    difficulty: "intermediate",
    domainId: "productivity",
    categoryId: "goal-setting",
    exampleOutput:
      "Clear OKRs with ambitious objectives, specific measurable key results, and a tracking framework with leading/lagging indicators.",
    customizationNotes: [
      "Align with company or team OKRs if they exist",
      "Include specific numbers or percentages where possible",
      'Consider what "good" vs. "great" looks like',
    ],
    tags: ["okr", "objectives", "key-results", "goals"],
    order: 7,
  },

  // ============================================================================
  // TIME MANAGEMENT
  // ============================================================================

  {
    id: "time-audit-analysis",
    title: "Time Audit Analysis",
    description: "Analyze how you spend your time and identify optimization opportunities.",
    promptText: `Analyze my time usage and help me optimize.

How I spent my time this week:
[TIME LOG OR DESCRIPTION]

My priorities and goals:
[MY PRIORITIES]

Please analyze:
1. Where is my time actually going? (categorize and percentage)
2. Alignment between time spent and priorities (1-10 score)
3. Time leaks or inefficiencies spotted
4. Tasks that could be delegated, automated, or eliminated
5. Specific recommendations to better align time with priorities
6. A proposed "ideal week" template`,
    placeholders: ["TIME LOG OR DESCRIPTION", "MY PRIORITIES"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "productivity",
    categoryId: "time-management",
    exampleOutput:
      "A detailed breakdown of time allocation, alignment score, identified inefficiencies, and a restructured weekly template.",
    customizationNotes: [
      "Be honest and specific about time spent",
      "Include both work and personal time if relevant",
      "Note energy levels during different activities",
    ],
    tags: ["time", "audit", "analysis", "optimization"],
    order: 8,
  },

  {
    id: "procrastination-buster",
    title: "Procrastination Buster",
    description: "Overcome procrastination on a specific task with psychological techniques.",
    promptText: `I'm procrastinating on a task and need help getting unstuck.

The task I'm avoiding:
[THE TASK]

Why I think I'm procrastinating:
[SUSPECTED REASONS]

What I've tried:
[WHAT YOU TRIED]

Please help me by:
1. Identifying the root cause (fear, perfectionism, overwhelm, etc.)
2. Suggesting 2-3 psychological techniques specifically for my situation
3. Creating a "minimum viable action" I can do in 5 minutes
4. Reframing the task to make it less intimidating
5. A reward I can give myself after completing it`,
    placeholders: ["THE TASK", "SUSPECTED REASONS", "WHAT YOU TRIED"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "productivity",
    categoryId: "time-management",
    exampleOutput:
      "Insight into why you're procrastinating, specific techniques tailored to your situation, and a tiny first step that takes less than 5 minutes.",
    customizationNotes: [
      "Be honest about your emotional state around the task",
      "Mention any past successes with similar tasks",
      "Include your typical procrastination patterns",
    ],
    tags: ["procrastination", "motivation", "psychology", "productivity"],
    order: 9,
  },

  // ============================================================================
  // MEETING PRODUCTIVITY
  // ============================================================================

  {
    id: "meeting-agenda-creator",
    title: "Meeting Agenda Creator",
    description: "Create a structured, time-boxed agenda for productive meetings.",
    promptText: `Create a meeting agenda for:

Meeting purpose: [PURPOSE]
Duration: [DURATION]
Attendees: [ATTENDEES]
Desired outcomes: [DESIRED OUTCOMES]

Topics to cover:
[TOPICS]

Please create:
1. A time-boxed agenda with specific durations
2. Pre-meeting preparation needed (what attendees should do/bring)
3. Facilitator notes and key questions to ask
4. Decision points to address
5. Post-meeting action items template`,
    placeholders: ["PURPOSE", "DURATION", "ATTENDEES", "DESIRED OUTCOMES", "TOPICS"],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "productivity",
    categoryId: "meeting-productivity",
    exampleOutput:
      "A detailed agenda with time allocations, prep checklist, facilitator notes, and a template for capturing decisions and action items.",
    customizationNotes: [
      "Include attendee roles if some should lead specific sections",
      "Note any pre-read materials that should be shared",
      "Mention if this is a recurring meeting type",
    ],
    tags: ["meetings", "agenda", "facilitation", "productivity"],
    order: 10,
  },

  {
    id: "meeting-cost-calculator",
    title: "Meeting Cost Calculator",
    description: "Calculate the true cost of a meeting and evaluate if it's worth it.",
    promptText: `Help me evaluate whether a meeting is worth the time investment.

Meeting details:
- Duration: [DURATION] minutes
- Number of attendees: [NUMBER] people
- Average salary/hourly rate: [SALARY]
- Frequency: [ONE-TIME/WEEKLY/MONTHLY]

Purpose: [PURPOSE]

Please calculate:
1. Direct cost of this meeting (time × people × rate)
2. Annual cost if recurring
3. Opportunity cost (what else could be done)
4. Alternative approaches to achieve the same outcome
5. Recommendation: Keep, shorten, reduce attendees, or cancel?
6. If keeping, how to make it more efficient`,
    placeholders: ["DURATION", "NUMBER", "SALARY", "ONE-TIME/WEEKLY/MONTHLY", "PURPOSE"],
    bestTool: "chatgpt",
    difficulty: "beginner",
    domainId: "productivity",
    categoryId: "meeting-productivity",
    exampleOutput:
      "A clear cost breakdown, alternatives to the meeting, and a recommendation with specific efficiency improvements.",
    customizationNotes: [
      "Include prep time in calculations if significant",
      "Consider async alternatives for updates",
      "Factor in meeting fatigue for back-to-back meetings",
    ],
    tags: ["meetings", "cost", "efficiency", "roi"],
    order: 11,
  },

  // ============================================================================
  // HABIT TRACKING
  // ============================================================================

  {
    id: "habit-stacker",
    title: "Habit Stacker",
    description: "Build new habits by stacking them onto existing routines.",
    promptText: `Help me build new habits using habit stacking.

Current habits I do consistently:
[CURRENT HABITS]

New habits I want to build:
[NEW HABITS]

My goals:
[GOALS]

Please create:
1. Habit stack formulas: "After I [CURRENT HABIT], I will [NEW HABIT]"
2. The best pairings based on context and location
3. Make it obvious: environmental cues
4. Make it attractive: ways to bundle temptations
5. Make it easy: 2-minute versions to start
6. Make it satisfying: tracking and rewards
7. A 30-day progression plan`,
    placeholders: ["CURRENT HABITS", "NEW HABITS", "GOALS"],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "productivity",
    categoryId: "habit-tracking",
    exampleOutput:
      "Specific habit stack formulas, environmental design suggestions, and a 30-day plan with progression milestones.",
    customizationNotes: [
      "Be specific about timing and location of current habits",
      "Start small - focus on 1-2 new habits at a time",
      "Include your biggest habit challenges",
    ],
    tags: ["habits", "routine", "behavior-change", "stacking"],
    order: 12,
  },

  {
    id: "habit-tracker-design",
    title: "Habit Tracker Design",
    description: "Design a personalized habit tracking system that works for your style.",
    promptText: `Design a habit tracking system for me.

Habits I want to track:
[HABITS]

My tracking preferences:
- Digital or analog: [DIGITAL/ANALOG/BOTH]
- Check-in frequency: [DAILY/WEEKLY]
- My biggest challenge: [CHALLENGE]

Please design:
1. A tracking format/template (specific to my preference)
2. Key metrics to track (streak, completion rate, etc.)
3. Visual design suggestions
4. Review cadence and questions
5. Recovery plan for when I break the chain
6. Milestone celebrations to build in`,
    placeholders: ["HABITS", "DIGITAL/ANALOG/BOTH", "DAILY/WEEKLY", "CHALLENGE"],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "productivity",
    categoryId: "habit-tracking",
    exampleOutput:
      "A custom tracking template, metrics to monitor, and a complete system including recovery strategies and celebration milestones.",
    customizationNotes: [
      "Mention tools you already use (Notion, spreadsheet, paper)",
      "Include habits that are time-specific vs. any-time",
      "Note if you prefer simple checkmarks or detailed logging",
    ],
    tags: ["habits", "tracking", "system", "design"],
    order: 13,
  },

  // ============================================================================
  // DAILY PLANNING (ADDITIONAL)
  // ============================================================================

  {
    id: "morning-routine-optimizer",
    title: "Morning Routine Optimizer",
    description: "Design an energizing morning routine that sets up your day for success.",
    promptText: `Help me design or optimize my morning routine.

Current morning routine:
[CURRENT ROUTINE]

What I want from my mornings:
[DESIRED OUTCOMES]

My constraints:
- Wake-up time: [TIME]
- Available time before work: [MINUTES]
- Energy level in morning: [HIGH/MEDIUM/LOW]
- Must-do tasks: [TASKS]

Please create:
1. An optimized morning routine (time-blocked)
2. Energy-building activities for my type
3. What to prepare the night before
4. A "minimal viable morning" for busy days
5. How to make it stick (implementation intentions)`,
    placeholders: [
      "CURRENT ROUTINE",
      "DESIRED OUTCOMES",
      "TIME",
      "MINUTES",
      "HIGH/MEDIUM/LOW",
      "TASKS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "productivity",
    categoryId: "daily-planning",
    exampleOutput:
      "A personalized morning routine with specific time blocks, energy-management strategies, and backup plans for different scenarios.",
    customizationNotes: [
      "Include your commute or work-start timing",
      "Mention if you have dependents to care for",
      "Note what activities give you energy vs. drain it",
    ],
    tags: ["morning", "routine", "energy", "daily-planning"],
    order: 14,
  },

  {
    id: "evening-shutdown-ritual",
    title: "Evening Shutdown Ritual",
    description: "Create a satisfying end-of-day routine to transition from work to rest.",
    promptText: `Help me create an evening shutdown ritual.

Current end-of-day habits:
[CURRENT HABITS]

Challenges I face:
[CHALLENGES - e.g., can't switch off, work bleeds into evening]

My evening:
- Work end time: [TIME]
- Bedtime goal: [TIME]
- Evening commitments: [COMMITMENTS]

Please design:
1. A 15-30 minute shutdown ritual for work
2. Transition activities to shift modes
3. Evening routine prep for tomorrow
4. Wind-down activities for better sleep
5. A "good enough" version for difficult days`,
    placeholders: [
      "CURRENT HABITS",
      "CHALLENGES - e.g., can't switch off, work bleeds into evening",
      "TIME",
      "TIME",
      "COMMITMENTS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "productivity",
    categoryId: "daily-planning",
    exampleOutput:
      "A structured shutdown ritual with clear steps, transition activities, and strategies to mentally disconnect from work.",
    customizationNotes: [
      "Include if you work from home or commute",
      "Mention if you have a separate workspace or not",
      "Note your biggest sleep or relaxation challenges",
    ],
    tags: ["evening", "shutdown", "routine", "work-life-balance"],
    order: 15,
  },

  {
    id: "daily-intention-setter",
    title: "Daily Intention Setter",
    description: "Set a powerful daily focus to align actions with priorities.",
    promptText: `Help me set a powerful daily intention.

My priorities right now:
[PRIORITIES]

What's on my plate today:
[TODAY'S TASKS AND EVENTS]

How I'm feeling:
[ENERGY/MOOD]

Please help me:
1. Identify the ONE thing that would make today successful
2. Craft a clear, motivating daily intention statement
3. Break the intention into 3 specific actions
4. Identify what to say "no" to today
5. Create a mantra or affirmation to repeat

Output should be something I can read in 2 minutes each morning.`,
    placeholders: ["PRIORITIES", "TODAY'S TASKS AND EVENTS", "ENERGY/MOOD"],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "productivity",
    categoryId: "daily-planning",
    exampleOutput:
      "A focused daily intention statement with three specific actions, boundaries to set, and a brief mantra.",
    customizationNotes: [
      "Be honest about your energy and capacity",
      "Include if it's a high-pressure or low-key day",
      "Mention any must-happen events",
    ],
    tags: ["intentions", "focus", "daily", "mindset"],
    order: 16,
  },

  {
    id: "energy-based-planning",
    title: "Energy-Based Planning",
    description: "Plan your day around your natural energy rhythms instead of clock time.",
    promptText: `Help me plan my day based on energy, not just time.

My energy patterns:
- Morning energy: [DESCRIPTION]
- Afternoon energy: [DESCRIPTION]
- Evening energy: [DESCRIPTION]

My tasks for tomorrow:
[TASKS]

My commitments (fixed times):
[COMMITMENTS]

Please create:
1. An energy-mapped schedule (match tasks to energy levels)
2. High-energy work blocks protected
3. Low-energy work for recovery periods
4. Energy recovery activities between blocks
5. A realistic view of what's actually possible`,
    placeholders: ["DESCRIPTION", "TASKS", "COMMITMENTS"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "productivity",
    categoryId: "daily-planning",
    exampleOutput:
      "A schedule that aligns demanding tasks with high-energy periods and lighter tasks with low-energy times.",
    customizationNotes: [
      "Track your energy for a few days first",
      "Note what drains or recharges you",
      "Include your non-negotiable commitments",
    ],
    tags: ["energy", "planning", "circadian", "scheduling"],
    order: 17,
  },

  {
    id: "daily-reflection-prompts",
    title: "Daily Reflection Prompts",
    description: "End each day with meaningful reflection to compound improvement.",
    promptText: `Create personalized daily reflection prompts for me.

What I want to improve:
[AREAS OF FOCUS]

My current reflection practice (if any):
[CURRENT PRACTICE]

Time I can dedicate: [MINUTES]

Please create:
1. 5-7 powerful daily reflection questions
2. A quick 2-minute version
3. A deeper 10-minute version
4. Simple journaling format/template
5. Weekly review questions based on daily reflections
6. How to make insights actionable (not just reflective)`,
    placeholders: ["AREAS OF FOCUS", "CURRENT PRACTICE", "MINUTES"],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "productivity",
    categoryId: "daily-planning",
    exampleOutput:
      "A set of thoughtful reflection questions with quick and deep versions, plus a simple template.",
    customizationNotes: [
      "Focus on growth areas, not just logging",
      "Include both celebration and critique questions",
      "Mention if you prefer structure or open-ended",
    ],
    tags: ["reflection", "journaling", "growth", "daily"],
    order: 18,
  },

  // ============================================================================
  // TASK MANAGEMENT (ADDITIONAL)
  // ============================================================================

  {
    id: "task-batching-optimizer",
    title: "Task Batching Optimizer",
    description: "Group similar tasks together to reduce context switching and boost efficiency.",
    promptText: `Help me organize my tasks into batches for efficiency.

My tasks:
[TASKS LIST]

My current approach:
[HOW I CURRENTLY WORK]

My work schedule:
[SCHEDULE - hours, breaks, meeting blocks]

Please:
1. Group tasks by type/category (email, deep work, calls, etc.)
2. Create themed time blocks for each category
3. Estimate time savings from batching
4. Suggest ideal block durations
5. Identify tasks that should NOT be batched
6. Create a sample daily schedule using batching`,
    placeholders: [
      "TASKS LIST",
      "HOW I CURRENTLY WORK",
      "SCHEDULE - hours, breaks, meeting blocks",
    ],
    bestTool: "chatgpt",
    difficulty: "intermediate",
    domainId: "productivity",
    categoryId: "task-management",
    exampleOutput:
      "Task groups with recommended time blocks, efficiency calculations, and a batched daily schedule.",
    customizationNotes: [
      "Include your meeting frequency",
      "Note what tasks require similar mental energy",
      "Mention if you have frequent interruptions",
    ],
    tags: ["batching", "efficiency", "context-switching", "tasks"],
    order: 19,
  },

  {
    id: "context-switch-minimizer",
    title: "Context Switch Minimizer",
    description: "Reduce the mental cost of jumping between different types of work.",
    promptText: `Help me minimize context switching in my day.

My typical day involves:
[DAY OVERVIEW - types of work, meetings, interruptions]

My biggest challenges:
[CHALLENGES - e.g., constant Slack, surprise meetings]

My priorities:
[PRIORITIES]

Please analyze:
1. Where context switching is hurting me most
2. How to group work into "context themes"
3. Transition rituals between different work types
4. Communication boundaries to reduce interruptions
5. A "mode-based" schedule (deep work, collaboration, admin)
6. Recovery strategies when switching is unavoidable`,
    placeholders: [
      "DAY OVERVIEW - types of work, meetings, interruptions",
      "CHALLENGES - e.g., constant Slack, surprise meetings",
      "PRIORITIES",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "productivity",
    categoryId: "task-management",
    exampleOutput:
      "An analysis of context-switching costs, a mode-based schedule, and specific boundaries to implement.",
    customizationNotes: [
      "Be specific about tools and communication channels",
      "Include if you're in a reactive role (support, management)",
      "Note your control over your schedule",
    ],
    tags: ["context-switch", "focus", "deep-work", "efficiency"],
    order: 20,
  },

  {
    id: "inbox-zero-protocol",
    title: "Inbox Zero Protocol",
    description: "Process email/messages systematically to achieve and maintain inbox zero.",
    promptText: `Create an inbox zero protocol for me.

Current inbox status:
[EMAILS/MESSAGES - count, time to process]

My processing habits:
[HABITS - e.g., check constantly, hoard emails, mark unread]

My tools:
[TOOLS - email, Slack, other platforms]

Please design:
1. A processing workflow (DO, DELEGATE, DEFER, DELETE)
2. Time blocks for processing
3. Archive/folder structure
4. Rules/filters to automate
5. Response templates for common messages
6. Maintenance routine to stay at zero
7. How to handle "I'll get to this later" items`,
    placeholders: [
      "EMAILS/MESSAGES - count, time to process",
      "HABITS - e.g., check constantly, hoard emails, mark unread",
      "TOOLS - email, Slack, other platforms",
    ],
    bestTool: "any",
    difficulty: "intermediate",
    domainId: "productivity",
    categoryId: "task-management",
    exampleOutput:
      "A complete inbox processing system with workflow, folder structure, automation rules, and maintenance routines.",
    customizationNotes: [
      "Include all platforms you need to manage",
      "Note if you need to keep certain messages for compliance",
      "Mention your role's email volume expectations",
    ],
    tags: ["inbox", "email", "organization", "workflow"],
    order: 21,
  },

  {
    id: "waiting-for-list",
    title: "Waiting For List Manager",
    description: "Track delegated tasks and pending items so nothing falls through cracks.",
    promptText: `Help me manage all the things I'm waiting on from others.

Items I'm currently waiting for:
[WAITING FOR ITEMS]

My challenges:
[CHALLENGES - forgetting, following up too much, not knowing status]

My tools:
[TOOLS - task manager, email, etc.]

Please create:
1. A "Waiting For" list format/template
2. When to add items to this list
3. Follow-up cadence suggestions
4. How to integrate with my task system
5. Weekly review questions for this list
6. Scripts for polite follow-ups`,
    placeholders: [
      "WAITING FOR ITEMS",
      "CHALLENGES - forgetting, following up too much, not knowing status",
      "TOOLS - task manager, email, etc.",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "productivity",
    categoryId: "task-management",
    exampleOutput:
      "A structured waiting-for tracking system with follow-up cadence and review questions.",
    customizationNotes: [
      "Include typical wait times for different types of items",
      "Note if you need status visibility for stakeholders",
      "Mention if you delegate frequently",
    ],
    tags: ["delegation", "follow-up", "tracking", "waiting-for"],
    order: 22,
  },

  {
    id: "someday-maybe-list",
    title: "Someday/Maybe List",
    description: "Capture ideas and future projects without cluttering your active task list.",
    promptText: `Help me create a Someday/Maybe list system.

Ideas/projects floating in my head:
[IDEAS AND MAYBE PROJECTS]

Why they're not active:
[BARRIERS - time, priority, clarity]

My review cadence:
[FREQUENCY - weekly, monthly, quarterly]

Please create:
1. Categories for organizing someday items
2. When to move items to active vs. someday
3. Triggers to review this list
4. How to activate items when ready
5. A template for capturing new ideas
6. Questions to evaluate if something is ever worth doing`,
    placeholders: [
      "IDEAS AND MAYBE PROJECTS",
      "BARRIERS - time, priority, clarity",
      "FREQUENCY - weekly, monthly, quarterly",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "productivity",
    categoryId: "task-management",
    exampleOutput:
      "A structured someday/maybe system with categories, review triggers, and activation criteria.",
    customizationNotes: [
      "Be honest about why items are stalled",
      "Include your tendency: idea hoarder or minimalist",
      "Note your planning horizon",
    ],
    tags: ["someday", "maybe", "backlog", "ideas"],
    order: 23,
  },

  // ============================================================================
  // GOAL SETTING (ADDITIONAL)
  // ============================================================================

  {
    id: "vision-board-generator",
    title: "Vision Board Generator",
    description: "Create a vivid, motivating vision for your future self across life domains.",
    promptText: `Help me create a detailed vision for my future self.

Timeframe: [1 YEAR / 3 YEARS / 5 YEARS]

My current life domains:
- Career: [CURRENT STATE]
- Health: [CURRENT STATE]
- Relationships: [CURRENT STATE]
- Finances: [CURRENT STATE]
- Personal growth: [CURRENT STATE]
- Lifestyle: [CURRENT STATE]

What excites me:
[ASPIRATIONS AND DREAMS]

Please create:
1. A vivid "future you" narrative for each domain
2. Specific outcomes to aim for
3. What daily life looks like when vision is achieved
4. Key milestones on the way
5. A 5-minute visualization script
6. How to make this vision drive daily actions`,
    placeholders: ["1 YEAR / 3 YEARS / 5 YEARS", "CURRENT STATE", "ASPIRATIONS AND DREAMS"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "productivity",
    categoryId: "goal-setting",
    exampleOutput:
      "A vivid, specific vision across life domains with milestones and a visualization script.",
    customizationNotes: [
      "Dream big but stay grounded in what matters to you",
      "Include sensory details to make it vivid",
      "Connect to your values, not just achievements",
    ],
    tags: ["vision", "future", "visualization", "life-design"],
    order: 24,
  },

  {
    id: "milestone-tracker",
    title: "Milestone Tracker",
    description: "Break long-term goals into measurable milestones and track progress.",
    promptText: `Help me create a milestone system for my long-term goal.

My goal:
[GOAL]

Target date: [DATE]

Current starting point:
[STARTING POINT]

Please create:
1. 5-7 key milestones from start to finish
2. Specific, measurable criteria for each milestone
3. Estimated timeline for each milestone
4. Leading indicators (early signs of progress)
5. How to track progress weekly/monthly
6. What to do if I fall behind
7. Celebration markers for each milestone`,
    placeholders: ["GOAL", "DATE", "STARTING POINT"],
    bestTool: "any",
    difficulty: "intermediate",
    domainId: "productivity",
    categoryId: "goal-setting",
    exampleOutput:
      "A milestone roadmap with specific criteria, timelines, tracking methods, and recovery strategies.",
    customizationNotes: [
      "Include what progress you've already made",
      "Note past failures with similar goals",
      "Mention your typical pacing (front-loaded or steady)",
    ],
    tags: ["milestones", "tracking", "progress", "goals"],
    order: 25,
  },

  {
    id: "accountability-partner-system",
    title: "Accountability Partner System",
    description: "Structure an effective accountability partnership for goal achievement.",
    promptText: `Help me design an accountability partnership.

My goals:
[GOALS]

My accountability challenges:
[CHALLENGES - I procrastinate, lose motivation, etc.]

My partner availability:
[FREQUENCY - daily, weekly]

Please design:
1. Check-in format (what we share)
2. Meeting cadence and structure
3. Scorecard or tracking method
4. How to handle setbacks (with empathy)
5. Stakes or consequences that work for me
6. Celebration protocol for wins
7. Questions to ask each other
8. Agreement boundaries and expectations`,
    placeholders: [
      "GOALS",
      "CHALLENGES - I procrastinate, lose motivation, etc.",
      "FREQUENCY - daily, weekly",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "productivity",
    categoryId: "goal-setting",
    exampleOutput:
      "A structured accountability framework with check-in format, tracking, and handling setbacks.",
    customizationNotes: [
      "Be honest about what accountability you actually need",
      "Include if you respond better to support or stakes",
      "Note your communication style preferences",
    ],
    tags: ["accountability", "partnership", "goals", "support"],
    order: 26,
  },

  {
    id: "goal-alignment-audit",
    title: "Goal Alignment Audit",
    description:
      "Ensure your goals are aligned with your values and not just external expectations.",
    promptText: `Help me audit if my goals are truly aligned with what matters.

My current goals:
[GOALS]

My core values (what I think they are):
[VALUES]

My life season:
[SEASON - e.g., new parent, career change, etc.]

Please analyze:
1. Which goals align with my values and which don't
2. Goals that might be for others vs. myself
3. Values I'm neglecting in my goal set
4. Goals to drop, keep, or transform
5. New goals that better reflect my values
6. A "values-first" goal framework for the future`,
    placeholders: ["GOALS", "VALUES", "SEASON - e.g., new parent, career change, etc."],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "productivity",
    categoryId: "goal-setting",
    exampleOutput:
      "An honest assessment of goal alignment, recommendations to drop or transform goals, and a values-based framework.",
    customizationNotes: [
      "Be vulnerable about external pressures",
      "Include how you define success",
      "Note what you've inherited from others",
    ],
    tags: ["alignment", "values", "audit", "authenticity"],
    order: 27,
  },

  {
    id: "yearly-goal-cascade",
    title: "Yearly Goal Cascade",
    description: "Transform yearly goals into quarterly, monthly, and weekly actions.",
    promptText: `Help me cascade my yearly goals into actionable plans.

My yearly goals:
[GOALS]

My typical year rhythm:
[RHYTHM - busy seasons, quiet periods, etc.]

Please create:
1. 3-4 objectives for each quarter (that ladder up to yearly goals)
2. Monthly focuses for each quarter
3. What success looks like each quarter
4. How to adapt when priorities shift
5. A simple weekly connection to quarterly goals
6. Review questions to ensure I'm on track`,
    placeholders: ["GOALS", "RHYTHM - busy seasons, quiet periods, etc."],
    bestTool: "chatgpt",
    difficulty: "advanced",
    domainId: "productivity",
    categoryId: "goal-setting",
    exampleOutput:
      "A cascaded goal plan with quarterly objectives, monthly focuses, and weekly alignment.",
    customizationNotes: [
      "Include your known busy/calm periods",
      "Note if your goals are interdependent",
      "Mention your planning style preference",
    ],
    tags: ["yearly", "quarterly", "planning", "cascade"],
    order: 28,
  },

  // ============================================================================
  // TIME MANAGEMENT (ADDITIONAL)
  // ============================================================================

  {
    id: "pomodoro-planner",
    title: "Pomodoro Session Planner",
    description:
      "Plan effective Pomodoro sessions tailored to your specific tasks and focus style.",
    promptText: `Help me plan Pomodoro sessions for my work.

My tasks:
[TASKS]

My focus challenges:
[CHALLENGES - e.g., distractible, perfectionist, etc.]

My session preferences:
- Work duration: [MINUTES - typically 25]
- Break duration: [MINUTES - typically 5]
- Sessions before long break: [NUMBER]

Please create:
1. Which tasks fit Pomodoros and which don't
2. Ideal session counts for each task
3. How to handle interruptions mid-session
4. What to do during breaks (to recharge)
5. A sample Pomodoro schedule for today
6. How to track and review Pomodoro effectiveness`,
    placeholders: [
      "TASKS",
      "CHALLENGES - e.g., distractible, perfectionist, etc.",
      "MINUTES - typically 25",
      "MINUTES - typically 5",
      "NUMBER",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "productivity",
    categoryId: "time-management",
    exampleOutput:
      "A tailored Pomodoro plan with task-fit analysis, session counts, and sample schedule.",
    customizationNotes: [
      "Be honest about your focus span",
      "Include what typically breaks your focus",
      "Note if you prefer longer/shorter sessions",
    ],
    tags: ["pomodoro", "focus", "sessions", "time-boxing"],
    order: 29,
  },

  {
    id: "energy-mapping-tool",
    title: "Energy Mapping Tool",
    description: "Map your energy levels throughout the day to optimize task scheduling.",
    promptText: `Help me map my energy patterns for better scheduling.

My energy patterns (past week):
[ENERGY LOG - or describe hourly patterns]

Tasks that drain me:
[DRAINING TASKS]

Tasks that energize me:
[ENERGIZING TASKS]

Please analyze:
1. My peak energy windows (specific times)
2. Energy drains and energizers I should optimize for
3. Ideal task placement in my day
4. Recovery activities between energy-intensive work
5. A sample energy-aware schedule
6. How to protect peak energy time`,
    placeholders: [
      "ENERGY LOG - or describe hourly patterns",
      "DRAINING TASKS",
      "ENERGIZING TASKS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "productivity",
    categoryId: "time-management",
    exampleOutput:
      "An energy profile with peak windows identified, optimal task placement, and protection strategies.",
    customizationNotes: [
      "Track energy for a week before using",
      "Note the difference between physical and mental energy",
      "Include sleep, caffeine, and meal impacts",
    ],
    tags: ["energy", "mapping", "scheduling", "optimization"],
    order: 30,
  },

  {
    id: "deep-work-session-designer",
    title: "Deep Work Session Designer",
    description: "Design distraction-free sessions for cognitively demanding work.",
    promptText: `Help me design effective deep work sessions.

My deep work tasks:
[TASKS requiring intense focus]

My current distractions:
[DISTRACTIONS - Slack, phone, office, etc.]

My constraints:
- Available blocks: [TIMES]
- Environment: [SETTING - office, home, coffee shop]
- Control over schedule: [HIGH/MEDIUM/LOW]

Please create:
1. Ideal deep work session structure (setup, work, wind-down)
2. Distraction elimination strategies
3. Session duration recommendations
4. How to handle unavoidable interruptions
5. A pre-session ritual to enter focus mode
6. How to build deep work capacity progressively`,
    placeholders: [
      "TASKS requiring intense focus",
      "DISTRACTIONS - Slack, phone, office, etc.",
      "TIMES",
      "SETTING - office, home, coffee shop",
      "HIGH/MEDIUM/LOW",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "productivity",
    categoryId: "time-management",
    exampleOutput:
      "A deep work system with session structure, distraction elimination, and capacity-building plan.",
    customizationNotes: [
      "Include your role's availability expectations",
      "Mention if you've tried deep work before (what worked/failed)",
      "Note your communication tool dependencies",
    ],
    tags: ["deep-work", "focus", "flow", "sessions"],
    order: 31,
  },

  {
    id: "transition-time-optimizer",
    title: "Transition Time Optimizer",
    description: "Use transition time between tasks productively instead of losing it.",
    promptText: `Help me make better use of transition time in my day.

My typical transitions:
[TRANSITIONS - e.g., between meetings, commute, waiting]

How long transitions typically last:
[DURATION]

What I currently do:
[CURRENT HABITS - usually nothing, doomscroll, etc.]

Please suggest:
1. High-value micro-tasks perfect for transitions
2. Transition rituals to reset between work types
3. Mental buffer activities that serve me
4. Quick wins I can knock out in 5-10 minutes
5. When to rest vs. fill transition time
6. A "transition menu" based on energy level`,
    placeholders: [
      "TRANSITIONS - e.g., between meetings, commute, waiting",
      "DURATION",
      "CURRENT HABITS - usually nothing, doomscroll, etc.",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "productivity",
    categoryId: "time-management",
    exampleOutput:
      "A menu of productive transition activities, rituals, and a guide for when to rest.",
    customizationNotes: [
      "Include your commute and waiting situations",
      "Note your phone habits during transitions",
      "Mention your energy between tasks",
    ],
    tags: ["transitions", "micro-tasks", "gaps", "optimization"],
    order: 32,
  },

  {
    id: "time-block-template",
    title: "Time Block Template Generator",
    description: "Create personalized time-blocking templates for different day types.",
    promptText: `Create time-blocking templates for my different day types.

My day types:
- [TYPE 1]: [DESCRIPTION - e.g., meeting-heavy]
- [TYPE 2]: [DESCRIPTION]
- [TYPE 3]: [DESCRIPTION]

My typical schedule:
[SCHEDULE HOURS]

My recurring commitments:
[COMMITMENTS]

Please create:
1. A time-block template for each day type
2. Standard blocks I can reuse (deep work, admin, etc.)
3. How to adapt templates when things shift
4. Colors/labels for different block types
5. A weekly template view
6. Instructions for using templates in my calendar tool`,
    placeholders: ["DESCRIPTION - e.g., meeting-heavy", "SCHEDULE HOURS", "COMMITMENTS"],
    bestTool: "chatgpt",
    difficulty: "intermediate",
    domainId: "productivity",
    categoryId: "time-management",
    exampleOutput: "Time-block templates for each day type with reusable blocks and instructions.",
    customizationNotes: [
      "Include all recurring meeting types",
      "Note your most common day patterns",
      "Mention your calendar tool",
    ],
    tags: ["time-blocking", "templates", "schedule", "calendar"],
    order: 33,
  },

  {
    id: "distraction-detector",
    title: "Distraction Detector & Eliminator",
    description: "Identify and eliminate your most damaging distractions.",
    promptText: `Help me identify and eliminate my distractions.

My suspected distractions:
[DISTRACTIONS]

My work environment:
[ENVIRONMENT - open office, home, etc.]

My tools:
[TOOLS - phone, Slack, email, etc.]

Please analyze:
1. Which distractions cost me the most time/focus
2. Root causes (internal vs. external)
3. Specific elimination strategies for each
4. Environmental changes I can make
5. Tool settings to reduce interruptions
6. A "focus mode" setup for deep work
7. How to maintain these changes long-term`,
    placeholders: [
      "DISTRACTIONS",
      "ENVIRONMENT - open office, home, etc.",
      "TOOLS - phone, Slack, email, etc.",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "productivity",
    categoryId: "time-management",
    exampleOutput:
      "A ranked list of distractions with specific elimination strategies and a focus mode setup.",
    customizationNotes: [
      "Track interruptions for a few days first",
      "Include both digital and physical distractions",
      "Note which are under your control",
    ],
    tags: ["distractions", "focus", "elimination", "interruptions"],
    order: 34,
  },

  // ============================================================================
  // MEETING PRODUCTIVITY (ADDITIONAL)
  // ============================================================================

  {
    id: "async-update-template",
    title: "Async Update Template",
    description: "Replace status meetings with clear asynchronous updates.",
    promptText: `Help me create an async update format to replace meetings.

Current meeting purpose:
[MEETING TYPE - e.g., daily standup, weekly status]

What needs to be communicated:
[INFORMATION NEEDS]

Participants:
[WHO]

Please create:
1. A written update template
2. When updates should be submitted
3. How to handle questions asynchronously
4. What issues DO need synchronous discussion
5. A "read and respond" protocol
6. Success metrics (time saved, information quality)
7. How to handle people who don't participate`,
    placeholders: ["MEETING TYPE - e.g., daily standup, weekly status", "INFORMATION NEEDS", "WHO"],
    bestTool: "any",
    difficulty: "intermediate",
    domainId: "productivity",
    categoryId: "meeting-productivity",
    exampleOutput:
      "A structured async update template with submission protocol and handling guidelines.",
    customizationNotes: [
      "Include your team's communication tools",
      "Note management's expectations",
      "Mention what must be synchronous",
    ],
    tags: ["async", "updates", "meetings", "remote-work"],
    order: 35,
  },

  {
    id: "decision-meeting-design",
    title: "Decision Meeting Designer",
    description: "Design meetings specifically for making decisions efficiently.",
    promptText: `Help me design a decision-focused meeting.

Decision needed:
[DECISION]

Context:
[BACKGROUND - problem, constraints, stakeholders]

Participants:
[ATTENDEES]

Please create:
1. Pre-meeting prep requirements (read, analyze)
2. Agenda designed for decision-making
3. Facilitation approach for this decision type
4. Decision framework to use (RACI, RAPID, etc.)
5. How to handle disagreement
6. Decision capture and communication template
7. Follow-up actions`,
    placeholders: ["DECISION", "BACKGROUND - problem, constraints, stakeholders", "ATTENDEES"],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "productivity",
    categoryId: "meeting-productivity",
    exampleOutput:
      "A structured decision meeting with prep requirements, facilitation approach, and decision framework.",
    customizationNotes: [
      "Include decision stakes and time pressure",
      "Note if this is recurring or one-time",
      "Mention decision-making culture in your org",
    ],
    tags: ["decisions", "meetings", "facilitation", "framework"],
    order: 36,
  },

  {
    id: "standup-optimizer",
    title: "Standup Meeting Optimizer",
    description: "Make daily standups actually useful and not just status reports.",
    promptText: `Help me optimize our daily standup.

Current standup issues:
[PROBLEMS - too long, boring, not useful]

Team size: [SIZE]
Meeting length: [MINUTES]
Format: [CURRENT FORMAT - e.g., round-robin]

Please redesign:
1. A more effective standup format
2. What each person should share
3. How to keep it brief and valuable
4. Async vs. sync considerations
5. How to handle blockers raised
6. When standup might not be needed
7. Facilitator tips to keep it on track`,
    placeholders: [
      "PROBLEMS - too long, boring, not useful",
      "SIZE",
      "MINUTES",
      "CURRENT FORMAT - e.g., round-robin",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "productivity",
    categoryId: "meeting-productivity",
    exampleOutput:
      "A redesigned standup format with clear sharing guidelines and facilitation tips.",
    customizationNotes: [
      "Include team distribution (remote, co-located)",
      "Note if team is agile or traditional",
      "Mention what happens after standup",
    ],
    tags: ["standup", "daily", "agile", "team"],
    order: 37,
  },

  {
    id: "one-on-one-meeting-guide",
    title: "One-on-One Meeting Guide",
    description: "Structure meaningful 1:1 meetings that build trust and develop people.",
    promptText: `Help me design effective one-on-one meetings.

My role: [MANAGER / DIRECT REPORT]
Meeting frequency: [FREQUENCY]
Meeting length: [MINUTES]

Current challenges:
[CHALLENGES - no agenda, only status, awkward silence]

Goals for these meetings:
[GOALS - e.g., development, relationship, feedback]

Please create:
1. A recurring meeting template/agenda
2. Questions to ask each time
3. Rotating topics to cover
4. How to handle difficult conversations
5. Preparation checklist for both parties
6. Follow-up and accountability structure
7. Signs these meetings are working`,
    placeholders: [
      "MANAGER / DIRECT REPORT",
      "FREQUENCY",
      "MINUTES",
      "CHALLENGES - no agenda, only status, awkward silence",
      "GOALS - e.g., development, relationship, feedback",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "productivity",
    categoryId: "meeting-productivity",
    exampleOutput:
      "A structured 1:1 framework with agendas, questions, and handling difficult conversations.",
    customizationNotes: [
      "Include relationship context (new, established, strained)",
      "Note career development focus areas",
      "Mention feedback culture in your org",
    ],
    tags: ["one-on-one", "1:1", "management", "development"],
    order: 38,
  },

  {
    id: "meeting-after-action-review",
    title: "Meeting After-Action Review",
    description: "Learn from meetings to continuously improve them.",
    promptText: `Help me review and improve our meetings.

Meeting type being reviewed:
[MEETING TYPE]

What's working:
[WHAT WORKS]

What's not working:
[WHAT DOESN'T WORK]

Participant feedback:
[FEEDBACK - or describe themes]

Please analyze:
1. Root causes of meeting issues
2. Specific changes to try
3. Metrics to track improvement
4. How to gather feedback effectively
5. A "meeting health check" checklist
6. When to cancel, redesign, or keep meeting
7. Experiment ideas for the next iteration`,
    placeholders: [
      "MEETING TYPE",
      "WHAT WORKS",
      "WHAT DOESN'T WORK",
      "FEEDBACK - or describe themes",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "productivity",
    categoryId: "meeting-productivity",
    exampleOutput: "An analysis of meeting issues, specific improvements, and experiments to try.",
    customizationNotes: [
      "Include objective data if available (attendance, engagement)",
      "Be honest about meeting culture in your org",
      "Note which improvements are under your control",
    ],
    tags: ["review", "improvement", "retrospective", "meetings"],
    order: 39,
  },

  {
    id: "meeting-alternatives-menu",
    title: "Meeting Alternatives Menu",
    description: "Find better alternatives to meetings for different communication needs.",
    promptText: `Help me find alternatives to unnecessary meetings.

Communication need:
[WHAT I NEED TO ACCOMPLISH]

Current approach:
[HOW I DO IT NOW - usually meeting]

Audience:
[WHO NEEDS TO KNOW/DECIDE]

Urgency/timing:
[URGENCY]

Please suggest:
1. 3-4 meeting alternatives ranked by effectiveness
2. How to execute the best alternative
3. When a meeting IS actually the right choice
4. Tools or formats to use
5. How to propose the alternative to others
6. A framework for choosing sync vs. async going forward`,
    placeholders: [
      "WHAT I NEED TO ACCOMPLISH",
      "HOW I DO IT NOW - usually meeting",
      "WHO NEEDS TO KNOW/DECIDE",
      "URGENCY",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "productivity",
    categoryId: "meeting-productivity",
    exampleOutput: "A menu of alternatives with execution guidance and a decision framework.",
    customizationNotes: [
      "Include your team's communication culture",
      "Note tools available to you",
      "Mention decision authority levels",
    ],
    tags: ["alternatives", "async", "communication", "meetings"],
    order: 40,
  },

  // ============================================================================
  // HABIT TRACKING (ADDITIONAL)
  // ============================================================================

  {
    id: "habit-debugger",
    title: "Habit Debugger",
    description: "Diagnose why a habit isn't sticking and how to fix it.",
    promptText: `Help me debug why a habit isn't working.

The habit I'm trying to build:
[HABIT]

What I've tried:
[ATTEMPTS - frequency, duration, approach]

What goes wrong:
[FAILURE PATTERNS - skip, forget, resist]

My context:
[CONTEXT - triggers, environment, time of day]

Please diagnose:
1. The root cause (not enough motivation, too hard, wrong trigger, etc.)
2. Which element is missing (cue, craving, response, reward)
3. 3 specific adjustments to try
4. A "tiny version" to start with
5. A new implementation intention
6. How to test if the fix is working`,
    placeholders: [
      "HABIT",
      "ATTEMPTS - frequency, duration, approach",
      "FAILURE PATTERNS - skip, forget, resist",
      "CONTEXT - triggers, environment, time of day",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "productivity",
    categoryId: "habit-tracking",
    exampleOutput:
      "A habit diagnosis with root cause analysis, specific adjustments, and a tiny version to restart.",
    customizationNotes: [
      "Be specific about when and how it fails",
      "Include any past success with similar habits",
      "Note your genuine motivation level",
    ],
    tags: ["habits", "debug", "troubleshooting", "behavior"],
    order: 41,
  },

  {
    id: "streak-recovery-protocol",
    title: "Streak Recovery Protocol",
    description: "Bounce back from broken habit streaks without giving up.",
    promptText: `Help me recover from breaking my habit streak.

The habit:
[HABIT]

Streak length before break:
[DAYS/Weeks]

Why I broke it:
[REASON - travel, illness, overwhelm, etc.]

My current mindset:
[MINDSET - "I failed", "start over", etc.]

Please create:
1. A recovery mindset (no "back to zero" thinking)
2. How to restart without the all-or-nothing feeling
3. Prevention for this specific failure type
4. What to do when life gets chaotic
5. A "never miss twice" protocol
6. How to calculate streak recovery differently`,
    placeholders: [
      "HABIT",
      "DAYS/Weeks",
      "REASON - travel, illness, overwhelm, etc.",
      'MINDSET - "I failed", "start over", etc.',
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "productivity",
    categoryId: "habit-tracking",
    exampleOutput:
      "A recovery protocol that reframes failure, prevents recurrence, and maintains momentum.",
    customizationNotes: [
      "Be honest about why you really broke the streak",
      "Include your all-or-nothing tendency",
      "Note if you're hard on yourself",
    ],
    tags: ["streak", "recovery", "resilience", "habits"],
    order: 42,
  },

  {
    id: "habit-chain-builder",
    title: "Habit Chain Builder",
    description: "Connect multiple habits into a powerful morning or evening routine.",
    promptText: `Help me chain habits into a cohesive routine.

Habits I want to do together:
[HABITS]

Time of day:
[MORNING / EVENING / SPECIFIC TIME]

Available duration:
[MINUTES]

My current approach:
[CURRENT METHOD - or lack thereof]

Please design:
1. An optimal sequence for these habits
2. Transitions between habits (how to flow)
3. Time allocation for each
4. How to make the chain automatic (one triggers next)
5. A compressed version for busy days
6. How to expand the chain over time
7. A visual chain diagram`,
    placeholders: [
      "HABITS",
      "MORNING / EVENING / SPECIFIC TIME",
      "MINUTES",
      "CURRENT METHOD - or lack thereof",
    ],
    bestTool: "any",
    difficulty: "intermediate",
    domainId: "productivity",
    categoryId: "habit-tracking",
    exampleOutput: "A habit chain sequence with transitions, timing, and automation triggers.",
    customizationNotes: [
      "Include which habits are most important",
      "Note your typical routine disruption points",
      "Mention if you prefer flexible or rigid routines",
    ],
    tags: ["routine", "chain", "habits", "sequence"],
    order: 43,
  },

  {
    id: "habit-identity-script",
    title: "Habit Identity Script",
    description: "Build identity-based habits by becoming the type of person who does them.",
    promptText: `Help me build identity-based habits.

The habit I want:
[HABIT]

My current self-view:
[CURRENT IDENTITY - "I'm not a runner", etc.]

The person I want to become:
[DESIRED IDENTITY]

Why this matters to me:
[DEEPER WHY]

Please create:
1. An identity statement ("I'm the type of person who...")
2. Small wins that reinforce this identity
3. Evidence-based affirmations
4. How to handle "I'm not that type of person" thoughts
5. A 30-day identity-building plan
6. Milestones that prove identity shift`,
    placeholders: [
      "HABIT",
      'CURRENT IDENTITY - "I\'m not a runner", etc.',
      "DESIRED IDENTITY",
      "DEEPER WHY",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "productivity",
    categoryId: "habit-tracking",
    exampleOutput:
      "An identity-based habit plan with affirmations, small wins, and a 30-day building plan.",
    customizationNotes: [
      "Include past identity statements that hold you back",
      "Note what evidence would convince you",
      "Mention if you're skeptical of identity work",
    ],
    tags: ["identity", "habits", "mindset", "behavior-change"],
    order: 44,
  },

  {
    id: "habit-graduation-system",
    title: "Habit Graduation System",
    description: "Progressively increase habit difficulty as you master each level.",
    promptText: `Help me create a habit progression system.

The habit:
[HABIT]

Current level:
[WHAT I DO NOW]

Target level:
[WHERE I WANT TO BE]

Timeline:
[DURATION - how long to build]

Please design:
1. 5 progressive levels from easy to target
2. Specific criteria to graduate from each level
3. How long to spend at each level
4. What to do if I fail at a level
5. A "level up" celebration approach
6. How to know when I've mastered the habit
7. Maintenance protocol after graduation`,
    placeholders: ["HABIT", "WHAT I DO NOW", "WHERE I WANT TO BE", "DURATION - how long to build"],
    bestTool: "any",
    difficulty: "intermediate",
    domainId: "productivity",
    categoryId: "habit-tracking",
    exampleOutput: "A 5-level habit progression system with graduation criteria and timeline.",
    customizationNotes: [
      "Include your history with this habit",
      "Note if you tend to progress too fast or slow",
      'Mention what "mastery" looks like to you',
    ],
    tags: ["progression", "levels", "mastery", "habits"],
    order: 45,
  },
];
