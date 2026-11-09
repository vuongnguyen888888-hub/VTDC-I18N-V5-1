import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { resolveMarketContext } from '@/lib/context/resolveMarketContext';
import { isRouteIndexable } from '@/utils/seoMetadata';
import { PricingCalculatorPage } from '@/components/pricing/PricingCalculatorPage';

export async function generateMetadata(): Promise<Metadata> {
  let host = 'viettelidc.com.vn';
  try {
    const headerList = await headers();
    host = headerList.get('host') || headerList.get('x-forwarded-host') || 'viettelidc.com.vn';
  } catch {
    // Fallback
  }

  const context = resolveMarketContext(host, '/pricing');
  const indexable = isRouteIndexable(context, '/pricing');

  return {
    title: 'Bảng giá dịch vụ & Công cụ tính giá | Viettel IDC',
    description: 'Tra cứu bảng giá và ước tính chi phí các dịch vụ Cloud, Data Center, Bảo mật của Viettel IDC trực tuyến.',
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}

import { buildBespokePageSchema } from '@/lib/seo/structuredData';
import { JsonLd } from '@/components/seo/JsonLd';

export default async function PricingPage() {
  let host = 'viettelidc.com.vn';
  try {
    const headerList = await headers();
    host = headerList.get('host') || headerList.get('x-forwarded-host') || 'viettelidc.com.vn';
  } catch {
    // Fallback
  }

  const context = resolveMarketContext(host, '/pricing');
  const schema = buildBespokePageSchema(context, 'pricing');

  return (
    <>
      <JsonLd data={schema} />
      <PricingCalculatorPage />
    </>
  );
}
