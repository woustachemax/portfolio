"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import type React from "react"
import { TextureLoader } from "three/src/loaders/TextureLoader"

export default function SpaceBackground({ children }: { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)

    const starGeometry = new THREE.BufferGeometry()
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 })

    const starVertices = []
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000
      const y = (Math.random() - 0.5) * 2000
      const z = -Math.random() * 2000
      starVertices.push(x, y, z)
    }

    starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starVertices, 3))
    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    const galaxyGeometry = new THREE.BufferGeometry()
    const galaxyMaterial = new THREE.PointsMaterial({ color: 0x1E3A8A, size: 0.2 })
    const galaxyVertices = []
    for (let i = 0; i < 5000; i++) {
      const radius = THREE.MathUtils.randFloat(10, 100)
      const angle = THREE.MathUtils.randFloat(0, Math.PI * 2)
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius
      const z = THREE.MathUtils.randFloat(-50, -150)
      galaxyVertices.push(x, y, z)
    }
    galaxyGeometry.setAttribute("position", new THREE.Float32BufferAttribute(galaxyVertices, 3))
    const galaxy = new THREE.Points(galaxyGeometry, galaxyMaterial)
    scene.add(galaxy)

    const createPlanet = (texture: string, size: number, position: [number, number, number]) => {
      const planetTexture = new TextureLoader().load(texture)
      const planetGeometry = new THREE.SphereGeometry(size, 32, 32)
      const planetMaterial = new THREE.MeshBasicMaterial({ map: planetTexture })
      const planet = new THREE.Mesh(planetGeometry, planetMaterial)
      planet.position.set(...position)
      scene.add(planet)
      return planet
    }

    const earth = createPlanet("/planets/earth.jpg", 5, [50, 20, -100])
    const mars = createPlanet("/planets/mars.jpg", 3, [-60, 10, -150])
    const jupiter = createPlanet("/planets/jupiter.jpg", 10, [100, -30, -200])
    const saturn = createPlanet("/planets/saturn.jpg", 8, [-120, 40, -250])

    camera.position.z = 1

    const animate = () => {
      requestAnimationFrame(animate)
      stars.rotation.z += 0.0001
      galaxy.rotation.z -= 0.0002
      earth.rotation.y += 0.001
      mars.rotation.y += 0.0008
      jupiter.rotation.y += 0.0005
      saturn.rotation.y += 0.0003
      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
      <div className="relative z-10 min-h-screen">{children}</div>
    </div>
  )
}

