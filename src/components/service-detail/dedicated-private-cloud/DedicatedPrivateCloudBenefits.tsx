import React from 'react';
import { Zap, ShieldCheck, DollarSign, Headset, Sliders, Cpu } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface DedicatedPrivateCloudBenefitsProps {
  currentMarket?: SEAMarket;
  onOpenQuote?: () => void;
}

export const DedicatedPrivateCloudBenefits: React.FC<DedicatedPrivateCloudBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'CORE ENTERPRISE BENEFITS' : 'LỢI ÍCH CỐT LÕI',
    headline: isLaos 
      ? 'Why Choose Viettel Dedicated Private Cloud (HPC)?' 
      : 'Tại sao lựa chọn Viettel Dedicated Private Cloud (HPC)?',
  };

  const benefits = [
    {
      icon: Cpu,
      title: isLaos ? 'Isolated Infrastructure & Extreme Performance' : 'Hạ tầng độc lập & Hiệu suất cực đại',
      desc: isLaos 
        ? '100% Single-Tenant bare-metal hardware eliminated noisy neighbors, delivering peak sustained FLOPS.'
        : 'Tài nguyên phần cứng vật lý chuyên biệt 100%, triệt tiêu hoàn toàn hiện tượng tranh chấp tài nguyên, tối ưu hiệu năng tính toán đỉnh cao.',
    },
    {
      icon: Zap,
      title: isLaos ? '200 Gbps Ultra-Low Latency Fabric' : 'Mạng InfiniBand 200 Gbps siêu tốc',
      desc: isLaos 
        ? 'Sub-microsecond cluster interconnect enables high-speed MPI communication and distributed model training.'
        : 'Kết nối mạng nội bộ cụm 200 Gbps với độ trễ siêu thấp, đáp ứng trọn vẹn các bài toán tính toán song song quy mô lớn và cụm AI Cluster.',
    },
    {
      icon: DollarSign,
      title: isLaos ? 'TCO Optimization & Flexible OPEX' : 'Tối ưu TCO & Linh hoạt dòng tiền (OPEX)',
      desc: isLaos 
        ? 'Completely eliminate multi-million dollar CAPEX data center investments with transparent monthly leasing.'
        : 'Xóa bỏ chi phí CAPEX đầu tư ban đầu khổng lồ cho trung tâm dữ liệu và phần cứng, chuyển dịch thành OPEX tối ưu ngân sách vận hành.',
    },
    {
      icon: ShieldCheck,
      title: isLaos ? 'Proactive Inline ML Cybersecurity' : 'An toàn & Bảo mật chủ động (Inline ML)',
      desc: isLaos 
        ? 'Inline Machine Learning firewall continuously detects threats and blocks Zero-day attacks in real time.'
        : 'Tường lửa bảo vệ thế hệ mới tích hợp Machine Learning ngay trong mã xử lý, chủ động phòng chống mã độc và ngăn chặn các cuộc tấn công Zero-day.',
    },
    {
      icon: Sliders,
      title: isLaos ? 'Full Control & Rapid Provisioning' : 'Làm chủ quản trị & Khởi tạo siêu tốc',
      desc: isLaos 
        ? 'Self-service unified web portal enables direct provisioning, dynamic SDN mapping, and instant template deployment.'
        : 'Portal quản trị trực quan duy nhất giúp đội ngũ kỹ sư toàn quyền làm chủ môi trường ảo hóa, thiết lập SDN và triển khai hạ tầng chỉ trong vài phút.',
    },
    {
      icon: Headset,
      title: isLaos ? '24/7/365 Dedicated Enterprise Support' : 'Hỗ trợ kỹ thuật 24/7/365 & SLA 99.99%',
      desc: isLaos 
        ? 'Direct support from Viettel IDC cloud architects with strict 15-minute SLA response and continuous uptime.'
        : 'Đội ngũ chuyên gia kiến trúc sư giải pháp HPC đồng hành trực tiếp 24/7/365, cam kết SLA 99.99% độ sẵn sàng cùng chính sách bồi thường minh bạch.',
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
