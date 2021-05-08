import qrcode from 'qrcode'

/** Gọi ra để sử dụng đối tượng "authenticator" của thằng otplib */
import { authenticator } from 'otplib';

/** Tạo secret key ứng với từng user để phục vụ việc tạo otp token.
  * Lưu ý: Secret phải được gen bằng lib otplib thì những app như
    Google Authenticator hoặc tương tự mới xử lý chính xác được.
  * Các bạn có thể thử để linh tinh cái secret này thì đến bước quét mã QR sẽ thấy có lỗi ngay.
*/
const generateUniqueSecret = () => {
    return authenticator.generateSecret()
}

/** Tạo mã OTP token */
const generateOTPToken = (username, serviceName, secret) => {
    return authenticator.keyuri(username, serviceName, secret)
}

/** Kiểm tra mã OTP token có hợp lệ hay không
 * Có 2 method "verify" hoặc "check", các bạn có thể thử dùng một trong 2 tùy thích.
*/
const verifyOTPToken = (token, secret) => {
    return authenticator.verify({ token, secret })
}

/** Tạo QR code từ mã OTP để gửi về cho user sử dụng app quét mã */
const generateQRCode = async (otpAuth) => {
    try {
      const QRCodeImageUrl = await qrcode.toDataURL(otpAuth)
      console.log(`🛠 LOG: 🚀 --> -----------------------------------------------------------------------------------------`);
      console.log(`🛠 LOG: 🚀 --> ~ file: 2fa.js ~ line 31 ~ generateQRCode ~ QRCodeImageUrl`, QRCodeImageUrl);
      console.log(`🛠 LOG: 🚀 --> -----------------------------------------------------------------------------------------`);
      return `<img src='${QRCodeImageUrl}' alt='qr-code-img-trungquandev' />`
    } catch (error) {
      console.log('Could not generate QR code', error)
      return
    }
}

export {
    generateUniqueSecret,
    verifyOTPToken,
    generateOTPToken,
    generateQRCode,
}