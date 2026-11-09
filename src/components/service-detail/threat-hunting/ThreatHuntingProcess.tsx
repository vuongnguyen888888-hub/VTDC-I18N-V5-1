import React from 'react';
import { Lightbulb, Search, ShieldCheck, RefreshCw, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface ThreatHuntingProcessProps {
  currentMarket?: SEAMarket;
}

export const ThreatHuntingProcess: React.FC<ThreatHuntingProcessProps> = () => {
  const steps = [
    {
      step: '01',
      icon: Lightbulb,
      title: 'Xây Dựng Giả Định & Thu Thập Telemetry',
      desc: 'Dựa trên tri thức tình báo APT mới nhất, kỹ thuật MITRE ATT&CK và đặc thù hạ tầng của doanh nghiệp để xây dựng giả định xâm nhập tiềm ẩn.',
      details: [
        'Thu thập telemetry từ Endpoint, Network & Identity',
        'Xây dựng các kịch bản đe dọa có tính định hướng cao',
        'Đảm bảo quá trình thu thập không gây tải hệ thống',
      ],
    },
    {
      step: '02',
      icon: Search,
      title: 'Truy Quét Hành Vi Sâu & Phân Tích',
      desc: 'Áp dụng công nghệ tìm kiếm tiên tiến kết hợp kinh nghiệm chuyên gia để săn tìm các hành vi bất thường, kỹ thuật lẩn trốn và mã độc tàng hình.',
      details: [
        'Truy vết tiến trình, registry, bộ nhớ và lệnh PowerShell',
        'Rà soát kỹ thuật Living off the Land (LotL)',
        'Liên kết các sự kiện rời rạc thành chuỗi tấn công (Kill Chain)',
      ],
    },
    {
      step: '03',
      icon: ShieldCheck,
      title: 'Xác Minh & Khoanh Vùng Nguy Cơ',
      desc: 'Phân tích bản chất mối nguy, loại bỏ dương tính giả, xác thực mức độ rủi ro và kích hoạt quy trình ứng cứu khoanh vùng tức thời.',
      details: [
        'Xác định chính xác tài sản số và dữ liệu bị xâm nhập',
        'Phối hợp cô lập máy trạm/máy chủ bị nhiễm tức thì',
        'Bảo toàn chứng cứ điện tử phục vụ điều tra chuyên sâu',
      ],
    },
    {
      step: '04',
      icon: RefreshCw,
      title: 'Báo Cáo Root Cause & Củng Cố Phòng Thủ',
      desc: 'Bàn giao báo cáo chi tiết nguyên nhân gốc rễ, đề xuất biện pháp khắc phục triệt để và tinh chỉnh hệ thống quy tắc phát hiện nội bộ.',
      details: [
        'Báo cáo kỹ thuật chi tiết & Báo cáo tóm tắt cho Lãnh đạo',
        'Bàn giao bộ chỉ thị IoC/IoA đặc thù cho hệ thống',
        'Nâng cấp Playbook và tối ưu hóa luật phát hiện SIEM/EDR',
      ],
    },
  ];

  return (
    <section 
      id="process" 
      className="py-16 md:py-20 bg-slate-50 text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            QUY TRÌNH CHUẨN HÓA
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            Quy Trình Săn Lùng Mối Nguy 4 Bước Chuyên Nghiệp
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Phương pháp tiếp cận chủ động (Hypothesis-Driven Hunting) đảm bảo không bỏ sót bất kỳ nguy cơ tiềm ẩn nào trong không gian số của bạn.
          </p>
        </div>

        {/* 4 Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Step badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-300 font-mono">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-[color:var(--vidc-color-brand-red)] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[var(--vidc-legacy-hex-222225)] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {item.details.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <span className="text-[color:var(--vidc-color-brand-red)] font-bold">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
