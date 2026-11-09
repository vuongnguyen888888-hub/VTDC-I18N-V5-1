import React from 'react';
import { 
  Zap, 
  Settings2, 
  RefreshCw, 
  BadgePercent, 
  ShieldCheck, 
  Layers 
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface EndpointSecurityBenefitsProps {
  currentMarket?: SEAMarket;
}

export const EndpointSecurityBenefits: React.FC<EndpointSecurityBenefitsProps> = ({
  currentMarket,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'KEY ADVANTAGES' : 'LỢI ÍCH DỊCH VỤ',
    headline: isLaos 
      ? 'Breakthrough Value of Viettel Endpoint Security' 
      : 'Lợi Ích Vượt Trội Của Viettel Endpoint Security',
  };

  const benefits = [
    {
      icon: Zap,
      title: isLaos ? 'Optimized Host Performance (SVA Offload)' : 'Tối ưu hiệu năng máy chủ (Offload SVA)',
      desc: isLaos 
        ? 'Diverts heavy antivirus scan tasks to dedicated Security Virtual Appliances (SVA), freeing up to 98% host CPU and RAM resources.'
        : 'Chuyển toàn bộ tác vụ quét virus sang máy chủ bảo mật SVA chuyên dụng, giải phóng tới 98% tài nguyên CPU và RAM máy chủ.',
    },
    {
      icon: Settings2,
      title: isLaos ? 'Streamlined Deployment & Operation' : 'Đơn giản hóa triển khai & vận hành',
      desc: isLaos 
        ? 'Single unified installer (Agent BEST) deploys in minutes across Windows, Linux, macOS with zero reboot required.'
        : 'Duy nhất một phần mềm Agent BEST cài đặt trong vài giây, tự động tương thích và không đòi hỏi khởi động lại hệ thống.',
    },
    {
      icon: RefreshCw,
      title: isLaos ? 'Autonomous 24/7 Threat Intelligence' : 'Tự động cập nhật mẫu mã độc 24/7',
      desc: isLaos 
        ? 'Signatures and cloud threat intelligence models update silently around the clock with zero network lag.'
        : 'Cơ sở dữ liệu mẫu mã độc và tri thức bảo mật được cập nhật tự động liên tục qua Cloud, người dùng không cần can thiệp thủ công.',
    },
    {
      icon: BadgePercent,
      title: isLaos ? 'TCO Cost Optimization (OpEx)' : 'Tiết kiệm chi phí đầu tư (TCO)',
      desc: isLaos 
        ? 'Eliminates expensive on-premise hardware appliances, transitioning to a flexible monthly or annual OpEx subscription.'
        : 'Loại bỏ chi phí đầu tư hạ tầng phần cứng bảo mật riêng lẻ đắt đỏ, linh hoạt thanh toán theo tháng hoặc theo năm theo số lượng node thực tế.',
    },
    {
      icon: ShieldCheck,
      title: isLaos ? 'Eliminates Antivirus Storms' : 'Triệt tiêu hiện tượng Antivirus Storm',
      desc: isLaos 
        ? 'Eliminates storage I/O bottlenecks during mass scheduled scans on dense virtualized clusters and VDI environments.'
        : 'Giải quyết triệt để tình trạng nghẽn I/O ổ cứng khi hàng trăm máy ảo đồng loạt quét virus định kỳ trên cùng một máy chủ vật lý.',
    },
    {
      icon: Layers,
      title: isLaos ? 'Single-Pane-of-Glass Management' : 'Quản trị tập trung 100% trên Cloud',
      desc: isLaos 
        ? 'Centrally configure policies, inspect security risks (ERA), and remediate vulnerabilities via a single web console.'
        : 'Thiết lập chính sách đồng bộ, chấm điểm rủi ro an ninh (ERA) và phát hiện xử lý sự cố toàn hệ thống qua một giao diện web duy nhất.',
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
