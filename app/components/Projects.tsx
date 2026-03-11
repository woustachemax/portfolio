"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Github, ExternalLink, YoutubeIcon } from "lucide-react"
import TechIcons from "./TechIcons"

const projectsData = [
  {
    "title": "GlitchCn/ui",
    "date": "November 2025 - December 2025",
    "association": "Open Source Project",
    "description": "Built a retro-futuristic React component library for Next.js featuring 15+ production-ready components with terminal-styled aesthetics, animated scanline effects, and cyberpunk design elements.",
    "details": [
      "Built and published open-source React component library with 15+ production-grade components and full TypeScript support; 50+ GitHub stars.",
      "Engineered custom shadcn/ui CLI registry with npm package support for individual or bulk component installs.",
      "Implemented animated scanline effects, glowing borders, and interactive states with clean TypeScript component APIs.",
      "Featured on YouTube tutorials and launched on Product Hunt; received community adoption across production applications.",
    ],
    "skills": ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Figma"],
    "link": "https://github.com/woustachemax/glitchcn-ui",
    "live": "https://glitchcn-ui.vercel.app/",
    "youtube": "https://youtu.be/15ZVQVlNR-o"
  },
  {
    "title": "QuackStack",
    "date": "October 2025 - November 2025",
    "association": "Open Source Project",
    "description": "Built an intelligent CLI tool that indexes codebases using local AI embeddings, enabling conversational code exploration and universal context generation for all major AI coding assistants.",
    "details": [
      "Built and published npm package with TypeScript CLI interface; 3K+ downloads, zero-config setup, incremental re-indexing, and watch mode for always-fresh context.",
      "Engineered 100% local vector embedding pipeline across 15+ languages using AST-based parsing with 87%+ retrieval relevance, with no external API calls for embeddings.",
      "Architected extensible provider abstraction supporting 6 LLM backends (OpenAI, Claude, Gemini, DeepSeek, Grok, Mistral) behind a unified interface with latency monitoring.",
      "Integrated git history enrichment into the index; surfaces commit authorship, file ownership, and recent changes alongside every query result.",
      "Auto-generates context files for 5 AI IDEs simultaneously (Cursor, Windsurf, Cline, Continue, Aider) from a single command.",
    ],
    "skills": ["Node.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Bash"],
    "link": "https://github.com/woustachemax/quackstack",
    "live": "https://quackstack.siddharththakkar.xyz/"
  }, {
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
    "description": "Built a full-stack Wikipedia search and bias analysis platform that surfaces how articles are written, not just what they say, with community-driven editorial workflows and local AI-powered fact-checking.",
    "details": [
      "Engineered local bias analysis engine scoring articles across positive, negative, opinion, and absolutist language patterns with a confidence score and tiered alert system (Moderate, High, Critical).",
      "Built community suggestion system with text-selection based edit submissions, voting and approval workflows, and direct Wikipedia submission queue with admin oversight.",
      "Implemented article caching layer on PostgreSQL to eliminate redundant Wikipedia API calls, with sections capped and key facts extracted for performance.",
      "Designed pluggable fact-checking architecture where users configure their own external APIs locally, with zero API keys ever leaving the browser.",
      "Implemented dual authentication with Google OAuth and credentials-based signup, role-based access control, and adaptive per-user rate limiting.",
    ],
    "skills": ["Next.js", "TypeScript", "Python", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "Framer Motion", "Google OAuth"],
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
    skills: ["Next.js", "Express.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Bun", "Turborepo", "OAuth"],
    link: "https://github.com/woustachemax/watchman"
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
              <Card className="bg-stone-900/20 border border-stone-800/50 hover:border-stone-700 hover:scale-[1.01] transition-all duration-300 backdrop-blur-sm">
                <div className="px-6 pt-4">
                  <CardHeader className="p-0 w-full">
                    <CardTitle className="text-blue-100 text-lg font-semibold text-left flex justify-between items-start">
                      {project.title}
                      <TechIcons skills={project.skills} colored={true} className="scale-75 origin-top-right ml-2" />
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
                    {project.youtube && (
                      <a
                        href={project.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-100 hover:text-blue-400 flex items-center gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <YoutubeIcon className="w-4 h-4" />
                        <span className="font-semibold">Press</span>
                      </a>
                    )}
                  </div>
                </div>

                <AccordionTrigger className="px-6 pb-4 text-left w-full no-underline hover:no-underline">
                  <span className="text-sm font-semibold text-gray-300 group-hover:text-blue-200">View Details</span>
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-4">
                  <CardContent className="p-0">
                    <p className="mb-4 text-blue-100 text-sm">{project.description}</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-400 mb-4">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="text-sm">{detail}</li>
                      ))}
                    </ul>
                    {/* <div className="mt-4">
                      <h4 className="font-semibold mb-2 text-blue-100 text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, idx) => (
                          <span key={idx} className="text-xs bg-stone-900/50 text-blue-200/70 border border-stone-800 px-2 py-1 rounded hover:text-white transition-colors duration-200">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div> */}


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