import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface CloudMigrationUseCasesProps {
  currentMarket?: SEAMarket;
}

export const CloudMigrationUseCases: React.FC<CloudMigrationUseCasesProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'REAL-WORLD APPLICATIONS' : 'ỨNG DỤNG THỰC TẾ',
    headline: isLaos ? 'Typical Migration Scenarios' : 'Các kịch bản ứng dụng tiêu biểu',
    subtitle: isLaos 
      ? 'Comprehensive solutions addressing migration challenges from legacy physical machines, on-premise clusters to foreign public clouds.'
      : 'Đáp ứng toàn diện mọi bài toán dịch chuyển hạ tầng từ máy chủ vật lý, cụm ảo hóa nội bộ đến chuyển đổi từ các đám mây công cộng quốc tế.',
    viewDetails: isLaos ? 'View details' : 'Xem chi tiết giải pháp',
  };

  const useCases = [
    {
      title: isLaos ? 'Cloud Repatriation from Foreign Clouds' : 'Hồi hương từ Public Cloud Quốc tế',
      desc: isLaos 
        ? 'Migrate compute, storage, and databases from AWS, Azure, and GCP back to Viettel Cloud to cut foreign exchange costs and comply with local data regulations.'
        : 'Chuyển đổi toàn diện máy ảo, lưu trữ và cơ sở dữ liệu từ AWS, Azure, GCP về Viettel Cloud nhằm tối ưu chi phí ngoại tệ và tuân thủ dữ liệu tại chỗ.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'On-Premises Physical-to-Cloud Migration' : 'Hiện đại hóa hạ tầng On-Premises (P2C / V2C)',
      desc: isLaos 
        ? 'Transform legacy Bare-Metal servers and VMware/Hyper-V virtualization clusters into agile, scalable cloud virtual servers without architectural disruption.'
        : 'Chuyển dịch các máy chủ vật lý (Bare-Metal) và cụm ảo hóa VMware, Hyper-V cũ lên môi trường đám mây hiện đại, giảm gánh nặng bảo trì thiết bị.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'Large-Scale Enterprise Database Migration' : 'Dịch chuyển Cơ sở dữ liệu & Lưu trữ lớn',
      desc: isLaos 
        ? 'Relocate mission-critical databases (Oracle, MS SQL, MySQL, PostgreSQL) and multi-terabyte file archives safely with verified checksums and near-zero downtime.'
        : 'Dịch chuyển an toàn các hệ quản trị CSDL quan trọng (Oracle RAC, MS SQL, PostgreSQL) và kho lưu trữ Terabyte với cam kết toàn vẹn dữ liệu tuyệt đối.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'Hybrid Cloud Multi-Tier Architecture' : 'Kiến trúc Đa đám mây & Di trú phân kỳ',
      desc: isLaos 
        ? 'Maintain sensitive transactional modules on-premise while seamlessly moving web tiers, analytics, and disaster recovery environments to Viettel Cloud.'
        : 'Duy trì các module nhạy cảm tại On-Premise đồng thời mở rộng ứng dụng web, phân tích dữ liệu và hệ thống DR sang Viettel Cloud qua kênh truyền tốc độ cao.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section 
      id="use-cases" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header matching Cloud Server */}
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

        {/* Grid 4 Card Ứng dụng matching Cloud Server */}
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
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
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
