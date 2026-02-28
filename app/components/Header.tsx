"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin } from "lucide-react"

export default function Header() {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Stack" },
  ]

  const XIcon = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-200 hover:text-blue-200" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )



  const socialItems = [
    { href: "https://www.linkedin.com/in/sidthakkar/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/woustachemax", icon: Github, label: "GitHub Profile" },
    { href: "https://x.com/woustachemax7", icon: XIcon, label: "X" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100
      let currentSection = ""
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section) {
          const sectionTop = section.offsetTop - 150
          if (scrollPosition >= sectionTop) {
            currentSection = navItems[i].id
            break
          }
        }
      }
      setActiveSection(currentSection)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -80
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  return (
    <header className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out">
      <nav className="px-2">
        <div
          className={`flex items-center justify-center transition-all duration-500 ${isScrolled
            ? "bg-stone-900/40 backdrop-blur-xl border border-stone-800 rounded-full py-2 shadow-2xl"
            : "bg-stone-900/20 backdrop-blur-sm border border-stone-800 rounded-full py-2 shadow-lg"
            } px-3 w-auto sm:w-auto min-w-[90vw] sm:min-w-0`}
        >
          <div className="flex items-center justify-center text-xs sm:text-sm gap-1 sm:gap-2">
            {navItems.map((item, index) => (
              <div key={item.id} className="flex items-center">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`px-2 sm:px-4 py-1 sm:py-2 font-medium transition-all duration-300 ease-out text-gray-200 hover:text-blue-200/80 hover:scale-105 ${activeSection === item.id ? "text-blue-200" : ""
                    }`}
                >
                  {item.label}
                </button>
                {index < navItems.length - 1 && (
                  <span className="text-gray-400 mx-1 sm:mx-2">|</span>
                )}
              </div>
            ))}
            <span className="text-gray-200 mx-1 sm:mx-2">|</span>
            {socialItems.map((social, index) => (
              <div key={social.label} className="flex items-center">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 sm:px-4 py-1 sm:py-2 text-gray-200 hover:text-blue-200 hover:scale-110 transition-all duration-300 flex items-center"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                {index < socialItems.length - 1 && (
                  <span className="text-gray-400 mx-1 sm:mx-2">|</span>
                )}
              </div>
            ))}
            <span className="text-gray-200 mx-1 sm:mx-2">|</span>
            <div
              onClick={() => window.location.href = 'https://drive.google.com/file/d/1bGgFJCZaNBg42iJvYiAhsHiy1wguaGqx/view?usp=sharing'}
              className="px-2 sm:px-4 py-1 sm:py-2 text-gray-200 hover:text-blue-200 hover:scale-110 transition-all duration-300 cursor-pointer">
              CV
            </div>
            <span className="text-gray-200 mx-1 sm:mx-2">|</span>
            <div
              onClick={() => window.location.href = 'https://blog.siddharththakkar.xyz/'}
              className="px-2 sm:px-4 py-1 sm:py-2 text-gray-200 hover:text-blue-200 hover:scale-110 transition-all duration-300 cursor-pointer">
              Blog
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
