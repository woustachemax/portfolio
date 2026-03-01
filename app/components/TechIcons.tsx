"use client"

const iconMap: Record<string, string> = {
    "next.js": "nextdotjs",
    "react": "react",
    "typescript": "typescript",
    "tailwind css": "tailwindcss",
    "node.js": "nodedotjs",
    "postgresql": "postgresql",
    "python": "python",
    "docker": "docker",
    "aws": "amazonaws",
    "mongodb": "mongodb",
    "prisma": "prisma",
    "express.js": "express",
    "shadcn/ui": "shadcnui",
    "figma": "figma",
    "radix ui": "radixui",
    "openai api": "openai",
    "anthropic api": "anthropic",
    "gemini api": "googlegemini",
    "google oauth": "google",
    "github": "github",
    "spotify api": "spotify",
    "youtube api": "youtube",
    "apple music api": "apple",
    "vercel": "vercel",
    "clerk": "clerk",
    "bun": "bun",
    "turborepo": "turborepo",
    "spring boot": "springboot",
    "java": "java",
    "javascript": "javascript",
    "bash": "gnubash",
    "socket.io": "socketdotio",
    "three.js": "threedotjs",
    "react native": "react",
    "express": "express",
    "clig": "terminal",
    "cli": "gnubash",
    "authentication": "clerk",
    "microservices": "cube",
    "ast parsing": "code",
    "semantic search": "search",
    "fastapi": "fastapi",
    "uvicorn": "uvicorn",
    "pandas": "pandas",
    "numpy": "numpy",
    "pytorch": "pytorch",
    "mysql": "mysql",
    "expo": "expo",
    "linux": "linux",
    "git": "git",
    "cpp": "cplusplus",
}

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

interface TechIconsProps {
    skills: string[]
    className?: string
    colored?: boolean
    limit?: number
    variant?: "circle" | "square"
    size?: "sm" | "md" | "lg" | "xl"
    noBorder?: boolean
}

export default function TechIcons({
    skills,
    className = "",
    colored = false,
    limit = 6,
    variant = "circle",
    size = "md",
    noBorder = false
}: TechIconsProps) {
    const validSkills = skills
        .map(s => s.toLowerCase())
        .filter(s => iconMap[s])
        .slice(0, limit)

    const sizeClasses = {
        sm: "w-6 h-6 p-1",
        md: "w-8 h-8 p-1.5",
        lg: "w-12 h-12 p-2.5",
        xl: "w-16 h-16 p-3.5"
    }

    return (
        <TooltipProvider>
            <div className={`flex items-center ${variant === "circle" ? "-space-x-2" : "gap-4"} ${className}`}>
                {validSkills.map((skill, index) => {
                    const isDarkIcon = ["next.js", "nextdotjs", "vercel", "express", "express.js", "apple", "apple music api", "bun", "socket.io", "shadcn/ui", "radixui"].includes(skill)
                    const iconSlug = iconMap[skill]

                    const iconUrl = isDarkIcon && colored
                        ? `https://cdn.simpleicons.org/${iconSlug}/white`
                        : `https://cdn.simpleicons.org/${iconSlug}${!colored ? "/white" : ""}`

                    return (
                        <Tooltip key={skill}>
                            <TooltipTrigger asChild>
                                <div
                                    className="relative group"
                                    style={{ zIndex: 30 - index }}
                                >
                                    <div className={`
                                        ${sizeClasses[size]}
                                        ${variant === "circle" ? "rounded-full" : "rounded-xl"}
                                        ${noBorder ? "border-0" : "border border-stone-800"}
                                        bg-stone-950/40
                                        flex items-center justify-center transition-all duration-300
                                        group-hover:-translate-y-1 group-hover:scale-110 group-hover:z-50
                                        ${colored ? "opacity-100" : "grayscale opacity-70 hover:grayscale-0 hover:opacity-100"}
                                    `}>
                                        <img
                                            src={iconUrl}
                                            alt={skill}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent
                                side="top"
                                className="bg-white text-black font-bold border-none shadow-[0_4px_20px_rgba(255,255,255,0.1)] py-1.5 px-3 rounded-lg"
                            >
                                <p className="capitalize">{skill.replace(".", ". ")}</p>
                                <TooltipPrimitive.Arrow className="fill-white" />
                            </TooltipContent>
                        </Tooltip>
                    )
                })}
            </div>
        </TooltipProvider>
    )
}
