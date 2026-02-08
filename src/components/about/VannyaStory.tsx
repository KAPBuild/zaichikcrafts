'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const storyBeats = [
  {
    title: 'The Craftsman',
    text: `I'm Vannya Sokolov — friends call me Ivan. I came to America young, bringing just a few memories of my father and his woodworking. My mother and stepfather raised me here, and they taught me what really matters: hard work, honesty, and building something you can be proud of. I taught myself the craft, but those early memories of sawdust and hand tools never left me.`,
    image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=800&q=80',
    imageAlt: 'Vannya working in the workshop',
    reverse: false,
  },
  {
    title: 'The Promise',
    text: `Zaichik Crafts is my promise that real craftsmanship still exists and still matters. No shortcuts. No particle board. No overseas factories. Just real wood, real work, and furniture built to last generations. When you buy from me, you're getting something made by hand — my hands — in my American workshop.`,
    image: 'https://images.unsplash.com/photo-1416339684178-3a239570f315?w=800&q=80',
    imageAlt: 'Beautiful finished wood furniture',
    reverse: true,
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
