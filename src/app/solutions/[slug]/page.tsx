import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { DynamicSlugRouter } from '@/components/routing/DynamicSlugRouter';
import { SOLUTION_ROUTES } from '@/data/masterRouteManifest';
import { resolveMarketContext } from '@/lib/context/resolveMarketContext';
import {
  buildCanonicalUrl,
  buildHreflangAlternates,
  isRouteIndexable,
} from '@/utils/seoMetadata';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const canonicalPath = `/solutions/${slug}/`;
  const targetPath = `/solutions/${slug}`;

  let host = 'viettelidc.com.vn';
  try {
    const headerList = await headers();
    host = headerList.get('host') || headerList.get('x-forwarded-host') || 'viettelidc.com.vn';
  } catch {
    // Fallback
  }

  const context = resolveMarketContext(host, targetPath);
  const foundSolution = SOLUTION_ROUTES.find(
    (s) => s.id === slug || s.canonicalPath === canonicalPath || s.canonicalPath === targetPath
  );

  const isEn = context.languageCode === 'en';
  const titleName = isEn
    ? (foundSolution?.titleEn || slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()))
    : (foundSolution?.titleVi || slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()));

  const title = isEn ? `${titleName} Solutions | Viettel IDC` : `Giải pháp ${titleName} | Viettel IDC`;
  const description = isEn
    ? `Comprehensive ${titleName} technology solutions optimized for enterprise digital transformation by Viettel IDC.`
    : `Bộ giải pháp ${titleName} tối ưu cho doanh nghiệp trên nền tảng hạ tầng số toàn diện của Viettel IDC.`;

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

import { buildSolutionPageSchema } from '@/lib/seo/structuredData';
import { JsonLd } from '@/components/seo/JsonLd';

export default async function CanonicalSolutionPage({ params }: Props) {
  const { slug } = await params;
  const canonicalPath = `/solutions/${slug}/`;

  // Verify solution exists in 16 canonical solutions
  const isValidSolution = SOLUTION_ROUTES.some(
    (s) => s.id === slug || s.canonicalPath === canonicalPath || s.canonicalPath === `/solutions/${slug}`
  );

  if (!isValidSolution) {
    notFound();
  }

  let host = 'viettelidc.com.vn';
  try {
    const headerList = await headers();
    host = headerList.get('host') || headerList.get('x-forwarded-host') || 'viettelidc.com.vn';
  } catch {
    // Fallback
  }

  const context = resolveMarketContext(host, `/solutions/${slug}`);
  const schema = buildSolutionPageSchema(context, slug);

  return (
    <>
      <JsonLd data={schema} />
      <DynamicSlugRouter fullPath={`/solutions/${slug}`} />
    </>
  );
}
