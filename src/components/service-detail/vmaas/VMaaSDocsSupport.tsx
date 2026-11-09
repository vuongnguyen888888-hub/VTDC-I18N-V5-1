import React from 'react';
import { BookOpen, Headset, ArrowUpRight, Sparkles } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface VMaaSDocsSupportProps {
  currentMarket?: SEAMarket;
  onOpenQuote?: () => void;
}

export const VMaaSDocsSupport: React.FC<VMaaSDocsSupportProps> = ({ currentMarket, onOpenQuote }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'DOCS & SUPPORT' : 'TÀI LIỆU & HỖ TRỢ',
    headline: isLaos ? 'Explore Documentation & Help Center' : 'Khám phá tài liệu & trung tâm hỗ trợ',
    subtitle: isLaos
      ? 'Comprehensive API integration guides, OpenAI SDK quickstarts, and 24/7 AI solution architects ready to assist.'
      : 'Hướng dẫn tích hợp API, OpenAI SDK và đội ngũ kỹ sư giải pháp AI Viettel IDC luôn sẵn sàng đồng hành cùng bạn 24/7.',
    docTitle: isLaos ? 'Technical Documentation & API Specs' : 'Tài liệu Kỹ thuật & API Specs',
    docDesc: isLaos
      ? 'Full REST API references, OpenAI SDK drop-in guides, Python/NodeJS examples, and Prompt Engineering handbooks.'
      : 'Tài liệu tích hợp đầy đủ các Endpoint chuẩn OpenAI, code mẫu Python / NodeJS / cURL và hướng dẫn tối ưu Prompt.',
    supportTitle: isLaos ? '24/7 AI Support Center' : 'Trung tâm Kênh Hỗ trợ 24/7',
    supportDesc: isLaos
      ? 'Dedicated technical engineers assist with MLOps pipeline optimization, prompt tuning, and SLA guaranteed incident response.'
      : 'Đội ngũ chuyên gia Viettel IDC sẵn sàng tư vấn tối ưu pipeline, hỗ trợ PoC thử nghiệm và xử lý sự cố kỹ thuật 24/7/365.',
    learnMore: isLaos ? 'View documentation' : 'Xem tài liệu kỹ thuật',
    contactSupport: isLaos ? 'Contact support' : 'Gửi yêu cầu hỗ trợ',
  };

  const docLinks = [
    { label: isLaos ? 'vMaaS API Quickstart Guide' : 'Hướng dẫn tích hợp vMaaS API qua OpenAI SDK', href: '#features' },
    { label: isLaos ? 'Python & NodeJS Code Samples' : 'Bộ mã nguồn mẫu Python, NodeJS và cURL', href: '#features' },
    { label: isLaos ? 'Enterprise RAG Best Practices' : 'Hướng dẫn xây dựng Kho tri thức Enterprise RAG với BGE-M3', href: '#use-cases' },
  ];

  const supportChannels = [
    { label: isLaos ? 'Technical Support Portal (Ticket 24/7)' : 'Cổng hỗ trợ kỹ thuật (Ticket Portal 24/7)', href: '#' },
    { label: isLaos ? 'Hotline: 1800 8088 (Toll-free)' : 'Hotline hỗ trợ miễn phí: 1800 8088 (Nhánh 1)', href: 'tel:18008088' },
    { label: isLaos ? 'Email: support@viettelidc.com.vn' : 'Email chuyên gia: support@viettelidc.com.vn', href: 'mailto:support@viettelidc.com.vn' },
  ];

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
            {t.subtitle}
          </p>
        </div>

        {/* 2-Column Grid Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Tài liệu Kỹ thuật */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                {t.docTitle}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.docDesc}
              </p>

              <div className="pt-2 space-y-2">
                {docLinks.map((link, idx) => (
                  <VIDCAnchor
                    key={idx}
                    href={link.href}
                    className="flex items-center justify-between text-xs text-slate-700 hover:text-[var(--vidc-color-brand-red)] font-bold py-1.5 border-b border-slate-100 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </VIDCAnchor>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <VIDCAnchor
                href="#features"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline"
              >
                <span>{t.learnMore}</span>
                <ArrowUpRight className="w-4 h-4" />
              </VIDCAnchor>
            </div>
          </div>

          {/* Card 2: Trung tâm Hỗ trợ */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                <Headset className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                {t.supportTitle}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.supportDesc}
              </p>

              <div className="pt-2 space-y-2">
                {supportChannels.map((channel, idx) => (
                  <VIDCAnchor
                    key={idx}
                    href={channel.href}
                    className="flex items-center justify-between text-xs text-slate-700 hover:text-[var(--vidc-color-brand-red)] font-bold py-1.5 border-b border-slate-100 transition-colors"
                  >
                    <span>{channel.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </VIDCAnchor>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <VIDCNativeButton
                type="button"
                onClick={onOpenQuote}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline cursor-pointer"
              >
                <span>{t.contactSupport}</span>
                <ArrowUpRight className="w-4 h-4" />
              </VIDCNativeButton>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
