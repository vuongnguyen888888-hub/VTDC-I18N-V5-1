import React from 'react';
import { BookOpen, Headset, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface ColocationDocsSupportProps {
  currentMarket?: SEAMarket;
  onOpenSupportModal?: () => void;
}

export const ColocationDocsSupport: React.FC<ColocationDocsSupportProps> = ({
  currentMarket,
}) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'DOCS & SUPPORT' : 'TÀI LIỆU & HỖ TRỢ',
    headline: isLaos ? 'Technical Resources & Customer Support Channels' : 'Tài Nguyên Kỹ Thuật & Kênh Hỗ Trợ Khách Hàng',
    card1Title: 'Quy Định Ra Vào Data Center & Hướng Dẫn Kỹ Thuật',
    card1Desc: 'Cung cấp tài liệu quy chuẩn lắp đặt thiết bị vào tủ rack, quy trình đăng ký vào phòng máy và chính sách an toàn thông tin.',
    card1Link: 'Xem Hướng Dẫn Chi Tiết →',
    card2Title: 'Trung Tâm Hỗ Trợ Kỹ Thuật (NOC 24/7)',
    card2Desc: 'Tiếp nhận yêu cầu mở cửa phòng máy, xử lý sự cố nguồn/mạng 24/7/365 qua Hotline 1800 8088 hoặc hệ thống Portal.',
    card2Link: 'Gửi Yêu Cầu Hỗ Trợ →',
  };

  return (
    <section 
      id="docs-support" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f8fafc)] text-[var(--vidc-legacy-hex-0f172a)] border-b border-slate-200"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* Grid 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[var(--vidc-color-brand-red)] transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-0f172a)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors tracking-tight">
                {t.card1Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {t.card1Desc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <VIDCAnchor
                href="https://docs.vtidc-test.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-extrabold text-[var(--vidc-color-brand-red)] hover:underline"
              >
                <span>{t.card1Link}</span>
              </VIDCAnchor>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[var(--vidc-color-brand-red)] transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                <Headset className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-0f172a)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors tracking-tight">
                {t.card2Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {t.card2Desc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <VIDCAnchor
                href="https://support.vtidc-test.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-extrabold text-[var(--vidc-color-brand-red)] hover:underline"
              >
                <span>{t.card2Link}</span>
              </VIDCAnchor>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
