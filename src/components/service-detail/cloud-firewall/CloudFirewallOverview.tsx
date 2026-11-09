import React from 'react';
import { Cpu, ShieldCheck, Zap, RefreshCw, Network, Lock, Server, CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface CloudFirewallOverviewProps {
  currentMarket?: SEAMarket;
}

export const CloudFirewallOverview: React.FC<CloudFirewallOverviewProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isLaos
      ? 'Next-Generation Machine Learning Cybersecurity Shield on Cloud'
      : 'Lá chắn an ninh mạng thế hệ mới Machine Learning trên đám mây',
    desc1: isLaos
      ? 'Viettel Cloud Firewall (vCF) is a next-generation virtualized firewall integrated with Machine Learning, built on Palo Alto Networks technology to deliver comprehensive cybersecurity protection for enterprise cloud infrastructure. The solution enables administrators to enforce granular security policies, safeguarding multi-directional traffic (North-South & East-West).'
      : 'Viettel Cloud Firewall (vCF) là dịch vụ tường lửa ảo hóa thế hệ mới tích hợp công nghệ Machine Learning, được xây dựng trên nền tảng của Palo Alto Networks nhằm cung cấp lá chắn an toàn thông tin toàn diện cho hạ tầng đám mây doanh nghiệp. Giải pháp cho phép quản trị viên thiết lập và thực thi các chính sách bảo mật chi tiết, bảo vệ toàn diện lưu lượng mạng đa hướng (Bắc – Nam và Đông – Tây).',
    desc2: isLaos
      ? 'The system supports deep-packet inspection, precisely identifying thousands of applications and user identities regardless of ports or protocols. Additionally, with agile virtual networking (SD-WAN, IPsec VPN, SSL VPN), vCF empowers businesses to establish encrypted links connecting headquarters to cloud environments without expensive hardware investments.'
      : 'Hệ thống hỗ trợ kiểm tra sâu gói tin (Deep-packet inspection), nhận diện chính xác hàng nghìn ứng dụng và danh tính người dùng mà không phụ thuộc vào cổng (Port) hay giao thức. Bên cạnh đó, với khả năng kết nối mạng ảo hóa linh hoạt (SD-WAN, IPsec VPN, SSL VPN), vCF giúp doanh nghiệp nhanh chóng thiết lập đường truyền bảo mật kết nối trụ sở với đám mây mà không cần đầu tư thiết bị phần cứng tốn kém.',
    highlight1Title: isLaos ? 'ML-Powered Next-Gen Firewall' : 'Tường lửa ML-Powered thông minh',
    highlight1Desc: isLaos
      ? 'Proactively identifies zero-day malware and undisclosed vulnerabilities with embedded AI heuristics.'
      : 'Chủ động nhận diện mã độc Zero-day và các lỗ hổng bảo mật chưa xác định bằng trí tuệ nhân tạo.',
    highlight2Title: isLaos ? 'App-ID & User-ID Granular Control' : 'Kiểm soát sâu App-ID & User-ID',
    highlight2Desc: isLaos
      ? 'Classifies and controls traffic flows by authentic verified users and specific application signatures regardless of port.'
      : 'Phân loại và kiểm soát luồng dữ liệu theo người dùng thực tế và danh mục ứng dụng không phụ thuộc port.',
    highlight3Title: isLaos ? 'High Availability (HA) & Elastic Scaling' : 'Dự phòng HA & Mở rộng tức thì',
    highlight3Desc: isLaos
      ? 'Active-Passive clustering eliminates single points of failure with effortless resource scaling on demand.'
      : 'Mô hình Active-Passive loại bỏ điểm nghẽn đơn lẻ kết hợp nâng cấp tài nguyên vCPU/RAM tức thời.',
  };

  return (
    <section 
      id="overview" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Eyebrow Badge & H2 Headline */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* 2-Column Grid: Left Solution Text + Right Architecture Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Cột Trái (Mô tả giải pháp & 3 Highlights) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              {t.desc1}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.desc2}
            </p>

            {/* 3 Key Highlights Matching CloudServer Standard */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{t.highlight1Title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {t.highlight1Desc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{t.highlight2Title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {t.highlight2Desc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{t.highlight3Title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {t.highlight3Desc}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Cột Phải (Architecture Diagram Visual) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[var(--vidc-legacy-hex-111827)] text-white p-6 sm:p-8 shadow-2xl border border-slate-800 relative overflow-hidden">
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-wider text-slate-300 uppercase">
                    Viettel Cloud Firewall Architecture
                  </span>
                </div>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-400 font-mono font-semibold">
                  Palo Alto / Fortinet
                </span>
              </div>

              {/* Interactive Architecture Flow Diagram */}
              <div className="space-y-4 text-xs font-mono">
                
                {/* Stage 1: On-Premises & Remote */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                      <Network className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs">On-Premises HQ & Remote Users</div>
                      <div className="text-[10px] text-slate-400">Trụ sở, Chi nhánh, Hybrid Workers</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 bg-emerald-950/60 rounded">
                    IPsec / SSL VPN
                  </span>
                </div>

                {/* Arrow Connector */}
                <div className="flex justify-center -my-2 text-slate-500">
                  ↓ <span className="text-[10px] text-slate-400 ml-2 font-mono">Encrypted Tunnel (BGP / OSPF)</span>
                </div>

                {/* Stage 2: Edge Gateway & Viettel Cloud Firewall Cluster */}
                <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/40 relative">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-red-500/20 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                        <Lock className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-xs">Viettel Cloud Firewall Cluster</div>
                        <div className="text-[10px] text-red-300">Active-Passive HA / Deep Packet Inspection L7</div>
                      </div>
                    </div>
                    <span className="text-[10px] bg-red-500 text-white font-bold px-2 py-0.5 rounded">
                      ML-Powered
                    </span>
                  </div>

                  {/* Security Modules */}
                  <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-300 pt-1">
                    <div className="flex items-center gap-1.5 bg-slate-900/80 px-2 py-1.5 rounded">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>App-ID & User-ID</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-900/80 px-2 py-1.5 rounded">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Threat Prevention / IPS</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-900/80 px-2 py-1.5 rounded">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>WildFire Cloud Sandbox</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-900/80 px-2 py-1.5 rounded">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>40 Security Zones</span>
                    </div>
                  </div>
                </div>

                {/* Arrow Connector */}
                <div className="flex justify-center -my-2 text-slate-500">
                  ↓ <span className="text-[10px] text-slate-400 ml-2 font-mono">Micro-segmentation (East-West & North-South)</span>
                </div>

                {/* Stage 3: Protected Workloads */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <Server className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-xs">Viettel Cloud Workloads & VPC</div>
                        <div className="text-[10px] text-slate-400">DMZ • Web/App Tier • Database Tier</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-300 bg-slate-800 px-2 py-0.5 rounded">
                      SLA 99.99%
                    </span>
                  </div>
                </div>

              </div>

              {/* Footer Note */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>Tuân thủ: ISO 27001, PCI-DSS</span>
                <span>Data Center: TIA-942 Rated 3</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
