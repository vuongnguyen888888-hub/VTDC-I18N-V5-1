import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Server, 
  MapPin, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Filter, 
  ExternalLink,
  Lock,
  Eye,
  Calendar,
  PhoneCall
} from 'lucide-react';
import { SEAMarket } from '../layout/UtilityBar';
import { AboutSubNav } from './AboutSubNav';
import { nineDataCenters, DCFacility } from '../../data/aboutData';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect } from '@/components/ui/VIDCNativeControls';


interface AboutDataCentersPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export const AboutDataCentersPage: React.FC<AboutDataCentersPageProps> = ({
  currentMarket,
  onNavigateHome,
  currentPath = '/about/data-centers/',
  onNavigate,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<'All' | 'Bắc' | 'Trung' | 'Nam'>('All');
  const [selectedDc, setSelectedDc] = useState<DCFacility>(nineDataCenters[0]);
  const [siteTourSubmitted, setSiteTourSubmitted] = useState(false);
  const [tourData, setTourData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    preferredDc: 'TTDL Viettel Hòa Lạc 1 (Green DC)',
    expectedDate: '',
    attendeesCount: '1 - 3 người'
  });

  const filteredDcs = useMemo(() => {
    if (selectedRegion === 'All') return nineDataCenters;
    return nineDataCenters.filter((dc) => dc.region === selectedRegion);
  }, [selectedRegion]);

  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSiteTourSubmitted(true);
  };

  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Interactive 9 Data Centers Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3.5">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-2xs">
              <span className="text-xs font-black uppercase tracking-wider text-red-700">
                DANH MỤC CƠ SỞ VẬT CHẤT
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Khám Phá Chi Tiết 9 Trung Tâm Dữ Liệu
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed max-w-3xl">
              Phân bố tối ưu theo các vùng kinh tế trọng điểm giúp xây dựng kiến trúc đa vùng (Multi-Region Disaster Recovery).
            </p>
          </div>

          {/* Region Filters */}
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-xs shrink-0">
            {(['All', 'Bắc', 'Trung', 'Nam'] as const).map((reg) => (
              <VIDCNativeButton
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedRegion === reg
                    ? 'bg-[var(--vidc-text-brand)] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {reg === 'All' ? 'Tất cả 9 DC' : `Khu vực ${reg}`}
              </VIDCNativeButton>
            ))}
          </div>
        </div>

        {/* 9 DC Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDcs.map((dc) => (
            <div
              key={dc.id}
              onClick={() => setSelectedDc(dc)}
              className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all cursor-pointer flex flex-col justify-between ${
                selectedDc.id === dc.id
                  ? 'border-[var(--vidc-text-brand)] ring-2 ring-red-500/20 shadow-xl'
                  : 'border-slate-200/90 hover:border-slate-300 hover:shadow-lg'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-black uppercase text-[var(--vidc-text-brand)] bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                    Mã: {dc.code}
                  </span>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    Khu vực {dc.region}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[var(--vidc-text-brand)] leading-snug">
                  {dc.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 flex items-start gap-1.5 mt-2 leading-relaxed">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>{dc.location}</span>
                </p>

                <div className="grid grid-cols-3 gap-2 my-4 pt-3 border-t border-slate-100 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-50">
                    <div className="text-xs text-slate-500 font-medium">Diện tích</div>
                    <div className="text-sm sm:text-base font-black text-slate-900 mt-0.5">{dc.area}</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50">
                    <div className="text-xs text-slate-500 font-medium">Số Rack</div>
                    <div className="text-sm sm:text-base font-black text-slate-900 mt-0.5">{dc.racks}</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50">
                    <div className="text-xs text-slate-500 font-medium">PUE</div>
                    <div className="text-sm sm:text-base font-black text-[var(--vidc-color-brand-red)] mt-0.5">{dc.pue}</div>
                  </div>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {dc.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span className="text-xs sm:text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-400 font-medium">Chuẩn TIA-942 Rated 3</span>
                <span className="font-bold text-[var(--vidc-text-brand)] flex items-center gap-1">
                  <span>Chi tiết</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Site Tour Registration Form */}
      <section id="tour-registration" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl mx-auto text-center mb-8 space-y-3.5">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-2xs">
              <span className="text-xs font-black uppercase tracking-wider text-red-700">
                TRẢI NGHIỆM THỰC TẾ
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
              Đăng Ký Thăm Quan Trực Tiếp (Site Tour Data Center)
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              Chúng tôi hân hạnh đón tiếp Quý Khách hàng, Doanh nghiệp và Đối tác đến trải nghiệm trực tiếp hệ thống phòng máy, an ninh và nguồn điện tiêu chuẩn TIA-942 Rated 3.
            </p>
          </div>

          {siteTourSubmitted ? (
            <div className="max-w-lg mx-auto p-8 rounded-2xl bg-red-50 border border-red-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-red-100 text-[var(--vidc-color-brand-red)] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Đăng Ký Site Tour Thành Công!</h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Bộ phận An ninh &amp; Tiếp đón Khách hàng của Viettel IDC sẽ liên hệ trực tiếp với Quý khách để xác nhận danh sách đại biểu và cấp thẻ ra vào phòng máy.
              </p>
              <VIDCNativeButton
                onClick={() => setSiteTourSubmitted(false)}
                className="text-xs sm:text-sm text-[var(--vidc-color-brand-red)] font-bold underline hover:no-underline pt-2 block mx-auto"
              >
                Đăng ký thêm đoàn khác
              </VIDCNativeButton>
            </div>
          ) : (
            <form onSubmit={handleTourSubmit} className="max-w-2xl mx-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Họ và tên Người đại diện *
                  </label>
                  <VIDCNativeInput
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={tourData.fullName}
                    onChange={(e) => setTourData({ ...tourData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-text-brand)] bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Tên Doanh nghiệp / Tổ chức *
                  </label>
                  <VIDCNativeInput
                    type="text"
                    required
                    placeholder="Công ty ABC"
                    value={tourData.company}
                    onChange={(e) => setTourData({ ...tourData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-text-brand)] bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Số điện thoại liên hệ *
                  </label>
                  <VIDCNativeInput
                    type="tel"
                    required
                    placeholder="0988xxxxxx"
                    value={tourData.phone}
                    onChange={(e) => setTourData({ ...tourData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-text-brand)] bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Email công vụ *
                  </label>
                  <VIDCNativeInput
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={tourData.email}
                    onChange={(e) => setTourData({ ...tourData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-text-brand)] bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Trung tâm Dữ liệu muốn thăm quan *
                  </label>
                  <VIDCNativeSelect
                    value={tourData.preferredDc}
                    onChange={(e) => setTourData({ ...tourData, preferredDc: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-text-brand)] bg-white"
                  >
                    {nineDataCenters.map((dc) => (
                      <option key={dc.id} value={dc.name}>
                        {dc.name} ({dc.region})
                      </option>
                    ))}
                  </VIDCNativeSelect>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Số lượng người tham gia đoàn
                  </label>
                  <VIDCNativeSelect
                    value={tourData.attendeesCount}
                    onChange={(e) => setTourData({ ...tourData, attendeesCount: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-text-brand)] bg-white"
                  >
                    <option value="1 - 3 người">1 - 3 người</option>
                    <option value="4 - 10 người">4 - 10 người</option>
                    <option value="Đoàn trên 10 người">Đoàn trên 10 người</option>
                  </VIDCNativeSelect>
                </div>
              </div>

              <VIDCNativeButton
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[var(--vidc-text-brand)] hover:bg-[var(--vidc-legacy-hex-a00022)] text-white text-xs sm:text-sm font-bold shadow-md shadow-red-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Xác nhận gửi thông tin đăng ký Site Tour</span>
                <ArrowRight className="w-4 h-4" />
              </VIDCNativeButton>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
