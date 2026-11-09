import React from 'react';
import { Server, Database, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudWafRelatedProductsProps {
  currentMarket?: SEAMarket;
  onNavigateService?: (serviceRoute: string) => void;
}

export const CloudWafRelatedProducts: React.FC<CloudWafRelatedProductsProps> = ({
  currentMarket,
  onNavigateService,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'COMPLEMENTARY ECOSYSTEM' : 'HỆ SINH THÁI TÍCH HỢP',
    headline: isLaos 
      ? 'Complementary Cloud Solutions for Viettel Cloud WAF'
      : 'Giải pháp bổ trợ cho Viettel Cloud WAF',
    learnMore: isLaos ? 'Learn more' : 'Tìm hiểu thêm',
  };

  const products = [
    {
      title: 'Viettel Cloud Server & vVPC',
      desc: isLaos 
        ? 'High-security virtual private servers and virtual private cloud datacenters positioned behind Viettel CWAF for impenetrable end-to-end defense.'
        : 'Máy chủ ảo và trung tâm dữ liệu ảo bảo mật cao, đặt sau lớp bảo vệ Viettel CWAF giúp tạo nên hệ sinh thái hạ tầng đám mây an toàn toàn diện.',
      icon: Server,
      route: '/services/compute/cloud-server/',
    },
    {
      title: 'Viettel Cloud Backup & DR',
      desc: isLaos 
        ? 'Automated snapshot backup playbooks and continuous disaster recovery replicas, guaranteeing zero-data-loss recovery from any cyber incident.'
        : 'Giải pháp tự động sao lưu dữ liệu đám mây và dự phòng thảm họa, đảm bảo khôi phục thần tốc toàn vẹn dữ liệu khi có sự cố.',
      icon: Database,
      route: '/services/storage/cloud-backup/',
    },
    {
      title: 'Viettel Managed Security Services (MSS)',
      desc: isLaos 
        ? 'Fully outsourced 24/7/365 SOC monitoring, threat hunting, and managed cybersecurity operations across your entire enterprise estate.'
        : 'Dịch vụ ủy thác giám sát và vận hành an toàn thông tin chuyên sâu 24/7 từ trung tâm điều hành an ninh mạng SOC của Viettel.',
      icon: ShieldAlert,
      route: '/services/security/managed-security/',
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

        {/* Grid 3 Card Dịch Vụ Liên Kết chuẩn Cloud Server */}
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
