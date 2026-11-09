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
    // Fallback
  }

  const context = resolveMarketContext(host, '/solutions');
  const canonical = buildCanonicalUrl(context.routePrefix, context.canonicalHost, '/solutions');
  const languages = buildHreflangAlternates('/solutions', context);
  const indexable = isRouteIndexable(context, '/solutions');

  const title = context.languageCode === 'en'
    ? 'Industry Technology Solutions Ecosystem | Viettel IDC'
    : 'Hệ sinh thái Giải pháp công nghệ | Viettel IDC';

  const description = context.languageCode === 'en'
    ? 'Explore comprehensive digital transformation and enterprise IT solutions designed for finance, healthcare, education, retail, and manufacturing.'
    : 'Khám phá 16 giải pháp chuyển đổi số toàn diện theo từng ngành nghề từ Viettel IDC: Ngân hàng, Y tế, Giáo dục, Thương mại điện tử, Sản xuất.';

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

export default async function SolutionsPage() {
  let host = 'viettelidc.com.vn';
  try {
    const headerList = await headers();
    host = headerList.get('host') || headerList.get('x-forwarded-host') || 'viettelidc.com.vn';
  } catch {
    // Fallback
  }

  const context = resolveMarketContext(host, '/solutions');
  const schema = buildBespokePageSchema(context, 'solutions');

  return (
    <>
      <JsonLd data={schema} />
      <DynamicSlugRouter fullPath="/solutions" />
    </>
  );
}
