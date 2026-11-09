import React from 'react';
import { Files, Database, Cloud, HardDrive, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface CloudObjectStorageRelatedProductsProps {
  currentMarket?: SEAMarket;
}

export const CloudObjectStorageRelatedProducts: React.FC<CloudObjectStorageRelatedProductsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'INTEGRATED CLOUD ECOSYSTEM' : 'HỆ SINH THÁI TÍCH HỢP',
    headline: isLaos ? 'Complementary Cloud Solutions' : 'Hệ Sinh Thái Giải Pháp Đám Mây Bổ Trợ',
    desc: isLaos
      ? 'Seamlessly combine Viettel Cloud Object Storage with shared file systems, enterprise backups, and private cloud infrastructure.'
      : 'Kết hợp hoàn hảo Viettel Cloud Object Storage cùng hệ thống lưu trữ tệp chia sẻ, giải pháp sao lưu tự động và nền tảng đám mây riêng.',
    learnMore: isLaos ? 'Learn more' : 'Tìm hiểu thêm',
  };

  const products = [
    {
      title: 'Viettel Cloud File Storage',
      desc: isLaos
        ? 'Shared cloud file storage service via standard NFS/SMB protocols, ideal for high-throughput enterprise application clusters.'
        : 'Dịch vụ lưu trữ tệp tin đám mây chia sẻ qua giao thức chuẩn NFS/SMB, tương thích tối đa cho cụm ứng dụng doanh nghiệp.',
      icon: Files,
      link: '/services/storage/cloud-file-storage',
    },
    {
      title: 'Viettel Cloud Backup',
      desc: isLaos
        ? 'Automated backup and disaster recovery solution, safeguarding your servers, databases, and application data.'
        : 'Giải pháp sao lưu và phục hồi dữ liệu tự động, bảo vệ an toàn cho hệ sinh thái máy chủ và ứng dụng.',
      icon: Database,
      link: '/services/security-compliance/backup-dr',
    },
    {
      title: 'Viettel Private Cloud',
      desc: isLaos
        ? 'Dedicated, high-performance private cloud computing platform with isolated enterprise-grade security.'
        : 'Nền tảng hạ tầng đám mây riêng biệt, hiệu năng cao và bảo mật cô lập cấp độ doanh nghiệp.',
      icon: Cloud,
      link: '/services/cloud-server/private-cloud',
    },
    {
      title: 'Viettel Drive',
      desc: isLaos
        ? 'Secure workplace cloud storage, file synchronization, and real-time team collaboration for enterprise organizations.'
        : 'Không gian lưu trữ, đồng bộ và cộng tác tệp tin làm việc chuyên nghiệp, bảo mật dành cho khối văn phòng doanh nghiệp.',
      icon: HardDrive,
      link: '/services/storage/viettel-drive',
    },
  ];

  return (
    <section 
      id="related-products" 
      className="py-16 md:py-24 bg-white text-[var(--vidc-legacy-hex-222225)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            {t.desc}
          </p>
        </div>

        {/* Grid 4 Card Dịch Vụ Bổ Trợ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[var(--vidc-color-brand-red)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                    <IconComp className="w-6 h-6" />
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
                    href={item.link}
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
