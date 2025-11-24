"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, Phone, Clock, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ContactFormInlineProps {
  showHeader?: boolean
  customTitle?: string
  customDescription?: string
}

export function ContactFormInline({
  showHeader = false,
  customTitle = "Let's Work Together",
  customDescription = "Ready to start your project? Get in touch and let's discuss how we can help."
}: ContactFormInlineProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xeodvadg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you within 24 hours.",
        })
        form.reset()
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try emailing us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {showHeader && (
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {customTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {customDescription}
          </p>
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
        <Card className="p-6 md:p-8 border-border bg-card h-full">
          <h3 className="mb-6 text-xl md:text-2xl font-bold text-card-foreground">
            Send us a message
          </h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="w-full"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              className="w-full"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Company (Optional)
            </label>
            <Input
              id="company"
              name="company"
              type="text"
              placeholder="Your company name"
              className="w-full"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Project Details
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your project..."
              required
              rows={5}
              className="w-full resize-y"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </Card>

      <div className="space-y-6">
        <Card className="p-6 border-border bg-card">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h4 className="mb-1 font-semibold text-card-foreground">
                Email
              </h4>
              <a
                href="mailto:contact@boltaiconsulting.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                contact@boltaiconsulting.com
              </a>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-border bg-card">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h4 className="mb-1 font-semibold text-card-foreground">
                Phone
              </h4>
              <a
                href="tel:+14077962376"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +1 (407) 796-2376
              </a>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-border bg-card">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h4 className="mb-1 font-semibold text-card-foreground">
                Response Time
              </h4>
              <p className="text-muted-foreground">
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-border bg-card bg-gradient-to-br from-primary/5 to-transparent">
          <h4 className="mb-3 text-lg font-semibold text-card-foreground">
            What happens next?
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              We'll review your project details
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              Schedule a free consultation call
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              Receive a detailed proposal within 48 hours
            </li>
          </ul>
        </Card>
      </div>
    </div>
    </div>
  )
}
