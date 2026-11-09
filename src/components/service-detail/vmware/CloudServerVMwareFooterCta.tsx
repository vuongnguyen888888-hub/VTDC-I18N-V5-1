import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface CloudServerVMwareFooterCtaProps {
  onOpenQuote: () => void;
}

export const CloudServerVMwareFooterCta: React.FC<CloudServerVMwareFooterCtaProps> = ({
  onOpenQuote,
}) => {
  return (
    <section 
      id="cta-section"
      className="relative py-16 md:py-20 bg-gradient-to-br from-[color:var(--vidc-color-brand-red)] via-[color:var(--vidc-color-brand-red-dark)] to-[color:var(--vidc-color-brand-red-deep)] text-white overflow-hidden"
    >
      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10 text-center max-w-4xl space-y-6">
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Sẵn Sàng Tối Ưu Hóa Hạ Tầng Số Cùng Viettel Cloud Server?
        </h2>

        <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
          Đội ngũ chuyên gia Viettel IDC luôn sẵn sàng đồng hành tư vấn kiến trúc giải pháp phù hợp nhất và hỗ trợ doanh nghiệp triển khai nhanh chóng.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <VIDCAnchor
            href="https://auth.vtidc-test.com/?redirect_uri=https%3A%2F%2Fvconsole.vtidc-test.com%2F%23%2Fprovision%3Fservice%3Dcloud-server"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[color:var(--vidc-color-brand-red)] hover:bg-slate-100 active:bg-slate-200 font-extrabold text-base transition-all shadow-xl flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-white min-h-[48px]"
          >
            <span>Đăng ký ngay</span>
            <ArrowRight className="w-5 h-5 text-[color:var(--vidc-color-brand-red)]" />
          </VIDCAnchor>

          <VIDCAnchor
            href="https://auth.vtidc-test.com/?redirect_uri=https%3A%2F%2Fvconsole.vtidc-test.com%2F%23%2Fprovision%3Fservice%3Dcloud-server"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white border border-white/30 font-extrabold text-base backdrop-blur-md transition-all shadow-lg flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-white min-h-[48px]"
          >
            <span>Dùng thử miễn phí</span>
          </VIDCAnchor>

          <VIDCAnchor
            href="tel:18008088"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/30 backdrop-blur-md transition-all min-h-[48px]"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Hotline 1800 8088</span>
          </VIDCAnchor>
        </div>

      </div>
    </section>
  );
};

