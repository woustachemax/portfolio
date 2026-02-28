"use client"


export default function SpaceBackground({ children }: { children: React.ReactNode }) {
  
  return (
    <div className="min-h-screen w-full bg-stone-950 relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, 
              rgba(59, 130, 246, 0.16) 0%, 
              rgba(59, 130, 246, 0.09) 25%, 
              rgba(59, 130, 246, 0.04) 35%, 
              transparent 50%
            )
          `,
          backgroundSize: "100% 100%",
        }}
      />
            <div className="relative z-10 min-h-screen">{children}</div>
      </div>
  )
}

