import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


export const CloudServerVMwareUseCases: React.FC = () => {
  const useCases = [
    {
      title: 'Website & Ứng dụng Web',
      desc: 'Triển khai website, cổng thông tin và ứng dụng web trên Public Cloud, sẵn sàng mở rộng theo lưu lượng truy cập và nhu cầu kinh doanh.',
      fit: 'Phù hợp: Gói T2.GEN 01 – T2.GEN 06',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Hệ Thống Ứng Dụng Doanh Nghiệp',
      desc: 'Triển khai ERP, CRM, HRM, Email Server và các ứng dụng doanh nghiệp trên Cloud Server, giúp rút ngắn thời gian triển khai và đơn giản hóa vận hành.',
      fit: 'Phù hợp: Gói T2.GEN 07 – T2.GEN 09',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Cơ Sở Dữ Liệu & High-Performance',
      desc: 'Chuyên sâu cho Database quy mô lớn, Redis In-memory caching đòi hỏi mật độ RAM/vCPU vượt trội.',
      fit: 'Phù hợp: Dòng T2.MEM BURST 01 – 03',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Development & Testing',
      desc: 'Khởi tạo nhanh môi trường Development, Testing và UAT trên Public Cloud, dễ dàng mở rộng hoặc thu hồi tài nguyên theo từng giai đoạn phát triển.',
      fit: 'Phù hợp: Gói T2.GEN 01, T2.GEN 02',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
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
            KỊCH BẢN ỨNG DỤNG THỰC TẾ
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            Kịch Bản Ứng Dụng Theo Từng Quy Mô Doanh Nghiệp
          </h2>
        </div>

        {/* Grid 4 Card Use Cases */}
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
                    <img alt={item.title} src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-[10px] font-extrabold bg-white/90 backdrop-blur-sm text-slate-900 px-2.5 py-1 rounded-md border border-white/20 inline-block shadow-sm">
                        {item.fit}
                      </span>
                    </div>
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
                    <span>Xem bảng giá phù hợp</span>
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
