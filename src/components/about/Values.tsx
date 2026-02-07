'use client'

import { motion } from 'framer-motion'

const values = [
  {
    title: 'HERITAGE',
    description: 'Built on generations of knowledge and tradition.',
    icon: '🏛️',
  },
  {
    title: 'QUALITY',
    description: 'Every joint, every finish — done right or done over.',
    icon: '⭐',
  },
  {
    title: 'AMERICAN-MADE',
    description: 'Sourced and built right here. No shortcuts.',
    icon: '🇺🇸',
  },
  {
    title: 'BUILT TO LAST',
    description: "We don't make things to replace. We make things to keep.",
    icon: '🔨',
  },
]

export default function Values() {
  return (
    <section className="py-24 md:py-32 bg-warm-gray">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-wood-gold uppercase tracking-[0.3em] text-sm mb-3 font-body">
            What We Stand For
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-off-white">
            Our Values
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 border border-white/5 rounded-lg"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="font-heading text-lg text-off-white mb-3 tracking-wide">
                {value.title}
              </h3>
              <div className="w-8 h-0.5 bg-brand-red mx-auto mb-3" />
              <p className="text-off-white/60 text-sm leading-relaxed font-body">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
