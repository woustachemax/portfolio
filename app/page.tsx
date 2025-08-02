import { Button } from "@/components/ui/button"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import ContactForm from "./components/ContactForm"
import SocialLinks from "./components/SocialLinks"
import ChangingTitle from "./components/ChangingTitle"

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-32 px-4 py-8">
      <section id="hero" className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-400 mb-6 animate-pulse px-2">Siddharth Thakkar</h1>
        <ChangingTitle />
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 mt-4 px-4">
          Embarking on a cosmic journey through web development, creating immersive digital experiences that transcend
          boundaries.
        </p>
        <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white animate-bounce mt-4">
          <a href="#contact">Initiate Contact</a>
        </Button>
      </section>

      <section id="about" className="my-32 bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-purple-500/30">
        <h2 className="text-4xl font-bold mb-6 text-purple-400">Mission Log</h2>
        <div className="space-y-4 text-lg text-gray-300">
          <p>
            Greetings, fellow explorer! I'm Siddharth, an Electronics Engineer who has navigated the vast expanse of
            technology to become a passionate Software Developer. My mission: to harness the transformative power of
            code and bring innovative ideas to life.
          </p>
          <p>
            Currently, I'm charting new territories in 3D Web Development with Three.js, aiming to create interactive
            and immersive user experiences that feel like journeys through digital galaxies. I'm also on an exciting
            voyage through the MERN Stack (MongoDB, Express.js, React.js, and Node.js), building seamless, user-centric
            web applications that push the boundaries of what's possible.
          </p>
          <p>
            As I continue to explore this ever-expanding digital universe, I'm open to joining forces with like-minded
            crews on groundbreaking projects. If you're looking for a Software Engineer to help navigate the
            complexities of code and create stellar experiences, I'm ready to embark on the next adventure!
          </p>
        </div>
      </section>

      <Education />

      <Projects />

      <Skills />

      <section id="contact" className="my-32 bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-purple-500/30">
        <h2 className="text-4xl font-bold mb-8 text-purple-400">Establish Communication</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ContactForm />
          <SocialLinks />
        </div>
      </section>


    </div>
  )
}

