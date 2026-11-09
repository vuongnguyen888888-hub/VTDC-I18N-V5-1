export type FeedbackCategory =
  | 'UI'
  | 'UX'
  | 'Content'
  | 'Data'
  | 'Function'
  | 'Responsive'
  | 'Performance'
  | 'SEO'
  | 'Translation'
  | 'Other';

export const FEEDBACK_CATEGORIES: FeedbackCategory[] = [
  'UI',
  'UX',
  'Content',
  'Data',
  'Function',
  'Responsive',
  'Performance',
  'SEO',
  'Translation',
  'Other',
];

export type FeedbackStatus =
  | 'new'
  | 'reviewed'
  | 'assigned'
  | 'in_progress'
  | 'resolved'
  | 'verified'
  | 'rejected'
  | 'duplicate'
  | 'wont_fix';

export type FeedbackPriority = 'low' | 'normal' | 'high' | 'critical';

export type DateRangeOption = 'all' | 'today' | '7days' | '30days';

export interface FeedbackDoc {
  id?: string;
  projectId: string;
  environment: string;

  pageId: string | null;
  pageTitle: string | null;
  pageUrl: string;
  pagePath: string;

  sectionId: string | null;
  componentId: string | null;

  /** @deprecated Chỉ để đọc bản ghi cũ. Bản ghi mới dùng categories. */
  category: FeedbackCategory | string;
  categories?: FeedbackCategory[];
  rating: number | null;
  message: string;

  status: FeedbackStatus;
  priority: FeedbackPriority;

  reporterUid: string;
  reporterName: string | null;
  reporterEmail: string | null;
  reporterPhotoURL: string | null;

  deviceType: 'desktop' | 'tablet' | 'mobile';
  viewportWidth: number;
  viewportHeight: number;
  browser: string | null;
  userAgent: string | null;

  attachments?: FeedbackAttachment[];

  createdAt?: any;
  updatedAt?: any;
}

export interface FeedbackAttachment {
  secureUrl: string;
  publicId: string;
  width: number;
  height: number;
  format: string;
  bytes: number;
  originalFilename?: string;
  id?: string;
  storagePath?: string;
  fileName?: string;
  mimeType?: string;
  size?: number;
}

/**
 * Nguồn sự thật duy nhất khi đọc chủ đề của một bản ghi feedback.
 * Thứ tự ưu tiên: categories (bản ghi mới) -> category tách bằng dấu phẩy
 * (bản ghi cũ hoặc chuỗi đã nối) -> mảng rỗng.
 */
export function getCategories(
  item: Pick<FeedbackDoc, 'category' | 'categories'>
): FeedbackCategory[] {
  if (Array.isArray(item.categories) && item.categories.length > 0) {
    return item.categories;
  }
  if (typeof item.category === 'string' && item.category.trim()) {
    return item.category
      .split(',')
      .map((c) => c.trim())
      .filter(Boolean) as FeedbackCategory[];
  }
  return [];
}

