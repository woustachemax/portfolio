import { Badge } from "@/components/ui/badge"

const skills = [
  "JavaScript", "TypeScript", "Python",
  "React", "Node.js", "Next.js",
  "Tailwind CSS", "PostgreSQL", "MongoDB",
  "Three.js", "Docker", "AWS"
]

export default function Skills() {
  return (
    <section id="skills" className="my-32 max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-gray-500">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={skill}
            variant="secondary"
            className="px-3 py-1.5 text-sm font-medium bg-blue-950 text-blue-200
                       hover:bg-blue-950 hover:text-white hover:scale-105
                       transition-all duration-200 border-0 rounded-md"
            style={{
              animationDelay: `${index * 50}ms`,
              animation: "fadeInUp 0.45s ease-out forwards"
            }}
          >
            {skill}
          </Badge>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
