import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldAlert, Send, Sparkles } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { trackGenerateLead } from '../../../lib/analytics';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface AntiDdosQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  customNotes?: string;
  currentMarket?: SEAMarket;
}

export const AntiDdosQuoteModal: React.FC<AntiDdosQuoteModalProps> = ({
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
  const [selectedPlan, setSelectedPlan] = useState('DDM1G');
  const [ipCount, setIpCount] = useState('8');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (customNotes) {
      setNotes(customNotes);
      if (customNotes.includes('DDM1G')) setSelectedPlan('DDM1G');
      else if (customNotes.includes('DDM2G')) setSelectedPlan('DDM2G');
      else if (customNotes.includes('DDM3G')) setSelectedPlan('DDM3G');
      else if (customNotes.includes('DDM5G')) setSelectedPlan('DDM5G');
      else if (customNotes.includes('> 100 Gbps')) setSelectedPlan('CUSTOM');
    }
  }, [customNotes, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate registration submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Track standard lead generation event with zero-PII
      trackGenerateLead('enterprise', 'viettel-anti-ddos-volume-based', 'anti_ddos_quote_modal');
    }, 800);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[var(--vidc-legacy-hex-222225)]">
                {isLaos ? 'Anti-DDoS Consultation & Trial' : 'Đăng Ký Tư Vấn & Dùng Thử Anti-DDoS'}
              </h3>
              <p className="text-[11px] text-slate-500">
                Viettel Anti-DDoS Volume-Based Layer 4
              </p>
            </div>
          </div>

          <VIDCNativeButton
            type="button"
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </VIDCNativeButton>
        </div>

        {/* Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                {isLaos ? 'Request Received Successfully!' : 'Gửi Yêu Cầu Thành Công!'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                {isLaos 
                  ? 'Viettel IDC cybersecurity engineers will contact you within 15 minutes to initiate technical verification and deploy test protection.'
                  : 'Chuyên gia giải pháp Viettel IDC sẽ liên hệ trực tiếp với Quý khách trong vòng 15 phút để hỗ trợ cấu hình khai báo dải IP và kích hoạt dùng thử.'}
              </p>
              <VIDCNativeButton
                type="button"
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-xl bg-[var(--vidc-color-brand-red)] text-white font-bold text-xs cursor-pointer shadow-xs"
              >
                {isLaos ? 'Close Window' : 'Đóng cửa sổ'}
              </VIDCNativeButton>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
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
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:outline-hidden focus:border-[var(--vidc-color-brand-red)]"
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
                    placeholder="0988 888 888"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:outline-hidden focus:border-[var(--vidc-color-brand-red)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isLaos ? 'Work Email *' : 'Email công việc *'}
                  </label>
                  <VIDCNativeInput
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@company.com"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:outline-hidden focus:border-[var(--vidc-color-brand-red)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isLaos ? 'Company Name' : 'Tên doanh nghiệp / Tổ chức'}
                  </label>
                  <VIDCNativeInput
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Công ty Cổ phần..."
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:outline-hidden focus:border-[var(--vidc-color-brand-red)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Gói dịch vụ quan tâm
                  </label>
                  <VIDCNativeSelect
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs bg-white focus:outline-hidden focus:border-[var(--vidc-color-brand-red)]"
                  >
                    <option value="DDM1G">Gói DDM1G (1 Gbps - Dùng thử)</option>
                    <option value="DDM2G">Gói DDM2G (2 Gbps - 32 IP)</option>
                    <option value="DDM3G">Gói DDM3G (3 Gbps - 64 IP - Phổ biến)</option>
                    <option value="DDM5G">Gói DDM5G (5 Gbps - 256 IP)</option>
                    <option value="CUSTOM">Gói tùy biến (&gt; 100 Gbps)</option>
                  </VIDCNativeSelect>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Số lượng IP cần bảo vệ
                  </label>
                  <VIDCNativeSelect
                    value={ipCount}
                    onChange={(e) => setIpCount(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs bg-white focus:outline-hidden focus:border-[var(--vidc-color-brand-red)]"
                  >
                    <option value="8">8 IP (Gói DDM1G)</option>
                    <option value="32">32 IP (Gói DDM2G)</option>
                    <option value="64">64 IP (Gói DDM3G)</option>
                    <option value="256">256 IP (/24 - Gói DDM5G)</option>
                    <option value="custom">Nhiều hơn 256 IP</option>
                  </VIDCNativeSelect>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nhu cầu cụ thể / Mô tả hạ tầng
                </label>
                <VIDCNativeTextarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ghi chú thêm về hạ tầng mạng, đường truyền Internet hoặc tình trạng bị tấn công..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:outline-hidden focus:border-[var(--vidc-color-brand-red)]"
                />
              </div>

              <div className="pt-2">
                <VIDCNativeButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-d4002e)] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Đang gửi thông tin...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{isLaos ? 'SUBMIT CONSULTATION REQUEST' : 'GỬI YÊU CẦU TƯ VẤN & DÙNG THỬ'}</span>
                    </>
                  )}
                </VIDCNativeButton>
              </div>

              <p className="text-[11px] text-slate-400 text-center font-normal">
                Bảo mật thông tin 100%. Đội ngũ an toàn thông tin Viettel IDC hỗ trợ 24/7/365.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
