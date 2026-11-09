import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Leaf, 
  Sun, 
  Wind, 
  Zap, 
  ShieldCheck, 
  Users, 
  Building2, 
  FileText, 
  Download, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Award,
  Globe,
  RefreshCw,
  Gauge,
  HeartHandshake
} from 'lucide-react';
import { SEAMarket } from '../layout/UtilityBar';
import { AboutSubNav } from './AboutSubNav';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface AboutESGPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export const AboutESGPage: React.FC<AboutESGPageProps> = ({
  currentMarket,
  onNavigateHome,
  currentPath = '/about/esg/',
  onNavigate,
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadReport = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return (
    <div className="bg-slate-50 text-slate-900">
      {/* 3 Pillars of ESG: E - S - G */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-2xs">
            <span className="text-xs font-black uppercase tracking-wider text-red-700">
              3 TRỤ CỘT CHIẾN LƯỢC
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Khung Chiến Lược ESG Toàn Diện Của Viettel IDC
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
            Áp dụng các thông lệ quốc tế tốt nhất từ GRI Standards, cam kết tạo ra giá trị bền vững cho đối tác, cộng đồng và môi trường sinh thái.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pillar 1: Environmental (E) */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center">
                <Leaf className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-black text-[var(--vidc-text-brand)] uppercase tracking-widest">
                  TRỤ CỘT E — ENVIRONMENTAL
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  Môi Trường &amp; Green DC
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Xây dựng hạ tầng Trung tâm Dữ liệu thân thiện với môi trường, tối ưu hóa năng lượng và giảm thiểu lượng rác thải điện tử (E-waste).
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  'Hệ thống Chiller giải nhiệt nước biến tần đạt PUE < 1.4',
                  'Lắp đặt hệ thống điện mặt trời áp mái tại các Data Center lớn',
                  'Ứng dụng Trí tuệ Nhân tạo (AI DCIM) để dự báo và tối ưu luồng gió làm mát',
                  'Thu hồi và tái chế 100% linh kiện phần cứng theo tiêu chuẩn an toàn sinh thái',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[var(--vidc-text-brand)] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm text-[var(--vidc-text-brand)] font-bold">
              <span>Cam kết Net Zero 2040</span>
              <Gauge className="w-4 h-4" />
            </div>
          </div>

          {/* Pillar 2: Social (S) */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-black text-[var(--vidc-text-brand)] uppercase tracking-widest">
                  TRỤ CỘT S — SOCIAL
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  Xã Hội &amp; Con Người
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Kiến tạo môi trường làm việc hạnh phúc, bình đẳng, thúc đẩy đào tạo tài năng công nghệ trẻ và phổ cập hạ tầng số đến cộng đồng.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  'Đào tạo và cấp chứng chỉ công nghệ quốc tế (AWS, Cisco, VMware) cho 100% kỹ sư',
                  'Bảo đảm môi trường làm việc đa dạng, bình đẳng giới và an toàn lao động tuyệt đối',
                  'Tài trợ hạ tầng Cloud cho các trường Đại học công nghệ hàng đầu Việt Nam',
                  'Đồng hành cứu trợ thiên tai và chương trình Trái tim cho em',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[var(--vidc-text-brand)] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm text-[var(--vidc-text-brand)] font-bold">
              <span>Hạnh phúc người lao động &amp; Xã hội</span>
              <HeartHandshake className="w-4 h-4" />
            </div>
          </div>

          {/* Pillar 3: Governance (G) */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-black text-[var(--vidc-text-brand)] uppercase tracking-widest">
                  TRỤ CỘT G — GOVERNANCE
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  Quản Trị Minh Bạch &amp; An Toàn
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Vận hành hệ thống quản trị rủi ro đa tầng, minh bạch thông tin tài chính và bảo vệ tuyệt đối dữ liệu người dùng theo luật định.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  'Tuân thủ tuyệt đối Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân',
                  'Hệ thống quản lý an toàn thông tin đạt chuẩn ISO 27001, ISO 27017, PCI-DSS v4.0',
                  'Kiểm toán an ninh độc lập và minh bạch tài chính bởi các đơn vị Big 4',
                  'Chính sách phòng chống tham nhũng, xung đột lợi ích và đạo đức kinh doanh nghiêm ngặt',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[var(--vidc-text-brand)] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm text-[var(--vidc-text-brand)] font-bold">
              <span>Kiến trúc An toàn Zero Trust</span>
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase: Green Data Center Features */}
      <section className="bg-white border-y border-slate-200 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-2xs">
              <span className="text-xs font-black uppercase tracking-wider text-red-700">
                CÔNG NGHỆ BẢO VỆ MÔI TRƯỜNG
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Đại TTDL Viettel Hòa Lạc — Biểu Tượng Trung Tâm Dữ Liệu Xanh
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              Trung tâm Dữ liệu đầu tiên tại Việt Nam được thiết kế ngay từ đầu theo các tiêu chuẩn công trình xanh quốc tế.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center">
                <Wind className="w-5 h-5" />
              </div>
              <h4 className="text-base font-black text-slate-900">Làm Mát Bằng Nước &amp; Biến Tần</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Hệ thống Chiller giải nhiệt nước hiệu suất cao kết hợp công nghệ biến tần VFD tự động điều chỉnh công suất theo tải thực tế.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center">
                <Sun className="w-5 h-5" />
              </div>
              <h4 className="text-base font-black text-slate-900">Điện Mặt Trời Tự Cung</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Khu vực mái nhà và khuôn viên được trang bị pin năng lượng mặt trời công suất lớn, cấp điện trực tiếp cho hệ thống chiếu sáng và phụ trợ.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-black text-slate-900">Hỗ Trợ Rack AI Siêu Mật Độ</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Thiết kế sẵn sàng cho giải pháp tản nhiệt chất lỏng (Direct-to-Chip Liquid Cooling) phục vụ siêu máy chủ AI lên đến 30kW/rack.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h4 className="text-base font-black text-slate-900">Tái Thu Hồi Nhiệt Thải</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                100% nhiệt lượng tỏa ra từ các phòng máy được thu hồi để sưởi ấm cho các khu vực văn phòng và tái phục vụ tuần hoàn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action & Download Report */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-red-900/40 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Cùng Viettel IDC Kiến Tạo Tương Lai Số Bền Vững
            </h3>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-normal">
              Tìm hiểu chi tiết các cam kết, số liệu kiểm toán độc lập và lộ trình giảm phát thải carbon trong Báo cáo Phát triển Bền vững (ESG Report) chính thức của chúng tôi.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <VIDCNativeButton
              onClick={handleDownloadReport}
              className="px-6 py-3.5 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-8f0027)] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{downloadSuccess ? 'Đang xuất file PDF...' : 'Tải Báo cáo ESG'}</span>
            </VIDCNativeButton>
            <VIDCAnchor
              href="/about/data-centers/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('/about/data-centers/');
              }}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 backdrop-blur-md transition-all cursor-pointer"
            >
              <span>Xem 9 Data Center</span>
              <ArrowRight className="w-4 h-4" />
            </VIDCAnchor>
          </div>
        </div>
      </section>
    </div>
  );
};
