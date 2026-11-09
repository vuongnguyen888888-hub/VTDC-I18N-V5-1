import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  Globe2, 
  Layers, 
  Cpu, 
  Server, 
  Lock, 
  Cloud, 
  Database,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { SEAMarket } from '../layout/UtilityBar';
import { FeaturedPartnersOverview } from './FeaturedPartnersOverview';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface FeaturedPartnersPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  onNavigate?: (path: string) => void;
}

export const FeaturedPartnersPage: React.FC<FeaturedPartnersPageProps> = ({
  currentMarket,
  onNavigateHome,
  onNavigate
}) => {
  return (
    <div className="w-full bg-slate-50/30 min-h-screen text-slate-800 font-sans pb-20">
      {/* HERO BANNER */}
      <div className="relative bg-slate-900 overflow-hidden py-16 sm:py-24 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-950/40 via-slate-900 to-slate-950" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-red-500 mb-6">
            <VIDCNativeButton onClick={onNavigateHome} className="hover:text-red-400 transition-colors cursor-pointer">Trang chủ</VIDCNativeButton>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <VIDCNativeButton type="button" className="text-slate-400 hover:text-red-400 transition-colors cursor-pointer text-left" onClick={() => onNavigate?.('/partners/featured/')}>Đối tác</VIDCNativeButton>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-white">Đối tác tiêu biểu</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-black uppercase text-red-400 tracking-wider">
              <Building2 className="w-4 h-4 text-red-400" /> ĐỐI TÁC CÔNG NGHỆ TOÀN CẦU
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Mạng Lưới Đối Tác Tiêu Biểu <br />
              <span className="text-[var(--vidc-color-brand-red)]">Hợp Tác Công Nghệ Hàng Đầu</span>
            </h1>
            <p className="text-base text-slate-300 font-medium leading-relaxed">
              Tổng hợp mạng lưới đối tác công nghệ toàn cầu: Qualcomm, Microsoft, NVIDIA, VMware, Cisco, Dell Technologies, Intel, Fortinet, Veeam, Oracle... cùng kiến tạo hạ tầng đám mây đạt chuẩn quốc tế.
            </p>
          </div>
        </div>
      </div>

      {/* OVERVIEW CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <FeaturedPartnersOverview />
      </div>
    </div>
  );
};
