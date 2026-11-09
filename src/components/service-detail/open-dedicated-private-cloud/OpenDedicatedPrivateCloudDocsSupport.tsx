import React from 'react';
import { BookOpen, Headset, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface OpenDedicatedPrivateCloudDocsSupportProps {
  currentMarket?: SEAMarket;
}

export const OpenDedicatedPrivateCloudDocsSupport: React.FC<OpenDedicatedPrivateCloudDocsSupportProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'DOCS & SUPPORT' : 'TÀI LIỆU & HỖ TRỢ',
    headline: isLaos ? 'Explore Documentation & Support Center' : 'Khám Phá Tài Liệu & Trung Tâm Hỗ Trợ',
    desc: isLaos 
      ? 'Detailed technical guides, OpenStack API documentation, and the Viettel Cloud expert team are always ready to support you 24/7.'
      : 'Kho tài liệu chuyên sâu, tài liệu tích hợp OpenStack API và kênh hỗ trợ kỹ thuật trực tiếp 24/7/365 từ các chuyên gia Viettel IDC.',
    card1Title: isLaos ? 'Technical Docs & OpenStack API' : 'Tài Liệu Hướng Dẫn Kỹ Thuật & OpenStack API',
    card1Desc: isLaos 
      ? 'Explore comprehensive guides on SDN network configuration, Horizon portal management, CLI/API integration, and Kubernetes VKS.'
      : 'Cung cấp đầy đủ hướng dẫn thiết lập mạng SDN, quản trị VM trên OpenStack Horizon, kết nối API/CLI và tích hợp Kubernetes VKS.',
    card1Link: isLaos ? 'View technical documentation' : 'Xem tài liệu kỹ thuật',
    card2Title: isLaos ? '24/7/365 Solution Engineering Support' : 'Trung Tâm Kênh Hỗ Trợ Kỹ Thuật 24/7/365',
    card2Desc: isLaos 
      ? 'Submit support tickets, architectural consultation, performance optimization, and direct assistance from Viettel IDC engineers.'
      : 'Gửi Ticket hỗ trợ, tư vấn tối ưu hiệu năng và nhận sự đồng hành trực tiếp từ đội ngũ kỹ sư giải pháp OpenStack của Viettel IDC.',
    card2Link: isLaos ? 'Submit a support request' : 'Gửi yêu cầu hỗ trợ',
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
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t.desc}
          </p>
        </div>

        {/* Grid 2 Card Entry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[var(--vidc-color-brand-red)] transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                {t.card1Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.card1Desc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <VIDCAnchor
                href="https://docs.vtidc-test.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--vidc-color-brand-red)] hover:underline"
              >
                <span>{t.card1Link}</span>
                <ArrowUpRight className="w-4 h-4" />
              </VIDCAnchor>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[var(--vidc-color-brand-red)] transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                <Headset className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                {t.card2Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.card2Desc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <VIDCAnchor
                href="https://support.vtidc-test.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--vidc-color-brand-red)] hover:underline"
              >
                <span>{t.card2Link}</span>
                <ArrowUpRight className="w-4 h-4" />
              </VIDCAnchor>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
