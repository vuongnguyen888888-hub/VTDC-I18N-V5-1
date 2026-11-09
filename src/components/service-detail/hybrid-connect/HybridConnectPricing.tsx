import React, { useState } from 'react';
import { Server, Cable, Network, ShieldCheck, Check, Sliders, ArrowRight, Activity, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface HybridConnectPricingProps {
  currentMarket?: SEAMarket;
  onOpenConsult: (notes?: string) => void;
}

export const HybridConnectPricing: React.FC<HybridConnectPricingProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const [selectedSource, setSelectedSource] = useState<'colocation' | 'p2p' | 'mpls'>('colocation');
  const [selectedRedundancy, setSelectedRedundancy] = useState<'single' | 'redundant'>('single');
  const [selectedPort, setSelectedPort] = useState<'1g' | '10g'>('1g');

  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    pricingTitle: isLaos ? 'TOPOLOGY MODELS & OPTIONS' : 'CÁC MÔ HÌNH KẾT NỐI & TÙY CHỌN DỊCH VỤ',
    headline: isLaos 
      ? 'Standardized Viettel Hybrid Connect Architecture Models' 
      : 'Các Mô Hình Đấu Nối Viettel Hybrid Connect Chuẩn Hóa',
    desc: isLaos 
      ? 'Choose the source infrastructure and link redundancy topology that matches your corporate architecture'
      : 'Lựa chọn hạ tầng nguồn và cấu trúc dự phòng đường truyền phù hợp với kiến trúc CNTT của doanh nghiệp',
    filterSource: isLaos ? 'SOURCE INFRASTRUCTURE:' : 'LOẠI HÌNH HẠ TẦNG NGUỒN:',
    filterRedundancy: isLaos ? 'REDUNDANCY TOPOLOGY:' : 'CẤU TRÚC DỰ PHÒNG:',
    filterPort: isLaos ? 'PORT INTERFACE:' : 'GIAO DIỆN CỔNG:',
    customTitle: isLaos 
      ? 'Need a transmission survey or Hub-and-Spoke multi-branch design?' 
      : 'Doanh nghiệp cần khảo sát đường truyền hoặc thiết kế mô hình Hub-and-Spoke đa chi nhánh?',
    customBtn: isLaos ? 'REQUEST TOPOLOGY DESIGN & QUOTE' : 'YÊU CẦU THIẾT KẾ KÊNH TRUYỀN & NHẬN BÁO GIÁ',
    vatFootnote: isLaos 
      ? '* Service pricing excludes taxes. Customized bandwidth profiles (10 Mbps – 10 Gbps) are provisioned per SLA agreement.'
      : '* Toàn bộ chi phí dịch vụ chưa bao gồm thuế VAT (10%). Băng thông cam kết hỗ trợ từ 10 Mbps đến 10 Gbps tùy biến linh hoạt.',
  };

  const sourceFilters = [
    { id: 'colocation', label: isLaos ? 'Viettel Colocation' : 'Khách hàng Viettel Colocation', icon: Server },
    { id: 'p2p', label: isLaos ? 'On-Premise Point-to-Point' : 'On-Premise qua Cáp quang P2P', icon: Cable },
    { id: 'mpls', label: isLaos ? 'On-Premise MPLS L2/L3' : 'On-Premise qua MPLS L2/L3', icon: Network },
  ];

  const redundancyFilters = [
    { id: 'single', label: isLaos ? 'Single Link Model' : 'Mô hình Đơn (Single Link)' },
    { id: 'redundant', label: isLaos ? 'Redundant Link Model' : 'Mô hình Dự phòng (Redundant Link)' },
  ];

  const portFilters = [
    { id: '1g', label: '1 Gbps Port' },
    { id: '10g', label: '10 Gbps Port' },
  ];

  const modelMatrix = [
    {
      id: 'colocation',
      name: isLaos ? 'For Viettel Colocation Clients' : 'Dành cho khách hàng Viettel Colocation',
      badge: isLaos ? 'LOWEST LATENCY' : 'ĐỘ TRỄ THẤP NHẤT',
      icon: Server,
      singleMode: isLaos 
        ? 'Single link between Colocation Server/Rack directly into the Viettel IDC Cloud cluster.'
        : 'Kết nối đơn giữa Máy chủ/Server Colocation vào cụm Viettel IDC Cloud.',
      redundantMode: isLaos 
        ? 'Dual redundant links between Colocation Server into Viettel IDC Cloud, ensuring uninterrupted continuity.'
        : 'Kết nối dự phòng kép giữa Máy chủ Colocation vào Viettel IDC Cloud, đảm bảo tính liên tục.',
      mechanism: isLaos 
        ? 'Direct internal Data Center cross-connect (Layer 2 / Layer 3).'
        : 'Đấu nối trực tiếp nội bộ trong Data Center (Cross-connect Layer 2/Layer 3).',
      bandwidth: '100 Mbps – 10 Gbps',
      latency: '< 1 ms (Intra-DC)',
      port: selectedPort === '1g' ? '1 Gbps SFP / RJ45' : '10 Gbps SFP+',
    },
    {
      id: 'p2p',
      name: isLaos ? 'For On-Premise Network (Point-to-Point)' : 'Dành cho mạng On-Premise (Point-to-Point)',
      badge: isLaos ? 'PHYSICAL FIBER' : 'CÁP QUANG TRẮNG',
      icon: Cable,
      singleMode: isLaos 
        ? 'Single dedicated optical fiber link from On-Premises into Viettel IDC Cloud.'
        : 'Kết nối đơn từ On-Premises vào Cloud Viettel IDC qua kênh truyền cáp quang riêng.',
      redundantMode: isLaos 
        ? 'Dual redundant optical paths with dual protection from On-Premises into Cloud via private fiber.'
        : 'Kết nối dự phòng có đường bảo vệ kép từ On-Premises vào Cloud qua cáp quang riêng.',
      mechanism: isLaos 
        ? 'Direct optical fiber transmission (Layer 1 / Dark-Fibre) across ISP infrastructure.'
        : 'Sử dụng đường kết nối cáp quang trực tiếp (Layer 1 / Dark-Fibre) trong hệ thống của ISP.',
      bandwidth: '1 Gbps – 10 Gbps',
      latency: '1 – 3 ms (Metro)',
      port: selectedPort === '1g' ? '1 Gbps Optical' : '10 Gbps Optical 10GBASE-LR',
    },
    {
      id: 'mpls',
      name: isLaos ? 'For On-Premise Network (MPLS L2/L3)' : 'Dành cho mạng On-Premise (MPLS L2/L3)',
      badge: isLaos ? 'MULTI-SITE WAN' : 'MẠNG DIỆN RỘNG',
      icon: Network,
      singleMode: isLaos 
        ? 'Single link between On-Premises and Cloud via carrier virtual private network.'
        : 'Kết nối đơn giữa On-Premises vào Cloud qua mạng riêng ảo của nhà mạng.',
      redundantMode: isLaos 
        ? 'Multi-path redundant links between On-Premises and Cloud via carrier VPN infrastructure.'
        : 'Kết nối dự phòng đa tuyến giữa On-Premises vào Cloud qua mạng riêng ảo của nhà mạng.',
      mechanism: isLaos 
        ? 'MPLS Virtual Private Network (Layer 2 / Layer 3) over telecom carrier networks.'
        : 'Sử dụng mạng riêng ảo MPLS (Layer 2 / Layer 3) trên hạ tầng mạng của các nhà mạng ISP.',
      bandwidth: '10 Mbps – 1 Gbps+',
      latency: '3 – 8 ms (Inter-provincial)',
      port: selectedPort === '1g' ? '1 Gbps GE' : '10 Gbps 10GE',
    },
  ];

  const currentModel = modelMatrix.find((m) => m.id === selectedSource) || modelMatrix[0];

  return (
    <section 
      id="pricing" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header (Centered) */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.pricingTitle}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight mb-2">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Filter Controls Row (Centered Buttons matching CloudServer standard) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm mb-10 space-y-6">
          
          {/* Row 1: Source Infrastructure Filter */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider shrink-0">
              {t.filterSource}
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {sourceFilters.map((sf) => {
                const IconComp = sf.icon;
                const isSelected = selectedSource === sf.id;
                return (
                  <VIDCNativeButton
                    key={sf.id}
                    type="button"
                    onClick={() => setSelectedSource(sf.id as any)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all min-h-[40px] ${
                      isSelected
                        ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-xs'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                    }`}
                  >
                    <IconComp className="w-4 h-4" />
                    <span>{sf.label}</span>
                  </VIDCNativeButton>
                );
              })}
            </div>
          </div>

          {/* Row 2: Redundancy & Port Selectors */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
            
            {/* Redundancy Selector */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mr-1">
                {t.filterRedundancy}
              </span>
              {redundancyFilters.map((rf) => (
                <VIDCNativeButton
                  key={rf.id}
                  type="button"
                  onClick={() => setSelectedRedundancy(rf.id as any)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all min-h-[38px] ${
                    selectedRedundancy === rf.id
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  {rf.label}
                </VIDCNativeButton>
              ))}
            </div>

            {/* Port Interface Selector */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mr-1">
                {t.filterPort}
              </span>
              {portFilters.map((pf) => (
                <VIDCNativeButton
                  key={pf.id}
                  type="button"
                  onClick={() => setSelectedPort(pf.id as any)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all min-h-[38px] ${
                    selectedPort === pf.id
                      ? 'bg-red-50 text-[var(--vidc-color-brand-red)] border-2 border-[var(--vidc-color-brand-red)]'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  {pf.label}
                </VIDCNativeButton>
              ))}
            </div>

          </div>
        </div>

        {/* Highlighted Model Card for the selected configuration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-stretch">
          
          {/* Active Config Highlight Box (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border-2 border-[var(--vidc-color-brand-red)] p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="bg-[var(--vidc-color-brand-red)] text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  {currentModel.badge}
                </span>
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  Cổng {selectedPort === '1g' ? '1 Gbps' : '10 Gbps'} • {selectedRedundancy === 'single' ? 'Single Link' : 'Redundant Link'}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--vidc-legacy-hex-222225)] leading-tight">
                  {currentModel.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Phương thức truyền dẫn: <strong className="text-slate-800">{currentModel.mechanism}</strong>
                </p>
              </div>

              {/* Mode Specifications */}
              <div className="space-y-3 pt-2">
                <div className={`p-4 rounded-xl border transition-all ${
                  selectedRedundancy === 'single'
                    ? 'bg-red-50/50 border-[var(--vidc-color-brand-red)]/40 shadow-xs'
                    : 'bg-slate-50 border-slate-200/80 opacity-70'
                }`}>
                  <div className="flex items-center gap-2 mb-1">
                    <Check className={`w-4 h-4 ${selectedRedundancy === 'single' ? 'text-[var(--vidc-color-brand-red)]' : 'text-slate-400'}`} />
                    <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wide">Cấu hình Đơn (Single Mode)</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed pl-6">
                    {currentModel.singleMode}
                  </p>
                </div>

                <div className={`p-4 rounded-xl border transition-all ${
                  selectedRedundancy === 'redundant'
                    ? 'bg-red-50/50 border-[var(--vidc-color-brand-red)]/40 shadow-xs'
                    : 'bg-slate-50 border-slate-200/80 opacity-70'
                }`}>
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className={`w-4 h-4 ${selectedRedundancy === 'redundant' ? 'text-[var(--vidc-color-brand-red)]' : 'text-slate-400'}`} />
                    <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wide">Cấu hình Dự phòng (Redundant Mode)</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed pl-6">
                    {currentModel.redundantMode}
                  </p>
                </div>
              </div>
            </div>

            {/* Specs bar */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100 text-center">
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Băng thông</span>
                <span className="text-xs font-extrabold text-slate-800">{currentModel.bandwidth}</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Độ trễ trung bình</span>
                <span className="text-xs font-extrabold text-emerald-600">{currentModel.latency}</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Chuẩn cổng</span>
                <span className="text-xs font-extrabold text-slate-800">{currentModel.port}</span>
              </div>
            </div>

            <VIDCNativeButton
              type="button"
              onClick={() => onOpenConsult(`Đăng ký tư vấn mô hình ${currentModel.name} (${selectedRedundancy === 'single' ? 'Single' : 'Redundant'}, Cổng ${selectedPort})`)}
              className="w-full py-3 rounded-xl font-extrabold text-sm text-white bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-d4002d)] shadow-md transition-all flex items-center justify-center gap-2 min-h-[44px]"
            >
              <span>ĐĂNG KÝ TƯ VẤN MÔ HÌNH NÀY</span>
              <ArrowRight className="w-4 h-4" />
            </VIDCNativeButton>
          </div>

          {/* All 3 Models Comparison Table Overview (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-3">
                Bảng Phân Nhóm Mô Hình Đấu Nối Chuẩn
              </h4>
              <div className="space-y-3">
                {modelMatrix.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedSource(item.id as any)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                      selectedSource === item.id
                        ? 'border-[var(--vidc-color-brand-red)] bg-red-50/30'
                        : 'border-slate-200/80 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-[var(--vidc-legacy-hex-222225)]">{item.name}</span>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {item.bandwidth}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-1 line-clamp-2">
                      {item.mechanism}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Activity className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hỗ trợ đo kiểm suy hao & định tuyến BGP/VLAN 24/7.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Custom Configurator CTA Banner (Exact MẪU TDV-01 Box) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center shrink-0">
              <Sliders className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                {t.customTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Chúng tôi hỗ trợ khảo sát tuyến cáp quang, cấu hình định tuyến tĩnh/động BGP và thiết kế mạng Hybrid Cloud chuyên biệt cho từng doanh nghiệp.
              </p>
            </div>
          </div>

          <VIDCNativeButton
            type="button"
            onClick={() => onOpenConsult('Yêu cầu thiết kế kênh truyền Hybrid Connect Hub-and-Spoke đa chi nhánh')}
            className="w-full md:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-d4002d)] shadow-md transition-all shrink-0 active:scale-95 whitespace-nowrap"
          >
            <span>{t.customBtn}</span>
          </VIDCNativeButton>
        </div>

        {/* Footnote */}
        <p className="text-xs text-slate-500 text-center italic">
          {t.vatFootnote}
        </p>

      </div>
    </section>
  );
};
