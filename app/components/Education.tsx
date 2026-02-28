"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

const educationData = [
  {
    school: "Boston University",
    degree: "Masters in Computer Information Systems",
    date: "Graduated January 17, 2025",
    coursework: [
      "CS520 Information Structures with Java",
      "CS602 Server-Side Development",
      "CS601 Web Application Development",
      "CS669 Database Design and Implementation for Business",
      "CS683 Mobile Application Development",
    ],
  },
  {
    school: "K.J. Somaiya College of Engineering",
    degree: "B.Tech in Electronics Engineering",
    date: "Graduated June 1, 2023",
    coursework: [
      "Programming in C",
      "Data Structures",
      "Mobile Application Development",
      "Python",
      "Cloud Computing",
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="my-16 max-w-6xl mx-auto px-4">
      <h2 className="text-4xl text-gray-500 font-bold mb-8">Education</h2>
      <Accordion type="single" collapsible className="grid md:grid-cols-2 gap-6">
        {educationData.map((edu, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-none">
            <Card className="bg-stone-900/20 border border-stone-800/50 hover:border-stone-700 hover:scale-[1.01] transition-all duration-300 backdrop-blur-sm">
              <AccordionTrigger className="px-6 py-4 text-left w-full no-underline hover:no-underline">
                <div>
                  <h3 className="text-blue-100 font-semibold">{edu.school}</h3>
                  <p className="text-gray-400">{edu.degree}</p>
                  <p className="text-sm text-blue-200">{edu.date}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Relevant Coursework</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {edu.coursework.map((course, i) => <li key={i}>{course}</li>)}
                </ul>
              </AccordionContent>
            </Card>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
