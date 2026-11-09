# V5 source audit and release acceptance — 2026-11-09

## Root cause and repair

V4 GitHub Actions failed in `scripts/verify-font-contract.cjs` because its source ZIP omitted all twelve original BeauSans binaries while requiring `--assets` during the general `check` command. It also claimed those binaries were bundled in `docs/BEAUSANS_FONT_MANIFEST.json`. This was a packaging/verification mismatch, not evidence of a Next.js compile error. V5 explicitly separates source CI (can test and build without licensed fonts) from **release UI acceptance** (fails closed on any missing or incorrect asset).

## Runtime CSS bug

V4's unlayered H1–H5 typography enforcement used a Vite-era selector `#root`, while actual App Router HTML uses `<main id="main-content">`. This silently allowed Tailwind `font-extrabold`/mobile size utilities to override DS V2 in the real website. The CSS now targets `main#main-content` and strict static contract asserts the selector. A homepage conversion CTA now uses the actual DS V2 `<VIDCButton variant="primary" size="lg">` rather than a legacy `rounded-lg` button.

## Changes

- `src/index.css`: correct Next.js selector for unlayered H1–H5 BeauSans/Roboto DS scale.
- `src/components/home/CtaFormSection.tsx`: use DS V2 real primary/larger corner geometry for form submission.
- `scripts/verify-font-contract.cjs`, `scripts/verify-release-structure.cjs`: source contract truthful; strict asset SHA verified if requested or assets present.
- `scripts/stage-owner-fonts.cjs`, `STAGE_FONTS_WINDOWS.cmd`: local owner-font provisioning, hash checked, no binaries included in source archive.
- `scripts/run-next.mjs` and `package.json`: OS-neutral Next.js launcher and PORT handling.
- `scripts/smoke-next-runtime.mjs`: independent SSR route smoke; strict font HTTP smoke unchanged for release.
- `scripts/verify-live-ui.py`: add **actual** Next.js primary CTA rendered geometry/color test to existing H1/locale/overflow/Chromium screenshot gate.
- `.github/workflows/verify.yml`: source typecheck/build/HTTP smoke; does not impersonate UI approval.
- `.github/workflows/release-ui.yml`: strict owner-font SHA + production build + real Chromium test gate, manually triggered.

## Verified locally (source context)

| Gate | Status | Evidence |
| --- | --- | --- |
| Architecture | PASS | 13/13 unchanged SHA files |
| Figma export | PASS | All 3 source hashes/DS contracts |
| Locale registry and redirects | PASS | 11 locales, 264 redirects |
| DS token, button states and CSS | PASS STATIC | Figma alias/CTA contracts and real Next selector |
| Import/AST scanning | PASS STATIC | All source imports valid per static contract |
| Original supplied font SHA | PASS IN PRIVATE WORKSPACE | 12/12 staged from original user attachments, **NOT** in downloadable ZIP |
| `npm ci` and `tsc` with project dependencies | NOT RUN | npm DNS access unavailable locally |
| Production Next.js build | NOT RUN | Next.js package unavailable locally |
| Production browser (Next.js) | NOT RUN | No `.next/BUILD_ID`; gate exists but not executed |
| Google AI Studio import and preview | NOT RUN | No live AI Studio environment accessed |
| Full 11-language editorial translation | INCOMPLETE | Candidate copy audit in `docs/I18N_COPY_SUMMARY.json` |

The previous screenshots `docs/DS_V2_CHROMIUM_*.png` show an **isolated fixture** from V4 and are NOT live Next.js acceptance evidence. The only acceptable UI approval is a passing `release-ui.yml` job with uploaded screenshots from the imported source after adding font assets. A source-build green check must never be reported as completion of UI acceptance.
