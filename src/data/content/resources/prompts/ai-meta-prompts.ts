/**
 * AI Meta-Prompts
 *
 * PURPOSE: Prompts for improving prompts, engineering techniques, and advanced AI workflows.
 *
 * DOMAIN: AI Meta-Prompts
 * CATEGORIES:
 * - Prompt Improvement (5 prompts)
 * - Chain of Thought (5 prompts)
 * - Role-Based Prompting (5 prompts)
 * - Output Control (5 prompts)
 * - Task Decomposition (5 prompts)
 *
 * @see src/types/resources.ts - Prompt type definition
 */

import type { Prompt } from "@/types/resources";

/**
 * AI Meta-Prompts collection
 *
 * These prompts help you get better results from AI through improved
 * prompting techniques, structured reasoning, and advanced workflows.
 */
export const aiMetaPrompts: Prompt[] = [
  // ============================================================================
  // PROMPT IMPROVEMENT
  // ============================================================================

  {
    id: "prompt-optimizer",
    title: "Prompt Optimizer",
    description: "Refine and improve your prompts for better AI responses.",
    promptText: `Help me optimize this prompt for better results:

**My current prompt:**
[YOUR PROMPT]

**What I'm trying to achieve:**
[GOAL/INTENDED OUTCOME]

**Problems I'm experiencing:**
- [ISSUE 1 - e.g., responses are too long]
- [ISSUE 2 - e.g., missing specific details]
- [ISSUE 3 - any other problems]

**Target audience/use case:**
[CONTEXT - who will use this, how often, etc.]

Analyze my prompt and provide:
1. **Strengths**: What's working well
2. **Weaknesses**: What could be improved
3. **Optimized Version**: A rewritten, improved prompt
4. **Explanation**: Why your version works better
5. **Variations**: 2-3 alternative approaches for different situations
6. **Testing Strategy**: How to test which version works best

Focus on clarity, specificity, structure, and getting consistent, high-quality outputs.`,
    placeholders: [
      "YOUR PROMPT",
      "GOAL/INTENDED OUTCOME",
      "ISSUE 1 - e.g., responses are too long",
      "ISSUE 2 - e.g., missing specific details",
      "ISSUE 3 - any other problems",
      "CONTEXT - who will use this, how often, etc.",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "ai-meta-prompts",
    categoryId: "prompt-improvement",
    exampleOutput:
      "An analysis of your prompt with specific improvements, an optimized version, and testing recommendations.",
    customizationNotes: [
      "Include examples of bad outputs you've received",
      "Note which AI model you're using",
      "Specify your experience level with prompting",
    ],
    tags: ["prompt-engineering", "optimization", "improvement"],
    order: 1,
  },

  {
    id: "prompt-pattern-library",
    title: "Prompt Pattern Matcher",
    description: "Identify and apply proven prompt patterns to your use case.",
    promptText: `Help me find the right prompt pattern for my use case.

**What I want to do:**
[DESCRIBE YOUR GOAL]

**Input I have:**
[WHAT INFORMATION YOU'LL PROVIDE]

**Desired output:**
[WHAT YOU WANT THE AI TO PRODUCE]

**Constraints:**
- [ANY LIMITATIONS OR REQUIREMENTS]

Analyze my request and recommend:
1. **Best Pattern(s)**: Which proven patterns fit (e.g., few-shot, chain-of-thought, role-based)
2. **Pattern Explanation**: How the pattern works and why it fits
3. **Example Prompt**: My request rewritten using this pattern
4. **Alternative Patterns**: Other approaches that could work
5. **Pattern Combination**: How to combine multiple patterns effectively

Common patterns to consider:
- Few-shot learning (giving examples)
- Chain-of-thought (step-by-step reasoning)
- Role-based (adopting a persona)
- Self-consistency (multiple approaches)
- Generated knowledge (having AI recall relevant info first)
- Tree-of-thoughts (exploring multiple branches)`,
    placeholders: [
      "DESCRIBE YOUR GOAL",
      "WHAT INFORMATION YOU'LL PROVIDE",
      "WHAT YOU WANT THE AI TO PRODUCE",
      "ANY LIMITATIONS OR REQUIREMENTS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "ai-meta-prompts",
    categoryId: "prompt-improvement",
    exampleOutput:
      "Pattern recommendations with explanations, example implementations, and combination strategies.",
    customizationNotes: [
      "Mention if this is a one-time or repeated task",
      "Note your priority (accuracy, creativity, speed)",
      "Include how you measure success",
    ],
    tags: ["prompt-patterns", "prompt-engineering", "templates"],
    order: 2,
  },

  {
    id: "prompt-debugger",
    title: "Prompt Debugger",
    description: "Diagnose and fix prompts that aren't producing desired results.",
    promptText: `Help me debug a prompt that isn't working well.

**My prompt:**
[THE PROMPT THAT'S NOT WORKING]

**Expected output:**
[WHAT I WANT TO SEE]

**Actual output:**
[PASTE EXAMPLE OF WHAT I'M GETTING]

**Issues:**
- [SPECIFIC PROBLEMS WITH THE OUTPUT]

Debug my prompt by:
1. **Diagnosing the Root Cause**: Why the prompt is failing (ambiguity, missing context, wrong structure, etc.)
2. **Identifying Missing Elements**: What the prompt needs that it doesn't have
3. **Testing Variables**: What to vary to isolate the issue
4. **Fixed Prompt**: Rewritten version addressing the issues
5. **Validation Tests**: How to verify the fix works
6. **Prevention**: Similar issues to watch for in other prompts

Treat this like debugging code - systematic diagnosis and targeted fixes.`,
    placeholders: [
      "THE PROMPT THAT'S NOT WORKING",
      "WHAT I WANT TO SEE",
      "PASTE EXAMPLE OF WHAT I'M GETTING",
      "SPECIFIC PROBLEMS WITH THE OUTPUT",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "ai-meta-prompts",
    categoryId: "prompt-improvement",
    exampleOutput:
      "Systematic diagnosis of prompt issues with targeted fixes and validation strategies.",
    customizationNotes: [
      "Include multiple examples if outputs vary",
      "Note if the prompt worked before and stopped",
      "Mention the AI model you're using",
    ],
    tags: ["prompt-debugging", "troubleshooting", "fixing"],
    order: 3,
  },

  {
    id: "few-shot-prompt-builder",
    title: "Few-Shot Example Builder",
    description: "Create effective few-shot prompts with well-designed examples.",
    promptText: `Help me build a few-shot prompt with good examples.

**Task I want the AI to perform:**
[DESCRIBE THE TASK]

**Input format:**
[WHAT THE INPUT LOOKS LIKE]

**Desired output format:**
[WHAT THE OUTPUT SHOULD LOOK LIKE]

**Current examples I have (if any):**
[PASTE ANY EXAMPLES]

Create:
1. **Example Criteria**: What makes a good example for this task
2. **Optimal Example Count**: How many examples I need (typically 3-8)
3. **Example Selection**: Diversity, difficulty progression, edge cases
4. **Full Few-Shot Prompt**: Complete prompt with examples formatted
5. **Example Variation**: How to create different versions for different needs

Also explain:
- Why example quality matters more than quantity
- How to structure examples for maximum clarity
- Common pitfalls in few-shot prompting`,
    placeholders: [
      "DESCRIBE THE TASK",
      "WHAT THE INPUT LOOKS LIKE",
      "WHAT THE OUTPUT SHOULD LOOK LIKE",
      "PASTE ANY EXAMPLES",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "ai-meta-prompts",
    categoryId: "prompt-improvement",
    exampleOutput:
      "A complete few-shot prompt with carefully selected examples and formatting guidance.",
    customizationNotes: [
      "Include examples of both good and bad outputs if relevant",
      "Note if there are common mistakes the AI makes",
      "Mention your tolerance for variation in outputs",
    ],
    tags: ["few-shot", "examples", "prompt-patterns"],
    order: 4,
  },

  {
    id: "prompt-iteration-tracker",
    title: "Prompt Iteration & Testing Framework",
    description: "Systematically improve prompts through testing and iteration.",
    promptText: `Help me set up a prompt testing and iteration framework.

**Base prompt I want to improve:**
[MY PROMPT]

**Success criteria:**
[HOW I'LL JUDGE IF IT'S WORKING]

**Testing context:**
- How often I'll use this: [FREQUENCY]
- Variations in input: [HOW INPUTS MIGHT VARY]
- Criticality of quality: [HIGH/MEDIUM/LOW]

Create a testing framework with:
1. **Baseline**: Document current prompt's performance
2. **Test Cases**: Specific inputs to test against (include edge cases)
3. **Variables to Test**: What to change in each iteration
4. **Scoring System**: How to rate output quality
5. **Iteration Log**: Template to track changes and results
6. **A/B Testing**: How to compare versions
7. **Stopping Criteria**: When is the prompt "good enough?"

Provide:
- Testing template I can reuse
- Example iteration log with hypothetical improvements
- Red flags that indicate fundamental (not incremental) issues`,
    placeholders: [
      "MY PROMPT",
      "HOW I'LL JUDGE IF IT'S WORKING",
      "FREQUENCY",
      "HOW INPUTS MIGHT VARY",
      "HIGH/MEDIUM/LOW",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "ai-meta-prompts",
    categoryId: "prompt-improvement",
    exampleOutput:
      "A comprehensive prompt testing framework with templates, scoring systems, and iteration tracking.",
    customizationNotes: [
      "Include real examples of inputs you'll use",
      "Note any time constraints on testing",
      "Mention how you'll deploy the final prompt",
    ],
    tags: ["testing", "iteration", "optimization", "framework"],
    order: 5,
  },

  // ============================================================================
  // CHAIN OF THOUGHT
  // ============================================================================

  {
    id: "chain-of-thought-wrapper",
    title: "Chain of Thought Prompt Wrapper",
    description: "Add step-by-step reasoning to any prompt for better results.",
    promptText: `Help me add chain-of-thought reasoning to my prompt.

**My current prompt:**
[EXISTING PROMPT]

**Task type:**
[MATHEMATICAL/LOGICAL/ANALYTICAL/CREATIVE/OTHER]

**Complexity level:**
[STRAIGHTFORWARD/MODERATE/COMPLEX]

**Why I think CoT will help:**
[REASONING REQUIREMENTS]

Add chain-of-thought reasoning to my prompt by:
1. **CoT Structure**: How to frame the thinking process
2. **Step Breakdown**: What intermediate steps to request
3. **Thinking Triggers**: Questions that prompt reasoning
4. **Output Format**: How to show both thinking and final answer
5. **Verification**: How the AI can check its own work

Create:
- Enhanced prompt with CoT integrated
- Explanation of changes
- Alternative CoT approaches (explicit vs. implicit)
- When CoT might actually hurt performance

The goal: Get the AI to show its work and catch its own mistakes.`,
    placeholders: [
      "EXISTING PROMPT",
      "MATHEMATICAL/LOGICAL/ANALYTICAL/CREATIVE/OTHER",
      "STRAIGHTFORWARD/MODERATE/COMPLEX",
      "REASONING REQUIREMENTS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "ai-meta-prompts",
    categoryId: "chain-of-thought",
    exampleOutput:
      "An enhanced prompt with structured chain-of-thought reasoning and verification steps.",
    customizationNotes: [
      "Include examples of reasoning mistakes the AI has made",
      "Note if you need to see all thinking or just key steps",
      "Mention your tolerance for longer responses",
    ],
    tags: ["chain-of-thought", "reasoning", "step-by-step"],
    order: 6,
  },

  {
    id: "multi-perspective-reasoning",
    title: "Multi-Perspective Reasoning Prompt",
    description: "Get AI to consider problems from multiple angles.",
    promptText: `Create a multi-perspective reasoning prompt for:

**Problem/question:**
[WHAT YOU WANT ANALYZED]

**Perspectives to consider:**
[DIFFERENT VIEWPOINTS - or ask AI to identify]

**Decision type:**
[BUSINESS/PERSONAL/CREATIVE/ANALYTICAL/OTHER]

Create a prompt that makes the AI:
1. **Identify Perspectives**: List relevant viewpoints (stakeholders, experts, approaches)
2. **Analyze from Each Angle**: What does each perspective reveal?
3. **Find Common Ground**: Where do perspectives agree?
4. **Identify Trade-offs**: What tensions exist between views?
5. **Synthesize**: Integrate insights into a balanced conclusion
6. **Recommend**: What action considers all perspectives?

Provide:
- Full prompt with multi-perspective structure
- How to customize for different types of problems
- When to use deep vs. light multi-perspective analysis`,
    placeholders: [
      "WHAT YOU WANT ANALYZED",
      "DIFFERENT VIEWPOINTS - or ask AI to identify",
      "BUSINESS/PERSONAL/CREATIVE/ANALYTICAL/OTHER",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "ai-meta-prompts",
    categoryId: "chain-of-thought",
    exampleOutput: "A structured multi-perspective reasoning prompt that forces balanced analysis.",
    customizationNotes: [
      "List specific stakeholders if known",
      "Note if certain perspectives should have more weight",
      "Mention your decision-making context",
    ],
    tags: ["perspectives", "analysis", "reasoning", "balanced"],
    order: 7,
  },

  {
    id: "self-consistency-prompt",
    title: "Self-Consistency Reasoning Prompt",
    description: "Get multiple solution paths and compare for more reliable outputs.",
    promptText: `Create a self-consistency prompting strategy for:

**Task:**
[WHAT YOU WANT SOLVED]

**Why this needs multiple approaches:**
[WHY SINGLE APPROACH MIGHT FAIL OR BE BIASED]

**Complexity level:**
[MODERATE/COMPLEX/VERY COMPLEX]

Design a prompt that:
1. **Generates Multiple Solutions**: Creates 3-5 different approaches
2. **Compares Solutions**: Analyzes strengths and weaknesses of each
3. **Identifies Consensus**: Where approaches agree
4. **Resolves Disagreements**: How to choose when approaches conflict
5. **Produces Final Output**: Best answer or synthesis

Provide:
- Full self-consistency prompt
- How to adjust number of solution paths
- How to weight different approaches
- When self-consistency is overkill vs. essential
- Output format that makes comparison easy

Goal: Reduce error rates by exploring multiple solution paths.`,
    placeholders: [
      "WHAT YOU WANT SOLVED",
      "WHY SINGLE APPROACH MIGHT FAIL OR BE BIASED",
      "MODERATE/COMPLEX/VERY COMPLEX",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "ai-meta-prompts",
    categoryId: "chain-of-thought",
    exampleOutput:
      "A self-consistency prompting framework with multi-solution generation and comparison.",
    customizationNotes: [
      "Include examples of how approaches might differ",
      "Note your priority (accuracy vs. creativity)",
      "Mention if there are known solution approaches to include",
    ],
    tags: ["self-consistency", "multiple-paths", "reliability"],
    order: 8,
  },

  {
    id: "reasoning-trace-template",
    title: "Reasoning Trace Template Generator",
    description: "Create templates for documenting AI reasoning step-by-step.",
    promptText: `Create a reasoning trace template for:

**Task type:**
[PROBLEM-SOLVING/ANALYSIS/CREATIVE/DEBUGGING/OTHER]

**What I need to track:**
[WHICH REASONING STEPS MATTER]

**Output format preference:**
[STRUCTURED/NARRATIVE/TABLE/CODE]

Design a reasoning trace template that captures:
1. **Initial Understanding**: What the AI understands about the task
2. **Approach Selection**: Which method it will use and why
3. **Step-by-Step Execution**: Each reasoning step with justification
4. **Intermediate Results**: Partial answers or observations
5. **Course Corrections**: If and why it changes approach
6. **Final Answer**: Conclusion reached
7. **Confidence Level**: How certain and why

Provide:
- Prompt template with reasoning trace structure
- Format that makes reasoning audit-able
- How to adjust depth of detail
- When verbose vs. concise tracing is better`,
    placeholders: [
      "PROBLEM-SOLVING/ANALYSIS/CREATIVE/DEBUGGING/OTHER",
      "WHICH REASONING STEPS MATTER",
      "STRUCTURED/NARRATIVE/TABLE/CODE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "ai-meta-prompts",
    categoryId: "chain-of-thought",
    exampleOutput:
      "A reasoning trace template with structured documentation of the AI's thought process.",
    customizationNotes: [
      "Include specific reasoning steps relevant to your domain",
      "Note if you need to explain reasoning to others",
      "Mention how you'll use the trace (audit, learning, etc.)",
    ],
    tags: ["reasoning-trace", "documentation", "transparency"],
    order: 9,
  },

  {
    id: "structured-decompositional-prompt",
    title: "Structured Decomposition Prompt",
    description: "Break complex problems into structured components for systematic solving.",
    promptText: `Create a structured decomposition prompt for:

**Complex problem:**
[DESCRIBE THE PROBLEM]

**Why it's complex:**
[COMPLEXITY FACTORS]

**Desired output:**
[WHAT THE FINAL ANSWER SHOULD LOOK LIKE]

Design a prompt that:
1. **Problem Decomposition**: Breaks into sub-problems
2. **Dependency Mapping**: Shows how sub-problems relate
3. **Solving Order**: Determines optimal sequence
4. **Solution Integration**: Combines sub-solutions
5. **Validation**: Checks that complete solution works
6. **Refinement**: Improves based on validation

Provide:
- Full decomposition prompt
- Visual/structural representation of approach
- How to handle circular dependencies
- When decomposition adds value vs. overcomplicates

Goal: Systematic, auditable problem-solving for complex challenges.`,
    placeholders: [
      "DESCRIBE THE PROBLEM",
      "COMPLEXITY FACTORS",
      "WHAT THE FINAL ANSWER SHOULD LOOK LIKE",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "ai-meta-prompts",
    categoryId: "chain-of-thought",
    exampleOutput: "A structured decomposition prompt that breaks complex problems systematically.",
    customizationNotes: [
      "Include typical sub-problem types in your domain",
      "Note if there are standard decomposition patterns",
      "Mention your tolerance for longer outputs",
    ],
    tags: ["decomposition", "problem-solving", "structured"],
    order: 10,
  },

  // ============================================================================
  // ROLE-BASED PROMPTING
  // ============================================================================

  {
    id: "persona-prompt-builder",
    title: "Expert Persona Prompt Builder",
    description: "Create effective role-based prompts with expert personas.",
    promptText: `Create a persona-based prompt for:

**Task:**
[WHAT YOU WANT DONE]

**Desired expertise:**
[FIELD/EXPERTISE AREA]

**Specific perspective needed:**
[WHICH EXPERT VIEWPOINT]

Build a persona prompt with:
1. **Role Definition**: Who the AI is扮演ing (title, background)
2. **Expertise Scope**: What this expert knows and their approach
3. **Perspective/Bias**: The lens through which they view problems
4. **Communication Style**: How this expert typically communicates
5. **Key Principles**: Core beliefs or methods that guide them
6. **Famous Examples**: Specific people or thought leaders to emulate
7. **Task Application**: How to apply this perspective to the specific task

Provide:
- Full persona prompt
- 3 alternative persona variations for the same task
- When to use detailed vs. lightweight personas
- How to combine multiple personas`,
    placeholders: ["WHAT YOU WANT DONE", "FIELD/EXPERTISE AREA", "WHICH EXPERT VIEWPOINT"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "ai-meta-prompts",
    categoryId: "role-based",
    exampleOutput:
      "A detailed persona prompt with expert characteristics applied to a specific task.",
    customizationNotes: [
      "Include specific experts whose perspective you value",
      "Note if you want a particular communication style",
      "Mention real experts the AI could reference",
    ],
    tags: ["personas", "role-based", "expertise"],
    order: 11,
  },

  {
    id: "multi-role-debate-prompt",
    title: "Multi-Role Debate Prompt",
    description: "Stage a debate between different expert perspectives.",
    promptText: `Create a multi-role debate prompt for:

**Topic to debate:**
[ISSUE OR QUESTION]

**Roles/debaters needed:**
[PERSPECTIVES OR EXPERT TYPES]

**What I need from the debate:**
[DESIRED OUTCOME - insight, decision, understanding]

Create a prompt that:
1. **Introduces Roles**: Clearly defines each debater's perspective
2. **Sets Ground Rules**: How debate should proceed
3. **Structures Arguments**: Opening statements, rebuttals, counter-rebuttals
4. **Moderates Discussion**: Ensures all views are represented
5. **Identifies Agreement**: Where perspectives align
6. **Highlights Tensions**: Core disagreements
7. **Synthesizes**: What insights emerge from the debate
8. **Concludes**: With balanced takeaways or recommendations

Provide:
- Full debate prompt
- How to adjust for different numbers of perspectives
- How to prevent debate from going in circles
- Output format that makes insights easy to extract`,
    placeholders: [
      "ISSUE OR QUESTION",
      "PERSPECTIVES OR EXPERT TYPES",
      "DESIRED OUTCOME - insight, decision, understanding",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "ai-meta-prompts",
    categoryId: "role-based",
    exampleOutput:
      "A structured multi-role debate prompt with balanced perspective-taking and synthesis.",
    customizationNotes: [
      "List specific roles if you have particular experts in mind",
      "Note if you want a winner or just insights",
      "Mention how detailed arguments should be",
    ],
    tags: ["debate", "perspectives", "roles", "synthesis"],
    order: 12,
  },

  {
    id: "stakeholder-simulation",
    title: "Stakeholder Simulation Prompt",
    description: "Simulate how different stakeholders would react to decisions.",
    promptText: `Create a stakeholder simulation for:

**Decision/announcement:**
[WHAT'S BEING DECIDED OR ANNOUNCED]

**Stakeholders to consider:**
[WHO WILL BE AFFECTED - or ask AI to identify]

**Context:**
[ORGANIZATION/SITUATION DETAILS]

Create a prompt that:
1. **Identifies Stakeholders**: Maps all affected parties
2. **Defines Perspectives**: What each cares about most
3. **Simulates Reactions**: How each would respond
4. **Identifies Supporters**: Who would be on board
5. **Identifies Resistors**: Who would push back and why
6. **Reveals Risks**: What could go wrong with each group
7. **Suggests Mitigation**: How to address concerns proactively
8. **Recommends Approach**: Best way to proceed

Provide:
- Full simulation prompt
- How to prioritize stakeholders
- How to surface hidden stakeholders
- When simulation is most valuable`,
    placeholders: [
      "WHAT'S BEING DECIDED OR ANNOUNCED",
      "WHO WILL BE AFFECTED - or ask AI to identify",
      "ORGANIZATION/SITUATION DETAILS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "ai-meta-prompts",
    categoryId: "role-based",
    exampleOutput:
      "A comprehensive stakeholder simulation with reactions, risks, and mitigation strategies.",
    customizationNotes: [
      "Include specific stakeholder concerns if known",
      "Note organizational culture factors",
      "Mention decision-making context (urgency, importance)",
    ],
    tags: ["stakeholders", "simulation", "decisions"],
    order: 13,
  },

  {
    id: "historical-figure-prompt",
    title: "Historical Figure Wisdom Prompt",
    description: "Apply the thinking style of historical figures or thought leaders.",
    promptText: `Create a historical figure perspective prompt for:

**Problem/question:**
[WHAT YOU WANT ANALYZED]

**Historical figure(s):**
[WHOSE PERSPECTIVE - or ask AI to recommend]

**What you want from their perspective:**
[TYPE OF INSIGHT]

Create a prompt that:
1. **Channeling the Figure**: Captures their thinking style and principles
2. **Historical Context**: How their era shaped their thinking
3. **Key Principles**: Core beliefs or methods they'd apply
4. **Famous Quotes/Decisions**: How they approached similar problems
5. **Modern Application**: How their thinking applies today
6. **Specific Advice**: What they'd recommend for your situation
7. **Critique**: Where even this figure might be wrong today

Provide:
- Full historical figure prompt
- How to select the right figure for your problem
- Multiple figure options for comparison
- How to avoid caricature or oversimplification`,
    placeholders: [
      "WHAT YOU WANT ANALYZED",
      "WHOSE PERSPECTIVE - or ask AI to recommend",
      "TYPE OF INSIGHT",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "ai-meta-prompts",
    categoryId: "role-based",
    exampleOutput: "A nuanced historical figure prompt that applies wisdom without caricature.",
    customizationNotes: [
      "Note if you have deep knowledge of this figure",
      "Mention aspects of their thinking you most admire",
      "Include context about your own domain",
    ],
    tags: ["historical", "wisdom", "perspective"],
    order: 14,
  },

  {
    id: "devil-advocate-prompt",
    title: "Devil's Advocate Prompt Generator",
    description: "Prompt the AI to challenge your assumptions and plans.",
    promptText: `Create a devil's advocate prompt for:

**My plan/idea:**
[DESCRIBE YOUR PLAN]

**What I've already considered:**
[ARGUMENTS FOR AND POTENTIAL ISSUES YOU'VE THOUGHT OF]

**My confidence level:**
[VERY CONFIDENT/SOMEWHAT CONFIDENT/UNCERTAIN]

Create a prompt that:
1. **Respects the Plan**: Acknowledges thought and effort put in
2. **Challenges Assumptions**: Questions underlying beliefs
3. **Identifies Blind Spots**: What hasn't been considered
4. **Role-plays Opposition**: How critics would respond
5. **Stress Tests**: Scenarios that could break the plan
6. **Suggests Improvements**: Constructive alternatives
7. **Provides Balance**: When pushback is valid vs. when it's nitpicking

Provide:
- Full devil's advocate prompt
- How to adjust intensity (gentle challenge vs. rigorous stress test)
- How to maintain constructive tone
- When devil's advocate adds value vs. creates doubt`,
    placeholders: [
      "DESCRIBE YOUR PLAN",
      "ARGUMENTS FOR AND POTENTIAL ISSUES YOU'VE THOUGHT OF",
      "VERY CONFIDENT/SOMEWHAT CONFIDENT/UNCERTAIN",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "ai-meta-prompts",
    categoryId: "role-based",
    exampleOutput:
      "A constructive devil's advocate prompt that challenges without being discouraging.",
    customizationNotes: [
      "Include known weaknesses you've already accepted",
      "Note if you need to present this to skeptics",
      "Mention your tolerance for criticism right now",
    ],
    tags: ["devil-advocate", "critical-thinking", "challenges"],
    order: 15,
  },

  // ============================================================================
  // OUTPUT CONTROL
  // ============================================================================

  {
    id: "output-format-specifier",
    title: "Output Format Specification Prompt",
    description: "Get exactly the output format you need from AI.",
    promptText: `Help me specify precise output format requirements.

**My task:**
[WHAT I WANT THE AI TO DO]

**Desired output format:**
[JSON/CSV/MARKDOWN/TABLE/CODE/OTHER]

**Specific format requirements:**
[DETAILED SPECIFICATIONS - field names, structure, etc.]

**What will consume this output:**
[HOW YOU'LL USE THE OUTPUT - code, report, etc.]

Create a prompt that:
1. **Clearly Specifies Format**: Exact structure, delimiters, conventions
2. **Provides Examples**: Shows expected format with sample data
3. **Handles Edge Cases**: What to do with missing or unusual data
4. **Validates Output**: Checks that format is correct
5. **Provides Schema**: If structured data, define the schema
6. **Escapes Properly**: If code/JSON, handles special characters
7. **Is Parse-able**: Designed for automated consumption

Include:
- Format specification checklist
- Common format mistakes to avoid
- Validation approach
- Fallback if format can't be met`,
    placeholders: [
      "WHAT I WANT THE AI TO DO",
      "JSON/CSV/MARKDOWN/TABLE/CODE/OTHER",
      "DETAILED SPECIFICATIONS - field names, structure, etc.",
      "HOW YOU'LL USE THE OUTPUT - code, report, etc.",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "ai-meta-prompts",
    categoryId: "output-control",
    exampleOutput: "A precise output format specification with examples and validation strategies.",
    customizationNotes: [
      "Include actual schema or format requirements",
      "Note if you need to process this programmatically",
      "Mention any parsers or tools you're using",
    ],
    tags: ["output-format", "structured-data", "specification"],
    order: 16,
  },

  {
    id: "length-control-prompt",
    title: "Response Length Control Prompt",
    description: "Get AI responses of exactly the right length.",
    promptText: `Create a length-controlled prompt for:

**Task:**
[WHAT I WANT DONE]

**Desired length:**
[VERY CONCISE/CONCISE/MODERATE/DETAILED/COMPREHENSIVE]

**Specific constraints:**
[WORD/CHARACTER COUNT IF APPLICABLE]

**Audience:**
[WHO WILL READ THIS]

Create a prompt that:
1. **Sets Length Expectations**: Clear word/paragraph/sentence targets
2. **Prioritizes Information**: What to include vs. cut based on space
3. **Provides Structure**: How to organize within length constraints
4. **Uses Efficient Language**: Techniques for conciseness or expansion
5. **Balances Depth vs. Brevity**: How to be comprehensive yet concise
6. **Includes Length Check**: Self-correction if response is too long/short

Provide:
- Length-optimized prompt
- How to adjust length for different needs
- When to target different lengths (concise vs. detailed)
- How to handle "make it longer" vs. "make it shorter"`,
    placeholders: [
      "WHAT I WANT DONE",
      "VERY CONCISE/CONCISE/MODERATE/DETAILED/COMPREHENSIVE",
      "WORD/CHARACTER COUNT IF APPLICABLE",
      "WHO WILL READ THIS",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "ai-meta-prompts",
    categoryId: "output-control",
    exampleOutput: "A prompt with precise length constraints and prioritization guidance.",
    customizationNotes: [
      "Include examples of good lengths",
      "Note if content is for a specific medium (tweet, email, report)",
      "Mention your priority (completeness vs. brevity)",
    ],
    tags: ["length", "conciseness", "brevity"],
    order: 17,
  },

  {
    id: "style-and-tone-controller",
    title: "Style and Tone Control Prompt",
    description: "Get AI responses with your desired voice and personality.",
    promptText: `Create a style and tone controlled prompt for:

**Task:**
[CONTENT TO BE GENERATED]

**Desired style:**
[PROFESSIONAL/CASUAL/FRIENDLY/FORMAL/CREATIVE/OTHER]

**Tone characteristics:**
[ADJECTIVES - e.g., warm, authoritative, playful, serious]

**Audience:**
[WHO'S READING]

**Brand voice reference:**
[EXISTING CONTENT TO MATCH - or describe the voice]

Create a prompt that:
1. **Defines Style**: Clear characteristics of desired voice
2. **Provides Examples**: Shows both in-scope and out-of-scope examples
3. **Specifies Mechanics**: Sentence structure, word choice, conventions
4. **Sets Boundaries**: What to avoid (jargon, slang, formality level)
5. **Handles Context**: How style varies for different situations
6. **Maintains Consistency**: How to keep voice consistent throughout
7. **Self-Correction**: How AI should check its own style

Include:
- Style guide template
- How to build style from examples
- Common style pitfalls to avoid`,
    placeholders: [
      "CONTENT TO BE GENERATED",
      "PROFESSIONAL/CASUAL/FRIENDLY/FORMAL/CREATIVE/OTHER",
      "ADJECTIVES - e.g., warm, authoritative, playful, serious",
      "WHO'S READING",
      "EXISTING CONTENT TO MATCH - or describe the voice",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "ai-meta-prompts",
    categoryId: "output-control",
    exampleOutput:
      "A style-controlled prompt with examples, boundaries, and self-correction mechanisms.",
    customizationNotes: [
      "Paste examples of your actual writing or brand voice",
      "Note if you want to match a specific publication or author",
      "Mention style elements you specifically dislike",
    ],
    tags: ["style", "tone", "voice"],
    order: 18,
  },

  {
    id: "structured-output-validator",
    title: "Structured Output Validator Prompt",
    description: "Get AI to validate its own structured outputs.",
    promptText: `Create a self-validating structured output prompt for:

**Task:**
[WHAT NEEDS VALIDATING]

**Output structure:**
[SCHEMA OR FORMAT REQUIREMENTS]

**Validation criteria:**
[WHAT MAKES OUTPUT VALID/INVALID]

Create a prompt that:
1. **Generates Output**: Creates the structured response
2. **Self-Validates**: Checks against schema/requirements
3. **Identifies Errors**: What's wrong if validation fails
4. **Auto-Corrects**: Fixes validation issues
5. **Reports Status**: Clearly indicates if output is valid
6. **Provides Corrections**: Shows what was fixed
7. **Re-attempts**: Tries again if major issues

Provide:
- Full self-validating prompt
- Common validation failures and how to prevent
- How to handle unfixable validation errors
- Output format that makes validation status clear`,
    placeholders: [
      "WHAT NEEDS VALIDATING",
      "SCHEMA OR FORMAT REQUIREMENTS",
      "WHAT MAKES OUTPUT VALID/INVALID",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "ai-meta-prompts",
    categoryId: "output-control",
    exampleOutput: "A self-validating output prompt with error detection and auto-correction.",
    customizationNotes: [
      "Include specific validation rules from your schema",
      "Note which fields are required vs. optional",
      "Mention how you'll handle validation failures",
    ],
    tags: ["validation", "structured-data", "quality"],
    order: 19,
  },

  {
    id: "multi-format-output-prompt",
    title: "Multi-Format Output Generator",
    description: "Get the same content in multiple formats from one prompt.",
    promptText: `Create a multi-format output prompt for:

**Core content:**
[WHAT CONTENT NEEDS TO BE GENERATED]

**Target formats:**
[LIST FORMATS - e.g., summary, detailed, bullet points, social media]

**Audiences for each format:**
[WHO NEEDS WHICH FORMAT]

Create a prompt that:
1. **Understands Core Message**: Identifies key information once
2. **Adapts by Format**: Restructures for each format appropriately
3. **Maintains Consistency**: Same core facts across all versions
4. **Optimizes per Format**: Uses conventions of each format
5. **Clearly Separates**: Distinguishes each format in output
6. **Labels Clearly**: Makes each version easy to identify
7. **Handles Constraints**: Respects length requirements of each format

Provide:
- Multi-format prompt template
- Common format pairings that work well together
- How to handle contradictory format requirements
- Output organization that makes all versions accessible`,
    placeholders: [
      "WHAT CONTENT NEEDS TO BE GENERATED",
      "LIST FORMATS - e.g., summary, detailed, bullet points, social media",
      "WHO NEEDS WHICH FORMAT",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "ai-meta-prompts",
    categoryId: "output-control",
    exampleOutput:
      "A multi-format output prompt that efficiently generates consistent content across formats.",
    customizationNotes: [
      "List specific formats you need regularly",
      "Note which format is primary vs. secondary",
      "Mention if formats need to link or reference each other",
    ],
    tags: ["multi-format", "repurposing", "content"],
    order: 20,
  },

  // ============================================================================
  // TASK DECOMPOSITION
  // ============================================================================

  {
    id: "complex-task-breakdown",
    title: "Complex Task Decomposition Prompt",
    description: "Break complex tasks into manageable steps with clear dependencies.",
    promptText: `Create a task decomposition prompt for:

**Complex task:**
[DESCRIBE THE OVERALL GOAL]

**Why it's complex:**
[COMPLEXITY FACTORS]

**Available resources:**
[WHAT YOU HAVE TO WORK WITH]

**Constraints:**
[LIMITATIONS OR REQUIREMENTS]

Create a prompt that:
1. **Analyzes the Task**: Understands what success looks like
2. **Identifies Sub-tasks**: Breaks into logical components
3. **Sequences Dependencies**: What must come before what
4. **Estimates Effort**: Relative complexity/time for each sub-task
5. **Identifies Parallel Opportunities**: What can be done simultaneously
6. **Defines Checkpoints**: How to measure progress
7. **Plans for Risks**: What could go wrong and contingencies
8. **Optimizes Execution**: Most efficient order and approach

Provide:
- Task decomposition prompt
- Visual representation of task structure
- How to handle circular dependencies
- When decomposition ends up over-complicating`,
    placeholders: [
      "DESCRIBE THE OVERALL GOAL",
      "COMPLEXITY FACTORS",
      "WHAT YOU HAVE TO WORK WITH",
      "LIMITATIONS OR REQUIREMENTS",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "ai-meta-prompts",
    categoryId: "task-decomposition",
    exampleOutput:
      "A comprehensive task decomposition prompt with dependencies, sequencing, and risk planning.",
    customizationNotes: [
      "Include typical sub-task types for your domain",
      "Note if you have time or resource constraints",
      "Mention your experience with similar tasks",
    ],
    tags: ["decomposition", "planning", "task-management"],
    order: 21,
  },

  {
    id: "parallel-workflow-generator",
    title: "Parallel Workflow Prompt Generator",
    description: "Design workflows that can run multiple AI tasks simultaneously.",
    promptText: `Create a parallel workflow prompt structure for:

**Overall objective:**
[FINAL GOAL]

**What can be done in parallel:**
[TASKS THAT DON'T DEPEND ON EACH OTHER]

**What needs synthesis:**
[HOW PARALLEL OUTPUTS COME TOGETHER]

Design a workflow that:
1. **Identifies Parallel Streams**: What can run simultaneously
2. **Defines Stream Tasks**: What each parallel path does
3. **Sets Independent Prompts**: Each stream has its own prompt
4. **Plans Synthesis**: How to combine parallel results
5. **Handles Dependencies**: What must wait for what
6. **Manages Resources**: How to execute practically (multiple AI calls, etc.)
7. **Validates Integration**: How combined result is checked

Provide:
- Parallel workflow prompt structure
- How to coordinate multiple AI calls practically
- When parallelization adds efficiency vs. complexity
- Template for reusing this pattern`,
    placeholders: [
      "FINAL GOAL",
      "TASKS THAT DON'T DEPEND ON EACH OTHER",
      "HOW PARALLEL OUTPUTS COME TOGETHER",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "ai-meta-prompts",
    categoryId: "task-decomposition",
    exampleOutput: "A parallel workflow structure with independent streams and synthesis strategy.",
    customizationNotes: [
      "Note if you're doing this manually or with code/API",
      "Include how many parallel tasks you can manage",
      "Mention if you have specific tools or platforms",
    ],
    tags: ["parallel", "workflow", "efficiency"],
    order: 22,
  },

  {
    id: "iterative-refinement-prompt",
    title: "Iterative Refinement Prompt Generator",
    description: "Create prompts that improve outputs through multiple iterations.",
    promptText: `Create an iterative refinement prompt structure for:

**Initial task:**
[WHAT NEEDS TO BE DONE]

**Why one pass isn't enough:**
[WHY ITERATION WOULD HELP]

**Quality target:**
[HOW GOOD IT NEEDS TO BE]

Design an iterative process that:
1. **Generates Initial Output**: Creates first version
2. **Self-Critiques**: Identifies weaknesses and improvements
3. **Refines Specific Issues**: Targets problems found
4. **Elevates Thinking**: Each iteration improves quality, not just polishing
5. **Knows When Done**: Stopping criteria for sufficient quality
6. **Shows Evolution**: How output changed across iterations (optional)
7. **Documents Choices**: Why specific improvements were made

Provide:
- Iterative refinement prompt template
- How many iterations to attempt
- What each iteration should focus on
- How to detect diminishing returns`,
    placeholders: ["WHAT NEEDS TO BE DONE", "WHY ITERATION WOULD HELP", "HOW GOOD IT NEEDS TO BE"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "ai-meta-prompts",
    categoryId: "task-decomposition",
    exampleOutput:
      "An iterative refinement prompt structure that systematically improves output quality.",
    customizationNotes: [
      "Include what quality means for your use case",
      "Note how much computation/time you can invest",
      "Mention specific failure modes to watch for",
    ],
    tags: ["iteration", "refinement", "quality"],
    order: 23,
  },

  {
    id: "multi-stage-pipeline-prompt",
    title: "Multi-Stage Pipeline Prompt Generator",
    description: "Create complex multi-stage AI workflows with handoffs.",
    promptText: `Design a multi-stage prompt pipeline for:

**End goal:**
[FINAL DESIRED OUTPUT]

**Stages needed:**
[ROUGH STAGES - or ask AI to design]

**Stage outputs that feed next stages:**
[WHAT FLOWS BETWEEN STAGES]

Design a pipeline with:
1. **Stage Definitions**: What each stage does
2. **Input/Output Contracts**: What each stage receives and produces
3. **Prompt per Stage**: Specific prompt for each step
4. **Handoff Mechanism**: How outputs become inputs
5. **Error Handling**: What to do when stages fail
6. **Quality Gates**: How to validate before proceeding
7. **Optimization**: How to make the pipeline efficient
8. **Template Structure**: Reusable pipeline framework

Provide:
- Complete multi-stage prompt pipeline
- How to execute manually vs. programmatically
- Pipeline diagram/flow
- How to debug stage failures`,
    placeholders: [
      "FINAL DESIRED OUTPUT",
      "ROUGH STAGES - or ask AI to design",
      "WHAT FLOWS BETWEEN STAGES",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "ai-meta-prompts",
    categoryId: "task-decomposition",
    exampleOutput:
      "A complete multi-stage prompt pipeline with defined handoffs and quality gates.",
    customizationNotes: [
      "Include specific stages you know you need",
      "Note if you're building this for code or manual use",
      "Mention any tools or platforms in your pipeline",
    ],
    tags: ["pipeline", "multi-stage", "workflow"],
    order: 24,
  },

  {
    id: "recursive-decomposition-prompt",
    title: "Recursive Task Decomposition Prompt",
    description: "Break down tasks recursively until they're actionable.",
    promptText: `Create a recursive decomposition prompt for:

**Complex goal:**
[HIGH-LEVEL OBJECTIVE]

**Stopping criteria:**
[WHEN TASKS ARE SMALL ENOUGH]

**Available resources:**
[WHO/WHAT WILL EXECUTE]

Design a prompt that:
1. **Starts with Goal**: Understands the overall objective
2. **Decomposes One Level**: Breaks into major sub-goals
3. **Checks Size**: Are sub-goals actionable yet?
4. **Recursively Decomposes**: Repeats for sub-goals that are still too big
5. **Stops at Actionable**: Continues until each task is doable
6. **Maintains Context**: Keeps track of how sub-tasks connect
7. **Reassembles**: Shows how completed tasks achieve the original goal
8. **Estimates Complexity**: Effort for each leaf task

Provide:
- Recursive decomposition prompt
- How to set appropriate "actionable" thresholds
- Visual tree structure of tasks
- How to handle tasks that stay vague even after decomposition`,
    placeholders: ["HIGH-LEVEL OBJECTIVE", "WHEN TASKS ARE SMALL ENOUGH", "WHO/WHAT WILL EXECUTE"],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "ai-meta-prompts",
    categoryId: "task-decomposition",
    exampleOutput:
      "A recursive decomposition prompt that breaks down complex goals to actionable tasks.",
    customizationNotes: [
      'Define what "actionable" means in your context',
      "Note your preferred task size or duration",
      "Mention if you have time or budget constraints",
    ],
    tags: ["recursive", "decomposition", "breakdown"],
    order: 25,
  },
];
