import React from 'react';
import Link from '@/components/ui/VIDCNextLink';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { ServiceItem } from '@/data/sitemapData';
import { useLanguage } from '@/context/LanguageContext';
import { VIDCButton } from '@/components/ui/VIDCButton';
import { getServiceI18n } from '@/data/multilingualServiceData';

/** Data-backed fallback for published catalog services without a dedicated bespoke UI. */
export function CatalogServiceDetailPage({ service }: { service: ServiceItem }) {
  const { currentLanguage, getFullPath, t } = useLanguage();
  const localizedService = getServiceI18n(service.id, currentLanguage);
  const serviceName = localizedService?.name ?? service.name;
  const serviceTagline = localizedService?.tagline ?? service.tagline;
  const serviceDescription = localizedService?.cardDescription ?? service.cardDescription;
  return (
    <article className="min-h-[60vh] bg-[var(--vidc-surface-canvas)] text-[var(--vidc-text-primary)]">
      <div className="vidc-container py-10 sm:py-16 lg:py-20">
        <Link className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--vidc-text-secondary)] hover:underline focus-visible:outline-2" href={getFullPath('/services')}>
          <ArrowLeft size={16} aria-hidden="true" /> {t.nav.viewAllServices}
        </Link>
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold tracking-widest text-[var(--vidc-text-brand)] uppercase">{service.code}</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">{serviceName}</h1>
          <p className="mt-6 text-xl leading-relaxed text-[var(--vidc-text-secondary)]">{serviceTagline}</p>
          {serviceDescription && <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--vidc-text-tertiary)]">{serviceDescription}</p>}
          <div className="mt-10 flex flex-wrap gap-4">
            <VIDCButton onClick={() => window.dispatchEvent(new CustomEvent('open-quote-modal'))} size="lg">
              {t.nav.requestQuote} <ArrowUpRight size={16} aria-hidden="true" />
            </VIDCButton>
            <Link className="vidc-btn vidc-btn--secondary" data-size="lg" href={getFullPath('/services')}>
              {t.nav.viewAllServices}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
