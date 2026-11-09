import React from 'react';
import { ShieldCheck, Server, Shield, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface AntiDdosRelatedProductsProps {
  currentMarket?: SEAMarket;
  onNavigateService?: (path: string) => void;
}

export const AntiDdosRelatedProducts: React.FC<AntiDdosRelatedProductsProps> = ({
  currentMarket,
  onNavigateService,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'COMPLEMENTARY ECOSYSTEM' : 'HỆ SINH THÁI TÍCH HỢP',
    headline: isLaos 
      ? 'Complementary Solutions for Comprehensive Cyber Defense' 
      : 'Giải pháp bổ trợ cho Viettel Anti-DDoS',
    learnMore: isLaos ? 'Explore solution' : 'Tìm hiểu thêm',
  };

  const products = [
    {
      id: 'cwaf',
      name: 'Viettel Cloud WAF',
      desc: isLaos
        ? 'Enterprise Cloud Web Application and API Firewall defending against OWASP Top 10 vulnerabilities and Layer 7 bot attacks.'
        : 'Tường lửa bảo vệ ứng dụng Web và API, ngăn chặn các cuộc tấn công lỗ hổng bảo mật OWASP Top 10 và DDoS Layer 7.',
      icon: ShieldCheck,
      path: '/services/security/cloud-waf/',
    },
    {
      id: 'cloud-server',
      name: 'Viettel Cloud Server',
      desc: isLaos
        ? 'High-performance cloud virtual servers and isolated VPC networking directly integrated with DDoS scrubbing backbones.'
        : 'Máy chủ ảo và trung tâm dữ liệu ảo bảo mật cao, kết nối trực tiếp với mạng trục ISP sạch và dự phòng cao.',
      icon: Server,
      path: '/services/compute/cloud-server/',
    },
    {
      id: 'cloud-firewall',
      name: 'Viettel Cloud Firewall',
      desc: isLaos
        ? 'Next-Generation virtual firewall (NGFW) providing granular packet inspection, zero-trust network access, and proactive IPS/IDS.'
        : 'Tường lửa thế hệ mới (Next-Gen Firewall) kiểm soát sâu luồng dữ liệu mạng, ngăn chặn mã độc và lọc gói tin thông minh.',
      icon: Shield,
      path: '/services/security/cloud-firewall/',
    },
  ];

  const handleNav = (path: string) => {
    if (onNavigateService) {
      onNavigateService(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.pathname = path;
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

        {/* 3 Related Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                onClick={() => handleNav(p.path)}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[var(--vidc-color-brand-red)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                    {p.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--vidc-color-brand-red)] group-hover:translate-x-1 transition-transform">
                    <span>{t.learnMore}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
