/**
 * Bộ máy xử lý nghiệp vụ Trang Web Quán Nhậu Khuya 6 Năm Tuổi (logic.js)
 * Tương thích cả trình duyệt (Browser) và công cụ kiểm thử tự động macOS (osascript JSC)
 */

var NHOM_THUC_DON = [
  {
    maNhom: "MON_TIEU_BIEU",
    tenNhom: "Món Nhậu Tượng Trưng Của Quán",
    moTaNhom: "Những món mồi bén đặc trưng gắn liền với bao thế hệ anh em và sinh viên đối diện Ga Huế.",
    bieuTuong: "🔥"
  }
];

var THONG_TIN_QUAN_MAC_DINH = {
  tenQuan: "S.E Beer Đối diện Ga Huế",
  phuDeThuongHieu: "S.E BEER • ĐỐI DIỆN GA HUẾ • 6 NĂM NHẬU KHUYA (2020 – 2026)",
  khauHieu: "Sáu năm một góc phố quen đối diện Ga Huế — Mồi bén, bia lạnh, anh em sum vầy tới sáng",
  soNamHoatDong: 6,
  namThanhLap: 2020,
  gioMoCua: "17h - Hết khách",
  soDienThoai: "0333022068",
  soZalo: "0333022068",
  diaChi: "37–39 Bùi Thị Xuân (Đối diện Ga Huế), Phường Thuận Hóa, TP. Huế",
  linkBanDo: "https://www.google.com/maps/search/?api=1&query=S.E+Beer+37+Bui+Thi+Xuan+Hue",
  cauChuyen6Nam: "Có những đêm Huế mưa lạnh hay những tối mùa hè gió thổi lồng lộng trước sân Ga Huế, khi tiếng còi tàu đêm vừa ngân dài cũng là lúc ánh đèn vàng ở S.E Beer sáng rực nhất. Suốt 6 năm qua (từ 2020), góc quán nhỏ đối diện nhà ga này đã chứng kiến biết bao khoảnh khắc thanh xuân của những hội bạn sinh viên xứ Huế: từ những đêm ăn mừng qua môn, những buổi chia tay bạn bè ra ga về quê hay lên tàu vào Nam lập nghiệp, cho đến những cuộc tâm sự trắng đêm bên nồi lẩu nghi ngút khói dù trong túi chỉ còn vài đồng lẻ cuối tháng. Tàu có thể đến rồi đi, các lứa sinh viên có thể tốt nghiệp rời xa Huế, nhưng bếp than S.E Beer vẫn luôn đỏ lửa từ 17h tới khi hết khách — giữ nguyên vị mồi bén, cốc bia mát lạnh và cái tình anh em nồng ấm đợi ngày hội ngộ.",
  maPinQuanLy: "1234",
  firebaseUrl: ""
};

var DANH_SACH_MON_MAC_DINH = [
  {
    maMon: "MON_01",
    tenMon: "Ếch Xào Sả",
    maNhom: "MON_TIEU_BIEU",
    gia: 0,
    donVi: "Món đặc trưng",
    moTa: "Thịt ếch đồng săn chắc xào sả ớt nghệ tươi thơm lừng, cay nồng đậm vị Huế.",
    hinhAnh: "images/ech-xao-sa.jpg",
    banChay: true,
    monMoi: false,
    hetHang: false
  },
  {
    maMon: "MON_02",
    tenMon: "Cơm Chiên Hải Sản",
    maNhom: "MON_TIEU_BIEU",
    gia: 0,
    donVi: "Món đặc trưng",
    moTa: "Hạt cơm chiên tơi vàng giòn quyện cùng tôm, mực tươi ngon, chắc bụng cho cuộc vui đêm khuya.",
    hinhAnh: "images/com-chien-hai-san.jpg",
    banChay: true,
    monMoi: false,
    hetHang: false
  },
  {
    maMon: "MON_03",
    tenMon: "Hến Trộn",
    maNhom: "MON_TIEU_BIEU",
    gia: 0,
    donVi: "Món đặc trưng",
    moTa: "Hến xào đậm đà trộn rau răm, đậu phụng, hành phi thơm nức xúc cùng bánh tráng mè giòn rụm.",
    hinhAnh: "images/hen-tron.jpg",
    banChay: true,
    monMoi: false,
    hetHang: false
  },
  {
    maMon: "MON_04",
    tenMon: "Sụn Gà Rang Muối",
    maNhom: "MON_TIEU_BIEU",
    gia: 0,
    donVi: "Món đặc trưng",
    moTa: "Sụn gà giòn sần sật xóc muối tỏi ớt và sả chiên vàng thơm — món mồi bén bia số 1 tại quán.",
    hinhAnh: "images/sun-ga-rang-muoi.jpg",
    banChay: true,
    monMoi: false,
    hetHang: false
  },
  {
    maMon: "MON_05",
    tenMon: "Lẩu Hải Sản",
    maNhom: "MON_TIEU_BIEU",
    gia: 0,
    donVi: "Món đặc trưng",
    moTa: "Nồi lẩu hải sản chua cay nóng hổi đầy ắp tôm, mực, nghêu tươi và rau nấm ấm lòng đêm Huế.",
    hinhAnh: "images/lau-hai-san.jpg",
    banChay: true,
    monMoi: false,
    hetHang: false
  },
  {
    maMon: "MON_06",
    tenMon: "Chân Gà Nướng",
    maNhom: "MON_TIEU_BIEU",
    gia: 0,
    donVi: "Món đặc trưng",
    moTa: "Chân gà tẩm ướp muối ớt nướng lửa than hồng xém cạnh thơm phức, chấm muối ớt xanh.",
    hinhAnh: "images/chan-ga-nuong.jpg",
    banChay: true,
    monMoi: false,
    hetHang: false
  }
];

