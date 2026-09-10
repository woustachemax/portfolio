"use client"

import { useEffect, useRef } from "react"

export default function Cursor() {
  const rootRef = useRef<HTMLDivElement>(null)
  const rotRef = useRef<HTMLDivElement>(null)
  const shapeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(pointer: coarse)").matches) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const target = { ...pos }
    let prevX = pos.x
    let prevY = pos.y
    let angle = 0
    let raf = 0
    let alive = false

    const root = rootRef.current
    const rot = rotRef.current
    const shape = shapeRef.current

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX
      target.y = e.clientY
      if (!alive) {
        alive = true
        pos.x = prevX = target.x
        pos.y = prevY = target.y
        document.documentElement.classList.add("cursor-on")
        if (root) root.style.opacity = "1"
      }
    }

    const onLeave = () => {
      alive = false
      if (root) root.style.opacity = "0"
    }

    const interactive = 'a, button, input, textarea, select, summary, label, [role="button"]'
    const onOver = (e: MouseEvent) => {
      const hot = !!(e.target as Element)?.closest?.(interactive)
      root?.classList.toggle("is-hot", hot)
    }
    const onDown = () => root?.classList.add("is-press")
    const onUp = () => root?.classList.remove("is-press")

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.3
      pos.y += (target.y - pos.y) * 0.3

      const vx = pos.x - prevX
      const vy = pos.y - prevY
      prevX = pos.x
      prevY = pos.y
      const speed = Math.hypot(vx, vy)

      if (speed > 0.4) {
        const aimed = (Math.atan2(vy, vx) * 180) / Math.PI
        let delta = aimed - angle
        delta = (((delta + 180) % 360) + 360) % 360 - 180
        angle += delta * 0.22
      }

      const s = Math.min(speed / 24, 1)
      const sx = 1 + s * 0.95
      const sy = 1 - s * 0.3

      if (root) root.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
      if (rot) rot.style.transform = `rotate(${angle}deg)`
      if (shape) shape.style.transform = reduce ? "" : `scale(${sx}, ${sy})`

      raf = requestAnimationFrame(tick)
    }

    window.addEventListener("mousemove", onMove)
    document.addEventListener("mouseleave", onLeave)
    window.addEventListener("mouseover", onOver)
    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseleave", onLeave)
      window.removeEventListener("mouseover", onOver)
      window.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup", onUp)
      document.documentElement.classList.remove("cursor-on")
    }
  }, [])

  return (
    <div ref={rootRef} aria-hidden className="cursor-root" style={{ opacity: 0 }}>
      <div ref={rotRef} className="cursor-rot">
        <div className="cursor-idle">
          <div ref={shapeRef} className="cursor-shape">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M22 12 L3 3.5 L10 12 Z" fill="currentColor" fillOpacity="0.95" />
              <path d="M22 12 L10 12 L3 20.5 Z" fill="currentColor" fillOpacity="0.55" />
              <path
                d="M22 12 L10 12"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
