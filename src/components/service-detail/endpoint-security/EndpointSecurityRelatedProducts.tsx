import React from 'react';
import { ShieldCheck, Flame, Server, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface EndpointSecurityRelatedProductsProps {
  currentMarket?: SEAMarket;
  onNavigateService?: (slug: string) => void;
  onOpenConsult?: (serviceName?: string) => void;
}

export const EndpointSecurityRelatedProducts: React.FC<EndpointSecurityRelatedProductsProps> = ({
  currentMarket,
  onNavigateService,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'INTEGRATED ECOSYSTEM' : 'HỆ SINH THÁI TÍCH HỢP',
    headline: isLaos 
      ? 'Complementary Solutions for Endpoint Security' 
      : 'Giải pháp bổ trợ cho Viettel Endpoint Security',
    learnMore: isLaos ? 'Learn more' : 'Tìm hiểu thêm',
  };

  const products = [
    {
      title: 'Viettel Cloudrity (vCloudrity)',
      desc: isLaos 
        ? 'Cloud Web Application Firewall (WAF) and multi-layered anti-DDoS protection defending web applications.'
        : 'Tường lửa bảo vệ website, ứng dụng web và chống tấn công DDoS đa tầng trên đám mây.',
      icon: ShieldCheck,
      slug: '/services/security/cloudrity/',
    },
    {
      title: 'Viettel Cloud Firewall (vFW)',
      desc: isLaos 
        ? 'Next-generation cloud network firewall defending virtual subnets and server clusters from network intrusions.'
        : 'Tường lửa thế hệ mới trên đám mây phân lớp mạng bảo vệ máy chủ đám mây khỏi tấn công mạng.',
      icon: Flame,
      slug: '/services/security/cloud-firewall/',
    },
    {
      title: 'Viettel Cloud Server (vCS)',
      desc: isLaos 
        ? 'Enterprise cloud computing nodes fully optimized and pre-configured for Endpoint Security agents.'
        : 'Máy chủ ảo hóa chuẩn doanh nghiệp, tối ưu hiệu năng chạy kèm Agent Endpoint Security.',
      icon: Server,
      slug: '/services/compute/cloud-server/',
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

        {/* Grid 3 Card Sản Phẩm Liên Quan */}
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
                    onClick={() => onNavigateService?.(item.slug)}
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
