'use client'

import { motion } from 'framer-motion'

export default function BrandStatement() {
  return (
    <section className="py-24 md:py-32 bg-off-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-wood-gold text-5xl md:text-6xl font-heading mb-8">&ldquo;</div>
          <blockquote className="font-heading text-2xl sm:text-3xl md:text-4xl text-charcoal leading-snug mb-8">
            My father built furniture that outlasted him. I build furniture that will outlast me.
          </blockquote>
          <p className="text-wood-dark text-sm uppercase tracking-[0.2em] font-body">
            &mdash; Vannya Sokolov, Founder
          </p>
        </motion.div>
      </div>
    </section>
  )
}
