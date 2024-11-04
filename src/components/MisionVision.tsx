'use client'

import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const MisionVision: React.FC = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-24 bg-gradient-to-b from-pink-100 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h2 className="text-5xl font-bold text-pink-600 mb-6 text-center">MISIÓN</h2>
            <p className="text-lg text-gray-700 mb-6">
              Brindar asistencia social integral a las familias de Tizayuca, promoviendo su bienestar y desarrollo
              a través de programas y servicios que fortalezcan los valores familiares y mejoren su calidad de vida.
            </p>
            <div className="w-24 h-2 bg-pink-600 mx-auto md:mx-0"></div>
          </motion.div>
          <motion.div variants={itemVariants} className="relative h-64 md:h-96">
            <div className="absolute inset-0 bg-pink-200 rounded-lg transform rotate-3 shadow-lg"></div>
            <Image
              src="/images/DIF-7.jpg"
              alt="Familia feliz en Tizayuca"
              fill
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md transform -rotate-3 transition-transform hover:rotate-0 duration-300"
            />
          </motion.div>
        </motion.div>

        <motion.div
          animate={controls}
          initial="hidden"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24"
        >
          <motion.div variants={itemVariants} className="relative h-64 md:h-96 order-2 md:order-1">
            <div className="absolute inset-0 bg-blue-200 rounded-lg transform -rotate-3 shadow-lg"></div>
            <Image
              src="/images/DIF 2.jpg"
              alt="Futuro próspero para Tizayuca"
              fill
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md transform rotate-3 transition-transform hover:rotate-0 duration-300"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="text-center md:text-left order-1 md:order-2">
            <h2 className="text-5xl font-bold text-blue-600 mb-6 text-center">VISIÓN</h2>
            <p className="text-lg text-gray-700 mb-6">
              Ser un organismo líder en la prestación de servicios de asistencia social, reconocido por su
              innovación, eficiencia y compromiso con el bienestar integral de las familias de Tizayuca,
              contribuyendo a una sociedad más justa, equitativa y solidaria.
            </p>
            <div className="w-24 h-2 bg-blue-600 mx-auto md:mx-0"></div>
          </motion.div>
        </motion.div>

        <motion.div
          animate={controls}
          initial="hidden"
          variants={containerVariants}
          className="mt-24 text-center"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-800 mb-8">
            Nuestros Valores
          </motion.h2>
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Compromiso', 'Empatía', 'Integridad', 'Respeto'].map((valor, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105 duration-300"
              >
                <h3 className="text-xl font-semibold text-pink-600 mb-2">{valor}</h3>
                <p className="text-gray-600">Esencial en nuestra labor diaria</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default MisionVision