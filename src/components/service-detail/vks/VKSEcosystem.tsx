import React from 'react';
import { Package, Shield, Layers, Database, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VKSEcosystemProps {
  currentMarket?: SEAMarket;
  onNavigateService?: (path: string) => void;
}

export const VKSEcosystem: React.FC<VKSEcosystemProps> = ({ currentMarket, onNavigateService }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'INTEGRATED ECOSYSTEM' : 'HỆ SINH THÁI TÍCH HỢP',
    headline: isLaos 
      ? 'Complementary Solutions for Viettel Kubernetes Service' 
      : 'Giải pháp bổ trợ cho Viettel Kubernetes Service (vKS)',
    learnMore: isLaos ? 'Learn more' : 'Tìm hiểu thêm',
  };

  const products = [
    {
      title: 'Viettel Container Registry (vCR)',
      desc: isLaos
        ? 'Secure private container registry integrated with vulnerability scanning and ultrafast image pull directly to vKS clusters.'
        : 'Kho lưu trữ ảnh container bảo mật riêng tư, tích hợp quét lỗ hổng bảo mật tự động và hỗ trợ kéo Image siêu tốc trực tiếp vào cụm vKS.',
      icon: Package,
      path: '/services/container-registry',
    },
    {
      title: 'Viettel Cloud Firewall & WAF',
      desc: isLaos
        ? 'Protect Kubernetes Ingress endpoints from DDoS, SQL Injection, Cross-site scripting (XSS) and OWASP Top 10 exploits.'
        : 'Bảo vệ các cổng Ingress của cụm Kubernetes trước các cuộc tấn công DDoS, SQL Injection, XSS và top 10 lỗ hổng bảo mật web OWASP.',
      icon: Shield,
      path: '/services/security/cloud-firewall',
    },
    {
      title: 'Viettel Cloud Load Balancer (vLB)',
      desc: isLaos
        ? 'High availability Layer 4 and Layer 7 traffic routing across distributed worker nodes with health checks and SSL offloading.'
        : 'Giải pháp cân bằng tải thông minh L4 và L7 phân phối lưu lượng truy cập tối ưu giữa các Worker Nodes, tự động kiểm tra sức khỏe và SSL Offloading.',
      icon: Layers,
      path: '/services/network/load-balancer',
    },
  ];

  return (
    <section 
      id="related-products" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header - Exactly like CloudServerRelatedProducts */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* Grid 3 Card Sản Phẩm Liên Quan - Exactly like CloudServerRelatedProducts */}
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
                    onClick={() => onNavigateService ? onNavigateService(item.path) : undefined}
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
