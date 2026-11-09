# VIETTEL IDC — ARCHITECTURE FREEZE & GO-LIVE MANIFEST (2026)
**Document Version:** 1.0.0 (Batch 11 Architecture Freeze)  
**Status:** LOCKED / PRODUCTION-READY  
**Framework Baseline:** Next.js 15 App Router + React 19 + TypeScript (npm only)  
**Classification:** Internal Engineering Architecture Control Artifact  

---

## 1. Runtime Stack & Infrastructure
- **Framework:** Next.js 15.5.25 (App Router, Server Components by default, Client Islands for interactivity).
- **Runtime Environment:** Node.js 20+ LTS runtime on containerized Cloud Run / edge hosting.
- **Package Manager:** `npm` strictly locked via `package-lock.json`. No Bun, Yarn, or pnpm lockfiles permitted.
- **Styling & Design System:** Tailwind CSS v4 + Viettel IDC Design Tokens (`src/tokens/viettel-idc.tokens.css`).
- **Memory & Performance Baseline:** Interaction-gated modal and drawer hydration, decoupled route manifests, dynamically imported reporting libraries (`exceljs`), zero monolithic SPA dependency bridges. Dev & production memory targets: RSS < 1 GB, zero OOM.

---

## 2. Multi-Domain & Multi-Market Registry
- **VN Production Domain:** `viettelidc.com.vn` (Market Code: `VN`, Default Locale: `vi`, Alternate Locale: `en`, Indexable: `true`).
- **INT Production Domain:** `viettelidc.com` (Market Code: `INT`, Default Locale: `en`, Alternate Locale: `vi`, Indexable: `true`).
- **Staging Domain:** `vtidc-test.com` (Environment: `staging`, Indexable: `false`, `noindex, nofollow`, Zero sitemap/hreflang/analytics exposure).
- **Market Context Resolution:** Server-side request resolution via Next.js `headers()`, synchronous `<html lang>` and `data-market` injection, client hydration sync via single `market_context_ready` event.

---

## 3. Master Route & Routing Architecture
- **Canonical Inventory:** 59 Services across 6 Hubs (Compute, Storage, Networking, Security, Data Center, Database/Application). 16 Enterprise Solutions.
- **Redirect Engine:** 264 deterministic, permanent (308/301) redirects with zero multi-hop redirect chains and zero legacy duplicate 200 URLs.
- **Standard Service Resolvers:** Partitioned data loading via lightweight routing manifests (`src/data/serviceManifest.ts`). No global eagerly loaded service catalog in the initial bundle.
- **404 Handling:** Real HTTP 404 response emitted via Next.js native `notFound()` in `src/app/not-found.tsx`.

---

## 4. International Publication Model
- All 59 services are published on VN (`viettelidc.com.vn`).
- Services published on INT (`viettelidc.com`) are dynamically filtered based on `publishedMarkets` configuration.
- Sitemaps and `hreflang` alternate tags only output strictly published, non-redirecting, non-staging URLs.

---

## 5. SEO & Structured Data Architecture
- **Metadata Generation:** Dynamic `generateMetadata()` driven by canonical service metadata.
- **Hreflang & Canonicals:** Self-referential canonical URLs with cross-domain `hreflang` links between VN and INT domains.
- **Structured Data:** JSON-LD schemas generated via typed builders (`Organization`, `WebSite`, `Product`, `BreadcrumbList`). Admin, staging, and redirect routes strictly emit zero structured data.
- **Robots & AI Crawlers:**
  - Standard Search Engines: Full indexation allowed on production.
  - `OAI-SearchBot`: Explicitly allowed on public production routes for AI-grounded search citations.
  - `GPTBot`: Inherits generic crawler governance pending enterprise legal review.
  - Staging/Admin: Disallow all.

---

## 6. Analytics & Observability Boundary
- **DataLayer Contract:** Strict `window.dataLayer` pipeline (`market_context_ready` emitted once on initial load; `page_view` emitted once per route change).
- **GTM & Clarity:** Injected only on public production domains (`viettelidc.com.vn`, `viettelidc.com`). Strictly disabled on staging, admin, and isolated sandbox environments.
- **Privacy & PII:** Zero user-entered PII pushed to dataLayer or Clarity session replays.

