# System Overview

The platform is a Next.js 16 web application backed by Supabase (PostgreSQL). The architecture follows a single learning loop: assess the learner, generate a personalized recommendation, deliver content in structured micro-lessons, and record behavioral evidence for evaluation.

## Platform Flow

1. A visitor arrives at the public landing page and begins the onboarding assessment without requiring authentication.
2. The assessment captures 11 single-choice responses across five dimensions: professional context, AI experience, motivation and pain points, confidence and readiness, and time availability with goals.
3. The personalization algorithm processes the responses through four deterministic stages (weight mapping, score accumulation, override rules, and path length determination) to produce a ranked module recommendation.
4. The visitor creates an account. The recommendation is persisted to the `onboarding_sessions` table and a normalized payload is written to `users.metadata.personalization`.
5. The authenticated learner enters the platform dashboard, which presents the recommended learning path. Lessons are article-based, approximately 15 minutes each, and include inline checkpoints.
6. As the learner progresses, `lesson_progress` rows and `telemetry_events` records are created. These records constitute the primary evidence used in the pilot study evaluation (Thesis Chapter 4).

## Code Organization

| Area | Location | Responsibility |
| ---- | ---- | ---- |
| Public routes | `src/app/(marketing)/`, `src/app/(auth)/` | Landing pages, onboarding, and authentication flows. |
| Onboarding | `src/app/onboarding/` | Assessment UI and results page. |
| Learner platform | `src/app/platform/` | Dashboard, module navigation, lesson pages, profile, and progress actions. |
| Personalization | `src/lib/personalization/` | Question definitions, scoring weights, override rules, and path construction. |
| Content catalog | `src/data/content/` | Module, chapter, and lesson definitions as typed TypeScript files. |
| Telemetry | `src/lib/telemetry.ts` | First-party event logging to the `telemetry_events` table. |
| Database schema | `supabase/migrations/20260410000000_schema.sql` | Table definitions, indexes, triggers, and Row Level Security policies. |

## Architectural Decisions

The platform does not depend on a separate content management system, external recommendation service, or third-party analytics vendor. Curriculum content is stored in version-controlled TypeScript files, personalization is computed deterministically without external API calls, and all behavioral data resides in first-party Supabase tables. This design minimizes external dependencies and ensures that every data point used in the thesis evaluation is fully auditable.
