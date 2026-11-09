import React from 'react';
import { 
  Users, 
  Server, 
  Clock, 
  TrendingDown, 
  ShieldCheck, 
  Maximize2 
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface ManagedPrivateCloudBenefitsProps {
  currentMarket: SEAMarket;
}

export const ManagedPrivateCloudBenefits: React.FC<ManagedPrivateCloudBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket.code === 'la';

  const t = {
    eyebrow: isLaos ? 'CORE BENEFITS' : 'LỢI ÍCH CỐT LÕI',
    headline: isLaos
      ? 'Why Choose Viettel Managed Private Cloud?'
      : 'Tại sao lựa chọn Viettel Managed Private Cloud?',
  };

  const benefits = [
    {
      title: isLaos ? 'Continuous Expert Partnership' : 'Đội ngũ chuyên gia đồng hành',
      desc: isLaos
        ? 'Direct support from Viettel IDC and VMware senior architects across strategic planning, deployment, and ongoing operations.'
        : 'Được hỗ trợ trực tiếp bởi đội ngũ kiến trúc sư và kỹ sư cấp cao của Viettel IDC và VMware từ khảo sát, thiết kế đến vận hành.',
      icon: Users,
    },
    {
      title: isLaos ? 'Data Center Modernization' : 'Hiện đại hóa hạ tầng Data Center',
      desc: isLaos
        ? 'Transform legacy server rooms into modern Software-Defined Data Center (SDDC) with enterprise agility and elasticity.'
        : 'Chuyển đổi phòng máy truyền thống thành Trung tâm Dữ liệu Định nghĩa bằng Phần mềm (SDDC) hiện đại, linh hoạt.',
      icon: Server,
    },
    {
      title: isLaos ? '24/7 Standardized Operations' : 'Vận hành chuẩn hóa chuyên nghiệp 24/7',
      desc: isLaos
        ? 'Continuous monitoring, routine maintenance, and rapid incident response following ISO 20000 and ITIL best practices.'
        : 'Hệ thống được giám sát liên tục 24/7/365, bảo trì định kỳ và xử lý sự cố nhanh chóng theo quy trình chuẩn quốc tế ISO 20000/ITIL.',
      icon: Clock,
    },
    {
      title: isLaos ? 'TCO Cost Optimization' : 'Tối ưu hóa tổng chi phí sở hữu (TCO)',
      desc: isLaos
        ? 'Significantly reduce CAPEX on specialized tools and eliminate overhead of maintaining a large internal 24/7 operations team.'
        : 'Giảm thiểu chi phí đầu tư ban đầu (CAPEX) cho phần mềm giám sát chuyên dụng và không cần tốn chi phí duy trì đội ngũ vận hành 24/7 nội bộ.',
      icon: TrendingDown,
    },
    {
      title: isLaos ? 'Security & Regulatory Compliance' : 'Bảo mật & Tuân thủ pháp lý tối đa',
      desc: isLaos
        ? 'Meet Sovereign Cloud requirements, keeping critical data physically hosted in-house with certified ISO 27001 / PCI-DSS baselines.'
        : 'Dữ liệu được lưu trữ trực tiếp trên hạ tầng nội bộ của tổ chức, đáp ứng tuyệt đối các quy định về chủ quyền dữ liệu và an toàn thông tin.',
      icon: ShieldCheck,
    },
    {
      title: isLaos ? 'Flexible Scaling & Cloud-Ready' : 'Mở rộng linh hoạt & Sẵn sàng Cloud-Native',
      desc: isLaos
        ? 'Effortlessly scale compute, memory, and storage while seamlessly integrating modern Kubernetes and PaaS services.'
        : 'Dễ dàng mở rộng năng lực tính toán, lưu trữ theo nhu cầu và sẵn sàng tích hợp các dịch vụ Cloud-native, Container Kubernetes hiện đại.',
      icon: Maximize2,
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
