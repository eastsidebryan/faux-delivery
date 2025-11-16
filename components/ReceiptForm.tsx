"use client";
import { ChangeEvent } from "react";
import type { ReceiptData } from "../app/page";

export default function ReceiptForm({
  value,
  onChange,
  disabled,
}: {
  value: ReceiptData;
  onChange: (v: ReceiptData) => void;
  disabled?: boolean;
}) {
  const set =
    (k: keyof ReceiptData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange({ ...value, [k]: e.target.value });
  return (
    <form style={{ display: "grid", gap: 12 }}>
      <h2>From (Sender)</h2>
      <input
        placeholder="Sender Name"
        value={value.senderName}
        onChange={set("senderName")}
        disabled={disabled}
      />
      <input
        placeholder="Company Name"
        value={value.companyName}
        onChange={set("companyName")}
        disabled={disabled}
      />
      <input
        placeholder="Country/Resident"
        value={value.senderCountry}
        onChange={set("senderCountry")}
        disabled={disabled}
      />
      <input
        placeholder="Sender email address"
        value={value.senderEmail}
        onChange={set("senderEmail")}
        disabled={disabled}
      />
      <input
        placeholder="Consignment Number"
        value={value.consignmentNumber}
        onChange={set("consignmentNumber")}
        disabled={disabled}
      />
      <input
        placeholder="Route (e.g., Jordan > Indonesia > Taiwan)"
        value={value.route}
        onChange={set("route")}
        disabled={disabled}
      />
      <h2>To (Receiver)</h2>
      <input
        placeholder="Receiver's Name"
        value={value.receiverName}
        onChange={set("receiverName")}
        disabled={disabled}
      />
      <input
        placeholder="Country"
        value={value.receiverCountry}
        onChange={set("receiverCountry")}
        disabled={disabled}
      />
      <textarea
        placeholder="Place of Delivery Address"
        value={value.deliveryAddress}
        onChange={set("deliveryAddress")}
        disabled={disabled}
      />
      <input
        placeholder="Content"
        value={value.content}
        onChange={set("content")}
        disabled={disabled}
      />
      <input
        placeholder="City"
        value={value.city}
        onChange={set("city")}
        disabled={disabled}
      />
      <input
        placeholder="Phone No"
        value={value.phone}
        onChange={set("phone")}
        disabled={disabled}
      />
      <input
        placeholder="Email"
        value={value.email}
        onChange={set("email")}
        disabled={disabled}
      />
      <h2>Shipment</h2>
      <input
        placeholder="Arrival Date (dd/mm/yyyy)"
        value={value.arrivalDate}
        onChange={set("arrivalDate")}
        disabled={disabled}
      />
      <input
        placeholder="Number of pieces"
        value={value.pieces}
        onChange={set("pieces")}
        disabled={disabled}
      />
      <input
        placeholder="Weight (e.g., 6Kg)"
        value={value.weight}
        onChange={set("weight")}
        disabled={disabled}
      />
      <h2>Charges (USD)</h2>
      {value.charges.map((c, i) => (
        <div key={i} style={{ display: "flex", gap: 8 }}>
          <input value={c.label} disabled style={{ flex: 1 }} />
          <input
            type="number"
            min={0}
            step="0.01"
            placeholder="$0.00"
            value={Number.isFinite(c.amount) ? c.amount : 0}
            onChange={(e) => {
              const next = [...value.charges];
              next[i] = { ...c, amount: parseFloat(e.target.value || "0") };
              onChange({ ...value, charges: next });
            }}
            disabled={disabled}
            style={{ width: 140 }}
          />
        </div>
      ))}
    </form>
  );
}
