'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Product, formatPrice } from '@/lib/products'

export default function ProductCatalog({ products, categories }: { products: Product[]; categories: string[] }) {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? products
    : products.filter(p => p.category === activeFilter)

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 md:py-24 bg-charcoal text-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-wood-gold uppercase tracking-[0.3em] text-sm mb-3 font-body"
          >
            Handcrafted Woodwork
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl text-off-white mb-4"
          >
            The Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-off-white/60 text-lg max-w-xl mx-auto font-body"
          >
            Every piece is built by hand in our American workshop. No two are exactly alike.
          </motion.p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-12 md:py-16 bg-brand-black">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Category filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {['All', ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-sm uppercase tracking-wider font-body rounded transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-brand-red text-off-white shadow-[0_2px_0_#5a0000]'
                    : 'text-off-white/60 hover:text-off-white border border-white/10 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-wood-gold uppercase tracking-wider font-body">
                          {product.category}
                        </span>
                        <span className="text-off-white/20">|</span>
                        <span className="text-xs text-off-white/50 font-body">
                          {product.wood}
                        </span>
                      </div>
                      <h3 className="font-heading text-xl text-off-white mb-2">
                        {product.name}
                      </h3>
                      <p className="text-off-white/60 text-sm mb-4 line-clamp-2 font-body">
                        {product.shortDescription}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-wood-gold font-heading text-lg">
                          {product.price === 0 ? 'From $100' : formatPrice(product.price)}
                        </span>
                        <Button
                          variant="secondary"
                          size="sm"
                          href={`/products/${product.slug}`}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
