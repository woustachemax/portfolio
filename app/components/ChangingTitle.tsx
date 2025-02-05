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
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-[4rem] md:min-h-[2rem] flex items-center justify-center px-4">
      <p className="text-xl md:text-2xl text-blue-300 text-center">
        {titles[titleIndex]} | <span className="block md:inline">Exploring the Digital Universe</span>
      </p>
    </div>
  )
}

