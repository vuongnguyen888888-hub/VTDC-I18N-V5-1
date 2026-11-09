import React from 'react';
import { BookOpen, Headset, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface VAPMDocsSupportProps {
  currentMarket?: SEAMarket;
}

export const VAPMDocsSupport: React.FC<VAPMDocsSupportProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'DOCS & TECHNICAL SUPPORT' : 'TÀI LIỆU & HỖ TRỢ',
    headline: isLaos 
      ? 'Explore Technical Documentation & Support Center' 
      : 'Khám phá tài liệu kỹ thuật & Trung tâm hỗ trợ vAPM',
    subtitle: isLaos
      ? 'SDK integration guides, APM agent deployment manuals, and dedicated 24/7 engineering support.'
      : 'Tài liệu hướng dẫn cài đặt Agent SDK, tích hợp Kubernetes và đội ngũ chuyên gia Viettel Cloud luôn sẵn sàng hỗ trợ bạn 24/7.',
    docTitle: isLaos ? 'Technical Docs & Agent SDK Guides' : 'Tài liệu Kỹ thuật & Hướng dẫn cài đặt Agent SDK',
    docDesc: isLaos
      ? 'Step-by-step documentation for instrumenting Java, .NET, Node.js, Python, Golang apps, Helm charts, and custom telemetry APIs.'
      : 'Kho tài liệu hướng dẫn tích hợp Agent cho Java, .NET, Node.js, Python, Golang, cấu hình Helm Chart trên Kubernetes và tài liệu API Telemetry.',
    docLink: isLaos ? 'Read Technical Docs' : 'Xem tài liệu hướng dẫn',
    supportTitle: isLaos ? '24/7/365 Dedicated Support Center' : 'Trung tâm Kênh Hỗ trợ Kỹ thuật 24/7/365',
    supportDesc: isLaos
      ? 'Direct access to Viettel IDC Tier-3 technical support engineers via Hotline 1800 8088, ticketing portal, and real-time live chat.'
      : 'Hỗ trợ kỹ thuật 24/7/365 qua tổng đài miễn cước 1800 8088, cổng tiếp nhận sự cố Ticket chuyên sâu và kênh tư vấn kỹ thuật trực tuyến.',
    supportLink: isLaos ? 'Access Support Portal' : 'Truy cập trung tâm hỗ trợ',
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
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* 2 Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Documentation Card */}
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

          {/* Support Center Card */}
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
              <VIDCAnchor
                href="https://support.vtidc-test.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--vidc-color-brand-red)] hover:underline"
              >
                <span>{t.supportLink}</span>
                <ArrowUpRight className="w-4 h-4" />
              </VIDCAnchor>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
