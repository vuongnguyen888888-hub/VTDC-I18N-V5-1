/**
 * VIDC Design System Tokens (Version 2026-11-06)
 * Source of Truth: Figma file pHobosL59UrMRnh20n4ETY
 * Verified from:
 * - design-system/figma/vidc.figma.ready.css
 * - design-system/figma/vidc.figma.raw.json
 * - design-system/figma/vidc.figma.resolved.json
 */

export const VIDC_TOKENS = {
  // F01 — Colors
  brand: {
    primary: '#EE0033',
    primaryHover: '#D6002E',
    primaryPressed: '#BE0029',
    pink: '#FF6482',
    subtle: '#FFF1F4',
  },
  action: {
    primaryDefault: '#EE0033',
    primaryFocused: '#EE0033',
    primaryLoading: '#EE0033',
    primaryHover: '#D6002E',
    primaryPressed: '#BE0029',
    primaryDisabled: '#F2F4F7',
    primaryOnColor: '#FFFFFF',
    primaryAAAlternative: '#E80032',
  },
  warningButton: {
    default: '#FEDF89',
    hover: '#FEC84B',
    pressed: '#FDB022',
    onColor: '#101828',
  },
  surfaces: {
    light: {
      canvas: '#FFFFFF',
      default: '#FFFFFF',
      elevated: '#F9FAFB',
      subtle: '#F2F4F7',
    },
    dark: {
      canvas: '#0B0E17',
      default: '#141820',
      elevated: '#1E2329',
      subtle: '#242B34',
    },
  },
  text: {
    light: {
      primary: '#101828',
      secondary: '#344054',
      tertiary: '#667085',
      muted: '#667085',
      brand: '#C5002A',
    },
    dark: {
      primary: '#F9FAFB',
      secondary: '#D0D5DD',
      tertiary: '#98A2B3',
      muted: '#98A2B3',
      brand: '#FF6482',
    },
  },
  borders: {
    light: {
      default: '#EAECF0',
      strong: '#D0D5DD',
      brand: '#C5002A',
    },
    dark: {
      default: '#37404C',
      strong: '#475467',
      brand: '#FF6482',
    },
  },

  // F02 — Typography
  typography: {
    bodyFont: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
    displayFont: '"FS PF BeauSans Pro", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
    display: {
      md: {
        desktop: { fontSize: 48, lineHeight: 56, fontWeight: 600 },
        mobile: { fontSize: 40, lineHeight: 48, fontWeight: 600 },
      },
    },
    headings: {
      h1: {
        fontFamily: 'FS PF BeauSans Pro',
        fontWeight: 600,
        desktop: { fontSize: 48, lineHeight: 56 },
        mobile: { fontSize: 36, lineHeight: 44 },
      },
      h2: {
        fontFamily: 'FS PF BeauSans Pro',
        fontWeight: 600,
        desktop: { fontSize: 36, lineHeight: 44 },
        mobile: { fontSize: 30, lineHeight: 38 },
      },
      h3: {
        fontFamily: 'FS PF BeauSans Pro',
        fontWeight: 600,
        desktop: { fontSize: 24, lineHeight: 32 },
        mobile: { fontSize: 22, lineHeight: 30 },
      },
      h4: {
        fontFamily: 'Roboto',
        fontWeight: 600,
        desktop: { fontSize: 20, lineHeight: 28 },
        mobile: { fontSize: 20, lineHeight: 28 },
      },
      h5: {
        fontFamily: 'Roboto',
        fontWeight: 600,
        desktop: { fontSize: 16, lineHeight: 24 },
        mobile: { fontSize: 16, lineHeight: 24 },
      },
    },
    body: {
      lg: { fontSize: 18, lineHeight: 28, fontWeight: 400 },
      md: { fontSize: 16, lineHeight: 24, fontWeight: 400 },
      sm: { fontSize: 14, lineHeight: 20, fontWeight: 400 },
    },
    caption: { fontSize: 12, lineHeight: 16, fontWeight: 400 },
    overline: { fontSize: 12, lineHeight: 16, fontWeight: 600, letterSpacing: 0.96 },
    bodyDefault: { fontSize: 16, lineHeight: 24 },
  },

  // Button Specs
  coreButton: {
    sizes: {
      sm: { height: 32, radius: '8px 8px 8px 2px', fontSize: 12, lineHeight: 16 },
      md: { height: 40, radius: '10px 10px 10px 2px', fontSize: 14, lineHeight: 20 },
      lg: { height: 48, radius: '14px 14px 14px 2px', fontSize: 16, lineHeight: 24 },
      xl: { height: 52, radius: '10px 10px 10px 2px', fontSize: 16, lineHeight: 24 },
      '2xl': { height: 60, radius: '14px 14px 14px 2px', fontSize: 18, lineHeight: 28 },
    },
    fontWeight: 600,
    fontFamily: 'Roboto',
  },

  // F03 — Spacing
  spacing: {
    none: 0,
    opticalHalf: 2,
    xs: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 20,
    '3xl': 24,
    '4xl': 32,
    '5xl': 40,
    '6xl': 48,
    '7xl': 64,
    '8xl': 80,
  },

  // F04 — Radius
  radius: {
    none: 0,
    xxs: 2,
    xs: 4,
    sm: 6,
    md: 8,
    lg: 12,
    xl: 20,
    '2xl': 24,
    full: 9999,
  },

  // F05 — Effects
  effects: {
    cardShadowLight: '0 1px 3px rgba(16, 24, 40, 0.08), 0 1px 2px rgba(16, 24, 40, 0.06)',
    cardShadowDark: '0 1px 3px rgba(0, 0, 0, 0.35)',
    focusOutline: '#EE0033',
    focusOffset: 2,
  },

  // F06 — Motion & A11y
  motion: {
    durations: {
      instant: '0ms',
      fast: '120ms',
      default: '200ms',
      slow: '300ms',
      deliberate: '500ms',
      ambient: '800ms',
    },
    easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
    touch: {
      minimum: 44,
      preferred: 48,
    },
  },

  // F07 — Containers & Grid
  layout: {
    containerMax: 1600,
    gutters: {
      desktop: 80,
      tablet: 40,
      mobile: 16,
    },
    gridColumns: {
      desktop: 12,
      tablet: 8,
      mobile: 4,
    },
    breakpoints: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1600,
    },
  },

  // Accessibility Contrast Ratios
  accessibility: {
    whiteOnPrimaryContrast: 4.48408,
    normalTextAAMet: false,
    aaThreshold: 4.5,
    whiteOnAAAlternativeContrast: 4.69,
    aaAlternativeMet: true,
  },
} as const;
