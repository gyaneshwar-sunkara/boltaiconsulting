import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PracticePage } from "@/components/practice-page"
import { PRACTICES, getPractice } from "@/lib/practices"

/* Next 15 made `params` a promise, so both functions await it before reading. */

export async function generateStaticParams() {
  return PRACTICES.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const p = getPractice(slug)
  if (!p) return { title: "Not found" }

  return {
    title: p.name,
    description: p.metaDescription,
    alternates: { canonical: `/capabilities/${p.slug}` },
    openGraph: {
      title: `${p.name} · SillStack`,
      description: p.metaDescription,
      url: `/capabilities/${p.slug}`,
      type: "website",
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const p = getPractice(slug)
  if (!p) notFound()

  return <PracticePage p={p} />
}
