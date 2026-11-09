# ADR-2026-11-09 — Approved project handoff normalization

Status: **Implemented in demo branch**, requires owner review before production merge.

Context: The supplied snapshot mixed language/market codes, omitted `/en` and `/kh-en` from the locale authority, accepted a misleading domain suffix, and had two different Kubernetes products at the same canonical URL. The user explicitly requested DS/i18n/Next.js normalization.

Decision: Keep the App Router and all bespoke service components; normalize the locale registry and its legacy UI adapter; use path-aware server HTML context; preserve market prefixes through redirects; validate exact domains and avoid unsafe browser script interpolation. Resolve vDKS to a distinct canonical URL and render a catalog-backed fallback when a bespoke detail component is absent. Store the handoff export and checksum provenance with no licensed font binaries.

Migration: Update `architecture-lock.json` hashes only for edited locked files using `npm run check:architecture`. No redirect source or target from the existing 264-rule redirect manifest was deleted. Existing SEO policy keeps `/en` as an international route prefix for UI but strips it on international canonical links. Planned SEA locales remain noindex.

Risks: Route redirects and previous external indexed URLs need owner signoff, production domain & hreflang integration test; Figma master variants require separate native validation; existing direct UI strings are not comprehensively translated. Firebase Auth/Firestore must be provisioned for deployment; never assume production secrets exist in a public ZIP.
