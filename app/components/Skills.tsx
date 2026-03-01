import TechIcons from "./TechIcons"

const skills = [
  "JavaScript", "TypeScript", "Python",
  "React", "Node.js", "Next.js", "FastAPI",
  "Tailwind CSS", "PostgreSQL", "MongoDB", "MySQL",
  "Docker", "Expo", "Vercel", "Linux", "Git", "cpp", "Pandas", "NumPy", "PyTorch"
]

export default function Skills() {
  return (
    <section id="skills" className="w-full mx-auto my-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <h2 className="text-4xl font-bold text-gray-500">Stack</h2>
      </div>

      <div className="relative w-full" style={{ animation: "fadeInUp 0.8s ease-out forwards" }}>
        {/* Edge Gradient */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-stone-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-stone-950 to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden group">
          <div className="flex animate-marquee whitespace-nowrap py-8 [animation-duration:40s] group-hover:[animation-play-state:paused]">
            <TechIcons
              skills={skills}
              colored={true}
              variant="square"
              size="xl"
              noBorder={true}
              className="gap-12 px-6"
              limit={skills.length}
            />
            <TechIcons
              skills={skills}
              colored={true}
              variant="square"
              size="xl"
              noBorder={true}
              className="gap-12 px-6"
              limit={skills.length}
            />
          </div>
        </div>
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
