import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { resolveMarketContext } from '@/lib/context/resolveMarketContext';
import { buildCanonicalUrl, buildHreflangAlternates, isRouteIndexable } from '@/utils/seoMetadata';
import { DynamicSlugRouter } from '@/components/routing/DynamicSlugRouter';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  let host = 'viettelidc.com.vn';
  try {
    const headerList = await headers();
    host = headerList.get('host') || headerList.get('x-forwarded-host') || 'viettelidc.com.vn';
  } catch {
    // Fallback during static analysis
  }

  const context = resolveMarketContext(host, '/services');
  const canonical = buildCanonicalUrl(context.routePrefix, context.canonicalHost, '/services');
  const languages = buildHreflangAlternates('/services', context);
  const indexable = isRouteIndexable(context, '/services');

  const title = context.languageCode === 'en'
    ? 'Cloud & Data Center Service Catalog | Viettel IDC'
    : 'Danh mục Dịch vụ Cloud & Data Center | Viettel IDC';

  const description = context.languageCode === 'en'
    ? 'Explore our catalog of cloud computing, colocation, storage, networking, and cybersecurity services.'
    : 'Hệ sinh thái 59+ dịch vụ điện toán đám mây, trung tâm dữ liệu, lưu trữ, mạng và bảo mật an toàn thông tin của Viettel IDC.';

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

import { buildBespokePageSchema } from '@/lib/seo/structuredData';
import { JsonLd } from '@/components/seo/JsonLd';

export default async function ServicesPage() {
  let host = 'viettelidc.com.vn';
  try {
    const headerList = await headers();
    host = headerList.get('host') || headerList.get('x-forwarded-host') || 'viettelidc.com.vn';
  } catch {
    // Fallback
  }

  const context = resolveMarketContext(host, '/services');
  const schema = buildBespokePageSchema(context, 'services');

  return (
    <>
      <JsonLd data={schema} />
      <DynamicSlugRouter fullPath="/services" />
    </>
  );
}
