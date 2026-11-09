import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface OpenDedicatedPrivateCloudUseCasesProps {
  currentMarket?: SEAMarket;
}

export const OpenDedicatedPrivateCloudUseCases: React.FC<OpenDedicatedPrivateCloudUseCasesProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'REAL-WORLD APPLICATIONS' : 'ỨNG DỤNG THỰC TẾ',
    headline: isLaos ? 'Typical Application Scenarios for Viettel oDPC' : 'Kịch Bản Ứng Dụng Thực Tiễn Viettel oDPC',
    subtitle: isLaos 
      ? 'Meeting the demands of mission-critical systems requiring strict isolation, performance, and cost savings.'
      : 'Đáp ứng toàn diện các bài toán nghiệp vụ phức tạp từ khối tài chính, ngân hàng đến các nền tảng công nghệ số hiện đại.',
    viewDetails: isLaos ? 'View details' : 'Xem chi tiết giải pháp',
  };

  const useCases = [
    {
      title: 'Tài chính, Ngân hàng & Fintech',
      desc: 'Yêu cầu môi trường vận hành bảo mật khắt khe, tài nguyên phần cứng cô lập 100% để bảo vệ an toàn thông tin giao dịch và tuân thủ PCI-DSS, SBV.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Nền tảng Thương mại Điện tử & Retail',
      desc: 'Đáp ứng các đợt tăng đột biến lưu lượng truy cập (Flash Sale, Mega Campaign) nhờ năng lực mở rộng tức thì và cân bằng tải vLB tích hợp sẵn.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Doanh nghiệp Phát triển Phần mềm & SaaS',
      desc: 'Xây dựng môi trường Dev/Test và Production chuẩn hóa, tận dụng hệ sinh thái Kubernetes (VKS) và Database (VDBS) miễn phí tối ưu CI/CD.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Cơ quan Nhà nước & Khối Y tế - Giáo dục',
      desc: 'Đảm bảo dữ liệu quốc gia và hồ sơ chuyên ngành được lưu trữ an toàn trong nước, tuân thủ Luật An ninh mạng và tiết kiệm tối đa ngân sách.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
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
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
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
                  <VIDCAnchor
                    href="#pricing"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline group-hover:translate-x-1 transition-transform"
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
