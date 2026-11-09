import React from 'react';
import { Server, Database, HardDrive, ShieldCheck, ArrowRight, Layers } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudFileStorageRelatedProductsProps {
  currentMarket?: SEAMarket;
  onNavigateService?: (path: string) => void;
}

export const CloudFileStorageRelatedProducts: React.FC<CloudFileStorageRelatedProductsProps> = ({
  currentMarket,
  onNavigateService,
}) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'COMPREHENSIVE CLOUD ECOSYSTEM' : 'HỆ SINH THÁI SẢN PHẨM LIÊN QUAN',
    headline: isLaos
      ? 'Complementary Enterprise Cloud Solutions'
      : 'Hệ Sinh Thái Giải Pháp Đám Mây Doanh Nghiệp Bổ Trợ',
    desc: isLaos
      ? 'Seamlessly combine Viettel Cloud File Storage with our compute, object storage, and data protection services for an end-to-end digital foundation.'
      : 'Tích hợp hoàn hảo Viettel Cloud File Storage với hệ sinh thái điện toán, lưu trữ khối và sao lưu an toàn của Viettel IDC.',
    learnMore: isLaos ? 'Learn More →' : 'Tìm hiểu thêm →',
  };

  const related = [
    {
      icon: Server,
      title: 'Viettel Cloud Server',
      desc: isLaos
        ? 'High-performance cloud virtual machines directly connected to Cloud File Storage to share hierarchical data resources.'
        : 'Máy chủ ảo hiệu năng cao kết nối trực tiếp với Cloud File Storage để chia sẻ tài nguyên dữ liệu phân cấp.',
      link: '/services/compute/cloud-server/',
      tag: 'Compute',
    },
    {
      icon: Database,
      title: 'Viettel Cloud Object Storage',
      desc: isLaos
        ? 'S3-compatible object storage for distributed digital content, big data lakes, and static CDN origins.'
        : 'Dịch vụ lưu trữ đối tượng chuẩn S3 API cho các nội dung số phân tán và nền tảng CDN tĩnh.',
      link: '/services/storage/cloud-object-storage/',
      tag: 'Object Storage',
    },
    {
      icon: HardDrive,
      title: 'Viettel Cloud Block Storage',
      desc: isLaos
        ? 'Direct-attached block volume storage for virtual machines requiring ultra-low latency and maximum IOPS.'
        : 'Ổ đĩa lưu trữ khối gắn trực tiếp cho máy chủ ảo yêu cầu độ trễ thấp và IOPS cao nhất.',
      link: '/services/storage/cloud-block-storage/',
      tag: 'Block Storage',
    },
    {
      icon: ShieldCheck,
      title: 'Viettel Cloud Backup',
      desc: isLaos
        ? 'Automated and secure data backup and recovery solution for file systems and complete server infrastructures.'
        : 'Giải pháp sao lưu và bảo vệ dữ liệu tự động, an toàn cho hệ thống tệp và toàn bộ máy chủ.',
      link: '/services/storage/cloud-backup/',
      tag: 'Data Protection',
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
    <section className="py-16 md:py-24 bg-white text-slate-800 border-t border-slate-200">
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[var(--vidc-color-brand-red)] text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-snug">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            {t.desc}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map((prod, idx) => {
            const Icon = prod.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm border border-slate-100">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200 font-mono">
                      {prod.tag}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                    {prod.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {prod.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60">
                  <VIDCNativeButton
                    type="button"
                    onClick={() => handleNav(prod.link)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline cursor-pointer"
                  >
                    <span>{t.learnMore}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
