import React from 'react';
import { BookOpen, Headset, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface CloudWafDocsSupportProps {
  currentMarket?: SEAMarket;
}

export const CloudWafDocsSupport: React.FC<CloudWafDocsSupportProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'TECHNICAL RESOURCES & SUPPORT' : 'TÀI LIỆU & HỖ TRỢ',
    headline: isLaos ? 'Explore Documentation & Support Center' : 'Khám Phá Tài Liệu & Trung Tâm Hỗ Trợ',
    desc: isLaos 
      ? 'Comprehensive technical configuration guidelines, DNS cutover runbooks, and dedicated 24/7/365 Emergency Response Team (ERT) engineers ready to triage any incident.'
      : 'Hướng dẫn cấu hình kỹ thuật chi tiết, quy trình chuyển hướng DNS an toàn và đội ngũ chuyên gia phản ứng khẩn cấp ERT trực chiến 24/7/365.',
    card1Title: isLaos ? 'Technical Documentation & Guides (Documentation)' : 'Tài liệu Kỹ thuật & Hướng dẫn (Documentation)',
    card1Desc: isLaos 
      ? 'Step-by-step DNS record redirection guide, WAF rule customization, Rate Limiting thresholds, Bot Protection policy setup, and REST API integration playbooks.'
      : 'Hướng dẫn cấu hình trỏ bản ghi DNS, tài liệu hướng dẫn quản trị WAF Rules, cấu hình giới hạn tốc độ (Rate Limit), chính sách Bot Protection và tích hợp API.',
    card1Link: isLaos ? 'View technical documentation' : 'Xem tài liệu kỹ thuật',
    card2Title: isLaos ? '24/7 Support Channels & ERT (Support Center)' : 'Trung tâm Kênh Hỗ trợ 24/7 (Support Center)',
    card2Desc: isLaos 
      ? '24/7/365 toll-free hotline 1800 8088, ticketing portal, and dedicated Emergency Response Team (ERT) engineers ready for urgent cyber incident triage.'
      : 'Tổng đài hỗ trợ kỹ thuật 1800 8088, hỗ trợ 24x7x365 cùng đội ngũ chuyên trách ứng cứu sự cố bảo mật khẩn cấp (Emergency Response Team).',
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
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {t.desc}
          </p>
        </div>

        {/* Grid 2 Card Entry chuẩn Cloud Server */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Documentation */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[var(--vidc-color-brand-red)] transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                {t.card1Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {t.card1Desc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <VIDCAnchor
                href="https://docs.vtidc-test.com/cwaf/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--vidc-color-brand-red)] hover:underline"
              >
                <span>{t.card1Link}</span>
                <ArrowUpRight className="w-4 h-4" />
              </VIDCAnchor>
            </div>
          </div>

          {/* Card 2: ERT & Support Center */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[var(--vidc-color-brand-red)] transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                <Headset className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                {t.card2Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {t.card2Desc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <VIDCAnchor
                href="https://support.vtidc-test.com/incident/"
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
