import React from 'react';
import { ShieldCheck, Database, Network, Headphones, ArrowRight } from 'lucide-react';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


export const OpenPrivateCloudRelatedProducts: React.FC = () => {
  const products = [
    {
      icon: Database,
      title: 'Viettel Cloud Backup & DR',
      desc: 'Giải pháp sao lưu dữ liệu tự động và xây dựng kịch bản dự phòng thảm họa liên vùng cho Private Cloud.',
    },
    {
      icon: ShieldCheck,
      title: 'Viettel Cloud Security & Anti-DDoS',
      desc: 'Giải pháp an toàn thông tin chuyên sâu bảo vệ lớp kết nối Public và ứng dụng web.',
    },
    {
      icon: Network,
      title: 'Viettel Hybrid Connect',
      desc: 'Thiết lập kênh truyền riêng biệt, bảo mật cao kết nối hệ thống Private Cloud với Data Center On-premise của doanh nghiệp.',
    },
    {
      icon: Headphones,
      title: 'Viettel Managed Services',
      desc: 'Dịch vụ ủy thác quản trị, giám sát và vận hành hạ tầng chuyên nghiệp 24/7 từ chuyên gia Viettel IDC.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]">
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            HỆ SINH THÁI TÍCH HỢP
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            Hệ Sinh Thái Giải Pháp Đám Mây Bổ Trợ
          </h2>
        </div>

        {/* Grid 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div>
                  <VIDCAnchor
                    href="#quote"
                    onClick={(e) => { e.preventDefault(); alert(`Giải pháp ${item.title} đang được tích hợp vào hệ thống.`); }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline group-hover:translate-x-1 transition-transform"
                  >
                    <span>Tìm hiểu thêm</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
