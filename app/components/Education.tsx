import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const educationData = [
  {
    school: "Boston University",
    degree: "Masters in Computer Information Systems",
    date: "Graduated January 17, 2025",
    courses: [
      "Information Structures with Java",
      "Server-Side Development",
      "Web Application Development",
      "Mobile Application Development",
      "Database Design and Implementation for Business",
    ],
  },
  {
    school: "K.J. Somaiya College of Engineering",
    degree: "B.Tech in Electronics Engineering",
    date: "Graduated June 2023",
    courses: ["Data Structures", "C Programming", "Mobile App Development (Flutter)", "Big Data Analytics"],
  },
]

export default function Education() {
  return (
    <section id="education" className="my-16">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {educationData.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{edu.school}</CardTitle>
              <CardDescription>{edu.degree}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{edu.date}</p>
              <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
              <ul className="list-disc list-inside">
                {edu.courses.map((course, idx) => (
                  <li key={idx} className="text-sm">
                    {course}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

