import React from 'react';
import { BookOpen, Headset, ExternalLink, ArrowRight, Phone } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface CloudConnectDocsSupportProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const CloudConnectDocsSupport: React.FC<CloudConnectDocsSupportProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'DOCUMENTATION & SUPPORT' : 'TÀI LIỆU & HỖ TRỢ',
    headline: isLaos
      ? 'Technical Resources & 24/7 Expert Support'
      : 'Tài Liệu Kỹ Thuật & Kênh Hỗ Trợ 24/7',
  };

  return (
    <section 
      id="docs-support" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* 2 Card Entry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: Documentation */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-4 hover:border-slate-300 transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                {isLaos ? 'Technical Documentation Center' : 'Trung Tâm Tài Liệu Kỹ Thuật'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isLaos
                  ? 'Comprehensive guides for BGP Routing, VLAN/VIF setup, AWS Direct Connect, Azure ExpressRoute, and Google Cloud Interconnect.'
                  : 'Hướng dẫn chi tiết định tuyến BGP Routing, thiết lập VLAN / Virtual Interface (VIF), cấu hình kết nối AWS Direct Connect, Azure ExpressRoute và Google Cloud.'}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/60">
              <VIDCAnchor
                href="https://docs.vtidc-test.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline"
              >
                <span>{isLaos ? 'Explore Documentation' : 'Khám phá tài liệu'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </VIDCAnchor>
            </div>
          </div>

          {/* Card 2: Enterprise Support */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-4 hover:border-slate-300 transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                <Headset className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                {isLaos ? '24/7 Enterprise Engineering Support' : 'Trung Tâm Hỗ Trợ Doanh Nghiệp 24/7'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isLaos
                  ? 'Dedicated telecom engineers monitoring optical paths, proactive latency alerts, and rapid emergency response 24/7/365.'
                  : 'Đội ngũ kỹ sư mạng chuyên trách hỗ trợ giám sát đường truyền, phản hồi và xử lý sự cố 24/7/365 qua hệ thống Ticket và Hotline 1800 8088.'}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
              <VIDCNativeButton
                type="button"
                onClick={onOpenConsult}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline"
              >
                <span>{isLaos ? 'Submit Request' : 'Gửi yêu cầu hỗ trợ'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </VIDCNativeButton>

              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700">
                <Phone className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)]" />
                <span>1800 8088</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

