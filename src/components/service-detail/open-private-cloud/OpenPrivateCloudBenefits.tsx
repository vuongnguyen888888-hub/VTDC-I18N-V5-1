import React from 'react';
import { Server, DollarSign, LayoutDashboard, ShieldCheck } from 'lucide-react';

export const OpenPrivateCloudBenefits: React.FC = () => {
  const pillars = [
    {
      icon: Server,
      title: 'Tự Thiết Lập Trung Tâm Dữ Liệu Ảo',
      desc: 'Loại bỏ toàn bộ sự phức tạp trong việc mua sắm, cài đặt phần cứng; mang đến gói giải pháp hoàn chỉnh sẵn sàng vận hành tại bất kỳ trung tâm dữ liệu tiêu chuẩn nào.',
    },
    {
      icon: DollarSign,
      title: 'Tiết Kiệm 20% – 30% Chi Phí & Triển Khai Linh Hoạt',
      desc: 'Giảm thiểu đáng kể ngân sách nghiên cứu, chi phí bản quyền phần mềm đóng gói, chi phí xây dựng và tối ưu nhân sự vận hành hạ tầng.',
    },
    {
      icon: LayoutDashboard,
      title: 'Giao Diện Quản Trị Chuyên Nghiệp',
      desc: 'Giám sát liên tục và chi tiết thông số RAM, CPU, IOPS, Bandwidth; tích hợp sẵn kho thư viện Template VM công cộng miễn phí giúp khởi tạo môi trường tức thì.',
    },
    {
      icon: ShieldCheck,
      title: 'Riêng Tư Tuyệt Đối & An Toàn Thông Tin',
      desc: 'Đảm bảo tính cô lập dữ liệu mức cao nhất, đáp ứng đầy đủ Thông tư 1145 của Bộ TT&TT, phù hợp tuyệt đối cho khối Ngân hàng, Chứng khoán, Tài chính (BFSI) và các Cơ quan Nhà nước.',
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
            Giá Trị Khác Biệt Cho Khách Hàng Doanh Nghiệp
          </h2>
        </div>

        {/* 4 Trụ Cột Lợi Ích Cốt Lõi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)] leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
