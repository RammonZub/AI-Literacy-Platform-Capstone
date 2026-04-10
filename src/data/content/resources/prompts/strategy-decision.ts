/**
 * Strategy & Decision Making Prompts
 *
 * PURPOSE: Prompts for strategic planning, decision frameworks, risk assessment, and goal setting.
 *
 * DOMAIN: Strategy & Decision Making
 * CATEGORIES:
 * - Strategic Planning (7 prompts)
 * - Decision Frameworks (8 prompts)
 * - Risk Assessment (7 prompts)
 * - Scenario Planning (6 prompts)
 * - OKRs & KPIs (7 prompts)
 *
 * @see src/types/resources.ts - Prompt type definition
 */

import type { Prompt } from "@/types/resources";

/**
 * Strategy & Decision Making prompts collection
 *
 * Each prompt is tested across ChatGPT, Claude, and Gemini.
 * Best tool indicates which gives the most consistent results.
 */
export const strategyDecisionPrompts: Prompt[] = [
  // ============================================================================
  // STRATEGIC PLANNING (7 prompts)
  // ============================================================================

  {
    id: "vision-statement-creator",
    title: "Vision Statement Creator",
    description:
      "Craft a compelling vision statement that defines your organization's future aspirations.",
    promptText: `Help me create a compelling vision statement.

Organization/Initiative: [NAME]
Current Purpose: [WHAT YOU DO TODAY]
Time Horizon: [3-5 YEARS/5-10 YEARS/10+ YEARS]
Key Aspirations: [WHAT YOU HOPE TO ACHIEVE]

Please develop:

1. Vision Exploration
   - What future state do we want to create?
   - What impact do we want to have?
   - What do we want to be known for?
   - What problems will we have solved?

2. Vision Dimensions
   - Impact: Who benefits and how?
   - Scale: How big is our reach?
   - Distinction: What makes us unique?
   - Legacy: What do we leave behind?

3. Draft Vision Statements (3-5 options)
   Each should be:
   - Aspirational but achievable
   - Clear and specific
   - Memorable and concise
   - Inspirational
   - Timeless (not tied to current offerings)

4. Statement Evaluation
   For each option:
   - Strengths
   - Weaknesses
   - Emotional resonance (1-10)
   - Clarity (1-10)
   - Alignment with purpose (1-10)

5. Selection Guidance
   - Recommended vision statement
   - How to communicate it
   - How to use it in decision-making
   - How to make it operational`,
    placeholders: [
      "NAME",
      "WHAT YOU DO TODAY",
      "3-5 YEARS/5-10 YEARS/10+ YEARS",
      "WHAT YOU HOPE TO ACHIEVE",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "strategy-decision",
    categoryId: "strategic-planning",
    exampleOutput:
      "A set of 3-5 compelling vision statement options with evaluation criteria and a recommended choice.",
    customizationNotes: [
      "Include any existing vision or mission statements",
      "Mention values or principles that should be reflected",
      "Add any stakeholder perspectives or input",
    ],
    tags: ["vision", "strategic-planning", "mission", "leadership"],
    order: 1,
  },

  {
    id: "strategy-pyramid-framework",
    title: "Strategy Pyramid Framework",
    description: "Build a complete strategy from vision to execution using a pyramid structure.",
    promptText: `Develop a complete strategy using the pyramid framework.

Organization: [NAME]
Current State: [WHERE YOU ARE TODAY]
Desired Future: [WHERE YOU WANT TO BE]
Time Horizon: [TIMEFRAME]

Build the strategy pyramid:

LEVEL 1: Vision
- Aspirational future state
- Impact you want to create
- 10+ year horizon

LEVEL 2: Mission
- What you do every day
- Who you serve
- How you create value

LEVEL 3: Strategic Pillars (3-5)
For each pillar:
- Focus area name
- Why this matters
- What success looks like
- Key initiatives (3-5 each)

LEVEL 4: Strategic Objectives
For each pillar:
- 2-3 measurable objectives
- Timeline (1-3 years)
- Owner/accountability

LEVEL 5: Tactics & Actions
For each objective:
- Key actions to take
- Short-term milestones
- Resource requirements

LEVEL 6: Metrics & KPIs
- How to measure success at each level
- Leading indicators
- Lagging indicators

Additional Outputs:
- Strategy execution plan
- Communication approach
- Review cadence`,
    placeholders: ["NAME", "WHERE YOU ARE TODAY", "WHERE YOU WANT TO BE", "TIMEFRAME"],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "strategy-decision",
    categoryId: "strategic-planning",
    exampleOutput:
      "A complete strategy pyramid from vision through tactics with clear connections and measurable objectives.",
    customizationNotes: [
      "Include any existing strategic documents",
      "Mention any constraints or limitations",
      "Add specific business context or challenges",
    ],
    tags: ["strategy", "strategic-planning", "framework", "execution"],
    order: 2,
  },

  {
    id: "strategic-alignment-audit",
    title: "Strategic Alignment Audit",
    description:
      "Audit how well your activities, resources, and decisions align with your strategy.",
    promptText: `Conduct a strategic alignment audit.

Organization: [NAME]
Stated Strategy: [YOUR STRATEGIC PRIORITIES]
Current Activities: [MAJOR INITIATIVES AND PROJECTS]
Resources: [BUDGET, TEAM, ASSETS]

Audit alignment across:

1. Activity Alignment
   For each major activity/project:
   - Which strategic objective it supports
   - Alignment strength (High/Medium/Low)
   - Direct contribution vs. indirect
   - Misalignment risks

2. Resource Alignment
   - Budget allocation vs. strategic priorities
   - Team time allocation vs. strategic priorities
   - Technology/system investments vs. strategy
   - Gaps and over-allocations

3. Decision Alignment
   - Recent major decisions and their strategic fit
   - Decision criteria alignment
   - Patterns in decision-making

4. Organizational Alignment
   - Structure vs. strategy
   - Incentives vs. strategy
   - Culture vs. strategy
   - Skills/capabilities vs. strategy

5. Alignment Score
   - Overall alignment percentage
   - By dimension (activities, resources, decisions, org)
   - Red flags and yellow flags

6. Realignment Recommendations
   - Activities to start/stop/continue
   - Resource reallocation opportunities
   - Structural or process changes
   - Communication needs`,
    placeholders: [
      "NAME",
      "YOUR STRATEGIC PRIORITIES",
      "MAJOR INITIATIVES AND PROJECTS",
      "BUDGET, TEAM, ASSETS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "strategy-decision",
    categoryId: "strategic-planning",
    exampleOutput:
      "A comprehensive alignment audit with scoring, red flag identification, and realignment recommendations.",
    customizationNotes: [
      "Include specific projects or initiatives",
      "Mention any known misalignments",
      "Add organizational context and constraints",
    ],
    tags: ["alignment", "strategy", "audit", "execution"],
    order: 3,
  },

  {
    id: "strategic-choice-framework",
    title: "Strategic Choice Framework",
    description: "Evaluate and choose between strategic options using a structured framework.",
    promptText: `Help me choose between strategic options.

Situation: [CURRENT SITUATION OR OPPORTUNITY]
Strategic Decision: [WHAT YOU NEED TO DECIDE]
Options Under Consideration:
[OPTION 1: DESCRIPTION]
[OPTION 2: DESCRIPTION]
[OPTION 3: DESCRIPTION - ADD MORE AS NEEDED]
Constraints: [BUDGET, TIME, RESOURCES, ETC.]
Time Horizon: [TIMEFRAME FOR IMPACT]

Evaluate each option using:

1. Strategic Fit Analysis
   For each option:
   - Alignment with vision/mission
   - Competitive advantage created
   - Market opportunity addressed
   - Capability fit
   - Strategic fit score (1-10)

2. Resource Analysis
   - Investment required
   - Time to implement
   - Skills/capabilities needed
   - Risk to current operations

3. Impact Analysis
   - Revenue/profit potential
   - Market impact
   - Competitive position
   - Learning and option value
   - Impact score (1-10)

4. Risk Analysis
   - Probability of success
   - Consequences of failure
   - Reversibility
   - Competitive response
   - Risk score (1-10, higher = riskier)

5. Feasibility Analysis
   - Technical feasibility
   - Organizational readiness
   - Financial viability
   - Feasibility score (1-10)

6. Comparison Matrix
   - Side-by-side comparison
   - Weighted scoring if priorities are clear
   - Sensitivity analysis

7. Recommendation
   - Recommended option with rationale
   - Confidence level
   - Conditions for success
   - When to reconsider`,
    placeholders: [
      "CURRENT SITUATION OR OPPORTUNITY",
      "WHAT YOU NEED TO DECIDE",
      "OPTION 1: DESCRIPTION",
      "OPTION 2: DESCRIPTION",
      "OPTION 3: DESCRIPTION - ADD MORE AS NEEDED",
      "BUDGET, TIME, RESOURCES, ETC.",
      "TIMEFRAME FOR IMPACT",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "strategy-decision",
    categoryId: "strategic-planning",
    exampleOutput:
      "A comprehensive evaluation of strategic options with scoring across multiple dimensions and a clear recommendation.",
    customizationNotes: [
      "Add more options if needed",
      "Include any stakeholder perspectives",
      "Mention any non-negotiable constraints",
    ],
    tags: ["strategic-planning", "decision-making", "options-analysis", "framework"],
    order: 4,
  },

  {
    id: "strategic-horizons-planning",
    title: "Strategic Horizons Planning",
    description:
      "Plan across three time horizons to balance immediate execution with future positioning.",
    promptText: `Develop a strategic plan across three horizons.

Organization: [NAME]
Current Business: [WHAT YOU DO TODAY]
Industry: [YOUR INDUSTRY]
Planning Context: [ANY SPECIFIC CONTEXT]

Plan across three horizons:

HORIZON 1 (0-2 years): Core Business Defense
- Current business optimization
- Near-term growth opportunities
- Operational improvements
- Threats to address immediately
- 3-5 key initiatives
- Expected outcomes

HORIZON 2 (2-5 years): Emerging Opportunities
- Adjacent growth opportunities
- New capabilities to build
- Market expansion opportunities
- Platform/business model extensions
- 3-5 key initiatives
- Expected outcomes

HORIZON 3 (5+ years): Future Bets
- Disruptive opportunities
- Fundamental industry shifts
- New business models
- Radical innovation
- 3-5 key initiatives
- Expected outcomes

For each horizon provide:
- Investment level (resource allocation)
- Risk profile
- Success metrics
- Key milestones

INTEGRATION
- Balance across horizons (resource allocation %)
- Dependencies between horizons
- Transition points
- Leadership and accountability
- Review and update cadence`,
    placeholders: ["NAME", "WHAT YOU DO TODAY", "YOUR INDUSTRY", "ANY SPECIFIC CONTEXT"],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "strategy-decision",
    categoryId: "strategic-planning",
    exampleOutput:
      "A balanced three-horizon strategic plan with specific initiatives, resource allocation, and integration guidance.",
    customizationNotes: [
      "Include existing initiatives to categorize",
      "Mention industry disruption factors",
      "Add organizational readiness factors",
    ],
    tags: ["strategic-planning", "horizons", "innovation", "growth"],
    order: 5,
  },

  {
    id: "strategy-cascade-communication",
    title: "Strategy Cascade & Communication",
    description:
      "Cascade strategy throughout the organization with clear translation and accountability.",
    promptText: `Help me cascade strategy throughout the organization.

Organization Strategy: [TOP-LEVEL STRATEGY]
Organization Type: [SIZE, STRUCTURE, CULTURE]
Audience: [WHO NEEDS TO UNDERSTAND]
Current Communication: [HOW STRATEGY IS CURRENTLY COMMUNICATED]

Create a cascade framework:

1. Executive Level
   - Strategy statement (concise version)
   - Key messages
   - Decision principles
   - Success measures

2. Management Level
   - Strategy translated for each function:
     * What the strategy means for us
     * Our role in execution
     * Key objectives
     * How we contribute
   - For each: Product, Sales, Marketing, Operations, etc.

3. Individual Contributor Level
   - What this means for my work
   - How I contribute
   - What I should prioritize
   - What I should deprioritize

4. Communication Plan
   - Town hall script/presentation outline
   - Team meeting discussion guides
   - 1:1 talking points
   - FAQ document
   - Ongoing communication cadence

5. Accountability Framework
   - OKR/KPI alignment
   - Reporting structure
   - Review cadence
   - Success tracking

6. Reinforcement Mechanisms
   - How to keep strategy visible
   - How to connect daily work to strategy
   - How to celebrate strategic progress
   - How to course-correct when off-track`,
    placeholders: [
      "TOP-LEVEL STRATEGY",
      "SIZE, STRUCTURE, CULTURE",
      "WHO NEEDS TO UNDERSTAND",
      "HOW STRATEGY IS CURRENTLY COMMUNICATED",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "strategy-decision",
    categoryId: "strategic-planning",
    exampleOutput:
      "A complete strategy cascade framework with translations for each level and communication materials.",
    customizationNotes: [
      "Include specific functions or departments",
      "Mention communication channels available",
      "Add any cultural considerations",
    ],
    tags: ["strategy", "communication", "execution", "alignment"],
    order: 6,
  },

  {
    id: "strategic-reset-workshop",
    title: "Strategic Reset Workshop",
    description:
      "Facilitate a strategic reset when circumstances change or previous strategy isn't working.",
    promptText: `Design a strategic reset workshop.

Situation: [WHY YOU NEED A RESET - e.g., market change, failed execution, pivot]
Organization: [NAME AND SIZE]
Time Available: [DURATION]
Participants: [WHO WILL BE IN THE ROOM]
Current Strategy: [WHAT THE STRATEGY WAS]

Design the workshop:

1. Workshop Preparation
   - Pre-work for participants
   - Data and materials to prepare
   - Ground rules for the session

2. Session 1: Reality Check (30% of time)
   - What has changed (market, competitive, internal)
   - What's working and what isn't
   - Brutal facts assessment
   - Current performance vs. expectations

3. Session 2: Clean Slate (20% of time)
   - If starting from scratch, what would we do?
   - What opportunities exist now?
   - What constraints are real vs. self-imposed?
   - What would we stop doing?

4. Session 3: Strategic Choices (30% of time)
   - Key strategic decisions to make
   - Options evaluation
   - Trade-off decisions
   - Resource allocation choices

5. Session 4: Commitment (20% of time)
   - Strategic direction (clear statement)
   - Top 5-7 strategic priorities
   - Immediate actions (next 30 days)
   - Ownership and accountability

6. Outputs
   - Updated strategy document
   - Communication plan
   - Execution roadmap
   - Success metrics

7. Follow-up
   - How to maintain momentum
   - Checkpoint cadence
   - Stakeholder communication`,
    placeholders: [
      "WHY YOU NEED A RESET - e.g., market change, failed execution, pivot",
      "NAME AND SIZE",
      "DURATION",
      "WHO WILL BE IN THE ROOM",
      "WHAT THE STRATEGY WAS",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "strategy-decision",
    categoryId: "strategic-planning",
    exampleOutput:
      "A complete strategic reset workshop design with session agendas, exercises, and output templates.",
    customizationNotes: [
      "Include specific challenges or failures",
      "Mention any stakeholder sensitivities",
      "Add any data or insights to incorporate",
    ],
    tags: ["strategy", "workshop", "pivot", "reset"],
    order: 7,
  },

  // ============================================================================
  // DECISION FRAMEWORKS (8 prompts)
  // ============================================================================

  {
    id: "weighted-decision-matrix",
    title: "Weighted Decision Matrix",
    description: "Make complex decisions by evaluating options against weighted criteria.",
    promptText: `Create a weighted decision matrix for this decision:

Decision: [WHAT YOU'RE DECIDING]
Options:
[OPTION 1]
[OPTION 2]
[OPTION 3 - ADD MORE AS NEEDED]
Context: [ANY ADDITIONAL CONTEXT]

Build the matrix:

1. Criteria Selection
   - List 5-10 criteria that matter for this decision
   - Each criterion should be:
     * Independent (not overlapping with others)
     * Important (significantly affects the decision)
     * Measurable (can evaluate each option)

2. Weight Assignment
   - Assign weights to each criterion (total = 100%)
   - Higher weight = more important
   - Example weights:
     * Must-have criteria: 20-30%
     * Important but not critical: 10-15%
     * Nice-to-have: 5-10%

3. Scoring Scale
   Define how to score each option:
   - 1-5 scale (1=Poor, 5=Excellent)
   - 1-10 scale (1=Terrible, 10=Perfect)
   - Or custom scale for your situation

4. Evaluation Matrix
   Create a table with:
   - Options as rows
   - Criteria as columns
   - Weights shown
   - Scores for each option-criteria combination
   - Weighted scores (score × weight)
   - Total weighted score

5. Analysis
   - Which option scores highest?
   - Sensitivity analysis: What if weights change?
   - Which criteria most drive the decision?
   - Are there any "deal-breaker" criteria?

6. Recommendation
   - Recommended option
   - Confidence level
   - Key risks or concerns
   - Conditions to monitor`,
    placeholders: [
      "WHAT YOU'RE DECIDING",
      "OPTION 1",
      "OPTION 2",
      "OPTION 3 - ADD MORE AS NEEDED",
      "ANY ADDITIONAL CONTEXT",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "strategy-decision",
    categoryId: "decision-frameworks",
    exampleOutput:
      "A complete weighted decision matrix with criteria, weights, scores, and clear recommendation.",
    customizationNotes: [
      "Add more options as needed",
      "Suggest specific criteria if relevant to your situation",
      "Mention any non-negotiable requirements",
    ],
    tags: ["decision-matrix", "weighted-scoring", "decisions", "framework"],
    order: 8,
  },

  {
    id: "pros-cons-framework",
    title: "Pros & Cons Framework",
    description: "Evaluate options using a structured pros and cons analysis with weighting.",
    promptText: `Conduct a comprehensive pros and cons analysis.

Decision: [WHAT YOU'RE DECIDING]
Options to Evaluate:
[OPTION 1]
[OPTION 2]
[OPTION 3 - ADD MORE AS NEEDED]
Context: [ANY ADDITIONAL CONTEXT]

For each option, analyze:

1. Pros (Advantages)
   - List all possible benefits
   - Categorize by:
     * Financial benefits
     * Strategic benefits
     * Operational benefits
     * Personal/Team benefits
     * Intangible benefits

2. Cons (Disadvantages)
   - List all possible drawbacks
   - Categorize by:
     * Financial costs
     * Strategic risks
     * Operational challenges
     * Personal/Team impacts
     * Intangible drawbacks

3. Weighting
   For each pro and con:
   - Rate impact: High/Medium/Low
   - Rate likelihood: Certain/Likely/Possible/Unlikely
   - Calculate weighted significance (Impact × Likelihood)

4. Net Assessment
   For each option:
   - Total weighted pros
   - Total weighted cons
   - Net score (pros minus cons)
   - Key swing factors (pros/cons that matter most)

5. Comparison
   - Side-by-side comparison of options
   - Which option has the best net score?
   - Which pros/cons are most critical?
   - Are there any "deal-breaker" cons?

6. Recommendation
   - Recommended option
   - Key factors driving the decision
   - How to mitigate the main cons
   - Conditions that would change the recommendation`,
    placeholders: [
      "WHAT YOU'RE DECIDING",
      "OPTION 1",
      "OPTION 2",
      "OPTION 3 - ADD MORE AS NEEDED",
      "ANY ADDITIONAL CONTEXT",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "strategy-decision",
    categoryId: "decision-frameworks",
    exampleOutput:
      "A structured pros and cons analysis with weighting, comparison, and clear recommendation.",
    customizationNotes: [
      "Add more options as needed",
      "Include specific categories relevant to your decision",
      "Mention any time or resource constraints",
    ],
    tags: ["pros-cons", "decision-making", "analysis", "framework"],
    order: 9,
  },

  {
    id: "opportunity-cost-analysis",
    title: "Opportunity Cost Analysis",
    description:
      "Evaluate decisions by considering what you're giving up by choosing one option over others.",
    promptText: `Conduct an opportunity cost analysis.

Decision: [WHAT YOU'RE DECIDING]
Chosen Option: [WHAT YOU'RE LEANING TOWARD]
Alternative Options:
[ALT OPTION 1]
[ALT OPTION 2]
[ADD MORE AS NEEDED]
Resources Being Allocated: [MONEY, TIME, TALENT]

Analyze opportunity costs:

1. Direct Investment
   - What resources are you committing?
   - Money: [AMOUNT]
   - Time: [TIME FRAME]
   - People: [WHO AND HOW MUCH]
   - Attention/Focus: [WHAT ELSE GETS DEPRIORITIZED]

2. Foregone Benefits of Alternatives
   For each alternative not chosen:
   - What benefits would it have delivered?
   - Quantify where possible (revenue, savings, growth)
   - Timeline for those benefits
   - Probability of achieving them
   - Expected value (benefit × probability)

3. Opportunity Cost Calculation
   - Sum of expected values of foregone alternatives
   - Compare to expected value of chosen option
   - Net opportunity cost

4. Intangible Costs
   - Learning opportunities missed
   - Relationships not developed
   - Strategic positions not taken
   - Option value (flexibility given up)

5. Breakeven Analysis
   - What must the chosen option deliver to justify the opportunity cost?
   - Minimum acceptable outcome
   - Timeline for achieving breakeven

6. Mitigation Considerations
   - Can you capture some benefits of alternatives later?
   - Can you maintain option value?
   - Are there "and" vs. "or" solutions?

7. Final Assessment
   - Is the opportunity cost acceptable?
   - Confidence in the chosen option
   - Conditions for revisiting the decision`,
    placeholders: [
      "WHAT YOU'RE DECIDING",
      "WHAT YOU'RE LEANING TOWARD",
      "ALT OPTION 1",
      "ALT OPTION 2",
      "ADD MORE AS NEEDED",
      "MONEY, TIME, TALENT",
      "AMOUNT",
      "TIME FRAME",
      "WHO AND HOW MUCH",
      "WHAT ELSE GETS DEPRIORITIZED",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "strategy-decision",
    categoryId: "decision-frameworks",
    exampleOutput:
      "A thorough opportunity cost analysis with quantified foregone benefits and breakeven requirements.",
    customizationNotes: [
      "Include specific numbers where available",
      "Mention any partial alternatives (hybrid approaches)",
      "Add any strategic considerations beyond direct ROI",
    ],
    tags: ["opportunity-cost", "decision-making", "trade-offs", "analysis"],
    order: 10,
  },

  {
    id: "decision-tree-builder",
    title: "Decision Tree Builder",
    description: "Map decisions with multiple possible outcomes and probabilities.",
    promptText: `Build a decision tree for this situation.

Decision: [WHAT YOU'RE DECIDING]
Initial Options:
[OPTION 1]
[OPTION 2]
[ADD MORE AS NEEDED]
Context: [RELEVANT CONTEXT]

Build the decision tree:

1. Decision Structure
   - Start with initial decision node
   - Map each option's possible outcomes
   - For each outcome, identify:
     * Probability (0-100%)
     * Payoff/value (positive or negative)
     * Time to realize

2. Tree Mapping
   For each option:
   - First-level outcomes (what happens next)
   - Second-level outcomes (if applicable)
   - Continue until you reach terminal outcomes
   - Label each branch with probability
   - Label each endpoint with value

3. Expected Value Calculation
   For each option:
   - Calculate expected value at each node:
     EV = Σ(Probability × Payoff)
   - Roll up from terminal nodes to decision
   - Compare expected values of options

4. Sensitivity Analysis
   - What if probabilities are wrong?
   - What if payoffs are different?
   - Which variables most affect the decision?
   - Break-even analysis

5. Risk Assessment
   - Best case outcome for each option
   - Worst case outcome for each option
   - Range of possible outcomes
   - Risk-adjusted evaluation

6. Recommendation
   - Option with highest expected value
   - Risk tolerance considerations
   - When to choose a lower-EV but lower-risk option
   - How to reduce risk while maintaining upside

7. Monitoring
   - What to track as events unfold
   - Decision points to revisit
   - When to change course`,
    placeholders: [
      "WHAT YOU'RE DECIDING",
      "OPTION 1",
      "OPTION 2",
      "ADD MORE AS NEEDED",
      "RELEVANT CONTEXT",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "strategy-decision",
    categoryId: "decision-frameworks",
    exampleOutput:
      "A complete decision tree with probabilities, expected values, sensitivity analysis, and recommendation.",
    customizationNotes: [
      "Include any known probabilities or ranges",
      "Mention your risk tolerance",
      "Add any constraints on what outcomes are acceptable",
    ],
    tags: ["decision-tree", "expected-value", "probability", "risk"],
    order: 11,
  },

  {
    id: "decision-timeline-urgency",
    title: "Decision Timeline & Urgency Framework",
    description:
      "Assess decision urgency and create an appropriate timeline for thorough evaluation.",
    promptText: `Assess the appropriate timeline for this decision.

Decision: [WHAT YOU'RE DECIDING]
Current Pressures: [TIME PRESSURES, DEADLINES, EXTERNAL FACTORS]
Impact Level: [HIGH/MEDIUM/LOW IMPACT]
Reversibility: [REVERSIBLE/HARD TO REVERSE/PERMANENT]
Stakeholders: [WHO IS AFFECTED]

Analyze timing and urgency:

1. Urgency Assessment
   - Time-sensitive factors:
     * External deadlines (regulatory, competitive, market)
     * Internal deadlines (budget, planning cycles)
     * Opportunity windows
     * Escalation risks if delayed
   - Urgency level: Critical/High/Medium/Low

2. Impact Analysis
   - Scale of impact (who/how many affected)
   - Duration of impact (one-time vs. ongoing)
   - Strategic importance
   - Financial implications
   - Impact level: High/Medium/Low

3. Reversibility Assessment
   - Can this decision be undone?
   - Cost of reversal
   - Time to reverse
   - Consequences of wrong decision
   - Reversibility: Easy/Difficult/Impossible

4. Timeline Recommendation
   Based on urgency × impact × reversibility:
   - Recommended timeline (hours/days/weeks)
   - Evaluation depth (quick/thorough/comprehensive)
   - Consultation needs (none/limited/extensive)
   - Information requirements

5. Decision Process Design
   For the recommended timeline:
   - Steps to include
   - Time allocation per step
   - Checkpoints and reviews
   - Approval requirements
   - Documentation needs

6. Red Flags
   - Signs you're rushing unnecessarily
   - Signs you're over-analyzing
   - When to accelerate
   - When to pause

7. Communication
   - How to set expectations with stakeholders
   - How to communicate timeline
   - How to manage urgency`,
    placeholders: [
      "WHAT YOU'RE DECIDING",
      "TIME PRESSURES, DEADLINES, EXTERNAL FACTORS",
      "HIGH/MEDIUM/LOW IMPACT",
      "REVERSIBLE/HARD TO REVERSE/PERMANENT",
      "WHO IS AFFECTED",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "strategy-decision",
    categoryId: "decision-frameworks",
    exampleOutput:
      "A timing and urgency assessment with clear timeline recommendation and decision process design.",
    customizationNotes: [
      "Be specific about deadlines or time pressures",
      "Mention any stakeholder expectations",
      "Add any organizational decision-making norms",
    ],
    tags: ["decision-timing", "urgency", "process", "planning"],
    order: 12,
  },

  {
    id: "bias-detection-decisions",
    title: "Decision Bias Detection",
    description: "Identify and mitigate cognitive biases in your decision-making process.",
    promptText: `Help me check for biases in this decision.

Decision: [WHAT YOU'RE DECIDING]
Preferred Option: [WHAT YOU'RE LEANING TOWARD]
Alternative Options: [OTHER OPTIONS YOU'RE CONSIDERING]
Stakeholders: [WHO IS INVOLVED OR AFFECTED]

Check for common biases:

1. Confirmation Bias
   - Am I seeking information that confirms my preference?
   - Am I discounting contradictory evidence?
   - Have I genuinely considered disconfirming data?
   - Test: What evidence would make me change my mind?

2. Anchoring Bias
   - Am I overly influenced by the first information I received?
   - What anchors am I carrying (price, expectations, comparisons)?
   - Have I adjusted sufficiently from initial anchors?
   - Test: What if I started from a different anchor?

3. Sunk Cost Fallacy
   - Am I continuing because of past investment?
   - What past costs am I considering?
   - Would I make this choice starting from today?
   - Test: If I hadn't already invested [X], would I start now?

4. Availability Bias
   - Am I over-weighting recent or memorable examples?
   - What recent events are influencing me?
   - Am I neglecting less visible but important data?
   - Test: What data am I not seeing?

5. Overconfidence Bias
   - How confident am I? (Is it justified?)
   - What could go wrong that I'm not considering?
   - Have I sought disconfirming perspectives?
   - Test: What would a skeptic say?

6. Status Quo Bias
   - Am I favoring the current state because it's familiar?
   - Am I over-estimating transition costs?
   - What if the default was the opposite choice?
   - Test: Would I switch if I wasn't already here?

7. Bias Mitigation
   For each bias detected:
   - Specific mitigation strategy
   - How to counteract the bias
   - What additional analysis to do

8. Process Improvement
   - How to make this decision more objectively
   - Who should provide independent review
   - What additional perspectives to seek`,
    placeholders: [
      "WHAT YOU'RE DECIDING",
      "WHAT YOU'RE LEANING TOWARD",
      "OTHER OPTIONS YOU'RE CONSIDERING",
      "WHO IS INVOLVED OR AFFECTED",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "strategy-decision",
    categoryId: "decision-frameworks",
    exampleOutput:
      "A comprehensive bias check with identification of potential biases and specific mitigation strategies.",
    customizationNotes: [
      "Be honest about your preferences and emotions",
      "Include any stakeholder perspectives that might create bias",
      "Mention any past experiences influencing this decision",
    ],
    tags: ["biases", "decision-making", "cognitive-bias", "objectivity"],
    order: 13,
  },

  {
    id: "group-decision-facilitation",
    title: "Group Decision Facilitation",
    description: "Facilitate effective group decisions with diverse stakeholders and opinions.",
    promptText: `Design a group decision-making process.

Decision: [WHAT NEEDS TO BE DECIDED]
Stakeholders: [WHO NEEDS TO BE INVOLVED]
Group Size: [NUMBER OF PEOPLE]
Time Available: [DURATION]
Context: [ANY CONFLICTS OR CONSIDERATIONS]

Design the process:

1. Pre-Meeting Preparation
   - Information to distribute in advance
   - Pre-work for participants
   - Individual input collection method
   - Agenda planning

2. Meeting Structure
   - Opening and objectives (5-10% of time)
   - Information sharing (15-20% of time)
   - Discussion and debate (40-50% of time)
   - Decision-making (20-30% of time)
   - Closing and alignment (10% of time)

3. Facilitation Techniques
   - How to ensure all voices are heard
   - How to manage dominant personalities
   - How to handle conflict
   - How to build consensus
   - Techniques to use:
     * Round-robin input
     * Anonymous voting
     * Small group breakout
     * Devil's advocate assignment

4. Decision Method
   Choose appropriate method:
   - Consensus (everyone can live with it)
   - Majority vote
   - Expert input
   - Delegation to sub-group
   - Leader decision with input

5. Documentation
   - Options considered
   - Pros and cons discussed
   - Concerns raised and addressed
   - Final decision and rationale
   - Dissenting views (if any)

6. Follow-up
   - How to communicate the decision
   - How to address those who disagree
   - How to maintain alignment
   - How to track implementation

7. Red Flags
   - Signs of groupthink
   - Signs of decision fatigue
   - Signs that consensus is artificial
   - When to extend the discussion
   - When to decide and move forward`,
    placeholders: [
      "WHAT NEEDS TO BE DECIDED",
      "WHO NEEDS TO BE INVOLVED",
      "NUMBER OF PEOPLE",
      "DURATION",
      "ANY CONFLICTS OR CONSIDERATIONS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "strategy-decision",
    categoryId: "decision-frameworks",
    exampleOutput:
      "A complete group decision facilitation plan with meeting structure, techniques, and follow-up guidance.",
    customizationNotes: [
      "Include specific personality dynamics if known",
      "Mention any past decision-making challenges",
      "Add organizational or cultural considerations",
    ],
    tags: ["group-decision", "facilitation", "consensus", "stakeholders"],
    order: 14,
  },

  {
    id: "go-no-go-decision",
    title: "Go/No-Go Decision Framework",
    description: "Make clear proceed/stop decisions on projects, initiatives, or opportunities.",
    promptText: `Conduct a Go/No-Go decision analysis.

Opportunity/Project: [WHAT YOU'RE EVALUATING]
Type: [NEW PROJECT/INITIATIVE/INVESTMENT/OPPORTUNITY]
Resource Requirements: [WHAT YOU NEED TO COMMIT]
Timeline: [EXPECTED DURATION]

Evaluate using the Go/No-Go framework:

1. Strategic Alignment (Go/No-Go/Maybe)
   - Does this advance our strategy?
   - Is this a priority area?
   - Does it create competitive advantage?
   - Score: [ ]/10

2. Value Proposition (Go/No-Go/Maybe)
   - Expected ROI/return
   - Strategic value beyond financial
   - Learning and option value
   - Score: [ ]/10

3. Feasibility (Go/No-Go/Maybe)
   - Technical feasibility
   - Resource availability
   - Capability fit
   - Timeline achievability
   - Score: [ ]/10

4. Risk Assessment (Go/No-Go/Maybe)
   - Probability of success
   - Consequence of failure
   - Reversibility
   - Risk mitigation options
   - Score: [ ]/10

5. Resource Availability (Go/No-Go/Maybe)
   - Budget availability
   - Team capacity
   - Leadership attention
   - Score: [ ]/10

6. Timing (Go/No-Go/Maybe)
   - Is this the right time?
   - Window of opportunity
   - Competitive dynamics
   - Score: [ ]/10

7. Overall Assessment
   - Total Score: [ ]/60
   - Go threshold: _____ points
   - No-Go threshold: _____ points
   - Recommendation: GO / NO-GO / DEFER
   - Confidence: [ ]%

8. Conditions
   - Conditions for Go (what must be true)
   - Conditions that would trigger No-Go
   - Watch items during execution`,
    placeholders: [
      "WHAT YOU'RE EVALUATING",
      "NEW PROJECT/INITIATIVE/INVESTMENT/OPPORTUNITY",
      "WHAT YOU NEED TO COMMIT",
      "EXPECTED DURATION",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "strategy-decision",
    categoryId: "decision-frameworks",
    exampleOutput:
      "A clear Go/No-Go assessment with scoring across six dimensions and a definitive recommendation.",
    customizationNotes: [
      "Include any specific thresholds or criteria",
      "Mention any organizational priorities",
      "Add any external factors affecting timing",
    ],
    tags: ["go-no-go", "decision-making", "evaluation", "projects"],
    order: 15,
  },

  // ============================================================================
  // RISK ASSESSMENT (7 prompts)
  // ============================================================================

  {
    id: "risk-matrix-generator",
    title: "Risk Matrix Generator",
    description: "Create a comprehensive risk matrix for projects, initiatives, or decisions.",
    promptText: `Generate a risk matrix for:

Project/Initiative: [NAME]
Scope: [WHAT THIS PROJECT ENCOMPASSES]
Duration: [TIMELINE]
Context: [ANY RELEVANT CONTEXT]

Create a risk assessment:

1. Risk Identification
   List risks across categories:
   - Financial risks (budget overruns, revenue shortfalls)
   - Operational risks (execution, capacity, dependencies)
   - Market risks (competition, demand, pricing)
   - Technical risks (technology, feasibility, integration)
   - People risks (team, skills, availability)
   - External risks (regulatory, economic, supply chain)
   - Reputational risks (brand, customer, stakeholder)

2. Risk Assessment Matrix
   For each risk, assess:
   - Likelihood: 1-5 (1=Rare, 5=Almost Certain)
   - Impact: 1-5 (1=Negligible, 5=Catastrophic)
   - Risk Score = Likelihood × Impact (1-25)
   - Risk Level:
     * 1-5: Low (green)
     * 6-12: Medium (yellow)
     * 13-25: High (red)

3. Risk Prioritization
   - Critical risks (score 15-25): Immediate attention
   - High risks (score 10-14): Active monitoring
   - Medium risks (score 6-9): Periodic review
   - Low risks (score 1-5): Accept and monitor

4. Mitigation Strategies
   For Critical and High risks:
   - Prevention: How to reduce likelihood
   - Contingency: How to reduce impact
   - Transfer: Can insurance/partners handle?
   - Accept: Is the risk worth taking?
   - Owner: Who is responsible?

5. Monitoring Plan
   - Leading indicators for each risk
   - Review frequency
   - Escalation triggers
   - Reporting format

6. Risk Register Format
   Template for ongoing risk tracking`,
    placeholders: ["NAME", "WHAT THIS PROJECT ENCOMPASSES", "TIMELINE", "ANY RELEVANT CONTEXT"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "strategy-decision",
    categoryId: "risk-assessment",
    exampleOutput:
      "A complete risk matrix with 15-20 identified risks, scoring, prioritization, and mitigation strategies.",
    customizationNotes: [
      "Include any known risks or concerns",
      "Mention past projects and their risk patterns",
      "Add organizational risk tolerance",
    ],
    tags: ["risk-matrix", "risk-assessment", "project-management", "mitigation"],
    order: 16,
  },

  {
    id: "pre-mortem-analysis",
    title: "Pre-Mortem Analysis",
    description:
      "Identify potential failures before they happen by imagining the project has already failed.",
    promptText: `Conduct a pre-mortem analysis.

Project/Initiative: [NAME]
Project Overview: [WHAT YOU'RE TRYING TO ACHIEVE]
Timeline: [WHEN IT LAUNCHES]
Team: [WHO'S INVOLVED]

Imagine it's [DATE AFTER LAUNCH] and the project has failed spectacularly.

1. Failure Scenario
   - Describe what went wrong in vivid detail
   - What does failure look like?
   - Who is disappointed? How?
   - What are the consequences?

2. Root Causes of Failure
   Brainstorm all possible reasons for failure:
   - Planning failures
   - Execution failures
   - External factors
   - Assumptions that were wrong
   - Stakeholder issues
   - Resource constraints
   - Technical problems
   - Market dynamics

3. Risk Ranking
   For each potential cause:
   - Likelihood (1-5)
   - Impact if it occurs (1-5)
   - Detectability (can we see it coming?)
   - Preventability (can we stop it?)

4. Prevention Plan
   For top 5-10 risks:
   - Early warning indicators
   - Prevention strategies
   - Contingency plans if it happens anyway
   - Owner for monitoring

5. Assumptions Testing
   - List key assumptions
   - How to test each assumption early
   - What would invalidate each assumption
   - Backup plans if assumptions are wrong

6. Success Criteria Revision
   - Based on pre-mortem insights
   - Are success criteria realistic?
   - What constraints are we missing?
   - What resources are we overestimating?

7. Implementation
   - How to incorporate these insights
   - What changes to make to the plan
   - What monitoring to add`,
    placeholders: [
      "NAME",
      "WHAT YOU'RE TRYING TO ACHIEVE",
      "WHEN IT LAUNCHES",
      "WHO'S INVOLVED",
      "DATE AFTER LAUNCH",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "strategy-decision",
    categoryId: "risk-assessment",
    exampleOutput:
      "A comprehensive pre-mortem with failure scenarios, root cause analysis, and prevention strategies.",
    customizationNotes: [
      "Include any concerns or doubts team members have",
      "Mention similar past projects and what went wrong",
      "Add specific stakeholder expectations",
    ],
    tags: ["pre-mortem", "risk-assessment", "planning", "failure-analysis"],
    order: 17,
  },

  {
    id: "scenario-risk-analysis",
    title: "Scenario Risk Analysis",
    description:
      "Analyze how different scenarios affect your project, initiative, or organization.",
    promptText: `Conduct a scenario risk analysis.

Subject: [PROJECT/INITIATIVE/ORGANIZATION]
Time Horizon: [TIMEFRAME]
Current Assumptions: [WHAT YOU ASSUME TO BE TRUE]
Key Variables: [WHAT COULD CHANGE]

Develop and analyze scenarios:

1. Scenario Development
   Create 4 scenarios:

   BASE CASE (Most Likely)
   - Current trends continue
   - Assumptions hold
   - Incremental changes
   - What happens in this scenario?

   BEST CASE (Optimistic)
   - Everything goes right
   - Positive external changes
   - Better-than-expected execution
   - What happens in this scenario?

   WORST CASE (Pessimistic)
   - Everything goes wrong
   - Negative external changes
   - Execution challenges
   - What happens in this scenario?

   BLACK SWAN (Unexpected)
   - Surprising events occur
   - Fundamental shifts
   - Game-changing developments
   - What happens in this scenario?

2. Impact Analysis
   For each scenario:
   - Financial impact (revenue, costs, valuation)
   - Operational impact (capacity, capabilities)
   - Strategic impact (positioning, competitive)
   - Stakeholder impact (customers, employees, investors)
   - Timeline impact (delays, accelerations)

3. Vulnerability Assessment
   - Which scenarios are we most vulnerable to?
   - What creates the vulnerability?
   - What would break us?
   - What's our "fatal flaw"?

4. Resilience Building
   - How to become more scenario-resilient
   - What works across multiple scenarios
   - What to avoid (scenario-specific bets)
   - Hedge strategies

5. Early Warning System
   - What to monitor for each scenario
   - Leading indicators
   - Trigger points for action
   - Decision rules for pivoting

6. Strategy Selection
   - Strategies robust across scenarios
   - Contingent strategies (if/then)
   - No-regrets moves
   - Options to preserve`,
    placeholders: [
      "PROJECT/INITIATIVE/ORGANIZATION",
      "TIMEFRAME",
      "WHAT YOU ASSUME TO BE TRUE",
      "WHAT COULD CHANGE",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "strategy-decision",
    categoryId: "risk-assessment",
    exampleOutput:
      "A comprehensive scenario analysis with four well-developed scenarios and strategic recommendations.",
    customizationNotes: [
      "Include specific variables that could change",
      "Mention any known risks or opportunities",
      "Add any constraints on flexibility or hedging",
    ],
    tags: ["scenarios", "risk-analysis", "contingency-planning", "resilience"],
    order: 18,
  },

  {
    id: "dependency-risk-assessment",
    title: "Dependency Risk Assessment",
    description: "Identify and manage risks from internal and external dependencies.",
    promptText: `Assess dependency risks for:

Project/Initiative: [NAME]
Description: [WHAT YOU'RE BUILDING OR CHANGING]
Timeline: [DURATION]

Map and assess dependencies:

1. Dependency Mapping
   List all dependencies:
   - External dependencies:
     * Vendors and suppliers
     * Partners and alliances
     * Regulatory approvals
     * Customer actions required
     * Third-party APIs/services
   - Internal dependencies:
     * Other teams/projects
     * Shared resources
     * Budget approvals
     * Technology stack
     * Key personnel
   - Sequential dependencies:
     * Must complete before starting
     * Must launch simultaneously
     * Blocks other projects

2. Risk Assessment per Dependency
   For each dependency:
   - Criticality (if this fails, project fails? Yes/No)
   - Reliability (track record, confidence level)
   - Substitutability (can we find alternatives?)
   - Control (do we control this?)
   - Timeline alignment
   - Risk score: 1-10

3. Single Points of Failure
   - Dependencies that could block everything
   - Uncontrollable dependencies
   - High-risk, low-substitutability items
   - Concentrated risks (multiple dependencies on one entity)

4. Mitigation Strategies
   For critical/high-risk dependencies:
   - Redundancy (backup options)
   - Substitutes (alternative approaches)
   - Control (bring in-house if critical)
   - Buffer (extra time/resources)
   - Contractual protections
   - Monitoring (early warning of issues)

5. Sequencing Optimization
   - Parallel where possible (reduce dependencies)
   - Phased delivery (decouple dependencies)
   - MVP approach (reduce scope, reduce dependencies)
   - What to do if dependencies are late

6. Communication
   - Dependency owners to inform
   - Expectations to set
   - Checkpoints to establish
   - Escalation paths if issues arise`,
    placeholders: ["NAME", "WHAT YOU'RE BUILDING OR CHANGING", "DURATION"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "strategy-decision",
    categoryId: "risk-assessment",
    exampleOutput:
      "A complete dependency risk assessment with mapping, scoring, and mitigation strategies.",
    customizationNotes: [
      "Include known dependencies and concerns",
      "Mention any past dependency issues",
      "Add any organizational constraints on alternatives",
    ],
    tags: ["dependencies", "risk-assessment", "project-management", "vendor-management"],
    order: 19,
  },

  {
    id: "compliance-risk-checklist",
    title: "Compliance & Regulatory Risk Checklist",
    description: "Identify compliance and regulatory risks for your initiative or organization.",
    promptText: `Conduct a compliance and regulatory risk assessment.

Initiative/Organization: [NAME]
Industry: [YOUR INDUSTRY]
Geographies: [WHERE YOU OPERATE]
Description: [WHAT YOU DO OR ARE PLANNING]

Assess compliance risks:

1. Regulatory Mapping
   Identify applicable regulations:
   - Industry-specific regulations:
     * [List for your industry]
   - General business regulations:
     * Labor and employment
     * Tax and financial reporting
     * Data privacy (GDPR, CCPA, etc.)
     * Consumer protection
     * Intellectual property
   - Geographic-specific:
     * Country/state/local requirements
   - Size-triggered regulations:
     * Regulations that apply at your scale

2. Risk Assessment
   For each applicable regulation:
   - Current compliance status (Compliant/Partial/Gap/Unknown)
   - Complexity (Simple/Moderate/Complex)
   - Enforcement risk (Low/Medium/High)
   - Consequences of non-compliance:
     * Fines and penalties
     * Business restrictions
     * Reputational damage
     * Legal liability
   - Risk score: 1-10

3. Gap Analysis
   - Current state vs. requirements
   - What's missing or inadequate
   - Priority gaps to address

4. Action Plan
   For high/medium risks:
   - Required actions
   - Timeline for compliance
   - Owner/accountability
   - Resource requirements
   - Budget impact

5. Monitoring Requirements
   - Ongoing compliance activities
   - Reporting requirements
   - Audit needs
   - Training requirements
   - Documentation to maintain

6. Future Considerations
   - Upcoming regulatory changes
   - Trends in enforcement
   - Expansion implications (new markets, products)

7. Expert Validation
   - Where legal/regulatory expertise is needed
   - When to consult specialists
   - External resources to consider`,
    placeholders: ["NAME", "YOUR INDUSTRY", "WHERE YOU OPERATE", "WHAT YOU DO OR ARE PLANNING"],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "strategy-decision",
    categoryId: "risk-assessment",
    exampleOutput:
      "A comprehensive compliance risk assessment with regulatory mapping, gap analysis, and action plan.",
    customizationNotes: [
      "Include any known compliance issues or concerns",
      "Mention any upcoming regulatory changes you're aware of",
      "Add any geographic or industry-specific considerations",
    ],
    tags: ["compliance", "regulatory", "risk-assessment", "legal"],
    order: 20,
  },

  {
    id: "reputation-risk-assessment",
    title: "Reputation Risk Assessment",
    description: "Assess and manage risks to your brand, trust, and stakeholder relationships.",
    promptText: `Conduct a reputation risk assessment.

Organization/Initiative: [NAME]
Stakeholders: [WHO CARES ABOUT YOUR REPUTATION]
Current Sentiment: [HOW YOU'RE PERCEIVED NOW]
Changes Planned: [WHAT'S CHANGING THAT COULD AFFECT REPUTATION]

Assess reputation risks:

1. Stakeholder Mapping
   For each stakeholder group:
   - Who they are (customers, employees, investors, partners, community, regulators)
   - What they expect from you
   - What would damage their trust
   - Their influence on your reputation (High/Medium/Low)
   - Current sentiment (Positive/Neutral/Negative)

2. Reputation Risk Scenarios
   What could damage reputation?
   - Product/service failures
   - Ethical lapses or misconduct
   - Poor customer treatment
   - Data privacy breaches
   - Environmental impact
   - Leadership behavior
   - Employee practices
   - Partner/supplier behavior
   - Communication failures
   - Social media backlash

3. Risk Assessment
   For each scenario:
   - Likelihood (1-5)
   - Impact on trust (1-5)
   - Reach (how many affected)
   - Duration (how long would last)
   - Recoverability (easy/hard)
   - Risk score (1-25)

4. Vulnerability Analysis
   - Where are we most exposed?
   - What trust anchors are weak?
   - What expectations are we not meeting?
   - What could trigger a crisis?

5. Mitigation Strategies
   - Prevention: What to put in place
   - Monitoring: Early warning systems
   - Response: Crisis response plan
   - Recovery: Rebuilding trust

6. Trust-Building Foundation
   - Transparency practices
   - Accountability mechanisms
   - Stakeholder engagement
   - Consistency in actions
   - Values alignment

7. Monitoring
   - Sentiment tracking
   - Media and social monitoring
   - Stakeholder feedback channels
   - Leading indicators of trust issues`,
    placeholders: [
      "NAME",
      "WHO CARES ABOUT YOUR REPUTATION",
      "HOW YOU'RE PERCEIVED NOW",
      "WHAT'S CHANGING THAT COULD AFFECT REPUTATION",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "strategy-decision",
    categoryId: "risk-assessment",
    exampleOutput:
      "A comprehensive reputation risk assessment with stakeholder mapping, scenarios, and mitigation strategies.",
    customizationNotes: [
      "Include any past reputation issues",
      "Mention specific stakeholder concerns",
      "Add any industry-specific reputation factors",
    ],
    tags: ["reputation", "trust", "brand", "stakeholders"],
    order: 21,
  },

  {
    id: "financial-risk-exposure",
    title: "Financial Risk Exposure Analysis",
    description: "Assess financial risks across revenue, costs, cash flow, and capital.",
    promptText: `Conduct a financial risk exposure analysis.

Organization/Project: [NAME]
Current Financial State: [REVENUE, COSTS, PROFITS]
Time Horizon: [ANALYSIS PERIOD]
Context: [INDUSTRY, STAGE, ANY RELEVANT CONTEXT]

Assess financial risks:

1. Revenue Risks
   - Concentration risks:
     * Customer concentration (% from top customers)
     * Product concentration (% from top products)
     * Channel concentration
   - Market risks:
     * Demand volatility
     * Pricing pressure
     * Competitive displacement
   - Recurrence risks:
     * One-time vs. recurring revenue mix
     * Churn and retention
     * Contract renewal rates
   - Risk score per category (1-10)

2. Cost Risks
   - Fixed vs. variable cost structure
   - Cost inflation risks
   - Supply chain vulnerabilities
   - Labor cost risks
   - Technology disruption risks
   - Risk score per category (1-10)

3. Cash Flow Risks
   - Timing mismatches (inflows vs. outflows)
   - Working capital needs
   - Seasonality or cyclicality
   - Customer payment delays
   - Vendor payment terms
   - Runway and buffer analysis
   - Risk score per category (1-10)

4. Capital Structure Risks
   - Debt obligations and covenants
   - Interest rate exposure
   - Equity dilution risks
   - Funding access
   - Valuation sensitivity
   - Risk score per category (1-10)

5. Scenario Analysis
   - Revenue stress test (-20%, -40%)
   - Cost escalation test (+20%, +40%)
   - Combined stress scenarios
   - Break-even analysis
   - Cash crunch scenarios

6. Mitigation Strategies
   - Diversification (customers, products, channels)
   - Flexibility (variable costs, contingent capacity)
   - Reserves (cash buffers, credit access)
   - Hedging (financial instruments, contracts)
   - Insurance (coverage for key risks)

7. Early Warning Indicators
   - Metrics to monitor
   - Trigger levels for action
   - Contingency plans to activate`,
    placeholders: [
      "NAME",
      "REVENUE, COSTS, PROFITS",
      "ANALYSIS PERIOD",
      "INDUSTRY, STAGE, ANY RELEVANT CONTEXT",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "strategy-decision",
    categoryId: "risk-assessment",
    exampleOutput:
      "A comprehensive financial risk analysis across revenue, costs, cash flow, and capital with mitigation strategies.",
    customizationNotes: [
      "Include specific financial data if available",
      "Mention any known financial vulnerabilities",
      "Add any industry-specific financial risks",
    ],
    tags: ["financial-risk", "cash-flow", "revenue", "risk-analysis"],
    order: 22,
  },

  // ============================================================================
  // SCENARIO PLANNING (6 prompts)
  // ============================================================================

  {
    id: "scenario-planning-framework",
    title: "Scenario Planning Framework",
    description: "Develop multiple plausible futures to inform robust strategy.",
    promptText: `Design a scenario planning framework.

Topic/Focus: [WHAT YOU'RE PLANNING FOR]
Time Horizon: [HOW FAR OUT TO LOOK]
Context: [INDUSTRY, SITUATION, CONTEXT]

Develop scenarios:

1. Key Uncertainties
   Identify the critical uncertainties:
   - What could fundamentally change?
   - What variables are most uncertain?
   - What's outside your control?
   - Select the 2 most critical uncertainties

2. Scenario Matrix
   Create 4 scenarios from the 2 key uncertainties:
   - Uncertainty 1: [NAME] → Low/High
   - Uncertainty 2: [NAME] → Low/High

   SCENARIO 1: [NAME]
   - Uncertainty 1: [Low/High]
   - Uncertainty 2: [Low/High]
   - Narrative description
   - What the world looks like
   - Key characteristics

   SCENARIO 2: [NAME]
   - Uncertainty 1: [Low/High]
   - Uncertainty 2: [Low/High]
   - Narrative description
   - What the world looks like
   - Key characteristics

   SCENARIO 3: [NAME]
   - Uncertainty 1: [Low/High]
   - Uncertainty 2: [Low/High]
   - Narrative description
   - What the world looks like
   - Key characteristics

   SCENARIO 4: [NAME]
   - Uncertainty 1: [Low/High]
   - Uncertainty 2: [Low/High]
   - Narrative description
   - What the world looks like
   - Key characteristics

3. Implications Analysis
   For each scenario:
   - Opportunities it creates
   - Threats it introduces
   - Required capabilities
   - Strategic posture

4. Strategy Testing
   - How does your current strategy fare in each scenario?
   - Where are you vulnerable?
   - Where are you well-positioned?

5. Robust Strategy
   - What works across all scenarios?
   - What contingencies to prepare?
   - What options to preserve?
   - What bets to make?`,
    placeholders: [
      "WHAT YOU'RE PLANNING FOR",
      "HOW FAR OUT TO LOOK",
      "INDUSTRY, SITUATION, CONTEXT",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "strategy-decision",
    categoryId: "scenario-planning",
    exampleOutput:
      "A complete scenario planning framework with four well-developed scenarios and strategic implications.",
    customizationNotes: [
      "Include known uncertainties you're already tracking",
      "Mention any past scenario planning work",
      "Add constraints on strategic flexibility",
    ],
    tags: ["scenario-planning", "strategy", "futures", "uncertainty"],
    order: 23,
  },

  {
    id: "best-case-worst-case-analysis",
    title: "Best Case / Worst Case Analysis",
    description: "Analyze outcomes across optimistic, pessimistic, and realistic scenarios.",
    promptText: `Conduct a best case / worst case / base case analysis.

Decision/Project: [WHAT YOU'RE ANALYZING]
Time Horizon: [TIMEFRAME]
Current Assumptions: [WHAT YOU ASSUME]

Develop three scenarios:

BASE CASE (Most Likely)
- Assumptions:
  * [List key assumptions with realistic values]
- Expected outcome:
  * [Quantitative results]
  * [Qualitative description]
- Probability: [ ]%

BEST CASE (Optimistic)
- Assumptions:
  * [List key assumptions with favorable values]
- Expected outcome:
  * [Quantitative results]
  * [Qualitative description]
- Probability: [ ]%
- What would need to go right?

WORST CASE (Pessimistic)
- Assumptions:
  * [List key assumptions with unfavorable values]
- Expected outcome:
  * [Quantitative results]
  * [Qualitative description]
- Probability: [ ]%
- What could go wrong?

ANALYSIS

1. Range of Outcomes
- Best case outcome: [VALUE]
- Base case outcome: [VALUE]
- Worst case outcome: [VALUE]
- Expected value = (Best×P) + (Base×P) + (Worst×P) = [VALUE]

2. Upside/Downside Assessment
- Upside potential: [Best - Base] = [VALUE]
- Downside risk: [Base - Worst] = [VALUE]
- Asymmetry: Is upside > downside?

3. Decision Framework
- Given the range, is this worth pursuing?
- Can we tolerate the worst case?
- How to enhance the best case?
- How to mitigate the worst case?

4. Breakeven Analysis
- What minimum outcome is acceptable?
- What probability of worst case is tolerable?`,
    placeholders: ["WHAT YOU'RE ANALYZING", "TIMEFRAME", "WHAT YOU ASSUME"],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "strategy-decision",
    categoryId: "scenario-planning",
    exampleOutput:
      "A clear three-scenario analysis with quantitative ranges, decision framework, and breakeven assessment.",
    customizationNotes: [
      "Include specific numbers if available",
      "Mention any known risks or opportunities",
      "Add your risk tolerance level",
    ],
    tags: ["scenarios", "best-case", "worst-case", "risk-analysis"],
    order: 24,
  },

  {
    id: "what-if-analysis-generator",
    title: "What-If Analysis Generator",
    description: "Explore how changes in key variables affect outcomes.",
    promptText: `Conduct a what-if sensitivity analysis.

Decision/Project: [WHAT YOU'RE ANALYZING]
Base Case Outcome: [WHAT YOU EXPECT TO HAPPEN]
Key Variables: [WHAT COULD CHANGE]

Test what-if scenarios:

VARIABLE 1: [VARIABLE NAME]
- Base case assumption: [VALUE]
- What if it changes to:
  * Best case: [VALUE]
  * Worst case: [VALUE]
- Impact on outcome:
  * Best case impact: [DESCRIBE]
  * Worst case impact: [DESCRIBE]

VARIABLE 2: [VARIABLE NAME]
- Base case assumption: [VALUE]
- What if it changes to:
  * Best case: [VALUE]
  * Worst case: [VALUE]
- Impact on outcome:
  * Best case impact: [DESCRIBE]
  * Worst case impact: [DESCRIBE]

[VARIABLE 3, 4, 5...]

SENSITIVITY ANALYSIS

1. Most Sensitive Variables
- Which variables have the biggest impact?
- Rank by sensitivity (highest to lowest)
- Focus areas for management attention

2. Combined Scenarios
- What if multiple variables move together?
- Worst combination: [DESCRIBE]
- Best combination: [DESCRIBE]

3. Breakeven Points
- For each variable, what level would:
  * Make the project unattractive?
  * Make the project fail?
  * Make the project exceptionally successful?

4. Control Assessment
- Which variables can we influence?
- Which are beyond our control?
- Where to focus management efforts?

5. Monitoring Plan
- Leading indicators for each variable
- Early warning signals
- Decision rules for adjustment`,
    placeholders: ["WHAT YOU'RE ANALYZING", "WHAT YOU EXPECT TO HAPPEN", "WHAT COULD CHANGE"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "strategy-decision",
    categoryId: "scenario-planning",
    exampleOutput:
      "A comprehensive what-if analysis with sensitivity ranking, combined scenarios, and monitoring plan.",
    customizationNotes: [
      "Include specific variables you're uncertain about",
      "Mention relationships between variables (correlated)",
      "Add any constraints on what can be controlled",
    ],
    tags: ["what-if", "sensitivity-analysis", "variables", "scenarios"],
    order: 25,
  },

  {
    id: "contingency-planning",
    title: "Contingency Planning",
    description: "Develop backup plans for when things don't go as expected.",
    promptText: `Develop contingency plans for:

Project/Initiative: [NAME]
Key Risks: [WHAT YOU'RE WORRIED ABOUT]
Timeline: [DURATION]
Critical Success Factors: [WHAT MUST GO RIGHT]

Create contingency plans:

1. Trigger Identification
   For each major risk:
   - Early warning indicators
   - Trigger points (when to activate contingency)
   - Detection methods
   - Who monitors

2. Contingency Scenarios
   For each trigger:
   - Specific situation or event
   - Probability of occurrence
   - Time to impact (immediate/delayed)

3. Contingency Plans
   For each scenario:
   PLAN A: Preferred Path (current plan)
   - What we're doing now
   - Assumptions

   PLAN B: Contingency (backup)
   - What we'll do if Plan A fails
   - Activation trigger
   - Resources needed
   - Timeline to implement
   - Expected outcomes

   PLAN C: Emergency (last resort)
   - What we'll do if Plan B also fails
   - Activation trigger
   - Minimal viable path forward
   - Damage limitation

4. Resource Buffering
   - Budget contingency ( % of total)
   - Time contingency ( % of timeline)
   - Capacity contingency (backup resources)
   - When to use buffers

5. Decision Rules
   - When to abandon Plan A
   - When to activate Plan B
   - When to go to Plan C
   - How to decide (metrics, judgment, both?)

6. Communication
   - Who needs to know about contingencies
   - When to communicate (before or after activation?)
   - How to maintain stakeholder confidence

7. Recovery
   - How to return to Plan A from contingencies
   - What's recoverable vs. permanent impact`,
    placeholders: ["NAME", "WHAT YOU'RE WORRIED ABOUT", "DURATION", "WHAT MUST GO RIGHT"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "strategy-decision",
    categoryId: "scenario-planning",
    exampleOutput:
      "A comprehensive contingency planning framework with triggers, backup plans, and decision rules.",
    customizationNotes: [
      "Include specific risks or past failure points",
      "Mention any known constraints on contingencies",
      "Add any stakeholder considerations",
    ],
    tags: ["contingency", "backup-plans", "risk-mitigation", "fallback"],
    order: 26,
  },

  {
    id: "crisis-scenarios-planning",
    title: "Crisis Scenario Planning",
    description: "Prepare for and plan responses to potential crisis situations.",
    promptText: `Develop crisis scenario plans.

Organization: [NAME]
Industry: [YOUR INDUSTRY]
Specific Concerns: [ANY CRISIS RISKS YOU'RE AWARE OF]

Plan for crisis scenarios:

1. Crisis Scenario Development
   For each type:
   CRISIS TYPE: [NAME]
   - Scenario description
   - How it would start
   - How it would unfold
   - Potential impacts
   - Duration estimate
   - Probability assessment

   Common crisis types:
   - Data breach / cybersecurity
   - Product/service failure
   - Executive misconduct
   - Financial distress
   - PR / reputation crisis
   - Natural disaster
   - Key person loss
   - Regulatory action
   - Supply chain disruption
   - Workplace incident

2. Crisis Response Team
   - Core team members and roles
   - Decision-making authority
   - Communication protocols
   - Backup contacts

3. Response Framework
   For each crisis type:
   - Immediate actions (first 24 hours)
   - Short-term actions (first week)
   - Longer-term recovery
   - Stakeholder communication plan
   - Business continuity measures

4. Communication Plans
   - Internal communication (employees, board)
   - External communication (customers, partners)
   - Public communication (media, social)
   - Regulatory communication (if applicable)
   - Holding statements and templates

5. Business Continuity
   - Critical functions to maintain
   - Backup systems and locations
   - Alternative suppliers/partners
   - Remote work capabilities
   - Data backup and recovery

6. Post-Crisis
   - Recovery priorities
   - Learning and debrief
   - Policy/procedure updates
   - Trust rebuilding

7. Preparation Checklist
   - What to have ready now
   - Training and drills
   - Regular review schedule`,
    placeholders: ["NAME", "YOUR INDUSTRY", "ANY CRISIS RISKS YOU'RE AWARE OF"],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "strategy-decision",
    categoryId: "scenario-planning",
    exampleOutput:
      "Comprehensive crisis scenario plans with response frameworks, communication templates, and preparation checklists.",
    customizationNotes: [
      "Include specific crisis risks relevant to your situation",
      "Mention any past crises and lessons learned",
      "Add any regulatory or industry-specific requirements",
    ],
    tags: ["crisis-planning", "crisis-management", "business-continuity", "risk"],
    order: 27,
  },

  {
    id: "future-back-planning",
    title: "Future-Back Planning",
    description: "Plan from a desired future back to present actions.",
    promptText: `Conduct future-back planning.

Organization: [NAME]
Time Horizon: [TARGET DATE - e.g., 5 years from now]
Current State: [WHERE YOU ARE TODAY]

Plan from the future:

1. Future Vision (Target Date)
   Paint the picture:
   - What does success look like?
   - What are we known for?
   - What's our market position?
   - What capabilities do we have?
   - What's our culture?
   - What's our financial performance?
   - Be specific and vivid

2. Future Milestones
   Working backward from the vision:
   - At target date: [VISION STATEMENT]
   - 1 year before: What must be true?
   - 2 years before: What must be true?
   - 3 years before: What must be true?
   - 4 years before: What must be true?

3. Critical Transitions
   Identify key transitions:
   - What transformations are required?
   - What capabilities must be built?
   - What market positions must be established?
   - What cultural shifts needed?

4. Current Implications
   Given the future vision:
   - What should we start doing now?
   - What should we stop doing now?
   - What should we do differently?
   - What bets should we place?
   - What options should we preserve?

5. Strategic Gaps
   - Current state vs. future requirements
   - Capabilities we're missing
   - Positions we need to establish
   - Resources we need to build

6. Execution Plan
   - 90-day actions
   - 1-year priorities
   - 2-year milestones
   - 3-year check-ins

7. Validation
   - How to validate the future vision is right
   - Early indicators we're on track
   - When to reassess and adjust`,
    placeholders: ["NAME", "TARGET DATE - e.g., 5 years from now", "WHERE YOU ARE TODAY"],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "strategy-decision",
    categoryId: "scenario-planning",
    exampleOutput:
      "A complete future-back plan with vivid future vision, milestones, and current action implications.",
    customizationNotes: [
      "Include any existing vision or goals",
      "Mention constraints or limitations",
      "Add any stakeholder perspectives on the future",
    ],
    tags: ["future-back", "strategic-planning", "vision", "long-term"],
    order: 28,
  },

  // ============================================================================
  // OKRS & KPIs (7 prompts)
  // ============================================================================

  {
    id: "okr-creation-framework",
    title: "OKR Creation Framework",
    description: "Create ambitious, measurable Objectives and Key Results.",
    promptText: `Create OKRs (Objectives and Key Results).

Context: [TEAM/ORG/INDIVIDUAL]
Time Period: [QUARTER/YEAR/OTHER]
Scope: [WHAT THIS OKR COVERS]
Current Priorities: [WHAT'S IMPORTANT NOW]

Create OKRs using this framework:

OBJECTIVE 1: [INSPIRING, QUALITATIVE STATEMENT]
- Should be ambitious and motivating
- Should not contain numbers (that's for Key Results)
- Should align to broader strategy

Key Results (3-5 per Objective):
KR 1.1: [MEASURABLE OUTCOME]
- How we'll measure progress on the objective
- Must include a number
- Format: [Verb] [metric] from [current] to [target]
- Example: Increase user retention from 40% to 50%

KR 1.2: [MEASURABLE OUTCOME]
- [Number]
- Current: [X], Target: [Y]

KR 1.3: [MEASURABLE OUTCOME]
- [Number]
- Current: [X], Target: [Y]

KR 1.4: [MEASURABLE OUTCOME]
- [Number]
- Current: [X], Target: [Y]

[OBJECTIVE 2, 3, etc. if needed]

OKR QUALITY CHECK
For each Objective:
- Is it inspiring? (1-10)
- Is it actionable? (1-10)
- Is it time-bound? (Yes/No)

For each Key Result:
- Is it measurable? (Yes/No)
- Is it outcome-based (not output)? (Yes/No)
- Is it ambitious but achievable? (Yes/No)

INITIATIVES
What will we do to achieve these KRs?
- Initiative 1: [NAME] - Supports KR(s) [X.X, X.X]
- Initiative 2: [NAME] - Supports KR(s) [X.X]
- Initiative 3: [NAME] - Supports KR(s) [X.X]`,
    placeholders: [
      "TEAM/ORG/INDIVIDUAL",
      "QUARTER/YEAR/OTHER",
      "WHAT THIS OKR COVERS",
      "WHAT'S IMPORTANT NOW",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "strategy-decision",
    categoryId: "okrs-kpis",
    exampleOutput:
      "2-3 inspiring objectives with 3-5 measurable key results each, plus supporting initiatives.",
    customizationNotes: [
      "Include any existing OKRs to align with",
      "Mention specific metrics you track",
      "Add any constraints or dependencies",
    ],
    tags: ["okr", "objectives", "key-results", "goals"],
    order: 29,
  },

  {
    id: "kpi-selection-framework",
    title: "KPI Selection Framework",
    description: "Select the right Key Performance Indicators for your context.",
    promptText: `Select appropriate KPIs for:

Context: [TEAM/DEPARTMENT/ORGANIZATION]
Purpose: [WHAT DECISIONS THESE KPIS WILL INFORM]
Stakeholders: [WHO WILL USE THESE KPIS]
Data Available: [WHAT DATA YOU HAVE ACCESS TO]

Select KPIs using this framework:

1. Decision Clarity
   - What decisions will these KPIs inform?
   - What questions do they need to answer?
   - What actions will they trigger?

2. KPI Categories
   Identify KPIs in each category:

   LEADING INDICATORS (predict future performance)
   - KPI 1: [NAME]
     * What it measures
     * Why it's predictive
     * How to calculate
     * Data source

   LAGGING INDICATORS (measure past performance)
   - KPI 2: [NAME]
     * What it measures
     * Why it matters
     * How to calculate
     * Data source

   INPUT METRICS (things you control)
   - KPI 3: [NAME]
     * What it measures
     * Why it's controllable
     * How to calculate
     * Data source

   OUTPUT METRICS (results you achieve)
   - KPI 4: [NAME]
     * What it measures
     * Why it's the outcome
     * How to calculate
     * Data source

3. KPI Evaluation
   For each KPI:
   - Actionability (can we impact it?): [1-10]
   - Measurability (can we measure it?): [1-10]
   - Timeliness (is it available quickly?): [1-10]
   - Relevance (does it matter?): [1-10]
   - Total score: [ ]/40

4. KPI Selection
   - Select top 5-10 KPIs
   - Balance leading/lagging
   - Balance input/output
   - Ensure coverage of key decisions

5. Implementation
   - Data collection method
   - Measurement frequency
   - Dashboard design
   - Owner for each KPI

6. Targets and Thresholds
   - Target for each KPI
   - Red/yellow/green thresholds
   - Benchmark comparisons`,
    placeholders: [
      "TEAM/DEPARTMENT/ORGANIZATION",
      "WHAT DECISIONS THESE KPIS WILL INFORM",
      "WHO WILL USE THESE KPIS",
      "WHAT DATA YOU HAVE ACCESS TO",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "strategy-decision",
    categoryId: "okrs-kpis",
    exampleOutput:
      "A curated set of 5-10 high-quality KPIs with evaluation scoring and implementation guidance.",
    customizationNotes: [
      "Include any existing KPIs to evaluate",
      "Mention industry benchmarks if known",
      "Add any tool or system constraints",
    ],
    tags: ["kpi", "metrics", "measurement", "performance"],
    order: 30,
  },

  {
    id: "metrics-hierarchy-design",
    title: "Metrics Hierarchy Design",
    description: "Design a cascading metrics system from strategy to execution.",
    promptText: `Design a metrics hierarchy.

Organization: [NAME]
Strategic Objectives: [TOP-LEVEL STRATEGIC GOALS]
Organizational Structure: [TEAMS, DEPARTMENTS, FUNCTIONS]
Time Horizon: [HOW OFTEN TO MEASURE]

Design the hierarchy:

LEVEL 1: Strategic Metrics (Executive Level)
- What the CEO/Board cares about
- Measured: Monthly/Quarterly
- 3-5 metrics
- Metrics:
  * [STRATEGIC METRIC 1]
    - Definition
    - Why it matters strategically
    - Target

  * [STRATEGIC METRIC 2]
    - Definition
    - Why it matters strategically
    - Target

LEVEL 2: Operational Metrics (Management Level)
- What VPs/Directors care about
- Measured: Weekly/Monthly
- 8-12 metrics (2-3 per strategic metric)
- For each strategic metric, identify:
  * [OPERATIONAL METRIC]
    - How it drives the strategic metric
    - Owner/functional area
    - Target

LEVEL 3: Tactical Metrics (Team Level)
- What teams care about
- Measured: Daily/Weekly
- 15-25 metrics (2-3 per operational metric)
- For each operational metric, identify:
  * [TACTICAL METRIC]
    - How it drives the operational metric
    - Team owner
    - Target

LEVEL 4: Activity Metrics (Individual Level)
- What individuals track
- Measured: Real-time/Daily
- Personal productivity and contribution
- For each team, identify:
  * [ACTIVITY METRIC]
    - Daily actions
    - Individual owner

HIERARCHY VALIDATION
- For each strategic metric, trace the path down
- For each tactical metric, trace the path up
- Ensure all connect and align
- Remove orphans (metrics not connected)

REVIEW CADENCE
- Strategic metrics review: [FREQUENCY]
- Operational metrics review: [FREQUENCY]
- Tactical metrics review: [FREQUENCY]`,
    placeholders: [
      "NAME",
      "TOP-LEVEL STRATEGIC GOALS",
      "TEAMS, DEPARTMENTS, FUNCTIONS",
      "HOW OFTEN TO MEASURE",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "strategy-decision",
    categoryId: "okrs-kpis",
    exampleOutput:
      "A complete metrics hierarchy from strategic through tactical levels with clear connections.",
    customizationNotes: [
      "Include any existing metrics at any level",
      "Mention organizational constraints",
      "Add any specific team structures or functions",
    ],
    tags: ["metrics-hierarchy", "kpi", "alignment", "cascading"],
    order: 31,
  },

  {
    id: "leading-lagging-indicators",
    title: "Leading & Lagging Indicators Balance",
    description:
      "Balance leading (predictive) and lagging (outcome) metrics for complete visibility.",
    promptText: `Design a balanced metrics system with leading and lagging indicators.

Context: [WHAT YOU'RE MEASURING]
Current Metrics: [WHAT YOU CURRENTLY TRACK]
Gaps: [WHAT YOU CAN'T SEE COMING]

Design the balance:

1. Lagging Indicators Assessment
   For each current metric:
   - Metric: [NAME]
   - Is it leading or lagging? (Lagging)
   - What outcome does it measure?
   - When do you see it? (after the fact)
   - Can you influence it directly? (no, indirectly)
   - Lead time: (how long after actions?)

2. Leading Indicator Identification
   For each lagging indicator, find leading indicators:
   - Lagging metric: [NAME]
   - Leading indicator 1: [NAME]
     * What it predicts
     * How far in advance
     * How to measure
   - Leading indicator 2: [NAME]
     * What it predicts
     * How far in advance
     * How to measure

3. Indicator Chain Mapping
   Create chains from activities to outcomes:

   ACTIVITY → INPUT → PROCESS → OUTPUT → OUTCOME
   (Immediate) (Short-term) (Medium) (Long) (Very Long)

   Example:
   - Sales calls (activity)
   - Leads generated (input)
   - Pipeline value (process)
   - Deals closed (output)
   - Revenue booked (outcome)

   Map your chain:
   - [ACTIVITY METRIC] → [INPUT METRIC] → [PROCESS METRIC] → [OUTPUT METRIC] → [OUTCOME METRIC]

4. Balance Assessment
   - % leading indicators: [ ]
   - % lagging indicators: [ ]
   - Target balance: 60% leading / 40% lagging
   - Are you over-weighted to lagging?

5. Early Warning System
   - Which leading indicators to monitor most closely?
   - What thresholds indicate problems?
   - How early can you predict issues?

6. Dashboard Design
   - Leading indicators section (predictive view)
   - Lagging indicators section (performance view)
   - Connection visualization (how leading drives lagging)`,
    placeholders: [
      "WHAT YOU'RE MEASURING",
      "WHAT YOU CURRENTLY TRACK",
      "WHAT YOU CAN'T SEE COMING",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "strategy-decision",
    categoryId: "okrs-kpis",
    exampleOutput:
      "A balanced metrics system with clear leading/lagging pairs and indicator chain mappings.",
    customizationNotes: [
      "Include specific metrics you currently track",
      "Mention any known blind spots",
      "Add business model specifics",
    ],
    tags: ["leading-indicators", "lagging-indicators", "metrics", "prediction"],
    order: 32,
  },

  {
    id: "target-setting-framework",
    title: "Target Setting Framework",
    description: "Set ambitious but achievable targets for metrics and goals.",
    promptText: `Set targets for your metrics and goals.

Context: [TEAM/ORGANIZATION]
Time Period: [QUARTER/YEAR]
Metrics to Target: [LIST YOUR KPIS/OKRS]

Set targets using this framework:

1. Baseline Analysis
   For each metric:
   - Metric: [NAME]
   - Current value: [NUMBER]
   - Historical trend (increasing/decreasing/stable)
   - Historical performance:
     * Best ever: [NUMBER]
     * Average: [NUMBER]
     * Worst: [NUMBER]
   - Recent performance (last 3 periods):
     * Period 1: [NUMBER]
     * Period 2: [NUMBER]
     * Period 3: [NUMBER]

2. Benchmarking (if available)
   - Internal benchmarks: [COMPARABLE TEAMS/PERIODS]
   - Industry benchmarks: [IF KNOWN]
   - Competitor benchmarks: [IF KNOWN]

3. Target Setting Methods
   For each metric, calculate targets using:

   METHOD A: Incremental Improvement
   - Current value: [X]
   - Improvement rate: [ % ]
   - Target: [X × (1 + rate)]

   METHOD B: Historical Stretch
   - Best ever: [Y]
   - Stretch factor: [ % improvement on best]
   - Target: [Y × (1 + factor)]

   METHOD C: Required Outcome
   - What outcome is needed?
   - What metric value achieves that?
   - Target: [CALCULATED]

   METHOD D: Benchmark Matching
   - Benchmark target: [ ]
   - Target: [ ]

4. Target Selection
   For each metric:
   - Which method is most appropriate?
   - What's the baseline target?
   - What's the stretch target?
   - What's the breakthrough target?

5. Ambition Assessment
   - How challenging is each target? (1-10)
   - What has to go right to achieve it?
   - What are the odds of success? ( %)

6. Resource Requirements
   - What resources are needed to achieve targets?
   - Are targets matched with capacity?

7. Review and Adjust
   - Do targets feel right (not too easy, not impossible)?
   - Are targets aligned across the organization?
   - Do targets drive the right behavior?`,
    placeholders: ["TEAM/ORGANIZATION", "QUARTER/YEAR", "LIST YOUR KPIS/OKRS"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "strategy-decision",
    categoryId: "okrs-kpis",
    exampleOutput:
      "A complete target-setting framework with baseline analysis, multiple calculation methods, and selected targets.",
    customizationNotes: [
      "Include historical data if available",
      "Mention any external targets or commitments",
      "Add resource or capacity constraints",
    ],
    tags: ["target-setting", "goals", "okr", "kpi"],
    order: 33,
  },

  {
    id: "okr-tracking-review",
    title: "OKR Tracking & Review Cadence",
    description: "Establish a rhythm for tracking, reviewing, and updating OKRs.",
    promptText: `Design an OKR tracking and review system.

Context: [TEAM/ORGANIZATION]
OKR Period: [QUARTER/YEAR]
Check Frequency: [WEEKLY/BI-WEEKLY/MONTHLY]
Team Size: [NUMBER OF PEOPLE]

Design the system:

1. Tracking System
   - Tool: [SPREADSHEET/OKR SOFTWARE/OTHER]
   - What to track for each KR:
     * Current value
     * Progress %
     * Confidence level (Green/Yellow/Red)
     * Updates/notes
     * Owner
     * Last updated

2. Weekly Check-in Format
   For each team member:
   - What I accomplished this week (toward OKRs)
   - What I'm planning next week
   - Blockers or help needed
   - Confidence level updates (Green→Yellow→Red)
   - Time: [15-30 min per person]

3. Bi-weekly/Monthly Review Format
   - OKR progress overview (all OKRs)
   - Red/Yellow/green status for each KR
   - Deep dive on at-risk OKRs
   - Resource adjustments needed
   - Learnings and course corrections
   - Time: [60-90 min for team]

4. Quarterly/Annual Review Format
   - Final results vs. targets
   - Achievements and misses
   - Lessons learned
   - Next period planning inputs
   - Celebration of wins
   - Time: [2-4 hours]

5. OKR Health Indicators
   Track across the period:
   - % of KRs on track
   - % of KRs at risk
   - Average progress
   - Trend over time

6. Adjustment Protocol
   - When can OKRs change? (rarely, only for good reason)
   - What justifies an OKR change?
   - Approval process for changes
   - Communication of changes

7. Scoring Rubric
   - 1.0: Achieved stretch goal
   - 0.7: Achieved target
   - 0.4: Made progress but fell short
   - 0.0: No progress or made no progress

8. Meeting Templates
   - Weekly check-in agenda template
   - Monthly review agenda template
   - Quarterly review agenda template`,
    placeholders: [
      "TEAM/ORGANIZATION",
      "QUARTER/YEAR",
      "WEEKLY/BI-WEEKLY/MONTHLY",
      "NUMBER OF PEOPLE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "strategy-decision",
    categoryId: "okrs-kpis",
    exampleOutput:
      "A complete OKR tracking and review system with meeting templates and scoring rubrics.",
    customizationNotes: [
      "Include any existing meeting cadences",
      "Mention tools or systems already in use",
      "Add any team-specific considerations",
    ],
    tags: ["okr", "tracking", "review", "cadence"],
    order: 34,
  },

  {
    id: "kpi-dashboard-design",
    title: "KPI Dashboard Design",
    description: "Design an effective dashboard for monitoring KPIs and driving action.",
    promptText: `Design a KPI dashboard for:

Purpose: [WHAT DECISIONS THIS INFORMS]
Audience: [WHO WILL USE IT]
KPIs to Display: [LIST YOUR KPIS]
Update Frequency: [REAL-TIME/DAILY/WEEKLY/MONTHLY]
Tools Available: [WHAT TOOLS YOU CAN USE]

Design the dashboard:

1. Dashboard Strategy
   - Primary questions it answers
   - Key decisions it informs
   - Success metric for the dashboard itself

2. KPI Selection for Dashboard
   - Primary KPIs (above the fold, always visible)
   - Secondary KPIs (one click away)
   - Contextual KPIs (drill-down)
   - Limit to 5-10 total to avoid overload

3. Layout Design
   ABOVE THE FOLD (always visible):
   - [KPI 1] [Current] [vs. Target] [Trend]
   - [KPI 2] [Current] [vs. Target] [Trend]
   - [KPI 3] [Current] [vs. Target] [Trend]

   MIDDLE SECTION (key comparisons):
   - Chart: [KPI over time]
   - Chart: [Segmentation/Comparison]
   - Table: [Breakdown by segment]

   BOTTOM SECTION (details):
   - [Additional detail views]
   - [Drill-down options]

4. Visualization Guide
   For each KPI:
   - Best chart type (line, bar, gauge, sparkline, etc.)
   - Time period to display
   - Comparisons to show (target, prior period, benchmark)
   - Color coding (green/yellow/red thresholds)

5. Interaction Design
   - Filter options: [DIMENSION 1] [DIMENSION 2]
   - Time range selector: [OPTIONS]
   - Drill-down paths: [WHAT HAPPENS ON CLICK]
   - Export options: [PDF/EXCEL/EMAIL]

6. Mobile Optimization
   - What to show on mobile (subset)
   - Key metrics only
   - Simplified interactions

7. Action Integration
   - How to drive action from insights
   - Alert thresholds
   - Anomaly highlighting
   - Annotation capabilities

8. Implementation Checklist
   - Data source connections
   - Refresh schedule
   - Access permissions
   - Training needs`,
    placeholders: [
      "WHAT DECISIONS THIS INFORMS",
      "WHO WILL USE IT",
      "LIST YOUR KPIS",
      "REAL-TIME/DAILY/WEEKLY/MONTHLY",
      "WHAT TOOLS YOU CAN USE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "strategy-decision",
    categoryId: "okrs-kpis",
    exampleOutput:
      "A complete dashboard design with layout, visualizations, and interaction specifications.",
    customizationNotes: [
      "Include any existing dashboards to replace",
      "Mention user preferences or requirements",
      "Add any tool constraints or preferences",
    ],
    tags: ["dashboard", "kpi", "visualization", "reporting"],
    order: 35,
  },
];
