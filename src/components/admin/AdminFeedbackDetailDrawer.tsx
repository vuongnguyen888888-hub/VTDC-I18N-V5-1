'use client';

import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  Star,
  Monitor,
  Calendar,
  User,
  Shield,
  Tag,
  Clock,
  AlertTriangle,
  CheckCircle2,
  FileText,
  Loader2,
  Sliders,
  Image as ImageIcon,
} from 'lucide-react';
import { FeedbackDoc, FeedbackStatus, FeedbackPriority, getCategories } from '../../types/feedback';
import { db, storage } from '../../lib/firebase';
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { VIDCNativeButton, VIDCNativeSelect } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface AdminFeedbackDetailDrawerProps {
  item: FeedbackDoc | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdated?: (updatedItem: FeedbackDoc) => void;
}

const STATUS_LABELS: Record<FeedbackStatus, { label: string; bg: string; text: string; border: string }> = {
  new: { label: 'New', bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  reviewed: { label: 'Reviewed', bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  assigned: { label: 'Assigned', bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' },
  in_progress: { label: 'In Progress', bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  resolved: { label: 'Resolved', bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  verified: { label: 'Verified', bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200' },
  rejected: { label: 'Rejected', bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
  duplicate: { label: 'Duplicate', bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-300' },
  wont_fix: { label: "Won't Fix", bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-300' },
};

const PRIORITY_LABELS: Record<FeedbackPriority, { label: string; bg: string; text: string; border: string }> = {
  low: { label: 'Low', bg: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-200' },
  normal: { label: 'Normal', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
  high: { label: 'High', bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
  critical: { label: 'Critical', bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' },
};

export const AdminFeedbackDetailDrawer: React.FC<AdminFeedbackDetailDrawerProps> = ({
  item,
  isOpen,
  onClose,
  onUpdated,
}) => {
  const [selectedStatus, setSelectedStatus] = useState<FeedbackStatus>(item?.status || 'new');
  const [selectedPriority, setSelectedPriority] = useState<FeedbackPriority>(item?.priority || 'normal');
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateMsg, setUpdateMsg] = useState<string | null>(null);

  const [attachmentUrls, setAttachmentUrls] = useState<Record<string, string>>({});
  const [isLoadingUrls, setIsLoadingUrls] = useState(false);
  const [activePreviewUrl, setActivePreviewUrl] = useState<string | null>(null);

  // Sync state when item changes
  React.useEffect(() => {
    if (item) {
      setSelectedStatus(item.status);
      setSelectedPriority(item.priority);
      setUpdateMsg(null);
    }
  }, [item]);

  // Fetch download URLs from Firebase Storage for legacy attachments
  React.useEffect(() => {
    if (item?.attachments && item.attachments.length > 0 && storage) {
      setIsLoadingUrls(true);
      const fetchUrls = async () => {
        const urlMap: Record<string, string> = {};
        try {
          const promises = item.attachments!.map(async (att, idx) => {
            if (att.storagePath) {
              try {
                const storageRef = ref(storage!, att.storagePath);
                const url = await getDownloadURL(storageRef);
                const key = (att.id as string) || (att.publicId as string) || String(idx);
                urlMap[key] = url;
              } catch (err) {
                console.error(`Failed to get download URL for ${att.storagePath}`, err);
              }
            }
          });
          await Promise.all(promises);
          setAttachmentUrls(urlMap);
        } catch (e) {
          console.error("Error fetching attachment download URLs:", e);
        } finally {
          setIsLoadingUrls(false);
        }
      };
      fetchUrls();
    } else {
      setAttachmentUrls({});
      setIsLoadingUrls(false);
    }
  }, [item, item?.attachments]);

  if (!isOpen || !item) return null;

  const handleUpdate = async (newStatus: FeedbackStatus, newPriority: FeedbackPriority) => {
    if (!item.id || !db) return;
    setIsUpdating(true);
    setUpdateMsg(null);

    try {
      const docRef = doc(db, 'feedback', item.id);
      await updateDoc(docRef, {
        status: newStatus,
        priority: newPriority,
        updatedAt: serverTimestamp(),
      });

      setSelectedStatus(newStatus);
      setSelectedPriority(newPriority);
      setUpdateMsg('Đã cập nhật trạng thái thành công!');

      const updated = {
        ...item,
        status: newStatus,
        priority: newPriority,
        updatedAt: new Date(),
      };
      onUpdated?.(updated);

      setTimeout(() => setUpdateMsg(null), 3000);
    } catch (err) {
      console.error("Error updating feedback document:", err);
      setUpdateMsg('Lỗi cập nhật Firestore. Vui lòng thử lại.');
    } finally {
      setIsUpdating(false);
    }
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'Vừa gửi';
    try {
      if (timestamp.toDate) {
        return timestamp.toDate().toLocaleString('vi-VN');
      }
      if (timestamp instanceof Date) {
        return timestamp.toLocaleString('vi-VN');
      }
      if (typeof timestamp === 'number') {
        return new Date(timestamp).toLocaleString('vi-VN');
      }
      return String(timestamp);
    } catch {
      return 'N/A';
    }
  };

  return (
    <div className="fixed inset-0 z-[var(--vidc-z-admin-drawer)] overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-2xl bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300 border-l border-slate-200">
          
          {/* Header */}
          <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                  Feedback #{item.id?.slice(0, 8) || 'N/A'}
                </span>
                <span className={`px-2 py-0.5 rounded text-[11px] font-bold border ${STATUS_LABELS[selectedStatus]?.bg} ${STATUS_LABELS[selectedStatus]?.text} ${STATUS_LABELS[selectedStatus]?.border}`}>
                  {STATUS_LABELS[selectedStatus]?.label}
                </span>
                <span className={`px-2 py-0.5 rounded text-[11px] font-bold border ${PRIORITY_LABELS[selectedPriority]?.bg} ${PRIORITY_LABELS[selectedPriority]?.text} ${PRIORITY_LABELS[selectedPriority]?.border}`}>
                  {PRIORITY_LABELS[selectedPriority]?.label}
                </span>
              </div>
              <h2 className="text-lg font-extrabold text-slate-900 leading-tight">
                Chi tiết Góp ý & Phản hồi
              </h2>
            </div>

            <VIDCNativeButton
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </VIDCNativeButton>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* Quick Status and Priority Updater */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)]" />
                  <span>Cập nhật Quy trình Xử lý (Workflow)</span>
                </span>
                {isUpdating && <Loader2 className="w-4 h-4 animate-spin text-slate-500" />}
              </div>

              {updateMsg && (
                <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{updateMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">Trạng thái (Status):</label>
                  <VIDCNativeSelect
                    value={selectedStatus}
                    onChange={(e) => {
                      const newStat = e.target.value as FeedbackStatus;
                      handleUpdate(newStat, selectedPriority);
                    }}
                    className="w-full px-3 py-2 text-xs font-bold bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent cursor-pointer"
                  >
                    <option value="new">New (Mới)</option>
                    <option value="reviewed">Reviewed (Đã xem xét)</option>
                    <option value="assigned">Assigned (Đã giao việc)</option>
                    <option value="in_progress">In Progress (Đang xử lý)</option>
                    <option value="resolved">Resolved (Đã giải quyết)</option>
                    <option value="verified">Verified (Đã nghiệm thu)</option>
                    <option value="rejected">Rejected (Từ chối)</option>
                    <option value="duplicate">Duplicate (Trùng lặp)</option>
                    <option value="wont_fix">Won't Fix (Không xử lý)</option>
                  </VIDCNativeSelect>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">Mức độ ưu tiên (Priority):</label>
                  <VIDCNativeSelect
                    value={selectedPriority}
                    onChange={(e) => {
                      const newPrio = e.target.value as FeedbackPriority;
                      handleUpdate(selectedStatus, newPrio);
                    }}
                    className="w-full px-3 py-2 text-xs font-bold bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent cursor-pointer"
                  >
                    <option value="low">Low (Thấp)</option>
                    <option value="normal">Normal (Bình thường)</option>
                    <option value="high">High (Cao)</option>
                    <option value="critical">Critical (Nghiêm trọng)</option>
                  </VIDCNativeSelect>
                </div>
              </div>
            </div>

            {/* Main Feedback Message Card */}
            <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {getCategories(item).length > 0 ? (
                      getCategories(item).map((c, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md text-xs font-bold bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-100">
                          {c}
                        </span>
                      ))
                    ) : (
                      <span className="text-slate-400 text-xs">-</span>
                    )}
                  </div>
                  {item.rating ? (
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < (item.rating || 0) ? 'fill-amber-400 text-amber-400' : 'text-slate-200'
                          }`}
                        />
                      ))}
                      <span className="text-xs font-bold text-amber-700 ml-1">({item.rating}/5)</span>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-400 italic">Không có đánh giá sao</span>
                  )}
                </div>
                
                <div className="text-xs text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{formatDate(item.createdAt)}</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Nội dung góp ý
                </label>
                <div className="text-sm font-medium text-slate-800 whitespace-pre-wrap leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100">
                  {item.message}
                </div>
              </div>
            </div>

            {/* Attachments Section */}
            {item.attachments && item.attachments.length > 0 && (
              <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-3">
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-slate-500" />
                  <span>Ảnh đính kèm ({item.attachments.length})</span>
                </h3>

                {isLoadingUrls ? (
                  <div className="flex items-center gap-2 py-4 text-xs text-slate-500">
                    <Loader2 className="w-4 h-4 animate-spin text-[var(--vidc-color-brand-red)]" />
                    <span>Đang tải ảnh đính kèm bảo mật...</span>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-3">
                    {item.attachments.map((att: any, idx: number) => {
                      const key = att.id || att.publicId || String(idx);
                      const url = att.secureUrl || att.url || attachmentUrls[key];
                      const fileName = att.originalFilename || att.fileName || `Image ${idx + 1}`;
                      return (
                        <div
                          key={key}
                          className="relative aspect-square rounded-lg border border-slate-200 bg-slate-50 overflow-hidden cursor-pointer hover:border-[var(--vidc-color-brand-red)]/50 hover:shadow-md transition-all group"
                          onClick={() => url && setActivePreviewUrl(url)}
                        >
                          {url ? (
                            <>
                              <img
                                src={url}
                                alt={fileName}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-slate-900/0 hover:bg-slate-900/30 flex items-center justify-center transition-all">
                                <ExternalLink className="w-5 h-5 text-white opacity-0 hover:opacity-100 group-hover:opacity-100 transition-opacity" />
                              </div>
                            </>
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center p-2 text-center text-slate-400">
                              <AlertTriangle className="w-4 h-4 text-slate-300 mb-1" />
                              <span className="text-[9px] truncate w-full">{fileName}</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* NGỮ CẢNH FEEDBACK */}
            <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-3">
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-slate-500" />
                <span>NGỮ CẢNH FEEDBACK</span>
              </h3>

              <div className="space-y-2 text-xs">
                {item.pageTitle && (
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-slate-500 shrink-0 font-medium">Trang:</span>
                    <span className="font-bold text-slate-900 text-right">{item.pageTitle}</span>
                  </div>
                )}

                {item.pagePath && (
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-slate-500 shrink-0 font-medium">Đường dẫn (Path):</span>
                    <span className="font-mono text-slate-700 text-right">{item.pagePath}</span>
                  </div>
                )}

                {item.pageUrl && (
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-slate-500 shrink-0 font-medium">URL:</span>
                    <VIDCAnchor
                      href={item.pageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[var(--vidc-color-text-brand)] hover:underline inline-flex items-center gap-1 max-w-[280px] truncate"
                    >
                      <span className="truncate">{item.pageUrl}</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </VIDCAnchor>
                  </div>
                )}

                {(item.pageId || item.sectionId || item.componentId) && (
                  <div className="pt-2 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
                    {item.pageId && (
                      <div className="p-2 rounded bg-slate-50">
                        <span className="block text-[10px] text-slate-400 font-bold uppercase">Page ID</span>
                        <span className="font-mono text-slate-700">{item.pageId}</span>
                      </div>
                    )}
                    {item.sectionId && (
                      <div className="p-2 rounded bg-slate-50">
                        <span className="block text-[10px] text-slate-400 font-bold uppercase">Section ID</span>
                        <span className="font-mono text-slate-700">{item.sectionId}</span>
                      </div>
                    )}
                    {item.componentId && (
                      <div className="p-2 rounded bg-slate-50">
                        <span className="block text-[10px] text-slate-400 font-bold uppercase">Component ID</span>
                        <span className="font-mono text-slate-700">{item.componentId}</span>
                      </div>
                    )}
                  </div>
                )}

                {item.pageUrl && (
                  <div className="pt-2 flex justify-end">
                    <VIDCAnchor
                      href={item.pageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Mở trang người dùng đã góp ý (Open page)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </VIDCAnchor>
                  </div>
                )}
              </div>
            </div>

            {/* Reporter Information */}
            <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-3">
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-500" />
                <span>Người gửi (Reporter)</span>
              </h3>

              <div className="flex items-center gap-3">
                {item.reporterPhotoURL ? (
                  <img alt={item.reporterName || 'User'} src={item.reporterPhotoURL} className="w-11 h-11 rounded-full object-cover border border-slate-200" />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center font-bold">
                    <User className="w-5 h-5" />
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{item.reporterName || 'Người dùng ẩn danh'}</h4>
                  <p className="text-xs text-slate-500">{item.reporterEmail || 'Không có email'}</p>
                  <p className="text-[10px] font-mono text-slate-400">UID: {item.reporterUid}</p>
                </div>
              </div>
            </div>

            {/* Client Runtime Environment */}
            <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-3">
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Monitor className="w-3.5 h-3.5 text-slate-500" />
                <span>Môi trường Kỹ thuật (Runtime Diagnostics)</span>
              </h3>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase">Thiết bị</span>
                  <span className="font-bold text-slate-800 capitalize">{item.deviceType || 'desktop'}</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase">Độ phân giải (Viewport)</span>
                  <span className="font-mono text-slate-800">{item.viewportWidth} x {item.viewportHeight} px</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase">Trình duyệt</span>
                  <span className="font-bold text-slate-800">{item.browser || 'Unknown'}</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase">Môi trường</span>
                  <span className="font-mono text-slate-800">{item.environment || 'prototype'}</span>
                </div>
              </div>

              {item.userAgent && (
                <div className="text-[10px] font-mono text-slate-400 break-all p-2 rounded bg-slate-50 border border-slate-100">
                  UA: {item.userAgent}
                </div>
              )}
            </div>

          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
            <span>Cập nhật lần cuối: {formatDate(item.updatedAt || item.createdAt)}</span>
            <VIDCNativeButton
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold transition-colors cursor-pointer"
            >
              Đóng
            </VIDCNativeButton>
          </div>

        </div>
      </div>

      {/* Image Lightbox Modal */}
      {activePreviewUrl && (
        <div className="fixed inset-0 z-[var(--vidc-z-admin-lightbox,300)] flex items-center justify-center bg-slate-950/90 p-4 animate-in fade-in duration-150">
          <div className="absolute inset-0 cursor-zoom-out" onClick={() => setActivePreviewUrl(null)} />
          <div className="relative max-w-4xl max-h-[90vh] bg-transparent flex flex-col items-center justify-center z-10">
            <VIDCNativeButton
              type="button"
              onClick={() => setActivePreviewUrl(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close full preview"
            >
              <X className="w-6 h-6" />
            </VIDCNativeButton>
            <img
              src={activePreviewUrl}
              alt="Attachment Preview"
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};
