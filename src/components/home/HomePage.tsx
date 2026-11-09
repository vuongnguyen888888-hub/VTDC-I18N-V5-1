'use client';

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { HeroSection } from './HeroSection';
import { SocialProofMarquee } from './SocialProofMarquee';
import { ServicesTabsSection } from './ServicesTabsSection';
import { SolutionsCarouselSection } from './SolutionsCarouselSection';
import { IndustriesAccordionSection } from './IndustriesAccordionSection';
import { DataCenterBentoSection } from './DataCenterBentoSection';
import { StandardsAwardsTabsSection } from './StandardsAwardsTabsSection';
import { TechPartnersMarquee } from './TechPartnersMarquee';
import { CtaFormSection } from './CtaFormSection';

export function HomePage() {
  const { currentMarket } = useLanguage();

  return (
    <>
      {/* Section 1: Hero */}
      <HeroSection currentMarket={currentMarket} />

      {/* Section 2: Social Proof Bar Marquee */}
      <SocialProofMarquee />

      {/* Section 3: 10 Nhóm Dịch Vụ (Tabs) */}
      <ServicesTabsSection currentMarket={currentMarket} />

      {/* Section 4: Giải Pháp Chuyên Sâu (Carousel) */}
      <SolutionsCarouselSection currentMarket={currentMarket} />

      {/* Section 5: Giải Pháp Theo Ngành (Horizontal Expansion Accordion) */}
      <IndustriesAccordionSection currentMarket={currentMarket} />

      {/* Section 6: Hạ Tầng Trung Tâm Dữ Liệu (Bento Grid) */}
      <DataCenterBentoSection currentMarket={currentMarket} />

      {/* Section 7: Tiêu Chuẩn & Chứng Nhận Quốc Tế (Tabs) */}
      <StandardsAwardsTabsSection />

      {/* Section 8: Đối Tác Công Nghệ Global */}
      <TechPartnersMarquee />

      {/* Section 9: CTA Banner & Lead Contact Form */}
      <CtaFormSection currentMarket={currentMarket} />
    </>
  );
}
