"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, Phone, Clock, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ContactFormInlineProps {
  showHeader?: boolean
  customTitle?: string
  customDescription?: string
}

export function ContactFormInline({
  showHeader = false,
  customTitle = "Let's Work Together",
  customDescription = "Describe the problem in your own words. We'll come back within one business day."
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
          title: "Message sent",
          description: "An engineer will come back to you within one business day.",
        })
        form.reset()
      } else {
        toast({
          title: "That did not send",
          description:
            "Please try again, or email hello@sillstack.com directly and we will pick it up there.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "That did not send",
        description:
          "The form could not reach us. Email hello@sillstack.com and it will get to the same place.",
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
          <h2 className="mb-4 text-3xl md:text-4xl font-display font-extrabold tracking-[-0.035em] text-foreground">
            {customTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {customDescription}
          </p>
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
        <Card className="p-6 md:p-8 border-border bg-card h-full">
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
              <h3 className="mb-1 font-semibold text-card-foreground">
                Email
              </h3>
              <a
                href="mailto:hello@sillstack.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                hello@sillstack.com
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
              <h3 className="mb-1 font-semibold text-card-foreground">
                Phone
              </h3>
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
              <h3 className="mb-1 font-semibold text-card-foreground">
                Reply time
              </h3>
              <p className="text-muted-foreground">
                One business day, from an engineer
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-border bg-card">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="mb-1 font-semibold text-card-foreground">
                Based in
              </h3>
              <p className="text-muted-foreground">
                Orlando, Florida &middot; serving the United States
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-border bg-card bg-gradient-to-br from-primary/5 to-transparent">
          <h3 className="mb-3 text-lg font-semibold text-card-foreground">
            What happens next
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              A reply within one business day, from an engineer
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              A thirty-minute call, with no qualifying call before it
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              A written scope and a fixed number, if it fits
            </li>
          </ul>
        </Card>
      </div>
    </div>
    </div>
  )
}
