import React from 'react';
import { ShieldCheck, Award, Lock, FileCheck, CheckCircle2 } from 'lucide-react';

export const CloudServerSecurityCompliance: React.FC = () => {
  const certs = [
    {
      code: 'ISO 27001:2013',
      title: 'Hệ Thống Quản Lý An Toàn Thông Tin',
      desc: 'Đảm bảo mọi quy trình vận hành và khai thác hạ tầng tuân thủ chuẩn an toàn thông tin quốc tế khắt khe nhất.',
    },
    {
      code: 'ISO 27017:2015',
      title: 'An Toàn Thông Tin Cho Điện Toán Đám Mây',
      desc: 'Chứng nhận chuyên biệt về kiểm soát an toàn thông tin cho nhà cung cấp dịch vụ Cloud.',
    },
    {
      code: 'PCI-DSS v4.0',
      title: 'Bảo Mật Dữ Liệu Thẻ Thanh Toán',
      desc: 'Chứng nhận cấp độ cao nhất cho hạ tầng lưu trữ và xử lý giao dịch tài chính ngân hàng.',
    },
    {
      code: 'ANSI/TIA-942 Rated 3',
      title: 'Tiêu Chuẩn Trung Tâm Dữ Liệu Quốc Tế',
      desc: 'Hạ tầng Data Center dự phòng N+1 với thời gian hoạt động Uptime đạt 99.982% toàn quốc.',
    },
    {
      code: 'NĐ 13/2023/NĐ-CP',
      title: 'Tuân Thủ Bảo Vệ Dữ Liệu Cá Nhân',
      desc: 'Hạ tầng lưu trữ dữ liệu tại Việt Nam, đáp ứng đầy đủ yêu cầu pháp lý về bảo vệ dữ liệu cá nhân.',
    },
  ];

  return (
    <section 
      id="security-compliance" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-color-text-primary)] border-b border-[var(--vidc-border-default)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            SECTION 7: AN TOÀN &amp; TUÂN THỦ PHÁP LÝ
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--vidc-text-primary)] tracking-tight mb-3">
            Chứng Nhận Quốc Tế &amp; Tuân Thủ Pháp Lý Tối Đa
          </h2>
          <p className="text-base text-[var(--vidc-legacy-hex-475467)] leading-relaxed">
            Viettel IDC là đơn vị duy nhất tại Việt Nam sở hữu đầy đủ bộ chứng nhận an toàn thông tin quốc tế khắt khe nhất.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-[var(--vidc-legacy-hex-f8fafc)] border border-[var(--vidc-legacy-hex-e2e8f0)] hover:border-[var(--vidc-color-brand-red)]/40 transition-all space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold font-mono bg-[var(--vidc-legacy-hex-e2e8f0)] text-[var(--vidc-legacy-hex-0f172a)]">
                    {cert.code}
                  </span>
                  <h3 className="text-sm font-bold text-[var(--vidc-text-primary)] mt-1">{cert.title}</h3>
                </div>
              </div>
              <p className="text-xs text-[var(--vidc-legacy-hex-475467)] leading-relaxed">
                {cert.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
