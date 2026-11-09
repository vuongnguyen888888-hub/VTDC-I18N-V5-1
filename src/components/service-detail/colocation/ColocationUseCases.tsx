import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface ColocationUseCasesProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const ColocationUseCases: React.FC<ColocationUseCasesProps> = ({ currentMarket, onOpenConsult }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'REAL-WORLD APPLICATIONS' : 'ỨNG DỤNG THỰC TẾ',
    headline: isLaos ? 'Real-world Application Scenarios of Viettel Colocation' : 'Kịch Bản Ứng Dụng Thực Tế Của Viettel Colocation',
    viewDetails: isLaos ? 'View details' : 'Xem chi tiết giải pháp',
  };

  const useCases = [
    {
      title: 'Doanh nghiệp vận hành dự án dài hạn',
      desc: 'Doanh nghiệp có nguồn tài chính ổn định, đầu tư máy chủ riêng và cần môi trường phòng máy chuẩn để đảm bảo tuổi thọ thiết bị.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Ngân hàng & Tổ chức Tài chính',
      desc: 'Triển khai hạ tầng Core Banking, thanh toán với yêu cầu bảo mật sinh trắc học, giám sát camera nghiêm ngặt và phân khu Cage riêng.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Hệ thống có đội ngũ tự quản trị',
      desc: 'Đơn vị sở hữu đội ngũ IT chuyên trách, cần toàn quyền truy cập vật lý và điều hành cấu hình máy chủ.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Xây dựng Trung tâm Dự phòng (Disaster Recovery Site)',
      desc: 'Đặt hệ thống máy chủ dự phòng thảm họa ngoài trụ sở chính, kết nối đa kênh truyền bảo mật.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section 
      id="use-cases" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-0f172a)] border-b border-slate-200"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* Grid 4 Card Use Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((item, idx) => (
            <div 
              key={idx}
              id={`usecase-card-${idx}`}
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
                  <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-0f172a)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <VIDCNativeButton
                  type="button"
                  onClick={onOpenConsult}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <span>{t.viewDetails}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </VIDCNativeButton>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
