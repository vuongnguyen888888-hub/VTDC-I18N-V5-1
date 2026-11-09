import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Send, MapPin, ShieldCheck, PhoneCall } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VMaaSConfigItem } from './VMaaSPricing';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface VMaaSQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedConfig?: VMaaSConfigItem | null;
  selectedDc?: string;
  actionType?: 'register' | 'poc' | 'consult';
  currentMarket?: SEAMarket;
}

export const VMaaSQuoteModal: React.FC<VMaaSQuoteModalProps> = ({
  isOpen,
  onClose,
  selectedConfig,
  selectedDc = 'TTDL Viettel IDC Việt Nam',
  actionType = 'poc',
  currentMarket,
}) => {
  const isLaos = currentMarket?.code === 'la';

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [modelRequirement, setModelRequirement] = useState('Qwen3-32B / Reasoning & Agent');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  const modalTitle = actionType === 'poc'
    ? (isLaos ? 'Register for vMaaS 50M PoC Trial (1 Month)' : 'Đăng Ký PoC Trải Nghiệm Gói vMaaS 50M')
    : actionType === 'consult'
    ? (isLaos ? 'Request Custom Architecture & Enterprise Estimate' : 'Yêu Cầu Tư Vấn Gói Customize & BYOM')
    : (isLaos ? 'Register vMaaS API Package' : 'Đăng Ký Dịch Vụ Viettel Model as a Service (vMaaS)');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[var(--vidc-legacy-hex-18181a)] text-white p-6 sm:p-7 flex items-center justify-between border-b border-slate-800">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-extrabold bg-red-500/20 text-red-400 border border-red-500/30">
              <Sparkles className="w-3 h-3" />
              <span>VIETTEL MODEL AS A SERVICE (vMaaS)</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              {modalTitle}
            </h3>
          </div>

          <VIDCNativeButton
            type="button"
            onClick={onClose}
            aria-label="Đóng cửa sổ"
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </VIDCNativeButton>
        </div>

        {/* Content Body */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-extrabold text-slate-900">
              {isLaos ? 'Submission Successful!' : 'Đăng Ký Thành Công!'}
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              {isLaos 
                ? 'Thank you for your interest. Viettel IDC AI Solution Engineers will contact you within 15 minutes to provision API credentials and PoC activation.'
                : 'Cảm ơn Quý khách đã đăng ký dịch vụ Viettel Model as a Service (vMaaS). Chuyên gia AI của Viettel IDC sẽ liên hệ trong vòng 15 phút để cung cấp API Endpoint, Key dùng thử và tài liệu kỹ thuật.'}
            </p>
            <div className="pt-4">
              <VIDCNativeButton
                type="button"
                onClick={handleReset}
                className="px-8 py-3 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[color:var(--vidc-color-brand-red-hover)] text-white font-extrabold text-xs uppercase tracking-wider cursor-pointer"
              >
                {isLaos ? 'Close Window' : 'Hoàn Tất & Đóng'}
              </VIDCNativeButton>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4 max-h-[80vh] overflow-y-auto">
            
            {/* Selected Config Info Pill */}
            {selectedConfig && (
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center justify-between text-xs">
                <div>
                  <span className="font-extrabold text-slate-900 block sm:inline mr-2">
                    {selectedConfig.name}
                  </span>
                  <span className="text-slate-500 font-medium">
                    ({selectedConfig.tokenAllocation})
                  </span>
                </div>
                <div className="flex items-center gap-1 font-bold text-[var(--vidc-color-brand-red)]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedDc}</span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <VIDCNativeInput
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Nguyễn Văn A"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]/20 focus:border-[var(--vidc-color-brand-red)]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <VIDCNativeInput
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0912 345 678"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]/20 focus:border-[var(--vidc-color-brand-red)]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Email doanh nghiệp <span className="text-red-500">*</span>
                </label>
                <VIDCNativeInput
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contact@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]/20 focus:border-[var(--vidc-color-brand-red)]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Tên Công ty / Tổ chức
                </label>
                <VIDCNativeInput
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Công ty Cổ phần Công nghệ ABC"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]/20 focus:border-[var(--vidc-color-brand-red)]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Nhu cầu mô hình AI quan tâm
              </label>
              <VIDCNativeSelect
                value={modelRequirement}
                onChange={(e) => setModelRequirement(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]/20 focus:border-[var(--vidc-color-brand-red)] bg-white"
              >
                <option value="Qwen3-32B / Reasoning & Agent">Qwen/Qwen3-32B (Suy luận đa bước, RAG nâng cao & Tool Calling)</option>
                <option value="Qwen3-14B / Balanced Chatbot">Qwen/Qwen3-14B (Chatbot CSKH, tóm tắt, xử lý văn bản độ chính xác cao)</option>
                <option value="Llama-3.1-8B & Llama-SEA-LION">Meta Llama 3.1 & SEA-LION v3.5 (Tối ưu tiếng Việt & Đông Nam Á)</option>
                <option value="Qwen 2.5-VL / Multimodal VLM">Qwen 2.5-VL-7B (Thị giác máy tính, bóc tách tài liệu, hóa đơn)</option>
                <option value="Embedding BGE-M3 & Reranker">BAAI BGE-M3 & BGE-Reranker-V2-M3 (Enterprise RAG Pipeline)</option>
                <option value="Stability SDXL Turbo">Stability AI SDXL Turbo (Text-to-Image sinh ảnh tức thì)</option>
                <option value="Dedicated Custom Endpoint / BYOM">Triển khai mô hình riêng của doanh nghiệp (BYOM) & Dedicated Endpoint</option>
              </VIDCNativeSelect>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Ghi chú thêm hoặc ước tính lượng token / tháng
              </label>
              <VIDCNativeTextarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ví dụ: Cần tích hợp chatbot hỗ trợ khách hàng, dự kiến 50 triệu tokens/tháng..."
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]/20 focus:border-[var(--vidc-color-brand-red)]"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <VIDCNativeButton
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[color:var(--vidc-color-brand-red-hover)] active:bg-[var(--vidc-legacy-hex-aa0025)] text-white font-extrabold text-xs sm:text-sm transition-all shadow-md shadow-red-500/20 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
              >
                <Send className="w-4 h-4" />
                <span>{isLaos ? 'SUBMIT REQUEST' : 'GỬI YÊU CẦU ĐĂNG KÝ'}</span>
              </VIDCNativeButton>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};
