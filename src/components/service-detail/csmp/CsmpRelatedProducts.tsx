import React from 'react';
import { Shield, Radar, Flame, Laptop, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CsmpRelatedProductsProps {
  currentMarket?: SEAMarket;
  onNavigateService?: (path: string) => void;
}

export const CsmpRelatedProducts: React.FC<CsmpRelatedProductsProps> = ({ onNavigateService }) => {
  const products = [
    {
      id: 'vsoc',
      name: 'Viettel Virtual SOC (vSOC)',
      description: 'Trung tâm điều hành an ninh mạng 24/7 giám sát đa lớp và phản ứng sự cố tức thì.',
      icon: Shield,
      path: '/services/security/soc/',
      code: 'SVC-036',
    },
    {
      id: 'threat-intelligence',
      name: 'Viettel Threat Intelligence',
      description: 'Nền tảng cung cấp tri thức tình báo an ninh mạng chuyên sâu chuẩn quốc tế.',
      icon: Radar,
      path: '/services/security/threat-intelligence/',
      code: 'SVC-037',
    },
    {
      id: 'cloud-firewall',
      name: 'Viettel Cloud Firewall (VCF)',
      description: 'Tường lửa thế hệ mới phân tán bảo vệ lưu lượng truy cập đa hướng.',
      icon: Flame,
      path: '/services/security/cloud-firewall/',
      code: 'SVC-030',
    },
    {
      id: 'endpoint-security',
      name: 'Viettel Endpoint Security',
      description: 'Bảo vệ máy chủ và thiết bị đầu cuối với công nghệ Machine Learning tân tiến.',
      icon: Laptop,
      path: '/services/security/endpoint-security/',
      code: 'SVC-033',
    },
  ];

  const handleNavigate = (path: string) => {
    if (onNavigateService) {
      onNavigateService(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <section 
      id="related-products" 
      className="py-16 md:py-20 bg-white border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-xs font-semibold text-[color:var(--vidc-color-brand-red)] uppercase tracking-wider mb-2">
            Hệ sinh thái ATTT
          </div>
          <h2 
            id="csmp-related-products-h2"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--vidc-legacy-hex-222225)] mb-4"
          >
            Hệ Sinh Thái An Toàn Thông Tin Tích Hợp Đề Xuất
          </h2>
          <p className="text-sm text-gray-600">
            Các giải pháp chuyên sâu phối hợp tạo nên sức mạnh phòng thủ vững chắc cho hội viên Viettel CSMP.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-gray-50/70 p-6 rounded-xl border border-gray-200/80 hover:border-red-200 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-[color:var(--vidc-color-brand-red)] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-[11px] font-mono text-gray-500 mb-1">{item.code}</div>
                  <h3 className="text-base font-bold text-[var(--vidc-legacy-hex-222225)] mb-2">{item.name}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <VIDCNativeButton
                  id={`csmp-related-nav-${item.id}`}
                  onClick={() => handleNavigate(item.path)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[color:var(--vidc-color-brand-red)] hover:text-[var(--vidc-legacy-hex-cc002b)] group cursor-pointer"
                >
                  <span>Tìm hiểu thêm</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </VIDCNativeButton>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
