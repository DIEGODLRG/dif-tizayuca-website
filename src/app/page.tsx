'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Facebook, Instagram, Menu } from 'lucide-react'
import TikTokIcon from '../components/TikTokIcon'
import MisionVision from '../components/MisionVision'
import StatisticsCounterComponent from '../components/StatisticsCounter'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [resetCounter, setResetCounter] = useState(false)

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset
      setScrollPosition(currentScrollY)

      if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true)
      } else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsHeaderVisible(false)
      }

      if (currentScrollY === 0) {
        setResetCounter(prev => !prev)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isHeaderVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        {/* Black bar */}
        <div className="bg-black h-12 flex items-center justify-end px-4 md:px-16">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-white hover:text-pink-200 transition-colors flex items-center"
              >
                <span className="mr-2 hidden sm:inline">Buscar</span>
                <Search size={16} />
              </button>
              {isSearchOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg overflow-hidden z-20">
                  <form className="flex items-center p-2">
                    <input 
                      type="text" 
                      placeholder="Buscar..." 
                      className="flex-grow px-2 py-1 text-black"
                    />
                    <button type="submit" className="ml-2 text-black">
                      <Search size={16} />
                    </button>
                  </form>
                </div>
              )}
            </div>
            <a 
              href="https://www.facebook.com/DIFTizayuca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-pink-200 transition-colors"
            >
              <Facebook size={16} />
            </a>
            <a 
              href="https://www.instagram.com/diftizayuca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-pink-200 transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a 
              href="https://www.tiktok.com/@diftizayuca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-pink-200 transition-colors"
            >
              <TikTokIcon size={16} />
            </a>
          </div>
        </div>

        {/* Logo and navigation */}
        <div className={`transition-all duration-300 ${
          scrollPosition > 50 ? 'bg-pink-600' : 'bg-transparent'
        } h-20`}>
          <div className="container mx-auto px-4 h-full flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="relative w-20 h-20 md:w-28 md:h-28 -mt-1">
                <Image 
                  src="/images/LOGO-DIF2024-03.png" 
                  alt="Logo DIF Tizayuca" 
                  layout="fill" 
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
            </div>
            <button
              className="md:hidden bg-pink-700 text-white px-4 py-2 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
            <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 bg-pink-600 md:bg-transparent md:top-auto items-center -mt-1`}>
              <Link href="#" className="text-white hover:text-pink-200 transition-colors uppercase font-bold py-2 md:py-0 md:mr-[1.25rem]">INICIO</Link>
              <Link href="#" className="text-white hover:text-pink-200 transition-colors uppercase font-bold py-2 md:py-0 md:mx-[1.25rem]">PROGRAMAS</Link>
              <Link href="#" className="text-white hover:text-pink-200 transition-colors uppercase font-bold py-2 md:py-0 md:mx-[1.25rem]">NOSOTROS</Link>
              <Link href="#" className="text-white hover:text-pink-200 transition-colors uppercase font-bold py-2 md:py-0 md:mx-[1.25rem]">EVENTOS</Link>
              <Link href="#" className="text-white hover:text-pink-200 transition-colors uppercase font-bold py-2 md:py-0 md:mx-[1.25rem]">CONTACTO</Link>
              <Link href="#" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-colors uppercase md:ml-[1.25rem] mt-2 md:mt-0">
                REPORTA Y MEJORA
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero section with background image */}
        <section className="relative min-h-screen">
          <div className="absolute inset-0">
            <Image 
              src="/images/DIF 3.jpg"
              alt="Fondo DIF Tizayuca"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-pink-600 bg-opacity-55"></div>
          </div>
          <div className="relative z-10 flex flex-col justify-center items-center min-h-screen pb-16">
            <div className="relative w-[15rem] h-[15rem] md:w-[30rem] md:h-[30rem] mt-20 md:mt-40">
              <Image 
                src="/images/LOGO-DIF2024-03.png" 
                alt="Logo DIF Tizayuca" 
                layout="fill" 
                objectFit="contain"
              />
            </div>
          </div>
        </section>

        {/* Nosotros section */}
        <section className="py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 text-pink-600">NOSOTROS</h2>
                <p className="text-base md:text-lg mb-4 text-right text-gray-800">
                  En el Sistema Municipal DIF Tizayuca, nos dedicamos a mejorar la calidad de vida de las familias de nuestra comunidad. Nuestro equipo está comprometido con brindar asistencia social, promover el desarrollo integral de la familia y fomentar la inclusión de todos los sectores de la sociedad.
                </p>
                <p className="text-base md:text-lg text-right text-gray-800">
                  Trabajamos incansablemente para ofrecer programas y servicios que atienden las necesidades más apremiantes de nuestra población, siempre con un enfoque humano y cercano a la gente.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/images/DIF-6.jpg"
                  alt="Equipo DIF Tizayuca"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <MisionVision />

        {/* Información y Transparencia section */}
        <section className="py-12 md:py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <button className="bg-[#ff00f8] hover:bg-[#d600ce] text-white font-bold py-3 px-6 rounded-full transition-colors uppercase text-xl md:text-3xl w-full md:w-[32rem] mx-auto flex items-center justify-center">
                TRANSPARENCIA
              </button>
            </div>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-xl md:text-2xl font-semibold mb-4">Siempre cerca de nuestra gente</p>
              <p className="text-2xl md:text-4xl font-bold mb-6 text-[#ff00f8]">EN TIZAYUCA, EL APOYO ES NUESTRA MISIÓN</p>
              <p className="text-lg md:text-xl">
                Día con día, trabajamos para ser un aliado confiable, brindando respaldo y servicio a cada persona de nuestra comunidad.
              </p>
            </div>
            <StatisticsCounterComponent resetTrigger={resetCounter} />
          </div>
        </section>

        {/* Nuestros Servicios section */}
        <section className="py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Asistencia Social', 'Atención a Adultos Mayores', 'Apoyo a la Niñez'].map((service, index) => (
                <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md">
                  <h3 className="text-lg md:text-xl font-semibold mb-4">{service}</h3>
                  <p className="mb-4">Descripción breve del servicio y cómo beneficia a la comunidad de Tizayuca.</p>
                  <button className="text-pink-600 font-semibold hover:text-pink-800 transition-colors">Leer más</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-pink-600 py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">SMDIF Tizayuca</h3>
              <p>Prosperando desde el corazón</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contacto</h3>
              <p>Dirección: Allende S/N,Tizayuca Centro.C.P. 43800, Frente a Presidencia Municipal</p>
              <p>Teléfono: (123) 456-7890</p>
              <p>Email: contacto@diftizayuca.gob.mx</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-pink-200 transition-colors">Facebook</a>
                <a href="#" className="hover:text-pink-200 transition-colors">Twitter</a>
                <a href="#" className="hover:text-pink-200 transition-colors">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-pink-400 text-center">
            <p>&copy; 2024 SMDIF Tizayuca. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function StatisticsCounter({ resetTrigger }: { resetTrigger: boolean }) {
  const [counters, setCounters] = useState([
    { id: 1, value: 0, target: 3200, label: 'Beneficiarios con atención psicológica en los Centros PAMAR' },
    { id: 2, value: 0, target: 20000, label: 'Desayunos fríos entregados a beneficiarios del Programa de Desayunos Escolares' },
    { id: 3, value: 0, target: 3600, label: 'Pacientes Beneficiarios en la Unidad Básica de Rehabilitación' },
    { id: 4, value: 0, target: 550, label: 'Credenciales expedidas para personas Adultas Mayores en Casas de Día' },
  ])

  const counterRef = useRef<HTMLDivElement>(null)
  const  [isVisible, setIsVisible] = useState(false)

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