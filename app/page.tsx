"use client"

import { Comic_Neue } from "next/font/google"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import MiniProjectsBlog from "./components/MiniProjectsBlogs"

const comicNeue = Comic_Neue({ subsets: ["latin"], weight: ["700"] })

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12 sm:space-y-20">

      <div className="w-full max-w-4xl mx-auto px-2 sm:px-4">
        <section id="hero" className="flex flex-col space-y-3 sm:space-y-4 text-left">
          <div className="relative inline-block self-start">
            <h1 className="text-4xl sm:text-5xl font-bold text-shine">
              Hi, I'm Siddharth
            </h1>
            <span
              className="absolute -top-2 sm:-top-2.5 left-full -ml-4 flex items-center gap-0.5 text-stone-500 dark:text-gray-400 whitespace-nowrap select-none"
            >
              <svg width="12" height="10" viewBox="0 0 18 14" fill="none" className="shrink-0 -mb-0.5">
                <path d="M1 12.5C3.5 5.5 8.5 1.8 15.5 2.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                <path d="M11.5 1.2C13 1.8 14.5 2.3 15.7 2.9C15 4 14.2 5.2 13.5 6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className={`${comicNeue.className} text-[10px] sm:text-xs`}>
                woustachemax
              </span>
            </span>
          </div>
          <p className="text-stone-600 dark:text-gray-400 text-xs sm:text-sm tracking-wide">
            I write code that (usually) works, on the web ;)
          </p>

          <div className="hover-glow bg-white dark:bg-stone-900/20 backdrop-blur-sm border border-stone-200 dark:border-stone-800/50 hover:border-stone-400 dark:hover:border-stone-700 rounded-xl p-3 sm:p-6 transition-all duration-300 mt-2">
            <div className="flex justify-center">
              <img
                src="https://ghchart.rshah.org/525252/woustachemax"
                alt="GitHub Contributions"
                className="w-full rounded-lg dark:invert"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 space-y-12 sm:space-y-16">
        <Education />
        <Projects />
        <MiniProjectsBlog />
        <Skills />
      </div>
    </main>
  )
}
