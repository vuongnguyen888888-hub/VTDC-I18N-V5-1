import { FeedbackDoc, getCategories } from '../types/feedback';

/**
 * Format timestamp to DD/MM/YYYY HH:mm
 */
export function formatCreatedAtForExport(val: any): string {
  if (!val) return '';
  let d: Date | null = null;

  if (typeof val.toDate === 'function') {
    d = val.toDate();
  } else if (val instanceof Date) {
    d = val;
  } else if (typeof val === 'number') {
    d = new Date(val);
  } else if (val && typeof val.seconds === 'number') {
    d = new Date(val.seconds * 1000);
  } else if (typeof val === 'string') {
    const parsed = new Date(val);
    if (!isNaN(parsed.getTime())) d = parsed;
  }

  if (!d || isNaN(d.getTime())) return '';

  const pad = (n: number) => String(n).padStart(2, '0');
  const day = pad(d.getDate());
  const month = pad(d.getMonth() + 1);
  const year = d.getFullYear();
  const hours = pad(d.getHours());
  const minutes = pad(d.getMinutes());

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

/**
 * Generate filename according to format: Viettel-IDC-Feedback-YYYY-MM-DD.<ext>
 */
export function getExportFileName(extension: 'xlsx' | 'csv'): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `Viettel-IDC-Feedback-${year}-${month}-${day}.${extension}`;
}

/**
 * Trigger client-side file download for a Blob
 */
function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/**
 * Export filtered feedbacks to Excel (.xlsx) with:
 * - Header row frozen
 * - Columns: STT, Created At, Page Title, Page URL, Category, Message, Rating, Priority, Status
 * - Excludes technical fields (projectId, environment, browser, componentId, reporterUid, userAgent)
 * - Auto column widths
 * - Wrap text for Message
 * - Formatted date: DD/MM/YYYY HH:mm
 */
export async function exportFeedbackToExcel(feedbacks: FeedbackDoc[]): Promise<boolean> {
  if (!feedbacks || feedbacks.length === 0) {
    return false;
  }

  const ExcelJS = await import('exceljs');
  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'Viettel IDC Portal';
  workbook.lastModifiedBy = 'Admin';
  workbook.created = new Date();
  workbook.modified = new Date();

  const worksheet = workbook.addWorksheet('Feedback', {
    views: [{ state: 'frozen', xSplit: 0, ySplit: 1 }],
    properties: { defaultRowHeight: 22 },
  });

  // 1. Define Columns matching user specifications exactly
  worksheet.columns = [
    { header: 'STT', key: 'stt', width: 8 },
    { header: 'Created At', key: 'createdAt', width: 18 },
    { header: 'Page Title', key: 'pageTitle', width: 28 },
    { header: 'Page URL', key: 'pageUrl', width: 34 },
    { header: 'Category', key: 'category', width: 14 },
    { header: 'Message', key: 'message', width: 45 },
    { header: 'Rating', key: 'rating', width: 10 },
    { header: 'Priority', key: 'priority', width: 12 },
    { header: 'Status', key: 'status', width: 14 },
    { header: 'Ảnh đính kèm', key: 'attachments', width: 25 },
  ];

  // 2. Style Header Row
  const headerRow = worksheet.getRow(1);
  headerRow.height = 28;
  headerRow.font = {
    name: 'Segoe UI',
    size: 11,
    bold: true,
    color: { argb: 'FFFFFFFF' },
  };
  headerRow.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFED1C24' }, // Viettel IDC red
  };
  headerRow.alignment = {
    vertical: 'middle',
    horizontal: 'center',
    wrapText: false,
  };

  // 3. Add Data Rows
  feedbacks.forEach((item, index) => {
    const row = worksheet.addRow({
      stt: index + 1,
      createdAt: formatCreatedAtForExport(item.createdAt),
      pageTitle: item.pageTitle || '',
      pageUrl: item.pageUrl || item.pagePath || '',
      category: getCategories(item).join(', '),
      message: item.message || '',
      rating: item.rating != null ? item.rating : '',
      priority: item.priority || '',
      status: item.status || '',
      attachments: item.attachments && item.attachments.length > 0
        ? item.attachments.map(att => att.storagePath).join('; ')
        : 'Không có',
    });

    row.font = { name: 'Segoe UI', size: 10 };
    row.getCell('stt').alignment = { vertical: 'top', horizontal: 'center' };
    row.getCell('createdAt').alignment = { vertical: 'top', horizontal: 'center' };
    row.getCell('pageTitle').alignment = { vertical: 'top', horizontal: 'left' };
    row.getCell('pageUrl').alignment = { vertical: 'top', horizontal: 'left' };
    row.getCell('category').alignment = { vertical: 'top', horizontal: 'center' };
    row.getCell('message').alignment = { vertical: 'top', horizontal: 'left', wrapText: true };
    row.getCell('rating').alignment = { vertical: 'top', horizontal: 'center' };
    row.getCell('priority').alignment = { vertical: 'top', horizontal: 'center' };
    row.getCell('status').alignment = { vertical: 'top', horizontal: 'center' };
    row.getCell('attachments').alignment = { vertical: 'top', horizontal: 'left', wrapText: true };
  });

  // 4. Auto-fit column widths based on cell content (with clamp)
  worksheet.columns.forEach((col) => {
    if (!col || col.key === 'message') {
      // Keep Message column at a spacious width for wrapText
      if (col) col.width = 46;
      return;
    }

    let maxLen = col.header ? String(col.header).length : 10;
    col.eachCell?.({ includeEmpty: false }, (cell, rowNumber) => {
      if (rowNumber > 1 && cell.value != null) {
        const valStr = String(cell.value);
        if (valStr.length > maxLen) {
          maxLen = valStr.length;
        }
      }
    });

    col.width = Math.max(Math.min(maxLen + 4, 45), 10);
  });

  // 5. Apply subtle cell borders
  worksheet.eachRow((row) => {
    row.eachCell((cell) => {
      cell.border = {
        top: { style: 'thin', color: { argb: 'FFE2E8F0' } },
        left: { style: 'thin', color: { argb: 'FFE2E8F0' } },
        bottom: { style: 'thin', color: { argb: 'FFE2E8F0' } },
        right: { style: 'thin', color: { argb: 'FFE2E8F0' } },
      };
    });
  });

  // 6. Generate Buffer & Download
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });
  const fileName = getExportFileName('xlsx');
  downloadBlob(blob, fileName);

  return true;
}

