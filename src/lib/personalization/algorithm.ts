export type ModuleId =
  | "ai_foundations"
  | "productivity_basics"
  | "prompt_engineering"
  | "content_creation"
  | "chatgpt"
  | "claude"
  | "gemini"
  | "midjourney"
  | "workflows"
  | "28_day_challenge";

export const ALL_MODULES: ModuleId[] = [
  "ai_foundations",
  "productivity_basics",
  "prompt_engineering",
  "content_creation",
  "chatgpt",
  "claude",
  "gemini",
  "midjourney",
  "workflows",
  "28_day_challenge",
];

export interface OnboardingResponse {
  questionId: string;
  dimensionId: string;
  value: string;
}

export interface PersonalizationResult {
  customerProfile: "employee" | "independent";
  persona:
    | "threatened_performer"
    | "business_leverager"
    | "curious_explorer"
    | "unknown";
  aiExperience: "none" | "basic" | "intermediate" | "regular";
  recommendedPath: ModuleId[];
  pathLength: 3 | 5 | 7;
}

/** Full scoring trace for audits (baseline weights, override rules, ranking). */
export interface PersonalizationAudit {
  version: 1;
  generatedAtIso: string;
  perResponse: Array<{
    questionId: string;
    dimensionId: string;
    value: string;
    weightKey: string;
    /** False when option value does not match any `RESPONSE_WEIGHTS` key (no points added). */
    matchedScoringTable: boolean;
    weightsFromScoringTable: Partial<Record<ModuleId, number>>;
    pointsAddedPerModule: Partial<Record<ModuleId, number>>;
  }>;
  rawScores: Record<ModuleId, number>;
  overrideRules: Array<{
    ruleId: string;
    description: string;
    scoreDeltaByModule: Partial<Record<ModuleId, number>>;
  }>;
  adjustedScores: Record<ModuleId, number>;
  /** All modules sorted by adjusted score descending (ties keep insertion order). */
  fullRanking: ModuleId[];
  pathLengthRule: string;
  personaRule: {
    sourceQuestionId: string;
    q6Value: string | null;
    personaAssigned: PersonalizationResult["persona"];
  };
  customerProfileRule: {
    sourceQuestionId: string;
    q1Value: string | null;
    customerProfile: PersonalizationResult["customerProfile"];
  };
  aiExperienceRule: {
    sourceQuestionId: string;
    q3Value: string | null;
    aiExperience: PersonalizationResult["aiExperience"];
  };
}

