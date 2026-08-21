"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, FolderGit2, Layers, FileText, Rss } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import { playClick } from "@/lib/sound"
import { cn } from "@/lib/utils"

export default function Header() {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAtBottom, setIsAtBottom] = useState(false)

  const navItems = [
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "skills", label: "Stack", icon: Layers },
  ]

  const XIcon = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
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

      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const atBottom = scrollTop + windowHeight >= documentHeight - 10
      setIsAtBottom(atBottom)

      if (atBottom) {
        setActiveSection(navItems[navItems.length - 1].id)
        return
      }

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
    playClick()
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -80
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  const handleLinkClick = (url: string) => {
    playClick()
    window.location.href = url
  }

  const expandingItemClass = "group flex items-center overflow-hidden rounded-full px-2 py-1.5 sm:py-2 transition-all duration-300 ease-out text-stone-600 hover:gap-2 hover:px-3 hover:text-black dark:text-gray-200 dark:hover:text-white"
  const labelClass = "max-w-0 whitespace-nowrap text-xs sm:text-sm font-medium opacity-0 transition-all duration-300 ease-out group-hover:max-w-[6rem] group-hover:opacity-100"

  return (
    <header
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out`}
      style={{ bottom: isAtBottom ? '21px' : '24px' }}
    >
      <nav className="px-2">
        <div
          className={`flex items-center justify-center transition-all duration-500 border ${isScrolled
            ? "bg-white/70 dark:bg-stone-900/40 backdrop-blur-xl border-stone-200 dark:border-stone-800 rounded-full py-1.5 shadow-2xl"
            : "bg-white/40 dark:bg-stone-900/20 backdrop-blur-sm border-stone-200 dark:border-stone-800 rounded-full py-1.5 shadow-lg"
            } px-2`}
        >
          <div className="flex items-center gap-0.5 sm:gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(expandingItemClass, isActive && "gap-2 px-3 text-black dark:text-white")}
                >
                  <item.icon className="w-4 h-4 shrink-0" />
                  <span className={cn(labelClass, isActive && "max-w-[6rem] opacity-100")}>
                    {item.label}
                  </span>
                </button>
              )
            })}

            {socialItems.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClick()}
                className="flex items-center justify-center rounded-full p-2 sm:p-2.5 text-stone-600 hover:text-black hover:scale-110 dark:text-gray-200 dark:hover:text-white transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}

            <button
              onClick={() => handleLinkClick('https://drive.google.com/file/d/1bGgFJCZaNBg42iJvYiAhsHiy1wguaGqx/view?usp=sharing')}
              className={expandingItemClass}
            >
              <FileText className="w-4 h-4 shrink-0" />
              <span className={labelClass}>CV</span>
            </button>

            <button
              onClick={() => handleLinkClick('https://blog.siddharththakkar.xyz/')}
              className={expandingItemClass}
            >
              <Rss className="w-4 h-4 shrink-0" />
              <span className={labelClass}>Blog</span>
            </button>

            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}
