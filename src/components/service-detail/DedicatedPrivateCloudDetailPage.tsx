import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { DedicatedPrivateCloudHero } from './dedicated-private-cloud/DedicatedPrivateCloudHero';
import { DedicatedPrivateCloudStickyNav } from './dedicated-private-cloud/DedicatedPrivateCloudStickyNav';
import { DedicatedPrivateCloudOverview } from './dedicated-private-cloud/DedicatedPrivateCloudOverview';
import { DedicatedPrivateCloudEstimator } from './dedicated-private-cloud/DedicatedPrivateCloudEstimator';
import { DedicatedPrivateCloudCapabilities } from './dedicated-private-cloud/DedicatedPrivateCloudCapabilities';
import { DedicatedPrivateCloudBenefits } from './dedicated-private-cloud/DedicatedPrivateCloudBenefits';
import { DedicatedPrivateCloudUseCases } from './dedicated-private-cloud/DedicatedPrivateCloudUseCases';
import { DedicatedPrivateCloudFaq } from './dedicated-private-cloud/DedicatedPrivateCloudFaq';
import { DedicatedPrivateCloudFooterCta } from './dedicated-private-cloud/DedicatedPrivateCloudFooterCta';
import { DedicatedPrivateCloudDocsSupport } from './dedicated-private-cloud/DedicatedPrivateCloudDocsSupport';
import { DedicatedPrivateCloudRelatedProducts } from './dedicated-private-cloud/DedicatedPrivateCloudRelatedProducts';
import { DedicatedPrivateCloudQuoteModal, DedicatedHpcConfigModalData } from './dedicated-private-cloud/DedicatedPrivateCloudQuoteModal';

interface DedicatedPrivateCloudDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
}

export const DedicatedPrivateCloudDetailPage: React.FC<DedicatedPrivateCloudDetailPageProps> = ({
  currentMarket,
  onNavigateHome,
}) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState<DedicatedHpcConfigModalData | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenGeneralQuote = (config?: DedicatedHpcConfigModalData) => {
    setModalConfig(config || null);
    setIsQuoteModalOpen(true);
  };

  return (
    <div 
      id="service-detail-viettel-dedicated-private-cloud-hpc" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-005"
      data-vidc-pillar="compute"
    >
      {/* SECTION 0: HERO SECTION (Mở đầu & Định vị giá trị) */}
      <DedicatedPrivateCloudHero
        currentMarket={currentMarket}
        onOpenQuote={() => handleOpenGeneralQuote({ packageName: 'Gói Cụm HPC Cluster (Combo 03 Nodes)' })}
        onNavigateHome={onNavigateHome}
      />

      {/* 📌 STICKY NAVIGATION BAR (Thanh điều hướng cố định) */}
      <DedicatedPrivateCloudStickyNav
        currentMarket={currentMarket}
        onOpenQuote={() => handleOpenGeneralQuote()}
      />

      {/* ⚪ SECTION 1: TỔNG QUAN DỊCH VỤ (#overview - Nền Trắng #FFFFFF) */}
      <DedicatedPrivateCloudOverview
        currentMarket={currentMarket}
        onOpenQuote={() => handleOpenGeneralQuote({ packageName: 'Tư Vấn Kiến Trúc HPC Multi-AZ' })}
      />

      {/* 🔘 SECTION 2: BẢNG GIÁ & DỰ TOÁN CHI PHÍ (#pricing - Nền Xám #F4F4F4) */}
      <DedicatedPrivateCloudEstimator
        currentMarket={currentMarket}
        onOpenQuote={() => handleOpenGeneralQuote({ packageName: 'Đăng Ký Báo Giá Cụm HPC' })}
      />

      {/* ⚪ SECTION 3: TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET (#features - Nền Trắng #FFFFFF) */}
      <DedicatedPrivateCloudCapabilities
        currentMarket={currentMarket}
        onOpenQuote={() => handleOpenGeneralQuote({ packageName: 'Tư Vấn Thông Số Kỹ Thuật Tier HPC' })}
      />

      {/* 🔘 SECTION 4: LỢI ÍCH DOANH NGHIỆP (#benefits - Nền Xám #F4F4F4) */}
      <DedicatedPrivateCloudBenefits
        currentMarket={currentMarket}
        onOpenQuote={() => handleOpenGeneralQuote({ packageName: 'Khảo Sát Tối Ưu TCO & Hiệu Năng HPC' })}
      />

      {/* ⚪ SECTION 5: KỊCH BẢN ỨNG DỤNG THỰC TẾ (#use-cases - Nền Trắng #FFFFFF) */}
      <DedicatedPrivateCloudUseCases
        currentMarket={currentMarket}
        onOpenQuote={() => handleOpenGeneralQuote({ packageName: 'Tư Vấn Kịch Bản Triển Khai HPC' })}
      />

      {/* 🔘 SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq - Nền Xám #F4F4F4) */}
      <DedicatedPrivateCloudFaq
        currentMarket={currentMarket}
        onOpenQuote={() => handleOpenGeneralQuote({ packageName: 'Tư Vấn Giải Đáp Kỹ Thuật HPC' })}
      />

      {/* 🔴 SECTION 7: KHỐI CHUYỂN ĐỔI CHÍNH (Bottom CTA - Nền Đỏ var(--vidc-color-brand-red)) */}
      <DedicatedPrivateCloudFooterCta
        currentMarket={currentMarket}
        onOpenQuote={() => handleOpenGeneralQuote({ packageName: 'Đăng Ký Tư Vấn Kiến Trúc HPC Ngay' })}
      />

      {/* 🔘 SECTION 8: TÀI LIỆU KỸ THUẬT & TRỢ GIÚP (#docs-support - Nền Xám #F4F4F4) */}
      <DedicatedPrivateCloudDocsSupport
        currentMarket={currentMarket}
        onOpenQuote={() => handleOpenGeneralQuote({ packageName: 'Yêu Cầu Tài Liệu & Hỗ Trợ HPC' })}
      />

      {/* ⚪ SECTION 9: HỆ SINH THÁI SẢN PHẨM LIÊN QUAN (Nền Trắng #FFFFFF) */}
      <DedicatedPrivateCloudRelatedProducts
        currentMarket={currentMarket}
        onOpenQuote={() => handleOpenGeneralQuote({ packageName: 'Hệ Sinh Thái Dịch Vụ Bổ Trợ HPC' })}
      />

      {/* Lead / Quote Registration Modal */}
      <DedicatedPrivateCloudQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        selectedConfig={modalConfig}
        currency={currentMarket.currency}
        currentMarket={currentMarket}
      />
    </div>
  );
};
