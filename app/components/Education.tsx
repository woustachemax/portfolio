import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const educationData = [
  {
    school: "Boston University",
    degree: "Masters in Computer Information Systems",
    date: "Graduated January 17, 2025",
  },
  {
    school: "K.J. Somaiya College of Engineering",
    degree: "B.Tech in Electronics Engineering",
    date: "Graduated June 2023",
  },
]

export default function Education() {
  return (
    <section id="education" className="my-16">
      <h2 className="text-3xl text-gray-500 font-bold mb-8">Education</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {educationData.map((edu, index) => (
          <Card 
            key={index} 
            className="bg-black/50 border border-blue-950 hover:border-blue-400 hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm"
          >
            <CardHeader>
              <CardTitle className="text-blue-100">{edu.school}</CardTitle>
              <CardDescription className="text-gray-400">{edu.degree}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-200 mb-2">{edu.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}