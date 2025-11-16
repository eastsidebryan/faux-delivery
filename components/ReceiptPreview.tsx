"use client";
import { forwardRef } from "react";
import type { ReceiptData } from "../app/page";

type Props = { data: ReceiptData };

const logoHeight = 50;
const logoWidth = 120;
const fixedAddress = "12 Montpelier Crescent, Brighton, East Sussex BN1 3JF";

const ReceiptPreview = forwardRef<HTMLDivElement, Props>(({ data }, ref) => {
  const origin = data.senderCountry || "JORDAN";
  const destination = data.receiverCountry || "TAIWAN";
  return (
    <div
      ref={ref}
      style={{
        width: 1120,
        height: 950,
        background: "#f8e4ea",
        border: "12px solid #f8e4ea",
        position: "relative",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* NOTE */}
      <p
        style={{
          position: "absolute",
          right: 100,
          bottom: 120,
          fontSize: 70,
          color: "#fa0101ff",
          fontWeight: 600,
        }}
      >
        mimi
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.2fr 1fr 320px",
          gap: 12,
        }}
      >
        <div
          style={{
            height: logoHeight,
            background: "#000000ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            style={{
              width: logoWidth,
              height: logoHeight,
              objectFit: "cover",
            }}
          />
        </div>
        {/* Right column: Size and weight */}
        {/* Middle column: Barcode panel */}
        <div
          style={{
            height: logoHeight,
            background: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 600,
          }}
        >
          {fixedAddress}
        </div>
        <div
          style={{
            height: logoHeight,
            background: "#ffffff",
            border: "2px solid #000",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div
            style={{
              borderRight: "2px solid #000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ORIGIN
            <br />
            {origin.toUpperCase()}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            DESTINATION
            <br />
            {destination.toUpperCase()}
          </div>
        </div>
      </div>
      {/* Shipment details band */}
      {/* Sender auth and Security checked band */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 320px",
          gap: 12,
          marginTop: 12,
        }}
      >
        <div
          style={{
            background: "#9c3b71",
            color: "#fff",
            padding: 8,
            fontWeight: 700,
          }}
        >
          1 From (Sender)
        </div>
        <div />
        <div
          style={{
            background: "#9c3b71",
            color: "#fff",
            padding: 8,
            fontWeight: 700,
          }}
        >
          6 Size and weight
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 320px",
          gap: 12,
        }}
      >
        {/* Left column: From (Sender) and To (Receiver) */}
        <div style={{ display: "grid", gap: 12 }}>
          <div
            style={{
              background: "#fff",
              border: "2px solid #9c3b71",
              padding: 12,
              display: "grid",
              gap: 10,
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 8,
              }}
            >
              <div>
                Sender Name
                <br />
                <span style={{ fontWeight: 600 }}>
                  {data.senderName || "\u00A0"}
                </span>
              </div>
              <div>
                Company Name
                <br />
                <span style={{ fontWeight: 600 }}>
                  {data.companyName || "\u00A0"}
                </span>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 8,
              }}
            >
              <div>
                Country/Resident
                <br />
                <span style={{ fontWeight: 600 }}>
                  {data.senderCountry || "\u00A0"}
                </span>
              </div>
              <div>
                Sender email address
                <br />
                <span style={{ fontWeight: 600 }}>
                  {data.senderEmail || "\u00A0"}
                </span>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 8,
              }}
            >
              <div>
                Consignment Number
                <br />
                <span style={{ fontWeight: 600 }}>
                  {data.consignmentNumber || "\u00A0"}
                </span>
              </div>
              <div>
                ROUTE
                <br />
                <span style={{ fontWeight: 600 }}>
                  {data.route || "\u00A0"}
                </span>
              </div>
            </div>
          </div>
          <div
            style={{
              background: "#fff",
              border: "2px solid #9c3b71",
              padding: 12,
              display: "grid",
              gap: 10,
            }}
          >
            <div
              style={{
                background: "#9c3b71",
                color: "#fff",
                padding: 8,
                fontWeight: 700,
              }}
            >
              2 To (Receiver)
            </div>
            <div>
              Receiver's Name
              <br />
              <span style={{ fontWeight: 600 }}>
                {data.receiverName || "\u00A0"}
              </span>
            </div>
            <div>
              Country
              <br />
              <span style={{ fontWeight: 600 }}>
                {data.receiverCountry || "\u00A0"}
              </span>
            </div>
            <div>
              Place of Delivery Address
              <br />
              <span style={{ fontWeight: 600 }}>
                {data.deliveryAddress || "\u00A0"}
              </span>
            </div>
            <div>
              Content
              <br />
              <span style={{ fontWeight: 600 }}>
                {data.content || "\u00A0"}
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 8,
              }}
            >
              <div>
                CITY
                <br />
                <span style={{ fontWeight: 600 }}>{data.city || "\u00A0"}</span>
              </div>
              <div>
                PHONE NO
                <br />
                <span style={{ fontWeight: 600 }}>
                  {data.phone || "\u00A0"}
                </span>
              </div>
            </div>
            <div>
              EMAIL
              <br />
              <span style={{ fontWeight: 600 }}>{data.email || "\u00A0"}</span>
            </div>
          </div>
        </div>

        <div
          style={{
            background: "#fff",
            border: "2px solid #9c3b71",
            padding: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "150px",
          }}
        >
          <div
            style={{
              width: "90%",
              maxWidth: 280,
              maxHeight: 120,
              aspectRatio: "16 / 9",
              border: "1px solid #000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#fafafa",
            }}
          >
            {data.barcode ? (
              <img
                src={data.barcode}
                alt="QR"
                style={{ width: "80%", height: "80%", objectFit: "contain" }}
              />
            ) : (
              <div
                style={{ width: "80%", height: "80%", background: "#eee" }}
              />
            )}
          </div>
        </div>

        <div
          style={{
            background: "#fff",
            border: "2px solid #9c3b71",
            padding: 12,
            display: "grid",
            gap: 8,
          }}
        >
          <div style={{ borderBottom: "1px solid #000", paddingBottom: 8 }}>
            No. of pieces
            <br />
            <span style={{ fontWeight: 700 }}>{data.pieces || "\u00A0"}</span>
          </div>
          <div>
            Weight
            <br />
            <span style={{ fontWeight: 700 }}>{data.weight || "\u00A0"}</span>
          </div>
          <div>
            Dimension "m" L × W × H<br />
            <span style={{ fontWeight: 600 }}>7.2 × 4.5 × 1.8</span>
          </div>
          <div>
            Volumetric / Charged Weight
            <br />
            <span style={{ fontWeight: 600 }}>17 24kg</span>
          </div>
          <div style={{ borderTop: "1px solid #000", paddingTop: 8 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                fontWeight: 600,
              }}
            >
              <div>CODES</div>
              <div style={{ textAlign: "right" }}>CHARGES (USD)</div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 6,
              }}
            >
              {data.charges.map((c, idx) => (
                <>
                  <div key={`l-${idx}`}>{c.label}</div>
                  <div key={`v-${idx}`} style={{ textAlign: "right" }}>{`$${(
                    c.amount || 0
                  ).toFixed(2)}`}</div>
                </>
              ))}
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid #000",
              paddingTop: 8,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 6,
            }}
          >
            <div>
              Currency Code
              <br />
              <span style={{ fontWeight: 600 }}>USD ($)</span>
            </div>
            <div style={{ textAlign: "right" }}>
              TOTAL
              <br />
              <span style={{ fontWeight: 700 }}>{`$${data.charges
                .reduce((s, c) => s + (c.amount || 0), 0)
                .toFixed(2)}`}</span>
            </div>
          </div>
          <div>
            AMT PAID
            <br />
            <span style={{ fontWeight: 700 }}>{`$${data.charges
              .reduce((s, c) => s + (c.amount || 0), 0)
              .toFixed(2)}`}</span>
          </div>
          <div>
            Receiver's vat and tax charge:
            <br />
            <span style={{ fontWeight: 600 }}>N/A</span>
          </div>
          <div>
            Transport collect sticker No
            <br />
            <span style={{ fontWeight: 600 }}>—</span>
          </div>
          <div style={{ marginTop: 12 }}>
            Arrival
            <br />
            <span style={{ fontWeight: 700 }}>
              {data.arrivalDate || "\u00A0"}
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 320px",
          gap: 12,
          marginTop: -280,
          position: "relative",
          bottom: 120,
        }}
      >
        <div />
        <div
          style={{
            background: "#fff",
            border: "2px solid #9c3b71",
            padding: 12,
            display: "grid",
            gap: 20,
          }}
        >
          <div
            style={{
              background: "#9c3b71",
              color: "#fff",
              padding: 8,
              fontWeight: 700,
            }}
          >
            4 Shipment Details
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div
                  style={{ width: 14, height: 14, border: "1px solid #000" }}
                />{" "}
                ADHOC/CONSIGNMENT
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div
                  style={{ width: 14, height: 14, border: "1px solid #000" }}
                />{" "}
                APPLICABLE PACKAGE
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div
                  style={{ width: 14, height: 14, border: "1px solid #000" }}
                />{" "}
                DOCUMENT
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div
                  style={{ width: 14, height: 14, border: "1px solid #000" }}
                />{" "}
                NON-DOCUMENT
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: 40 }}>
                Transport Charges
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div
                  style={{ width: 14, height: 14, border: "1px solid #000" }}
                />{" "}
                Prepaid
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div
                  style={{ width: 14, height: 14, border: "1px solid #000" }}
                />{" "}
                Collect
              </div>
              <div style={{ fontWeight: 600, marginTop: 8 }}>
                Shipment Insurance
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div
                    style={{ width: 14, height: 14, border: "1px solid #000" }}
                  />{" "}
                  YES
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div
                    style={{ width: 14, height: 14, border: "1px solid #000" }}
                  />{" "}
                  NO
                </div>
              </div>
            </div>
          </div>
        </div>
        <div />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 380px 1.2fr",
          gap: 12,
          marginTop: 25,
        }}
      >
        <div
          style={{
            background: "#fff",
            border: "2px solid #9c3b71",
            padding: 12,
          }}
        >
          <div
            style={{
              background: "#9c3b71",
              color: "#fff",
              padding: 8,
              fontWeight: 700,
            }}
          >
            3 Sender's authorisation and Signature's
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 8,
              marginTop: 8,
            }}
          >
            <div>
              Depart
              <br />
              <span style={{ fontWeight: 600 }}>
                {data.departDate || "\u00A0"}
              </span>
            </div>
            <div>
              Date
              <br />
              <span style={{ fontWeight: 600 }}>
                {data.departDate || "\u00A0"}
              </span>
            </div>
          </div>
          <div style={{ marginTop: 12 }}>Signature:</div>
          <div style={{ height: 40, borderBottom: "2px solid #000" }} />
        </div>
        <div
          style={{
            background: "#fff",
            border: "2px solid #9c3b71",
            padding: 12,
            position: "relative",
            bottom: 0,
          }}
        >
          <div
            style={{
              background: "#9c3b71",
              color: "#fff",
              padding: 8,
              fontWeight: 700,
            }}
          >
            5 Security Checked
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div
                style={{ width: 14, height: 14, border: "1px solid #000" }}
              />{" "}
              YES
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div
                style={{ width: 14, height: 14, border: "1px solid #000" }}
              />{" "}
              NO
            </div>
          </div>
          <div style={{ marginTop: 8 }}>
            Type of consignment
            <br />
            <span style={{ fontWeight: 600 }}>
              PERMANENT/REPAIR/RETURN/TEMPORARY
            </span>
          </div>
          <div
            style={{
              marginTop: 8,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 8,
            }}
          >
            <div>
              Checked by
              <br />
              <span style={{ fontWeight: 600 }}>Receiver</span>
            </div>
            <div>Sender</div>
          </div>
        </div>
        <div
          style={{
            width: 370,
            height: 100,
            background: "#ffffffff",
            position: "absolute",
            right: 335,
            bottom: 220,
          }}
        ></div>

        <div />
      </div>
      <div
        style={{ position: "absolute", right: 12, bottom: 12, fontSize: 12 }}
      >
        Service copy
      </div>
    </div>
  );
});

export default ReceiptPreview;
