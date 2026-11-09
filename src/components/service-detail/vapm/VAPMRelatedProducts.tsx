import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VAPMRelatedProductsProps {
  currentMarket?: SEAMarket;
  onNavigateService?: (path: string) => void;
}

export const VAPMRelatedProducts: React.FC<VAPMRelatedProductsProps> = ({
  currentMarket,
  onNavigateService,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'INTEGRATED ECOSYSTEM' : 'HỆ SINH THÁI TÍCH HỢP',
    headline: isLaos 
      ? 'Complementary Viettel Cloud Solutions' 
      : 'Sản phẩm & Dịch vụ liên quan',
    subtitle: isLaos
      ? 'Pair Viettel vAPM with scalable compute, container orchestration, and security for total enterprise cloud power.'
      : 'Kết hợp giải pháp Viettel vAPM cùng hạ tầng điện toán đám mây và an ninh bảo mật để kiến tạo nền tảng số vượt trội.',
    explore: isLaos ? 'Explore Service' : 'Xem chi tiết',
  };

  const products = [
    {
      tag: isLaos ? 'COMPUTE' : 'ĐIỆN TOÁN ĐÁM MÂY',
      title: 'Viettel Cloud Server (vServer)',
      desc: isLaos
        ? 'High-performance cloud virtual machines with Intel/AMD processors, NVMe storage, and 99.99% availability SLA.'
        : 'Máy chủ ảo hiệu năng cao, chip Intel/AMD thế hệ mới, ổ cứng thuần NVMe siêu tốc và cam kết SLA 99.99%.',
      path: '/services/compute/cloud-server',
    },
    {
      tag: isLaos ? 'CONTAINER & K8S' : 'CONTAINER & K8S',
      title: 'Viettel Kubernetes Service (vKS)',
      desc: isLaos
        ? 'Enterprise-ready managed Kubernetes clusters with automated scaling, load balancing, and built-in monitoring.'
        : 'Dịch vụ quản trị cụm Kubernetes tự động, tích hợp sẵn vAPM Agent, cân bằng tải linh hoạt và bảo mật đa lớp.',
      path: '/services/compute/kubernetes',
    },
    {
      tag: isLaos ? 'SECURITY & SOC' : 'AN TOÀN THÔNG TIN',
      title: 'Viettel Cloud Security & Virtual SOC',
      desc: isLaos
        ? 'Comprehensive cloud security suite featuring Next-Gen WAF, Anti-DDoS, and 24/7 Virtual SOC threat monitoring.'
        : 'Hệ thống bảo vệ toàn diện với Cloud WAF, Anti-DDoS chuyên dụng và trung tâm giám sát an ninh mạng SOC 24/7.',
      path: '/services/security/cloud-security',
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight mb-2">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[var(--vidc-color-brand-red)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-extrabold bg-white border border-slate-200 text-slate-700 tracking-wider">
                  {item.tag}
                </span>
                
                <h3 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/60">
                <VIDCNativeButton
                  type="button"
                  onClick={() => onNavigateService?.(item.path)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline cursor-pointer"
                >
                  <span>{t.explore}</span>
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
