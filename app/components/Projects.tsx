"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const projectsData = [
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
    "live": "https://conv-olive.vercel.app"
  },
  {
  "title": "Episteme: AI-Powered Wikipedia Platform",
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
  "live": "https://episteme-indol.vercel.app/"
},
  {
  title: "Watchman | Uptime Monitoring App",
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
  title: "Sinkronize | Real-Time Collaboration Platform",
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
},
{
  title: "Learning Path Generator MVP",
  date: "March 2025",
  association: "Personal Project",
  description:
    "Built a full-stack learning path generation MVP integrating GPT-4o via Palantir Foundry's AIP Logic, with secure authentication and a polished UI.",
  details: [
    "Created an AIP Logic function in Palantir Foundry to interact with GPT-4o for generating structured learning paths based on user goals",
    "Built a React frontend with Vite, styled using Tailwind CSS, and enabled navigation via React Router",
    "Implemented authentication and input validation using JWT and Zod respectively",
    "Developed a backend using Hono running on Cloudflare Workers, with Prisma ORM for database interaction",
    "Configured CORS and default route redirection to ensure smooth frontend-backend communication",
  ],
  skills: [
    "React",
    "Vite",
    "Tailwind CSS",
    "Hono",
    "Cloudflare Workers",
    "Prisma",
    "Palantir Foundry",
    "AIP Logic",
    "OpenAI GPT-4o",
    "JWT",
    "Zod"
  ],
  link: "https://github.com/woustachemax/aip-app"
}
];

export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);

  const toggleProject = (index: number) => {
    setExpandedProjects(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const isExpanded = (index: number) => expandedProjects.includes(index);

  return (
    <section id="projects" className="my-32">
      <h2 className="text-4xl font-bold mb-8 text-gray-500">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col bg-black/50 border border-blue-950 hover:border-blue-400 transition-all duration-300"
          >
            <CardHeader>
              <CardTitle className="text-blue-100">{project.title}</CardTitle>
              <CardDescription className="text-gray-400">{project.date}</CardDescription>
              {project.association && (
                <CardDescription className="text-gray-400">{project.association}</CardDescription>
              )}
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <div>
                <p className="mb-4 text-blue-100">{project.description}</p>
                
                <button
                  onClick={() => toggleProject(index)}
                  className="flex items-center gap-2 text-blue-100 hover:text-blue-400 transition-colors duration-200 mb-4"
                >
                  <span className="font-semibold">
                    {isExpanded(index) ? 'Hide Details' : 'Show Details'}
                  </span>
                  {isExpanded(index) ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isExpanded(index) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 mb-4">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="text-sm">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold mb-2 text-blue-100">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-950 text-blue-200 px-2 py-1 rounded hover:text-white transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-100 transition-all duration-300 ease-in-out hover:text-blue-400 flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    <span className="font-semibold">Github Repository</span>
                  </a>
                )}
                
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-100 transition-all duration-300 ease-in-out hover:text-blue-400 flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="font-semibold">Live Demo</span>
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}