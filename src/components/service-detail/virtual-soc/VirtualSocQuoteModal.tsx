import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Send, Sparkles } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { trackGenerateLead } from '../../../lib/analytics';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface VirtualSocQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  customNotes?: string;
  currentMarket?: SEAMarket;
}

export const VirtualSocQuoteModal: React.FC<VirtualSocQuoteModalProps> = ({
  isOpen,
  onClose,
  customNotes = '',
  currentMarket,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [selectedTier, setSelectedTier] = useState('20-49');
  const [deviceCount, setDeviceCount] = useState('25');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (customNotes) {
      setNotes(customNotes);
      if (customNotes.includes('1 – 5') || customNotes.includes('1-5')) setSelectedTier('1-5');
      else if (customNotes.includes('6 – 19') || customNotes.includes('6-19')) setSelectedTier('6-19');
      else if (customNotes.includes('20 – 49') || customNotes.includes('20-49')) setSelectedTier('20-49');
      else if (customNotes.includes('50 – 99') || customNotes.includes('50-99')) setSelectedTier('50-99');
      else if (customNotes.includes('100')) setSelectedTier('100+');
      else if (customNotes.toLowerCase().includes('toàn diện')) setSelectedTier('full-soc');
    }
  }, [customNotes, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      trackGenerateLead('enterprise', 'viettel-virtual-soc', 'virtual_soc_quote_modal');
    }, 600);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header with Red Accent */}
        <div className="bg-[var(--vidc-color-brand-red)] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-white shrink-0" />
            <div>
              <h3 id="modal-title" className="text-base font-extrabold text-white leading-tight">
                {isLaos ? 'Consultation & Free Trial Registration' : 'Đăng Ký Tư Vấn & Dùng Thử vSOC'}
              </h3>
              <p className="text-xs text-white/85">Viettel Virtual SOC (24/7/365 Incident Response)</p>
            </div>
          </div>
          <VIDCNativeButton
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </VIDCNativeButton>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-black text-slate-900">
                {isLaos ? 'Registration Successful!' : 'Đăng Ký Thành Công!'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                {isLaos
                  ? 'Thank you for your interest in Viettel Virtual SOC. Our SOC specialist team will contact you within 15 minutes.'
                  : 'Cảm ơn Quý khách đã quan tâm đến Viettel Virtual SOC. Chuyên gia an toàn thông tin Viettel sẽ liên hệ trong vòng 15 phút.'}
              </p>
              <VIDCNativeButton
                type="button"
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[var(--vidc-color-brand-red)] text-white font-extrabold text-xs uppercase tracking-wider cursor-pointer"
              >
                {isLaos ? 'Close Window' : 'Đóng cửa sổ'}
              </VIDCNativeButton>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isLaos ? 'Full Name *' : 'Họ và tên *'}
                  </label>
                  <VIDCNativeInput
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isLaos ? 'Phone Number *' : 'Số điện thoại *'}
                  </label>
                  <VIDCNativeInput
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0988 123 456"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isLaos ? 'Business Email *' : 'Email doanh nghiệp *'}
                  </label>
                  <VIDCNativeInput
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@company.com"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isLaos ? 'Company / Organization' : 'Tên doanh nghiệp / Đơn vị'}
                  </label>
                  <VIDCNativeInput
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Công ty ABC"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Service Scale Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isLaos ? 'Select Tier' : 'Khung quy mô thiết bị'}
                  </label>
                  <VIDCNativeSelect
                    value={selectedTier}
                    onChange={(e) => setSelectedTier(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
                  >
                    <option value="1-5">1 – 5 thiết bị (5.000.000 VNĐ/node)</option>
                    <option value="6-19">6 – 19 thiết bị (4.000.000 VNĐ/node)</option>
                    <option value="20-49">20 – 49 thiết bị (3.500.000 VNĐ/node) - Phổ biến</option>
                    <option value="50-99">50 – 99 thiết bị (3.000.000 VNĐ/node)</option>
                    <option value="100+">Trên 100 thiết bị (2.000.000 VNĐ/node)</option>
                    <option value="full-soc">Gói SOC toàn diện (Network + Gateway + SIEM)</option>
                  </VIDCNativeSelect>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isLaos ? 'Quantity of Nodes' : 'Số lượng máy chủ/máy trạm'}
                  </label>
                  <VIDCNativeInput
                    type="number"
                    min="1"
                    value={deviceCount}
                    onChange={(e) => setDeviceCount(e.target.value)}
                    placeholder="25"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isLaos ? 'Specific Requirements / Notes' : 'Yêu cầu cụ thể / Ghi chú'}
                </label>
                <VIDCNativeTextarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={isLaos ? 'Trial period, existing firewall brands, compliance needs...' : 'Môi trường hiện tại, chủng loại Firewall, yêu cầu dùng thử...'}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2">
                <VIDCNativeButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-d4002d)] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-50 cursor-pointer min-h-[44px]"
                >
                  {isSubmitting ? (
                    <span>{isLaos ? 'Submitting...' : 'Đang gửi yêu cầu...'}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{isLaos ? 'CONFIRM REGISTRATION' : 'XÁC NHẬN ĐĂNG KÝ / DÙNG THỬ'}</span>
                    </>
                  )}
                </VIDCNativeButton>
              </div>

              <p className="text-[11px] text-slate-400 text-center italic">
                Cam kết bảo mật thông tin theo tiêu chuẩn ISO 27001 & bảo mật Viettel IDC.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
