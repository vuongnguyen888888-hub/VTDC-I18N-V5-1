import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Server, 
  Clock, 
  TrendingDown, 
  Layers, 
  ShieldCheck, 
  Network,
  Play,
  ArrowRight,
  RefreshCw,
  Zap,
  Cloud
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudDROverviewProps {
  currentMarket?: SEAMarket;
}

export const CloudDROverview: React.FC<CloudDROverviewProps> = ({ currentMarket }) => {
  const [activeModelTab, setActiveModelTab] = useState<'onprem-to-cloud' | 'cloud-to-cloud'>('onprem-to-cloud');
  const [viewMode, setViewMode] = useState<'diagram' | 'video'>('diagram');
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isLaos 
      ? 'Comprehensive Cloud Disaster Recovery & Business Continuity'
      : 'Dự phòng & Khôi phục thảm họa toàn diện bảo vệ kinh doanh liên tục',
    desc1: isLaos
      ? 'Viettel Cloud DR (Disaster Recovery as a Service - DRaaS) enables enterprises to continuously replicate virtual machines and critical databases to Viettel IDC Cloud. The service guarantees instant recovery, RTO ~ 10 minutes, and multi-hypervisor support (VMware & Hyper-V).'
      : 'Viettel Cloud DR (Disaster Recovery as a Service - DRaaS) là giải pháp nhân bản một phần hoặc toàn bộ hệ thống máy chủ và cơ sở dữ liệu quan trọng của doanh nghiệp lên hạ tầng điện toán đám mây Viettel IDC. Dịch vụ đảm bảo khả năng khôi phục tức thì, chỉ số RTO ~ 10 phút và tương thích đa nền tảng ảo hóa (VMware & Hyper-V).',
    desc2: isLaos
      ? 'Operated on nationwide TIA-942 Rated 3 Data Centers with 99.99% SLA commitment, flexible Pay-as-you-failover billing, eliminating massive secondary DC infrastructure costs.'
      : 'Hệ thống vận hành trên hạ tầng Data Center chuẩn quốc tế TIA-942 Rated 3 với cam kết SLA 99.99%, cơ chế tính phí Pay-as-you-failover linh hoạt chỉ trả phí xử lý khi kích hoạt thảm họa, tiết kiệm tới 50% chi phí xây dựng trung tâm dữ liệu dự phòng riêng.',
    highlight1Title: isLaos ? 'Ultra-fast RTO ~ 10 Minutes' : 'Khôi phục dịch vụ siêu tốc với RTO ~ 10 phút',
    highlight1Desc: isLaos
      ? 'Automatic 1-Click Failover executes pre-scripted DR runbooks, restoring critical application services within 10 minutes.'
      : 'Cơ chế 1-Click Failover tự động kích hoạt kịch bản DR dự phòng, khôi phục toàn bộ dịch vụ ứng dụng cốt lõi chỉ trong vòng 10 phút.',
    highlight2Title: isLaos ? 'Multi-Hypervisor Support' : 'Hỗ trợ đa nền tảng ảo hóa VMware & Hyper-V',
    highlight2Desc: isLaos
      ? 'Full compatibility with VMware vSphere and Microsoft Hyper-V, replicating data across diverse storage architectures.'
      : 'Tương thích toàn diện với hai nền tảng ảo hóa hàng đầu VMware vSphere và Microsoft Hyper-V, đồng bộ dữ liệu đa tầng lưu trữ.',
    highlight3Title: isLaos ? 'Pay-as-you-failover Pricing' : 'Tối ưu chi phí vận hành (Pay-as-you-failover)',
    highlight3Desc: isLaos
      ? 'Only pay storage and DR license fees in standby state; compute power (vCPU, RAM) is billed only when failover actually runs.'
      : 'Chỉ tính phí lưu trữ và license DR trong thời gian dự phòng; tài nguyên tính toán (vCPU, RAM) chỉ phát sinh khi kích hoạt thảm họa thực tế.',
    tabDiagram: isLaos ? 'Architecture Diagram' : 'Sơ đồ luồng DR',
    tabVideo: isLaos ? 'Solution Video' : 'Video giải pháp',
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Cột Trái: Mô tả giải pháp & 3 Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              {t.desc1}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.desc2}
            </p>

            {/* 3 Key Highlights chuẩn Cloud Server */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 hover:border-[var(--vidc-color-brand-red)] hover:shadow-xs transition-all">
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

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 hover:border-[var(--vidc-color-brand-red)] hover:shadow-xs transition-all">
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

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 hover:border-[var(--vidc-color-brand-red)] hover:shadow-xs transition-all">
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

          {/* Cột Phải: Kiến trúc DR & Sơ đồ luồng tương tác */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-800 bg-[var(--vidc-legacy-hex-090d16)] text-white overflow-hidden shadow-2xl">
              
              {/* Header Card Switcher */}
              <div className="px-5 py-3.5 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-lg text-xs">
                  <VIDCNativeButton
                    type="button"
                    onClick={() => setActiveModelTab('onprem-to-cloud')}
                    className={`px-3 py-1 rounded-md font-bold transition-all cursor-pointer ${
                      activeModelTab === 'onprem-to-cloud'
                        ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    On-Premise to Cloud
                  </VIDCNativeButton>
                  <VIDCNativeButton
                    type="button"
                    onClick={() => setActiveModelTab('cloud-to-cloud')}
                    className={`px-3 py-1 rounded-md font-bold transition-all cursor-pointer ${
                      activeModelTab === 'cloud-to-cloud'
                        ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Cloud to Cloud
                  </VIDCNativeButton>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <VIDCNativeButton
                    type="button"
                    onClick={() => setViewMode(viewMode === 'diagram' ? 'video' : 'diagram')}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/15 text-white font-medium transition-colors cursor-pointer"
                  >
                    {viewMode === 'diagram' ? (
                      <>
                        <Play className="w-3.5 h-3.5 text-red-400" />
                        <span>{t.tabVideo}</span>
                      </>
                    ) : (
                      <>
                        <Network className="w-3.5 h-3.5 text-red-400" />
                        <span>{t.tabDiagram}</span>
                      </>
                    )}
                  </VIDCNativeButton>
                </div>
              </div>

              {/* Body Content */}
              {viewMode === 'video' ? (
                <div className="relative aspect-[16/9] bg-black flex items-center justify-center p-6 text-center">
                  <div className="space-y-3">
                    <div className="w-14 h-14 rounded-full bg-[var(--vidc-color-brand-red)]/20 border border-[var(--vidc-color-brand-red)]/40 flex items-center justify-center mx-auto text-white">
                      <Play className="w-6 h-6 fill-white translate-x-0.5" />
                    </div>
                    <div className="text-sm font-bold text-slate-200">
                      Video Giới Thiệu Giải Pháp Viettel Cloud DR (DRaaS)
                    </div>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto">
                      Quy trình thiết lập Replication Jobs, kiểm tra diễn tập DR và kích hoạt 1-Click Failover.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-6 space-y-6">
                  {/* Model Description Box */}
                  <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300">
                    {activeModelTab === 'onprem-to-cloud' ? (
                      <div>
                        <strong className="text-white block mb-1">Mô hình On-Premise to Cloud:</strong>
                        Nhân bản hệ thống từ hạ tầng máy chủ On-Premise của doanh nghiệp (VMware/Hyper-V) sang Cloud Viettel IDC qua đường truyền mã hóa hoặc kênh riêng MPLS.
                      </div>
                    ) : (
                      <div>
                        <strong className="text-white block mb-1">Mô hình Cloud to Cloud (Zone-to-Zone):</strong>
                        Chuyển đổi dự phòng giữa Zone A sang Zone B trong hạ tầng Cloud Viettel IDC (hỗ trợ Virtual Private Cloud - vVPC và Dedicated Private Cloud - vDPC).
                      </div>
                    )}
                  </div>

                  {/* Visual Topology Diagram */}
                  <div className="relative py-2">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 items-center">
                      
                      {/* Box 1: Primary Site */}
                      <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 text-center space-y-2">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto">
                          <Server className="w-5 h-5" />
                        </div>
                        <div className="text-xs font-bold text-white">
                          {activeModelTab === 'onprem-to-cloud' ? 'Primary DC (Doanh nghiệp)' : 'Primary Zone A (Viettel)'}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          VMware / Hyper-V / vVPC
                        </div>
                        <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-mono">
                          Active Workload
                        </span>
                      </div>

                      {/* Middle: Replication & WAN */}
                      <div className="flex flex-col items-center justify-center space-y-1 py-1">
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                          <RefreshCw className="w-3 h-3 text-red-400" />
                          <span>Replication</span>
                        </div>
                        <div className="w-full flex items-center justify-center">
                          <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-blue-500 via-red-500 to-emerald-500" />
                          <ArrowRight className="w-4 h-4 text-emerald-400 -ml-1" />
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono text-center">
                          MPLS / IPsec VPN
                        </div>
                      </div>

                      {/* Box 2: Viettel DR Site */}
                      <div className="p-4 rounded-xl bg-slate-800/90 border border-emerald-500/40 text-center space-y-2 shadow-lg shadow-emerald-950/20 relative">
                        <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                          <Cloud className="w-5 h-5" />
                        </div>
                        <div className="text-xs font-bold text-white">
                          {activeModelTab === 'onprem-to-cloud' ? 'Secondary Cloud (Viettel)' : 'Secondary Zone B (Viettel)'}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          Tier 3 TIA-942 Rated 3
                        </div>
                        <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">
                          Ready for 1-Click Failover
                        </span>
                      </div>

                    </div>
                  </div>

                  {/* 1-Click Failover Trigger Pill */}
                  <div className="p-3 rounded-xl bg-gradient-to-r from-red-950/60 via-slate-900 to-slate-900 border border-red-500/40 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs">
                      <Zap className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span className="text-slate-200 font-medium">
                        Kích hoạt chuyển đổi <strong>"Failover Now"</strong> 1 cú click chuột theo kịch bản tùy chọn.
                      </span>
                    </div>
                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded bg-[var(--vidc-color-brand-red)] text-white uppercase whitespace-nowrap shadow-xs">
                      1-Click Failover
                    </span>
                  </div>

                  {/* Bottom spec bar */}
                  <div className="pt-3 border-t border-slate-800 grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-[10px] text-slate-400">RTO Cam Kết</div>
                      <div className="text-xs font-bold text-red-400 mt-0.5">~ 10 Phút</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">Ảo Hóa Tương Thích</div>
                      <div className="text-xs font-bold text-white mt-0.5">VMware / Hyper-V</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">Độ Sẵn Sàng SLA</div>
                      <div className="text-xs font-bold text-emerald-400 mt-0.5">99.99%</div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
