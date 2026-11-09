import React from 'react';
import { Cloud, Server, Database, Network, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface HybridConnectRelatedProductsProps {
  currentMarket?: SEAMarket;
}

export const HybridConnectRelatedProducts: React.FC<HybridConnectRelatedProductsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'ECOSYSTEM INTEGRATION' : 'HỆ SINH THÁI GIẢI PHÁP ĐÁM MÂY TÍCH HỢP',
    headline: isLaos 
      ? 'Recommended Integrated Cloud & Infrastructure Solutions' 
      : 'Hệ Sinh Thái Giải Pháp Đám Mây Tích Hợp Đề Xuất',
    learnMore: isLaos ? 'Learn more →' : 'Tìm hiểu thêm →',
  };

  const products = [
    {
      icon: Cloud,
      title: 'Viettel Virtual Private Cloud (vVPC)',
      desc: isLaos
        ? 'Secure virtual data center with advanced SDN networking and seamless Hybrid Connect integration.'
        : 'Trung tâm dữ liệu ảo bảo mật, tích hợp mạng SDN và đấu nối Hybrid Connect mượt mà.',
      href: '/services/cloud/virtual-private-cloud',
    },
    {
      icon: Database,
      title: 'Viettel Dedicated Private Cloud (vDPC)',
      desc: isLaos
        ? 'Dedicated private cloud with physically isolated hardware for mission-critical enterprise workloads.'
        : 'Đám mây dùng riêng biệt lập hoàn toàn về phần cứng cho các ứng dụng trọng yếu.',
      href: '/services/cloud/dedicated-private-cloud',
    },
    {
      icon: Server,
      title: 'Viettel Colocation',
      desc: isLaos
        ? 'International Rated 3 – TIA-942 certified data center colocation with instant intra-DC cross-connects to Cloud.'
        : 'Dịch vụ thuê chỗ đặt máy chủ chuẩn quốc tế Rated 3 - TIA-942, dễ dàng kéo kênh nội bộ lên Cloud.',
      href: '/services/data-center/colocation',
    },
    {
      icon: Network,
      title: 'Viettel Cloud Connect',
      desc: isLaos
        ? 'Direct private dedicated connection from Data Center to global Hyperscale Clouds (AWS Direct Connect, Azure ExpressRoute, GCP).'
        : 'Mở rộng kết nối kênh truyền riêng trực tiếp từ Data Center tới các Hyperscale Cloud toàn cầu (AWS, Azure, GCP).',
      href: '/services/networking/cloud-connect',
    },
  ];

  return (
    <section 
      id="related-products" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header (Centered) */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* Grid 4 Card Dịch Vụ Bổ Trợ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-4 hover:border-[var(--vidc-color-brand-red)] hover:shadow-md transition-all group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  
                  <h3 className="text-sm sm:text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/60">
                  <VIDCAnchor
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline"
                  >
                    <span>{t.learnMore}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
