import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudBackupUseCasesProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: (notes?: string) => void;
}

export const CloudBackupUseCases: React.FC<CloudBackupUseCasesProps> = ({ currentMarket, onOpenConsult }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'REAL-WORLD APPLICATIONS' : 'KỊCH BẢN ỨNG DỤNG',
    headline: isLaos ? 'Practical Deployment Scenarios of Viettel BaaS' : 'Kịch bản triển khai sao lưu & phục hồi thực tế',
    subtitle: isLaos 
      ? 'Comprehensive protection for production workloads, Microsoft 365 SaaS, physical bare-metal, and enterprise databases.'
      : 'Ứng dụng linh hoạt cho các bài toán bảo vệ hệ thống sản xuất, sao lưu Microsoft 365, máy chủ vật lý và cơ sở dữ liệu doanh nghiệp.',
    viewDetails: isLaos ? 'Consult this solution' : 'Nhận tư vấn giải pháp',
  };

  const useCases = [
    {
      title: isLaos ? 'Disaster Recovery & Primary Failover' : 'Dự phòng thảm họa & Thay thế hệ thống chính',
      desc: isLaos 
        ? 'Safeguards core production servers against cyberattacks, hardware failures, and disasters with instant cloud recovery.'
        : 'Sao lưu và nhân bản toàn diện máy chủ chính lên Viettel Cloud, sẵn sàng kích hoạt thay thế khi hệ thống tại chỗ gặp sự cố hoặc tấn công mã độc.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      notes: 'Tư vấn kịch bản: Dự phòng thảm họa & Thay thế hệ thống chính (Disaster Recovery)',
    },
    {
      title: isLaos ? 'Microsoft 365 SaaS Protection' : 'Bảo vệ bộ ứng dụng văn phòng Microsoft 365',
      desc: isLaos 
        ? 'Guards Exchange Online emails, OneDrive documents, SharePoint sites, and Teams against accidental deletion or ransomware.'
        : 'Sao lưu độc lập dữ liệu hộp thư Exchange, OneDrive, SharePoint và Teams, chống lại nguy cơ xóa nhầm, tài khoản bị xâm nhập hoặc tống tiền.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      notes: 'Tư vấn kịch bản: Sao lưu bảo vệ Microsoft 365 (Exchange, OneDrive, SharePoint, Teams)',
    },
    {
      title: isLaos ? 'Physical Servers & Hybrid Cloud Backup' : 'Sao lưu máy chủ vật lý & Mô hình Hybrid Cloud',
      desc: isLaos 
        ? 'Automates offsite backups from on-prem bare-metal servers to cloud storage without purchasing expensive local tape drives.'
        : 'Tự động hóa sao lưu máy chủ vật lý tại văn phòng/chi nhánh lên hạ tầng đám mây Viettel qua kênh truyền bảo mật, hỗ trợ Bare-metal restore.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      notes: 'Tư vấn kịch bản: Sao lưu máy chủ vật lý & Mô hình Hybrid Cloud',
    },
    {
      title: isLaos ? 'Mission-Critical Databases (SQL/Oracle)' : 'Bảo vệ cơ sở dữ liệu trọng yếu & ERP/CRM',
      desc: isLaos 
        ? 'Transaction-consistent snapshots for MS SQL Server, Oracle RAC, MySQL, and PostgreSQL with point-in-time recovery.'
        : 'Sao lưu chuẩn tính nhất quán giao dịch cho các hệ quản trị CSDL lớn, phần mềm kế toán, ERP, CRM với khả năng khôi phục về từng giây chính xác.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      notes: 'Tư vấn kịch bản: Sao lưu bảo vệ cơ sở dữ liệu trọng yếu & ERP/CRM',
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

        {/* Grid 4 Card Ứng dụng Chuẩn TDV-01 */}
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
                    onClick={() => handleAction(item.notes)}
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
