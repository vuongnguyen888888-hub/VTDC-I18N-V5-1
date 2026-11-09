import React from 'react';
import { Server, Cloud, ShieldCheck, Activity, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudFirewallRelatedProductsProps {
  currentMarket?: SEAMarket;
  onNavigateService?: (path: string) => void;
}

export const CloudFirewallRelatedProducts: React.FC<CloudFirewallRelatedProductsProps> = ({ 
  currentMarket,
  onNavigateService 
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'INTEGRATED ECOSYSTEM' : 'HỆ SINH THÁI TÍCH HỢP',
    headline: isLaos 
      ? 'Integrated Cloud & Security Ecosystem Solutions' 
      : 'Hệ Sinh Thái Giải Pháp Đám Mây & Bảo Mật Tích Hợp',
    desc: isLaos
      ? 'Combine seamlessly with Viettel IDC digital infrastructure for defense-in-depth protection.'
      : 'Kết hợp linh hoạt cùng hệ thống hạ tầng số Viettel IDC tạo nên kiến trúc phòng thủ chiều sâu vững chắc.',
    learnMore: isLaos ? 'Learn more' : 'Tìm hiểu thêm',
  };

  const products = [
    {
      title: 'Viettel Cloud Server',
      desc: isLaos 
        ? 'High-performance OpenStack cloud virtual servers with enterprise SSD and 99.99% SLA, directly protected behind Cloud Firewall.'
        : 'Máy chủ ảo hiệu năng cao triển khai ứng dụng, bảo vệ trực tiếp bởi tường lửa Cloud Firewall.',
      icon: Server,
      path: '/services/compute/cloud-server',
    },
    {
      title: 'Viettel Virtual Private Cloud (vVPC)',
      desc: isLaos 
        ? 'Isolated dedicated cloud environment optimized for fine-grained security micro-segmentation.'
        : 'Cụm tài nguyên đám mây riêng biệt, tối ưu phân tách các Security Zones logic an toàn.',
      icon: Cloud,
      path: '/services/cloud/virtual-private-cloud',
    },
    {
      title: 'Viettel Cloudrity (WAF & Anti-DDoS)',
      desc: isLaos 
        ? 'Deep web application security and large-scale volumetric DDoS mitigation at network edges.'
        : 'Giải pháp bảo vệ chuyên sâu tầng ứng dụng Web và ngăn chặn tấn công từ chối dịch vụ quy mô lớn.',
      icon: ShieldCheck,
      path: '/services/security/cloud-waf',
    },
    {
      title: 'Viettel Virtual SOC (vSOC)',
      desc: isLaos 
        ? '24/7 centralized Security Operations Center combining continuous telemetry monitoring with incident response.'
        : 'Trung tâm điều hành an ninh mạng 24/7 kết hợp giám sát và ứng cứu sự cố toàn diện.',
      icon: Activity,
      path: '/services/security/virtual-soc',
    },
  ];

  return (
    <section 
      id="related-products" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight mb-2">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <VIDCNativeButton
                    type="button"
                    onClick={() => onNavigateService && onNavigateService(item.path)}
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
