import React from 'react';
import { Server, MessageSquare, Network, HardDrive, ArrowRight, Layers } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface VoiceBrandnameRelatedProductsProps {
  currentMarket?: SEAMarket;
  onNavigateService?: (path: string) => void;
}

export const VoiceBrandnameRelatedProducts: React.FC<VoiceBrandnameRelatedProductsProps> = ({
  currentMarket,
  onNavigateService,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'INTEGRATED ECOSYSTEM' : 'HỆ SINH THÁI DỊCH VỤ LIÊN QUAN',
    headline: isLaos
      ? 'Integrated Telecom & Cloud Infrastructure Ecosystem'
      : 'Hệ Sinh Thái Giải Pháp Viễn Thông & Hạ Tầng Tích Hợp',
    desc: isLaos
      ? 'Combine Voice Brandname with high-performance virtual servers, brand SMS, private leased lines, and automated recording backup.'
      : 'Kết hợp linh hoạt các giải pháp hạ tầng máy chủ, truyền thông đa kênh và sao lưu dữ liệu của Viettel IDC để xây dựng hệ thống Call Center / CSKH toàn diện.',
    learnMore: isLaos ? 'Learn More' : 'Tìm hiểu thêm',
  };

  const related = [
    {
      icon: Server,
      title: 'Viettel Cloud Server',
      desc: isLaos
        ? 'High-performance virtual cloud servers to host Call Center software, PBX cores, and enterprise CRM applications.'
        : 'Hạ tầng máy chủ ảo mạnh mẽ để vận hành hệ thống phần mềm Call Center và CRM của doanh nghiệp.',
      path: '/services/compute/cloud-server',
    },
    {
      icon: MessageSquare,
      title: 'Viettel SMS Brandname',
      desc: isLaos
        ? 'Branded SMS transmission service for synchronized multi-channel customer engagement and promotional campaigns.'
        : 'Dịch vụ gửi tin nhắn thương hiệu chăm sóc khách hàng và quảng cáo đa kênh đồng bộ.',
      path: '/services/telecom/sms-brandname',
    },
    {
      icon: Network,
      title: 'Viettel Interconnection',
      desc: isLaos
        ? 'Dedicated high-capacity transmission channels ensuring flawless audio quality and absolute connection stability.'
        : 'Kênh truyền dẫn thoại và dữ liệu chuyên dụng đảm bảo chất lượng cuộc gọi ổn định tuyệt đối.',
      path: '/services/networking/interconnection',
    },
    {
      icon: HardDrive,
      title: 'Viettel Cloud Backup',
      desc: isLaos
        ? 'Automated cloud backup solution for securing call audio recordings and CRM databases periodically.'
        : 'Giải pháp sao lưu dữ liệu ghi âm cuộc gọi và cơ sở dữ liệu khách hàng an toàn định kỳ.',
      path: '/services/storage/cloud-backup',
    },
  ];

  const handleCardClick = (path: string) => {
    if (onNavigateService) {
      onNavigateService(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white text-slate-800">
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {related.map((prod, idx) => {
            const IconComp = prod.icon;
            return (
              <div
                key={idx}
                onClick={() => handleCardClick(prod.path)}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-red-300 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div className="space-y-3.5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-800 group-hover:text-[var(--vidc-color-brand-red)] group-hover:border-red-200 flex items-center justify-center shadow-2xs transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {prod.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1 text-xs font-bold text-[var(--vidc-color-brand-red)] group-hover:translate-x-1 transition-transform">
                  <span>{t.learnMore}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
