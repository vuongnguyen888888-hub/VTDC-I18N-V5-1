import React from 'react';
import { VCSSectionNavigation, VCSSectionNavItem } from '../CloudServerStickyNav';
import { SEAMarket } from '../../layout/UtilityBar';

export interface CloudConnectStickyNavProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const CLOUD_CONNECT_NAV_ITEMS: VCSSectionNavItem[] = [
  { id: 'overview', label: 'Tổng quan', href: '#overview', sectionId: 'overview', order: 1, enabled: true },
  { id: 'pricing', label: 'Bảng giá', href: '#pricing', sectionId: 'pricing', order: 2, enabled: true },
  { id: 'features', label: 'Tính năng', href: '#features', sectionId: 'features', order: 3, enabled: true },
  { id: 'benefits', label: 'Lợi ích', href: '#benefits', sectionId: 'benefits', order: 4, enabled: true },
  { id: 'use-cases', label: 'Ứng dụng', href: '#use-cases', sectionId: 'use-cases', order: 5, enabled: true },
  { id: 'faq', label: 'Hỏi đáp', href: '#faq', sectionId: 'faq', order: 6, enabled: true },
  { id: 'docs-support', label: 'Tài liệu & Hỗ trợ', href: '#docs-support', sectionId: 'docs-support', order: 7, enabled: true },
];

export const CloudConnectStickyNav: React.FC<CloudConnectStickyNavProps> = ({
  currentMarket,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const items = isLaos ? [
    { id: 'overview', label: 'Overview', href: '#overview', sectionId: 'overview', order: 1, enabled: true },
    { id: 'pricing', label: 'Pricing', href: '#pricing', sectionId: 'pricing', order: 2, enabled: true },
    { id: 'features', label: 'Features', href: '#features', sectionId: 'features', order: 3, enabled: true },
    { id: 'benefits', label: 'Benefits', href: '#benefits', sectionId: 'benefits', order: 4, enabled: true },
    { id: 'use-cases', label: 'Use Cases', href: '#use-cases', sectionId: 'use-cases', order: 5, enabled: true },
    { id: 'faq', label: 'FAQ', href: '#faq', sectionId: 'faq', order: 6, enabled: true },
    { id: 'docs-support', label: 'Docs & Support', href: '#docs-support', sectionId: 'docs-support', order: 7, enabled: true },
  ] : CLOUD_CONNECT_NAV_ITEMS;

  return (
    <VCSSectionNavigation
      brandLabel="Viettel Cloud Connect"
      ctaLabel={isLaos ? 'Technical Documents' : 'Tài liệu kỹ thuật'}
      ctaHref="https://docs.vtidc-test.com/"
      currentMarket={currentMarket}
      items={items}
      activeSection="overview"
    />
  );
};
