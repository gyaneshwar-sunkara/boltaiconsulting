import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollProgress } from "@/components/scroll-progress"
import { OrganizationSchema } from "@/components/json-ld"
import "./globals.css"

/* Display — headlines, the wordmark, section titles. */
const schibsted = localFont({
  variable: "--font-schibsted",
  display: "swap",
  src: [
    { path: "./fonts/SchibstedGrotesk-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/SchibstedGrotesk-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/SchibstedGrotesk-ExtraBold.woff2", weight: "800", style: "normal" },
  ],
})

/* Body and UI — everything people actually read. */
const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: [
    { path: "./fonts/Inter-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Inter-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Inter-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Inter-Bold.woff2", weight: "700", style: "normal" },
  ],
})

/* Data and labels — metrics, eyebrows, technical detail. */
const jetbrains = localFont({
  variable: "--font-jetbrains",
  display: "swap",
  src: [
    { path: "./fonts/JetBrainsMono-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/JetBrainsMono-Medium.woff2", weight: "500", style: "normal" },
  ],
})

const DESCRIPTION =
  "SillStack builds custom software in four weeks for a fixed price. Web applications, mobile apps, AI integration and search visibility for businesses across the US."

export const metadata: Metadata = {
  metadataBase: new URL("https://sillstack.com"),
  title: {
    default: "SillStack — Tech Solutions at AI Speed",
    template: "%s · SillStack",
  },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  keywords: [
    "software consulting",
    "custom software development",
    "web application development",
    "mobile app development",
    "AI integration",
    "SEO and GEO",
    "Orlando software company",
    "fixed price software",
  ],
  authors: [{ name: "SillStack" }],
  creator: "SillStack",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "SillStack — Tech Solutions at AI Speed",
    description: DESCRIPTION,
    type: "website",
    url: "https://sillstack.com",
    siteName: "SillStack",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SillStack — ship your software in weeks, not quarters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SillStack — Tech Solutions at AI Speed",
    description:
      "Custom software in four weeks for a fixed price. Most agencies quote three months.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('sillstack-theme') || 'dark';
                document.documentElement.classList.add(theme);
              } catch (e) {
                /* Private browsing and blocked site data throw here. Without
                   this the page falls back to :root, which is the light token
                   set — a white flash on a site whose default is dark. */
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
        {/* Scroll-reveal sections ship with an inline opacity:0 that only lifts
            once React hydrates. If JS never runs, show them anyway. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <OrganizationSchema />
      </head>
      <body
        className={`font-sans ${schibsted.variable} ${inter.variable} ${jetbrains.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="dark" storageKey="sillstack-theme">
          <ScrollProgress />
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
