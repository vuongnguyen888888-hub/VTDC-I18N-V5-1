import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  Plus,
  Minus,
  BookOpen, 
  Headset, 
  ArrowUpRight,
  Search,
  Zap,
  ShieldCheck,
  DollarSign,
  Award,
  Cloud,
  Layers,
  Shield,
  Cpu,
  Server,
  Database,
  Globe,
  Mail,
  Lock,
  HardDrive,
  Activity,
  FileCode,
  Network
} from 'lucide-react';
import { SEAMarket } from '../layout/UtilityBar';
import { useLanguage } from '../../context/LanguageContext';
import { ServiceDetailConfig } from '../../types/serviceDetail';
import { VCSSectionNavigation } from './CloudServerStickyNav';
import { CloudServerQuoteModal } from './CloudServerQuoteModal';
import { VIDCNativeButton, VIDCNativeInput } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface StandardServiceDetailPageProps {
  config: ServiceDetailConfig;
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
  onNavigatePath?: (path: string) => void;
}

export const StandardServiceDetailPage: React.FC<StandardServiceDetailPageProps> = ({
  config,
  currentMarket,
  onNavigateHome,
  onNavigatePath,
}) => {
  const { currentLanguage } = useLanguage();
  const isNonVn = currentLanguage !== 'vn' && currentLanguage !== 'vi';

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteNotes, setQuoteNotes] = useState<string>('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [domainQuery, setDomainQuery] = useState('');
  
  // Interactive control states for pricing tab selection
  const [selectedControlOptions, setSelectedControlOptions] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    if (config.pricing?.controls) {
      config.pricing.controls.forEach(ctrl => {
        initial[ctrl.id] = ctrl.defaultSelected;
      });
    }
    return initial;
  });

  // Reset when config changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (config.pricing?.controls) {
      const initial: Record<string, string> = {};
      config.pricing.controls.forEach(ctrl => {
        initial[ctrl.id] = ctrl.defaultSelected;
      });
      setSelectedControlOptions(initial);
    }
    setOpenFaqIndex(0);
    // Keep the server-authoritative, localized Next.js metadata for non-Vietnamese routes.
    if (!isNonVn) document.title = config.pageTitle;
  }, [config.id, isNonVn]);

  const handleOpenQuote = (customNote?: string) => {
    setQuoteNotes(customNote || `Đăng ký tư vấn giải pháp ${config.hero.headline}`);
    setIsQuoteModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  // Filter pricing tables based on controls
  const visibleTables = (config.pricing?.tables || []).filter(table => {
    if (!table.applicableCondition) return true;
    for (const [key, value] of Object.entries(table.applicableCondition)) {
      if (selectedControlOptions[key] !== value) {
        return false;
      }
    }
    return true;
  });

  // Dynamic icon helper for features & benefits
  const getFeatureIcon = (index: number) => {
    const icons = [Zap, Shield, Server, Database, Layers, Globe, Mail, Lock, Cpu, HardDrive, Activity, FileCode, Network];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-5 h-5" />;
  };

  const getBenefitIcon = (index: number) => {
    const icons = [Zap, ShieldCheck, DollarSign, Headset, Award, Cloud];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-5 h-5" />;
  };

  const getRelatedIcon = (index: number) => {
    const icons = [Database, Shield, Layers, Server, Cloud, Network];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-5 h-5" />;
  };

  // High quality images for use cases
  const getUseCaseImage = (index: number) => {
    const images = [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
    ];
    return images[index % images.length];
  };

  return (
    <div
      id={`service-detail-${config.id}`}
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku={config.sku}
      data-vidc-pillar={config.pillar}
    >
      {/* ========================================================================= */}
      {/* SECTION 0: HERO SECTION (Standard Cloud Server UI)                       */}
      {/* ========================================================================= */}
      <section
        id="hero-section"
        className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden"
      >
        {/* Background Image - Exactly like CloudServerHero */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img alt={config.hero.headline} src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1787075679/banner_2_yyafrd.jpg" className="w-full h-full object-cover object-center" />
        </div>

        <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="inline-flex items-center flex-wrap gap-2 text-xs text-slate-200">
              {config.hero.breadcrumb.map((crumb, idx) => {
                const isLast = idx === config.hero.breadcrumb.length - 1;
                return (
                  <React.Fragment key={idx}>
                    {idx > 0 && (
                      <li className="text-slate-400 drop-shadow">
                        <ChevronRight className="w-3 h-3" />
                      </li>
                    )}
                    <li>
                      {crumb.path && !isLast ? (
                        <VIDCNativeButton
                          onClick={() => {
                            if (crumb.path === '/') {
                              onNavigateHome();
                            } else if (onNavigatePath && crumb.path) {
                              onNavigatePath(crumb.path);
                            }
                          }}
                          className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] rounded px-0.5 drop-shadow"
                        >
                          {crumb.name}
                        </VIDCNativeButton>
                      ) : (
                        <span
                          className={isLast ? 'text-[var(--vidc-color-brand-red)] font-bold drop-shadow' : 'text-slate-200 drop-shadow'}
                          aria-current={isLast ? 'page' : undefined}
                        >
                          {crumb.name}
                        </span>
                      )}
                    </li>
                  </React.Fragment>
                );
              })}
            </ol>
          </nav>

          {/* Eyebrow Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-red-500/10 text-[var(--vidc-color-brand-red)] font-bold text-xs uppercase tracking-widest px-3.5 py-1 rounded-full border border-red-500/20 w-max inline-flex items-center">
              {config.hero.eyebrow}
            </span>
          </div>

          {/* Main Hero Content */}
          <div className="max-w-3xl space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              {config.hero.headline}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {config.hero.subheading}
            </p>

            {/* Optional Domain Search Bar (for Domain service) */}
            {config.hero.hasDomainSearch && (
              <div className="pt-2 pb-1 max-w-xl">
                <div className="p-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col sm:flex-row items-center gap-2 shadow-2xl">
                  <div className="relative flex-1 w-full">
                    <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <VIDCNativeInput
                      type="text"
                      value={domainQuery}
                      onChange={(e) => setDomainQuery(e.target.value)}
                      placeholder={isNonVn ? "Enter the domain name to look up (e.g., viettelidc.com.vn)..." : "Nhập tên miền bạn muốn tra cứu (vd: viettelidc.com.vn)..."}
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
                    />
                  </div>
                  <VIDCNativeButton
                    onClick={() => handleOpenQuote(`${isNonVn ? 'Check & Register domain:' : 'Kiểm tra & Đăng ký tên miền:'} ${domainQuery || 'None'}`)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 whitespace-nowrap min-h-[44px]"
                  >
                    <span>{isNonVn ? 'Check Domain' : 'Kiểm tra tên miền'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </VIDCNativeButton>
                </div>
              </div>
            )}

            {/* Group CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <VIDCNativeButton
                id="hero-primary-cta"
                onClick={() => handleOpenQuote()}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-base transition-all shadow-lg shadow-[var(--vidc-color-brand-red)]/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--vidc-color-brand-red)] min-h-[44px]"
              >
                <span>{config.hero.primaryCta.text}</span>
                <ArrowRight className="w-5 h-5" />
              </VIDCNativeButton>

              <VIDCNativeButton
                id="hero-secondary-cta"
                onClick={() => {
                  if (config.hero.secondaryCta.action === 'features' || config.hero.secondaryCta.text.toLowerCase().includes('tính năng')) {
                    scrollToSection('features');
                  } else if (config.hero.secondaryCta.action === 'quote') {
                    handleOpenQuote();
                  } else if (config.hero.secondaryCta.action === 'link' && config.hero.secondaryCta.link) {
                    if (onNavigatePath) onNavigatePath(config.hero.secondaryCta.link);
                  } else {
                    scrollToSection('pricing');
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 hover:border-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-white min-h-[44px]"
              >
                <span>{config.hero.secondaryCta.text}</span>
              </VIDCNativeButton>
            </div>

            {/* Stat Row (e.g., for vDBS / Workspace) */}
            {config.hero.statRow && config.hero.statRow.length > 0 && (
              <div className="pt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl border-t border-white/10 mt-6">
                {config.hero.statRow.map((stat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="text-xl sm:text-2xl font-extrabold text-[var(--vidc-color-brand-red)]">{stat.number}</div>
                    <div className="text-xs font-bold text-white mt-0.5">{stat.label}</div>
                    <div className="text-[11px] text-slate-300 mt-1 leading-snug">{stat.desc}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* STICKY SECTION NAV                                                        */}
      {/* ========================================================================= */}
      <VCSSectionNavigation 
        brandLabel={config.hero.headline.split('–')[0].trim()} 
        currentMarket={currentMarket}
        items={config.navItems}
      />

      {/* ========================================================================= */}
      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview)                                  */}
      {/* ========================================================================= */}
      <section
        id="overview"
        className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
      >
        <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* Section Eyebrow Badge & H2 Headline */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
              {config.overview.eyebrow}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
              {config.overview.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Cột Trái (Mô tả giải pháp & Key Highlights) */}
            <div className="lg:col-span-6 space-y-6">
              {config.overview.leftDescription.map((p, idx) => (
                <p 
                  key={idx} 
                  className={idx === 0 
                    ? "text-base sm:text-lg text-slate-700 leading-relaxed font-medium"
                    : "text-sm sm:text-base text-slate-600 leading-relaxed"
                  }
                >
                  {p}
                </p>
              ))}

              {/* Key Highlights */}
              <div className="space-y-4 pt-2">
                {config.overview.highlights.map((h, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{h.title}</h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {h.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cột Phải (Video 16:9 hoặc Minh họa Kiến trúc) */}
            <div className="lg:col-span-6">
              {config.overview.architectureAscii ? (
                <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-2xl p-6 text-white space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                      <span className="text-xs font-mono text-slate-400 ml-2">Viettel Workspace Architecture</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">
                      Tier III DC
                    </span>
                  </div>

                  {/* Visual Architecture Layers */}
                  <div className="space-y-3 pt-1">
                    {/* Layer 1: Client Devices */}
                    <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center">
                      <div className="text-xs font-extrabold text-white tracking-wide uppercase">
                        Người Dùng Doanh Nghiệp / Thiết Bị Đầu Cuối
                      </div>
                      <div className="text-[11px] text-slate-300 mt-0.5">
                        PC · Laptop · Tablet · Smartphone (Web Browser & App)
                      </div>
                    </div>

                    {/* Connector */}
                    <div className="flex items-center justify-center gap-2 text-[11px] text-red-400 font-mono py-0.5">
                      <span>↓</span>
                      <span className="bg-red-950/80 border border-red-800/60 px-2.5 py-0.5 rounded-full text-[10px] text-red-300">
                        Kết nối bảo mật SSL / TLS đa kênh
                      </span>
                      <span>↓</span>
                    </div>

                    {/* Layer 2: Workspace Platform */}
                    <div className="p-4 rounded-xl bg-slate-800/90 border border-red-500/30 space-y-2.5">
                      <div className="text-xs font-extrabold text-red-400 uppercase text-center tracking-wider">
                        Viettel Workspace Unified Platform
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                        {['Web Hosting', 'Email Domain', 'Viettel Drive', 'Online Office', 'Tasks & Lịch'].map((mod, mIdx) => (
                          <div key={mIdx} className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-center">
                            <div className="text-[11px] font-bold text-slate-200">{mod}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Connector */}
                    <div className="flex items-center justify-center text-slate-500 text-xs py-0.5">
                      <span>↓</span>
                    </div>

                    {/* Layer 3: Infrastructure */}
                    <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1.5">
                      <div className="text-xs font-extrabold text-emerald-400 uppercase tracking-wide">
                        Hạ Tầng Data Center Viettel IDC (ANSI/TIA-942 Tier III)
                      </div>
                      <ul className="text-[11px] text-slate-300 space-y-1 list-disc list-inside">
                        <li>Lưu trữ phân tán, phân quyền IAM & Mã hóa bảo mật dữ liệu</li>
                        <li>Cổng Antivirus / Antispam Gateway & Giám sát vận hành 24/7/365</li>
                        <li>Đáp ứng 100% quy định lưu trữ dữ liệu tại lãnh thổ Việt Nam</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
                  <iframe
                    className="w-full h-full border-0"
                    src="https://www.youtube.com/embed/8kL9kM3M2W4?autoplay=0&rel=0"
                    title={`${config.hero.headline} Overview`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: BẢNG GIÁ & GÓI DỊCH VỤ (#pricing) (Optional)                   */}
      {/* ========================================================================= */}
      {config.pricing && (config.pricing.tables?.length || config.pricing.cards?.length || config.pricing.customCta) && (
      <section
        id="pricing"
        className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
      >
        <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
              {config.pricing.eyebrow}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
              {config.pricing.headline}
            </h2>
            {config.pricing.note && (
              <p className="text-xs sm:text-sm text-slate-500 mt-2 italic">
                {config.pricing.note}
              </p>
            )}
          </div>

          {/* Interactive Controls / Filters */}
          {config.pricing.controls && config.pricing.controls.length > 0 && (
            <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-wrap items-center justify-center gap-6">
              {config.pricing.controls.map((ctrl) => (
                <div key={ctrl.id} className="flex items-center flex-wrap gap-2.5">
                  <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                    {ctrl.label}:
                  </span>
                  <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200">
                    {ctrl.options.map((opt) => {
                      const isSelected = selectedControlOptions[ctrl.id] === opt.id;
                      return (
                        <VIDCNativeButton
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setSelectedControlOptions(prev => ({
                              ...prev,
                              [ctrl.id]: opt.id
                            }));
                          }}
                          className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                            isSelected
                              ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-xs'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                          }`}
                        >
                          {opt.label}
                        </VIDCNativeButton>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pricing Tables */}
          <div className="space-y-8">
            {visibleTables.map((table, tIdx) => (
              <div
                key={tIdx}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden"
              >
                {/* Table Title Header */}
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base text-slate-800 uppercase tracking-wide">
                      {table.title}
                    </h3>
                    {table.subtitle && (
                      <p className="text-xs text-slate-500 mt-0.5">{table.subtitle}</p>
                    )}
                  </div>
                  {table.badge && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200">
                      {table.badge}
                    </span>
                  )}
                </div>

                {/* Table Content */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50/75 border-b border-slate-200 text-[11px] font-extrabold text-slate-600 uppercase tracking-wider">
                        {table.columns.map((col, cIdx) => (
                          <th
                            key={cIdx}
                            className={`px-5 py-3.5 ${
                              col.align === 'center' ? 'text-center' : col.align === 'right' ? 'text-right' : 'text-left'
                            }`}
                          >
                            {col.header}
                          </th>
                        ))}
                        <th className="px-5 py-3.5 text-center">
                          {isNonVn ? 'Action' : 'Tùy chọn'}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                      {table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-red-50/30 transition-colors">
                          {table.columns.map((col, cIdx) => {
                            const val = row[col.key];
                            return (
                              <td
                                key={cIdx}
                                className={`px-5 py-3.5 ${
                                  col.align === 'center' ? 'text-center' : col.align === 'right' ? 'text-right' : 'text-left'
                                } ${col.isPrice ? 'font-extrabold text-[var(--vidc-color-brand-red)] text-sm sm:text-base' : 'text-slate-700'}`}
                              >
                                {val}
                              </td>
                            );
                          })}
                          <td className="px-5 py-3.5 text-center">
                            <VIDCNativeButton
                              onClick={() => handleOpenQuote(`${isNonVn ? 'Register package:' : 'Đăng ký gói:'} ${row.name || table.title}`)}
                              className="px-3.5 py-1.5 rounded-lg bg-[var(--vidc-color-brand-red)] text-white hover:bg-[var(--vidc-legacy-hex-b30026)] font-bold text-xs transition-colors shadow-xs cursor-pointer"
                            >
                              {isNonVn ? 'Register' : 'Đăng ký'}
                            </VIDCNativeButton>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          {/* Custom CTA Box */}
          {config.pricing?.customCta && (
            <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <h4 className="font-extrabold text-base sm:text-lg text-[var(--vidc-legacy-hex-222225)]">
                  {config.pricing.customCta.text}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500">
                  Đội ngũ chuyên gia kiến trúc giải pháp của Viettel IDC sẵn sàng đồng hành khảo sát và dự toán chi phí tối ưu nhất.
                </p>
              </div>
              <VIDCNativeButton
                onClick={() => handleOpenQuote(config.pricing?.customCta?.notesPlaceholder)}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white font-bold text-xs sm:text-sm transition-all whitespace-nowrap shadow-md shrink-0 flex items-center gap-2 min-h-[44px]"
              >
                <span>{config.pricing.customCta.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </VIDCNativeButton>
            </div>
          )}

        </div>
      </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 3: TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET (#features)                    */}
      {/* ========================================================================= */}
      <section
        id="features"
        className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
      >
        <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
              {config.features.eyebrow}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
              {config.features.headline}
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {config.features.cards.map((card, idx) => (
              <div
                key={card.id}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[var(--vidc-color-brand-red)] hover:shadow-lg transition-all duration-300 space-y-3 group"
              >
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                  {getFeatureIcon(idx)}
                </div>
                <h3 className="font-extrabold text-base text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Process Steps (e.g. Quy trình cấp phát chứng thư SSL 6 bước) */}
          {config.features.processSteps && (
            <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-[var(--vidc-legacy-hex-f8f9fa)] border border-slate-200">
              <h3 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)] mb-6 text-center">
                Quy Trình Triển Khai Dịch Vụ Chuẩn Hóa
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {config.features.processSteps.map((step) => (
                  <div key={step.step} className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 relative shadow-2xs">
                    <span className="w-6 h-6 rounded-full bg-[var(--vidc-color-brand-red)] text-white text-xs font-extrabold flex items-center justify-center">
                      {step.step}
                    </span>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-800">{step.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Spec Sheet Table */}
          {config.features.specs && (
            <div className="max-w-4xl mx-auto rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-sm">
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
                <h3 className="font-extrabold text-sm sm:text-base text-slate-800 uppercase tracking-wide">
                  {config.features.specTableTitle || 'Bảng Thông Số Kỹ Thuật (Technical Specifications)'}
                </h3>
              </div>
              <div className="divide-y divide-slate-100">
                {config.features.specs.map((s, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-12 px-6 py-3.5 text-xs sm:text-sm hover:bg-slate-50/60 even:bg-slate-50/30 transition-colors">
                    <div className="md:col-span-4 font-bold text-slate-800">{s.category}</div>
                    <div className="md:col-span-8 text-slate-600 mt-1 md:mt-0 font-medium">{s.details}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: LỢI ÍCH CỐT LÕI (#benefits) (Matching CloudServerBenefits)      */}
      {/* ========================================================================= */}
      <section
        id="benefits"
        className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
      >
        <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
              {config.benefits.eyebrow}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
              {config.benefits.headline}
            </h2>
          </div>

          {/* Grid Cards Lợi ích */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {config.benefits.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[var(--vidc-color-brand-red)] transition-all space-y-3 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                    {getBenefitIcon(idx)}
                  </div>

                  <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: ỨNG DỤNG THỰC TẾ (#use-cases) (Matching CloudServerUseCases)    */}
      {/* ========================================================================= */}
      <section
        id="use-cases"
        className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
      >
        <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
              {config.useCases.eyebrow}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight mb-2">
              {config.useCases.headline}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Đáp ứng hoàn hảo các yêu cầu nghiệp vụ chuyên biệt từ giai đoạn phát triển thử nghiệm đến hệ thống vận hành thực tế.
            </p>
          </div>

          {/* Grid Card Ứng dụng */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.useCases.items.map((item, idx) => (
              <div
                key={item.id}
                className="rounded-2xl bg-slate-50 border border-slate-200/90 overflow-hidden hover:border-[var(--vidc-color-brand-red)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Banner Image */}
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img alt={item.title} src={getUseCaseImage(idx)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    
                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-600">
                        <span className="font-bold text-slate-800 block mb-0.5">{isNonVn ? 'Challenge / Use Case:' : 'Bối cảnh / Bài toán:'}</span>
                        {item.context}
                      </div>
                      <div className="p-2.5 rounded-lg bg-red-50/60 border border-red-100 text-slate-700">
                        <span className="font-bold text-[var(--vidc-color-brand-red)] block mb-0.5">{isNonVn ? 'Viettel IDC Solution:' : 'Giải pháp Viettel IDC:'}</span>
                        {item.solution}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <VIDCNativeButton
                    onClick={() => scrollToSection('pricing')}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>{isNonVn ? 'View Plan Details' : 'Xem chi tiết gói'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </VIDCNativeButton>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq) (Matching CloudServerFaq UI)          */}
      {/* ========================================================================= */}
      <section
        id="faq"
        className="py-16 md:py-24 bg-white text-[var(--vidc-legacy-hex-111827)]"
      >
        <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          
          {/* Section Title */}
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {config.faq.headline}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
              Giải đáp chi tiết những thắc mắc phổ biến về dịch vụ {config.hero.headline.split('–')[0].trim()}
            </p>
          </div>

          {/* Minimal Accordion List with horizontal line dividers */}
          <div className="border-t border-b border-slate-200 divide-y divide-slate-200">
            {config.faq.items.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="transition-colors">
                  <VIDCNativeButton
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-5 sm:py-6 text-left flex items-center justify-between gap-6 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vidc-color-brand-red)]"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-medium text-slate-800 group-hover:text-slate-900 transition-colors leading-snug">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-slate-800 group-hover:text-slate-900 transition-colors">
                      {isOpen ? (
                        <Minus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                      ) : (
                        <Plus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                      )}
                    </span>
                  </VIDCNativeButton>

                  {isOpen && (
                    <div className="pb-6 pr-8 text-sm sm:text-base text-slate-600 leading-relaxed animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: KHỐI CHUYỂN ĐỔI CHÍNH (Matching CloudServerFooterCta)          */}
      {/* ========================================================================= */}
      <section
        id="cta-section"
        className="relative py-16 md:py-20 bg-gradient-to-br from-[var(--vidc-color-brand-red)] via-[color:var(--vidc-color-brand-red-dark)] to-[color:var(--vidc-color-brand-red-deep)] text-white overflow-hidden"
      >
        <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10 text-center max-w-4xl space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {config.footerCta.headline}
          </h2>

          <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl mx-auto">
            {config.footerCta.subtext}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <VIDCNativeButton
              onClick={() => handleOpenQuote()}
              className="px-8 py-4 rounded-xl bg-white text-[var(--vidc-color-brand-red)] hover:bg-slate-100 active:bg-slate-200 font-extrabold text-base transition-all shadow-xl flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-white min-h-[48px]"
            >
              <span>{config.footerCta.buttonText}</span>
              <ArrowRight className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
            </VIDCNativeButton>

            <VIDCAnchor
              href={`tel:${config.footerCta.hotline.replace(/\s+/g, '')}`}
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white border border-white/30 font-extrabold text-base backdrop-blur-md transition-all shadow-lg flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-white min-h-[48px]"
            >
              <span>Hotline: {config.footerCta.hotline}</span>
            </VIDCAnchor>
          </div>

          <div className="pt-4 text-xs text-white/75 space-y-1">
            <p>Email: {config.footerCta.email} | Website: {config.footerCta.website}</p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: TÀI LIỆU & HỖ TRỢ (#docs-support) (Matching CloudServerDocs)   */}
      {/* ========================================================================= */}
      <section
        id="docs-support"
        className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
      >
        <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
              {config.docsSupport.eyebrow}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight mb-2">
              {config.docsSupport.headline}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Hướng dẫn kỹ thuật chi tiết, tài liệu API và đội ngũ chuyên gia Viettel IDC luôn sẵn sàng hỗ trợ bạn 24/7/365.
            </p>
          </div>

          {/* Grid 2 Card Entry */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: Documentation */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[var(--vidc-color-brand-red)] transition-all duration-300 flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                  {config.docsSupport.documentation.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {config.docsSupport.documentation.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <VIDCAnchor
                  href="https://docs.vtidc-test.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[var(--vidc-color-brand-red)] hover:underline"
                >
                  <span>{config.docsSupport.documentation.linkText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </VIDCAnchor>
              </div>
            </div>

            {/* Card 2: Support Center */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[var(--vidc-color-brand-red)] transition-all duration-300 flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                  <Headset className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                  {config.docsSupport.supportCenter.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {config.docsSupport.supportCenter.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <VIDCNativeButton
                  onClick={() => handleOpenQuote('Yêu cầu hỗ trợ kỹ thuật 24/7')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[var(--vidc-color-brand-red)] hover:underline"
                >
                  <span>{config.docsSupport.supportCenter.linkText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </VIDCNativeButton>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: SẢN PHẨM LIÊN QUAN (Matching CloudServerRelatedProducts)       */}
      {/* ========================================================================= */}
      <section
        id="related-products"
        className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)]"
      >
        <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
              {config.relatedProducts.eyebrow}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
              {config.relatedProducts.headline}
            </h2>
          </div>

          {/* Grid 4 Card Sản Phẩm Liên Quan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.relatedProducts.items.map((prod, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[var(--vidc-color-brand-red)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                    {getRelatedIcon(idx)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">
                      {prod.sku}
                    </span>
                    <h3 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                      {prod.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <VIDCNativeButton
                    onClick={() => {
                      if (onNavigatePath) {
                        onNavigatePath(prod.path);
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>{isNonVn ? 'Learn more' : 'Tìm hiểu thêm'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </VIDCNativeButton>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* LEAD / QUOTE REGISTRATION MODAL                                           */}
      {/* ========================================================================= */}
      <CloudServerQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        selectedConfig={null}
        estimatedTotal={0}
        currency={currentMarket.currency}
        currentMarket={currentMarket}
        customNotes={quoteNotes}
      />
    </div>
  );
};