/** Onboarding response → module weight table (stage 1). Keys: `${questionId}:${optionValue}` */
const RESPONSE_WEIGHTS: Record<string, Partial<Record<ModuleId, number>>> = {
  "q1:employee": { productivity_basics: 4, workflows: 3, ai_foundations: 3 },
  "q1:freelancer": { content_creation: 4, prompt_engineering: 4, chatgpt: 3 },
  "q1:business_owner": {
    workflows: 4,
    productivity_basics: 4,
    ai_foundations: 3,
  },
  "q1:between_roles": { ai_foundations: 5, productivity_basics: 3 },

  "q2:marketing": {
    content_creation: 5,
    prompt_engineering: 4,
    midjourney: 3,
    chatgpt: 3,
  },
  "q2:finance_ops": {
    productivity_basics: 5,
    prompt_engineering: 4,
    gemini: 3,
  },
  "q2:management": { productivity_basics: 5, workflows: 4, ai_foundations: 3 },
  "q2:hr": { productivity_basics: 4, chatgpt: 3, ai_foundations: 3 },
  "q2:creative": { midjourney: 5, content_creation: 4, prompt_engineering: 3 },
  "q2:other": { ai_foundations: 3, productivity_basics: 3, chatgpt: 2 },

  "q3:havent_tried": { ai_foundations: 5, productivity_basics: 3 },
  "q3:chatgpt_few": { prompt_engineering: 4, productivity_basics: 3 },
  "q3:scratching_surface": { chatgpt: 4, claude: 3, workflows: 3 },
  "q3:daily_changed_work": { workflows: 4, prompt_engineering: 3, gemini: 3 },

  "q4:none": { ai_foundations: 5, productivity_basics: 3 },
  "q4:only_chatgpt": { chatgpt: 5, prompt_engineering: 4 },
  "q4:mostly_image": { midjourney: 5, content_creation: 4 },
  "q4:several_tools": { chatgpt: 4, claude: 3, gemini: 3, workflows: 3 },

  "q5:bad_unusable": { ai_foundations: 4, prompt_engineering: 5, productivity_basics: 3 },
  "q5:okay_could_better": { prompt_engineering: 4, chatgpt: 3, productivity_basics: 3 },
  "q5:good_mostly": { workflows: 4, prompt_engineering: 3, gemini: 3 },
  "q5:unsure_judge": { ai_foundations: 5, productivity_basics: 4 },

  "q6:worried_behind": { ai_foundations: 4, prompt_engineering: 4, chatgpt: 3 },
  "q6:efficient_better_work": { productivity_basics: 5, workflows: 4, prompt_engineering: 3 },
  "q6:overwhelmed_save_time": { productivity_basics: 5, workflows: 4, chatgpt: 3 },
  "q6:curious_stay_sharp": { ai_foundations: 4, prompt_engineering: 3, chatgpt: 3 },
  "q6:grow_business_freelance": { content_creation: 4, workflows: 4, prompt_engineering: 3 },

  "q7:dont_know_start": { ai_foundations: 5, productivity_basics: 4 },
  "q7:output_not_good_enough": { prompt_engineering: 5, chatgpt: 4 },
  "q7:too_many_tools": { prompt_engineering: 4, workflows: 3, ai_foundations: 3 },
  "q7:no_time_figure_out": { productivity_basics: 4, workflows: 3, ai_foundations: 3 },
  "q7:worried_accuracy": { ai_foundations: 4, prompt_engineering: 4, chatgpt: 3 },

  "q8:not_very_confident": { ai_foundations: 5, productivity_basics: 4 },
  "q8:somewhat_confident": { prompt_engineering: 4, productivity_basics: 3 },
  "q8:confident": { workflows: 3, prompt_engineering: 3, chatgpt: 3 },
  "q8:very_confident": { workflows: 4, prompt_engineering: 3, gemini: 2 },

  "q9:ready_now": { workflows: 4, chatgpt: 3, prompt_engineering: 3 },
  "q9:ready_need_guidance": { ai_foundations: 3, productivity_basics: 3 },
  "q9:skeptical_willing": { ai_foundations: 5, productivity_basics: 3 },

  "q10:about_5_min": { ai_foundations: 3, chatgpt: 2 },
  "q10:ten_to_15_min": { productivity_basics: 3, chatgpt: 2 },
  "q10:twenty_to_30_min": { workflows: 4, prompt_engineering: 3, chatgpt: 3 },
  "q10:more_than_30_min": { workflows: 4, prompt_engineering: 3, chatgpt: 3 },

  "q11:job_better_faster": { productivity_basics: 4, workflows: 3, chatgpt: 3 },
  "q11:better_content": { content_creation: 4, prompt_engineering: 4, chatgpt: 3 },
  "q11:understand_landscape": {
    ai_foundations: 4,
    productivity_basics: 3,
    prompt_engineering: 3,
  },
  "q11:automate_repetitive": { workflows: 5, productivity_basics: 4, chatgpt: 3 },
};

/**
 * Sorted option values per question present in `RESPONSE_WEIGHTS` (q1–q11).
 * Cartesian product size is 7,372,800 — used for exhaustive algorithm audits.
 *
 * @returns Eleven arrays, one per question, in q1…q11 order
 */
export function getScoringTableOptionDomains(): string[][] {
  const domains: string[][] = [];
  for (let qi = 1; qi <= 11; qi++) {
    const prefix = `q${qi}:`;
    const opts = Object.keys(RESPONSE_WEIGHTS)
      .filter((k) => k.startsWith(prefix))
      .map((k) => k.slice(prefix.length))
      .sort((a, b) => a.localeCompare(b));
    domains.push(opts);
  }
  return domains;
}

/**
 * Total count of distinct onboarding answer tuples covered by `RESPONSE_WEIGHTS`.
 *
 * @returns 7,372,800 for the current scoring table
 */
export function getScoringTableCombinationCount(): number {
  return getScoringTableOptionDomains().reduce((acc, d) => acc * d.length, 1);
}

function mapToScoresRecord(scores: Map<ModuleId, number>): Record<ModuleId, number> {
  const out = {} as Record<ModuleId, number>;
  for (const id of ALL_MODULES) {
    out[id] = scores.get(id) ?? 0;
  }
  return out;
}

function diffScoreMaps(
  before: Map<ModuleId, number>,
  after: Map<ModuleId, number>,
): Partial<Record<ModuleId, number>> {
  const d: Partial<Record<ModuleId, number>> = {};
  for (const id of ALL_MODULES) {
    const delta = (after.get(id) ?? 0) - (before.get(id) ?? 0);
    if (delta !== 0) d[id] = delta;
  }
  return d;
}

