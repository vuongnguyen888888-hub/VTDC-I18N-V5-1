import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, CheckCircle2, Send } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface CsmpQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentMarket?: SEAMarket;
  initialNotes?: string;
}

export const CsmpQuoteModal: React.FC<CsmpQuoteModalProps> = ({
  isOpen,
  onClose,
  initialNotes = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [serverCount, setServerCount] = useState('50');
  const [packageTier, setPackageTier] = useState('gold');
  const [notes, setNotes] = useState(initialNotes);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialNotes) {
      setNotes(initialNotes);
      if (initialNotes.includes('Silver')) setPackageTier('silver');
      else if (initialNotes.includes('Gold')) setPackageTier('gold');
      else if (initialNotes.includes('Diamond')) setPackageTier('diamond');
      else if (initialNotes.includes('may đo') || initialNotes.includes('Custom')) setPackageTier('custom');
    }
  }, [initialNotes]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate registration submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2500);
    }, 800);
  };

  return (
    <div 
      id="csmp-consultation-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden my-8">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-gray-900 to-[var(--vidc-legacy-hex-1b1c20)] text-white p-6 relative">
          <VIDCNativeButton
            id="csmp-modal-close-btn"
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Đóng biểu mẫu"
          >
            <X className="w-5 h-5" />
          </VIDCNativeButton>

          <div className="flex items-center gap-2 text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Viettel CSMP - Cyber Security Maturity Program</span>
          </div>

          <h3 className="text-xl font-bold text-white">
            Đăng Ký Tư Vấn & Hội Viên CSMP
          </h3>
          <p className="text-xs text-gray-300 mt-1">
            Đội ngũ chuyên gia an ninh mạng Viettel sẽ liên hệ trong vòng 30 phút để khảo sát và báo giá.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-lg font-bold text-[var(--vidc-legacy-hex-222225)]">
                Gửi Yêu Cầu Thành Công!
              </h4>
              <p className="text-sm text-gray-600 max-w-xs mx-auto">
                Cảm ơn Quý doanh nghiệp đã quan tâm tới chương trình Viettel CSMP. Chuyên viên sẽ liên hệ ngay.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Họ và tên đại diện *
                </label>
                <VIDCNativeInput
                  type="text"
                  required
                  placeholder="Nguyễn Văn A"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--vidc-color-brand-red)]/30 focus:border-[color:var(--vidc-color-brand-red)]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">
                    Email công việc *
                  </label>
                  <VIDCNativeInput
                    type="email"
                    required
                    placeholder="name@company.com.vn"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--vidc-color-brand-red)]/30 focus:border-[color:var(--vidc-color-brand-red)]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">
                    Số điện thoại *
                  </label>
                  <VIDCNativeInput
                    type="tel"
                    required
                    placeholder="0912 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--vidc-color-brand-red)]/30 focus:border-[color:var(--vidc-color-brand-red)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">
                    Tên tổ chức / Doanh nghiệp *
                  </label>
                  <VIDCNativeInput
                    type="text"
                    required
                    placeholder="Tập đoàn ABC"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--vidc-color-brand-red)]/30 focus:border-[color:var(--vidc-color-brand-red)]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">
                    Gói dịch vụ quan tâm
                  </label>
                  <VIDCNativeSelect
                    value={packageTier}
                    onChange={(e) => setPackageTier(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--vidc-color-brand-red)]/30 focus:border-[color:var(--vidc-color-brand-red)] bg-white font-medium"
                  >
                    <option value="silver">Gói Silver (1.75 tỷ VNĐ/Năm - ≤50 máy chủ)</option>
                    <option value="gold">Gói Gold (2.83 tỷ VNĐ/Năm - ≤150 máy chủ)</option>
                    <option value="diamond">Gói Diamond (4.51 tỷ VNĐ/Năm - ≤300 máy chủ)</option>
                    <option value="custom">Gói May Đo / Khảo Sát Riêng (&gt;300 máy chủ)</option>
                  </VIDCNativeSelect>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Quy mô máy chủ dự kiến cần giám sát ATTT
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['≤ 50', '51 - 150', '151 - 300', '> 300'].map((item) => (
                    <VIDCNativeButton
                      key={item}
                      type="button"
                      onClick={() => setServerCount(item)}
                      className={`py-2 text-xs rounded border font-medium cursor-pointer transition-colors ${
                        serverCount === item
                          ? 'bg-red-50 text-[color:var(--vidc-color-brand-red)] border-[color:var(--vidc-color-brand-red)] font-bold'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {item}
                    </VIDCNativeButton>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Yêu cầu hoặc hiện trạng ATTT
                </label>
                <VIDCNativeTextarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ví dụ: Cần đánh giá trưởng thành theo NIST-CSF, kết hợp giám sát SOC 24/7 và kiểm thử Pentest..."
                  className="w-full px-3.5 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--vidc-color-brand-red)]/30 focus:border-[color:var(--vidc-color-brand-red)] text-xs"
                ></VIDCNativeTextarea>
              </div>

              <div className="pt-2">
                <VIDCNativeButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-md bg-[color:var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-cc002b)] text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Đang gửi thông tin...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>XÁC NHẬN ĐĂNG KÝ HỘI VIÊN CSMP</span>
                    </>
                  )}
                </VIDCNativeButton>
              </div>

              <p className="text-[11px] text-gray-400 text-center">
                Thông tin được bảo mật 100% theo tiêu chuẩn an ninh mạng Viettel IDC.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
