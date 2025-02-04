import { Badge } from "@/components/ui/badge"

const skillsData = {
  Languages: ["JavaScript", "TypeScript", "Python", "Java", "C"],
  "Frameworks & Libraries": ["React", "Express.js", "Tailwind CSS", "Next.js"],
  Databases: ["MySQL", "PostgreSQL", "MongoDB"],
  "Tools & Platforms": ["Docker", "AWS", "Vercel", "GitHub Actions"],
}

export default function Skills() {
  return (
    <section id="skills" className="my-16">
      <h2 className="text-3xl font-bold mb-8">Tech Skills</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

