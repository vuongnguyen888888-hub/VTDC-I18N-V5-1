import React from 'react';
import { BookOpen, Headset, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface WorkspaceDocsSupportProps {
  currentMarket?: SEAMarket;
}

export const WorkspaceDocsSupport: React.FC<WorkspaceDocsSupportProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'DOCS & SUPPORT' : 'TÀI LIỆU & HỖ TRỢ',
    headline: isLaos ? 'Explore User Documentation & Support Hub' : 'Khám phá tài liệu hướng dẫn & trung tâm hỗ trợ',
    desc: isLaos 
      ? 'Detailed user guides, Outlook configuration steps, and Viettel IDC technical experts are ready 24/7/365.'
      : 'Hướng dẫn cài đặt email trên Outlook/Mobile, kết nối Viettel Drive, đồng bộ tệp tin và đội ngũ kỹ sư Viettel IDC luôn sẵn sàng hỗ trợ bạn 24/7/365.',
    card1Title: isLaos ? 'User Manuals & DNS Setup (Documentation)' : 'Tài liệu Hướng dẫn & Cấu hình (Documentation)',
    card1Desc: isLaos 
      ? 'Step-by-step setup guides for Outlook, Thunderbird, mobile email sync, DNS records (MX, SPF, DKIM), and Viettel Drive client.'
      : 'Tra cứu hướng dẫn cấu hình Email trên Outlook/Thunderbird/Mobile, thiết lập bản ghi tên miền (MX, SPF, DKIM) và đồng bộ tệp tin Viettel Drive.',
    card1Link: isLaos ? 'View setup guides' : 'Xem tài liệu hướng dẫn',
    card2Title: isLaos ? '24/7 Enterprise Support Center' : 'Trung tâm Hỗ trợ Kỹ thuật 24/7 (Support Center)',
    card2Desc: isLaos 
      ? 'Submit support tickets, request email migration assistance, and get direct troubleshooting from Viettel IDC engineers.'
      : 'Gửi Ticket hỗ trợ, yêu cầu di chuyển dữ liệu email và nhận sự trợ giúp trực tiếp từ đội ngũ kỹ sư Viettel IDC qua Hotline 1800 8088.',
    card2Link: isLaos ? 'Submit support request' : 'Gửi yêu cầu hỗ trợ',
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

        {/* Grid 2 Card Entry Tĩnh */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
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