function accumulateScoresWithTrace(
  responses: OnboardingResponse[],
): { scores: Map<ModuleId, number>; perResponse: PersonalizationAudit["perResponse"] } {
  const scores = new Map<ModuleId, number>();
  ALL_MODULES.forEach((m) => scores.set(m, 0));
  const perResponse: PersonalizationAudit["perResponse"] = [];

  for (const response of responses) {
    const weightKey = `${response.questionId}:${response.value}`;
    const block = RESPONSE_WEIGHTS[weightKey];
    const matched = Boolean(block);
    const weightsFromScoringTable: Partial<Record<ModuleId, number>> = matched
      ? { ...(block as Partial<Record<ModuleId, number>>) }
      : {};
    const pointsAddedPerModule: Partial<Record<ModuleId, number>> = {};
    for (const [moduleId, weight] of Object.entries(weightsFromScoringTable)) {
      const mid = moduleId as ModuleId;
      const w = weight as number;
      scores.set(mid, (scores.get(mid) ?? 0) + w);
      pointsAddedPerModule[mid] = w;
    }
    perResponse.push({
      questionId: response.questionId,
      dimensionId: response.dimensionId,
      value: response.value,
      weightKey,
      matchedScoringTable: matched,
      weightsFromScoringTable,
      pointsAddedPerModule,
    });
  }

  return { scores, perResponse };
}

function applyOverridesWithTrace(
  scores: Map<ModuleId, number>,
  responses: OnboardingResponse[],
): { adjusted: Map<ModuleId, number>; overrideRules: PersonalizationAudit["overrideRules"] } {
  const adjusted = new Map(scores);
  const overrideRules: PersonalizationAudit["overrideRules"] = [];

  const aiExp = responses.find((r) => r.questionId === "q3")?.value;
  const profession = responses.find((r) => r.questionId === "q1")?.value;
  const tools = responses.find((r) => r.questionId === "q4")?.value;

  if (aiExp === "havent_tried" || tools === "none") {
    const before = new Map(adjusted);
    adjusted.set("ai_foundations", (adjusted.get("ai_foundations") || 0) + 10);
    adjusted.set("productivity_basics", (adjusted.get("productivity_basics") || 0) + 5);
    overrideRules.push({
      ruleId: "novice_or_no_tools_boost",
      description:
        "If q3=havent_tried OR q4=none: +10 ai_foundations, +5 productivity_basics (after baseline scoring-table weights).",
      scoreDeltaByModule: diffScoreMaps(before, adjusted),
    });
  }

  const isIntermediateOrBeyond =
    aiExp === "scratching_surface" || aiExp === "daily_changed_work";
  if (isIntermediateOrBeyond) {
    const before = new Map(adjusted);
    adjusted.set("prompt_engineering", (adjusted.get("prompt_engineering") || 0) + 6);
    adjusted.set("ai_foundations", Math.max(0, (adjusted.get("ai_foundations") || 0) - 4));
    overrideRules.push({
      ruleId: "intermediate_ai_adjust",
      description:
        "If q3 in (scratching_surface, daily_changed_work): +6 prompt_engineering; ai_foundations -= 4 floored at 0.",
      scoreDeltaByModule: diffScoreMaps(before, adjusted),
    });
  }

  if (profession === "freelancer" || profession === "business_owner") {
    const before = new Map(adjusted);
    adjusted.set("content_creation", (adjusted.get("content_creation") || 0) + 3);
    adjusted.set("productivity_basics", (adjusted.get("productivity_basics") || 0) + 3);
    overrideRules.push({
      ruleId: "independent_profession_boost",
      description:
        "If q1 in (freelancer, business_owner): +3 content_creation, +3 productivity_basics.",
      scoreDeltaByModule: diffScoreMaps(before, adjusted),
    });
  }

  const dailyTime = responses.find((r) => r.questionId === "q10")?.value;
  if (dailyTime === "twenty_to_30_min" || dailyTime === "more_than_30_min") {
    const before = new Map(adjusted);
    adjusted.set("28_day_challenge", (adjusted.get("28_day_challenge") || 0) + 4);
    overrideRules.push({
      ruleId: "time_for_challenge",
      description:
        "If q10 in (twenty_to_30_min, more_than_30_min): +4 to 28_day_challenge module score.",
      scoreDeltaByModule: diffScoreMaps(before, adjusted),
    });
  }

  return { adjusted, overrideRules };
}

function determinePathLength(responses: OnboardingResponse[]): {
  pathLength: 3 | 5 | 7;
  rule: string;
} {
  const time = responses.find((r) => r.questionId === "q10")?.value;
  if (time === "about_5_min")
    return { pathLength: 3, rule: "q10=about_5_min → 3 modules" };
  if (time === "ten_to_15_min")
    return { pathLength: 5, rule: "q10=ten_to_15_min → 5 modules" };
  return { pathLength: 7, rule: "q10 is twenty_to_30_min, more_than_30_min, or missing → 7 modules" };
}

