import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactFormInline } from "@/components/contact-form-inline"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to the engineers who would do the work. One business day to a reply, thirty minutes to a scope and a number.",
  alternates: { canonical: "/contact" },
}

/**
 * Built from different parts to the rest of the site — no grid backdrop, no
 * eyebrow chip, no four-stat strip — because a contact page is a form and the
 * two things somebody needs to know before filling it in.
 *
 * The form gets a full-width section of its own. It is a two-column component
 * internally, so putting it in a narrow column crushed it into a strip.
 */
const INCLUDE = [
  ["What is going wrong today", "The process, not the software you think you need."],
  ["What you have already tried", "The spreadsheet, the SaaS that nearly fitted, the developer who started it."],
  ["Which systems are involved", "POS, accounting, CRM, whatever a supplier emails you."],
  ["Any date that matters", "A season, an audit, a contract ending."],
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* ── the argument, kept short ───────────────────────── */}
      <section className="bd bd-spot pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
            <div>
              <h1 className="mb-6 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.042em] text-foreground sm:text-5xl md:text-6xl">
                Talk to the people who would do the work.
              </h1>

              <p className="mb-9 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                No account manager, and no qualifying call before the real one.
                Your first conversation is with an engineer who could scope the
                project, and it takes about thirty minutes.
              </p>

              <div className="border-l-2 border-primary pl-6">
                <p className="mb-2 font-display text-2xl font-extrabold tracking-[-0.03em] text-foreground">
                  One business day
                </p>
                <p className="max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
                  to a reply from a person. If your problem is obviously outside
                  what we do, that reply says so and points you somewhere better.
                </p>
              </div>
            </div>

            <div className="lg:pt-3">
              <p className="mb-5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
                Worth including
              </p>
              <dl className="divide-y divide-border border-y border-border">
                {INCLUDE.map(([t, b]) => (
                  <div key={t} className="py-4">
                    <dt className="font-display text-[0.98rem] font-bold tracking-[-0.015em] text-foreground">
                      {t}
                    </dt>
                    <dd className="mt-1 text-[0.9rem] leading-relaxed text-muted-foreground">
                      {b}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-[0.88rem] leading-relaxed text-muted-foreground">
                None of it is required. It just means the first reply is useful
                rather than three emails of clarification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── the form, full width ───────────────────────────── */}
      <section id="enquire" className="band-alt border-t border-border py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-5 text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.038em] text-foreground md:text-5xl">
              Send us a message.
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Describe how your business runs today and what part of it is
              causing the trouble. We&rsquo;ll come back within one business day.
            </p>
          </div>

          <ContactFormInline />
        </div>
      </section>

      {/* ── before you write ───────────────────────────────── */}
      <section className="border-t border-border py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
              Or read first
            </p>
            <h2 className="font-display text-2xl font-extrabold tracking-[-0.03em] text-foreground">
              Some of it is already answered.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["/faqs", "FAQs", "Pricing, timelines, code ownership, and when we are the wrong firm."],
              ["/engagements", "Engagements", "How a scope becomes a fixed number, and what each side commits to."],
              ["/work", "Work", "Five projects, each written up with the part that was genuinely hard."],
            ].map(([href, t, b]) => (
              <a
                key={href}
                href={href}
                className="group rounded-xl border border-border p-6 transition-colors hover:border-primary/50 hover:bg-secondary/40"
              >
                <p className="mb-2 flex items-center gap-1.5 font-display text-[1.02rem] font-bold tracking-[-0.02em] text-foreground">
                  {t}
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </p>
                <p className="text-[0.9rem] leading-relaxed text-muted-foreground">{b}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
