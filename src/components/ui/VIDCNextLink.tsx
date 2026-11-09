'use client';

import React from 'react';
import NextLink from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { buildLocalizedHref } from '@/utils/routingMatrix';

/** Next.js Link adapter; localizes pathnames while preserving typed href objects. */
export default function VIDCNextLink(props: React.ComponentProps<typeof NextLink>) {
  const { currentLanguage, currentMarket } = useLanguage();
  const { href } = props;
  const localizedHref = typeof href === 'string'
    ? buildLocalizedHref(href, currentMarket.code, currentLanguage)
    : href && typeof href === 'object' && typeof href.pathname === 'string'
      ? { ...href, pathname: buildLocalizedHref(href.pathname, currentMarket.code, currentLanguage) }
      : href;
  return <NextLink {...props} href={localizedHref} />;
}
