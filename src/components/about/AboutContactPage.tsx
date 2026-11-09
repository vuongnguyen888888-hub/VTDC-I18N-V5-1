import React, { useState } from 'react';
import { 
  Building, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Headphones, 
  ShieldCheck, 
  Globe, 
  ArrowRight,
  Loader2,
  Server
} from 'lucide-react';
import { SEAMarket } from '../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface AboutContactPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export const AboutContactPage: React.FC<AboutContactPageProps> = ({
  onNavigate
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<'hn' | 'hcm' | 'dn' | 'bd'>('hn');
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    company: '',
    serviceInterest: 'cloud-server',
    message: '',
    consent: true
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.workEmail || !formData.phone) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const branches = [
    {
      id: 'hn',
      name: 'Trụ sở chính Hà Nội',
      address: 'Tầng 16, Tòa nhà Hapulico Center Building, Số 1 Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội',
      phone: '1800 8088 / (024) 6664 6664',
      email: 'sales@viettelidc.com.vn',
      hours: '08:00 - 17:30 (Thứ 2 - Thứ 6)',
      noc: '24/7/365 Sẵn sàng hỗ trợ khẩn cấp',
      tag: 'Trụ sở chính'
    },
    {
      id: 'hcm',
      name: 'Chi nhánh TP. Hồ Chí Minh',
      address: 'Tầng 3, Tòa nhà Viettel Complex, 285 Cách Mạng Tháng 8, Phường 12, Quận 10, TP. Hồ Chí Minh',
      phone: '1800 8088 / (028) 6664 6664',
      email: 'sales.hcm@viettelidc.com.vn',
      hours: '08:00 - 17:30 (Thứ 2 - Thứ 6)',
      noc: '24/7/365 Hỗ trợ kỹ thuật tại chỗ',
      tag: 'Văn phòng phía Nam'
    },
    {
      id: 'dn',
      name: 'Văn phòng Đại diện Đà Nẵng',
      address: 'Tòa nhà Viettel Đà Nẵng, Số 58 Xô Viết Nghệ Tĩnh, Phường Hòa Cường Nam, Quận Hải Châu, Đà Nẵng',
      phone: '1800 8088 / (0236) 6664 666',
      email: 'sales.mientrung@viettelidc.com.vn',
      hours: '08:00 - 17:30 (Thứ 2 - Thứ 6)',
      noc: '24/7/365 Kết nối NOC liên vùng',
      tag: 'Khu vực Miền Trung'
    },
    {
      id: 'bd',
      name: 'Văn phòng Điều hành Data Center Bình Dương',
      address: 'Đường DT 743, KCN Sóng Thần 1, Dĩ An, Tỉnh Bình Dương (Data Center Bình Dương 1 & 2)',
      phone: '1800 8088 / 0868 8088 66',
      email: 'support.dc@viettelidc.com.vn',
      hours: 'Phục vụ 24/7 đón tiếp khách hàng & đối tác',
      noc: 'Trực kỹ thuật phòng máy 24/7',
      tag: 'Campus Data Center'
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900">
      {/* 24/7 Rapid Help Contacts Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Tư Vấn Bán Hàng */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md shadow-slate-900/5 hover:border-red-200 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <PhoneCall className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 mb-1 block">Tổng đài Miễn Cước</span>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 leading-snug">Tư Vấn Giải Pháp &amp; Báo Giá</h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed font-normal">
              Khảo sát nhu cầu, thiết kế kiến trúc hạ tầng và gửi báo giá chi tiết trong vòng 15 phút.
            </p>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 font-medium">Hotline tư vấn:</div>
                <div className="text-xl font-black text-[var(--vidc-text-brand)] font-mono">1800 8088</div>
              </div>
              <VIDCNativeButton
                onClick={() => handleCopy('18008088', 'hotline1')}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-[var(--vidc-text-brand)] transition-colors cursor-pointer"
                title="Sao chép số điện thoại"
              >
                {copiedKey === 'hotline1' ? <Check className="w-4 h-4 text-[var(--vidc-text-brand)]" /> : <Copy className="w-4 h-4" />}
              </VIDCNativeButton>
            </div>
          </div>

          {/* Card 2: Hỗ Trợ Kỹ Thuật 24/7 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md shadow-slate-900/5 hover:border-red-200 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <Headphones className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 mb-1 block">NOC &amp; SOC 24/7/365</span>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 leading-snug">Hỗ Trợ Kỹ Thuật &amp; Sự Cố</h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed font-normal">
              Đội ngũ kỹ sư trực ca 24/7 tiếp nhận yêu cầu, xử lý sự cố khẩn cấp và giám sát hệ thống.
            </p>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 font-medium">Email hỗ trợ kỹ thuật:</div>
                <div className="text-sm font-bold text-slate-900 font-mono">support@viettelidc.com.vn</div>
              </div>
              <VIDCNativeButton
                onClick={() => handleCopy('support@viettelidc.com.vn', 'support-email')}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-[var(--vidc-text-brand)] transition-colors cursor-pointer"
                title="Sao chép email"
              >
                {copiedKey === 'support-email' ? <Check className="w-4 h-4 text-[var(--vidc-text-brand)]" /> : <Copy className="w-4 h-4" />}
              </VIDCNativeButton>
            </div>
          </div>

          {/* Card 3: Hợp Tác Doanh Nghiệp & Kênh */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md shadow-slate-900/5 hover:border-red-200 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 mb-1 block">Hợp Tác &amp; Đối Tác</span>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 leading-snug">Liên Hệ Kinh Doanh Toàn Quốc</h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed font-normal">
              Dành cho Khách hàng Doanh nghiệp lớn, Cơ quan Nhà nước và các Đối tác liên kết công nghệ.
            </p>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 font-medium">Hòm thư tiếp nhận:</div>
                <div className="text-sm font-bold text-slate-900 font-mono">sales@viettelidc.com.vn</div>
              </div>
              <VIDCNativeButton
                onClick={() => handleCopy('sales@viettelidc.com.vn', 'sales-email')}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-[var(--vidc-text-brand)] transition-colors cursor-pointer"
                title="Sao chép email"
              >
                {copiedKey === 'sales-email' ? <Check className="w-4 h-4 text-[var(--vidc-text-brand)]" /> : <Copy className="w-4 h-4" />}
              </VIDCNativeButton>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section: Office Locations & Interactive Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Regional Branches & Campuses (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3.5">
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-2xs">
                <span className="text-xs font-black uppercase tracking-wider text-red-700">
                  MẠNG LƯỚI VĂN PHÒNG &amp; CHI NHÁNH
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Văn Phòng Đại Diện Toàn Quốc
              </h2>
              <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
                Hiện diện tại các trung tâm kinh tế trọng điểm cùng hệ sinh thái 9 Data Center tiêu chuẩn quốc tế ANSI/TIA-942 Rated 3.
              </p>
            </div>

            {/* Branch Selection Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {branches.map((b) => (
                <VIDCNativeButton
                  key={b.id}
                  onClick={() => setSelectedBranch(b.id as any)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    selectedBranch === b.id
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <Building className={`w-4 h-4 ${selectedBranch === b.id ? 'text-red-400' : 'text-slate-400'}`} />
                  <span>{b.tag}</span>
                </VIDCNativeButton>
              ))}
            </div>

            {/* Selected Branch Detailed Card */}
            {(() => {
              const currentBranch = branches.find(b => b.id === selectedBranch) || branches[0];
              return (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg space-y-6">
                  <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
                    <div>
                      <span className="text-xs font-bold text-[var(--vidc-text-brand)] bg-red-50 px-2.5 py-1 rounded-md mb-2 inline-block">
                        {currentBranch.tag}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                        {currentBranch.name}
                      </h3>
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-100 text-slate-700 shrink-0">
                      <MapPin className="w-6 h-6 text-[var(--vidc-text-brand)]" />
                    </div>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-slate-900">Địa chỉ:</div>
                        <div className="text-slate-600">{currentBranch.address}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <PhoneCall className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-slate-900">Điện thoại liên hệ:</div>
                        <div className="text-slate-600 font-mono">{currentBranch.phone}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-slate-900">Email:</div>
                        <div className="text-slate-600 font-mono">{currentBranch.email}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-slate-900">Thời gian làm việc & Kỹ thuật:</div>
                        <div className="text-slate-600">{currentBranch.hours}</div>
                        <div className="text-[var(--vidc-color-brand-red)] font-semibold text-xs mt-0.5">● {currentBranch.noc}</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                    <VIDCAnchor
                      href="/about/data-centers/"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate?.('/about/data-centers/');
                      }}
                      className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Server className="w-3.5 h-3.5 text-[var(--vidc-text-brand)]" />
                      <span>Xem Vị Trí 9 Trung Tâm Dữ Liệu</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </VIDCAnchor>
                  </div>
                </div>
              );
            })()}

            {/* Security & Uptime Commitment Banner */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="p-4 rounded-2xl bg-red-600/20 text-red-400 border border-red-500/30 shrink-0">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-extrabold text-white text-base">Cam kết Bảo Mật & Tiêu Chuẩn Quốc Tế</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Mọi thông tin trao đổi được bảo mật tuyệt đối theo Nghị định 13/2023/NĐ-CP và hệ thống quản lý an toàn thông tin ISO 27001, PCI-DSS v4.0.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Solution Request Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl relative">
              <div className="mb-6 space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">GỬI YÊU CẦU TRỰC TUYẾN</span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">Liên Hệ & Nhận Tư Vấn</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Điền thông tin bên dưới, chuyên gia Viettel IDC sẽ liên hệ lại trong vòng 15 phút.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--vidc-color-background-brand-subtle)] text-[var(--vidc-color-brand-red)] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900">Gửi Yêu Cầu Thành Công!</h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Cảm ơn Quý khách. Đội ngũ Kỹ sư Chuyên gia Viettel IDC đã tiếp nhận thông tin và sẽ liên hệ qua số điện thoại/email trong thời gian sớm nhất.
                  </p>
                  <VIDCNativeButton
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        workEmail: '',
                        phone: '',
                        company: '',
                        serviceInterest: 'cloud-server',
                        message: '',
                        consent: true
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-8f0027)] text-white text-xs font-bold transition-all cursor-pointer shadow-md shadow-red-600/20"
                  >
                    Gửi yêu cầu khác
                  </VIDCNativeButton>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <VIDCNativeInput
                      type="text"
                      required
                      placeholder="Ví dụ: Nguyễn Văn A"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-text-brand)] focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Số điện thoại <span className="text-red-500">*</span>
                      </label>
                      <VIDCNativeInput
                        type="tel"
                        required
                        placeholder="0912 345 678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-text-brand)] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Email công việc <span className="text-red-500">*</span>
                      </label>
                      <VIDCNativeInput
                        type="email"
                        required
                        placeholder="ten@congty.com"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-text-brand)] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Tên Doanh nghiệp / Tổ chức
                    </label>
                    <VIDCNativeInput
                      type="text"
                      placeholder="Công ty CP / Tập đoàn..."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-text-brand)] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Dịch vụ quan tâm
                    </label>
                    <VIDCNativeSelect
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-text-brand)] focus:border-transparent transition-all bg-white"
                    >
                      <option value="cloud-server">Viettel Cloud Server & Máy chủ ảo</option>
                      <option value="colocation">Thuê chỗ đặt máy chủ (Colocation / DC)</option>
                      <option value="private-cloud">Private Cloud & Hybrid Cloud</option>
                      <option value="ai-gpu">Hạ tầng tính toán AI & NVIDIA GPU</option>
                      <option value="security">An toàn thông tin & SOC / Anti-DDoS</option>
                      <option value="backup-dr">Sao lưu & Khôi phục thảm họa (DR / Backup)</option>
                      <option value="partnership">Hợp tác Đối tác & Đại lý phân phối</option>
                    </VIDCNativeSelect>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Nội dung yêu cầu chi tiết
                    </label>
                    <VIDCNativeTextarea
                      rows={3}
                      placeholder="Mô tả sơ bộ về quy mô hệ thống, mục tiêu hoặc thắc mắc của Quý khách..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-text-brand)] focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="flex items-start gap-2.5 pt-1">
                    <VIDCNativeInput
                      type="checkbox"
                      id="consent-check"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 rounded text-[var(--vidc-text-brand)] focus:ring-[var(--vidc-text-brand)]"
                    />
                    <label htmlFor="consent-check" className="text-[11px] text-slate-500 leading-tight">
                      Tôi đồng ý cho phép Viettel IDC xử trị thông tin cá nhân để phục vụ tư vấn theo quy định bảo vệ dữ liệu (Nghị định 13/2023/NĐ-CP).
                    </label>
                  </div>

                  <VIDCNativeButton
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-[var(--vidc-text-brand)] hover:bg-[var(--vidc-legacy-hex-a00022)] text-white font-bold text-sm shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-70 mt-4"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Đang xử lý gửi yêu cầu...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Gửi Yêu Cầu Tư Vấn Ngay</span>
                      </>
                    )}
                  </VIDCNativeButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
