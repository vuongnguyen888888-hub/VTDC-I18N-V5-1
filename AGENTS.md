# VIETTEL IDC WEBSITE — AI STUDIO PROJECT ENGINEERING RULES
Version: 1.0
Status: MANDATORY
Framework baseline: Next.js 15 App Router + React 19
Package manager: npm only

==================================================
0. PURPOSE
==================================================

This document defines the mandatory engineering rules for the
Viettel IDC website project.

AI Studio MUST read and follow these rules before modifying code.

These rules have higher priority than convenience refactors,
automatic migrations, or speculative optimizations.

DO NOT silently change the architecture.

==================================================
1. FRAMEWORK BASELINE — LOCKED
==================================================

The project is a native:

Next.js 15 App Router
+
React 19
+
TypeScript

Current baseline:

- next: 15.5.x
- react: 19.x
- react-dom: 19.x
- TypeScript: 5.7.x
- firebase: 11.x

DO NOT:

- convert back to React/Vite SPA
- introduce React Router for page routing
- recreate App.tsx as central router
- recreate ClientApp.tsx as global routing bridge
- upgrade major Next.js version without explicit approval
- change framework automatically

The active routing system is Next.js App Router.

==================================================
2. ROUTING ARCHITECTURE — MANDATORY
==================================================

Use:

src/app/layout.tsx
src/app/page.tsx
src/app/**/page.tsx
src/app/[...slug]/page.tsx
src/app/not-found.tsx

Native/bespoke pages should have native App Router routes.

Standard long-tail service pages may use a lightweight dynamic
catch-all resolver.

The catch-all route MUST NOT import:

- App.tsx
- ClientApp.tsx
- a central registry containing all page components
- all service page components simultaneously

Never restore the legacy architecture:

[...slug]
→ ClientApp
→ App.tsx
→ 40+ pages

==================================================
3. LEGACY SPA BRIDGE — FORBIDDEN
==================================================

App.tsx and ClientApp.tsx must NOT exist in the active
src/app dependency graph.

Before introducing any shared router or page registry,
verify that it does not recreate a monolithic SPA dependency graph.

Page routing belongs to Next.js App Router.

==================================================
4. SERVER / CLIENT COMPONENT RULE
==================================================

Default to Server Components where possible.

Use:

"use client";

ONLY when the component genuinely requires:

- React state/effects
- event handlers
- browser APIs
- window/document/navigator
- localStorage/sessionStorage
- Firebase client SDK
- interactive UI behavior

DO NOT mark:

- src/app/layout.tsx
- an entire page tree
- static content sections

as Client Components merely because one nested component is interactive.

Preferred pattern:

Server/static component
    ↓
small Client interactive island

==================================================
5. GLOBAL LAYOUT RULE
==================================================

src/app/layout.tsx must remain server-compatible.

Global shared UI may include:

- Header
- Footer
- global styles
- analytics scripts
- client providers wrapper

Interactive global functionality must be isolated.

Do NOT place heavy page-specific logic in the Root Layout.

Do NOT import service-detail components or complete service datasets
from the global layout.

==================================================
6. MEMORY PERFORMANCE — CRITICAL RULE
==================================================

The project previously experienced AI Studio dev-server OOM.

Historical bad state:

Homepage RSS:
~1739.7 MB

Peak:
~1894.8 MB+

After optimization:

Homepage RSS:
~726.4 MB

Peak sequential RSS:
~1747.5 MB

This optimization MUST be preserved.

Target:

Homepage RSS:
preferably < 1 GB

Peak sequential dev RSS:
preferably < 1.8 GB

OOM:
ZERO

Never solve memory problems only by increasing NODE_OPTIONS.

Always reduce unnecessary dependency/module loading first.

==================================================
7. INTERACTION-GATED LOADING — MANDATORY
==================================================

Heavy global features must NOT load during initial Homepage rendering
unless immediately required.

Examples:

DualModeChatWidget
→ lightweight launcher first
→ load DualModeChatWindow after user interaction

GlobalFeedback
→ FeedbackButton first
→ load FeedbackDrawer after user interaction
→ load Firebase Auth/Firestore only when required

GlobalSearchModal
→ load only when Search is opened

EnterpriseQuoteModal
→ load only when requested

RegisterModal
→ load only when requested

