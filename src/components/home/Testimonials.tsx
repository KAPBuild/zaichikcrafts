'use client'

import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'

const testimonials = [
  {
    quote: "The dining table Vannya built for us is the centerpiece of our home. Our kids will inherit this someday.",
    name: 'Sarah M.',
    location: 'Portland, OR',
  },
  {
    quote: "I've never seen craftsmanship like this. You can feel the love in every joint and edge.",
    name: 'Marcus T.',
    location: 'Austin, TX',
  },
  {
    quote: "Vannya understood exactly what I wanted. The bookshelf fits perfectly and the wood grain is gorgeous.",
    name: 'Emily R.',
    location: 'Denver, CO',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-wood-gold uppercase tracking-[0.3em] text-sm mb-3 font-body">
            What People Say
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-off-white">
            From Our Customers
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card className="p-8 h-full flex flex-col justify-between" hover={false}>
                <div>
                  <span className="text-wood-gold text-4xl font-heading block mb-4">&ldquo;</span>
                  <p className="text-off-white/80 text-base leading-relaxed italic font-body mb-6">
                    {t.quote}
                  </p>
                </div>
                <div>
                  <p className="text-off-white font-semibold text-sm font-body">{t.name}</p>
                  <p className="text-off-white/40 text-xs font-body">{t.location}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
