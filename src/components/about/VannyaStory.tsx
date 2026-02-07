'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const storyBeats = [
  {
    title: 'The Father',
    text: `I grew up with sawdust in my hair and the smell of fresh-cut oak. My father didn't just build furniture — he built things that mattered. Every chair, every table, every shelf came with a lesson. Measure twice. Respect the grain. Never rush the finish. His workshop was my classroom, and the wood was our language.`,
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80',
    imageAlt: 'Woodworking workshop with hand tools',
    reverse: false,
  },
  {
    title: 'The Son',
    text: `I took what my father taught me and built something new. Every piece I make carries his lessons — patience, precision, respect for the wood. But I'm not copying him. I'm taking those old-world techniques and building furniture for how people live now. Clean lines, honest materials, built right here in America. No shortcuts. No particle board. Just real wood and real work.`,
    image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=800&q=80',
    imageAlt: 'Craftsman working with wood plane',
    reverse: true,
  },
  {
    title: 'The Vision',
    text: `Zaichik Crafts isn't just a business. It's a promise that real craftsmanship still exists, still matters, and is built right here in America. Every piece that leaves my workshop carries a piece of my family's story. I don't do trends. I build things that work and things that last. That's it.`,
    image: 'https://images.unsplash.com/photo-1416339684178-3a239570f315?w=800&q=80',
    imageAlt: 'Beautiful finished wood furniture',
    reverse: false,
  },
]

export default function VannyaStory() {
  return (
    <section className="py-24 md:py-32 bg-off-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {storyBeats.map((beat, i) => (
          <motion.div
            key={beat.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`flex flex-col ${beat.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 md:gap-16 items-center ${i < storyBeats.length - 1 ? 'mb-24 md:mb-32' : ''}`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={beat.image}
                  alt={beat.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <span className="text-wood-gold uppercase tracking-[0.2em] text-sm font-body block mb-3">
                {`Chapter ${i + 1}`}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
                {beat.title}
              </h2>
              <p className="text-warm-gray/80 text-base leading-relaxed font-body">
                {beat.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
