"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] md:h-[800px] md:w-[800px] rounded-full bg-foreground/15 md:bg-foreground/25 blur-2xl md:blur-3xl animate-glow-pulse"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] md:h-[600px] md:w-[600px] rounded-full bg-foreground/20 md:bg-foreground/35 blur-2xl md:blur-3xl animate-glow-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl sm:text-4xl font-bold tracking-tight text-foreground md:text-6xl text-balance">
            Let's Build Something Amazing Together
          </h2>

          <p className="mb-10 text-lg text-muted-foreground leading-relaxed md:text-xl">
            Join hundreds of companies already building the future with BoltBit Consulting.
            Get started today and experience the power of AI-driven development.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
              asChild
            >
              <a href="#contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border bg-transparent text-foreground hover:bg-secondary text-base px-8"
              asChild
            >
              <a href="#contact">
                Schedule a Call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
