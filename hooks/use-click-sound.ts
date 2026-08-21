"use client"

import { useCallback } from "react"
import { playClick } from "@/lib/sound"

export function useClickSound(volume = 0.05) {
  return useCallback(() => playClick(volume), [volume])
}
