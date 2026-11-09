import React from 'react';
import { DollarSign, Zap, Shield, Award, CheckCircle2, Cloud, Scale, Headset } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface CloudFirewallBenefitsProps {
  currentMarket?: SEAMarket;
}

export const CloudFirewallBenefits: React.FC<CloudFirewallBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'CORE BENEFITS' : 'LỢI ÍCH CỐT LÕI',
    headline: isLaos ? 'Why Choose Viettel Cloud Firewall?' : 'Tại sao lựa chọn Viettel Cloud Firewall?',
  };

  const benefits = [
    {
      icon: DollarSign,
      title: isLaos ? 'Capex to Opex Optimization' : 'Tối ưu Chi phí Đầu tư (CapEx sang OpEx)',
      desc: isLaos
        ? 'Eliminate expensive appliance capital expenditures and maintenance overhead. Pay on flexible monthly licenses.'
        : 'Loại bỏ hoàn toàn chi phí mua sắm thiết bị phần cứng tường lửa đắt đỏ và chi phí khấu hao. Trả cước linh hoạt theo tháng.',
    },
    {
      icon: Zap,
      title: isLaos ? 'Rapid Deployment & Elastic Scaling' : 'Triển khai Tức thì & Co giãn Linh hoạt',
      desc: isLaos
        ? 'Spin up virtual firewall instances in minutes without hardware lead times. Instantly upgrade vCPU and RAM.'
        : 'Khởi tạo và cấu hình hoàn tất chỉ trong vài phút, không phải chờ đợi mua sắm phần cứng. Nâng cấp vCPU và RAM tức thời.',
    },
    {
      icon: Shield,
      title: isLaos ? 'Deep Multi-Layer Defense' : 'Bảo vệ Đa tầng & Kiểm soát L7',
      desc: isLaos
        ? 'Inspect both North-South traffic and East-West inter-VM communication with AI-powered malware and IPS engines.'
        : 'Kiểm soát chặt chẽ cả luồng truy cập biên North-South và lưu lượng nội bộ East-West với công nghệ AI Sandbox & IPS.',
    },
    {
      icon: Scale,
      title: isLaos ? 'Regulatory Compliance & Data Sovereignty' : 'Tuân thủ Pháp lý & Chủ quyền Dữ liệu',
      desc: isLaos
        ? 'Fully compliant with Vietnam Cybersecurity Law, Decree 13/2023/ND-CP, PCI-DSS v4.0, and ISO 27001.'
        : 'Dữ liệu lưu trữ 100% tại Việt Nam, đáp ứng toàn diện Luật An ninh mạng, Nghị định 13/2023/NĐ-CP, PCI-DSS và ISO 27001.',
    },
    {
      icon: Award,
      title: isLaos ? 'SLA 99.99% Availability Commitment' : 'Cam kết Chất lượng SLA 99.99%',
      desc: isLaos
        ? 'Operated in ANSI/TIA-942 Rated 3 constructed Data Centers nationwide with High-Availability clustering.'
        : 'Vận hành trên hệ thống Data Center TIA-942 Rated 3 phủ sóng toàn quốc với kiến trúc dự phòng High-Availability (HA).',
    },
    {
      icon: Headset,
      title: isLaos ? '24/7 Dedicated Security SOC Support' : 'Hỗ trợ Chuyên sâu 24/7/365',
      desc: isLaos
        ? 'Vietnamese certified cybersecurity specialists and SOC team providing 24/7 direct monitoring and incident response.'
        : 'Đội ngũ chuyên gia an ninh mạng & SOC thường trực 24/7/365 trực tiếp giám sát, ứng cứu và hỗ trợ kỹ thuật < 15 phút.',
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
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 hover:shadow-md hover:border-slate-300 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                  <IconComp className="w-5 h-5" />
                </div>

                <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
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

