import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { useLanguage } from '../../context/LanguageContext';
import { CloudFirewallHero } from './cloud-firewall/CloudFirewallHero';
import { CloudFirewallStickyNav } from './cloud-firewall/CloudFirewallStickyNav';
import { CloudFirewallOverview } from './cloud-firewall/CloudFirewallOverview';
import { CloudFirewallPricing } from './cloud-firewall/CloudFirewallPricing';
import { CloudFirewallFeatures } from './cloud-firewall/CloudFirewallFeatures';
import { CloudFirewallBenefits } from './cloud-firewall/CloudFirewallBenefits';
import { CloudFirewallUseCases } from './cloud-firewall/CloudFirewallUseCases';
import { CloudFirewallFaq } from './cloud-firewall/CloudFirewallFaq';
import { CloudFirewallFooterCta } from './cloud-firewall/CloudFirewallFooterCta';
import { CloudFirewallDocsSupport } from './cloud-firewall/CloudFirewallDocsSupport';
import { CloudFirewallRelatedProducts } from './cloud-firewall/CloudFirewallRelatedProducts';
import { CloudFirewallQuoteModal } from './cloud-firewall/CloudFirewallQuoteModal';

interface CloudFirewallDetailPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  onNavigateService?: (path: string) => void;
}

/**
 * Viettel Cloud Firewall Detail Page
 * Standardized 100% per Architectural Framework TDV-01 & Design System Tokens matching /services/compute/cloud-server/ pattern
 */
export const CloudFirewallDetailPage: React.FC<CloudFirewallDetailPageProps> = ({
  currentMarket,
  onNavigateHome,
  onNavigateService,
}) => {
  const { currentLanguage } = useLanguage();
  const isVietnamese = currentLanguage === 'vn' || currentLanguage === 'vi';
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('Viettel Cloud Firewall');

  // Scroll to top on mount and set page title
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Never overwrite the translated SEO title supplied by Next.js on non-VI routes.
    if (isVietnamese) document.title = 'Viettel Cloud Firewall – Lá Chắn An Ninh Mạng Thế Hệ Mới Bảo Vệ Hạ Tầng Đám Mây Doanh Nghiệp | Viettel IDC';
  }, [isVietnamese]);

  const handleOpenQuote = (planName?: string) => {
    setSelectedPlan(planName || 'Viettel Cloud Firewall');
    setIsQuoteModalOpen(true);
  };

  return (
    <div 
      id="service-detail-viettel-cloud-firewall" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-CF-01"
      data-vidc-pillar="information-security"
    >
      {/* SECTION 0: HERO SECTION */}
      <CloudFirewallHero
        currentMarket={currentMarket}
        onOpenQuote={() => handleOpenQuote('Tư vấn dịch vụ Viettel Cloud Firewall')}
        onNavigateHome={onNavigateHome}
        onNavigateService={onNavigateService}
      />

      {/* STICKY NAVIGATION BAR */}
      <CloudFirewallStickyNav 
        currentMarket={currentMarket} 
        onOpenQuote={() => handleOpenQuote('Tư vấn dịch vụ Viettel Cloud Firewall')}
      />

      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview - Nền Trắng #FFFFFF) */}
      <CloudFirewallOverview currentMarket={currentMarket} />

      {/* SECTION 2: BẢNG GIÁ DỊCH VỤ (#pricing - Nền Xám #F4F4F4) */}
      <CloudFirewallPricing
        currentMarket={currentMarket}
        onOpenQuote={handleOpenQuote}
      />

      {/* SECTION 3: TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET (#features - Nền Trắng #FFFFFF) */}
      <CloudFirewallFeatures currentMarket={currentMarket} />

      {/* SECTION 4: LỢI ÍCH DOANH NGHIỆP (#benefits - Nền Xám #F4F4F4) */}
      <CloudFirewallBenefits currentMarket={currentMarket} />

      {/* SECTION 5: KỊCH BẢN ỨNG DỤNG THỰC TẾ (#use-cases - Nền Trắng #FFFFFF) */}
      <CloudFirewallUseCases currentMarket={currentMarket} />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq - Nền Xám #F4F4F4) */}
      <CloudFirewallFaq currentMarket={currentMarket} />

      {/* SECTION 7: KHỐI CHUYỂN ĐỔI CHÍNH (Bottom CTA - Nền Đỏ var(--vidc-color-brand-red)) */}
      <CloudFirewallFooterCta 
        currentMarket={currentMarket} 
        onOpenQuote={() => handleOpenQuote('Đăng ký nhận tư vấn & báo giá Cloud Firewall')}
      />

      {/* SECTION 8: TÀI LIỆU KỸ THUẬT & TRỢ GIÚP (#docs-support - Nền Xám #F4F4F4) */}
      <CloudFirewallDocsSupport 
        currentMarket={currentMarket} 
        onOpenQuote={() => handleOpenQuote('Yêu cầu tài liệu kỹ thuật Cloud Firewall')}
      />

      {/* SECTION 9: HỆ SINH THÁI SẢN PHẨM LIÊN QUAN (#related-products - Nền Trắng #FFFFFF) */}
      <CloudFirewallRelatedProducts 
        currentMarket={currentMarket} 
        onNavigateService={onNavigateService}
      />

      {/* SERVICE QUOTE MODAL */}
      <CloudFirewallQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        selectedPlan={selectedPlan}
        currentMarket={currentMarket}
      />
    </div>
  );
};
