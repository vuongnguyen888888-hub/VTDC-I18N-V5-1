import React from 'react';
import { Cloud, Shield, Database, Cpu, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudConnectRelatedProductsProps {
  currentMarket?: SEAMarket;
  onNavigateService?: (path: string) => void;
}

export const CloudConnectRelatedProducts: React.FC<CloudConnectRelatedProductsProps> = ({
  currentMarket,
  onNavigateService,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'RELATED PRODUCTS' : 'SẢN PHẨM LIÊN QUAN',
    headline: isLaos
      ? 'Integrated Hybrid Cloud Ecosystem Solutions'
      : 'Hệ Sinh Thái Giải Pháp Đám Mây & Hạ Tầng Tích Hợp',
  };

  const products = [
    {
      id: 'vpc',
      title: isLaos ? 'Viettel Virtual Private Cloud' : 'Viettel Virtual Private Cloud (vVPC)',
      desc: isLaos
        ? 'Isolated virtual data center seamlessly interconnected with global clouds via Cloud Connect.'
        : 'Trung tâm dữ liệu ảo bảo mật, kết nối liền mạch với các Hyperscale Cloud qua kênh Cloud Connect.',
      icon: Cloud,
      path: '/services/compute/virtual-private-cloud/',
    },
    {
      id: 'cdr',
      title: isLaos ? 'Viettel Cloud Disaster Recovery' : 'Viettel Cloud Disaster Recovery (CDR)',
      desc: isLaos
        ? 'Cross-cloud continuous data replication and automated disaster failover.'
        : 'Giải pháp dự phòng thảm họa đa đám mây, bảo vệ toàn vẹn dữ liệu doanh nghiệp trước sự cố.',
      icon: Database,
      path: '/services/storage/cloud-dr/',
    },
    {
      id: 'cfw',
      title: isLaos ? 'Viettel Cloud Firewall' : 'Viettel Cloud Firewall',
      desc: isLaos
        ? 'Next-gen perimeter and inter-cloud traffic inspection and layer-7 protection.'
        : 'Tường lửa thế hệ mới kiểm soát an ninh đa lớp cho các luồng dữ liệu truyền dẫn liên đám mây.',
      icon: Shield,
      path: '/services/security/cloud-firewall/',
    },
    {
      id: 'managed-multicloud',
      title: isLaos ? 'Managed Multi-Cloud Services' : 'Viettel Managed Multi-Cloud Services',
      desc: isLaos
        ? '24/7 proactive operations, cost optimization and architecture management by certified experts.'
        : 'Dịch vụ quản trị, vận hành và ủy thác hạ tầng Multi-Cloud chuyên nghiệp bởi chuyên gia cấp cao.',
      icon: Cpu,
      path: '/services/managed-services/multi-cloud/',
    },
  ];

  return (
    <section 
      id="related-products" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
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

        {/* 4 Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => {
            const IconComp = item.icon;
            return (
              <div 
                key={item.id}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] leading-snug">
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
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>{isLaos ? 'Learn More' : 'Tìm hiểu thêm'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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

