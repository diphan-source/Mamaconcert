import { ImageResponse } from "next/og";
import { EVENT_INFO } from "@/lib/constants";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const alt = "MAAMA Concert Toronto 2026";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #050505 0%, #111827 45%, #7c2d12 100%)",
          color: "#fff",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#fde68a",
            }}
          >
            MAAMA Concert
          </div>
          <div
            style={{
              display: "flex",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: 999,
              padding: "14px 24px",
              fontSize: 22,
              color: "#f5f5f5",
            }}
          >
            Toronto 2026
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              lineHeight: 1,
              fontWeight: 800,
              maxWidth: 900,
              textTransform: "uppercase",
            }}
          >
            Honouring the hands that heal
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.82)",
              maxWidth: 920,
            }}
          >
            {EVENT_INFO.date} • {EVENT_INFO.venue.name} • Worship, storytelling,
            and community celebrating Black African women in healthcare.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#e5e7eb",
          }}
        >
          <div style={{ display: "flex" }}>Tickets available now</div>
          <div style={{ display: "flex", color: "#fde68a" }}>mamaconcert.com</div>
        </div>
      </div>
    ),
    size
  );
}
