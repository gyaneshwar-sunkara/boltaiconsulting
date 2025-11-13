"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/theme-provider";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export function Hero() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    if (particlesRef.current.length === 0) {
      particlesRef.current = Array.from({ length: 50 }, (_) => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.15 + 0.05,
      }));
    }

    const animate = () => {
      ctx.fillStyle =
        theme === "dark" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const particleColor = theme === "dark" ? "255, 255, 255" : "0, 0, 0";

      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${particleColor}, ${particle.opacity * 0.5})`;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${particle.opacity})`;
        ctx.fill();

        ctx.shadowBlur = 0;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [theme]);

  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-32">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div
        className="hidden md:block absolute top-1/4 left-1/4 h-[450px] w-[450px] rounded-full bg-foreground/35 blur-3xl animate-glow-pulse"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="hidden md:block absolute bottom-1/4 right-1/4 h-[450px] w-[450px] rounded-full bg-foreground/40 blur-3xl animate-glow-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="hidden md:block absolute top-1/2 right-1/3 h-80 w-80 rounded-full bg-foreground/35 blur-3xl animate-glow-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="container relative mx-auto px-6 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="mb-8 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: 0.5,
              }}
            >
              <Sparkles className="h-4 w-4" />
            </motion.div>
            <span>What takes weeks, we deliver in days, at a fraction of the cost.</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="mb-8 sm:mb-6 text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl text-balance"
          >
            <span className="block">Tech Solutions at</span>
            <motion.span
              className="relative font-bold block will-change-transform"
              style={{ backfaceVisibility: "hidden", perspective: 1000 }}
            >
              AI Speed
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/30 to-transparent pointer-events-none"
                animate={{
                  x: ["-120%", "220%"],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeOut",
                  delay: 0.8,
                }}
                style={{ willChange: "transform, opacity" }}
              />
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="mb-12 sm:mb-10 text-lg text-muted-foreground md:text-xl leading-relaxed text-balance px-4 sm:px-0"
          >
            We craft custom software solutions tailored to your unique business
            needs. No off-the-shelf products—just fast, affordable, and
            intelligent solutions built with cutting-edge AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center justify-center gap-6 sm:gap-4 sm:flex-row px-4 sm:px-0"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="group bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 w-full sm:w-auto"
              >
                Start Building
                <motion.div
                  className="ml-2 inline-block"
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1,
                  }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-border bg-transparent text-foreground hover:bg-secondary text-base px-8 w-full sm:w-auto"
              >
                View Our Work
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
