import React from 'react';
import { ArrowUpRight, ShieldCheck, Laptop, Network, Globe } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface ThreatIntelligenceRelatedProductsProps {
  currentMarket?: SEAMarket;
  onNavigateService?: (path: string) => void;
}

export const ThreatIntelligenceRelatedProducts: React.FC<ThreatIntelligenceRelatedProductsProps> = ({
  currentMarket,
  onNavigateService,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'INTEGRATED SECURITY ECOSYSTEM' : 'HỆ SINH THÁI AN NINH MẠNG TÍCH HỢP',
    headline: isLaos
      ? 'Comprehensive Complementary Security Solutions'
      : 'Hệ Sinh Thái An Toàn Thông Tin Tích Hợp Toàn Diện',
    learnMore: isLaos ? 'Learn more' : 'Tìm hiểu thêm',
  };

  const products = [
    {
      title: 'Viettel Virtual SOC (vSOC)',
      path: '/services/security/soc/',
      desc: isLaos
        ? 'Next-gen 24/7/365 security operations center ingesting TI feeds for proactive threat hunting and triage.'
        : 'Trung tâm điều hành an ninh mạng thông minh 24/7, tiếp nhận dữ liệu từ TI để tự động săn lùng và ứng cứu sự cố.',
      icon: ShieldCheck,
    },
    {
      title: 'Viettel Endpoint Security',
      path: '/services/security/endpoint-security/',
      desc: isLaos
        ? 'Multi-layered host and endpoint protection powered by machine learning and real-time IoC synchronization.'
        : 'Bảo vệ toàn diện máy chủ ảo và thiết bị đầu cuối với công nghệ Machine Learning và cập nhật IoC tức thì.',
      icon: Laptop,
    },
    {
      title: 'Viettel Cloud Firewall (VCF)',
      path: '/services/security/cloud-firewall/',
      desc: isLaos
        ? 'Next-generation firewall (NGFW) consuming automated Threat Feeds to block malicious ingress traffic at network borders.'
        : 'Tường lửa thế hệ mới (NGFW) nạp dữ liệu Threat Feed để ngăn chặn lưu lượng độc hại ngay tại cửa ngõ.',
      icon: Network,
    },
    {
      title: 'Viettel Cloudrity / CWAF',
      path: '/services/security/cwaf/',
      desc: isLaos
        ? 'Web application and API protection shielding online portals against OWASP Top 10 exploits and Layer 7 anomalies.'
        : 'Tường lửa bảo vệ ứng dụng Web và API, ngăn chặn tấn công Top 10 OWASP và triệt tiêu DDoS.',
      icon: Globe,
    },
  ];

  return (
    <section 
      id="related-products" 
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
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[var(--vidc-color-brand-red)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <VIDCNativeButton
                    type="button"
                    onClick={() => {
                      if (onNavigateService) {
                        onNavigateService(item.path);
                      } else {
                        window.location.href = item.path;
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>{t.learnMore}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </VIDCNativeButton>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
