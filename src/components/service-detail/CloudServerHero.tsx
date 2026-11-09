import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface CloudServerHeroProps {
  currentMarket: SEAMarket;
  onOpenQuote: () => void;
  onNavigateHome: () => void;
}

export const CloudServerHero: React.FC<CloudServerHeroProps> = ({
  currentMarket,
  onOpenQuote,
  onNavigateHome,
}) => {
  const isKhmer = currentMarket?.code === 'vcloudia';
  const isLaos = currentMarket?.code !== 'vn' && !isKhmer;

  const t = {
    home: isKhmer ? 'ទំព័រដើម' : isLaos ? 'Home' : 'Trang chủ',
    services: isKhmer ? 'សេវាកម្ម' : isLaos ? 'Services' : 'Dịch vụ',
    compute: isKhmer ? 'កុំព្យូទ័រពពក' : isLaos ? 'Cloud Compute' : 'Điện toán đám mây',
    mainTitle: 'Viettel Cloud Server',
    subTitle: isKhmer 
      ? 'ម៉ាស៊ីននិម្មិតដំណើរការខ្ពស់ សុវត្ថិភាព និងសន្សំសំចៃថ្លៃដើម' 
      : isLaos 
      ? 'High performance, secure & cost-optimized virtual private servers' 
      : 'Máy chủ ảo hiệu năng cao, an toàn bảo mật & tiết kiệm chi phí',
    desc: isKhmer
      ? 'ហេដ្ឋារចនាសម្ព័ន្ធម៉ាស៊ីននិម្មិតពពកស្តង់ដារអន្តរជាតិ TIA-942 Rated 3 ជាមួយនឹងសមត្ថភាពបត់បែន ការប្តេជ្ញាចិត្ត SLA 99.99% និងការគាំទ្របច្ចេកទេស ២៤/៧/៣៦៥។'
      : isLaos
      ? 'International standard TIA-942 Rated 3 cloud virtual server infrastructure with flexible scalability, 99.99% SLA commitment, PCI-DSS / ISO 27001 security and 24/7/365 technical support.'
      : 'Hạ tầng máy chủ ảo đám mây chuẩn quốc tế TIA-942 Rated 3 với khả năng co giãn linh hoạt, cam kết SLA 99.99%, bảo mật PCI-DSS / ISO 27001 và hỗ trợ kỹ thuật 24/7/365.',
    freeTrial: isKhmer ? 'សាកល្បងឥតគិតថ្លៃ' : isLaos ? 'Free trial' : 'Trải nghiệm miễn phí',
    contact: isKhmer ? 'ស្នើសុំប្រឹក្សា' : isLaos ? 'Request consultation' : 'Đăng ký tư vấn',
  };

  return (
    <section 
      id="hero-section"
      className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden"
    >
      {/* Background Image - No dark overlay per request */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img alt="Viettel Cloud Server" src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1787075679/banner_2_yyafrd.jpg" className="w-full h-full object-cover object-center" />
      </div>

      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="inline-flex items-center flex-wrap gap-2 text-xs text-slate-200">
            <li>
              <VIDCNativeButton 
                onClick={onNavigateHome} 
                className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] rounded px-0.5 drop-shadow"
              >
                {t.home}
              </VIDCNativeButton>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-slate-200 drop-shadow">{t.services}</span>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-slate-200 drop-shadow">{t.compute}</span>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-[var(--vidc-color-brand-red)] font-bold drop-shadow" aria-current="page">Viettel Cloud Server</span>
            </li>
          </ol>
        </nav>

        {/* Main Hero Header Grid */}
        <div className="max-w-3xl space-y-4 pt-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            {t.mainTitle}
          </h1>

          <p className="text-lg sm:text-xl font-semibold text-slate-200">
            {t.subTitle}
          </p>
          
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-1">
            {t.desc}
          </p>

          {/* Group CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <VIDCAnchor
              href="https://auth.vtidc-test.com/?redirect_uri=https%3A%2F%2Fvconsole.vtidc-test.com%2F%23%2Fprovision%3Fservice%3Dcloud-server"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-base transition-all shadow-lg shadow-[var(--vidc-color-brand-red)]/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--vidc-color-brand-red)] min-h-[44px]"
            >
              <span>{t.freeTrial}</span>
              <ArrowRight className="w-5 h-5" />
            </VIDCAnchor>

            <VIDCNativeButton
              type="button"
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 hover:border-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-white min-h-[44px]"
            >
              <span>{t.contact}</span>
            </VIDCNativeButton>
          </div>
        </div>

      </div>
    </section>
  );
};
