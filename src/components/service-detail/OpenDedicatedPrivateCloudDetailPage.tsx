import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { OpenDedicatedPrivateCloudHero } from './open-dedicated-private-cloud/OpenDedicatedPrivateCloudHero';
import { VCSSectionNavigation } from './CloudServerStickyNav';
import { OpenDedicatedPrivateCloudOverview } from './open-dedicated-private-cloud/OpenDedicatedPrivateCloudOverview';
import { OpenDedicatedPrivateCloudPricingEstimator } from './open-dedicated-private-cloud/OpenDedicatedPrivateCloudPricingEstimator';
import { OpenDedicatedPrivateCloudCapabilities } from './open-dedicated-private-cloud/OpenDedicatedPrivateCloudCapabilities';
import { OpenDedicatedPrivateCloudTechSpecs } from './open-dedicated-private-cloud/OpenDedicatedPrivateCloudTechSpecs';
import { OpenDedicatedPrivateCloudBenefitsCompliance } from './open-dedicated-private-cloud/OpenDedicatedPrivateCloudBenefitsCompliance';
import { OpenDedicatedPrivateCloudUseCases } from './open-dedicated-private-cloud/OpenDedicatedPrivateCloudUseCases';
import { OpenDedicatedPrivateCloudFaq } from './open-dedicated-private-cloud/OpenDedicatedPrivateCloudFaq';
import { OpenDedicatedPrivateCloudFooterCta } from './open-dedicated-private-cloud/OpenDedicatedPrivateCloudFooterCta';
import { OpenDedicatedPrivateCloudDocsSupport } from './open-dedicated-private-cloud/OpenDedicatedPrivateCloudDocsSupport';
import { OpenDedicatedPrivateCloudRelatedProducts } from './open-dedicated-private-cloud/OpenDedicatedPrivateCloudRelatedProducts';
import { CloudServerQuoteModal } from './CloudServerQuoteModal';

interface OpenDedicatedPrivateCloudDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
}

