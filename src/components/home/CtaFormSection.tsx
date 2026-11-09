import React, { useState } from 'react';
import { SOLUTION_CATEGORIES } from '../../data/sitemapData';
import { SEAMarket } from '../layout/UtilityBar';
import { useLanguage } from '../../context/LanguageContext';
import { Send, CheckCircle2, ShieldCheck, Loader2, PhoneCall, Mail, Building, User, FileText, CheckSquare, X } from 'lucide-react';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';
import { VIDCButton } from '@/components/ui/VIDCButton';



interface CtaFormSectionProps {
  currentMarket: SEAMarket;
}

export const CtaFormSection: React.FC<CtaFormSectionProps> = ({ currentMarket }) => {
  const { t, currentLanguage, getFullPath } = useLanguage();
  const isNonVn = currentLanguage !== 'vn' && currentLanguage !== 'vi';
  const isLaos = isNonVn;
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    workEmail: '',
    companyName: '',
    selectedSolution: 'backup-disaster-recovery',
    message: '',
    nd13Consent: false,
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Get all 17 solutions for select dropdown
  const allSolutions = SOLUTION_CATEGORIES.flatMap(cat => cat.items);

  const getLocalizedSolutionTitle = (sol: any) => {
    if (!isLaos) return sol.title;
    const dict: Record<string, string> = {
      'cloud-server': 'Viettel Cloud Server',
      'gpu-cloud': 'Viettel GPU Cloud',
      'private-cloud': 'Viettel Private Cloud',
      'container-service': 'Viettel Kubernetes Service (VKS)',
      'cloud-backup': 'Viettel Cloud Backup',
      'backup-disaster-recovery': 'Viettel Cloud Disaster Recovery (DR)',
      'virtual-pc': 'Viettel Virtual PC',
      'colocation': 'Viettel Colocation (Server Hosting)',
      'private-suite': 'Private DC Suite / Cage',
      'cable-connectivity': 'Direct Optical & Multi-Carrier Connectivity',
      'smart-monitoring': 'Smart DC Monitoring & Smart Hands',
      'cloud-security': 'Cloud Security & Endpoint Protection',
      'anti-ddos': 'Viettel Anti-DDoS Mitigation',
      'soc-siem': 'Managed SOC & SIEM Analytics',
      'vdi-solution': 'Virtual Desktop Infrastructure (VDI)',
      'cdn-acceleration': 'Viettel Content Delivery Network (CDN)',
      'dns-hosting': 'Viettel DNS Hosting',
    };
    return dict[sol.id] || sol.title;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName || !formData.phone || !formData.workEmail) {
      setErrorMessage(isLaos ? 'Please fill in all required fields (*).' : 'Vui lòng điền đầy đủ thông tin bắt buộc (*).');
      return;
    }

    if (!formData.nd13Consent) {
      setErrorMessage(isLaos ? 'Please agree to the Personal Data Protection terms.' : 'Vui lòng đồng ý với điều khoản Bảo vệ dữ liệu cá nhân (Nghị định 13/2023/NĐ-CP).');
      return;
    }

    setLoading(true);

    // Simulate Client API call POST /api/leads per spec Section 9.4
    setTimeout(() => {
      setLoading(false);
      setShowSuccessModal(true);
      setFormData({
        fullName: '',
        phone: '',
        workEmail: '',
        companyName: '',
        selectedSolution: 'backup-disaster-recovery',
        message: '',
        nd13Consent: false,
      });
    }, 1000);
  };

  return (
    <section className="bg-gradient-to-br from-[var(--vidc-legacy-hex-8a001a)] via-[var(--vidc-legacy-hex-660011)] to-[var(--vidc-legacy-hex-3b0007)] text-white py-16 md:py-24 relative overflow-hidden border-t border-[var(--vidc-legacy-hex-37404c)]">
      {/* Radial grid overlay */}
      <div className="absolute inset-0 vidc-tech-grid pointer-events-none opacity-50" />
      <div className="vidc-container space-y-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: CTA Banner Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--vidc-color-background-brand-subtle)] border border-[var(--vidc-color-brand-red)]/30">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--vidc-color-brand-red)]">
                {isLaos ? '24/7 TECHNICAL CONSULTING' : 'TƯ VẤN KỸ THUẬT 24/7'}
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {t.ctaSection.title}
            </h2>

            <p className="text-sm md:text-base text-[var(--vidc-color-text-inverse-secondary)] leading-relaxed">
              {t.ctaSection.subtitle}
            </p>

            {/* Direct Contact Highlights */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[var(--vidc-color-brand-red)]/20 text-[var(--vidc-color-brand-pink)]">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[var(--vidc-color-text-inverse-secondary)] font-medium">
                    {isLaos ? 'Toll-free consulting hotline:' : 'Hotline tư vấn miễn phí:'}
                  </div>
                  <div className="text-lg font-bold text-white font-mono">1800 8088</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[var(--vidc-color-brand-red)]/20 text-[var(--vidc-color-brand-pink)]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[var(--vidc-color-text-inverse-secondary)] font-medium">
                    {isLaos ? 'Request for proposal email:' : 'Email yêu cầu báo giá:'}
                  </div>
                  <div className="text-sm font-bold text-white">support@viettelidc.com.vn</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Registration Form */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-2xl text-slate-900">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {isLaos ? 'Request Consultation & Get Quotes' : 'Đăng ký Tư vấn & Nhận Báo Giá Dịch Vụ'}
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              {isLaos
                ? 'Fill out the form below to receive expert cloud solution support from Viettel.'
                : 'Điền thông tin bên dưới để chuyên viên giải pháp Viettel IDC liên hệ hỗ trợ.'}
            </p>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">
                    {isLaos ? 'Full name' : 'Họ và tên'} <span className="text-[var(--vidc-color-brand-red)]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <VIDCNativeInput
                      type="text"
                      placeholder={isLaos ? 'John Doe' : 'Nguyễn Văn A'}
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full h-11 pl-9 pr-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 text-xs focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">
                    {isLaos ? 'Phone number' : 'Số điện thoại'} <span className="text-[var(--vidc-color-brand-red)]">*</span>
                  </label>
                  <div className="relative">
                    <PhoneCall className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <VIDCNativeInput
                      type="tel"
                      placeholder={isLaos ? '+856 20 1234 5678' : '0912 345 678'}
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-11 pl-9 pr-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 text-xs focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Work Email */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">
                    {isLaos ? 'Work email' : 'Email công việc'} <span className="text-[var(--vidc-color-brand-red)]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <VIDCNativeInput
                      type="email"
                      placeholder={isLaos ? 'john@company.com' : 'ten@doanhnghiep.vn'}
                      value={formData.workEmail}
                      onChange={e => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full h-11 pl-9 pr-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 text-xs focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">
                    {isLaos ? 'Company / Organization' : 'Tên Doanh nghiệp / Tổ chức'}
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <VIDCNativeInput
                      type="text"
                      placeholder={isLaos ? 'ABC Company' : 'Công ty ABC'}
                      value={formData.companyName}
                      onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full h-11 pl-9 pr-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 text-xs focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Solution Select */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">
                  {isLaos ? 'Solutions / Services of interest' : 'Nhu cầu Giải pháp / Dịch vụ quan tâm'}
                </label>
                <VIDCNativeSelect
                  value={formData.selectedSolution}
                  onChange={e => setFormData({ ...formData, selectedSolution: e.target.value })}
                  className="w-full h-11 px-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] focus:outline-none cursor-pointer"
                >
                  {allSolutions.map(sol => (
                    <option key={sol.id} value={sol.id}>
                      {getLocalizedSolutionTitle(sol)}
                    </option>
                  ))}
                </VIDCNativeSelect>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">
                  {isLaos ? 'Requirements description' : 'Mô tả nhu cầu / Quy mô bài toán'}
                </label>
                <VIDCNativeTextarea
                  rows={3}
                  placeholder={isLaos ? 'Describe your solution needs or infrastructure scale...' : 'Nhập thông tin chi tiết bài toán cần hỗ trợ...'}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 text-xs focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] focus:outline-none"
                />
              </div>

              {/* Decree 13 Checkbox */}
              <div className="flex items-start gap-2 pt-2">
                <VIDCNativeInput
                  type="checkbox"
                  id="nd13"
                  checked={formData.nd13Consent}
                  onChange={e => setFormData({ ...formData, nd13Consent: e.target.checked })}
                  className="mt-0.5 rounded border-slate-300 text-[var(--vidc-color-brand-red)] focus:ring-[var(--vidc-color-brand-red)] cursor-pointer"
                />
                <label htmlFor="nd13" className="text-[11px] text-slate-600 leading-relaxed cursor-pointer">
                  {isLaos ? (
                    <>
                      I consent to allow Viettel to collect and process my personal data in accordance with the{' '}
                      <VIDCAnchor
                        href={getFullPath('/legal/personal-data-protection/')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--vidc-color-text-brand)] underline font-bold"
                      >
                        Personal Data Protection Policy
                      </VIDCAnchor>.
                    </>
                  ) : (
                    <>
                      Tôi đồng ý cho phép Viettel IDC thu thập và xử lý thông tin cá nhân theo quy định của{' '}
                      <VIDCAnchor
                        href={getFullPath('/legal/personal-data-protection/')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--vidc-color-text-brand)] underline font-bold"
                      >
                        Nghị định 13/2023/NĐ-CP về Bảo vệ dữ liệu cá nhân
                      </VIDCAnchor>.
                    </>
                  )}
                </label>
              </div>

              {/* Submit Button */}
              <VIDCButton
                type="submit"
                variant="primary"
                size="lg"
                disabled={loading}
                className="w-full"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{isLaos ? 'Submitting request...' : 'Đang gửi yêu cầu...'}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{isLaos ? 'Submit Request Now' : 'Gửi yêu cầu tư vấn ngay'}</span>
                  </>
                )}
              </VIDCButton>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[var(--vidc-z-sticky)] flex items-center justify-center bg-black/70 p-4">
          <div className="bg-[var(--vidc-legacy-hex-1e2329)] border border-slate-700 p-6 md:p-8 rounded-2xl max-w-md w-full space-y-6 text-center text-white relative shadow-2xl">
            <VIDCNativeButton
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </VIDCNativeButton>

            <div className="w-16 h-16 rounded-full bg-emerald-900/50 text-emerald-400 border border-emerald-500 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-extrabold text-white">
                {isLaos ? 'Request Submitted Successfully!' : 'Gửi Yêu Cầu Thành Công!'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isLaos
                  ? 'Thank you for contacting Viettel. Our solution engineer will contact you directly within 15 minutes.'
                  : 'Cảm ơn Quý khách đã liên hệ với Viettel IDC. Chuyên viên Kỹ thuật & Giải pháp sẽ trực tiếp liên hệ hỗ trợ trong vòng 15 phút.'}
              </p>
            </div>

            <VIDCNativeButton
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-2.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white text-xs font-bold transition-all"
            >
              {isLaos ? 'Close' : 'Hoàn tất'}
            </VIDCNativeButton>
          </div>
        </div>
      )}
    </section>
  );
};
