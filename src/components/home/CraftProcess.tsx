'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'SELECT',
    description: 'Every piece starts with choosing the right wood. I hand-pick each board for grain, character, and strength.',
    icon: '🌳',
  },
  {
    number: '02',
    title: 'SHAPE',
    description: 'Shaped by hand using techniques passed down through generations. Mortise and tenon, dovetails, hand-cut joinery.',
    icon: '🔨',
  },
  {
    number: '03',
    title: 'FINISH',
    description: 'Finished with care for beauty that lasts a lifetime. Hand-rubbed oils, waxes, and lacquers that let the wood breathe.',
    icon: '✨',
  },
  {
    number: '04',
    title: 'DELIVER',
    description: 'Delivered to your door, ready to become part of your story. Every piece inspected, protected, and shipped with care.',
    icon: '📦',
  },
]

export default function CraftProcess() {
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
            The Process
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-off-white">
            From Tree to Table
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <span className="text-wood-gold/40 font-heading text-5xl font-bold block mb-2 transition-colors group-hover:text-wood-gold/70">
                {step.number}
              </span>
              <h3 className="font-heading text-xl text-off-white mb-3 tracking-wide">
                {step.title}
              </h3>
              <p className="text-off-white/60 text-sm leading-relaxed font-body">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
