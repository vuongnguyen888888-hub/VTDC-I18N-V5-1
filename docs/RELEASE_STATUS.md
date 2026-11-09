# V5 — release status (9 November 2026)

**FULL RELEASE: NOT ACCEPTED.** Evidence is intentionally scoped and includes a reproducible strict gate.

- Architecture lock 13/13, Figma source SHA-256 3/3, locale routing 11 configs / 264 redirects: source gate PASS.
- 12 source BeauSans binaries were temporarily staged **in the audit workspace only**, SHA-256 verification PASS; they are not bundled in the downloadable ZIP, so release font gate remains BLOCKED until owner assets are present in the repository.
- A real CSS error was corrected: retired `#root h1/h2/h3` unlayered overrides did not match Next.js. V5 targets `main#main-content`. Production website render not tested.
- Real primary CTA migrated to `VIDCButton` (`primary`, `lg`, asymmetric border radius). The other legacy/bespoke controls remain documented exceptions pending real-page design review.
- TypeScript typecheck, `npm ci`, Next.js production `build`, production HTTP smoke, and live Chromium smoke: NOT EXECUTED in audit environment due npm registry DNS failure.
- i18n editorial body copy: PARTIAL. Many source candidates remain; do not confuse 11 route configs with 11 fully translated content languages.
- Do not label Google AI Studio preview verified until the imported repo is actually run and inspected.

See `docs/V5_ACCEPTANCE.md` for checks and exact limitations.
