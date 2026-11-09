import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface ColocationOverviewProps {
  currentMarket?: SEAMarket;
}

export const ColocationOverview: React.FC<ColocationOverviewProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isLaos
      ? 'Overview of Equipment Colocation Service (Viettel Colocation)'
      : 'Tổng Quan Về Dịch Vụ Thuê Chỗ Đặt Thiết Bị (Viettel Colocation)',
    desc1:
      'Dịch vụ cho thuê chỗ đặt máy chủ (Colocation) của Viettel IDC cung cấp không gian hạ tầng chỗ đặt tiêu chuẩn, hệ thống nguồn điện ổn định, hệ thống điều hòa chính xác và hạ tầng phụ trợ tối ưu để doanh nghiệp triển khai hệ thống CNTT.',
    desc2:
      'Giải pháp đảm bảo máy chủ hoạt động liên tục 24/7, cho phép khách hàng toàn quyền sở hữu, sử dụng và kiểm soát thiết bị của mình. Dịch vụ đặc biệt phù hợp với các doanh nghiệp có tài chính ổn định, vận hành dự án dài hạn và có năng lực tự quản trị hệ thống.',
    highlight1Title: 'Hạ tầng lý tưởng',
    highlight1Desc: 'Hệ thống 9 Data Center đáp ứng chuẩn TIA-942 Rated 3 Constructed Facilities.',
    highlight2Title: 'Toàn quyền kiểm soát',
    highlight2Desc: 'Khách hàng giữ toàn quyền sở hữu vật lý và quản trị hệ thống máy chủ.',
    highlight3Title: 'Bảo mật đa tầng',
    highlight3Desc: 'Kiểm soát an ninh bằng sinh trắc học, camera giám sát và hỗ trợ theo dõi từ xa qua IP Camera.',
    highlight4Title: 'Kết nối liên tục',
    highlight4Desc: 'Đường truyền Internet tốc độ cao, băng thông lớn, kết nối trực tiếp với nhiều ISP.',
  };

  return (
    <section 
      id="overview" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-0f172a)] border-b border-slate-200"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Eyebrow Badge & H2 Headline */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Solution description & 4 Key Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              <p>
                {t.desc1}
              </p>
              <p>
                {t.desc2}
              </p>
            </div>

            {/* 4 Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight">{t.highlight1Title}</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-normal">
                    {t.highlight1Desc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight">{t.highlight2Title}</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-normal">
                    {t.highlight2Desc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight">{t.highlight3Title}</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-normal">
                    {t.highlight3Desc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight">{t.highlight4Title}</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-normal">
                    {t.highlight4Desc}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 16:9 Video Frame */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/8kL9kM3M2W4?autoplay=0&rel=0"
                title="Viettel Colocation Data Center Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
