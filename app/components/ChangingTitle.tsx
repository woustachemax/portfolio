"use client"

import { useState, useEffect } from "react"

const titles = [
  "Software Developer",
  "Full Stack Developer", 
  "Frontend Developer",
  "Backend Developer",
  "Web Application Developer",
  "Cloud Engineer",
  "Database Engineer",
]

export default function ChangingTitle() {
  const [titleIndex, setTitleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <p className="text-xl md:text-2xl text-blue-300 transition-all duration-300">
      {titles[titleIndex]}
    </p>
  )
}
