# VIETTEL IDC — ARCHITECTURE CHANGE & GOVERNANCE POLICY
**Status:** ACTIVE / MANDATORY  
**Baseline Version:** 1.0.0 (Batch 11 Freeze)  

---

## 1. Core Principle
Normal feature development, copy adjustments, visual UI polish, and day-to-day maintenance **MUST NOT** alter locked architecture files or break the established system boundaries.

The frozen architecture baseline is cryptographically enforced via `scripts/verify-architecture-lock.mjs` and verified automatically during every production build (`npm run build`).

---

## 2. Allowed Changes (No Architecture Review Required)
The following modifications may proceed through standard code review:
- UI component visual presentation and styling within design tokens
- Page and component copy / text updates
- Creation of isolated leaf Client components / UI islands
- Approved static visual assets (SVG, WebP images)
- Standard bug fixes strictly scoped inside existing component boundaries
- New feature code that respects established `ContentRepository`, `spokeRegistry`, and `MarketContext` interfaces

---

## 3. Restricted Changes (Formal Architecture Review Required)
Modifications to any of the following files or domains require formal sign-off from `@ARCHITECTURE_OWNER` and an explicit execution of `scripts/update-architecture-lock.mjs`:

1. **Domain & Market Topology:**
   - `src/config/domainRegistry.ts`
   - `src/config/marketRegistry.ts`
   - `src/config/localeRegistry.ts`

2. **Master Routing & Canonical Identity:**
   - `src/data/masterRouteManifest.ts`
   - `src/data/redirectManifest.ts`
   - Any URL structure changes, slug alterations, or redirect rules

3. **Core Contracts & Libraries:**
   - `src/lib/context/resolveMarketContext.ts`
   - `src/lib/analytics.ts` (dataLayer event schemas & triggers)
   - `src/lib/seo/structuredData.ts` (Schema.org JSON-LD definitions)
   - `src/lib/content/contentRepository.ts` (CMS abstraction layers)
   - `src/lib/commercial/marketOffer.ts` (Pricing catalog models)
   - `src/config/spokeRegistry.ts` (IdP, vConsole, docs, status endpoints)

4. **Runtime & Build Infrastructure:**
   - `next.config.mjs` (Security headers, CSP, webpack hooks, experimental flags)
   - `package.json` / `package-lock.json` (Dependency additions or framework version changes)
   - `firestore.rules` (Security & access control rules)
   - `docs/architecture/architecture-lock.json` (Baseline hash manifest)

---

## 4. Architecture Change Protocol
If a proposed change necessitates updating an architecture-locked file:
1. Open an Architecture Change Request (ACR) detailing technical justification, backward compatibility, and regression risk.
2. Receive formal approval from the Architecture Review Board / Lead Engineer.
3. Apply the approved code edits.
4. Execute `node scripts/update-architecture-lock.mjs` manually to recalculate baseline hashes.
5. Verify with `npm run check:architecture`, `npm run typecheck`, and `npm run build`.
6. Submit Pull Request with `@ARCHITECTURE_OWNER` review.
