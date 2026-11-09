import React from 'react';
import { BookOpen, Headset, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface CloudObjectStorageDocsSupportProps {
  currentMarket?: SEAMarket;
}

export const CloudObjectStorageDocsSupport: React.FC<CloudObjectStorageDocsSupportProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'TECHNICAL DOCS & SUPPORT' : 'TÀI LIỆU & HỖ TRỢ KỸ THUẬT',
    headline: isLaos ? 'Technical Resources & Support Channels' : 'Tài Nguyên Kỹ Thuật & Kênh Hỗ Trợ',
    desc: isLaos
      ? 'Explore developer documentation, sample SDK codes, and 24/7 technical support from Viettel IDC cloud engineers.'
      : 'Khám phá tài liệu lập trình viên, mã nguồn mẫu SDKs và hệ thống kênh hỗ trợ kỹ thuật thường trực 24/7 từ các chuyên gia Viettel IDC.',
    card1Title: isLaos ? 'S3 API & SDKs Documentation (Documentation)' : 'Tài Liệu Hướng Dẫn S3 API & SDKs (Documentation)',
    card1Desc: isLaos
      ? 'Comprehensive API specifications, sample code libraries (Python, Java, NodeJS, PHP, Go...), STS Token authorization manuals, and bucket policy guides.'
      : 'Cung cấp hướng dẫn chi tiết về API Specs, mẫu code tích hợp (Python, Java, NodeJS, PHP, Go...), cẩm nang cấu hình STS Token và quản trị Bucket.',
    card1Link: isLaos ? 'View S3 API Documentation' : 'Xem Tài Liệu API',
    card2Title: isLaos ? '24/7 Technical Support Center (Support Center)' : 'Trung Tâm Hỗ Trợ Kỹ Thuật 24/7 (Support Center)',
    card2Desc: isLaos
      ? 'Viettel IDC cloud solution engineers are ready 24/7/365 to assist with connectivity diagnostics, storage architecture design, and ticket handling via Hotline 1800 8088.'
      : 'Đội ngũ kỹ sư giải pháp Viettel IDC thường trực hỗ trợ kiểm tra kết nối, tư vấn cấu hình lưu trữ và xử lý kỹ thuật 24/7/365 qua Hotline 1800 8088 hoặc hệ thống Ticket.',
    card2Link: isLaos ? 'Submit Technical Request' : 'Gửi Yêu Cầu Kỹ Thuật',
  };

  return (
    <section 
      id="docs-support" 
      className="py-16 md:py-24 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            {t.desc}
          </p>
        </div>

        {/* Grid 2 Card Entry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: API Docs & SDKs */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[var(--vidc-color-brand-red)] transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-13 h-13 rounded-2xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                {t.card1Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.card1Desc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <VIDCAnchor
                href="https://docs.vtidc-test.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--vidc-color-brand-red)] hover:underline"
              >
                <span>{t.card1Link}</span>
                <ArrowUpRight className="w-4 h-4" />
              </VIDCAnchor>
            </div>
          </div>

          {/* Card 2: Support Center */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[var(--vidc-color-brand-red)] transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-13 h-13 rounded-2xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                <Headset className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                {t.card2Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.card2Desc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <VIDCAnchor
                href="https://support.vtidc-test.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--vidc-color-brand-red)] hover:underline"
              >
                <span>{t.card2Link}</span>
                <ArrowUpRight className="w-4 h-4" />
              </VIDCAnchor>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
