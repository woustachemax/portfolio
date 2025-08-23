"use client"

import { useState, useEffect } from "react"
import { Menu, X, Github, Linkedin } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "github", label: "Activity" }
  ]

  const XIcon = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-blue-950" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )

  const socialItems = [
    { href: "https://www.linkedin.com/in/sidthakkar/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/woustachemax", icon: Github, label: "GitHub Profile" },
    { href: "https://x.com/woustachemax7", icon: XIcon, label: "X" }
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
      setIsMenuOpen(false)
      setActiveSection(sectionId)
    }
  }

  return (
    <header className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out">
      <nav className="px-2">
        <div className="flex justify-center items-center">
          <div className={`hidden md:flex items-center transition-all duration-500 w-auto ${
            isScrolled 
              ? 'bg-black/80 backdrop-blur-xl border border-gray-200 rounded-full px-4 py-2 shadow-2xl' 
              : 'bg-black/60 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-lg'
          }`}>
            <div className="flex items-center">
              {navItems.map((item, index) => (
                <div key={item.id} className="flex items-center">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="px-4 py-2 text-sm font-medium transition-all duration-300 ease-out text-blue-950 hover:scale-105"
                  >
                    {item.label}
                  </button>
                  {index < navItems.length - 1 && (
                    <span className="text-gray-200 mx-2">|</span>
                  )}
                </div>
              ))}
              <span className="text-gray-200 mx-2">|</span>
              {socialItems.map((social, index) => (
                <div key={social.label} className="flex items-center">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-blue-950 hover:scale-110 transition-all duration-300 flex items-center"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-blue-950" />
                  </a>
                  {index < socialItems.length - 1 && (
                    <span className="text-gray-200 mx-2">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-full transition-all duration-300 bg-black/60 backdrop-blur-sm border border-gray-200 text-gray-200"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-blue-950" /> : <Menu className="w-6 h-6 text-blue-950" />}
            </button>
          </div>
        </div>
        <div className={`md:hidden absolute bottom-16 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-out overflow-hidden ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 translate-y-4'
        }`}>
          <div className="bg-black/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-2 shadow-2xl">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] text-blue-950"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMenuOpen ? 'slideInUp 0.3s ease-out forwards' : 'none'
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-1 pt-2 border-t border-gray-200">
              <div className="space-y-1">
                {socialItems.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-4 py-3 text-blue-950 hover:scale-[1.02] transition-all duration-300 rounded-xl"
                    style={{
                      animationDelay: `${(navItems.length + index) * 50}ms`,
                      animation: isMenuOpen ? 'slideInUp 0.3s ease-out forwards' : 'none'
                    }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-blue-950" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  )
}
