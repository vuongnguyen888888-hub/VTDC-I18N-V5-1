> **LƯU TRỮ AUDIT V2 — KHÔNG PHẢI TRẠNG THÁI V3.** Xem `docs/AUDIT_V3_2026-11-09.md` cho kết quả mới nhất.

# FINAL AUDIT — VIETTELIDC.COM Git/AI Studio DS + i18n — pass 2

**Ngày:** 09/11/2026 · **Căn cứ:** 2 ZIP nguồn, 12 TTF người dùng gửi và Figma snapshot đi cùng release. **Phương pháp:** hash diff + kiểm toán source, 9 gate Node, TypeScript AST, fontTools và Chromium computed styles độc lập. Báo cáo ban đầu lưu tại `docs/ARCHIVE_INITIAL_AUDIT_2026-11-09.md` (không áp dụng cho lần bàn giao này).

## 1. Tiêu chí gốc và cách nghiệm thu

| Hạng mục | Điều kiện | Kết quả |
|---|---|---|
| Gộp 2 ZIP | Một repository root Next.js, không lạc nguồn cũ | PASS theo hash diff; chỉ bỏ artefact tạm |
| Thay DS cũ bằng DS mới | Figma CSS/JSON ưu tiên và semantically bridged; không để DS cũ tự đè ngược | PASS cho tokens và DS primitives; UI bespoke là ngoại lệ được lưu rõ |
| Bảo toàn ngoại lệ | Không xóa UI nếu chưa có Figma variant thay thế | PASS giữ mã nguồn; 72 alias màu legacy còn nguyên trạng |
| BeauSans thực tế | Đủ 12 face weight/style và file trong source; không yêu cầu cài font thủ công | **CHƯA ĐẠT ở ZIP**: kiểm toán gốc 12/12 SHA + OpenType metadata/glyph tiếng Việt; file font không phân phối kèm |
| Button ba góc | 5 size, góc dưới trái 2px, đúng Figma colors/states | PASS static + Chromium computed styles |
| i18n Next.js | Locale, prefix, link-safe behavior, redirect, SEO/noindex | PASS cấu trúc 11 locale, 6 UI dictionary; **content translation chưa đạt 100%** |
| Giữ kiến trúc | Next.js 15 App Router/React 19/13 locked files | PASS 13/13 lock, 59 services, 16 solutions, 264 redirect |
| Git/npm/AI Studio source | Root sạch, scripts tôn trọng `PORT`, có mapping font, nhưng thiếu binary do không phân phối | PARTIAL ở cấp source; typography chưa đủ vì không có binary, **chưa thử AI Studio import** |
| Chạy build full | `npm ci`, `tsc`, `next build`, website E2E | **UNVERIFIED**: môi trường không thể kết nối npm registry |

## 2. Lỗi sửa trong pass 2

1. **P0 / missing assets:** gói cũ có 12 khai báo `@font-face` nhưng không chứa TTF. Đã kiểm toán đủ 12 TTF gốc, kiểm tra SHA/metadata và điều chỉnh mapping; **TTF thương mại không được phân phối lại trong ZIP mã nguồn**, vì vậy tiêu chí font tích hợp vẫn BLOCKED. CI chạy `npm run fonts:verify` riêng để phát hiện thiếu asset.
2. **P1 / typography:** tránh CSS `local(...)` chọn nhầm bản font cài trên thiết bị; ưu tiên tệp từ dự án khi có assets, và `font-synthesis: none` cho heading.
3. **P1 / responsive:** bỏ quy tắc `animation-duration: 0.01ms !important` áp cho toàn bộ mobile; chuyển sang `prefers-reduced-motion: reduce` để đúng chủ ý hỗ trợ accessibility.
4. **P1 / DS completeness:** thêm CSS `destructive` cho `VIDCButton` theo token destructive thực tế của Figma snapshot; bổ sung disabled state warning/destructive.
5. **P1 / runtime hosting:** bỏ port 3000 gắn cứng trong dev/start để hỗ trợ `PORT` do AI Studio/Cloud Run cấp; `.nvmrc=22`.
6. **P1 / prevention:** script `verify-ds-runtime-contract.cjs` kiểm tra 5 size/7 variant, colors, ưu tiên CSS, CSS reduced-motion, trạng thái hover/focus/pressed/disabled/loading.
7. **P1 / handoff:** cập nhật tài liệu để phân biệt rõ font có trong môi trường kiểm toán và ZIP không phân phối font; lưu báo cáo cũ thành archive.

