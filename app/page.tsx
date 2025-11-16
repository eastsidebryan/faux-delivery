"use client"
import { useState, useRef } from 'react'
import { toPng } from 'html-to-image'
import jsPDF from 'jspdf'
import ReceiptForm from '../components/ReceiptForm'
import ReceiptPreview from '../components/ReceiptPreview'
import { generateBarcodeDataUrl } from '../lib/barcode'

export type ReceiptData = {
  senderName: string
  companyName: string
  senderCountry: string
  senderEmail: string
  consignmentNumber: string
  route: string
  receiverName: string
  receiverCountry: string
  deliveryAddress: string
  content: string
  city: string
  phone: string
  email: string
  arrivalDate: string
  pieces: string
  weight: string
  departDate?: string
  barcode?: string
}

export default function Page() {
  const [data, setData] = useState<ReceiptData>({
    senderName: '',
    companyName: '',
    senderCountry: '',
    senderEmail: '',
    consignmentNumber: '',
    route: '',
    receiverName: '',
    receiverCountry: '',
    deliveryAddress: '',
    content: '',
    city: '',
    phone: '',
    email: '',
    arrivalDate: '',
    pieces: '',
    weight: ''
  })
  const [confirmed, setConfirmed] = useState(false)
  const receiptRef = useRef<HTMLDivElement>(null)

  const handleConfirm = async () => {
    const d = new Date()
    const departDate = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`
    const barcode = await generateBarcodeDataUrl(Math.random().toString(36).slice(2))
    setData(prev => ({ ...prev, departDate, barcode }))
    setConfirmed(true)
  }

  const downloadImage = async () => {
    if (!receiptRef.current) return
    const dataUrl = await toPng(receiptRef.current, { cacheBust: true, pixelRatio: 2 })
    const a = document.createElement('a')
    a.href = dataUrl
    a.download = 'receipt.png'
    a.click()
  }

  const downloadPdf = async () => {
    if (!receiptRef.current) return
    const dataUrl = await toPng(receiptRef.current, { cacheBust: true, pixelRatio: 2 })
    const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [1080, 740] })
    pdf.addImage(dataUrl, 'PNG', 0, 0, 1080, 740)
    pdf.save('receipt.pdf')
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, padding: 24 }}>
      <div>
        <h1>Shipment Receipt Builder</h1>
        <ReceiptForm value={data} onChange={setData} disabled={confirmed} />
        <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
          <button onClick={handleConfirm} disabled={confirmed}>Confirm</button>
          <button onClick={() => setConfirmed(false)}>Edit</button>
          <button onClick={downloadImage} disabled={!confirmed}>Download Image</button>
          <button onClick={downloadPdf} disabled={!confirmed}>Download PDF</button>
        </div>
      </div>
      <div>
        <ReceiptPreview ref={receiptRef} data={data} />
      </div>
    </div>
  )
}
