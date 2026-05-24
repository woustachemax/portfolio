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
    title: "Sinkronize",
    description:
      "Built a real-time collaboration platform enabling over 50 users to work on shared projects and communicate instantly, with secure backend and responsive design.",
    link: "https://github.com/woustachemax/sinkronize",
    tags: ["Next.js", "Express.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Socket.io", "Authentication"],
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
    <Card className="bg-stone-900/20 border border-stone-800/50 backdrop-blur-sm p-5 animate-pulse">
      <div className="h-4 bg-stone-700/40 rounded w-3/4 mb-3" />
      <div className="h-3 bg-stone-700/30 rounded w-full mb-2" />
      <div className="h-3 bg-stone-700/30 rounded w-5/6 mb-4" />
      <div className="h-3 bg-stone-700/20 rounded w-24" />
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
      <h2 className="text-4xl text-gray-500 font-bold mb-8">Mini Projects & Blog</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-2xl text-blue-200/70 font-semibold mb-4">Mini Projects</h3>
          <div className="space-y-4">
            {miniProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-stone-900/10 border border-stone-800/50 hover:border-stone-700 hover:scale-[1.01] transition-all duration-300 backdrop-blur-sm p-5"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-blue-100 font-semibold text-lg group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h4>
                    <div className="flex items-center gap-3">
                      <TechIcons skills={project.tags} colored={true} className="scale-75 origin-right" />
                      <ExternalLink className="w-4 h-4 text-gray-400 hover:text-blue-300 flex-shrink-0" />
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                </a>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl text-blue-200/70 font-semibold mb-4">Latest Blog Posts</h3>
          <div className="space-y-4">
            {loading ? (
              <>
                <BlogPostSkeleton />
                <BlogPostSkeleton />
                <BlogPostSkeleton />
              </>
            ) : blogPosts.length === 0 ? (
              <p className="text-gray-500 text-sm">No posts available right now.</p>
            ) : (
              blogPosts.map((post, index) => (
                <Card
                  key={index}
                  className="bg-stone-900/20 border border-stone-800/50 hover:border-stone-700 hover:scale-[1.01] transition-all duration-300 backdrop-blur-sm p-5"
                >
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-blue-100 font-semibold group-hover:text-blue-300 transition-colors">
                        {post.title}
                      </h4>
                      <ExternalLink className="w-4 h-4 text-gray-400 hover:text-blue-300 flex-shrink-0 ml-2" />
                    </div>
                    <p className="text-gray-400 text-sm mb-2 line-clamp-2">
                      {post.description}
                    </p>
                    {post.pubDate && (
                      <div className="flex items-center text-xs text-gray-500">
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
