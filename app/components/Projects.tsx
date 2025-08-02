import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from 'lucide-react';

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
  "title": "Real Madrid Performance Analytics",
  "date": "June 2025",
  "association": "Personal Project",
  "description": "Performed data-driven performance analysis of Real Madrid matches using Python to extract and visualize player and team-level insights.",
  "details": [
    "Scraped match and player data from public football stats websites and stored it in structured formats.",
    "Used Pandas and NumPy to clean, process, and aggregate match statistics across multiple seasons.",
    "Built custom visualizations to analyze key metrics like goals, assists, shot accuracy, and player efficiency.",
    "Automated generation of season summaries and comparisons across players and match types."
  ],
  "skills": ["Python", "Pandas", "Matplotlib", "NumPy", "Data Analysis", "Sports Analytics"],
  "link": "https://github.com/woustachemax/sports-analysis"
},
  {
    "title": "AI-Driven Stock Trading with Claude & Zerodha",
    "date": "May 2025",
    "association": "Personal Project",
    "description": "Developed a custom Model Context Protocol (MCP) server enabling Claude, an LLM, to execute real-time stock trades through Zerodha, an Indian brokerage, overcoming significant documentation scarcity.",
    "details": [
      "Engineered a custom MCP server as a bridge between Claude and Zerodha's trading API.",
      "Integrated deeply with Zerodha's developer API for authentication, order placement, and portfolio management.",
      "Defined a suite of 'tools' within the MCP server for trading actions, meticulously described for Claude's understanding.",
      "Implemented natural language processing to translate Claude's commands into precise API calls.",
      "Incorporated real-time confirmation mechanisms to ensure user control over trade execution.",
      "Navigated and solved complex integration challenges due to extremely limited MCP documentation for AI agents."
    ],
    "skills": ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "LLM Integration", "Financial APIs", "Zerodha API", "Natural Language Processing", "API Development"]
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
    "Built a full-stack learning path generation MVP integrating GPT-4o via Palantir Foundry’s AIP Logic, with secure authentication and a polished UI.",
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
},
  {
    title: "Selling on Amazon | Database Design and Implementation",
    date: "Sep 2024 - Dec 2024",
    association: "Boston University",
    description:
      "Developed automated stored procedures to streamline e-commerce operations, including product addition, inventory management, customer account creation, order processing, and product shipment tracking.",
    details: [
      "Created reusable stored procedures for key business processes",
      "Designed efficient SQL queries to extract business insights",
      "Optimized business operations through transaction-oriented stored procedures",
      "Enabled data-driven decision-making with real-time insights",
    ],
    skills: ["SQL", "Databases", "Database Design", "E-Commerce"],
  },
  {
    title: "Tuition Notes Application (TNA)",
    date: "Jan 2024 - May 2024",
    association: "Boston University",
    description: "Developed a mobile platform for managing tuition classes.",
    details: [
      "Integrated Firebase Authentication",
      "Used RecyclerView for efficient display of student data",
      "Implemented MVVM architecture",
      "Added features for assignment management and student progress tracking",
    ],
    skills: ["Android", "Android Studio", "SQLite", "MVVM", "UI/UX Design"],
  },
  {
    title: "Warehouse System Automation (Java)",
    date: "Aug 2023 - Dec 2023",
    association: "Boston University",
    description: "Developed a Java-based warehouse management system.",
    details: [
      "Designed Product and Tote classes for efficient management",
      "Developed Warehouse class to handle operations",
      "Implemented order fulfillment and tote merging functionalities",
      "Created a comprehensive test program",
    ],
    skills: ["Java", "Object-Oriented Programming", "Data Structures"],
  },
  {
    title: "Human Detecting Quadcopter",
    date: "Aug 2022 - May 2023",
    association: "KJ Somaiya College of Engineering, Vidyavihar",
    description: "Developed a semi-autonomous quadcopter for human detection.",
    details: [
      "Implemented ESP32 camera module for real-time video capture",
      "Designed a 3D-printed chassis using SolidWorks",
      "Built a custom flight controller",
      "Programmed flight dynamics using Arduino IDE",
    ],
    skills: ["Arduino", "ESP32", "SolidWorks", "Flight Dynamics"],
  },
  {
    title: "Emotion Recognition Software",
    date: "May 2022 - Jul 2022",
    association: "KJ Somaiya College of Engineering, Vidyavihar",
    description:
      "Developed a system to assist people with hearing impairment by recognizing emotions from audio inputs.",
    details: [
      "Used Python, SVM, RNN, and CNN algorithms for audio analysis",
      "Employed Vox celebrity dataset for model training",
      "Built the system to identify emotional states and provide real-time feedback",
    ],
    skills: ["Python", "Machine Learning", "Data Analytics", "Deep Learning"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="my-32">
      <h2 className="text-4xl font-bold mb-8 text-purple-400">Galactic Endeavors</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col bg-black/50 border border-purple-500/30 hover:border-purple-500 transition-all duration-300"
          >
            <CardHeader>
              <CardTitle className="text-blue-300">{project.title}</CardTitle>
              <CardDescription className="text-gray-400">{project.date}</CardDescription>
              {project.association && (
                <CardDescription className="text-gray-400">{project.association}</CardDescription>
              )}
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <div>
                <p className="mb-2 text-gray-300">{project.description}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="text-sm">
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2 text-blue-300">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {project.link && (
                <div className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-purple-400 transition-all duration-300 ease-in-out hover:text-purple-300 hover:tracking-wide hover:shadow-[0_0_5px_#A78BFA,0_0_10px_#A78BFA]">
                    <div className="flex">
                      <div className="mx-2">
                      <Github/>
                      </div> 
                      <div className="font-semibold">
                      Github Repository 
                        </div>
                      <div></div>
                    </div>
                  </a>
                </div>
              )} <br />
              {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-purple-400 transition-all duration-300 ease-in-out hover:text-purple-300 ">
                    <div className="flex">
                      <div className="mx-2">
                        <ExternalLink/>
                      </div> 
                      <div className="font-semibold">
                      Live Demo 
                        </div>
                      <div></div>
                    </div>
                  </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}


