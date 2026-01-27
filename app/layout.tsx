import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "BoltBit Consulting - Tech Solutions at AI Speed",
  description:
    "Build fast, affordable software solutions with cutting-edge AI tools. BoltBit Consulting is your AI-powered tech studio for rapid development and innovation.",
  keywords: [
    "AI",
    "software development",
    "tech studio",
    "artificial intelligence",
    "fast development",
    "affordable software",
  ],
  authors: [{ name: "BoltBit Consulting" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "BoltBit Consulting - Tech Solutions at AI Speed",
    description:
      "Build fast, affordable software solutions with cutting-edge AI tools. BoltBit Consulting is your AI-powered tech studio for rapid development and innovation.",
    type: "website",
    url: "https://boltbitconsulting.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BoltBit Consulting - AI-Powered Tech Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BoltBit Consulting - Tech Solutions at AI Speed",
    description: "Build fast, affordable software solutions with cutting-edge AI tools.",
    images: ["/og-image.png"],
  },
  generator: "v0.app",
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
                const theme = localStorage.getItem('boltbit-theme') || 'dark';
                document.documentElement.classList.add(theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider defaultTheme="dark" storageKey="boltbit-theme">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
