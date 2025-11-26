"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Brain, Rocket, Shield, Code, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Delivery",
    description:
      "Ship products in days, not months. Our AI-powered workflow accelerates every stage of development.",
  },
  {
    icon: Brain,
    title: "AI-First Approach",
    description:
      "Leverage cutting-edge AI models to automate repetitive tasks and focus on innovation.",
  },
  {
    icon: Rocket,
    title: "Rapid Prototyping",
    description:
      "Transform ideas into working prototypes instantly. Iterate faster than ever before.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Built with security in mind. Your data and applications are protected at every layer.",
  },
  {
    icon: Code,
    title: "Clean, Scalable Code",
    description:
      "Production-ready code that follows best practices and scales with your business.",
  },
  {
    icon: Sparkles,
    title: "Intelligent Optimization",
    description:
      "AI continuously optimizes performance, user experience, and resource utilization.",
  },
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="features"
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden"
    >
      <div
        className="absolute top-1/4 right-1/4 h-[250px] w-[250px] md:h-[500px] md:w-[500px] rounded-full bg-foreground/15 md:bg-foreground/25 blur-2xl md:blur-3xl animate-glow-pulse"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 h-[200px] w-[200px] md:h-[400px] md:w-[400px] rounded-full bg-foreground/10 md:bg-foreground/20 blur-2xl md:blur-3xl animate-glow-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Why Choose BoltAI?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Experience the future of software development with our AI-powered
            platform
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="group relative overflow-hidden border-border bg-card p-4 md:p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 h-full">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative">
                  <motion.div
                    className="mb-4 inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
                    whileHover={{ rotate: 180, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <feature.icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
