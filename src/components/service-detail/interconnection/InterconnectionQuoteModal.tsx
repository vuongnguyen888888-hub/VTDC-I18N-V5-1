import React, { useState } from 'react';
import { X, CheckCircle, PhoneCall, ShieldCheck, ArrowRight, Cable, Globe } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface InterconnectionQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentMarket?: SEAMarket;
  customNotes?: string;
}

export const InterconnectionQuoteModal: React.FC<InterconnectionQuoteModalProps> = ({
  isOpen,
  onClose,
  currentMarket,
  customNotes = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [connType, setConnType] = useState('dark-fibre');
  const [bandwidth, setBandwidth] = useState('1Gbps');
  const [notes, setNotes] = useState(customNotes);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const isLaos = currentMarket?.code !== 'vn';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      // Auto close after 3.5s
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 2500);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Close Button */}
        <VIDCNativeButton
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </VIDCNativeButton>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">
              {isLaos ? 'Consultation Request Sent!' : 'Gửi Yêu Cầu Thành Công!'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
              {isLaos
                ? 'Viettel IDC enterprise telecommunications team will contact you within 15 minutes for site survey and topology design.'
                : 'Chuyên gia giải pháp mạng & kênh truyền của Viettel IDC sẽ liên hệ lại với Quý khách trong vòng 15 phút để khảo sát và báo giá.'}
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{isLaos ? 'TECHNICAL CONSULTATION' : 'TƯ VẤN KỸ THUẬT & BÁO GIÁ'}</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                {isLaos ? 'Viettel Interconnection Leased Line' : 'Đăng Ký Tư Vấn Viettel Interconnection'}
              </h3>
              <p className="text-xs text-slate-500">
                {isLaos
                  ? 'Fill out the form below to receive customized fiber route survey and carrier pricing.'
                  : 'Vui lòng cung cấp thông tin để nhận phương án thiết kế kênh truyền và báo giá tốt nhất.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isLaos ? 'Full Name *' : 'Họ và tên *'}
                  </label>
                  <VIDCNativeInput
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={isLaos ? 'Nguyen Van A' : 'Nguyễn Văn A'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isLaos ? 'Work Email *' : 'Email doanh nghiệp *'}
                  </label>
                  <VIDCNativeInput
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isLaos ? 'Company / Organization' : 'Tên doanh nghiệp'}
                  </label>
                  <VIDCNativeInput
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={isLaos ? 'Company ABC' : 'Công ty Cổ phần ABC'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isLaos ? 'Connection Type' : 'Hình thức kết nối'}
                  </label>
                  <VIDCNativeSelect
                    value={connType}
                    onChange={(e) => setConnType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] bg-white"
                  >
                    <option value="dark-fibre">Dark-Fibre (Quang trắng)</option>
                    <option value="ip-transit">IP Transit (Internet cấp nhà mạng)</option>
                    <option value="iplc">IPLC (Kênh quốc tế)</option>
                    <option value="wan-vpn">Mạng WAN / VPN</option>
                    <option value="fttx">FTTx (Cáp quang băng rộng)</option>
                  </VIDCNativeSelect>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isLaos ? 'Required Bandwidth' : 'Băng thông dự kiến'}
                  </label>
                  <VIDCNativeSelect
                    value={bandwidth}
                    onChange={(e) => setBandwidth(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] bg-white"
                  >
                    <option value="100Mbps">100 Mbps</option>
                    <option value="1Gbps">1 Gbps</option>
                    <option value="10Gbps">10 Gbps</option>
                    <option value="10Gbps+">&gt; 10 Gbps (Không giới hạn)</option>
                    <option value="custom">Tùy biến theo thiết kế</option>
                  </VIDCNativeSelect>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isLaos ? 'Points of Connection / Notes' : 'Địa điểm đấu nối / Ghi chú thêm'}
                </label>
                <VIDCNativeTextarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={
                    isLaos
                      ? 'Specify DC location, office address, or special requirements...'
                      : 'Ví dụ: Đấu nối giữa TTDL Viettel Hòa Lạc và Trụ sở tại Cầu Giấy...'
                  }
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] resize-none"
                />
              </div>

              <div className="pt-2">
                <VIDCNativeButton
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-d4002d)] shadow-md shadow-red-900/20 transition-all transform active:scale-98"
                >
                  <span>{isLaos ? 'Submit Consultation Request' : 'GỬI YÊU CẦU TƯ VẤN & BÁO GIÁ'}</span>
                  <ArrowRight className="w-4 h-4" />
                </VIDCNativeButton>
              </div>

              <p className="text-[11px] text-slate-400 text-center">
                🔒 Cam kết bảo mật thông tin &amp; liên hệ hỗ trợ 24/7 theo tiêu chuẩn ISO 27001.
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
