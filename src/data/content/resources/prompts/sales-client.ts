/**
 * Sales & Client Management Prompts
 *
 * PURPOSE: Prompts for sales processes, client communication, and relationship management.
 *
 * DOMAIN: Sales & Client Management
 * CATEGORIES:
 * - Lead Qualification (7 prompts)
 * - Sales Emails (8 prompts)
 * - Proposals & Quotes (7 prompts)
 * - Objection Handling (6 prompts)
 * - Client Meetings (6 prompts)
 * - Nurture Sequences (6 prompts)
 *
 * @see src/types/resources.ts - Prompt type definition
 */

import type { Prompt } from "@/types/resources";

/**
 * Sales & Client Management prompts collection
 *
 * Designed for sales professionals, account managers, and business development
 * professionals focused on conversion and relationship building.
 */
export const salesClientPrompts: Prompt[] = [
  // ============================================================================
  // LEAD QUALIFICATION
  // ============================================================================

  {
    id: "bant-qualification-framework",
    title: "BANT Qualification Framework",
    description: "Qualify leads using Budget, Authority, Need, and Timeline criteria.",
    promptText: `Help me qualify a lead using the BANT framework.

Lead information:
- Name: [CONTACT NAME]
- Company: [COMPANY]
- Industry: [INDUSTRY]
- Company size: [SIZE]
- Source: [HOW THEY FOUND US]
- Initial interest: [WHAT THEY WANT/PROBLEM]

What I know so far:
[WHAT YOU'VE DISCOVERED]

For each BANT element, provide:
1. **Budget**: 3-5 qualifying questions to ask
2. **Authority**: How to identify the decision-maker
3. **Need**: Questions to uncover pain points and urgency
4. **Timeline**: Questions to understand their buying window

Then provide:
- **Qualification Score**: Rate this lead A/B/C/D
- **Next Steps**: Specific actions to advance or disqualify
- **Red Flags**: Warning signs to watch for`,
    placeholders: [
      "CONTACT NAME",
      "COMPANY",
      "INDUSTRY",
      "SIZE",
      "HOW THEY FOUND US",
      "WHAT THEY WANT/PROBLEM",
      "WHAT YOU'VE DISCOVERED",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "sales-client",
    categoryId: "lead-qualification",
    exampleOutput:
      "A structured qualification framework with specific questions for each BANT element, a qualification score, and actionable next steps.",
    customizationNotes: [
      "Adjust questions based on your price point (higher price = more budget rigor)",
      "Add industry-specific budget questions",
      "Include your sales cycle length in timeline questions",
    ],
    tags: ["bant", "qualification", "lead-scoring", "discovery"],
    order: 1,
  },

  {
    id: "meddic-qualification-enterprise",
    title: "MEDDIC Qualification for Enterprise",
    description:
      "Complex enterprise qualification using Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, and Champion.",
    promptText: `Help me qualify an enterprise deal using the MEDDIC framework.

Opportunity:
- Company: [COMPANY]
- Industry: [INDUSTRY]
- Deal size: [VALUE]
- Sales cycle: [TYPICAL LENGTH]
- Contacts involved: [ROLES/NAMES]

What I know:
[CURRENT INFORMATION]

For each MEDDIC element, provide:
1. **Metrics (M)**: Questions to quantify their expected ROI/value
2. **Economic Buyer (E)**: How to find and engage the person with budget authority
3. **Decision Criteria (D)**: Questions to uncover their technical and business requirements
4. **Decision Process (D)**: Questions to map their procurement and approval steps
5. **Identify Pain (I)**: Deep-dive questions to find the compelling business problem
6. **Champion (C)**: How to identify and develop an internal advocate

Provide:
- **Gap Analysis**: What MEDDIC elements are missing
- **Qualified/Not Qualified**: Assessment with reasoning
- **Critical Path**: Actions to close MEDDIC gaps`,
    placeholders: [
      "COMPANY",
      "INDUSTRY",
      "VALUE",
      "TYPICAL LENGTH",
      "ROLES/NAMES",
      "CURRENT INFORMATION",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "sales-client",
    categoryId: "lead-qualification",
    exampleOutput:
      "Enterprise-focused qualification with ROI metrics questions, stakeholder mapping, and a detailed gap analysis for closing the deal.",
    customizationNotes: [
      "Add procurement cycles typical for their industry",
      "Include any compliance/security requirements for their sector",
      "Map the buying committee if you know the organization structure",
    ],
    tags: ["meddic", "enterprise", "complex-sales", "qualification"],
    order: 2,
  },

  {
    id: "discovery-question-bank",
    title: "Discovery Question Bank",
    description: "Generate strategic discovery questions that uncover true needs and pain points.",
    promptText: `Create a discovery question bank for:

Product/Service: [WHAT YOU SELL]
Target role: [DECISION-MAKER ROLE]
Industry: [INDUSTRY]
Typical pain points: [COMMON PROBLEMS YOU SOLVE]

Create questions in these categories:

**1. Opening & Rapport (3-5 questions)**
- Icebreakers that feel natural, not scripted
- Questions to understand their role and context

**2. Current State (5-8 questions)**
- How they're solving the problem now
- What's working and what's not
- Quantifying the impact of current problems

**3. Problem Deep-Dive (5-8 questions)**
- Root cause exploration
- Impact questions (personal, team, company)
- "What have you tried?" follow-ups

**4. Future State & Ideal Outcome (3-5 questions)**
- What success looks like
- Priorities and timeline
- Consequences of inaction

**5. Budget & Decision (4-6 questions)**
- Budget qualification (natural approach)
- Decision-maker identification
- Competitive landscape awareness

**6. Objection Pre-emption (2-3 questions)**
- Surface potential concerns early`,
    placeholders: ["WHAT YOU SELL", "DECISION-MAKER ROLE", "INDUSTRY", "COMMON PROBLEMS YOU SOLVE"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "sales-client",
    categoryId: "lead-qualification",
    exampleOutput:
      "A comprehensive question bank organized by discovery stage, with questions that flow naturally and uncover deep insights.",
    customizationNotes: [
      "Add questions specific to your sales methodology (Challenger, Sandler, etc.)",
      "Include questions that differentiate you from competitors",
      "Remove questions your product usage data can already answer",
    ],
    tags: ["discovery", "questions", "needs-analysis", "pain-points"],
    order: 3,
  },

  {
    id: "lead-scoring-model",
    title: "Lead Scoring Model Builder",
    description: "Create a custom lead scoring model to prioritize your pipeline.",
    promptText: `Help me build a lead scoring model for my business.

Business context:
- Product type: [B2B SAAS/B2B SERVICES/E-COMMERCE/OTHER]
- Price point: [PRICING RANGE]
- Sales cycle: [TYPICAL LENGTH]
- Average deal size: [AVERAGE VALUE]
- Target market: [WHO YOU SELL TO]

My ideal customer profile:
[ICP DESCRIPTION]

Create a scoring model with:

**1. Demographic/Firmographic Scoring**
- Company attributes (size, industry, revenue)
- Contact attributes (role, seniority, department)
- Point values for each

**2. Behavioral Scoring**
- Website actions (visits, page views, time on site)
- Engagement (email opens, content downloads, webinar attendance)
- Intent signals (pricing page views, request demo)
- Point values for each action

**3. Lead Source Scoring**
- Point values by acquisition channel

**4. Negative Scoring (Deductions)**
- Bad fit indicators
- Inactivity penalties
- Disqualifying criteria

**5. Scoring Thresholds**
- What score = ready for sales outreach
- What score = nurture track
- What score = disqualify

Provide the model in a table format.`,
    placeholders: [
      "B2B SAAS/B2B SERVICES/E-COMMERCE/OTHER",
      "PRICING RANGE",
      "TYPICAL LENGTH",
      "AVERAGE VALUE",
      "WHO YOU SELL TO",
      "ICP DESCRIPTION",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "sales-client",
    categoryId: "lead-qualification",
    exampleOutput:
      "A comprehensive lead scoring model with point values for different attributes and behaviors, plus thresholds for sales handoff.",
    customizationNotes: [
      "Base scores on your historical conversion data",
      "Include custom actions specific to your business",
      "Adjust thresholds based on your sales team capacity",
    ],
    tags: ["lead-scoring", "prioritization", "pipeline", "icp"],
    order: 4,
  },

  {
    id: "ideal-customer-profile-builder",
    title: "Ideal Customer Profile Builder",
    description: "Define your ICP based on your best customers and win patterns.",
    promptText: `Help me create or refine my Ideal Customer Profile (ICP).

My business:
- What we sell: [PRODUCT/SERVICE]
- Current pricing: [PRICE RANGE]
- Target market: [BROAD DESCRIPTION]

My best customers (actual data):
[CUSTOMER EXAMPLES - include industries, sizes, roles that buy]

My worst customers (why they were bad):
[BAD FIT EXAMPLES]

Create an ICP with:

**1. Firmographics** (for B2B) or Demographics (for B2C)
- Company size, revenue, industry, growth stage
- OR: Age, income, location, family status, etc.

**2. Technographics**
- Tech stack that indicates good fit
- Tools they likely use

**3. Psychographics**
- Goals, challenges, values, mindset
- Risk tolerance, innovation adoption

**4. Behavioral Indicators**
- Actions that signal readiness to buy
- Content they consume
- Communities they're in

**5. Buying Committee**
- Who's involved in the decision
- Roles and motivations

**6. Disqualifiers**
- Red flags that indicate bad fit

**7. "Will Not Buy" Signals**
- Characteristics of prospects who never convert`,
    placeholders: [
      "PRODUCT/SERVICE",
      "PRICE RANGE",
      "BROAD DESCRIPTION",
      "CUSTOMER EXAMPLES - include industries, sizes, roles that buy",
      "BAD FIT EXAMPLES",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "sales-client",
    categoryId: "lead-qualification",
    exampleOutput:
      "A detailed ICP document with firmographic, technographic, and customer-attitude profiles, plus clear qualification and disqualification criteria.",
    customizationNotes: [
      "Use actual customer data for accuracy",
      "Include input from your customer success team on what makes customers successful",
      "Review won/lost deals for patterns",
    ],
    tags: ["icp", "target-market", "qualification", "customer-fit"],
    order: 5,
  },

  {
    id: "pre-call-research-plan",
    title: "Pre-Call Research Planner",
    description: "Generate a targeted research plan before sales calls for maximum preparation.",
    promptText: `Create a pre-call research plan for an upcoming sales call.

Prospect:
- Name: [PROSPECT NAME]
- Company: [COMPANY]
- Role: [THEIR ROLE]
- LinkedIn: [LINKEDIN URL if available]

Time available for research: [MINUTES]

My goal for the call:
[CALL OBJECTIVE]

Provide a prioritized research checklist:

**Must Research** (do first if time is limited):
1. [ ] 3 specific things to find
2. [ ] 3 specific things to find
3. [ ] 3 specific things to find

**Nice to Have** (if time permits):
1. [ ] Additional research items
2. [ ] Additional research items

**For each research item, include:**
- Where to look (specific sources)
- What to look for (specific signals)
- How to use it in the call (talking points)

**Conversation Starters** based on research:
- 3 personalized openers that reference what you found

**Questions to Ask** based on research:
- 3 informed questions specific to their situation`,
    placeholders: [
      "PROSPECT NAME",
      "COMPANY",
      "THEIR ROLE",
      "LINKEDIN URL if available",
      "MINUTES",
      "CALL OBJECTIVE",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "sales-client",
    categoryId: "lead-qualification",
    exampleOutput:
      "A prioritized research checklist with specific sources, talking points, and personalized questions for the call.",
    customizationNotes: [
      "Adjust based on how much research you typically do",
      "Add your go-to research tools and databases",
      "Include company-specific research (10-K, news, funding)",
    ],
    tags: ["pre-call", "research", "preparation", "discovery"],
    order: 6,
  },

  {
    id: "disqualification-framework",
    title: "Disqualification Framework",
    description: "Identify bad-fit leads early to focus on prospects who will actually buy.",
    promptText: `Create a disqualification framework for my sales process.

My product/service: [WHAT YOU SELL]
Price point: [PRICE RANGE]
Sales cycle length: [TYPICAL LENGTH]
Resources required per deal: [TIME/EFFORT]

My biggest time-wasters (bad prospects I've encountered):
[BAD PROSPECT EXAMPLES]

Create a framework to quickly identify prospects who will NOT buy:

**1. Red Flag Questions** (ask early)
- 5-10 questions that surface disqualifying info
- What each answer reveals about fit

**2. Behavioral Red Flags**
- Actions that indicate low intent
- Warning signs during conversations

**3. Company/Individual Red Flags**
- Firmographic signs of bad fit
- Role/company attributes that predict failure

**4. Budget Red Flags**
- Phrases that indicate no budget
- Questions about pricing that signal wrong fit

**5. "Nice to Have" vs. "Must Have" Detection**
- Questions to determine if you're a priority or a distraction

**6. Polite Disqualification Scripts**
- 3 ways to exit bad-fit conversations gracefully
- How to refer elsewhere when appropriate

**7. When to Persist Anyway**
- Exception cases where red flags might not matter`,
    placeholders: [
      "WHAT YOU SELL",
      "PRICE RANGE",
      "TYPICAL LENGTH",
      "TIME/EFFORT",
      "BAD PROSPECT EXAMPLES",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "sales-client",
    categoryId: "lead-qualification",
    exampleOutput:
      "A framework with red flag questions, behavioral indicators, and graceful exit scripts for disqualifying bad-fit prospects.",
    customizationNotes: [
      "Base this on your actual lost deal reasons",
      "Include input from sales leadership on deal criteria",
      "Consider your capacity - higher prices = more selective",
    ],
    tags: ["disqualification", "focus", "bad-fit", "efficiency"],
    order: 7,
  },

  // ============================================================================
  // SALES EMAILS
  // ============================================================================

  {
    id: "cold-email-prospect",
    title: "Cold Outreach Email",
    description: "Write personalized cold emails that get responses from qualified prospects.",
    promptText: `Write a cold email for the following scenario:

Who I'm emailing:
- Name: [NAME]
- Role: [THEIR ROLE]
- Company: [COMPANY]
- Industry: [INDUSTRY]

Who I am:
- My company: [MY COMPANY]
- What we do: [BRIEF DESCRIPTION]
- My role: [MY ROLE]

How I found them/Connection point:
[RESEARCH FINDING OR MUTUAL CONNECTION]

Their likely pain point:
[PROBLEM THEY PROBABLY HAVE]

My value proposition:
[HOW I HELP]

Write an email that:
1. Has a compelling subject line (under 50 characters)
2. Opens with a personalized hook (not "I hope this finds you well")
3. References specific research or a connection
4. States a clear problem they likely face
5. Offers a simple next step (not a demo request)
6. Is under 150 words
7. Sounds human, not salesy

Tone: [PROFESSIONAL/CASUAL/DIRECT/FRIENDLY]`,
    placeholders: [
      "NAME",
      "THEIR ROLE",
      "COMPANY",
      "INDUSTRY",
      "MY COMPANY",
      "BRIEF DESCRIPTION",
      "MY ROLE",
      "RESEARCH FINDING OR MUTUAL CONNECTION",
      "PROBLEM THEY PROBABLY HAVE",
      "HOW I HELP",
      "PROFESSIONAL/CASUAL/DIRECT/FRIENDLY",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "sales-client",
    categoryId: "sales-emails",
    exampleOutput:
      "A personalized cold email with a compelling subject line, research-based opening, clear value proposition, and low-friction call to action.",
    customizationNotes: [
      "Mention specific metrics or results when possible",
      "Include social proof if relevant (similar companies you've helped)",
      "Test different CTAs (30-min call vs. quick question)",
    ],
    tags: ["cold-email", "outreach", "prospecting", "email"],
    order: 8,
  },

  {
    id: "follow-up-email-sequence",
    title: "Follow-Up Email Sequence",
    description: "Create a multi-touch follow-up sequence that re-engages cold prospects.",
    promptText: `Create a follow-up email sequence for a prospect who hasn't responded.

Context:
- Previous email was about: [TOPIC/VALUE PROPOSITION]
- Sent: [TIME AGO]
- Prospect role: [THEIR ROLE]
- Prospect company: [COMPANY]
- Their likely pain point: [PROBLEM]

My value proposition:
[WHAT I OFFER]

Create a 5-email follow-up sequence:

**Email 1** (2 days later)
- Gentle bump, add new value
- Reference something timely or new

**Email 2** (4 days later)
- Share a relevant resource
- No direct ask, just value

**Email 3** (7 days later)
- Pattern interrupt (different format/angle)
- Challenge their thinking

**Email 4** (14 days later)
- Case study or social proof
- Relevant to their industry/role

**Email 5** (30 days later)
- Break-up email
- Leave door open

Each email should:
- Be under 100 words
- Have a compelling subject line
- Sound like a human, not automation
- Include one clear (low-pressure) CTA`,
    placeholders: [
      "TOPIC/VALUE PROPOSITION",
      "TIME AGO",
      "THEIR ROLE",
      "COMPANY",
      "PROBLEM",
      "WHAT I OFFER",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "sales-client",
    categoryId: "sales-emails",
    exampleOutput:
      "A 5-email follow-up sequence with varied approaches, compelling subject lines, and progressive value adds.",
    customizationNotes: [
      "Space emails based on your sales cycle",
      "Add personalization notes for each email",
      "Include links to your best content in email 2 or 4",
    ],
    tags: ["follow-up", "sequence", "nurture", "email-sequence"],
    order: 9,
  },

  {
    id: "proposal-email",
    title: "Proposal Presentation Email",
    description: "Write an email that accompanies a sales proposal and drives the next step.",
    promptText: `Write an email to present a sales proposal.

Context:
- Prospect name: [NAME]
- Company: [COMPANY]
- Their role: [ROLE]
- We've had: [NUMBER] conversations

Their main challenges discussed:
[CHALLENGE 1]
[CHALLENGE 2]
[CHALLENGE 3]

My proposed solution:
[BRIEF SOLUTION OVERVIEW]

Investment amount: [PRICE]
Timeline: [DURATION]

What I want to happen:
[DESIRED OUTCOME - e.g., schedule review, get approval]

Write an email that:
1. Summarizes their key challenges (shows you listened)
2. Presents the solution briefly
3. Highlights 2-3 things that make this proposal unique
4. States the investment confidently
5. Has a clear next step with a suggested time
6. Creates urgency if appropriate
7. Is under 200 words
8. Includes a clear subject line

Tone: [CONFIDENT/PROFESSIONAL/FRIENDLY/CONSULTATIVE]`,
    placeholders: [
      "NAME",
      "COMPANY",
      "ROLE",
      "NUMBER",
      "CHALLENGE 1",
      "CHALLENGE 2",
      "CHALLENGE 3",
      "BRIEF SOLUTION OVERVIEW",
      "PRICE",
      "DURATION",
      "DESIRED OUTCOME - e.g., schedule review, get approval",
      "CONFIDENT/PROFESSIONAL/FRIENDLY/CONSULTATIVE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "sales-client",
    categoryId: "sales-emails",
    exampleOutput:
      "A professional proposal email that summarizes challenges, presents the solution, and drives toward a clear next step.",
    customizationNotes: [
      "Attach the proposal or link to it",
      "Reference specific conversations or points they made",
      "Include approval deadline if there's urgency",
    ],
    tags: ["proposal", "closing", "presentation", "sales-email"],
    order: 10,
  },

  {
    id: "close-email",
    title: "Deal Closing Email",
    description: "Write the final email to get a prospect across the finish line.",
    promptText: `Write a closing email for a deal that's nearly done.

Context:
- Prospect name: [NAME]
- Company: [COMPANY]
- Deal value: [VALUE]
- They've indicated: [POSITIVE SIGNAL]

What's holding them back:
[OBJECTION OR DELAY]

My proposal/pricing:
[BRIEF DETAILS]

What I need them to do:
[ACTION - sign, approve, etc.]

Write an email that:
1. Acknowledges their progress to date
2. Addresses the remaining concern directly
3. Reinforces the value/case for acting now
4. Creates appropriate urgency without pressure
5. Makes the next step incredibly clear and easy
6. Is under 150 words
7. Has a clear subject line

Tone: [CONFIDENT/HELPFUL/DIRECT/FRIENDLY]`,
    placeholders: [
      "NAME",
      "COMPANY",
      "VALUE",
      "POSITIVE SIGNAL",
      "OBJECTION OR DELAY",
      "BRIEF DETAILS",
      "ACTION - sign, approve, etc.",
      "CONFIDENT/HELPFUL/DIRECT/FRIENDLY",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "sales-client",
    categoryId: "sales-emails",
    exampleOutput:
      "A confident closing email that addresses final objections, reinforces value, and makes the next step clear.",
    customizationNotes: [
      "Include any time-sensitive incentives (pricing, terms)",
      "Reference their stated timeline if they gave one",
      "Consider offering a smaller commitment if appropriate",
    ],
    tags: ["closing", "final-push", "deal-closing", "sales-email"],
    order: 11,
  },

  {
    id: "re-engagement-email",
    title: "Lost Lead Re-Engagement",
    description: "Re-engage prospects who went dark or chose a competitor.",
    promptText: `Write a re-engagement email for a prospect who went dark.

Context:
- Last contact: [TIME AGO]
- Where we left off: [SITUATION]
- Why they went dark: [REASON - if known]
- Prospect role/company: [ROLE] at [COMPANY]

My product/service: [WHAT I SELL]

New developments since we last spoke:
[UPDATES - new features, case studies, etc.]

Write an email that:
1. Acknowledges the gap without guilt-tripping
2. Shares something genuinely new/valuable
3. References their original challenge
4. Asks if timing is better now
5. Is low pressure
6. Under 100 words
7. Has a compelling subject line

Tone: [FRIENDLY/CASUAL/PROFESSIONAL/NO-PRESSURE]`,
    placeholders: [
      "TIME AGO",
      "SITUATION",
      "REASON - if known",
      "ROLE",
      "COMPANY",
      "WHAT I SELL",
      "UPDATES - new features, case studies, etc.",
      "FRIENDLY/CASUAL/PROFESSIONAL/NO-PRESSURE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "sales-client",
    categoryId: "sales-emails",
    exampleOutput:
      "A friendly, low-pressure re-engagement email that shares new value and asks if timing has improved.",
    customizationNotes: [
      "Include specific new developments since you last spoke",
      "Reference something personal if appropriate",
      "Suggest a quick call with no agenda if they're interested",
    ],
    tags: ["re-engagement", "revival", "lost-leads", "email"],
    order: 12,
  },

  {
    id: "referral-request-email",
    title: "Referral Request Email",
    description: "Ask satisfied customers for referrals in a way that feels natural.",
    promptText: `Write a referral request email.

Context:
- Customer name: [NAME]
- Company: [COMPANY]
- How long they've been a customer: [TIME]
- Their results: [SPECIFIC OUTCOMES]

Our relationship:
- [CLOSE/FORMAL/WARM/CASUAL]

What I'm asking for:
- Type of referral: [WHO - e.g., similar companies, specific roles]

Write an email that:
1. Acknowledges their success (with specifics)
2. Expresses appreciation for their business
3. Makes the referral request clear but not pushy
4. Makes it easy (suggests who to think of)
5. Offers to return the favor
6. Is under 100 words
7. Has a warm subject line

Tone: [APPRECIATIVE/FRIENDLY/PROFESSIONAL/WARM]`,
    placeholders: [
      "NAME",
      "COMPANY",
      "TIME",
      "SPECIFIC OUTCOMES",
      "CLOSE/FORMAL/WARM/CASUAL",
      "WHO - e.g., similar companies, specific roles",
      "APPRECIATIVE/FRIENDLY/PROFESSIONAL/WARM",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "sales-client",
    categoryId: "sales-emails",
    exampleOutput:
      "A warm referral request that celebrates the customer success and makes asking feel natural.",
    customizationNotes: [
      "Time this request after a win or success",
      "Be specific about what kind of referral helps most",
      "Offer to make introductions for them too",
    ],
    tags: ["referral", "customer-success", "word-of-mouth", "email"],
    order: 13,
  },

  {
    id: "sales-meeting-request-email",
    title: "Meeting Request Email",
    description: "Write meeting requests that get accepted with clear purpose and value.",
    promptText: `Write a meeting request email.

Who I'm emailing:
- Name: [NAME]
- Role: [ROLE]
- Company: [COMPANY]
- How we connected: [SOURCE/CONTEXT]

My goal for the meeting:
[OBJECTIVE]

What they'll get out of it:
[VALUE FOR THEM]

Meeting details I'm proposing:
- Duration: [MINUTES]
- Format: [VIDEO CALL/IN-PERSON/PHONE]
- My availability: [TIMES/TIMEZONE]

Write an email that:
1. States the meeting purpose clearly
2. Explains why them specifically
3. Shows respect for their time
4. Suggests specific times (not "whenever works")
5. Provides calendar link if appropriate
6. Is under 75 words
7. Has a clear, action-oriented subject line

Tone: [PROFESSIONAL/DIRECT/FRIENDLY/FLEXIBLE]`,
    placeholders: [
      "NAME",
      "ROLE",
      "COMPANY",
      "SOURCE/CONTEXT",
      "OBJECTIVE",
      "VALUE FOR THEM",
      "MINUTES",
      "VIDEO CALL/IN-PERSON/PHONE",
      "TIMES/TIMEZONE",
      "PROFESSIONAL/DIRECT/FRIENDLY/FLEXIBLE",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "sales-client",
    categoryId: "sales-emails",
    exampleOutput:
      "A clear, respectful meeting request with specific time options and a compelling reason to meet.",
    customizationNotes: [
      "Include a calendar link for easy scheduling",
      "Suggest fewer times if you want them to pick",
      "Reference mutual connections if applicable",
    ],
    tags: ["meeting-request", "scheduling", "outreach", "email"],
    order: 14,
  },

  {
    id: "value-add-email",
    title: "Value-Add Nurture Email",
    description: "Send non-promotional value to stay top-of-mind without selling.",
    promptText: `Write a value-add email with no sales pitch.

Recipient:
- Name: [NAME]
- Role: [ROLE]
- Industry: [INDUSTRY]
- Their interests/challenges: [TOPICS]

Content I'm sharing:
[WHAT - article, report, insight, etc.]

Why it matters to them:
[RELEVANCE]

Write an email that:
1. Has a helpful, non-salesy subject line
2. Opens with a brief, personal check-in
3. Shares the content with context on why it matters
4. Adds your own insight (2-3 sentences)
5. NO sales pitch or CTA
6. Invites them to reply if interested
7. Is under 100 words

Tone: [HELPFUL/CASUAL/FRIENDLY/INFORMATIVE]`,
    placeholders: [
      "NAME",
      "ROLE",
      "INDUSTRY",
      "TOPICS",
      "WHAT - article, report, insight, etc.",
      "RELEVANCE",
      "HELPFUL/CASUAL/FRIENDLY/INFORMATIVE",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "sales-client",
    categoryId: "sales-emails",
    exampleOutput:
      "A genuinely helpful email that shares valuable content without any sales pressure.",
    customizationNotes: [
      "Only send content that's truly valuable",
      "Personalize with your take on why it matters",
      "Use these to maintain relationships with long-cycle prospects",
    ],
    tags: ["value-add", "nurture", "no-pitch", "helpful"],
    order: 15,
  },

  // ============================================================================
  // PROPOSALS & QUOTES
  // ============================================================================

  {
    id: "sales-proposal-template",
    title: "Sales Proposal Template",
    description: "Create a comprehensive sales proposal structure that converts.",
    promptText: `Create a sales proposal template for:

Product/service: [WHAT YOU SELL]
Industry: [INDUSTRY]
Typical deal size: [PRICE RANGE]
My competitive advantage: [DIFFERENTIATION]

Client context:
- Company: [CLIENT COMPANY]
- Industry: [INDUSTRY]
- Size: [SIZE]
- Main challenges: [PAIN POINTS]
- Goals: [OBJECTIVES]

Create a proposal structure with:

**1. Executive Summary** (1 page)
- Compelling overview
- Understanding of their situation
- Clear recommendation

**2. Problem Statement**
- Their current challenges (in their words)
- Impact of doing nothing
- Quantify the cost of inaction

**3. Proposed Solution**
- Your approach
- Why this solution
- How it addresses their specific challenges

**4. Scope of Work/Deliverables**
- Specific what's included
- Timeline with milestones
- Clear boundaries

**5. Investment**
- Pricing presentation (not just a number)
- Options if appropriate
- Payment terms

**6. Why [Your Company]**
- Differentiation vs. alternatives
- Relevant experience/case studies
- Team credentials

**7. Next Steps**
- Clear path forward
- Timeline for decision
- What you need from them`,
    placeholders: [
      "WHAT YOU SELL",
      "INDUSTRY",
      "PRICE RANGE",
      "DIFFERENTIATION",
      "CLIENT COMPANY",
      "INDUSTRY",
      "SIZE",
      "PAIN POINTS",
      "OBJECTIVES",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "sales-client",
    categoryId: "proposals-quotes",
    exampleOutput:
      "A comprehensive proposal structure with executive summary, problem statement, solution overview, and clear next steps.",
    customizationNotes: [
      "Include your actual branding/formatting",
      "Add client logo and specific references",
      "Attach relevant case studies as appendices",
    ],
    tags: ["proposal", "sales-proposal", "template", "closing"],
    order: 16,
  },

  {
    id: "pricing-presentation",
    title: "Pricing Presentation Strategy",
    description: "Present pricing in a way that focuses on value, not cost.",
    promptText: `Create a pricing presentation strategy for:

My product/service: [WHAT YOU SELL]
Price point: [AMOUNT]
Competitor pricing: [CONTEXT - higher/lower/similar]

Client situation:
- Budget range: [THEIR BUDGET]
- Main objection concern: [PRICE/OBJECTING TO COST]
- Value they'll receive: [OUTCOMES]

Create a pricing presentation that:

**1. Anchors Value First**
- How to present ROI before price
- Quantified outcomes (time savings, revenue impact, cost reduction)
- Social proof of value delivered

**2. Contextualizes the Price**
- Cost of inaction / status quo
- Price compared to value received
- Breakdown that makes sense (per day, per user, per outcome)

**3. Offers Options (if appropriate)**
- Good/Better/Best structure
- What each option includes/excludes
- How to guide them to the right choice

**4. Addresses Price Objections**
- Responses to "it's too expensive"
- Responses to "we need to think about it"
- Responses to competitor pricing comparisons

**5. Creates Scarcity/Urgency**
- Limited-time incentives
- Implementation capacity limits
- Price increase timing`,
    placeholders: [
      "WHAT YOU SELL",
      "AMOUNT",
      "CONTEXT - higher/lower/similar",
      "THEIR BUDGET",
      "PRICE/OBJECTING TO COST",
      "OUTCOMES",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "sales-client",
    categoryId: "proposals-quotes",
    exampleOutput:
      "A pricing presentation strategy that anchors on value, contextualizes cost, and handles price objections confidently.",
    customizationNotes: [
      "Use actual ROI metrics from your customers",
      "Include payment terms options",
      "Add any time-sensitive incentives if real",
    ],
    tags: ["pricing", "value-selling", "roi", "objections"],
    order: 17,
  },

  {
    id: "quote-generator",
    title: "Professional Quote Generator",
    description: "Create clear, professional quotes that clients understand and accept.",
    promptText: `Create a professional quote for:

Product/service: [WHAT YOU'RE QUOTING]
Client: [COMPANY/NAME]
Project type: [ONE-TIME/ONGOING/SUBSCRIPTION]

Quote details:
- Line items: [WHAT YOU'RE PROVIDING]
- Quantities: [AMOUNTS]
- Unit prices: [PRICES]
- Total value: [TOTAL]

Terms to include:
- Payment terms: [e.g., 50% deposit, net 30]
- Validity period: [HOW LONG QUOTE IS GOOD]
- Delivery timeline: [WHEN THEY'LL GET IT]
- What's included/excluded: [SCOPE NOTES]

Create a quote format with:

**1. Header**
- Your branding
- Quote number and date
- Client details

**2. Line Items Table**
- Item description
- Quantity
- Unit price
- Extended price
- Clear totals

**3. Terms and Conditions**
- Payment terms
- Delivery timeline
- What's included
- Exclusions/scope boundaries
- Quote expiration

**4. Acceptance Section**
- Signature area
- Acceptance deadline
- Next steps after acceptance`,
    placeholders: [
      "WHAT YOU'RE QUOTING",
      "COMPANY/NAME",
      "ONE-TIME/ONGOING/SUBSCRIPTION",
      "WHAT YOU'RE PROVIDING",
      "AMOUNTS",
      "PRICES",
      "TOTAL",
      "e.g., 50% deposit, net 30",
      "HOW LONG QUOTE IS GOOD",
      "WHEN THEY'LL GET IT",
      "SCOPE NOTES",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "sales-client",
    categoryId: "proposals-quotes",
    exampleOutput:
      "A clear, professional quote format with line items, terms, and an acceptance section.",
    customizationNotes: [
      "Include your actual legal terms",
      "Add your company logo and branding",
      "Reference any attached scope documents",
    ],
    tags: ["quote", "pricing", "invoice", "format"],
    order: 18,
  },

  {
    id: "sow-document-generator",
    title: "Statement of Work Generator",
    description: "Create detailed SOWs that prevent scope creep and misalignment.",
    promptText: `Create a Statement of Work document for:

Project: [PROJECT TYPE]
Client: [COMPANY NAME]
Duration: [TIMELINE]
Total investment: [AMOUNT]

Project overview:
[WHAT YOU'RE DOING AND WHY]

Deliverables:
[WHAT CLIENT WILL RECEIVE]

Create an SOW with:

**1. Project Overview**
- Objectives
- Scope summary
- Success criteria

**2. Detailed Scope**
- Inclusions (specific deliverables)
- Exclusions (what's explicitly NOT included)
- Assumptions (what you're assuming is true)

**3. Deliverables**
- Specific outputs with descriptions
- Acceptance criteria for each
- Delivery dates/milestones

**4. Timeline**
- Project phases
- Key milestones
- Dependencies

**5. Client Responsibilities**
- What client must provide
- Access needed (systems, data, people)
- Approval requirements
- Response time expectations

**6. Project Team**
- Your team members and roles
- Client team members and roles

**7. Communication**
- Meeting schedule
- Reporting frequency
- Status update format

**8. Change Management**
- How scope changes are handled
- Change request process
- Impact on timeline/budget

**9. Terms**
- Payment schedule
- Revision rounds included
- Cancellation policy

**10. Signatures**
- Authorization area
- Date`,
    placeholders: [
      "PROJECT TYPE",
      "COMPANY NAME",
      "TIMELINE",
      "AMOUNT",
      "WHAT YOU'RE DOING AND WHY",
      "WHAT CLIENT WILL RECEIVE",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "sales-client",
    categoryId: "proposals-quotes",
    exampleOutput:
      "A comprehensive SOW document with clear scope boundaries, client responsibilities, and change management procedures.",
    customizationNotes: [
      "Include your actual legal terms",
      "Add industry-specific exclusions based on experience",
      "Attach this as part of your master agreement",
    ],
    tags: ["sow", "scope", "contract", "deliverables"],
    order: 19,
  },

  {
    id: "proposal-follow-up-email",
    title: "Proposal Follow-Up Strategy",
    description: "Create a follow-up sequence after sending a proposal to drive decisions.",
    promptText: `Create a proposal follow-up strategy for:

Proposal sent: [TIME AGO]
Deal value: [AMOUNT]
Client: [COMPANY NAME]
Decision-maker: [CONTACT NAME]

Their situation:
- Budget: [BUDGET STATUS]
- Timeline: [THEIR TIMELINE]
- Competitors: [ANY OTHER OPTIONS]

My proposal:
- Price: [MY PRICE]
- Key differentiator: [WHY ME]

Create a follow-up sequence:

**Day 2-3: Just Checking In**
- Quick email confirming receipt
- Ask if they need anything
- Offer to clarify any questions

**Day 5-7: Value Reinforcement**
- Case study or testimonial
- Relevant to their specific situation
- No direct ask, just value

**Day 10-14: Gentle Nudge**
- Ask for decision timeline
- Offer to discuss concerns
- Reference their stated timeline

**Day 21: Pattern Interrupt**
- Different approach or format
- Address a specific concern they raised
- Offer a compromise if appropriate

**Day 30: Break-Up or Last Push**
- Is this still a priority?
- Offer to close file if not
- Leave door open

For each touch, provide:
- Email template
- Timing
- Objective`,
    placeholders: [
      "TIME AGO",
      "AMOUNT",
      "COMPANY NAME",
      "CONTACT NAME",
      "BUDGET STATUS",
      "THEIR TIMELINE",
      "ANY OTHER OPTIONS",
      "MY PRICE",
      "WHY ME",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "sales-client",
    categoryId: "proposals-quotes",
    exampleOutput:
      "A strategic follow-up sequence with timed emails and clear objectives for moving the proposal forward.",
    customizationNotes: [
      "Adjust timing based on their decision cycle",
      "Add personal touches based on your relationship",
      "Shorten cycle if there's urgency",
    ],
    tags: ["follow-up", "proposal", "closing", "sequence"],
    order: 20,
  },

  {
    id: "alternative-options-proposal",
    title: "Alternative Options Presentation",
    description:
      "Present multiple options to give prospects choice while guiding them to the right one.",
    promptText: `Create a proposal with multiple options for:

Product/service: [WHAT YOU SELL]
Client: [COMPANY]
Their budget: [BUDGET RANGE]
Their needs: [WHAT THEY NEED]

My core offering: [STANDARD SCOPE]

Create 3 options:

**Option 1: Good [Entry Level]**
- What's included (basic but valuable)
- Price: [LOWER PRICE]
- Best for: [WHO THIS FITS]
- Trade-offs: [WHAT THEY DON'T GET]

**Option 2: Better [Recommended]**
- What's included (optimal value)
- Price: [MID PRICE]
- Best for: [WHO THIS FITS]
- Why recommended: [REASONING]

**Option 3: Best [Premium]**
- What's included (comprehensive)
- Price: [HIGHER PRICE]
- Best for: [WHO THIS FITS]
- Premium value: [WHAT MAKES IT WORTH IT]

For each option:
- Clear deliverables list
- Timeline differences
- Support/service level differences

Then provide:
- How to present options (script/talking points)
- How to guide them to Option 2
- How to handle "I just want the cheapest"`,
    placeholders: [
      "WHAT YOU SELL",
      "COMPANY",
      "BUDGET RANGE",
      "WHAT THEY NEED",
      "STANDARD SCOPE",
      "LOWER PRICE",
      "WHO THIS FITS",
      "WHAT THEY DON'T GET",
      "MID PRICE",
      "WHO THIS FITS",
      "REASONING",
      "HIGHER PRICE",
      "WHO THIS FITS",
      "WHAT MAKES IT WORTH IT",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "sales-client",
    categoryId: "proposals-quotes",
    exampleOutput:
      "A three-option proposal structure that gives prospects choice while guiding them to the optimal solution.",
    customizationNotes: [
      "Make Option 2 genuinely the best value, not just the middle",
      "Ensure each option is complete (not a crippled version)",
      "Use this to upsell or downsell based on budget",
    ],
    tags: ["options", "pricing", "upselling", "proposal"],
    order: 21,
  },

  {
    id: "sales-proposal-objection-handler",
    title: "Proposal Objection Responses",
    description: "Prepare responses to common proposal objections and concerns.",
    promptText: `Help me prepare responses to proposal objections.

My proposal:
- Product/service: [WHAT I SELL]
- Price: [AMOUNT]
- Timeline: [DURATION]
- My company: [MY COMPANY]

Client context:
- Industry: [INDUSTRY]
- Company size: [SIZE]
- Budget constraints: [ANY KNOWN LIMITS]

For each objection, provide:

**1. "Your price is too high"**
- Empathetic response
- Value reframing questions
- ROI justification approach
- Alternative options if appropriate

**2. "We need to think about it"**
- Response that uncovers real concern
- Questions to understand hesitation
- Creating decision urgency
- Next step to maintain momentum

**3. "We're going with a competitor"**
- Response that doesn't sound defensive
- Discovery questions about their choice
- Differentiation reinforcement
- Door left open for future

**4. "This is more than we budgeted"**
- Understanding their budget process
- Scope adjustment options
- Payment term alternatives
- Phased approach possibilities

**5. "We need to get approval from [other person]"**
- Helping them navigate internally
- What they need from you
- Creating tools for them to sell internally
- Following up without nagging

For each, provide:
- What to say (script)
- What questions to ask
- What to avoid saying`,
    placeholders: [
      "WHAT I SELL",
      "AMOUNT",
      "DURATION",
      "MY COMPANY",
      "INDUSTRY",
      "SIZE",
      "ANY KNOWN LIMITS",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "sales-client",
    categoryId: "proposals-quotes",
    exampleOutput:
      "Prepared responses to common proposal objections with scripts, questions, and approaches to move the deal forward.",
    customizationNotes: [
      "Add your actual competitor names for specific differentiation",
      "Include your unique selling points in responses",
      "Add your real payment flexibility options",
    ],
    tags: ["objections", "handling-concerns", "negotiation", "proposal"],
    order: 22,
  },

  // ============================================================================
  // OBJECTION HANDLING
  // ============================================================================

  {
    id: "price-objection-framework",
    title: "Price Objection Framework",
    description: 'Handle "it is too expensive" objections with confidence and value.',
    promptText: `Create a framework for handling price objections.

My product/service: [WHAT I SELL]
My price point: [PRICE RANGE]
Typical competitor pricing: [CONTEXT]
My key differentiators: [WHAT MAKES ME WORTH IT]

Create a response framework with:

**Phase 1: Understand**
- Questions to ask before responding
- What "too expensive" might really mean
- How to uncover the real concern

**Phase 2: Empathize and Pivot**
- Acknowledgment scripts
- Moving from price to value
- Reframing the conversation

**Phase 3: Value Justification**
- How to present ROI
- Quantifying the cost of inaction
- Social proof and case studies
- Comparison to alternatives (including doing nothing)

**Phase 4: Options and Alternatives**
- When to offer alternatives
- Scope adjustments
- Payment term flexibility
- Phased or pilot approaches

**Phase 5: Confidence and Close**
- Standing firm on value
- When to walk away
- Signs it's a real budget constraint vs. a negotiation tactic

Include:
- 5 specific response scripts
- Questions to ask in each scenario
- What NOT to say`,
    placeholders: ["WHAT I SELL", "PRICE RANGE", "CONTEXT", "WHAT MAKES ME WORTH IT"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "sales-client",
    categoryId: "objection-handling",
    exampleOutput:
      "A comprehensive framework for handling price objections with specific scripts and approaches.",
    customizationNotes: [
      "Include your actual ROI metrics and case studies",
      "Add your real payment flexibility",
      "Reference specific competitors by name if helpful",
    ],
    tags: ["price-objections", "value-selling", "negotiation", "roi"],
    order: 23,
  },

  {
    id: "timing-objection-handler",
    title: "Timing Objection Handler",
    description: 'Handle "not right now" objections and create urgency ethically.',
    promptText: `Create a framework for handling timing objections.

My product/service: [WHAT I SELL]
Typical sales cycle: [DURATION]
My price point: [PRICE RANGE]

Common timing objections:
- "Not until next quarter"
- "We're too busy right now"
- "Let's revisit this in a few months"
- "We need to finish [other project] first"

For each objection, provide:

**1. Diagnosis Questions**
- What to ask to understand the real delay
- Whether it's genuine or a soft no
- What would need to change for timing to work

**2. Response Framework**
- Acknowledge and validate
- Uncover the cost of delay
- Create urgency without pressure
- Find alternatives that work for their timeline

**3. Cost of Delay Analysis**
- Questions to quantify waiting
- What they lose by not starting now
- What problems continue or worsen

**4. Alternative Approaches**
- Phased implementation
- Pilot or trial
- Planning/consulting now, implementation later
- Reserving capacity

**5. Maintaining Momentum**
- How to stay in touch without being annoying
- What sends as value during the delay
- How to re-engage when timing is better`,
    placeholders: ["WHAT I SELL", "DURATION", "PRICE RANGE"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "sales-client",
    categoryId: "objection-handling",
    exampleOutput:
      "A framework for handling timing objections with diagnostic questions, cost-of-delay analysis, and alternative approaches.",
    customizationNotes: [
      "Add your actual capacity constraints if real",
      "Include any seasonal factors in your business",
      "Reference actual consequences of delay for your customers",
    ],
    tags: ["timing", "urgency", "objections", "delay"],
    order: 24,
  },

  {
    id: "competitor-objection-response",
    title: "Competitor Comparison Response",
    description: "Handle competitor mentions without sounding defensive or dismissive.",
    promptText: `Create responses for when prospects mention competitors.

My product/service: [WHAT I SELL]
My main competitors: [COMPETITOR NAMES]
My key advantages: [DIFFERENTIATORS]

Scenarios:

**1. "We're also looking at [Competitor]"**
- How to respond confidently
- Questions to understand what they like about them
- How to differentiate without trash-talking
- Finding your comparative advantages

**2. "[Competitor] is cheaper than you"**
- Acknowledging the price difference
- Explaining the value difference
- What they get with you that they don't
- When cheaper isn't better

**3. "[Competitor] offered [specific feature]"**
- How to handle feature comparisons
- When you don't have that feature
- Alternative approaches to the same problem
- Features vs. outcomes focus

**4. "We've used [Competitor] before"**
- Understanding their experience
- Why they're considering switching
- Making the switch easy
- Learning from their past experience

**5. "Why should we choose you over [Competitor]?"**
- Direct, confident differentiation
- Your unique advantages
- Risk reduction
- Proof of results

For each scenario:
- Response script
- Questions to ask
- What to avoid saying`,
    placeholders: ["WHAT I SELL", "COMPETITOR NAMES", "DIFFERENTIATORS"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "sales-client",
    categoryId: "objection-handling",
    exampleOutput:
      "Confident responses to competitor mentions that differentiate without being defensive.",
    customizationNotes: [
      "Know your actual competitors' strengths and weaknesses",
      "Have specific case studies of customers who switched from them",
      "Focus on outcomes, not feature lists",
    ],
    tags: ["competitors", "comparison", "differentiation", "objections"],
    order: 25,
  },

  {
    id: "budget-concern-handler",
    title: "Budget Concern Response Framework",
    description: "Navigate limited budget situations without discounting prematurely.",
    promptText: `Create a framework for handling budget constraints.

My product/service: [WHAT I SELL]
My price: [PRICE POINT]
My minimum viable price: [BOTTOM LINE - keep honest]

Create approaches for:

**1. Discovery Phase**
- Questions to understand real budget constraints
- Whether budget exists but is allocated elsewhere
- Who controls the budget
- Budget cycle timing

**2. Value Before Discounting**
- Quantifying ROI to justify budget
- Finding budget elsewhere in the organization
- Making the business case for them to take to leadership
- Cost of not solving the problem

**3. Alternatives to Discounting**
- Scope reduction (what to remove)
- Phased approach (start smaller)
- Payment terms (longer, installments)
- Timing (start later, pay later)
- Removing non-essential features

**4. When to Discount (and How)**
- Rules for when discounting makes sense
- How to discount without devaluing
- Getting something in return (case study, longer term, referral)
- One-time vs. ongoing discounts

**5. Polite Refusal**
- When to walk away
- How to say no gracefully
- Leaving door open for future
- Referring to alternatives

Include:
- Specific scripts for each scenario
- Questions to ask
- Red flags that indicate it won't work regardless of price`,
    placeholders: ["WHAT I SELL", "PRICE POINT", "BOTTOM LINE - keep honest"],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "sales-client",
    categoryId: "objection-handling",
    exampleOutput:
      "A comprehensive budget handling framework with scripts for discovery, alternatives, and when to walk away.",
    customizationNotes: [
      "Know your actual floor price",
      "Understand your company's discount policy",
      "Have real alternatives to offer",
    ],
    tags: ["budget", "pricing", "discounting", "negotiation"],
    order: 26,
  },

  {
    id: "authority-objection-handler",
    title: "Authority/Decision Objection Handler",
    description: 'Navigate "I need to talk to my boss/partner" situations.',
    promptText: `Create a framework for handling authority objections.

When they say:
- "I need to talk to my boss/partner"
- "I'm not the decision-maker"
- "We need to get committee approval"
- "Let me run this by [other person]"

Create approaches for:

**1. Understanding the Decision**
- Questions to map the decision process
- Who else needs to be involved
- What the decision process looks like
- Timeline for a decision

**2. Becoming an Ally**
- How to help them sell internally
- What materials they need
- How to position them as the hero
- Anticipating questions they'll face

**3. Multi-Stakeholder Sales**
- Getting others involved in the conversation
- Adapting your message for different roles
- Finding your champion
- Navigating committee decisions

**4. Maintaining Momentum**
- How to follow up without nagging
- What sends as value during their internal process
- How to stay top of mind
- Respecting their process while moving forward

**5. When It's an Excuse**
- Signs it's not really about authority
- How to gently test
- Uncovering the real objection
- When to disengage

Include:
- Scripts for each scenario
- Questions to identify real vs. surface-level authority objections
- Tools to help them sell internally`,
    placeholders: [],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "sales-client",
    categoryId: "objection-handling",
    exampleOutput:
      "A framework for navigating authority objections with scripts to help prospects sell internally.",
    customizationNotes: [
      "Create actual one-pagers for internal selling",
      "Have case studies relevant to different stakeholders",
      "Know your typical approval cycles in their industry",
    ],
    tags: ["authority", "decision-maker", "approval", "stakeholders"],
    order: 27,
  },

  {
    id: "risk-objection-framework",
    title: "Risk Objection Response Framework",
    description: 'Address concerns about risk, implementation, and "what if it does not work."',
    promptText: `Create a framework for handling risk objections.

My product/service: [WHAT YOU SELL]
My company: [MY COMPANY]
How long we've been in business: [YEARS]
Client success rate: [METRIC IF YOU HAVE IT]

Common risk concerns:
- "What if it doesn't work for us?"
- "We're worried about implementation time/complexity"
- "We've been burned before"
- "What if we need to cancel?"
- "Is this going to require a lot of our time?"

For each concern, provide:

**1. Understanding the Specific Fear**
- Questions to dig deeper
- Past experiences that created the concern
- What "risk" looks like to them

**2. Proof and Evidence**
- Relevant case studies
- Testimonials from similar situations
- Success metrics and guarantees
- Trial/pilot options

**3. Risk Mitigation**
- Implementation support
- Onboarding process
- What happens if things go wrong
- Exit/cancellation terms

**4. Implementation Realism**
- Honest time investment required
- What you handle vs. what they handle
- Past implementation examples
- Realistic timeline

**5. Getting Started Safely**
- Pilot programs
- phased rollouts
- Money-back guarantees
- Low-risk ways to begin

Include:
- Scripts for each concern type
- How to share relevant proof
- When guarantees make sense`,
    placeholders: ["WHAT YOU SELL", "MY COMPANY", "YEARS", "METRIC IF YOU HAVE IT"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "sales-client",
    categoryId: "objection-handling",
    exampleOutput:
      "A framework for addressing risk concerns with proof, mitigation strategies, and safe ways to get started.",
    customizationNotes: [
      "Use actual case studies from similar clients",
      "Be honest about implementation - don't oversell ease",
      "Know your actual guarantee terms",
    ],
    tags: ["risk", "implementation", "guarantees", "concerns"],
    order: 28,
  },

  // ============================================================================
  // CLIENT MEETINGS
  // ============================================================================

  {
    id: "discovery-call-agenda",
    title: "Discovery Call Agenda",
    description: "Structure discovery calls to uncover needs and build rapport.",
    promptText: `Create a discovery call agenda and script.

Meeting details:
- Duration: [MINUTES]
- Prospect: [NAME] at [COMPANY]
- Their role: [ROLE]
- What I know going in: [CONTEXT]

My goal for the call:
[PRIMARY OBJECTIVE]

Create a call structure with:

**1. Opening (5 minutes)**
- Rapport building questions
- Small talk that feels natural
- Setting agenda for the call
- Confirming time

**2. Their Context (10 minutes)**
- Questions to understand their situation
- Their role and responsibilities
- Current state of [PROBLEM AREA]

**3. Problem Deep-Dive (15 minutes)**
- Discovery questions for pain points
- Impact exploration
- What they've tried before
- Quantifying the problem

**4. Solution Exploration (10 minutes)**
- Their ideal outcome
- What success looks like
- Timeline and priorities
- Budget/process questions

**5. My Value Proposition (5-10 minutes)**
- Brief overview of how I help
- Relevant experience/case studies
- Not a full pitch - just enough to intrigue

**6. Next Steps (5 minutes)**
- Clear next step if there's fit
- What I'll send them
- When we'll talk next

For each section:
- Specific questions to ask
- What to listen for
- Red flags to note`,
    placeholders: [
      "MINUTES",
      "NAME",
      "COMPANY",
      "ROLE",
      "CONTEXT",
      "PRIMARY OBJECTIVE",
      "PROBLEM AREA",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "sales-client",
    categoryId: "client-meetings",
    exampleOutput:
      "A structured discovery call agenda with specific questions for each stage and clear next steps.",
    customizationNotes: [
      "Adjust time allocation based on call length",
      "Add industry-specific discovery questions",
      "Include your value proposition talking points",
    ],
    tags: ["discovery", "agenda", "sales-call", "questions"],
    order: 29,
  },

  {
    id: "demo-script-structure",
    title: "Demo/Presentation Script",
    description: "Structure product demos that connect features to prospect needs.",
    promptText: `Create a demo/presentation script structure.

My product/service: [WHAT YOU SELL]
Prospect: [NAME] at [COMPANY]
Their main challenges: [PAIN POINTS]
Their role: [ROLE]
Demo duration: [MINUTES]

Key features to show:
[FEATURE 1]
[FEATURE 2]
[FEATURE 3]

Create a demo structure with:

**1. Setup & Confirmation (5 minutes)**
- Reconfirm their challenges
- Set expectations for the demo
- Ask what's most important to see

**2. Context Setting (3 minutes)**
- Set up the scenario/use case
- Connect to their specific situation
- "Here's what we're going to look at..."

**3. Feature Demonstrations**
For each feature:
- Problem it solves
- How it works (brief demo)
- Benefit to them specifically
- Check for understanding

**4. Their Use Case (10 minutes)**
- "Show me how this would work for..."
- Let them drive or direct
- Customize to their scenario

**5. Objections & Questions (10 minutes)**
- Invite specific concerns
- Address what they've seen
- Fill in any gaps

**6. Next Steps (5 minutes)**
- What they saw
- How it addresses their needs
- Clear next step

Include:
- Questions to ask throughout
- How to handle technical issues
- Pivot phrases when things go wrong`,
    placeholders: [
      "WHAT YOU SELL",
      "NAME",
      "COMPANY",
      "PAIN POINTS",
      "ROLE",
      "MINUTES",
      "FEATURE 1",
      "FEATURE 2",
      "FEATURE 3",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "sales-client",
    categoryId: "client-meetings",
    exampleOutput:
      "A demo script structure that connects each feature to specific prospect needs and includes interactive elements.",
    customizationNotes: [
      "Prepare a demo environment with their actual data if possible",
      "Have backup screenshots for when demos fail",
      "Know your technical limitations going in",
    ],
    tags: ["demo", "presentation", "product", "showcase"],
    order: 30,
  },

  {
    id: "client-check-in-template",
    title: "Client Check-In Template",
    description:
      "Structure regular client check-ins to ensure satisfaction and identify expansion opportunities.",
    promptText: `Create a client check-in meeting template.

Client: [NAME/COMPANY]
How long they've been a customer: [TIME]
Their original goals: [OBJECTIVES]
Current status: [HOW THINGS ARE GOING]

Check-in details:
- Frequency: [WEEKLY/MONTHLY/QUARTERLY]
- Duration: [MINUTES]
- Attendees: [WHO JOINS]

Create an agenda with:

**1. Relationship & Rapport (5 min)**
- Personal check-in
- What's new since last time
- Celebrate any wins

**2. Goal/Progress Review (10-15 min)**
- Review of original objectives
- What's been accomplished
- Metrics/KPIs discussion
- What's working well

**3. Challenges & Concerns (10 min)**
- What's not working
- Roadblocks or issues
- Support they need
- How we can improve

**4. Upcoming Initiatives (10 min)**
- What's next for them
- How we can support upcoming goals
- New features/relevant updates

**5. Expansion Opportunities (5-10 min)**
- Additional needs surfaced
- Upsell/cross-sell opportunities
- Referrals or case study potential

**6. Next Steps (5 min)**
- Action items for both parties
- Next meeting scheduled
- What to expect between now and then

Include:
- Questions to ask in each section
- Red flags to watch for
- Expansion cues to listen for`,
    placeholders: [
      "NAME/COMPANY",
      "TIME",
      "OBJECTIVES",
      "HOW THINGS ARE GOING",
      "WEEKLY/MONTHLY/QUARTERLY",
      "MINUTES",
      "WHO JOINS",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "sales-client",
    categoryId: "client-meetings",
    exampleOutput:
      "A structured client check-in agenda that covers progress, challenges, and expansion opportunities.",
    customizationNotes: [
      "Prep with their actual metrics and usage data",
      "Review their original goals before each call",
      "Have relevant case studies or references ready",
    ],
    tags: ["check-in", "account-management", "retention", "expansion"],
    order: 31,
  },

  {
    id: "qbr-preparation-guide",
    title: "Quarterly Business Review (QBR) Guide",
    description:
      "Prepare and conduct impactful QBRs that demonstrate value and strengthen relationships.",
    promptText: `Create a QBR preparation and execution guide.

Client: [COMPANY NAME]
Relationship duration: [TIME]
Their investment with us: [ANNUAL SPEND]
Their original objectives: [GOALS]

Current quarter results:
[WHAT THEY'VE ACHIEVED]
[METRICS/OUTCOMES]
[CHALLENGES FACED AND OVERCOME]

Create a QBR framework with:

**Preparation Phase**
- Data to gather (usage, outcomes, ROI)
- Stakeholders to invite
- Pre-meeting questions to ask
- Materials to prepare

**Agenda Structure (60-90 minutes)**

**1. Executive Summary (10 min)**
- Quarter highlights
- Key metrics dashboard
- Strategic wins

**2. Goal Achievement Review (15-20 min)**
- Original objectives vs. results
- What was accomplished
- Metrics and proof points
- Celebrate successes together

**3. Impact & ROI Analysis (15 min)**
- Quantified value delivered
- Before/after comparisons
- Time/money saved or generated
- Testimonials if applicable

**4. Challenges & Learnings (10 min)**
- What didn't go perfectly
- How we addressed challenges
- Lessons learned
- Improvements made

**5. Strategic Alignment (10-15 min)**
- Their upcoming initiatives
- How we align with future goals
- Industry trends relevant to them
- Competitive landscape insights

**6. Expansion Roadmap (10 min)**
- Additional opportunities
- New products/services relevant
- Phased growth plan
- Investment options

**7. Next Quarter Commitments (10 min)**
- Mutual goals and objectives
- What we'll deliver
- What they'll do
- Success metrics

**8. Q&A and Next Steps**

Include:
- Slide deck outline
- Key metrics to highlight
- Questions to ask throughout`,
    placeholders: [
      "COMPANY NAME",
      "TIME",
      "ANNUAL SPEND",
      "GOALS",
      "WHAT THEY'VE ACHIEVED",
      "METRICS/OUTCOMES",
      "CHALLENGES FACED AND OVERCOME",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "sales-client",
    categoryId: "client-meetings",
    exampleOutput:
      "A comprehensive QBR framework with preparation checklist, agenda structure, and expansion strategies.",
    customizationNotes: [
      "Use actual client data and metrics",
      "Include relevant industry benchmarks",
      "Have specific expansion opportunities prepared",
      "Bring appropriate level executive based on deal size",
    ],
    tags: ["qbr", "business-review", "account-management", "expansion"],
    order: 32,
  },

  {
    id: "negotiation-meeting-prep",
    title: "Negotiation Meeting Preparation",
    description: "Prepare for negotiation scenarios to achieve win-win outcomes.",
    promptText: `Create a negotiation preparation framework.

Deal context:
- Product/service: [WHAT YOU SELL]
- Current offer: [PRICE/TERMS]
- Deal value: [TOTAL VALUE]
- Prospect: [COMPANY/NAME]
- Their position: [WHAT THEY'RE ASKING FOR]

My constraints:
- My floor price: [MINIMUM I CAN ACCEPT]
- Must-have terms: [NON-NEGOTIABLES]
- Nice-to-have terms: [FLEXIBLE ITEMS]
- Deadline: [TIME PRESSURE IF ANY]

Create a negotiation framework with:

**1. Preparation Checklist**
- Research to do beforehand
- Data to bring (ROI, case studies, benchmarks)
- Decision-maker mapping
- Internal approval thresholds

**2. Opening Position**
- How to present your offer confidently
- Anchoring strategy
- What to say first
- What to hold back

**3. Concession Strategy**
- What you can trade and why
- Concession hierarchy (most valuable to least)
- "If...then..." framing
- Never giving without getting

**4. Response Framework**
- To price pressure
- To term demands
- To competitor comparisons
- To timing delays
- To "take it or leave it"

**5. Value Reinforcement**
- ROI data and case studies
- Cost of inaction/waiting
- Unique differentiators
- Risk mitigation

**6. Closing Tactics**
- Trial closes throughout
- Summary close
- Urgency creation
- Assumptive close

**7. Walk-Away Criteria**
- When to say no
- Graceful exit strategies
- Leaving door open

Include:
- Specific scripts for each scenario
- Questions to ask
- Red flags that indicate you should walk`,
    placeholders: [
      "WHAT YOU SELL",
      "PRICE/TERMS",
      "TOTAL VALUE",
      "COMPANY/NAME",
      "WHAT THEY'RE ASKING FOR",
      "MINIMUM I CAN ACCEPT",
      "NON-NEGOTIABLES",
      "FLEXIBLE ITEMS",
      "TIME PRESSURE IF ANY",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "sales-client",
    categoryId: "client-meetings",
    exampleOutput:
      "A comprehensive negotiation framework with preparation checklist, concession strategy, and response scripts.",
    customizationNotes: [
      "Know your actual authority limits before meeting",
      "Have your manager's contact for escalations",
      "Practice your responses out loud",
      "Never negotiate against yourself",
    ],
    tags: ["negotiation", "closing", "terms", "strategy"],
    order: 33,
  },

  {
    id: "sales-team-meeting-agenda",
    title: "Sales Team Meeting Agenda",
    description: "Structure productive sales team meetings that drive performance.",
    promptText: `Create a sales team meeting agenda and structure.

Team context:
- Team size: [NUMBER OF REPS]
- Experience level: [JUNIOR/MIXED/SENIOR]
- Meeting frequency: [DAILY/WEEKLY/BIWEEKLY]
- Meeting duration: [MINUTES]
- Current focus/challenge: [WHAT TEAM IS WORKING ON]

Create meeting structures for:

**1. Daily Standup (15 minutes)**
- Quick check-in format
- Each person shares
- Blockers to address
- Kept brief and energetic

**2. Weekly Pipeline Review (45-60 minutes)**
- Pipeline health overview
- Deal deep-dives (2-3 key opportunities)
- Obstacle brainstorming
- Skill practice/sharing
- Next week commitments

**3. Bi-Weekly Skill Session (60 minutes)**
- Skill focus area: [SPECIFIC SKILL]
- Practice scenarios
- Role plays
- Wins and lessons
- Knowledge sharing

**4. Monthly Performance Review (60-90 minutes)**
- Metrics dashboard
- Individual performance
- Team performance vs. goal
- Root cause analysis
- Improvement planning
- Recognition and celebration

For each meeting type:
- Detailed agenda with timing
- Preparation required
- Outputs/deliverables
- Facilitation tips

Include:
- Icebreakers that work for sales teams
- How to handle underperformance
- Celebration ideas
- Keeping energy high`,
    placeholders: [
      "NUMBER OF REPS",
      "JUNIOR/MIXED/SENIOR",
      "DAILY/WEEKLY/BIWEEKLY",
      "MINUTES",
      "WHAT TEAM IS WORKING ON",
      "SPECIFIC SKILL",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "sales-client",
    categoryId: "client-meetings",
    exampleOutput:
      "Structured meeting agendas for different sales team cadences with timing and facilitation tips.",
    customizationNotes: [
      "Rotate meeting facilitation among team members",
      "Include actual pipeline data in reviews",
      "Celebrate both wins and effort",
      "Keep meetings shorter than you think necessary",
    ],
    tags: ["sales-meeting", "team-meeting", "pipeline", "leadership"],
    order: 34,
  },

  // ============================================================================
  // NURTURE SEQUENCES
  // ============================================================================

  {
    id: "drip-campaign-sequence",
    title: "Lead Drip Campaign Sequence",
    description: "Create a multi-touch email sequence that nurtures leads toward conversion.",
    promptText: `Create a drip email sequence for leads who aren't ready to buy yet.

My business:
- What I sell: [PRODUCT/SERVICE]
- Target audience: [WHO I SELL TO]
- Typical sales cycle: [DURATION]
- Price point: [PRICE RANGE]
- My competitive advantage: [DIFFERENTIATION]

Lead source:
- Where they came from: [LEAD SOURCE]
- What they showed interest in: [THEIR INTEREST]
- What I know about them: [CONTEXT]

Create a 10-email nurture sequence:

**Emails 1-3: Value & Education**
- Teach them something valuable
- Establish credibility
- No selling, just helpful content

**Emails 4-6: Problem Agitation**
- Explore their pain points deeper
- Show them the cost of inaction
- Introduce new ways of thinking

**Emails 7-8: Solution Introduction**
- Introduce your approach
- Case studies and social proof
- How you help people like them

**Emails 9-10: Soft Conversion**
- Low-friction next steps
- Invite to a resource, not a demo
- Leave door open for conversation

For each email include:
- Subject line (compelling, not clickbaity)
- Timing after previous email
- Content focus
- Call to action
- Unsubscribe reminder (natural language)`,
    placeholders: [
      "PRODUCT/SERVICE",
      "WHO I SELL TO",
      "DURATION",
      "PRICE RANGE",
      "DIFFERENTIATION",
      "LEAD SOURCE",
      "THEIR INTEREST",
      "CONTEXT",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "sales-client",
    categoryId: "nurture-sequences",
    exampleOutput:
      "A 10-email drip sequence with strategic content progression from value to conversion.",
    customizationNotes: [
      "Space emails based on your sales cycle (longer cycle = slower drip)",
      "Include links to your best content",
      "Test different CTAs to see what converts",
    ],
    tags: ["drip-campaign", "nurture", "email-sequence", "automation"],
    order: 35,
  },

  {
    id: "educational-nurture-sequence",
    title: "Educational Content Nurture",
    description: "Create a value-first nurture sequence that positions you as a trusted resource.",
    promptText: `Create an educational nurture sequence.

My expertise: [WHAT I'M AN EXPERT IN]
My business: [WHAT I SELL]
Target audience: [WHO I'M TEACHING]

Content I can share:
[AVAILABLE RESOURCES - articles, guides, videos, etc.]

Create an 8-email educational sequence:

**Email 1: Welcome & Framework**
- Introduce a mental model or framework
- Set up what they'll learn
- No pitch, just value

**Email 2: Common Mistakes**
- Mistake 1, 2, 3 in [DOMAIN]
- How to avoid them
- Beginning to establish your expertise

**Email 3: Case Study**
- Real example of success/failure
- Lessons learned
- Applicable insights

**Email 4: How-To Guide**
- Step-by-step approach
- Actionable content
- Save-this-email value

**Email 5: Tools & Resources**
- Curated resources list
- Tools you recommend
- Helpful templates or frameworks

**Email 6: Advanced Insights**
- Deeper dive for those who engaged
- More sophisticated concepts
- Establish thought leadership

**Email 7: Q&A or FAQ**
- Address common questions
- Objections you hear
- Clarify misconceptions

**Email 8: What's Next**
- Brief mention of how you can help
- Low-friction next step
- Continue the journey invitation

For each email:
- Subject line
- Core content outline
- Educational value
- Minimal or no CTAs until the end`,
    placeholders: [
      "WHAT I'M AN EXPERT IN",
      "WHAT I SELL",
      "WHO I'M TEACHING",
      "AVAILABLE RESOURCES - articles, guides, videos, etc.",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "sales-client",
    categoryId: "nurture-sequences",
    exampleOutput:
      "An 8-email educational sequence that builds trust through valuable content with minimal selling.",
    customizationNotes: [
      "Write based on your actual expertise",
      "Use your best-performing content topics",
      "Segment based on engagement (send advanced content only to openers)",
    ],
    tags: ["educational", "value-first", "thought-leadership", "nurture"],
    order: 36,
  },

  {
    id: "upsell-sequence-existing-clients",
    title: "Client Upsell Sequence",
    description: "Identify and pursue upsell opportunities with existing clients.",
    promptText: `Create an upsell sequence for existing clients.

My product/service: [WHAT I SELL]
What they currently have: [CURRENT PACKAGE/PRODUCT]
Upgrade options: [WHAT THEY COULD UPGRADE TO]
Value of upgrade: [BENEFITS]

Client context:
- How long they've been a customer: [TIME]
- Their current results: [OUTCOMES]
- Their growth stage: [CONTEXT]

Create a 5-touch upsell sequence:

**Touch 1: Value Realization**
- Celebrate their current success
- Quantify results achieved
- "You're getting great value from [current product]"

**Touch 2: Expansion Insight**
- Share insight about their growth stage
- "Companies at your stage typically need..."
- Educational, not salesy

**Touch 3: Social Proof**
- Case study of similar customer's upgrade
- Results they achieved after upgrading
- "This might be relevant to you..."

**Touch 4: Personalized Recommendation**
- Specific suggestion for them
- Why it makes sense now
- Expected outcomes

**Touch 5: Offer & Urgency**
- Special upgrade offer
- Time-limited if real
- Easy next step

For each touch:
- Channel (email, call, in-person)
- Message/script
- Timing
- Objective`,
    placeholders: [
      "WHAT I SELL",
      "CURRENT PACKAGE/PRODUCT",
      "WHAT THEY COULD UPGRADE TO",
      "BENEFITS",
      "TIME",
      "OUTCOMES",
      "CONTEXT",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "sales-client",
    categoryId: "nurture-sequences",
    exampleOutput:
      "A 5-touch upsell sequence that celebrates success before introducing expansion opportunities.",
    customizationNotes: [
      "Time upsells after they've achieved initial success",
      "Use actual customer data for case studies",
      "Make the upgrade genuinely valuable, not just more expensive",
    ],
    tags: ["upsell", "expansion", "existing-clients", "growth"],
    order: 37,
  },

  {
    id: "cross-sell-sequence",
    title: "Cross-Sell Opportunity Sequence",
    description: "Introduce related products or services to existing clients.",
    promptText: `Create a cross-sell sequence for related offerings.

My main product: [WHAT THEY BOUGHT]
Related products/services: [WHAT ELSE I OFFER]
How they connect: [RELATIONSHIP BETWEEN PRODUCTS]

Client context:
- Industry: [INDUSTRY]
- Role: [ROLE]
- Current usage: [HOW THEY USE MY PRODUCT]
- Results: [THEIR OUTCOMES]

Create a cross-sell approach with:

**1. Identification**
- Signs they're ready for the related product
- Usage patterns that indicate need
- Timing indicators

**2. Education Sequence (3-4 touches)**
- Touch 1: Problem introduction (they might not know they have)
- Touch 2: Solution awareness (how others solve it)
- Touch 3: Your related product introduction
- Touch 4: Case study of combined use

**3. Soft Outreach**
- "I noticed..." approach
- Natural conversation starter
- Not a full pitch

**4. Presentation**
- How the products work together
- Incremental value of adding
- Easy transition process

**5. Offer**
- Special bundle pricing if real
- Implementation support
- Easy onboarding

For each touch:
- Script/message
- Channel (email, call, meeting add-on)
- Timing
- Success metric`,
    placeholders: [
      "WHAT THEY BOUGHT",
      "WHAT ELSE I OFFER",
      "RELATIONSHIP BETWEEN PRODUCTS",
      "INDUSTRY",
      "ROLE",
      "HOW THEY USE MY PRODUCT",
      "THEIR OUTCOMES",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "sales-client",
    categoryId: "nurture-sequences",
    exampleOutput:
      "A cross-sell sequence that educates clients about related problems and introduces complementary solutions.",
    customizationNotes: [
      "Only cross-sell when there's genuine value",
      "Make sure the products truly work well together",
      "Use real examples of customers using both",
    ],
    tags: ["cross-sell", "related-products", "expansion", "clients"],
    order: 38,
  },

  {
    id: "reactivation-sequence-lost-clients",
    title: "Lost Client Reactivation Sequence",
    description: "Re-engage clients who churned or stopped purchasing.",
    promptText: `Create a reactivation sequence for lost clients.

Why they left:
[REASON FOR CHURN - if known]

How long they've been gone:
[TIME SINCE LAST PURCHASE]

What they bought before:
[PAST PURCHASES]

What I can offer now:
[NEW PRODUCTS/IMPROVEMENTS/INCENTIVES]

Create a 4-touch reactivation sequence:

**Touch 1: Check-In (No Selling)**
- "How have things been?"
- Genuine interest, not pitch
- Brief, warm message

**Touch 2: Value Drop**
- Share something valuable
- New insight or resource
- Still no direct ask

**Touch 3: What's New**
- Improvements since they left
- New offerings relevant to them
- "Thought of you because..."

**Touch 4: The Offer**
- Special return offer
- Make it worth coming back
- Easy restart process

**Touch 5: Break-Up (if no response)**
- Final check-in
- "Wish you the best"
- Door slightly open

For each touch:
- Script/message
- Timing
- Channel preference
- Response handling

Include:
- How to handle "why did you leave?" responses
- What to offer (discounts, terms, etc.)
- When to stop trying`,
    placeholders: [
      "REASON FOR CHURN - if known",
      "TIME SINCE LAST PURCHASE",
      "PAST PURCHASES",
      "NEW PRODUCTS/IMPROVEMENTS/INCENTIVES",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "sales-client",
    categoryId: "nurture-sequences",
    exampleOutput:
      "A 5-touch reactivation sequence that warms up the relationship before making an offer.",
    customizationNotes: [
      "Address the original reason they left if known",
      "Offer real improvements since they were last a customer",
      "Make returning easy (not a big process)",
      "Know when to stop - don't be annoying",
    ],
    tags: ["reactivation", "churn", "win-back", "lost-clients"],
    order: 39,
  },

  {
    id: "post-purchase-nurture-sequence",
    title: "Post-Purchase Onboarding Sequence",
    description: "Nurture new customers to ensure success and reduce churn.",
    promptText: `Create a post-purchase onboarding and nurture sequence.

What they bought: [PRODUCT/SERVICE]
Onboarding duration: [HOW LONG IT TAKES]
Success milestones: [WHAT SUCCESS LOOKS LIKE]
Common pitfalls: [WHERE NEW CUSTOMERS STRUGGLE]

Create a 10-touch onboarding sequence:

**Days 1-3: Welcome & Orientation**
- Touch 1: Welcome email, what to expect
- Touch 2: Getting started guide
- Touch 3: Quick win opportunity

**Week 1: First Success**
- Touch 4: Check-in, how's it going?
- Touch 5: First milestone encouragement
- Touch 6: Resource for next step

**Week 2-3: Deepening Engagement**
- Touch 7: Advanced feature/benefit
- Touch 8: Case study of similar customer
- Touch 9: Success check-in

**Month 1: Value Realization**
- Touch 10: Results achieved celebration
- Touch 11: Advanced resources
- Touch 12: Next steps/upgrade teaser

**Month 2-3: Expansion Prep**
- Touch 13: Success story invitation
- Touch 14: Community/resources invitation
- Touch 15: Long-term success planning

For each touch:
- Channel (email, in-app, call)
- Message content
- Timing
- Success metric (opens, clicks, usage)

Include:
- How to segment based on engagement
- Warning signs of at-risk customers
- When to intervene personally`,
    placeholders: [
      "PRODUCT/SERVICE",
      "HOW LONG IT TAKES",
      "WHAT SUCCESS LOOKS LIKE",
      "WHERE NEW CUSTOMERS STRUGGLE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "sales-client",
    categoryId: "nurture-sequences",
    exampleOutput:
      "A comprehensive onboarding sequence that guides new customers to success while preparing for expansion.",
    customizationNotes: [
      "Base timing on your actual onboarding length",
      "Track engagement and intervene personally when they drop off",
      "Celebrate milestones - it builds momentum",
      "Use this data to identify at-risk customers early",
    ],
    tags: ["onboarding", "new-customers", "success", "retention"],
    order: 40,
  },
];
