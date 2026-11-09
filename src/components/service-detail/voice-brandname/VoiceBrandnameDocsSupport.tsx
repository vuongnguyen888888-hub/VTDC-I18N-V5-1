import React from 'react';
import { BookOpen, Headset, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VoiceBrandnameDocsSupportProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const VoiceBrandnameDocsSupport: React.FC<VoiceBrandnameDocsSupportProps> = ({ 
  currentMarket,
  onOpenConsult 
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'DOCS & SUPPORT' : 'TÀI LIỆU & HỖ TRỢ',
    headline: isLaos ? 'Explore Documentation & Support Center' : 'Khám phá tài liệu & trung tâm hỗ trợ',
    desc: isLaos 
      ? 'Detailed technical guides, PBX integration documentation, and the Viettel Voice expert team are always ready to support you 24/7.'
      : 'Hướng dẫn hồ sơ pháp lý chi tiết, tài liệu kỹ thuật tích hợp SIP Trunking và đội ngũ chuyên gia Viettel Telecom & IDC luôn sẵn sàng hỗ trợ 24/7.',
    card1Title: isLaos ? 'Legal & SIP Trunking Docs (Documentation)' : 'Tài liệu Hồ sơ & Đấu nối SIP Trunking (Documentation)',
    card1Desc: isLaos 
      ? 'Search detailed legal registration guides for the Authority of Information Security (MIC) and SIP Trunking / Voice Gateway API manuals.'
      : 'Tra cứu quy trình chuẩn bị hồ sơ cấp chứng nhận tên định danh tại Cục ATTT và tài liệu kỹ thuật tích hợp Voice Gateway / SIP Trunk.',
    card1Link: isLaos ? 'View technical documentation' : 'Xem tài liệu kỹ thuật',
    card2Title: isLaos ? '24/7 Support Channel Center (Support Center)' : 'Trung tâm Kênh Hỗ trợ 24/7 (Support Center)',
    card2Desc: isLaos 
      ? 'Submit support tickets, test outbound call routes, and receive direct setup assistance from the Viettel IDC engineering team.'
      : 'Gửi Ticket hỗ trợ, kiểm tra định tuyến cuộc gọi trực tiếp và nhận tư vấn giải pháp từ đội ngũ kỹ sư viễn thông Viettel IDC.',
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
              <VIDCNativeButton
                type="button"
                onClick={onOpenConsult}
                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--vidc-color-brand-red)] hover:underline cursor-pointer"
              >
                <span>{t.card1Link}</span>
                <ArrowUpRight className="w-4 h-4" />
              </VIDCNativeButton>
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
                onClick={onOpenConsult}
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
