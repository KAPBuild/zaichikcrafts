'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-brand-black to-warm-gray" />

      {/* Double-headed eagle watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-[600px] h-[600px]" fill="currentColor">
          <path d="M50 10 L45 25 L35 20 L40 35 L25 35 L35 45 L20 50 L35 55 L25 65 L40 65 L35 80 L45 75 L50 90 L55 75 L65 80 L60 65 L75 65 L65 55 L80 50 L65 45 L75 35 L60 35 L65 20 L55 25 Z M42 40 L50 35 L58 40 L55 50 L58 60 L50 65 L42 60 L45 50 Z M30 30 L35 35 L30 40 L25 35 Z M70 30 L75 35 L70 40 L65 35 Z M35 42 A8 8 0 1 1 35 58 M65 42 A8 8 0 1 1 65 58" className="text-off-white" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-5">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-wood-gold uppercase tracking-[0.3em] text-sm mb-4 font-body"
        >
          Third-Generation Craftsman
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl text-off-white"
        >
          VANNYA SOKOLOV
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-off-white/60 text-lg mt-4 font-body tracking-wide"
        >
          <span className="text-wood-gold">Old-world heritage.</span> American craftsmanship.
        </motion.p>
      </div>
    </section>
  )
}
