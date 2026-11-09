'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Sparkles, 
  Headset, 
  Send, 
  X, 
  Minus, 
  PhoneCall, 
  Calendar, 
  FileText, 
  ExternalLink, 
  CheckCircle2 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChatMessage, 
  VIDA_PRESETS, 
  MINH_THU_PRESETS, 
  VIDA_KNOWLEDGE_BASE, 
  MINH_THU_RESPONSES 
} from './chatData';
import { VIDCNativeButton, VIDCNativeInput } from '@/components/ui/VIDCNativeControls';


const VIDA_ICON_URL = "https://res.cloudinary.com/dpyizq1m2/image/upload/v1786467848/vida-01_lcsarq.svg";
const MINH_THU_AVATAR = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80";

function VidaIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <img alt="ViDa AI" src={VIDA_ICON_URL} className={`${className} object-contain`} referrerPolicy="no-referrer" />
  );
}

interface DualModeChatWindowProps {
  isOpen: boolean;
  initialMode: 'ai' | 'consultant';
  onClose: () => void;
}

export function DualModeChatWindow({ isOpen, initialMode, onClose }: DualModeChatWindowProps) {
  const [activeMode, setActiveMode] = useState<'ai' | 'consultant'>(initialMode);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    setActiveMode(initialMode);
  }, [initialMode]);
  
  const [aiMessages, setAiMessages] = useState<ChatMessage[]>([
    {
      id: 'vida-welcome',
      sender: 'bot',
      mode: 'ai',
      text: 'Xin chào! Em là **ViDa** - Trợ lý AI thông minh của Viettel IDC (24/7).\n\nEm có thể hỗ trợ Anh/Chị giải đáp thông số kỹ thuật, tra cứu báo giá Cloud Server, tiêu chuẩn Data Center TIA-942 hoặc tư vấn giải pháp Hybrid Cloud. Anh/Chị cần hỗ trợ thông tin gì ạ?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      actions: [
        { label: '⚡ Báo giá Cloud Server', actionType: 'quote' },
        { label: '🏢 Tiêu chuẩn Data Center', actionType: 'tour' }
      ]
    }
  ]);

  const [consultantMessages, setConsultantMessages] = useState<ChatMessage[]>([
    {
      id: 'minhthu-welcome',
      sender: 'bot',
      mode: 'consultant',
      text: 'Dạ chào Anh/Chị! Em là **Nguyễn Minh Thư** - Chuyên viên tư vấn giải pháp cao cấp tại Viettel IDC. 🌸\n\nEm đang trực tuyến và sẵn sàng hỗ trợ Anh/Chị tư vấn cấu hình tối ưu, gửi **Báo giá doanh nghiệp kèm chiết khấu**, hoặc sắp xếp **Lịch tham quan Data Center**. Anh/Chị cần em Thư hỗ trợ thông tin gì ngay bây giờ ạ?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      actions: [
        { label: '📞 Yêu cầu gọi lại trong 5 phút', actionType: 'callback' },
        { label: '🏢 Đặt lịch tham quan Data Center', actionType: 'tour' },
        { label: '📄 Nhận Báo giá Doanh nghiệp', actionType: 'quote' }
      ]
    }
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const [activeModalForm, setActiveModalForm] = useState<'quote' | 'tour' | 'callback' | null>(null);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formNote, setFormNote] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeMessages = activeMode === 'ai' ? aiMessages : consultantMessages;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [activeMessages, isTyping, isOpen, isMinimized, activeMode]);

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      mode: activeMode,
      text: query,
      timestamp: time
    };

    if (activeMode === 'ai') {
      setAiMessages(prev => [...prev, userMsg]);
    } else {
      setConsultantMessages(prev => [...prev, userMsg]);
    }

    setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      let responseText = '';
      let actions: ChatMessage['actions'] = undefined;

      const lower = query.toLowerCase();

      if (activeMode === 'ai') {
        const found = VIDA_KNOWLEDGE_BASE.find(k => k.keywords.some(kw => lower.includes(kw)));
        if (found) {
          responseText = found.response;
          actions = found.actions;
        } else {
          responseText = `Cảm ơn Anh/Chị đã gửi câu hỏi về **"${query}"**!\n\n**ViDa AI:** Em đã ghi nhận yêu cầu. Dịch vụ Viettel Cloud hỗ trợ hạ tầng Điện toán đám mây chuẩn hóa quốc tế với khả năng mở rộng linh hoạt, uptime 99.99%.\n\nAnh/Chị có muốn chuyển thông tin này cho **Chuyên viên Nguyễn Minh Thư** để nhận tư vấn chuyên sâu & báo giá chi tiết không ạ?`;
          actions = [
            { label: '🎧 Nhờ Minh Thư tư vấn trực tiếp', actionType: 'callback' },
            { label: '⚡ Khảo sát Báo giá Cloud', actionType: 'quote' }
          ];
        }
      } else {
        const found = MINH_THU_RESPONSES.find(k => k.keywords.some(kw => lower.includes(kw)));
        if (found) {
          responseText = found.response;
          actions = found.actions;
        } else {
          responseText = `Dạ em **Minh Thư** đã nhận được thông tin từ Anh/Chị ạ! 🌸\n\nĐối với yêu cầu **"${query}"**, em Thư sẽ trực tiếp kiểm tra hệ thống và liên hệ lại tư vấn chi tiết cho Anh/Chị.\n\nAnh/Chị để lại Số điện thoại hoặc bấn nút **Yêu cầu gọi lại** bên dưới để em Thư gọi lại ngay tư vấn hoàn toàn miễn phí nhé!`;
          actions = [
            { label: '📞 Yêu cầu gọi lại tư vấn', actionType: 'callback' },
            { label: '🏢 Đặt lịch tham quan Data Center', actionType: 'tour' }
          ];
        }
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        mode: activeMode,
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions
      };

      if (activeMode === 'ai') {
        setAiMessages(prev => [...prev, botMsg]);
      } else {
        setConsultantMessages(prev => [...prev, botMsg]);
      }

      setIsTyping(false);
    }, 1000);
  };

  const handleActionClick = (actionType: 'quote' | 'tour' | 'callback' | 'link', payload?: string) => {
    if (actionType === 'link' && payload) {
      window.location.href = payload;
      return;
    }
    if (actionType !== 'link') {
      setActiveModalForm(actionType);
      setFormSuccess(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formPhone && !formEmail) return;

    setFormSuccess(true);
    setTimeout(() => {
      const typeLabel = activeModalForm === 'quote' ? 'Yêu cầu Báo giá' : activeModalForm === 'tour' ? 'Đăng ký Tham quan Data Center' : 'Yêu cầu Gọi lại';
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      const confirmMsg: ChatMessage = {
        id: `confirm-${Date.now()}`,
        sender: 'bot',
        mode: activeMode,
        text: `✅ **Đã tiếp nhận ${typeLabel} thành công!**\n\n- **Họ tên:** ${formName || 'Khách hàng'}\n- **SĐT / Email:** ${formPhone || formEmail}\n${formNote ? `- **Ghi chú:** ${formNote}\n` : ''}\nChuyên viên **Nguyễn Minh Thư** sẽ liên hệ lại với Anh/Chị trong vòng **5 - 15 phút** tới. Cảm ơn Anh/Chị! 💖`,
        timestamp: time
      };

      if (activeMode === 'ai') {
        setAiMessages(prev => [...prev, confirmMsg]);
      } else {
        setConsultantMessages(prev => [...prev, confirmMsg]);
      }

      setActiveModalForm(null);
      setFormName('');
      setFormPhone('');
      setFormEmail('');
      setFormNote('');
      setFormSuccess(false);
    }, 800);
  };

  const renderFormattedText = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, lIdx) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={lIdx} className={lIdx > 0 ? 'mt-1.5' : ''}>
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={pIdx} className="font-extrabold text-slate-900">{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            height: isMinimized ? '64px' : undefined
          }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={`fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-[410px] bg-slate-50 rounded-t-2xl sm:rounded-2xl shadow-2xl shadow-slate-900/30 border border-slate-200/80 overflow-hidden flex flex-col transition-all duration-300 ${
            isMinimized ? 'h-[64px]' : 'h-[100vh] sm:h-[620px] max-h-[92vh]'
          }`}
        >
          {/* HEADER */}
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-4 py-3 text-white flex items-center justify-between border-b border-slate-800/80 shrink-0">
            <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
              <VIDCNativeButton
                type="button"
                onClick={() => setActiveMode('ai')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all duration-200 cursor-pointer ${
                  activeMode === 'ai'
                    ? 'bg-[color:var(--vidc-color-brand-red)] text-white shadow-md shadow-[color:var(--vidc-color-brand-red)]/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Bot className="w-3.5 h-3.5" />
                <span>ViDa (AI)</span>
              </VIDCNativeButton>

              <VIDCNativeButton
                type="button"
                onClick={() => setActiveMode('consultant')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all duration-200 cursor-pointer ${
                  activeMode === 'consultant'
                    ? 'bg-[color:var(--vidc-color-brand-red)] text-white shadow-md shadow-[color:var(--vidc-color-brand-red)]/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Headset className="w-3.5 h-3.5" />
                <span>Minh Thư (Tư vấn)</span>
              </VIDCNativeButton>
            </div>

            <div className="flex items-center gap-1">
              <VIDCNativeButton
                type="button"
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title={isMinimized ? 'Mở rộng' : 'Thu nhỏ'}
              >
                <Minus className="w-4 h-4" />
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-red-600/80 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Đóng chat"
              >
                <X className="w-4 h-4" />
              </VIDCNativeButton>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Identity Bar */}
              <div className="bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-slate-800 text-xs shrink-0">
                {activeMode === 'ai' ? (
                  <div className="flex items-center gap-2 text-slate-300">
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      <VidaIcon className="w-full h-full" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-extrabold text-white leading-tight">Trợ lý AI ViDa 24/7</span>
                      <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Trực tuyến giải đáp tự động
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-slate-300">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/60 shrink-0">
                      <img alt="Minh Thư" src={MINH_THU_AVATAR} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-extrabold text-white leading-tight">Nguyễn Minh Thư</span>
                      <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Sr. Solution Consultant (Online)
                      </span>
                    </div>
                  </div>
                )}

                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700">
                  Viettel IDC
                </span>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/80">
                {activeMessages.map((msg) => {
                  const isUser = msg.sender === 'user';
                  return (
                    <div
                      key={msg.id}
                      className={`flex gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      {!isUser && (
                        <div className="shrink-0 mt-0.5">
                          {msg.mode === 'ai' ? (
                            <div className="w-7 h-7 flex items-center justify-center shrink-0">
                              <VidaIcon className="w-full h-full" />
                            </div>
                          ) : (
                            <div className="w-7 h-7 rounded-full overflow-hidden border border-slate-300 shadow-xs">
                              <img alt="Minh Thư" src={MINH_THU_AVATAR} className="w-full h-full object-cover" />
                            </div>
                          )}
                        </div>
                      )}

                      <div className={`max-w-[85%] space-y-2`}>
                        <div
                          className={`p-3.5 text-xs sm:text-sm leading-relaxed shadow-2xs ${
                            isUser
                              ? 'bg-[color:var(--vidc-color-brand-red)] text-white rounded-2xl rounded-tr-xs font-medium'
                              : 'bg-white text-slate-800 border border-slate-200/90 rounded-2xl rounded-tl-xs'
                          }`}
                        >
                          {renderFormattedText(msg.text)}

                          <div className={`text-[10px] mt-1.5 text-right font-medium opacity-70 ${isUser ? 'text-white/80' : 'text-slate-400'}`}>
                            {msg.timestamp}
                          </div>
                        </div>

                        {!isUser && msg.actions && msg.actions.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {msg.actions.map((act, idx) => (
                              <VIDCNativeButton
                                key={idx}
                                type="button"
                                onClick={() => handleActionClick(act.actionType, act.payload)}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-red-50 text-slate-800 hover:text-[color:var(--vidc-color-brand-red)] text-xs font-bold border border-slate-200 hover:border-red-200 transition-all cursor-pointer shadow-2xs"
                              >
                                {act.actionType === 'quote' && <FileText className="w-3.5 h-3.5 text-[color:var(--vidc-color-brand-red)]" />}
                                {act.actionType === 'tour' && <Calendar className="w-3.5 h-3.5 text-blue-600" />}
                                {act.actionType === 'callback' && <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />}
                                {act.actionType === 'link' && <ExternalLink className="w-3.5 h-3.5 text-purple-600" />}
                                <span>{act.label}</span>
                              </VIDCNativeButton>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}

                {isTyping && (
                  <div className="flex gap-2.5 items-center">
                    <div className="w-7 h-7 rounded-full bg-slate-950 text-white flex items-center justify-center border border-[color:var(--vidc-color-brand-red)]/50">
                      <Sparkles className="w-3.5 h-3.5 text-[color:var(--vidc-color-brand-red)] animate-spin" />
                    </div>
                    <div className="bg-white border border-slate-200 px-4 py-2.5 rounded-2xl rounded-tl-xs flex items-center gap-1.5 shadow-2xs">
                      <span className="w-2 h-2 rounded-full bg-[color:var(--vidc-color-brand-red)] animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 rounded-full bg-[color:var(--vidc-color-brand-red)] animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 rounded-full bg-[color:var(--vidc-color-brand-red)] animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Modal Form */}
              <AnimatePresence>
                {activeModalForm && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="bg-white border-t border-slate-200 p-4 shadow-lg shrink-0 space-y-3"
                  >
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <div className="flex items-center gap-1.5 text-xs font-black text-slate-900 uppercase tracking-wider">
                        {activeModalForm === 'quote' && <FileText className="w-4 h-4 text-[color:var(--vidc-color-brand-red)]" />}
                        {activeModalForm === 'tour' && <Calendar className="w-4 h-4 text-blue-600" />}
                        {activeModalForm === 'callback' && <PhoneCall className="w-4 h-4 text-emerald-600" />}
                        <span>
                          {activeModalForm === 'quote' ? 'Đăng ký Báo giá Doanh nghiệp' : activeModalForm === 'tour' ? 'Đặt lịch Tham quan Data Center' : 'Yêu cầu Gọi lại Tư vấn'}
                        </span>
                      </div>
                      <VIDCNativeButton
                        type="button"
                        onClick={() => setActiveModalForm(null)}
                        className="text-slate-400 hover:text-slate-600"
                      >
                        <X className="w-4 h-4" />
                      </VIDCNativeButton>
                    </div>

                    {formSuccess ? (
                      <div className="py-4 text-center space-y-2">
                        <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto animate-bounce" />
                        <p className="text-xs font-bold text-slate-900">Đã gửi yêu cầu thành công!</p>
                      </div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="space-y-2.5">
                        <VIDCNativeInput
                          type="text"
                          placeholder="Họ và tên *"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[color:var(--vidc-color-brand-red)]"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <VIDCNativeInput
                            type="tel"
                            placeholder="Số điện thoại *"
                            required
                            value={formPhone}
                            onChange={(e) => setFormPhone(e.target.value)}
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[color:var(--vidc-color-brand-red)]"
                          />
                          <VIDCNativeInput
                            type="email"
                            placeholder="Email công ty"
                            value={formEmail}
                            onChange={(e) => setFormEmail(e.target.value)}
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[color:var(--vidc-color-brand-red)]"
                          />
                        </div>
                        <VIDCNativeInput
                          type="text"
                          placeholder="Ghi chú dịch vụ quan tâm..."
                          value={formNote}
                          onChange={(e) => setFormNote(e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[color:var(--vidc-color-brand-red)]"
                        />
                        <div className="flex gap-2 pt-1">
                          <VIDCNativeButton
                            type="button"
                            onClick={() => setActiveModalForm(null)}
                            className="flex-1 py-2 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg"
                          >
                            Hủy
                          </VIDCNativeButton>
                          <VIDCNativeButton
                            type="submit"
                            className="flex-1 py-2 text-xs font-extrabold text-white bg-[color:var(--vidc-color-brand-red)] hover:bg-[color:var(--vidc-color-brand-red-hover)] rounded-lg shadow-sm"
                          >
                            Xác nhận gửi
                          </VIDCNativeButton>
                        </div>
                      </form>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Input Area */}
              <div className="bg-white border-t border-slate-200/90 p-3 shrink-0 space-y-2.5">
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-xs">
                  {(activeMode === 'ai' ? VIDA_PRESETS : MINH_THU_PRESETS).map((preset, idx) => (
                    <VIDCNativeButton
                      key={idx}
                      type="button"
                      onClick={() => handleSendMessage(preset)}
                      className="whitespace-nowrap px-3 py-1 rounded-full bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-[color:var(--vidc-color-brand-red)] text-[11px] font-bold border border-slate-200/80 transition-all shrink-0 cursor-pointer"
                    >
                      {preset}
                    </VIDCNativeButton>
                  ))}
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  <VIDCNativeInput
                    type="text"
                    value={inputQuery}
                    onChange={(e) => setInputQuery(e.target.value)}
                    placeholder={
                      activeMode === 'ai' 
                        ? 'Hỏi ViDa về Cloud Server, Data Center...' 
                        : 'Nhắn tin với tư vấn viên Minh Thư...'
                    }
                    className="flex-1 bg-slate-100 text-slate-900 text-xs sm:text-sm px-4 py-2.5 rounded-full border border-slate-200 focus:outline-none focus:border-[color:var(--vidc-color-brand-red)] focus:bg-white transition-all placeholder:text-slate-400 font-medium"
                  />

                  <VIDCNativeButton
                    type="submit"
                    disabled={!inputQuery.trim()}
                    className="w-9 h-9 rounded-full bg-[color:var(--vidc-color-brand-red)] hover:bg-[color:var(--vidc-color-brand-red-hover)] disabled:bg-slate-300 text-white flex items-center justify-center transition-all shadow-md shrink-0 cursor-pointer disabled:cursor-not-allowed"
                    aria-label="Gửi tin nhắn"
                  >
                    <Send className="w-4 h-4" />
                  </VIDCNativeButton>
                </form>
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
