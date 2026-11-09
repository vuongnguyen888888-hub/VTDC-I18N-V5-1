import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { VirtualSocHero } from './virtual-soc/VirtualSocHero';
import { VirtualSocStickyNav } from './virtual-soc/VirtualSocStickyNav';
import { VirtualSocOverview } from './virtual-soc/VirtualSocOverview';
import { VirtualSocPricing } from './virtual-soc/VirtualSocPricing';
import { VirtualSocCapabilities } from './virtual-soc/VirtualSocCapabilities';
import { VirtualSocBenefits } from './virtual-soc/VirtualSocBenefits';
import { VirtualSocUseCases } from './virtual-soc/VirtualSocUseCases';
import { VirtualSocFaq } from './virtual-soc/VirtualSocFaq';
import { VirtualSocFooterCta } from './virtual-soc/VirtualSocFooterCta';
import { VirtualSocDocsSupport } from './virtual-soc/VirtualSocDocsSupport';
import { VirtualSocRelatedProducts } from './virtual-soc/VirtualSocRelatedProducts';
import { VirtualSocQuoteModal } from './virtual-soc/VirtualSocQuoteModal';

interface VirtualSocDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
  onNavigateService?: (path: string) => void;
}

export const VirtualSocDetailPage: React.FC<VirtualSocDetailPageProps> = ({
  currentMarket,
  onNavigateHome,
  onNavigateService,
}) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [customNotes, setCustomNotes] = useState('');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenConsultModal = (notes?: string) => {
    setCustomNotes(notes || '');
    setIsQuoteModalOpen(true);
  };

  return (
    <div 
      id="service-detail-viettel-virtual-soc" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-036"
      data-vidc-pillar="security"
    >
      {/* SECTION 0: HERO SECTION (Mở đầu & Định vị giá trị) */}
      <VirtualSocHero
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Khách hàng đăng ký dùng thử / tư vấn Viettel Virtual SOC')}
        onNavigateHome={onNavigateHome}
      />

      {/* STICKY NAVIGATION BAR (Thanh điều hướng cố định) */}
      <VirtualSocStickyNav
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Đăng ký tư vấn dịch vụ vSOC')}
      />

      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview - Nền Trắng #FFFFFF) */}
      <VirtualSocOverview currentMarket={currentMarket} />

      {/* SECTION 2: BẢNG GIÁ & DỰ TOÁN CHI PHÍ (#pricing - Nền Xám #F4F4F4) */}
      <VirtualSocPricing
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
      />

      {/* SECTION 3: TÍNH NĂNG VƯỢT TRỘI & HỆ SINH THÁI GIẢI PHÁP (#features - Nền Trắng #FFFFFF) */}
      <VirtualSocCapabilities currentMarket={currentMarket} />

      {/* SECTION 4: LỢI ÍCH DOANH NGHIỆP (#benefits - Nền Xám #F4F4F4) */}
      <VirtualSocBenefits currentMarket={currentMarket} />

      {/* SECTION 5: MÔ HÌNH VẬN HÀNH THỰC TẾ (#use-cases - Nền Trắng #FFFFFF) */}
      <VirtualSocUseCases currentMarket={currentMarket} />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq - Nền Xám #F4F4F4) */}
      <VirtualSocFaq currentMarket={currentMarket} />

      {/* SECTION 7: KHỐI CHUYỂN ĐỔI CHÍNH (Bottom CTA - Nền Đỏ var(--vidc-color-brand-red)) */}
      <VirtualSocFooterCta
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Khách hàng đăng ký tư vấn & dùng thử vSOC')}
      />

      {/* SECTION 8: TÀI LIỆU KỸ THUẬT & TRỢ GIÚP (#docs-support - Nền Xám #F4F4F4) */}
      <VirtualSocDocsSupport
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Yêu cầu hỗ trợ kỹ thuật khẩn cấp vSOC')}
      />

      {/* SECTION 9: HỆ SINH THÁI SẢN PHẨM LIÊN QUAN (Nền Trắng #FFFFFF) */}
      <VirtualSocRelatedProducts
        currentMarket={currentMarket}
        onNavigateService={onNavigateService}
      />

      {/* Consultation & Quote Modal */}
      <VirtualSocQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        customNotes={customNotes}
        currentMarket={currentMarket}
      />
    </div>
  );
};
