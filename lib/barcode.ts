import JsBarcode from 'jsbarcode'

export async function generateBarcodeDataUrl(text: string) {
  const canvas = document.createElement('canvas')
  JsBarcode(canvas, text, { format: 'CODE128', displayValue: false, margin: 0, height: 60, width: 2 })
  return canvas.toDataURL('image/png')
}
