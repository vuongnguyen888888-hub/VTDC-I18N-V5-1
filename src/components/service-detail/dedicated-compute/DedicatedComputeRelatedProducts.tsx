import React from 'react';
import { Database, Shield, Layers, Server, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface DedicatedComputeRelatedProductsProps {
  currentMarket?: SEAMarket;
}

export const DedicatedComputeRelatedProducts: React.FC<DedicatedComputeRelatedProductsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'INTEGRATED ECOSYSTEM' : 'HỆ SINH THÁI TÍCH HỢP',
    headline: isLaos ? 'Complementary Solutions for Viettel Server Leasing' : 'Giải pháp bổ trợ cho Viettel Server Leasing',
    learnMore: isLaos ? 'Learn more' : 'Tìm hiểu thêm',
  };

  const products = [
    {
      title: 'Viettel Colocation',
      desc: isLaos 
        ? 'Data center space, power, cooling, and rack hosting for enterprises already owning physical hardware.'
        : 'Dịch vụ thuê chỗ đặt máy chủ trong Trung tâm Dữ liệu đạt chuẩn quốc tế TIA-942 Rated 3 với nguồn điện dự phòng 2N.',
      icon: Server,
      link: '/services/data-center/colocation',
    },
    {
      title: 'Viettel Cloud Backup (BaaS)',
      desc: isLaos 
        ? 'Automated backup and disaster recovery service safeguarding your physical server data from Ransomware.'
        : 'Dịch vụ sao lưu và khôi phục dữ liệu tự động cho máy chủ vật lý, bảo vệ an toàn trước sự cố và mã độc tống tiền.',
      icon: Database,
      link: '/services/security-compliance/backup-dr',
    },
    {
      title: 'Viettel Anti-DDoS & Hardware Firewall',
      desc: isLaos 
        ? 'Dedicated network security and Layer 3-7 DDoS mitigation safeguarding physical servers from high-volume cyber attacks.'
        : 'Hệ thống tường lửa chuyên dụng và giải pháp chống tấn công DDoS bảo vệ toàn diện hạ tầng máy chủ kết nối mạng.',
      icon: Shield,
      link: '/services/security-compliance/anti-ddos',
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
                  <VIDCAnchor
                    href={item.link || "#pricing"}
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
