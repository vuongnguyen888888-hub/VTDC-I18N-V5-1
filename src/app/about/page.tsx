import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { resolveMarketContext } from '@/lib/context/resolveMarketContext';
import { isRouteIndexable } from '@/utils/seoMetadata';
import { AboutPage } from '@/components/about/AboutPage';

export async function generateMetadata(): Promise<Metadata> {
  let host = 'viettelidc.com.vn';
  try {
    const headerList = await headers();
    host = headerList.get('host') || headerList.get('x-forwarded-host') || 'viettelidc.com.vn';
  } catch {
    // Fallback
  }

  const context = resolveMarketContext(host, '/about');
  const indexable = isRouteIndexable(context, '/about');

  return {
    title: 'Giới thiệu về Viettel IDC | Nhà cung cấp dịch vụ Trung tâm dữ liệu & Cloud hàng đầu',
    description: 'Tìm hiểu về Viettel IDC, sứ mệnh, hạ tầng trung tâm dữ liệu tiêu chuẩn quốc tế Rated 3 - TIA 942 và cam kết phát triển bền vững.',
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}

import { buildBespokePageSchema } from '@/lib/seo/structuredData';
import { JsonLd } from '@/components/seo/JsonLd';

export default async function AboutRoute() {
  let host = 'viettelidc.com.vn';
  try {
    const headerList = await headers();
    host = headerList.get('host') || headerList.get('x-forwarded-host') || 'viettelidc.com.vn';
  } catch {
    // Fallback
  }

  const context = resolveMarketContext(host, '/about');
  const schema = buildBespokePageSchema(context, 'about');

  return (
    <>
      <JsonLd data={schema} />
      <AboutPage currentPath="/about/" />
    </>
  );
}
