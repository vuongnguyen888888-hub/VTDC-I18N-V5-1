import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { resolveMarketContext } from '@/lib/context/resolveMarketContext';
import { isRouteIndexable } from '@/utils/seoMetadata';
import { PromotionsPage } from '@/components/promotions/PromotionsPage';

export async function generateMetadata(): Promise<Metadata> {
  let host = 'viettelidc.com.vn';
  try {
    const headerList = await headers();
    host = headerList.get('host') || headerList.get('x-forwarded-host') || 'viettelidc.com.vn';
  } catch {
    // Fallback
  }

  const context = resolveMarketContext(host, '/promotions');
  const indexable = isRouteIndexable(context, '/promotions');

  return {
    title: 'Chương trình khuyến mại & Ưu đãi | Viettel IDC',
    description: 'Tổng hợp các chương trình khuyến mại, ưu đãi hấp dẫn dành cho dịch vụ Cloud Server, Hosting, Bảo mật Viettel IDC.',
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}

import { buildBespokePageSchema } from '@/lib/seo/structuredData';
import { JsonLd } from '@/components/seo/JsonLd';

export default async function PromotionsRoute() {
  let host = 'viettelidc.com.vn';
  try {
    const headerList = await headers();
    host = headerList.get('host') || headerList.get('x-forwarded-host') || 'viettelidc.com.vn';
  } catch {
    // Fallback
  }

  const context = resolveMarketContext(host, '/promotions');
  const schema = buildBespokePageSchema(context, 'promotions');

  return (
    <>
      <JsonLd data={schema} />
      <PromotionsPage />
    </>
  );
}
