import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VCMPUseCasesProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: (details?: any) => void;
}

export const VCMPUseCases: React.FC<VCMPUseCasesProps> = ({ currentMarket, onOpenConsult }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'REAL-WORLD APPLICATIONS' : 'ỨNG DỤNG THỰC TẾ',
    headline: isLaos ? 'Typical Enterprise Deployment Scenarios' : 'Các kịch bản ứng dụng tiêu biểu',
    subtitle: isLaos 
      ? 'Solving critical infrastructure governance, budget containment, and agile DevOps release bottlenecks.'
      : 'Giải quyết triệt để các rào cản quản trị, kiểm soát ngân sách và tăng tốc độ phân phối phần mềm trong thực tế.',
    viewDetails: isLaos ? 'View details' : 'Xem chi tiết giải pháp',
  };

  const useCases = [
    {
      title: isLaos ? 'Hybrid & Multi-Cloud Infrastructure' : 'Vận hành hạ tầng Hybrid & Multi-Cloud',
      desc: isLaos 
        ? 'Consolidate Private Cloud, On-Premises, and hyperscalers (AWS, Azure, GCP) into a single orchestration pane.'
        : 'Kết nối và điều phối đồng bộ hạ tầng Private Cloud/On-Premises với các Public Cloud (AWS, Azure, GCP) trên 1 giao diện.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'FinOps & Multi-Cloud Cost Governance' : 'Tối ưu chi phí & Quản trị FinOps',
      desc: isLaos 
        ? 'Enforce tenant budget quotas, track live cloud spending, and automate idle resource reclamation.'
        : 'Minh bạch hóa chi tiêu, phân bổ hạn mức chi phí theo từng Tenant/Phòng ban và tự động thu hồi tài nguyên lãng phí.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'DevOps & Automated CI/CD Pipelines' : 'Tự động hóa DevOps & CI/CD Pipelines',
      desc: isLaos 
        ? 'Leverage Template Marketplace, Terraform, and Ansible to provision consistent Dev/Test/Staging environments.'
        : 'Khởi tạo môi trường Dev/Test/Staging/Production chuẩn hóa qua Terraform/Ansible và Template đóng gói sẵn.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'Internal Self-Service IT Portal' : 'Cổng tự phục vụ Self-Service nội bộ',
      desc: isLaos 
        ? 'Enable enterprise business units to self-provision pre-approved application stacks within approved quotas.'
        : 'Trao quyền cho các đơn vị tự đăng ký và cấp phát tài nguyên CNTT theo định mức phê duyệt mà không gây tắc nghẽn khối IT.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
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
          {useCases.map((item, idx) => {
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-slate-50 border border-slate-200/90 overflow-hidden hover:border-[var(--vidc-color-brand-red)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Banner Image */}
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img alt={item.title} src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" loading="lazy" onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
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
                  <VIDCNativeButton
                    type="button"
                    onClick={() => onOpenConsult?.({ useCase: item.title })}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>{t.viewDetails}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </VIDCNativeButton>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

