"use client"

import { Zap, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <Zap className="h-6 w-6 text-foreground" fill="currentColor" />
              <span className="text-xl font-bold text-foreground">BoltBit Consulting</span>
            </div>
            <p className="mb-4 max-w-md text-sm text-muted-foreground leading-relaxed">
              AI-powered tech studio building fast, affordable software solutions with cutting-edge technology.
            </p>
            <p className="text-xs text-muted-foreground">© 2025 BoltBit Consulting. All rights reserved.</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/#features" className="transition-colors hover:text-foreground">
                  Features
                </a>
              </li>
              <li>
                <a href="/#services" className="transition-colors hover:text-foreground">
                  Services
                </a>
              </li>
              <li>
                <a href="/projects" className="transition-colors hover:text-foreground">
                  Projects
                </a>
              </li>
              <li>
                <a href="/blog" className="transition-colors hover:text-foreground">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/faqs" className="transition-colors hover:text-foreground">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/#contact" className="transition-colors hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:contact@boltbitconsulting.com"
                  className="flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  contact@boltbitconsulting.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+14077962376"
                  className="flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4" />
                  +1 (407) 796-2376
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
