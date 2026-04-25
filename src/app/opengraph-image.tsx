import { ImageResponse } from "next/og";
import { SITE } from "@/content/brand";

export const dynamic = "force-static";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(circle at 25% 20%, rgba(200,155,85,0.25), transparent 55%), linear-gradient(135deg, #0e3b3a 0%, #082626 100%)",
          color: "#f4efe6",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#c89b55",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(244,239,230,0.7)",
            }}
          >
            {SITE.legalName}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 110,
              lineHeight: 1,
              letterSpacing: "-0.035em",
              maxWidth: 1000,
            }}
          >
            {SITE.tagline}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 36,
              fontSize: 26,
              lineHeight: 1.4,
              maxWidth: 900,
              color: "rgba(244,239,230,0.75)",
            }}
          >
            Strategic textile sourcing from {SITE.city}, India — hospitality, apparel, home textiles.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(244,239,230,0.55)",
          }}
        >
          <span>unicomglobalsourcing.com</span>
          <span>Est. {SITE.founded}</span>
        </div>
      </div>
    ),
    size,
  );
}
