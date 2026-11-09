import React from 'react';
import { Handshake, Users, Award, Cpu, Building2, X } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface PartnersMegaMenuProps {
  onClose: () => void;
  currentMarketPath: string;
}

export const PartnersMegaMenu: React.FC<PartnersMegaMenuProps> = ({ onClose, currentMarketPath }) => {
  const { isNonVn, getFullPath: localizedPath } = useLanguage();

  const getFullPath = (path: string) => {
    if (localizedPath) return localizedPath(path);
    if (currentMarketPath === '/') return path;
    return `${currentMarketPath}${path.startsWith('/') ? path.slice(1) : path}`;
  };

  return (
    <div className="relative w-full mx-auto text-slate-800 p-7 md:p-9 rounded-2xl bg-white border border-slate-200/90 shadow-2xl overflow-hidden min-h-[420px]">
      {/* Top Right Close Button */}
      <VIDCNativeButton 
        onClick={onClose}
        aria-label={isNonVn ? 'Close menu' : 'Đóng menu'}
        className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-all z-10"
      >
        <X className="w-5 h-5" />
      </VIDCNativeButton>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-slate-200 gap-4 pr-10">
        <div>
          <h3 className="text-lg font-bold text-slate-900 tracking-wide">
            {isNonVn ? 'Partner Network & Ecosystem Programs' : 'Mạng lưới Đối tác & Chương trình Hợp tác'}
          </h3>
          <p className="text-xs text-slate-500">
            {isNonVn ? 'Co-developing Southeast Asia cloud ecosystems and regional market expansions' : 'Cùng phát triển hệ sinh thái Đám mây và mở rộng thị trường khu vực Đông Nam Á'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Reseller & Distributor */}
        <div className="space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[var(--vidc-color-brand-red)] border-l-2 border-[var(--vidc-color-brand-red)] pl-2">
            {isNonVn ? 'Reseller & Distribution' : 'Chương trình Hợp tác & Phân phối'}
          </div>
          <div className="space-y-2.5">
            <VIDCAnchor
              href={getFullPath('/partners/reseller/')}
              onClick={onClose}
              className="group block p-4 rounded-xl hover:bg-slate-50 transition-all cursor-pointer"
            >
              <div className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-2.5">
                <Handshake className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                <span>{isNonVn ? 'Reseller Partner Program' : 'Chương trình Đại lý'}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 pl-6.5">
                {isNonVn ? 'Attractive margins, dedicated technical enablement, and deal protection for channel partners.' : 'Mức chiết khấu hấp dẫn và hỗ trợ kỹ thuật chuyên biệt cho đối tác bán hàng.'}
              </p>
            </VIDCAnchor>

            <VIDCAnchor
              href={getFullPath('/partners/distributor/')}
              onClick={onClose}
              className="group block p-4 rounded-xl hover:bg-slate-50 transition-all cursor-pointer"
            >
              <div className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-2.5">
                <Users className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                <span>{isNonVn ? 'Strategic Alliance Program' : 'Chương trình đối tác'}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 pl-6.5">
                {isNonVn ? 'Comprehensive business development partnership across the Viettel IDC ecosystem.' : 'Hợp tác phát triển kinh doanh toàn diện cùng hệ sinh thái Viettel IDC.'}
              </p>
            </VIDCAnchor>
          </div>
        </div>

        {/* Strategic Technology Partner */}
        <div className="space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[var(--vidc-color-brand-red)] border-l-2 border-[var(--vidc-color-brand-red)] pl-2">
            {isNonVn ? 'Technology Partners' : 'Đối tác công nghệ'}
          </div>
          <div className="space-y-2.5">
            {/* Card 1: Đối tác tiêu biểu */}
            <VIDCAnchor
              href={getFullPath('/partners/featured/')}
              onClick={onClose}
              className="group block p-4 rounded-xl hover:bg-slate-50 transition-all cursor-pointer"
            >
              <div className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                <span>{isNonVn ? 'Featured Global Partners' : 'Đối tác tiêu biểu'}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 pl-6.5">
                {isNonVn ? 'Global tier-1 technology network: Qualcomm, Microsoft, NVIDIA, VMware, Cisco...' : 'Tổng hợp mạng lưới đối tác công nghệ toàn cầu: Qualcomm, Microsoft, NVIDIA, VMware, Cisco...'}
              </p>
            </VIDCAnchor>

            {/* Card 2: Liên minh Chiến lược Qualcomm */}
            <VIDCAnchor
              href={getFullPath('/partners/qualcomm/')}
              onClick={onClose}
              className="group block p-4 rounded-xl hover:bg-slate-50 transition-all cursor-pointer"
            >
              <div className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-2.5">
                <Cpu className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                <span>{isNonVn ? 'Qualcomm Strategic Alliance' : 'Liên minh Chiến lược Qualcomm'}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 pl-6.5">
                {isNonVn ? 'Accelerating next-gen AI Edge Compute and custom silicon for data center environments.' : 'Tăng tốc hạ tầng tính toán AI Edge Compute và vi mạch thế hệ mới cho trung tâm dữ liệu.'}
              </p>
            </VIDCAnchor>
          </div>
        </div>

        {/* Affiliate Marketing */}
        <div className="space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[var(--vidc-color-brand-red)] border-l-2 border-[var(--vidc-color-brand-red)] pl-2">
            {isNonVn ? 'Affiliate Program' : 'Tiếp thị liên kết'}
          </div>
          <div className="space-y-2.5">
            <VIDCAnchor
              href={getFullPath('/partners/affiliate/')}
              onClick={onClose}
              className="group block p-4 rounded-xl hover:bg-slate-50 transition-all cursor-pointer"
            >
              <div className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                <span>{isNonVn ? 'Affiliate Partner Program' : 'Chương trình Tiếp thị liên kết'}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 pl-6.5">
                {isNonVn ? 'High-conversion publisher program with recurring commission and dedicated marketing assets.' : 'Chương trình dành riêng cho đối tác tiếp thị liên kết (Publisher) với mức hoa hồng hấp dẫn.'}
              </p>
            </VIDCAnchor>
          </div>
        </div>
      </div>
    </div>
  );
};

