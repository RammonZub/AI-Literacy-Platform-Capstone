# Application Settings

This document describes the authentication, telemetry, and access control systems that underpin the platform. These three concerns are central to the thesis evaluation: authentication establishes user identity for progress tracking, telemetry captures the behavioral evidence analyzed in Chapter 4, and access control enforces the boundary between public and authenticated routes.

## Authentication

User authentication is managed by Supabase Auth using email and password credentials. The server-side Supabase client is instantiated in `src/lib/supabase/server.ts` and the browser-side client in `src/lib/supabase/client.ts`. Both clients share the same project configuration and session management through `@supabase/ssr`.

Authentication callbacks, sign-in, sign-out, and account creation are handled by API routes in `src/app/api/auth/`. The client-side authentication state is exposed through the `useUser` hook in `src/lib/hooks/useUser.ts`, which provides the current user object and loading state to platform components.

## Telemetry

The platform uses first-party telemetry rather than third-party analytics services. All behavioral events are recorded to the `telemetry_events` table in Supabase through the utility defined in `src/lib/telemetry.ts`. This design ensures that the pilot study metrics are derived from application-owned data with no dependency on external tracking services.

Telemetry events include onboarding completion, lesson starts and completions, checkpoint attempts, XP awards, streak updates, recommendation views and ratings, and SUS score submissions. Each event is timestamped and associated with the authenticated user.

## Access Control

The platform distinguishes between public routes and authenticated routes. Public routes include the landing page, onboarding assessment, and authentication pages. Authenticated routes under `src/app/platform/` require an active session and are protected by middleware and layout-level authentication checks.

Row Level Security (RLS) policies in Supabase enforce data isolation at the database level. Each learner can only read and write records associated with their own user ID. This applies to lesson progress, onboarding sessions, and telemetry events. The schema and RLS configuration are defined in `supabase/migrations/20260410000000_schema.sql`.

## Key Code Locations

| File or Directory | Responsibility |
| ---- | ---- |
| `src/lib/supabase/server.ts` | Server-side Supabase client instantiation. |
| `src/lib/supabase/client.ts` | Browser-side Supabase client instantiation. |
| `src/lib/hooks/useUser.ts` | Client-side authentication state hook. |
| `src/app/api/auth/` | Authentication API routes (callback, sign-in, sign-out, registration). |
| `src/lib/telemetry.ts` | First-party event logging to the `telemetry_events` table. |
| `src/lib/auth/access-control.ts` | Access boundary and subscription status helpers. |
| `supabase/migrations/20260410000000_schema.sql` | Database schema including RLS policies. |
