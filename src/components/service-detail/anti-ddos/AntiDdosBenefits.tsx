import React from 'react';
import { 
  Wifi, 
  Coins, 
  Cpu, 
  Headset, 
  Award, 
  Layers 
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface AntiDdosBenefitsProps {
  currentMarket?: SEAMarket;
}

export const AntiDdosBenefits: React.FC<AntiDdosBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'CORE ENTERPRISE VALUES' : 'LỢI ÍCH CỐT LÕI',
    headline: isLaos 
      ? 'Why Choose Viettel Anti-DDoS Volume-Based?' 
      : 'Tại sao lựa chọn Viettel Anti-DDoS?',
  };

  const benefits = [
    {
      icon: Wifi,
      title: isLaos ? 'Continuous Unbroken Transit' : 'Đảm bảo kênh truyền luôn thông suốt',
      desc: isLaos
        ? 'Neutralizes transit congestion caused by massive volumetric cyber surges, safeguarding continuous digital commerce and brand trust.'
        : 'Vô hiệu hóa hoàn toàn nguy cơ nghẽn mạng do bão lưu lượng, bảo vệ liên tục hoạt động kinh doanh trực tuyến và uy tín thương hiệu.',
    },
    {
      icon: Coins,
      title: isLaos ? 'Zero CapEx & Cost Optimization' : 'Tối ưu chi phí & Không cần đầu tư phần cứng',
      desc: isLaos
        ? 'Eliminates multi-million dollar on-premises scrubbing appliances, hardware depreciation, and dedicated operational overhead.'
        : 'Loại bỏ nhu cầu đầu tư hệ thống phần cứng chuyên dụng tốn kém hàng tỷ đồng và gánh nặng chi phí bảo trì định kỳ.',
    },
    {
      icon: Cpu,
      title: isLaos ? '100% Autonomous Automation' : 'Tự động hóa toàn trình < 3 phút',
      desc: isLaos
        ? 'Autonomous threat detection, BGP diversion, and packet purification without manual intervention, drastically freeing up IT resources.'
        : 'Hệ thống tự phát hiện, phân tích và làm sạch luồng tấn công không cần can thiệp thủ công, giảm tải tối đa cho đội ngũ IT nội bộ.',
    },
    {
      icon: Headset,
      title: isLaos ? '24/7/365 Dedicated SOC Specialists' : 'Chuyên gia an ninh mạng trực chiến 24/7/365',
      desc: isLaos
        ? 'Monitored around the clock by Viettel IDC elite cybersecurity specialists, prepared to coordinate and mitigate multi-vector attacks.'
        : 'Được hỗ trợ giám sát bởi các chuyên gia bảo mật hàng đầu của Viettel IDC, sẵn sàng phối hợp xử lý các case tấn công phức tạp.',
    },
    {
      icon: Award,
      title: isLaos ? 'High Availability SLA 99.99%' : 'Cam kết chất lượng dịch vụ SLA 99.99%',
      desc: isLaos
        ? 'Strict contractual quality agreements with clean traffic scrubbing efficiency exceeding 95% and added packet latency below 3 ms.'
        : 'Cam kết hiệu quả làm sạch luồng dữ liệu đạt trên 95%, độ trễ bổ sung dưới 3 ms và độ sẵn sàng hạ tầng đạt 99.99%.',
    },
    {
      icon: Layers,
      title: isLaos ? 'Seamless Integration & Zero Downtime' : 'Triển khai linh hoạt, không đổi cấu trúc mạng',
      desc: isLaos
        ? 'Native ISP integration enables rapid IP provisioning within minutes without requiring architectural changes to existing servers.'
        : 'Triển khai trực tiếp trên hạ tầng mạng ISP Viettel, kích hoạt trong vài phút mà không cần thay đổi địa chỉ IP hay mô hình mạng hiện hữu.',
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

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 hover:border-slate-300 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                  {b.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
