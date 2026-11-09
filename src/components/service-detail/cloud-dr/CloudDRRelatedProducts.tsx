import React from 'react';
import { Cloud, Database, Shield, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudDRRelatedProductsProps {
  currentMarket?: SEAMarket;
  onNavigateService?: (path: string) => void;
}

export const CloudDRRelatedProducts: React.FC<CloudDRRelatedProductsProps> = ({ 
  currentMarket, 
  onNavigateService 
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'INTEGRATED ECOSYSTEM' : 'HỆ SINH THÁI TÍCH HỢP',
    headline: isLaos ? 'Complementary Solutions for Viettel Cloud DR' : 'Giải pháp bổ trợ cho Viettel Cloud DR',
    learnMore: isLaos ? 'Learn more' : 'Tìm hiểu thêm',
  };

  const products = [
    {
      title: 'Viettel Virtual Private Cloud (vVPC)',
      desc: isLaos 
        ? 'Dedicated, highly secure multi-zone cloud infrastructure designed to deploy secondary DR sites and instantly run workloads post-failover.'
        : 'Hạ tầng đám mây dùng riêng an toàn, đa phân vùng để triển khai site DR hoặc mở rộng môi trường tính toán sau Failover.',
      icon: Cloud,
      path: '/services/compute/cloud-server/',
    },
    {
      title: 'Viettel Cloud Backup (BaaS)',
      desc: isLaos 
        ? 'Automated scheduled backup service protecting multiple restore points, ideally completing the 3-2-1 enterprise data protection rule.'
        : 'Dịch vụ sao lưu và khôi phục dữ liệu tự động nhiều mốc thời gian, hoàn thiện chiến lược bảo vệ an toàn dữ liệu 3-2-1.',
      icon: Database,
      path: '/services/storage/cloud-backup-baas/',
    },
    {
      title: 'Viettel Cloud Firewall',
      desc: isLaos 
        ? 'Next-generation perimeter firewall securing replication tunnels and shielding failover workloads from intrusion threats.'
        : 'Tường lửa thế hệ mới trên đám mây bảo vệ tuyệt đối đường truyền đồng bộ và hệ thống máy chủ khi kích hoạt dự phòng.',
      icon: Shield,
      path: '/services/security/cloud-firewall/',
    },
  ];

  const handleNav = (path: string) => {
    if (onNavigateService) {
      onNavigateService(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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

        {/* Grid 3 Card Sản Phẩm Liên Quan chuẩn CloudServer */}
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
                    onClick={() => handleNav(item.path)}
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
