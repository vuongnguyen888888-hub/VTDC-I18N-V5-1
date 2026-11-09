# Font FS PF BeauSans Pro · bundled V3

12 file normal/italic cho các weight 200, 300, 400, 600, 700, 900 đã được nhúng vào `public/fonts/vidc/` từ 12 bản gốc người dùng cung cấp. CSS sử dụng `@font-face` với đường dẫn tuyệt đối `/fonts/vidc/`; không ưu tiên `local(...)` gây lệch font khi client có sẵn bản khác.

`npm run fonts:verify` xác minh 12 filename, SHA-256, kích thước và hợp đồng typography. `npm run check` cũng bắt buộc có binary; không cho phép PASS chỉ vì CSS khai báo tên font. Nguồn đối chiếu: `docs/BEAUSANS_FONT_MANIFEST.json`. Không cần cài font thủ công.

Font được chủ dự án cung cấp để dùng trong bản website này, không phát hành như một gói font độc lập. Tuân thủ phạm vi license của người có quyền đối với font khi triển khai và chia sẻ repository.
