import React from 'react';
import { TrendingDown, Layers, ShieldCheck, Award, Zap, Cpu, DollarSign, Headset } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface VMaaSBenefitsProps {
  currentMarket?: SEAMarket;
}

export const VMaaSBenefits: React.FC<VMaaSBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'CORE BENEFITS' : 'LỢI ÍCH CỐT LÕI',
    headline: isLaos 
      ? 'Why Choose Viettel Model as a Service?' 
      : 'Tại sao lựa chọn Viettel Model as a Service?',
  };

  const benefits = [
    {
      icon: TrendingDown,
      title: isLaos ? 'Zero Hardware CapEx (0 VND)' : 'Không chi phí đầu tư phần cứng (0đ CapEx)',
      desc: isLaos 
        ? 'Eliminate multi-billion hardware investments for GPU/NPU servers and dedicated MLOps personnel.'
        : 'Loại bỏ hoàn toàn gánh nặng đầu tư máy chủ GPU/NPU đắt đỏ và chi phí vận hành đội ngũ MLOps chuyên biệt.',
    },
    {
      icon: Layers,
      title: isLaos ? '100% OpenAI SDK Compatible' : 'Tương thích 100% OpenAI SDK',
      desc: isLaos 
        ? 'Drop-in replacement for OpenAI SDKs in Python, NodeJS, and Go without codebase refactoring.'
        : 'Tích hợp ngay trong 60 giây bằng cách đổi Endpoint & API Key trong OpenAI SDK mà không cần viết lại mã nguồn.',
    },
    {
      icon: Cpu,
      title: isLaos ? 'Deep Vietnamese & Domain Tuning' : 'Tối ưu chuyên sâu tiếng Việt & Nghiệp vụ',
      desc: isLaos 
        ? 'Foundation models fine-tuned specifically for Vietnamese legal, banking, retail, and public sector contexts.'
        : 'Danh mục mô hình AI được tinh chỉnh sâu sắc cho ngữ cảnh tiếng Việt, hành chính công, bán lẻ và ngân hàng.',
    },
    {
      icon: ShieldCheck,
      title: isLaos ? '100% In-Country Data Sovereignty' : 'Chủ quyền dữ liệu & An toàn tuyệt đối',
      desc: isLaos 
        ? '100% data hosted and processed within Viettel IDC data centers in Vietnam; never used for public training.'
        : 'Vận hành tại TTDL Viettel IDC Việt Nam, tuân thủ Nghị định 13/2023/NĐ-CP và cam kết không train mô hình bên thứ ba.',
    },
    {
      icon: Award,
      title: isLaos ? '≥ 99.9% High Availability SLA' : 'Cam kết chất lượng SLA ≥ 99.9%',
      desc: isLaos 
        ? 'Enterprise-grade SLA with multi-cluster load balancing and 24/7/365 NOC technical support.'
        : 'Đảm bảo dịch vụ suy luận liên tục với hệ thống cân bằng tải đa cụm và chính sách bồi thường dịch vụ minh bạch.',
    },
    {
      icon: Headset,
      title: isLaos ? '24/7 Expert Support & VAT Invoicing' : 'Hỗ trợ kỹ thuật 24/7 & Hóa đơn VAT',
      desc: isLaos 
        ? 'Dedicated local AI solution architects and full legal VAT tax compliance for Vietnamese enterprises.'
        : 'Đội ngũ kỹ sư giải pháp AI người Việt hỗ trợ trực tiếp 24/7/365, cung cấp hóa đơn tài chính VAT đầy đủ.',
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
