import React, { useState } from 'react';
import { 
  Server, 
  Zap, 
  ShieldCheck, 
  Network, 
  CheckCircle2, 
  Sliders, 
  Award,
  Layers,
  Thermometer,
  Table as TableIcon
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface ColocationCapabilitiesProps {
  currentMarket?: SEAMarket;
}

export const ColocationCapabilities: React.FC<ColocationCapabilitiesProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'KEY FEATURES' : 'TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET',
    headline: isLaos
      ? 'Infrastructure Capabilities & Technical Standards'
      : 'Năng Lực Hạ Tầng & Tiêu Chuẩn Kỹ Thuật',
    specTableTitle: isLaos
      ? 'Standard Technical Specification Sheet'
      : 'Bảng Thông Số Kỹ Thuật Tiêu Chuẩn',
  };

  const coreFeatures = [
    {
      icon: Server,
      title: 'Hạ Tầng Chuẩn Quốc Tế',
      desc: '9 Trung tâm dữ liệu đạt chuẩn TIA-942 Rated 3 Constructed Facilities, đảm bảo điều kiện vận hành lý tưởng cho thiết bị CNTT.',
    },
    {
      icon: Thermometer,
      title: 'Nhiệt Độ & Nguồn Điện Ổn Định',
      desc: 'Hệ thống điều hòa chính xác thiết kế riêng cho Data Center, nguồn điện dự phòng đa lớp đảm bảo độ sẵn sàng 99.98%.',
    },
    {
      icon: ShieldCheck,
      title: 'Bảo Mật Đa Tầng Chặt Chẽ',
      desc: 'Kiểm soát ra vào nghiêm ngặt bằng sinh trắc học, camera giám sát toàn diện và cung cấp kênh theo dõi từ xa qua IP Camera.',
    },
    {
      icon: Network,
      title: 'Kết Nối Trung Lập (Carrier-Neutral)',
      desc: 'Hạ tầng mở đón nhận kết nối từ tất cả các nhà mạng (ISP) lớn như VNPT, FPT, CMC để làm đường truyền chính hoặc backup.',
    },
  ];

  const techSpecs = [
    {
      category: 'Tiêu chuẩn Data Center',
      detail: 'Chuẩn TIA-942 Rated 3 Constructed Facilities (Hệ thống 9 Data Centers)',
    },
    {
      category: 'Quy chuẩn Rack',
      detail: 'Tủ Rack 19 inch (Rộng 482.6 mm), chiều cao tiêu chuẩn 42U',
    },
    {
      category: 'Độ sẵn sàng (SLA)',
      detail: '99.98% đối với hệ thống nguồn điện và điều hòa',
    },
    {
      category: 'Hệ thống điều hòa',
      detail: 'Điều hòa công nghiệp chính xác chuyên dụng cho Data Center',
    },
    {
      category: 'An ninh & Giám sát',
      detail: 'Bảo mật sinh trắc học, kiểm soát cửa từ, Camera giám sát, IP Camera theo dõi từ xa',
    },
    {
      category: 'Đường truyền & Kết nối',
      detail: 'Băng thông lớn; hỗ trợ đấu nối đa ISP (Viettel, VNPT, FPT, CMC...)',
    },
    {
      category: 'Dịch vụ hỗ trợ định kỳ',
      detail: 'Kiểm tra trạng thái đèn thiết bị 2 lần/ngày theo yêu cầu',
    },
  ];

  return (
    <section 
      id="features" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
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

        {/* Grid 4 Card Tính Năng Cốt Lõi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {coreFeatures.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center shrink-0">
                  <IconComp className="w-5 h-5" />
                </div>

                <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bảng Thông Số Kỹ Thuật Tiêu Chuẩn */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
              <TableIcon className="w-4 h-4" />
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight">
              {t.specTableTitle}
            </h3>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[var(--vidc-legacy-hex-1e232a)] text-white font-extrabold uppercase text-[11px] sm:text-xs tracking-wider">
                <tr>
                  <th className="py-3.5 px-5 w-1/3 sm:w-2/5">Hạng Mục Kỹ Thuật</th>
                  <th className="py-3.5 px-5">Chi Tiết Tiêu Chuẩn Viettel Colocation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {techSpecs.map((spec, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-5 font-bold text-slate-900 bg-slate-50/50">
                      {spec.category}
                    </td>
                    <td className="py-3.5 px-5 text-slate-700 font-normal leading-relaxed">
                      {spec.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
