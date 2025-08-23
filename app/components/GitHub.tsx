"use client"

export default function GitHubContributions() {
  return (
    <section id="github" className="my-16">
      <h2 className="text-3xl text-gray-500 font-bold mb-8">GitHub Activity</h2>
      
      <div className="grid gap-6">
        <div className="bg-black/60 backdrop-blur-sm border border-blue-950 hover:borde-blue-400 rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
          <div className="flex justify-center">
            <img 
              src="https://ghchart.rshah.org/1e3a8a/woustachemax" 
              alt="GitHub Contributions" 
              className="w-full max-w-4xl rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}