Heavy widgets should use dynamic import / React.lazy where appropriate.

DO NOT move these heavy modules back into the initial global bundle.

==================================================
8. FIREBASE RULE
==================================================

Firebase is a client-side optional integration.

Core website rendering MUST NOT depend on Firebase being available.

If NEXT_PUBLIC_FIREBASE_* variables are missing:

- website must still render
- core routes must still work
- Feedback/Admin may be disabled gracefully
- application must NOT crash

Firebase client SDK must not be unnecessarily loaded on every page.

Reviewer feedback flow:

Website
→ Feedback
→ silent Anonymous Authentication
→ CREATE /feedback

No Google login should be required for ordinary reviewers.

Admin flow:

/admin/feedback
→ Google Authentication
→ authorized admin only
→ READ / UPDATE / EXPORT

Do NOT call Google Authentication "Viettel SSO"
unless actual Viettel identity/SSO integration exists.

==================================================
9. FIRESTORE SECURITY PRINCIPLE
==================================================

Anonymous reviewers:

- CREATE only
- NO READ
- NO LIST
- NO UPDATE
- NO DELETE

Admin:

- READ
- LIST
- UPDATE

DELETE should remain disabled unless explicitly approved.

Admin authorization must use explicit allowlist / approved RBAC.

Do NOT grant Admin access to every user simply because the email
belongs to a Viettel domain.

Security must be enforced by Firestore Rules,
not only by hiding UI elements.

==================================================
10. ADMIN FEEDBACK PERFORMANCE
==================================================

Heavy reporting libraries must load only on user action.

Excel export must NOT statically import ExcelJS.

Correct pattern:

const ExcelJS = await import('exceljs');

Only execute when Export Excel is clicked.

Do not load Excel/reporting libraries during initial
/admin/feedback rendering.

Preserve:

- realtime feedback
- status
- priority
- rating
- filters
- Excel export
- CSV export

==================================================
11. SERVICE DATA ARCHITECTURE
==================================================

Do NOT create a single giant service data module imported globally.

Standard service data should be partitioned/modularized.

Use a lightweight service manifest containing routing metadata such as:

- slug
- serviceId
- data module identifier

Then load only the required service data partition.

Do NOT parse all service content files for one service request.

Do NOT duplicate service content across Vietnamese/English aliases.

Both URL aliases should reuse the same canonical page/data source.

==================================================
12. SHARED DATA RULE
==================================================

Avoid forcing large shared datasets into initial client bundles.

Audit files such as:

- sitemap data
- translation dictionaries
- search index
- service catalog
- pricing data

Load only what the current route/component actually requires.

Search datasets should ideally load when search is opened.

Locale dictionaries should not unnecessarily bundle every language
into every page.

==================================================
13. ICON / MOTION / THIRD-PARTY LIBRARIES
==================================================

lucide-react:

- use optimized imports
- do not import entire icon namespaces
- keep optimizePackageImports where compatible

motion / animation libraries:

- import only inside components that actually animate
- do not put unnecessary motion wrappers around global layouts

Firebase:

- use modular Firebase SDK
- avoid global eager loading

ExcelJS:

- dynamic import only

Any new large dependency must be justified before installation.

==================================================
14. PACKAGE MANAGER — LOCKED
==================================================

npm is the ONLY package manager.

Keep:

package.json
package-lock.json

DO NOT introduce:

bun.lock
yarn.lock
pnpm-lock.yaml

Do not switch package managers automatically.

==================================================
15. NEXT.JS DEV / BUILD SCRIPTS
==================================================

Use Next.js commands.

Expected baseline:

dev:
next dev

build:
next build

start:
next start

Existing host/port/NODE_OPTIONS flags may remain where required.

DO NOT add Vite scripts.

DO NOT use Vite as the runtime/build system.

==================================================
16. NEXT.JS 15 ASYNC API RULE
==================================================

When using Next.js request APIs such as:

- headers()
- cookies()
- params
- searchParams

follow Next.js 15 async API requirements.

Do not reintroduce synchronous request API patterns
that previously caused migration problems.

==================================================
17. 404 RULE
==================================================

Unknown routes must return REAL HTTP 404.

Use:

import { notFound } from "next/navigation";

notFound();

Do NOT merely render a 404-looking component with HTTP 200.

