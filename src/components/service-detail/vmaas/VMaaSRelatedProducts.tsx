import React from 'react';
import { Database, Shield, Layers, Server, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface VMaaSRelatedProductsProps {
  currentMarket?: SEAMarket;
  onNavigateService?: (path: string) => void;
}

export const VMaaSRelatedProducts: React.FC<VMaaSRelatedProductsProps> = ({ currentMarket, onNavigateService }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'INTEGRATED ECOSYSTEM' : 'HỆ SINH THÁI TÍCH HỢP',
    headline: isLaos ? 'Complementary Solutions for Viettel Model as a Service' : 'Giải pháp bổ trợ cho Viettel Model as a Service',
    learnMore: isLaos ? 'Learn more' : 'Tìm hiểu thêm',
  };

  const products = [
    {
      title: 'Viettel Cloud Server',
      desc: isLaos 
        ? 'High-performance virtual computing servers to host enterprise backend services, RAG APIs, and AI Agent workflows.'
        : 'Máy chủ ảo hiệu năng cao vận hành các ứng dụng backend, API Gateway và luồng tự động hóa kết nối tới vMaaS.',
      icon: Server,
      path: '/services/compute/cloud-server/',
    },
    {
      title: 'Viettel Cloudrity (Security)',
      desc: isLaos 
        ? 'Next-generation cloud security and WAF solution safeguarding your AI API endpoints from DDoS and intrusions.'
        : 'Giải pháp bảo mật đám mây và WAF thông minh bảo vệ cổng API AI khỏi các cuộc tấn công mạng và rò rỉ dữ liệu.',
      icon: Shield,
      path: '/services/security/cloudrity/',
    },
    {
      title: 'Viettel Load Balancer',
      desc: isLaos 
        ? 'Smart traffic load balancing solution that boosts availability and throughput for enterprise AI applications.'
        : 'Cân bằng tải lưu lượng truy cập thông minh, tối ưu hóa độ trễ và độ sẵn sàng cho các hệ thống AI quy mô lớn.',
      icon: Layers,
      path: '/services/networking/interconnection/',
    },
  ];

  return (
    <section 
      id="related-products" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-t border-[var(--vidc-legacy-hex-e8eaed)]"
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
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:border-[var(--vidc-color-brand-red)] hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-200/60">
                  <VIDCAnchor
                    href={item.path}
                    onClick={(e) => {
                      if (onNavigateService) {
                        e.preventDefault();
                        onNavigateService(item.path);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[var(--vidc-color-brand-red)] group-hover:translate-x-1 transition-transform"
                  >
                    <span>{t.learnMore}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </VIDCAnchor>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
