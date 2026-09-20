/**
 * Structured data helpers.
 *
 * This is the single highest-leverage thing on the site for GEO. Retrieval
 * systems lean on schema hard because it removes ambiguity — it is a
 * machine-readable statement of what this business is and what it sells,
 * rather than prose a model has to interpret. It carries no prices, because
 * the site does not publish them and schema that contradicts the page is the
 * version an assistant would quote.
 */

const BASE = "https://sillstack.com"

export const ORG_ID = `${BASE}/#organization`
export const SITE_ID = `${BASE}/#website`

function Script({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // schema is ours and static; no user input reaches it
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/** Organization + WebSite. Rendered once, in the root layout. */
export function OrganizationSchema() {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["Organization", "ProfessionalService"],
            "@id": ORG_ID,
            name: "SillStack",
            legalName: "SillStack",
            url: BASE,
            logo: { "@type": "ImageObject", url: `${BASE}/mark-512.png`, width: 512, height: 512 },
            image: `${BASE}/og-image.png`,
            description:
              "SillStack is a software consulting studio in Orlando, Florida. We build web applications, mobile apps, AI integrations and search visibility programmes for businesses across the United States. Every engagement is fixed scope and fixed price, and most ship in four weeks.",
            slogan: "Tech Solutions at AI Speed",
            email: "hello@sillstack.com",
            telephone: "+1-407-796-2376",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Orlando",
              addressRegion: "FL",
              addressCountry: "US",
            },
            areaServed: { "@type": "Country", name: "United States" },
            knowsAbout: [
              "Web application development",
              "Mobile app development",
              "AI integration",
              "Generative Engine Optimization",
              "Search engine optimization",
              "POS integration",
              "Systems integration",
            ],
            makesOffer: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Application Development" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Integration" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Marketing & Search Visibility" } },
            ],
          },
          {
            "@type": "WebSite",
            "@id": SITE_ID,
            url: BASE,
            name: "SillStack",
            publisher: { "@id": ORG_ID },
            inLanguage: "en-US",
          },
        ],
      }}
    />
  )
}

/**
 * Service + its FAQs. Rendered on each service page.
 *
 * Deliberately carries no Offer or price. The site does not publish bands on
 * browsing surfaces, and structured data that contradicts the page is worse
 * than none — it is the version an assistant would quote.
 */
