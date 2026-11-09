import React from 'react';
import { BookOpen, Headphones, ArrowRight, ExternalLink, ShieldCheck, Terminal } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface CloudFileStorageDocsSupportProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const CloudFileStorageDocsSupport: React.FC<CloudFileStorageDocsSupportProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'RESOURCES & TECHNICAL SUPPORT' : 'TÀI LIỆU KỸ THUẬT & TRỢ GIÚP',
    headline: isLaos ? 'Technical Resources & Dedicated Support Channels' : 'Tài Nguyên Kỹ Thuật & Kênh Hỗ Trợ Chuyên Biệt',
    desc: isLaos
      ? 'Comprehensive technical guides and 24/7/365 direct engineering assistance for seamless deployment.'
      : 'Tài liệu hướng dẫn kết nối chuẩn NFS & CIFS/SMB cùng hệ thống hỗ trợ kỹ thuật trực tiếp 24/7/365 từ các kỹ sư Viettel IDC.',
    card1Title: isLaos ? 'File System Configuration & Mount Guide' : 'Hướng Dẫn Cấu Hình & Mount File System (Technical Docs)',
    card1Desc: isLaos
      ? 'Step-by-step guides on connecting and mounting file systems via NFS on Linux and CIFS/SMB on Windows Server, plus granular directory permission management.'
      : 'Cung cấp hướng dẫn chi tiết cách kết nối và gắn kết (mount) hệ thống file qua giao thức NFS trên Linux và CIFS/SMB trên Windows Server, hướng dẫn phân quyền bảo mật thư mục.',
    card1Link: isLaos ? 'View Technical Documentation →' : 'Xem Tài Liệu Kỹ Thuật →',
    card2Title: isLaos ? '24/7 Technical Support Center' : 'Trung Tâm Hỗ Trợ Kỹ Thuật 24/7 (Support Center)',
    card2Desc: isLaos
      ? 'Viettel IDC solution engineers available around the clock to assist in storage architecture design and incident resolution 24/7/365 via Hotline 1800 8088 or Ticket Portal.'
      : 'Đội ngũ kỹ sư giải pháp Viettel IDC thường trực sẵn sàng tư vấn thiết kế hạ tầng lưu trữ và giải quyết sự cố 24/7/365 qua Hotline 1800 8088 hoặc hệ thống Ticket.',
    card2Link: isLaos ? 'Submit Support Request →' : 'Gửi Yêu Cầu Hỗ Trợ →',
  };

  return (
    <section id="docs-support" className="py-16 md:py-24 bg-[var(--vidc-legacy-hex-f4f4f4)] text-slate-800 border-t border-slate-200">
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[var(--vidc-color-brand-red)] text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-snug">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            {t.desc}
          </p>
        </div>

        {/* 2-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Technical Docs */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 transition-all hover:shadow-md flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                {t.card1Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.card1Desc}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <VIDCAnchor
                href="https://viettelidc.com.vn/ho-tro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--vidc-color-brand-red)] hover:underline"
              >
                <span>{t.card1Link}</span>
                <ExternalLink className="w-4 h-4" />
              </VIDCAnchor>
            </div>
          </div>

          {/* Card 2: 24/7 Support Center */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 transition-all hover:shadow-md flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                {t.card2Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.card2Desc}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <VIDCNativeButton
                type="button"
                onClick={onOpenConsult}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--vidc-color-brand-red)] hover:underline cursor-pointer"
              >
                <span>{t.card2Link}</span>
                <ArrowRight className="w-4 h-4" />
              </VIDCNativeButton>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
