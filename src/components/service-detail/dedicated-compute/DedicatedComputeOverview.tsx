import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface DedicatedComputeOverviewProps {
  currentMarket?: SEAMarket;
}

export const DedicatedComputeOverview: React.FC<DedicatedComputeOverviewProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isLaos 
      ? 'Genuine dedicated physical server infrastructure with optimized cost'
      : 'Hạ tầng máy chủ vật lý chuyên dụng chính hãng tối ưu chi phí',
    desc1: isLaos
      ? 'Viettel Server Leasing provides dedicated physical servers, network devices, security, and storage equipment (Dell, HPE, Supermicro), offering enterprises superior processing power, 100% dedicated resources, and eliminating upfront CapEx burdens.'
      : 'Viettel Server Leasing cung cấp hệ thống máy chủ vật lý riêng biệt kèm thiết bị mạng, bảo mật và lưu trữ chính hãng (HP, Dell, Supermicro) mang lại cho doanh nghiệp năng lực tính toán vượt trội, toàn quyền quản trị và loại bỏ gánh nặng chi phí đầu tư ban đầu.',
    desc2: isLaos
      ? 'Operated securely on nationwide TIA-942 Rated 3 standard Data Centers of Viettel IDC, directly interconnected to high-speed core backbone network, backed by on-site 24/7/365 hardware maintenance.'
      : 'Vận hành an toàn trên hệ thống Trung tâm Dữ liệu đạt chuẩn quốc tế TIA-942 Rated 3 của Viettel IDC, kết nối trực tiếp vào mạng lõi tốc độ cao và hỗ trợ kỹ thuật tại chỗ 24/7/365.',
    highlight1Title: isLaos ? '100% Genuine Enterprise Hardware' : 'Thiết bị phần cứng nhập khẩu chính hãng 100%',
    highlight1Desc: isLaos
      ? 'Equipped with the most advanced server lines (Dell PowerEdge, HPE ProLiant, Supermicro) with enterprise-grade components.'
      : 'Trang bị các dòng máy chủ tiên tiến nhất từ các hãng công nghệ hàng đầu thế giới (Dell, HPE, Supermicro) với linh kiện chuyên dụng.',
    highlight2Title: isLaos ? 'Dedicated 100% Isolated Resources' : 'Tài nguyên độc lập 100% không chia sẻ',
    highlight2Desc: isLaos
      ? 'Full exploitation of raw compute power and isolated storage without noisy neighbor interference.'
      : 'Toàn quyền khai thác trọn vẹn hiệu năng CPU, RAM và lưu trữ vật lý riêng biệt, không chia sẻ tài nguyên với bất kỳ ai.',
    highlight3Title: isLaos ? 'Full Administrative & Root Control' : 'Toàn quyền quản trị Root / Administrator',
    highlight3Desc: isLaos
      ? 'Equipped with dedicated static IP, IPMI/iDRAC/iLO remote access to install OS and configure applications autonomously.'
      : 'Cung cấp IP tĩnh riêng biệt, giao diện quản trị từ xa (iDRAC/iLO/IPMI) giúp tự do cài đặt hệ điều hành và thiết lập ứng dụng.',
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
          
          {/* Cột Trái (Mô tả giải pháp & 3 Highlights) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              {t.desc1}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.desc2}
            </p>

            {/* 3 Key Highlights */}
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

          {/* Cột Phải (Video / Hình ảnh hạ tầng Data Center) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              <iframe
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/zH0K1jFv-X4?si=ViettelIDC"
                title="Viettel Server Leasing Infrastructure"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
