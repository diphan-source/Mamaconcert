import { ImageResponse } from "next/og";
import { EVENT_INFO } from "@/lib/constants";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const alt = "MAAMA Concert Toronto 2026 social card";

export default function TwitterImage() {
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
            "radial-gradient(circle at top right, rgba(245,158,11,0.36), transparent 28%), linear-gradient(135deg, #020617 0%, #111827 50%, #4a044e 100%)",
          color: "#fff",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "#f9fafb",
          }}
        >
          MAAMA Concert
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 74,
              fontWeight: 900,
              lineHeight: 1,
              maxWidth: 920,
              textTransform: "uppercase",
            }}
          >
            Toronto 2026
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#fde68a",
              fontWeight: 700,
            }}
          >
            {EVENT_INFO.date}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.82)",
              maxWidth: 940,
            }}
          >
            Celebrate Black African women in healthcare through worship, music,
            and community at {EVENT_INFO.venue.name}.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
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
