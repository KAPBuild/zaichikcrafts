'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const chapters = [
  {
    number: '01',
    title: 'Early Memory',
    text: `I was young when I last saw my father's workshop in Russia. I remember the smell of fresh wood shavings, the sound of hand tools, the way his hands moved with absolute certainty. That memory stayed with me. It was all I had of where I came from.`,
  },
  {
    number: '02',
    title: 'The American Way',
    text: `I came to America and learned that craftsmanship doesn't have a passport. My mother and stepfather taught me the value of hard work, of doing things right, of building with integrity. I carried those lessons forward, teaching myself what my early memory had whispered to me all those years.`,
  },
  {
    number: '03',
    title: 'The Craft',
    text: `Now I build. Every piece is made by my hands, in my workshop, using solid wood and techniques that respect both where I came from and where I live. This isn't nostalgia. It's a promise that good things, real things, still matter.`,
  },
]

export default function VannyaStory() {
  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main narrative */}
        <div className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-wood-gold uppercase tracking-[0.3em] text-sm mb-6 font-body">
              Who I Am
            </p>
            <h2 className="font-heading text-5xl md:text-6xl text-off-white mb-8 leading-[1.1]">
              I build things that matter.
            </h2>
            <p className="text-off-white/70 text-lg md:text-xl max-w-3xl leading-relaxed font-body">
              My name is Vannya Sokolov. I came to America as a child carrying one vivid memory: my father's hands working wood with absolute precision. That image never left me. It led me here — to a workshop of my own, where I craft furniture the only way I know how: with patience, real materials, and respect for the wood.
            </p>
          </motion.div>
        </div>

        {/* Three chapters timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {chapters.map((chapter, i) => (
            <motion.div
              key={chapter.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              {/* Number accent */}
              <div className="absolute -left-8 md:-left-12 top-0 text-6xl md:text-7xl font-heading text-brand-red/20">
                {chapter.number}
              </div>

              <div className="relative z-10 border-l-2 border-brand-red pl-6 md:pl-8">
                <h3 className="font-heading text-xl md:text-2xl text-off-white mb-4">
                  {chapter.title}
                </h3>
                <p className="text-off-white/60 text-base leading-relaxed font-body">
                  {chapter.text}
                </p>
              </div>

              {/* Connecting line (hidden on mobile) */}
              {i < chapters.length - 1 && (
                <div className="hidden md:block absolute left-0 top-full w-0.5 h-8 bg-gradient-to-b from-brand-red/40 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 pt-12 border-t border-white/10"
        >
          <p className="font-heading text-2xl md:text-3xl text-off-white leading-relaxed max-w-2xl">
            <span className="text-brand-red">Zaichik Crafts</span> is where old-world heritage meets American craftsmanship. Everything I build carries a piece of that journey.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
