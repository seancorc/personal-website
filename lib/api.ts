import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  try {
    return fs.readdirSync(postsDirectory)
  } catch (error) {
    console.warn("Warning: '_posts' directory not found. Creating an empty directory.")
    fs.mkdirSync(postsDirectory, { recursive: true })
    return []
  }
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  let fileContents: string
  
  try {
    fileContents = fs.readFileSync(fullPath, 'utf8')
  } catch (error) {
    console.error(`Error reading file: ${fullPath}, ${error}`)
    return {}
  }

  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .filter((post) => Object.keys(post).length > 0) // Filter out empty posts
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

