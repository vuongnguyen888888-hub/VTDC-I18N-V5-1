import React, { useState } from 'react';
import { X, CheckCircle, Send, Network } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface HybridConnectQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentMarket?: SEAMarket;
  customNotes?: string;
}

export const HybridConnectQuoteModal: React.FC<HybridConnectQuoteModalProps> = ({
  isOpen,
  onClose,
  currentMarket,
  customNotes,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    sourceType: 'Colocation',
    redundancy: 'Single',
    port: '1 Gbps',
    notes: customNotes || '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const isLaos = currentMarket?.code !== 'vn';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-[var(--vidc-legacy-hex-18181a)] text-white p-6 relative">
          <VIDCNativeButton
            onClick={onClose}
            className="absolute top-5 right-5 p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </VIDCNativeButton>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg bg-[var(--vidc-color-brand-red)] text-white flex items-center justify-center">
              <Network className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
              {isLaos ? 'TECHNICAL CONSULTATION' : 'TƯ VẤN KỸ THUẬT & KHẢO SÁT'}
            </span>
          </div>
          <h3 className="text-xl font-extrabold text-white">
            {isLaos ? 'Request Viettel Hybrid Connect Consultation' : 'Đăng Ký Tư Vấn Viettel Hybrid Connect'}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            {isLaos
              ? 'Our network solution architect will contact you within 15 minutes.'
              : 'Chuyên gia giải pháp mạng Viettel IDC sẽ liên hệ tư vấn và khảo sát trong 15 phút.'}
          </p>
        </div>

        {/* Modal Body */}
        {submitted ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">
              {isLaos ? 'Request Received Successfully!' : 'Gửi Yêu Cầu Thành Công!'}
            </h4>
            <p className="text-sm text-slate-600">
              {isLaos
                ? 'Thank you for your interest. We will contact you promptly.'
                : 'Cảm ơn Quý khách. Đội ngũ kỹ sư mạng Viettel IDC sẽ liên hệ ngay.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {isLaos ? 'Full Name *' : 'Họ và tên *'}
                </label>
                <VIDCNativeInput
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder={isLaos ? 'e.g. John Doe' : 'Ví dụ: Nguyễn Văn A'}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {isLaos ? 'Phone Number *' : 'Số điện thoại *'}
                </label>
                <VIDCNativeInput
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="0988 888 888"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {isLaos ? 'Work Email *' : 'Email doanh nghiệp *'}
                </label>
                <VIDCNativeInput
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contact@company.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {isLaos ? 'Company Name' : 'Tên doanh nghiệp / Đơn vị'}
                </label>
                <VIDCNativeInput
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="Công ty TNHH ABC"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1 text-[11px]">
                  Hạ tầng nguồn
                </label>
                <VIDCNativeSelect
                  value={formData.sourceType}
                  onChange={(e) => setFormData({ ...formData, sourceType: e.target.value })}
                  className="w-full px-2.5 py-2 rounded-lg border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] outline-none"
                >
                  <option value="Colocation">Viettel Colocation</option>
                  <option value="On-Premise P2P">On-Premise P2P (Cáp quang)</option>
                  <option value="On-Premise MPLS">On-Premise MPLS L2/L3</option>
                </VIDCNativeSelect>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1 text-[11px]">
                  Dự phòng
                </label>
                <VIDCNativeSelect
                  value={formData.redundancy}
                  onChange={(e) => setFormData({ ...formData, redundancy: e.target.value })}
                  className="w-full px-2.5 py-2 rounded-lg border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] outline-none"
                >
                  <option value="Single">Đơn (Single Link)</option>
                  <option value="Redundant">Dự phòng (Redundant Link)</option>
                </VIDCNativeSelect>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1 text-[11px]">
                  Chuẩn cổng
                </label>
                <VIDCNativeSelect
                  value={formData.port}
                  onChange={(e) => setFormData({ ...formData, port: e.target.value })}
                  className="w-full px-2.5 py-2 rounded-lg border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] outline-none"
                >
                  <option value="1 Gbps">1 Gbps SFP</option>
                  <option value="10 Gbps">10 Gbps SFP+</option>
                </VIDCNativeSelect>
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                {isLaos ? 'Requirements & Notes' : 'Yêu cầu kỹ thuật & Vị trí đấu nối'}
              </label>
              <VIDCNativeTextarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Ví dụ: Cần kéo kênh từ Data Center Pháp Vân sang Viettel IDC Hòa Lạc..."
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] outline-none resize-none"
              />
            </div>

            <div className="pt-2">
              <VIDCNativeButton
                type="submit"
                className="w-full py-3.5 rounded-xl font-extrabold text-white bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-d4002d)] shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{isLaos ? 'SUBMIT CONSULTATION REQUEST' : 'GỬI YÊU CẦU TƯ VẤN KỸ THUẬT'}</span>
              </VIDCNativeButton>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
