"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl"
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <motion.a
          href="/"
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 3,
              }}
            >
              <Zap className="h-6 w-6 text-foreground" fill="currentColor" />
            </motion.div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              BoltBit Consulting
            </span>
          </div>
        </motion.a>

        <div className="hidden items-center gap-8 md:flex">
          <motion.a
            href="/#features"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ scale: 1.05, color: "var(--color-foreground)" }}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </motion.a>

          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <motion.a
              href="/services"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ scale: 1.05, color: "var(--color-foreground)" }}
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
            >
              Services
              <ChevronDown className="h-4 w-4" />
            </motion.a>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-lg border border-border bg-background/95 backdrop-blur-xl shadow-lg"
                >
                  <div className="p-2">
                    <a
                      href="/services/web-applications"
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                    >
                      Web Applications
                    </a>
                    <a
                      href="/services/mobile-solutions"
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                    >
                      Mobile Solutions
                    </a>
                    <a
                      href="/services/ai-integration"
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                    >
                      AI Integration
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.a
            href="/#how-it-works"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ scale: 1.05, color: "var(--color-foreground)" }}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            How It Works
          </motion.a>
          <motion.a
            href="/projects"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            whileHover={{ scale: 1.05, color: "var(--color-foreground)" }}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Projects
          </motion.a>
          <motion.a
            href="/blog"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            whileHover={{ scale: 1.05, color: "var(--color-foreground)" }}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Blogs
          </motion.a>
          <motion.a
            href="/faqs"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            whileHover={{ scale: 1.05, color: "var(--color-foreground)" }}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQs
          </motion.a>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-4"
              asChild
            >
              <a href="/#contact">Get in Touch</a>
            </Button>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
}
