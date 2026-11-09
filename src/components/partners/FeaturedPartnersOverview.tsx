import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck, 
  Database, 
  Network, 
  HardDrive, 
  Server,
  Filter,
  Sparkles,
  Search
} from 'lucide-react';
import { FEATURED_PARTNERS, FeaturedPartner } from '../../data/featuredPartnersData';
import { VIDCNativeButton, VIDCNativeInput } from '@/components/ui/VIDCNativeControls';


export const FeaturedPartnersOverview: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Tất cả đối tác' },
    { id: 'Điện toán AI & Bán dẫn', label: 'AI & Bán dẫn', icon: Cpu },
    { id: 'Hạ tầng tính toán & Ảo hóa', label: 'Ảo hóa & Máy chủ', icon: Server },
    { id: 'Mạng & Viễn thông', label: 'Mạng & DC', icon: Network },
    { id: 'Bảo mật & An toàn thông tin', label: 'Bảo mật & WAF', icon: ShieldCheck },
    { id: 'Sao lưu & Phục hồi dữ liệu', label: 'Sao lưu & DR', icon: HardDrive },
    { id: 'Cơ sở dữ liệu & Ứng dụng Doanh nghiệp', label: 'CSDL & Bản quyền', icon: Database },
  ];

  const filteredPartners = FEATURED_PARTNERS.filter((partner) => {
    const matchesCat = selectedCategory === 'all' || partner.category === selectedCategory;
    const matchesSearch = 
      partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.scope.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-10">
      {/* Header Introduction */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-100">
        <div className="lg:col-span-8 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[10px] font-black uppercase text-red-600 tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> LIÊN MINH CÔNG NGHỆ TOÀN CẦU
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            Mạng Lưới Các Đối Tác Công Nghệ Hàng Đầu Thế Giới
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            Viettel IDC tự hào đồng hành cùng các tập đoàn công nghệ tiên phong toàn cầu về chip bán dẫn, hạ tầng tính toán AI, phần mềm ảo hóa và bảo mật thông tin. Chúng tôi kết hợp sức mạnh công nghệ quốc tế với quy mô hạ tầng Trung tâm dữ liệu &amp; Đám mây chuẩn quốc tế tại Việt Nam.
          </p>
        </div>
        <div className="lg:col-span-4 bg-slate-50 border border-slate-200/70 p-5 rounded-2xl">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-3 bg-white rounded-xl shadow-xs border border-slate-100">
              <span className="block text-2xl font-black text-red-600">10+</span>
              <span className="text-[11px] font-bold text-slate-500 uppercase mt-0.5 block">Hãng Global</span>
            </div>
            <div className="p-3 bg-white rounded-xl shadow-xs border border-slate-100">
              <span className="block text-2xl font-black text-slate-900">100%</span>
              <span className="text-[11px] font-bold text-slate-500 uppercase mt-0.5 block">Chính hãng</span>
            </div>
            <div className="p-3 bg-white rounded-xl shadow-xs border border-slate-100">
              <span className="block text-2xl font-black text-slate-900">15+</span>
              <span className="text-[11px] font-bold text-slate-500 uppercase mt-0.5 block">Năm hợp tác</span>
            </div>
            <div className="p-3 bg-white rounded-xl shadow-xs border border-slate-100">
              <span className="block text-2xl font-black text-red-600">99.99%</span>
              <span className="text-[11px] font-bold text-slate-500 uppercase mt-0.5 block">SLA cam kết</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <VIDCNativeButton
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-red-600 text-white border-red-600 shadow-xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </VIDCNativeButton>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <VIDCNativeInput
            type="text"
            placeholder="Tìm kiếm đối tác..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 bg-slate-50/70 border border-slate-200 rounded-full text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-red-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPartners.map((partner) => (
          <PartnerDetailCard key={partner.id} partner={partner} />
        ))}
      </div>

      {filteredPartners.length === 0 && (
        <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200/60">
          <p className="text-sm font-semibold text-slate-500">Không tìm thấy đối tác phù hợp với từ khóa.</p>
          <VIDCNativeButton
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="mt-3 px-4 py-1.5 text-xs font-bold text-red-600 bg-red-50 rounded-full hover:bg-red-100 transition-colors"
          >
            Xem tất cả đối tác
          </VIDCNativeButton>
        </div>
      )}
    </div>
  );
};

const PartnerDetailCard: React.FC<{ partner: FeaturedPartner }> = ({ partner }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-slate-50/60 border border-slate-200/80 rounded-2xl p-6 hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
      <div>
        {/* Top Header: Logo + Badges */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200/60">
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-xl bg-white border border-slate-200/80 p-2.5 flex items-center justify-center shadow-xs shrink-0 group-hover:border-red-200 transition-colors">
              {!imgError ? (
                <img alt={partner.name} src={partner.logoUrl} onError={() => setImgError(true)}
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <Building2 className="w-6 h-6 text-slate-400" />
              )}
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                {partner.name}
              </h3>
              <span className="text-[11px] font-semibold text-slate-500 block">
                {partner.category}
              </span>
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-red-50 text-red-700 border border-red-100">
              {partner.badge}
            </span>
            <span className="text-[10px] text-slate-400 block font-medium mt-1">
              Hợp tác: {partner.collaborationYear}
            </span>
          </div>
        </div>

        {/* Summary Description */}
        <p className="text-xs text-slate-600 leading-relaxed font-medium mt-4">
          {partner.summary}
        </p>

        {/* Highlights Checklist */}
        <div className="mt-4 space-y-2">
          {partner.highlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scope Footer */}
      <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
        <div className="text-slate-500">
          <span className="font-bold text-slate-700">Phạm vi: </span>
          <span className="font-medium text-slate-600">{partner.scope}</span>
        </div>
      </div>
    </div>
  );
};
