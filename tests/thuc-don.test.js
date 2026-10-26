console.log("=== Kiểm tra Task 1: 6 Món Tượng Trưng Minh Họa (Không ghi giá tiền) ===");

(function() {
  var kho = typeof taoKhoDuLieu === "function" ? taoKhoDuLieu({}) : null;
  var thongTin = kho ? kho.layThongTinQuan() : null;
  kiemTra(
    "Thông tin quán mặc định hiển thị đúng thương hiệu S.E Beer Đối diện Ga Huế, SĐT 0333022068, Phường Thuận Hóa, 6 năm hoạt động và câu chuyện sinh viên Ga Huế",
    thongTin ? {
      tenQuan: thongTin.tenQuan,
      soDienThoai: thongTin.soDienThoai,
      soZalo: thongTin.soZalo,
      diaChi: thongTin.diaChi,
      soNam: thongTin.soNamHoatDong,
      gioMoCua: thongTin.gioMoCua,
      coSinhVienGaHue: thongTin.cauChuyen6Nam.indexOf("sinh viên") !== -1 && thongTin.cauChuyen6Nam.indexOf("Ga Huế") !== -1
    } : null,
    {
      tenQuan: "S.E Beer Đối diện Ga Huế",
      soDienThoai: "0333022068",
      soZalo: "0333022068",
      diaChi: "37–39 Bùi Thị Xuân (Đối diện Ga Huế), Phường Thuận Hóa, TP. Huế",
      soNam: 6,
      gioMoCua: "17h - Hết khách",
      coSinhVienGaHue: true
    }
  );

  var tatCaMon = kho ? kho.layDanhSachMon("TAT_CA", false) : [];
  kiemTra(
    "Chỉ hiển thị đúng 6 món tượng trưng minh họa (Ếch Xào Sả, Cơm Chiên Hải Sản, Hến Trộn, Sụn Gà Rang Muối, Lẩu Hải Sản, Chân Gà Nướng)",
    tatCaMon.map(function(m) { return m.tenMon; }),
    [
      "Ếch Xào Sả",
      "Cơm Chiên Hải Sản",
      "Hến Trộn",
      "Sụn Gà Rang Muối",
      "Lẩu Hải Sản",
      "Chân Gà Nướng"
    ]
  );

  kiemTra(
    "6 món tượng trưng dùng đúng 6 ảnh thực tế tải từ trên mạng trong thư mục images/",
    tatCaMon.map(function(m) { return m.hinhAnh; }),
    [
      "images/ech-xao-sa.jpg",
      "images/com-chien-hai-san.jpg",
      "images/hen-tron.jpg",
      "images/sun-ga-rang-muoi.jpg",
      "images/lau-hai-san.jpg",
      "images/chan-ga-nuong.jpg"
    ]
  );

  // Kiểm tra chọn trước món (không ghi giá tiền, chỉ đếm số lượng món dặn trước)
  var mon1 = tatCaMon[0];
  var mon2 = tatCaMon[2];
  kho.themVaoGioChonTruoc(mon1.maMon, 2);
  kho.themVaoGioChonTruoc(mon2.maMon, 1);
  var gio = kho ? kho.layGioChonTruoc() : null;

  kiemTra(
    "Chọn trước 2 phần Ếch Xào Sả và 1 phần Hến Trộn đếm đúng tổng số lượng = 3 phần",
    gio ? {
      soLoai: gio.danhSach.length,
      tongSoLuong: gio.tongSoLuong
    } : null,
    {
      soLoai: 2,
      tongSoLuong: 3
    }
  );

  // Giảm số lượng về 0 thì tự động xóa khỏi giỏ chọn trước
  if (kho) {
    kho.capNhatSoLuongChonTruoc(mon1.maMon, 0);
  }
  var gioSauKhiGiam0 = kho ? kho.layGioChonTruoc() : null;
  kiemTra(
    "Giảm số lượng món về 0 sẽ tự động gỡ món đó khỏi danh sách chọn trước",
    gioSauKhiGiam0 && gioSauKhiGiam0.danhSach[0] ? {
      soLoai: gioSauKhiGiam0.danhSach.length,
      tongSoLuong: gioSauKhiGiam0.tongSoLuong,
      conLaiMaMon: gioSauKhiGiam0.danhSach[0].maMon
    } : null,
    {
      soLoai: 1,
      tongSoLuong: 1,
      conLaiMaMon: mon2.maMon
    }
  );
})();
