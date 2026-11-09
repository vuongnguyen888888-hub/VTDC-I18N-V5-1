/**
 * Redirect Manifest — Single Source of Truth (SSOT) for Legacy Aliases & Permanent Redirects (308/301)
 * Architecture Baseline 2026 for Viettel IDC.
 *
 * All legacy aliases are 1-hop permanent redirects to their canonical routes.
 * No intermediate chain redirects allowed.
 */

import redirectData from './redirectManifest.json';

export interface RedirectEntry {
  sourcePath: string;
  targetPath: string;
  statusCode: 308 | 301;
  type: 'legacy_service_alias' | 'legacy_vietnamese_alias' | 'legacy_solution_alias' | 'legacy_misc_alias';
  reason: string;
}

export const REDIRECT_MANIFEST: RedirectEntry[] = redirectData as RedirectEntry[];

/**
 * Fast lookup map for redirects.
 */
const REDIRECT_MAP: Map<string, RedirectEntry> = new Map(
  REDIRECT_MANIFEST.map((entry) => [entry.sourcePath.toLowerCase().replace(/\/+$/, ''), entry])
);

/**
 * Check if a given pathname should be redirected.
 * Normalizes trailing slashes and query strings.
 */
export function getRedirectTarget(pathname: string): RedirectEntry | null {
  const clean = pathname.split('?')[0].split('#')[0].toLowerCase().replace(/\/+$/, '');
  return REDIRECT_MAP.get(clean) || null;
}
