import React from 'react';
import { DollarSign, Zap, Rocket, ShieldCheck, RefreshCw, Server } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface VKSBenefitsProps {
  currentMarket?: SEAMarket;
}

export const VKSBenefits: React.FC<VKSBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'CORE BENEFITS' : 'LỢI ÍCH CỐT LÕI',
    headline: isLaos 
      ? 'Why Choose Viettel Kubernetes Service (vKS)?' 
      : 'Tại sao lựa chọn Viettel Kubernetes Service (vKS)?',
  };

  const benefits = [
    {
      icon: DollarSign,
      title: 'Tối Ưu Chi Phí & Nguồn Lực CNTT',
      desc: 'Tiết kiệm tới 40% chi phí đầu tư phần cứng ban đầu và chi phí nhân sự vận hành hệ thống. Cơ chế tự động co giãn giúp tối đa hóa hiệu suất sử dụng tài nguyên.',
    },
    {
      icon: RefreshCw,
      title: 'Tự Động Hóa Vận Hành Siêu Đơn Giản',
      desc: 'Loại bỏ hoàn toàn gánh nặng cài đặt, vá lỗi hệ điều hành và bảo trì Master Nodes phức tạp; đội ngũ kỹ sư tập trung 100% vào việc phát triển tính năng ứng dụng cốt lõi.',
    },
    {
      icon: Rocket,
      title: 'Tăng Tốc Chu Kỳ Phát Hành Sản Phẩm (Time-to-Market)',
      desc: 'Rút ngắn thời gian release phiên bản mới từ vài tuần xuống chỉ còn vài phút thông qua quy trình CI/CD tích hợp, nâng cao năng lực cạnh tranh cho doanh nghiệp.',
    },
    {
      icon: ShieldCheck,
      title: 'Bảo Mật Cấp Doanh Nghiệp & Chủ Quyền Dữ Liệu',
      desc: 'Hạ tầng lưu trữ và vận hành 100% tại các Trung tâm dữ liệu Viettel IDC đạt chuẩn ANSI/TIA-942 Rated 3, tuân thủ Luật An ninh mạng và Nghị định 13/2023/NĐ-CP.',
    },
    {
      icon: Zap,
      title: 'Cam Kết SLA 99.99% Chuẩn Quốc Tế',
      desc: 'Đảm bảo hoạt động liên tục với chính sách đền bù dịch vụ rõ ràng, cụm Control Plane được bảo vệ bởi kiến trúc phân tán Multi-Master HA.',
    },
    {
      icon: Server,
      title: 'Tương Thích Tuyệt Đối Đa Đám Mây (CNCF Certified)',
      desc: '100% tuân thủ tiêu chuẩn mã nguồn mở Kubernetes, không bị phụ thuộc nhà cung cấp (Zero Vendor Lock-in), dễ dàng di chuyển tải làm việc giữa các Cloud.',
    },
  ];

  return (
    <section 
      id="benefits" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header - Exactly like CloudServerBenefits */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* Grid 6 Card Lợi ích - Exactly like CloudServerBenefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3"
              >
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                  <IconComp className="w-5 h-5" />
                </div>

                <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