export function ServiceSchema({
  name, description, url, faqs,
}: {
  name: string
  description: string
  url: string
  faqs: { q: string; a: string }[]
}) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            name,
            description,
            url: `${BASE}${url}`,
            provider: { "@id": ORG_ID },
            areaServed: { "@type": "Country", name: "United States" },
          },
          {
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: BASE },
              { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` },
              { "@type": "ListItem", position: 3, name, item: `${BASE}${url}` },
            ],
          },
        ],
      }}
    />
  )
}

/**
 * A practice area. Typed as Service rather than Offer because a practice is a
 * discipline we hold rather than a package you buy; the purchasable shape is
 * the service pages these feed into.
 */
export function PracticeSchema({
  name, description, url, covers, faqs,
}: {
  name: string
  description: string
  url: string
  covers: string[]
  faqs: { q: string; a: string }[]
}) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            name,
            description,
            url: `${BASE}${url}`,
            serviceType: name,
            provider: { "@id": ORG_ID },
            areaServed: { "@type": "Country", name: "United States" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: `${name} capabilities`,
              itemListElement: covers.map((c) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: c },
              })),
            },
          },
          {
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: BASE },
              { "@type": "ListItem", position: 2, name: "Capabilities", item: `${BASE}/capabilities` },
              { "@type": "ListItem", position: 3, name, item: `${BASE}${url}` },
            ],
          },
        ],
      }}
    />
  )
}

/** An industry we serve, typed as the Service audience it applies to. */
export function IndustrySchema({
  name, description, url, services,
}: {
  name: string
  description: string
  url: string
  services: string[]
}) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            name: `Software development for ${name}`,
            description,
            url: `${BASE}${url}`,
            provider: { "@id": ORG_ID },
            areaServed: { "@type": "Country", name: "United States" },
            audience: { "@type": "BusinessAudience", name },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: `${name} services`,
              itemListElement: services.map((sv) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: sv },
              })),
            },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: BASE },
              { "@type": "ListItem", position: 2, name: "Industries", item: `${BASE}/industries` },
              { "@type": "ListItem", position: 3, name, item: `${BASE}${url}` },
            ],
          },
        ],
      }}
    />
  )
}

/** BlogPosting + breadcrumb. Rendered on each article. */
export function ArticleSchema({
  title, description, slug, date, tags, readTime,
}: {
  title: string
  description: string
  slug: string
  date: string
  tags: string[]
  readTime: string
}) {
  const url = `${BASE}/blog/${slug}`
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BlogPosting",
            headline: title,
            description,
            url,
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            datePublished: date,
            dateModified: date,
            author: { "@id": ORG_ID },
            publisher: { "@id": ORG_ID },
            keywords: tags.join(", "),
            timeRequired: readTime,
            image: `${BASE}/og-image.png`,
            inLanguage: "en-US",
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: BASE },
              { "@type": "ListItem", position: 2, name: "Insights", item: `${BASE}/blog` },
              { "@type": "ListItem", position: 3, name: title, item: url },
            ],
          },
        ],
      }}
    />
  )
}

/**
 * A written-up case study.
 *
 * These are the most quotable pages on the site — an answer engine asked
 * "who has built POS-connected ordering for multi-location restaurants"
 * wants exactly this — and they were the only page type shipping nothing but
 * the site-wide Organization block. Typed as Article because what is being
 * published is the write-up; `about` names the system it describes.
 */
export function CaseStudySchema({
  name, tagline, description, url, date, sector, stack,
}: {
  name: string
  tagline: string
  description: string
  url: string
  date: string
  sector: string
  stack: string[]
}) {
  const full = `${BASE}${url}`
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Article",
            headline: `${name} — ${tagline}`,
            description,
            url: full,
            mainEntityOfPage: { "@type": "WebPage", "@id": full },
            articleSection: "Case study",
            datePublished: date,
            author: { "@id": ORG_ID },
            publisher: { "@id": ORG_ID },
            inLanguage: "en-US",
            image: `${BASE}/og-image.png`,
            about: {
              "@type": "SoftwareApplication",
              name,
              applicationCategory: "BusinessApplication",
              description: tagline,
              author: { "@id": ORG_ID },
            },
            keywords: [sector, ...stack].join(", "),
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: BASE },
              { "@type": "ListItem", position: 2, name: "Case studies", item: `${BASE}/work` },
              { "@type": "ListItem", position: 3, name, item: full },
            ],
          },
        ],
      }}
    />
  )
}

/**
 * An index page: services, capabilities, industries, work, insights.
 *
 * An ItemList is the difference between a model having to infer the catalogue
 * from prose and being handed it. Cheap to emit, and these five pages are
 * where an assistant looks first when asked what a firm does.
 */
export function CollectionSchema({
  name, description, url, items,
}: {
  name: string
  description: string
  url: string
  items: { name: string; url: string; description?: string }[]
}) {
  const full = `${BASE}${url}`
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "CollectionPage",
            name,
            description,
            url: full,
            isPartOf: { "@id": SITE_ID },
            about: { "@id": ORG_ID },
            inLanguage: "en-US",
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: items.length,
              itemListOrder: "https://schema.org/ItemListUnordered",
              itemListElement: items.map((it, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: it.name,
                url: `${BASE}${it.url}`,
                ...(it.description ? { description: it.description } : {}),
              })),
            },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: BASE },
              { "@type": "ListItem", position: 2, name, item: full },
            ],
          },
        ],
      }}
    />
  )
}

/** Standalone FAQ schema for the FAQs page and homepage. */
export function FAQSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }}
    />
  )
}
