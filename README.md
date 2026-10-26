# 🚂 S.E Beer Đối diện Ga Huế — Trang Web Thương Hiệu & Đặt Bàn Chủ Đề "Sân Ga Đêm"

![S.E Beer Đối diện Ga Huế](images/hero-se-beer.jpg)

> **"Sáu năm một góc phố quen đối diện Ga Huế — Mồi bén, bia lạnh, anh em sum vầy tới sáng."**
>
> 📍 **Địa chỉ**: 37–39 Bùi Thị Xuân (Đối diện Ga Huế), Phường Thuận Hóa, TP. Huế  
> 🌙 **Giờ mở cửa**: 17h – Hết khách  
> 📞 **Hotline / Zalo giữ bàn**: `0333022068`

---

## ✨ Điểm Nổi Bật Của Dự Án (Chủ Đề "Sân Ga Đêm")

1. **🚦 Thanh Tín Hiệu Sân Ga Thời Gian Thực**:
   - Đèn báo trạng thái quán đang mở cửa (`17h – Hết khách`) hoặc đang nghỉ theo giờ thực tế.
   - Tự động cập nhật thời tiết thật tại TP. Huế (Open-Meteo API) để gợi ý món nhậu phù hợp (mưa Huế ăn Lẩu Hải Sản, trời mát ngồi ngắm tàu đêm cụng Bia Huda lạnh).
   - Đồng hồ đếm ngược từng giây tới **Khung Giờ Vàng 17h – 20h** (Đặt bàn trước tặng *Sụn gà rang muối, Nem chả tré* hoặc *Hến trộn*).
2. **🚂 Bảng Giờ Tàu Điện Tử Lật Chữ (Split-Flap Departure Board)**:
   - Hiển thị 6 món nhậu tượng trưng của quán dưới dạng 6 chuyến tàu đêm `SE1` → `SE6` (*Ếch Xào Sả, Cơm Chiên Hải Sản, Hến Trộn, Sụn Gà Rang Muối, Lẩu Hải Sản, Chân Gà Nướng*).
3. **📖 Thực Đơn 2 Trang Chính Thức (Định dạng WebP siêu nhẹ)**:
   - Tích hợp 2 trang thực đơn chính thức của quán với chế độ bấm phóng to toàn màn hình sắc nét trên điện thoại & máy tính.
4. **🎫 Phiếu Đặt Bàn Dạng "Vé Tàu Đêm S.E Beer"**:
   - Đặt bàn xong xuất ngay tấm **Vé Tàu Hoả cổ điển** (`Ga đi: Nhà Anh Em ━━🚂━━▶ Ga đến: S.E Beer`), hỗ trợ tải ảnh vé PNG về máy, gửi qua Zalo hoặc gửi tin nhắn SMS nhanh.
5. **🔊 Hiệu Ứng Âm Thanh Còi Tàu Đêm Ga Huế & Mưa Đêm Huế**:
   - Tích hợp bộ tạo âm thanh còi tàu đêm (Web Audio API) và hiệu ứng hạt mưa Huế lãng mạn (chỉ bật khi khách chủ động bấm nút).
6. **🎨 Thiết Kế Chuẩn UI/UX Pro Max**:
   - Bộ 4 phông chữ Tiếng Việt cao cấp (`Barlow Condensed`, `Be Vietnam Pro`, `Playfair Display`, `JetBrains Mono`) đồng bộ với thực đơn của quán.

---

## 🧪 Kiểm Thử Tự Động (Automated Tests)

Dự án đi kèm bộ 23 bài kiểm tra tự động trong thư mục `tests/`:

```bash
bash tests/chay.sh
```
