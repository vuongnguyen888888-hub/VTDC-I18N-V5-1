# Báo cáo kiểm toán và chuẩn hóa — VIETTELIDC.COM-DEMO

**Thời điểm:** 09/11/2026 (Asia/Bangkok) · **Trạng thái:** Hoàn thành kiểm toán tĩnh, chỉnh mã và kiểm thử hợp đồng; **chưa xác minh build/preview thực tế**.

## 1. Phạm vi, nguồn và tính toàn vẹn

| Nguồn | ZIP entries | SHA-256 gốc |
|---|---:|---|
| VIETTELIDC.COM-DEMO-2.zip | 730 | `856f055291cdb120be0b34e4b55fbb6843e9831cfac7ee1bce3d42bb0d3a1dd4` |
| VIDC-DS-Tokens-Buttons-Handoff-2026-11-08 (1).zip | 34 | `eaa78037f4db555631bda6ca7c8d912872a328f5145c5f1eed11dfaf3b33e0a3` |

- Xác minh **33/33 checksum** có trong DS `MANIFEST.json` trước khi tích hợp; bản handoff không chứa toàn bộ component Figma native.
- Ảnh và những UI bespoke trong mã nguồn được giữ nguyên; không tiến hành tái tạo website mới.
- Figma export timestamp theo handoff: **2026-11-07T06:59:11.857Z**; không thể xác nhận live Figma có thay đổi sau thời điểm đó.
- Tổng số file Next.js `page.tsx`: **17**. Audit cú pháp **600 tệp TS/TSX** (gồm scripts) không có lỗi parser, không có import tương đối bị thiếu.

## 2. Routing, i18n và SEO

| Hạng mục | Đã kiểm tra |
|---|---|
| Source manifest | 59 canonical dịch vụ, 16 giải pháp, 6 bespoke gồm trang chủ |
| Hub + admin | 2 hubs `/services`, `/solutions`, 1 trang `/admin/feedback` |
| Base inventory | **84 đường dẫn xác định và phân biệt** trong `docs/ROUTE_INVENTORY.csv` — không bao gồm category views, legacy aliases và biến thể locale |
| Legacy redirects | **264** bản ghi; không self-redirect, không redirect chain, không target invalid theo route validator |
| Locale config | **11** mã locale (`vi-VN` + 10 prefix); được map từ SSOT `LOCALE_REGISTRY` |
| Dictionary UI | **6** ngôn ngữ có 138 khóa giống nhau (VN/EN/LA/PH/MM/KH) |
| hreflang | 3 locale công khai được phép index theo policy VN/EN-VN/EN. Các thị trường planned đang noindex |

**Lỗi được sửa:**

1. `en` quốc tế thiếu `/en` trong locale registry dù routing router đã nhận `/en`; bổ sung `/en` và `en-KH` (`/kh-en`).
2. Prefix redirect tạo ra chuỗi `//` do ghép slash sai; chuyển sang helper `buildLocalizedRedirectPath`.
3. Context ở `RootLayout` không nhận pathname trong request; middleware inject `x-vidc-pathname` cho server HTML/analytics.
4. `SiteClientWrapper` bỏ qua market domain gốc (đặc biệt `.com/`); đồng bộ market từ context và hỗ trợ chuyển domain chính thức.
5. Hai sản phẩm Kubernetes cùng canonical `/services/containers/kubernetes-service/`; bản vDKS được tách sang `/services/containers/dedicated-kubernetes-service/`. **URL này cần được chủ sản phẩm/SEO duyệt khi đưa production**.
6. SEO static locale table tồn tại song song với locale registry; nay sinh `ALL_LOCALES` trực tiếp từ registry.
7. `resolveRouteFromManifest` được chuẩn hóa trailing slash; thêm data-backed fallback cho các canonical dịch vụ không có bespoke UI.
8. Từ chối đường dẫn admin giả không nằm trong danh sách hợp lệ.

## 3. Design System

Đã tích hợp `vidc.figma.ready.css`, `raw.json`, `resolved.json` (kiểm chứng SHA-256 theo manifest), token TS, CSS handoff và `VIDCButton`, `InputField`, `TextareaField`, `OtpInput`. Sử dụng chung trong `src/components/ui`.

**Thay đổi có kiểm soát:** Không ghi đè `.vidc-container`, `.vidc-card` của website hiện có; loại bỏ `@import tailwindcss` trùng và các `@font-face` trỏ tới font **FS PF BeauSans Pro** chưa được cung cấp. Không ép chuyển từng UI bespoke sang component mới. Cần regression test Figma tại các breakpoint và các states trước khi nghiệm thu.

