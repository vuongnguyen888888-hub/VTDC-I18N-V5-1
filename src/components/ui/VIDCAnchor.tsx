'use client';

import React, { forwardRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { buildLocalizedHref } from '@/utils/routingMatrix';

/** Locale-aware native anchor. Preserves browser behavior, download, target and ref. */
export const VIDCAnchor = forwardRef<HTMLAnchorElement, React.ComponentPropsWithRef<'a'>>(
  function VIDCAnchor({ href, download, ...props }, ref) {
    const { currentMarket, currentLanguage } = useLanguage();
    const localized = typeof href === 'string' && !download
      ? buildLocalizedHref(href, currentMarket.code, currentLanguage)
      : href;
    return <a {...props} ref={ref} href={localized} download={download} data-vidc-link="locale-aware" />;
  },
);
VIDCAnchor.displayName = 'VIDCAnchor';
