"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Github, ExternalLink } from "lucide-react"

const projectsData = [
  {
  "title": "QuackStack",
  "date": "October 2025 - November 2025",
  "association": "Open Source Project",
  "description": "Built an intelligent CLI tool that indexes codebases using local AI embeddings, enabling conversational code exploration and universal context generation for all major AI coding assistants.",
  "details": [
    "Developed local embedding generation system for 100% private code analysis without external API calls.",
    "Implemented AST-based code parsing with intelligent function/class extraction across 16+ programming languages.",
    "Built interactive REPL with semantic search using cosine similarity and conversational AI responses.",
    "Created universal context generator supporting Cursor, Windsurf, Cline, Continue, and Aider simultaneously.",
    "Integrated multi-provider AI support (OpenAI, Claude, Gemini, DeepSeek, Mistral) with smart query routing.",
    "Designed watch mode with file monitoring and auto-regeneration for always-fresh codebase context.",
    "Architected PostgreSQL schema with efficient vector storage and project-level isolation for multi-project support."
  ],
  "skills": ["Node.js", "TypeScript", "Prisma ORM", "PostgreSQL", "AST Parsing", "Vector Embeddings", "Semantic Search", "OpenAI API", "Anthropic API", "Gemini API", "CLI Development"],
  "link": "https://github.com/woustachemax/quackstack",
  "live": "https://quackstack.siddharththakkar.xyz/"
},
  {
    "title": "Conv",
    "date": "July 2025 - August 2025", 
    "association": "Personal Project",
    "description": "Built a seamless playlist conversion tool that transfers music collections between Spotify, YouTube Music, and Apple Music with intelligent track matching and real-time sync capabilities.",
    "details": [
      "Developed advanced track matching algorithms using fuzzy string matching and similarity scoring for 85%+ accuracy.",
      "Integrated OAuth 2.0 authentication for secure access to Spotify, YouTube, and Apple Music APIs.",
      "Built real-time playlist synchronization with progress tracking and detailed conversion reports.",
      "Implemented smart duplicate detection and batch processing for large playlists (1000+ tracks).",
      "Created responsive UI with glassmorphism design and smooth animations for optimal user experience.",
      "Deployed scalable architecture handling 50+ concurrent conversions with efficient rate limiting."
    ],
    "skills": ["Next.js", "TypeScript", "OAuth 2.0", "Spotify API", "YouTube API", "Apple Music API", "Prisma ORM", "PostgreSQL", "Tailwind CSS", "Vercel"],
    "link": "https://github.com/woustachemax/conv",
    "live": "https://conv.siddharththakkar.xyz/"
  },
  {
    "title": "Episteme",
    "date": "July 2025",
    "association": "Personal Project",
    "description": "Built a full-stack AI-powered platform that generates and curates unbiased Wikipedia-style articles using GPT-4 and real-time web parsing, with automated fact-checking and editorial oversight.",
    "details": [
      "Engineered an AI-driven article generator using GPT-4 to produce topic-specific, fact-based content.",
      "Integrated real-time web scraping pipelines to enrich articles with current and reliable data sources.",
      "Developed a Python microservices backend for fact-checking, bias detection, and source verification.",
      "Implemented dual authentication (Google OAuth and credentials) with role-based access and rate limiting.",
      "Designed a community editing system with AI validation to preserve article integrity.",
      "Built the full-stack app with Next.js, Vercel AI SDK, Prisma ORM, and PostgreSQL, ensuring seamless integration with Python services."
    ],
    "skills": ["Next.js", "TypeScript", "Python", "GPT-4", "Web Scraping", "OAuth", "Prisma ORM", "PostgreSQL", "Vercel AI SDK", "Microservices", "Bias Detection", "AI Fact-Checking"],
    "link": "https://github.com/woustachemax/episteme",
    "live": "https://episteme.siddharththakkar.xyz/"
  },
  {
    title: "Watchman",
    date: "May 2025",
    association: "Personal Project",
    description:
      "Developed a full-stack uptime monitoring application with alert functionality, secure user authentication, and efficient data handling across multiple apps using Turborepo.",
    details: [
      "Implemented secure user authentication with Clerk for protected routes and data privacy",
      "Built modular frontend, backend, hub, and validator apps using Turborepo for efficient development",
      "Used Prisma ORM with PostgreSQL for robust uptime tick and validator data storage",
      "Designed a responsive monitoring dashboard using Next.js and Tailwind CSS",
    ],
    skills: ["Next.js", "Express.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Bun", "Turborepo", "Authentication"],
    link: "https://github.com/woustachemax/watchman"
  },
  {
    title: "Sinkronize",
    date: "March 2025 - April 2025",
    association: "Personal Project",
    description:
      "Built a real-time collaboration platform enabling over 50 users to work on shared projects and communicate instantly, with secure backend and responsive design.",
    details: [
      "Developed real-time chat functionality using Socket.io for seamless user communication",
      "Engineered backend with Express, Prisma, and bcrypt-based authentication for data security",
      "Designed a responsive, cross-platform UI using React and Tailwind CSS",
      "Optimized backend logic and frontend responsiveness for scalability and speed",
    ],
    skills: ["Next.js", "Express.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Socket.io", "Authentication"],
    link: "https://github.com/woustachemax/sinkronize"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="my-32 max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-gray-500">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <Accordion key={index} type="single" collapsible className="w-full">
            <AccordionItem value={`project-${index}`} className="border-none">
              <Card className="bg-black/50 border border-blue-950 hover:border-blue-400 hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm">
                <div className="px-6 pt-4">
                  <CardHeader className="p-0 w-full">
                    <CardTitle className="text-blue-100 text-lg font-semibold text-left">
                      {project.title}
                    </CardTitle>
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>{project.date}</span>
                      {project.association && <span className="ml-2">{project.association}</span>}
                    </div>
                  </CardHeader>
                  
                  <div className="mt-4 flex gap-6 pb-2">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-100 hover:text-blue-400 flex items-center gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        <span className="font-semibold">Github</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-100 hover:text-blue-400 flex items-center gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="font-semibold">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
                
                <AccordionTrigger className="px-6 pb-4 text-left w-full no-underline hover:no-underline">
                  <span className="text-sm font-semibold text-blue-100">View Details</span>
                </AccordionTrigger>
                
                <AccordionContent className="px-6 pb-4">
                  <CardContent className="p-0">
                    <p className="mb-4 text-blue-100 text-sm">{project.description}</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-400 mb-4">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="text-sm">{detail}</li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2 text-blue-100 text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, idx) => (
                          <span key={idx} className="text-xs bg-blue-950 text-blue-200 px-2 py-1 rounded hover:text-white transition-colors duration-200">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    

                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  )
}