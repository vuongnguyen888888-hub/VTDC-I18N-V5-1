import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface ManagedPrivateCloudUseCasesProps {
  currentMarket: SEAMarket;
  onOpenQuote?: () => void;
}

export const ManagedPrivateCloudUseCases: React.FC<ManagedPrivateCloudUseCasesProps> = ({ currentMarket, onOpenQuote }) => {
  const isLaos = currentMarket.code === 'la';

  const t = {
    eyebrow: isLaos ? 'PRACTICAL USE CASES' : 'KỊCH BẢN ỨNG DỤNG THỰC TẾ',
    headline: isLaos ? 'Typical Application Scenarios' : 'Các kịch bản ứng dụng tiêu biểu',
    subtitle: isLaos
      ? 'Designed for mission-critical enterprise workloads with strict compliance and high-performance demands.'
      : 'Được thiết kế cho các hệ sinh thái ứng dụng trọng yếu của doanh nghiệp với yêu cầu khắt khe về an toàn thông tin và tính sẵn sàng cao.',
    viewDetails: isLaos ? 'Consult on this use case' : 'Tư vấn kịch bản này',
  };

  const useCases = [
    {
      title: isLaos ? 'Enterprise Core Applications (ERP / SAP)' : 'Ứng dụng Doanh nghiệp & Hệ thống Trọng yếu (ERP / SAP)',
      desc: isLaos
        ? 'Operating ERP, SAP, Core Banking software requiring extreme compute performance, absolute availability, and dedicated 24/7 management.'
        : 'Vận hành các hệ thống ERP, SAP, Core Banking hoặc phần mềm nghiệp vụ lõi đòi hỏi hiệu năng tính toán cực cao, độ sẵn sàng tuyệt đối và quản trị nghiêm ngặt.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'High Security & Compliance (Sovereign Cloud)' : 'Hệ thống Yêu cầu Bảo mật & Tuân thủ (Sovereign Cloud)',
      desc: isLaos
        ? 'Financial, banking, insurance, and government sectors handling sensitive data requiring Sovereign Cloud compliance and physical on-site isolation.'
        : 'Khối tài chính, ngân hàng, bảo hiểm, tổ chức nhà nước xử lý dữ liệu nhạy cảm cần tuân thủ chủ quyền dữ liệu (Sovereign Cloud) và cô lập vật lý tại Data Center nội bộ.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'Hybrid Multi-Cloud Model' : 'Triển khai Mô hình Hybrid Cloud Đa nền tảng',
      desc: isLaos
        ? 'Seamlessly connecting and extending On-premises infrastructure with external cloud ecosystems into an agile, unified hybrid architecture.'
        : 'Kết nối mở rộng hạ tầng On-premises hiện hữu với các hệ sinh thái đám mây bên ngoài để tạo nên một kiến trúc linh hoạt, quản trị tập trung.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'Business Continuity & Disaster Recovery (BCP & DR)' : 'Tính liên tục Kinh doanh & Dự phòng Thảm họa (BCP & DR)',
      desc: isLaos
        ? 'Establishing an on-premises Production environment paired with a Managed Private Cloud DR site, ensuring optimal RPO and RTO.'
        : 'Thiết lập môi trường Production On-premises kết hợp site DR trên hạ tầng Managed Private Cloud, đảm bảo chỉ số RPO và RTO tối ưu cho tổ chức.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
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
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline group-hover:translate-x-1 transition-transform"
                  >
                    <span>{t.viewDetails}</span>
                    <ArrowUpRight className="w-4 h-4" />
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
