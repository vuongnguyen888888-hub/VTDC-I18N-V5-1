import React from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VCMPRelatedProductsProps {
  currentMarket?: SEAMarket;
  onNavigateService?: (path: string) => void;
}

export const VCMPRelatedProducts: React.FC<VCMPRelatedProductsProps> = ({
  currentMarket,
  onNavigateService,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'INTEGRATED CLOUD ECOSYSTEM' : 'HỆ SINH THÁI TÍCH HỢP',
    headline: isLaos 
      ? 'Complementary Cloud & Infrastructure Ecosystem by Viettel IDC' 
      : 'Hệ Sinh Thái Đám Mây & Hạ Tầng Tích Hợp Viettel IDC',
    subtitle: isLaos
      ? 'Pair Viettel vCMP with dedicated hybrid networks, virtual private clouds, and managed Kubernetes for a complete cloud backbone.'
      : 'Kết hợp giải pháp Viettel vCMP cùng các dịch vụ hạ tầng điện toán, mạng truyền dẫn và container để hoàn thiện kiến trúc đám mây doanh nghiệp.',
    explore: isLaos ? 'Learn More →' : 'Tìm hiểu thêm →',
  };

  const products = [
    {
      tag: isLaos ? 'HYBRID NETWORKING' : 'KẾT NỐI HYBRID',
      title: 'Viettel Hybrid Connect',
      desc: isLaos
        ? 'Dedicated high-speed private connections bridging On-Premises Data Centers securely with Multi-Cloud ecosystems.'
        : 'Kênh truyền riêng chuyên biệt kết nối an toàn giữa Data Center On-Premises và hệ sinh thái Đa đám mây.',
      path: '/services/networking/hybrid-connect',
    },
    {
      tag: isLaos ? 'VIRTUAL PRIVATE CLOUD' : 'MÁY CHỦ ẢO & VPC',
      title: 'Viettel Virtual Private Cloud (vVPC)',
      desc: isLaos
        ? 'Secure enterprise-grade virtual data center natively integrated into vCMP for unified provisioning and lifecycle control.'
        : 'Trung tâm dữ liệu ảo an toàn, tích hợp trực tiếp vào giao diện điều phối của vCMP.',
      path: '/services/compute/virtual-private-cloud',
    },
    {
      tag: isLaos ? 'MANAGED PRIVATE CLOUD' : 'ĐÁM MÂY RIÊNG ỦY THÁC',
      title: 'Viettel Managed Private Cloud (vMPC)',
      desc: isLaos
        ? 'Turnkey dedicated private cloud hosted at client DCs or Viettel tier 3+ data centers, centrally governed via vCMP.'
        : 'Giải pháp đám mây riêng ủy thác đặt tại trung tâm dữ liệu khách hàng, quản trị đồng nhất trên vCMP.',
      path: '/services/compute/managed-private-cloud',
    },
    {
      tag: isLaos ? 'CONTAINER & K8S' : 'CONTAINER ORCHESTRATION',
      title: 'Viettel Open Kubernetes Service (VKS)',
      desc: isLaos
        ? 'CNCF-certified managed Kubernetes platform, provisioned and automated effortlessly through vCMP templates.'
        : 'Nền tảng điều phối container đạt chuẩn CNCF, triển khai và tự động hóa qua vCMP.',
      path: '/services/containers/kubernetes-service',
    },
  ];

  return (
    <section 
      id="related-products" 
      className="py-16 md:py-24 bg-white text-[var(--vidc-legacy-hex-222225)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            <Layers className="w-3.5 h-3.5" />
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight mb-3">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[var(--vidc-color-brand-red)] hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-extrabold bg-white border border-slate-200 text-slate-700 tracking-wider">
                  {item.tag}
                </span>
                
                <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors leading-snug">
                  {item.title}
                </h3>
                
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60">
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