function derivePersona(motivation: string | undefined): {
  persona: PersonalizationResult["persona"];
  q6Value: string | null;
} {
  const q6Value = motivation ?? null;
  if (motivation === "worried_behind" || motivation === "overwhelmed_save_time") {
    return { persona: "threatened_performer", q6Value };
  }
  if (motivation === "efficient_better_work" || motivation === "grow_business_freelance") {
    return { persona: "business_leverager", q6Value };
  }
  if (motivation === "curious_stay_sharp") {
    return { persona: "curious_explorer", q6Value };
  }
  return { persona: "unknown", q6Value };
}

export function runPersonalization(responses: OnboardingResponse[]): PersonalizationResult {
  return runPersonalizationWithAudit(responses).result;
}

export function runPersonalizationWithAudit(responses: OnboardingResponse[]): {
  result: PersonalizationResult;
  audit: PersonalizationAudit;
} {
  const { scores: rawScoresMap, perResponse } = accumulateScoresWithTrace(responses);
  const { adjusted: adjustedMap, overrideRules } = applyOverridesWithTrace(rawScoresMap, responses);
  const { pathLength, rule: pathLengthRule } = determinePathLength(responses);

  const fullRanking = Array.from(adjustedMap.entries())
    .sort(([, a], [, b]) => b - a)
    .map(([moduleId]) => moduleId);

  const recommendedPath = fullRanking.slice(0, pathLength);

  const profession = responses.find((r) => r.questionId === "q1")?.value;
  const customerProfile: PersonalizationResult["customerProfile"] =
    profession === "employee" || profession === "between_roles" ? "employee" : "independent";

  const motivation = responses.find((r) => r.questionId === "q6")?.value;
  const { persona, q6Value } = derivePersona(motivation);

  const aiExp = responses.find((r) => r.questionId === "q3")?.value;
  const aiExperience: PersonalizationResult["aiExperience"] =
    aiExp === "havent_tried"
      ? "none"
      : aiExp === "chatgpt_few"
        ? "basic"
        : aiExp === "daily_changed_work"
          ? "regular"
          : "intermediate";

  const result: PersonalizationResult = {
    customerProfile,
    persona,
    aiExperience,
    recommendedPath,
    pathLength,
  };

  const audit: PersonalizationAudit = {
    version: 1,
    generatedAtIso: new Date().toISOString(),
    perResponse,
    rawScores: mapToScoresRecord(rawScoresMap),
    overrideRules,
    adjustedScores: mapToScoresRecord(adjustedMap),
    fullRanking,
    pathLengthRule,
    personaRule: {
      sourceQuestionId: "q6",
      q6Value,
      personaAssigned: persona,
    },
    customerProfileRule: {
      sourceQuestionId: "q1",
      q1Value: profession ?? null,
      customerProfile,
    },
    aiExperienceRule: {
      sourceQuestionId: "q3",
      q3Value: aiExp ?? null,
      aiExperience,
    },
  };

  return { result, audit };
}

export function getModuleName(moduleId: ModuleId): string {
  const names: Record<ModuleId, string> = {
    ai_foundations: "AI Foundations",
    productivity_basics: "AI Productivity Basics",
    prompt_engineering: "Prompt Engineering Mastery",
    content_creation: "AI Content Creation",
    chatgpt: "ChatGPT Mastery",
    claude: "Claude AI Mastery",
    gemini: "Google Gemini Mastery",
    midjourney: "Midjourney Mastery",
    workflows: "Workflow and Automation",
    "28_day_challenge": "28-Day AI Challenge",
  };
  return names[moduleId] || moduleId;
}

export function getModuleDescription(moduleId: ModuleId): string {
  const descriptions: Record<ModuleId, string> = {
    ai_foundations: "Learn the fundamentals of AI and how it can transform your work",
    productivity_basics: "Master AI tools to streamline your daily workflows and save time",
    prompt_engineering: "Learn to write effective prompts that get results",
    content_creation: "Use AI to create better content faster",
    chatgpt: "Become proficient with ChatGPT for professional use",
    claude: "Master Claude AI for business and creative tasks",
    gemini: "Leverage Google Gemini for research and productivity",
    midjourney: "Create stunning AI-generated images for your work",
    workflows: "Combine AI tools into integrated workflows for multi-step projects",
    "28_day_challenge": "A structured 28-day program to build lasting AI habits",
  };
  return descriptions[moduleId] || "";
}
