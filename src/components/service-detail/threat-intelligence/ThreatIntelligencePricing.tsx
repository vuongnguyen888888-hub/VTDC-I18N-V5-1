import React, { useState } from 'react';
import { Check, Minus, ArrowRight, ShieldCheck, Sparkles, Layers, FileText } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface ThreatIntelligencePricingProps {
  currentMarket?: SEAMarket;
  onOpenConsult: (notes?: string) => void;
}

export const ThreatIntelligencePricing: React.FC<ThreatIntelligencePricingProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'main' | 'datasheet'>('main');
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'SERVICE PLANS & COMPARISON' : 'GÓI DỊCH VỤ & BẢNG SO SÁNH',
    headline: isLaos
      ? 'Viettel Threat Intelligence In-Depth Service Plans'
      : 'Các Gói Dịch Vụ Viettel Threat Intelligence Chuyên Sâu',
    subtitle: isLaos
      ? 'Flexible service subscriptions calibrated to organizational scale, asset count, and security maturity.'
      : 'Đăng ký dịch vụ linh hoạt theo nhu cầu quy mô hạ tầng và mức độ giám sát của tổ chức.',
    tabMain: isLaos ? 'Core Feature Packages' : 'Các Gói Dịch Vụ Trọng Tâm',
    tabDatasheet: isLaos ? 'Datasheet Tiering (Feeds / Basic / Advanced)' : 'Phân Hạng Datasheet (Feeds / Basic / Advanced / Extreme)',
    registerNow: isLaos ? 'Register Plan' : 'ĐĂNG KÝ',
    getQuote: isLaos ? 'Request Datasheet Quote' : 'Nhận Báo Giá Gói',
  };

  const mainFeatures = [
    { name: 'Nguồn dữ liệu mối đe dọa (Threat Feed)', pro: true, drp: false, easm: false },
    { name: 'Cảnh báo lỗ hổng bảo mật (Vulnerability Alert)', pro: true, drp: false, easm: false },
    { name: 'Cảnh báo mã độc (Malware Alert)', pro: true, drp: false, easm: false },
    { name: 'Cảnh báo tấn công APT', pro: true, drp: false, easm: false },
    { name: 'Cảnh báo rò rỉ dữ liệu (Data Breach)', pro: false, drp: true, easm: false },
    { name: 'Cảnh báo tài khoản lộ lọt (Compromised Credential)', pro: false, drp: true, easm: false },
    { name: 'Cảnh báo lộ lọt thẻ tín dụng (Compromised Cards)', pro: false, drp: true, easm: false },
    { name: 'Cảnh báo lừa đảo, giả mạo thương hiệu (Phishing/Brand-Abuse)', pro: false, drp: true, easm: false },
    { name: 'Cảnh báo tài sản số không quản lý (Unmanaged Assets)', pro: false, drp: false, easm: true },
    { name: 'Cảnh báo lỗ hổng bảo mật bên ngoài (External Surface Vuln)', pro: false, drp: false, easm: true },
    { name: 'Cảnh báo hoạt động bất thường bên ngoài (Surface Anomaly)', pro: false, drp: false, easm: true },
    { name: 'Quản lý các cảnh báo bảo mật (Alert Management)', pro: true, drp: true, easm: true },
    { name: 'Cơ sở dữ liệu mối đe dọa (Threat Database)', pro: true, drp: true, easm: true },
    { name: 'Báo cáo phân tích chuyên sâu (In-depth Reports)', pro: true, drp: true, easm: true },
    { name: 'Phản ứng với mối đe dọa (Threat Response)', pro: true, drp: true, easm: true },
    { name: 'Hỗ trợ khách hàng 24/7', pro: true, drp: true, easm: true },
  ];

  const datasheetTiers = [
    {
      tier: 'Gói Threat Feeds',
      badge: 'TI THUẦN TÚY',
      summary: 'Cung cấp Machine Readable Threat Intelligence (MRTI) cho hệ thống SIEM/EDR',
      highlights: [
        'Nạp tự động IP, Domain, Hash, URL độc hại (IoC)',
        'Tích hợp chuẩn quốc tế STIX/TAXII, REST API',
        'Cảnh báo qua Web Portal và Email thông báo',
        'Hỗ trợ kỹ thuật cấu hình 24/7/365',
      ],
      idealFor: 'Tổ chức đã có SOC/SIEM cần bổ sung feeds tin cậy',
    },
    {
      tier: 'Gói Basic',
      badge: 'PHỔ THÔNG',
      summary: 'Tri thức mối đe dọa kèm theo cảnh báo bảo mật diện rộng từ nguồn Public',
      highlights: [
        'Tất cả tính năng của Gói Threat Feeds',
        'Cảnh báo lỗ hổng phần mềm mới (Vulnerability Alert)',
        'Cảnh báo chiến dịch mã độc mới xuất hiện (Malware)',
        'Cảnh báo website lừa đảo từ nguồn Public',
        'Khuyến nghị hành động phản ứng (Actionable Response)',
        'Báo cáo định kỳ tình hình an ninh mạng',
      ],
      idealFor: 'Doanh nghiệp SMEs & Startup bắt đầu chuẩn hóa CTI',
    },
    {
      tier: 'Gói Advanced / Extreme',
      badge: 'DOANH NGHIỆP LỚN',
      isPopular: true,
      summary: 'Tình báo chuyên sâu kết hợp nguồn Private độc quyền của Viettel Cyber Security',
      highlights: [
        'Toàn bộ tính năng gói Basic & Threat Feeds',
        'Cảnh báo tấn công APT và chiến dịch nhắm mục tiêu (Targeted)',
        'Bảo vệ rủi ro kỹ thuật số (Brand Abuse, Data Leak, Chợ đen)',
        'Truy vết tài khoản & thẻ tín dụng lộ lọt (Compromised)',
        'Cảnh báo sớm từ mạng lưới viễn thông và Sensor Viettel',
        'Hỗ trợ điều tra chuyên sâu từ chuyên gia an ninh mạng Pwn2Own',
      ],
      idealFor: 'Ngân hàng, Tài chính, Bảo hiểm, eCommerce, Cơ quan Nhà nước',
    },
  ];

  return (
    <section 
      id="pricing" 
      className="py-16 md:py-24 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Sub Navigation Tabs between Main Packages and Datasheet Tiering */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-200/70 rounded-xl max-w-xl mb-10">
          <VIDCNativeButton
            type="button"
            onClick={() => setActiveSubTab('main')}
            className={`flex-1 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeSubTab === 'main'
                ? 'bg-white text-[var(--vidc-color-brand-red)] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.tabMain}
          </VIDCNativeButton>
          <VIDCNativeButton
            type="button"
            onClick={() => setActiveSubTab('datasheet')}
            className={`flex-1 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeSubTab === 'datasheet'
                ? 'bg-white text-[var(--vidc-color-brand-red)] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.tabDatasheet}
          </VIDCNativeButton>
        </div>

        {activeSubTab === 'main' ? (
          /* SECTION 2 MAIN TABLE: 3 Major Pillars (Professional, DRP, EASM) */
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80">
                    <th className="p-4 sm:p-6 text-xs sm:text-sm font-extrabold text-[var(--vidc-legacy-hex-222225)] w-[40%]">
                      Nhóm tính năng / Quyền lợi
                    </th>
                    <th className="p-4 sm:p-6 text-center w-[20%]">
                      <div className="text-sm sm:text-base font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                        PROFESSIONAL
                      </div>
                      <div className="text-[11px] font-normal text-slate-500 mt-1 leading-snug">
                        Giám sát mối đe dọa thời gian thực & chủ động quản lý rủi ro
                      </div>
                    </th>
                    <th className="p-4 sm:p-6 text-center w-[20%] bg-red-50/40 border-x border-red-100">
                      <div className="text-sm sm:text-base font-extrabold text-[var(--vidc-color-brand-red)]">
                        DIGITAL RISK PROTECTION
                      </div>
                      <div className="text-[11px] font-normal text-slate-500 mt-1 leading-snug">
                        Bảo vệ thương hiệu & dữ liệu khách hàng (Tài chính, eCommerce)
                      </div>
                    </th>
                    <th className="p-4 sm:p-6 text-center w-[20%]">
                      <div className="text-sm sm:text-base font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                        EXTERNAL ATTACK SURFACE
                      </div>
                      <div className="text-[11px] font-normal text-slate-500 mt-1 leading-snug">
                        Kiểm soát rủi ro tấn công vào tài sản số trực tuyến & Cloud
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {mainFeatures.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-4 sm:p-4.5 font-medium text-slate-800">
                        {item.name}
                      </td>
                      <td className="p-4 sm:p-4.5 text-center">
                        {item.pro ? (
                          <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        ) : (
                          <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 sm:p-4.5 text-center bg-red-50/20 border-x border-red-100">
                        {item.drp ? (
                          <div className="w-6 h-6 rounded-full bg-red-100 text-[var(--vidc-color-brand-red)] flex items-center justify-center mx-auto">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        ) : (
                          <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 sm:p-4.5 text-center">
                        {item.easm ? (
                          <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        ) : (
                          <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                  
                  {/* CTA Row */}
                  <tr className="bg-slate-50 border-t-2 border-slate-200">
                    <td className="p-4 sm:p-6 font-bold text-slate-900">
                      Hành động tiếp theo
                    </td>
                    <td className="p-4 sm:p-6 text-center">
                      <VIDCNativeButton
                        type="button"
                        onClick={() => onOpenConsult('Đăng ký gói PROFESSIONAL - Viettel Threat Intelligence')}
                        className="w-full py-2.5 px-4 rounded-xl bg-white border border-slate-300 hover:border-[var(--vidc-color-brand-red)] hover:text-[var(--vidc-color-brand-red)] text-slate-800 text-xs font-bold transition-all shadow-xs cursor-pointer"
                      >
                        {t.registerNow}
                      </VIDCNativeButton>
                    </td>
                    <td className="p-4 sm:p-6 text-center bg-red-50/40 border-x border-red-100">
                      <VIDCNativeButton
                        type="button"
                        onClick={() => onOpenConsult('Đăng ký gói DIGITAL RISK PROTECTION (DRP) - Viettel Threat Intelligence')}
                        className="w-full py-2.5 px-4 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
                      >
                        {t.registerNow}
                      </VIDCNativeButton>
                    </td>
                    <td className="p-4 sm:p-6 text-center">
                      <VIDCNativeButton
                        type="button"
                        onClick={() => onOpenConsult('Đăng ký gói EXTERNAL ATTACK SURFACE MANAGEMENT (EASM) - Viettel Threat Intelligence')}
                        className="w-full py-2.5 px-4 rounded-xl bg-white border border-slate-300 hover:border-[var(--vidc-color-brand-red)] hover:text-[var(--vidc-color-brand-red)] text-slate-800 text-xs font-bold transition-all shadow-xs cursor-pointer"
                      >
                        {t.registerNow}
                      </VIDCNativeButton>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* SECTION 2 DATASHEET TIERS GRID: Threat Feeds / Basic / Advanced / Extreme */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {datasheetTiers.map((card, idx) => (
              <div 
                key={idx}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  card.isPopular
                    ? 'bg-white border-2 border-[var(--vidc-color-brand-red)] shadow-xl ring-4 ring-red-500/10'
                    : 'bg-white border border-slate-200/90 shadow-sm hover:shadow-md'
                }`}
              >
                {card.isPopular && (
                  <div className="absolute -top-3.5 right-6 px-3 py-0.5 rounded-full bg-[var(--vidc-color-brand-red)] text-white text-[11px] font-extrabold tracking-wider uppercase shadow-sm">
                    KHUYÊN DÙNG
                  </div>
                )}

                <div className="space-y-5">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-extrabold uppercase bg-slate-100 text-slate-700 mb-2">
                      {card.badge}
                    </span>
                    <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                      {card.tier}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {card.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold uppercase text-slate-900 tracking-wider mb-3">
                      Tính năng nổi bật:
                    </div>
                    <ul className="space-y-2.5 text-xs text-slate-700">
                      {card.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 text-[11px] text-slate-500 italic bg-slate-50 p-2.5 rounded-lg">
                    <span className="font-semibold text-slate-700">Phù hợp: </span>
                    {card.idealFor}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <VIDCNativeButton
                    type="button"
                    onClick={() => onOpenConsult(`Đăng ký tư vấn ${card.tier} - Viettel Threat Intelligence`)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      card.isPopular
                        ? 'bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white shadow-md'
                        : 'bg-slate-900 hover:bg-black text-white'
                    }`}
                  >
                    <span>{t.getQuote}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </VIDCNativeButton>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
