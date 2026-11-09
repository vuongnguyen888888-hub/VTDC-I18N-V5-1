import React from 'react';
import { Eye, ShieldAlert, Laptop, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface ThreatHuntingRelatedProductsProps {
  currentMarket?: SEAMarket;
  onNavigateService?: (path: string) => void;
}

export const ThreatHuntingRelatedProducts: React.FC<ThreatHuntingRelatedProductsProps> = ({
  currentMarket,
  onNavigateService,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'INTEGRATED ECOSYSTEM' : 'HỆ SINH THÁI TÍCH HỢP',
    headline: isLaos
      ? 'Complementary Security Solutions for Viettel Threat Hunting'
      : 'Giải pháp an ninh mạng bổ trợ cho Viettel Threat Hunting',
    learnMore: isLaos ? 'Learn more' : 'Tìm hiểu thêm',
  };

  const products = [
    {
      title: 'Viettel Threat Intelligence (VTI)',
      desc: isLaos
        ? 'Multi-tiered threat intelligence data enriching detection hypotheses and adversary profiling for active hunting.'
        : 'Cung cấp tri thức tình báo mối đe dọa đa tầng, bổ trợ dữ liệu nhận diện IoC/IoA cho hoạt động săn lùng mối nguy.',
      icon: Eye,
      path: '/services/security/threat-intelligence/',
    },
    {
      title: 'Viettel Virtual SOC (vSOC)',
      desc: isLaos
        ? '24/7 Security Operations Center continuously monitoring events and executing incident triage after proactive hunting.'
        : 'Trung tâm điều hành an ninh mạng giám sát 24/7, tiếp nhận dữ liệu telemetry và thực thi ứng phó sự cố sau khi rà soát.',
      icon: ShieldAlert,
      path: '/services/security/soc/',
    },
    {
      title: 'Viettel Endpoint Security (EDR/XDR)',
      desc: isLaos
        ? 'Comprehensive endpoint defense harvesting system telemetry and actively blocking stealth payloads.'
        : 'Giải pháp bảo vệ điểm cuối toàn diện thu thập telemetry hành vi và ngăn chặn mã độc tại máy trạm/máy chủ.',
      icon: Laptop,
      path: '/services/security/endpoint-security/',
    },
  ];

  return (
    <section 
      id="related-products" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)]"
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

        {/* Grid 3 Card Sản Phẩm Liên Quan matching CloudServerRelatedProducts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    onClick={() => onNavigateService && onNavigateService(item.path)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline group-hover:translate-x-1 transition-transform"
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
