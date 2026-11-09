import React from 'react';
import { 
  FolderTree, 
  Video, 
  Cctv, 
  Archive, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  HardDrive,
  Users
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudFileStorageUseCasesProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const CloudFileStorageUseCases: React.FC<CloudFileStorageUseCasesProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'PROVEN INDUSTRY USE CASES' : 'KỊCH BẢN ỨNG DỤNG THỰC TẾ',
    headline: isLaos
      ? 'Practical Enterprise Use Cases for Cloud File Storage'
      : 'Kịch Bản Ứng Dụng Thực Tế Của Cloud File Storage',
    desc: isLaos
      ? 'Tailored to address diverse operational challenges, from corporate collaboration to high-throughput media rendering and massive video surveillance archives.'
      : 'Giải quyết toàn diện các bài toán lưu trữ và chia sẻ file phức tạp trong doanh nghiệp, từ cộng tác nội bộ đến xử lý media đa luồng và lưu trữ camera diện rộng.',
    cases: [
      {
        icon: Users,
        title: isLaos ? 'User Home Directories & Internal Sharing' : '1. Thư Mục Người Dùng & Chia Sẻ Nội Bộ (Home Directories)',
        problem: isLaos
          ? 'Enterprises require shared folder spaces for departments and internal users to sync documents via standard Windows SMB/CIFS protocol.'
          : 'Doanh nghiệp cần không gian lưu trữ thư mục dùng chung cho các phòng ban, người dùng nội bộ để chia sẻ tài liệu đồng bộ qua giao thức Windows SMB/CIFS.',
        solution: isLaos
          ? 'Centralized vCFS setup with granular departmental/user permissions, mounted directly as a secure and seamless local network drive.'
          : 'Thiết lập vCFS tập trung, phân quyền chi tiết theo phòng ban/người dùng, mount trực tiếp như một ổ đĩa mạng nội bộ an toàn và thuận tiện.',
        tag: 'SMB / CIFS Protocol',
      },
      {
        icon: Video,
        title: isLaos ? 'Media Production & Streaming Assets' : '2. Dữ Liệu Truyền Thông & Đa Phương Tiện (Media Production)',
        problem: isLaos
          ? 'Content production houses need storage for video, audio, and high-res imagery with strict tree hierarchy and high throughput for concurrent workstation editing.'
          : 'Các đơn vị sản xuất nội dung cần không gian lưu trữ video, hình ảnh, file âm thanh với cấu trúc thư mục rõ ràng và thông lượng đọc/ghi cao để nhiều máy trạm truy xuất đồng thời.',
        solution: isLaos
          ? 'Utilizes Enterprise SSD tier with throughput scalable up to 500 MB/s, allowing multiple render nodes and editing suites to stream smoothly.'
          : 'Sử dụng phân lớp SSD với khả năng mở rộng thông lượng lên đến 500 MB/s, cho phép nhiều máy chủ/ứng dụng xử lý render và biên tập dữ liệu mượt mà.',
        tag: 'High Throughput SSD',
      },
      {
        icon: Cctv,
        title: isLaos ? 'Large-Scale Video Surveillance' : '3. Hệ Thống Camera Giám Sát Diện Rộng (Surveillance Storage)',
        problem: isLaos
          ? 'Video streams from camera networks must be recorded 24/7 sorted by date/location with hundreds of Terabytes generated monthly.'
          : 'Dữ liệu video từ hệ thống camera cần được ghi liên tục 24/7 theo cấu trúc ngày/tháng/vị trí với dung lượng phát sinh hàng trăm Terabyte mỗi tháng.',
        solution: isLaos
          ? 'Leverages HDD tier with economical pricing from just 1,150 VND/GB/month and unlimited scalability to ingest continuous high-bandwidth video streams.'
          : 'Tận dụng phân lớp HDD với chi phí tối ưu chỉ từ 1.150 đ/GB/tháng và năng lực lưu trữ dung lượng không giới hạn để tiếp nhận luồng video camera ổn định.',
        tag: 'Massive HDD Capacity',
      },
      {
        icon: Archive,
        title: isLaos ? 'Unstructured File Archive' : '4. Lưu Trữ Dài Hạn Dữ Liệu Phi Cấu Trúc (File Archive)',
        problem: isLaos
          ? 'Enterprises need long-term archival storage for digitized documents, scanned vouchers, and contracts with easy hierarchical retrieval at low cost.'
          : 'Doanh nghiệp cần nơi lưu trữ các tệp tin tài liệu số hóa, hồ sơ chứng từ phi cấu trúc dài hạn với chi phí tối ưu và dễ dàng tra cứu lại theo cây thư mục.',
        solution: isLaos
          ? 'Organizes data into hierarchical vCFS folders, drastically saving operational & maintenance costs compared to physical SAN/NAS arrays.'
          : 'Đưa dữ liệu vào các folder phân cấp trên vCFS để tối ưu chi phí vận hành, bảo dưỡng so với việc duy trì mảng lưu trữ NAS/SAN vật lý truyền thống.',
        tag: 'Long-term Archive',
      },
    ],
  };

  return (
    <section id="use-cases" className="py-16 md:py-24 bg-white text-slate-800">
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
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            {t.desc}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.cases.map((uc, idx) => {
            const IconComponent = uc.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-white text-[var(--vidc-color-brand-red)] shadow-sm border border-slate-100">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-mono">
                      {uc.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[var(--vidc-legacy-hex-222225)] leading-snug">
                    {uc.title}
                  </h3>

                  {/* Problem & Solution Block */}
                  <div className="space-y-3 pt-2 text-xs sm:text-sm">
                    <div className="p-3.5 rounded-xl bg-white border border-red-100">
                      <span className="font-bold text-red-600 block mb-1">
                        Bài toán đặt ra:
                      </span>
                      <p className="text-slate-600 leading-relaxed">
                        {uc.problem}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-emerald-100">
                      <span className="font-bold text-emerald-700 block mb-1">
                        Giải pháp từ vCFS:
                      </span>
                      <p className="text-slate-600 leading-relaxed">
                        {uc.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    Tương thích NFS &amp; CIFS
                  </span>
                  <VIDCNativeButton
                    type="button"
                    onClick={onOpenConsult}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline cursor-pointer"
                  >
                    <span>Tư vấn kịch bản này</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </VIDCNativeButton>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
