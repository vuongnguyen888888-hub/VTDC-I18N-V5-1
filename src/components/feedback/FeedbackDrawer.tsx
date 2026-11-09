'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Star,
  Send,
  MessageSquare,
  Globe,
  CheckCircle2,
  Check,
  AlertCircle,
  Loader2,
  Sparkles,
  Trash2,
  RefreshCw,
  Upload,
} from 'lucide-react';
import { auth, db, ensureAnonymousAuth } from '../../lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import {
  FeedbackCategory,
  FEEDBACK_CATEGORIES,
  FeedbackDoc,
  FeedbackAttachment,
} from '../../types/feedback';
import { getRuntimeFeedbackContext, RuntimeFeedbackContext } from '../../lib/feedbackContext';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface FeedbackDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface UploadingFile {
  id: string;
  file: File;
  previewUrl: string;
  progress: number;
  status: 'pending' | 'uploading' | 'success' | 'error';
  error?: string;
  attachment?: FeedbackAttachment;
}

const MAX_IMAGES = 10;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_MIMES = ['image/jpeg', 'image/png', 'image/webp'];

export const FeedbackDrawer: React.FC<FeedbackDrawerProps> = ({ isOpen, onClose }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const [selectedCategories, setSelectedCategories] = useState<FeedbackCategory[]>(['UI']);
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [message, setMessage] = useState<string>('');
  
  const [selectedFiles, setSelectedFiles] = useState<UploadingFile[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [runtimeCtx, setRuntimeCtx] = useState<RuntimeFeedbackContext | null>(null);

  const toggleCategory = (cat: FeedbackCategory) => {
    setSelectedCategories((prev) => {
      if (prev.includes(cat)) {
        return prev.filter((c) => c !== cat);
      } else {
        return [...prev, cat];
      }
    });
    if (errorMessage) setErrorMessage(null);
  };

  // Clean up previews to prevent memory leaks
  useEffect(() => {
    return () => {
      selectedFiles.forEach((f) => {
        if (f.previewUrl) URL.revokeObjectURL(f.previewUrl);
      });
    };
  }, [selectedFiles]);

  // Listen to Firebase Auth state
  useEffect(() => {
    if (!auth) return;
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  // When drawer opens: silently initialize anonymous authentication in background and capture context
  useEffect(() => {
    if (isOpen) {
      setRuntimeCtx(getRuntimeFeedbackContext());
      setSubmitSuccess(false);
      setErrorMessage(null);
      setSelectedFiles([]);

      if (auth && !auth.currentUser) {
        ensureAnonymousAuth().then((user) => {
          if (user) setCurrentUser(user);
        }).catch((err) => {
          console.warn("Background silent auth notice:", err);
        });
      }
    }
  }, [isOpen]);

  // File addition & validation
  const addFile = (file: File) => {
    if (selectedFiles.length >= MAX_IMAGES) {
      setErrorMessage("Bạn chỉ có thể đính kèm tối đa 10 ảnh.");
      return;
    }

    if (!ALLOWED_MIMES.includes(file.type)) {
      setErrorMessage("Chỉ hỗ trợ ảnh JPG, PNG và WEBP.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setErrorMessage("Ảnh vượt quá dung lượng tối đa 5 MB.");
      return;
    }

    const id = `img_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const previewUrl = URL.createObjectURL(file);

    const newFile: UploadingFile = {
      id,
      file,
      previewUrl,
      progress: 0,
      status: 'pending',
    };

    setSelectedFiles((prev) => [...prev, newFile]);
    if (errorMessage) setErrorMessage(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      Array.from(e.target.files).forEach((file) => addFile(file));
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files) {
      Array.from(e.dataTransfer.files).forEach((file) => addFile(file));
    }
  };

  const removeFile = (id: string) => {
    setSelectedFiles((prev) => {
      const found = prev.find((f) => f.id === id);
      if (found) URL.revokeObjectURL(found.previewUrl);
      return prev.filter((f) => f.id !== id);
    });
  };

  // Drag and paste from clipboard inside textarea or window
  const handlePaste = (e: React.ClipboardEvent) => {
    const items = e.clipboardData?.items;
    if (!items) return;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.type.indexOf('image') !== -1) {
        const file = item.getAsFile();
        if (file) {
          addFile(file);
          e.preventDefault();
        }
      }
    }
  };

  // Upload single file to Cloudinary unsigned endpoint
  const uploadToCloudinary = async (uploadingFile: UploadingFile): Promise<FeedbackAttachment> => {
    setSelectedFiles((prev) =>
      prev.map((f) => (f.id === uploadingFile.id ? { ...f, status: 'uploading', progress: 50 } : f))
    );

    const rawPath = (typeof window !== 'undefined' ? window.location.pathname : '') || runtimeCtx?.pagePath || '/';
    const cleanPath = rawPath.replace(/^\/+|\/+$/g, '');
    const slug = cleanPath
      ? cleanPath.replace(/\/+/g, '-').replace(/[^a-zA-Z0-9-_]/g, '')
      : 'home';
    const pagePathSlug = slug || 'home';
    const cloudinaryFolder = `feedback/${pagePathSlug}`;

    const formData = new FormData();
    formData.append('file', uploadingFile.file);
    formData.append('upload_preset', 'viettel_idc_feedback');
    formData.append('asset_folder', cloudinaryFolder);
    formData.append('public_id_prefix', cloudinaryFolder);

    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/dnt6enohp/image/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const cldError = response.headers.get('X-Cld-Error');

        console.error('Cloudinary upload failed', {
          status: response.status,
          statusText: response.statusText,
          cldError,
          body: data
        });

        const errorMsg =
          cldError ||
          data?.error?.message ||
          `Cloudinary upload failed (${response.status})`;

        setSelectedFiles((prev) =>
          prev.map((f) => (f.id === uploadingFile.id ? { ...f, status: 'error', error: errorMsg } : f))
        );
        throw new Error(errorMsg);
      }

      const data = await response.json();
      const attachment: FeedbackAttachment = {
        secureUrl: data.secure_url,
        publicId: data.public_id,
        width: data.width,
        height: data.height,
        format: data.format,
        bytes: data.bytes,
        originalFilename: data.original_filename || uploadingFile.file.name,
      };

      setSelectedFiles((prev) =>
        prev.map((f) => (f.id === uploadingFile.id ? { ...f, status: 'success', progress: 100, attachment } : f))
      );
      return attachment;
    } catch (err: any) {
      const errorMsg = err?.message || "Không thể tải ảnh lên. Vui lòng thử lại.";
      setSelectedFiles((prev) =>
        prev.map((f) => (f.id === uploadingFile.id ? { ...f, status: 'error', error: errorMsg } : f))
      );
      throw err;
    }
  };

  const handleRetryUpload = async (id: string) => {
    const fileToRetry = selectedFiles.find((f) => f.id === id);
    if (!fileToRetry) return;

    setSelectedFiles((prev) =>
      prev.map((f) => (f.id === id ? { ...f, status: 'pending', error: undefined } : f))
    );
  };

  // Submit Feedback with Cloudinary Uploads & Firestore
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (selectedCategories.length === 0) {
      setErrorMessage("Vui lòng chọn ít nhất một chủ đề góp ý.");
      return;
    }

    if (!message.trim()) {
      setErrorMessage("Vui lòng nhập nội dung góp ý.");
      return;
    }

    if (!db) {
      setErrorMessage("Không thể kết nối cơ sở dữ liệu Firestore.");
      return;
    }

    setIsSubmitting(true);

    try {
      let activeUser = currentUser || (auth ? auth.currentUser : null);
      if (!activeUser && auth) {
        activeUser = await ensureAnonymousAuth();
        if (activeUser) setCurrentUser(activeUser);
      }

      const reporterUid = activeUser?.uid || `anon_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

      const feedbackCollectionRef = collection(db, 'feedback');
      const feedbackDocRef = doc(feedbackCollectionRef);

      const uploadedAttachments: FeedbackAttachment[] = [];

      try {
        for (const uf of selectedFiles) {
          if (uf.status === 'success' && uf.attachment) {
            uploadedAttachments.push(uf.attachment);
          } else {
            const att = await uploadToCloudinary(uf);
            setSelectedFiles((prev) =>
              prev.map((f) => (f.id === uf.id ? { ...f, attachment: att } : f))
            );
            uploadedAttachments.push(att);
          }
        }
      } catch (uploadError) {
        setIsSubmitting(false);
        setErrorMessage("Không thể tải ảnh lên. Vui lòng thử lại.");
        return;
      }

      const ctx = getRuntimeFeedbackContext();
      const feedbackPayload: FeedbackDoc = {
        projectId: "viettelidc-hub",
        environment: "prototype",

        pageId: ctx.pageId || null,
        pageTitle: ctx.pageTitle || null,
        pageUrl: ctx.pageUrl || (typeof window !== 'undefined' ? window.location.href : ''),
        pagePath: ctx.pagePath || (typeof window !== 'undefined' ? window.location.pathname : '/'),

        sectionId: ctx.sectionId || null,
        componentId: ctx.componentId || null,

        category: selectedCategories.join(', '),
        categories: selectedCategories,
        rating: rating > 0 ? rating : null,
        message: message.trim(),

        status: "new",
        priority: "normal",

        reporterUid: reporterUid,
        reporterName: activeUser?.displayName || (activeUser?.isAnonymous ? 'Khách (Anonymous)' : 'Người dùng'),
        reporterEmail: activeUser?.email || null,
        reporterPhotoURL: activeUser?.photoURL || null,

        deviceType: ctx.deviceType || 'desktop',
        viewportWidth: ctx.viewportWidth || 0,
        viewportHeight: ctx.viewportHeight || 0,
        browser: ctx.browser || null,
        userAgent: ctx.userAgent || null,

        attachments: uploadedAttachments,

        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      await setDoc(feedbackDocRef, feedbackPayload);

      setSubmitSuccess(true);
      setMessage('');
      setRating(0);
      setSelectedCategories(['UI']);
      setSelectedFiles([]);
      setIsSubmitting(false);

      setTimeout(() => {
        onClose();
        setSubmitSuccess(false);
      }, 2000);

    } catch (err: any) {
      console.error("Firestore submit error:", err);
      setIsSubmitting(false);

      if (err?.code === 'permission-denied' || err?.message?.includes('permission-denied')) {
        setErrorMessage("Lỗi quyền truy cập: Firestore Security Rules cần được cấu hình quyền ghi (allow create).");
      } else {
        setErrorMessage("Không thể gửi feedback. Vui lòng thử lại.");
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[var(--vidc-z-feedback-drawer,120)] overflow-hidden">
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300 border-l border-slate-200">
          
          {/* Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center font-bold">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] leading-tight flex items-center gap-1.5">
                  <span>Góp ý & Phản hồi</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-100 text-[var(--vidc-color-brand-red)]">
                    Beta
                  </span>
                </h2>
                <p className="text-[11px] text-slate-500">Giúp Viettel IDC cải thiện trải nghiệm tốt hơn</p>
              </div>
            </div>

            <VIDCNativeButton
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </VIDCNativeButton>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            
            {submitSuccess ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900">Cảm ơn bạn!</h3>
                  <p className="text-sm text-slate-600 max-w-xs">
                    Feedback đã được ghi nhận trực tiếp vào hệ thống quản trị Viettel IDC.
                  </p>
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-1 pt-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Đang tự động đóng cửa sổ...</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Page Context */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center shrink-0">
                      <Globe className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        Trang đang xem
                      </div>
                      <div className="font-bold text-slate-800 truncate text-xs leading-tight">
                        {runtimeCtx?.pageTitle || (typeof document !== 'undefined' ? document.title : 'Viettel IDC Website')}
                      </div>
                    </div>
                  </div>
                  <div 
                    className="shrink-0 px-2 py-0.5 rounded-md bg-white border border-slate-200 font-mono text-[11px] font-semibold text-slate-600 shadow-2xs max-w-[130px] truncate" 
                    title={runtimeCtx?.pagePath || (typeof window !== 'undefined' ? window.location.pathname : '/')}
                  >
                    {runtimeCtx?.pagePath === '/' ? '/' : (runtimeCtx?.pagePath || '/')}
                  </div>
                </div>

                {/* 1. Star Rating */}
                <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 text-center space-y-2.5">
                  <div className="flex flex-col items-center justify-center">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Đánh giá trải nghiệm
                    </label>
                    <span className="text-[11px] text-slate-400 font-normal">
                      (Tùy chọn mức độ hài lòng của bạn)
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2 sm:gap-3 py-1">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const filled = (hoverRating || rating) >= star;
                      return (
                        <VIDCNativeButton
                          key={star}
                          type="button"
                          onClick={() => setRating(star === rating ? 0 : star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1 rounded-xl transition-all duration-200 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
                          aria-label={`Đánh giá ${star} sao`}
                        >
                          <Star
                            className={`w-8 h-8 sm:w-9 sm:h-9 transition-colors ${
                              filled
                                ? 'fill-amber-400 text-amber-400 filter drop-shadow-xs'
                                : 'text-slate-300 hover:text-amber-300'
                            }`}
                          />
                        </VIDCNativeButton>
                      );
                    })}
                  </div>
                  {rating > 0 && (
                    <div className="text-xs font-bold text-amber-700 bg-amber-50 inline-flex items-center gap-1 px-3 py-1 rounded-full border border-amber-200/80 animate-in fade-in duration-150">
                      <span>
                        {rating === 5 && '⭐ 5/5 - Rất hài lòng & Tuyệt vời'}
                        {rating === 4 && '⭐ 4/5 - Hài lòng & Tốt'}
                        {rating === 3 && '⭐ 3/5 - Bình thường'}
                        {rating === 2 && '⭐ 2/5 - Tạm được'}
                        {rating === 1 && '⭐ 1/5 - Cần cải thiện'}
                      </span>
                    </div>
                  )}
                </div>

                {/* 2. Category selector */}
                <div className="space-y-2.5">
                  <div className="text-center space-y-0.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Chủ đề góp ý <span className="text-red-500">*</span>
                    </label>
                    <p className="text-[11px] text-slate-400 font-normal">
                      (Có thể chọn một hoặc nhiều mục)
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {FEEDBACK_CATEGORIES.map((cat) => {
                      const isSelected = selectedCategories.includes(cat);
                      return (
                        <VIDCNativeButton
                          key={cat}
                          type="button"
                          onClick={() => toggleCategory(cat)}
                          aria-pressed={isSelected}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs ${
                            isSelected
                              ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-xs ring-2 ring-[var(--vidc-color-brand-red)]/20 scale-[1.02]'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 border border-slate-200/60'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                          <span>{cat}</span>
                        </VIDCNativeButton>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Feedback Message */}
                <div className="space-y-2">
                  <div className="text-center">
                    <label htmlFor="feedback-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Nội dung góp ý <span className="text-red-500">*</span>
                    </label>
                  </div>
                   <VIDCNativeTextarea
                    id="feedback-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onPaste={handlePaste}
                    placeholder="Nhập nội dung góp ý, phát hiện lỗi hoặc đề xuất cải tiến..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent transition-all resize-none shadow-2xs"
                    required
                  />
                </div>

                {/* 4. Optional Image Attachment Section */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      ẢNH ĐÍNH KÈM
                    </label>
                    <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                      {selectedFiles.length}/10 ảnh
                    </span>
                  </div>

                  {/* Drag and Drop Zone / File Input */}
                  <div
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => {
                      if (selectedFiles.length < MAX_IMAGES) {
                        fileInputRef.current?.click();
                      }
                    }}
                    className={`relative rounded-xl border-2 border-dashed p-4 flex flex-col items-center justify-center text-center transition-all ${
                      selectedFiles.length >= MAX_IMAGES
                        ? 'border-slate-200 bg-slate-100 cursor-not-allowed opacity-60'
                        : dragActive
                        ? 'border-[var(--vidc-color-brand-red)] bg-red-50/30 cursor-pointer'
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-50 cursor-pointer'
                    }`}
                  >
                    <VIDCNativeInput
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept="image/jpeg,image/png,image/webp"
                      onChange={handleFileChange}
                      className="hidden"
                      disabled={isSubmitting || selectedFiles.length >= MAX_IMAGES}
                    />

                    <Upload className="w-6 h-6 text-slate-400 mb-1.5" />
                    <p className="text-xs font-bold text-slate-700">
                      {selectedFiles.length >= MAX_IMAGES
                        ? 'Bạn đã đạt giới hạn tối đa 10 ảnh'
                        : 'Kéo thả ảnh vào đây hoặc nhấp để chọn'}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1">
                      Hỗ trợ dán ảnh (Ctrl+V/Cmd+V) · JPG, PNG, WEBP · tối đa 10 ảnh · tối đa 5 MB/ảnh
                    </p>
                  </div>

                  {/* Image Previews & Progress Lists */}
                  {selectedFiles.length > 0 && (
                    <div className="grid grid-cols-3 gap-2.5 pt-1.5">
                      {selectedFiles.map((f) => (
                        <div
                          key={f.id}
                          className="relative aspect-square rounded-lg border border-slate-200 bg-slate-50 overflow-hidden group/item flex flex-col justify-end"
                        >
                          <img
                            src={f.previewUrl}
                            alt="Preview"
                            className="absolute inset-0 w-full h-full object-cover"
                          />

                          {/* Progress/Status Overlays */}
                          {f.status === 'uploading' && (
                            <div className="absolute inset-0 bg-slate-950/65 flex flex-col items-center justify-center p-2 text-white">
                              <Loader2 className="w-4 h-4 animate-spin text-white mb-1" />
                              <span className="text-[10px] font-bold">{f.progress}%</span>
                              <div className="w-full bg-white/20 h-1 rounded-full mt-1.5 overflow-hidden">
                                <div
                                  className="bg-[var(--vidc-color-brand-red)] h-full transition-all duration-300"
                                  style={{ width: `${f.progress}%` }}
                                />
                              </div>
                            </div>
                          )}

                          {f.status === 'error' && (
                            <div className="absolute inset-0 bg-red-950/80 flex flex-col items-center justify-center p-1.5 text-center text-white">
                              <AlertCircle className="w-5 h-5 text-red-400 mb-1 shrink-0" />
                              <span className="text-[9px] leading-tight font-medium break-words px-1">
                                {f.error || 'Lỗi'}
                              </span>
                              <VIDCNativeButton
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleRetryUpload(f.id);
                                }}
                                className="mt-1 px-1.5 py-0.5 rounded bg-white/10 hover:bg-white/20 text-[9px] font-bold flex items-center gap-0.5 transition-colors cursor-pointer"
                              >
                                <RefreshCw className="w-2.5 h-2.5" /> Thử lại
                              </VIDCNativeButton>
                            </div>
                          )}

                          {f.status === 'success' && (
                            <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                          )}

                          {/* Remove Button */}
                          {f.status !== 'uploading' && (
                            <VIDCNativeButton
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeFile(f.id);
                              }}
                              className="absolute top-1 left-1 p-1 rounded-full bg-slate-900/60 hover:bg-slate-900/80 text-white opacity-90 sm:opacity-0 group-hover/item:opacity-100 transition-opacity cursor-pointer shadow-2xs"
                              aria-label="Remove image"
                              disabled={isSubmitting}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </VIDCNativeButton>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Privacy Warning */}
                  <div className="text-[10px] text-slate-400 leading-normal flex items-start gap-1">
                    <AlertCircle className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
                    <span>Không đính kèm mật khẩu, thông tin đăng nhập hoặc dữ liệu nhạy cảm.</span>
                  </div>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
                    <span className="leading-snug">{errorMessage}</span>
                  </div>
                )}

                {/* Submit button */}
                <div className="pt-1 flex justify-center">
                  <VIDCNativeButton
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-d6002c)] text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed min-h-[46px]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Đang gửi feedback...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Gửi feedback</span>
                      </>
                    )}
                  </VIDCNativeButton>
                </div>
              </form>
            )}

          </div>

          {/* Footer note */}
          <div className="p-3.5 bg-slate-50 border-t border-slate-100 text-center text-[11px] text-slate-400">
            Dữ liệu feedback được bảo mật và truyền trực tiếp tới đội ngũ phát triển Viettel IDC.
          </div>

        </div>
      </div>
    </div>
  );
};
