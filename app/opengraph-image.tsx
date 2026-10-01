import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Siddharth Thakkar (woustachemax)"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#000000",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #1a1a1a 0%, #000000 60%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.02em",
          }}
        >
          Siddharth Thakkar
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            color: "#a3a3a3",
            marginTop: 20,
          }}
        >
          woustachemax
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#737373",
            marginTop: 40,
          }}
        >
          I&apos;m a verb, not a noun.
        </div>
      </div>
    ),
    { ...size }
  )
}
