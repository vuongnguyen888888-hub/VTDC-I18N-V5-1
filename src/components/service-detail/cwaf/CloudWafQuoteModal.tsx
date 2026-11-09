import React, { useState, useEffect, useId } from 'react';
import { X, Send, CheckCircle2, Loader2, ArrowRight, ShieldCheck, Lock } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface CloudWafQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  customNotes?: string;
  currentMarket?: SEAMarket;
}

export const CloudWafQuoteModal: React.FC<CloudWafQuoteModalProps> = ({
  isOpen,
  onClose,
  customNotes = '',
  currentMarket,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    workEmail: '',
    companyName: '',
    selectedTier: 'advance',
    ddosOption: 'standard',
    notes: customNotes,
    nd13Consent: false,
  });

  const fullNameId = useId();
  const phoneId = useId();
  const workEmailId = useId();
  const companyNameId = useId();
  const selectedTierId = useId();
  const ddosOptionId = useId();
  const notesId = useId();
  const nd13ConsentId = useId();

  const [loading, setLoading] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const isLaos = currentMarket?.code !== 'vn';

  useEffect(() => {
    if (isOpen) {
      setSubmittedSuccess(false);
      setErrorMsg('');
      setFormData(prev => ({
        ...prev,
        notes: customNotes || prev.notes,
      }));
    }
  }, [isOpen, customNotes]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName || !formData.phone || !formData.workEmail) {
      setErrorMsg(isLaos 
        ? 'Please fill in required fields (*): Full Name, Phone, and Work Email.' 
        : 'Vui lòng nhập đầy đủ thông tin bắt buộc (*): Họ tên, Số điện thoại và Email công việc.');
      return;
    }

    if (!formData.nd13Consent) {
      setErrorMsg(isLaos 
        ? 'Please agree to the Personal Data Protection terms (Decree 13/2023/ND-CP).' 
        : 'Vui lòng xác nhận đồng ý với Điều khoản Bảo vệ dữ liệu cá nhân (Nghị định 13/2023/NĐ-CP).');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmittedSuccess(true);
    }, 600);
  };

  return (
    <div 
      className="fixed inset-0 z-[var(--vidc-z-modal)] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-xl bg-white text-slate-900 border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-slate-900 via-[var(--vidc-legacy-hex-222225)] to-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[var(--vidc-color-brand-red)] text-white flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white tracking-tight">
                {isLaos ? 'Register for Viettel Cloud WAF' : 'Đăng Ký Tư Vấn & Dùng Thử Viettel Cloud WAF'}
              </h3>
              <p className="text-xs text-slate-300">
                {isLaos ? 'Free trial onboarding & tailored security architecture' : 'Miễn phí trải nghiệm & tư vấn kiến trúc phòng thủ đa lớp'}
              </p>
            </div>
          </div>

          <VIDCNativeButton
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </VIDCNativeButton>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submittedSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900">
                {isLaos ? 'Registration Received Successfully!' : 'Đã Tiếp Nhận Thông Tin Thành Công!'}
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                {isLaos 
                  ? 'Viettel IDC cybersecurity specialists will contact you within 15 minutes to initiate DNS onboarding and setup your test environment.'
                  : 'Đội ngũ chuyên gia an toàn thông tin của Viettel IDC sẽ liên hệ lại với bạn trong vòng 15 phút để tư vấn kịch bản triển khai và kích hoạt môi trường dùng thử.'}
              </p>
              <div className="pt-4">
                <VIDCNativeButton
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-sm transition-all cursor-pointer"
                >
                  {isLaos ? 'Close Window' : 'Đóng cửa sổ'}
                </VIDCNativeButton>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-[var(--vidc-color-brand-red)] font-medium">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <label htmlFor={fullNameId} className="text-xs font-bold text-slate-700">
                    {isLaos ? 'Full Name *' : 'Họ và tên *'}
                  </label>
                  <VIDCNativeInput
                    id={fullNameId}
                    type="text"
                    required
                    placeholder={isLaos ? 'e.g. John Doe' : 'Nguyễn Văn A'}
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] outline-none"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label htmlFor={phoneId} className="text-xs font-bold text-slate-700">
                    {isLaos ? 'Phone Number *' : 'Số điện thoại *'}
                  </label>
                  <VIDCNativeInput
                    id={phoneId}
                    type="tel"
                    required
                    placeholder={isLaos ? 'e.g. +84 988 123 456' : '0988 123 456'}
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Work Email */}
                <div className="space-y-1">
                  <label htmlFor={workEmailId} className="text-xs font-bold text-slate-700">
                    {isLaos ? 'Work Email *' : 'Email công việc *'}
                  </label>
                  <VIDCNativeInput
                    id={workEmailId}
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.workEmail}
                    onChange={e => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] outline-none"
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-1">
                  <label htmlFor={companyNameId} className="text-xs font-bold text-slate-700">
                    {isLaos ? 'Enterprise / Organization' : 'Tên Doanh nghiệp / Tổ chức'}
                  </label>
                  <VIDCNativeInput
                    id={companyNameId}
                    type="text"
                    placeholder={isLaos ? 'Your Company' : 'Công ty Cổ phần ABC'}
                    value={formData.companyName}
                    onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Selected Tier */}
                <div className="space-y-1">
                  <label htmlFor={selectedTierId} className="text-xs font-bold text-slate-700">
                    {isLaos ? 'WAF Plan / Tier' : 'Gói cước quan tâm'}
                  </label>
                  <VIDCNativeSelect
                    id={selectedTierId}
                    value={formData.selectedTier}
                    onChange={e => setFormData({ ...formData, selectedTier: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] outline-none bg-white"
                  >
                    <option value="standard">STANDARD (360 USD/tháng)</option>
                    <option value="advance">ADVANCE (720 USD/tháng) - Phổ biến</option>
                    <option value="complete">COMPLETE (1.400 USD/tháng) - Toàn diện</option>
                    <option value="custom">Cấu hình tùy biến / Unlimited DDoS</option>
                  </VIDCNativeSelect>
                </div>

                {/* DDoS Requirement */}
                <div className="space-y-1">
                  <label htmlFor={ddosOptionId} className="text-xs font-bold text-slate-700">
                    {isLaos ? 'DDoS Defense Level' : 'Nhu cầu chống DDoS'}
                  </label>
                  <VIDCNativeSelect
                    id={ddosOptionId}
                    value={formData.ddosOption}
                    onChange={e => setFormData({ ...formData, ddosOption: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] outline-none bg-white"
                  >
                    <option value="standard">Theo gói cước (1 Gbps - 10 Gbps)</option>
                    <option value="unlimited">Unlimited DDoS Protection</option>
                    <option value="advanced_l7">Chống DDoS Lớp 7 chuyên sâu (Web DDoS)</option>
                  </VIDCNativeSelect>
                </div>
              </div>

              {/* Specific Notes */}
              <div className="space-y-1">
                <label htmlFor={notesId} className="text-xs font-bold text-slate-700">
                  {isLaos ? 'Specific Requirements / System Context' : 'Nhu cầu cụ thể & Quy mô hệ thống'}
                </label>
                <VIDCNativeTextarea
                  id={notesId}
                  rows={2}
                  placeholder={isLaos ? 'e.g. 5 domains, 2TB traffic, API protection for payment gateways...' : 'Ví dụ: 3 website, bảo vệ API cổng thanh toán, chống bot cào quét dữ liệu...'}
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] outline-none resize-none"
                />
              </div>

              {/* ND13 Consent */}
              <div className="pt-1">
                <label htmlFor={nd13ConsentId} className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600">
                  <VIDCNativeInput
                    id={nd13ConsentId}
                    type="checkbox"
                    checked={formData.nd13Consent}
                    onChange={e => setFormData({ ...formData, nd13Consent: e.target.checked })}
                    className="mt-0.5 rounded border-slate-300 text-[var(--vidc-color-brand-red)] focus:ring-[var(--vidc-color-brand-red)]"
                  />
                  <span>
                    {isLaos 
                      ? 'I agree to the Personal Data Protection terms (Decree 13/2023/ND-CP) and allow Viettel IDC to process contact information for technical consultation.'
                      : 'Tôi đồng ý với Điều khoản Bảo vệ dữ liệu cá nhân (Nghị định 13/2023/NĐ-CP) và cho phép Viettel IDC xử lý thông tin để liên hệ tư vấn.'}
                  </span>
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <VIDCNativeButton
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white text-xs sm:text-sm font-extrabold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{isLaos ? 'Submitting...' : 'Đang gửi thông tin...'}</span>
                    </>
                  ) : (
                    <>
                      <span>{isLaos ? 'Submit Request & Activate Trial' : 'Gửi Yêu Cầu & Nhận Tư Vấn Miễn Phí'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </VIDCNativeButton>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
