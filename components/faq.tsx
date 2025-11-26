"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How is BoltAI different from traditional development agencies?",
    answer:
      "We leverage cutting-edge AI tools to accelerate development by 10x. This means we can deliver in days what traditional agencies take weeks or months to build, at a fraction of the cost. We're not just faster - we maintain the same quality standards while being significantly more affordable.",
  },
  {
    question: "What types of projects do you work on?",
    answer:
      "We specialize in web applications, mobile apps, and AI integrations. This includes custom dashboards, SaaS platforms, e-commerce sites, mobile apps (iOS/Android), chatbots, automation tools, and AI-powered features for existing products.",
  },
  {
    question: "How much does a typical project cost?",
    answer:
      "Our projects typically range from $5,000 to $50,000 depending on complexity. Thanks to our AI-powered workflow, we can offer rates 70% lower than traditional agencies while delivering faster. Contact us for a free quote tailored to your specific needs.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Most projects are delivered in 1-4 weeks, compared to 2-6 months with traditional development. Simple MVPs and prototypes can be ready in as little as 3-7 days. We'll provide an exact timeline during our discovery call based on your requirements.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes! We offer flexible support and maintenance packages to ensure your product runs smoothly. This includes bug fixes, feature updates, performance monitoring, and technical support. We're here for the long haul, not just the initial build.",
  },
  {
    question: "What AI tools and technologies do you use?",
    answer:
      "We use the latest AI models including GPT-4, Claude, and specialized tools for code generation, testing, and optimization. For development, we work with modern frameworks like React, Next.js, Node.js, Python, and cloud platforms like AWS and Vercel.",
  },
  {
    question: "Can you work with our existing codebase or team?",
    answer:
      "Absolutely! We can integrate with your existing team, work on legacy codebases, or build new features for existing products. We're flexible and can adapt to your workflow, whether you need us to lead the project or collaborate with your in-house developers.",
  },
  {
    question: "What if I'm not technical? Can you still help me?",
    answer:
      "Of course! We work with non-technical founders and business owners all the time. We'll guide you through every step, explain technical concepts in plain English, and help you make informed decisions about your product without any jargon.",
  },
]

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="faq"
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden"
    >
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[300px] w-[300px] md:h-[600px] md:w-[600px] rounded-full bg-foreground/15 md:bg-foreground/25 blur-2xl md:blur-3xl animate-glow-pulse"
        style={{ animationDelay: "0.5s" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Got questions? We've got answers. Here's everything you need to know
            about working with BoltAI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-border bg-card rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="text-base font-semibold text-card-foreground pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a
              href="/#contact"
              className="font-semibold text-primary hover:underline"
            >
              Get in touch
            </a>{" "}
            and we'll be happy to help.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
