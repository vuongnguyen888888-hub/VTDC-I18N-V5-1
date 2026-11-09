import React, { useState, useMemo } from 'react';
import { 
  Server, 
  ShieldCheck, 
  Layers, 
  FileText, 
  Clock, 
  Sparkles, 
  Search, 
  SlidersHorizontal, 
  CheckCircle2, 
  CircleHelp,
  Cpu,
  Database,
  Terminal,
  ChevronRight
} from 'lucide-react';
import { VIDCNativeButton, VIDCNativeInput } from '@/components/ui/VIDCNativeControls';


interface BenefitItem {
  text: string;
  subText?: string;
}

interface PromoRow {
  services: string[];
  category: 'infra' | 'kubernetes' | 'workspace' | 'security' | 'storage';
  categoryLabel: string;
  benefits: BenefitItem[];
  notes?: string[];
  transactions: string[];
}

const PROMO_DATA: PromoRow[] = [
  {
    services: ["Colocation (Dịch vụ thuê chỗ đặt thiết bị)"],
    category: "infra",
    categoryLabel: "Thuê chỗ đặt thiết bị",
    benefits: [
      { text: "Chiết khấu 15% khi thanh toán gói từ 12 tháng.", subText: "Áp dụng theo đơn giá niêm yết hiện hành." },
      { text: "Tặng 02 tháng khi thanh toán gói từ 12 tháng.", subText: "Áp dụng theo đơn giá niêm yết hiện hành." }
    ],
    notes: ["Không áp dụng cho các gói điện thực, điện bổ sung, điện đối soát."],
    transactions: ["Đăng ký mới"]
  },
  {
    services: [
      "Cloud Server (OpenStack)",
      "Virtual Private Cloud",
      "Viettel Managed Kubernetes Service (vMKS)",
      "Viettel Dedicated Kubernetes Service (vDKS)",
      "Viettel Container Registry",
      "Viettel Database Service"
    ],
    category: "kubernetes",
    categoryLabel: "Nền tảng OpenStack & K8s",
    benefits: [
      { text: "Tặng 02 tháng khi thanh toán gói từ 06 tháng." },
      { text: "Tặng 04 tháng khi thanh toán gói từ 12 tháng." },
      { text: "Tặng 09 tháng khi thanh toán gói từ 24 tháng." }
    ],
    transactions: ["Đăng ký mới", "Gia hạn"]
  },
  {
    services: ["Cloud Desktop", "Cloud Camera", "Cloud PC", "Cloud Firewall"],
    category: "workspace",
    categoryLabel: "Làm việc số & Camera",
    benefits: [
      { text: "Chiết khấu 10% khi thanh toán gói từ 06 tháng." },
      { text: "Kèm 10 ngày trải nghiệm dịch vụ (POC) miễn phí." }
    ],
    notes: [
      "Thời gian POC này thay thế hoàn toàn cho chính sách POC tiêu chuẩn của gói cước.",
      "Đối với dịch vụ Cloud Firewall: Ưu đãi POC 10 ngày chỉ áp dụng cho dòng sản phẩm Cloud Firewall Palo Alto."
    ],
    transactions: ["Đăng ký mới", "Gia hạn", "Bổ sung", "Nâng cấp"]
  },
  {
    services: ["Viettel Threat Intelligence", "Viettel Anti DDoS"],
    category: "security",
    categoryLabel: "An toàn thông tin",
    benefits: [
      { text: "Chiết khấu 20% khi thanh toán gói từ 12 tháng." }
    ],
    transactions: ["Đăng ký mới", "Gia hạn", "Bổ sung", "Nâng cấp"]
  },
  {
    services: [
      "Viettel Drive",
      "SOC (Security Operations Center)",
      "Viettel Cloud File Storage",
      "Viettel Hybrid Connect",
      "Viettel Email Hosting",
      "Viettel Web Hosting",
      "Cloudrity",
      "Cloud Backup Storage"
    ],
    category: "storage",
    categoryLabel: "Lưu trữ, Web & Cloud Security",
    benefits: [
      { text: "Chiết khấu 30% khi thanh toán gói từ 12 tháng." }
    ],
    transactions: ["Đăng ký mới", "Gia hạn", "Bổ sung", "Nâng cấp"]
  },
  {
    services: ["Cloud Server (VMware)", "Virtual Private Cloud (VMware)"],
    category: "infra",
    categoryLabel: "Nền tảng VMware Enterprise",
    benefits: [
      { text: "Tặng 04 tháng khi thanh toán gói từ 12 tháng." },
      { text: "Tặng 09 tháng khi thanh toán gói từ 24 tháng." }
    ],
    transactions: ["Đăng ký mới", "Gia hạn"]
  }
];

