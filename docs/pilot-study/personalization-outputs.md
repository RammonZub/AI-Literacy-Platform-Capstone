# Personalization Outputs

**N = 12** | **Window:** 2026-03-10 → 2026-03-17 | **Algorithm:** `src/lib/personalization/algorithm.ts`

Each participant completed an 11-question onboarding assessment. The deterministic personalization algorithm processed their responses and assigned a persona, customer profile, AI experience level, and a ranked recommended learning path. The table below records the algorithm-assigned classification for every pilot participant.

---

## Algorithm-Assigned Classifications (All 12 Participants)


| ID   | Persona              | Customer Profile | AI Exp       | Path | First Module        | Recommended Sequence                                                                                            |
| ---- | -------------------- | ---------------- | ------------ | ---- | ------------------- | --------------------------------------------------------------------------------------------------------------- |
| TP01 | business_leverager   | independent      | basic        | 5    | productivity_basics | productivity_basics, prompt_engineering, workflows, chatgpt, ai_foundations                                     |
| TP02 | business_leverager   | independent      | intermediate | 5    | workflows           | workflows, productivity_basics, prompt_engineering, chatgpt, ai_foundations                                     |
| TP03 | business_leverager   | employee         | intermediate | 7    | prompt_engineering  | prompt_engineering, chatgpt, workflows, productivity_basics, content_creation, 28_day_challenge, claude         |
| TP04 | threatened_performer | employee         | basic        | 5    | prompt_engineering  | prompt_engineering, chatgpt, productivity_basics, ai_foundations, content_creation                              |
| TP05 | threatened_performer | employee         | none         | 5    | ai_foundations      | ai_foundations, productivity_basics, prompt_engineering, chatgpt, content_creation                              |
| TP06 | threatened_performer | employee         | basic        | 7    | prompt_engineering  | prompt_engineering, productivity_basics, chatgpt, workflows, ai_foundations, content_creation, 28_day_challenge |
| TP07 | threatened_performer | employee         | none         | 3    | ai_foundations      | ai_foundations, productivity_basics, prompt_engineering                                                         |
| TP08 | business_leverager   | employee         | basic        | 5    | productivity_basics | productivity_basics, workflows, prompt_engineering, chatgpt, ai_foundations                                     |
| TP09 | threatened_performer | employee         | basic        | 3    | prompt_engineering  | prompt_engineering, productivity_basics, ai_foundations                                                         |
| TP10 | business_leverager   | independent      | intermediate | 7    | workflows           | workflows, prompt_engineering, chatgpt, productivity_basics, content_creation, claude, ai_foundations           |
| TP11 | business_leverager   | independent      | basic        | 5    | productivity_basics | productivity_basics, prompt_engineering, chatgpt, workflows, ai_foundations                                     |
| TP12 | business_leverager   | employee         | intermediate | 7    | workflows           | workflows, prompt_engineering, productivity_basics, chatgpt, ai_foundations, claude, 28_day_challenge           |


---

## First-Module Distribution


| First module        | Count | Participants           |
| ------------------- | ----- | ---------------------- |
| prompt_engineering  | 4     | TP03, TP04, TP06, TP09 |
| productivity_basics | 3     | TP01, TP08, TP11       |
| workflows           | 3     | TP02, TP10, TP12       |
| ai_foundations      | 2     | TP05, TP07             |


The algorithm distributed participants across 4 of the 10 available modules. No single module dominates. Beginners (ai_experience = none) were routed to ai_foundations; intermediate users with independent profiles were routed to workflows.

---

## Override Rules Applied to Cohort

The personalization algorithm includes four context-sensitive override rules that adjust module scores before ranking. The table below shows which rules were triggered for pilot participants.


| Override                     | Triggered for          | Count |
| ---------------------------- | ---------------------- | ----- |
| novice_or_no_tools_boost     | TP05, TP07             | 2     |
| intermediate_ai_adjust       | TP02, TP03, TP10, TP12 | 4     |
| independent_profession_boost | TP01, TP02, TP10, TP11 | 4     |
| time_for_challenge           | TP03, TP06, TP10, TP12 | 4     |


All four override rules were exercised by at least two participants, confirming coverage across the cohort.

---

## Cohort Summary


| Classification   | Distribution                                 |
| ---------------- | -------------------------------------------- |
| Persona          | 7 business_leverager, 5 threatened_performer |
| Customer profile | 8 employee, 4 independent                    |
| AI experience    | 2 none, 6 basic, 4 intermediate              |
| Path length      | 2 × 3 modules, 6 × 5 modules, 4 × 7 modules  |
