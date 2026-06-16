'use client'

import { useEffect, useRef } from 'react'

export function SimplePixelBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()

    // Particle system
    const particles: Array<{
      x: number
      y: number
      size: number
      targetSize: number
      maxSize: number
      vx: number
      vy: number
      age: number
      maxAge: number
      opacity: number
    }> = []

    // Create initial particles
    const createParticles = () => {
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      for (let x = 0; x < canvas.width; x += 20) {
        for (let y = 0; y < canvas.height; y += 20) {
          const dx = x - centerX
          const dy = y - centerY
          const distance = Math.sqrt(dx * dx + dy * dy)
          const delay = distance * 0.003

          particles.push({
            x,
            y,
            size: 0,
            targetSize: 2,
            maxSize: 2,
            vx: dx * 0.0001,
            vy: dy * 0.0001,
            age: -delay * 1000,
            maxAge: 2000,
            opacity: 0,
          })
        }
      }
    }

    createParticles()

    // Animation loop
    let animationId: number
    let lastTime = Date.now()

    const animate = () => {
      animationId = requestAnimationFrame(animate)

      const now = Date.now()
      const deltaTime = now - lastTime
      lastTime = now

      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (const particle of particles) {
        particle.age += deltaTime

        // Grow particle
        if (particle.age < 300) {
          particle.size = (particle.age / 300) * particle.maxSize
          particle.opacity = particle.age / 300
        } else if (particle.age < 1700) {
          particle.size = particle.maxSize
          particle.opacity = 1
        } else {
          const fadeOut = Math.max(0, 1 - (particle.age - 1700) / 300)
          particle.size = particle.maxSize * fadeOut
          particle.opacity = fadeOut
        }

        // Move particle outward
        particle.x += particle.vx * deltaTime
        particle.y += particle.vy * deltaTime

        // Draw particle
        if (particle.opacity > 0 && particle.size > 0) {
          ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()
        }

        // Reset particle
        if (particle.age > particle.maxAge) {
          particle.age = -Math.random() * 500
        }
      }
    }

    animate()

    // Handle resize
    const handleResize = () => {
      setCanvasSize()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 top-0 left-0 w-screen h-screen z-0 pointer-events-none"
    />
  )
}
