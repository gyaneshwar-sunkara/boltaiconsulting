"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Code2, Layers, Wrench, Zap } from "lucide-react"

export function TechFlexibility() {
  const benefits = [
    {
      icon: Layers,
      title: "Your Stack, Your Way",
      description: "Already have a tech stack? We seamlessly integrate with your existing infrastructure and tools.",
    },
    {
      icon: Code2,
      title: "Technology Agnostic",
      description: "We don't force you into our preferred stack. We work with what's best for your project.",
    },
    {
      icon: Wrench,
      title: "Zero Migration Friction",
      description: "No need to rebuild everything. We extend and enhance your current systems.",
    },
    {
      icon: Zap,
      title: "Expert Recommendations",
      description: "Need guidance? We'll recommend the optimal tech stack based on your specific requirements.",
    },
  ]

  return (
    <section className="py-16 md:py-24 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
            <Layers className="h-4 w-4" />
            <span>Our Superpower</span>
          </div>
          <h2 className="mb-6 text-3xl sm:text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            We Adapt to Your Existing Infrastructure
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Unlike other agencies that force you into their preferred stack, we build solutions that work with <span className="font-semibold text-foreground">your</span> technology choices. Whether you're on AWS or Azure, React or Angular, Python or Node.js - we adapt to you.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all h-full">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <Card className="p-8 md:p-12 border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="mb-3 text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
                  No Tech Stack Lock-In
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe your business needs should drive technology decisions - not the other way around. That's why we're proficient in dozens of technologies and frameworks, giving you complete freedom to choose what works best for your team and product.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-end md:max-w-md">
                {["React", "Vue", "Angular", "Next.js", "Python", "Node.js", "Go", ".NET", "AWS", "Azure", "GCP"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
                <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
                  +50 more
                </span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
