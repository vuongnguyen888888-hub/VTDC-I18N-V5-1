import React from 'react';
import { 
  ShieldCheck, 
  Coins, 
  Gauge, 
  Headset, 
  Award, 
  FileCheck2 
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface CloudWafBenefitsProps {
  currentMarket?: SEAMarket;
}

export const CloudWafBenefits: React.FC<CloudWafBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'CORE ENTERPRISE VALUE' : 'LỢI ÍCH CỐT LÕI',
    headline: isLaos 
      ? 'Why Choose Viettel Cloud WAF for Your Infrastructure?'
      : 'Tại Sao Lựa Chọn Viettel Cloud WAF?',
  };

  const benefits = [
    {
      icon: ShieldCheck,
      title: isLaos 
        ? 'Comprehensive Defense & Minimal False Positives' 
        : 'Bảo Vệ Toàn Diện & Giảm Thiểu Cảnh Báo Giả',
      desc: isLaos
        ? 'Multi-layer deep inspection for Web, API, and multi-vector DDoS. Advanced machine learning algorithms continuously baseline behavioral patterns, reducing false alarms to virtually zero and maintaining an uninterrupted journey for legitimate users.'
        : 'Phòng thủ đa lớp chuyên sâu cho Web, API và DDoS. Thuật toán học máy (Machine Learning) tự học hành vi giúp loại bỏ cảnh báo giả, đảm bảo người dùng hợp lệ luôn truy cập mượt mà.',
    },
    {
      icon: Coins,
      title: isLaos 
        ? 'Cost Optimization (TCO) & Operational Relief' 
        : 'Tối Ưu Chi Phí Đầu Tư (TCO) & Giảm Tải Vận Hành',
      desc: isLaos
        ? 'Zero upfront hardware investment (CapEx = 0) and no complex maintenance overhead. Pay-as-you-grow operational model, freeing your internal IT team from tedious manual rule configuration and emergency patch triage.'
        : 'Không tốn chi phí đầu tư thiết bị phần cứng ban đầu, không phát sinh chi phí bảo trì. Doanh nghiệp chỉ chi trả theo nhu cầu sử dụng thực tế, giải phóng nguồn lực CNTT nội bộ.',
    },
    {
      icon: Gauge,
      title: isLaos 
        ? 'Accelerated Throughput & Customer Experience' 
        : 'Tăng Tốc Độ Truy Cập & Trải Nghiệm Khách Hàng',
      desc: isLaos
        ? 'Powered by global Amazon CloudFront CDN integration and Reverse Proxy caching. Dramatically cuts origin server payload and accelerates page loads, converting high security directly into premium customer satisfaction.'
        : 'Tích hợp mạng phân phối nội dung toàn cầu (Amazon CloudFront) kết hợp cơ chế Caching của Reverse Proxy giúp giảm tải máy chủ gốc, tải trang cực nhanh và nâng cao tỷ lệ chuyển đổi.',
    },
    {
      icon: Headset,
      title: isLaos 
        ? 'Dedicated 24/7/365 Emergency Response Team (ERT)' 
        : 'Đội Chuyên Gia Ứng Cứu Khẩn Cấp (ERT) 24/7/365',
      desc: isLaos
        ? 'Direct access to elite cybersecurity engineers from Viettel IDC ERT ready to triage urgent incidents, construct bespoke attack mitigation runbooks, and assist your security operations around the clock.'
        : 'Đội ngũ chuyên gia an toàn thông tin giàu kinh nghiệm của Viettel IDC luôn sẵn sàng hỗ trợ kỹ thuật, điều tra sự cố và tinh chỉnh bộ luật phản ứng nhanh chóng 24/7/365.',
    },
    {
      icon: Award,
      title: isLaos 
        ? 'Strict SLA 99.99% & High Availability' 
        : 'Cam Kết Sẵn Sàng Cao SLA 99.99% & Failover Tức Thì',
      desc: isLaos
        ? 'Tier 3 Rated Data Center infrastructure with redundant scrubbing nodes and intelligent multi-origin load balancing (LBaaS) guaranteeing unbroken continuity for mission-critical enterprise systems.'
        : 'Hạ tầng dự phòng đa cụm theo chuẩn quốc tế cùng cơ chế chuyển mạch dự phòng tức thì (LBaaS Failover), cam kết thời gian khả dụng 99.99% cho các hệ thống trọng yếu.',
    },
    {
      icon: FileCheck2,
      title: isLaos 
        ? 'International Compliance & Security Standards' 
        : 'Uy Tín Quốc Tế & Tuân Thủ Chuẩn An Toàn Khắt Khe',
      desc: isLaos
        ? 'Compliant with PCI-DSS 4.0, ISO 27001, ISO 27017, and Decree 13/2023/ND-CP personal data protection mandates, providing authoritative compliance clearance for enterprise audits.'
        : 'Đáp ứng đầy đủ các tiêu chuẩn an toàn thông tin quốc tế nghiêm ngặt như PCI-DSS, ISO 27001, ISO 27017 và Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân.',
    },
  ];

  return (
    <section 
      id="benefits" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
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
        </div>

        {/* 6-Card Grid chuẩn Cloud Server */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 hover:border-[var(--vidc-color-brand-red)] hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
