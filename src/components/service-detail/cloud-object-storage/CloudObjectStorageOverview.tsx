import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface CloudObjectStorageOverviewProps {
  currentMarket?: SEAMarket;
}

export const CloudObjectStorageOverview: React.FC<CloudObjectStorageOverviewProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isLaos
      ? 'Technology Overview & Storage Capabilities of Viettel Cloud Object Storage'
      : 'Tổng Quan Công Nghệ & Năng Lực Lưu Trữ Viettel Cloud Object Storage',
    desc1: isLaos
      ? 'Viettel Cloud Object Storage is an optimized data storage technology operated on an advanced cloud infrastructure platform. The solution provides a virtually unlimited storage space dedicated to unstructured data, ensuring maximum security and cost efficiency.'
      : 'Viettel Cloud Object Storage là công nghệ lưu trữ dữ liệu tối ưu được vận hành trên nền tảng hạ tầng đám mây hiện đại. Giải pháp tạo ra không gian lưu trữ rộng lớn không giới hạn, chuyên biệt cho dữ liệu dạng phi cấu trúc (Unstructured Data), đảm bảo tính an toàn bảo mật cao và tiết kiệm chi phí tối đa.',
    desc2: isLaos
      ? 'The system provides extended APIs compatible with the S3 standard, enabling effortless data querying and seamless integration with popular programming languages. In particular, Multi Availability Zone (Multi AZ) cross-datacenter physical synchronization enhances data integrity, protecting digital assets against localized data center disasters.'
      : 'Hệ thống cung cấp API mở rộng tương thích chuẩn S3, cho phép truy vấn dữ liệu dễ dàng và tích hợp linh hoạt với nhiều ngôn ngữ lập trình phổ biến. Đặc biệt, công nghệ đồng bộ giữa các phân vùng lưu trữ vật lý (Multi Availability Zone) giúp nâng cao tính toàn vẹn của dữ liệu, bảo vệ tài sản số an toàn tuyệt đối ngay cả khi xảy ra sự cố hay thảm họa tại trung tâm dữ liệu.',
    highlights: [
      {
        title: isLaos ? 'Petabyte-scale Elastic Expansion' : 'Mở rộng quy mô Petabyte',
        desc: isLaos
          ? 'Zero service downtime, no reconfiguration required when expanding; unit cost decreases as your storage footprint grows.'
          : 'Không gián đoạn dịch vụ, không cần cấu hình lại hệ thống khi mở rộng; dung lượng lưu trữ càng lớn, đơn giá càng rẻ.',
      },
      {
        title: isLaos ? 'Multi-AZ Cross-Region Synchronization' : 'Đồng bộ đa vùng (Multi AZ)',
        desc: isLaos
          ? 'Enhances continuous availability and data integrity through automated replication across physically independent availability zones.'
          : 'Tăng cường tính sẵn sàng và toàn vẹn dữ liệu qua cơ chế đồng bộ giữa các phân vùng vật lý độc lập.',
      },
      {
        title: isLaos ? 'Full S3 API Compatibility' : 'Tương thích hoàn toàn S3 API',
        desc: isLaos
          ? 'Comprehensive multi-language SDKs and technical documentation enabling developers to integrate effortlessly.'
          : 'Hỗ trợ đầy đủ bộ SDK đa ngôn ngữ và tài liệu hướng dẫn giúp lập trình viên tích hợp nhanh chóng.',
      },
      {
        title: isLaos ? 'Maximized Domestic Bandwidth' : 'Băng thông nội địa tối đa',
        desc: isLaos
          ? 'Superior transmission speed, drastically cutting data load times and eliminating international undersea cable severance risks.'
          : 'Tốc độ truyền tải vượt trội, rút ngắn thời gian tải dữ liệu và loại bỏ hoàn toàn rủi ro đứt cáp quang biển.',
      },
    ],
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
          
          {/* Cột Trái (Mô tả giải pháp & 4 Key Highlights) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              {t.desc1}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.desc2}
            </p>

            {/* 4 Key Highlights */}
            <div className="space-y-3.5 pt-2">
              {t.highlights.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors flex items-start gap-3.5"
                >
                  <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{item.title}</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Cột Phải (Video YouTube nhúng chuẩn aspect-16/9) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/8kL9kM3M2W4?autoplay=0&rel=0"
                title="Viettel Cloud Object Storage Overview"
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

