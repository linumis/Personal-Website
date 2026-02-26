import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Linus Michael";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#E8E3D5",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#1A1710",
            marginBottom: 24,
          }}
        >
          Linus Michael
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#1A1710",
            opacity: 0.6,
          }}
        >
          Cabinetmaker. Builder. Teaching tradesmen to scale with AI.
        </div>
      </div>
    ),
    { ...size }
  );
}
