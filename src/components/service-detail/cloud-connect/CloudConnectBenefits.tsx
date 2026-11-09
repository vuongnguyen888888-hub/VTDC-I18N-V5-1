import React from 'react';
import { DollarSign, Zap, TrendingUp, ShieldCheck, Scale, Award } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface CloudConnectBenefitsProps {
  currentMarket?: SEAMarket;
}

export const CloudConnectBenefits: React.FC<CloudConnectBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'CORE BENEFITS' : 'LỢI ÍCH CỐT LÕI',
    headline: isLaos
      ? 'Why Choose Viettel Cloud Connect for Hybrid Cloud?'
      : 'Lợi Ích Cốt Lõi Khi Sử Dụng Viettel Cloud Connect',
  };

  const benefits = [
    {
      icon: DollarSign,
      title: isLaos ? 'Save up to 50% Bandwidth Cost' : 'Tiết Kiệm Chi Phí Tới 50%',
      desc: isLaos
        ? 'Significantly reduce data egress and bandwidth transit costs compared to standard public Internet connections.'
        : 'Cắt giảm đến 50% chi phí truyền tải dữ liệu Data Transfer Out (Egress) so với việc sử dụng đường truyền Internet công cộng.',
    },
    {
      icon: Zap,
      title: isLaos ? 'Ultra-Low Latency & 99.95% SLA' : 'Hiệu Suất Vượt Trội & SLA 99,95%',
      desc: isLaos
        ? 'Strict SLA commitment with latency <10ms to local Cloud PoPs, ensuring seamless real-time application throughput.'
        : 'Cam kết sẵn sàng đường truyền 99,95% và độ trễ dưới 10ms, đảm bảo các giao dịch tài chính và luồng xử lý dữ liệu luôn mượt mà.',
    },
    {
      icon: TrendingUp,
      title: isLaos ? 'Fast Dynamic Scalability' : 'Mở Rộng Băng Thông Linh Hoạt',
      desc: isLaos
        ? 'Quickly upgrade port capacity and bandwidth allocation within 1 hour to meet sudden traffic bursts.'
        : 'Dễ dàng nâng cấp và mở rộng lưu lượng từ 50 Mbps tới 100 Gbps+ chỉ trong vài giờ làm việc, thích ứng tức thời với nhu cầu.',
    },
    {
      icon: ShieldCheck,
      title: isLaos ? '100% Isolated Cyber Security' : 'An Toàn & Cách Ly Tuyệt Đối',
      desc: isLaos
        ? '100% isolated private connection completely bypassed from public cyber threats, DDoS attacks and sniffing.'
        : 'Tách biệt tuyệt đối khỏi mạng Internet công cộng, mã hóa đầu cuối và triệt tiêu nguy cơ bị tấn công DDoS hoặc nghe lén.',
    },
    {
      icon: Scale,
      title: isLaos ? 'Strict Legal Compliance' : 'Tuân Thủ Quy Định Pháp Lý',
      desc: isLaos
        ? 'Perfect for Hybrid Cloud architecture, keeping critical data stored locally under cybersecurity laws.'
        : 'Hỗ trợ mô hình kiến trúc Hybrid Cloud, giúp doanh nghiệp quản lý và lưu trữ dữ liệu nhạy cảm theo đúng Luật An ninh mạng.',
    },
    {
      icon: Award,
      title: isLaos ? 'Tier 3 Certified Telecom Backbone' : 'Hạ Tầng Chuẩn Tier 3 & Mạng Trục Quốc Gia',
      desc: isLaos
        ? 'Operated on Viettel IDC Tier 3 certified data centers with nationwide optical backbone network.'
        : 'Được vận hành trên hệ sinh thái Trung tâm Dữ liệu chuẩn Rated 3 / Tier III và hạ tầng mạng trục cáp quang viễn thông số 1.',
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

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

