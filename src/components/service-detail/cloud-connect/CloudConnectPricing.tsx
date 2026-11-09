import React, { useState } from 'react';
import { Check, ArrowRight, Sliders, Sparkles } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudConnectPricingProps {
  currentMarket?: SEAMarket;
  onOpenConsult: (notes?: string) => void;
}

export const CloudConnectPricing: React.FC<CloudConnectPricingProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';
  const currencySymbol = isLaos ? 'USD' : 'VNĐ';

  const [portType, setPortType] = useState<'hosted' | 'dedicated'>('hosted');
  const [cloudDest, setCloudDest] = useState<string>('aws');

  const t = {
    eyebrow: isLaos ? 'PRICING & ESTIMATOR' : 'BẢNG GIÁ & DỰ TOÁN',
    headline: isLaos
      ? 'Flexible Bandwidth Options & Estimated Connectivity Cost'
      : 'Tùy Chọn Băng Thông & Dự Toán Chi Phí Kết Nối',
    subtitle: isLaos
      ? 'Viettel Cloud Connect is flexibly priced based on actual bandwidth throughput (from 50 Mbps up to 100 Gbps+), routing architecture and Data Center locations.'
      : 'Dịch vụ Viettel Cloud Connect được định giá linh hoạt theo dung lượng băng thông thực tế (từ 50 Mbps đến 100 Gbps+), mô hình định tuyến L2/L3 và vị trí Data Center.',
    portTypeLabel: isLaos ? 'CONNECTION MODEL:' : 'MÔ HÌNH KẾT NỐI:',
    cloudDestLabel: isLaos ? 'CLOUD DESTINATION:' : 'ĐIỂM ĐẾN CLOUD:',
    configTitle: isLaos ? 'CONFIGURATION' : 'CẤU HÌNH',
    configIncludes: isLaos ? 'Detailed configuration includes:' : 'Cấu hình chi tiết bao gồm:',
    btnRegister: isLaos ? 'ORDER NOW' : 'ĐĂNG KÝ NGAY',
    btnConsult: isLaos ? 'GET CONSULTATION' : 'NHẬN TƯ VẤN',
    customTitle: isLaos 
      ? 'Custom Dedicated Port & Multi-Cloud Gateway Architecture'
      : 'Cấu hình kênh truyền tùy chỉnh — Thiết kế riêng theo nhu cầu',
    customDesc: isLaos
      ? 'Viettel IDC solution architects provide on-demand site survey, dual-path BGP redundancy (1+1) and tailored QoS bandwidth engineering.'
      : 'Kỹ sư Viettel IDC sẵn sàng khảo sát hạ tầng, thiết kế dự phòng kênh truyền 1+1 (Dual-Port Active/Standby) và xây dựng chính sách QoS tối ưu.',
    btnCustom: isLaos ? 'REQUEST CUSTOM DESIGN' : 'ĐĂNG KÝ NHẬN TƯ VẤN',
    vatNote: isLaos
      ? '* Pricing shown is reference, excluding VAT and hyperscaler port charges.'
      : '* Đơn giá trên là chi phí tham khảo, chưa bao gồm thuế VAT (10%) và phí port của từng nhà cung cấp Hyperscale Cloud.',
  };

  const cloudOptions = [
    { id: 'aws', name: 'AWS Direct Connect' },
    { id: 'azure', name: 'Azure ExpressRoute' },
    { id: 'gcp', name: 'Google Cloud' },
    { id: 'alibaba', name: 'Alibaba Cloud' },
  ];

  // 4 Standard packages
  const packages = [
    {
      id: 'cc-50m',
      name: 'Cloud Connect CC-1',
      sub: 'Standard Office / ERP',
      bandwidth: '50 Mbps - 200 Mbps',
      priceVND: '1.800.000',
      priceUSD: '75',
      badge: null,
      isPopular: false,
      specs: [
        'Băng thông: 50 Mbps – 200 Mbps',
        'Hình thức: Hosted Connection L2/L3',
        'Cam kết SLA đường truyền: 99,95%',
        'Độ trễ tới Cloud PoP: < 10ms',
        'Hỗ trợ cấu hình 01 cặp BGP Peering',
        'Miễn phí tư vấn & đo kiểm chất lượng',
      ],
    },
    {
      id: 'cc-500m',
      name: 'Cloud Connect CC-2',
      sub: 'Enterprise Production (Phổ biến)',
      bandwidth: '500 Mbps - 1 Gbps',
      priceVND: '4.500.000',
      priceUSD: '190',
      badge: isLaos ? 'MOST POPULAR' : 'PHỔ BIẾN NHẤT',
      isPopular: true,
      specs: [
        'Băng thông: 500 Mbps – 1 Gbps',
        'Kênh truyền riêng Hosted / Sub-interface',
        'Cam kết độ trễ cực thấp: < 5ms',
        'Hỗ trợ Multi-VLAN / QinQ linh hoạt',
        'Hỗ trợ dự phòng 1+1 (High Availability)',
        'Giám sát & cảnh báo tức thời 24/7',
      ],
    },
    {
      id: 'cc-2g',
      name: 'Cloud Connect CC-3',
      sub: 'High-Volume Financial / BigData',
      bandwidth: '2 Gbps - 5 Gbps',
      priceVND: '12.000.000',
      priceUSD: '500',
      badge: null,
      isPopular: false,
      specs: [
        'Băng thông: 2 Gbps – 5 Gbps',
        'Cổng truyền tải tốc độ cao chuyên biệt',
        'Cam kết băng thông thực tế 100%',
        'Tối ưu hóa MTU 9000 (Jumbo Frames)',
        'Định tuyến ưu tiên QoS cao cấp',
        'Đội ngũ kỹ sư mạng L3 trực tiếp hỗ trợ',
      ],
    },
    {
      id: 'cc-10g',
      name: 'Cloud Connect CC-4',
      sub: 'Hyperscale Dedicated Port',
      bandwidth: '10 Gbps - 100 Gbps+',
      priceVND: '28.000.000',
      priceUSD: '1,190',
      badge: null,
      isPopular: false,
      specs: [
        'Băng thông: 10 Gbps – 100 Gbps+',
        'Cổng vật lý riêng 100% (Dedicated Port)',
        'Không giới hạn lưu lượng truyền tải',
        'Bảo mật mã hóa MACsec phần cứng',
        'Hạ tầng đường truyền đa hướng ngầm hóa',
        'Xử lý sự cố khẩn cấp cam kết < 15 phút',
      ],
    },
  ];

  const handleRegister = (pkgName: string) => {
    const cloudName = cloudOptions.find(c => c.id === cloudDest)?.name || cloudDest;
    const portText = portType === 'dedicated' ? 'Dedicated Port' : 'Hosted Connection';
    onOpenConsult(`Đăng ký gói ${pkgName} - Đích: ${cloudName} - Loại hình: ${portText}`);
  };

  const handleConsult = (pkgName?: string) => {
    const cloudName = cloudOptions.find(c => c.id === cloudDest)?.name || cloudDest;
    const portText = portType === 'dedicated' ? 'Dedicated Port' : 'Hosted Connection';
    onOpenConsult(`Tư vấn cấu hình kênh ${pkgName || 'Tùy chỉnh'} - Đích: ${cloudName} - Loại hình: ${portText}`);
  };

  return (
    <section 
      id="pricing" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f8fafc)] text-[var(--vidc-legacy-hex-0f172a)] border-b border-slate-200"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight leading-tight mb-2">
            {t.headline}
          </h2>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 mb-12 text-xs">
          
          {/* Port Type Switch */}
          <div className="flex items-center gap-2.5">
            <span className="font-extrabold text-slate-500 uppercase tracking-wider">{t.portTypeLabel}</span>
            <div className="inline-flex p-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <VIDCNativeButton
                type="button"
                onClick={() => setPortType('hosted')}
                className={`px-4 py-1.5 rounded-full font-bold transition-all text-xs ${
                  portType === 'hosted'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Hosted Connection
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setPortType('dedicated')}
                className={`px-4 py-1.5 rounded-full font-bold transition-all text-xs ${
                  portType === 'dedicated'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Dedicated Port
              </VIDCNativeButton>
            </div>
          </div>

          {/* Cloud Destination Pills */}
          <div className="flex items-center gap-2.5">
            <span className="font-extrabold text-slate-500 uppercase tracking-wider">{t.cloudDestLabel}</span>
            <div className="inline-flex p-1 bg-white border border-slate-200 rounded-full shadow-sm">
              {cloudOptions.map((c) => (
                <VIDCNativeButton
                  key={c.id}
                  type="button"
                  onClick={() => setCloudDest(c.id)}
                  className={`px-3 py-1.5 rounded-full font-bold transition-all text-xs whitespace-nowrap ${
                    cloudDest === c.id
                      ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {c.name}
                </VIDCNativeButton>
              ))}
            </div>
          </div>

        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12 items-stretch">
          {packages.map((pkg) => {
            const price = isLaos ? pkg.priceUSD : pkg.priceVND;
            const unit = isLaos ? 'USD/MO' : 'Đ/THÁNG';

            return (
              <div 
                key={pkg.id}
                className={`relative rounded-2xl p-5 bg-white border flex flex-col justify-between transition-all duration-300 ${
                  pkg.isPopular 
                    ? 'border-2 border-[var(--vidc-color-brand-red)] shadow-xl shadow-red-500/10' 
                    : 'border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300'
                }`}
              >
                {/* Popular Pill */}
                {pkg.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--vidc-color-brand-red)] text-white text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-full shadow-sm tracking-wider flex items-center gap-1 whitespace-nowrap">
                    <Sparkles className="w-3 h-3" />
                    <span>{pkg.badge}</span>
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight">
                        {pkg.name}
                      </h3>
                      <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mt-0.5">
                        {pkg.sub}
                      </p>
                    </div>
                  </div>

                  {/* Price Block */}
                  <div className="my-3 pb-3 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-[var(--vidc-color-brand-red)] tracking-tight">
                        {price}
                      </span>
                      <span className="text-[11px] font-extrabold text-slate-500 uppercase">
                        {unit}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1 font-medium">
                      Băng thông: <strong className="text-slate-900">{pkg.bandwidth}</strong>
                    </div>
                  </div>

                  {/* Configuration Heading */}
                  <div className="mb-2">
                    <span className="text-xs font-black text-slate-900 uppercase tracking-wider">
                      {t.configTitle}
                    </span>
                    <p className="text-[11px] text-slate-500 mt-0.5 font-medium">
                      {t.configIncludes}
                    </p>
                  </div>

                  {/* Specs List */}
                  <div className="space-y-2 mb-6">
                    {pkg.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs">
                        <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                        <span className="text-slate-700 leading-snug">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <VIDCNativeButton
                    type="button"
                    onClick={() => handleRegister(pkg.name)}
                    className="w-full py-2.5 px-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs transition-all shadow-sm uppercase tracking-wider text-center block cursor-pointer"
                  >
                    {t.btnRegister}
                  </VIDCNativeButton>

                  <VIDCNativeButton
                    type="button"
                    onClick={() => handleConsult(pkg.name)}
                    className="w-full py-2 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 font-extrabold text-[11px] transition-all uppercase tracking-wider text-center block cursor-pointer"
                  >
                    {t.btnConsult}
                  </VIDCNativeButton>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Configurator Banner */}
        <div className="relative rounded-2xl bg-[var(--vidc-legacy-hex-090d16)] text-white p-6 sm:p-8 border border-slate-800 shadow-xl overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight flex items-center justify-center md:justify-start gap-2.5">
                <Sliders className="w-5 h-5 text-[var(--vidc-color-brand-red)] shrink-0" />
                <span>{t.customTitle}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
                {t.customDesc}
              </p>
            </div>

            <VIDCNativeButton
              type="button"
              onClick={() => handleConsult('Kênh truyền tùy chỉnh theo yêu cầu')}
              className="px-6 py-3 rounded-xl bg-black hover:bg-slate-900 active:bg-slate-950 text-white border border-slate-700 font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 whitespace-nowrap min-h-[44px] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.btnCustom}</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </VIDCNativeButton>
          </div>
        </div>

        {/* VAT Footnote */}
        <div className="text-center text-[11px] text-slate-400 italic mt-4">
          {t.vatNote}
        </div>

      </div>
    </section>
  );
};

