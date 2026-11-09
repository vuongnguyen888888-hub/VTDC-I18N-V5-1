import React from 'react';
import { Zap, ShieldCheck, DollarSign, Headset, Award, Cloud } from 'lucide-react';
import { SEAMarket } from '../layout/UtilityBar';

interface CloudServerBenefitsProps {
  currentMarket?: SEAMarket;
}

export const CloudServerBenefits: React.FC<CloudServerBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'CORE BENEFITS' : 'LỢI ÍCH CỐT LÕI',
    headline: isLaos ? 'Why Choose Viettel Cloud Server?' : 'Tại sao lựa chọn Viettel Cloud Server?',
  };

  const benefits = [
    {
      icon: Zap,
      title: isLaos ? 'Speed & High Performance' : 'Tốc độ & Hiệu năng cao',
      desc: isLaos 
        ? '100% Enterprise NVMe/SSD storage provides outstanding IOPS read/write speeds.'
        : '100% ổ cứng NVMe/SSD Enterprise mang lại tốc độ đọc/ghi IOPS vượt trội.',
    },
    {
      icon: ShieldCheck,
      title: isLaos ? 'Maximum Safety & Security' : 'An toàn & Bảo mật tối đa',
      desc: isLaos 
        ? 'Integrated firewalls for Anti-DDoS protection, certified with international PCI-DSS & ISO 27001 standards.'
        : 'Tích hợp tường lửa bảo vệ Anti-DDoS, đạt chứng chỉ quốc tế PCI-DSS & ISO 27001.',
    },
    {
      icon: DollarSign,
      title: isLaos ? 'Flexible & Optimized Cost' : 'Chi phí linh hoạt & Tối ưu',
      desc: isLaos 
        ? 'Pay-as-you-go billing model based on actual resource usage, with no initial setup costs.'
        : 'Tính tiền theo nhu cầu thực tế (Pay-as-you-go), không chi phí khởi tạo ban đầu.',
    },
    {
      icon: Headset,
      title: isLaos ? '24/7/365 Technical Support' : 'Hỗ trợ kỹ thuật 24/7/365',
      desc: isLaos 
        ? 'A dedicated team of technical experts providing direct advice and round-the-clock support.'
        : 'Đội ngũ chuyên gia kỹ thuật người Việt tư vấn và hỗ trợ trực tiếp 24/7.',
    },
    {
      icon: Award,
      title: isLaos ? 'SLA 99.99% Quality Commitment' : 'Cam kết chất lượng SLA 99.99%',
      desc: isLaos 
        ? 'Guaranteed continuous system operation with a highly transparent compensation policy.'
        : 'Đảm bảo hệ thống hoạt động liên tục với chính sách bồi thường rõ ràng.',
    },
    {
      icon: Cloud,
      title: isLaos ? 'Multi-Cloud Integration' : 'Tích hợp Đa đám mây (Multi-Cloud)',
      desc: isLaos 
        ? 'Securely and flexibly connect On-Premises systems and the Cloud via VPN or Hybrid L3.'
        : 'Kết nối an toàn linh hoạt giữa On-Premise và Cloud qua VPN/Hybrid L3.',
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
