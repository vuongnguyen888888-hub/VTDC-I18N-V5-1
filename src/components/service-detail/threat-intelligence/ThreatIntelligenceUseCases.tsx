import React from 'react';
import { Landmark, ShoppingCart, Building2, ShieldCheck, AlertCircle, CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface ThreatIntelligenceUseCasesProps {
  currentMarket?: SEAMarket;
}

export const ThreatIntelligenceUseCases: React.FC<ThreatIntelligenceUseCasesProps> = ({
  currentMarket,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'TARGET AUDIENCE & USE CASES' : 'ĐỐI TƯỢNG & KỊCH BẢN ỨNG DỤNG',
    headline: isLaos
      ? 'Which Organizations Need Viettel Threat Intelligence?'
      : 'Doanh Nghiệp Nào Cần Triển Khai Viettel Threat Intelligence?',
    subtitle: isLaos
      ? 'Tailored threat monitoring strategies resolving domain-specific vulnerabilities across critical market sectors.'
      : 'Chiến lược tình báo và phòng thủ chuyên biệt hóa, giải quyết triệt để những thách thức an ninh mạng đặc thù theo từng ngành nghề.',
    challenge: isLaos ? 'Challenge:' : 'Thách thức:',
    solution: isLaos ? 'Implementation:' : 'Ứng dụng thực tế:',
  };

  const useCases = [
    {
      title: 'Ngân Hàng, Tài Chính & FinTech (BFSI)',
      icon: Landmark,
      badge: 'FINANCIAL SECTOR',
      challenge: 'Nguy cơ lừa đảo trực tuyến, giả mạo ứng dụng ngân hàng và rò rỉ dữ liệu thẻ thanh toán trên Dark Web.',
      solution: 'Kích hoạt gói Digital Risk Protection để phát hiện ngay các tập dữ liệu tài khoản/thẻ lộ lọt và dập tắt các chiến dịch Phishing giả mạo thương hiệu.',
    },
    {
      title: 'Thương Mại Điện Tử, Bán Lẻ & Doanh Nghiệp SaaS',
      icon: ShoppingCart,
      badge: 'E-COMMERCE & SAAS',
      challenge: 'Bị đánh cắp cơ sở dữ liệu người dùng, tài sản Cloud bị lộ lọt do cấu hình sai ngoài tầm kiểm soát.',
      solution: 'Sử dụng EASM để quét sạch tài sản trôi nổi trên Internet và kiểm soát các đường link rò rỉ API, thông tin khách hàng.',
    },
    {
      title: 'Doanh Nghiệp Vừa và Nhỏ (SMEs)',
      icon: Building2,
      badge: 'SMES & MID-MARKET',
      challenge: 'Chưa có đội ngũ SOC/Security chuyên trách, phản ứng chậm chạp trước các chiến dịch mã độc tống tiền (Ransomware).',
      solution: 'Gói Professional cung cấp Threat Feeds tự động cho tường lửa kết hợp dịch vụ đánh giá nhanh Threat Check để phát hiện sớm rủi ro.',
    },
    {
      title: 'Cơ Quan, Tập Đoàn Yêu Cầu Tuân Thủ Bảo Mật Cao',
      icon: ShieldCheck,
      badge: 'ENTERPRISE & GOV',
      challenge: 'Thường xuyên là mục tiêu của các nhóm tấn công APT có chủ đích và chiến dịch gián điệp mạng.',
      solution: 'Tích hợp Threat Feeds chuyên sâu kết hợp báo cáo tình báo APT để chủ động thiết lập chính sách ngăn chặn đa lớp.',
    },
  ];

  return (
    <section 
      id="use-cases" 
      className="py-16 md:py-24 bg-white text-[var(--vidc-legacy-hex-222225)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {useCases.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-[var(--vidc-color-brand-red)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                    {item.title}
                  </h3>

                  {/* Challenge Block */}
                  <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/60 text-xs text-amber-900 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">{t.challenge} </span>
                      <span>{item.challenge}</span>
                    </div>
                  </div>

                  {/* Solution Block */}
                  <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/60 text-xs text-emerald-900 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">{t.solution} </span>
                      <span>{item.solution}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
