import React from 'react';
import { Zap, ShieldCheck, DollarSign, Headset, Award, Rocket } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface CloudGPUBenefitsProps {
  currentMarket?: SEAMarket;
}

export const CloudGPUBenefits: React.FC<CloudGPUBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'CORE BENEFITS' : 'LỢI ÍCH CỐT LÕI',
    headline: isLaos ? 'Why Choose Viettel Cloud GPU?' : 'Tại sao lựa chọn Viettel Cloud GPU?',
  };

  const benefits = [
    {
      icon: Zap,
      title: isLaos ? '10–30x Accelerated Performance' : 'Tốc độ & Hiệu năng tăng tốc 10–30x',
      desc: isLaos 
        ? 'Dedicated NVIDIA enterprise GPUs (Tesla T4, A30, L40S, H200) cutting AI model training & inference time from days to hours.'
        : 'Trang bị GPU NVIDIA chuyên dụng thế hệ mới rút ngắn thời gian huấn luyện mô hình AI và xử lý đồ họa gấp 10–30 lần so với CPU.',
    },
    {
      icon: DollarSign,
      title: isLaos ? 'CAPEX to OPEX – Cost Optimization' : 'Chuyển đổi CAPEX sang OPEX',
      desc: isLaos 
        ? 'Completely eliminate hundreds of thousands of USD in upfront GPU purchases; pay flexibly based on actual resource demand.'
        : 'Loại bỏ hoàn toàn chi phí hàng trăm nghìn USD mua sắm phần cứng đắt đỏ, chỉ chi trả theo cấu hình sử dụng thực tế.',
    },
    {
      icon: Rocket,
      title: isLaos ? 'Shorten Time-to-Market' : 'Rút ngắn chu kỳ ra mắt sản phẩm',
      desc: isLaos 
        ? 'Pre-installed with NVIDIA Driver, CUDA, and cuDNN; provision high-performance AI environments in minutes.'
        : 'Môi trường AI sẵn sàng với driver và CUDA cài đặt sẵn, khởi tạo máy chủ chỉ sau vài phút giúp triển khai dự án tức thì.',
    },
    {
      icon: ShieldCheck,
      title: isLaos ? 'Data Sovereignty & Security' : 'Chủ quyền dữ liệu & An toàn bảo mật',
      desc: isLaos 
        ? 'Data hosted inside Vietnam at ANSI/TIA-942 Rated 3 Data Centers, certified under ISO 27001 and ISO 27017.'
        : 'Dữ liệu lưu trữ an toàn trong nước tại Data Center chuẩn TIA-942 Rated 3, tuân thủ Luật An ninh mạng và chuẩn ISO 27001.',
    },
    {
      icon: Award,
      title: isLaos ? 'SLA 99.99% Quality Commitment' : 'Cam kết chất lượng SLA 99.99%',
      desc: isLaos 
        ? 'Guaranteed continuous operation with high availability infrastructure and transparent compensation policies.'
        : 'Đảm bảo hệ thống máy chủ vận hành liên tục 24/7/365 với cam kết chất lượng dịch vụ SLA lên tới 99.99%.',
    },
    {
      icon: Headset,
      title: isLaos ? '24/7/365 Expert Support' : 'Hỗ trợ kỹ thuật chuyên sâu 24/7/365',
      desc: isLaos 
        ? 'Direct support and solution architecture consultation from certified Viettel IDC cloud engineers.'
        : 'Đội ngũ chuyên gia kỹ thuật và kiến trúc sư giải pháp của Viettel IDC tư vấn và hỗ trợ trực tiếp 24/7.',
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

