"use client"

export default function GitHubContributions() {
  return (
    <section id="github" className="my-32 max-w-4xl mx-auto px-4">
      <h2 className="text-4xl text-gray-500 font-bold mb-8">GitHub Activity</h2>
      <div className="bg-black/60 backdrop-blur-sm border border-blue-950 
                      hover:border-blue-400 rounded-xl p-6 
                      hover:scale-[1.02] transition-all duration-300">
        <div className="flex justify-center">
          <img 
            src="https://ghchart.rshah.org/E1C575/woustachemax" 
            alt="GitHub Contributions" 
            className="w-full max-w-4xl rounded-lg invert" 
            loading="lazy" 
          />
        </div>
      </div>
    </section>
  )
}