var DANH_SACH_UU_DAI_MAC_DINH = [
  {
    maUuDai: "UD_01",
    tieuDe: "Đặt Bàn Trước Khung Giờ 17h – 20h: Tặng Sụn Gà Rang Muối, Nem Chả Tré, Hến Trộn",
    moTa: "Khách đặt bàn trước trong khung giờ vàng từ 17h đến 20h mỗi tối được quán tặng ngay mồi bén khai vị: Sụn gà rang muối, Nem chả tré chuẩn vị Huế hoặc Hến trộn xúc bánh tráng!",
    nhanUuDai: "KHUNG GIỜ VÀNG 17H - 20H",
    dangChay: true
  },
  {
    maUuDai: "UD_02",
    tieuDe: "Tiệc Sinh Nhật & Họp Lớp Sinh Viên — Giảm 10% Tổng Hóa Đơn Mồi",
    moTa: "Hỗ trợ xếp bàn dài ấm cúng đối diện Ga Huế và tặng kèm pháo sáng chúc mừng sinh nhật miễn phí.",
    nhanUuDai: "SINH NHẬT & HỘI NHÓM",
    dangChay: true
  }
];

var DANH_SACH_ANH_KHONG_GIAN_MAC_DINH = [
  {
    maAnh: "KG_01",
    tieuDe: "Cụng ly bia lạnh — Đêm vui hết mình",
    moTa: "Ánh đèn vàng ấm áp, anh em bạn bè cụng ly rôm rả quên hết mệt mỏi sau giờ làm.",
    hinhAnh: "images/anime-nhau-1.png"
  },
  {
    maAnh: "KG_02",
    tieuDe: "Bếp than hồng đỏ lửa suốt 6 năm",
    moTa: "Từng xiên thịt nướng, hải sản thơm lừng xèo xèo trên bếp than rực lửa mỗi đêm.",
    hinhAnh: "images/anime-nhau-2.png"
  },
  {
    maAnh: "KG_03",
    tieuDe: "Nồi lẩu khuya nghi ngút khói ấm bụng",
    moTa: "Ngồi quây quần bên nồi lẩu nóng hổi, vừa thổi vừa nhâm nhi tâm sự tới sáng.",
    hinhAnh: "images/anime-nhau-3.png"
  },
  {
    maAnh: "KG_04",
    tieuDe: "Bàn tiệc mồi bén đầy ắp sắc màu",
    moTa: "Đủ món lai rai giòn rụm, đậm đà chuẩn vị 6 năm khiến ai nhìn cũng thèm.",
    hinhAnh: "images/anime-nhau-4.png"
  }
];