/**
 * Helper to escape CSV values
 */
function escapeCSV(val: any): string {
  if (val == null) return '""';
  const str = String(val);
  return `"${str.replace(/"/g, '""')}"`;
}

/**
 * Export filtered feedbacks to CSV with:
 * - Columns: STT, Created At, Page Title, Page URL, Category, Message, Rating, Priority, Status
 * - Excludes technical fields (projectId, environment, browser, componentId, reporterUid, userAgent)
 * - UTF-8 BOM for correct Vietnamese character display in Excel
 * - Formatted date: DD/MM/YYYY HH:mm
 */
export function exportFeedbackToCSV(feedbacks: FeedbackDoc[]): boolean {
  if (!feedbacks || feedbacks.length === 0) {
    return false;
  }

  const headers = [
    'STT',
    'Created At',
    'Page Title',
    'Page URL',
    'Category',
    'Message',
    'Rating',
    'Priority',
    'Status',
    'Ảnh đính kèm',
  ];

  const rows = feedbacks.map((item, index) => [
    index + 1,
    formatCreatedAtForExport(item.createdAt),
    item.pageTitle || '',
    item.pageUrl || item.pagePath || '',
    getCategories(item).join(', '),
    item.message || '',
    item.rating != null ? item.rating : '',
    item.priority || '',
    item.status || '',
    item.attachments && item.attachments.length > 0
      ? item.attachments.map(att => att.storagePath).join('; ')
      : 'Không có',
  ]);

  const csvContent = [
    headers.map(escapeCSV).join(','),
    ...rows.map((r) => r.map(escapeCSV).join(',')),
  ].join('\r\n');

  // \uFEFF is UTF-8 BOM so Excel opens Vietnamese characters without garbled text
  const blob = new Blob(['\uFEFF' + csvContent], {
    type: 'text/csv;charset=utf-8;',
  });

  const fileName = getExportFileName('csv');
  downloadBlob(blob, fileName);

  return true;
}
