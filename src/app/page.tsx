import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { resolveMarketContext } from '@/lib/context/resolveMarketContext';
import { buildCanonicalUrl, buildHreflangAlternates, isRouteIndexable } from '@/utils/seoMetadata';
import { buildHomePageSchema } from '@/lib/seo/structuredData';
import { JsonLd } from '@/components/seo/JsonLd';
import { HomePage } from '@/components/home/HomePage';

export async function generateMetadata(): Promise<Metadata> {
  let host = 'viettelidc.com.vn';
  try {
    const headerList = await headers();
    host = headerList.get('host') || headerList.get('x-forwarded-host') || 'viettelidc.com.vn';
  } catch {
    // Fallback to default VN domain during static generation or headerless calls
  }

  const context = resolveMarketContext(host, '/');
  const canonical = buildCanonicalUrl(context.routePrefix, context.canonicalHost, '/');
  const languages = buildHreflangAlternates('/', context);
  const indexable = isRouteIndexable(context, '/');

  const title = context.languageCode === 'en'
    ? 'Viettel IDC | Leading Cloud & Data Center Services'
    : 'Viettel IDC | Trung tâm Dữ liệu & Dịch vụ Cloud hàng đầu Việt Nam';

  const description = context.languageCode === 'en'
    ? 'Viettel IDC is the leading provider of Cloud Server, Colocation, and Data Center services in Vietnam.'
    : 'Viettel IDC - Nhà cung cấp dịch vụ Trung tâm Dữ liệu, Cloud Server, Colocation và Lưu trữ Đối tượng hàng đầu tại Việt Nam và Đông Nam Á.';

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

export default async function RootPage() {
  let host = 'viettelidc.com.vn';
  try {
    const headerList = await headers();
    host = headerList.get('host') || headerList.get('x-forwarded-host') || 'viettelidc.com.vn';
  } catch {
    // Fallback
  }

  const context = resolveMarketContext(host, '/');
  const schema = buildHomePageSchema(context);

  return (
    <>
      <JsonLd data={schema} />
      <HomePage />
    </>
  );
}
