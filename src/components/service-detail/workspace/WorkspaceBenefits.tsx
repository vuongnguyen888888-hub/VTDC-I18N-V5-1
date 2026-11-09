import React from 'react';
import { Zap, ShieldCheck, DollarSign, Headset, Award, Cloud } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface WorkspaceBenefitsProps {
  currentMarket?: SEAMarket;
}

export const WorkspaceBenefits: React.FC<WorkspaceBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'CORE BENEFITS' : 'LỢI ÍCH CỐT LÕI',
    headline: isLaos ? 'Why Choose Viettel Workspace?' : 'Tại sao nên lựa chọn Viettel Workspace?',
  };

  const benefits = [
    {
      icon: Zap,
      title: isLaos ? 'Unified 5-in-1 Platform' : 'Hợp nhất 5-trong-1 tiện lợi',
      desc: isLaos 
        ? 'Eliminates fragmented tools by providing Web, Email, Cloud Drive, Online Office & IAM in one single login.'
        : 'Gom toàn bộ nhu cầu quản trị website, email, lưu trữ tệp tin và văn phòng số vào một tài khoản duy nhất, tối ưu năng suất làm việc.',
    },
    {
      icon: ShieldCheck,
      title: isLaos ? 'Strict Data Sovereignty' : 'Chủ quyền & An toàn dữ liệu',
      desc: isLaos 
        ? '100% data hosted in Vietnam Data Centers complying with Decree 13/2023/ND-CP and ISO 27001 standards.'
        : '100% dữ liệu lưu trữ tại Data Center Việt Nam đạt chuẩn TIA-942 Rated 3, tuân thủ Luật An ninh mạng & Nghị định 13/2023/NĐ-CP.',
    },
    {
      icon: DollarSign,
      title: isLaos ? 'Cost-Effective in Local Currency' : 'Tối ưu chi phí & Thanh toán linh hoạt',
      desc: isLaos 
        ? 'Transparent billing in local VND, no foreign currency conversion fees, saving up to 40% compared to foreign SaaS.'
        : 'Tiết kiệm tới 40% chi phí bản quyền so với các giải pháp quốc tế, thanh toán nội tệ linh hoạt và không chịu rủi ro biến động tỷ giá.',
    },
    {
      icon: Headset,
      title: isLaos ? '24/7/365 Local Engineering Support' : 'Hỗ trợ kỹ thuật bản địa 24/7/365',
      desc: isLaos 
        ? 'Dedicated engineering support team speaking local language, providing direct Hotline & on-site assistance.'
        : 'Đội ngũ kỹ sư chuyên gia Viettel IDC thường trực 24/7, hỗ trợ chuyển đổi dữ liệu và xử lý sự cố trực tiếp qua Hotline 1800 8088.',
    },
    {
      icon: Award,
      title: isLaos ? 'SLA 99.99% Availability' : 'Cam kết chất lượng SLA 99.99%',
      desc: isLaos 
        ? 'High availability cloud infrastructure ensuring uninterrupted enterprise business continuity.'
        : 'Cam kết hệ thống vận hành liên tục và ổn định với chính sách đền bù dịch vụ minh bạch, rõ ràng theo hợp đồng cấp doanh nghiệp.',
    },
    {
      icon: Cloud,
      title: isLaos ? 'Elastic Scalability on Demand' : 'Mở rộng linh hoạt theo quy mô',
      desc: isLaos 
        ? 'Easily scale up accounts and storage quotas on the automated management portal without service interruption.'
        : 'Dễ dàng tăng giảm số lượng tài khoản nhân sự và dung lượng lưu trữ theo từng giai đoạn phát triển chỉ trong vài giây thao tác.',
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
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* Grid 6 Card Lợi ích */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 hover:border-slate-300 hover:shadow-md transition-all"
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
