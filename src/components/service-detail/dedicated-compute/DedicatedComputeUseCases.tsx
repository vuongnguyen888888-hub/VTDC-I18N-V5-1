import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface DedicatedComputeUseCasesProps {
  currentMarket?: SEAMarket;
}

export const DedicatedComputeUseCases: React.FC<DedicatedComputeUseCasesProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'TYPICAL USE CASES' : 'ỨNG DỤNG THỰC TẾ',
    headline: isLaos ? 'Ideal Deployment Scenarios for Dedicated Servers' : 'Các kịch bản ứng dụng tiêu biểu',
    desc: isLaos
      ? 'Perfect for mission-critical enterprise workloads demanding uncompromised hardware performance, isolated security, and 24/7 reliability.'
      : 'Đáp ứng hoàn hảo mọi nhu cầu tải từ hệ thống cơ sở dữ liệu lớn đến ứng dụng trọng yếu đòi hỏi tài nguyên độc lập 100%.',
    viewDetails: isLaos ? 'View solution details' : 'Xem chi tiết giải pháp',
  };

  const useCases = [
    {
      title: isLaos ? 'Enterprise Core Databases & ERP' : 'Cơ sở dữ liệu lớn, ERP & CRM doanh nghiệp',
      desc: isLaos 
        ? 'Deploying high-concurrency Oracle, MS SQL, PostgreSQL databases and SAP/ERP systems requiring direct hardware IOPS.'
        : 'Triển khai các hệ thống cơ sở dữ liệu lớn (Oracle, MS SQL, PostgreSQL) và phần mềm ERP/CRM đòi hỏi hiệu năng đọc ghi I/O liên tục.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'High-Traffic E-Commerce & Portals' : 'Thương mại điện tử & Cổng thông tin tải lớn',
      desc: isLaos 
        ? 'Ensuring zero latency, high concurrency, and uninterrupted transaction processing during mega traffic campaigns.'
        : 'Đảm bảo xử lý hàng triệu lượt truy cập đồng thời, giao dịch thanh toán mượt mà trong các chiến dịch cao điểm mà không lo nghẽn mạng.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'Private Virtualization & Cloud Clusters' : 'Cụm ảo hóa riêng (Private Cloud / Hypervisor)',
      desc: isLaos 
        ? 'Installing VMware ESXi, Proxmox, or OpenStack on dedicated bare metal to build private corporate cloud clusters.'
        : 'Tự do cài đặt nền tảng ảo hóa VMware ESXi, Proxmox hoặc OpenStack để khởi tạo cụm Private Cloud riêng biệt cho tổ chức.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'AI / Deep Learning & Video Rendering' : 'Xử lý hình ảnh, Video Rendering & AI/ML',
      desc: isLaos 
        ? 'Leveraging dedicated multi-core CPUs and specialized GPU accelerators for model training, video encoding, and analytics.'
        : 'Tận dụng sức mạnh xử lý song song của CPU đa luồng và GPU chuyên dụng cho render đồ họa, xử lý video 4K/8K và huấn luyện mô hình AI.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            {t.desc}
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

                {/* Footer Link */}
                <div className="p-5 pt-0">
                  <VIDCAnchor
                    href="#pricing"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--vidc-color-brand-red)] group-hover:underline"
                  >
                    <span>{t.viewDetails}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </VIDCAnchor>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
