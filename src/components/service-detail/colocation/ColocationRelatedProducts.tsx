import React from 'react';
import { useRouter } from 'next/navigation';
import { Server, Network, ShieldCheck, DatabaseBackup, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface ColocationRelatedProductsProps {
  currentMarket?: SEAMarket;
  onNavigateService?: (path: string) => void;
}

export const ColocationRelatedProducts: React.FC<ColocationRelatedProductsProps> = ({
  currentMarket,
  onNavigateService,
}) => {
  const router = useRouter();
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'INTEGRATED ECOSYSTEM' : 'HỆ SINH THÁI SẢN PHẨM LIÊN QUAN',
    headline: isLaos
      ? 'Proposed Integrated Service Ecosystem'
      : 'Hệ Sinh Thái Dịch Vụ Tích Hợp Đề Xuất',
    learnMore: isLaos ? 'Learn more →' : 'Tìm hiểu thêm →',
  };

  const products = [
    {
      title: 'Viettel Server Leasing',
      desc: 'Thuê máy chủ vật lý chính hãng cấu hình mạnh mẽ, tiết kiệm chi phí đầu tư phần cứng ban đầu.',
      icon: Server,
      path: '/services/dedicated-compute/',
    },
    {
      title: 'Viettel Interconnection',
      desc: 'Dịch vụ kết nối mạng đa điểm, liên kết các trung tâm dữ liệu với băng thông cao và ổn định.',
      icon: Network,
      path: '/services/interconnection/',
    },
    {
      title: 'Viettel Managed Service',
      desc: 'Dịch vụ ủy thác quản trị, giám sát và vận hành hệ thống CNTT chuyên nghiệp 24/7.',
      icon: ShieldCheck,
      path: '/services/managed-services/',
    },
    {
      title: 'Viettel Cloud Backup',
      desc: 'Giải pháp sao lưu dữ liệu từ máy chủ vật lý lên nền tảng đám mây an toàn, phòng chống mất mát dữ liệu.',
      icon: DatabaseBackup,
      path: '/services/cloud-backup/',
    },
  ];

  const handleProductClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (onNavigateService) {
      onNavigateService(path);
    } else {
      router.push(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="related-products" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-0f172a)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* Grid 4 Card Dịch Vụ Đi Kèm */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                id={`related-card-${idx}`}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[var(--vidc-color-brand-red)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-3.5">
                  <div className="w-11 h-11 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-0f172a)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <VIDCAnchor
                    href={item.path}
                    onClick={(e) => handleProductClick(e, item.path)}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[var(--vidc-color-brand-red)] hover:underline group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>{t.learnMore}</span>
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
