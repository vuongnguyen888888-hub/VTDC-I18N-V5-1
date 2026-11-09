import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { VpcHero } from './vpc/VpcHero';
import { VCSSectionNavigation } from './CloudServerStickyNav';
import { VpcOverview } from './vpc/VpcOverview';
import { VpcPricingEstimator } from './vpc/VpcPricingEstimator';
import { VpcFeatures, VpcSpecs } from './vpc/VpcCapabilitiesSpecs';
import { VpcBenefitsCompliance } from './vpc/VpcBenefitsCompliance';
import { VpcUseCases } from './vpc/VpcUseCases';
import { VpcFaq } from './vpc/VpcFaq';
import { VpcFooterCta } from './vpc/VpcFooterCta';
import { VpcDocsSupport } from './vpc/VpcDocsSupport';
import { VpcRelatedProducts } from './vpc/VpcRelatedProducts';
import { CloudServerQuoteModal } from './CloudServerQuoteModal';

interface VirtualPrivateCloudDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
}

export const VirtualPrivateCloudDetailPage: React.FC<VirtualPrivateCloudDetailPageProps> = ({
  currentMarket,
  onNavigateHome,
}) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedConfig, setSelectedConfig] = useState<any>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenQuoteWithConfig = (config?: any) => {
    if (config) {
      setSelectedConfig(config);
    }
    setIsQuoteModalOpen(true);
  };

  const vpcNavItems = [
    { id: 'overview', label: 'Tổng quan', href: '#overview', sectionId: 'overview', order: 1, enabled: true },
    { id: 'pricing', label: 'Bảng giá', href: '#pricing', sectionId: 'pricing', order: 2, enabled: true },
    { id: 'features', label: 'Tính năng', href: '#features', sectionId: 'features', order: 3, enabled: true },
    { id: 'benefits', label: 'Lợi ích', href: '#benefits', sectionId: 'benefits', order: 4, enabled: true },
    { id: 'use-cases', label: 'Ứng dụng', href: '#use-cases', sectionId: 'use-cases', order: 5, enabled: true },
    { id: 'faq', label: 'Hỏi đáp', href: '#faq', sectionId: 'faq', order: 6, enabled: true },
    { id: 'docs-support', label: 'Tài liệu & Hỗ trợ', href: '#docs-support', sectionId: 'docs-support', order: 7, enabled: true },
  ];

  return (
    <div
      id="service-detail-viettel-virtual-private-cloud"
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-003"
      data-vidc-pillar="compute"
    >
      {/* 🟢 0. HERO SECTION */}
      <VpcHero
        currentMarket={currentMarket}
        onOpenQuote={() => handleOpenQuoteWithConfig()}
        onNavigateHome={onNavigateHome}
      />

      {/* 📌 STICKY NAVIGATION BAR */}
      <VCSSectionNavigation
        brandLabel="Viettel vVPC"
        items={vpcNavItems}
        ctaLabel="Tài liệu kỹ thuật"
        ctaHref="#docs-support"
      />

      {/* ⚪ 1. SECTION 1: TỔNG QUAN DỊCH VỤ (#overview) */}
      <VpcOverview />

      {/* 🔘 2. SECTION 2: BẢNG GIÁ DỊCH VỤ (#pricing) */}
      <VpcPricingEstimator
        currentMarket={currentMarket}
        onOpenQuote={handleOpenQuoteWithConfig}
      />

      {/* ⚪ 3. SECTION 3: TÍNH NĂNG NÂNG CAO (#features) */}
      <VpcFeatures />

      {/* 🔘 4. SECTION 4: THÔNG SỐ KỸ THUẬT (#specs) */}
      <VpcSpecs />

      {/* ⚪ 5. SECTION 5: LỢI ÍCH DOANH NGHIỆP (#benefits) */}
      <VpcBenefitsCompliance currentMarket={currentMarket} />

      {/* 🔘 6. SECTION 6: ỨNG DỤNG THỰC TẾ (#use-cases) */}
      <VpcUseCases currentMarket={currentMarket} />

      {/* ⚪ 7. SECTION 7: HỎI ĐÁP (#faq) */}
      <VpcFaq currentMarket={currentMarket} />

      {/* 🔴 8. SECTION 8: KHỐI CHỐT CHUYỂN ĐỔI & LIÊN HỆ (BOTTOM CTA) */}
      <VpcFooterCta onOpenQuote={() => handleOpenQuoteWithConfig()} currentMarket={currentMarket} />

      {/* 🔘 9. SECTION 9: TÀI LIỆU & HỖ TRỢ (#docs-support) */}
      <VpcDocsSupport currentMarket={currentMarket} />

      {/* ⚪ 10. SECTION 10: HỆ SINH THÁI DỊCH VỤ TÍCH HỢP */}
      <VpcRelatedProducts currentMarket={currentMarket} />

      {/* Lead / Quote Registration Modal */}
      <CloudServerQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        selectedConfig={
          selectedConfig
            ? {
                vcpu: selectedConfig.vcpu || 16,
                ram: selectedConfig.ram || 32,
                storage: selectedConfig.storage || 200,
                ipCount: selectedConfig.ipCount || 1,
                bandwidthMbps: 300,
                osType: 'linux',
                billingCycleMonths: selectedConfig.billingCycleMonths || 12,
                packageName: selectedConfig.packageName || 'Viettel Virtual Private Cloud (vVPC)',
              }
            : null
        }
        estimatedTotal={selectedConfig?.estimatedPrice || 0}
      />
    </div>
  );
};
