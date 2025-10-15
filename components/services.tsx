"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Web Applications",
    description: "Full-stack web apps built with modern frameworks and AI-powered features.",
    features: ["React & Next.js", "Real-time Features", "API Integration", "Responsive Design"],
  },
  {
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    features: ["iOS & Android", "Cross-Platform", "Push Notifications", "Offline Support"],
  },
  {
    title: "AI Integration",
    description: "Embed intelligent features into your existing products with cutting-edge AI.",
    features: ["ChatGPT Integration", "Computer Vision", "Natural Language", "Predictive Analytics"],
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" ref={ref} className="relative py-20 md:py-32 bg-secondary/30 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-foreground/20 blur-3xl animate-glow-pulse"
        style={{ animationDelay: "0.5s" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Custom-built solutions designed specifically for your business challenges
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="group h-full border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                <h3 className="mb-3 text-2xl font-bold text-card-foreground">{service.title}</h3>
                <p className="mb-6 text-muted-foreground leading-relaxed">{service.description}</p>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <motion.div
                        className="h-1.5 w-1.5 rounded-full bg-primary"
                        whileHover={{ scale: 1.5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Button variant="ghost" className="group/btn text-primary hover:text-primary hover:bg-primary/10">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
