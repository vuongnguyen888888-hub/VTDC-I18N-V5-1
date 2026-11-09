import React from 'react';
import { 
  DollarSign, 
  Workflow, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Globe 
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface HybridConnectBenefitsProps {
  currentMarket?: SEAMarket;
}

export const HybridConnectBenefits: React.FC<HybridConnectBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'ENTERPRISE VALUE' : 'LỢI ÍCH DOANH NGHIỆP',
    headline: isLaos 
      ? 'Breakthrough Value for Enterprise Clients' 
      : 'Giá Trị Đột Phá Dành Cho Khách Hàng Doanh Nghiệp',
  };

  const benefits = [
    {
      icon: DollarSign,
      title: isLaos ? 'Cost Optimization' : 'Tối Ưu Chi Phí',
      desc: isLaos 
        ? 'Save network CAPEX and OPEX by eliminating external leased lines when interconnecting between Viettel IDC data centers.'
        : 'Tiết kiệm chi phí đầu tư và vận hành mạng do không cần thuê kênh truyền ngoài khi kết nối giữa các trung tâm dữ liệu của Viettel IDC.',
    },
    {
      icon: Workflow,
      title: isLaos ? 'Seamless Multi-Service' : 'Kết Nối Multi-Service Liền Mạch',
      desc: isLaos 
        ? 'Enables secure high-speed data exchange across multiple cloud services in the same or inter-regional cloud environments.'
        : 'Cho phép kết nối và trao đổi dữ liệu an toàn giữa nhiều dịch vụ Cloud trong cùng một vùng hoặc liên vùng địa lý.',
    },
    {
      icon: TrendingUp,
      title: isLaos ? 'Flexible Scaling' : 'Linh Hoạt Nâng Cấp',
      desc: isLaos 
        ? 'Easily scale capacity, upgrade committed bandwidth, and convert topology models rapidly as business requirements expand.'
        : 'Dễ dàng thay đổi quy mô, mở rộng băng thông và chuyển đổi loại mô hình kết nối nhanh chóng theo yêu cầu tăng trưởng.',
    },
    {
      icon: ShieldCheck,
      title: isLaos ? 'Absolute Availability & HA' : 'Tính Sẵn Sàng & Dự Phòng Tuyệt Đối',
      desc: isLaos 
        ? 'Provides multi-route redundant links with automatic failover during line incidents, guaranteeing continuous uptime for critical applications.'
        : 'Cung cấp mô hình chạy dự phòng đa tuyến, tự động chuyển mạch khi có sự cố, đảm bảo uptime liên tục cho ứng dụng.',
    },
    {
      icon: Zap,
      title: isLaos ? 'Peak Performance & Stability' : 'Hiệu Năng Vượt Trội & Ổn Định',
      desc: isLaos 
        ? 'Optimized direct routing and high-speed data switching, eliminating network latency spikes and packet loss compared to public Internet.'
        : 'Định tuyến tối ưu và chuyển mạch dữ liệu tốc độ cao, triệt tiêu độ trễ mạng và rớt gói tin so với kết nối Internet.',
    },
    {
      icon: Globe,
      title: isLaos ? 'Multi-Cloud Ready Reach' : 'Sẵn Sàng Mở Rộng Multi-Cloud',
      desc: isLaos 
        ? 'Carrier-neutral foundation, effortlessly connecting to domestic ISP telcos and routing to global Hyperscale Public Clouds.'
        : 'Nền tảng trung lập, dễ dàng kết nối tới hạ tầng mạng của các ISP trong nước và liên kết tới các Cloud toàn cầu.',
    },
  ];

  return (
    <section 
      id="benefits" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header (Centered) */}
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
