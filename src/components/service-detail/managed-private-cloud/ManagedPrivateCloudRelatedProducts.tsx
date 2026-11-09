import React from 'react';
import { Database, Shield, Server, ArrowUpRight, Cpu } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface ManagedPrivateCloudRelatedProductsProps {
  currentMarket?: SEAMarket;
  onOpenQuote?: () => void;
}

export const ManagedPrivateCloudRelatedProducts: React.FC<ManagedPrivateCloudRelatedProductsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'INTEGRATED ECOSYSTEM' : 'HỆ SINH THÁI TÍCH HỢP',
    headline: isLaos
      ? 'Complementary Solutions for Viettel Managed Private Cloud'
      : 'Giải pháp bổ trợ cho Viettel Managed Private Cloud',
    learnMore: isLaos ? 'Learn more' : 'Tìm hiểu thêm',
  };

  const products = [
    {
      title: 'Viettel Cloud Server (vCS)',
      desc: isLaos
        ? 'Enterprise public cloud server with instant provisioning, ultra-high IOPS NVMe storage, and flexible scalability.'
        : 'Máy chủ đám mây công cộng chuẩn doanh nghiệp, khởi tạo tức thì, lưu trữ NVMe tốc độ cao và mở rộng linh hoạt.',
      path: '/services/compute/cloud-server/',
      icon: Cpu,
    },
    {
      title: 'Viettel Dedicated Private Cloud',
      desc: isLaos
        ? 'Dedicated private cloud cluster hosted at Viettel Tier III Data Centers, offering high performance and full physical isolation.'
        : 'Đám mây dùng riêng đặt tại Data Center Viettel IDC chuẩn TIA-942 Rated 3, cam kết hiệu năng và cô lập vật lý tuyệt đối.',
      path: '/services/compute/open-dedicated-private-cloud/',
      icon: Database,
    },
    {
      title: 'Viettel Dedicated Compute (VDC)',
      desc: isLaos
        ? 'High-performance bare metal servers designed for big data, ERP SAP/HANA workloads, and raw processing power.'
        : 'Hạ tầng máy chủ vật lý dùng riêng chuyên biệt cho hệ cơ sở dữ liệu lớn, ERP và các tác vụ tính toán nặng.',
      path: '/services/compute/dedicated-compute/',
      icon: Server,
    },
    {
      title: 'Viettel Colocation (Data Center)',
      desc: isLaos
        ? 'Tier III / TIA-942 Rated 3 server colocation leasing across 9 modern carrier-neutral facilities in Vietnam.'
        : 'Không gian phòng máy tiêu chuẩn TIA-942 Rated 3 Constructed Facility, hạ tầng nguồn điện và làm mát dự phòng N+1 / 2N.',
      path: '/services/data-center/colocation/',
      icon: Shield,
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

        {/* Grid 4 Card Sản Phẩm Liên Quan */}
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
                  <VIDCAnchor
                    href={item.path}
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
