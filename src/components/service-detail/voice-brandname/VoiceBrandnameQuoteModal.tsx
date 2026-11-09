import React, { useState } from 'react';
import { X, Send, CheckCircle2, PhoneCall, Building2, User, Mail, FileText, Sparkles } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface VoiceBrandnameQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentMarket?: SEAMarket;
}

export const VoiceBrandnameQuoteModal: React.FC<VoiceBrandnameQuoteModalProps> = ({
  isOpen,
  onClose,
  currentMarket,
}) => {
  const isLaos = currentMarket?.code !== 'vn';
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    expectedBrandname: '',
    packageType: 'business',
    hasLegalCert: 'no',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate success
    }, 400);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-950 p-6 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--vidc-color-brand-red)] text-white flex items-center justify-center shadow">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {isLaos ? 'Voice Brandname Consultation Request' : 'Đăng Ký Tư Vấn Viettel Voice Brandname'}
              </h3>
              <p className="text-xs text-slate-300">
                {isLaos ? 'Quick onboarding & MIC certification support' : 'Hỗ trợ thủ tục hồ sơ Cục ATTT & Đấu nối tổng đài 24/7'}
              </p>
            </div>
          </div>
          <VIDCNativeButton
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </VIDCNativeButton>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-black text-slate-900">
                {isLaos ? 'Request Received Successfully!' : 'Gửi Yêu Cầu Thành Công!'}
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                {isLaos
                  ? 'Viettel IDC enterprise telecommunication specialists will contact you within 15 minutes to guide your Brandname declaration process.'
                  : 'Chuyên viên giải pháp viễn thông Viettel IDC sẽ liên hệ với Quý khách trong vòng 15 phút để hướng dẫn chuẩn bị hồ sơ và báo giá chi tiết.'}
              </p>
              <div className="pt-4">
                <VIDCNativeButton
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-[var(--vidc-color-brand-red)] text-white font-bold text-xs shadow hover:bg-red-700 transition-all cursor-pointer"
                >
                  Hoàn tất &amp; Đóng
                </VIDCNativeButton>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Company Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-red-600" />
                    Tên Doanh nghiệp / Tổ chức *
                  </label>
                  <VIDCNativeInput
                    type="text"
                    required
                    placeholder="VD: Công ty Cổ phần Tập đoàn ABC"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  />
                </div>

                {/* Contact Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-red-600" />
                    Người liên hệ *
                  </label>
                  <VIDCNativeInput
                    type="text"
                    required
                    placeholder="VD: Nguyễn Văn A"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-red-600" />
                    Số điện thoại liên hệ *
                  </label>
                  <VIDCNativeInput
                    type="tel"
                    required
                    placeholder="VD: 0988 123 456"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-red-600" />
                    Email công việc *
                  </label>
                  <VIDCNativeInput
                    type="email"
                    required
                    placeholder="VD: contact@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Expected Brandname */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-red-600" />
                    Tên định danh dự kiến (3 - 11 ký tự)
                  </label>
                  <VIDCNativeInput
                    type="text"
                    maxLength={11}
                    placeholder="VD: VIETTEL POST"
                    value={formData.expectedBrandname}
                    onChange={(e) => setFormData({ ...formData, expectedBrandname: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 uppercase font-mono focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  />
                </div>

                {/* Package Type */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-red-600" />
                    Gói cước quan tâm
                  </label>
                  <VIDCNativeSelect
                    value={formData.packageType}
                    onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  >
                    <option value="starter">Gói Khởi Tạo (Starter) - Hộ KD, Startup</option>
                    <option value="business">Gói Chuyên Nghiệp (Business) - Phổ biến nhất</option>
                    <option value="enterprise">Gói Doanh Nghiệp Lớn (Enterprise / Custom)</option>
                  </VIDCNativeSelect>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">
                  Nhu cầu cụ thể (Hệ thống tổng đài hiện có, sản lượng cuộc gọi dự kiến...)
                </label>
                <VIDCNativeTextarea
                  rows={3}
                  placeholder="Ghi chú thêm về hệ thống tổng đài (Asterisk, FreePBX, Cisco, Cloud PBX...) hoặc yêu cầu hỗ trợ hồ sơ..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <VIDCNativeButton
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>GỬI YÊU CẦU TƯ VẤN &amp; HỒ SƠ</span>
                </VIDCNativeButton>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
