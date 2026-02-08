'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const chapters = [
  {
    number: '01',
    title: 'The Foundation',
    text: `I grew up watching skilled hands turn raw wood into something lasting. That left a mark. I learned early that real craftsmanship is about precision, patience, and respect for the material. Every piece I build carries that foundation.`,
  },
  {
    number: '02',
    title: 'The Method',
    text: `I work with solid wood — no particle board, no shortcuts. Every joint is cut with intention. Every surface is finished by hand. The techniques I use have been proven across generations. They produce furniture and woodwork that gets stronger with time, not weaker.`,
  },
  {
    number: '03',
    title: 'The Standard',
    text: `If it leaves my workshop, it's built to last. Period. I stand behind every piece with my name. Whether it's a coffee table, a wall piece, or a custom commission — the standard is the same. Built right, built once.`,
  },
]

export default function VannyaStory() {
  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Photo + intro */}
        <div className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
          >
            {/* Workshop photo */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/workshop/workshop.jpeg"
                  alt="Zaichik Crafts workshop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Intro text */}
            <div>
              <p className="text-wood-gold uppercase tracking-[0.3em] text-sm mb-6 font-body">
                About Zaichik Crafts
              </p>
              <h2 className="font-heading text-4xl md:text-5xl text-off-white mb-8 leading-[1.1]">
                Real wood. Real craft.
              </h2>
              <p className="text-off-white/70 text-lg md:text-xl leading-relaxed font-body">
                I&rsquo;m Vannya Sokolov, and I build handcrafted woodwork out of my American workshop. Every piece is made from solid wood, finished by hand, and built to a standard I&rsquo;d stake my name on. No mass production. No middlemen. Just craftsmanship you can see and feel.
              </p>
            </div>
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
            <span className="text-brand-red">Zaichik Crafts</span> — where tradition meets American craftsmanship. Built to last.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
