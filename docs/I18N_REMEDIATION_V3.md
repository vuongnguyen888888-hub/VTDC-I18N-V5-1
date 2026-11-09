# I18N audit & remediation V3 — 09/11/2026

## Đã sửa được

1. Locale registry và route prefix gồm 11 biến thể, redirect/query/hash, SSR `html[lang]`, canonical/hreflang/noindex của planned markets vẫn được kiểm tra.
2. `src/utils/translations.ts` chứa UI dictionary cho 6 ngôn ngữ, được kiểm định hình dạng đủ trường bởi script kiểm tra route.
3. `src/utils/quoteLocale.ts`: bổ sung **33 trường VI/EN**, category/service/region choices và validation; `EnterpriseQuoteModal.tsx` thực sự gọi helper theo current locale. Với locale chưa có bộ dịch riêng của modal, fallback là tiếng Anh và có `lang="en"` để screen reader đọc chính xác.
4. `ServiceNotFound.tsx` dùng locale cho nội dung và link được prefix phù hợp. Footer, UtilityBar, MobileNavigationDrawer dùng accessible label có ngôn ngữ phù hợp.
5. Một số component dịch vụ bespoke và StandardServiceDetailPage không ghi đè `document.title` tiếng Anh từ Next metadata bằng text tiếng Việt ở client.
6. `npm run check:i18n` nay bao gồm gate về parity khóa VI/EN ở conversion modal; `npm run audit:i18n` loại dictionary có dịch sẵn để đỡ đếm nhầm.

## Chưa được coi là hoàn thành

- `docs/I18N_COPY_SUMMARY.json` là **danh mục candidates**, không phải ước tính chính xác số nội dung chưa dịch. Sau loại các dictionary có bản địa hóa, còn **4.978 chuỗi ứng viên** trải trên **345 tệp**, gồm source data, bespoke components, labels và một số string không hiển thị thực tế. Cần QA ngữ cảnh, ngôn ngữ, số liệu và legal copy trước khi xác nhận 100%.
- Standard service detail config trong `src/data/standardServicesData*.ts` chủ yếu viết bằng tiếng Việt. Chỉ mới có phần tiếng Anh cho tên và thẻ dịch vụ ở `src/data/serviceEnglishTranslations.ts`; **phần hero/pricing/FAQ/body chưa hoàn toàn song ngữ**. Không thể hợp lý khẳng định 11 locale đều hoàn thiện content.
- Các locale đang planned được giữ noindex như phiên bản gốc; fallback có kiểm soát không đồng nghĩa nội dung native đã duyệt.

## Acceptance gate bổ sung

`npm run check:i18n`: kiểm cấu hình 11 locale, 6 UI dictionaries, quote modal/SEO navigation. `npm run audit:i18n`: tạo `I18N_COPY_INVENTORY.csv`, `I18N_COPY_CATALOG.json`, `I18N_COPY_SUMMARY.json` phục vụ quyết định dịch và QA. **Chưa có lệnh nào chứng nhận 100% dịch**, nên status nội dung vẫn `PARTIAL`.
