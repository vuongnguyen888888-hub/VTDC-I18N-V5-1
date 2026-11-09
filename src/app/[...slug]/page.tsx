// src/app/[...slug]/page.tsx
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound, permanentRedirect } from 'next/navigation';
import { DynamicSlugRouter } from '@/components/routing/DynamicSlugRouter';
import { buildLocalizedRedirectPath, parsePathToMarketAndLanguage } from '@/utils/routingMatrix';
import { isValidAppRoute } from '@/utils/routeValidator';
import { getRedirectTarget } from '@/data/redirectManifest';
import { resolveMarketContext } from '@/lib/context/resolveMarketContext';
import {
  buildCanonicalUrl,
  buildHreflangAlternates,
  isRouteIndexable,
} from '@/utils/seoMetadata';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const fullPath = `/${slug.join('/')}`;

  if (!isValidAppRoute(fullPath)) {
    const isVi = parsePathToMarketAndLanguage(fullPath).languageCode === 'vn';
    return {
      title: isVi ? '404 - Không tìm thấy trang | Viettel IDC' : '404 - Page not found | Viettel IDC',
      description: isVi ? 'Trang bạn tìm kiếm không tồn tại.' : 'The requested page is not available.',
      robots: { index: false, follow: true },
    };
  }

  let host = 'viettelidc.com.vn';
  try {
    const headerList = await headers();
    host = headerList.get('host') || headerList.get('x-forwarded-host') || 'viettelidc.com.vn';
  } catch {
    // Fallback during static analysis
  }

  const parsed = parsePathToMarketAndLanguage(fullPath);
  const context = resolveMarketContext(host, fullPath);

  const canonical = buildCanonicalUrl(context.routePrefix, context.canonicalHost, parsed.pureSlug);
  const languages = buildHreflangAlternates(parsed.pureSlug, context);
  const indexable = isRouteIndexable(context, parsed.pureSlug);

  const lastSegment = parsed.pureSlug.split('/').filter(Boolean).pop() ?? '';
  const pageLabel = lastSegment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  // Canonical data is authoritative for localized route names, not slug casing.
  // Markets without approved editorial content stay noindex per market policy.
  const routeTitle = context.routeEntry
    ? (context.languageCode === 'vi' ? context.routeEntry.titleVi : context.routeEntry.titleEn)
    : pageLabel;
  const title = routeTitle ? `${routeTitle} | Viettel IDC` : 'Viettel IDC';
  const description = context.languageCode === 'vi'
    ? `${routeTitle} — Dịch vụ trung tâm dữ liệu và điện toán đám mây Viettel IDC.`
    : `${routeTitle} — Viettel IDC cloud computing and data center services.`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Viettel IDC',
      type: 'website',
    },
  };
}

import {
  buildServicePageSchema,
  buildSolutionPageSchema,
  buildBespokePageSchema,
  buildWebPageEntity,
  buildBreadcrumbEntity,
  buildStructuredDataGraph,
} from '@/lib/seo/structuredData';
import { JsonLd } from '@/components/seo/JsonLd';

export default async function CatchAllPage({ params }: Props) {
  const { slug } = await params;
  const fullPath = `/${slug.join('/')}`;

  if (!isValidAppRoute(fullPath)) {
    notFound();
  }

  const parsed = parsePathToMarketAndLanguage(fullPath);

  // 1. Check for legacy aliases that require permanent redirect (308)
  const redirectEntry = getRedirectTarget(fullPath) || getRedirectTarget(parsed.pureSlug);
  if (redirectEntry) {
    const targetUrl = buildLocalizedRedirectPath(fullPath, redirectEntry.targetPath);

    // Guard against self-redirect
    if (targetUrl !== fullPath && targetUrl !== `${fullPath}/`) {
      permanentRedirect(targetUrl);
    }
  }

  let host = 'viettelidc.com.vn';
  try {
    const headerList = await headers();
    host = headerList.get('host') || headerList.get('x-forwarded-host') || 'viettelidc.com.vn';
  } catch {
    // Fallback
  }

  const context = resolveMarketContext(host, fullPath);
  let schema = null;

  if (isRouteIndexable(context, parsed.pureSlug)) {
    const parts = parsed.pureSlug.split('/').filter(Boolean);
    if (parts[0] === 'services' && parts.length >= 3) {
      schema = await buildServicePageSchema(context, parts[1], parts[2]);
    } else if (parts[0] === 'solutions' && parts.length >= 2) {
      schema = buildSolutionPageSchema(context, parts[1]);
    } else {
      const canonicalUrl = buildCanonicalUrl(context.routePrefix, context.canonicalHost, parsed.pureSlug);
      const lastSegment = parts[parts.length - 1] || '';
      const pageLabel = lastSegment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
      const homeUrl = buildCanonicalUrl(context.routePrefix, context.canonicalHost, '/');
      const crumbs = [
        { name: context.languageCode === 'en' ? 'Home' : 'Trang chủ', url: homeUrl },
        { name: pageLabel, url: canonicalUrl },
      ];
      const breadcrumbEntity = buildBreadcrumbEntity(canonicalUrl, crumbs);
      const pageEntity = buildWebPageEntity(canonicalUrl, `${pageLabel} | Viettel IDC`, `Viettel IDC ${pageLabel}`, context);
      schema = buildStructuredDataGraph([pageEntity, breadcrumbEntity]);
    }
  }

  return (
    <>
      <JsonLd data={schema} />
      <DynamicSlugRouter fullPath={fullPath} />
    </>
  );
}
