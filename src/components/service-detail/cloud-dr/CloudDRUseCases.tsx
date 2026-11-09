import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudDRUseCasesProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: (notes?: string) => void;
}

export const CloudDRUseCases: React.FC<CloudDRUseCasesProps> = ({ currentMarket, onOpenConsult }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'REAL-WORLD APPLICATIONS' : 'ỨNG DỤNG THỰC TẾ',
    headline: isLaos ? 'Disaster Recovery Application Scenarios' : 'Các kịch bản ứng dụng dự phòng thảm họa tiêu biểu',
    subtitle: isLaos 
      ? 'Comprehensive DR blueprints engineered for BFSI, enterprise ERPs, public services, and multi-zone cloud continuity.'
      : 'Bảo vệ toàn diện hệ thống tài chính ngân hàng, ERP doanh nghiệp, dữ liệu trọng yếu và kịch bản dự phòng đa vùng Zone-to-Zone.',
    viewDetails: isLaos ? 'Consult this scenario' : 'Xem chi tiết giải pháp',
  };

  const useCases = [
    {
      title: isLaos ? 'Banking & Financial Services (BFSI)' : 'Khối Ngân hàng & Tài chính (BFSI)',
      desc: isLaos 
        ? 'Real-time replication from On-Premises to Viettel Cloud with RTO ~10m, ensuring zero financial disruption and full regulatory compliance.'
        : 'Nhân bản thời gian thực từ On-Premises lên Viettel Cloud với chỉ số RTO ~10 phút, tuân thủ nghiêm ngặt quy định dự phòng của ngành tài chính.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      notes: 'Tư vấn kịch bản: Khối Ngân hàng & Tài chính (BFSI)',
    },
    {
      title: isLaos ? 'Enterprise Core ERP & CRM Systems' : 'Hệ thống ERP & CRM doanh nghiệp lớn',
      desc: isLaos 
        ? 'Safeguarding SAP, Oracle, and enterprise production databases from hardware failures or disasters with automatic 1-Click Failover.'
        : 'Bảo vệ cơ sở dữ liệu SAP, Oracle và hệ thống nghiệp vụ sản xuất cốt lõi với kịch bản chuyển đổi dự phòng 1-Click Failover.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      notes: 'Tư vấn kịch bản: Hệ thống ERP & CRM doanh nghiệp lớn',
    },
    {
      title: isLaos ? 'Public Sector & Mission-Critical Data' : 'Dịch vụ công & Hệ thống dữ liệu trọng yếu',
      desc: isLaos 
        ? 'Multi-layered defense with ISO 27001 & ISO 27017 standards, ensuring uninterrupted 24/7 civil and administrative services.'
        : 'Hạ tầng đáp ứng tiêu chuẩn an toàn bảo mật ISO 27001 & ISO 27017, duy trì tính thông suốt 24/7 cho các cổng dịch vụ công trực tuyến.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      notes: 'Tư vấn kịch bản: Dịch vụ công & Hệ thống dữ liệu trọng yếu',
    },
    {
      title: isLaos ? 'Multi-Zone Cloud Redundancy' : 'Dự phòng liên vùng đám mây (Zone-to-Zone)',
      desc: isLaos 
        ? 'Disaster recovery between Zone A and Zone B within Viettel IDC, protecting vVPC & vDPC architectures across distinct geographies.'
        : 'Chuyển đổi dự phòng giữa Zone A sang Zone B trong cùng hạ tầng Viettel IDC, bảo vệ môi trường vVPC và vDPC giữa các miền địa lý.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      notes: 'Tư vấn kịch bản: Dự phòng liên vùng đám mây (Zone-to-Zone)',
    },
  ];

  const handleAction = (notes: string) => {
    if (onOpenConsult) {
      onOpenConsult(notes);
    } else {
      const el = document.getElementById('pricing');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

        {/* Grid 4 Card Ứng dụng chuẩn CloudServer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((item, idx) => (
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
                  onClick={() => handleAction(item.notes)}
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
