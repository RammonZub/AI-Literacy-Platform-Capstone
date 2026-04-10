# Platform

This document describes the learner-facing platform: the authenticated application where participants complete their onboarding, receive personalized recommendations, progress through lessons, and generate the behavioral data analyzed in the thesis evaluation.

## Learner Flow

1. **Onboarding Assessment.** The participant completes an 11-question single-choice assessment covering professional context, AI experience, motivation, confidence, and time availability. The assessment does not require authentication. Implementation: `src/app/onboarding/`.

2. **Personalization.** The deterministic algorithm processes the responses through four stages (weight mapping, score accumulation, override rules, path length determination) and produces a ranked module recommendation. Implementation: `src/lib/personalization/`.

3. **Account Creation.** The participant creates an account. The personalization result is persisted to `onboarding_sessions` and a normalized payload is written to `users.metadata.personalization`.

4. **Dashboard.** The authenticated learner enters the platform dashboard, which presents the recommended learning path as an ordered set of module cards. The dashboard also displays progress metrics: experience points, current streak, and lessons completed. Implementation: `src/app/platform/page.tsx`.

5. **Lesson Delivery.** Lessons are article-based, approximately 15 minutes each, and may include inline quiz checkpoints and applied tasks. Lesson content is rendered from typed TypeScript data files. Implementation: `src/app/platform/module/[moduleId]/lesson/[lessonId]/`.

6. **Progress and Telemetry.** Each lesson start and completion creates a `lesson_progress` record. Behavioral events (checkpoint attempts, XP awards, streak updates, recommendation ratings) are logged to the `telemetry_events` table. These records constitute the primary evidence for the pilot study evaluation. Implementation: `src/app/platform/progress/`, `src/lib/telemetry.ts`.

## Key Implementation Areas

| Area | Location | Thesis Relevance |
| ---- | ---- | ---- |
| Onboarding UI | `src/app/onboarding/` | Captures the assessment input for the personalization algorithm (Thesis §3.7.2). |
| Personalization | `src/lib/personalization/` | Deterministic cold-start recommendation engine (Thesis §3.7.3, Appendix B.2). |
| Learner dashboard | `src/app/platform/` | Entry point for the recommended learning path and progress tracking. |
| Curriculum data | `src/data/content/` | 10 modules, 214 lessons organized in typed TypeScript files (Thesis §3.6). |
| Progress tracking | `src/app/platform/progress/` | Server actions for recording lesson starts, completions, and XP. |
| Telemetry | `src/lib/telemetry.ts` | First-party event logging for pilot study evidence (Thesis Chapter 4). |

## Related Documentation

- Architecture and data model: [../architecture/README.md](../architecture/README.md)
- Curriculum rationale: [../courses/README.md](../courses/README.md)
- Authentication and access control: [../app-settings/README.md](../app-settings/README.md)
