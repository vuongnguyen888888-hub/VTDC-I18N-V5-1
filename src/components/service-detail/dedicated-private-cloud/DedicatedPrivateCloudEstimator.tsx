import React, { useState } from 'react';
import { 
  Building2, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Cpu, 
  Database, 
  Network, 
  ShieldCheck, 
  Sparkles,
  Server
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface DedicatedPrivateCloudEstimatorProps {
  currentMarket: SEAMarket;
  onOpenQuote: () => void;
}

export const DedicatedPrivateCloudEstimator: React.FC<DedicatedPrivateCloudEstimatorProps> = ({
  currentMarket,
  onOpenQuote,
}) => {
  const isLaos = currentMarket.code === 'la';

  // Controls State
  const [selectedDc, setSelectedDc] = useState<string>('phap-van');
  const [selectedModel, setSelectedModel] = useState<'single' | 'combo'>('combo');

  const t = {
    eyebrow: isLaos ? 'PRICING & PACKAGES' : 'BẢNG GIÁ & DỰ TOÁN CHI PHÍ',
    headline: isLaos 
      ? 'Pricing & Dedicated HPC Cluster Configuration Matrix' 
      : 'Bảng giá & Ma trận cấu hình cụm HPC chuyên dụng',
    subtitle: isLaos 
      ? 'Choose high-performance computing data center location and standardized single or multi-node cluster packages.'
      : 'Lựa chọn vị trí trung tâm dữ liệu và gói cấu hình cụm máy chủ vật lý hiệu năng cao được tối ưu hóa theo quy mô doanh nghiệp.',
  };

  const dataCenters = [
    { id: 'phap-van', label: 'TTDL Pháp Vân (Hà Nội)', region: 'Miền Bắc' },
    { id: 'hoa-lac', label: 'TTDL Hòa Lạc', region: 'Miền Bắc' },
    { id: 'binh-duong', label: 'TTDL Bình Dương', region: 'Miền Nam' },
    { id: 'hoang-hoa-tham', label: 'TTDL Hoàng Hoa Thám', region: 'Miền Nam' },
  ];

  const deploymentModels = [
    { id: 'single', label: 'Gói 01 Máy chủ vật lý độc lập', short: 'Single Node (01 Server)' },
    { id: 'combo', label: 'Gói Combo Cụm 03 Máy chủ tối ưu chi phí (HĐ 12+ tháng)', short: 'Combo Cluster (03 Nodes)' },
  ];

  const specRows = [
    {
      name: 'Đơn giá niêm yết',
      icon: Sparkles,
      single: 'Liên hệ báo giá',
      combo: 'Liên hệ báo giá (Chiết khấu Combo)',
      highlight: true,
    },
    {
      name: 'Vi xử lý (CPU)',
      icon: Cpu,
      single: '02 – 04 CPU AMD EPYC / Intel Xeon Platinum',
      combo: 'Cụm 03 Máy chủ 02–04 CPU AMD / Intel Platinum',
    },
    {
      name: 'Bộ nhớ (RAM)',
      icon: Layers,
      single: 'DDR5 Enterprise (Lên tới 3 TB – 6 TB/máy chủ)',
      combo: 'Cụm RAM mở rộng từ 9 TB – 18 TB DDR5',
    },
    {
      name: 'Lưu trữ (Storage)',
      icon: Database,
      single: 'NVMe I/O Tốc độ cao (Tùy biến theo Pool)',
      combo: 'Hệ thống lưu trữ phân tán All-Flash NVMe',
    },
    {
      name: 'Mạng chuyên dụng HPC',
      icon: Zap,
      single: 'InfiniBand Network 200 Gbps',
      combo: 'InfiniBand Network 200 Gbps liên kết cụm',
    },
    {
      name: 'Mạng kết nối ngoài',
      icon: Network,
      single: 'External Network 25 Gbps',
      combo: 'External Network 25 Gbps / Multi-AZ Gateway',
    },
    {
      name: 'Hạ tầng mạng ảo (SDN)',
      icon: ShieldCheck,
      single: 'vFirewall Inline ML, vRouter, vLB L4-L7, IPSec VPN',
      combo: 'vFirewall Inline ML, vRouter, vLB L4-L7, IPSec VPN',
    },
    {
      name: 'Tùy chọn tăng tốc GPU',
      icon: Server,
      single: 'Tùy chọn GPU Dedicated (NVIDIA)',
      combo: 'Hỗ trợ cụm GPU phân tán cho AI/Deep Learning',
    },
  ];

  return (
    <section 
      id="pricing" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight mb-2">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-10 space-y-6">
          
          {/* Control 1: Data Center Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />
              <span>Khu vực / Data Center Viettel IDC:</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {dataCenters.map((dc) => {
                const isSelected = selectedDc === dc.id;
                return (
                  <VIDCNativeButton
                    key={dc.id}
                    onClick={() => setSelectedDc(dc.id)}
                    className={`px-3.5 py-3 rounded-xl text-left border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[var(--vidc-color-brand-red)] bg-red-50/70 text-slate-900 shadow-sm'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
                      <span>{dc.label}</span>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)] shrink-0 ml-1" />}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{dc.region}</div>
                  </VIDCNativeButton>
                );
              })}
            </div>
          </div>

          {/* Control 2: Deployment Model Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />
              <span>Chu kỳ & Mô hình triển khai:</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {deploymentModels.map((model) => {
                const isSelected = selectedModel === model.id;
                return (
                  <VIDCNativeButton
                    key={model.id}
                    onClick={() => setSelectedModel(model.id as 'single' | 'combo')}
                    className={`px-4 py-3.5 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'border-[var(--vidc-color-brand-red)] bg-red-50/70 text-slate-900 shadow-sm'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">{model.label}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Cam kết hiệu năng 100% Single-Tenant</div>
                    </div>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0 ml-2" />}
                  </VIDCNativeButton>
                );
              })}
            </div>
          </div>

        </div>

        {/* Pricing Comparison Matrix Table */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[var(--vidc-legacy-hex-1e232a)] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  <th scope="col" className="py-4 px-6 w-1/3 border-b border-[var(--vidc-text-secondary)]">Hạng Mục Kỹ Thuật</th>
                  <th scope="col" className={`py-4 px-6 w-1/3 border-b border-[var(--vidc-text-secondary)] ${selectedModel === 'single' ? 'bg-[var(--vidc-legacy-hex-2d3748)] text-red-300' : ''}`}>
                    Gói 01 Máy Chủ Vật Lý
                  </th>
                  <th scope="col" className={`py-4 px-6 w-1/3 border-b border-[var(--vidc-text-secondary)] ${selectedModel === 'combo' ? 'bg-[var(--vidc-legacy-hex-2d3748)] text-red-300' : ''}`}>
                    Gói Combo Cụm 03 Máy Chủ
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                {specRows.map((row, idx) => {
                  const IconComp = row.icon;
                  return (
                    <tr key={idx} className={row.highlight ? 'bg-red-50/50 font-bold' : 'hover:bg-slate-50/80 transition-colors'}>
                      <th scope="row" className="py-4 px-6 font-semibold text-slate-800 flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)]">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span>{row.name}</span>
                      </th>
                      <td className={`py-4 px-6 text-slate-700 ${selectedModel === 'single' ? 'bg-red-50/30 font-semibold text-slate-900' : ''}`}>
                        {row.single}
                      </td>
                      <td className={`py-4 px-6 text-slate-700 ${selectedModel === 'combo' ? 'bg-red-50/30 font-semibold text-slate-900' : ''}`}>
                        {row.combo}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600">
              * Mọi gói cấu hình đều bao gồm hạ tầng mạng SDN Multi-AZ, Firewall Inline ML và hỗ trợ kỹ thuật 24/7/365.
            </div>
            <VIDCNativeButton
              type="button"
              onClick={onOpenQuote}
              className="px-6 py-3 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer shrink-0 min-h-[44px]"
            >
              <span>{isLaos ? 'Request Sizing Quote' : 'Đăng Ký Báo Giá Cụm HPC'}</span>
              <ArrowRight className="w-4 h-4" />
            </VIDCNativeButton>
          </div>
        </div>

        {/* Custom Cluster Configurator Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[var(--vidc-legacy-hex-18181a)] via-[var(--vidc-legacy-hex-242730)] to-[var(--vidc-legacy-hex-18181a)] text-white border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-red-500/20 text-red-300 text-xs font-bold border border-red-500/30">
              <Sparkles className="w-3.5 h-3.5 text-red-400" />
              <span>Tùy Biến Cụm HPC Theo Yêu Cầu Riêng (Custom HPC Cluster)</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Cần thiết kế cụm siêu máy tính hàng chục Node với GPU NVIDIA H100/A100?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Kiến trúc sư giải pháp của Viettel IDC sẵn sàng đồng hành khảo sát, đo lường IOPS/TFLOPS và thiết kế hệ thống tính toán riêng biệt cho doanh nghiệp.
            </p>
          </div>

          <VIDCNativeButton
            type="button"
            onClick={onOpenQuote}
            className="px-6 py-3.5 rounded-lg bg-white text-slate-950 hover:bg-slate-100 active:bg-slate-200 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shrink-0 cursor-pointer min-h-[44px]"
          >
            {isLaos ? 'Design Custom Cluster' : 'Tư Vấn Thiết Kế Cụm Riêng'}
          </VIDCNativeButton>
        </div>

      </div>
    </section>
  );
};
