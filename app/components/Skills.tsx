import TechIcons from "./TechIcons"

const skills = [
  "JavaScript", "TypeScript", "Python",
  "React", "Node.js", "Next.js", "FastAPI",
  "Tailwind CSS", "PostgreSQL", "MongoDB", "MySQL",
  "Docker", "React Native", "Pandas", "NumPy", "PyTorch"
]

export default function Skills() {
  return (
    <section id="skills" className=" max-w-6xl mx-auto px-4 my-32">
      <h2 className="text-4xl font-bold mb-8 text-gray-500">Stack</h2>
      <TechIcons
        skills={skills}
        colored={true}
        variant="square"
        size="lg"
        noBorder={true}
        className="flex-wrap gap-6"
        limit={skills.length}
      />

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
