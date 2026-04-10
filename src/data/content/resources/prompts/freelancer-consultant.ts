/**
 * Freelancer & Consultant Toolkit Prompts
 *
 * PURPOSE: Prompts for proposals, client management, pricing, and independent work essentials.
 *
 * DOMAIN: Freelancer & Consultant Toolkit
 * CATEGORIES:
 * - Proposals & SOWs (7 prompts)
 * - Pricing & Rates (7 prompts)
 * - Portfolio Content (6 prompts)
 * - Client Communication (8 prompts)
 * - Invoicing & Contracts (7 prompts)
 *
 * @see src/types/resources.ts - Prompt type definition
 */

import type { Prompt } from "@/types/resources";

/**
 * Freelancer & Consultant prompts collection
 *
 * Designed for independent professionals managing client relationships,
 * winning work, and running their businesses efficiently.
 */
export const freelancerConsultantPrompts: Prompt[] = [
  // ============================================================================
  // PROPOSALS & SOWs
  // ============================================================================

  {
    id: "project-proposal-generator",
    title: "Project Proposal Generator",
    description: "Create compelling, detailed project proposals that win clients.",
    promptText: `Create a project proposal for:

Project type: [PROJECT TYPE]
Client industry: [INDUSTRY]
Client company size: [SIZE]
My expertise level: [EXPERTISE DESCRIPTION]
Project timeline: [DURATION]
Budget range: [RANGE]

Client's problem/pain points:
[CLIENT PROBLEMS]

Client's stated goals:
[CLIENT GOALS]

Create a proposal with:
1. **Executive Summary**: Brief, compelling overview
2. **Problem Understanding**: Show I understand their situation
3. **Proposed Solution**: High-level approach and methodology
4. **Project Phases**: Breakdown with deliverables
5. **Timeline**: Key milestones and dates
6. **Investment**: Pricing presentation (see note below)
7. **Why Me**: Differentiation and relevant experience
8. **Next Steps**: Clear call to action

For pricing, use [FIXED PRICE/HOURLY/RETAINER] format.
Tone: [PROFESSIONAL/FRIENDLY/DIRECT]`,
    placeholders: [
      "PROJECT TYPE",
      "INDUSTRY",
      "SIZE",
      "EXPERTISE DESCRIPTION",
      "DURATION",
      "RANGE",
      "CLIENT PROBLEMS",
      "CLIENT GOALS",
      "FIXED PRICE/HOURLY/RETAINER",
      "PROFESSIONAL/FRIENDLY/DIRECT",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "freelancer-consultant",
    categoryId: "proposals-sow",
    exampleOutput:
      "A comprehensive proposal structure with compelling problem statement, clear solution approach, and professional presentation.",
    customizationNotes: [
      "Include specific relevant past work examples",
      "Mention any client-provided materials or constraints",
      "Add competitive pressure if client is shopping around",
    ],
    tags: ["proposals", "sales", "client", "winning-work"],
    order: 1,
  },

  {
    id: "scope-of-work-template",
    title: "Scope of Work Template Generator",
    description: "Create detailed SOWs that prevent scope creep and misunderstandings.",
    promptText: `Create a detailed Scope of Work document for:

Project type: [PROJECT TYPE]
Deliverables: [WHAT I'M DELIVERING]
Timeline: [DURATION]
Revision rounds included: [NUMBER]

Client context:
- Industry: [INDUSTRY]
- Technical sophistication: [HIGH/MEDIUM/LOW]
- Decision-making: [SINGLE STAKEHOLDER/COMMITTEE]

SOW must include:
1. **Project Overview**: Brief description and objectives
2. **In Scope**: Detailed list of what's included
3. **Out of Scope**: Explicit exclusions (be comprehensive)
4. **Deliverables**: Specific outputs with acceptance criteria
5. **Timeline**: Phase breakdown with milestone dates
6. **Client Responsibilities**: What client must provide (access, materials, feedback)
7. **Revisions**: Number included and what constitutes a revision
8. **Approval Process**: How deliverables are accepted
9. **Change Requests**: Process for out-of-scope work
10. **Assumptions**: Conditions the project depends on

Include common scope creep scenarios for this project type.`,
    placeholders: [
      "PROJECT TYPE",
      "WHAT I'M DELIVERING",
      "DURATION",
      "NUMBER",
      "INDUSTRY",
      "HIGH/MEDIUM/LOW",
      "SINGLE STAKEHOLDER/COMMITTEE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "freelancer-consultant",
    categoryId: "proposals-sow",
    exampleOutput:
      "A comprehensive SOW with clear in/out boundaries, client responsibilities, and change request procedures.",
    customizationNotes: [
      "Include specific client system/platform requirements",
      "Note any client team members who need to be involved",
      "Add communication preferences and expectations",
    ],
    tags: ["sow", "scope", "contract", "deliverables"],
    order: 2,
  },

  {
    id: "freelancer-proposal-objection-handler",
    title: "Proposal Objection Handler",
    description: "Prepare responses to common client objections and concerns.",
    promptText: `Help me prepare for client objections to my proposal.

My proposal:
- Project type: [PROJECT TYPE]
- Investment: [AMOUNT]
- Timeline: [DURATION]
- My experience level: [YEARS/BACKGROUND]
- Unique value: [DIFFERENTIATION]

I expect these objections:
[ANTICIPATED OBJECTIONS]

For each objection, provide:
1. **Understanding Response**: Empathetic acknowledgment
2. **Value Reframe**: Addressing the real concern
3. **Evidence/Proof**: Supporting rationale
4. **Alternative/Flexibility**: Options if appropriate

Common objections to prepare for:
- "Your price is higher than others"
- "Why shouldn't we do this in-house?"
- "Can you start with a smaller project?"
- "What if we're not satisfied?"
- "Why do we need this at all?"
- [MY SPECIFIC OBJECTIONS]`,
    placeholders: [
      "PROJECT TYPE",
      "AMOUNT",
      "DURATION",
      "YEARS/BACKGROUND",
      "DIFFERENTIATION",
      "ANTICIPATED OBJECTIONS",
      "MY SPECIFIC OBJECTIONS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "freelancer-consultant",
    categoryId: "proposals-sow",
    exampleOutput:
      "Professional objection responses that acknowledge concerns, reframe value, and offer constructive alternatives.",
    customizationNotes: [
      "Include actual client feedback from past proposals",
      "Note specific competitive situations",
      "Mention your comfort with negotiation vs. holding firm",
    ],
    tags: ["proposals", "objections", "sales", "negotiation"],
    order: 3,
  },

  {
    id: "discovery-session-script",
    title: "Discovery Session Script Generator",
    description: "Prepare questions and talking points for client discovery calls.",
    promptText: `Create a discovery session script/guide for:

Service type: [SERVICE TYPE]
Typical client: [CLIENT PROFILE]
My expertise: [MY BACKGROUND]

Session goals:
[WHAT I WANT TO LEARN/ACCOMPLISH]

Create a session flow with:
1. **Opening**: Professional greeting and agenda setting
2. **Relationship Building**: Icebreakers and rapport building
3. **Problem Exploration**: Questions to uncover real pain points
4. **Current State**: Understanding their existing solution/process
5. **Goals & Success**: What winning looks like for them
6. **Budget & Timeline**: Money and timing questions
7. **Decision Making**: How they decide, who's involved
8. **Next Steps**: Clear path forward
9. **My Questions**: What I should be prepared to answer

Include:
- "What I'm listening for" notes for each section
- Red flags that signal a bad fit
- Buying signals that show strong interest`,
    placeholders: [
      "SERVICE TYPE",
      "CLIENT PROFILE",
      "MY BACKGROUND",
      "WHAT I WANT TO LEARN/ACCOMPLISH",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "freelancer-consultant",
    categoryId: "proposals-sow",
    exampleOutput:
      "A structured discovery call script with questions, listening points, and signals for qualifying clients.",
    customizationNotes: [
      "Include questions specific to your industry expertise",
      "Note your average client engagement length",
      "Mention any deal-breakers for working together",
    ],
    tags: ["discovery", "sales", "client-calls", "questions"],
    order: 4,
  },

  {
    id: "project-timeline-visualizer",
    title: "Project Timeline & Milestones Planner",
    description: "Create clear project timelines with milestones and dependencies.",
    promptText: `Create a detailed project timeline for:

Project type: [PROJECT TYPE]
Overall duration: [TIMEFRAME]
Key milestones: [MAJOR DELIVERABLES]
Client check-ins preferred: [FREQUENCY]

Project phases:
[LIST PHASES OR BREAKDOWN]

Create:
1. **Visual Timeline**: Phase breakdown with dates/durations
2. **Milestone Map**: Key decision points and deliverables
3. **Dependency Diagram**: What must finish before what starts
4. **Client Touchpoints**: When client involvement is needed
5. **Risk Points**: Where delays typically happen
6. **Buffer Strategy**: Built-in contingency time
7. **Gantt-style View**: Task sequencing and parallel work

Include:
- What "done" looks like for each phase
- Client approval gates
- Conditions that could accelerate timeline`,
    placeholders: [
      "PROJECT TYPE",
      "TIMEFRAME",
      "MAJOR DELIVERABLES",
      "FREQUENCY",
      "LIST PHASES OR BREAKDOWN",
    ],
    bestTool: "chatgpt",
    difficulty: "intermediate",
    domainId: "freelancer-consultant",
    categoryId: "proposals-sow",
    exampleOutput:
      "A comprehensive project timeline with milestone dates, client touchpoints, and risk mitigation strategies.",
    customizationNotes: [
      "Include known client constraints (vacations, holidays)",
      "Note if client has slow approval processes",
      "Mention any vendor/outsourced dependencies",
    ],
    tags: ["timeline", "project-management", "milestones", "planning"],
    order: 5,
  },

  {
    id: "proposal-follow-up-sequence",
    title: "Proposal Follow-Up Email Sequence",
    description: "Create a strategic email follow-up sequence after sending proposals.",
    promptText: `Create a proposal follow-up email sequence for:

Proposal details:
- Project type: [PROJECT TYPE]
- Investment: [AMOUNT]
- Sent: [DATE]
- Client response expected by: [DEADLINE]

Client context:
- Communication style: [FORMAL/CASUAL/DIRECT]
- Company size: [SIZE]
- Relationship: [NEW CLIENT/RETURNING]
- Competitive situation: [SOLE SOURCE/BIDDING]

Create a 5-email sequence:
1. **Day 1**: Proposal delivery confirmation
2. **Day 3**: Value reinforcement (if no response)
3. **Day 7**: Question/objection opener
4. **Day 14**: Alternate proposal or urgency builder
5. **Day 21**: Breakup/move-on email

For each email:
- Compelling subject line
- Personalization placeholders
- Clear call to action
- Tone that builds rapport without desperation`,
    placeholders: [
      "PROJECT TYPE",
      "AMOUNT",
      "DATE",
      "DEADLINE",
      "FORMAL/CASUAL/DIRECT",
      "SIZE",
      "NEW CLIENT/RETURNING",
      "SOLE SOURCE/BIDDING",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "freelancer-consultant",
    categoryId: "proposals-sow",
    exampleOutput:
      "A strategic 5-email follow-up sequence with personalized templates and clear calls to action.",
    customizationNotes: [
      "Include specific proposal highlights to reference",
      "Note if client has specific decision meeting dates",
      "Mention any competitive pressure points",
    ],
    tags: ["follow-up", "proposals", "emails", "sales"],
    order: 6,
  },

  {
    id: "case-study-proposal-insert",
    title: "Case Study for Proposals",
    description: "Create persuasive case studies to include in proposals.",
    promptText: `Create a client case study for:

Project type: [TYPE OF WORK]
Industry: [INDUSTRY]
My role: [MY POSITION]

Project details:
- Client's problem: [SITUATION]
- My solution: [APPROACH]
- Results: [OUTCOMES, preferably quantified]
- Timeline: [DURATION]
- Investment: [RANGE, if comfortable sharing]

Format as a compelling proposal case study with:
1. **Headline**: Results-focused title
2. **Client Profile**: Anonymous company description
3. **Challenge**: The problem they faced
4. **Solution**: What we did together
5. **Results**: Measurable outcomes (numbers, percentages)
6. **Testimonial Quote**: (create based on real feedback)
7. **Relevance Statement**: Why this matters to prospect

Write it so a prospect quickly sees "this person solved my exact problem."`,
    placeholders: [
      "TYPE OF WORK",
      "INDUSTRY",
      "MY POSITION",
      "SITUATION",
      "APPROACH",
      "OUTCOMES, preferably quantified",
      "DURATION",
      "RANGE, if comfortable sharing",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "freelancer-consultant",
    categoryId: "proposals-sow",
    exampleOutput:
      "A compelling, results-focused case study that demonstrates expertise and builds credibility with prospects.",
    customizationNotes: [
      "Use real metrics and outcomes from actual projects",
      "Anonymize client if they prefer confidentiality",
      "Highlight aspects most relevant to target prospects",
    ],
    tags: ["case-study", "portfolio", "social-proof", "proposals"],
    order: 7,
  },

  // ============================================================================
  // PRICING & RATES
  // ============================================================================

  {
    id: "hourly-rate-calculator",
    title: "Hourly Rate Calculator",
    description: "Calculate your optimal hourly rate based on business and lifestyle goals.",
    promptText: `Help me calculate my optimal hourly rate.

My situation:
- Desired annual income: [AMOUNT]
- Location: [CITY/COUNTRY]
- Billable hours target: [HOURS PER WEEK]
- Non-billable time estimate: [% OF TIME]
- Weeks off per year: [WEEKS]

Business expenses (annual):
- Software/tools: [AMOUNT]
- Healthcare/tax: [AMOUNT]
- Marketing: [AMOUNT]
- Other: [AMOUNT]

My experience level in [FIELD]: [DESCRIPTION]
My differentiation: [WHAT MAKES ME UNIQUE]

Calculate and explain:
1. **Break-even Rate**: Minimum to cover expenses
2. **Target Rate**: To hit income goals with buffer
3. **Market Position**: How this compares to market rates
4. **Value-based Adjustment**: When to charge above hourly rate
5. **Confidence Score**: How comfortable I should be at this rate

Include strategy for:
- Raising rates over time
- Discounting (or not) without devaluing
- Different rates for different project types`,
    placeholders: [
      "AMOUNT",
      "CITY/COUNTRY",
      "HOURS PER WEEK",
      "% OF TIME",
      "WEEKS",
      "AMOUNT",
      "AMOUNT",
      "AMOUNT",
      "AMOUNT",
      "FIELD",
      "DESCRIPTION",
      "WHAT MAKES ME UNIQUE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "freelancer-consultant",
    categoryId: "pricing",
    exampleOutput:
      "A comprehensive rate analysis with break-even calculations, market positioning, and confidence-building strategies.",
    customizationNotes: [
      "Be honest about non-billable time (it's usually 50%+)",
      "Include savings goals in desired income",
      "Note if you have geographic pricing flexibility",
    ],
    tags: ["pricing", "rates", "hourly", "calculator"],
    order: 8,
  },

  {
    id: "fixed-price-estimator",
    title: "Fixed Price Project Estimator",
    description: "Estimate fixed prices for projects with confidence and profit margin.",
    promptText: `Help me create a fixed-price quote for:

Project type: [PROJECT TYPE]
Deliverables: [SPECIFIC OUTPUTS]
My hourly rate: [RATE]
Complexity: [LOW/MEDIUM/HIGH]
Client changes expected: [FEW/SOME/LOTS]

Project phases I'm estimating:
1. [PHASE 1 + HOURS ESTIMATE]
2. [PHASE 2 + HOURS ESTIMATE]
3. [ADD MORE AS NEEDED]

Calculate and present:
1. **Labor Cost**: Hours × my rate
2. **Complexity Multiplier**: [1.2x for medium, 1.5x for high complexity]
3. **Risk Buffer**: % for scope changes, rework, unknowns
4. **Value Ceiling**: Maximum client will likely pay (assess)
5. **Fixed Price**: The quote I should give

Also provide:
- What's included/excluded to protect myself
- Change request language
- Red flags that would trigger price adjustment
- Alternative pricing tiers if the price feels high`,
    placeholders: [
      "PROJECT TYPE",
      "SPECIFIC OUTPUTS",
      "RATE",
      "LOW/MEDIUM/HIGH",
      "FEW/SOME/LOTS",
      "PHASE 1 + HOURS ESTIMATE",
      "PHASE 2 + HOURS ESTIMATE",
      "ADD MORE AS NEEDED",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "freelancer-consultant",
    categoryId: "pricing",
    exampleOutput:
      "A detailed fixed-price calculation with risk buffers, inclusions/exclusions, and change request language.",
    customizationNotes: [
      "Use past projects as reference points",
      "Consider if this client type typically expands scope",
      "Note your comfort with risk vs. predictable income",
    ],
    tags: ["pricing", "fixed-price", "estimates", "quotes"],
    order: 9,
  },

  {
    id: "value-based-pricing-frame",
    title: "Value-Based Pricing Framework",
    description: "Shift from time-based to value-based pricing for higher fees.",
    promptText: `Help me develop value-based pricing for:

Project type: [SERVICE]
Typical client: [CLIENT PROFILE]
My current pricing: [CURRENT RATE/PRICE]

Client's expected value from this project:
- Revenue impact: [IF APPLICABLE]
- Cost savings: [IF APPLICABLE]
- Risk reduction: [IF APPLICABLE]
- Other value: [DESCRIBE]

Create a pricing analysis:
1. **Value Quantification**: What this is worth to the client
2. **Value Capture**: What % of value is fair to charge (typically 10-30%)
3. **Pricing Options**: 3 tiers with different value levels
4. **Justification Language**: How to explain the investment
5. **ROI Presentation**: Showing client's return

Include:
- Conversation scripts for discussing value
- How to discover hidden value (ask these questions)
- When value-based pricing doesn't work
- Transition strategy from hourly to value-based`,
    placeholders: [
      "SERVICE",
      "CLIENT PROFILE",
      "CURRENT RATE/PRICE",
      "IF APPLICABLE",
      "IF APPLICABLE",
      "IF APPLICABLE",
      "DESCRIBE",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "freelancer-consultant",
    categoryId: "pricing",
    exampleOutput:
      "A value-based pricing framework with ROI calculations, tiered options, and conversation scripts.",
    customizationNotes: [
      "Include real results from past client projects",
      "Note which clients are open to value pricing",
      "Consider your confidence in delivering results",
    ],
    tags: ["pricing", "value-based", "premium", "positioning"],
    order: 10,
  },

  {
    id: "retainer-model-designer",
    title: "Retainer Model Designer",
    description: "Design sustainable, profitable retainer arrangements.",
    promptText: `Help me design a retainer offering for:

Service type: [WHAT I PROVIDE]
My hourly rate: [RATE]
Monthly capacity: [HOURS AVAILABLE]
Current one-off project pricing: [TYPICAL PROJECT FEE]

I want this retainer to:
[GOALS - predictability, client access, etc.]

Design a retainer with:
1. **Scope Definition**: What's included monthly
2. **Exclusions**: What's out of scope or requires add-on
3. **Delivery Rollover**: What happens to unused hours
4. **Overage Handling**: What happens if they need more
5. **Monthly Investment**: The retainer fee
6. **Commitment Term**: Minimum duration (3-6-12 months)
7. **Value-adds**: Included perks not in one-off pricing
8. **Onboarding**: How to transition from project to retainer

Include:
- Why this is better for client than project work
- Scripts to propose retainer to existing clients
- Red flags that signal a bad retainer fit`,
    placeholders: [
      "WHAT I PROVIDE",
      "RATE",
      "HOURS AVAILABLE",
      "TYPICAL PROJECT FEE",
      "GOALS - predictability, client access, etc.",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "freelancer-consultant",
    categoryId: "pricing",
    exampleOutput:
      "A comprehensive retainer model with clear scope, rollover/overage policies, and client transition scripts.",
    customizationNotes: [
      "Consider if you want capacity-based or outcome-based retainers",
      "Note your capacity to take on multiple retainers",
      "Include which existing clients are best candidates",
    ],
    tags: ["retainer", "pricing", "recurring", "clients"],
    order: 11,
  },

  {
    id: "price-increase-script",
    title: "Price Increase Communication Scripts",
    description: "Communicate rate increases to clients professionally.",
    promptText: `Create scripts to announce a price increase for:

Service type: [SERVICE]
Current rate: [CURRENT]
New rate: [NEW RATE]
Increase: [PERCENTAGE]
Effective date: [WHEN]
Reason: [WHY - experience, demand, costs]

Client scenarios:
1. **Long-term loyal client**: [YEARS] with me, great relationship
2. **New client**: Just started [TIMEFRAME] ago
3. **Project client**: Works with me sporadically
4. **High-volume client**: Gives me regular work

For each scenario, create:
- Email script with clear subject line
- Phone/video call script for more personal approach
- Anticipated objections with responses
- Value reinforcement messaging

Include:
- How much advance notice to give
- Grandfathering options (or not)
- What if they push back hard
- Alternative ways to soften the blow`,
    placeholders: [
      "SERVICE",
      "CURRENT",
      "NEW RATE",
      "PERCENTAGE",
      "WHEN",
      "WHY - experience, demand, costs",
      "YEARS",
      "TIMEFRAME",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "freelancer-consultant",
    categoryId: "pricing",
    exampleOutput:
      "Professional price increase scripts for different client scenarios with objection handling.",
    customizationNotes: [
      "Note your comfort with potentially losing clients",
      "Include market justification if rates are below market",
      "Consider offering transition period at old rate",
    ],
    tags: ["pricing", "rate-increase", "communication", "difficult-conversations"],
    order: 12,
  },

  {
    id: "pricing-psychology-guide",
    title: "Pricing Psychology & Presentation",
    description: "Apply psychological principles to make pricing more compelling.",
    promptText: `Help me apply pricing psychology to:

My service: [DESCRIPTION]
Current pricing: [CURRENT PRICING]
My market positioning: [BUDGET/MID-MARKET/PREMIUM]

I want to: [RAISE RATES/IMPROVE CONVERSIONS/BETTER POSITION]

Create analysis and recommendations:
1. **Anchoring**: How to present pricing to make my target feel right
2. **Decoy Effect**: Add a pricing tier that makes the middle tier most attractive
3. **Price Ending**: Should I use $X,999, round numbers, or specific pricing?
4. **Presentation Order**: How to sequence pricing options
5. **Framing**: How to describe investment vs. cost
6. **Scarcity**: When and how to create urgency ethically
7. **Social Proof**: How to build confidence around pricing

Include:
- Specific pricing tier structure to propose
- Language examples for price presentation
- What to avoid (pricing psychology that backfires)
- How this varies by client type (enterprise vs. small business)`,
    placeholders: [
      "DESCRIPTION",
      "CURRENT PRICING",
      "BUDGET/MID-MARKET/PREMIUM",
      "RAISE RATES/IMPROVE CONVERSIONS/BETTER POSITION",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "freelancer-consultant",
    categoryId: "pricing",
    exampleOutput:
      "A pricing psychology analysis with tiered structures, presentation strategies, and ethical considerations.",
    customizationNotes: [
      "Include your actual pricing for concrete recommendations",
      "Note your target client size and sophistication",
      "Mention any pricing that clients have reacted to",
    ],
    tags: ["pricing", "psychology", "positioning", "conversion"],
    order: 13,
  },

  {
    id: "discount-strategy-guide",
    title: "Discount Strategy Guide",
    description: "Decide when and how to discount without devaluing your services.",
    promptText: `Help me create a discount strategy for:

Service: [TYPE]
Standard rate: [RATE]
Typical project size: [RANGE]
Client pushback on price: [OFTEN/SOMETIMES/RARELY]

Current discounting: [MY CURRENT APPROACH]

Create a discount strategy covering:
1. **Discount Philosophy**: When is it okay vs. never
2. **Pre-approved Discounts**: Situations where discounts are built-in
3. **Trade-offs**: What to get in return for lower price
4. **No-Discount Alternatives**: How to reduce price without "discounting"
5. **Discount Language**: How to offer so it doesn't sound desperate
6. **Volume Incentives**: Structured discounts for larger commitments
7. **Referral Discounts**: Logic for referral-based pricing

Include scripts for:
- "Your price is too high"
- "Can you match [competitor]?"
- "What if we commit to more work?"
- Walking away when price is non-negotiable`,
    placeholders: ["TYPE", "RATE", "RANGE", "OFTEN/SOMETIMES/RARELY", "MY CURRENT APPROACH"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "freelancer-consultant",
    categoryId: "pricing",
    exampleOutput:
      "A strategic approach to discounting with scripts and alternatives that preserve value perception.",
    customizationNotes: [
      "Be honest about your financial runway (can you walk away?)",
      "Note which clients typically negotiate price",
      "Include your comfort with confrontation",
    ],
    tags: ["pricing", "discounts", "negotiation", "value"],
    order: 14,
  },

  // ============================================================================
  // PORTFOLIO CONTENT
  // ============================================================================

  {
    id: "portfolio-case-study",
    title: "Portfolio Case Study Writer",
    description: "Create compelling case studies that convert prospects into clients.",
    promptText: `Write a portfolio case study for:

Project: [PROJECT TYPE]
Client industry: [INDUSTRY]
My role: [WHAT I DID]

The situation:
- Client's problem: [CHALLENGE THEY FACED]
- Client's goal: [WHAT THEY WANTED TO ACHIEVE]
- Constraints: [BUDGET, TIMELINE, RESOURCES]

My approach:
- What I did: [MY SOLUTION/APPROACH]
- Timeline: [HOW LONG]
- Unique value I brought: [DIFFERENTIATION]

Results (be specific):
- Quantitative: [METRICS, NUMBERS]
- Qualitative: [FEEDBACK, OUTCOMES]

Write a case study with:
1. **Compelling Headline**: Results-focused
2. **Client Snapshot**: Who they are (anonymized if needed)
3. **The Challenge**: Problem with emotional stakes
4. **The Solution**: My approach and why it worked
5. **The Results**: Concrete outcomes, quantified when possible
6. **Key Takeaway**: What this proves about my work
7. **Testimonial**: (based on real feedback or create plausible one)

Format for: [WEBSITE/PROPOSAL/PDF/LinkedIn]`,
    placeholders: [
      "PROJECT TYPE",
      "INDUSTRY",
      "WHAT I DID",
      "CHALLENGE THEY FACED",
      "WHAT THEY WANTED TO ACHIEVE",
      "BUDGET, TIMELINE, RESOURCES",
      "MY SOLUTION/APPROACH",
      "HOW LONG",
      "DIFFERENTIATION",
      "METRICS, NUMBERS",
      "FEEDBACK, OUTCOMES",
      "WEBSITE/PROPOSAL/PDF/LinkedIn",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "freelancer-consultant",
    categoryId: "portfolio",
    exampleOutput:
      "A compelling, conversion-focused case study with clear problem-solution-results structure.",
    customizationNotes: [
      "Use real data and specific outcomes",
      "Get client permission before publishing",
      "Anonymize if client requires confidentiality",
    ],
    tags: ["portfolio", "case-study", "social-proof", "marketing"],
    order: 15,
  },

  {
    id: "portfolio-project-description",
    title: "Portfolio Project Description Generator",
    description: "Write engaging descriptions for portfolio pieces.",
    promptText: `Create portfolio descriptions for:

Project type: [TYPE]
My role: [ROLE]
Tools/tech used: [LIST]
Timeframe: [DURATION]

The project:
[WHAT I BUILT/DID]

Results/impact:
[OUTCOMES]

Create 3 versions:
1. **One-liner**: For portfolio grid/cards (one sentence)
2. **Short description**: For project page intro (2-3 sentences)
3. **Full description**: For dedicated project page (2-3 paragraphs)

Each version should include:
- What the project was
- My specific contribution
- Notable challenges solved
- Impact/results (if applicable)

Tone: [CONCISE/STORY-DRIVEN/RESULTS-FOCUSED/CREATIVE]

Include SEO keywords: [KEYWORDS TO TARGET]`,
    placeholders: [
      "TYPE",
      "ROLE",
      "LIST",
      "DURATION",
      "WHAT I BUILT/DID",
      "OUTCOMES",
      "CONCISE/STORY-DRIVEN/RESULTS-FOCUSED/CREATIVE",
      "KEYWORDS TO TARGET",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "freelancer-consultant",
    categoryId: "portfolio",
    exampleOutput:
      "Three versions of portfolio descriptions from one-liners to full project pages.",
    customizationNotes: [
      "Include visual elements if relevant (screenshots, designs)",
      "Note if this is speculative work vs. paid client work",
      "Mention any awards or recognition received",
    ],
    tags: ["portfolio", "descriptions", "web", "marketing"],
    order: 16,
  },

  {
    id: "before-after-case-study",
    title: "Before/After Case Study Template",
    description: "Create transformation-focused case studies showing your impact.",
    promptText: `Create a before/after case study template for:

Service type: [WHAT I DO]
Project: [SPECIFIC WORK]

**BEFORE (The Problem State):**
What client had before working with me:
- [ISSUE 1]
- [ISSUE 2]
- [ISSUE 3]
Client's emotional state: [FRUSTRATION/PAIN POINTS]

**DURING (The Transformation):**
What we did together:
- [STEP 1]
- [STEP 2]
- [STEP 3]
My unique approach: [DIFFERENTIATION]

**AFTER (The Solution State):**
What client has now:
- [RESULT 1]
- [RESULT 2]
- [RESULT 3]
Client's emotional state: [RELIEF/EXCITEMENT/CONFIDENCE]

Create:
1. **Visual Layout Suggestion**: How to display before/after
2. **Metrics Table**: Quantified improvements
3. **Narrative Version**: Story-form case study
4. **Short Version**: For social media or quick scanning
5. **Testimonial Pull**: Best quote highlighting transformation`,
    placeholders: [
      "WHAT I DO",
      "SPECIFIC WORK",
      "ISSUE 1",
      "ISSUE 2",
      "ISSUE 3",
      "FRUSTRATION/PAIN POINTS",
      "STEP 1",
      "STEP 2",
      "STEP 3",
      "DIFFERENTIATION",
      "RESULT 1",
      "RESULT 2",
      "RESULT 3",
      "RELIEF/EXCITEMENT/CONFIDENCE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "freelancer-consultant",
    categoryId: "portfolio",
    exampleOutput:
      "A transformation-focused case study template with visual layout suggestions and narrative versions.",
    customizationNotes: [
      "Include actual metrics and measurements",
      "Add screenshots or visuals if you have them",
      "Note timeline for the transformation",
    ],
    tags: ["portfolio", "case-study", "before-after", "transformation"],
    order: 17,
  },

  {
    id: "freelancer-testimonial-request-email",
    title: "Testimonial Request Email Generator",
    description: "Request client testimonials effectively and professionally.",
    promptText: `Create testimonial request emails for:

Project type: [SERVICE]
Client relationship: [NEW/LONG-TERM/ONE-OFF]
Project completed: [TIMEFRAME AGO]
Client satisfaction: [I THINK THEY'RE HAPPY/THEY SAID THEY'RE HAPPY]

Client's results from our work:
[OUTCOMES ACHIEVED]

I specifically want them to mention: [THEMES OR POINTS]

Create email options:
1. **Direct Request**: Straightforward ask for testimonial
2. **Guided Request**: With questions to make it easy
3. **Reciprocity Offer**: Offering something in return
4. **LinkedIn Recommendation**: Focus on LinkedIn specifically
5. **Follow-up**: If they don't respond to first request

For each email:
- Compelling subject line
- Personalized approach
- Easy way to respond (questions, link to form, etc.)
- No-pressure close

Include:
- Best timing to send
- How to handle if client wants to review before posting
- What to do if feedback is mixed or negative`,
    placeholders: [
      "SERVICE",
      "NEW/LONG-TERM/ONE-OFF",
      "TIMEFRAME AGO",
      "I THINK THEY'RE HAPPY/THEY SAID THEY'RE HAPPY",
      "OUTCOMES ACHIEVED",
      "THEMES OR POINTS",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "freelancer-consultant",
    categoryId: "portfolio",
    exampleOutput:
      "Multiple testimonial request email templates with different approaches and follow-up strategies.",
    customizationNotes: [
      "Personalize with specific project details",
      "Note if you offered incentive or referral",
      "Include where testimonial will be used",
    ],
    tags: ["testimonials", "portfolio", "reviews", "social-proof"],
    order: 18,
  },

  {
    id: "portfolio-structure-advisor",
    title: "Portfolio Structure & Organization",
    description: "Plan how to organize and present your portfolio effectively.",
    promptText: `Help me structure my portfolio for:

My services: [WHAT I DO]
Primary target clients: [WHO I WANT TO WORK WITH]
My expertise level: [JUNIOR/MID-LEVEL/SENIOR/EXPERT]
Current portfolio state: [NO PORTFOLIO/SOME WORK/COMPREHENSIVE]
My differentiator: [WHAT MAKES ME UNIQUE]

Analyze and recommend:
1. **Portfolio Sections**: What categories to organize work into
2. **Featured Projects**: Which projects should be highlighted first
3. **Case Study Depth**: How detailed each project should be
4. **Information Architecture**: How visitors should navigate
5. **About Section Integration**: How my story connects to work
6. **Services/Products Section**: How to package what I offer
7. **Contact/CTA Strategy**: What action I want visitors to take

Include:
- Portfolio platform recommendations
- How many projects to show
- How to handle confidential/proprietary work
- Work samples vs. case studies balance`,
    placeholders: [
      "WHAT I DO",
      "WHO I WANT TO WORK WITH",
      "JUNIOR/MID-LEVEL/SENIOR/EXPERT",
      "NO PORTFOLIO/SOME WORK/COMPREHENSIVE",
      "WHAT MAKES ME UNIQUE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "freelancer-consultant",
    categoryId: "portfolio",
    exampleOutput:
      "A comprehensive portfolio structure strategy with sections, navigation, and content recommendations.",
    customizationNotes: [
      "List your actual projects if you want specific organization",
      "Note if you have visual vs. non-visual work",
      "Include if you target multiple client types",
    ],
    tags: ["portfolio", "structure", "website", "organization"],
    order: 19,
  },

  {
    id: "spec-work-proposal",
    title: "Spec Work/Portfolio Piece Description",
    description: "Write descriptions for speculative work or personal projects.",
    promptText: `Write a portfolio description for spec/personal work:

Project type: [TYPE]
Purpose: [WHY I CREATED THIS - portfolio piece, learning, passion project]
Not a client project: [CONTEXT - this was self-directed]

What I built/did:
[DESCRIPTION OF WORK]

Skills/technologies demonstrated:
[SKILLS LIST]

Time investment: [HOW LONG]

Create descriptions that:
1. **Show Initiative**: Proves I can direct my own work
2. **Demonstrate Skills**: Shows capabilities I want to be hired for
3. **Solve Real Problems**: Even if speculative, shows problem-solving
4. **Show Passion**: Demonstrates genuine interest

Include:
- How to frame it so it doesn't look like I have no clients
- What to emphasize vs. minimize
- How to connect to client work I want
- Honesty about it being spec work (but framed positively)`,
    placeholders: [
      "TYPE",
      "WHY I CREATED THIS - portfolio piece, learning, passion project",
      "CONTEXT - this was self-directed",
      "DESCRIPTION OF WORK",
      "SKILLS LIST",
      "HOW LONG",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "freelancer-consultant",
    categoryId: "portfolio",
    exampleOutput:
      "A portfolio description for spec work that frames it as initiative, skill demonstration, and passion.",
    customizationNotes: [
      "Connect to client problems this work shows you can solve",
      "Note if this is in an industry you want to specialize in",
      "Mention any positive feedback or interest received",
    ],
    tags: ["portfolio", "spec-work", "personal-projects", "positioning"],
    order: 20,
  },

  // ============================================================================
  // CLIENT COMMUNICATION
  // ============================================================================

  {
    id: "client-update-template",
    title: "Client Status Update Template",
    description: "Create professional, structured client update communications.",
    promptText: `Create client status update templates for:

Project type: [TYPE]
Update frequency: [DAILY/WEEKLY/BIWEEKLY/MONTHLY]
Client preference: [DETAILED/BRIEF/FORMAL/CASUAL]
Project phase: [PHASE]

Create templates for:
1. **On-track Update**: Everything going well
2. **Minor Issue Update**: Small delay or blocker, not critical
3. **Major Issue Update**: Significant problem, needs attention
4. **Milestone Reached**: Completed major phase/deliverable
5. **Off-track Recovery**: Getting back on track after issues

Each template should include:
- Status summary (traffic light system)
- What was accomplished
- What's in progress
- What's next
- Blockers or risks
- Client action needed (if any)
- Next update date

Include:
- Subject line options
- How to handle bad news
- When to send updates (timing)
- Format preferences (email, Slack, dashboard)`,
    placeholders: [
      "TYPE",
      "DAILY/WEEKLY/BIWEEKLY/MONTHLY",
      "DETAILED/BRIEF/FORMAL/CASUAL",
      "PHASE",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "freelancer-consultant",
    categoryId: "client-comms",
    exampleOutput:
      "Multiple client update templates for different scenarios with consistent structure.",
    customizationNotes: [
      "Add your specific client communication tools",
      "Include client timezone considerations",
      "Note how detailed your client prefers updates",
    ],
    tags: ["client-comms", "updates", "project-management", "reporting"],
    order: 21,
  },

  {
    id: "difficult-conversation-scripts",
    title: "Difficult Client Conversation Scripts",
    description: "Prepare for challenging conversations with clients.",
    promptText: `Create scripts for difficult client conversations:

Situation: [DESCRIBE THE DIFFICULTY]
Client relationship: [NEW/LONG-TERM/AT-RISK]
My goal: [WHAT I WANT TO ACHIEVE]

Conversation type scenarios:
1. **Scope creep discussion**: Client wants more than agreed
2. **Late payment discussion**: Overdue invoice
3. **Timeline discussion**: Project will take longer
4. **Feedback pushback**: Client wants changes I disagree with
5. **Project ending**: How to transition or conclude
6. **Price increase**: Raising rates for this client
7. **Firing the client**: Ending the relationship professionally

For each scenario:
- Opening line to set tone
- Key points to make
- Anticipated pushback with responses
- How to keep relationship positive if possible
- When to walk away

Include:
- Best medium (email, call, video, in-person)
- Timing recommendations
- Follow-up actions`,
    placeholders: ["DESCRIBE THE DIFFICULTY", "NEW/LONG-TERM/AT-RISK", "WHAT I WANT TO ACHIEVE"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "freelancer-consultant",
    categoryId: "client-comms",
    exampleOutput:
      "Scripts and strategies for difficult client conversations with conflict resolution techniques.",
    customizationNotes: [
      "Include specific client personality traits",
      "Note your communication style preferences",
      "Mention your leverage in the relationship",
    ],
    tags: ["client-comms", "difficult-conversations", "boundaries", "conflict"],
    order: 22,
  },

  {
    id: "expectation-setting-guide",
    title: "Client Expectation Setting Guide",
    description: "Set clear expectations to prevent misunderstandings.",
    promptText: `Create an expectation-setting framework for:

Service type: [WHAT I PROVIDE]
Common misunderstandings: [WHAT CLIENTS TYPICALLY GET WRONG]
My working style: [COMMUNICATION PREFERENCE, AVAILABILITY]

Create expectations for:
1. **Communication**: Response times, channels, availability
2. **Process**: How we'll work together, checkpoints
3. **Deliverables**: What they'll get, formats, quality level
4. **Timeline**: Realistic estimates, what affects schedule
5. **Revisions**: What's included, what's extra
6. **Collaboration**: Client responsibilities, what I need from them
7. **Payment**: When, how, what happens if late
8. **Boundaries**: Working hours, scope, what I won't do

Provide:
- Onboarding email/overview template
- Expectations document for signature
- Red flags that expectations are misaligned
- How to reset expectations when problems arise`,
    placeholders: [
      "WHAT I PROVIDE",
      "WHAT CLIENTS TYPICALLY GET WRONG",
      "COMMUNICATION PREFERENCE, AVAILABILITY",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "freelancer-consultant",
    categoryId: "client-comms",
    exampleOutput:
      "A comprehensive expectation-setting framework with onboarding templates and reset strategies.",
    customizationNotes: [
      "Include your specific communication tools and hours",
      "Note your minimum engagement requirements",
      "Add any expectations specific to your industry",
    ],
    tags: ["client-comms", "expectations", "onboarding", "boundaries"],
    order: 23,
  },

  {
    id: "feedback-request-framework",
    title: "Client Feedback Request Framework",
    description: "Request and structure client feedback effectively.",
    promptText: `Create a client feedback request system for:

Project type: [TYPE]
Project milestone: [PHASE COMPLETION]
Client satisfaction: [I THINK/HOPE]
My goal: [IMPROVE SERVICES/TESTIMONIAL/BOTH]

Create:
1. **Mid-Project Feedback Check-in**: Catch issues early
2. **End-of-Project Feedback**: Comprehensive review
3. **Ongoing Relationship Feedback**: For long-term clients
4. **Post-Project Reflection**: After client has used results

For each type:
- Timing (when to send)
- Format (survey, call, email)
- Questions to ask (specific, not generic)
- How to frame it (benefit to them)
- What to do with feedback

Include:
- Questions that reveal more than "how was it?"
- How to handle negative feedback constructively
- How to turn feedback into testimonials
- How to show clients you acted on their feedback`,
    placeholders: ["TYPE", "PHASE COMPLETION", "I THINK/HOPE", "IMPROVE SERVICES/TESTIMONIAL/BOTH"],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "freelancer-consultant",
    categoryId: "client-comms",
    exampleOutput:
      "A feedback request system with timing, questions, and action strategies for different project stages.",
    customizationNotes: [
      "Include specific areas you want feedback on",
      "Note your preferred feedback format",
      "Add your vulnerability to constructive criticism",
    ],
    tags: ["client-comms", "feedback", "improvement", "reviews"],
    order: 24,
  },

  {
    id: "client-onboarding-sequence",
    title: "Client Onboarding Email Sequence",
    description: "Create a welcoming, professional client onboarding experience.",
    promptText: `Create a client onboarding sequence for:

Service type: [WHAT I PROVIDE]
Onboarding duration: [HOW LONG]
Client's tech sophistication: [HIGH/MEDIUM/LOW]
My process: [HIGH-TOUCH/LOW-TOUCH/HYBRID]

Create an onboarding email sequence:
1. **Welcome Email**: Project kickoff, excitement, what to expect
2. **Access & Tools Request**: What I need from them (logins, materials)
3. **Process Overview**: How we'll work together
4. **Introduction/Team**: If I work with others (or just me)
5. **First Milestone**: What we're aiming for first
6. **Check-in**: How's onboarding going?

Each email should include:
- Clear subject line
- What they need to do (if anything)
- What happens next
- Timeline/expectations
- How to reach me

Include:
- Onboarding checklist for client
- Welcome packet/table of contents
- How to customize for different client types
- Red flags during onboarding`,
    placeholders: ["WHAT I PROVIDE", "HOW LONG", "HIGH/MEDIUM/LOW", "HIGH-TOUCH/LOW-TOUCH/HYBRID"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "freelancer-consultant",
    categoryId: "client-comms",
    exampleOutput:
      "A professional onboarding email sequence with checklists and customization options.",
    customizationNotes: [
      "Include your specific tools and platforms",
      "Note any client intake forms or questionnaires",
      "Add your communication hours and response times",
    ],
    tags: ["client-comms", "onboarding", "emails", "process"],
    order: 25,
  },

  {
    id: "boundaries-communication",
    title: "Professional Boundaries Communication",
    description: "Communicate and maintain healthy professional boundaries.",
    promptText: `Create communication for setting boundaries with:

Situation: [DESCRIBE BOUNDARY CHALLENGE]
Client type: [FRIENDLY/CASUAL/FORMAL/DEMANDING]
Relationship duration: [NEW/ESTABLISHED/LONG-TERM]

Boundaries to communicate:
1. **Availability Hours**: When I respond vs. don't
2. **Response Time**: Expected turnaround for communications
3. **Scope Creep**: What's included vs. what's additional work
4. **Emergency Contact**: When and how to reach me urgently (if at all)
5. **Personal Time**: Weekends, vacations, boundaries
6. **Communication Channels**: Preferred methods, what I don't use
7. **Decision-making**: What I decide vs. what needs client approval

For each boundary:
- How to communicate it professionally
- When in relationship to mention it
- Script for boundary-setting conversation/email
- How to enforce when crossed
- What to do if client repeatedly violates`,
    placeholders: [
      "DESCRIBE BOUNDARY CHALLENGE",
      "FRIENDLY/CASUAL/FORMAL/DEMANDING",
      "NEW/ESTABLISHED/LONG-TERM",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "freelancer-consultant",
    categoryId: "client-comms",
    exampleOutput:
      "Professional boundary communication scripts with timing and enforcement strategies.",
    customizationNotes: [
      "Be specific about your actual boundaries",
      "Note your communication style preferences",
      "Include your timezone and working hours",
    ],
    tags: ["client-comms", "boundaries", "professional", "availability"],
    order: 26,
  },

  {
    id: "referral-request-templates",
    title: "Referral Request Templates",
    description: "Request client referrals effectively and authentically.",
    promptText: `Create referral request templates for:

Client type: [HAPPY SATISFIED/MIXED/NEW]
Project completed: [TIMEFRAME]
Client's results: [OUTCOMES ACHIEVED]
My referral goal: [SIMILAR CLIENTS/NEW INDUSTRY/ANYONE]

Create templates:
1. **Direct Request**: Straightforward referral ask
2. **Specific Introduction**: Request for specific company or person
3. **Value-First**: Offering value in exchange for referral
4. **Long-Term Client**: Deep relationship referral request
5. **LinkedIn Connection**: Asking to connect and refer
6. **Referral Incentive**: Offering finder's fee or discount
7. **Timing-Based**: After big win or success moment

For each:
- When to send (timing)
- How to frame it (benefit to referrer)
- What to make easy (forwardable email, intro script)
- No-pressure close

Include:
- How to handle if they say no
- How to thank and acknowledge referrals
- How to keep referral pipeline flowing`,
    placeholders: [
      "HAPPY SATISFIED/MIXED/NEW",
      "TIMEFRAME",
      "OUTCOMES ACHIEVED",
      "SIMILAR CLIENTS/NEW INDUSTRY/ANYONE",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "freelancer-consultant",
    categoryId: "client-comms",
    exampleOutput: "Multiple referral request templates with timing and follow-up strategies.",
    customizationNotes: [
      "Personalize with actual client results",
      "Note your ideal client profile",
      "Include your comfort with direct asks",
    ],
    tags: ["client-comms", "referrals", "growth", "networking"],
    order: 27,
  },

  {
    id: "project-completion-handoff",
    title: "Project Completion & Handoff Communication",
    description: "Create professional project closure and transition communications.",
    promptText: `Create project completion communications for:

Project type: [TYPE]
Deliverables: [WHAT WAS DELIVERED]
Client relationship: [ONE-OFF/ONGOING/POTENTIAL ONGOING]
Next steps: [MAINTENANCE/NEW PROJECT/NO FUTURE WORK]

Create communications for:
1. **Delivery Email**: Final deliverables submitted
2. **Completion Summary**: What was accomplished, results achieved
3. **Handoff Documentation**: How client can use/maintain deliverables
4. **Training/Knowledge Transfer**: If client needs to manage things themselves
5. **Project Retrospective**: What went well, lessons learned
6. **Future Work Discussion**: How to broach next steps or ongoing relationship
7. **Appreciation & Testimonial Request**: Thank you + review

Include:
- How to handle final payment
- What happens to files/source materials
- How long I'm available for questions
- How to keep relationship warm without future work commitment`,
    placeholders: [
      "TYPE",
      "WHAT WAS DELIVERED",
      "ONE-OFF/ONGOING/POTENTIAL ONGOING",
      "MAINTENANCE/NEW PROJECT/NO FUTURE WORK",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "freelancer-consultant",
    categoryId: "client-comms",
    exampleOutput:
      "Comprehensive project completion communications with handoff and relationship maintenance strategies.",
    customizationNotes: [
      "Include specific deliverable formats and locations",
      "Note any maintenance or support included",
      "Add your interest in future work with this client",
    ],
    tags: ["client-comms", "project-completion", "handoff", "retention"],
    order: 28,
  },

  // ============================================================================
  // INVOICING & CONTRACTS
  // ============================================================================

  {
    id: "invoice-template-generator",
    title: "Professional Invoice Template",
    description: "Create clear, professional invoices that get paid faster.",
    promptText: `Create an invoice template for:

Business type: [SERVICE/BASED/PRODUCT/HYBRID]
Payment terms: [NET 15/NET 30/UPON RECEIPT/OTHER]
Tax status: [REGISTERED/EXEMPT/NEED TO COLLECT]
My business details: [NAME, ADDRESS, CONTACT]

Invoice should include:
1. **Header**: Professional branding, invoice number, date
2. **Client Details**: Company, contact, billing address
3. **Line Items**: Date, description, quantity, rate, amount
4. **Summary**: Subtotal, tax, total, amount due
5. **Payment Details**: How to pay (bank transfer, methods)
6. **Payment Terms**: When due, late fees
7. **Notes/Terms**: Project reference, thank you, policies
8. **Contact**: Questions/inquiries information

Create:
- Line item descriptions that are clear and approve-able
- Professional language for payment terms
- Late payment policies (if applicable)
- Payment reminder follow-up schedule`,
    placeholders: [
      "SERVICE/BASED/PRODUCT/HYBRID",
      "NET 15/NET 30/UPON RECEIPT/OTHER",
      "REGISTERED/EXEMPT/NEED TO COLLECT",
      "NAME, ADDRESS, CONTACT",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "freelancer-consultant",
    categoryId: "invoicing-contracts",
    exampleOutput:
      "A professional invoice template with clear line items, payment details, and follow-up strategies.",
    customizationNotes: [
      "Include your specific payment methods and details",
      "Add any required tax registration numbers",
      "Note if you use accounting software",
    ],
    tags: ["invoicing", "payment", "templates", "business"],
    order: 29,
  },

  {
    id: "payment-reminder-sequence",
    title: "Payment Reminder Email Sequence",
    description: "Create professional payment follow-up emails that maintain relationships.",
    promptText: `Create a payment reminder email sequence for:

Invoice amount: [AMOUNT]
Payment terms: [NET TERMS]
Invoice date: [DATE]
Due date: [DUE DATE]
Client relationship: [NEW/REGULAR/LONG-TERM]
Client's typical payment: [PROMPT/LATE/MIXED]

Create reminder sequence:
1. **Pre-Due Reminder**: 3-5 days before due date (friendly)
2. **Due Date Notification**: On the day it's due (professional)
3. **Late Reminder 1**: 3-5 days past due (firm but polite)
4. **Late Reminder 2**: 10-14 days past due (escalated)
5. **Final Notice**: 30+ days past due (serious)
6. **Collections/Final Option**: When to escalate

For each email:
- Clear subject line with invoice number
- Professional tone (no guilt or accusation)
- Easy payment link/details
- What happens if not paid
- How to contact if there are issues

Include:
- How to maintain relationship while pursuing payment
- When to stop work on future projects
- How to handle "check is in the mail" responses`,
    placeholders: [
      "AMOUNT",
      "NET TERMS",
      "DATE",
      "DUE DATE",
      "NEW/REGULAR/LONG-TERM",
      "PROMPT/LATE/MIXED",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "freelancer-consultant",
    categoryId: "invoicing-contracts",
    exampleOutput:
      "A professional payment reminder sequence that balances firmness with relationship maintenance.",
    customizationNotes: [
      "Include your specific payment methods",
      "Note any late fees or interest you charge",
      "Add your tolerance for delayed payment",
    ],
    tags: ["invoicing", "payment", "follow-up", "cash-flow"],
    order: 30,
  },

  {
    id: "freelance-contract-template",
    title: "Freelance Contract Template Generator",
    description: "Create comprehensive freelance service contracts.",
    promptText: `DISCLAIMER: This contract template is a starting point. Consult an attorney for final review.

Create a freelance contract for:

Service type: [WHAT I DO]
Project type: [ONE-OFF/RETAINER/MILESTONE-BASED]
Payment structure: [HOURLY/FIXED/RETAINER]
My location: [CITY/STATE]
Typical client location: [WHERE CLIENTS ARE]

Contract sections needed:
1. **Parties**: Who is contracting with whom
2. **Scope of Work**: Detailed description of services
3. **Deliverables**: Specific outputs and acceptance criteria
4. **Timeline**: Schedule, milestones, completion
5. **Payment**: Amount, schedule, late fees, expenses
6. **Revisions**: What's included, what constitutes extra
7. **Client Responsibilities**: What they must provide
8. **Intellectual Property**: Who owns what (work for hire vs. license)
9. **Confidentiality**: Mutual confidentiality obligations
10. **Termination**: How to end, what happens to work/payments
11. **Limitation of Liability**: Cap on liability
12. **Dispute Resolution**: How conflicts are handled
13. **Governing Law**: Which jurisdiction applies
14. **General Provisions**: Entire agreement, severability, amendments

Include attorney review notes for my specific situation.`,
    placeholders: [
      "WHAT I DO",
      "ONE-OFF/RETAINER/MILESTONE-BASED",
      "HOURLY/FIXED/RETAINER",
      "CITY/STATE",
      "WHERE CLIENTS ARE",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "freelancer-consultant",
    categoryId: "invoicing-contracts",
    exampleOutput:
      "A comprehensive freelance contract template with key provisions and attorney review notes.",
    customizationNotes: [
      "Note if you work with international clients",
      "Include specific industry requirements",
      "Add your position on IP ownership",
    ],
    tags: ["contracts", "legal", "templates", "protection"],
    order: 31,
  },

  {
    id: "late-fee-policy",
    title: "Late Fee & Payment Policy Generator",
    description: "Create clear payment policies and late fee structures.",
    promptText: `Create a payment policy for:

Business type: [SERVICE TYPE]
Current late payment issues: [FREQUENT/SOMETIMES/RARELY]
My cash flow needs: [TIGHT/FLEXIBLE]
Client base: [ENTERPRISE/SMB/CONSUMER/MIX]

Policy should cover:
1. **Payment Terms**: When payment is due (Net 15, 30, etc.)
2. **Late Fees**: Specific fees or interest for late payments
3. **Suspension of Work**: When I pause work for non-payment
4. **Upfront Payments**: Deposits or milestone requirements
5. **Payment Methods**: Accepted forms of payment
6. **Currency**: Which currencies I accept
7. **Expense Reimbursement**: How out-of-pocket costs are handled
8. **Payment Plans**: If I offer them for larger projects
9. **Collections**: When and how I pursue unpaid invoices

Create:
- Policy document language for contracts
- Invoice footer language
- New client onboarding explanation
- Scripts to discuss payment issues with clients`,
    placeholders: [
      "SERVICE TYPE",
      "FREQUENT/SOMETIMES/RARELY",
      "TIGHT/FLEXIBLE",
      "ENTERPRISE/SMB/CONSUMER/MIX",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "freelancer-consultant",
    categoryId: "invoicing-contracts",
    exampleOutput:
      "A comprehensive payment policy with late fees, suspension triggers, and communication scripts.",
    customizationNotes: [
      "Check maximum late fee limits in your jurisdiction",
      "Consider client type (enterprise processes are slow)",
      "Note your cash flow tolerance",
    ],
    tags: ["invoicing", "payment", "policy", "cash-flow"],
    order: 32,
  },

  {
    id: "deposit-structure-calculator",
    title: "Deposit & Milestone Payment Calculator",
    description: "Calculate and structure upfront deposits and milestone payments.",
    promptText: `Help me structure deposits and milestone payments for:

Project type: [TYPE]
Total project value: [AMOUNT]
Timeline: [DURATION]
Risk level: [LOW/MEDIUM/HIGH]
Client relationship: [NEW/EXISTING]

Current payment structure:
[IF ANY EXISTING STRUCTURE]

Calculate and recommend:
1. **Deposit Amount**: % upfront and rationale (typically 25-50%)
2. **Milestone Breakdown**: How many payments, when triggered
3. **Milestone Triggers**: What events trigger each payment
4. **Final Payment**: % held until completion and acceptance
5. **Risk Mitigation**: How structure protects both parties
6. **Client Communication**: How to present to client

Options:
- Equal milestone payments
- Front-loaded (more upfront)
- Back-loaded (more at completion)
- Deliverable-based (tied to specific outputs)

Include scripts for presenting this structure to clients.`,
    placeholders: [
      "TYPE",
      "AMOUNT",
      "DURATION",
      "LOW/MEDIUM/HIGH",
      "NEW/EXISTING",
      "IF ANY EXISTING STRUCTURE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "freelancer-consultant",
    categoryId: "invoicing-contracts",
    exampleOutput:
      "A milestone payment structure with deposit recommendations and client communication scripts.",
    customizationNotes: [
      "Consider your cash flow needs",
      "Note if client has payment approval processes",
      "Include your risk tolerance for this project",
    ],
    tags: ["invoicing", "payment", "milestones", "cash-flow"],
    order: 33,
  },

  {
    id: "scope-change-order",
    title: "Scope Change Order Template",
    description: "Create formal change order documents for scope additions.",
    promptText: `Create a scope change order template for:

Service type: [WHAT I DO]
How I handle changes: [INCLUDED IN PRICE/CHARGE EXTRA/DEPENDS]
My typical change process: [FORMAL/CASUAL/AD-HOC]

Change order should include:
1. **Original Scope**: What was originally agreed
2. **Requested Change**: What client wants to add/modify
3. **Impact Assessment**: How this affects timeline, budget, resources
4. **Additional Cost**: Extra fees (if applicable)
5. **Timeline Adjustment**: New completion date (if affected)
6. **Client Approval**: Signature/confirmation required
7. **Revision to SOW**: Formal amendment to scope document

Create:
- Change order document template
- Email to propose change order
- Scripts to discuss changes with client
- How to handle "this should have been included" objections`,
    placeholders: ["WHAT I DO", "INCLUDED IN PRICE/CHARGE EXTRA/DEPENDS", "FORMAL/CASUAL/AD-HOC"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "freelancer-consultant",
    categoryId: "invoicing-contracts",
    exampleOutput:
      "A formal change order template with assessment framework and client communication scripts.",
    customizationNotes: [
      "Include your threshold for what constitutes a change",
      "Note if you have a change budget built in",
      "Add your approach to gray-area requests",
    ],
    tags: ["contracts", "scope", "change-orders", "sow"],
    order: 34,
  },

  {
    id: "contract-review-checklist",
    title: "Client Contract Review Checklist",
    description: "Review client contracts before signing with confidence.",
    promptText: `Create a contract review checklist for client agreements:

Contract type: [MSA/SOW/INDEPENDENT CONTRACTOR/OTHER]
My bargaining power: [STRONG/MEDIUM/WEAK]
Deal importance: [CRITICAL/IMPORTANT/NICE-TO-HAVE]

Create a review checklist covering:
1. **Scope of Work**: Is it clear? Can I actually deliver this?
2. **Payment Terms**: Amount, timing, late fees, kill fees
3. **Timeline & Deadlines**: Realistic? What if I'm late?
4. **Liability**: Am I exposed to unlimited liability? Caps?
5. **Intellectual Property**: Who owns what? Can I use this in portfolio?
6. **Termination**: Can I exit? What happens to payments?
7. **Non-compete/Exclusivity**: Am I restricted from other work?
8. **Indemnification**: Am I indemnifying client?
9. **Dispute Resolution**: Where and how conflicts are resolved
10. **Red Flags**: Unusual or one-sided terms

For each item, provide:
- What to look for
- Green flag vs. red flag examples
- When to push back vs. accept
- Attorney review triggers`,
    placeholders: [
      "MSA/SOW/INDEPENDENT CONTRACTOR/OTHER",
      "STRONG/MEDIUM/WEAK",
      "CRITICAL/IMPORTANT/NICE-TO-HAVE",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "freelancer-consultant",
    categoryId: "invoicing-contracts",
    exampleOutput:
      "A comprehensive contract review checklist with red flag identification and negotiation guidance.",
    customizationNotes: [
      "Include your specific deal-breakers",
      "Note any contract terms you've negotiated before",
      "Add your comfort with legal review costs",
    ],
    tags: ["contracts", "review", "legal", "negotiation"],
    order: 35,
  },
];
