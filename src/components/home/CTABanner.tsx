'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function CTABanner() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("/images/wood-types/wood-type-1.jpeg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal" />

      {/* Red accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-off-white mb-6">
            Ready for Something Built to Last?
          </h2>
          <p className="text-off-white/60 text-lg mb-4 font-body">
            Every piece is made to order. Let&rsquo;s create something together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="tel:+15185277449">
              Call (518) 527-7449
            </Button>
            <Button variant="outline" size="lg" href="/contact">
              Request a Custom Piece
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
