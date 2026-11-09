import React from 'react';
import { VCSSectionNavigation, VCSSectionNavItem } from '../CloudServerStickyNav';
import { SEAMarket } from '../../layout/UtilityBar';

export const DEFAULT_ANTI_DDOS_NAV_ITEMS: VCSSectionNavItem[] = [
  { id: 'overview', label: 'Tổng quan', href: '#overview', sectionId: 'overview', order: 1, enabled: true },
  { id: 'pricing', label: 'Bảng giá', href: '#pricing', sectionId: 'pricing', order: 2, enabled: true },
  { id: 'features', label: 'Tính năng', href: '#features', sectionId: 'features', order: 3, enabled: true },
  { id: 'benefits', label: 'Lợi ích', href: '#benefits', sectionId: 'benefits', order: 4, enabled: true },
  { id: 'use-cases', label: 'Ứng dụng', href: '#use-cases', sectionId: 'use-cases', order: 5, enabled: true },
  { id: 'faq', label: 'Hỏi đáp', href: '#faq', sectionId: 'faq', order: 6, enabled: true },
  { id: 'docs-support', label: 'Tài liệu & Hỗ trợ', href: '#docs-support', sectionId: 'docs-support', order: 7, enabled: true },
];

interface AntiDdosStickyNavProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const AntiDdosStickyNav: React.FC<AntiDdosStickyNavProps> = ({
  currentMarket,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  return (
    <VCSSectionNavigation
      brandLabel="Viettel Anti-DDoS"
      items={DEFAULT_ANTI_DDOS_NAV_ITEMS}
      currentMarket={currentMarket}
      ctaLabel={isLaos ? 'Technical Documents' : 'Tài liệu kỹ thuật'}
      ctaHref="https://docs.vtidc-test.com/"
    />
  );
};
