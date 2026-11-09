import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Send } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { trackGenerateLead } from '../../../lib/analytics';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface ThreatIntelligenceQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  customNotes?: string;
  currentMarket?: SEAMarket;
}

export const ThreatIntelligenceQuoteModal: React.FC<ThreatIntelligenceQuoteModalProps> = ({
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
  const [selectedPlan, setSelectedPlan] = useState('threat-check');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (customNotes) {
      setNotes(customNotes);
      const lower = customNotes.toLowerCase();
      if (lower.includes('drp') || lower.includes('digital risk')) setSelectedPlan('drp');
      else if (lower.includes('easm') || lower.includes('surface')) setSelectedPlan('easm');
      else if (lower.includes('professional')) setSelectedPlan('professional');
      else if (lower.includes('feeds')) setSelectedPlan('threat-feeds');
      else if (lower.includes('threat check') || lower.includes('đánh giá')) setSelectedPlan('threat-check');
    }
  }, [customNotes, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      trackGenerateLead('enterprise', 'viettel-threat-intelligence', 'threat_intelligence_quote_modal');
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
        {/* Header */}
        <div className="bg-[var(--vidc-color-brand-red)] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-white shrink-0" />
            <div>
              <h3 id="modal-title" className="text-base font-extrabold text-white leading-tight">
                {isLaos ? 'Threat Intelligence & Threat Check Consultation' : 'Tư Vấn Threat Intelligence & Đánh Giá Threat Check'}
              </h3>
              <p className="text-xs text-white/85">Viettel Cyber Security (24/7 Threat Telemetry)</p>
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
              <h4 className="text-xl font-extrabold text-slate-900">
                {isLaos ? 'Registration Successful!' : 'Đăng Ký Thành Công!'}
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                {isLaos
                  ? 'Thank you for your interest. A Viettel Threat Intelligence specialist will contact you within 15 minutes.'
                  : 'Cảm ơn quý khách đã gửi thông tin. Chuyên gia an ninh mạng của Viettel Threat Intelligence sẽ liên hệ lại trong vòng 15 phút để tư vấn & hỗ trợ đánh giá Threat Check.'}
              </p>
              <VIDCNativeButton
                type="button"
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold transition-all cursor-pointer"
              >
                {isLaos ? 'Close Window' : 'Đóng cửa sổ'}
              </VIDCNativeButton>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isLaos ? 'Full Name *' : 'Họ và tên *'}
                </label>
                <VIDCNativeInput
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={isLaos ? 'e.g. John Doe' : 'Ví dụ: Nguyễn Văn A'}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isLaos ? 'Phone Number *' : 'Số điện thoại *'}
                  </label>
                  <VIDCNativeInput
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0912 345 678"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isLaos ? 'Business Email *' : 'Email doanh nghiệp *'}
                  </label>
                  <VIDCNativeInput
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isLaos ? 'Company / Organization' : 'Tên doanh nghiệp / Đơn vị'}
                </label>
                <VIDCNativeInput
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder={isLaos ? 'Company Name' : 'Công ty Cổ phần / Ngân hàng...'}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isLaos ? 'Service Package of Interest' : 'Gói dịch vụ quan tâm'}
                </label>
                <VIDCNativeSelect
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent bg-white"
                >
                  <option value="threat-check">Đánh giá nhanh Threat Check (Chấm điểm an ninh A - F)</option>
                  <option value="professional">Gói Professional (Threat Feeds, Vulnerability, Malware, APT)</option>
                  <option value="drp">Gói Digital Risk Protection (DRP - Bảo vệ thương hiệu & Chợ đen)</option>
                  <option value="easm">Gói External Attack Surface Management (EASM - Rà quét bề mặt ngoài)</option>
                  <option value="threat-feeds">Gói Threat Feeds (MRTI tích hợp SIEM/EDR qua STIX/TAXII)</option>
                  <option value="advanced-extreme">Gói Advanced / Extreme (Tình báo chuyên sâu toàn diện)</option>
                </VIDCNativeSelect>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isLaos ? 'Requirements / Inquiry details' : 'Nhu cầu chi tiết'}
                </label>
                <VIDCNativeTextarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={isLaos ? 'Provide your details...' : 'Ví dụ: Cần tích hợp Threat Feed vào SIEM Splunk hoặc đánh giá rủi ro website ngân hàng...'}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent"
                />
              </div>

              <div className="pt-2">
                <VIDCNativeButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>{isLaos ? 'Submitting...' : 'Đang xử lý...'}</span>
                  ) : (
                    <>
                      <span>{isLaos ? 'SUBMIT REQUEST' : 'GỬI YÊU CẦU TƯ VẤN & BÁO GIÁ'}</span>
                      <Send className="w-3.5 h-3.5" />
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
