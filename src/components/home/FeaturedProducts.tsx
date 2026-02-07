'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Product, formatPrice } from '@/lib/products'

// Placeholder images for products (royalty-free woodworking images)
const placeholderImages: Record<string, string> = {
  'heritage-dining-table': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
  'craftsman-coffee-table': 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&q=80',
  'heirloom-bookshelf': 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&q=80',
  'artisan-cutting-board': 'https://images.unsplash.com/photo-1605627079912-97c3810a11a4?w=600&q=80',
  'live-edge-console-table': 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80',
}

function getProductImage(slug: string): string {
  return placeholderImages[slug] || 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80'
}

export default function FeaturedProducts({ products }: { products: Product[] }) {
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
            From the Workshop
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-off-white">
            Featured Pieces
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.slice(0, 6).map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={getProductImage(product.slug)}
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
                      {formatPrice(product.price)}
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
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" href="/products">
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
