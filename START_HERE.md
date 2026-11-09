# V5 — Git-ready Next.js source / strict DS V2 release gate

This ZIP is the replacement **source tree**. Extract its contents at the root of your Git repository (leave `.git` untouched), so `package.json`, `src/`, `public/` and `.github/` are at repository root. Do not commit this ZIP as a single file.

`npm ci && npm run check && npm run build && npm run smoke:routes` certifies the source/build/SSR **only after these commands actually complete**. A green source workflow is never a BeauSans/UI approval.

The 12 user-provided BeauSans font files are **not included** in this source ZIP. `STAGE_FONTS_WINDOWS.cmd` can find those files under Downloads/Desktop or in the directory configured by `VIDC_FONT_SOURCE_DIR` and stage/hash-check them. They must then be present in the release repository; otherwise `npm run fonts:verify` intentionally fails. Full live UI acceptance is `npm run smoke:browser` after build, or the separate strict **Release UI acceptance** GitHub workflow.

i18n route structure is present; all long-form localized content is not editorially complete. All remaining nonverified items are in `docs/V5_ACCEPTANCE.md`.
