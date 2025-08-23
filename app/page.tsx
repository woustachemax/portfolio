"use client"
import { Button } from "@/components/ui/button"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import ChangingTitle from "./components/ChangingTitle"
import GitHubContributions from "./components/GitHub"

export default function Home() {
  return (
    <>
      <div className="space-y-16 md:space-y-32 px-4 py-8">
        <section id="hero" className="flex flex-col items-center justify-center min-h-screen text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-200 mb-6 animate-pulse px-2">Siddharth Thakkar</h1>
          <ChangingTitle />
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 mt-4 px-4">
            Embarking on a cosmic journey through web development, creating immersive digital experiences that transcend
            boundaries.
          </p>
            <Button asChild size="lg" className="bg-blue-950  hover:bg-blue-950 text-blue-200 hover:text-white hover:border-blue-900 hover:scale-105 transition-all duration-800 mt-4 rounded-full animate-bounce">
               <a href="#projects">Check Out my work</a>
            </Button>
        </section>

        <section id="about" className="my-32 bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-gray-500 hover:border-blue-400">
          <h2 className="text-4xl font-bold mb-6 text-gray-500">About Me</h2>
          <div className="space-y-4 text-lg text-blue-100">
              <p>
                Hi, I'm Siddharth. I'm an Electronics Engineer turned Software Developer, focused on building immersive experiences with Three.js and full stack applications with the MERN stack. My work spans from AI-powered tools to clean, user-friendly web apps. I enjoy solving hard problems and turning ideas into production-ready projects.
              </p>
          </div>
        </section>

        <Education />

        <Projects />

        <Skills />

        <GitHubContributions />
      </div>

      <style jsx global>{`
        /* Webkit browsers (Chrome, Safari, Edge) */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #e5e7eb; /* gray-200 */
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #ffffff; /* white */
        }

        /* Firefox */
        html {
          scrollbar-width: thin;
          scrollbar-color: #e5e7eb transparent;
        }
      `}</style>
    </>
  )
}