## 3. Kết quả kiểm thử có thể lặp lại

- `node scripts/verify-architecture-lock.mjs` — PASS 13/13.
- `node scripts/verify-handoff.mjs` — PASS 3/3 Figma.
- `node scripts/verify-routes.mjs` — PASS (11 locale, 59 services, 16 solutions, 264 redirects, 6 dictionaries).
- `node scripts/verify-i18n-contract.cjs` — PASS.
- `NODE_PATH=<global-typescript-path> node scripts/verify-ds-coverage.cjs` — PASS (602 files, no parser or relative import errors, no uncovered JSX native buttons/inputs/selects/anchors).
- `node scripts/verify-font-contract.cjs --assets` — PASS 12/12 SHA trong **môi trường audit có font gốc**, nhưng **FAIL** trong ZIP nguồn không chứa binary.
- `node scripts/verify-ds-runtime-contract.cjs` — PASS.
- `node scripts/verify-release-structure.cjs` — PASS source structure (không chứng nhận binary font).
- **Chromium 144 DS smoke** — PASS ở viewport 375px, 768px, 1440px; `document.fonts.check()` và computed style: H1 BeauSans 600; 5 size border-radius đúng 8/8/8/2 → 14/14/14/2; primary `rgb(238, 0, 51)`, destructive theo Figma `rgb(254, 223, 137)`; sample không tràn ngang. Evidence: `docs/DS_BROWSER_SMOKE.json` và `docs/DS_BROWSER_SMOKE_*.png`. **Đây là trang kiểm thử DS độc lập, không phải Next.js app đang chạy.**

## 4. Giới hạn chưa thể xác nhận

- Không thể `npm ci` thực tế vì DNS `registry.npmjs.org` không phân giải; do đó không chứng nhận `npm run typecheck`, Next.js `build` hoặc server/browser E2E của toàn website. Lockfile/npm package sources chưa được tải thực tế.
- Không thể đăng nhập/sync repo của chủ dự án và không test AI Studio Build. Google AI Studio có GitHub import và runtime Node/npm nhưng **không có dữ liệu xác nhận** Next.js preview của repository này thành công.
- 11 locale config và 6 dictionary interface không thay thế bản dịch nội dung bespoke; `docs/I18N_COPY_CATALOG.json` ghi 5.478 câu/đoạn ứng viên cần QA. Các thị trường planned giữ `noindex`.
- DS mới không gồm Figma native variants đầy đủ cho toàn bộ bespoke service pages; còn 72 legacy color aliases, giữ lại có chủ đích tránh regression. Không kết luận pixel-perfect toàn website.
- Chưa kiểm chứng backend Firebase, auth/admin, App Check, rules deployment, domain/SEO thực, accessibility E2E, visual diff toàn trang và CSP enforcement.
- Các font người dùng cung cấp chỉ được kiểm toán nội bộ; ZIP mã nguồn không phân phối lại các TTF. Mapping và SHA được giữ để phát hiện font đúng/thiếu.

## 5. Kết luận

**Bản audit pass 2 đã hợp nhất nguồn để đưa lên Git root; tiêu chí font đầy đủ vẫn là BLOCKER do bản ZIP không chứa TTF.** Các lỗi DS tìm thấy đã được sửa. Đây là kết quả kiểm toán tĩnh + browser DS; không đánh tráo nó với chứng nhận build hoàn hảo trong Google AI Studio hoặc triển khai production.
