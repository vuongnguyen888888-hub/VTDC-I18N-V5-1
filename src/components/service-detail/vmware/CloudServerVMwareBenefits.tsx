import React from 'react';
import { ShieldCheck, DollarSign, Layers, Activity } from 'lucide-react';

export const CloudServerVMwareBenefits: React.FC = () => {
  const pillars = [
    {
      icon: Activity,
      title: 'Vận Hành Không Gián Đoạn',
      desc: 'Hạ tầng chuẩn Tier III với cam kết SLA 99,99%, đảm bảo dịch vụ luôn hoạt động ổn định, không gián đoạn.',
    },
    {
      icon: ShieldCheck,
      title: 'Bảo Mật Toàn Diện',
      desc: 'Hệ thống bảo mật đa lớp đạt các chứng chỉ quốc tế ISO 27001, ISO 27017, ISO 27018 và Chứng nhận ATTT Cấp độ 3, bảo vệ dữ liệu doanh nghiệp ở mức cao nhất.',
    },
    {
      icon: DollarSign,
      title: 'Chi Phí Tối Ưu',
      desc: 'Đa dạng gói cấu hình và hình thức thanh toán (hàng tháng hoặc Pay-as-you-go), giúp chuyển đổi CAPEX thành OPEX và chỉ trả đúng những gì bạn sử dụng.',
    },
    {
      icon: Layers,
      title: 'Phù Hợp Mọi Quy Mô',
      desc: 'Từ website cá nhân, landing page đến hệ thống ứng dụng doanh nghiệp, Viettel Cloud Server đáp ứng linh hoạt mọi nhu cầu triển khai.',
    },
  ];

  return (
    <section 
      id="benefits" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            LỢI ÍCH DOANH NGHIỆP
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            Giá Trị Vượt Trội Cho Doanh Nghiệp Số
          </h2>
        </div>

        {/* 4 Trụ Cột Giá Trị Cốt Lõi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
