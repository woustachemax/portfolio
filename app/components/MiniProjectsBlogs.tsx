"use client"

import { Card } from "@/components/ui/card"
import { ExternalLink, Calendar } from "lucide-react"

const miniProjects = [
  {
    title: "DevBackup",
    description: "Cross-platform bash tool to backup and restore dev environments across computers",
    link: "https://github.com/woustachemax/dev-backup",
    tags: ["Bash", "CLI", "Typescript"],
  },
  {
    title: "Sinkronize",
    description:
      "Built a real-time collaboration platform enabling over 50 users to work on shared projects and communicate instantly, with secure backend and responsive design.",
    link: "https://github.com/woustachemax/sinkronize",
    tags: ["Next.js", "Express.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Socket.io", "Authentication"],
  }
]
 
const blogPosts = [
   {
    title: "I Built a Dev Environment Backup Tool Nobody Uses",
    link: "https://blog.siddharththakkar.xyz/blog-6",
    pubDate: "2025-11-16",
    description: "How I created DevBackup to solve my own problems"
  },
  {
    title: "I Built an AI Intern That Actually Works (No, Really)",
    link: "https://blog.siddharththakkar.xyz/blog-5",
    pubDate: "2025-11-09",
    description: "How I developed QuackStack to be my best project yet"
  },
  {
    title: "Stop RESTing!",
    link: "https://blog.siddharththakkar.xyz/blog-4",
    pubDate: "2025-11-01",
    description: "Understood why tRPC says 'Move fast, break nothing!'"
  }
]

export default function MiniProjectsBlog() {

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  return (
    <section id="mini-projects-blog" className="my-16 max-w-6xl mx-auto px-4">
      <h2 className="text-4xl text-gray-500 font-bold mb-8">Mini Projects & Blog</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-2xl text-blue-200 font-semibold mb-4">Mini Projects</h3>
          <div className="space-y-4">
            {miniProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-black/50 border border-blue-950 hover:border-blue-400 hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm p-5"
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
                    <ExternalLink className="w-4 h-4 text-gray-400 hover:text-blue-300 flex-shrink-0 ml-2" />
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-blue-950/50 text-blue-200 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl text-blue-200 font-semibold mb-4">Latest Blog Posts</h3>
          <div className="space-y-4">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="bg-black/50 border border-blue-950 hover:border-blue-400 hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm p-5"
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
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    {formatDate(post.pubDate)}
                  </div>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}