import React from 'react';
import { PiggyBank, Clock, GitBranch, Headphones, CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface ColocationBenefitsProps {
  currentMarket?: SEAMarket;
}

export const ColocationBenefits: React.FC<ColocationBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'CORE BENEFITS' : 'LỢI ÍCH DOANH NGHIỆP',
    headline: isLaos
      ? 'Advantages When Choosing Viettel IDC Colocation'
      : 'Lợi Thế Khi Lựa Chọn Thuê Chỗ Đặt Tại Viettel IDC',
  };

  const benefits = [
    {
      icon: PiggyBank,
      title: 'Tối Ưu Ngân Sách Đầu Tư',
      desc: 'Tránh chi phí xây dựng và bảo trì phòng máy chủ nội bộ đắt đỏ, tận dụng hạ tầng Data Center chuẩn quốc tế có sẵn.',
    },
    {
      icon: Clock,
      title: 'Vận Hành Ổn Định 24/7',
      desc: 'Cam kết uptime 99.98%, loại bỏ rủi ro mất điện hay sự cố môi trường làm gián đoạn hệ thống.',
    },
    {
      icon: GitBranch,
      title: 'Linh Hoạt Đa Kết Nối',
      desc: 'Tự do lựa chọn nhà cung cấp dịch vụ viễn thông và thiết lập các kịch bản dự phòng kết nối (backup link).',
    },
    {
      icon: Headphones,
      title: 'Hỗ Trợ Kỹ Thuật Chủ Động',
      desc: 'Đội ngũ kỹ sư trực 24/7, chủ động kiểm tra thiết bị 2 lần/ngày và cảnh báo kịp thời sự cố phần cứng.',
    },
  ];

  return (
    <section 
      id="benefits" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f8fafc)] text-[var(--vidc-legacy-hex-0f172a)] border-b border-slate-200"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* Grid 4 Trụ Cột Giá Trị Cốt Lõi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                id={`benefit-card-${idx}`}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
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
