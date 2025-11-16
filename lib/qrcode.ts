import QRCode from "qrcode";

export async function generateQrDataUrl(text: string) {
  return QRCode.toDataURL(text, {
    width: 200,
    margin: 2,
    errorCorrectionLevel: "H",
    color: { dark: "#000000", light: "#ffffff" },
  });
}
