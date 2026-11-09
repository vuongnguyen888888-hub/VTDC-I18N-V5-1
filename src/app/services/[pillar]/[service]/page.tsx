import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { DynamicSlugRouter } from '@/components/routing/DynamicSlugRouter';
import { CANONICAL_SERVICES } from '@/data/masterRouteManifest';
import { resolveServiceIdFromPath } from '@/data/serviceManifest';
import { resolveMarketContext } from '@/lib/context/resolveMarketContext';
import {
  buildCanonicalUrl,
  buildHreflangAlternates,
  isRouteIndexable,
} from '@/utils/seoMetadata';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ pillar: string; service: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pillar, service } = await params;
  const targetPath = `/services/${pillar}/${service}`;
  const normalizedPath = `/services/${pillar}/${service}/`;

  let host = 'viettelidc.com.vn';
  try {
    const headerList = await headers();
    host = headerList.get('host') || headerList.get('x-forwarded-host') || 'viettelidc.com.vn';
  } catch {
    // Fallback
  }

  const context = resolveMarketContext(host, targetPath);
  const foundService = CANONICAL_SERVICES.find(
    (s) => s.canonicalPath === normalizedPath || s.canonicalPath === targetPath || s.routeId === service || s.routeId === `viettel-${service}`
  );

  const isEn = context.languageCode === 'en';
  const titleName = isEn
    ? (foundService?.titleEn || service.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()))
    : (foundService?.titleVi || service.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()));

  const title = `${titleName} | Viettel IDC`;
  const description = isEn
    ? `Enterprise-grade ${titleName} services on high-availability, international Tier 3 standard infrastructure by Viettel IDC.`
    : `Dịch vụ ${titleName} chất lượng cao, hạ tầng trung tâm dữ liệu chuẩn quốc tế Rated 3 của Viettel IDC.`;

  const canonical = buildCanonicalUrl(context.routePrefix, context.canonicalHost, targetPath);
  const languages = buildHreflangAlternates(targetPath, context);
  const indexable = isRouteIndexable(context, targetPath);

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

import { buildServicePageSchema } from '@/lib/seo/structuredData';
import { JsonLd } from '@/components/seo/JsonLd';

export default async function CanonicalServicePage({ params }: Props) {
  const { pillar, service } = await params;
  const fullPath = `/services/${pillar}/${service}`;
  const pureSlug = `/services/${pillar}/${service}`;

  // Verify service exists in canonical list or service manifest
  const isCanonical = CANONICAL_SERVICES.some(
    (s) => s.canonicalPath.startsWith(fullPath) || s.routeId === service || s.routeId === `viettel-${service}`
  );
  const isResolvable = Boolean(resolveServiceIdFromPath(pureSlug) || resolveServiceIdFromPath(service));

  if (!isCanonical && !isResolvable) {
    notFound();
  }

  let host = 'viettelidc.com.vn';
  try {
    const headerList = await headers();
    host = headerList.get('host') || headerList.get('x-forwarded-host') || 'viettelidc.com.vn';
  } catch {
    // Fallback
  }

  const context = resolveMarketContext(host, fullPath);
  const schema = await buildServicePageSchema(context, pillar, service);

  return (
    <>
      <JsonLd data={schema} />
      <DynamicSlugRouter fullPath={fullPath} />
    </>
  );
}
