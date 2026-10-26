console.log("=== Kiểm tra Task 3: Giao diện Trang Web, Tách biệt admin.html & Bảo mật nâng cao ===");

(function() {
  var html = docTep("index.html");
  var adminHtml = docTep("admin.html");
  var css = docTep("styles.css");
  var netlifyFunc = docTep("netlify/functions/gui-don.js");

  kiemTra(
    "Tệp styles.css tồn tại, thiết lập bảng màu Đêm Ấm Cúng và dùng ảnh thật của quán S.E Beer làm hình nền Hero Banner",
    Boolean(
      css.length > 500 &&
      css.indexOf("--bg-night") !== -1 &&
      css.indexOf("--amber-gold") !== -1 &&
      css.indexOf("images/hero-se-beer.jpg") !== -1
    ),
    true
  );

  kiemTra(
    "Tệp index.html có đầy đủ các khu vực cho khách: Hero 6 năm, Câu chuyện, Thực đơn chọn trước, Không gian Gallery, Ưu đãi và Đặt bàn",
    Boolean(
      html.indexOf("id=\"khu-vuc-hero\"") !== -1 &&
      html.indexOf("id=\"cau-chuyen-6-nam\"") !== -1 &&
      html.indexOf("id=\"thuc-don\"") !== -1 &&
      html.indexOf("id=\"khong-gian\"") !== -1 &&
      html.indexOf("id=\"uu-dai\"") !== -1 &&
      html.indexOf("id=\"dat-ban\"") !== -1
    ),
    true
  );

  kiemTra(
    "Tệp index.html có thanh nút bấm nhanh trên điện thoại, thanh Giỏ mồi chọn trước và tích hợp Netlify Forms + hàm trung gian gửi đơn",
    Boolean(
      html.indexOf("id=\"thanh-lien-he-nhanh\"") !== -1 &&
      html.indexOf("id=\"thanh-gio-chon-truoc\"") !== -1 &&
      html.indexOf("data-netlify=\"true\"") !== -1 &&
      html.indexOf("/.netlify/functions/gui-don") !== -1
    ),
    true
  );

  kiemTra(
    "Bảo mật: index.html KHÔNG chứa mã PIN 1234 công khai, KHÔNG chứa khung quản lý Admin và KHÔNG còn dữ liệu mẫu 'Số 68 Đường Ẩm Thực Đêm'",
    Boolean(
      html.indexOf("1234") === -1 &&
      html.indexOf("id=\"khu-vuc-quan-ly\"") === -1 &&
      html.indexOf("id=\"hop-thoai-pin\"") === -1 &&
      html.indexOf("Số 68 Đường Ẩm Thực Đêm") === -1
    ),
    true
  );

  kiemTra(
    "Trang quản trị được tách riêng sang admin.html có thẻ chặn Google lập chỉ mục (noindex, nofollow) và không lộ mã PIN mặc định",
    Boolean(
      adminHtml.length > 500 &&
      adminHtml.indexOf("noindex, nofollow") !== -1 &&
      adminHtml.indexOf("id=\"khu-vuc-quan-ly\"") !== -1 &&
      adminHtml.indexOf("Mặc định: <strong>1234</strong>") === -1
    ),
    true
  );

  kiemTra(
    "Hàm trung gian máy chủ netlify/functions/gui-don.js tồn tại để giữ kín Telegram Bot Token phía máy chủ",
    Boolean(
      netlifyFunc.length > 100 &&
      netlifyFunc.indexOf("TELEGRAM_BOT_TOKEN") !== -1 &&
      netlifyFunc.indexOf("TELEGRAM_CHAT_ID") !== -1
    ),
    true
  );

  var khoTest = taoKhoDuLieu({});
  var dsAnhKG = khoTest.layDanhSachAnhKhongGian();
  kiemTra(
    "Bộ sưu tập Không Khí Nhậu Đêm sử dụng trọn bộ 4 bức tranh Anime dễ thương về ăn nhậu (images/anime-nhau-1..4.png)",
    Boolean(
      dsAnhKG.length === 4 &&
      dsAnhKG[0].hinhAnh === "images/anime-nhau-1.png" &&
      dsAnhKG[1].hinhAnh === "images/anime-nhau-2.png" &&
      dsAnhKG[2].hinhAnh === "images/anime-nhau-3.png" &&
      dsAnhKG[3].hinhAnh === "images/anime-nhau-4.png"
    ),
    true
  );

  var dsUuDai = khoTest.layDanhSachUuDai(true);
  var chuoiUuDai = JSON.stringify(dsUuDai).toLowerCase();
  kiemTra(
    "Danh sách Ưu Đãi đã bỏ tặng tháp bia và có ưu đãi đặt bàn trước 17h đến 20h tặng Sụn gà rang muối, Nem chả tré, Hến trộn",
    Boolean(
      chuoiUuDai.indexOf("tháp bia") === -1 &&
      chuoiUuDai.indexOf("17h") !== -1 &&
      chuoiUuDai.indexOf("20h") !== -1 &&
      chuoiUuDai.indexOf("sụn gà rang muối") !== -1 &&
      chuoiUuDai.indexOf("nem chả tré") !== -1 &&
      chuoiUuDai.indexOf("hến trộn") !== -1
    ),
    true
  );

  kiemTra(
    "Giao diện index.html chỉ hiển thị 6 món tượng trưng để xem minh họa (không hiển thị giá tiền, không có nút Dặn chuẩn bị trước)",
    Boolean(
      html.indexOf("tong-tien-chon-truoc") === -1 &&
      html.indexOf("gia-mon-an") === -1 &&
      html.indexOf("Dặn chuẩn bị trước") === -1 &&
      html.indexOf("Món Dặn Chuẩn Bị Trước") === -1 &&
      html.indexOf("17h - Hết khách") !== -1
    ),
    true
  );

  kiemTra(
    "Tích hợp trọn bộ chủ đề 'Sân Ga Đêm', 2 trang Thực đơn chính thức (thuc-don-se-beer-1..2.webp), Bản đồ 1 phút đi bộ và ĐÃ XÓA phần Mã QR",
    Boolean(
      html.indexOf("id=\"bang-gio-tau-mon\"") !== -1 &&
      html.indexOf("id=\"khung-ve-tau-hien-thi\"") !== -1 &&
      html.indexOf("id=\"so-dem-nguoc-uu-dai\"") !== -1 &&
      html.indexOf("id=\"hop-thoi-tiet-hue\"") !== -1 &&
      html.indexOf("phatTiengCoiTauGaHue") !== -1 &&
      html.indexOf("property=\"og:image\"") !== -1 &&
      html.indexOf("\"@type\": \"Restaurant\"") !== -1 &&
      html.indexOf("Chỉ Đường Từ Ga Huế: 1 Phút Đi Bộ") !== -1 &&
      html.indexOf("images/thuc-don-se-beer-1.webp") !== -1 &&
      html.indexOf("images/thuc-don-se-beer-2.webp") !== -1 &&
      html.indexOf("id=\"anh-qr-dat-ban\"") === -1 &&
      html.indexOf("hop-qr-ban") === -1
    ),
    true
  );

  kiemTra(
    "Nâng cấp bộ phông chữ & phong cách UI/UX Pro Max (Barlow Condensed + Be Vietnam Pro + Playfair Display + JetBrains Mono + hỗ trợ prefers-reduced-motion)",
    Boolean(
      html.indexOf("Barlow+Condensed") !== -1 &&
      html.indexOf("Be+Vietnam+Pro") !== -1 &&
      html.indexOf("JetBrains+Mono") !== -1 &&
      css.indexOf("--font-display") !== -1 &&
      css.indexOf("--font-sans") !== -1 &&
      css.indexOf("--font-mono") !== -1 &&
      css.indexOf("prefers-reduced-motion") !== -1
    ),
    true
  );
})();
