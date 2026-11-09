import React from 'react';
import { 
  TrendingUp, 
  PiggyBank, 
  PhoneIncoming, 
  ShieldCheck, 
  Award, 
  Headset,
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface VoiceBrandnameBenefitsProps {
  currentMarket?: SEAMarket;
}

export const VoiceBrandnameBenefits: React.FC<VoiceBrandnameBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'CORE BENEFITS' : 'LỢI ÍCH CỐT LÕI',
    headline: isLaos ? 'Why Choose Viettel Voice Brandname?' : 'Tại sao lựa chọn Viettel Voice Brandname?',
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: isLaos ? 'Brand Recognition Growth' : 'Tăng trưởng nhận diện thương hiệu',
      desc: isLaos 
        ? 'Every call displays your official business name directly on client screens, boosting recall and trust.'
        : 'Toàn bộ cuộc gọi đến khách hàng đều hiển thị tên doanh nghiệp/nhãn hàng, tạo dựng uy tín và gia tăng nhận diện vượt trội.',
    },
    {
      icon: PhoneIncoming,
      title: isLaos ? 'Breakthrough Call Pickup Rates' : 'Đột phá tỉ lệ bắt máy (>90%)',
      desc: isLaos 
        ? 'Customers immediately recognize the caller identity, virtually eliminating spam rejection and hesitation.'
        : 'Khách hàng chủ động nhận diện rõ thương hiệu liên hệ, an tâm nghe máy và triệt tiêu nguy cơ bị nhận diện là cuộc gọi rác.',
    },
    {
      icon: PiggyBank,
      title: isLaos ? 'Capex & Hotline Cost Optimization' : 'Tối ưu chi phí đầu số & Hotline',
      desc: isLaos 
        ? 'No need for high-cost vanity phone numbers or multiple SIM cards; all outbound lines gain instant brand identity.'
        : 'Không cần tốn chi phí mua và duy trì các đầu số đẹp đắt đỏ, mọi đường truyền SIP Trunk đều đồng bộ tên thương hiệu.',
    },
    {
      icon: ShieldCheck,
      title: isLaos ? '100% Legal & Regulatory Standard' : 'Chuẩn hóa pháp lý & Nghị định 91',
      desc: isLaos 
        ? 'Strict compliance with telco standards and Authority of Information Security (MIC) certification.'
        : 'Đáp ứng đầy đủ quy trình định danh khắt khe của Bộ TT&TT, đảm bảo tính pháp lý an toàn và minh bạch tuyệt đối.',
    },
    {
      icon: ShieldAlert,
      title: isLaos ? 'Spam Prevention & Impersonation Defense' : 'Chống mạo danh & Bảo vệ khách hàng',
      desc: isLaos 
        ? 'Shields enterprise reputation against phishing and fake hotline scams in the financial and e-commerce sectors.'
        : 'Bảo vệ uy tín thương hiệu khỏi vấn nạn lừa đảo giả mạo tổng đài, tạo lá chắn niềm tin vững chắc cho khách hàng.',
    },
    {
      icon: Headset,
      title: isLaos ? '24/7 Dedicated Support & Legal Onboarding' : 'Hỗ trợ trọn gói hồ sơ & Kỹ thuật 24/7',
      desc: isLaos 
        ? 'Full guidance through Cục ATTT registration with 24/7 carrier-grade engineering support.'
        : 'Đội ngũ chuyên gia Viettel IDC hỗ trợ trọn gói thủ tục cấp giấy phép định danh và đồng hành kỹ thuật 24/7/365.',
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
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 hover:border-[var(--vidc-color-brand-red)] hover:shadow-md transition-all"
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

