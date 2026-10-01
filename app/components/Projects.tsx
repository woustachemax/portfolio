"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Github, ExternalLink, YoutubeIcon, PlayCircle } from "lucide-react"
import TechIcons from "./TechIcons"

const projectsData = [
  {
    "title": "Twin",
    "date": "September 2026",
    "association": "Hackathon Project",
    "description": "A local-first AI desktop buddy for macOS that floats in a small widget, chats in one of five personas, and builds a rough picture of your day from your own Mac. It reads bank SMS from Messages and events from your calendars into a local DuckDB file, with no server of its own.",
    "details": [
      "Built a translucent macOS widget (AppKit + Tk) with a global hotkey toggle, five selectable personas, and a setup flow for pasting and storing an API key in the macOS Keychain.",
      "Engineered a provider-agnostic LLM client layer supporting Anthropic, OpenAI, Google Gemini, and xAI, sending a single scrubbed request per chat turn directly to the chosen provider.",
      "Built a local ingestion pipeline (~3,500 lines of Python) that copies and parses the Messages database for bank transaction SMS via regex, and reads calendar events through EventKit, storing everything in a DuckDB file under the user's home directory.",
      "Implemented regex-based PII redaction (emails, phone numbers, card and government-ID-shaped numbers, addresses) applied to every request before it leaves the device.",
      "Added document ingestion for PDFs and receipt photos using pypdfium2 text extraction and Donut OCR, plus SEC EDGAR filing lookup with company resolution and excerpt selection.",
      "Automated the release pipeline with shell scripts for DMG build, codesigning, version sync, and GitHub Releases, and shipped a Streamlit-based local monitor for everything stored in twin.duckdb."
    ],
    "skills": ["Python", "DuckDB", "py2app", "PyTorch", "Streamlit", "Pydantic"],
    "link": "https://github.com/woustachemax/twin",
    "live": "https://twin.siddharththakkar.xyz/",
    "demo": "https://twin.siddharththakkar.xyz/demo/demo.mp4"
  },
  {
    "title": "GlitchCn/ui",
    "date": "November 2025 - December 2025",
    "association": "Open Source Project",
    "description": "A retro-futuristic React component library for Next.js with 15+ terminal-styled components, five built-in color themes, and full dark and light mode, installable through the shadcn/ui CLI.",
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
    "description": "An interactive CLI tool that indexes a codebase with local embeddings and answers questions about it conversationally, with git history tracking and context generation for every major AI coding assistant.",
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
  },
  {
    "title": "Episteme",
    "date": "July 2025",
    "association": "Personal Project",
    "description": "A Wikipedia research tool that cross references articles against independently scraped sources, surfaces where they disagree, and seeds an AI persona debate on each disagreement that signed in users can reply into.",
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
  }
];

export default function Projects() {
  return (
    <section id="projects" className="my-32 max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-shine-section">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <Accordion key={index} type="single" collapsible className="w-full">
            <AccordionItem value={`project-${index}`} className="border-none">
              <Card className="hover-glow bg-white dark:bg-stone-900/20 border border-stone-200 dark:border-stone-800/50 hover:border-stone-400 dark:hover:border-stone-700 hover:scale-[1.01] transition-all duration-300 backdrop-blur-sm">
                <div className="px-6 pt-4">
                  <CardHeader className="p-0 w-full">
                    <CardTitle className="text-lg font-semibold text-left flex justify-between items-start">
                      <span className="text-stone-900 dark:text-white">{project.title}</span>
                      <TechIcons skills={project.skills} colored={true} className="scale-75 origin-top-right ml-2" />
                    </CardTitle>
                    <div className="flex justify-between text-xs text-stone-500 dark:text-gray-400 mt-1">
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
                        className="text-sm text-stone-800 hover:text-black hover:underline underline-offset-2 dark:text-gray-300 dark:hover:text-white flex items-center gap-2"
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
                        className="text-sm text-stone-800 hover:text-black hover:underline underline-offset-2 dark:text-gray-300 dark:hover:text-white flex items-center gap-2"
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
                        className="text-sm text-stone-800 hover:text-black hover:underline underline-offset-2 dark:text-gray-300 dark:hover:text-white flex items-center gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <YoutubeIcon className="w-4 h-4" />
                        <span className="font-semibold">Press</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-stone-800 hover:text-black hover:underline underline-offset-2 dark:text-gray-300 dark:hover:text-white flex items-center gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <PlayCircle className="w-4 h-4" />
                        <span className="font-semibold">Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                <AccordionTrigger className="px-6 pb-4 text-left w-full no-underline hover:no-underline">
                  <span className="text-sm font-semibold text-stone-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">View Details</span>
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-4">
                  <CardContent className="p-0">
                    <p className="mb-4 text-stone-700 dark:text-gray-300 text-sm">{project.description}</p>
                    <ul className="list-disc list-inside space-y-1 text-stone-600 dark:text-gray-400 mb-4">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="text-sm">{detail}</li>
                      ))}
                    </ul>
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