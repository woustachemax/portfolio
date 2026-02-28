"use client"

export default function GitHubContributions() {
  return (
    <section id="github" className="my-24 sm:my-32 max-w-6xl mx-auto px-2 sm:px-4">
      <h2 className="text-4xl text-gray-500 font-bold mb-6 sm:mb-8">
        GitHub Activity
      </h2>
      <div className="bg-stone-900/20 backdrop-blur-sm border border-stone-800/50 
                      hover:border-stone-700 rounded-xl p-4 sm:p-6 
                      transition-all duration-300">

        <div className="flex justify-center">
          <img
            src="https://ghchart.rshah.org/3b82f6/woustachemax"
            alt="GitHub Contributions"
            className="w-full sm:max-w-4xl rounded-lg invert hue-rotate-180"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
