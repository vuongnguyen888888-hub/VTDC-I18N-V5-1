import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface VoiceBrandnameOverviewProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const VoiceBrandnameOverview: React.FC<VoiceBrandnameOverviewProps> = ({
  currentMarket,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isLaos 
      ? 'Enterprise Brand Identity Call Solution & Reputation Affirmation'
      : 'Giải pháp cuộc gọi thương hiệu định danh uy tín cho doanh nghiệp',
    desc1: isLaos
      ? 'Viettel Voice Brandname is a next-generation intelligent telecommunications service that enables organizations and enterprises to affix their official verified brand name directly to the customer’s phone screen when making outgoing calls.'
      : 'Viettel Voice Brandname là dịch vụ viễn thông thông minh cho phép các tổ chức và doanh nghiệp gắn tên định danh thương hiệu (Brandname) trực tiếp lên màn hình điện thoại của khách hàng khi thực hiện cuộc gọi thay vì dãy số thông thường.',
    desc2: isLaos
      ? 'By combining rigorous legal verification in compliance with governmental telecommunication regulations, the service completely eliminates the apprehension of spam or scam calls, delivers an exceptional professional image, and dramatically boosts call answer rates up to 92%+.'
      : 'Bằng việc kết hợp cùng quy trình xác thực pháp lý chặt chẽ theo quy định của Cục An toàn thông tin (Bộ TT&TT), dịch vụ loại bỏ hoàn toàn tâm lý lo ngại về cuộc gọi rác, nâng tầm hình ảnh chuyên nghiệp và gia tăng vượt bậc tỷ lệ bắt máy lên tới hơn 92%.',
    highlight1Title: isLaos ? 'Direct Verified Brand Display' : 'Hiển thị thương hiệu chính thống',
    highlight1Desc: isLaos
      ? 'Directly displays registered Brandname on recipient screens across all major Vietnamese carriers (Viettel, MobiFone, VinaPhone).'
      : 'Hiển thị trực tiếp Tên Thương Hiệu/Nhãn Hàng đã đăng ký trên màn hình người nhận của tất cả các nhà mạng lớn tại Việt Nam.',
    highlight2Title: isLaos ? 'Eliminate Spam Flags & Maximize Pickup' : 'Triệt tiêu chặn Spam & Tăng tỷ lệ nghe',
    highlight2Desc: isLaos
      ? 'Eliminates spam warnings, builds instant credibility, and increases call connection and engagement rates by over 300%.'
      : 'Triệt tiêu hoàn toàn nguy cơ bị gắn cờ cuộc gọi rác, tạo dựng độ tin cậy tức thì và nâng cao tỷ lệ bắt máy trên 90%.',
    highlight3Title: isLaos ? 'Universal PBX & CRM Integration' : 'Tích hợp đa tổng đài & Hệ thống CRM',
    highlight3Desc: isLaos
      ? 'Seamless connection with IP PBX, Cloud PBX, Call Center, Contact Center, and CRM platforms via standard SIP Trunking.'
      : 'Kết nối linh hoạt với mọi hệ thống IP PBX, Cloud PBX, Call Center và phần mềm quản trị CRM thông qua chuẩn SIP Trunking.',
  };

  return (
    <section 
      id="overview" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Eyebrow Badge & H2 Headline */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Cột Trái (Mô tả giải pháp) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              {t.desc1}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.desc2}
            </p>

            {/* 3 Key Highlights */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{t.highlight1Title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {t.highlight1Desc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{t.highlight2Title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {t.highlight2Desc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{t.highlight3Title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {t.highlight3Desc}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Cột Phải (Video YouTube nhúng / Visual Showcase matching CloudServerOverview) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0"
                title="Viettel Voice Brandname Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
