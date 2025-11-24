import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQ } from "@/components/faq"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQs - BoltAI Consulting",
  description:
    "Frequently asked questions about BoltAI Consulting. Learn about our AI-powered development process, pricing, timelines, and services.",
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <FAQ />
      <Footer />
    </main>
  )
}
