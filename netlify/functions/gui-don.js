/**
 * Hàm trung gian chạy trên máy chủ Netlify (Netlify Serverless Function: /.netlify/functions/gui-don)
 * Nhiệm vụ:
 * 1. Giữ bí mật tuyệt đối TELEGRAM_BOT_TOKEN và TELEGRAM_CHAT_ID ở phía máy chủ (Server-side Environment Variables),
 *    không bao giờ để lộ Token ra trình duyệt của khách.
 * 2. Khi khách bấm Đặt bàn trên web, hàm này nhận thông tin đơn và tự động bắn tin nhắn về Telegram của Chủ quán,
 *    đồng thời lưu vào Firebase Realtime Database (nếu có cấu hình FIREBASE_DB_URL).
 */

exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ thanhCong: false, thongBao: "Chỉ hỗ trợ phương thức POST" })
    };
  }

  try {
    var payload = JSON.parse(event.body || "{}");
    var donDatBan = payload.donDatBan || {};
    var noiDungTinNhan = String(donDatBan.noiDungTinNhan || payload.noiDungTinNhan || "").trim();

    if (!noiDungTinNhan) {
      return {
        statusCode: 400,
        body: JSON.stringify({ thanhCong: false, thongBao: "Thiếu nội dung đơn đặt bàn" })
      };
    }

    var botToken = process.env.TELEGRAM_BOT_TOKEN || "";
    var chatId = process.env.TELEGRAM_CHAT_ID || "";
    var firebaseUrl = process.env.FIREBASE_DB_URL || payload.firebaseUrl || "";

    var daGuiTelegram = false;
    var daLuuFirebase = false;

    // 1. Gửi thông báo về Telegram của quán từ phía máy chủ (An toàn tuyệt đối)
    if (botToken && chatId && typeof fetch === "function") {
      var tgUrl = "https://api.telegram.org/bot" + encodeURIComponent(botToken) + "/sendMessage";
      var tgRes = await fetch(tgUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: noiDungTinNhan
        })
      });
      daGuiTelegram = tgRes.ok;
    }

    // 2. Lưu đơn đặt bàn lên đám mây Firebase Realtime Database để máy Chủ quán nhận đơn từ xa
    if (firebaseUrl && donDatBan.maDon && typeof fetch === "function") {
      var base = String(firebaseUrl).replace(/\/+$/, "");
      var fbUrl = base + "/donDatBan/" + encodeURIComponent(donDatBan.maDon) + ".json";
      var fbRes = await fetch(fbUrl, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donDatBan)
      });
      daLuuFirebase = fbRes.ok;
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        thanhCong: true,
        daGuiTelegram: daGuiTelegram,
        daLuuFirebase: daLuuFirebase
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ thanhCong: false, thongBao: "Lỗi xử lý máy chủ" })
    };
  }
};
