# Tính toàn vẹn hợp nhất từ hai nguồn — 09/11/2026

| Nguồn | SHA-256 ZIP |
|---|---|
| `VIETTELIDC.COM-DEMO-2.zip` | `856f055291cdb120be0b34e4b55fbb6843e9831cfac7ee1bce3d42bb0d3a1dd4` |
| `VIETTELIDC.COM-DEMO-DS-I18N-RELEASE-2026-11-09.zip` | `682987ea898669c6445c633eca08a4e5b8659ee7ea6b5817feab9b6566332396` |

**So sánh đường dẫn ở nguồn:** 632 tệp mã nguồn trong ZIP website cũ; 674 tệp trong ZIP DS/i18n. Nguồn DS/i18n bảo toàn mọi tệp dự án website cũ trừ 3 tệp rác phiên làm việc `.aistudio/artifacts/...` (temp media, plan, metadata); 526 tệp được cập nhật qua DS/i18n migration, 103 giữ bytes gốc, 45 tệp mới. Đây là kết quả đối chiếu hash thực, không phải nhận định qua tên tệp.

**Bản phát hành audit lần hai** lấy DS/i18n mới làm nền tảng, sau đó xác minh đủ 12 TTF BeauSans từ 12 file người dùng tải lên; font nhị phân đã được tích hợp trong `public/fonts/vidc` theo chỉ đạo của người sở hữu dự án, digest nằm tại `docs/BEAUSANS_FONT_MANIFEST.json`. Giữ nguyên Figma `vidc.figma.raw.json`, `vidc.figma.resolved.json` và `vidc.figma.ready.css` với kiểm tra SHA-256. Không copy `bun.lock`, artefact tạm, `.env.local`, `.next` hay `node_modules` vào bản Git-ready.

**Giới hạn bảo toàn thiết kế:** 72 màu bespoke legacy vẫn ở `vidc-legacy-palette.css` vì Figma snapshot chưa bao trùm các variant này. Việc một control được chuyển qua `VIDCNative*` không đồng nghĩa nó trở thành component pixel-perfect của Figma. 11 locale và 6 UI dictionary chưa bao gồm bản dịch được duyệt của toàn bộ content (5.478 ứng viên). Bản mới không tự tuyên bố đạt build/preview AI Studio.
