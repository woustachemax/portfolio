import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projectsData = [
  {
    title: "Plinko Gambling Game Simulation",
    date: "Jan 2025",
    description: "A physics-based gambling game inspired by Plinko, simulating the thrill of cosmic chance.",
    details: [
      "Engineered a React-based frontend using Canvas API for smooth particle animations",
      "Developed a Node.js backend for secure outcome calculations and server-side validation",
    ],
    skills: ["JavaScript", "React", "Node.js", "Canvas API"],
  },
  {
    title: "Quantum Trading Algorithm",
    date: "Nov 2024 - Dec 2024",
    description: "A high-frequency trading algorithm that operates at the speed of light.",
    details: [
      "Constructed an Express-based HTTP server for lightning-fast user operations",
      "Implemented quantum-inspired bid/ask matching for market and limit orders",
      "Achieved sub-millisecond processing for interstellar high-throughput trading",
    ],
    skills: ["Node.js", "Express", "JavaScript", "Quantum Algorithm Design"],
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
    title: "Audify (Music SaaS Platform)",
    date: "Sep 2024 - Oct 2024",
    description: "Built a full-stack music streaming platform with voting system.",
    details: [
      "Built the backend using Prisma and PostgreSQL",
      "Implemented authentication with NextAuth",
      "Developed RESTful API endpoints",
      "Used Next.js for server-side rendering",
      "Integrated YouTube API",
      "Designed the frontend UI using Tailwind CSS",
      "Deployed the application on Vercel",
    ],
    skills: ["PostgreSQL", "Next.js", "Tailwind CSS", "React"],
  },
  {
    title: "SidChat (Video Call App)",
    date: "May 2024 - Jun 2024",
    description: "Developed a real-time video communication platform combining features of Google Meet and Omegle.",
    details: [
      "Integrated WebRTC for video/audio communication",
      "Created a dynamic user matchmaking system with Socket.io",
      "Built the frontend using React",
      "Developed a signaling server with Node.js and Socket.io",
    ],
    skills: ["WebRTC", "React", "Node.js", "Socket.io"],
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
            <CardContent className="flex-grow">
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
                    <span key={idx} className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

