/**
 * HR & People Management Prompts
 *
 * PURPOSE: Prompts for hiring, interviews, performance management, onboarding, team feedback, and training.
 *
 * DOMAIN: HR & People Management
 * CATEGORIES:
 * - Hiring & Recruiting (7 prompts)
 * - Interviews (7 prompts)
 * - Performance Management (7 prompts)
 * - Onboarding (6 prompts)
 * - Team Feedback (7 prompts)
 * - Training Materials (6 prompts)
 *
 * @see src/types/resources.ts - Prompt type definition
 */

import type { Prompt } from "@/types/resources";

/**
 * HR & People Management prompts collection
 *
 * Each prompt is tested across ChatGPT, Claude, and Gemini.
 * Best tool indicates which gives the most consistent results.
 */
export const hrPeoplePrompts: Prompt[] = [
  // ============================================================================
  // HIRING & RECRUITING
  // ============================================================================

  {
    id: "job-description-generator",
    title: "Job Description Generator",
    description:
      "Create comprehensive, inclusive job descriptions that attract qualified candidates.",
    promptText: `Create a job description for the following role:

Role title: [JOB TITLE]
Department: [DEPARTMENT]
Employment type: [FULL-TIME/PART-TIME/CONTRACT]
Location: [LOCATION/REMOTE]

Key responsibilities:
[KEY RESPONSIBILITIES]

Required qualifications:
[REQUIRED QUALIFICATIONS]

Preferred qualifications:
[PREFERRED QUALIFICATIONS]

Salary range: [SALARY RANGE]
Company culture: [BRIEF CULTURE DESCRIPTION]

Please create a job description that includes:
1. An engaging opening that sells the role and company
2. Clear responsibilities section
3. Requirements organized as "must-have" vs "nice-to-have"
4. Benefits and perks summary
5. Inclusive language that attracts diverse candidates
6. Clear application instructions
7. Estimated salary transparency statement`,
    placeholders: [
      "JOB TITLE",
      "DEPARTMENT",
      "FULL-TIME/PART-TIME/CONTRACT",
      "LOCATION/REMOTE",
      "KEY RESPONSIBILITIES",
      "REQUIRED QUALIFICATIONS",
      "PREFERRED QUALIFICATIONS",
      "SALARY RANGE",
      "BRIEF CULTURE DESCRIPTION",
    ],
    bestTool: "chatgpt",
    difficulty: "beginner",
    domainId: "hr-people",
    categoryId: "hiring",
    exampleOutput:
      "A polished job description with an engaging intro, clearly organized sections, inclusive language, and a compelling call-to-action for candidates.",
    customizationNotes: [
      "Include your company mission and values for stronger cultural alignment",
      "Add specific projects or initiatives the new hire will work on",
      "Mention growth opportunities and career path potential",
    ],
    tags: ["hiring", "job-description", "recruiting", "inclusive"],
    order: 1,
  },

  {
    id: "candidate-screening-questions",
    title: "Candidate Screening Questions",
    description:
      "Generate targeted screening questions to evaluate candidate fit before interviews.",
    promptText: `Help me create screening questions for the following role:

Role: [JOB TITLE]
Key requirements: [KEY REQUIREMENTS]
Must-have qualifications: [QUALIFICATIONS]
Deal-breaker red flags: [RED FLAGS]

Please create:
1. 5-7 phone screen questions (15-min call)
2. 3-5 email/written screening questions
3. Scoring criteria for each response (green/yellow/red flags)
4. Follow-up probes for key questions
5. One question that reveals candidate authenticity

For each question, indicate:
- What it assesses (skills, experience, culture, motivation)
- Ideal response indicators
- Red flags to watch for`,
    placeholders: ["JOB TITLE", "KEY REQUIREMENTS", "QUALIFICATIONS", "RED FLAGS"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "hr-people",
    categoryId: "hiring",
    exampleOutput:
      "A set of targeted screening questions with clear evaluation criteria, red flag indicators, and follow-up probes for deeper assessment.",
    customizationNotes: [
      "Tailor questions to your specific industry or role requirements",
      "Include questions that assess both hard and soft skills",
      "Add company-specific cultural assessment questions",
    ],
    tags: ["hiring", "screening", "interview-questions", "evaluation"],
    order: 2,
  },

  {
    id: "inclusive-job-posting-audit",
    title: "Inclusive Job Posting Audit",
    description: "Review and optimize job postings for inclusive language and bias reduction.",
    promptText: `Review this job posting for inclusive language and potential bias:

[PASTE JOB POSTING HERE]

Please analyze:
1. Gender-coded language (masculine/feminine words)
2. Requirements that may unnecessarily exclude diverse candidates
3. Cultural references or jargon that create barriers
4. Physical or accessibility requirements that could be more inclusive
5. Language that might discourage underrepresented groups

Then provide:
1. Specific problematic sections with explanations
2. Rewritten alternatives for each issue
3. A fully revised inclusive version
4. Diversity and inclusion statement suggestions`,
    placeholders: ["PASTE JOB POSTING HERE"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "hr-people",
    categoryId: "hiring",
    exampleOutput:
      "A detailed bias analysis with specific flagged language, explanations of why each is problematic, and a rewritten inclusive version.",
    customizationNotes: [
      "Include your target diversity goals for more tailored feedback",
      "Specify if the role has legitimate requirements that need clarity",
      "Mention your company values for alignment",
    ],
    tags: ["hiring", "inclusive", "diversity", "bias-reduction"],
    order: 3,
  },

  {
    id: "sourcing-message-templates",
    title: "Sourcing Message Templates",
    description: "Create personalized outreach messages for passive candidate sourcing.",
    promptText: `Create sourcing outreach messages for passive candidates.

Role I'm recruiting for: [JOB TITLE]
Company: [COMPANY NAME]
Key selling points: [SELLING POINTS]
Why I'm reaching out to this person: [SPECIFIC REASON]
Platform: [LINKEDIN/EMAIL/OTHER]

Please create:
1. Initial outreach message (short, personalized)
2. Follow-up message if no response
3. Message for responding to "not interested"
4. Message for "maybe later" - keeping door open
5. Message when they express interest
6. A/B test variations (subject lines, openings)

Each message should be:
- Under 150 words
- Highly personalized
- Clear value proposition
- Low pressure (easy to say no)`,
    placeholders: [
      "JOB TITLE",
      "COMPANY NAME",
      "SELLING POINTS",
      "SPECIFIC REASON",
      "LINKEDIN/EMAIL/OTHER",
    ],
    bestTool: "chatgpt",
    difficulty: "beginner",
    domainId: "hr-people",
    categoryId: "hiring",
    exampleOutput:
      "A series of concise, personalized outreach messages for different scenarios with A/B test variations and clear CTAs.",
    customizationNotes: [
      "Include specific details about the candidate you found impressive",
      "Mention mutual connections if applicable",
      "Add company-specific achievements or news",
    ],
    tags: ["hiring", "sourcing", "outreach", "passive-candidates"],
    order: 4,
  },

  {
    id: "offer-letter-template",
    title: "Offer Letter Template",
    description: "Generate clear, comprehensive offer letters that set the right expectations.",
    promptText: `Create an offer letter for the following position:

Candidate name: [NAME]
Position: [JOB TITLE]
Department: [DEPARTMENT]
Start date: [START DATE]

Compensation details:
- Base salary: [SALARY]
- Bonus structure: [BONUS DETAILS]
- Benefits: [KEY BENEFITS]
- Equity/stock: [EQUITY DETAILS]

Reporting to: [MANAGER TITLE]
Location: [WORK LOCATION]

Special terms or conditions: [ANY SPECIAL TERMS]

Please create a professional offer letter that includes:
1. Warm, welcoming opening
2. Clear position and compensation details
3. Benefits summary
4. At-will employment statement (if applicable)
5. Contingencies (background check, etc.)
6. Response deadline
7. Who to contact with questions
8. Professional yet enthusiastic tone`,
    placeholders: [
      "NAME",
      "JOB TITLE",
      "DEPARTMENT",
      "START DATE",
      "SALARY",
      "BONUS DETAILS",
      "KEY BENEFITS",
      "EQUITY DETAILS",
      "MANAGER TITLE",
      "WORK LOCATION",
      "ANY SPECIAL TERMS",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "hr-people",
    categoryId: "hiring",
    exampleOutput:
      "A professional offer letter with clear terms, warm tone, and all essential details organized for easy understanding.",
    customizationNotes: [
      "Include your standard legal disclaimers for your jurisdiction",
      "Add company-specific welcome elements",
      "Attach any standard benefit summaries",
    ],
    tags: ["hiring", "offer-letter", "onboarding", "compensation"],
    order: 5,
  },

  {
    id: "salary-negotiation-response",
    title: "Salary Negotiation Response",
    description: "Craft fair, professional responses to candidate salary negotiations.",
    promptText: `Help me respond to a candidate's salary negotiation.

Role: [JOB TITLE]
Current offer: [CURRENT OFFER]
Candidate's counter: [COUNTER OFFER]
My budget range: [BUDGET RANGE]
Reasons for current offer: [JUSTIFICATION]

Candidate's stated concerns:
[CONCERNS THEY SHARED]

Please draft a response that:
1. Acknowledges their value and perspective
2. Explains the compensation philosophy transparently
3. Addresses their specific concerns
4. Explores creative solutions if budget is limited
5. Maintains relationship regardless of outcome
6. Is clear about what's possible vs. not possible

Provide options for:
- If I can meet their counter
- If I can partially meet (middle ground)
- If I cannot budge but want to add other value`,
    placeholders: [
      "JOB TITLE",
      "CURRENT OFFER",
      "COUNTER OFFER",
      "BUDGET RANGE",
      "JUSTIFICATION",
      "CONCERNS THEY SHARED",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "hr-people",
    categoryId: "hiring",
    exampleOutput:
      "A diplomatic response that balances transparency, fairness, and relationship-building with clear options for different scenarios.",
    customizationNotes: [
      "Include your company's compensation philosophy",
      "Mention any non-monetary value you can offer",
      "Consider long-term growth and career path in response",
    ],
    tags: ["hiring", "negotiation", "compensation", "communication"],
    order: 6,
  },

  {
    id: "rejection-message-templates",
    title: "Rejection Message Templates",
    description: "Send compassionate, professional rejection letters that maintain employer brand.",
    promptText: `Create rejection messages for candidates who were not selected.

Stage: [APPLICATION/SCREENING/INTERVIEW/FINALIST]
Role: [JOB TITLE]
Number of candidates: [NUMBER]
Company size: [STARTUP/SMALL/LARGE]

Please create templates for:
1. Early-stage rejection (application/screening)
2. Post-interview rejection (mid-stage)
3. Finalist rejection (narrowly missed)
4. Request to keep in pipeline for future roles
5. Rejection with specific feedback (where appropriate)

Each message should:
- Be prompt and respectful
- Express genuine appreciation
- Be honest about the decision
- Avoid generic corporate speak
- Leave door open for future
- Reflect positively on the employer brand`,
    placeholders: [
      "APPLICATION/SCREENING/INTERVIEW/FINALIST",
      "JOB TITLE",
      "NUMBER",
      "STARTUP/SMALL/LARGE",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "hr-people",
    categoryId: "hiring",
    exampleOutput:
      "Compassionate rejection templates at different stages that balance honesty, respect, and employer brand considerations.",
    customizationNotes: [
      "Personalize with specific interview topics discussed",
      "Add company voice/tone to match your culture",
      "Consider if specific feedback is appropriate for your process",
    ],
    tags: ["hiring", "rejection", "candidate-experience", "employer-brand"],
    order: 7,
  },

  // ============================================================================
  // INTERVIEWS
  // ============================================================================

  {
    id: "behavioral-interview-questions",
    title: "Behavioral Interview Questions",
    description: "Generate STAR-method behavioral questions for any role or competency.",
    promptText: `Create behavioral interview questions using the STAR method.

Role: [JOB TITLE]
Key competencies to assess: [COMPETENCIES]
Level: [ENTRY/MID/SENIOR/EXECUTIVE]

For each competency, please provide:
1. 3-4 behavioral interview questions
2. What excellent answers look like (STAR examples)
3. Red flags in responses
4. Follow-up probe questions

Focus on these competencies:
[LIST SPECIFIC COMPETENCIES]

Each question should:
- Start with "Tell me about a time..."
- Reveal past behavior as predictor of future behavior
- Be role and level appropriate
- Allow for diverse experiences`,
    placeholders: [
      "JOB TITLE",
      "COMPETENCIES",
      "ENTRY/MID/SENIOR/EXECUTIVE",
      "LIST SPECIFIC COMPETENCIES",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "hr-people",
    categoryId: "interviews",
    exampleOutput:
      "Behavioral questions for each competency with STAR framework examples, evaluation criteria, and targeted follow-up probes.",
    customizationNotes: [
      "Include competencies specific to your industry or role",
      "Add level-appropriate complexity based on seniority",
      "Consider team culture and values alignment questions",
    ],
    tags: ["interviews", "behavioral", "star-method", "competencies"],
    order: 8,
  },

  {
    id: "interview-scorecard",
    title: "Interview Scorecard",
    description: "Create structured evaluation rubrics for consistent, fair candidate assessment.",
    promptText: `Create an interview scorecard for consistent evaluation.

Role: [JOB TITLE]
Interview type: [PHONE/SCREENING/ON-SITE/PANEL/FINAL]
Time allotted: [MINUTES]

Key competencies being assessed:
[COMPETENCIES]

Please create a scorecard with:
1. Competency sections with specific evaluation criteria
2. Rating scale (1-5) with clear descriptions for each level
3. Evidence space for notes and examples
4. Overall recommendation (Strong Yes/Yes/Maybe/No/Strong No)
5. Red flag checklist
6. Must-have vs. nice-to-have distinction
7. Interviewer bias reminder section

Make it easy to:
- Complete in under 5 minutes post-interview
- Compare candidates objectively
- Provide specific feedback
- Identify patterns across interviewers`,
    placeholders: ["JOB TITLE", "PHONE/SCREENING/ON-SITE/PANEL/FINAL", "MINUTES", "COMPETENCIES"],
    bestTool: "any",
    difficulty: "intermediate",
    domainId: "hr-people",
    categoryId: "interviews",
    exampleOutput:
      "A clean, structured scorecard with clear rating scales, evidence capture, and bias prevention reminders.",
    customizationNotes: [
      "Add company-specific cultural values to assess",
      "Include technical skill assessment areas if relevant",
      "Adjust complexity based on role level",
    ],
    tags: ["interviews", "scorecard", "evaluation", "fair-hiring"],
    order: 9,
  },

  {
    id: "panel-interview-coordinator",
    title: "Panel Interview Coordinator",
    description: "Structure effective panel interviews with clear roles and questions.",
    promptText: `Help me coordinate a panel interview for consistency and effectiveness.

Role: [JOB TITLE]
Panel size: [NUMBER OF INTERVIEWERS]
Interview duration: [MINUTES]
Interviewers: [NAMES AND ROLES]

Key competencies to assess: [COMPETENCIES]

Please create:
1. Interviewer role assignments (who asks what)
2. Question distribution plan
3. Timing breakdown per section
4. Note-taking system to avoid overlap
5. Preparation checklist for panel
6. Questions each interviewer should ask
7. Debrief structure for post-interview discussion

Ensure:
- No repetitive questions
- Each interviewer has clear focus
- Candidate experiences cohesive team
- Time is respected
- Bias is minimized through structure`,
    placeholders: [
      "JOB TITLE",
      "NUMBER OF INTERVIEWERS",
      "MINUTES",
      "NAMES AND ROLES",
      "COMPETENCIES",
    ],
    bestTool: "chatgpt",
    difficulty: "intermediate",
    domainId: "hr-people",
    categoryId: "interviews",
    exampleOutput:
      "A detailed panel interview plan with role assignments, timing, and a structured approach for fair candidate evaluation.",
    customizationNotes: [
      "Include interviewer strengths and expertise areas",
      "Add any company-specific presentation or assessment components",
      "Note any accessibility or accommodation needs",
    ],
    tags: ["interviews", "panel-interview", "coordination", "structure"],
    order: 10,
  },

  {
    id: "remote-interview-guide",
    title: "Remote Interview Guide",
    description: "Run smooth, professional virtual interviews that assess candidates effectively.",
    promptText: `Create a guide for conducting effective remote interviews.

Platform: [ZOOM/TEAMS/MEET/OTHER]
Role level: [ENTRY/MID/SENIOR]
Interview type: [SCREENING/ON-SITE/PANEL]

Please include:
1. Pre-interview tech check checklist
2. Opening script that sets expectations
3. Strategies for reading people over video
4. Backup plans for technical issues
5. How to create engagement remotely
6. Note-taking best practices
7. Closing and next steps
8. Common remote interview pitfalls and how to avoid them

Focus on:
- Making candidates comfortable remotely
- Assessing effectively through video
- Maintaining professionalism
- Creating positive candidate experience`,
    placeholders: ["ZOOM/TEAMS/MEET/OTHER", "ENTRY/MID/SENIOR", "SCREENING/ON-SITE/PANEL"],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "hr-people",
    categoryId: "interviews",
    exampleOutput:
      "A comprehensive remote interview guide covering tech setup, facilitation strategies, and best practices for virtual assessment.",
    customizationNotes: [
      "Add your company's specific platform features",
      "Include time zone considerations for global hiring",
      "Mention any recording or transcription policies",
    ],
    tags: ["interviews", "remote", "virtual", "video-interview"],
    order: 11,
  },

  {
    id: "candidate-assessment-center",
    title: "Candidate Assessment Center",
    description: "Design practical work assessments and exercises for candidate evaluation.",
    promptText: `Design practical assessments for the following role.

Role: [JOB TITLE]
Key responsibilities: [RESPONSIBILITIES]
Assessment time available: [TIME]
Format: [TAKE-HOME/LIVE/IN-PERSON/REMOTE]
Tools/resources allowed: [TOOLS]

Skills to assess practically:
[SKILLS LIST]

Please create:
1. A realistic work simulation or exercise
2. Clear instructions for candidates
3. Evaluation rubric with specific criteria
4. What success looks like (example answer)
5. Time breakdown and milestones
6. Materials/reference documents provided
7. What this exercise reveals about candidates

The assessment should:
- Reflect actual work they'd do
- Be completable in allotted time
- Have clear evaluation criteria
- Allow diverse problem-solving approaches`,
    placeholders: [
      "JOB TITLE",
      "RESPONSIBILITIES",
      "TIME",
      "TAKE-HOME/LIVE/IN-PERSON/REMOTE",
      "TOOLS",
      "SKILLS LIST",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "hr-people",
    categoryId: "interviews",
    exampleOutput:
      "A practical work exercise with clear instructions, evaluation rubric, and success criteria that reflects real job responsibilities.",
    customizationNotes: [
      "Use actual company data or scenarios (sanitized)",
      "Adjust complexity based on role level",
      "Consider accommodation for different working styles",
    ],
    tags: ["interviews", "assessment", "practical", "work-sample"],
    order: 12,
  },

  {
    id: "interview-feedback-template",
    title: "Interview Feedback Template",
    description: "Structure clear, actionable interview feedback for hiring decisions.",
    promptText: `Create a template for capturing and sharing interview feedback.

Role interviewed for: [JOB TITLE]
Interview type: [PHONE/ON-SITE/PANEL]
Number of interviewers: [NUMBER]

Feedback should cover: [KEY AREAS]

Please create:
1. Individual interviewer feedback template
2. Consolidated feedback template for hiring manager
3. Sections for:
   - Overall recommendation
   - Strengths observed (with evidence)
   - Concerns/weaknesses (with evidence)
   - Specific examples from interview
   - Cultural fit assessment
   - Skills verification
   - Red flags (if any)
   - Hire/No hire rationale
4. Bias check questions
5. Calibration discussion prompts`,
    placeholders: ["JOB TITLE", "PHONE/ON-SITE/PANEL", "NUMBER", "KEY AREAS"],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "hr-people",
    categoryId: "interviews",
    exampleOutput:
      "A structured feedback template that captures evidence-based assessments and facilitates fair hiring decisions.",
    customizationNotes: [
      "Add company-specific cultural values to assess",
      "Include technical skill assessment areas if relevant",
      "Adjust complexity based on role level",
    ],
    tags: ["interviews", "feedback", "hiring-decisions", "evaluation"],
    order: 13,
  },

  {
    id: "interview-training-scenarios",
    title: "Interview Training Scenarios",
    description: "Practice interview skills with realistic candidate scenarios and responses.",
    promptText: `Create interview training scenarios for interviewer skill development.

Role interviewers are hiring for: [JOB TITLE]
Experience level of interviewers: [NEW/EXPERIENCED/MIXED]
Common challenges: [CHALLENGES]

Please create:
1. 5 diverse candidate personas (different backgrounds, styles)
2. Sample responses for each persona (strong, average, weak)
3. What to listen for in each response
4. Follow-up questions that dig deeper
5. Bias trap scenarios to watch for
6. Common interviewer mistakes and corrections

Include scenarios for:
- The polished but superficial candidate
- The nervous but capable candidate
- The overconfident underqualified candidate
- The quiet but thoughtful candidate
- The candidate different from interviewer's background`,
    placeholders: ["JOB TITLE", "NEW/EXPERIENCED/MIXED", "CHALLENGES"],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "hr-people",
    categoryId: "interviews",
    exampleOutput:
      "Realistic training scenarios with candidate personas, varied response qualities, and coaching for interviewer skill development.",
    customizationNotes: [
      "Include scenarios relevant to your industry",
      "Add your specific cultural values to assess",
      "Incorporate past real examples anonymized",
    ],
    tags: ["interviews", "training", "practice", "interviewer-skills"],
    order: 14,
  },

  // ============================================================================
  // PERFORMANCE MANAGEMENT
  // ============================================================================

  {
    id: "performance-review-template",
    title: "Performance Review Template",
    description: "Structure comprehensive, fair performance reviews that drive development.",
    promptText: `Create a performance review template for the following role.

Role: [JOB TITLE]
Review period: [QUARTER/SEMESTER/YEAR]
Level: [INDIVIDUAL CONTRIBUTOR/MANAGER/EXECUTIVE]
Company values to assess: [VALUES]

Please create sections for:
1. Summary of key accomplishments
2. Goals/OKRs and performance against them
3. Strengths and what to continue
4. Areas for development and improvement
5. Company values demonstration with examples
6. Self-assessment reflection prompts
7. Manager assessment with specific examples
8. Development goals for next period
9. Support and resources needed
10. Overall rating and rationale

Include:
- Evidence-based evaluation prompts
- Examples of good vs. vague feedback
- Development-focused language`,
    placeholders: [
      "JOB TITLE",
      "QUARTER/SEMESTER/YEAR",
      "INDIVIDUAL CONTRIBUTOR/MANAGER/EXECUTIVE",
      "VALUES",
    ],
    bestTool: "any",
    difficulty: "intermediate",
    domainId: "hr-people",
    categoryId: "performance",
    exampleOutput:
      "A comprehensive performance review template with evidence-based prompts, clear rating criteria, and development focus.",
    customizationNotes: [
      "Add company-specific goals or OKR framework",
      "Include role-specific competencies to assess",
      "Adjust complexity based on level and responsibility",
    ],
    tags: ["performance", "review", "evaluation", "development"],
    order: 15,
  },

  {
    id: "difficult-feedback-delivery",
    title: "Difficult Feedback Delivery",
    description: "Frame and deliver sensitive performance feedback constructively.",
    promptText: `Help me deliver difficult feedback to an employee.

Situation: [DESCRIBE THE PERFORMANCE ISSUE]
Impact: [HOW IT AFFECTS THE TEAM/WORK]
Employee's likely reaction: [DEFENSIVE/OPEN/EMOTIONAL]
Relationship: [NEW/ESTABLISHED/TRUSTED]

Previous conversations about this: [CONTEXT]

Please create:
1. An opening that sets the right tone
2. The feedback message using specific language
3. Anticipated reactions and how to respond
4. Questions to engage them in solution
5. Clear expectations going forward
6. Support and resources offered
7. Follow-up plan

The approach should be:
- Direct but compassionate
- Evidence-based (not feelings)
- Future-oriented (solution-focused)
- Two-way conversation
- Clear on next steps`,
    placeholders: [
      "DESCRIBE THE PERFORMANCE ISSUE",
      "HOW IT AFFECTS THE TEAM/WORK",
      "DEFENSIVE/OPEN/EMOTIONAL",
      "NEW/ESTABLISHED/TRUSTED",
      "CONTEXT",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "hr-people",
    categoryId: "performance",
    exampleOutput:
      "A structured difficult feedback conversation with talking points, response strategies, and a clear path forward.",
    customizationNotes: [
      "Include your company's feedback framework or values",
      "Add employee's specific context or situation",
      "Consider cultural communication differences",
    ],
    tags: ["performance", "feedback", "difficult-conversations", "coaching"],
    order: 16,
  },

  {
    id: "performance-improvement-plan",
    title: "Performance Improvement Plan (PIP)",
    description: "Create clear, fair performance improvement plans with specific milestones.",
    promptText: `Create a Performance Improvement Plan for an employee.

Role: [JOB TITLE]
Performance gaps: [SPECIFIC ISSUES]
Root causes identified: [CAUSES]
PIP duration: [WEEKS/MONTHS]

Previous feedback and support: [CONTEXT]

Please create:
1. Clear performance objectives (SMART format)
2. Specific behaviors or outcomes required
3. Measurable success criteria
4. Support and resources provided
5. Check-in schedule and milestones
6. Consequences if improvement not achieved
7. Employee acknowledgement section
8. Signatures and dates

The plan should be:
- Specific and measurable
- Fair and achievable
- Time-bound with clear milestones
- Focused on critical issues only (not laundry list)
- Balanced support with accountability`,
    placeholders: ["JOB TITLE", "SPECIFIC ISSUES", "CAUSES", "WEEKS/MONTHS", "CONTEXT"],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "hr-people",
    categoryId: "performance",
    exampleOutput:
      "A structured PIP with clear objectives, measurable criteria, support provisions, and fair timelines.",
    customizationNotes: [
      "Include your company's legal requirements for documentation",
      "Add HR or legal review points",
      "Consider union or employment contract requirements",
    ],
    tags: ["performance", "pip", "improvement", "documentation"],
    order: 17,
  },

  {
    id: "goal-setting-framework",
    title: "Goal Setting Framework",
    description: "Set clear, aligned performance goals using OKRs or SMART frameworks.",
    promptText: `Help me set performance goals for the following role.

Role: [JOB TITLE]
Level: [INDIVIDUAL CONTRIBUTOR/MANAGER/EXECUTIVE]
Department goals: [TEAM OBJECTIVES]
Company priorities: [COMPANY PRIORITIES]

Key responsibilities: [RESPONSIBILITIES]
Development focus: [GROWTH AREAS]

Please create:
1. 3-5 primary goals for the period using [SMART/OKR]
2. How each goal connects to broader objectives
3. Success metrics for each goal
4. Key milestones and checkpoints
5. Resources and support needed
6. Potential obstacles and mitigation
7. Stretch vs. core goal distinction

Each goal should be:
- Aligned to business priorities
- Measurable and time-bound
- Challenging but achievable
- Within employee's control
- Clear what success looks like`,
    placeholders: [
      "JOB TITLE",
      "INDIVIDUAL CONTRIBUTOR/MANAGER/EXECUTIVE",
      "TEAM OBJECTIVES",
      "COMPANY PRIORITIES",
      "RESPONSIBILITIES",
      "GROWTH AREAS",
      "SMART/OKR",
    ],
    bestTool: "chatgpt",
    difficulty: "intermediate",
    domainId: "hr-people",
    categoryId: "performance",
    exampleOutput:
      "A set of aligned performance goals with clear metrics, milestones, and connection to broader objectives.",
    customizationNotes: [
      "Use your company's specific goal framework",
      "Include cross-functional dependencies",
      "Add company-specific strategic priorities",
    ],
    tags: ["performance", "goals", "okr", "smart-goals"],
    order: 18,
  },

  {
    id: "360-degree-feedback-questions",
    title: "360-Degree Feedback Questions",
    description: "Create comprehensive 360-degree feedback questions for holistic assessment.",
    promptText: `Create 360-degree feedback questions for the following role.

Role: [JOB TITLE]
Level: [INDIVIDUAL CONTRIBUTOR/MANAGER/EXECUTIVE]
Company values: [VALUES]
Competencies to assess: [COMPETENCIES]

Please create questions for:
1. Manager assessment (downward feedback)
2. Peer feedback (lateral feedback)
3. Direct report feedback (upward feedback) - if applicable
4. Self-reflection questions
5. Optional: Cross-functional partner feedback

For each question category:
- 8-12 questions covering strengths and growth areas
- Rating scale (1-5 or similar)
- Open-ended comment prompts
- Specific behavioral examples encouraged
- Balanced assessment (what to start/stop/continue)

Questions should be:
- Behaviorally specific
- Actionable and developmental
- Relevant to the role
- Fair and unbiased`,
    placeholders: [
      "JOB TITLE",
      "INDIVIDUAL CONTRIBUTOR/MANAGER/EXECUTIVE",
      "VALUES",
      "COMPETENCIES",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "hr-people",
    categoryId: "performance",
    exampleOutput:
      "A comprehensive 360-feedback question set with balanced assessments, behavioral specificity, and developmental focus.",
    customizationNotes: [
      "Include company-specific competencies or values",
      "Add questions relevant to your industry",
      "Consider confidentiality and anonymity factors",
    ],
    tags: ["performance", "360-feedback", "assessment", "holistic"],
    order: 19,
  },

  {
    id: "recognition-and-praise",
    title: "Recognition and Praise Templates",
    description: "Write meaningful, specific recognition that reinforces great work.",
    promptText: `Create recognition messages for the following situation.

What the employee did: [ACCOMPLISHMENT]
Impact: [HOW IT HELPED]
Audience: [PRIVATE/TEAM/PUBLIC/COMPANY-WIDE]
Relationship: [DIRECT REPORT/PEER/MANAGER]

Employee's communication style: [PUBLIC/PRIVATE/LOW-KEY/ENTHUSIASTIC]

Please create:
1. Specific recognition message
2. What specifically to praise (not generic)
3. How to connect to bigger picture
4. Delivery method suggestion (email, Slack, meeting, etc.)
5. Follow-up actions (if any)

The recognition should:
- Be specific about what was done well
- Connect to impact and value
- Be authentic to the sender's voice
- Match the recipient's preferences
- Reinforce desired behaviors`,
    placeholders: [
      "ACCOMPLISHMENT",
      "HOW IT HELPED",
      "PRIVATE/TEAM/PUBLIC/COMPANY-WIDE",
      "DIRECT REPORT/PEER/MANAGER",
      "PUBLIC/PRIVATE/LOW-KEY/ENTHUSIASTIC",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "hr-people",
    categoryId: "performance",
    exampleOutput:
      "Specific, impactful recognition messages that reinforce great work and match the recipient's preferences.",
    customizationNotes: [
      "Include company values that were demonstrated",
      "Add relevant context about challenges overcome",
      "Consider timing and delivery for maximum impact",
    ],
    tags: ["performance", "recognition", "praise", "motivation"],
    order: 20,
  },

  {
    id: "career-development-conversation",
    title: "Career Development Conversation Guide",
    description: "Structure meaningful career conversations that grow and retain talent.",
    promptText: `Create a guide for career development conversations.

Employee role: [JOB TITLE]
Time in role: [TENURE]
Career stage: [EARLY/MID/LATE CAREER]
Conversation context: [REGULAR CHECK-IN/PROMOTION DISCUSSION/TRANSITION]

Employee's stated interests: [THEIR GOALS]
Business opportunities: [AVAILABLE PATHS]

Please create:
1. Conversation opener that builds trust
2. Questions to uncover aspirations
3. Skills and interests assessment prompts
4. Growth opportunity discussion framework
5. Goal setting for development
6. Resources and support options
7. Follow-up and accountability plan
8. How to say "not now" to requests you can't meet

Focus on:
- Employee's long-term aspirations
- Alignment with business needs
- Honest about possibilities
- Clear on development vs. promotion
- Actionable next steps`,
    placeholders: [
      "JOB TITLE",
      "TENURE",
      "EARLY/MID/LATE CAREER",
      "REGULAR CHECK-IN/PROMOTION DISCUSSION/TRANSITION",
      "THEIR GOALS",
      "AVAILABLE PATHS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "hr-people",
    categoryId: "performance",
    exampleOutput:
      "A structured career conversation guide with questions, frameworks, and actionable development planning.",
    customizationNotes: [
      "Include internal mobility or growth opportunities",
      "Add company-specific development resources",
      "Consider industry-specific career paths",
    ],
    tags: ["performance", "career", "development", "retention"],
    order: 21,
  },

  // ============================================================================
  // ONBOARDING
  // ============================================================================

  {
    id: "onboarding-checklist",
    title: "Onboarding Checklist",
    description: "Create comprehensive new hire onboarding checklists for smooth transitions.",
    promptText: `Create an onboarding checklist for the following new hire.

Role: [JOB TITLE]
Level: [ENTRY/MID/SENIOR]
Work arrangement: [OFFICE/HYBRID/REMOTE]
Start date context: [GROUP/INDIVIDUAL]
Department size: [SIZE]

Please create a checklist with:
1. Pre-first day preparation (before they start)
2. First day essentials
3. First week priorities
4. First 30 days goals
5. 90-day success milestones
6. People to meet and key relationships
7. Systems and tools to set up
8. Training and documentation to complete
9. Culture and values immersion
10. Early wins to target

Include:
- Who owns each item (HR, manager, buddy, IT)
- Timing/deadlines
- How to verify completion
- Common onboarding pitfalls to avoid`,
    placeholders: [
      "JOB TITLE",
      "ENTRY/MID/SENIOR",
      "OFFICE/HYBRID/REMOTE",
      "GROUP/INDIVIDUAL",
      "SIZE",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "hr-people",
    categoryId: "onboarding",
    exampleOutput:
      "A comprehensive onboarding checklist with clear ownership, timing, and milestone tracking from pre-boarding through day 90.",
    customizationNotes: [
      "Add company-specific systems or tools",
      "Include department-specific introductions",
      "Consider remote vs. in-person differences",
    ],
    tags: ["onboarding", "checklist", "new-hire", "orientation"],
    order: 22,
  },

  {
    id: "30-60-90-day-plan",
    title: "30-60-90 Day Plan Template",
    description: "Create structured success plans for new hires' first three months.",
    promptText: `Create a 30-60-90 day plan for a new hire.

Role: [JOB TITLE]
Department: [DEPARTMENT]
Key responsibilities: [RESPONSIBILITIES]
Team context: [TEAM STRUCTURE]
Experience level: [NEW TO ROLE/EXPERIENCED]

Early projects or priorities: [INITIATIVES]

Please create:

**First 30 Days: Learning & Integrating**
- Knowledge to acquire
- People to meet and build relationships
- Systems/tools to master
- Quick wins to target
- Training to complete

**Days 31-60: Contributing & Building**
- Projects to own or contribute to
- Problems to solve
- Processes to improve
- Independent work to demonstrate
- Collaboration opportunities

**Days 61-90: Leading & Optimizing**
- Full responsibility for [X]
- Process improvements to implement
- Mentoring or knowledge sharing
- Strategic contributions
- Performance evaluation preparation

Include success metrics for each phase.`,
    placeholders: [
      "JOB TITLE",
      "DEPARTMENT",
      "RESPONSIBILITIES",
      "TEAM STRUCTURE",
      "NEW TO ROLE/EXPERIENCED",
      "INITIATIVES",
      "X",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "hr-people",
    categoryId: "onboarding",
    exampleOutput:
      "A detailed 30-60-90 day plan with clear phase objectives, specific actions, and success metrics.",
    customizationNotes: [
      "Add company-specific learning resources",
      "Include role-specific tools or systems",
      "Consider team-specific onboarding traditions",
    ],
    tags: ["onboarding", "30-60-90", "new-hire", "success-plan"],
    order: 23,
  },

  {
    id: "new-hire-first-day-agenda",
    title: "New Hire First Day Agenda",
    description: "Structure engaging, informative first-day experiences that set the right tone.",
    promptText: `Create a first-day agenda for a new hire.

Role: [JOB TITLE]
Start time: [TIME]
Work arrangement: [OFFICE/REMOTE/HYBRID]
Team size: [TEAM SIZE]
First day alone or with cohort: [CONTEXT]

Please create an hour-by-hour agenda that includes:
1. Welcome and orientation
2. Workspace/computer setup
3. Team introductions (creative ideas welcome)
4. Manager 1:1 (expectations, questions)
5. Lunch plan
6. Product/tool training basics
7. First assignment or reading
8. Buddy/mentor connection
9. End-of-day check-in

The agenda should:
- Balance logistics with engagement
- Include breaks and social connection
- Not overwhelm with information
- Make them feel welcomed
- Set clear expectations
- Be realistic about timing`,
    placeholders: ["JOB TITLE", "TIME", "OFFICE/REMOTE/HYBRID", "TEAM SIZE", "CONTEXT"],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "hr-people",
    categoryId: "onboarding",
    exampleOutput:
      "A structured first-day agenda that balances logistics, learning, social connection, and engagement.",
    customizationNotes: [
      "Add company-specific traditions or rituals",
      "Include team welcome activities",
      "Consider remote-friendly alternatives",
    ],
    tags: ["onboarding", "first-day", "agenda", "welcome"],
    order: 24,
  },

  {
    id: "onboarding-buddy-program",
    title: "Onboarding Buddy Program Guide",
    description: "Design an effective peer buddy system for new hire support and integration.",
    promptText: `Create a buddy program guide for new hire support.

Program goals: [GOALS]
Buddy time commitment: [HOURS PER WEEK]
Program duration: [WEEKS]
Company size: [SIZE]

Please create:
1. Buddy selection criteria
2. Buddy responsibilities and expectations
3. New hire responsibilities in the partnership
4. Weekly buddy meeting agenda/template
5. Conversation starters and topics to cover
6. Red flags to watch for and escalate
7. Buddy training topics
8. Program evaluation and feedback
9. Recognition for buddy contributions

The program should:
- Accelerate integration and productivity
- Provide safe space for questions
- Build cross-team relationships
- Not replace manager relationship
- Have clear boundaries and time commitment`,
    placeholders: ["GOALS", "HOURS PER WEEK", "WEEKS", "SIZE"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "hr-people",
    categoryId: "onboarding",
    exampleOutput:
      "A comprehensive buddy program guide with clear roles, responsibilities, and support structures.",
    customizationNotes: [
      "Add company-specific cultural elements",
      "Include your communication tools norms",
      "Consider global/cultural differences in buddy pairings",
    ],
    tags: ["onboarding", "buddy-program", "mentorship", "integration"],
    order: 25,
  },

  {
    id: "remote-onboarding-guide",
    title: "Remote Onboarding Guide",
    description: "Create engaging virtual onboarding experiences for distributed teams.",
    promptText: `Create a remote onboarding guide for the following context.

Company remote status: [FULL REMOTE/HYBRID/SOME REMOTE]
Time zones: [CONTEXT]
Team size: [SIZE]
New hire location: [CONTEXT]

Primary challenges to address: [CHALLENGES]

Please create:
1. Pre-boarding tech setup guide
2. Virtual first-day agenda
3. Remote culture integration strategies
4. Building social connection remotely
5. Communication norms and tool training
6. Async learning resources
7. Regular check-in cadence
8. Red flags for remote isolation
9. Virtual team building activities
10. When to escalate issues

Focus on:
- Building connection without physical presence
- Clear async communication
- Preventing isolation
- Intentional culture building
- Accessibility and inclusion`,
    placeholders: ["FULL REMOTE/HYBRID/SOME REMOTE", "CONTEXT", "SIZE", "CONTEXT", "CHALLENGES"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "hr-people",
    categoryId: "onboarding",
    exampleOutput:
      "A comprehensive remote onboarding guide with strategies for connection, culture building, and remote success.",
    customizationNotes: [
      "Add your company's remote work tools",
      "Include time zone aware scheduling",
      "Consider cultural differences in remote work",
    ],
    tags: ["onboarding", "remote", "distributed", "virtual"],
    order: 26,
  },

  {
    id: "onboarding-feedback-survey",
    title: "Onboarding Feedback Survey",
    description: "Gather actionable feedback to continuously improve the onboarding experience.",
    promptText: `Create an onboarding feedback survey.

Survey timing: [WEEK 1/WEEK 1/MONTH 1/QUARTER 1]
Role: [JOB TITLE]
Department: [DEPARTMENT]

Survey goals: [WHAT YOU WANT TO LEARN]

Please create survey questions covering:
1. Overall onboarding satisfaction
2. Clarity of role and expectations
3. Manager effectiveness in onboarding
4. Buddy/mentor program value (if applicable)
5. Training and resources adequacy
6. Team integration and culture
7. Tools and systems setup
8. What was most/least valuable
9. Suggestions for improvement
10. Net Promoter Score recommendation question

Include:
- Mix of rating scales and open questions
- Specific, actionable questions
- Anonymous option consideration
- Time to complete: under 10 minutes`,
    placeholders: [
      "WEEK 1/WEEK 1/MONTH 1/QUARTER 1",
      "JOB TITLE",
      "DEPARTMENT",
      "WHAT YOU WANT TO LEARN",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "hr-people",
    categoryId: "onboarding",
    exampleOutput:
      "A concise onboarding feedback survey with balanced rating and open-ended questions for actionable insights.",
    customizationNotes: [
      "Add company-specific onboarding elements",
      "Include remote work considerations if relevant",
      "Consider role-specific technical training questions",
    ],
    tags: ["onboarding", "feedback", "survey", "improvement"],
    order: 27,
  },

  // ============================================================================
  // TEAM FEEDBACK
  // ============================================================================

  {
    id: "one-on-one-meeting-questions",
    title: "One-on-One Meeting Questions",
    description: "Run effective 1:1s with questions that build trust and drive performance.",
    promptText: `Create a one-on-one meeting question bank.

Frequency: [WEEKLY/BI-WEEKLY/MONTHLY]
Duration: [MINUTES]
Relationship: [NEW/ESTABLISHED]
Recent context: [ANY RECENT CHALLENGES OR WINS]

Focus areas: [PRIORITIES]

Please create questions for:
1. Opening and check-in (How are you really?)
2. Progress on goals/projects
3. Blockers and support needed
4. Team dynamics and collaboration
5. Manager feedback (for you)
6. Career development aspirations
7. Energy and engagement levels
8. Recognition and wins
9. What to keep/change in our work
10. Closing and next steps

Include:
- Mix of deep and light questions
- Some unexpected/thought-provoking questions
- Remote work considerations if applicable
- Signs to dig deeper`,
    placeholders: [
      "WEEKLY/BI-WEEKLY/MONTHLY",
      "MINUTES",
      "NEW/ESTABLISHED",
      "ANY RECENT CHALLENGES OR WINS",
      "PRIORITIES",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "hr-people",
    categoryId: "team-feedback",
    exampleOutput:
      "A rich question bank for 1:1s covering work, development, relationship building, and engagement.",
    customizationNotes: [
      "Add questions relevant to your company context",
      "Include recent project-specific follow-ups",
      "Consider the employee's communication style",
    ],
    tags: ["1:1", "one-on-one", "feedback", "management"],
    order: 28,
  },

  {
    id: "peer-feedback-questions",
    title: "Peer Feedback Questions",
    description: "Gather constructive peer feedback that improves team collaboration.",
    promptText: `Create peer feedback questions for the following context.

Peer relationship: [CLOSE/COLLABORATIVE/OCCASIONAL/CROSS-FUNCTIONAL]
Project context: [TEAM PROJECT/ONGOING/MATRIXED]
Feedback purpose: [PROJECT RETROSPECTIVE/ONGOING/360]

Areas to assess: [COMPETENCIES OR BEHAVIORS]

Please create:
1. Questions about collaboration effectiveness
2. Communication style feedback
3. Strengths observed with examples
4. Growth areas with specific suggestions
5. Impact on team success
6. What to continue/start/stop
7. How to work better together
8. Rating scale with open comments

Each question should:
- Be specific and behavioral
- Focus on impact and outcomes
- Avoid vagueness
- Encourage examples
- Be actionable

Include:
- Anonymous vs. attributed consideration
- How to deliver feedback constructively
- Red flags in feedback to avoid`,
    placeholders: [
      "CLOSE/COLLABORATIVE/OCCASIONAL/CROSS-FUNCTIONAL",
      "TEAM PROJECT/ONGOING/MATRIXED",
      "PROJECT RETROSPECTIVE/ONGOING/360",
      "COMPETENCIES OR BEHAVIORS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "hr-people",
    categoryId: "team-feedback",
    exampleOutput:
      "A peer feedback question set that elicits specific, behavioral, actionable feedback for team improvement.",
    customizationNotes: [
      "Add company values or behaviors to assess",
      "Include team-specific collaboration norms",
      "Consider remote work communication patterns",
    ],
    tags: ["feedback", "peer-review", "teamwork", "collaboration"],
    order: 29,
  },

  {
    id: "team-retrospective-questions",
    title: "Team Retrospective Questions",
    description: "Run productive retrospectives that continuously improve team performance.",
    promptText: `Create retrospective questions for the following team context.

Team type: [PROJECT/ONGOING/CROSS-FUNCTIONAL]
Sprint/period: [DURATION]
Recent challenges: [CONTEXT]
Retrospective experience: [NEW/HABITUAL]

Desired outcomes: [GOALS]

Please create questions for:
1. What went well (celebrate)
2. What didn't go well (learn)
3. What surprised us
4. What we should keep doing
5. What we should start doing
6. What we should stop doing
7. Root cause exploration of issues
8. Action items and ownership
9. Experiment ideas for next period
10. Team sentiment check

Include:
- A mix of reflection and forward-looking questions
- Psychological safety considerations
- Techniques for quiet voices
- Techniques for dominant voices
- How to prioritize action items
- Follow-through mechanisms`,
    placeholders: [
      "PROJECT/ONGOING/CROSS-FUNCTIONAL",
      "DURATION",
      "CONTEXT",
      "NEW/HABITUAL",
      "GOALS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "hr-people",
    categoryId: "team-feedback",
    exampleOutput:
      "A comprehensive retrospective question set that balances reflection, learning, and action planning.",
    customizationNotes: [
      "Add recent project-specific contexts",
      "Include team-specific working agreements",
      "Consider remote facilitation needs",
    ],
    tags: ["retrospective", "team", "improvement", "agile"],
    order: 30,
  },

  {
    id: "upward-feedback-questions",
    title: "Upward Feedback Questions",
    description: "Gather constructive feedback on managers from their direct reports.",
    promptText: `Create upward feedback questions for the following context.

Manager's role: [MANAGER TYPE]
Team size: [SIZE]
Relationship tenure: [NEW/ESTABLISHED]
Manager's experience level: [NEW/SEASONED]

Areas to assess: [FOCUS AREAS]

Please create questions about:
1. Leadership effectiveness
2. Communication clarity and frequency
3. Support and resources provided
4. Decision-making and transparency
5. Feedback quality (giving and receiving)
6. Career development support
7. Recognition and appreciation
8. Managing up and accessibility
9. What the manager should start/stop/continue
10. Overall manager effectiveness

Each question should:
- Be specific and behavioral
- Focus on actions manager can change
- Be fair and balanced
- Allow for both praise and constructive feedback
- Protect employee anonymity where needed

Include:
- Rating scale with clear definitions
- Open comment prompts
- How to deliver feedback safely`,
    placeholders: ["MANAGER TYPE", "SIZE", "NEW/ESTABLISHED", "NEW/SEASONED", "FOCUS AREAS"],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "hr-people",
    categoryId: "team-feedback",
    exampleOutput:
      "A thoughtful upward feedback question set that elicits actionable, safe feedback on manager effectiveness.",
    customizationNotes: [
      "Include company leadership competencies",
      "Add specific manager responsibilities",
      "Consider feedback delivery mechanism (anonymous vs. attributed)",
    ],
    tags: ["feedback", "upward", "manager", "leadership"],
    order: 31,
  },

  {
    id: "anonymous-questions-box",
    title: "Anonymous Questions Box",
    description: "Create safe channels for team questions and concerns.",
    promptText: `Create a framework for anonymous team questions and concerns.

Team context: [TEAM TYPE/SIZE]
Current trust level: [HIGH/MEDIUM/BUILDING]
Recent issues: [ANY RECENT CONCERNS]
Platform: [SLACK/EMAIL/FORM/OTHER]

Please create:
1. How to introduce anonymous questions
2. Sample prompts to encourage participation
3. Question moderation approach
4. Response framework (how to answer)
5. When to address publicly vs. privately
6. How to build psychological safety
7. Transitioning from anonymous to open dialogue
8. Frequency and cadence

Include:
- Safe framing language
- Examples of good vs. bad anonymous questions
- How to handle sensitive topics
- When anonymity might be misused
- Alternative channels for specific concerns`,
    placeholders: [
      "TEAM TYPE/SIZE",
      "HIGH/MEDIUM/BUILDING",
      "ANY RECENT CONCERNS",
      "SLACK/EMAIL/FORM/OTHER",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "hr-people",
    categoryId: "team-feedback",
    exampleOutput:
      "A thoughtful framework for anonymous questions that builds safety while encouraging open dialogue.",
    customizationNotes: [
      "Add your company communication tools",
      "Include HR or escalation considerations",
      "Consider cultural factors in speaking up",
    ],
    tags: ["feedback", "anonymous", "psychological-safety", "questions"],
    order: 32,
  },

  {
    id: "team-sentiment-check",
    title: "Team Sentiment Check",
    description: "Quick pulse checks to gauge team morale and engagement.",
    promptText: `Create team sentiment check questions for the following context.

Team size: [SIZE]
Recent changes: [ANY CHALLENGES OR CHANGES]
Check frequency: [DAILY/WEEKLY/MONTHLY/AD-HOC]
Format: [MEETING/SLACK/SURVEY]

Current concerns: [AWARENESS OF ISSUES]

Please create:
1. Quick pulse questions (1-2 minutes)
2. Energy level indicators
3. Sentiment rating scales
4. Open-ended check-in prompts
5. Fun/creative engagement questions
6. Red flag warning signs
7. Follow-up actions based on responses
8. How to act on feedback without breaking trust

Include options for:
- Different meeting types (standup, retro, 1:1)
- Async communication
- Anonymous vs. attributed
- Different team moods/contexts`,
    placeholders: [
      "SIZE",
      "ANY CHALLENGES OR CHANGES",
      "DAILY/WEEKLY/MONTHLY/AD-HOC",
      "MEETING/SLACK/SURVEY",
      "AWARENESS OF ISSUES",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "hr-people",
    categoryId: "team-feedback",
    exampleOutput:
      "A variety of quick sentiment check questions and formats for different team contexts.",
    customizationNotes: [
      "Add team-specific inside jokes or traditions",
      "Include company-specific challenges",
      "Consider remote communication nuances",
    ],
    tags: ["sentiment", "morale", "pulse-check", "engagement"],
    order: 33,
  },

  {
    id: "apology-and-accountability",
    title: "Apology and Accountability Templates",
    description: "Craft sincere apologies that rebuild trust after mistakes.",
    promptText: `Help me craft a sincere apology to my team.

What happened: [MISTAKE OR ISSUE]
Impact: [WHO WAS AFFECTED AND HOW]
My role: [RESPONSIBILITY]
Relationship with recipient(s): [CONTEXT]

Audience: [INDIVIDUAL/TEAM/COMPANY]

Please create:
1. Sincere apology statement
2. Acknowledgment of specific impact
3. Taking ownership (no excuses)
4. What I'm doing to fix it
5. How I'll prevent it happening again
6. Request for feedback or concerns
7. Rebuilding trust commitment

The apology should:
- Be sincere without being defensive
- Acknowledge specific harm done
- Take full ownership
- Include concrete remediation
- Avoid "I'm sorry if..."
- Focus on impact not intent`,
    placeholders: [
      "MISTAKE OR ISSUE",
      "WHO WAS AFFECTED AND HOW",
      "RESPONSIBILITY",
      "CONTEXT",
      "INDIVIDUAL/TEAM/COMPANY",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "hr-people",
    categoryId: "team-feedback",
    exampleOutput:
      "A sincere, accountable apology that takes ownership and focuses on remediation and rebuilding trust.",
    customizationNotes: [
      "Consider the severity and impact carefully",
      "Include HR or legal considerations if significant",
      "Match the delivery method to severity",
    ],
    tags: ["feedback", "apology", "accountability", "trust"],
    order: 34,
  },

  // ============================================================================
  // TRAINING MATERIALS
  // ============================================================================

  {
    id: "training-needs-assessment",
    title: "Training Needs Assessment",
    description: "Identify skill gaps and training priorities for your team.",
    promptText: `Help me assess training needs for the following team.

Team function: [DEPARTMENT/FUNCTION]
Team size: [SIZE]
Current challenges: [PAIN POINTS]
Business goals: [OBJECTIVES]
Skill areas: [DOMAINS]

Recent changes: [NEW TOOLS/PROCESSES/STRATEGY]

Please create:
1. Skills assessment questions for team members
2. Manager observation checklist
3. Performance gap analysis framework
4. Priority ranking methodology
5. Individual vs. team training distinction
6. Quick wins vs. long-term development
7. ROI considerations for training investment
8. Assessment delivery approach (survey, interview, observation)

Include:
- Technical skills assessment
- Soft skills assessment
- Leadership skills (if applicable)
- Business acumen areas
- Industry-specific knowledge`,
    placeholders: [
      "DEPARTMENT/FUNCTION",
      "SIZE",
      "PAIN POINTS",
      "OBJECTIVES",
      "DOMAINS",
      "NEW TOOLS/PROCESSES/STRATEGY",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "hr-people",
    categoryId: "training",
    exampleOutput:
      "A comprehensive training needs assessment framework with questions, checklists, and prioritization tools.",
    customizationNotes: [
      "Add company-specific technical skills",
      "Include industry-standard competencies",
      "Consider remote work skill requirements",
    ],
    tags: ["training", "needs-assessment", "skill-gaps", "development"],
    order: 35,
  },

  {
    id: "lesson-plan-template",
    title: "Lesson Plan Template",
    description: "Structure effective training sessions with clear learning objectives.",
    promptText: `Create a lesson plan for the following training.

Topic: [TRAINING TOPIC]
Audience: [ROLE/LEVEL]
Duration: [TIME]
Format: [WORKSHOP/WEBINAR/IN-PERSON/RECORDING]
Experience level: [BEGINNER/INTERMEDIATE/ADVANCED]
Class size: [NUMBER]

Learning objectives: [OUTCOMES]

Please create a lesson plan with:
1. Clear learning objectives (Bloom's taxonomy)
2. Prerequisites and prep work
3. Materials and resources needed
4. Session outline with timing
5. Teaching methods for each section
6. Activities and exercises
7. Assessment/check for understanding
8. Take-away resources
9. Follow-up and reinforcement
10. Accessibility considerations

Include:
- Engagement techniques
- Different learning styles addressed
- Real-world examples and scenarios
- Interactive elements`,
    placeholders: [
      "TRAINING TOPIC",
      "ROLE/LEVEL",
      "TIME",
      "WORKSHOP/WEBINAR/IN-PERSON/RECORDING",
      "BEGINNER/INTERMEDIATE/ADVANCED",
      "NUMBER",
      "OUTCOMES",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "hr-people",
    categoryId: "training",
    exampleOutput:
      "A detailed lesson plan with clear objectives, timed sections, activities, and assessment methods.",
    customizationNotes: [
      "Add company-specific examples and scenarios",
      "Include industry case studies",
      "Consider virtual delivery adaptations",
    ],
    tags: ["training", "lesson-plan", "teaching", "curriculum"],
    order: 36,
  },

  {
    id: "learning-objectives-generator",
    title: "Learning Objectives Generator",
    description: "Create clear, measurable learning objectives using Bloom's taxonomy.",
    promptText: `Create clear learning objectives for the following training.

Topic: [SUBJECT]
Audience: [WHO]
Current skill level: [STARTING POINT]
Desired skill level: [TARGET OUTCOME]
Training duration: [TIME]
Application context: [HOW THEY'LL USE IT]

Please create learning objectives that are:
1. Specific and clear
2. Measurable/observable
3. Achievable in the time
4. Relevant to their work
5. Time-bound

Organize by Bloom's taxonomy levels:
- Remember: Recall and recognize
- Understand: Explain and describe
- Apply: Use and implement
- Analyze: Compare and differentiate
- Evaluate: Assess and justify
- Create: Design and construct

For each objective include:
- Active verb from Bloom's
- What they'll learn
- How they'll demonstrate learning
- Why it matters for their work`,
    placeholders: [
      "SUBJECT",
      "WHO",
      "STARTING POINT",
      "TARGET OUTCOME",
      "TIME",
      "HOW THEY'LL USE IT",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "hr-people",
    categoryId: "training",
    exampleOutput:
      "Clear, measurable learning objectives organized by Bloom's taxonomy with demonstration methods.",
    customizationNotes: [
      "Align to company-specific competencies",
      "Include role-specific applications",
      "Add industry-specific contexts",
    ],
    tags: ["training", "learning-objectives", "blooms-taxonomy", "curriculum"],
    order: 37,
  },

  {
    id: "training-assessment-questions",
    title: "Training Assessment Questions",
    description: "Create quizzes and assessments to measure learning retention.",
    promptText: `Create assessment questions for the following training.

Topic: [SUBJECT]
Audience level: [BEGINNER/INTERMEDIATE/ADVANCED]
Training type: [COMPLIANCE/SKILLS/LEADERSHIP/ONBOARDING]
Assessment purpose: [PRE-TEST/POST-TEST/CERTIFICATION]

Key content covered: [LEARNING OBJECTIVES OR TOPICS]

Please create:
1. Multiple choice questions (10-15)
2. True/false questions (5-10)
3. Scenario-based questions (3-5)
4. Application/exercise questions (2-3)
5. Answer key with explanations
6. Scoring rubric
7. Pass/fail threshold rationale

Questions should:
- Test different cognitive levels (recall to application)
- Be clear and unambiguous
- Have one clearly correct answer
- Reflect real-world application
- Be fair and unbiased`,
    placeholders: [
      "SUBJECT",
      "BEGINNER/INTERMEDIATE/ADVANCED",
      "COMPLIANCE/SKILLS/LEADERSHIP/ONBOARDING",
      "PRE-TEST/POST-TEST/CERTIFICATION",
      "LEARNING OBJECTIVES OR TOPICS",
    ],
    bestTool: "chatgpt",
    difficulty: "intermediate",
    domainId: "hr-people",
    categoryId: "training",
    exampleOutput:
      "A comprehensive assessment with varied question types, answer key, and scoring rubric.",
    customizationNotes: [
      "Include company-specific scenarios",
      "Add role-specific contexts",
      "Consider remote work applications",
    ],
    tags: ["training", "assessment", "quiz", "evaluation"],
    order: 38,
  },

  {
    id: "training-feedback-survey",
    title: "Training Feedback Survey",
    description: "Gather actionable feedback to improve training effectiveness.",
    promptText: `Create a training feedback survey.

Training topic: [SUBJECT]
Format: [IN-PERSON/LIVE VIRTUAL/ASYNC/RECORDED]
Duration: [TIME]
Audience: [WHO]
Trainer: [SELF/PEER/EXTERNAL]

Please create survey questions covering:
1. Overall satisfaction (rating)
2. Content relevance and quality
3. Pace and depth
4. Instructor effectiveness
5. Activities and exercises value
6. Materials and resources helpfulness
7. Learning environment (if applicable)
8. What was most valuable
9. What could be improved
10. Application confidence (will they use it?)
11. NPS recommendation question

Include:
- Mix of rating scales and open questions
- Specific, actionable feedback opportunities
- Completion time under 5 minutes
- Anonymous vs. attributed consideration`,
    placeholders: [
      "SUBJECT",
      "IN-PERSON/LIVE VIRTUAL/ASYNC/RECORDED",
      "TIME",
      "WHO",
      "SELF/PEER/EXTERNAL",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "hr-people",
    categoryId: "training",
    exampleOutput:
      "A concise training feedback survey with balanced rating and open-ended questions.",
    customizationNotes: [
      "Add format-specific questions (in-person vs. virtual)",
      "Include remote training specific elements",
      "Consider certification or compliance requirements",
    ],
    tags: ["training", "feedback", "survey", "improvement"],
    order: 39,
  },

  {
    id: "hr-knowledge-base-article",
    title: "Knowledge Base Article",
    description: "Create clear, searchable documentation for processes and procedures.",
    promptText: `Create a knowledge base article for the following topic.

Topic: [PROCESS/PROCEDURE/TOOL]
Audience: [WHO NEEDS THIS]
Use case: [WHEN THEY'LL USE IT]
Complexity: [SIMPLE/COMPLEX]
Frequency of use: [DAILY/WEEKLY/OCCASIONAL]

Current documentation: [EXISTING RESOURCES OR CONTEXT]

Please create:
1. Clear, searchable title
2. Brief summary/overview
3. Prerequisites or requirements
4. Step-by-step instructions
5. Screenshots or diagrams needed
6. Tips and best practices
7. Common issues and troubleshooting
8. Related articles or resources
9. Last updated date
10. Owner/author for questions

Style guidelines:
- Clear, simple language (no jargon)
- Scannable formatting (headings, bullets)
- Search-friendly terminology
- Context for when to use this
- Accurate and complete`,
    placeholders: [
      "PROCESS/PROCEDURE/TOOL",
      "WHO NEEDS THIS",
      "WHEN THEY'LL USE IT",
      "SIMPLE/COMPLEX",
      "DAILY/WEEKLY/OCCASIONAL",
      "EXISTING RESOURCES OR CONTEXT",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "hr-people",
    categoryId: "training",
    exampleOutput:
      "A well-structured knowledge base article with clear steps, troubleshooting, and search-friendly formatting.",
    customizationNotes: [
      "Use company terminology and conventions",
      "Include internal links to related resources",
      "Add role-specific tips or shortcuts",
    ],
    tags: ["training", "documentation", "knowledge-base", "sop"],
    order: 40,
  },
];