export const AnniversaryPromoTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'new' | 'renew' | 'upgrade'>('all');

  const filteredData = useMemo(() => {
    return PROMO_DATA.filter(row => {
      // 1. Text search
      const combinedText = [
        ...row.services,
        row.categoryLabel,
        ...row.benefits.map(b => b.text),
        ...(row.notes || [])
      ].join(' ').toLowerCase();
      
      const matchesSearch = combinedText.includes(searchQuery.toLowerCase());
      if (!matchesSearch) return false;

      // 2. Transaction filter
      if (activeTab === 'all') return true;
      if (activeTab === 'new') {
        return row.transactions.includes("Đăng ký mới");
      }
      if (activeTab === 'renew') {
        return row.transactions.includes("Gia hạn");
      }
      if (activeTab === 'upgrade') {
        return row.transactions.includes("Nâng cấp") || row.transactions.includes("Bổ sung");
      }
      return true;
    });
  }, [searchQuery, activeTab]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'infra': return <Server className="w-4 h-4 text-red-600" />;
      case 'kubernetes': return <Cpu className="w-4 h-4 text-indigo-600" />;
      case 'workspace': return <Layers className="w-4 h-4 text-amber-600" />;
      case 'security': return <ShieldCheck className="w-4 h-4 text-emerald-600" />;
      case 'storage': return <Database className="w-4 h-4 text-blue-600" />;
      default: return <Sparkles className="w-4 h-4 text-rose-600" />;
    }
  };

  return (
    <div className="space-y-6 my-6 bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden p-1">
      {/* Search & Filter Header */}
      <div className="bg-slate-50/70 px-4 sm:px-6 py-5 border-b border-slate-100 space-y-4 rounded-t-2xl">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          <div>
            <h4 className="text-sm font-extrabold text-slate-800 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-red-600 animate-pulse" />
              Tra cứu nhanh chương trình khuyến mại
            </h4>
            <p className="text-xs text-slate-500 mt-1">Tìm kiếm dịch vụ và lọc theo nhu cầu sử dụng của bạn</p>
          </div>
          
          {/* Search Input */}
          <div className="relative max-w-sm w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </span>
            <VIDCNativeInput
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Nhập tên dịch vụ để tra cứu..."
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-slate-800 placeholder-slate-400"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100/60">
          <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1 shrink-0">
            <SlidersHorizontal className="w-3 h-3" /> Lọc giao dịch:
          </span>
          <VIDCNativeButton
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Tất cả dịch vụ
          </VIDCNativeButton>
          <VIDCNativeButton
            onClick={() => setActiveTab('new')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'new'
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Đăng ký mới
          </VIDCNativeButton>
          <VIDCNativeButton
            onClick={() => setActiveTab('renew')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'renew'
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Gia hạn
          </VIDCNativeButton>
          <VIDCNativeButton
            onClick={() => setActiveTab('upgrade')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'upgrade'
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Nâng cấp / Bổ sung
          </VIDCNativeButton>
        </div>
      </div>

      {/* Grid Container */}
      <div className="px-4 sm:px-6 pb-6">
        {filteredData.length === 0 ? (
          <div className="text-center py-10 border-2 border-dashed border-slate-100 rounded-xl">
            <CircleHelp className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <p className="text-slate-500 text-sm font-medium">Không tìm thấy ưu đãi nào phù hợp với bộ lọc.</p>
            <VIDCNativeButton 
              onClick={() => { setSearchQuery(''); setActiveTab('all'); }} 
              className="mt-3 text-xs font-bold text-red-600 hover:underline cursor-pointer"
            >
              Đặt lại bộ lọc
            </VIDCNativeButton>
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden lg:block border border-slate-100 rounded-xl overflow-hidden shadow-2xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-700 text-xs font-extrabold uppercase tracking-wider border-b border-slate-100">
                    <th className="py-4 px-5 w-1/3">Dịch vụ áp dụng</th>
                    <th className="py-4 px-5 w-5/12">Nội dung khuyến mại</th>
                    <th className="py-4 px-5 w-1/4">Giao dịch áp dụng</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600 text-sm">
                  {filteredData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      {/* Column 1: Services */}
                      <td className="py-4 px-5 align-top">
                        <div className="space-y-2">
                          <div className="flex items-center gap-1.5 bg-slate-100/80 text-slate-700 text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider w-fit">
                            {getCategoryIcon(row.category)}
                            {row.categoryLabel}
                          </div>
                          <ul className="space-y-1">
                            {row.services.map((svc, sidx) => (
                              <li key={sidx} className="font-semibold text-slate-800 text-xs sm:text-sm flex items-start gap-1.5 leading-snug">
                                <span className="text-red-500 mt-1 shrink-0">•</span>
                                <span>{svc}</span>
                              </li>
                            ))}
                          </ul>
                          {row.notes && (
                            <div className="mt-2 bg-amber-50/50 border border-amber-100/60 rounded-lg p-2.5 text-[11px] text-slate-600 leading-normal">
                              <span className="font-bold text-amber-800 uppercase block mb-0.5 tracking-wider">Lưu ý quan trọng:</span>
                              {row.notes.map((note, nidx) => (
                                <p key={nidx} className="flex gap-1 items-start">
                                  <span className="text-amber-600 font-bold shrink-0">*</span>
                                  <span>{note}</span>
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      </td>

                      {/* Column 2: Benefits */}
                      <td className="py-4 px-5 align-top">
                        <div className="space-y-3">
                          {row.benefits.map((benefit, bidx) => (
                            <div key={bidx} className="flex gap-3 items-start bg-rose-50/30 border border-rose-100/40 rounded-xl p-3">
                              <div className="bg-red-500 text-white rounded-lg p-1.5 shadow-xs shrink-0 mt-0.5">
                                <Sparkles className="w-3.5 h-3.5" />
                              </div>
                              <div className="space-y-0.5">
                                <p className="font-extrabold text-slate-900 text-xs sm:text-sm leading-relaxed">
                                  {benefit.text}
                                </p>
                                {benefit.subText && (
                                  <p className="text-[11px] text-slate-500 font-medium italic">
                                    {benefit.subText}
                                  </p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </td>

                      {/* Column 3: Transactions */}
                      <td className="py-4 px-5 align-top">
                        <div className="flex flex-wrap gap-1.5">
                          {row.transactions.map((tx, tidx) => (
                            <span 
                              key={tidx} 
                              className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-lg border border-emerald-100"
                            >
                              <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                              {tx}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile / Tablet List View */}
            <div className="lg:hidden space-y-4">
              {filteredData.map((row, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-50/40 border border-slate-100 rounded-xl p-4 space-y-4 hover:shadow-xs transition-shadow"
                >
                  {/* Category & Services */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 bg-slate-100 text-slate-700 text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider w-fit">
                      {getCategoryIcon(row.category)}
                      {row.categoryLabel}
                    </div>
                    
                    <div className="space-y-1.5">
                      {row.services.map((svc, sidx) => (
                        <h5 key={sidx} className="font-bold text-slate-800 text-sm flex items-start gap-1.5 leading-snug">
                          <span className="text-red-500 shrink-0">•</span>
                          <span>{svc}</span>
                        </h5>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-extrabold tracking-wider text-slate-400 block">Ưu đãi áp dụng:</span>
                    <div className="grid grid-cols-1 gap-2">
                      {row.benefits.map((benefit, bidx) => (
                        <div key={bidx} className="flex gap-2.5 items-start bg-rose-50/20 border border-rose-100/30 rounded-xl p-3">
                          <div className="bg-red-500 text-white rounded-lg p-1 shrink-0 mt-0.5">
                            <Sparkles className="w-3 h-3" />
                          </div>
                          <div>
                            <p className="font-bold text-slate-800 text-xs sm:text-sm leading-relaxed">
                              {benefit.text}
                            </p>
                            {benefit.subText && (
                              <p className="text-[10px] text-slate-500 font-medium italic mt-0.5">
                                {benefit.subText}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Transaction Types */}
                  <div className="pt-3 border-t border-slate-100/80 flex flex-wrap gap-1.5 items-center">
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mr-1">Giao dịch:</span>
                    {row.transactions.map((tx, tidx) => (
                      <span 
                        key={tidx} 
                        className="bg-emerald-50 text-emerald-800 text-[11px] font-bold px-2 py-0.5 rounded-md border border-emerald-100 flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                        {tx}
                      </span>
                    ))}
                  </div>

                  {/* Notes if any */}
                  {row.notes && (
                    <div className="bg-amber-50/50 border border-amber-100/50 rounded-xl p-3 text-[11px] text-slate-600 leading-normal">
                      <span className="font-bold text-amber-800 uppercase block mb-1">Lưu ý quan trọng:</span>
                      {row.notes.map((note, nidx) => (
                        <p key={nidx} className="flex gap-1 items-start">
                          <span className="text-amber-600 font-bold shrink-0">*</span>
                          <span>{note}</span>
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
