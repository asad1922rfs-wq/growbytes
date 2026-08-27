import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 100 100"
          fill="#EE5B2B"
        >
          <path d="M42,50 L84,50 A42,42 0 1 1 42,8 Z" />
          <circle cx="76" cy="27" r="15" />
          <rect x="61" y="46" width="30" height="46" rx="15" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
