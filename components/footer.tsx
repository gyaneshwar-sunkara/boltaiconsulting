"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { SillStackLogo } from "@/components/logo"

import { SERVICES } from "@/lib/services"
import { PRACTICE_GROUPS, PRACTICES, getPractice } from "@/lib/practices"

const COMPANY = [
  { href: "/about", label: "About us" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/engagements", label: "Engagements" },
  { href: "/work/sill-platform", label: "The Sill platform" },
  { href: "/technologies", label: "Technologies" },
  { href: "/blog", label: "Insights" },
  { href: "/faqs", label: "FAQs" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-14 md:px-6">
        {/* A deep footer is the pattern at this depth: twelve services and
            twenty practice areas need a crawlable path that doesn't depend on
            hovering a nav menu. */}
        <div className="grid gap-10 md:grid-cols-4 lg:grid-cols-5">
          {/* Services sits under the brand line rather than in a column of its
              own. The brand block ran out of content a third of the way down;
              twelve services laid out two across fill that space and stop the
              row being lopsided. */}
          <div className="md:col-span-4 lg:col-span-2">
            <a href="/" className="inline-block text-foreground" aria-label="SillStack — home">
              <SillStackLogo className="text-[1.3rem]" />
            </a>
            <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
              We build custom software in four weeks for a fixed price. Most agencies
              quote three months.
            </p>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Tech Solutions at AI Speed
            </p>

            <h3 className="mb-4 mt-10 font-display text-sm font-bold text-foreground">
              Services
            </h3>
            {/* Four across while the block is full width at md, two across once
                it narrows to its own column at lg. Twelve divides evenly by
                both, so neither leaves a gap. */}
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-muted-foreground md:grid-cols-4 lg:grid-cols-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`/services/${s.slug}`}
                    className="transition-colors hover:text-foreground"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="mb-4 font-display text-sm font-bold text-foreground">
              Capabilities
            </h3>
            <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
              {PRACTICE_GROUPS.map((g) => (
                <div key={g.name}>
                  <p className="mb-2 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-primary">
                    {g.name}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {g.slugs.map((slug) => {
                      const p = getPractice(slug)
                      if (!p) return null
                      return (
                        <li key={slug}>
                          <a
                            href={`/capabilities/${slug}`}
                            className="transition-colors hover:text-foreground"
                          >
                            {p.name}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
            <a
              href="/capabilities"
              className="mt-5 inline-block font-mono text-[0.62rem] uppercase tracking-[0.14em] text-primary transition-opacity hover:opacity-70"
            >
              All {PRACTICES.length} practice areas &rarr;
            </a>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-bold text-foreground">Company</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {COMPANY.map((c) => (
                <li key={c.href}>
                  <a href={c.href} className="transition-colors hover:text-foreground">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:gap-7">
            <li>
              <a
                href="mailto:hello@sillstack.com"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                hello@sillstack.com
              </a>
            </li>
            <li>
              <a
                href="tel:+14077962376"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                +1 (407) 796-2376
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Orlando, Florida
            </li>
          </ul>
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} SillStack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
