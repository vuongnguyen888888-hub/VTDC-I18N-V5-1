import React from 'react';
import { Eye, ShieldCheck, Gauge, ShieldAlert, Headset, Award } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface ThreatHuntingBenefitsProps {
  currentMarket?: SEAMarket;
}

export const ThreatHuntingBenefits: React.FC<ThreatHuntingBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'CORE BENEFITS' : 'LỢI ÍCH CỐT LÕI',
    headline: isLaos ? 'Why Choose Viettel Threat Hunting?' : 'Tại sao lựa chọn Viettel Threat Hunting?',
  };

  const benefits = [
    {
      icon: Eye,
      title: isLaos ? 'Early Detection of Stealth Threats' : 'Phát hiện sớm & Triệt tiêu nguy cơ ẩn sâu',
      desc: isLaos
        ? 'Finds sophisticated intrusions that bypassed perimeter controls, neutralizing threats before any data loss occurs.'
        : 'Chủ động tìm ra các hành vi xâm nhập chưa từng bị cảnh báo, đón đầu và triệt tiêu kẻ tấn công trước khi xảy ra gián đoạn vận hành.',
    },
    {
      icon: ShieldCheck,
      title: isLaos ? 'Dramatically Reduces MTTD by 80%' : 'Rút ngắn 80% thời gian phát hiện (MTTD)',
      desc: isLaos
        ? 'Reduces attacker dwell time from months to hours, preventing ransomware deployment and exfiltration.'
        : 'Kéo giảm thời gian kẻ tấn công nằm vùng (Dwell Time) từ hàng trăm ngày xuống chỉ vài giờ, chặn đứng nguy cơ tống tiền mã hóa dữ liệu.',
    },
    {
      icon: Gauge,
      title: isLaos ? '75% Alert Fatigue Reduction' : 'Giảm 75% áp lực cảnh báo rác (Alert Fatigue)',
      desc: isLaos
        ? 'Cleans noisy telemetry and tunes SIEM/EDR detection rules so analysts can focus exclusively on real incidents.'
        : 'Loại bỏ hiện tượng bão cảnh báo giả, giúp đội ngũ SOC nội bộ giải phóng nguồn lực và tập trung 100% vào các mối nguy hiểm thực sự.',
    },
    {
      icon: ShieldAlert,
      title: isLaos ? 'Instant Containment & Evidence Preservation' : 'Khoanh vùng tức thời & Bảo toàn chứng cứ',
      desc: isLaos
        ? 'Rapidly isolates affected endpoints and preserves digital artifacts for thorough forensic analysis.'
        : 'Hỗ trợ cô lập máy trạm/máy chủ bị nhiễm chỉ trong vài phút, bảo toàn chứng cứ số nguyên vẹn phục vụ điều tra pháp lý và khắc phục triệt để.',
    },
    {
      icon: Headset,
      title: isLaos ? 'Elite Certified Hunters 24/7/365' : 'Đội ngũ chuyên gia tinh nhuệ 24/7/365',
      desc: isLaos
        ? 'Direct collaboration with top security researchers holding OSCP, SANS GIAC, and CISSP international certifications.'
        : 'Trực tiếp đồng hành cùng đội ngũ chuyên gia săn lùng mối đe dọa hàng đầu Việt Nam sở hữu các chứng chỉ danh giá quốc tế như OSCP, GIAC, CISSP.',
    },
    {
      icon: Award,
      title: isLaos ? 'SLA Commitment & Absolute Confidentiality' : 'Cam kết SLA & Bảo mật tuyệt đối',
      desc: isLaos
        ? 'Strict adherence to ISO 27001, NIST-CSF standards, and comprehensive non-disclosure agreements.'
        : 'Vận hành theo chuẩn quốc tế NIST-CSF, ISO 27001 với thỏa thuận bảo mật nghiêm ngặt (NDA) và chính sách cam kết chất lượng dịch vụ SLA cao nhất.',
    },
  ];

  return (
    <section 
      id="benefits" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* Grid 6 Cards Lợi ích matching CloudServerBenefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 hover:border-red-200 hover:shadow-md transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                  <IconComp className="w-5 h-5" />
                </div>

                <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
