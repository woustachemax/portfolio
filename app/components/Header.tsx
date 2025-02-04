"use client"

import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -80 // Adjust this value based on your header height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="bg-black/50 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-end items-center">
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex ${isMenuOpen ? "block" : "hidden"} absolute md:relative top-16 md:top-0 right-0 md:right-auto bg-black/50 backdrop-blur-sm md:bg-transparent w-full md:w-auto shadow-md md:shadow-none z-10`}
        >
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <li key={item} className="md:ml-6">
              <button
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block px-4 py-2 hover:text-purple-400 transition duration-300"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

