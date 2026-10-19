import { ImageResponse } from "next/og";
import Mimo from "@/components/Mimo";

export const alt = "Memo – Learn a new word every day";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: "0 96px",
          background: "#ffffff",
          color: "#171717",
        }}
      >
        <div style={{ position: "relative", display: "flex", width: 380, height: 380 }}>
          <Mimo width={380} height={380} showCardText={false} />
          {/* "Aa" on Mimo's word card (SVG 200,301 scaled to 380px) */}
          <div
            style={{
              position: "absolute",
              left: 150,
              top: 252,
              width: 80,
              display: "flex",
              justifyContent: "center",
              fontSize: 28,
              color: "#15803d",
            }}
          >
            Aa
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700 }}>Memo</div>
          <div style={{ marginTop: 16, fontSize: 48, lineHeight: 1.2 }}>
            Learn a new word every day.
          </div>
          <div style={{ marginTop: 8, fontSize: 48, lineHeight: 1.2, color: "#15803d" }}>
            Actually remember it.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
