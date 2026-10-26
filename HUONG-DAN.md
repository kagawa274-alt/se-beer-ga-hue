# 🏮 Sổ Tay Hướng Dẫn Sử Dụng: Trang Web Quán Nhậu Khuya 6 Năm Tuổi (`quan-nhau-khuya`)

Chúc mừng bạn! Trang web thương hiệu và đặt bàn trực tuyến dành riêng cho quán nhậu khuya 6 năm tuổi của bạn đã hoàn thiện. Dưới đây là hướng dẫn cầm tay chỉ việc bằng ngôn ngữ đời thường để bạn tự làm chủ hoàn toàn trang web của mình.

---

## 1. Cách mở xem và dùng thử Trang Web ngay trên máy
Bạn chỉ cần bấm đúp chuột vào tệp **[index.html](file:///Users/anhtuan274gmail.com/Documents/vibe%20code/du%CC%9B%CC%A3%20a%CC%81n%20ca%CC%81%20nha%CC%82n/quan-nhau-khuya/index.html)** trong thư mục `quan-nhau-khuya` để mở trang web bằng trình duyệt (Chrome, Safari, Cốc Cốc...).

### Trải nghiệm của Khách hàng trên trang web:
1. **Ngắm thương hiệu 6 năm & không gian quán**: Giao diện nền tối ấm cúng kết hợp ánh vàng cam hổ phách (lấy cảm hứng cấu trúc sang trọng của Dim Tu Tac nhưng đúng chất nhậu đêm).
2. **Xem Thực đơn chia theo 5 nhóm & Chọn mồi trước**:
   - Khách bấm lọc từng nhóm: *Món Tủ 6 Năm, Hải Sản Tươi Sống, Nướng Than Hoa, Lẩu Khuya Nóng Hổi, Bia & Đồ Uống*.
   - Thấy món nào hấp dẫn, khách bấm **"+ Chọn trước vào bàn"**. Một thanh giỏ mồi nổi sẽ hiện lên ở dưới màn hình và tự động gộp các món đó vào phiếu Đặt bàn.
3. **Đặt bàn giữ chỗ trong 30 giây**:
   - Khách điền Tên, Số điện thoại, Ngày & Giờ đến, Số người.
   - Bấm **"Xác Nhận Đặt Bàn Ngay"**: Hệ thống lập tức lưu đơn, phát chuông báo trên máy quản lý, tự động bắn tin nhắn về Telegram (nếu có cài đặt) và mở hộp thoại cho khách bấm gửi thẳng phiếu đặt bàn qua **Zalo** của quán!

---

## 2. Cách vào Trang Quản Lý Chủ Quán (Admin Panel) để tự sửa Tên quán, Giá tiền, Món ăn
Bạn không cần biết lập trình để sửa nội dung trên web! Mọi thứ đều chỉnh được bằng nút bấm:

1. Ở góc trên cùng bên phải của trang web, bấm vào nút **🔐 Quản Lý**.
2. Nhập **Mã PIN mặc định** là: **`1234`** rồi bấm **Mở Quản Lý**.
3. Tại đây bạn có 4 ngăn (Tab) quản lý cực kỳ dễ dùng:
   - **📋 Đơn Đặt Bàn**: Xem danh sách khách đặt bàn kèm các món khách dặn trước, bấm **✅ Xác Nhận Giữ Bàn** hoặc bấm vào số điện thoại của khách để gọi điện liền.
   - **🍖 Quản Lý Thực Đơn & Giá**:
     - Muốn đổi giá món nào: Bấm nút **✏️ Sửa Giá** cạnh món đó rồi gõ giá mới.
     - Hôm nào quán hết món gì: Bấm nút **🔴 Báo Tạm Hết** — lập tức trên thực đơn của khách sẽ hiện chữ *"Tạm hết hôm nay"* và khóa nút chọn món đó lại. Khi có hàng lại chỉ cần bấm **🟢 Mở Bán Lại**.
     - Muốn thêm món nhậu mới: Điền tên món, chọn nhóm, nhập giá tiền ở khung phía trên rồi bấm **+ Lưu Món Mới Vào Menu**.
   - **🎁 Chương Trình Ưu Đãi**: Tự đăng hoặc xóa các chương trình khuyến mãi đêm (ví dụ: *Đặt bàn trước tặng mồi, Mua 2 tặng 1 sau 23h...*).
   - **⚙️ Thông Tin Quán & Telegram/Zalo**:
     - Tự đổi **Tên quán thật của bạn**, **Số điện thoại Hotline**, **Số Zalo**, **Địa chỉ**, **Giờ mở cửa**, **Câu chuyện 6 năm** và **Đổi mã PIN Quản lý** mới.

---

## 3. Cách bật thông báo tự động nổ tin nhắn về điện thoại qua Telegram (Tùy chọn)
Nếu bạn muốn hễ khách bấm Đặt bàn trên web là điện thoại của bạn hoặc quản lý quán tự động tinh tinh tin nhắn báo đơn mới:
1. Mở ứng dụng Telegram, tìm `@BotFather`, gõ `/newbot` để lấy mã **Telegram Bot Token**.
2. Tạo nhóm nhận đơn của quán, thêm Bot vào nhóm và lấy mã **Telegram Chat ID**.
3. Dán 2 mã này vào mục **⚙️ Thông Tin Quán & Telegram/Zalo** trong Trang Quản Lý rồi bấm **Lưu Toàn Bộ Cài Đặt Quán**.

*(Ngoài ra, ngay cả khi chưa cài Telegram, mỗi khi khách đặt bàn xong web đều tạo sẵn phiếu tóm tắt để khách bấm gửi thẳng qua **Zalo** của bạn chỉ với 1 chạm!)*

---

## 4. Cách chạy bài kiểm tra tự động (Automated Test)
Mỗi khi muốn kiểm tra xem toàn bộ chức năng của trang web có hoạt động trơn tru 100% không, bạn có thể chạy lệnh kiểm tra tự động:
```bash
bash quan-nhau-khuya/tests/chay.sh
```
Khi màn hình hiện `Tổng kết: 19 đạt, 0 lỗi` nghĩa là mọi tính năng đều hoàn hảo!
