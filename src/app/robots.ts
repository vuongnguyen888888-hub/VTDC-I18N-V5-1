import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { resolveDomainConfig } from '@/config/domainRegistry';

export const dynamic = 'force-dynamic';

/**
 * robots.txt — Permissive crawler access coupled with dynamic sitemap declaration for production,
 * and permissive crawler access without sitemaps for staging/development to allow observation of noindex.
 */
export default async function robots(): Promise<MetadataRoute.Robots> {
  let host = 'viettelidc.com.vn';

  try {
    const headerList = await headers();
    host = headerList.get('host') || headerList.get('x-forwarded-host') || 'viettelidc.com.vn';
  } catch {
    // Fallback during static analysis
  }

  const domainCfg = resolveDomainConfig(host);

  // If staging, development, or any noIndex context, allow crawling so they can see noindex, but do NOT advertise a sitemap URL
  if (domainCfg.noIndex || domainCfg.environment !== 'production') {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `https://${domainCfg.domain}/sitemap.xml`,
  };
}
