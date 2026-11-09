import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface VAPMUseCasesProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const VAPMUseCases: React.FC<VAPMUseCasesProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'TYPICAL APPLICATIONS' : 'ỨNG DỤNG THỰC TẾ',
    headline: isLaos 
      ? 'Typical Scenarios & Industry Use Cases' 
      : 'Các kịch bản ứng dụng & Ngành nghề tiêu biểu',
    subtitle: isLaos
      ? 'Viettel vAPM delivers deep real-time observability across diverse industries and mission-critical applications.'
      : 'Viettel vAPM đáp ứng toàn diện mọi yêu cầu giám sát từ các đợt cao điểm giao dịch trực tuyến đến các hệ sinh thái tài chính và doanh nghiệp lớn.',
    viewDetail: isLaos ? 'Explore solution' : 'Xem giải pháp',
  };

  const useCases = [
    {
      title: isLaos ? 'E-Commerce & Flash Sales' : 'Thương Mại Điện Tử & Flash Sale',
      desc: isLaos
        ? 'Detect traffic spikes, checkout bottleneck API latency, and database locks instantly during flash sale campaigns.'
        : 'Kiểm soát tải đỉnh, phát hiện độ trễ API thanh toán và điểm nghẽn Database tức thì trong các chiến dịch Mega Sale.',
      image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: isLaos ? 'Fintech & Digital Banking' : 'Fintech, Ngân Hàng & Ví Điện Tử',
      desc: isLaos
        ? 'End-to-end distributed tracing across core banking services, guaranteeing strict PCI-DSS compliance and high Apdex satisfaction.'
        : 'Trace liên thông các giao dịch tài chính phân tán, đảm bảo tính liên tục của cổng thanh toán và tuân thủ tiêu chuẩn an toàn.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: isLaos ? 'Kubernetes & Microservices' : 'Kiến Trúc Microservices & K8s',
      desc: isLaos
        ? 'Visualize service dependencies, inter-service gRPC/REST latencies, and automatically pinpoint crashing pods.'
        : 'Hiển thị sơ đồ kết nối giữa hàng chục microservices, đo độ trễ gọi chéo REST/gRPC và định vị pod gặp sự cố ngay lập tức.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: isLaos ? 'Enterprise Digital Transformation' : 'Cổng Dịch Vụ Công & Doanh Nghiệp',
      desc: isLaos
        ? 'Monitor multi-tier enterprise ERP, CRM, and portal applications across hybrid cloud and on-premises data centers.'
        : 'Giám sát toàn diện hệ thống ERP, CRM, Cổng dịch vụ công phục vụ hàng triệu công dân và nhân viên doanh nghiệp.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
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
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((uc, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-50 border border-slate-200/90 overflow-hidden hover:border-[var(--vidc-color-brand-red)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img alt={uc.title} src={uc.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-2.5">
                  <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors leading-snug">
                    {uc.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {uc.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Action Link */}
              <div className="p-5 pt-0">
                <VIDCAnchor
                  href="#pricing"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <span>{t.viewDetail}</span>
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
