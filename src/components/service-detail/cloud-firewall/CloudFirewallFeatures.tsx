import React from 'react';
import { Layers, ShieldAlert, CloudLightning, KeyRound, Cpu, HardDrive, Network, Lock, Award, CheckCircle } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface CloudFirewallFeaturesProps {
  currentMarket?: SEAMarket;
}

export const CloudFirewallFeatures: React.FC<CloudFirewallFeaturesProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'CAPABILITIES & SPECS' : 'TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET',
    headline: isLaos
      ? 'Technology Capabilities & Detailed Technical Specifications'
      : 'Năng Lực Công Nghệ & Bảng Thông Số Kỹ Thuật Chi Tiết',
    desc: isLaos
      ? 'Advanced enterprise-grade cyber defense features paired with transparent hardware capacity thresholds.'
      : 'Năng lực phòng thủ an ninh mạng chuyên sâu doanh nghiệp kết hợp giới hạn thông số kỹ thuật minh bạch.',
    specTableTitle: isLaos ? 'Detailed Technical Spec Table (VCF1 - VCF3)' : 'Bảng Thông Số Kỹ Thuật Chi Tiết (VCF1 - VCF3)',
    footnote: isLaos
      ? '*Performance throughput is based on manufacturer datasheet benchmarks and may vary depending on active policy profiles and environment.'
      : '*Thông số hiệu năng dựa trên Datasheet của hãng sản xuất, thông số thực tế có thể thay đổi tùy thuộc môi trường triển khai.',
  };

  const coreFeatures = [
    {
      title: isLaos ? 'Next-Gen Layer 7 Deep Control' : 'Tường Lửa Thế Hệ Mới Kiểm Soát Sâu L7',
      desc: isLaos
        ? 'Precise application recognition (App-ID) irrespective of port or protocol; paired with User-ID enforcement and deep packet filtering.'
        : 'Khả năng nhận diện ứng dụng (App-ID) chính xác không phụ thuộc vào cổng dịch vụ; kết hợp kiểm soát người dùng (User-ID) và chính sách bảo mật chi tiết.',
      icon: Layers,
    },
    {
      title: isLaos ? 'Advanced Threat Prevention (IPS & Anti-Malware)' : 'Phòng Chống Mối Đe Dọa Nâng Cao (Threat Prevention)',
      desc: isLaos
        ? 'Inline vulnerability exploit protection, continuous antivirus heuristics, and anti-spyware inspection to block inline attacks.'
        : 'Tích hợp công nghệ bảo vệ chống khai thác lỗ hổng (Vulnerability Protection), diệt virus, ngăn chặn phần mềm gián điệp (Anti-Spyware) ngay trên đường truyền.',
      icon: ShieldAlert,
    },
    {
      title: isLaos ? 'Automated Cloud Sandbox (WildFire)' : 'Phân Tích Sandbox Đám Mây Tự Động (WildFire)',
      desc: isLaos
        ? 'Automatically submits suspicious files to the global WildFire cloud sandbox to execute, analyze zero-day malware, and generate signatures in minutes.'
        : 'Tự động chuyển các tập tin nghi ngờ lên nền tảng đám mây WildFire để cô lập, phân tích hành vi mã độc Zero-day và tạo bản vá cập nhật trong vài phút.',
      icon: CloudLightning,
    },
    {
      title: isLaos ? 'Secure & Flexible VPN Connectivity' : 'Kết Nối VPN An Toàn & Linh Hoạt',
      desc: isLaos
        ? 'Supports thousands of high-throughput IPSec VPN site-to-site tunnels and clientless SSL VPN for encrypted hybrid and remote workforce access.'
        : 'Cung cấp hàng nghìn đường hầm IPSec VPN Site-to-Site tốc độ cao cùng kênh truyền SSL VPN/Clientless bảo vệ an toàn cho nhân sự truy cập từ xa.',
      icon: KeyRound,
    },
  ];

  const specsRows = [
    { label: 'Số vCPU hỗ trợ', vcf1: '2 vCPU', vcf2: '3 vCPU', vcf3: '4 vCPU' },
    { label: 'Bộ nhớ (RAM) tối thiểu', vcf1: '7 GB', vcf2: '7 GB', vcf3: '9 GB' },
    { label: 'Dung lượng ổ cứng tối thiểu', vcf1: '60 GB', vcf2: '60 GB', vcf3: '60 GB' },
    { label: 'Chính sách bảo mật tối đa (Policies)', vcf1: '250', vcf2: '1.500', vcf3: '10.000' },
    { label: 'Đường hầm IPSec VPN', vcf1: '1.000', vcf2: '1.000', vcf3: '2.000' },
    { label: 'Đường hầm SSL VPN', vcf1: '500', vcf2: '500', vcf3: '2.000' },
    { label: 'Số lượng Clientless VPN', vcf1: '100', vcf2: '100', vcf3: '400' },
    { label: 'Số lượng Route tối đa (IPv4 forwarding)', vcf1: '5.000', vcf2: '5.000', vcf3: '10.000' },
    { label: 'Số lượng vùng bảo mật (Security Zones)', vcf1: '40', vcf2: '40', vcf3: '40' },
    { label: 'Thông lượng tường lửa (App-ID Throughput)*', vcf1: '3 Gbps', vcf2: '4,5 Gbps', vcf3: '6 Gbps' },
    { label: 'Thông lượng Threat Prevention*', vcf1: '1,5 Gbps', vcf2: '2,25 Gbps', vcf3: '3 Gbps' },
    { label: 'Thông lượng IPSec VPN*', vcf1: '1 Gbps', vcf2: '1 Gbps', vcf3: '1,8 Gbps' },
    { label: 'Số phiên mới / giây (New Sessions/s)*', vcf1: '15.000', vcf2: '15.000', vcf3: '30.000' },
    { label: 'Số phiên tối đa (Max Concurrent Sessions)*', vcf1: '250.000', vcf2: '250.000', vcf3: '819.200' },
  ];

  return (
    <section 
      id="features" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight mb-2">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Grid 4 Card Core Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {coreFeatures.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-red-200 hover:bg-white hover:shadow-md transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Technical Spec Sheet Table */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 sm:p-6 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
              <h3 className="text-sm sm:text-base font-extrabold">
                {t.specTableTitle}
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">Palo Alto Networks Series</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-200/80 text-slate-800 font-bold border-b border-slate-300">
                <tr>
                  <th className="py-3.5 px-6 min-w-[280px]">Hạng mục kỹ thuật</th>
                  <th className="py-3.5 px-4 text-center min-w-[140px]">Gói VCF1</th>
                  <th className="py-3.5 px-4 text-center min-w-[140px]">Gói VCF2</th>
                  <th className="py-3.5 px-4 text-center min-w-[140px] text-[var(--vidc-color-brand-red)]">Gói VCF3</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white font-mono">
                {specsRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-6 font-sans text-slate-800 font-medium">{row.label}</td>
                    <td className="py-3 px-4 text-center text-slate-700">{row.vcf1}</td>
                    <td className="py-3 px-4 text-center text-slate-700">{row.vcf2}</td>
                    <td className="py-3 px-4 text-center font-bold text-slate-900">{row.vcf3}</td>
                  </tr>
                ))}

                {/* Common Rows spanning 3 columns */}
                <tr className="bg-slate-50 font-sans">
                  <td className="py-3.5 px-6 font-semibold text-slate-900">Hạ tầng Trung tâm dữ liệu</td>
                  <td colSpan={3} className="py-3.5 px-4 text-center font-bold text-slate-800">
                    Đạt chuẩn quốc tế ANSI/TIA-942 Rated 3 Constructed Level
                  </td>
                </tr>

                <tr className="bg-slate-50 font-sans">
                  <td className="py-3.5 px-6 font-semibold text-slate-900">Tiêu chuẩn An toàn thông tin</td>
                  <td colSpan={3} className="py-3.5 px-4 text-center font-bold text-slate-800">
                    ISO 27001:2013, ISO 27017:2015, PCI-DSS, ISO 9001:2015
                  </td>
                </tr>

                <tr className="bg-slate-50 font-sans">
                  <td className="py-3.5 px-6 font-semibold text-slate-900">Cam kết chất lượng dịch vụ (SLA)</td>
                  <td colSpan={3} className="py-3.5 px-4 text-center font-extrabold text-[var(--vidc-color-brand-red)]">
                    99.99% độ sẵn sàng hoạt động
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-100/80 border-t border-slate-200 text-slate-500 text-[11px] leading-relaxed italic">
            {t.footnote}
          </div>
        </div>

      </div>
    </section>
  );
};
