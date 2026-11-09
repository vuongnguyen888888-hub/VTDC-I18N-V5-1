import React from 'react';
import { 
  DollarSign, 
  Rocket, 
  ShieldCheck, 
  Settings2, 
  CheckCircle2, 
  CloudRain, 
  Lock, 
  Cpu 
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface SdWanBenefitsProps {
  currentMarket?: SEAMarket;
}

export const SdWanBenefits: React.FC<SdWanBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'CORE BUSINESS BENEFITS' : 'LỢI ÍCH CỐT LÕI CHO DOANH NGHIỆP',
    headline: isLaos
      ? 'Why Choose Viettel SD-WAN for Your Distributed Enterprise Network?'
      : 'Tại Sao Doanh Nghiệp Nên Lựa Chọn Viettel SD-WAN?',
    subtitle: isLaos
      ? 'Breakthrough technological and financial advantages empowering modern hybrid enterprises.'
      : 'Giải pháp mạng thế hệ mới giúp tối ưu ngân sách, tăng tốc vận hành và bảo vệ an toàn dữ liệu trên mọi kết nối.',
  };

  const benefits = [
    {
      icon: DollarSign,
      stat: '-60%',
      statLabel: isLaos ? 'WAN Cost Savings' : 'Tiết kiệm cước WAN',
      title: isLaos ? 'Maximized WAN Operational Savings' : 'Tiết Kiệm Chi Phí Đường Truyền Tới 60%',
      desc: isLaos
        ? 'Significantly minimizes Capex and monthly recurring Opex by combining cost-effective Broadband/4G lines to replace or supplement expensive MPLS.'
        : 'Giảm thiểu đáng kể chi phí đầu tư ban đầu và cước thuê bao hàng tháng nhờ việc kết hợp đường truyền Internet/4G giá rẻ thay thế đường MPLS đắt đỏ.',
    },
    {
      icon: Rocket,
      stat: '5-10x',
      statLabel: isLaos ? 'Faster Provisioning' : 'Triển khai siêu tốc',
      title: isLaos ? 'Ultra-Fast Deployment & Effortless Scalability' : 'Triển Khai Siêu Tốc & Kích Hoạt Tức Thì',
      desc: isLaos
        ? 'Shortens new branch onboarding time 5 to 10 times compared to legacy leased lines; scale bandwidth on-demand without hardware swap.'
        : 'Rút ngắn thời gian thiết lập chi nhánh mới nhanh hơn từ 5 – 10 lần so với phương thức truyền thống; dễ dàng nâng cấp băng thông theo nhu cầu.',
    },
    {
      icon: ShieldCheck,
      stat: '99.99%',
      statLabel: isLaos ? 'High Uptime SLA' : 'Cam kết Uptime SLA',
      title: isLaos ? 'Guaranteed 24/7 Continuous Connectivity' : 'Đảm Bảo Kết Nối Thông Suốt 24/7 (SLA 99.99%)',
      desc: isLaos
        ? 'Sub-second auto-failover and dynamic multi-path load balancing eliminate network blackouts and maintain stellar application performance.'
        : 'Cơ chế tự động cân bằng tải và chuyển tuyến thông minh dưới 1 giây giúp triệt tiêu thời gian mất mạng, duy trì hiệu năng vận hành ổn định cho ứng dụng.',
    },
    {
      icon: Cpu,
      stat: '+300%',
      statLabel: isLaos ? 'SaaS Response Rate' : 'Tốc độ phản hồi SaaS',
      title: isLaos ? 'Direct Cloud Breakout & SaaS Acceleration' : 'Tăng Tốc Ứng Dụng Đám Mây (SaaS Acceleration)',
      desc: isLaos
        ? 'Eliminate tromboning bottlenecks by directly routing cloud traffic (M365, CRM, ERP) from branch edge with smart local caching.'
        : 'Loại bỏ hiện tượng nghẽn mạng do dồn lưu lượng về trung tâm (Tromboning), định tuyến trực tiếp ứng dụng Cloud từ chi nhánh kết hợp caching.',
    },
    {
      icon: Lock,
      stat: 'AES-256',
      statLabel: isLaos ? 'IPsec Security' : 'Mã hóa quân sự',
      title: isLaos ? 'End-to-End Enterprise Encryption' : 'Bảo Mật Đường Truyền Toàn Diện (End-to-End)',
      desc: isLaos
        ? 'Encapsulate and protect all branch traffic over public internet infrastructure using standard military-grade IPsec tunnels and NGFW policies.'
        : 'Mã hóa toàn bộ lưu lượng chi nhánh chạy trên hạ tầng Internet công cộng bằng đường hầm IPsec tiêu chuẩn quân sự kết hợp bộ lọc tường lửa.',
    },
    {
      icon: Settings2,
      stat: '1 Portal',
      statLabel: isLaos ? 'Single Pane of Glass' : 'Một cổng quản trị',
      title: isLaos ? 'Optimized IT Operations & Resource Allocation' : 'Tối Ưu Hóa Nguồn Lực & Quản Trị Tập Trung',
      desc: isLaos
        ? 'Centralized single-pane portal gives IT teams global control over distributed branch topology, minimizing on-site field IT dispatch.'
        : 'Giao diện quản trị tập trung giúp bộ phận CNTT kiểm soát toàn bộ hạ tầng mạng phân tán, giảm thiểu nhân sự IT túc trực tại từng chi nhánh.',
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
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl mx-auto font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-4 hover:border-[var(--vidc-color-brand-red)] transition-all duration-300 hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-extrabold text-[var(--vidc-color-brand-red)] font-mono">{item.stat}</div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase">{item.statLabel}</div>
                    </div>
                  </div>

                  <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Cam kết chuẩn SLA Viettel IDC</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

