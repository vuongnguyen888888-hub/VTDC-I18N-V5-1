# Google AI Studio — V5 verified source handoff

This is a **native Next.js 15 App Router** application, not a Vite/React single-page app. Honor the framework and architecture lock. Package manager: npm; build: `npm run build`; dev server: `npm run dev`; production start: `npm run start`; environment variable `PORT` is honored.

Design System source: `design-system/figma/vidc.figma.{raw,resolved}.json` and `src/tokens/figma-source.css`. Semantic compatibility layer: `src/tokens/vidc-semantic-bridge.css`; button spec: `src/tokens/vidc-handoff.css`; app CSS: `src/index.css` imported from Next.js `src/app/globals.css`.

**Typography runtime correction V5:** Page H1–H3 overrides MUST target `main#main-content`, which exists in the actual Next App Router layout. Retired `#root` selectors are invalid for this site. H1–H3 use FS PF BeauSans Pro 600, desktop/mobile Figma sizes; body and H4–H5 use Roboto. A Figma button for the homepage lead form now uses `VIDCButton` primary/lg and asymmetric 14/14/14/2 geometry.

The owner-supplied BeauSans TTFs are not contained in this source ZIP. Do not claim they were bundled, replace them with fallback fonts, bypass `fonts:verify`, or assert live UI acceptance from source-only checks. `npm run smoke:browser` requires production `.next` build, Chromium and all licensed fonts.

11 locale registry entries, 264 redirects, six interface dictionaries; long-form translation remains partial. The AI Studio preview itself has not been run or approved here.
