'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  MessageSquare,
  Search,
  Filter,
  RefreshCw,
  Star,
  ExternalLink,
  ChevronRight,
  Shield,
  Layers,
  CheckCircle2,
  Clock,
  AlertCircle,
  TrendingUp,
  User as UserIcon,
  LogIn,
  LogOut,
  SlidersHorizontal,
  FileText,
  AlertTriangle,
  ArrowUpDown,
  FileSpreadsheet,
  Download,
  Image as ImageIcon,
  X,
  Trash2,
  Loader2,
} from 'lucide-react';
import { db, auth, googleProvider, getMissingFirebaseEnvVars } from '../../lib/firebase';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  getDocs,
  Timestamp,
  writeBatch,
  doc,
} from 'firebase/firestore';
import { onAuthStateChanged, signInWithPopup, signOut, User } from 'firebase/auth';
import {
  FeedbackDoc,
  FeedbackStatus,
  FeedbackPriority,
  FeedbackCategory,
  FEEDBACK_CATEGORIES,
  DateRangeOption,
  getCategories,
} from '../../types/feedback';
import { AdminFeedbackDetailDrawer } from './AdminFeedbackDetailDrawer';
import { SEAMarket } from '../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface AdminFeedbackDashboardProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
}

// Explicit list of authorized Administrator emails
// No domain-wide wildcards allowed
const ADMIN_EMAIL_ALLOWLIST = [
  'vuongnguyen888888@gmail.com',
  'admin@viettelidc.com.vn',
];

export function isAuthorizedAdmin(user: User | null): boolean {
  if (!user || user.isAnonymous || !user.email) return false;
  const email = user.email.toLowerCase().trim();
  // Ensure email is verified and explicitly in the allowlist
  if (user.emailVerified === false) return false;
  return ADMIN_EMAIL_ALLOWLIST.includes(email);
}

