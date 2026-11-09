# VIDC — Buttons | Bàn giao ngày 08/11/2026

## Nguồn tham chiếu
- Master Design: https://www.figma.com/design/pHobosL59UrMRnh20n4ETY/Untitled-UI-IDC-V2?node-id=1-1183
- Buttons canvas/page thực tế: `1:1183`; frame `3287:427074` (đã đọc metadata trực tiếp).
- Checkpoint gốc: `source/design-system/checkpoints/VIDC-DS-BUTTONS-SYNC-2026-11-07.md`.
- CSS triển khai: `implementation/app/globals.css`, nhóm `.vidc-btn` và các modifier.
- Token canonical: `source/design-system/figma/vidc.figma.raw.json`, `.resolved.json`, `.ready.css`.

## Bộ chuẩn hóa ở checkpoint 07/11
- Các size được khai báo trong code: sm, md, lg, xl, 2xl.
- Các nhóm style trong CSS: Primary, Secondary, Tertiary/Ghost, Link, Warning, Destructive (xem file CSS để kiểm tra từng modifier).
- Trạng thái: Default, Hover, Focused, Pressed, Disabled, Loading.
- Bất đối xứng Radius: `SM 8/8/8/2`, `MD 10/10/10/2`, `LG 14/14/14/2`, `XL 10/10/10/2`, `2XL 14/14/14/2` (TopLeft/TopRight/BottomRight/BottomLeft).
- Màu Primary: Default `#EE0033`, Hover `#D6002E`, Pressed `#BE0029` theo hồ sơ bàn giao.
- Bản checkpoint công bố 326 tổ hợp hợp lệ; đó là **khẳng định của tài liệu nguồn**, không phải kết quả kiểm thử độc lập của ZIP này.

## Accessibility
- `#EE0033` + chữ trắng ~4.48:1: dưới 4.5:1 (WCAG AA cho chữ thường).
- Có đề cập alternative `#E80032` trong checkpoint. Không tự ý thay master brand mà không có phê duyệt.
- Điều kiện bàn giao production: kiểm tra keyboard focus, disabled/loading, contrast, hit target theo bối cảnh triển khai.

## Giới hạn của gói
Đây là gói bàn giao **source-based** được trích xuất từ bản ZIP mã nguồn do người dùng cung cấp, kết hợp với định danh canvas Figma đã kiểm chứng. Gói này gồm toàn bộ các token, CSS, bộ mã UI và hồ sơ kiểm toán có sẵn trong nguồn. Nó **không phải** bản `.fig` native hoặc bản xuất đầy đủ từng node/variant của Figma; các component native vẫn nằm trong Figma master và phải sử dụng link ở trên để truy cập/tiếp tục export.
