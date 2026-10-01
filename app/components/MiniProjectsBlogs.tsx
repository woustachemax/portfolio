"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { ExternalLink, Calendar } from "lucide-react"
import TechIcons from "./TechIcons"

const miniProjects = [
  {
    title: "micrograd viz",
    description: "Ported Karpathy's micrograd engine to JS and built an interactive visualizer covering computation graphs, single neuron backprop, a full MLP with weight magnitude and sign on the edges, and a live training loop on concentric rings.",
    link: "https://woustachemax.github.io/micrograd-viz/",
    tags: ["JavaScript", "Python"],
  },
  {
    title: "DevBackup",
    description: "Cross-platform bash tool to backup and restore dev environments across computers",
    link: "https://github.com/woustachemax/dev-backup",
    tags: ["Bash", "Typescript"],
  },
  {
    title: "Conv",
    description:
      "A playlist conversion tool for Spotify, YouTube Music, and Apple Music, with an exact match mode using fuzzy track matching and a sign in free mode that finds an existing similar playlist on the target platform.",
    link: "https://conv.siddharththakkar.xyz/",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  },
]

interface BlogPost {
  title: string
  link: string
  pubDate: string | null
  description: string
}

function BlogPostSkeleton() {
  return (
    <Card className="bg-white dark:bg-stone-900/20 border border-stone-200 dark:border-stone-800/50 backdrop-blur-sm p-5 animate-pulse">
      <div className="h-4 bg-stone-200 dark:bg-stone-700/40 rounded w-3/4 mb-3" />
      <div className="h-3 bg-stone-200 dark:bg-stone-700/30 rounded w-full mb-2" />
      <div className="h-3 bg-stone-200 dark:bg-stone-700/30 rounded w-5/6 mb-4" />
      <div className="h-3 bg-stone-100 dark:bg-stone-700/20 rounded w-24" />
    </Card>
  )
}

export default function MiniProjectsBlog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/blog-feed")
      .then((r) => r.json())
      .then((data: BlogPost[]) => {
        setBlogPosts(Array.isArray(data) ? data : [])
      })
      .catch(() => setBlogPosts([]))
      .finally(() => setLoading(false))
  }, [])

  const formatDate = (dateString: string | null) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <section id="mini-projects-blog" className="my-16 max-w-6xl mx-auto px-4">
      <h2 className="text-4xl text-shine-section font-bold mb-8">Mini Projects & Blog</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-2xl text-stone-800 dark:text-white font-semibold mb-4">Mini Projects</h3>
          <div className="space-y-4">
            {miniProjects.map((project, index) => (
              <Card
                key={index}
                className="hover-glow bg-white dark:bg-stone-900/10 border border-stone-200 dark:border-stone-800/50 hover:border-stone-400 dark:hover:border-stone-700 hover:scale-[1.01] transition-all duration-300 backdrop-blur-sm p-5"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-stone-900 dark:text-white font-semibold text-lg group-hover:underline underline-offset-2 transition-colors">
                      {project.title}
                    </h4>
                    <div className="flex items-center gap-3">
                      <TechIcons skills={project.tags} colored={true} className="scale-75 origin-right" />
                      <ExternalLink className="w-4 h-4 text-stone-400 hover:text-black dark:text-gray-400 dark:hover:text-white flex-shrink-0" />
                    </div>
                  </div>
                  <p className="text-stone-600 dark:text-gray-400 text-sm mb-3">{project.description}</p>
                </a>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl text-stone-800 dark:text-white font-semibold mb-4">Latest Blog Posts</h3>
          <div className="space-y-4">
            {loading ? (
              <>
                <BlogPostSkeleton />
                <BlogPostSkeleton />
                <BlogPostSkeleton />
              </>
            ) : blogPosts.length === 0 ? (
              <p className="text-stone-500 dark:text-gray-500 text-sm">No posts available right now.</p>
            ) : (
              blogPosts.map((post, index) => (
                <Card
                  key={index}
                  className="hover-glow bg-white dark:bg-stone-900/20 border border-stone-200 dark:border-stone-800/50 hover:border-stone-400 dark:hover:border-stone-700 hover:scale-[1.01] transition-all duration-300 backdrop-blur-sm p-5"
                >
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-stone-900 dark:text-white font-semibold group-hover:underline underline-offset-2 transition-colors">
                        {post.title}
                      </h4>
                      <ExternalLink className="w-4 h-4 text-stone-400 hover:text-black dark:text-gray-400 dark:hover:text-white flex-shrink-0 ml-2" />
                    </div>
                    <p className="text-stone-600 dark:text-gray-400 text-sm mb-2 line-clamp-2">
                      {post.description}
                    </p>
                    {post.pubDate && (
                      <div className="flex items-center text-xs text-stone-500 dark:text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {formatDate(post.pubDate)}
                      </div>
                    )}
                  </a>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
