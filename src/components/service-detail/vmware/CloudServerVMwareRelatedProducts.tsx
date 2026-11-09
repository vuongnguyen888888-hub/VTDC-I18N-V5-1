import React from 'react';
import { Shield, ShieldAlert, Laptop, Server, ArrowRight } from 'lucide-react';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


export const CloudServerVMwareRelatedProducts: React.FC = () => {
  const products = [
    {
      icon: Shield,
      title: 'Viettel Cloudrity',
      desc: 'Giải pháp an toàn thông tin toàn diện trên nền tảng đám mây.',
    },
    {
      icon: ShieldAlert,
      title: 'Viettel Cloud Firewall',
      desc: 'Tường lửa đám mây thế hệ mới bảo vệ phân lớp cho hệ thống máy chủ ảo.',
    },
    {
      icon: Laptop,
      title: 'Viettel Endpoint Security',
      desc: 'Bảo vệ chuyên sâu điểm cuối và các ứng dụng vận hành doanh nghiệp.',
    },
    {
      icon: Server,
      title: 'Viettel Managed Service',
      desc: 'Dịch vụ quản trị, vận hành và ủy thác hạ tầng CNTT chuyên nghiệp 24/7.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]">
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            HỆ SINH THÁI ĐIỆN TOÁN
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            Hệ Sinh Thái Giải Pháp Tích Hợp Đề Xuất
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

                  <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div>
                  <VIDCAnchor
                    href="#quote"
                    onClick={(e) => { e.preventDefault(); alert(`Giải pháp ${item.title} đang được tích hợp.`); }}
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
