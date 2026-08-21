"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { playClick } from "@/lib/sound"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => {
                playClick()
                setTheme(theme === "light" ? "dark" : "light")
            }}
            className="h-7 w-7 sm:h-8 sm:w-8 text-foreground/60 hover:text-foreground hover:bg-accent hover:scale-110 rounded-full transition-all duration-300"
        >
            <Sun className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
