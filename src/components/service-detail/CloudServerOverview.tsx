import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../layout/UtilityBar';

interface CloudServerOverviewProps {
  currentMarket?: SEAMarket;
}

export const CloudServerOverview: React.FC<CloudServerOverviewProps> = ({ currentMarket }) => {
  const isKhmer = currentMarket?.code === 'vcloudia';
  const isLaos = currentMarket?.code !== 'vn' && !isKhmer;

  const t = {
    eyebrow: isKhmer ? 'ទិដ្ឋភាពទូទៅនៃសេវាកម្ម' : isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isKhmer
      ? 'ហេដ្ឋារចនាសម្ព័ន្ធ Cloud ប្រភពបើកចំហ OpenStack ធ្វើឱ្យប្រសើរឡើងនូវការចំណាយ'
      : isLaos 
      ? 'Cost-optimized OpenStack open-source cloud infrastructure'
      : 'Hạ tầng đám mây mã nguồn mở OpenStack tối ưu chi phí',
    desc1: isKhmer
      ? 'Viettel Cloud Server លើវេទិកាប្រភពបើកចំហ OpenStack ស្តង់ដារអន្តរជាតិ ផ្តល់នូវសមត្ថភាពស្វ័យប្រវត្តិកម្មដ៏អស្ចារ្យ ការបត់បែនខ្ពស់ និងកាត់បន្ថយការចំណាយអាជ្ញាប័ណ្ណរហូតដល់ ៣០%។'
      : isLaos
      ? 'Viettel Cloud Server on international standardized OpenStack open-source platform provides outstanding automation capabilities, flexible scalability, extreme API compatibility, and cuts up to 30% of licensing fees.'
      : 'Viettel Cloud Server cung cấp năng lực tính toán thông qua các máy chủ ảo (Virtual Machine) độc lập trên nền tảng điện toán đám mây mã nguồn mở OpenStack. Doanh nghiệp có thể sử dụng từng máy ảo độc lập hoặc kết nối thành mạng lưới hạ tầng đám mây dùng riêng.',
    desc2: isKhmer
      ? 'ដំណើរការលើកម្រិត Tier 3 (TIA-942) Data Centers របស់ Viettel IDC រួមបញ្ចូលគ្នាជាមួយប្រព័ន្ធ Distributed Ceph Storage ផ្តល់នូវសមត្ថភាពដំណើរការទិន្នន័យខ្ពស់។'
      : isLaos
      ? 'Operated on Tier 3 standard (TIA-942) Data Centers of Viettel IDC, combined with Distributed Ceph Storage system, delivering outstanding data processing power and high availability.'
      : 'Hệ thống sử dụng dòng vi xử lý Intel chuyên dụng cho Data Center, bộ nhớ RAM DDR4 và mạng lưu trữ SAN Enterprise SSD cấu hình RAID dự phòng. Dịch vụ đáp ứng đầy đủ tiêu chuẩn an toàn thông tin ISO 27001, ISO 27017 và tiêu chuẩn kỹ thuật phục vụ Chính phủ điện tử theo quy định của Bộ TT&TT.',
    highlight1Title: isKhmer ? 'High Compatibility' : isLaos ? 'High Compatibility' : 'Khả năng tương thích cao',
    highlight1Desc: isKhmer ? 'OpenStack API' : isLaos ? 'OpenStack API' : 'Nền tảng OpenStack tương thích với các chuẩn API quốc tế (AWS EC2, S3), giúp doanh nghiệp linh hoạt kết nối và di chuyển dữ liệu.',
    highlight2Title: isKhmer ? 'Auto Resource Allocation' : isLaos ? 'Auto Resource Allocation' : 'Cấp phát tài nguyên tự động',
    highlight2Desc: isKhmer ? 'Auto distribution' : isLaos ? 'Auto distribution' : 'Hệ thống tự động phân bổ máy ảo mới lên các máy chủ vật lý tải thấp và chủ động di chuyển khi có cảnh báo quá tải.',
    highlight3Title: isKhmer ? 'Flexible Scaling' : isLaos ? 'Flexible Scaling' : 'Mở rộng linh hoạt',
    highlight3Desc: isKhmer ? 'Upgrade without downtime' : isLaos ? 'Upgrade without downtime' : 'Nâng cấp CPU, RAM và dung lượng ổ đĩa trực tiếp trên cổng quản trị mà không cần dừng hệ thống.',
    highlight4Title: isKhmer ? 'Centralized Data Protection' : isLaos ? 'Centralized Data Protection' : 'Bảo vệ dữ liệu tập trung',
    highlight4Desc: isKhmer ? 'Local SAN Storage' : isLaos ? 'Local SAN Storage' : 'Toàn bộ dữ liệu đặt tại hệ thống SAN Storage nội địa, bảo đảm an toàn thông tin và tuân thủ các quy định pháp lý tại Việt Nam.',
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
          
          {/* Cột Trái (Mô tả giải pháp) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              {t.desc1}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.desc2}
            </p>

            {/* 4 Key Highlights */}
            <div className="space-y-4 pt-2">
              {[
                { title: t.highlight1Title, desc: t.highlight1Desc },
                { title: t.highlight2Title, desc: t.highlight2Desc },
                { title: t.highlight3Title, desc: t.highlight3Desc },
                { title: t.highlight4Title, desc: t.highlight4Desc },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
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

          {/* Cột Phải (Video YouTube nhúng hoặc Hình ảnh) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/8kL9kM3M2W4?autoplay=0&rel=0"
                title="Viettel Cloud Server Overview"
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
