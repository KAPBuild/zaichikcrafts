'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax-feel gradient & wood texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-brand-black to-warm-gray" />

      {/* Animated wood grain bg image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <Image
            src="/images/logo.jpg"
            alt="Zaichik Crafts"
            width={80}
            height={80}
            className="rounded-full mx-auto shadow-lg shadow-black/40"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-wood-gold uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-body"
        >
          Handmade American Woodworking
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-off-white leading-[0.9] mb-4"
        >
          CRAFTED BY HAND.
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-off-white leading-[0.9] mb-8"
        >
          BUILT TO LAST.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-off-white/70 text-lg md:text-xl max-w-xl mx-auto mb-10 font-body"
        >
          American-made furniture and woodwork. Real wood. Real craft. Built to last.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="primary" size="lg" href="/products">
            Shop the Collection
          </Button>
          <Button variant="outline" size="lg" href="/about">
            Our Story
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-off-white/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-off-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
