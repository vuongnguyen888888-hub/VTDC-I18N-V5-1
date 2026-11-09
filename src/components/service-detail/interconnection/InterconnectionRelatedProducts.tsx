import React from 'react';
import { Server, Cloud, Shield, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface InterconnectionRelatedProductsProps {
  currentMarket?: SEAMarket;
}

export const InterconnectionRelatedProducts: React.FC<InterconnectionRelatedProductsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'INTEGRATED ECOSYSTEM' : 'HỆ SINH THÁI TÍCH HỢP',
    headline: isLaos 
      ? 'Complementary Solutions for Viettel Interconnection' 
      : 'Giải pháp bổ trợ cho Viettel Interconnection',
    learnMore: isLaos ? 'Learn more' : 'Tìm hiểu thêm',
  };

  const products = [
    {
      title: 'Viettel Colocation (Chỗ đặt máy chủ)',
      desc: isLaos 
        ? 'Enterprise Data Center colocation facilities certified to Rated 3 - TIA-942 with direct ODF cross-connects.'
        : 'Hạ tầng chỗ đặt máy chủ tiêu chuẩn quốc tế Rated 3 - TIA-942, đấu nối trực tiếp tới kênh truyền riêng biệt.',
      icon: Server,
    },
    {
      title: 'Viettel Cloud Connect',
      desc: isLaos 
        ? 'High-speed dedicated private direct connections from enterprise on-premise racks to AWS, Azure, GCP, and Viettel Cloud.'
        : 'Kết nối trực tiếp chuyên dụng tốc độ cao từ tủ rack tới các đám mây công cộng hàng đầu AWS, Azure, GCP và Viettel Cloud.',
      icon: Cloud,
    },
    {
      title: 'Viettel Anti-DDoS & Clean Pipe',
      desc: isLaos 
        ? 'Carrier-grade volumetric DDoS mitigation filtering malicious packets before reaching enterprise leased line gateways.'
        : 'Hệ thống tường lửa lọc sạch lưu lượng tấn công DDoS cấp nhà mạng, bảo vệ cổng Internet và kênh truyền doanh nghiệp.',
      icon: Shield,
    },
  ];

  return (
    <section 
      id="related-products" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header (Centered like CloudServerRelatedProducts) */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* Grid 3 Card Sản Phẩm Liên Quan (Exact CloudServerRelatedProducts layout) */}
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
                  <VIDCAnchor
                    href="#pricing"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline group-hover:translate-x-1 transition-transform"
                  >
                    <span>{t.learnMore}</span>
                    <ArrowUpRight className="w-4 h-4" />
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
