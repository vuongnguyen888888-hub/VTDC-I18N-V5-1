import React from 'react';
import { 
  CheckCircle, 
  TrendingUp, 
  DollarSign, 
  ShieldCheck, 
  Workflow, 
  Zap, 
  Award,
  Sparkles
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface CloudFileStorageBenefitsProps {
  currentMarket?: SEAMarket;
}

export const CloudFileStorageBenefits: React.FC<CloudFileStorageBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'BUSINESS BENEFITS & VALUE PROPOSITION' : 'LỢI ÍCH DOANH NGHIỆP',
    headline: isLaos ? 'Breakthrough Value for Digital Enterprises' : 'Giá Trị Đột Phá Dành Cho Doanh Nghiệp Số',
    desc: isLaos
      ? 'Viettel Cloud File Storage empowers organizations to eliminate storage bottlenecks, streamline collaboration, and optimize total cost of ownership (TCO).'
      : 'Viettel Cloud File Storage giúp doanh nghiệp xóa bỏ rào cản lưu trữ vật lý, thúc đẩy chia sẻ dữ liệu cộng tác mượt mà và tối ưu hóa chi phí đầu tư.',
    pillars: [
      {
        icon: Workflow,
        title: isLaos ? 'Simple Connection & Effortless Integration' : 'Kết Nối Đơn Giản & Dễ Dàng Tích Hợp',
        desc: isLaos
          ? 'Fast file system creation and setup, instantly compatible with existing enterprise applications without any source code modification.'
          : 'Khởi tạo và cấu hình hệ thống file nhanh chóng, tương thích ngay với các ứng dụng doanh nghiệp hiện hữu mà không cần viết lại mã nguồn.',
      },
      {
        icon: Zap,
        title: isLaos ? 'Superior Performance & Instant Elasticity' : 'Hiệu Năng Vượt Trội & Co Giãn Tức Thì',
        desc: isLaos
          ? 'Throughput and capacity expand rapidly on-demand, flexibly accommodating any workload spikes and data growth surges.'
          : 'Thông lượng và dung lượng có khả năng nâng cấp nhanh chóng, linh hoạt đáp ứng mọi biến động tải của khối lượng công việc.',
      },
      {
        icon: DollarSign,
        title: isLaos ? 'Comprehensive TCO Cost Optimization' : 'Tiết Kiệm Chi Phí Toàn Diện (TCO)',
        desc: isLaos
          ? 'Eliminates upfront storage hardware CapEx, reduces maintenance and upgrade overhead, minimizes resource waste with zero post-sale support fees.'
          : 'Tiết kiệm chi phí đầu tư phần cứng lưu trữ ban đầu (CapEx), chi phí nâng cấp, vận hành và bảo dưỡng thiết bị, không lãng phí tài nguyên, không chi phí hỗ trợ sau bán hàng.',
      },
      {
        icon: ShieldCheck,
        title: isLaos ? 'High Data Security & Availability' : 'An Toàn Dữ Liệu & Độ Sẵn Sàng Cao',
        desc: isLaos
          ? 'Engineered with strict security governance and access permissions. 100% data hosted in Vietnam adhering fully to legal and data sovereignty standards.'
          : 'Hệ thống được thiết kế đảm bảo an toàn về bảo mật, phân quyền nghiêm ngặt, dữ liệu đặt 100% tại Việt Nam đáp ứng đầy đủ quy định pháp lý.',
      },
    ],
  };

  return (
    <section id="benefits" className="py-16 md:py-24 bg-[var(--vidc-legacy-hex-f4f4f4)] text-slate-800 border-t border-slate-200">
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[var(--vidc-color-brand-red)] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-snug">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            {t.desc}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>Cam kết chất lượng dịch vụ</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
