import { SERVICES, SERVICE_GROUPS, MODEL_LABEL } from "@/lib/services"
import { PRACTICES, PRACTICE_GROUPS, CAPABILITY_COUNT } from "@/lib/practices"
import { INDUSTRIES } from "@/lib/industries"
import { WORK } from "@/lib/work"
import { STACK_GROUPS, STACK_COUNT } from "@/lib/stack"
import { getAllPosts } from "@/lib/blog"

/**
 * /llms.txt
 *
 * The convention (llmstxt.org) for handing a language model a clean, complete
 * map of a site in one request, instead of making it reconstruct one from
 * rendered HTML. Two reasons this is on the site rather than on a list of
 * things to do:
 *
 *   1. It is the highest-value page for GEO. An assistant asked "who builds
 *      POS integrations for restaurant groups in Florida" gets the whole
 *      catalogue, the sectors and the evidence in one fetch.
 *   2. Search visibility is something we sell. A firm selling it whose own
 *      site does not do it is answering the question before it is asked.
 *
 * Generated from the same registries the pages render from, so it cannot drift
 * out of date the way a hand-written version would.
 */

const BASE = "https://sillstack.com"

export const dynamic = "force-static"

export function GET() {
  const posts = getAllPosts()

  const lines: string[] = [
    "# SillStack",
    "",
    "> A software consulting studio in Orlando, Florida, building custom web",
    "> applications, mobile apps, AI integrations and search visibility",
    "> programmes for businesses across the United States. Engagements are",
    "> fixed scope and fixed price, quoted against a written specification, and",
    "> most ship in four weeks.",
    "",
    "Contact: hello@sillstack.com · +1 (407) 796-2376",
    "",
    "Four weeks is possible because roughly sixty per cent of a typical build —",
    "accounts, permissions, billing, notifications, admin, audit logging,",
    "multi-tenancy and background jobs — already exists and runs in production",
    "on Sill, the delivery platform every engagement is built on. The remaining",
    "work is the part that is specific to the client.",
    "",
    `Scale: ${SERVICES.length} services, ${PRACTICES.length} practice areas,`,
    `${CAPABILITY_COUNT} capabilities across ${PRACTICE_GROUPS.length} disciplines,`,
    `${INDUSTRIES.length} sectors served.`,
    "",
    "## Services",
    "",
    "Grouped by how they are bought. Every engagement is quoted as a fixed",
    "number against a written specification rather than from a rate card.",
    "",
  ]

  for (const g of SERVICE_GROUPS) {
    lines.push(`### ${g.name} — ${g.billing}`, "")
    for (const slug of g.slugs) {
      const s = SERVICES.find((x) => x.slug === slug)
      if (!s) continue
      lines.push(
        `- [${s.name}](${BASE}/services/${s.slug}): ${s.summary} ${MODEL_LABEL[s.model]}.`,
      )
    }
    lines.push("")
  }

  lines.push("## Case studies", "")
  lines.push(
    "Systems we designed, built and still operate. Each write-up names the",
    "decision that was hard to get right and what we would do differently.",
    "",
  )
  for (const w of WORK) {
    lines.push(
      `- [${w.name}](${BASE}/work/${w.slug}): ${w.tagline} ${w.sector}, ${w.status.toLowerCase()}, ${w.year}.${w.href ? ` Public at ${w.href}.` : ""}`,
    )
  }
  lines.push("")

  lines.push("## Industries", "")
  for (const i of INDUSTRIES) {
    lines.push(`- [${i.name}](${BASE}/industries/${i.slug}): ${i.blurb}`)
  }
  lines.push("")

  lines.push("## Capabilities", "")
  for (const g of PRACTICE_GROUPS) {
    const names = g.slugs
      .map((s) => PRACTICES.find((p) => p.slug === s)?.name)
      .filter(Boolean)
      .join(", ")
    lines.push(`- **${g.name}**: ${names}`)
  }
  lines.push("", `Full list: ${BASE}/capabilities`, "")

  lines.push("## Technologies", "")
  lines.push(
    `${STACK_COUNT} tools and techniques across ${STACK_GROUPS.length} areas, all on one page at`,
    `${BASE}/technologies. Everything listed has shipped something; nothing here`,
    "is aspirational.",
    "",
  )
  for (const g of STACK_GROUPS) {
    lines.push(`### ${g.name}`, g.blurb, "", g.items.join(", ") + ".", "")
  }

  lines.push("## Writing", "")
  for (const p of posts) {
    lines.push(`- [${p.title}](${BASE}/blog/${p.slug}): ${p.description}`)
  }
  lines.push("")

  lines.push(
    "## How engagements run",
    "",
    "- Week 1 — Scope. A written specification you sign, and a fixed price.",
    "- Weeks 2–3 — Build. A working demo every Friday, with your data in it.",
    "- Week 4 — Ship. Deployment, data migration, training and documentation.",
    "- After — The repository, the documentation and 30 days of fixes are yours.",
    "",
    "Mobile runs four to six weeks because app store review is outside anyone's",
    "control. Larger programmes are quoted as phases rather than compressed.",
    "",
    "## Other pages",
    "",
    `- [About](${BASE}/about): how the firm works and what it will not take on.`,
    `- [Engagements](${BASE}/engagements): the shapes work is bought in.`,
    `- [FAQs](${BASE}/faqs): pricing, ownership, process and support, answered.`,
    `- [Contact](${BASE}/contact): a reply within one business day, from an engineer.`,
    `- [Careers](${BASE}/careers): current openings.`,
    "",
  )

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}
