import React, { useState } from 'react';
import { CheckCircle2, Shield, Server, Lock, RefreshCw, Layers, Database, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudBackupOverviewProps {
  currentMarket?: SEAMarket;
}

export const CloudBackupOverview: React.FC<CloudBackupOverviewProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';
  const [activeTab, setActiveTab] = useState<'architecture' | 'video'>('architecture');

  const t = {
    eyebrow: isLaos ? 'OVERVIEW & ARCHITECTURE' : 'TỔNG QUAN & KIẾN TRÚC',
    headline: isLaos 
      ? 'Comprehensive Cloud Backup (BaaS) Architecture & Operation' 
      : 'Tổng quan kiến trúc & sơ đồ hoạt động của Viettel Cloud Backup (BaaS)',
    desc1: isLaos
      ? 'Viettel Cloud Backup (Backup-as-a-Service - BaaS) is an on-demand online data protection service stored in Viettel IDC international-standard data centers, enabling full replication of IT server systems with instant failover readiness.'
      : 'Viettel Cloud Backup (Backup-as-a-Service - BaaS) là giải pháp sao lưu và nhân bản toàn diện một phần hoặc toàn bộ hệ thống máy chủ CNTT lên hạ tầng điện toán đám mây Viettel IDC. Sẵn sàng kích hoạt thay thế khi hệ thống chính gặp lỗi hoặc thảm họa, đảm bảo tính toàn vẹn dữ liệu, khôi phục tức thời và tối ưu chi phí vận hành.',
    desc2: isLaos
      ? 'The platform provides continuous automated scheduling, rotational backup retention, military-grade AES 256 encryption, and immutable storage (Object Lock) against ransomware extortion.'
      : 'Hệ thống trang bị cơ chế tự động hóa toàn diện: tự động tạo dịch vụ, lập lịch xoay vòng theo giờ/ngày/tháng/năm, mã hóa đầu cuối AES 256 và công nghệ lưu trữ bất biến (Immutable Object Lock) giúp miễn nhiễm trước mã độc tống tiền Ransomware.',
    highlight1Title: isLaos ? 'Multi-Platform Comprehensive Protection' : 'Bảo vệ toàn diện đa nền tảng',
    highlight1Desc: isLaos
      ? 'Protects Physical Servers (Linux/Windows), Cloud Servers, VPC, DPC, Private Cloud, and SaaS applications like Microsoft 365.'
      : 'Hỗ trợ sao lưu Máy chủ vật lý (Physical Linux/Windows), Cloud Server, VPC, DPC, Private Cloud và ứng dụng SaaS như Microsoft 365 (Exchange, OneDrive, Teams).',
    highlight2Title: isLaos ? 'Immutable Backup & Ransomware Immunity' : 'Lưu trữ bất biến & Chống Ransomware (Object Lock)',
    highlight2Desc: isLaos
      ? 'Object Lock ensures backup versions cannot be modified, deleted, or encrypted by malicious actors or ransomware.'
      : 'Lưu trữ trên Object Storage kích hoạt tính năng Object Lock, khóa dữ liệu bất biến không thể sửa đổi hay mã hóa, cho phép khôi phục trạng thái sạch tức thì.',
    highlight3Title: isLaos ? 'Instant Granular Application Recovery' : 'Khôi phục tức thời mức ứng dụng (Application Explorer)',
    highlight3Desc: isLaos
      ? 'Instant item-level recovery for Active Directory, MS SQL Server, MS Exchange, and Oracle without restoring the entire server.'
      : 'Tích hợp bộ công cụ Application Explorer giúp trích xuất và restore chính xác từng email, bảng dữ liệu, bản ghi hoặc đối tượng Active Directory trong vài giây.',
    tabArchitecture: isLaos ? 'BaaS Architecture Flow' : 'Sơ đồ luồng hoạt động',
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

        {/* 2 Cột Nội Dung: Trái Văn Bản & Điểm Nổi Bật, Phải Minh Họa / Video */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Cột Trái */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              {t.desc1}
            </p>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.desc2}
            </p>

            {/* 3 Điểm Nổi Bật Chuẩn TDV-01 */}
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

          {/* Cột Phải: Kiến trúc luồng hoạt động hoặc Video chuẩn */}
          <div className="lg:col-span-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                {isLaos ? 'ARCHITECTURE PREVIEW' : 'TRỰC QUAN HÓA GIẢI PHÁP'}
              </span>
              <div className="inline-flex p-1 bg-slate-100 rounded-full text-[11px] font-bold">
                <VIDCNativeButton
                  type="button"
                  onClick={() => setActiveTab('architecture')}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    activeTab === 'architecture'
                      ? 'bg-white text-[var(--vidc-color-brand-red)] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.tabArchitecture}
                </VIDCNativeButton>
                <VIDCNativeButton
                  type="button"
                  onClick={() => setActiveTab('video')}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    activeTab === 'video'
                      ? 'bg-white text-[var(--vidc-color-brand-red)] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.tabVideo}
                </VIDCNativeButton>
              </div>
            </div>

            {activeTab === 'video' ? (
              <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.youtube.com/embed/8kL9kM3M2W4?autoplay=0&rel=0"
                  title="Viettel Cloud Backup Overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative rounded-2xl bg-[var(--vidc-legacy-hex-090d16)] border border-slate-800 p-6 shadow-2xl overflow-hidden text-white">
                {/* Background grid texture */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-mono font-bold text-slate-300">VIETTEL BAAS TOPOLOGY</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20 font-bold">
                      AES 256 + SSL
                    </span>
                  </div>

                  {/* Flow Diagram */}
                  <div className="grid grid-cols-3 gap-3 items-center">
                    
                    {/* Node 1: Source */}
                    <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2">
                      <div className="w-9 h-9 mx-auto rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                        <Server className="w-5 h-5" />
                      </div>
                      <div className="text-[11px] font-bold text-white leading-tight">Môi Trường Nguồn</div>
                      <div className="text-[9px] text-slate-400">VM / Physical / M365 / VPC</div>
                    </div>

                    {/* Node 2: Pipeline */}
                    <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center space-y-2 relative">
                      <div className="w-9 h-9 mx-auto rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                        <RefreshCw className="w-5 h-5 animate-spin-slow" />
                      </div>
                      <div className="text-[11px] font-bold text-white leading-tight">BaaS Gateway</div>
                      <div className="text-[9px] text-slate-400">Lập lịch & Tự động mã hóa</div>
                    </div>

                    {/* Node 3: Target */}
                    <div className="p-3.5 rounded-xl bg-slate-800/80 border border-red-500/40 text-center space-y-2 bg-gradient-to-b from-red-950/30 to-slate-900">
                      <div className="w-9 h-9 mx-auto rounded-lg bg-red-500/20 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                        <Lock className="w-5 h-5" />
                      </div>
                      <div className="text-[11px] font-bold text-white leading-tight">Object Lock Storage</div>
                      <div className="text-[9px] text-red-300">Bất biến chống Ransomware</div>
                    </div>

                  </div>

                  {/* Bottom metrics in diagram */}
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Khôi phục 2 chiều:</span>
                    <span className="font-bold text-emerald-400">Override (Ghi đè) hoặc Keep (Giữ lại)</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Giao diện điều khiển:</span>
                    <span className="font-bold text-white">Self-Service Web Portal 24/7</span>
                  </div>

                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
