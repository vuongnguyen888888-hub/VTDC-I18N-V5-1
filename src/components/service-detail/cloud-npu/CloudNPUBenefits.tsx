import React from 'react';
import { DollarSign, RefreshCw, Sliders, ShieldCheck, Award, Boxes } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface CloudNPUBenefitsProps {
  currentMarket: SEAMarket;
}

export const CloudNPUBenefits: React.FC<CloudNPUBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket.code === 'la';

  const t = {
    eyebrow: isLaos ? 'CORE BENEFITS' : 'LỢI ÍCH CỐT LÕI',
    headline: isLaos
      ? 'Why Choose Viettel Cloud NPU for AI Inference?'
      : 'Tại sao lựa chọn Viettel Cloud NPU cho bài toán AI Inference?',
    subtitle: isLaos
      ? 'Maximize ROI, ensure domestic data sovereignty, and accelerate AI transition seamlessly.'
      : 'Tối ưu hóa lợi tức đầu tư (ROI), an toàn dữ liệu nội địa và quá trình chuyển đổi kỹ thuật thông suốt.',
  };

  const benefits = [
    {
      icon: DollarSign,
      title: isLaos
        ? 'Cost Optimization & Low TCO'
        : 'Tối ưu chi phí & Tổng chi phí sở hữu (TCO)',
      desc: isLaos
        ? 'Significant infrastructure budget savings thanks to optimal Performance/Watt of ASIC NPU; all management tools and Kubernetes plugins are provided completely free of charge.'
        : 'Tiết kiệm ngân sách thuê hạ tầng nhờ hiệu suất Performance/Watt tối ưu của NPU ASIC; toàn bộ công cụ quản trị và plugin Kubernetes đều được cung cấp miễn phí.',
    },
    {
      icon: RefreshCw,
      title: isLaos
        ? 'Simple, Rapid Code Conversion'
        : 'Chuyển đổi code đơn giản, nhanh chóng',
      desc: isLaos
        ? 'Shortens model migration time from GPU to NPU through standardized SDKs combined with hands-on technical consultation from Viettel IDC & Qualcomm specialists.'
        : 'Rút ngắn thời gian chuyển đổi mô hình từ GPU sang NPU nhờ bộ SDK chuẩn hóa kết hợp sự đồng hành kỹ thuật trực tiếp từ đội ngũ chuyên gia Viettel IDC - Qualcomm.',
    },
    {
      icon: Sliders,
      title: isLaos
        ? 'Flexible Scaling & AI Core Control'
        : 'Linh hoạt quy mô & Cấp phát AI Core',
      desc: isLaos
        ? 'Granular resource allocation from individual AI cores to multi-card clusters, automatically coordinating workloads seamlessly with real operational demands.'
        : 'Cấp phát tài nguyên từ mức từng nhân AI core đến cụm multi-card, tự động điều phối tải mượt mà theo nhu cầu vận hành thực tế.',
    },
    {
      icon: ShieldCheck,
      title: isLaos
        ? 'Data Sovereignty & Infrastructure Security'
        : 'Chủ quyền dữ liệu & An toàn hạ tầng',
      desc: isLaos
        ? 'Hosted entirely in Rated 3 Data Centers within Vietnam, complying with stringent national security, privacy, and regulatory requirements.'
        : 'Hệ thống đặt tại Trung tâm dữ liệu tiêu chuẩn Rated 3 tại Việt Nam, đáp ứng các tiêu chuẩn bảo mật khắt khe và pháp lý trong nước.',
    },
    {
      icon: Award,
      title: isLaos
        ? 'SLA 99.5% Quality Commitment'
        : 'Cam kết chất lượng dịch vụ SLA 99.5%',
      desc: isLaos
        ? 'Guaranteed high availability uptime backed by official Service Level Agreements and 24/7/365 multi-tier technical support.'
        : 'Đảm bảo thời gian sẵn sàng hoạt động liên tục của máy chủ ảo NPU với chính sách cam kết SLA rõ ràng và hỗ trợ kỹ thuật 24/7.',
    },
    {
      icon: Boxes,
      title: isLaos
        ? 'Cloud & Kubernetes Ecosystem'
        : 'Hệ sinh thái Đám mây & Kubernetes',
      desc: isLaos
        ? 'Seamlessly interconnects with Viettel VPC, Cloud Storage, Object Storage, and Managed Kubernetes (VKS) without friction.'
        : 'Kết nối liên thông mạng riêng VPC, lưu trữ Object Storage, Cloud Storage và điều phối cụm Kubernetes (VKS) đồng bộ.',
    },
  ];

  return (
    <section 
      id="benefits" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)] scroll-mt-24"
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
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t.subtitle}
          </p>
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
