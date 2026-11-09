import React from 'react';
import { Server, Database, Shield, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudMigrationRelatedProductsProps {
  currentMarket?: SEAMarket;
  onNavigateService?: (serviceRoute: string) => void;
}

export const CloudMigrationRelatedProducts: React.FC<CloudMigrationRelatedProductsProps> = ({
  currentMarket,
  onNavigateService,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'INTEGRATED ECOSYSTEM' : 'HỆ SINH THÁI TÍCH HỢP',
    headline: isLaos 
      ? 'Target Cloud Infrastructure Ecosystem for Repatriation'
      : 'Hạ tầng điện toán đám mây tiếp nhận sau khi Migration',
    learnMore: isLaos ? 'Learn more' : 'Tìm hiểu thêm',
  };

  const products = [
    {
      title: 'Viettel Cloud Server',
      desc: isLaos 
        ? 'High-performance OpenStack virtual private servers providing scalable compute resources with 99.99% SLA commitment.'
        : 'Máy chủ ảo OpenStack hiệu năng cao, linh hoạt co giãn vCPU, RAM và ổ cứng SSD Enterprise với cam kết SLA 99.99%.',
      icon: Server,
      route: '/services/compute/cloud-server/',
    },
    {
      title: 'Viettel Cloud Backup (BaaS)',
      desc: isLaos 
        ? 'Automated backup and disaster recovery safeguarding post-migration cloud workloads against Ransomware and data loss.'
        : 'Giải pháp sao lưu và khôi phục dữ liệu tự động cho máy chủ đám mây, bảo vệ an toàn trước sự cố và mã độc tống tiền.',
      icon: Database,
      route: '/services/storage/cloud-backup/',
    },
    {
      title: 'Viettel Cloud Firewall',
      desc: isLaos 
        ? 'Next-generation cloud firewall shielding migrated multi-tier applications from cyber threats and unauthorized traffic.'
        : 'Tường lửa thế hệ mới trên Cloud bảo vệ toàn diện hạ tầng và ứng dụng sau khi chuyển đổi khỏi các nguy cơ xâm nhập mạng.',
      icon: Shield,
      route: '/services/security/cloud-firewall/',
    },
  ];

  return (
    <section 
      id="related-products" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header matching Cloud Server */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* Grid 3 Card Sản Phẩm Liên Quan matching Cloud Server */}
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
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <VIDCNativeButton
                    type="button"
                    onClick={() => onNavigateService?.(item.route)}
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
