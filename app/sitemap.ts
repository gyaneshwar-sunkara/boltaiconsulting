import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"
import { PRACTICES } from "@/lib/practices"
import { SERVICES } from "@/lib/services"
import { WORK } from "@/lib/work"
import { INDUSTRIES } from "@/lib/industries"

const BASE = "https://sillstack.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/capabilities`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/industries`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/engagements`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/careers`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/faqs`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/technologies`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ]

  const services: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const work: MetadataRoute.Sitemap = WORK.map((w) => ({
    url: `${BASE}/work/${w.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const industries: MetadataRoute.Sitemap = INDUSTRIES.map((i) => ({
    url: `${BASE}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const practices: MetadataRoute.Sitemap = PRACTICES.map((p) => ({
    url: `${BASE}/capabilities/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const posts: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: p.featured ? 0.7 : 0.6,
  }))

  return [...staticRoutes, ...services, ...industries, ...work, ...practices, ...posts]
}
