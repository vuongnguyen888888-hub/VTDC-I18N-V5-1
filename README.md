# VIETTELIDC.COM — Next.js 15 / Design System V2 / i18n

**Source package V5 (9 November 2026).** This is not a certified production release. The private V4 repository failed its CI gate because the delivered ZIP omitted the twelve BeauSans TTF binaries. V5 corrects the CI split and a genuine Next.js runtime typography selector regression; it does **not** contain licensed font binaries.

## Architecture

- Next.js 15 App Router, React 19, TypeScript, npm lockfile; this is **not** a Vite SPA.
- The Figma export is the source of truth for DS V2. New components use DS; legacy bespoke controls remain documented exceptions where DS V2 has no complete mapping.
- Eleven locale configurations with URL prefixes, 264 redirects and six UI dictionaries. Long-form editorial translation is **incomplete**; do not mark all languages complete.

## Source checks versus release acceptance

| Command | Checks | Does it certify the live site? |
| --- | --- | --- |
| `npm ci` | Fetch locked Next.js dependencies | No |
| `npm run check:static` | Figma/architecture/routes/i18n/static DS + import/source contracts | No |
| `npm run check` | Static checks plus TypeScript `tsc --noEmit` | No |
| `npm run build` | Actual Next.js production compile | No; build alone is insufficient |
| `npm run smoke:routes` | Boot production server; HTTP 200, SSR locale, 404 | Only route smoke |
| `npm run fonts:verify` | **Mandatory** 12 original BeauSans file hashes | Yes, for font assets only |
| `npm run smoke` | Production HTTP **and** font asset response | Only HTTP/font smoke |
| `npm run smoke:browser` | Actual production Chromium DOM/font/button/overflow screenshots | UI acceptance for tested routes only |

The automatic **Source quality and Next.js production build** workflow checks code, build and SSR routes. This workflow alone MUST NOT be interpreted as DS/UI release approval. **Release UI acceptance** is a separate, strict GitHub Actions workflow, triggered manually only after licensed assets exist in the repository. It stops (rather than substituting another font) when they are missing.

## Installing the owner-supplied licensed font for actual deployment

The owner provided 12 TTFs with source hashes in `docs/BEAUSANS_FONT_MANIFEST.json`. Source archives must not be claimed to have shipped their binaries when they do not. The installer accepts a directory with the 12 source filenames and verifies every SHA-256 before staging in `public/fonts/vidc`:

```bash
npm run fonts:install -- /path/to/owner-provided-font-files
npm run fonts:verify
```

Or let the auto-stager search its configured local folders:

```bash
npm run fonts:stage
```

Windows: `STAGE_FONTS_WINDOWS.cmd` is a convenience wrapper. For CI release verification, these **validated binaries must exist on the checked-out release commit**. Owner must ensure use and deployment comply with the font license. CSS fallback does not count as the original font.

## Next.js dev/production

```bash
npm ci
npm run check
npm run build
npm run smoke:routes
npm run dev
```

The cross-platform `scripts/run-next.mjs` launcher honors the platform-supplied `PORT` for Git/AI Studio/Cloud Run deployments. It avoids POSIX-only environment assignment on Windows. Google AI Studio visual rendering has not been verified in this audit environment.

See `docs/V5_ACCEPTANCE.md` for exact evidence, outstanding blockers and file-by-file change set.
