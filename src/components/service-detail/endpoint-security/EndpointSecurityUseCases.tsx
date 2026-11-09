import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface EndpointSecurityUseCasesProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: (note?: string) => void;
}

export const EndpointSecurityUseCases: React.FC<EndpointSecurityUseCasesProps> = ({
  currentMarket,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'TARGET SCENARIOS' : 'KỊCH BẢN ỨNG DỤNG',
    headline: isLaos 
      ? 'Typical Deployment Scenarios for Digital Enterprises' 
      : 'Kịch Bản Ứng Dụng Điển Hình Cho Doanh Nghiệp Số',
    subtitle: isLaos
      ? 'Customized endpoint defenses engineered to safeguard diverse computing topologies and operational workforce environments.'
      : 'Bảo vệ chuyên sâu từ cụm máy ảo đám mây, máy trạm nhân viên, hệ thống ngân hàng đến môi trường làm việc từ xa.',
    viewDetails: isLaos ? 'View pricing & specs' : 'Xem cấu hình & bảng giá',
  };

  const useCases = [
    {
      title: isLaos ? 'Large-Scale Virtual Clusters (VDI & Cloud)' : 'Cụm máy ảo đám mây & VDI quy mô lớn',
      desc: isLaos
        ? 'Divert intensive antivirus scans to centralized SVA appliances, eliminating I/O bottlenecks and ensuring smooth virtualization performance.'
        : 'Sử dụng công nghệ máy chủ quét SVA chuyên dụng, triệt tiêu hiện tượng nghẽn I/O (Antivirus Storm) khi hàng trăm máy ảo đồng loạt quét virus.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'Enterprise Anti-Ransomware' : 'Phòng chống Ransomware cho máy trạm',
      desc: isLaos
        ? 'Active behavioral mitigation continuously backs up and restores documents the millisecond any rogue ransomware process attempts unauthorized encryption.'
        : 'Tính năng Ransomware Mitigation tự động sao lưu và khôi phục tệp tức thì ngay khi phát hiện hành vi mã hóa trái phép trên máy tính nhân viên.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'Banking & Financial Services (BFSI)' : 'Bảo mật máy chủ Ngân hàng & Tài chính',
      desc: isLaos
        ? 'Safeguards core databases and mission-critical transactional engines with EDR extensions, HyperDetect machine learning, and isolated Sandboxes.'
        : 'Bảo vệ máy chủ giao dịch tài chính trước mã độc không file (Fileless) và lỗ hổng Zero-day nhờ cơ chế Sandbox Analyzer và HyperDetect AI.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'Distributed Hybrid Workforce' : 'Môi trường làm việc phân tán & từ xa',
      desc: isLaos
        ? 'Protects disparate fleets of Windows laptops, MacBooks, iOS and Android smartphones under a single unified corporate security policy.'
        : 'Quản trị đồng bộ chính sách bảo mật cho máy trạm văn phòng, laptop nhân viên làm việc từ xa và thiết bị di động (Mobile Security).',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section 
      id="use-cases" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight mb-2">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Grid 4 Card Ứng dụng */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((item, idx) => (
            <div 
              key={idx}
              className="rounded-2xl bg-slate-50 border border-slate-200/90 overflow-hidden hover:border-[var(--vidc-color-brand-red)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Banner Image */}
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img alt={item.title} src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-2.5">
                  <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <VIDCAnchor
                  href="#pricing"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline group-hover:translate-x-1 transition-transform"
                >
                  <span>{t.viewDetails}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </VIDCAnchor>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
