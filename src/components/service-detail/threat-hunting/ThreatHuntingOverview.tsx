import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface ThreatHuntingOverviewProps {
  currentMarket?: SEAMarket;
}

export const ThreatHuntingOverview: React.FC<ThreatHuntingOverviewProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isLaos
      ? 'Comprehensive Threat Hunting & Deep Behavioral Investigation'
      : 'Tổng Quan Năng Lực Săn Lùng Mối Đe Dọa Viettel Threat Hunting',
    desc1: isLaos
      ? 'Viettel Threat Hunting transitions organizations from passive alert response to hypothesis-driven proactive pursuit, proactively uncovering cyber threats before they cause operational harm.'
      : 'Khác với các giải pháp phòng thủ thụ động chỉ kích hoạt khi có cảnh báo, Viettel Threat Hunting chuyển dịch tổ chức sang thế trận chủ động đón đầu, truy vết và triệt tiêu các mối nguy tiềm ẩn trước khi chúng gây hại cho hệ sinh thái công nghệ thông tin.',
    desc2: isLaos
      ? 'Combining elite cyber analysts, exclusive Threat Intelligence data from Viettel network, and behavioral models aligned with the MITRE ATT&CK framework to expose stealthy adversary techniques.'
      : 'Dịch vụ kết hợp đội ngũ chuyên gia săn lùng mối đe dọa hàng đầu, nguồn dữ liệu tình báo độc quyền Viettel Threat Intelligence và công nghệ giám sát hành vi chuyên sâu theo chuẩn MITRE ATT&CK để lột trần mọi kỹ thuật lẩn trốn tinh vi.',
    highlight1Title: isLaos ? 'Stealth Threat Detection' : 'Phát Hiện Mối Nguy Tàng Hình',
    highlight1Desc: isLaos
      ? 'Uncovers fileless malware, Living off the Land (LotL) abuse, and zero-day backdoors completely bypassed by conventional antivirus.'
      : 'Truy tìm các kỹ thuật tấn công không dùng file (Fileless), lạm dụng công cụ hợp trị (LotL) và backdoor mà Antivirus hay SIEM truyền thống bỏ sót.',
    highlight2Title: isLaos ? 'Proactive Defense-in-Depth' : 'Bảo Vệ Đón Đầu & Rút Ngắn MTTD',
    highlight2Desc: isLaos
      ? 'Dramatically reduces Mean Time to Detect (MTTD) from months to hours, stopping lateral movement before ransomware encryption.'
      : 'Rút ngắn tối đa thời gian phát hiện từ hàng tháng xuống chỉ vài giờ, chặn đứng hành vi di chuyển ngang trước khi kẻ tấn công kịp mã hóa dữ liệu.',
    highlight3Title: isLaos ? 'Knowledge & Playbook Transfer' : 'Chuyển Giao Tri Thức & Tinh Chỉnh Luật',
    highlight3Desc: isLaos
      ? 'Removes false positive alerts, refines detection rules, and upgrades incident response playbooks for internal security teams.'
      : 'Xóa bỏ bão cảnh báo giả (Alert Fatigue), chuẩn hóa tập luật giám sát SIEM/EDR và nâng cấp quy trình ứng phó Playbook thực chiến cho đội ngũ nội bộ.',
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

          {/* Cột Phải (Video YouTube nhúng hoặc Hình ảnh phân tích) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0"
                title="Viettel Threat Hunting Overview"
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