**Ghi nhận a11y:** Nguồn handoff ghi màu Primary `#EE0033` chữ trắng có contrast khoảng 4.48:1, dưới ngưỡng 4.5:1 của WCAG AA cho chữ thường; cần xác minh cỡ chữ hoặc phê duyệt phương án AA trước production. Đã gỡ quy tắc CSS xóa focus outline `!important` toàn bộ input; bổ sung skip link.

## 4. Frontend / Backend / Bảo mật

- Next.js 15 App Router/React 19/TypeScript/Tailwind 4 được giữ nguyên. Thư viện UI mẫu không thêm dependency ngoài.
- Firebase khởi tạo từ `.env.local` thay vì tự kết nối dữ liệu project hardcoded từ snapshot. **Chưa có bằng chứng rằng Firebase backend đang triển khai/hoạt động**.
- `AdminFeedbackPage` xuất metadata `noindex`; Firestore Storage có rules và kiểm soát allowlist email của bản nguồn. Cần chủ sở hữu xác minh danh sách admin, Rules deployment, Firebase App Check, quy trình cấp/thu hồi quyền; security rules cloud mới quyết định truy cập dữ liệu.
- `RootLayout` nhúng context vào JavaScript qua JSON escape thay vì nối pathname/host vào JS string; giảm nguy cơ script injection.
- Kiểm tra hậu tố domain có dấu chấm ranh giới; các domain chưa duyệt mặc định isolated/noindex.
- `SiteClientWrapper` không còn chặn mọi anchor click (trước đó có thể hỏng mở tab, tải file, Ctrl/Cmd-click, accessibility).
- CSP vẫn là `Content-Security-Policy-Report-Only` của nguồn, **không phải CSP enforce**; cần test telemetry và rollout CSP thực.
- Không vận chuyển `.aistudio/artifacts` và `node_modules` trong ZIP phát hành; `.gitignore` có rules tương ứng.

## 5. Kiểm tra đã chạy

| Kiểm tra | Kết quả |
|---|---|
| SHA-256 DS handoff manifest | PASS (33/33 nguồn, 3/3 canonical Figma tích hợp) |
| `node scripts/verify-architecture-lock.mjs` | PASS (13/13) |
| `node scripts/verify-handoff.mjs` | PASS |
| `node scripts/verify-routes.mjs` | PASS (11 locales, 59 unique services, 16 solutions, 264 redirects, 6 dictionaries) |
| TypeScript parser + relative import resolution | PASS (600 files; 0 syntax errors / 0 missing relative imports) |
| CSS PostCSS parse | PASS (`src/index.css`, handoff CSS, Figma export) |
| `npm run typecheck` | **BLOCKED**: missing React/Node type packages, vì npm dependencies không tải được trong môi trường này |
| `npm ci` / `next build` / browser smoke test | **NOT VERIFIED**: DNS không phân giải `registry.npmjs.org` |
| Kết nối GitHub / Google AI Studio | **NOT PERFORMED**: không có repository/ủy quyền đăng nhập từ người dùng |

## 6. Các rủi ro còn lại trước release

**P0 – Bắt buộc:** Trên máy/CI có Internet chạy `npm ci`, `npm run check`, `npm run build`, test browser tất cả luồng quan trọng; nếu phát hiện lỗi TS/runtime cần sửa trước khi merge. Xác thực Admin/Firebase Rules và cấu hình secret thật.

**P1 – Nên thực hiện:** Regression visual cho Home, 33+ bespoke UI, các hubs và fallback; kiểm tra 264 redirects HTTP thực tế, SEO canonical/hreflang hai domain và responsive 375/768/1440; xác nhận canonical mới của dedicated Kubernetes với SEO/PO. Bổ sung test E2E và CSP enforcement.

**P2 – Hoàn thiện:** Dịch toàn bộ chuỗi trực tiếp trong các bespoke pages (dù 6 dictionary UI đầy đủ, chưa tương đương 100% nội dung đã dịch), đánh giá font license/master Figma variants, dọn dẹp điều kiện Tailwind hardcoded và thiết lập phân quyền nội dung cho các thị trường planned.

## 7. Bàn giao

- Codebase phát hành: `VIETTELIDC.COM-DEMO-STANDARDIZED-2026-11-09.zip`
- Hướng dẫn khởi tạo GitHub/AI Studio: `README.md`, `AI_STUDIO_HANDOFF.md`
- Quyết định kiến trúc: `docs/architecture/ADR-2026-11-09-DS-I18N-ROUTING.md`
- Route inventory: `docs/ROUTE_INVENTORY.csv`
- CI: `.github/workflows/verify.yml`

**Kết luận:** Tập trung sửa xung đột hạ tầng và tạo SSOT để đủ điều kiện đưa vào quy trình review, CI, GitHub/AI Studio; chưa thể khẳng định triển khai production thành công cho đến khi build, visual smoke, integration và security tests được chạy thực tế.
