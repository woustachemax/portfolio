"use client"

export default function SpaceBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black relative transition-colors duration-500">
      <div
        className="fixed inset-0 z-0 opacity-100 dark:opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%,
              rgba(0, 0, 0, 0.05) 0%,
              rgba(0, 0, 0, 0.025) 20%,
              transparent 40%,
              transparent 60%,
              rgba(0, 0, 0, 0.06) 80%,
              rgba(0, 0, 0, 0.11) 100%
            )
          `,
          backgroundSize: "100vw 100vh",
        }}
      />
      <div
        className="fixed inset-0 z-0 opacity-0 dark:opacity-100 transition-opacity duration-500 ease-in-out"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%,
              rgba(255, 255, 255, 0.14) 0%,
              rgba(255, 255, 255, 0.06) 25%,
              rgba(255, 255, 255, 0.025) 35%,
              transparent 50%
            )
          `,
          backgroundSize: "100vw 100vh",
        }}
      />
      <div className="relative z-10 min-h-screen">{children}</div>
    </div>
  )
}