---

## 7. Spoke Connectivity & External Boundaries
- **Spoke Registry:** Centralized spoke configuration (`auth`, `vconsole`, `docs`, `support`, `status`) partitioned by domain and environment.
- **OIDC / SSO Integration:** Handled via clean client handover to external identity provider (IdP). No fake mock tokens or client secrets stored in frontend source.
- **Lead / CRM Handover:** Direct client handover to verified external contact endpoints and spokes.
- **Market Offer & Pricing:** Static catalog pricing for baseline UX; dynamic transactional pricing deferred to external API Gateway integration.

---

## 8. Firebase & Admin Architecture
- **Reviewer Feedback:** Anonymous authentication, write-only submission to `/feedback` collection.
- **Admin Dashboard:** `/admin/feedback/` protected by Google Auth allowlist, `noindex`, and no marketing analytics.
- **Security Rules:** Enforced server-side via `firestore.rules`. Ordinary reviewers: Create-only, zero read/list/delete. Admin: Read/update.

---

## 9. Security & NFR Runtime Hardening
- **Security Headers:**
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - `Content-Security-Policy-Report-Only`: Active staged policy covering GTM, Clarity, Firebase, Google Fonts, and Next.js chunks.
  - `frame-ancestors: 'self'`
- **HSTS:** Staged ready (`HSTS_STATUS = READY_NOT_ENABLED_PENDING_DOMAIN_VERIFICATION`), awaiting enterprise subdomain wildcard TLS audit before enabling preload.
- **Color Contrast (WCAG 2.2 AA):** Primary brand red `#EE0033` reserved for large buttons/headings (`LARGE_TEXT_PASS`, 4.48:1); normal text uses accessible semantic token `--vidc-color-text-brand` / `#C5002A` (`NORMAL_TEXT_PASS`, 5.7:1). Total normal text contrast failures: 0.

---

## 10. External Go-Live Gates & Release Decision
- **Release Mode:** `CONTENT_AND_LEAD_READY`
- **External Go-Live Gates (Infrastructure / Enterprise Ops):**
  1. Edge WAF, DDoS protection, and rate-limiting deployment at CDN/Gateway level.
  2. Subdomain TLS wildcard verification prior to activating HSTS `includeSubDomains` / `preload`.
  3. Production CSP telemetry review to promote `Content-Security-Policy-Report-Only` to enforced `Content-Security-Policy`.
  4. Enterprise APM and Real User Monitoring (RUM / CrUX) integration.
  5. Google Search Console & Bing Webmaster sitemap registration.

---

## 11. Rollback & Disaster Recovery Strategy
- **Application Deployment Rollback:** Instant rollback to `PREVIOUS_STABLE_DEPLOY` container via Cloud Run / CDN traffic split (target MTTR < 2 minutes).
- **Rollback Triggers:**
  - Sustained 5xx HTTP error rate > 1%.
  - Homepage or key hub (`/services/`, `/solutions/`) unavailability.
  - Canonical routing regression or redirect loops.
  - Authentication / Spoke handover breakage.
  - Critical CSP hydration blockage.
- **Data Rollback Boundary:** Application rollback is stateless and does not affect Firestore feedback or external CRM/CMS data stores.

---

## 12. Architecture Change Control Protocol
Following this architecture freeze, modifications to any of the following artifacts require formal Architecture Review and Approval:
1. `DomainRegistry` & `MarketRegistry`
2. `MasterRouteManifest` & `redirectManifest.ts`
3. Canonical URL structures and `entity_id` / `route_id` bindings
4. `dataLayer` telemetry schema and event names
5. `spokeRegistry.ts` endpoints
6. Next.js App Router core architecture (`layout.tsx`, `page.tsx`, `not-found.tsx`)

*End of Architecture Freeze Document.*