const STATUS_CONFIG: Record<FeedbackStatus, { label: string; bg: string; text: string; border: string }> = {
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

const PRIORITY_CONFIG: Record<FeedbackPriority, { label: string; bg: string; text: string; border: string }> = {
  low: { label: 'Low', bg: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-200' },
  normal: { label: 'Normal', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
  high: { label: 'High', bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
  critical: { label: 'Critical', bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' },
};

export const AdminFeedbackDashboard: React.FC<AdminFeedbackDashboardProps> = ({
  currentMarket,
  onNavigateHome,
}) => {
  const [feedbacks, setFeedbacks] = useState<FeedbackDoc[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Authentication State
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [selectedPage, setSelectedPage] = useState<string>('all');
  const [dateRange, setDateRange] = useState<DateRangeOption>('all');

  // Drawer Detail State
  const [selectedItem, setSelectedItem] = useState<FeedbackDoc | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Export States
  const [isExportingExcel, setIsExportingExcel] = useState(false);
  const [exportNotice, setExportNotice] = useState<string | null>(null);

  // Gallery Lightbox State
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [galleryIndex, setGalleryIndex] = useState<number>(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Selection & Delete States
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<{ type: 'bulk' | 'single'; ids: string[] }>({ type: 'bulk', ids: [] });
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteNotice, setDeleteNotice] = useState<string | null>(null);



  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds(prev => prev.filter(id => !allFilteredIds.includes(id)));
    } else {
      const newSet = new Set([...selectedIds, ...allFilteredIds]);
      setSelectedIds(Array.from(newSet));
    }
  };

  const handleToggleSelect = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const executeDelete = async () => {
    if (!db || deleteTarget.ids.length === 0) return;
    const firestore = db;
    setIsDeleting(true);
    setDeleteNotice(null);

    let successCount = 0;
    let failCount = 0;

    try {
      const chunkSize = 500;
      for (let i = 0; i < deleteTarget.ids.length; i += chunkSize) {
        const chunk = deleteTarget.ids.slice(i, i + chunkSize);
        const batch = writeBatch(firestore);
        chunk.forEach(id => {
          const docRef = doc(firestore, 'feedback', id);
          batch.delete(docRef);
        });
        await batch.commit();
        successCount += chunk.length;
      }

      setDeleteNotice(`Đã xóa thành công ${successCount} feedback.`);
      setSelectedIds(prev => prev.filter(id => !deleteTarget.ids.includes(id)));
      setIsDeleteModalOpen(false);
      setTimeout(() => setDeleteNotice(null), 4000);
    } catch (err: any) {
      console.error("Batch delete error:", err);
      failCount = deleteTarget.ids.length - successCount;
      setDeleteNotice(`Xóa thành công ${successCount}, thất bại ${failCount}. Vui lòng thử lại.`);
    } finally {
      setIsDeleting(false);
    }
  };

  const getThumbnailUrl = (url: string) => {
    if (!url) return '';
    if (url.includes('/upload/')) {
      return url.replace('/upload/', '/upload/w_120,h_80,c_fill,q_auto,f_auto/');
    }
    return url;
  };

  const openGalleryModal = (attachments: any[], startIndex = 0, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const urls = attachments.map((a: any) => a.secureUrl || a.url || '').filter(Boolean);
    if (urls.length === 0) return;
    setGalleryImages(urls);
    setGalleryIndex(startIndex);
    setIsGalleryOpen(true);
  };

  // 1. Auth Listener
  useEffect(() => {
    if (!auth) return;
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsub();
  }, []);

  // 2. Fetch real data from Firestore with Realtime listener ONLY when user is authorized admin
  useEffect(() => {
    if (!currentUser || !isAuthorizedAdmin(currentUser)) {
      setFeedbacks([]);
      setIsLoading(false);
      return;
    }

    if (!db) {
      setErrorMsg("Không thể kết nối Firebase Firestore. Vui lòng kiểm tra cấu hình mạng.");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setErrorMsg(null);

    try {
      const q = query(collection(db, 'feedback'), orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const items: FeedbackDoc[] = [];
          snapshot.forEach((docSnap) => {
            const data = docSnap.data() as Omit<FeedbackDoc, 'id'>;
            items.push({
              id: docSnap.id,
              ...data,
            });
          });
          setFeedbacks(items);
          setIsLoading(false);
        },
        (error: any) => {
          console.error("Firestore real-time subscription error:", error);
          if (error.code === 'permission-denied') {
            setErrorMsg("Firestore permission denied – Quyền truy cập bị từ chối.");
          } else {
            setErrorMsg(`Lỗi tải dữ liệu Firestore: ${error.message || 'Lỗi không xác định'}`);
          }
          setIsLoading(false);
        }
      );

      return () => unsubscribe();
    } catch (err: any) {
      console.error("Error setting up Firestore listener:", err);
      setErrorMsg("Không thể tải danh sách feedback từ Firestore.");
      setIsLoading(false);
    }
  }, [currentUser]);

  const handleManualRefresh = async () => {
    if (!db || !currentUser || !isAuthorizedAdmin(currentUser)) return;
    setIsLoading(true);
    setErrorMsg(null);
    try {
      const q = query(collection(db, 'feedback'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const items: FeedbackDoc[] = [];
      snapshot.forEach((docSnap) => {
        items.push({
          id: docSnap.id,
          ...(docSnap.data() as Omit<FeedbackDoc, 'id'>),
        });
      });
      setFeedbacks(items);
    } catch (err: any) {
      console.error("Manual refresh error:", err);
      if (err.code === 'permission-denied') {
        setErrorMsg("Firestore permission denied – Security Rules need configuration.");
      } else {
        setErrorMsg("Không thể làm mới danh sách feedback.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const missingVars = getMissingFirebaseEnvVars();
    if (missingVars.length > 0) {
      setErrorMsg(
        `Dịch vụ xác thực Firebase chưa sẵn sàng do thiếu các biến môi trường: ${missingVars.join(', ')}. Vui lòng bổ sung vào .env.local hoặc cấu hình deployment.`
      );
      return;
    }

    if (!auth || !googleProvider) {
      setErrorMsg("Dịch vụ xác thực Firebase chưa sẵn sàng. Vui lòng kiểm tra lại cấu hình Firebase.");
      return;
    }
    setErrorMsg(null);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err: any) {
      console.error("Admin Login Error details:", err);
      const code = err?.code || '';
      const domain = typeof window !== 'undefined' ? window.location.hostname : '';
      if (code === 'auth/unauthorized-domain') {
        setErrorMsg(
          `Lỗi Authorized Domain: Tên miền "${domain}" chưa được thêm vào "Authorized domains" trong Firebase Console (Authentication > Settings > Authorized domains).`
        );
      } else if (code === 'auth/popup-blocked') {
        setErrorMsg(
          "Trình duyệt hoặc iFrame đã chặn Popup đăng nhập. Vui lòng cho phép Pop-up trên trình duyệt hoặc mở trong tab mới."
        );
      } else if (code === 'auth/operation-not-allowed') {
        setErrorMsg(
          "Google Sign-In chưa được bật trong Firebase Console (Authentication > Sign-in method > Google)."
        );
      } else if (code === 'auth/popup-closed-by-user') {
        // user cancelled popup
      } else {
        setErrorMsg(`Lỗi đăng nhập Google: ${err.message || code}`);
      }
    }
  };

  const handleGoogleLogout = async () => {
    if (!auth) return;
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Admin Logout Error:", err);
    }
  };

  // Summary Metrics Calculation
  const metrics = useMemo(() => {
    const total = feedbacks.length;
    const countStatus = (st: FeedbackStatus) => feedbacks.filter((f) => f.status === st).length;

    return {
      total,
      new: countStatus('new'),
      reviewed: countStatus('reviewed'),
      assigned: countStatus('assigned'),
      in_progress: countStatus('in_progress'),
      resolved: countStatus('resolved'),
      verified: countStatus('verified'),
      rejected: countStatus('rejected'),
    };
  }, [feedbacks]);

  // Unique Pages list for filtering
  const uniquePages = useMemo(() => {
    const set = new Set<string>();
    feedbacks.forEach((f) => {
      if (f.pagePath) set.add(f.pagePath);
    });
    return Array.from(set);
  }, [feedbacks]);

  // Filtered Feedbacks
  const filteredFeedbacks = useMemo(() => {
    return feedbacks.filter((item) => {
      // 1. Search term (case-insensitive)
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const msgMatch = item.message?.toLowerCase().includes(query);
        const titleMatch = item.pageTitle?.toLowerCase().includes(query);
        const urlMatch = item.pageUrl?.toLowerCase().includes(query);
        const pathMatch = item.pagePath?.toLowerCase().includes(query);
        const reporterMatch = item.reporterName?.toLowerCase().includes(query) || item.reporterEmail?.toLowerCase().includes(query);
        const catMatch = item.category?.toLowerCase().includes(query);

        if (!msgMatch && !titleMatch && !urlMatch && !pathMatch && !reporterMatch && !catMatch) {
          return false;
        }
      }

      // 2. Category filter
      if (selectedCategory !== 'all') {
        if (!getCategories(item).includes(selectedCategory as FeedbackCategory)) return false;
      }

      // 3. Status filter
      if (selectedStatus !== 'all' && item.status !== selectedStatus) {
        return false;
      }

      // 4. Priority filter
      if (selectedPriority !== 'all' && item.priority !== selectedPriority) {
        return false;
      }

      // 5. Page filter
      if (selectedPage !== 'all' && item.pagePath !== selectedPage) {
        return false;
      }

      // 6. Date Range filter
      if (dateRange !== 'all') {
        const now = Date.now();
        let itemDate = 0;
        if (item.createdAt?.toDate) {
          itemDate = item.createdAt.toDate().getTime();
        } else if (item.createdAt instanceof Date) {
          itemDate = item.createdAt.getTime();
        } else if (typeof item.createdAt === 'number') {
          itemDate = item.createdAt;
        }

        if (itemDate > 0) {
          const diffHours = (now - itemDate) / (1000 * 60 * 60);
          if (dateRange === 'today' && diffHours > 24) return false;
          if (dateRange === '7days' && diffHours > 24 * 7) return false;
          if (dateRange === '30days' && diffHours > 24 * 30) return false;
        }
      }

      return true;
    });
  }, [feedbacks, searchTerm, selectedCategory, selectedStatus, selectedPriority, selectedPage, dateRange]);

  const allFilteredIds = useMemo(() => filteredFeedbacks.map(f => f.id!).filter(Boolean), [filteredFeedbacks]);
  const isAllSelected = allFilteredIds.length > 0 && allFilteredIds.every(id => selectedIds.includes(id));
  const isSomeSelected = selectedIds.length > 0 && !isAllSelected;

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'Vừa gửi';
    try {
      if (timestamp.toDate) {
        return timestamp.toDate().toLocaleString('vi-VN', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        });
      }
      if (timestamp instanceof Date) {
        return timestamp.toLocaleString('vi-VN');
      }
      return String(timestamp);
    } catch {
      return 'N/A';
    }
  };

  const handleRowClick = (item: FeedbackDoc) => {
    setSelectedItem(item);
    setIsDetailOpen(true);
  };

  const handleItemUpdated = (updatedItem: FeedbackDoc) => {
    setFeedbacks((prev) =>
      prev.map((f) => (f.id === updatedItem.id ? updatedItem : f))
    );
    setSelectedItem(updatedItem);
  };

  const handleExportExcel = async () => {
    if (!filteredFeedbacks || filteredFeedbacks.length === 0) {
      setExportNotice("Không có dữ liệu để xuất.");
      setTimeout(() => setExportNotice(null), 4000);
      return;
    }
    try {
      setIsExportingExcel(true);
      setExportNotice(null);
      const { exportFeedbackToExcel } = await import('../../lib/exportFeedback');
      await exportFeedbackToExcel(filteredFeedbacks);
    } catch (err) {
      console.error("Lỗi khi xuất file Excel:", err);
      setExportNotice("Có lỗi xảy ra khi xuất file Excel.");
      setTimeout(() => setExportNotice(null), 4000);
    } finally {
      setIsExportingExcel(false);
    }
  };

  const handleExportCSV = async () => {
    if (!filteredFeedbacks || filteredFeedbacks.length === 0) {
      setExportNotice("Không có dữ liệu để xuất.");
      setTimeout(() => setExportNotice(null), 4000);
      return;
    }
    try {
      setExportNotice(null);
      const { exportFeedbackToCSV } = await import('../../lib/exportFeedback');
      exportFeedbackToCSV(filteredFeedbacks);
    } catch (err) {
      console.error("Lỗi khi xuất file CSV:", err);
      setExportNotice("Có lỗi xảy ra khi xuất file CSV.");
      setTimeout(() => setExportNotice(null), 4000);
    }
  };

  // 1. Unauthenticated Gate
  if (!currentUser || currentUser.isAnonymous) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center px-4 py-12">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-200 p-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-2xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center mx-auto shadow-inner">
            <Shield className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Khu vực Quản trị Feedback
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Trang quản trị dành cho Quản trị viên được cấp phép (Admin Email Allowlist). Vui lòng xác thực bằng tài khoản Google đã được phê duyệt.
            </p>
          </div>
          
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left space-y-1.5">
            <div className="font-bold text-slate-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Cơ chế xác thực Quản trị:</span>
            </div>
            <ul className="list-disc list-inside text-[11px] text-slate-500 pl-1 space-y-0.5">
              <li>Google Authentication for Admin (Email Verified)</li>
              <li>Tài khoản nằm trong danh sách Admin Allowlist được chỉ định</li>
            </ul>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 text-left">
              {errorMsg}
            </div>
          )}

          <div className="space-y-3 pt-2">
            <VIDCNativeButton
              type="button"
              onClick={handleGoogleLogin}
              className="w-full py-3 px-4 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-d6002c)] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <LogIn className="w-4 h-4" />
              <span>Google Authentication for Admin</span>
            </VIDCNativeButton>

            {onNavigateHome && (
              <VIDCNativeButton
                type="button"
                onClick={onNavigateHome}
                className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold text-xs transition-colors cursor-pointer"
              >
                Trở về Trang chủ
              </VIDCNativeButton>
            )}
          </div>
        </div>
      </div>
    );
  }

  // 2. Unauthorized Account Gate
  if (currentUser && !isAuthorizedAdmin(currentUser)) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center px-4 py-12">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-rose-200 p-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto shadow-inner">
            <AlertCircle className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Truy cập bị từ chối
            </h2>
            <p className="text-xs text-slate-600">
              Tài khoản <span className="font-bold text-slate-800">{currentUser.email}</span> không nằm trong danh sách Quản trị viên được cấp phép (Admin Email Allowlist) hoặc chưa được xác thực email.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 text-left">
            <p className="font-semibold">Cần quyền truy cập?</p>
            <p className="text-[11px] text-amber-700 mt-0.5">
              Vui lòng liên hệ Quản trị viên hệ thống để thêm email của bạn vào danh sách Admin Allowlist.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <VIDCNativeButton
              type="button"
              onClick={handleGoogleLogout}
              className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Đăng xuất & Đổi tài khoản khác</span>
            </VIDCNativeButton>

            {onNavigateHome && (
              <VIDCNativeButton
                type="button"
                onClick={onNavigateHome}
                className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold text-xs transition-colors cursor-pointer"
              >
                Trở về Trang chủ
              </VIDCNativeButton>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--vidc-legacy-hex-f8fafc)] text-[var(--vidc-legacy-hex-222225)]">
      
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <VIDCNativeButton
              type="button"
              onClick={onNavigateHome}
              className="text-xs font-bold text-slate-500 hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Trang chủ</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </VIDCNativeButton>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center font-bold">
                <Shield className="w-4 h-4" />
              </div>
              <h1 className="text-base font-extrabold text-slate-900 tracking-tight">
                Admin Feedback Dashboard
              </h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                Firestore Realtime
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Export Buttons in Top Header */}
            <div className="flex items-center gap-1.5">
              <VIDCNativeButton
                type="button"
                id="btn-export-excel-header"
                onClick={handleExportExcel}
                disabled={isExportingExcel}
                className="px-2.5 sm:px-3 py-1.5 rounded-lg border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
                title="Xuất danh sách feedback (theo filter) ra file Excel"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span className="hidden md:inline">{isExportingExcel ? 'Đang xuất...' : 'Export Excel'}</span>
                <span className="md:hidden">Excel</span>
              </VIDCNativeButton>

              <VIDCNativeButton
                type="button"
                id="btn-export-csv-header"
                onClick={handleExportCSV}
                className="px-2.5 sm:px-3 py-1.5 rounded-lg border border-blue-300 bg-blue-50 hover:bg-blue-100 text-blue-800 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Xuất danh sách feedback (theo filter) ra file CSV"
              >
                <Download className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <span className="hidden md:inline">Export CSV</span>
                <span className="md:hidden">CSV</span>
              </VIDCNativeButton>
            </div>

            <VIDCNativeButton
              type="button"
              onClick={handleManualRefresh}
              className="px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-xs font-bold text-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Làm mới dữ liệu từ Firestore"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-[var(--vidc-color-brand-red)]' : ''}`} />
              <span className="hidden sm:inline">Làm mới</span>
            </VIDCNativeButton>

            {currentUser ? (
              <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
                {currentUser.photoURL ? (
                  <img alt={currentUser.displayName || 'Admin'} src={currentUser.photoURL} className="w-7 h-7 rounded-full object-cover border border-slate-300" />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-red-100 text-[var(--vidc-color-brand-red)] flex items-center justify-center font-bold text-xs">
                    <UserIcon className="w-4 h-4" />
                  </div>
                )}
                <span className="text-xs font-bold text-slate-800 hidden md:inline max-w-[120px] truncate">
                  {currentUser.displayName || currentUser.email}
                </span>
                <VIDCNativeButton
                  type="button"
                  onClick={handleGoogleLogout}
                  className="p-1.5 text-slate-400 hover:text-red-600 rounded-md hover:bg-slate-100 transition-colors"
                  title="Đăng xuất"
                >
                  <LogOut className="w-4 h-4" />
                </VIDCNativeButton>
              </div>
            ) : (
              <VIDCNativeButton
                type="button"
                onClick={handleGoogleLogin}
                className="px-3 py-1.5 rounded-lg bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-d6002c)] text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Đăng nhập Admin</span>
              </VIDCNativeButton>
            )}
          </div>
        </div>
      </header>

      {/* Main Admin Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Export Notification Notice */}
        {exportNotice && (
          <div
            id="feedback-export-notice-banner"
            className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold flex items-center justify-between shadow-xs transition-all animate-in fade-in duration-200"
          >
            <div className="flex items-center gap-2.5">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>{exportNotice}</span>
            </div>
            <VIDCNativeButton
              type="button"
              onClick={() => setExportNotice(null)}
              className="text-amber-800 hover:text-amber-950 font-extrabold underline cursor-pointer text-xs"
            >
              Đóng
            </VIDCNativeButton>
          </div>
        )}
        
        {/* Error notification */}
        {errorMsg && (
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm flex items-start gap-3 shadow-xs">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-bold">Cảnh báo kết nối Firestore</h4>
              <p className="text-xs text-amber-800">{errorMsg}</p>
            </div>
          </div>
        )}

        {/* 8 Metric Summary Cards */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)]" />
              <span>Thống kê Tổng quan (Summary Metrics)</span>
            </h2>
            <span className="text-xs text-slate-500 font-medium">
              Tổng số bản ghi: <strong className="text-slate-900">{metrics.total}</strong>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {/* Total */}
            <div 
              onClick={() => setSelectedStatus('all')}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                selectedStatus === 'all' ? 'border-[var(--vidc-color-brand-red)] bg-red-50/40 ring-1 ring-[var(--vidc-color-brand-red)]' : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
              }`}
            >
              <span className="block text-[11px] font-bold text-slate-500 uppercase truncate">Total</span>
              <span className="text-2xl font-black text-slate-900">{metrics.total}</span>
            </div>

            {/* New */}
            <div 
              onClick={() => setSelectedStatus('new')}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                selectedStatus === 'new' ? 'border-blue-500 bg-blue-50/60 ring-1 ring-blue-500' : 'bg-white border-slate-200 hover:border-blue-300 shadow-2xs'
              }`}
            >
              <span className="block text-[11px] font-bold text-blue-600 uppercase truncate">New</span>
              <span className="text-2xl font-black text-blue-700">{metrics.new}</span>
            </div>

            {/* Reviewed */}
            <div 
              onClick={() => setSelectedStatus('reviewed')}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                selectedStatus === 'reviewed' ? 'border-purple-500 bg-purple-50/60 ring-1 ring-purple-500' : 'bg-white border-slate-200 hover:border-purple-300 shadow-2xs'
              }`}
            >
              <span className="block text-[11px] font-bold text-purple-600 uppercase truncate">Reviewed</span>
              <span className="text-2xl font-black text-purple-700">{metrics.reviewed}</span>
            </div>

            {/* Assigned */}
            <div 
              onClick={() => setSelectedStatus('assigned')}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                selectedStatus === 'assigned' ? 'border-indigo-500 bg-indigo-50/60 ring-1 ring-indigo-500' : 'bg-white border-slate-200 hover:border-indigo-300 shadow-2xs'
              }`}
            >
              <span className="block text-[11px] font-bold text-indigo-600 uppercase truncate">Assigned</span>
              <span className="text-2xl font-black text-indigo-700">{metrics.assigned}</span>
            </div>

            {/* In Progress */}
            <div 
              onClick={() => setSelectedStatus('in_progress')}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                selectedStatus === 'in_progress' ? 'border-amber-500 bg-amber-50/60 ring-1 ring-amber-500' : 'bg-white border-slate-200 hover:border-amber-300 shadow-2xs'
              }`}
            >
              <span className="block text-[11px] font-bold text-amber-600 uppercase truncate">In Progress</span>
              <span className="text-2xl font-black text-amber-700">{metrics.in_progress}</span>
            </div>

            {/* Resolved */}
            <div 
              onClick={() => setSelectedStatus('resolved')}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                selectedStatus === 'resolved' ? 'border-emerald-500 bg-emerald-50/60 ring-1 ring-emerald-500' : 'bg-white border-slate-200 hover:border-emerald-300 shadow-2xs'
              }`}
            >
              <span className="block text-[11px] font-bold text-emerald-600 uppercase truncate">Resolved</span>
              <span className="text-2xl font-black text-emerald-700">{metrics.resolved}</span>
            </div>

            {/* Verified */}
            <div 
              onClick={() => setSelectedStatus('verified')}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                selectedStatus === 'verified' ? 'border-teal-500 bg-teal-50/60 ring-1 ring-teal-500' : 'bg-white border-slate-200 hover:border-teal-300 shadow-2xs'
              }`}
            >
              <span className="block text-[11px] font-bold text-teal-600 uppercase truncate">Verified</span>
              <span className="text-2xl font-black text-teal-700">{metrics.verified}</span>
            </div>

            {/* Rejected */}
            <div 
              onClick={() => setSelectedStatus('rejected')}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                selectedStatus === 'rejected' ? 'border-rose-500 bg-rose-50/60 ring-1 ring-rose-500' : 'bg-white border-slate-200 hover:border-rose-300 shadow-2xs'
              }`}
            >
              <span className="block text-[11px] font-bold text-rose-600 uppercase truncate">Rejected</span>
              <span className="text-2xl font-black text-rose-700">{metrics.rejected}</span>
            </div>
          </div>
        </section>

        {/* Multi-Filter Bar */}
        <section className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <VIDCNativeInput
                type="text"
                placeholder="Tìm kiếm nội dung góp ý, URL, người gửi, từ khóa..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:bg-white transition-all placeholder:text-slate-400"
              />
              {searchTerm && (
                <VIDCNativeButton
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
                >
                  Xóa
                </VIDCNativeButton>
              )}
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap items-center gap-2.5">
              
              {/* Category Filter */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-medium text-slate-500 hidden sm:inline">Chủ đề:</span>
                <VIDCNativeSelect
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 text-xs font-bold bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:outline-none cursor-pointer"
                >
                  <option value="all">Tất cả chủ đề</option>
                  {FEEDBACK_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </VIDCNativeSelect>
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-medium text-slate-500 hidden sm:inline">Trạng thái:</span>
                <VIDCNativeSelect
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-3 py-2 text-xs font-bold bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:outline-none cursor-pointer"
                >
                  <option value="all">Tất cả trạng thái</option>
                  <option value="new">New (Mới)</option>
                  <option value="reviewed">Reviewed (Đã xem)</option>
                  <option value="assigned">Assigned (Đã giao)</option>
                  <option value="in_progress">In Progress (Đang làm)</option>
                  <option value="resolved">Resolved (Đã xong)</option>
                  <option value="verified">Verified (Đã nghiệm thu)</option>
                  <option value="rejected">Rejected (Từ chối)</option>
                  <option value="duplicate">Duplicate (Trùng lặp)</option>
                  <option value="wont_fix">Won't Fix (Không xử lý)</option>
                </VIDCNativeSelect>
              </div>

              {/* Priority Filter */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-medium text-slate-500 hidden sm:inline">Ưu tiên:</span>
                <VIDCNativeSelect
                  value={selectedPriority}
                  onChange={(e) => setSelectedPriority(e.target.value)}
                  className="px-3 py-2 text-xs font-bold bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:outline-none cursor-pointer"
                >
                  <option value="all">Tất cả ưu tiên</option>
                  <option value="low">Low</option>
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </VIDCNativeSelect>
              </div>

              {/* Page Filter */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-medium text-slate-500 hidden sm:inline">Trang:</span>
                <VIDCNativeSelect
                  value={selectedPage}
                  onChange={(e) => setSelectedPage(e.target.value)}
                  className="px-3 py-2 text-xs font-bold bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:outline-none max-w-[160px] truncate cursor-pointer"
                >
                  <option value="all">Tất cả trang ({uniquePages.length})</option>
                  {uniquePages.map((path) => (
                    <option key={path} value={path}>{path}</option>
                  ))}
                </VIDCNativeSelect>
              </div>

              {/* Date Filter */}
              <div className="flex items-center gap-1.5">
                <VIDCNativeSelect
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value as DateRangeOption)}
                  className="px-3 py-2 text-xs font-bold bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:outline-none cursor-pointer"
                >
                  <option value="all">Toàn bộ thời gian</option>
                  <option value="today">24 giờ qua</option>
                  <option value="7days">7 ngày qua</option>
                  <option value="30days">30 ngày qua</option>
                </VIDCNativeSelect>
              </div>

            </div>

          </div>

          {/* Active filters indicators */}
          {(searchTerm || selectedCategory !== 'all' || selectedStatus !== 'all' || selectedPriority !== 'all' || selectedPage !== 'all' || dateRange !== 'all') && (
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">
                Hiển thị <strong>{filteredFeedbacks.length}</strong> / <strong>{feedbacks.length}</strong> feedback
              </span>
              <VIDCNativeButton
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedStatus('all');
                  setSelectedPriority('all');
                  setSelectedPage('all');
                  setDateRange('all');
                }}
                className="text-[var(--vidc-color-text-brand)] hover:underline font-bold"
              >
                Đặt lại tất cả bộ lọc
              </VIDCNativeButton>
            </div>
          )}
        </section>

        {/* Feedback Data Table */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 border-b border-slate-200 bg-slate-50/70 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <div className="flex items-center gap-2.5">
              <h3 className="text-sm font-bold text-slate-900">Danh sách Feedback</h3>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-200/90 text-slate-800">
                {filteredFeedbacks.length}
              </span>
              {filteredFeedbacks.length !== feedbacks.length && (
                <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                  (lọc từ tổng {feedbacks.length} bản ghi Firestore)
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <VIDCNativeButton
                type="button"
                id="btn-export-excel-table"
                onClick={handleExportExcel}
                disabled={isExportingExcel}
                className="px-3.5 py-1.5 rounded-lg border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50 shadow-2xs"
                title="Xuất các feedback đang hiển thị ra file Excel (.xlsx)"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-700" />
                <span>{isExportingExcel ? 'Đang xuất Excel...' : 'Export Excel'}</span>
              </VIDCNativeButton>

              <VIDCNativeButton
                type="button"
                id="btn-export-csv-table"
                onClick={handleExportCSV}
                className="px-3.5 py-1.5 rounded-lg border border-blue-300 bg-blue-50 hover:bg-blue-100 text-blue-800 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                title="Xuất các feedback đang hiển thị ra file CSV (.csv)"
              >
                <Download className="w-3.5 h-3.5 text-blue-700" />
                <span>Export CSV</span>
              </VIDCNativeButton>
            </div>
          </div>

          {/* Delete Notice Banner */}
          {deleteNotice && (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-bold flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{deleteNotice}</span>
              </div>
              <VIDCNativeButton type="button" onClick={() => setDeleteNotice(null)} className="text-emerald-700 hover:text-emerald-900 cursor-pointer">
                <X className="w-4 h-4" />
              </VIDCNativeButton>
            </div>
          )}

          {/* Bulk Action Bar */}
          {selectedIds.length > 0 && (
            <div className="bg-red-50 border-b border-red-200 px-4 py-3 flex items-center justify-between animate-in fade-in duration-150">
              <div className="flex items-center gap-2 text-xs font-bold text-red-800">
                <span className="w-2 h-2 rounded-full bg-[var(--vidc-color-brand-red)] animate-pulse" />
                <span>Đã chọn {selectedIds.length} feedback</span>
              </div>
              <div className="flex items-center gap-2">
                <VIDCNativeButton
                  type="button"
                  onClick={() => setSelectedIds([])}
                  className="px-3 py-1.5 rounded-lg bg-white border border-red-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Bỏ chọn
                </VIDCNativeButton>
                <VIDCNativeButton
                  type="button"
                  onClick={() => {
                    setDeleteTarget({ type: 'bulk', ids: selectedIds });
                    setIsDeleteModalOpen(true);
                  }}
                  className="px-3.5 py-1.5 rounded-lg bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-d6002c)] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Xóa đã chọn ({selectedIds.length})</span>
                </VIDCNativeButton>
              </div>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  <th className="py-3.5 pl-4 pr-2 w-10">
                    <VIDCNativeInput
                      type="checkbox"
                      checked={isAllSelected}
                      ref={input => {
                        if (input) input.indeterminate = isSomeSelected;
                      }}
                      onChange={handleSelectAll}
                      className="rounded border-slate-300 text-[var(--vidc-color-brand-red)] focus:ring-[var(--vidc-color-brand-red)] cursor-pointer w-4 h-4"
                      aria-label="Chọn tất cả"
                    />
                  </th>
                  <th className="py-3.5 px-4">Trang (Page)</th>
                  <th className="py-3.5 px-3">Chủ đề</th>
                  <th className="py-3.5 px-3">Ảnh</th>
                  <th className="py-3.5 px-4 min-w-[280px]">Nội dung Feedback</th>
                  <th className="py-3.5 px-4">Người gửi (Reporter)</th>
                  <th className="py-3.5 px-4">Thời gian</th>
                  <th className="py-3.5 px-3 text-center">Ưu tiên</th>
                  <th className="py-3.5 px-3 text-center">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-800">
                {isLoading ? (
                  <tr>
                    <td colSpan={9} className="py-12 text-center text-slate-500">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <RefreshCw className="w-6 h-6 animate-spin text-[var(--vidc-color-brand-red)]" />
                        <span className="font-medium">Đang tải dữ liệu từ Firestore collection &apos;feedback&apos;...</span>
                      </div>
                    </td>
                  </tr>
                ) : filteredFeedbacks.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="py-12 text-center text-slate-500">
                      <div className="flex flex-col items-center justify-center gap-2 max-w-sm mx-auto">
                        <MessageSquare className="w-8 h-8 text-slate-300" />
                        <span className="font-bold text-slate-700">Không tìm thấy feedback nào</span>
                        <p className="text-xs text-slate-400">
                          {feedbacks.length === 0
                            ? "Chưa có feedback nào được ghi vào Firestore collection 'feedback'. Bạn có thể bấm nút Feedback ở góc màn hình để gửi thử một phản hồi."
                            : "Không có feedback nào khớp với điều kiện lọc hiện tại."}
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredFeedbacks.map((item) => {
                    const st = STATUS_CONFIG[item.status] || STATUS_CONFIG.new;
                    const pr = PRIORITY_CONFIG[item.priority] || PRIORITY_CONFIG.normal;
                    const isSelected = item.id ? selectedIds.includes(item.id) : false;

                    return (
                      <tr
                        key={item.id}
                        onClick={() => handleRowClick(item)}
                        className={`hover:bg-slate-50/80 transition-colors cursor-pointer group ${isSelected ? 'bg-red-50/40' : ''}`}
                      >
                        {/* Checkbox */}
                        <td className="py-3.5 pl-4 pr-2 w-10" onClick={(e) => e.stopPropagation()}>
                          <VIDCNativeInput
                            type="checkbox"
                            checked={isSelected}
                            onChange={(e) => {
                              if (item.id) handleToggleSelect(item.id, e as any);
                            }}
                            className="rounded border-slate-300 text-[var(--vidc-color-brand-red)] focus:ring-[var(--vidc-color-brand-red)] cursor-pointer w-4 h-4"
                            aria-label="Chọn feedback"
                          />
                        </td>

                        {/* Page Title & Path */}
                        <td className="py-3.5 px-4 max-w-[180px]">
                          <div className="font-bold text-slate-900 truncate group-hover:text-[var(--vidc-color-brand-red)] transition-colors" title={item.pageTitle || ''}>
                            {item.pageTitle || 'N/A'}
                          </div>
                          {item.pageUrl ? (
                            <VIDCAnchor
                              href={item.pageUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-[11px] font-mono text-slate-400 hover:text-[var(--vidc-color-brand-red)] hover:underline truncate inline-flex items-center gap-1"
                              title="Mở trang ở tab mới"
                            >
                              <span>{item.pagePath || '/'}</span>
                              <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                            </VIDCAnchor>
                          ) : (
                            <div className="text-[11px] font-mono text-slate-400 truncate" title={item.pagePath || ''}>
                              {item.pagePath || '/'}
                            </div>
                          )}
                        </td>

                        {/* Category */}
                        <td className="py-3.5 px-3">
                          <div className="flex flex-wrap gap-1 max-w-[150px]">
                            {getCategories(item).length > 0 ? (
                              getCategories(item).map((c, i) => (
                                <span key={i} className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200 whitespace-nowrap">
                                  {c}
                                </span>
                              ))
                            ) : (
                              <span className="text-slate-400 text-xs">-</span>
                            )}
                          </div>
                        </td>

                        {/* Attachments Column */}
                        <td className="py-3.5 px-3 whitespace-nowrap">
                          {item.attachments && item.attachments.length > 0 ? (
                            <div 
                              className="flex items-center gap-1 cursor-pointer"
                              onClick={(e) => openGalleryModal(item.attachments!, 0, e)}
                              title="Xem ảnh đính kèm"
                            >
                              {item.attachments.slice(0, 3).map((att: any, idx: number) => {
                                const imgUrl = att.secureUrl || att.url;
                                if (!imgUrl) return null;
                                return (
                                  <img
                                    key={att.id || idx}
                                    src={getThumbnailUrl(imgUrl)}
                                    alt="thumb"
                                    className="w-10 h-8 rounded object-cover border border-slate-200 hover:opacity-80 transition-opacity shadow-2xs"
                                  />
                                );
                              })}
                              {item.attachments.length > 3 && (
                                <span className="px-1.5 py-1 rounded bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-700">
                                  +{item.attachments.length - 3}
                                </span>
                              )}
                            </div>
                          ) : (
                            <span className="text-slate-400 text-xs">—</span>
                          )}
                        </td>

                        {/* Message & Rating */}
                        <td className="py-3.5 px-4">
                          <div className="space-y-1">
                            <p className="line-clamp-2 font-medium text-slate-800 leading-snug">
                              {item.message}
                            </p>
                            <div className="flex flex-wrap items-center gap-2">
                              {item.rating && (
                                <div className="flex items-center gap-0.5 text-amber-500">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-3 h-3 ${
                                        i < (item.rating || 0) ? 'fill-amber-400 text-amber-400' : 'text-slate-200'
                                      }`}
                                    />
                                  ))}
                                </div>
                              )}
                              {item.attachments && item.attachments.length > 0 && (
                                <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-amber-50 border border-amber-200 text-[10px] font-bold text-amber-700">
                                  <ImageIcon className="w-3 h-3 text-amber-600" />
                                  <span>Ảnh đính kèm ({item.attachments.length})</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </td>

                        {/* Reporter */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            {item.reporterPhotoURL ? (
                              <img alt={item.reporterName || 'Reporter'} src={item.reporterPhotoURL} className="w-6 h-6 rounded-full object-cover border border-slate-200 shrink-0" />
                            ) : (
                              <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-[10px] shrink-0">
                                <UserIcon className="w-3.5 h-3.5" />
                              </div>
                            )}
                            <div className="min-w-0 max-w-[130px]">
                              <div className="font-bold text-slate-800 truncate text-[11px]">
                                {item.reporterName || 'Ẩn danh'}
                              </div>
                              <div className="text-[10px] text-slate-400 truncate">
                                {item.reporterEmail || 'No email'}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Created Date */}
                        <td className="py-3.5 px-4 whitespace-nowrap text-slate-500 text-[11px]">
                          {formatDate(item.createdAt)}
                        </td>

                        {/* Priority Badge */}
                        <td className="py-3.5 px-3 text-center whitespace-nowrap">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${pr.bg} ${pr.text} ${pr.border}`}>
                            {pr.label}
                          </span>
                        </td>

                        {/* Status Badge & Single Delete */}
                        <td className="py-3.5 px-3 text-center whitespace-nowrap">
                          <div className="inline-flex items-center gap-2">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${st.bg} ${st.text} ${st.border}`}>
                              {st.label}
                            </span>
                            <VIDCNativeButton
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (item.id) {
                                  setDeleteTarget({ type: 'single', ids: [item.id] });
                                  setIsDeleteModalOpen(true);
                                }
                              }}
                              className="p-1 rounded text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                              title="Xóa feedback này"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </VIDCNativeButton>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="p-4 bg-slate-50/80 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>
              Tổng cộng <strong>{filteredFeedbacks.length}</strong> kết quả (Bấm vào dòng để xem chi tiết & cập nhật trạng thái)
            </span>
            <div className="flex items-center gap-2 text-slate-400 text-[11px]">
              <span>Collection: <strong>feedback</strong></span>
              <span>•</span>
              <span>Project: <strong>viettelidc-hub</strong></span>
            </div>
          </div>
        </section>

      </main>

      {/* Admin Detail Drawer */}
      <AdminFeedbackDetailDrawer
        item={selectedItem}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        onUpdated={handleItemUpdated}
      />

      {/* Gallery Lightbox Modal */}
      {isGalleryOpen && galleryImages.length > 0 && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-slate-950/90 p-4 animate-in fade-in duration-150">
          <div className="absolute inset-0 cursor-zoom-out" onClick={() => setIsGalleryOpen(false)} />
          <div className="relative max-w-4xl max-h-[90vh] bg-transparent flex flex-col items-center justify-center z-10 w-full">
            
            <div className="absolute -top-12 left-0 right-0 flex items-center justify-between text-white px-2">
              <span className="text-xs font-bold font-mono">
                Ảnh {galleryIndex + 1} / {galleryImages.length}
              </span>
              <VIDCNativeButton
                type="button"
                onClick={() => setIsGalleryOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close gallery"
              >
                <X className="w-5 h-5" />
              </VIDCNativeButton>
            </div>

            <div className="relative flex items-center justify-center w-full max-h-[75vh]">
              <img
                src={galleryImages[galleryIndex]}
                alt={`Gallery ${galleryIndex + 1}`}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />

              {galleryImages.length > 1 && (
                <VIDCNativeButton
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setGalleryIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
                  }}
                  className="absolute left-2 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
                  aria-label="Previous image"
                >
                  ‹
                </VIDCNativeButton>
              )}

              {galleryImages.length > 1 && (
                <VIDCNativeButton
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setGalleryIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
                  }}
                  className="absolute right-2 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
                  aria-label="Next image"
                >
                  ›
                </VIDCNativeButton>
              )}
            </div>

            {galleryImages.length > 1 && (
              <div className="flex items-center gap-2 mt-4 overflow-x-auto max-w-full py-2 px-1">
                {galleryImages.map((imgUrl, i) => (
                  <VIDCNativeButton
                    key={i}
                    type="button"
                    onClick={() => setGalleryIndex(i)}
                    className={`relative w-14 h-10 rounded-md overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                      i === galleryIndex ? 'border-[var(--vidc-color-brand-red)] scale-105' : 'border-white/30 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={getThumbnailUrl(imgUrl)} alt="Thumbnail" className="w-full h-full object-cover" />
                  </VIDCNativeButton>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-[200] overflow-y-auto">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity" onClick={() => !isDeleting && setIsDeleteModalOpen(false)} />
          <div className="relative z-[201] flex min-h-full items-center justify-center p-4 text-center pointer-events-none">
            <div className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-2xl transition-all space-y-5 pointer-events-auto opacity-100">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shadow-inner mx-auto">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="text-center space-y-1.5">
                <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                  {deleteTarget.type === 'bulk'
                    ? `Bạn có chắc muốn xóa ${deleteTarget.ids.length} feedback đã chọn?`
                    : 'Bạn có chắc muốn xóa feedback này?'}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Hành động này không thể hoàn tác. Các bản ghi feedback được chọn sẽ bị xóa vĩnh viễn khỏi Firestore.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <VIDCNativeButton
                  type="button"
                  disabled={isDeleting}
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="flex-1 py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-colors cursor-pointer disabled:opacity-50"
                >
                  Hủy
                </VIDCNativeButton>
                <VIDCNativeButton
                  type="button"
                  disabled={isDeleting}
                  onClick={executeDelete}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
                >
                  {isDeleting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Đang xóa...</span>
                    </>
                  ) : (
                    <span>Xóa</span>
                  )}
                </VIDCNativeButton>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
