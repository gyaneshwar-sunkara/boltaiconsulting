import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const PROOF = [
  ["4 weeks", "Average delivery"],
  ["Fixed price", "No surprise invoices"],
  ["Every Friday", "Working software"],
];

/**
 * Asymmetric and left-weighted rather than centred.
 *
 * A centred hero over generous whitespace is the default every SaaS template
 * ships with. This one runs the headline hard to the left at display scale and
 * hangs a metadata rail off the right, so the page opens with an edge instead
 * of a symmetrical block.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border pt-32 pb-0 md:pt-40">
      {/* The one ember glow on the site, kept because the home hero is the
          one place it reads as a brand moment rather than as decoration
          repeated behind every section. */}
      <div className="pointer-events-none absolute -left-40 -top-40 z-0 h-[640px] w-[860px] rounded-full bg-primary/15 blur-[130px]" aria-hidden="true" />

      {/* structural grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-70 [mask-image:radial-gradient(ellipse_80%_70%_at_20%_0%,#000_40%,transparent_100%)]" />

      <div className="container relative z-10 mx-auto px-6 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.45fr_1fr] lg:gap-16">
          {/* headline column */}
          <div className="pb-16 md:pb-24">
            <p className="ss-rise mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 py-1.5 pl-2 pr-4 backdrop-blur">
              <span className="rounded-full bg-primary px-2 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-primary-foreground">
                New
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
                GEO — get named by ChatGPT
              </span>
            </p>

            <h1
              className="ss-rise mb-8 text-balance font-display text-[2.75rem] font-extrabold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-[4.6rem]"
              style={{ animationDelay: "0.06s" }}
            >
              Ship your software in{" "}
              <span className="relative whitespace-nowrap text-primary">
                weeks,
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-[0.14em] w-full text-primary/45"
                >
                  <rect width="300" height="12" rx="6" fill="currentColor" />
                </svg>
              </span>{" "}
              not quarters.
            </h1>

            <p
              className="ss-rise mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
              style={{ animationDelay: "0.12s" }}
            >
              A software consulting studio in Orlando. Fixed scope, fixed price,
              and most engagements live in four weeks — because we build on a
              platform we already own.
            </p>

            <div
              className="ss-rise flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "0.18s" }}
            >
              <Button
                size="lg"
                className="group bg-primary px-8 text-base font-semibold text-primary-foreground transition-transform hover:bg-primary/90 hover:scale-[1.02]"
                asChild
              >
                <a href="#contact">
                  Start a project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border bg-transparent px-8 text-base font-semibold text-foreground hover:bg-secondary"
                asChild
              >
                <a href="/#engagements">How engagements work</a>
              </Button>
            </div>
          </div>

          {/* metadata rail — hangs off the right, full-bleed to the bottom edge */}
          <aside className="relative flex flex-col justify-end border-border lg:border-l lg:pl-12">
            <div className="grid gap-px overflow-hidden border-t border-border bg-border lg:border-t-0">
              {PROOF.map(([value, label]) => (
                <div key={label} className="bg-background px-1 py-6 lg:px-0">
                  <p className="font-display text-3xl font-extrabold tracking-[-0.035em] text-foreground lg:text-4xl">
                    {value}
                  </p>
                  <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/work/eshop-pos-ecommerce"
              className="group mb-12 mt-8 flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/60"
            >
              <div>
                <p className="mb-1.5 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-accent-foreground">
                  Latest work
                </p>
                <p className="font-display text-base font-bold leading-snug tracking-[-0.018em] text-card-foreground">
                  POS-connected ordering, four locations
                </p>
              </div>
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
