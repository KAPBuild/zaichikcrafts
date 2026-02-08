'use client'

import { motion } from 'framer-motion'

export default function WorkshopGallery() {
  return (
    <section className="py-24 md:py-32 bg-off-white relative overflow-hidden">
      {/* Double-headed eagle watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-[600px] h-[600px]" fill="currentColor">
          <path d="M50 10 L45 25 L35 20 L40 35 L25 35 L35 45 L20 50 L35 55 L25 65 L40 65 L35 80 L45 75 L50 90 L55 75 L65 80 L60 65 L75 65 L65 55 L80 50 L65 45 L75 35 L60 35 L65 20 L55 25 Z M42 40 L50 35 L58 40 L55 50 L58 60 L50 65 L42 60 L45 50 Z M30 30 L35 35 L30 40 L25 35 Z M70 30 L75 35 L70 40 L65 35 Z M35 42 A8 8 0 1 1 35 58 M65 42 A8 8 0 1 1 65 58" className="text-charcoal" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-brand-red uppercase tracking-[0.3em] text-sm mb-4 font-body">
            Our Promise
          </p>
          <p className="font-heading text-3xl md:text-4xl text-charcoal mb-8 leading-relaxed">
            <span className="text-brand-red">Old-world heritage.</span> American craftsmanship.
          </p>
          <p className="text-warm-gray text-lg leading-relaxed font-body">
            Every piece that leaves my workshop is made in America, by me, using solid wood and techniques passed down through generations. That's not a marketing slogan. That's a guarantee.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
