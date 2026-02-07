'use client'

import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-brand-black to-warm-gray" />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1920&q=80")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center px-5">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-wood-gold uppercase tracking-[0.3em] text-sm mb-4 font-body"
        >
          Built on Heritage
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl text-off-white"
        >
          OUR STORY
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-off-white/60 text-lg mt-4 font-body"
        >
          Two generations of American craftsmanship
        </motion.p>
      </div>
    </section>
  )
}
