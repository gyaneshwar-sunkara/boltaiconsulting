"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { MessageSquare, Lightbulb, Code, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Discovery Call",
    description:
      "We start with a free consultation to understand your goals, challenges, and vision for the project.",
    duration: "30 minutes",
  },
  {
    icon: Lightbulb,
    title: "Strategy & Planning",
    description:
      "Our team designs a tailored solution with detailed scope, timeline, and cost breakdown.",
    duration: "24-48 hours",
  },
  {
    icon: Code,
    title: "AI-Powered Development",
    description:
      "Using cutting-edge AI tools, we build your solution 10x faster than traditional methods.",
    duration: "Days, not months",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We deploy your project and provide ongoing support to ensure everything runs smoothly.",
    duration: "Ongoing",
  },
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative py-16 md:py-24 bg-secondary/30 overflow-hidden"
    >
      <div
        className="absolute top-1/3 right-1/3 h-[300px] w-[300px] md:h-[600px] md:w-[600px] rounded-full bg-foreground/10 md:bg-foreground/20 blur-2xl md:blur-3xl animate-glow-pulse"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 h-[250px] w-[250px] md:h-[500px] md:w-[500px] rounded-full bg-foreground/15 md:bg-foreground/25 blur-2xl md:blur-3xl animate-glow-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            From idea to launch in four simple steps. Our streamlined process
            ensures quality delivery at lightning speed.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid gap-8 md:grid-cols-4 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="hidden md:flex absolute -top-8 left-1/2 -translate-x-1/2 h-16 w-16 items-center justify-center rounded-full bg-background border-4 border-primary/20 z-10">
                  <span className="text-xl font-bold text-primary">
                    {index + 1}
                  </span>
                </div>

                <motion.div whileHover={{ y: -4 }}>
                  <Card className="h-full border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                    <div className="mb-4 flex md:hidden h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-lg font-bold">{index + 1}</span>
                    </div>

                    <motion.div
                      className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
                      whileHover={{ rotate: 360, scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    >
                      <step.icon className="h-6 w-6" />
                    </motion.div>

                    <h3 className="mb-2 text-lg font-bold text-card-foreground min-h-[3.5rem] flex items-center">
                      {step.title}
                    </h3>

                    <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {step.duration}
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Card className="inline-block border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-6">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                Average project timeline:
              </span>{" "}
              Most projects are delivered in 1-4 weeks, compared to 2-6 months
              with traditional development.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
