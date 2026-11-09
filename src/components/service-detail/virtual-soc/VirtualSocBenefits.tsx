import React from 'react';
import { Headset, Award, DollarSign, ShieldCheck, Zap, Rocket } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface VirtualSocBenefitsProps {
  currentMarket?: SEAMarket;
}

export const VirtualSocBenefits: React.FC<VirtualSocBenefitsProps> = ({
  currentMarket,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'CORE BENEFITS' : 'LỢI ÍCH CỐT LÕI',
    headline: isLaos 
      ? 'Why Choose Viettel Virtual SOC?' 
      : 'Tại sao doanh nghiệp lựa chọn Viettel Virtual SOC?',
  };

  const benefits = [
    {
      icon: Headset,
      title: isLaos ? '24/7/365 Continuous SOC Surveillance' : 'Giám sát trực chiến 24/7/365',
      desc: isLaos
        ? 'A dedicated cybersecurity incident response team monitoring continuously with an average triage time of under 15 minutes.'
        : 'Đội ngũ chuyên gia an ninh mạng theo dõi liên tục, thời gian tiếp nhận sự cố dưới 15 phút, bảo vệ hệ thống không gián đoạn.',
    },
    {
      icon: Award,
      title: isLaos ? 'International Standard Infrastructure' : 'Hạ tầng đạt chuẩn quốc tế',
      desc: isLaos
        ? 'Hosted in Viettel IDC Data Centers certified for ANSI/TIA-942 Rated 3, ISO 27001, ISO 27017, and PCI-DSS compliance.'
        : 'Đặt tại các Trung tâm dữ liệu của Viettel IDC đạt chuẩn ANSI/TIA-942 Rated 3, chứng nhận ISO 27001, ISO 27017 và PCI-DSS.',
    },
    {
      icon: DollarSign,
      title: isLaos ? 'Flexible & Optimized TCO Budget' : 'Tối ưu ngân sách đầu tư',
      desc: isLaos
        ? 'Convert heavy CapEx hardware licensing and internal staffing overhead into flexible, predictable monthly OpEx tiers.'
        : 'Chuyển đổi mô hình đầu tư hạ tầng tốn kém sang hình thức thuê bao dịch vụ linh hoạt theo từng node, giảm tối đa TCO.',
    },
    {
      icon: ShieldCheck,
      title: isLaos ? 'Top Certified Cybersecurity Engineers' : 'Đội ngũ chuyên gia hàng đầu',
      desc: isLaos
        ? 'Directly safeguarded by certified specialists from Viettel Cyber Security holding premier CISSP, CEH, and OSCP credentials.'
        : 'Đội ngũ kỹ sư Công ty An ninh mạng Viettel (VCS) sở hữu các chứng chỉ bảo mật quốc tế hàng đầu (CISSP, CEH, OSCP).',
    },
    {
      icon: Zap,
      title: isLaos ? 'Strict Contractual SLA Commitments' : 'Cam kết chất lượng SLA rõ ràng',
      desc: isLaos
        ? 'Transparent contractual commitments for alert correlation, triage timelines, false-positive reduction, and threat containment.'
        : 'Quy định minh bạch về thời gian cảnh báo, vá lỗ hổng, tối ưu bộ luật và kiểm soát nguy cơ leo thang trên diện rộng.',
    },
    {
      icon: Rocket,
      title: isLaos ? 'Rapid Deployment & Intuitive Portal' : 'Triển khai nhanh & Quản trị đơn giản',
      desc: isLaos
        ? 'Cloud-native agent deployment takes minutes, backed by an intuitive single-pane web dashboard for unified enterprise visibility.'
        : 'Cấp phát Agent tức thì, giao diện Portal quản trị trực quan, đơn giản hóa việc theo dõi tình trạng an toàn thông tin.',
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

        {/* Grid 6 Card Lợi ích */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3"
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
