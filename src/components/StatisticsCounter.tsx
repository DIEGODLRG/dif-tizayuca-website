'use client'

import { useState, useEffect, useRef } from 'react'

interface Counter {
  id: number
  value: number
  target: number
  label: string
}

export default function StatisticsCounter({ resetTrigger }: { resetTrigger: boolean }) {
  const [counters, setCounters] = useState<Counter[]>([
    { id: 1, value: 0, target: 3200, label: 'Beneficiarios con atención psicológica en los Centros PAMAR' },
    { id: 2, value: 0, target: 20000, label: 'Desayunos fríos entregados a beneficiarios del Programa de Desayunos Escolares' },
    { id: 3, value: 0, target: 3600, label: 'Pacientes Beneficiarios en la Unidad Básica de Rehabilitación' },
    { id: 4, value: 0, target: 550, label: 'Credenciales expedidas para personas Adultas Mayores en Casas de Día' },
  ])

  const counterRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
          setCounters(prevCounters => prevCounters.map(counter => ({ ...counter, value: 0 })))
        }
      },
      { threshold: 0.1 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [])

  useEffect(() => {
    let animationFrameId: number

    const animate = () => {
      setCounters(prevCounters =>
        prevCounters.map(counter => {
          if (counter.value < counter.target) {
            const increment = Math.ceil((counter.target - counter.value) / 100)
            return { ...counter, value: Math.min(counter.value + increment, counter.target) }
          }
          return counter
        })
      )

      if (counters.some(counter => counter.value < counter.target)) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    if (isVisible) {
      animationFrameId = requestAnimationFrame(animate)
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isVisible, counters])

  useEffect(() => {
    setCounters(prevCounters => prevCounters.map(counter => ({ ...counter, value: 0 })))
  }, [resetTrigger])

  return (
    <div ref={counterRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {counters.map((counter) => (
        <div key={counter.id} className="bg-white rounded-lg p-6 shadow-md text-center">
          <div className="text-2xl md:text-4xl font-bold text-pink-600 mb-2">
            +{Math.round(counter.value).toLocaleString('es-MX')}
          </div>
          <p className="text-xs md:text-sm">{counter.label}</p>
        </div>
      ))}
    </div>
  )
}