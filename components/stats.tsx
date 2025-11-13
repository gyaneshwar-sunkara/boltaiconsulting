"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    value: "10x",
    label: "Faster Development",
    sublabel: "vs traditional methods",
  },
  { value: "70%", label: "Cost Reduction", sublabel: "on average projects" },
  { value: "24/7", label: "AI Assistance", sublabel: "always available" },
  { value: "100+", label: "Projects Delivered", sublabel: "and counting" },
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-20 border-y border-border/40 overflow-hidden"
    >
      <div
        className="absolute top-1/2 left-1/4 h-[150px] w-[150px] md:h-[300px] md:w-[300px] rounded-full bg-foreground/10 md:bg-foreground/20 blur-xl md:blur-3xl animate-glow-pulse"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-1/2 right-1/4 h-[150px] w-[150px] md:h-[300px] md:w-[300px] rounded-full bg-foreground/15 md:bg-foreground/25 blur-xl md:blur-3xl animate-glow-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="text-center"
            >
              <div className="mb-2 text-3xl sm:text-4xl font-bold text-primary md:text-5xl">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-foreground md:text-base">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground md:text-sm">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
