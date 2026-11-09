import React from 'react';
import { RefreshCw, Database, Server, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudBackupRelatedProductsProps {
  currentMarket?: SEAMarket;
  onNavigateService?: (path: string) => void;
}

export const CloudBackupRelatedProducts: React.FC<CloudBackupRelatedProductsProps> = ({
  currentMarket,
  onNavigateService,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'INTEGRATED ECOSYSTEM' : 'HỆ SINH THÁI TÍCH HỢP',
    headline: isLaos ? 'Complementary Solutions for Viettel Cloud Backup' : 'Giải pháp bổ trợ cho Viettel Cloud Backup',
    learnMore: isLaos ? 'Learn more' : 'Tìm hiểu thêm',
  };

  const products = [
    {
      title: 'Viettel Cloud Disaster Recovery (DR)',
      desc: isLaos 
        ? 'Real-time replication and automated failover solution for complete virtual machines and datacenters with near-zero RTO/RPO.'
        : 'Giải pháp nhân bản và chuyển đổi dự phòng thảm họa tức thì cho toàn bộ hệ thống máy chủ với RTO/RPO gần như bằng 0.',
      icon: RefreshCw,
      link: '/services/storage/cloud-disaster-recovery/',
    },
    {
      title: 'Viettel Cloud Object Storage',
      desc: isLaos 
        ? 'Scalable S3-compatible object storage serving as an immutable, cost-effective long-term backup repository with Object Lock.'
        : 'Kho lưu trữ đối tượng dung lượng lớn chuẩn S3 API, làm nền tảng lưu trữ bản sao lưu dài hạn với chi phí tối ưu.',
      icon: Database,
      link: '/services/storage/cloud-object-storage/',
    },
    {
      title: 'Viettel Cloud Server',
      desc: isLaos 
        ? 'High-performance cloud virtual machines equipped with Enterprise SSD and automated daily snapshot integration.'
        : 'Máy chủ ảo thế hệ mới chuẩn quốc tế TIA-942 Rated 3, hiệu năng cao và sẵn sàng tích hợp giải pháp sao lưu tự động khép kín.',
      icon: Server,
      link: '/services/compute/cloud-server/',
    },
  ];

  const handleNav = (link: string) => {
    if (onNavigateService) {
      onNavigateService(link);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = link;
    }
  };

  return (
    <section 
      id="related-products" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-t border-slate-200"
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

        {/* Grid 3 Card Sản Phẩm Liên Quan Chuẩn TDV-01 */}
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
                    onClick={() => handleNav(item.link)}
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
