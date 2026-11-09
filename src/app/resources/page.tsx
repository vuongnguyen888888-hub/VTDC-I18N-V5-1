import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { resolveMarketContext } from '@/lib/context/resolveMarketContext';
import { isRouteIndexable } from '@/utils/seoMetadata';
import { ResourcesPage } from '@/components/resources/ResourcesPage';

export async function generateMetadata(): Promise<Metadata> {
  let host = 'viettelidc.com.vn';
  try {
    const headerList = await headers();
    host = headerList.get('host') || headerList.get('x-forwarded-host') || 'viettelidc.com.vn';
  } catch {
    // Fallback
  }

  const context = resolveMarketContext(host, '/resources');
  const indexable = isRouteIndexable(context, '/resources');

  return {
    title: 'Tài nguyên & Tài liệu kỹ thuật | Viettel IDC',
    description: 'Trung tâm tài nguyên, whitepapers, case studies và tài liệu hướng dẫn kỹ thuật điện toán đám mây Viettel IDC.',
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}

import { buildBespokePageSchema } from '@/lib/seo/structuredData';
import { JsonLd } from '@/components/seo/JsonLd';

export default async function ResourcesRoute() {
  let host = 'viettelidc.com.vn';
  try {
    const headerList = await headers();
    host = headerList.get('host') || headerList.get('x-forwarded-host') || 'viettelidc.com.vn';
  } catch {
    // Fallback
  }

  const context = resolveMarketContext(host, '/resources');
  const schema = buildBespokePageSchema(context, 'resources');

  return (
    <>
      <JsonLd data={schema} />
      <ResourcesPage />
    </>
  );
}
