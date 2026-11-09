import React from 'react';
import { Calculator, Send, ArrowRight, Zap, Shield, X } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface PricingMegaMenuProps {
  onClose: () => void;
  currentMarketPath: string;
}

export const PricingMegaMenu: React.FC<PricingMegaMenuProps> = ({ onClose, currentMarketPath }) => {
  const { isNonVn, getFullPath: localizedPath } = useLanguage();

  const getFullPath = (path: string) => {
    if (localizedPath) return localizedPath(path);
    if (currentMarketPath === '/') return path;
    return `${currentMarketPath}${path.startsWith('/') ? path.slice(1) : path}`;
  };

  return (
    <div className="relative w-full mx-auto text-slate-800 p-7 md:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xl overflow-hidden">
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
            {isNonVn ? 'Transparent Pricing & Cost Optimization' : 'Minh bạch Chi phí & Tối ưu Dự toán'}
          </h3>
          <p className="text-xs text-slate-500">
            {isNonVn ? 'Flexible billing options: Pay-As-You-Go or Long-term Reserved Commitments' : 'Lựa chọn hình thức thanh toán linh hoạt Pay-As-You-Go hoặc Cam kết dài hạn'}
          </p>
        </div>
        <VIDCAnchor
          href={getFullPath('/pricing/')}
          onClick={onClose}
          className="text-xs text-[var(--vidc-color-brand-red)] hover:text-[var(--vidc-button-primary-background-hover)] font-bold flex items-center gap-1 group shrink-0"
        >
          {isNonVn ? 'View full pricing matrix' : 'Xem bảng giá đầy đủ'}
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </VIDCAnchor>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Card 1: Cloud Calculator */}
        <VIDCAnchor
          href={getFullPath('/pricing/calculator/')}
          onClick={onClose}
          className="group p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-200 transition-all flex flex-col justify-between cursor-pointer"
        >
          <div>
            <div className="p-2.5 rounded-xl text-[var(--vidc-color-brand-red)] w-fit mb-3 group-hover:scale-105 group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-all">
              <Calculator className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center justify-between">
              {isNonVn ? 'Cloud Cost Calculator' : 'Công cụ Tính giá Cloud'}
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-[var(--vidc-color-brand-red)]" />
            </h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              {isNonVn 
                ? 'Configure vCPU, RAM, NVMe SSD storage & Bandwidth to estimate hourly or monthly budget with exact SLA tiers.' 
                : 'Tùy chỉnh vCPU, RAM, SSD NVMe & Băng thông để dự toán ngân sách chính xác theo từng giờ hoặc từng tháng.'}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-[var(--vidc-color-brand-red)] font-bold flex items-center gap-1">
            {isNonVn ? 'Launch calculator' : 'Mở công cụ tính giá'}
            <Zap className="w-3.5 h-3.5" />
          </div>
        </VIDCAnchor>

        {/* Card 2: Custom Enterprise Quote */}
        <VIDCNativeButton
          type="button"
          onClick={() => {
            onClose();
            window.dispatchEvent(new CustomEvent('open-quote-modal', {
              detail: { serviceName: 'cloud_server' }
            }));
          }}
          className="group text-left p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-200 transition-all flex flex-col justify-between cursor-pointer w-full"
        >
          <div>
            <div className="p-2.5 rounded-xl text-[var(--vidc-color-brand-red)] w-fit mb-3 group-hover:scale-105 group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-all">
              <Send className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center justify-between">
              {isNonVn ? 'Request Enterprise Quote' : 'Yêu cầu Báo giá Doanh nghiệp'}
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-[var(--vidc-color-brand-red)]" />
            </h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              {isNonVn 
                ? 'Tailored for large deployments, Dedicated Cloud, Colocation Racks, GPU clusters or complex Hybrid Cloud architectures.' 
                : 'Dành cho các dự án quy mô lớn, Dedicated Cloud, Colocation tủ Rack hoặc giải pháp Hybrid Cloud phức tạp.'}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-[var(--vidc-color-brand-red)] font-bold flex items-center gap-1">
            {isNonVn ? 'Submit quote request' : 'Gửi yêu cầu báo giá'}
            <Shield className="w-3.5 h-3.5" />
          </div>
        </VIDCNativeButton>
      </div>
    </div>
  );
};

