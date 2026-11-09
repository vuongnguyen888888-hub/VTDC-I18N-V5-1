import React from 'react';
import { Database, Shield, Layers, ArrowUpRight, Cpu, Server, HardDrive } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface OpenDedicatedPrivateCloudRelatedProductsProps {
  currentMarket?: SEAMarket;
}

export const OpenDedicatedPrivateCloudRelatedProducts: React.FC<OpenDedicatedPrivateCloudRelatedProductsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'INTEGRATED ECOSYSTEM' : 'HỆ SINH THÁI ĐÁM MÂY',
    headline: isLaos ? 'Complementary Cloud Solutions for Viettel oDPC' : 'Giải Pháp Bổ Trợ Cho Viettel oDPC',
    learnMore: isLaos ? 'Learn more' : 'Tìm hiểu thêm',
  };

  const products = [
    {
      title: 'Viettel Dedicated Private Cloud (vDPC)',
      desc: isLaos
        ? 'Enterprise private cloud powered by VMware vSphere virtualization platform.'
        : 'Đám mây riêng ảo hóa trên nền tảng VMware vSphere chuẩn Enterprise cho doanh nghiệp lớn.',
      icon: Cpu,
      path: '/services/compute/dedicated-private-cloud/',
    },
    {
      title: 'Viettel Cloud Server',
      desc: isLaos
        ? 'High-performance public cloud server with instant scaling and 99.99% SLA commitment.'
        : 'Máy chủ ảo đám mây công cộng hiệu năng cao, khởi tạo tức thì và tối ưu chi phí.',
      icon: Server,
      path: '/services/compute/cloud-server/',
    },
    {
      title: 'Viettel Cloud Backup (BaaS)',
      desc: isLaos
        ? 'Automated backup and disaster recovery service safeguarding your private cloud data.'
        : 'Dịch vụ sao lưu và khôi phục dữ liệu tự động cho máy chủ đám mây, bảo vệ trước Ransomware.',
      icon: Database,
      path: '/services/storage/cloud-backup/',
    },
    {
      title: 'Viettel Cloud Object Storage',
      desc: isLaos
        ? 'Massive scalable object storage compatible with standard AWS S3 API.'
        : 'Dịch vụ lưu trữ đối tượng dung lượng lớn, độ sẵn sàng 99.999999999% và tương thích S3 API.',
      icon: HardDrive,
      path: '/services/storage/object-storage/',
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
                  <h3 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors leading-snug">
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
