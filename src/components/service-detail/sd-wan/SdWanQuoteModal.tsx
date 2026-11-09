import React, { useState } from 'react';
import { X, CheckCircle2, Shield, Send, ArrowRight, Network } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface SdWanQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentMarket?: SEAMarket;
}

export const SdWanQuoteModal: React.FC<SdWanQuoteModalProps> = ({
  isOpen,
  onClose,
  currentMarket,
}) => {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [branchCount, setBranchCount] = useState('10 - 50 chi nhánh');
  const [architecture, setArchitecture] = useState('SD-WAN Lai (Hybrid WAN - MPLS + Internet)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const isLaos = currentMarket?.code !== 'vn';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip */}
        <div className="bg-gradient-to-r from-[var(--vidc-color-brand-red)] to-red-700 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-white/10">
              <Network className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white">
                {isLaos ? 'Request Viettel SD-WAN Consultation' : 'Đăng Ký Tư Vấn Viettel SD-WAN'}
              </h3>
              <p className="text-[11px] text-red-100 font-normal">
                {isLaos ? 'Network Architecture & Pricing Survey' : 'Khảo sát hạ tầng mạng & Báo giá chi tiết'}
              </p>
            </div>
          </div>
          <VIDCNativeButton
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </VIDCNativeButton>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                {isLaos ? 'Registration Successful!' : 'Đăng Ký Thành Công!'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                {isLaos
                  ? 'Thank you. Viettel IDC’s enterprise network solution architects will contact you within 15 minutes.'
                  : 'Cảm ơn Quý khách. Đội ngũ kiến trúc sư giải pháp mạng Viettel IDC sẽ liên hệ tư vấn và khảo sát trong vòng 15 phút.'}
              </p>
              <div className="pt-4">
                <VIDCNativeButton
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-[var(--vidc-button-primary-background-default)] text-white text-xs font-bold hover:bg-[var(--vidc-button-primary-background-hover)] transition-all"
                >
                  {isLaos ? 'Close Window' : 'Đóng cửa sổ'}
                </VIDCNativeButton>
              </div>
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
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
                    placeholder="0988xxxxxx"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isLaos ? 'Work Email *' : 'Email doanh nghiệp *'}
                  </label>
                  <VIDCNativeInput
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isLaos ? 'Company Name' : 'Tên doanh nghiệp'}
                  </label>
                  <VIDCNativeInput
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Tập đoàn / Công ty XYZ"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isLaos ? 'Architecture Model' : 'Kiến trúc triển khai'}
                  </label>
                  <VIDCNativeSelect
                    value={architecture}
                    onChange={(e) => setArchitecture(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[var(--vidc-color-brand-red)] bg-white"
                  >
                    <option value="SD-WAN Lai (Hybrid WAN - MPLS + Internet)">SD-WAN Lai (Hybrid WAN)</option>
                    <option value="SD-WAN Thuần Internet (Cloud-First)">SD-WAN Thuần Internet (Cloud-First)</option>
                    <option value="SD-WAN Chi nhánh di động (4G/LTE/5G)">SD-WAN Chi nhánh di động (4G/LTE)</option>
                    <option value="Tư vấn kiến trúc phù hợp">Tư vấn kiến trúc phù hợp</option>
                  </VIDCNativeSelect>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isLaos ? 'Branch Scale' : 'Quy mô chi nhánh'}
                  </label>
                  <VIDCNativeSelect
                    value={branchCount}
                    onChange={(e) => setBranchCount(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[var(--vidc-color-brand-red)] bg-white"
                  >
                    <option value="Dưới 10 chi nhánh">Dưới 10 chi nhánh</option>
                    <option value="10 - 50 chi nhánh">10 - 50 chi nhánh</option>
                    <option value="Trên 50 chi nhánh">Trên 50 chi nhánh</option>
                    <option value="Điểm bán di động / Pop-up">Điểm bán di động / Pop-up</option>
                  </VIDCNativeSelect>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isLaos ? 'Network Requirements / Notes' : 'Yêu cầu kỹ thuật chi tiết'}
                </label>
                <VIDCNativeTextarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ghi chú về số lượng site, hạ tầng ISP hiện tại hoặc yêu cầu đặc biệt..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[var(--vidc-color-brand-red)]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <VIDCNativeButton
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  {isLaos ? 'Cancel' : 'Hủy bỏ'}
                </VIDCNativeButton>
                <VIDCNativeButton
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white text-xs font-extrabold transition-all shadow-md flex items-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Đang gửi...</span>
                  ) : (
                    <>
                      <span>{isLaos ? 'Submit Request' : 'Gửi Yêu Cầu Tư Vấn'}</span>
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
