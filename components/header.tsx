"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { SillStackLogo } from "@/components/logo";
import { PRACTICE_GROUPS, getPractice } from "@/lib/practices";
import { SERVICE_GROUPS, getService } from "@/lib/services";
import { INDUSTRIES } from "@/lib/industries";
import { WORK, STATUS_TONE } from "@/lib/work";

/**
 * Four dropdowns instead of nine flat links. Named "Company" rather than
 * "Resources" because Work and Contact are not resources — grouped inside so
 * the evidence pages read differently from the commercial ones.
 */
const COMPANY_GROUPS = [
  {
    name: "The firm",
    items: [
      { href: "/about", label: "About us", blurb: "How we are set up, and what we believe" },
      { href: "/careers", label: "Careers", blurb: "What we look for, when we are hiring" },
      { href: "/contact", label: "Contact", blurb: "Talk to the engineers who do the work" },
    ],
  },
  {
    name: "How we work",
    items: [
      { href: "/engagements", label: "Engagements", blurb: "How a scope becomes a fixed number" },
      { href: "/technologies", label: "Technologies", blurb: "What we build with, and what we would not" },
      { href: "/faqs", label: "FAQs", blurb: "Pricing, timelines and the awkward ones" },
      { href: "/blog", label: "Insights", blurb: "What we have written, by subject" },
    ],
  },
];

