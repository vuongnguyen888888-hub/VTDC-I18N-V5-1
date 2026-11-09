import React from 'react';
import { BookOpen, Headphones, ArrowRight, ExternalLink } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface HybridConnectDocsSupportProps {
  currentMarket?: SEAMarket;
}

export const HybridConnectDocsSupport: React.FC<HybridConnectDocsSupportProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'TECHNICAL RESOURCES & HELP' : 'TÀI NGUYÊN KỸ THUẬT & TRỢ GIÚP',
    headline: isLaos 
      ? 'Technical Resources & Connection Support Channels' 
      : 'Tài Nguyên Kỹ Thuật & Kênh Hỗ Trợ Đấu Nối',
    docTitle: isLaos ? 'Network Documentation Center' : 'Trung Tâm Tài Liệu Mạng (Network Documentation)',
    docDesc: isLaos
      ? 'Comprehensive configuration guides for BGP/Static Routing, VLAN tagging, Anti-MAC Spoofing policies, and Hybrid Connect physical port cabling schematics.'
      : 'Hướng dẫn cấu hình định tuyến BGP/Static Route, phân bổ VLAN, thiết lập cấu hình chống giả mạo MAC và sơ đồ đấu nối cổng Hybrid Connect.',
    docBtn: isLaos ? 'Explore Documentation →' : 'Khám phá tài liệu →',
    supportTitle: isLaos ? 'Enterprise NOC 24/7 Support Center' : 'Trung Tâm Hỗ Trợ Kỹ Thuật (Enterprise NOC 24/7)',
    supportDesc: isLaos
      ? 'Dedicated network engineers available for link attenuation testing, traffic monitoring, and incident mitigation 24/7/365 via Hotline 1800 8088.'
      : 'Đội ngũ kỹ sư mạng chuyên trách hỗ trợ đo kiểm suy hao kênh truyền, giám sát lưu lượng và xử lý sự cố 24/7/365 qua Hotline 1800 8088.',
    supportBtn: isLaos ? 'Submit Support Request →' : 'Gửi yêu cầu hỗ trợ →',
  };

  return (
    <section 
      id="docs-support" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header (Centered) */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* Grid 2 Card Entry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Network Documentation */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                {t.docTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.docDesc}
              </p>
            </div>

            <div>
              <VIDCAnchor
                href="/resources/documentation"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--vidc-color-brand-red)] hover:underline"
              >
                <span>{t.docBtn}</span>
                <ExternalLink className="w-4 h-4" />
              </VIDCAnchor>
            </div>
          </div>

          {/* Card 2: Enterprise NOC 24/7 */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                {t.supportTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.supportDesc}
              </p>
            </div>

            <div>
              <VIDCAnchor
                href="/contact"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--vidc-color-brand-red)] hover:underline"
              >
                <span>{t.supportBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </VIDCAnchor>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
