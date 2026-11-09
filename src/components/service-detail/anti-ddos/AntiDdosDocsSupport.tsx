import React from 'react';
import { BookOpen, Headset, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface AntiDdosDocsSupportProps {
  currentMarket?: SEAMarket;
  onOpenSupport?: () => void;
}

export const AntiDdosDocsSupport: React.FC<AntiDdosDocsSupportProps> = ({
  currentMarket,
  onOpenSupport,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'TECHNICAL RESOURCES & SUPPORT' : 'TÀI LIỆU & HỖ TRỢ',
    headline: isLaos 
      ? 'Explore Technical Documentation & Support Center' 
      : 'Khám phá tài liệu & trung tâm hỗ trợ',
    desc: isLaos
      ? 'Detailed technical deployment guides, configuration manuals, and round-the-clock expert support available 24/7.'
      : 'Hướng dẫn kỹ thuật chi tiết, tài liệu cấu hình và đội ngũ chuyên gia Viettel Anti-DDoS luôn sẵn sàng hỗ trợ bạn 24/7.',
    docTitle: isLaos ? 'Technical Documentation & Guides' : 'Tài liệu Kỹ thuật & Hướng dẫn (Documentation)',
    docDesc: isLaos
      ? 'Comprehensive guides on IP protection provisioning, real-time portal monitoring, and technical mitigation datasheets.'
      : 'Tra cứu tài liệu hướng dẫn khai báo dải IP bảo vệ, hướng dẫn sử dụng Web Portal giám sát và đặc tả kỹ thuật chi tiết.',
    docLink: isLaos ? 'Access Knowledge Base' : 'Truy cập tài liệu kỹ thuật',
    supportTitle: isLaos ? '24/7 Technical Support Center' : 'Trung tâm Kênh Hỗ trợ 24/7 (Support Center)',
    supportDesc: isLaos
      ? 'Submit emergency support tickets, track attack incident status, and receive direct phone hotline assistance 24/7/365.'
      : 'Gửi yêu cầu hỗ trợ sự cố khẩn cấp, tra cứu trạng thái xử lý và nhận trợ giúp trực tiếp 24/7/365 từ đội ngũ kỹ sư bảo mật.',
    supportLink: isLaos ? 'Contact Support Center' : 'Liên hệ trung tâm hỗ trợ',
  };

  return (
    <section 
      id="docs-support" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight mb-2">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* 2 Big Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Documentation */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[var(--vidc-color-brand-red)] transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                {t.docTitle}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.docDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <VIDCAnchor 
                href="https://docs.vtidc-test.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--vidc-color-brand-red)] hover:underline"
              >
                <span>{t.docLink}</span>
                <ArrowUpRight className="w-4 h-4" />
              </VIDCAnchor>
            </div>
          </div>

          {/* Card 2: Support Center */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[var(--vidc-color-brand-red)] transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                <Headset className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                {t.supportTitle}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.supportDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <VIDCNativeButton 
                type="button"
                onClick={onOpenSupport}
                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--vidc-color-brand-red)] hover:underline cursor-pointer"
              >
                <span>{t.supportLink}</span>
                <ArrowUpRight className="w-4 h-4" />
              </VIDCNativeButton>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
