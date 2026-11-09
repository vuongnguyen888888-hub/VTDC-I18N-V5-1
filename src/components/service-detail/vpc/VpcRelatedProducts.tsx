import React from 'react';
import { Database, Layers, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface VpcRelatedProductsProps {
  currentMarket?: SEAMarket;
}

export const VpcRelatedProducts: React.FC<VpcRelatedProductsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'INTEGRATED ECOSYSTEM' : 'HỆ SINH THÁI DỊCH VỤ TÍCH HỢP',
    headline: isLaos ? 'Products & Complementary Services in Viettel IDC Ecosystem' : 'Sản phẩm & dịch vụ đi kèm trong hệ sinh thái Viettel IDC',
    learnMore: isLaos ? 'Learn more' : 'Tìm hiểu thêm',
  };

  const products = [
    {
      title: 'Viettel Cloud Backup & DR',
      desc: isLaos
        ? 'Automated backup and disaster recovery solution, safeguarding data integrity for all VMs within vVPC.'
        : 'Giải pháp sao lưu và phục hồi thảm họa tự động, bảo vệ toàn vẹn dữ liệu cho toàn bộ máy ảo trong vVPC.',
      icon: Database,
      link: '/services/storage/cloud-backup/',
    },
    {
      title: 'Viettel Kubernetes Service (VKS)',
      desc: isLaos
        ? 'Automated container orchestration platform, directly integrating with vVPC Software-Defined Networking (SDN).'
        : 'Nền tảng điều phối container tự động, tích hợp trực tiếp với mạng SDN của vVPC.',
      icon: Layers,
      link: '/services/containers/kubernetes-service/',
    },
    {
      title: 'Viettel Cloud Security (WAF / Anti-DDoS)',
      desc: isLaos
        ? 'Specialized cybersecurity suite protecting the Public ingress gateways of your vVPC infrastructure.'
        : 'Bộ giải pháp an toàn thông tin chuyên sâu bảo vệ cổng kết nối Public của hệ thống vVPC.',
      icon: ShieldCheck,
      link: '/services/security/anti-ddos/',
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

        {/* Grid 3 Card Sản Phẩm Đi Kèm */}
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

