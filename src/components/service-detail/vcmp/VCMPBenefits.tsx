import React from 'react';
import { 
  Minimize2, 
  TrendingDown, 
  Rocket, 
  ShieldCheck, 
  Layers, 
  Headset 
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface VCMPBenefitsProps {
  currentMarket?: SEAMarket;
}

export const VCMPBenefits: React.FC<VCMPBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'CORE BENEFITS' : 'LỢI ÍCH CỐT LÕI',
    headline: isLaos ? 'Why Choose Viettel vCMP Multi-Cloud Platform?' : 'Tại sao lựa chọn Viettel vCMP?',
  };

  const benefits = [
    {
      icon: Minimize2,
      title: isLaos ? 'Streamlined Governance & Central View' : 'Quản trị tập trung & Tinh gọn',
      desc: isLaos 
        ? 'Eliminate administrative silos across separate cloud consoles with a single unified self-service portal.'
        : 'Xóa bỏ phân mảnh quản lý nhiều đám mây riêng biệt, hợp nhất điều phối tài nguyên trên 1 giao diện duy nhất.',
    },
    {
      icon: TrendingDown,
      title: isLaos ? 'FinOps & Cost Optimization' : 'Tối ưu hóa chi phí (FinOps)',
      desc: isLaos 
        ? 'Total billing transparency across all clouds, departmental budget quotas, and automated idle resource reclamation.'
        : 'Minh bạch hóa chi tiêu Multi-Cloud, kiểm soát ngân sách theo phòng ban và tự động thu hồi tài nguyên nhàn rỗi.',
    },
    {
      icon: Rocket,
      title: isLaos ? 'Accelerated Time-to-Market' : 'Tăng tốc phát triển ứng dụng',
      desc: isLaos 
        ? 'Standardized PaaS templates and IaC scripts slash infrastructure setup times from weeks to minutes.'
        : 'Tự động hóa phân bổ hạ tầng qua Template và IaC, rút ngắn thời gian release từ hàng tuần xuống vài phút.',
    },
    {
      icon: ShieldCheck,
      title: isLaos ? 'Enterprise Security & Compliance' : 'An toàn & Tuân thủ bảo mật 100%',
      desc: isLaos 
        ? 'Uniform RBAC access control, granular audit logging, and automated compliance policies across all cloud accounts.'
        : 'Thiết lập quy chuẩn an toàn thông tin, chính sách phân quyền RBAC và kiểm soát audit đồng nhất trên mọi Cloud.',
    },
    {
      icon: Layers,
      title: isLaos ? 'Hybrid & Multi-Cloud Freedom' : 'Linh hoạt không bị khóa nhà cung cấp',
      desc: isLaos 
        ? 'Seamless migration and workload portability between Viettel Cloud, Public Clouds, and On-Premises DCs.'
        : 'Tự do di chuyển ứng dụng và điều phối tải giữa Viettel Cloud, AWS, Azure, GCP và trung tâm dữ liệu On-Premises.',
    },
    {
      icon: Headset,
      title: isLaos ? '24/7/365 Dedicated Cloud Experts' : 'Đội ngũ chuyên gia hỗ trợ 24/7/365',
      desc: isLaos 
        ? 'Certified Cloud Architecture engineers providing hands-on solution design, migration, and 24/7 SLA assurance.'
        : 'Đội ngũ chuyên gia kiến trúc giải pháp đồng hành tư vấn, chuyển dịch hạ tầng và hỗ trợ kỹ thuật 24/7.',
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

