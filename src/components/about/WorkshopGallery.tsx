'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80', alt: 'Wood grain close-up', span: 'col-span-1' },
  { src: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80', alt: 'Workshop tools', span: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80', alt: 'Hand tools on workbench', span: 'col-span-1' },
  { src: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=600&q=80', alt: 'Wood shavings from hand plane', span: 'col-span-1' },
  { src: 'https://images.unsplash.com/photo-1416339684178-3a239570f315?w=600&q=80', alt: 'Finished wood piece', span: 'col-span-1' },
  { src: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80', alt: 'Live edge wood slab', span: 'col-span-1' },
]

export default function WorkshopGallery() {
  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-wood-gold uppercase tracking-[0.3em] text-sm mb-3 font-body">
            Inside the Shop
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-off-white">
            The Workshop
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative aspect-square rounded-lg overflow-hidden group cursor-pointer ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