export const OpenDedicatedPrivateCloudDetailPage: React.FC<OpenDedicatedPrivateCloudDetailPageProps> = ({
  currentMarket,
  onNavigateHome,
}) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedConfig, setSelectedConfig] = useState<any>(null);
  const [estimatedTotal, setEstimatedTotal] = useState<number>(0);

  const isLaos = currentMarket?.code !== 'vn';

  // Scroll to top on mount and set page title
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = isLaos 
      ? 'Viettel Open Dedicated Private Cloud (oDPC) - Enterprise Dedicated Cloud | Viettel IDC'
      : 'Viettel Open Dedicated Private Cloud (oDPC) - Đám Mây Dùng Riêng Mã Nguồn Mở Tối Ưu TCO | Viettel IDC';
  }, [isLaos]);

  const handleOpenQuoteWithConfig = (config?: any, total?: number, currency?: string) => {
    if (config) {
      setSelectedConfig(config);
    }
    if (total) {
      setEstimatedTotal(total);
    }
    setIsQuoteModalOpen(true);
  };

  const navItems = isLaos ? [
    { id: 'overview', label: 'Overview', href: '#overview', sectionId: 'overview', order: 1, enabled: true },
    { id: 'pricing', label: 'Pricing', href: '#pricing', sectionId: 'pricing', order: 2, enabled: true },
    { id: 'features', label: 'Capabilities', href: '#features', sectionId: 'features', order: 3, enabled: true },
    { id: 'tech-specs', label: 'Tech Specs', href: '#tech-specs', sectionId: 'tech-specs', order: 4, enabled: true },
    { id: 'benefits', label: 'Benefits', href: '#benefits', sectionId: 'benefits', order: 5, enabled: true },
    { id: 'use-cases', label: 'Applications', href: '#use-cases', sectionId: 'use-cases', order: 6, enabled: true },
    { id: 'faq', label: 'FAQ', href: '#faq', sectionId: 'faq', order: 7, enabled: true },
    { id: 'docs-support', label: 'Docs & Support', href: '#docs-support', sectionId: 'docs-support', order: 8, enabled: true },
  ] : [
    { id: 'overview', label: 'Tổng quan', href: '#overview', sectionId: 'overview', order: 1, enabled: true },
    { id: 'pricing', label: 'Bảng giá', href: '#pricing', sectionId: 'pricing', order: 2, enabled: true },
    { id: 'features', label: 'Tính năng', href: '#features', sectionId: 'features', order: 3, enabled: true },
    { id: 'tech-specs', label: 'Thông số kỹ thuật', href: '#tech-specs', sectionId: 'tech-specs', order: 4, enabled: true },
    { id: 'benefits', label: 'Lợi ích', href: '#benefits', sectionId: 'benefits', order: 5, enabled: true },
    { id: 'use-cases', label: 'Ứng dụng', href: '#use-cases', sectionId: 'use-cases', order: 6, enabled: true },
    { id: 'faq', label: 'Hỏi đáp', href: '#faq', sectionId: 'faq', order: 7, enabled: true },
    { id: 'docs-support', label: 'Tài liệu & Hỗ trợ', href: '#docs-support', sectionId: 'docs-support', order: 8, enabled: true },
  ];

  return (
    <div
      id="service-detail-viettel-open-dedicated-private-cloud"
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-006"
      data-vidc-pillar="compute"
    >
      {/* 🟢 SECTION 0: HERO SECTION */}
      <OpenDedicatedPrivateCloudHero
        currentMarket={currentMarket}
        onOpenQuote={() => handleOpenQuoteWithConfig()}
        onNavigateHome={onNavigateHome}
      />

      {/* 📌 STICKY NAVIGATION BAR */}
      <VCSSectionNavigation
        brandLabel={isLaos ? "Open Dedicated Private Cloud" : "Viettel oDPC"}
        items={navItems}
        ctaLabel={isLaos ? "Request Quote" : "Nhận Báo Giá oDPC"}
        ctaHref="#pricing"
        currentMarket={currentMarket}
      />

      {/* ⚪ SECTION 1: TỔNG QUAN & ĐẶC ĐIỂM CỐT LÕI (#overview) */}
      <OpenDedicatedPrivateCloudOverview currentMarket={currentMarket} />

      {/* 🔘 SECTION 2: BẢNG GIÁ CẤU HÌNH GÓI oDPC TIÊU CHUẨN (#pricing) */}
      <OpenDedicatedPrivateCloudPricingEstimator 
        currentMarket={currentMarket}
        onOpenQuote={(config, total, currency) => handleOpenQuoteWithConfig(config, total, currency)} 
        onSelectConfigForQuote={(config, total, currency) => handleOpenQuoteWithConfig(config, total, currency)}
      />

      {/* ⚪ SECTION 3: TÍNH NĂNG NỔI BẬT & NĂNG LỰC CỐT LÕI (#features) */}
      <OpenDedicatedPrivateCloudCapabilities currentMarket={currentMarket} />

      {/* 🔘 SECTION 4: BẢNG THÔNG SỐ KỸ THUẬT TIÊU CHUẨN (#tech-specs) */}
      <OpenDedicatedPrivateCloudTechSpecs currentMarket={currentMarket} />

      {/* ⚪ SECTION 5: GIÁ TRỊ VÀ LỢI ÍCH DOANH NGHIỆP (#benefits) */}
      <OpenDedicatedPrivateCloudBenefitsCompliance currentMarket={currentMarket} />

      {/* 🔘 SECTION 6: KỊCH BẢN ỨNG DỤNG ĐIỂN HÌNH (#use-cases) */}
      <OpenDedicatedPrivateCloudUseCases currentMarket={currentMarket} />

      {/* ⚪ SECTION 7: CÂU HỎI THƯỜNG GẶP (#faq) */}
      <OpenDedicatedPrivateCloudFaq currentMarket={currentMarket} />

      {/* 🔘 SECTION 8: KHỐI CHUYỂN ĐỔI CHÍNH (FOOTER CTA) (#cta-section) */}
      <OpenDedicatedPrivateCloudFooterCta onOpenQuote={() => handleOpenQuoteWithConfig()} currentMarket={currentMarket} />

      {/* ⚪ SECTION 9: TÀI LIỆU & HỖ TRỢ KỸ THUẬT (#docs-support) */}
      <OpenDedicatedPrivateCloudDocsSupport currentMarket={currentMarket} />

      {/* 🔘 SECTION 10: HỆ SINH THÁI SẢN PHẨM LIÊN QUAN (#related-products) */}
      <OpenDedicatedPrivateCloudRelatedProducts currentMarket={currentMarket} />

      {/* Lead / Quote Registration Modal */}
      <CloudServerQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        currentMarket={currentMarket}
        currency={currentMarket.currency}
        estimatedTotal={estimatedTotal}
        selectedConfig={
          selectedConfig
            ? {
                vcpu: selectedConfig.vcpu || 192,
                ram: selectedConfig.ram || 384,
                storage: selectedConfig.storage || 7680,
                ipCount: selectedConfig.ipCount || 10,
                bandwidthMbps: selectedConfig.bandwidthMbps || 500,
                osType: 'linux',
                billingCycleMonths: selectedConfig.billingCycleMonths || 12,
                packageName: selectedConfig.packageName || 'Viettel Open Dedicated Private Cloud (Gói DPC-2)',
              }
            : null
        }
      />
    </div>
  );
};
