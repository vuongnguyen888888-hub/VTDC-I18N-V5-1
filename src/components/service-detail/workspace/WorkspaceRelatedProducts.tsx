import React from 'react';
import { Globe, Shield, Server, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface WorkspaceRelatedProductsProps {
  currentMarket?: SEAMarket;
  onNavigateService?: (path: string) => void;
}

export const WorkspaceRelatedProducts: React.FC<WorkspaceRelatedProductsProps> = ({
  currentMarket,
  onNavigateService,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'INTEGRATED ECOSYSTEM' : 'HỆ SINH THÁI TÍCH HỢP',
    headline: isLaos ? 'Complementary Solutions for Viettel Workspace' : 'Giải pháp bổ trợ cho Viettel Workspace',
    learnMore: isLaos ? 'Explore solution' : 'Tìm hiểu thêm',
  };

  const products = [
    {
      title: 'Viettel Domain (Tên miền)',
      desc: isLaos 
        ? 'Official national .VN and international domain registrar with instant DNS propagation and 24/7 management.'
        : 'Nhà đăng ký tên miền quốc gia .VN và quốc tế uy tín, hệ thống DNS tốc độ cao, quản trị trực tuyến 24/7.',
      icon: Globe,
      path: '/services/web-app-hosting/domain',
    },
    {
      title: 'Viettel SSL Certificate',
      desc: isLaos 
        ? 'Enterprise SSL certificates from Sectigo, DigiCert, and GeoTrust, safeguarding e-commerce and web applications.'
        : 'Chứng chỉ bảo mật SSL cao cấp từ các CA quốc tế (Sectigo, DigiCert) bảo vệ website và tăng thứ hạng tìm kiếm.',
      icon: Shield,
      path: '/services/security/ssl',
    },
    {
      title: 'Viettel Cloud Server',
      desc: isLaos 
        ? 'High-performance cloud virtual servers on OpenStack infrastructure with 99.99% SLA commitment for enterprise apps.'
        : 'Máy chủ ảo đám mây chuẩn quốc tế TIA-942 Rated 3 với khả năng co giãn linh hoạt, cam kết SLA 99.99%.',
      icon: Server,
      path: '/services/compute/cloud-server',
    },
  ];

  const handleNavigate = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (onNavigateService) {
      onNavigateService(path);
    } else {
      window.location.href = path;
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

        {/* Grid 3 Card Sản Phẩm Liên Quan */}
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
                    href={item.path}
                    onClick={(e) => handleNavigate(e, item.path)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline group-hover:translate-x-1 transition-transform cursor-pointer"
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
