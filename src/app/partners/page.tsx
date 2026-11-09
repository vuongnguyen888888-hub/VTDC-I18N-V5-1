import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { resolveMarketContext } from '@/lib/context/resolveMarketContext';
import { isRouteIndexable } from '@/utils/seoMetadata';
import { PartnersPage } from '@/components/partners/PartnersPage';

export async function generateMetadata(): Promise<Metadata> {
  let host = 'viettelidc.com.vn';
  try {
    const headerList = await headers();
    host = headerList.get('host') || headerList.get('x-forwarded-host') || 'viettelidc.com.vn';
  } catch {
    // Fallback
  }

  const context = resolveMarketContext(host, '/partners');
  const indexable = isRouteIndexable(context, '/partners');

  return {
    title: 'Chương trình Đối tác | Viettel IDC Partner Network',
    description: 'Gia nhập mạng lưới đối tác Viettel IDC - Hợp tác cùng phát triển các giải pháp Cloud, Data Center và Chuyển đổi số.',
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}

import { buildBespokePageSchema } from '@/lib/seo/structuredData';
import { JsonLd } from '@/components/seo/JsonLd';

export default async function PartnersRoute() {
  let host = 'viettelidc.com.vn';
  try {
    const headerList = await headers();
    host = headerList.get('host') || headerList.get('x-forwarded-host') || 'viettelidc.com.vn';
  } catch {
    // Fallback
  }

  const context = resolveMarketContext(host, '/partners');
  const schema = buildBespokePageSchema(context, 'partners');

  return (
    <>
      <JsonLd data={schema} />
      <PartnersPage />
    </>
  );
}
