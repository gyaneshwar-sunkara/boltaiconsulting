import { readFileSync } from "node:fs"
import { join } from "node:path"
import { ImageResponse } from "next/og"

/**
 * Open Graph card generation.
 *
 * Every page on the site previously shared one static og-image.png, so a link
 * to a case study, a service page and a blog post all looked identical when
 * shared. These render the page's own title instead, in the site's own
 * typeface, at build time.
 *
 * Satori cannot read woff2, which is what the site serves to browsers, so the
 * three faces used here are TTF conversions kept alongside in lib/og-fonts.
 */

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = "image/png"

const BG = "#08090C"
const FG = "#F4F5F7"
const EMBER = "#FF6B33"
const MUTED = "#939AA6"

const font = (file: string) =>
  readFileSync(join(process.cwd(), "lib/og-fonts", file))

/** Long titles need to step down or they wrap into four cramped lines. */
function titleSize(title: string) {
  if (title.length > 78) return 52
  if (title.length > 52) return 62
  return 74
}

export function ogCard({
  eyebrow,
  title,
  footer,
}: {
  eyebrow: string
  title: string
  footer?: string
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BG,
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* the one ember glow, matching the home hero */}
        <div
          style={{
            position: "absolute",
            top: -260,
            left: -200,
            width: 900,
            height: 640,
            background: EMBER,
            opacity: 0.16,
            filter: "blur(140px)",
            borderRadius: 9999,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* the sill: the bar the wordmark sits on */}
          <div style={{ display: "flex", width: 34, height: 34, position: "relative" }}>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: 34,
                height: 8,
                background: EMBER,
                borderRadius: 2,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 11,
                left: 5,
                width: 24,
                height: 23,
                background: FG,
                borderRadius: 2,
              }}
            />
          </div>
          <div
            style={{
              fontFamily: "Schibsted",
              fontSize: 30,
              color: FG,
              letterSpacing: "-0.03em",
            }}
          >
            SillStack
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
          <div
            style={{
              fontFamily: "JetBrains",
              fontSize: 20,
              color: EMBER,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: 26,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              fontFamily: "Schibsted",
              fontSize: titleSize(title),
              lineHeight: 1.08,
              letterSpacing: "-0.035em",
              color: FG,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontFamily: "Inter",
            fontSize: 22,
            color: MUTED,
          }}
        >
          <div style={{ display: "flex" }}>{footer ?? "sillstack.com"}</div>
          <div style={{ display: "flex", color: MUTED }}>Orlando, FL</div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Schibsted", data: font("SchibstedGrotesk-ExtraBold.ttf"), style: "normal", weight: 800 },
        { name: "Inter", data: font("Inter-Regular.ttf"), style: "normal", weight: 400 },
        { name: "JetBrains", data: font("JetBrainsMono-Medium.ttf"), style: "normal", weight: 500 },
      ],
    },
  )
}
