import React from 'react';
import { ArrowUpRight, ShieldCheck, Zap, Server, Save } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VirtualSocRelatedProductsProps {
  currentMarket?: SEAMarket;
  onNavigateService?: (path: string) => void;
}

export const VirtualSocRelatedProducts: React.FC<VirtualSocRelatedProductsProps> = ({
  currentMarket,
  onNavigateService,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'INTEGRATED ECOSYSTEM' : 'HỆ SINH THÁI TÍCH HỢP',
    headline: isLaos 
      ? 'Complementary Solutions for Viettel Virtual SOC' 
      : 'Giải pháp bổ trợ cho Viettel Virtual SOC',
    learnMore: isLaos ? 'Learn more' : 'Tìm hiểu thêm',
  };

  const products = [
    {
      title: 'Viettel Cloud WAF',
      path: '/services/security/cwaf/',
      desc: isLaos
        ? 'Next-gen cloud web application and API firewall defending against OWASP Top 10 vulnerabilities.'
        : 'Tường lửa bảo vệ ứng dụng Web và API, chống tấn công khai thác lỗ hổng và rò rỉ dữ liệu trực tuyến.',
      icon: ShieldCheck,
    },
    {
      title: 'Viettel Anti DDoS',
      path: '/services/security/anti-ddos/',
      desc: isLaos
        ? 'High-capacity volumetric multi-layer mitigation scrubbing traffic at domestic data centers.'
        : 'Hệ thống lọc sạch lưu lượng tấn công mạng đa lớp, đảm bảo dịch vụ vận hành thông suốt khi bị tấn công.',
      icon: Zap,
    },
    {
      title: 'Viettel Cloud Server',
      path: '/services/compute/cloud-server/',
      desc: isLaos
        ? 'High-security elastic virtual machines for core business workloads with 99.99% availability.'
        : 'Hạ tầng máy chủ ảo chuẩn Tier 3 cô lập mạng an toàn, tối ưu hiệu năng tính toán và lưu trữ.',
      icon: Server,
    },
    {
      title: 'Viettel Cloud Backup (BaaS)',
      path: '/services/storage/cloud-backup/',
      desc: isLaos
        ? 'Automated cloud backup and disaster recovery solutions defending against destructive ransomware.'
        : 'Dịch vụ sao lưu và khôi phục dữ liệu tự động, đảm bảo an toàn tuyệt đối trước mã độc tống tiền.',
      icon: Save,
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

        {/* Grid 4 Card Sản Phẩm Liên Quan (Matching CloudServerRelatedProducts styling) */}
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
