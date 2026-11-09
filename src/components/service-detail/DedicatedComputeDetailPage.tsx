import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { DedicatedComputeHero } from './dedicated-compute/DedicatedComputeHero';
import { VCSSectionNavigation } from './CloudServerStickyNav';
import { DedicatedComputeOverview } from './dedicated-compute/DedicatedComputeOverview';
import { DedicatedComputePricingEstimator } from './dedicated-compute/DedicatedComputePricingEstimator';
import { DedicatedComputeCapabilities } from './dedicated-compute/DedicatedComputeCapabilities';
import { DedicatedComputeBenefitsCompliance } from './dedicated-compute/DedicatedComputeBenefitsCompliance';
import { DedicatedComputeUseCases } from './dedicated-compute/DedicatedComputeUseCases';
import { DedicatedComputeFaq } from './dedicated-compute/DedicatedComputeFaq';
import { DedicatedComputeFooterCta } from './dedicated-compute/DedicatedComputeFooterCta';
import { DedicatedComputeDocsSupport } from './dedicated-compute/DedicatedComputeDocsSupport';
import { DedicatedComputeRelatedProducts } from './dedicated-compute/DedicatedComputeRelatedProducts';
import { CloudServerQuoteModal } from './CloudServerQuoteModal';

interface DedicatedComputeDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
}

export const DedicatedComputeDetailPage: React.FC<DedicatedComputeDetailPageProps> = ({
  currentMarket,
  onNavigateHome,
}) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedConfig, setSelectedConfig] = useState<any>(null);

  const isLaos = currentMarket?.code !== 'vn';

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = isLaos
      ? 'Viettel Server Leasing - High Performance Dedicated Physical Servers | Viettel IDC'
      : 'Viettel Server Leasing - Dịch Vụ Cho Thuê Máy Chủ Vật Lý Hiệu Năng Cao & Toàn Quyền Quản Trị | Viettel IDC';
  }, [isLaos]);

  const handleOpenQuoteWithConfig = (config?: any) => {
    if (config) {
      setSelectedConfig(config);
    }
    setIsQuoteModalOpen(true);
  };

  const navItems = [
    { id: 'overview', label: isLaos ? 'Overview' : 'Tổng quan', href: '#overview', sectionId: 'overview', order: 1, enabled: true },
    { id: 'pricing', label: isLaos ? 'Pricing' : 'Báo giá', href: '#pricing', sectionId: 'pricing', order: 2, enabled: true },
    { id: 'features', label: isLaos ? 'Features' : 'Tính năng', href: '#features', sectionId: 'features', order: 3, enabled: true },
    { id: 'benefits', label: isLaos ? 'Benefits' : 'Lợi ích', href: '#benefits', sectionId: 'benefits', order: 4, enabled: true },
    { id: 'use-cases', label: isLaos ? 'Use Cases' : 'Ứng dụng', href: '#use-cases', sectionId: 'use-cases', order: 5, enabled: true },
    { id: 'faq', label: isLaos ? 'FAQ' : 'Hỏi đáp', href: '#faq', sectionId: 'faq', order: 6, enabled: true },
    { id: 'docs-support', label: isLaos ? 'Docs & Support' : 'Tài liệu & Hỗ trợ', href: '#docs-support', sectionId: 'docs-support', order: 7, enabled: true },
  ];

  return (
    <div
      id="service-detail-viettel-server-leasing"
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-002"
      data-vidc-pillar="compute"
    >
      {/* 🟢 SECTION 0: HERO SECTION */}
      <DedicatedComputeHero
        currentMarket={currentMarket}
        onOpenQuote={() => handleOpenQuoteWithConfig()}
        onNavigateHome={onNavigateHome}
      />

      {/* 📌 STICKY NAVIGATION BAR */}
      <VCSSectionNavigation
        brandLabel={isLaos ? 'Server Leasing' : 'Viettel Server Leasing'}
        items={navItems}
        ctaLabel={isLaos ? 'Get Quote' : 'Nhận Báo Giá'}
        ctaHref="#pricing"
      />

      {/* ⚪ SECTION 1: TỔNG QUAN DỊCH VỤ (#overview) */}
      <DedicatedComputeOverview currentMarket={currentMarket} />

      {/* 🔘 SECTION 2: TÙY CHỌN CẤU HÌNH & BÁO GIÁ (#pricing) */}
      <DedicatedComputePricingEstimator
        currentMarket={currentMarket}
        onOpenQuote={(config) => handleOpenQuoteWithConfig(config)}
      />

      {/* ⚪ SECTION 3: NĂNG LỰC CÔNG NGHỆ & THÔNG SỐ (#features) */}
      <DedicatedComputeCapabilities currentMarket={currentMarket} />

      {/* 🔘 SECTION 4: LỢI ÍCH DOANH NGHIỆP (#benefits) */}
      <DedicatedComputeBenefitsCompliance currentMarket={currentMarket} />

      {/* ⚪ SECTION 5: KỊCH BẢN ỨNG DỤNG THỰC TẾ (#use-cases) */}
      <DedicatedComputeUseCases currentMarket={currentMarket} />

      {/* 🔘 SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq) */}
      <DedicatedComputeFaq currentMarket={currentMarket} />

      {/* 🔴 SECTION 7: KHỐI CHUYỂN ĐỔI CHÍNH (BOTTOM CTA) (#cta-section) */}
      <DedicatedComputeFooterCta
        currentMarket={currentMarket}
        onOpenQuote={() => handleOpenQuoteWithConfig()}
      />

      {/* 🔘 SECTION 8: TÀI LIỆU KỸ THUẬT & TRỢ GIÚP (#docs-support) */}
      <DedicatedComputeDocsSupport currentMarket={currentMarket} />

      {/* ⚪ SECTION 9: HỆ SINH THÁI DỊCH VỤ LIÊN KẾT (#related-products) */}
      <DedicatedComputeRelatedProducts currentMarket={currentMarket} />

      {/* Lead / Quote Registration Modal */}
      <CloudServerQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        currentMarket={currentMarket}
        currency={currentMarket.currency}
        selectedConfig={
          selectedConfig
            ? {
                vcpu: selectedConfig.vcpu || 64,
                ram: selectedConfig.ram || 128,
                storage: selectedConfig.storage || 2000,
                ipCount: selectedConfig.ipCount || 1,
                bandwidthMbps: 1000,
                osType: 'linux',
                billingCycleMonths: selectedConfig.billingCycleMonths || 12,
                packageName: selectedConfig.packageName || 'Viettel Server Leasing',
              }
            : null
        }
      />
    </div>
  );
};
