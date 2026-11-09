import React, { useState } from 'react';
import { Tag, Check, Sliders, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface ThreatHuntingPricingProps {
  currentMarket?: SEAMarket;
  onOpenConsult: (notes?: string) => void;
}

export const ThreatHuntingPricing: React.FC<ThreatHuntingPricingProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  // Billing Model / Service Mode: 'periodic' | 'continuous' | 'incident'
  const [serviceModel, setServiceModel] = useState<'periodic' | 'continuous' | 'incident'>('continuous');
  
  // Endpoint Scale: 'under50' | 'mid' | 'large' | 'enterprise'
  const [scale, setScale] = useState<'under50' | 'mid' | 'large' | 'enterprise'>('mid');

  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    pricingTitle: isLaos ? 'SERVICE PRICING' : 'BẢNG GIÁ DỊCH VỤ',
    headline: isLaos
      ? 'Choose the optimal threat hunting configuration for your business'
      : 'Lựa chọn cấu hình và gói săn lùng mối nguy tối ưu cho doanh nghiệp',
    desc: isLaos
      ? 'International standard enterprise cyber defense service with transparent & flexible costs based on infrastructure scale'
      : 'Dịch vụ chuyên gia tiêu chuẩn quốc tế với chi phí minh bạch & linh hoạt theo quy mô hạ tầng',
    modelLabel: isLaos ? 'SERVICE MODEL:' : 'MÔ HÌNH DỊCH VỤ:',
    scaleLabel: isLaos ? 'INFRASTRUCTURE SCALE:' : 'QUY MÔ HẠ TẦNG (ENDPOINTS / SERVERS):',
    periodic: isLaos ? 'Periodic Campaign' : 'Rà Soát Định Kỳ (Theo đợt)',
    continuous: isLaos ? 'Continuous 24/7 Managed' : 'Săn Lùng Liên Tục 24/7 (Khuyên dùng)',
    incident: isLaos ? 'Emergency / Post-Incident' : 'Chiến Dịch Khẩn Cấp / Sau Sự Cố',
    under50: '< 50 Endpoints',
    mid: '50 - 150 Endpoints',
    large: '150 - 500 Endpoints',
    enterprise: '> 500 Enterprise',
    detailDesc: isLaos ? 'Package includes:' : 'Chi tiết gói dịch vụ bao gồm:',
    registerNow: isLaos ? 'REGISTER NOW' : 'ĐĂNG KÝ NGAY',
    consultBtn: isLaos ? 'REQUEST CONSULTATION' : 'NHẬN TƯ VẤN',
    customTitle: isLaos 
      ? 'Custom Tailored Solution — Designed specifically for your needs' 
      : 'Cấu hình tùy chỉnh — Thiết kế riêng theo quy mô doanh nghiệp',
    customDesc: isLaos
      ? 'Need a larger solution? We support custom threat hunting campaigns for conglomerates, banks, multi-cloud and hybrid environments with highest SLA commitment.'
      : 'Cần giải pháp lớn hơn? Chúng tôi hỗ trợ may đo kịch bản săn lùng mối nguy cho tập đoàn, ngân hàng, đa đám mây (Multi-cloud/Hybrid) với cam kết SLA cao nhất.',
    customBtn: isLaos ? 'REQUEST CONSULTATION' : 'ĐĂNG KÝ NHẬN TƯ VẤN',
    vatFootnote: isLaos
      ? '* All service pricing excludes taxes (VAT 10%). Scope of assessment can be customized upon request.'
      : '* Toàn bộ bảng giá dịch vụ chưa bao gồm thuế VAT (10%). Quý khách có thể tùy chỉnh phạm vi và tần suất rà soát theo nhu cầu thực tế.',
  };

  // Pricing packages based on active scale and serviceModel
  const getPackages = () => {
    if (serviceModel === 'periodic') {
      return [
        {
          id: 'p-basic',
          name: 'Rà Soát Cơ Bản (Single Shot)',
          subtitle: 'RÀ SOÁT ĐỘT XUẤT',
          price: scale === 'under50' ? '25.000.000' : scale === 'mid' ? '35.000.000' : scale === 'large' ? '55.000.000' : 'Liên hệ',
          unit: 'đợt',
          recommended: false,
          badge: null,
          features: [
            `Phạm vi: Đến ${scale === 'under50' ? '50' : scale === 'mid' ? '150' : scale === 'large' ? '500' : '> 500'} thiết bị / máy chủ`,
            'Quét IoC/IoA cơ bản theo MITRE ATT&CK',
            'Rà soát mã độc tàng hình & kỹ thuật persistence',
            'Báo cáo hiện trạng an ninh & IoC bàn giao',
            'Hỗ trợ kỹ thuật qua email/hotline giờ hành chính',
          ],
        },
        {
          id: 'p-quarterly',
          name: 'Rà Soát Định Kỳ Quý (Periodic Hunting)',
          subtitle: 'PHỔ BIẾN CHO DOANH NGHIỆP',
          price: scale === 'under50' ? '35.000.000' : scale === 'mid' ? '45.000.000' : scale === 'large' ? '75.000.000' : 'Liên hệ',
          unit: 'quý',
          recommended: true,
          badge: 'PHỔ BIẾN NHẤT',
          features: [
            `Phạm vi: Đến ${scale === 'under50' ? '50' : scale === 'mid' ? '150' : scale === 'large' ? '500' : '> 500'} thiết bị / máy chủ`,
            'Truy vết toàn diện tiến trình, bộ nhớ & mạng',
            'Tích hợp dữ liệu Viettel Threat Intelligence cập nhật',
            'Phân tích nguyên nhân gốc rễ (Root Cause Analysis)',
            'Hỗ trợ tinh chỉnh luật SIEM/EDR & Playbook ứng phó',
            'Họp trình bày kết quả trực tiếp với chuyên gia CISO/SOC',
          ],
        },
        {
          id: 'p-in-depth',
          name: 'Rà Soát Chuyên Sâu Hạ Tầng Trọng Yếu',
          subtitle: 'NGÂN HÀNG & HẠ TẦNG TRỌNG YẾU',
          price: scale === 'under50' ? '60.000.000' : scale === 'mid' ? '85.000.000' : scale === 'large' ? '130.000.000' : 'Liên hệ',
          unit: 'đợt',
          recommended: false,
          badge: null,
          features: [
            'Rà soát toàn diện Core Banking, ERP, Database, Domain Controllers',
            'Phát hiện kỹ thuật APT Fileless, Zero-day lẩn trốn',
            'Điều tra chuỗi di chuyển ngang (Lateral Movement Mapping)',
            'Tái hiện sơ đồ xâm nhập chi tiết từng mốc thời gian',
            'Cam kết SLA xử lý và khoanh vùng 24/7',
          ],
        },
      ];
    } else if (serviceModel === 'continuous') {
      return [
        {
          id: 'c-standard',
          name: 'Managed Hunting Standard',
          subtitle: 'GIÁM SÁT SĂN LÙNG CHỦ ĐỘNG',
          price: scale === 'under50' ? '20.000.000' : scale === 'mid' ? '28.000.000' : scale === 'large' ? '45.000.000' : 'Liên hệ',
          unit: 'tháng',
          recommended: false,
          badge: null,
          features: [
            `Quy mô: Đến ${scale === 'under50' ? '50' : scale === 'mid' ? '150' : scale === 'large' ? '500' : '> 500'} Endpoints`,
            'Thu thập telemetry liên tục từ hệ thống phòng thủ',
            'Chuyên gia rà soát giả định hàng tuần (Weekly Hunting)',
            'Cập nhật dữ liệu đe dọa (Threat Feeds) tự động',
            'Báo cáo tổng kết mối nguy định kỳ hàng tháng',
          ],
        },
        {
          id: 'c-pro',
          name: 'Continuous Managed Hunting Pro',
          subtitle: 'CHUYÊN GIA TRỰC CHIẾN 24/7',
          price: scale === 'under50' ? '28.000.000' : scale === 'mid' ? '35.000.000' : scale === 'large' ? '65.000.000' : 'Liên hệ',
          unit: 'tháng',
          recommended: true,
          badge: 'KHUYÊN DÙNG',
          features: [
            `Quy mô: Đến ${scale === 'under50' ? '50' : scale === 'mid' ? '150' : scale === 'large' ? '500' : '> 500'} Endpoints`,
            'Đội ngũ Hunter chuyên trách trực chiến 24/7/365',
            'Phát hiện và cô lập máy tính nhiễm độc trong 15 phút',
            'Liên tục tinh chỉnh luật EDR/SIEM, triệt tiêu alert fatigue',
            'Tích hợp sâu Viettel Threat Intelligence độc quyền',
            'Cam kết chất lượng dịch vụ SLA 99.99%',
          ],
        },
        {
          id: 'c-enterprise',
          name: 'Dedicated Enterprise SOC-Hunting',
          subtitle: 'DÀNH RIÊNG TẬP ĐOÀN',
          price: scale === 'under50' ? '45.000.000' : scale === 'mid' ? '60.000.000' : scale === 'large' ? '95.000.000' : 'May đo riêng',
          unit: 'tháng',
          recommended: false,
          badge: null,
          features: [
            'Nhân sự chuyên gia Hunter danh định riêng cho doanh nghiệp',
            'Hạ tầng phân tích dữ liệu riêng biệt trên Viettel Cloud',
            'Tùy biến Playbook và kịch bản săn lùng đặc thù ngành',
            'Hỗ trợ Incident Response onsite khẩn cấp khi có yêu cầu',
            'Cố vấn chiến lược an ninh mạng định kỳ cho Ban Điều Hành',
          ],
        },
      ];
    } else {
      return [
        {
          id: 'i-urgent',
          name: 'Khẩn Cấp Khi Nghi Ngờ Bị Xâm Nhập',
          subtitle: 'TRIỂN KHAI TRONG 1 GIỜ',
          price: scale === 'under50' ? '40.000.000' : scale === 'mid' ? '60.000.000' : scale === 'large' ? '90.000.000' : 'Khảo sát gấp',
          unit: 'chiến dịch',
          recommended: true,
          badge: 'ỨNG PHÓ KHẨN CẤP',
          features: [
            'Huy động đội ngũ chuyên gia phản ứng nhanh trong 60 phút',
            'Khoanh vùng, cô lập thiết bị và ngăn chặn rò rỉ dữ liệu',
            'Tìm kiếm các cửa sau (Backdoors), tài khoản ngầm, C2 channel',
            'Bảo toàn chứng cứ số phục vụ điều tra pháp lý',
            'Bàn giao báo cáo khẩn cấp trong 24 - 48 giờ',
          ],
        },
        {
          id: 'i-post',
          name: 'Thanh Lọc Sau Sự Cố (Post-Breach Clean)',
          subtitle: 'ĐẢM BẢO SẠCH 100%',
          price: scale === 'under50' ? '30.000.000' : scale === 'mid' ? '45.000.000' : scale === 'large' ? '70.000.000' : 'Liên hệ',
          unit: 'đợt',
          recommended: false,
          badge: null,
          features: [
            'Rà soát toàn diện sau khi hệ thống vừa khôi phục',
            'Đảm bảo kẻ tấn công không còn duy trì persistence lẩn trốn',
            'Kiểm tra tính toàn vẹn của mã nguồn, database và active directory',
            'Củng cố lại toàn bộ lỗ hổng đã bị khai thác ban đầu',
            'Chứng nhận hệ thống sạch phục vụ tái khởi động kinh doanh',
          ],
        },
        {
          id: 'i-upgrade',
          name: 'Kiểm Tra Trước Mốc Di Chuyển Lớn (Pre-Migration)',
          subtitle: 'AN TOÀN KHI GO-LIVE',
          price: scale === 'under50' ? '25.000.000' : scale === 'mid' ? '38.000.000' : scale === 'large' ? '60.000.000' : 'Liên hệ',
          unit: 'đợt',
          recommended: false,
          badge: null,
          features: [
            'Rà soát hệ thống trước khi Go-live hoặc chuyển dịch lên Cloud',
            'Phát hiện các mối nguy tiềm ẩn từ mã nguồn bên thứ ba / vendor',
            'Kiểm thử giả lập hành vi xâm nhập thực tế',
            'Bàn giao checklist an toàn trước khi nghiệm thu',
            'Tư vấn tối ưu kiến trúc phòng thủ đa tầng',
          ],
        },
      ];
    }
  };

  const packages = getPackages();

  return (
    <section 
      id="pricing" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.pricingTitle}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t.desc}
          </p>
        </div>

        {/* Filter / Control Bar matching CloudServerEstimator */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-10 space-y-6">
          
          {/* Service Model Selector */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
            <div className="flex items-center gap-2 text-xs font-extrabold text-slate-700 tracking-wider">
              <Sliders className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />
              <span>{t.modelLabel}</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <VIDCNativeButton
                type="button"
                onClick={() => setServiceModel('continuous')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  serviceModel === 'continuous'
                    ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-md shadow-red-500/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t.continuous}
              </VIDCNativeButton>

              <VIDCNativeButton
                type="button"
                onClick={() => setServiceModel('periodic')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  serviceModel === 'periodic'
                    ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-md shadow-red-500/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t.periodic}
              </VIDCNativeButton>

              <VIDCNativeButton
                type="button"
                onClick={() => setServiceModel('incident')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  serviceModel === 'incident'
                    ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-md shadow-red-500/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t.incident}
              </VIDCNativeButton>
            </div>
          </div>

          {/* Infrastructure Scale Selector */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-extrabold text-slate-700 tracking-wider">
              <Tag className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />
              <span>{t.scaleLabel}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'under50', label: t.under50 },
                { id: 'mid', label: t.mid },
                { id: 'large', label: t.large },
                { id: 'enterprise', label: t.enterprise },
              ].map((item) => (
                <VIDCNativeButton
                  key={item.id}
                  type="button"
                  onClick={() => setScale(item.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all text-center ${
                    scale === item.id
                      ? 'border-[var(--vidc-color-brand-red)] bg-red-50 text-[var(--vidc-color-brand-red)]'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {item.label}
                </VIDCNativeButton>
              ))}
            </div>
          </div>

        </div>

        {/* 3 Pricing Cards Grid matching CloudServerEstimator */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-10">
          {packages.map((pkg) => {
            return (
              <div
                key={pkg.id}
                className={`relative p-6 sm:p-7 rounded-2xl bg-white flex flex-col justify-between transition-all duration-300 ${
                  pkg.recommended
                    ? 'border-2 border-[var(--vidc-color-brand-red)] ring-4 ring-[var(--vidc-color-brand-red)]/10 shadow-xl lg:-translate-y-1'
                    : 'border border-slate-200/90 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Badge if recommended */}
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--vidc-color-brand-red)] text-white text-[10px] sm:text-[11px] font-black uppercase px-3.5 py-1 rounded-full shadow-md tracking-wider">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      {pkg.subtitle}
                    </span>
                    <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)] mt-1">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Price Tag */}
                  <div className="py-4 border-y border-slate-100 my-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-[var(--vidc-legacy-hex-222225)] tracking-tight">
                        {pkg.price}
                      </span>
                      {pkg.price !== 'Liên hệ' && pkg.price !== 'Khảo sát gấp' && pkg.price !== 'May đo riêng' && (
                        <span className="text-xs font-semibold text-slate-500">
                          VNĐ / {pkg.unit}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features bullet list */}
                  <div className="space-y-3 mb-6">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {t.detailDesc}
                    </div>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Buttons */}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                  <VIDCNativeButton
                    type="button"
                    onClick={() => onOpenConsult(`Đăng ký gói: ${pkg.name} (Quy mô: ${scale})`)}
                    className={`w-full py-3 rounded-xl font-extrabold text-sm transition-all text-center flex items-center justify-center gap-2 ${
                      pkg.recommended
                        ? 'bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-cc002b)] text-white shadow-lg shadow-red-500/20'
                        : 'bg-slate-900 hover:bg-black text-white'
                    }`}
                  >
                    <span>{t.registerNow}</span>
                    <ArrowRight className="w-4 h-4" />
                  </VIDCNativeButton>

                  <VIDCNativeButton
                    type="button"
                    onClick={() => onOpenConsult(`Nhận tư vấn chi tiết gói: ${pkg.name}`)}
                    className="w-full py-2.5 rounded-xl border border-slate-200 hover:border-slate-400 font-bold text-xs text-slate-700 hover:bg-slate-50 transition-all text-center"
                  >
                    {t.consultBtn}
                  </VIDCNativeButton>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Tailored Config Banner matching CloudServerEstimator */}
        <div className="p-8 rounded-2xl bg-[var(--vidc-legacy-hex-18181a)] text-white border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl text-center lg:text-left">
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              {t.customTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.customDesc}
            </p>
          </div>

          <VIDCNativeButton
            type="button"
            onClick={() => onOpenConsult('Tư vấn thiết kế gói săn lùng mối nguy may đo riêng cho tập đoàn / Hybrid-Cloud')}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-white text-[color:var(--vidc-color-brand-red)] hover:bg-slate-100 font-black text-sm transition-all shadow-lg shadow-black/30 flex items-center gap-2"
          >
            <span>{t.customBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </VIDCNativeButton>
        </div>

        {/* Footnote */}
        <div className="mt-4 text-center text-xs text-slate-500">
          {t.vatFootnote}
        </div>

      </div>
    </section>
  );
};
