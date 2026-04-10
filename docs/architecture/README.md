# Architecture

This section documents the technical architecture of the AI Literacy Platform. The documents below are organized by concern and cover the full system flow, the personalization algorithm, the data model used for pilot study evidence, and the content structure.

## Reading Order

| Document | Scope |
| ---- | ---- |
| [system-overview.md](./system-overview.md) | End-to-end system flow from initial visit through lesson completion and evidence capture. |
| [personalization.md](./personalization.md) | The deterministic cold-start algorithm that converts 11 onboarding responses into a ranked learning path. |
| [data-and-evidence.md](./data-and-evidence.md) | Database tables, telemetry design, and how pilot study metrics are derived from application data. |
| [content-model.md](./content-model.md) | The module-chapter-lesson hierarchy and the rationale for storing curriculum content in typed TypeScript files. |
