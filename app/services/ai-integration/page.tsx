import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactFormInline } from "@/components/contact-form-inline"
import { ArrowRight, Check, Brain, MessageSquare, Eye, TrendingUp, Sparkles, Bot } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Integration - BoltAI Consulting",
  description:
    "Embed intelligent features into your products with GPT-4, Claude, computer vision, NLP, and predictive analytics.",
}

export default function AIIntegrationPage() {
  const features = [
    {
      icon: MessageSquare,
      title: "ChatGPT Integration",
      description: "Conversational AI powered by GPT-4 and Claude for intelligent interactions.",
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Image recognition, object detection, and visual AI capabilities.",
    },
    {
      icon: Brain,
      title: "Natural Language Processing",
      description: "Text analysis, sentiment detection, and language understanding.",
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Machine learning models for forecasting and data-driven insights.",
    },
    {
      icon: Bot,
      title: "Intelligent Automation",
      description: "AI-powered workflows and automated decision-making systems.",
    },
    {
      icon: Sparkles,
      title: "Custom AI Models",
      description: "Fine-tuned models trained on your specific data and use cases.",
    },
  ]

  const benefits = [
    "ChatGPT and Claude API integration",
    "Custom chatbots and virtual assistants",
    "Document processing and summarization",
    "Image and video analysis",
    "Recommendation engines",
    "Fraud detection and anomaly detection",
    "Natural language search",
    "AI-powered content generation",
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
              <Brain className="h-4 w-4" />
              <span>AI Integration</span>
            </div>

            <h1 className="mb-6 text-4xl sm:text-5xl font-bold tracking-tight text-foreground md:text-6xl">
              Supercharge Your Product with AI
            </h1>

            <p className="mb-8 text-lg text-muted-foreground leading-relaxed md:text-xl">
              Embed cutting-edge AI capabilities into your existing products or build new AI-powered features from scratch.
              From ChatGPT integration to custom machine learning models, we make AI accessible and practical.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="/#contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/#how-it-works">How It Works</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              AI Capabilities We Offer
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Powerful AI features to transform your business
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 border-border bg-card hover:border-primary/50 transition-all">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                AI Solutions We Deliver
              </h2>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                We integrate AI seamlessly into your products, making complex technology simple and effective.
              </p>

              <div className="grid gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 border-border bg-card">
              <h3 className="mb-4 text-2xl font-bold text-card-foreground">
                Flexible AI Tech Stack
              </h3>
              <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                We integrate AI using your preferred tools and frameworks or recommend the best solution for your use case. Here are some of the AI technologies we work with:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">LLM & Generative AI</h4>
                  <p className="text-sm text-muted-foreground">
                    OpenAI (GPT-4, DALL-E), Anthropic Claude, Google Gemini, Meta Llama, LangChain, Vector databases
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Machine Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    TensorFlow, PyTorch, Scikit-learn, Keras, XGBoost, Hugging Face
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Computer Vision & NLP</h4>
                  <p className="text-sm text-muted-foreground">
                    OpenCV, YOLO, Vision Transformers, spaCy, NLTK, Transformers
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Cloud & Infrastructure</h4>
                  <p className="text-sm text-muted-foreground">
                    AWS SageMaker, Azure AI, Google Cloud AI, Pinecone, Weaviate, Chroma
                  </p>
                </div>
              </div>
              <div className="mt-6 p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 shadow-lg">
                <h5 className="text-base font-bold text-foreground mb-2">
                  Your Tech Stack, Not Ours
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Working with a different AI platform or building custom models? We seamlessly integrate with your existing AI ecosystem, data infrastructure, and compliance requirements.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Ready to Integrate AI into Your Product?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Transform your business with intelligent features that deliver real value to your users.
            </p>
          </div>
          <ContactFormInline />
        </div>
      </section>

      <Footer />
    </main>
  )
}
