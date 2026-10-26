console.log("=== Kiểm tra Task 2: Đặt bàn, Tin nhắn Telegram/Zalo (Không ghi giá tiền) & Trang Quản Lý Admin ===");

(function() {
  var kho = taoKhoDuLieu({});

  // 1. Kiểm tra từ chối khi thông tin khách đặt bàn thiếu Tên hoặc Số điện thoại sai
  var kqLoi = kho.taoDonDatBan ? kho.taoDonDatBan({
    tenKhach: "",
    soDienThoai: "123",
    ngayDen: "2026-10-21",
    gioDen: "21:30",
    soNguoi: 6
  }, true) : { thanhCong: true };

  kiemTra(
    "Từ chối đặt bàn khi tên trống hoặc số điện thoại không hợp lệ",
    kqLoi.thanhCong,
    false
  );

  // 2. Chọn trước mồi rồi Đặt bàn hợp lệ
  var dsMon = kho.layDanhSachMon("TAT_CA", false);
  kho.themVaoGioChonTruoc(dsMon[0].maMon, 2); // 2 phần Ếch Xào Sả
  kho.themVaoGioChonTruoc(dsMon[2].maMon, 1); // 1 phần Hến Trộn

  var kqDat = kho.taoDonDatBan ? kho.taoDonDatBan({
    tenKhach: "Anh Tuấn",
    soDienThoai: "0912345678",
    ngayDen: "2026-10-21",
    gioDen: "22:00",
    soNguoi: 6,
    ghiChu: "Cho anh bàn thoáng mát đối diện Ga Huế nhé"
  }, true) : null;

  kiemTra(
    "Đặt bàn hợp lệ lưu đúng thông tin khách, món chọn trước và làm trống giỏ sau khi đặt",
    kqDat && kqDat.thanhCong ? {
      tenKhach: kqDat.donDatBan.tenKhach,
      soNguoi: kqDat.donDatBan.soNguoi,
      soLoaiMonTruoc: kqDat.donDatBan.monChonTruoc.length,
      tongSoLuongMon: kqDat.donDatBan.tongSoLuongMon,
      trangThai: kqDat.donDatBan.trangThai,
      gioConLaiSauKhiDat: kho.layGioChonTruoc().tongSoLuong
    } : null,
    {
      tenKhach: "Anh Tuấn",
      soNguoi: 6,
      soLoaiMonTruoc: 2,
      tongSoLuongMon: 3,
      trangThai: "CHO_XAC_NHAN",
      gioConLaiSauKhiDat: 0
    }
  );

  // 3. Kiểm tra nội dung tin nhắn báo đơn về Telegram/Zalo không chứa giá tiền
  var tinNhan = kqDat && kqDat.donDatBan ? kqDat.donDatBan.noiDungTinNhan : "";
  kiemTra(
    "Tin nhắn báo đơn mới chứa đầy đủ Tên khách, SĐT, Giờ đến, Tên món chọn trước và không ghi giá tiền",
    Boolean(
      tinNhan &&
      tinNhan.indexOf("Anh Tuấn") !== -1 &&
      tinNhan.indexOf("0912345678") !== -1 &&
      tinNhan.indexOf("22:00") !== -1 &&
      tinNhan.indexOf(dsMon[0].tenMon) !== -1 &&
      tinNhan.indexOf("000đ") === -1
    ),
    true
  );

  // 4. Kiểm tra bảo mật mã PIN Chủ quán
  var kqSaiPin = kho.batTatHetHang ? kho.batTatHetHang(dsMon[1].maMon, "0000") : { thanhCong: true };
  kiemTra(
    "Chặn thao tác quản lý khi nhập sai mã PIN",
    kqSaiPin.thanhCong,
    false
  );

  // 5. Chủ quán gạt nút Tạm hết hàng bằng mã PIN đúng (1234) và khách không thể chọn món đó nữa
  var kqHetHang = kho.batTatHetHang ? kho.batTatHetHang(dsMon[1].maMon, "1234") : null;
  var kqKhachChonMonHet = kho.themVaoGioChonTruoc(dsMon[1].maMon, 1);
  kiemTra(
    "Chủ quán báo Tạm hết hàng thành công và chặn khách chọn trước món đã hết",
    {
      adminThanhCong: kqHetHang ? kqHetHang.thanhCong : false,
      trangThaiHetHang: kqHetHang && kqHetHang.mon ? kqHetHang.mon.hetHang : false,
      khachChonDuoc: kqKhachChonMonHet.thanhCong
    },
    {
      adminThanhCong: true,
      trangThaiHetHang: true,
      khachChonDuoc: false
    }
  );

  // 6. Chủ quán duyệt đơn đặt bàn của khách
  var maDon = kqDat && kqDat.donDatBan ? kqDat.donDatBan.maDon : "";
  var kqDuyetDon = kho.capNhatTrangThaiDon ? kho.capNhatTrangThaiDon(maDon, "DA_XAC_NHAN", "Đã giữ bàn ngoài trời", "1234") : null;
  kiemTra(
    "Chủ quán xác nhận giữ bàn cho khách thành công",
    kqDuyetDon && kqDuyetDon.donDatBan ? {
      trangThai: kqDuyetDon.donDatBan.trangThai,
      ghiChuQuanLy: kqDuyetDon.donDatBan.ghiChuQuanLy
    } : null,
    {
      trangThai: "DA_XAC_NHAN",
      ghiChuQuanLy: "Đã giữ bàn ngoài trời"
    }
  );

  // 7. Chủ quán cập nhật thông tin quán
  var kqCapNhatQuan = kho.capNhatThongTinQuan ? kho.capNhatThongTinQuan({
    tenQuan: "S.E Beer Đối diện Ga Huế",
    soDienThoai: "0988777666"
  }, "1234") : null;

  kiemTra(
    "Chủ quán đổi thông tin quán và số điện thoại Hotline ngay trong trang Quản lý",
    kqCapNhatQuan && kqCapNhatQuan.thongTinQuan ? {
      tenQuan: kqCapNhatQuan.thongTinQuan.tenQuan,
      soDienThoai: kqCapNhatQuan.thongTinQuan.soDienThoai
    } : null,
    {
      tenQuan: "S.E Beer Đối diện Ga Huế",
      soDienThoai: "0988777666"
    }
  );
})();
