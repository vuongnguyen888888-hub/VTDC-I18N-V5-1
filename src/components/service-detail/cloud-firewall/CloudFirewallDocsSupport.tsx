import React from 'react';
import { BookOpen, Headset, ArrowUpRight, FileText } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface CloudFirewallDocsSupportProps {
  currentMarket?: SEAMarket;
  onOpenQuote?: () => void;
}

export const CloudFirewallDocsSupport: React.FC<CloudFirewallDocsSupportProps> = ({ 
  currentMarket,
  onOpenQuote 
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'TECHNICAL RESOURCES & SUPPORT' : 'TÀI LIỆU & HỖ TRỢ',
    headline: isLaos ? 'Technical Resources & Customer Support Channels' : 'Tài Nguyên Kỹ Thuật & Kênh Hỗ Trợ Khách Hàng',
    desc: isLaos
      ? 'Comprehensive deployment guide, Site-to-Site VPN configuration walkthroughs, and 24/7 incident response hotline.'
      : 'Tài liệu hướng dẫn triển khai thực tế, quy chuẩn thiết lập chính sách an ninh mạng và đội ngũ hỗ trợ khẩn cấp 24/7.',
    card1Title: isLaos ? 'Technical Documentation & Solution Datasheet' : 'Trung Tâm Tài Liệu Kỹ Thuật & Datasheet',
    card1Desc: isLaos
      ? 'Detailed documentation covering IPSec Site-to-Site VPN setup, App-ID and User-ID policy enforcement, and full technical specifications.'
      : 'Cung cấp tài liệu quy chuẩn hướng dẫn cấu hình VPN Site-to-Site, thiết lập chính sách bảo mật App-ID và Datasheet chi tiết giải pháp.',
    card1Link: isLaos ? 'Download Cloud Firewall Datasheet (PDF)' : 'Tải Datasheet Viettel Cloud Firewall (PDF)',
    card2Title: isLaos ? '24/7/365 Cyber Defense Support Channel' : 'Kênh Hỗ Trợ Chuyên Gia 24/7/365',
    card2Desc: isLaos
      ? 'Toll-free hotline 1800 8088 and dedicated cybersecurity engineers standing by to monitor, operate, and troubleshoot urgent network incidents.'
      : 'Tổng đài miễn cước 1800 8088 cùng đội ngũ kỹ sư an ninh mạng thường trực hỗ trợ vận hành, giám sát và xử lý tình huống bảo mật khẩn cấp.',
    card2Link: isLaos ? 'Submit Technical Support Request' : 'Gửi Yêu Cầu Hỗ Trợ Kỹ Thuật',
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

        {/* 2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[var(--vidc-color-brand-red)] transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                <FileText className="w-6 h-6" />
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
              <VIDCNativeButton
                type="button"
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--vidc-color-brand-red)] hover:underline cursor-pointer"
              >
                <span>{t.card2Link}</span>
                <ArrowUpRight className="w-4 h-4" />
              </VIDCNativeButton>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
