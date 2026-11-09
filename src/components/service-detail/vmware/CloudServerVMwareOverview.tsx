import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const CloudServerVMwareOverview: React.FC = () => {
  const highlights = [
    'Xây dựng trên nền tảng ảo hóa VMware chuẩn doanh nghiệp hàng đầu thế giới.',
    'Tài nguyên độc lập hoàn toàn, hỗ trợ băng thông mặc định 300 Mbps Unlimited Data kèm 01 IP tĩnh.',
    'Triển khai an toàn trên hệ thống Data Center đạt chuẩn Tier III tại Miền Bắc và Miền Nam.',
    'Quản trị toàn diện, tập trung và giám sát dễ dàng qua giao diện Web Portal trực quan.',
  ];

  return (
    <section 
      id="overview" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            TỔNG QUAN DỊCH VỤ
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            Tổng Quan Kiến Trúc &amp; Năng Lực Vận Hành Của Viettel Cloud Server (VMware)
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Cột trái (Nội dung giải pháp) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              Viettel Cloud Server là dịch vụ máy chủ ảo trên nền tảng VMware, mang đến hạ tầng điện toán đám mây ổn định, linh hoạt và bảo mật cho mọi quy mô doanh nghiệp. Mỗi máy chủ ảo được cấp phát tài nguyên độc lập, dễ dàng khởi tạo và quản trị qua Web Portal trực quan, với khả năng mở rộng CPU, RAM, Storage và Network chỉ trong vài phút.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Hạ tầng được triển khai tại các Data Center chuẩn Tier III, đạt các chứng chỉ quốc tế ISO 20000-1:2018, ISO 22301:2019, ISO 27001:2022, ISO 27017 và ISO 27018, đảm bảo hiệu năng cao, độ sẵn sàng 99,99% và an toàn dữ liệu tuyệt đối.
            </p>

            {/* Key Highlights */}
            <div className="space-y-3.5 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                  <div className="p-1.5 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-semibold text-[var(--vidc-legacy-hex-222225)] leading-snug">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Cột phải (Khung video 16:9) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/8kL9kM3M2W4?autoplay=0&rel=0"
                title="Viettel Cloud Server VMware Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
