"use client"

import Education from "./components/Education"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import MiniProjectsBlog from "./components/MiniProjectsBlogs"
import ChangingTitle from "./components/ChangingTitle"
import GitHubContributions from "./components/GitHub"

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12 sm:space-y-20">
      
      <div className="w-full max-w-4xl mx-auto px-2 sm:px-4">
        <section id="hero" className="flex flex-col space-y-3 sm:space-y-4 text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-200">
            Hi, I'm Siddharth.
          </h1>
          <ChangingTitle />
          <p className="text-gray-400 text-xs sm:text-sm tracking-wide">
            I love building :)
          </p>
        </section>
      </div>

      <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 space-y-12 sm:space-y-16">
        <Education />
        <Projects />
        <MiniProjectsBlog /> 
        <Skills />
        <GitHubContributions />
      </div>
    </main>
  )
}