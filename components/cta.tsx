"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="bd bd-mesh overflow-hidden border-t border-border bg-background py-20 md:py-28">

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-balance font-display text-3xl font-extrabold leading-[1.06] tracking-[-0.04em] text-foreground sm:text-4xl md:text-6xl">
            Let&rsquo;s scope it on <span className="text-primary">one call.</span>
          </h2>

          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Thirty minutes. You&rsquo;ll leave with a number and a date, whether or not
            you end up working with us.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="group w-full bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90 sm:w-auto"
              asChild
            >
              <a href="#contact">
                Book a call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-border bg-transparent px-8 text-base font-semibold text-foreground hover:bg-secondary hover:text-foreground sm:w-auto"
              asChild
            >
              <a href="mailto:hello@sillstack.com">Email us instead</a>
            </Button>
          </div>

          <p className="mt-8 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
            If it&rsquo;s not a fit, we&rsquo;ll say so on that call
          </p>
        </div>
      </div>
    </section>
  );
}
