import type { MetadataRoute } from "next"

/**
 * Answer-engine crawlers are named explicitly and allowed.
 *
 * Several of them (GPTBot, PerplexityBot, ClaudeBot, Google-Extended) are
 * blocked by default in a lot of boilerplate robots files. For a business that
 * wants to be cited by AI assistants, that is the exact opposite of useful.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
    ],
    sitemap: "https://sillstack.com/sitemap.xml",
    host: "https://sillstack.com",
  }
}
