'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const chapters = [
  {
    number: '01',
    title: 'The Engineer',
    text: `My grandfather was an engineer in Russia — a man who understood that everything worth building starts with precision. He worked with his hands his whole life, and he passed that down. Before I ever touched a piece of wood, I understood from him that craftsmanship isn't about decoration. It's about structure, integrity, and doing things right. He's the reason I build the way I do.`,
  },
  {
    number: '02',
    title: 'A New Country',
    text: `I came to America young, carrying pieces of a world I barely knew. My mother and stepfather raised me here and gave me everything — the work ethic, the values, the belief that you can build something from nothing. They've been incredible since the day we left Russia. Everything I am starts with them.`,
  },
  {
    number: '03',
    title: 'The Craft',
    text: `The memory of watching woodwork as a child never left me. My grandfather's precision. My father's workshop. It all came back through my hands. Now I build — every piece made in my workshop, using solid wood and techniques that honor three generations of making things that last. This isn't a hobby. It's heritage.`,
  },
]

export default function VannyaStory() {
  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Grandparents photo + intro */}
        <div className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
          >
            {/* Grandparents photo */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/family/grandparents.jpeg"
                  alt="Vannya's grandparents — the engineer and his wife"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <p className="text-off-white/40 text-xs mt-3 text-center italic font-body">
                My great-grandparents. Where it all began.
              </p>
            </div>

            {/* Intro text */}
            <div>
              <p className="text-wood-gold uppercase tracking-[0.3em] text-sm mb-6 font-body">
                Three Generations Deep
              </p>
              <h2 className="font-heading text-4xl md:text-5xl text-off-white mb-8 leading-[1.1]">
                I build things that matter.
              </h2>
              <p className="text-off-white/70 text-lg md:text-xl leading-relaxed font-body">
                My name is Vannya Sokolov. I&rsquo;m a third-generation craftsman. My grandfather was an engineer in Russia who built with precision and purpose. That legacy came through my father&rsquo;s workshop and into my hands. I came to America as a child, raised by my incredible mother and stepfather, and carried that heritage forward into everything I build today.
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
            <span className="text-brand-red">Zaichik Crafts</span> is where old-world heritage meets American craftsmanship. Three generations of building things that last.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
