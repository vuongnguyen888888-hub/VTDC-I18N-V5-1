import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudWafUseCasesProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const CloudWafUseCases: React.FC<CloudWafUseCasesProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'APPLICATIONS & SCENARIOS' : 'ỨNG DỤNG THỰC TẾ',
    headline: isLaos 
      ? 'Typical Deployment Scenarios of Viettel Cloud WAF'
      : 'Các Kịch Bản Ứng Dụng Tiêu Biểu Của Viettel Cloud WAF',
    subtitle: isLaos
      ? 'Engineered to safeguard diverse high-exposure web applications, mission-critical banking APIs, high-volume retail portals, and distributed multi-cloud architectures.'
      : 'Đáp ứng toàn diện các bài toán an toàn thông tin khắt khe cho cổng thông tin điện tử, ứng dụng tài chính ngân hàng, thương mại điện tử và hạ tầng đa đám mây.',
    consultLink: isLaos ? 'Consult architecture' : 'Tư vấn giải pháp',
  };

  const useCases = [
    {
      title: isLaos ? 'E-Commerce & Online Retail Portals' : 'Thương Mại Điện Tử & Bán Lẻ Trực Tuyến',
      desc: isLaos
        ? 'Safeguards online flash sales, shopping carts, and checkout flows against malicious automated scalper bots, credential stuffing, and sudden Layer 7 DDoS surges during marketing campaigns.'
        : 'Bảo vệ website bán hàng, cổng thanh toán trước các đợt bão truy cập mùa khuyến mãi, ngăn chặn Bot vét hàng, Brute Force mật khẩu tài khoản và tấn công DDoS làm sập hệ thống.',
      image: 'https://images.unsplash.com/photo-1556742049-0a67e557204f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'Finance, Banking & Fintech Platforms' : 'Tài Chính, Ngân Hàng & Ví Điện Tử (Fintech)',
      desc: isLaos
        ? 'Protects financial transaction APIs, mobile banking backends, and payment gateways. Stops Magecart digital skimming, fulfills PCI-DSS compliance, and sanitizes untrusted API traffic.'
        : 'Lá chắn bảo mật vững chắc cho ứng dụng ngân hàng số, cổng thanh toán và giao dịch tài chính. Chống đánh cắp thông tin thẻ (Magecart), đáp ứng nghiêm ngặt chuẩn PCI-DSS.',
    },
    {
      title: isLaos ? 'Government & Public Sector Portals' : 'Cơ Quan Nhà Nước & Cổng Dịch Vụ Công',
      desc: isLaos
        ? 'Shields national public administrative portals, citizen records databases, and official websites against politically motivated defacements, data exfiltration, and large-scale volumetric DDoS.'
        : 'Bảo vệ cổng thông tin điện tử hành chính công và cơ sở dữ liệu quốc gia trước các đợt tấn công thay đổi giao diện (Defacement), rò rỉ dữ liệu công dân và tấn công phá hoại diện rộng.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'Multi-Cloud & Hybrid Enterprise Architectures' : 'Doanh Nghiệp Đa Đám Mây & Hybrid Cloud',
      desc: isLaos
        ? 'Unifies web application firewall governance across multi-cloud environments (AWS, Azure, Viettel Cloud, on-premises datacenters) under a centralized security dashboard without modifying origin configurations.'
        : 'Thiết lập điểm kiểm soát an ninh mạng tập trung cho các ứng dụng chạy phân tán trên nhiều nền tảng đám mây khác nhau hoặc kết hợp hạ tầng tại chỗ (On-Premises).',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section 
      id="use-cases" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight mb-2">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* 4-Card Grid chuẩn Cloud Server */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((uc, idx) => (
            <div 
              key={idx}
              className="rounded-2xl bg-slate-50 border border-slate-200/90 overflow-hidden hover:border-[var(--vidc-color-brand-red)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img alt={uc.title} src={uc.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </div>

                <div className="p-5 space-y-2.5">
                  <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors leading-snug">
                    {uc.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {uc.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <VIDCNativeButton
                  type="button"
                  onClick={onOpenConsult}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <span>{t.consultLink}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </VIDCNativeButton>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