const linkClass =
  "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground";

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCapsOpen, setIsCapsOpen] = useState(false);
  const [isIndOpen, setIsIndOpen] = useState(false);
  const [isCaseOpen, setIsCaseOpen] = useState(false);
  const [isCoOpen, setIsCoOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    /* No JS-driven entrance here — the nav is the one thing that must never
       depend on hydration to be visible. */
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <a
          href="/"
          className="text-foreground transition-transform hover:scale-[1.02]"
          aria-label="SillStack — home"
        >
          <SillStackLogo className="text-[1.3rem]" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <a
              href="/services"
              className={`flex cursor-pointer items-center gap-1 ${linkClass}`}
            >
              Services
              <ChevronDown className="h-4 w-4" />
            </a>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.18 }}
                  className="fixed left-1/2 top-[4.25rem] w-[min(60rem,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-xl border border-border bg-popover/95 shadow-2xl backdrop-blur-xl"
                >
                  {/* Grouped by billing model, same as the services page: the
                      thing that disqualifies a buyer fastest goes first. */}
                  <div className="grid grid-cols-2 gap-x-6 gap-y-7 p-7 lg:grid-cols-5">
                    {SERVICE_GROUPS.map((g) => (
                      <div key={g.name}>
                        <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-primary">
                          {g.name}
                        </p>
                        <ul className="space-y-1">
                          {g.slugs.map((slug) => {
                            const s = getService(slug);
                            if (!s) return null;
                            return (
                              <li key={slug}>
                                <a
                                  href={`/services/${slug}`}
                                  className="-mx-2 block rounded-md px-2 py-1.5 text-[0.82rem] leading-snug text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                                >
                                  {s.name}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/services"
                    className="flex items-center justify-between border-t border-border bg-secondary/50 px-7 py-4 text-sm transition-colors hover:bg-secondary"
                  >
                    <span className="font-semibold text-foreground">
                      All twelve services
                    </span>
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                      How each one is scoped &rarr;
                    </span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Twenty practice areas will not fit a list, so this is a grouped
              panel: six families across, each linking into its own pages. */}
          <div
            className="relative"
            onMouseEnter={() => setIsCapsOpen(true)}
            onMouseLeave={() => setIsCapsOpen(false)}
          >
            <a
              href="/capabilities"
              className={`flex cursor-pointer items-center gap-1 ${linkClass}`}
            >
              Capabilities
              <ChevronDown className="h-4 w-4" />
            </a>

            <AnimatePresence>
              {isCapsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.18 }}
                  className="fixed left-1/2 top-[4.25rem] w-[min(68rem,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-xl border border-border bg-popover/95 shadow-2xl backdrop-blur-xl"
                >
                  <div className="grid grid-cols-3 gap-x-6 gap-y-7 p-7 lg:grid-cols-6">
                    {PRACTICE_GROUPS.map((g) => (
                      <div key={g.name}>
                        <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-primary">
                          {g.name}
                        </p>
                        <ul className="space-y-1">
                          {g.slugs.map((slug) => {
                            const p = getPractice(slug);
                            if (!p) return null;
                            return (
                              <li key={slug}>
                                <a
                                  href={`/capabilities/${slug}`}
                                  className="block rounded-md px-2 py-1.5 -mx-2 text-[0.82rem] leading-snug text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                                >
                                  {p.name}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/capabilities"
                    className="flex items-center justify-between border-t border-border bg-secondary/50 px-7 py-4 text-sm transition-colors hover:bg-secondary"
                  >
                    <span className="font-semibold text-foreground">
                      All twenty practice areas
                    </span>
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                      What each one covers &rarr;
                    </span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Twelve sectors, two columns. Short enough not to need grouping. */}
          <div
            className="relative"
            onMouseEnter={() => setIsIndOpen(true)}
            onMouseLeave={() => setIsIndOpen(false)}
          >
            <a
              href="/industries"
              className={`flex cursor-pointer items-center gap-1 ${linkClass}`}
            >
              Industries
              <ChevronDown className="h-4 w-4" />
            </a>

            <AnimatePresence>
              {isIndOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.18 }}
                  className="fixed left-1/2 top-[4.25rem] w-[min(44rem,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-xl border border-border bg-popover/95 shadow-2xl backdrop-blur-xl"
                >
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-0.5 p-6">
                    {INDUSTRIES.map((ind) => (
                      <li key={ind.slug}>
                        <a
                          href={`/industries/${ind.slug}`}
                          className="-mx-2 flex items-start gap-3 rounded-md px-2 py-2 transition-colors hover:bg-accent"
                        >
                          <ind.icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                          <span className="block text-[0.82rem] leading-snug text-muted-foreground">
                            {ind.name}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/industries"
                    className="flex items-center justify-between border-t border-border bg-secondary/50 px-6 py-4 text-sm transition-colors hover:bg-secondary"
                  >
                    <span className="font-semibold text-foreground">
                      All twelve industries
                    </span>
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                      What each one needs &rarr;
                    </span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Proof, surfaced rather than buried two hovers deep. */}
          <div
            className="relative"
            onMouseEnter={() => setIsCaseOpen(true)}
            onMouseLeave={() => setIsCaseOpen(false)}
          >
            <a
              href="/work"
              className={`flex cursor-pointer items-center gap-1 ${linkClass}`}
            >
              Case Studies
              <ChevronDown className="h-4 w-4" />
            </a>

            <AnimatePresence>
              {isCaseOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.18 }}
                  className="fixed left-1/2 top-[4.25rem] w-[min(34rem,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-xl border border-border bg-popover/95 shadow-2xl backdrop-blur-xl"
                >
                  <ul className="p-3">
                    {WORK.map((w) => (
                      <li key={w.slug}>
                        <a
                          href={`/work/${w.slug}`}
                          className="flex items-start gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-accent"
                        >
                          <w.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="min-w-0 flex-1">
                            <span className="flex items-center gap-2 text-[0.88rem] font-semibold text-foreground">
                              {w.name}
                              <span
                                className={`rounded px-1.5 py-0.5 font-mono text-[0.5rem] uppercase tracking-[0.1em] ${STATUS_TONE[w.status]}`}
                              >
                                {w.status}
                              </span>
                            </span>
                            <span className="block text-[0.76rem] leading-snug text-muted-foreground">
                              {w.tagline}
                            </span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/work"
                    className="flex items-center justify-between border-t border-border bg-secondary/50 px-6 py-3.5 text-sm transition-colors hover:bg-secondary"
                  >
                    <span className="font-semibold text-foreground">All case studies</span>
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                      The hard part, written up &rarr;
                    </span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIsCoOpen(true)}
            onMouseLeave={() => setIsCoOpen(false)}
          >
            <a
              href="/about"
              className={`flex cursor-pointer items-center gap-1 ${linkClass}`}
            >
              Company
              <ChevronDown className="h-4 w-4" />
            </a>

            <AnimatePresence>
              {isCoOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.18 }}
                  className="fixed left-1/2 top-[4.25rem] w-[min(40rem,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-xl border border-border bg-popover/95 shadow-2xl backdrop-blur-xl"
                >
                  <div className="grid gap-x-6 gap-y-7 p-6 sm:grid-cols-2">
                    {COMPANY_GROUPS.map((g) => (
                      <div key={g.name}>
                        <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-primary">
                          {g.name}
                        </p>
                        <ul className="space-y-0.5">
                          {g.items.map((it) => (
                            <li key={it.href}>
                              <a
                                href={it.href}
                                className="-mx-2 block rounded-md px-2 py-2 transition-colors hover:bg-accent"
                              >
                                <span className="block text-[0.88rem] font-semibold leading-snug text-foreground">
                                  {it.label}
                                </span>
                                <span className="block text-[0.75rem] leading-snug text-muted-foreground">
                                  {it.blurb}
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <ThemeToggle />
          <Button
            className="hidden bg-primary px-4 text-sm font-semibold text-primary-foreground transition-transform hover:bg-primary/90 hover:scale-[1.02] sm:inline-flex"
            asChild
          >
            <a href="/contact">Book a call</a>
          </Button>

          {/* Without this, a phone gets the logo and nothing else — none of
              the services, capabilities or work is reachable at all. */}
          <button
            type="button"
            onClick={() => setIsMobileOpen((v) => !v)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-nav"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-secondary md:hidden"
          >
            {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* ── mobile navigation ──────────────────────────────── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <div className="max-h-[calc(100dvh-4.25rem)] overflow-y-auto overscroll-contain px-4 pb-8 pt-5">
              <a
                href="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="mb-6 flex w-full items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground sm:hidden"
              >
                Book a call
              </a>

              <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-primary">
                Services
              </p>
              <div className="mb-7 space-y-5">
                {SERVICE_GROUPS.map((g) => (
                  <div key={g.name}>
                    <p className="mb-2 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted-foreground">
                      {g.name}
                    </p>
                    <ul className="space-y-0.5">
                      {g.slugs.map((slug) => {
                        const svc = getService(slug);
                        if (!svc) return null;
                        return (
                          <li key={slug}>
                            <a
                              href={`/services/${slug}`}
                              onClick={() => setIsMobileOpen(false)}
                              className="-mx-2 block rounded-md px-2 py-2 text-[0.92rem] text-foreground transition-colors hover:bg-accent"
                            >
                              {svc.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
                <a
                  href="/services"
                  onClick={() => setIsMobileOpen(false)}
                  className="inline-block font-mono text-[0.62rem] uppercase tracking-[0.14em] text-primary"
                >
                  All twelve services &rarr;
                </a>
              </div>

              <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-primary">
                Capabilities
              </p>
              <div className="mb-7 space-y-5">
                {PRACTICE_GROUPS.map((g) => (
                  <div key={g.name}>
                    <p className="mb-2 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted-foreground">
                      {g.name}
                    </p>
                    <ul className="space-y-0.5">
                      {g.slugs.map((slug) => {
                        const pr = getPractice(slug);
                        if (!pr) return null;
                        return (
                          <li key={slug}>
                            <a
                              href={`/capabilities/${slug}`}
                              onClick={() => setIsMobileOpen(false)}
                              className="-mx-2 block rounded-md px-2 py-2 text-[0.92rem] text-foreground transition-colors hover:bg-accent"
                            >
                              {pr.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
                <a
                  href="/capabilities"
                  onClick={() => setIsMobileOpen(false)}
                  className="inline-block font-mono text-[0.62rem] uppercase tracking-[0.14em] text-primary"
                >
                  All twenty practice areas &rarr;
                </a>
              </div>

              <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-primary">
                Industries
              </p>
              <ul className="mb-7 space-y-0.5">
                {INDUSTRIES.map((ind) => (
                  <li key={ind.slug}>
                    <a
                      href={`/industries/${ind.slug}`}
                      onClick={() => setIsMobileOpen(false)}
                      className="-mx-2 flex items-center gap-3 rounded-md px-2 py-2 text-[0.92rem] text-foreground transition-colors hover:bg-accent"
                    >
                      <ind.icon className="h-3.5 w-3.5 shrink-0 text-primary" />
                      {ind.name}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-primary">
                Case Studies
              </p>
              <ul className="mb-7 space-y-0.5">
                {WORK.map((w) => (
                  <li key={w.slug}>
                    <a
                      href={`/work/${w.slug}`}
                      onClick={() => setIsMobileOpen(false)}
                      className="-mx-2 flex items-center gap-3 rounded-md px-2 py-2 text-[0.92rem] text-foreground transition-colors hover:bg-accent"
                    >
                      <w.icon className="h-3.5 w-3.5 shrink-0 text-primary" />
                      {w.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/work"
                    onClick={() => setIsMobileOpen(false)}
                    className="-mx-2 mt-1 block rounded-md px-2 py-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-primary"
                  >
                    All case studies &rarr;
                  </a>
                </li>
              </ul>

              <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-primary">
                Company
              </p>
              <div className="space-y-5 border-t border-border pt-3">
                {COMPANY_GROUPS.map((g) => (
                  <div key={g.name}>
                    <p className="mb-2 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted-foreground">
                      {g.name}
                    </p>
                    <ul className="space-y-0.5">
                      {g.items.map((it) => (
                        <li key={it.href}>
                          <a
                            href={it.href}
                            onClick={() => setIsMobileOpen(false)}
                            className="-mx-2 block rounded-md px-2 py-2 text-[0.95rem] font-medium text-foreground transition-colors hover:bg-accent"
                          >
                            {it.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