Expected:

nonexistent URL
→ HTTP 404
→ src/app/not-found.tsx

==================================================
18. UI / CONTENT PRESERVATION RULE
==================================================

Technical optimization MUST NOT automatically modify:

- visual design
- page content
- service names
- URLs
- design tokens
- Header
- Footer
- responsive behavior
- SEO copy
- pricing content
- CTA content

Architecture/performance work must preserve rendered output
unless a UI/content change is explicitly requested.

==================================================
19. NO UNCONTROLLED REFACTORING
==================================================

When fixing one issue:

- modify the minimum required files
- do not rewrite unrelated components
- do not redesign
- do not migrate unrelated routes
- do not change dependencies without reason

If the requested task can be solved locally,
solve it locally.

==================================================
20. DEV SERVER OOM PROCEDURE
==================================================

If AI Studio reports:

"The dev server didn't start, please fix it"

DO NOT immediately refactor or increase memory.

First:

1. Run actual dev command.
2. Capture the first real terminal/kernel error.
3. Check for OOM kill.
4. Identify route/module causing memory increase.
5. Audit dependency graph.
6. Reduce eager loading.
7. Retest.

Do NOT claim the problem is fixed merely because production build passes.

==================================================
21. REQUIRED REGRESSION ROUTES
==================================================

After significant architecture/dependency changes test at least:

/
 /services/cloud-server
 /services/vks
 /pricing
 /resources
 /admin/feedback
 /non-existent-test-page-404

Expected:

/ → 200
/services/cloud-server → 200
/services/vks → 200
/pricing → 200
/resources → 200
/admin/feedback → 200
unknown URL → 404

==================================================
22. REQUIRED VERIFICATION
==================================================

After significant technical changes run:

npm run dev

npm run build

npx tsc --noEmit

For memory-related changes also record:

- Cold boot RSS
- Homepage RSS
- RSS per representative route
- Peak RSS
- OOM YES/NO

Do not report SUCCESS if:

- dev crashes
- build fails
- TypeScript fails
- routes regress
- 404 returns 200
- OOM occurs

==================================================
23. PERFORMANCE REGRESSION GUARD
==================================================

Current accepted performance baseline:

Homepage RSS:
~726.4 MB

Peak sequential RSS:
~1747.5 MB

These are regression reference values, not guaranteed fixed numbers.

If a future change significantly increases Homepage or peak RSS:

STOP.

Identify the responsible dependency/module before proceeding.

Do not normalize a large regression as expected behavior.

==================================================
24. NEW PAGE RULE
==================================================

When adding a new page:

Prefer:

native Next.js App Router route

or:

lightweight standard-service resolver

Do NOT add the page into a global App.tsx-style router.

New service pages must not increase the initial Homepage dependency graph.

==================================================
25. BEFORE MODIFYING CODE
==================================================

Before any substantial code change, AI Studio must internally verify:

- Does this preserve Next.js App Router architecture?
- Does this increase initial global bundle/module graph?
- Does this require "use client" at a higher level?
- Does it load a large dependency globally?
- Does it affect Firebase/Auth?
- Does it affect existing routes?
- Does it affect 404 semantics?
- Does it risk increasing dev-server RSS?

If yes, choose the lower-coupling implementation.

==================================================
26. FINAL PRINCIPLE
==================================================

The project architecture must remain:

ROUTE-BASED
MODULAR
SERVER-FIRST
CLIENT-ISLAND BASED
LAZY-LOADED WHERE APPROPRIATE
MEMORY-AWARE
FIREBASE-OPTIONAL
NEXT.JS 15 APP ROUTER NATIVE

Never recreate a monolithic React SPA inside Next.js.


## Release 09/11/2026 — authoritative asset rule
- Twelve user-supplied BeauSans faces are bundled under public/fonts/vidc and verified by SHA-256 manifest and mandatory CI gate. Do not replace them with arbitrary web fonts. They are proprietary assets used only as permitted by the owner’s license; do not distribute them as an independent font package.
- Do not turn the existing Next.js App Router application into Vite. Do not overwrite bespoke UI when no Figma DS variant is supplied; preserve documented legacy exceptions.
- Read `docs/FINAL_AUDIT_2026-11-09.md` for actual verified tests and outstanding limitations.
