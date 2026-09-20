import { getService, MODEL_LABEL } from "@/lib/services"
import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = "SillStack service"

export default function Image() {
  const s = getService("ai-integration")
  return ogCard({
    eyebrow: "Service",
    title: s?.name ?? "SillStack",
    footer: s ? MODEL_LABEL[s.model] : "sillstack.com",
  })
}
