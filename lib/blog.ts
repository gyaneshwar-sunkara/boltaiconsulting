import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  category: string
  readTime: string
  featured: boolean
  /** Shorter <title> where the headline runs past ~50 chars. Falls back to title. */
  seoTitle?: string
  /** Shorter meta description where the card blurb runs past ~160. */
  seoDescription?: string
  /** Service slugs this post supports. Drives "related reading" both ways. */
  services: string[]
  /** Practice-area slugs this post supports. */
  practices: string[]
  content: string
}

export interface BlogPostMetadata {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  category: string
  readTime: string
  featured: boolean
  seoTitle?: string
  seoDescription?: string
  services: string[]
  practices: string[]
}

export function getAllPosts(): BlogPostMetadata[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author,
        tags: data.tags || [],
        category: data.category,
        readTime: data.readTime,
        featured: data.featured || false,
        seoTitle: data.seoTitle || undefined,
        seoDescription: data.seoDescription || undefined,
        services: data.services || [],
        practices: data.practices || [],
      }
    })

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Convert markdown to HTML
    const processedContent = await remark().use(html).process(content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author,
      tags: data.tags || [],
      category: data.category,
      readTime: data.readTime,
      featured: data.featured || false,
      seoTitle: data.seoTitle || undefined,
      seoDescription: data.seoDescription || undefined,
      services: data.services || [],
      practices: data.practices || [],
      content: contentHtml,
    }
  } catch (error) {
    return null
  }
}

export function getPostsByCategory(category: string): BlogPostMetadata[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => post.category === category)
}

export function getPostsByTag(tag: string): BlogPostMetadata[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => post.tags.includes(tag))
}

export function getFeaturedPosts(): BlogPostMetadata[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => post.featured)
}

export function getAllCategories(): string[] {
  const allPosts = getAllPosts()
  const categories = allPosts.map((post) => post.category)
  return Array.from(new Set(categories))
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts()
  const tags = allPosts.flatMap((post) => post.tags)
  return Array.from(new Set(tags))
}

/**
 * Posts that support a given service or practice area.
 *
 * The link is declared once, in each post's frontmatter, and read from both
 * directions: the service and practice pages list their related reading, and
 * each post points back at what it is evidence for. Same pattern as the
 * service/practice registries — one declaration, no chance of drift.
 */
export function postsForService(slug: string, limit = 3): BlogPostMetadata[] {
  return getAllPosts().filter((p) => p.services.includes(slug)).slice(0, limit)
}

export function postsForPractice(slug: string, limit = 3): BlogPostMetadata[] {
  return getAllPosts().filter((p) => p.practices.includes(slug)).slice(0, limit)
}
