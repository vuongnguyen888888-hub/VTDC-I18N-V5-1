import React, { useState } from 'react';
import { 
  FolderTree, 
  Network, 
  Zap, 
  Clock, 
  CheckCircle2, 
  Play, 
  X,
  Server,
  FileSpreadsheet
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudFileStorageOverviewProps {
  currentMarket?: SEAMarket;
}

export const CloudFileStorageOverview: React.FC<CloudFileStorageOverviewProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isLaos
      ? 'Architectural Overview & Capabilities of Viettel Cloud File Storage'
      : 'Tổng Quan Kiến Trúc & Năng Lực Của Viettel Cloud File Storage',
    desc1: isLaos
      ? 'Viettel Cloud File Storage (vCFS) is a data storage system in a Hierarchical Structure, where all data is organized as folders and files, uniformly displayed for both the storage system and accessing systems with a familiar tree format.'
      : 'Viettel Cloud File Storage (vCFS) là hệ thống lưu trữ dữ liệu trong cấu trúc phân cấp (Hierarchical Structure), nơi toàn bộ dữ liệu được tổ chức dưới dạng các Folder/thư mục và tệp tin, được hiển thị đồng nhất cho cả hệ thống lưu trữ lẫn hệ thống truy xuất dữ liệu với cùng một định dạng quen thuộc.',
    desc2: isLaos
      ? 'The File System (FS) automatically manages file metadata, allowing applications to work with file-level data effortlessly without code modifications. vCFS seamlessly supports popular protocols such as CIFS/SMB (Windows) and NFS (Linux/Unix). Offering high performance and rapid elasticity, it is the trusted choice for storing and sharing files/folders across Cloud VMs and On-premises servers.'
      : 'Hệ thống File System (FS) tự động quản lý metadata của file, giúp các ứng dụng làm việc với dữ liệu mức file dễ dàng mà không cần thay đổi cấu trúc mã nguồn. vCFS tương thích hoàn hảo với các giao thức phổ biến như CIFS/SMB (cho môi trường Windows) và NFS (cho môi trường Linux/Unix). Với hiệu năng cao và năng lực mở rộng nhanh chóng, dịch vụ là sự lựa chọn đáng tin cậy cho các nhu cầu lưu trữ và chia sẻ file/folder giữa các máy chủ ảo (Cloud VM) và máy chủ tại chỗ (On-premises).',
    highlights: [
      {
        icon: FolderTree,
        title: isLaos ? 'Hierarchical Tree Storage' : 'Không gian lưu trữ phân cấp dạng cây thư mục',
        desc: isLaos
          ? 'Uniform access and presentation format across all connected operating systems.'
          : 'Đồng nhất định dạng truy xuất và hiển thị dữ liệu quen thuộc trên mọi hệ điều hành.',
      },
      {
        icon: Network,
        title: isLaos ? 'Dual Protocol Compatibility' : 'Tương thích native cả hai giao thức NFS & CIFS/SMB',
        desc: isLaos
          ? 'Seamless support for Linux (NFS) and Windows (CIFS/SMB) enterprise environments.'
          : 'Hỗ trợ chuẩn doanh nghiệp cho cả môi trường Linux (NFS) và Windows Server (CIFS/SMB).',
      },
      {
        icon: Clock,
        title: isLaos ? 'Rapid Initialization & Mount' : 'Khởi tạo, cấu hình và gắn kết (mount) trong vài phút',
        desc: isLaos
          ? 'Fast deployment and direct network mounting to servers via intuitive Web Portal.'
          : 'Triển khai siêu tốc, mount trực tiếp như một ổ cứng mạng nội bộ qua Web Portal.',
      },
      {
        icon: Zap,
        title: isLaos ? 'Zero Downtime Elastic Scaling' : 'Nâng cấp thông lượng & mở rộng dung lượng tức thì',
        desc: isLaos
          ? 'Seamlessly expand capacity up to 1,000+ TB with zero service interruption.'
          : 'Mở rộng quy mô lên tới 1.000+ TB không gây gián đoạn hệ thống (Zero Downtime).',
      },
    ],
    videoTitle: isLaos ? 'Viettel Cloud File Storage Architecture' : 'Kiến Trúc & Trải Nghiệm Viettel Cloud File Storage',
    watchDemo: isLaos ? 'Watch Service Architecture Video' : 'Xem video giới thiệu kiến trúc dịch vụ',
  };

  return (
    <section id="overview" className="py-16 md:py-24 bg-white text-slate-800">
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[var(--vidc-color-brand-red)] text-xs font-bold uppercase tracking-wider mb-3">
            <FolderTree className="w-3.5 h-3.5" />
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-snug">
            {t.headline}
          </h2>
        </div>

        {/* 2-Column Grid: Text & Highlights + 16:9 Video Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (Solution content & 4 Key Highlights) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              {t.desc1}
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.desc2}
            </p>

            {/* 4 Key Highlights */}
            <div className="space-y-3.5 pt-2">
              {t.highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors flex items-start gap-3.5"
                  >
                    <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{item.title}</h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: 16:9 Video Player / Architectural Frame */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group aspect-video">
              
              {/* Background Architectural Artwork */}
              <img alt="Viettel Cloud File Storage Architecture Diagram" src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1787075679/banner_2_yyafrd.jpg" className="w-full h-full object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-500" />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Badges on Video Container */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  NFS & CIFS/SMB Native
                </span>
              </div>

              {/* Play Button Action */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <VIDCNativeButton
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus:ring-4 focus:ring-red-500/40"
                  aria-label="Play video"
                >
                  <Play className="w-7 h-7 sm:w-9 sm:h-9 ml-1 fill-white" />
                </VIDCNativeButton>
                <p className="text-white font-bold text-sm sm:text-base mt-4 drop-shadow-md">
                  {t.videoTitle}
                </p>
                <p className="text-slate-300 text-xs mt-1 drop-shadow">
                  {t.watchDemo}
                </p>
              </div>

              {/* Bottom Spec Overlay */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-slate-300/90 border-t border-white/15 pt-2">
                <span className="flex items-center gap-1">
                  <Server className="w-3.5 h-3.5 text-red-400" />
                  Cloud VM & On-prem Mount
                </span>
                <span className="font-mono text-emerald-400 font-semibold">
                  Zero Downtime Scaling
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Video Modal Popup */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700 text-white">
              <span className="font-semibold text-sm flex items-center gap-2">
                <FolderTree className="w-4 h-4 text-red-400" />
                {t.videoTitle}
              </span>
              <VIDCNativeButton
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </VIDCNativeButton>
            </div>
            <div className="aspect-video w-full bg-black flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
                title="Viettel Cloud File Storage Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
