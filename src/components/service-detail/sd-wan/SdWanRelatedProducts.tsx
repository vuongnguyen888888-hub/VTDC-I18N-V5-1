import React from 'react';
import { useRouter } from 'next/navigation';
import { Network, Cloud, Shield, Cable, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface SdWanRelatedProductsProps {
  currentMarket?: SEAMarket;
  onNavigateService?: (path: string) => void;
}

export const SdWanRelatedProducts: React.FC<SdWanRelatedProductsProps> = ({
  currentMarket,
  onNavigateService,
}) => {
  const router = useRouter();
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'INTEGRATED CLOUD & NETWORK ECOSYSTEM' : 'HỆ SINH THÁI TÍCH HỢP',
    headline: isLaos
      ? 'Recommended Network & Cloud Infrastructure Ecosystem'
      : 'Hệ Sinh Thái Mạng & Hạ Tầng Đám Mây Đề Xuất',
    learnMore: isLaos ? 'Learn More' : 'Tìm hiểu thêm',
  };

  const products = [
    {
      title: 'Viettel Hybrid Connect',
      path: '/services/networking/hybrid-connect',
      icon: Network,
      desc: isLaos
        ? 'High-speed dedicated private links connecting office/on-prem DC securely to Viettel IDC Cloud ecosystem.'
        : 'Kênh truyền riêng tốc độ cao kết nối an toàn từ văn phòng/Data Center tới hệ sinh thái Viettel IDC Cloud.',
      badge: 'Dedicated Link',
    },
    {
      title: 'Viettel Cloud Connect',
      path: '/services/networking/cloud-connect',
      icon: Cloud,
      desc: isLaos
        ? 'Direct private connectivity to global hyperscale cloud platforms including AWS, Microsoft Azure, and Google Cloud.'
        : 'Thiết lập kênh truyền riêng chuyên dụng tới các nền tảng Hyperscale Cloud (AWS, Azure, GCP).',
      badge: 'Multi-Cloud Ready',
    },
    {
      title: 'Viettel Interconnection',
      path: '/services/networking/interconnection',
      icon: Cable,
      desc: isLaos
        ? 'Physical optical fiber transmission solutions (Dark-Fibre, IPLC, IP Transit) between data center facilities.'
        : 'Giải pháp kênh truyền cáp quang riêng (Dark-Fibre, IPLC, IP Transit) cho các điểm trung tâm dữ liệu.',
      badge: 'Layer 1/2 Transit',
    },
    {
      title: 'Viettel Cloud Firewall',
      path: '/services/security/cloud-firewall',
      icon: Shield,
      desc: isLaos
        ? 'Next-generation cloud firewall providing multi-layered traffic inspection and zero-trust perimeter control.'
        : 'Tường lửa thế hệ mới kiểm soát an ninh đa tầng cho toàn bộ lưu lượng dữ liệu kết nối vào ra.',
      badge: 'Security Perimeter',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]">
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

        {/* Grid 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-4 hover:border-[var(--vidc-color-brand-red)] transition-all duration-300 hover:bg-white hover:shadow-md group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <VIDCAnchor
                  href={p.path}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigateService) {
                      onNavigateService(p.path);
                    } else {
                      router.push(p.path);
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline pt-2 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>{t.learnMore}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </VIDCAnchor>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
