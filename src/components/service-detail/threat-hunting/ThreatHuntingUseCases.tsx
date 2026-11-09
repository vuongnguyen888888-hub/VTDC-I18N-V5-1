import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface ThreatHuntingUseCasesProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: (notes?: string) => void;
}

export const ThreatHuntingUseCases: React.FC<ThreatHuntingUseCasesProps> = ({ 
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'REAL-WORLD APPLICATIONS' : 'ỨNG DỤNG THỰC TẾ',
    headline: isLaos ? 'Typical Application Scenarios' : 'Các kịch bản ứng dụng tiêu biểu',
    subtitle: isLaos
      ? 'Tailored to meet the most rigorous security demands across financial sectors, hybrid enterprises, and mission-critical networks.'
      : 'Đáp ứng hoàn hảo mọi nhu cầu bảo mật khắt khe từ khối Ngân hàng - Tài chính đến các doanh nghiệp sở hữu hạ tầng quy mô lớn.',
    viewDetails: isLaos ? 'View details & consult' : 'Xem chi tiết giải pháp',
  };

  const useCases = [
    {
      title: isLaos ? 'Financial Institutions & FinTech' : 'Tổ Chức Tài Chính, Ngân Hàng & FinTech',
      desc: isLaos
        ? 'Safeguarding core banking transactions and customer records against targeted APT campaigns through periodic in-depth hunts.'
        : 'Thường xuyên đối mặt với các chiến dịch APT có chủ đích nhắm vào giao dịch và cơ sở dữ liệu nhạy cảm cần được rà soát định kỳ chuyên sâu.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'Complex Hybrid Multi-Cloud Infrastructures' : 'Hạ Tầng Số Phức Tạp (Multi-Cloud / Hybrid)',
      desc: isLaos
        ? 'Eliminates perimeter blind spots across AWS, Azure, and On-premise datacenters, mapping lateral movement behaviors.'
        : 'Các hệ thống quy mô lớn, nhiều điểm mù an ninh mạng cần săn lùng nguy cơ tiềm ẩn mà các công cụ tự động riêng lẻ bỏ sót.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'Organizations Facing SOC Alert Fatigue' : 'Tổ Chức Đang Quá Tải Cảnh Báo (Alert Fatigue)',
      desc: isLaos
        ? 'Filtering out thousands of daily false positives, optimizing SIEM/EDR detection rules for focused incident response.'
        : 'Đội ngũ an ninh mạng bị quá tải bởi hàng ngàn cảnh báo giả mỗi ngày, cần sàng lọc để tập trung vào mối đe dọa thật sự.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'Post-Incident Recovery & Pre-GoLive' : 'Doanh Nghiệp Sau Sự Cố Hoặc Nâng Cấp Lớn',
      desc: isLaos
        ? 'Thorough root-cause investigation ensuring zero persistent backdoors or compromised accounts remain in the network.'
        : 'Cần kiểm tra toàn diện nhằm đảm bảo tin tặc không còn cài cắm mã độc cửa sau (Backdoor) hoặc tài khoản ẩn danh trong hệ thống.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
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

        {/* Grid 4 Cards Ứng dụng matching CloudServerUseCases */}
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
                    onClick={() => onOpenConsult && onOpenConsult(`Tư vấn giải pháp Threat Hunting cho: ${item.title}`)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline group-hover:translate-x-1 transition-transform"
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
