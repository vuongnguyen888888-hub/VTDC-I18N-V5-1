import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, Database } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface CloudMigrationOverviewProps {
  currentMarket?: SEAMarket;
}

export const CloudMigrationOverview: React.FC<CloudMigrationOverviewProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isLaos 
      ? 'Comprehensive Enterprise Workload & Data Cloud Migration'
      : 'Giải pháp dịch chuyển hạ tầng lên đám mây toàn diện',
    desc1: isLaos
      ? 'Viettel Cloud Migration (VCM) is an enterprise-grade migration solution that smoothly and securely transitions servers, virtual machines, and databases from on-premises, foreign public clouds, or other providers to Viettel IDC Cloud.'
      : 'Viettel Cloud Migration (VCM) là giải pháp dịch chuyển hệ thống máy chủ, máy ảo và dữ liệu từ môi trường On-Premise, Public Cloud (AWS, Azure, GCP...) hoặc nhà cung cấp khác về hạ tầng điện toán đám mây của Viettel IDC.',
    desc2: isLaos
      ? 'Operated on international Tier 3 standard (TIA-942) Data Centers with dedicated high-speed transmission pipelines and automated runbooks, guaranteeing absolute zero-loss data integrity and full compliance with Decree 13/2023/ND-CP.'
      : 'Vận hành trên hạ tầng Data Center đạt chuẩn Tier 3 (TIA-942) của Viettel IDC, kết hợp kênh truyền dẫn tốc độ cao riêng biệt và quy trình chuẩn hóa, đảm bảo an toàn dữ liệu tuyệt đối, tuân thủ chặt chẽ Nghị định 13/2023/NĐ-CP và tối thiểu hóa thời gian gián đoạn.',
    highlight1Title: isLaos ? 'Optimal Migration Cost' : 'Tối ưu chi phí chuyển đổi',
    highlight1Desc: isLaos
      ? 'Pay only for actual migration days and storage utilized; cut heavy upfront hardware procurement and unpredictable foreign currency egress fees.'
      : 'Chỉ chi trả theo số ngày thực hiện di chuyển và dung lượng lưu trữ thực tế; cắt giảm chi phí đầu tư phần cứng và loại bỏ phí ngoại tệ.',
    highlight2Title: isLaos ? 'Full Regulatory & Decree 13 Compliance' : 'Tuân thủ pháp lý & Nghị định 13',
    highlight2Desc: isLaos
      ? 'Repatriate data to domestic certified data centers, meeting all legal mandates on personal data protection and national cybersecurity.'
      : 'Đưa dữ liệu về Data Center trong nước, đáp ứng toàn diện quy định về bảo vệ dữ liệu cá nhân theo Nghị định 13/2023/NĐ-CP và Luật An ninh mạng.',
    highlight3Title: isLaos ? 'Zero-Loss Guarantee & Minimal Downtime' : 'Cam kết Zero-Loss & Tối thiểu Downtime',
    highlight3Desc: isLaos
      ? 'Continuous data synchronization running in parallel during off-peak hours ensures uninterrupted core business operations throughout cutover.'
      : 'Đồng bộ dữ liệu phân kỳ và chuyển đổi vào khung giờ thấp điểm, duy trì hoạt động kinh doanh liên tục và cam kết toàn vẹn dữ liệu.',
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
          
          {/* Left Column (Solution Description + 3 Key Highlights) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              {t.desc1}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {t.desc2}
            </p>

            {/* 3 Key Highlights matching Cloud Server */}
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

          {/* Right Column (Video YouTube Embed or Architecture Presentation) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/8kL9kM3M2W4?autoplay=0&rel=0"
                title="Viettel Cloud Migration Overview"
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
