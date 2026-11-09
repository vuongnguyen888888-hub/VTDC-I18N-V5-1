import React, { useState } from 'react';
import { Play, Shield, RefreshCw, Compass, Users } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CsmpOverviewProps {
  currentMarket?: SEAMarket;
}

export const CsmpOverview: React.FC<CsmpOverviewProps> = () => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <section 
      id="overview" 
      className="py-16 md:py-20 bg-white border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-xs font-semibold text-[color:var(--vidc-color-brand-red)] uppercase tracking-wider mb-2">
            Tổng quan chiến lược
          </div>
          <h2 
            id="csmp-overview-h2"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--vidc-legacy-hex-222225)]"
          >
            Tổng Quan Chương Trình Viettel Cyber Security Maturity Program
          </h2>
        </div>

        {/* 2-Column Content: Left Text & Right 16:9 Video/Architecture Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Column (Text description) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed text-base space-y-4">
              <p>
                Trong quá trình chuyển đổi số, các tổ chức, doanh nghiệp đang phải đối mặt với rất nhiều 
                nguy cơ mất ATTT. Cùng với đó là tình trạng thiếu hụt nguồn lực nhân sự chuyên môn cao 
                và bài toán cân đối giữa chi phí và hiệu quả đầu tư.
              </p>
              <p>
                Thấu hiểu điều này, Viettel xây dựng <strong>Cyber Security Maturity Program (CSMP)</strong> nhằm 
                đồng hành dài hạn theo vòng đời của doanh nghiệp. Chương trình hướng tới <em>“trưởng thành thật”</em> thay 
                vì <em>“đánh giá cho có”</em>, giúp tổ chức giải quyết trọn vẹn cả 3 bài toán: 
                <strong> thiếu nhân lực chuyên sâu, áp lực chi phí</strong> và <strong>khoảng cách công nghệ</strong>.
              </p>
            </div>

            {/* 3 Core pillars solving enterprise dilemmas */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-red-50/70 border border-red-100 rounded-lg text-center">
                <p className="text-xs text-gray-500 font-medium">Khắc phục</p>
                <p className="text-xs sm:text-sm font-bold text-[color:var(--vidc-color-brand-red)]">Thiếu hụt nhân lực</p>
              </div>
              <div className="p-3 bg-red-50/70 border border-red-100 rounded-lg text-center">
                <p className="text-xs text-gray-500 font-medium">Tối ưu</p>
                <p className="text-xs sm:text-sm font-bold text-[color:var(--vidc-color-brand-red)]">Áp lực chi phí đầu tư</p>
              </div>
              <div className="p-3 bg-red-50/70 border border-red-100 rounded-lg text-center">
                <p className="text-xs text-gray-500 font-medium">Thu hẹp</p>
                <p className="text-xs sm:text-sm font-bold text-[color:var(--vidc-color-brand-red)]">Khoảng cách công nghệ</p>
              </div>
            </div>
          </div>

          {/* Right Column (16:9 Video / Interactive Architecture Frame) */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[var(--vidc-legacy-hex-1b1c20)] to-[var(--vidc-legacy-hex-2b2c32)] shadow-lg border border-gray-700/50 flex flex-col items-center justify-center text-white p-6">
              {!isPlayingVideo ? (
                <>
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(var(--vidc-color-brand-red)_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  <div className="relative z-10 flex flex-col items-center text-center max-w-md">
                    <VIDCNativeButton
                      id="csmp-video-play-btn"
                      onClick={() => setIsPlayingVideo(true)}
                      className="w-16 h-16 rounded-full bg-[color:var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-cc002b)] flex items-center justify-center text-white shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer mb-4"
                      aria-label="Xem video giới thiệu Viettel CSMP"
                    >
                      <Play className="w-7 h-7 ml-1 fill-current" />
                    </VIDCNativeButton>
                    <span className="text-xs font-semibold uppercase tracking-widest text-red-300 mb-1">
                      Video Giới Thiệu
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                      Hành Trình Trưởng Thành An Toàn Thông Tin Cùng Viettel CSMP
                    </h3>
                    <p className="text-xs text-gray-300">
                      Mô hình đồng hành trọn đời theo chuẩn NIST Cybersecurity Framework (16:9 Frame)
                    </p>
                  </div>
                </>
              ) : (
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center bg-black/80 rounded-lg p-4">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[color:var(--vidc-color-brand-red)]/20 border border-[color:var(--vidc-color-brand-red)] flex items-center justify-center mx-auto text-[color:var(--vidc-color-brand-red)]">
                      <Shield className="w-6 h-6 animate-pulse" />
                    </div>
                    <p className="text-sm font-semibold text-white">Đang kết nối luồng trình chiếu Viettel CSMP...</p>
                    <p className="text-xs text-gray-400">Khung kiến trúc trưởng thành an ninh mạng đa tầng</p>
                    <VIDCNativeButton
                      onClick={() => setIsPlayingVideo(false)}
                      className="text-xs text-gray-300 underline hover:text-white cursor-pointer"
                    >
                      Đóng trình chiếu
                    </VIDCNativeButton>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Key Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-red-200 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-red-100 text-[color:var(--vidc-color-brand-red)] flex items-center justify-center mb-4">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[var(--vidc-legacy-hex-222225)] mb-2">Đồng hành theo vòng đời</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Hợp tác dài hạn, linh hoạt và bám sát hiện trạng từng giai đoạn phát triển của doanh nghiệp.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-red-200 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-red-100 text-[color:var(--vidc-color-brand-red)] flex items-center justify-center mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[var(--vidc-legacy-hex-222225)] mb-2">Lộ trình rõ ràng, quyết liệt</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Chuyển hóa an ninh mạng thực chất với các hành động và cải thiện có thể đo lường chuẩn xác.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-red-200 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-red-100 text-[color:var(--vidc-color-brand-red)] flex items-center justify-center mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[var(--vidc-legacy-hex-222225)] mb-2">Cá nhân hóa theo NIST-CSF</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Đánh giá, tư vấn, triển khai và đào tạo sát với quy mô, đặc thù vận hành của từng tổ chức.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-red-200 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-red-100 text-[color:var(--vidc-color-brand-red)] flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[var(--vidc-legacy-hex-222225)] mb-2">Mạng lưới cấp cao</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Kết nối cộng đồng hội viên, chia sẻ tri thức qua các sự kiện và workshop an ninh mạng định kỳ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