function dinhDangTien(soTien) {
  var n = Math.round(Number(soTien) || 0);
  var dau = n < 0 ? "-" : "";
  var chuoi = String(Math.abs(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return dau + chuoi + "đ";
}

function saoChepSau(doiTuong) {
  return JSON.parse(JSON.stringify(doiTuong));
}

function kiemTraHopLeDatBan(thongTin) {
  if (!thongTin || typeof thongTin !== "object") {
    return { hopLe: false, thongBao: "Vui lòng điền thông tin đặt bàn." };
  }
  var tenKhach = String(thongTin.tenKhach || "").trim();
  if (tenKhach.length < 2) {
    return { hopLe: false, thongBao: "Vui lòng nhập tên của bạn (ít nhất 2 ký tự) để quán tiện xưng hô và giữ bàn." };
  }
  var sdtSach = String(thongTin.soDienThoai || "").replace(/[\s\.\-\(\)]/g, "").replace(/^\+84/, "0");
  if (!/^0\d{8,10}$/.test(sdtSach)) {
    return { hopLe: false, thongBao: "Số điện thoại chưa đúng định dạng (vui lòng nhập 9–11 chữ số bắt đầu bằng số 0, ví dụ: 0905888999)." };
  }
  var ngayDen = String(thongTin.ngayDen || "").trim();
  if (!ngayDen) {
    return { hopLe: false, thongBao: "Vui lòng chọn ngày bạn đến quán." };
  }
  var gioDen = String(thongTin.gioDen || "").trim();
  if (!gioDen) {
    return { hopLe: false, thongBao: "Vui lòng chọn giờ bạn dự kiến tới quán." };
  }
  var soNguoi = Math.round(Number(thongTin.soNguoi) || 0);
  if (soNguoi < 1 || soNguoi > 100) {
    return { hopLe: false, thongBao: "Số lượng khách cần từ 1 đến 100 người." };
  }
  return {
    hopLe: true,
    duLieuChuan: {
      tenKhach: tenKhach,
      soDienThoai: sdtSach,
      ngayDen: ngayDen,
      gioDen: gioDen,
      soNguoi: soNguoi,
      ghiChu: String(thongTin.ghiChu || "").trim()
    }
  };
}

function soanTinNhanDonDatBan(donDatBan, tenQuan) {
  var dong = [];
  dong.push("🏮 ĐƠN ĐẶT BÀN MỚI — " + (tenQuan || "S.E BEER ĐỐI DIỆN GA HUẾ"));
  dong.push("• Mã đơn: " + donDatBan.maDon);
  dong.push("• Khách hàng: " + donDatBan.tenKhach);
  dong.push("• Điện thoại: " + donDatBan.soDienThoai);
  dong.push("• Thời gian đến: " + donDatBan.gioDen + " ngày " + donDatBan.ngayDen);
  dong.push("• Số lượng khách: " + donDatBan.soNguoi + " người");
  if (donDatBan.ghiChu) {
    dong.push("• Ghi chú: " + donDatBan.ghiChu);
  }
  if (Array.isArray(donDatBan.monChonTruoc) && donDatBan.monChonTruoc.length > 0) {
    dong.push("--------------------");
    dong.push("🔥 MỒI DẶN TRƯỚC (" + donDatBan.tongSoLuongMon + " phần):");
    for (var i = 0; i < donDatBan.monChonTruoc.length; i++) {
      var m = donDatBan.monChonTruoc[i];
      dong.push("  + " + m.tenMon + " (x" + m.soLuong + ")");
    }
  } else {
    dong.push("• Món ăn: Khách vào quán gọi món sau");
  }
  return dong.join("\n");
}

function taoKhoDuLieu(boNhoTuyChon) {
  var KHOA_LUU_TRU = "QUAN_NHAU_KHUYA_6_NAM_V1";

  function docTuBoNho() {
    try {
      if (boNhoTuyChon && typeof boNhoTuyChon.getItem === "function") {
        var raw = boNhoTuyChon.getItem(KHOA_LUU_TRU);
        return raw ? JSON.parse(raw) : null;
      }
      if (typeof localStorage !== "undefined" && localStorage && typeof localStorage.getItem === "function") {
        var rawLocal = localStorage.getItem(KHOA_LUU_TRU);
        return rawLocal ? JSON.parse(rawLocal) : null;
      }
    } catch (e) {}
    return null;
  }

  var duLieuMacDinh = {
    thongTinQuan: saoChepSau(THONG_TIN_QUAN_MAC_DINH),
    danhSachMon: saoChepSau(DANH_SACH_MON_MAC_DINH),
    danhSachUuDai: saoChepSau(DANH_SACH_UU_DAI_MAC_DINH),
    danhSachAnhKhongGian: saoChepSau(DANH_SACH_ANH_KHONG_GIAN_MAC_DINH),
    danhSachDonDatBan: [],
    gioChonTruoc: []
  };

  var trangThai = docTuBoNho() || duLieuMacDinh;
  if (!trangThai.thongTinQuan ||
      trangThai.thongTinQuan.tenQuan === "LỬA ĐÊM QUÁN" ||
      trangThai.thongTinQuan.soDienThoai === "0909888666" ||
      trangThai.thongTinQuan.soDienThoai === "0837997575" ||
      trangThai.thongTinQuan.gioMoCua !== "17h - Hết khách" ||
      String(trangThai.thongTinQuan.diaChi || "").indexOf("Phường Thuận Hóa") === -1 ||
      String(trangThai.thongTinQuan.cauChuyen6Nam || "").indexOf("sinh viên") === -1) {
    trangThai.thongTinQuan = saoChepSau(THONG_TIN_QUAN_MAC_DINH);
  }
  if (!Array.isArray(trangThai.danhSachMon) ||
      trangThai.danhSachMon.length !== 6 ||
      trangThai.danhSachMon[0].tenMon !== "Ếch Xào Sả") {
    trangThai.danhSachMon = saoChepSau(DANH_SACH_MON_MAC_DINH);
  }
  if (!Array.isArray(trangThai.danhSachUuDai) ||
      JSON.stringify(trangThai.danhSachUuDai).indexOf("Nem Chả Tré") === -1) {
    trangThai.danhSachUuDai = saoChepSau(DANH_SACH_UU_DAI_MAC_DINH);
  }
  if (!Array.isArray(trangThai.danhSachAnhKhongGian) ||
      (trangThai.danhSachAnhKhongGian[0] && String(trangThai.danhSachAnhKhongGian[0].hinhAnh).indexOf("unsplash.com") !== -1)) {
    trangThai.danhSachAnhKhongGian = saoChepSau(DANH_SACH_ANH_KHONG_GIAN_MAC_DINH);
  }
  if (!Array.isArray(trangThai.danhSachDonDatBan)) trangThai.danhSachDonDatBan = [];
  if (!Array.isArray(trangThai.gioChonTruoc)) trangThai.gioChonTruoc = [];

  function luuVaoBoNho() {
    try {
      var chuoi = JSON.stringify(trangThai);
      if (boNhoTuyChon && typeof boNhoTuyChon.setItem === "function") {
        boNhoTuyChon.setItem(KHOA_LUU_TRU, chuoi);
      } else if (typeof localStorage !== "undefined" && localStorage && typeof localStorage.setItem === "function") {
        localStorage.setItem(KHOA_LUU_TRU, chuoi);
      }
    } catch (e) {}
  }

  function xacThucPin(pin) {
    var pinChuan = String(trangThai.thongTinQuan.maPinQuanLy || "1234");
    return String(pin || "") === pinChuan;
  }

  function layThongTinQuan() {
    return saoChepSau(trangThai.thongTinQuan);
  }

  function capNhatThongTinQuan(thongTinMoi, pinQuanLy) {
    if (!xacThucPin(pinQuanLy)) {
      return { thanhCong: false, thongBao: "Mã PIN quản lý không đúng." };
    }
    if (!thongTinMoi || typeof thongTinMoi !== "object") {
      return { thanhCong: false, thongBao: "Dữ liệu cập nhật không hợp lệ." };
    }
    var cacTruong = [
      "tenQuan", "phuDeThuongHieu", "khauHieu", "soNamHoatDong", "namThanhLap",
      "gioMoCua", "soDienThoai", "soZalo", "diaChi", "linkBanDo",
      "cauChuyen6Nam", "maPinQuanLy", "telegramBotToken", "telegramChatId", "firebaseUrl"
    ];
    for (var i = 0; i < cacTruong.length; i++) {
      var k = cacTruong[i];
      if (typeof thongTinMoi[k] !== "undefined" && thongTinMoi[k] !== null) {
        if (k === "soNamHoatDong" || k === "namThanhLap") {
          trangThai.thongTinQuan[k] = Number(thongTinMoi[k]) || trangThai.thongTinQuan[k];
        } else {
          trangThai.thongTinQuan[k] = String(thongTinMoi[k]).trim();
        }
      }
    }
    luuVaoBoNho();
    return { thanhCong: true, thongBao: "Đã lưu thông tin quán thành công!", thongTinQuan: layThongTinQuan() };
  }

  function layDanhSachNhomMon() {
    return saoChepSau(NHOM_THUC_DON);
  }

  function layDanhSachMon(maNhom, chiLayConHang) {
    var ds = trangThai.danhSachMon.filter(function(mon) {
      if (maNhom && maNhom !== "TAT_CA" && mon.maNhom !== maNhom) {
        return false;
      }
      if (chiLayConHang && mon.hetHang) {
        return false;
      }
      return true;
    });
    return saoChepSau(ds);
  }

  function timMonTheoMa(maMon) {
    for (var i = 0; i < trangThai.danhSachMon.length; i++) {
      if (trangThai.danhSachMon[i].maMon === maMon) {
        return trangThai.danhSachMon[i];
      }
    }
    return null;
  }

  function themVaoGioChonTruoc(maMon, soLuongThem) {
    var mon = timMonTheoMa(maMon);
    if (!mon) {
      return { thanhCong: false, thongBao: "Không tìm thấy món ăn này trong thực đơn." };
    }
    if (mon.hetHang) {
      return { thanhCong: false, thongBao: "Món \"" + mon.tenMon + "\" hôm nay tạm hết, vui lòng chọn món bén mồi khác nhé!" };
    }
    var sl = Math.max(1, Math.round(Number(soLuongThem) || 1));
    var daCo = false;
    for (var i = 0; i < trangThai.gioChonTruoc.length; i++) {
      if (trangThai.gioChonTruoc[i].maMon === maMon) {
        trangThai.gioChonTruoc[i].soLuong += sl;
        daCo = true;
        break;
      }
    }
    if (!daCo) {
      trangThai.gioChonTruoc.push({
        maMon: mon.maMon,
        soLuong: sl
      });
    }
    luuVaoBoNho();
    return { thanhCong: true, thongBao: "Đã chọn trước \"" + mon.tenMon + "\"!", gio: layGioChonTruoc() };
  }

  function capNhatSoLuongChonTruoc(maMon, soLuongMoi) {
    var sl = Math.round(Number(soLuongMoi) || 0);
    if (sl <= 0) {
      return xoaKhoiGioChonTruoc(maMon);
    }
    var mon = timMonTheoMa(maMon);
    if (!mon) {
      return { thanhCong: false, thongBao: "Không tìm thấy món ăn." };
    }
    if (mon.hetHang) {
      return { thanhCong: false, thongBao: "Món \"" + mon.tenMon + "\" hiện đang tạm hết." };
    }
    var timThay = false;
    for (var i = 0; i < trangThai.gioChonTruoc.length; i++) {
      if (trangThai.gioChonTruoc[i].maMon === maMon) {
        trangThai.gioChonTruoc[i].soLuong = sl;
        timThay = true;
        break;
      }
    }
    if (!timThay) {
      trangThai.gioChonTruoc.push({ maMon: maMon, soLuong: sl });
    }
    luuVaoBoNho();
    return { thanhCong: true, gio: layGioChonTruoc() };
  }

  function xoaKhoiGioChonTruoc(maMon) {
    trangThai.gioChonTruoc = trangThai.gioChonTruoc.filter(function(item) {
      return item.maMon !== maMon;
    });
    luuVaoBoNho();
    return { thanhCong: true, gio: layGioChonTruoc() };
  }

  function xoaSachGioChonTruoc() {
    trangThai.gioChonTruoc = [];
    luuVaoBoNho();
    return { thanhCong: true, gio: layGioChonTruoc() };
  }

  function layGioChonTruoc() {
    var danhSachChiTiet = [];
    var tongSoLuong = 0;
    var tongTienTamTinh = 0;

    for (var i = 0; i < trangThai.gioChonTruoc.length; i++) {
      var item = trangThai.gioChonTruoc[i];
      var mon = timMonTheoMa(item.maMon);
      if (mon && !mon.hetHang && item.soLuong > 0) {
        var thanhTien = mon.gia * item.soLuong;
        tongSoLuong += item.soLuong;
        tongTienTamTinh += thanhTien;
        danhSachChiTiet.push({
          maMon: mon.maMon,
          tenMon: mon.tenMon,
          donVi: mon.donVi,
          gia: mon.gia,
          giaHienThi: dinhDangTien(mon.gia),
          soLuong: item.soLuong,
          thanhTien: thanhTien,
          thanhTienHienThi: dinhDangTien(thanhTien),
          hinhAnh: mon.hinhAnh
        });
      }
    }

    return {
      danhSach: danhSachChiTiet,
      tongSoLuong: tongSoLuong,
      tongTienTamTinh: tongTienTamTinh,
      tongTienHienThi: dinhDangTien(tongTienTamTinh)
    };
  }

  function taoDonDatBan(thongTinKhach, kemGioMonTruoc) {
    var kt = kiemTraHopLeDatBan(thongTinKhach);
    if (!kt.hopLe) {
      return { thanhCong: false, thongBao: kt.thongBao };
    }
    var gioHienTai = kemGioMonTruoc !== false ? layGioChonTruoc() : { danhSach: [], tongSoLuong: 0, tongTienTamTinh: 0 };
    var maDon = "DB" + String(new Date().getTime()).slice(-6) + String(trangThai.danhSachDonDatBan.length + 1);
    var donMoi = {
      maDon: maDon,
      tenKhach: kt.duLieuChuan.tenKhach,
      soDienThoai: kt.duLieuChuan.soDienThoai,
      ngayDen: kt.duLieuChuan.ngayDen,
      gioDen: kt.duLieuChuan.gioDen,
      soNguoi: kt.duLieuChuan.soNguoi,
      ghiChu: kt.duLieuChuan.ghiChu,
      monChonTruoc: saoChepSau(gioHienTai.danhSach),
      tongSoLuongMon: gioHienTai.tongSoLuong,
      tongTienTamTinh: gioHienTai.tongTienTamTinh,
      tongTienHienThi: dinhDangTien(gioHienTai.tongTienTamTinh),
      trangThai: "CHO_XAC_NHAN",
      ghiChuQuanLy: "",
      thoiGianTaoISO: new Date().toISOString()
    };
    donMoi.noiDungTinNhan = soanTinNhanDonDatBan(donMoi, trangThai.thongTinQuan.tenQuan);

    trangThai.danhSachDonDatBan.unshift(donMoi);
    if (kemGioMonTruoc !== false) {
      trangThai.gioChonTruoc = [];
    }
    luuVaoBoNho();

    return {
      thanhCong: true,
      thongBao: "Đã gửi yêu cầu đặt bàn thành công! Quán sẽ giữ chỗ và chuẩn bị mồi đón bạn.",
      donDatBan: saoChepSau(donMoi)
    };
  }

  function layDanhSachDonDatBan(trangThaiLoc) {
    var ds = trangThai.danhSachDonDatBan.filter(function(d) {
      if (trangThaiLoc && trangThaiLoc !== "TAT_CA" && d.trangThai !== trangThaiLoc) {
        return false;
      }
      return true;
    });
    return saoChepSau(ds);
  }

  function capNhatTrangThaiDon(maDon, trangThaiMoi, ghiChuQuanLy, pinQuanLy) {
    if (!xacThucPin(pinQuanLy)) {
      return { thanhCong: false, thongBao: "Mã PIN quản lý không đúng." };
    }
    var cacTrangThaiHopLe = ["CHO_XAC_NHAN", "DA_XAC_NHAN", "HOAN_TAT", "DA_HUY"];
    if (cacTrangThaiHopLe.indexOf(trangThaiMoi) === -1) {
      return { thanhCong: false, thongBao: "Trạng thái đơn không hợp lệ." };
    }
    for (var i = 0; i < trangThai.danhSachDonDatBan.length; i++) {
      if (trangThai.danhSachDonDatBan[i].maDon === maDon) {
        trangThai.danhSachDonDatBan[i].trangThai = trangThaiMoi;
        if (typeof ghiChuQuanLy === "string") {
          trangThai.danhSachDonDatBan[i].ghiChuQuanLy = ghiChuQuanLy.trim();
        }
        luuVaoBoNho();
        return {
          thanhCong: true,
          thongBao: "Đã cập nhật trạng thái đơn đặt bàn!",
          donDatBan: saoChepSau(trangThai.danhSachDonDatBan[i])
        };
      }
    }
    return { thanhCong: false, thongBao: "Không tìm thấy mã đơn đặt bàn." };
  }

  // Quản lý thực đơn (Admin)
  function themMonMoi(monMoi, pinQuanLy) {
    if (!xacThucPin(pinQuanLy)) {
      return { thanhCong: false, thongBao: "Mã PIN quản lý không đúng." };
    }
    var tenMon = String((monMoi && monMoi.tenMon) || "").trim();
    if (!tenMon) {
      return { thanhCong: false, thongBao: "Vui lòng nhập tên món." };
    }
    var gia = Math.max(0, Math.round(Number(monMoi && monMoi.gia) || 0));
    var maMon = "MON_" + String(new Date().getTime()).slice(-5) + "_" + (trangThai.danhSachMon.length + 1);
    var doiTuongMon = {
      maMon: maMon,
      tenMon: tenMon,
      maNhom: (monMoi && monMoi.maNhom) || "MON_TIEU_BIEU",
      gia: gia,
      donVi: String((monMoi && monMoi.donVi) || "Món đặc trưng").trim(),
      moTa: String((monMoi && monMoi.moTa) || "Món ngon bình dân chế biến nóng hổi tại quán.").trim(),
      hinhAnh: String((monMoi && monMoi.hinhAnh) || "images/ech-xao-sa.jpg").trim(),
      banChay: Boolean(monMoi && monMoi.banChay),
      monMoi: true,
      hetHang: false
    };
    trangThai.danhSachMon.unshift(doiTuongMon);
    luuVaoBoNho();
    return { thanhCong: true, thongBao: "Đã thêm món mới!", mon: saoChepSau(doiTuongMon) };
  }

  function capNhatMon(maMon, thongTinMoi, pinQuanLy) {
    if (!xacThucPin(pinQuanLy)) {
      return { thanhCong: false, thongBao: "Mã PIN quản lý không đúng." };
    }
    var mon = timMonTheoMa(maMon);
    if (!mon) {
      return { thanhCong: false, thongBao: "Không tìm thấy món cần sửa." };
    }
    if (thongTinMoi && typeof thongTinMoi === "object") {
      if (typeof thongTinMoi.tenMon === "string" && thongTinMoi.tenMon.trim()) {
        mon.tenMon = thongTinMoi.tenMon.trim();
      }
      if (typeof thongTinMoi.maNhom === "string" && thongTinMoi.maNhom.trim()) {
        mon.maNhom = thongTinMoi.maNhom.trim();
      }
      if (typeof thongTinMoi.gia !== "undefined") {
        var giaMoi = Math.round(Number(thongTinMoi.gia) || 0);
        if (giaMoi > 0) mon.gia = giaMoi;
      }
      if (typeof thongTinMoi.donVi === "string" && thongTinMoi.donVi.trim()) {
        mon.donVi = thongTinMoi.donVi.trim();
      }
      if (typeof thongTinMoi.moTa === "string") {
        mon.moTa = thongTinMoi.moTa.trim();
      }
      if (typeof thongTinMoi.hinhAnh === "string" && thongTinMoi.hinhAnh.trim()) {
        mon.hinhAnh = thongTinMoi.hinhAnh.trim();
      }
      if (typeof thongTinMoi.banChay === "boolean") {
        mon.banChay = thongTinMoi.banChay;
      }
      if (typeof thongTinMoi.hetHang === "boolean") {
        mon.hetHang = thongTinMoi.hetHang;
      }
    }
    luuVaoBoNho();
    return { thanhCong: true, thongBao: "Đã cập nhật món \"" + mon.tenMon + "\"!", mon: saoChepSau(mon) };
  }

  function batTatHetHang(maMon, pinQuanLy) {
    if (!xacThucPin(pinQuanLy)) {
      return { thanhCong: false, thongBao: "Mã PIN quản lý không đúng." };
    }
    var mon = timMonTheoMa(maMon);
    if (!mon) {
      return { thanhCong: false, thongBao: "Không tìm thấy món ăn." };
    }
    mon.hetHang = !mon.hetHang;
    if (mon.hetHang) {
      trangThai.gioChonTruoc = trangThai.gioChonTruoc.filter(function(item) {
        return item.maMon !== maMon;
      });
    }
    luuVaoBoNho();
    return {
      thanhCong: true,
      thongBao: mon.hetHang ? ("Đã báo tạm hết món \"" + mon.tenMon + "\".") : ("Đã mở bán lại món \"" + mon.tenMon + "\"."),
      mon: saoChepSau(mon)
    };
  }

  function xoaMon(maMon, pinQuanLy) {
    if (!xacThucPin(pinQuanLy)) {
      return { thanhCong: false, thongBao: "Mã PIN quản lý không đúng." };
    }
    trangThai.danhSachMon = trangThai.danhSachMon.filter(function(m) {
      return m.maMon !== maMon;
    });
    trangThai.gioChonTruoc = trangThai.gioChonTruoc.filter(function(item) {
      return item.maMon !== maMon;
    });
    luuVaoBoNho();
    return { thanhCong: true, thongBao: "Đã xóa món khỏi thực đơn." };
  }

  // Quản lý Ưu đãi & Không gian
  function layDanhSachUuDai(chiLayDangChay) {
    var ds = trangThai.danhSachUuDai.filter(function(u) {
      if (chiLayDangChay && !u.dangChay) return false;
      return true;
    });
    return saoChepSau(ds);
  }

  function themUuDai(uuDaiMoi, pinQuanLy) {
    if (!xacThucPin(pinQuanLy)) {
      return { thanhCong: false, thongBao: "Mã PIN quản lý không đúng." };
    }
    var tieuDe = String((uuDaiMoi && uuDaiMoi.tieuDe) || "").trim();
    if (!tieuDe) {
      return { thanhCong: false, thongBao: "Vui lòng nhập tiêu đề chương trình ưu đãi." };
    }
    var ud = {
      maUuDai: "UD_" + String(new Date().getTime()).slice(-5),
      tieuDe: tieuDe,
      moTa: String((uuDaiMoi && uuDaiMoi.moTa) || "").trim(),
      nhanUuDai: String((uuDaiMoi && uuDaiMoi.nhanUuDai) || "ƯU ĐÃI ĐÊM").trim(),
      dangChay: true
    };
    trangThai.danhSachUuDai.unshift(ud);
    luuVaoBoNho();
    return { thanhCong: true, thongBao: "Đã đăng chương trình ưu đãi mới!", uuDai: saoChepSau(ud) };
  }

  function batTatUuDai(maUuDai, pinQuanLy) {
    if (!xacThucPin(pinQuanLy)) {
      return { thanhCong: false, thongBao: "Mã PIN quản lý không đúng." };
    }
    for (var i = 0; i < trangThai.danhSachUuDai.length; i++) {
      if (trangThai.danhSachUuDai[i].maUuDai === maUuDai) {
        trangThai.danhSachUuDai[i].dangChay = !trangThai.danhSachUuDai[i].dangChay;
        luuVaoBoNho();
        return { thanhCong: true, uuDai: saoChepSau(trangThai.danhSachUuDai[i]) };
      }
    }
    return { thanhCong: false, thongBao: "Không tìm thấy ưu đãi." };
  }

  function xoaUuDai(maUuDai, pinQuanLy) {
    if (!xacThucPin(pinQuanLy)) {
      return { thanhCong: false, thongBao: "Mã PIN quản lý không đúng." };
    }
    trangThai.danhSachUuDai = trangThai.danhSachUuDai.filter(function(u) {
      return u.maUuDai !== maUuDai;
    });
    luuVaoBoNho();
    return { thanhCong: true, thongBao: "Đã xóa chương trình ưu đãi." };
  }

  function layDanhSachAnhKhongGian() {
    return saoChepSau(trangThai.danhSachAnhKhongGian);
  }

  function thongKeNhanhQuanLy() {
    var soDonCho = 0;
    var soDonDaXacNhan = 0;
    for (var i = 0; i < trangThai.danhSachDonDatBan.length; i++) {
      if (trangThai.danhSachDonDatBan[i].trangThai === "CHO_XAC_NHAN") soDonCho++;
      if (trangThai.danhSachDonDatBan[i].trangThai === "DA_XAC_NHAN") soDonDaXacNhan++;
    }
    var soMonDangBan = 0;
    var soMonTamHet = 0;
    for (var j = 0; j < trangThai.danhSachMon.length; j++) {
      if (trangThai.danhSachMon[j].hetHang) soMonTamHet++;
      else soMonDangBan++;
    }
    return {
      tongSoDon: trangThai.danhSachDonDatBan.length,
      soDonChoXacNhan: soDonCho,
      soDonDaXacNhan: soDonDaXacNhan,
      soMonDangBan: soMonDangBan,
      soMonTamHet: soMonTamHet
    };
  }

  function xuatToanBoTrangThai() {
    return saoChepSau(trangThai);
  }

  function nhapToanBoTrangThai(duLieuNgoai) {
    if (!duLieuNgoai || typeof duLieuNgoai !== "object") return false;
    if (duLieuNgoai.thongTinQuan) trangThai.thongTinQuan = duLieuNgoai.thongTinQuan;
    if (Array.isArray(duLieuNgoai.danhSachMon)) trangThai.danhSachMon = duLieuNgoai.danhSachMon;
    if (Array.isArray(duLieuNgoai.danhSachUuDai)) trangThai.danhSachUuDai = duLieuNgoai.danhSachUuDai;
    if (Array.isArray(duLieuNgoai.danhSachDonDatBan)) trangThai.danhSachDonDatBan = duLieuNgoai.danhSachDonDatBan;
    luuVaoBoNho();
    return true;
  }

  return {
    xacThucPin: xacThucPin,
    layThongTinQuan: layThongTinQuan,
    capNhatThongTinQuan: capNhatThongTinQuan,
    layDanhSachNhomMon: layDanhSachNhomMon,
    layDanhSachMon: layDanhSachMon,
    themVaoGioChonTruoc: themVaoGioChonTruoc,
    capNhatSoLuongChonTruoc: capNhatSoLuongChonTruoc,
    xoaKhoiGioChonTruoc: xoaKhoiGioChonTruoc,
    xoaSachGioChonTruoc: xoaSachGioChonTruoc,
    layGioChonTruoc: layGioChonTruoc,
    taoDonDatBan: taoDonDatBan,
    layDanhSachDonDatBan: layDanhSachDonDatBan,
    capNhatTrangThaiDon: capNhatTrangThaiDon,
    themMonMoi: themMonMoi,
    capNhatMon: capNhatMon,
    batTatHetHang: batTatHetHang,
    xoaMon: xoaMon,
    layDanhSachUuDai: layDanhSachUuDai,
    themUuDai: themUuDai,
    batTatUuDai: batTatUuDai,
    xoaUuDai: xoaUuDai,
    layDanhSachAnhKhongGian: layDanhSachAnhKhongGian,
    thongKeNhanhQuanLy: thongKeNhanhQuanLy,
    xuatToanBoTrangThai: xuatToanBoTrangThai,
    nhapToanBoTrangThai: nhapToanBoTrangThai
  };
}
