'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { Product, formatPrice } from '@/lib/products'
import { useCart } from '@/lib/cart-context'

const placeholderImages: Record<string, string> = {
  'heritage-dining-table': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
  'craftsman-coffee-table': 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&q=80',
  'workshop-end-table': 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80',
  'heirloom-bookshelf': 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80',
  'floating-wall-shelf-set': 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
  'artisan-cutting-board': 'https://images.unsplash.com/photo-1605627079912-97c3810a11a4?w=800&q=80',
  'end-grain-butcher-block': 'https://images.unsplash.com/photo-1605627079912-97c3810a11a4?w=800&q=80',
  'hand-carved-bowl': 'https://images.unsplash.com/photo-1416339684178-3a239570f315?w=800&q=80',
  'wooden-serving-tray': 'https://images.unsplash.com/photo-1416339684178-3a239570f315?w=800&q=80',
  'live-edge-console-table': 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80',
  'rustic-coat-rack': 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80',
  'custom-commission': 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80',
}

function getProductImage(slug: string): string {
  return placeholderImages[slug] || 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80'
}

export default function ProductDetail({ product, relatedProducts }: { product: Product; relatedProducts: Product[] }) {
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { dispatch } = useCart()
  const isCustom = product.price === 0

  const handleAddToCart = () => {
    if (isCustom) return
    dispatch({ type: 'ADD_ITEM', product, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-charcoal py-4">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <nav className="text-sm text-off-white/50 font-body flex items-center gap-2">
            <Link href="/" className="hover:text-wood-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-wood-gold transition-colors">Products</Link>
            <span>/</span>
            <span className="text-off-white/80">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 md:py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={getProductImage(product.slug)}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-wood-gold uppercase tracking-[0.2em] text-sm font-body">
                {product.category}
              </span>
              <h1 className="font-heading text-4xl md:text-5xl text-off-white mt-2 mb-4">
                {product.name}
              </h1>
              <p className="text-brand-red font-heading text-3xl mb-6">
                {isCustom ? 'Starting at $500' : formatPrice(product.price)}
              </p>
              <p className="text-off-white/70 text-base leading-relaxed mb-8 font-body">
                {product.shortDescription}
              </p>

              {/* Specs */}
              <div className="border-t border-b border-white/10 py-6 mb-8 space-y-3">
                <div className="flex justify-between text-sm font-body">
                  <span className="text-off-white/50">Dimensions</span>
                  <span className="text-off-white">{product.dimensions}</span>
                </div>
                <div className="flex justify-between text-sm font-body">
                  <span className="text-off-white/50">Wood</span>
                  <span className="text-off-white">{product.wood}</span>
                </div>
                <div className="flex justify-between text-sm font-body">
                  <span className="text-off-white/50">Finish</span>
                  <span className="text-off-white">{product.finish}</span>
                </div>
                <div className="flex justify-between text-sm font-body">
                  <span className="text-off-white/50">Status</span>
                  <span className="flex items-center gap-2 text-off-white">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    {product.inStock ? 'In Stock' : 'Made to Order'}
                  </span>
                </div>
              </div>

              {/* Quantity + Add to Cart */}
              {!isCustom ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-off-white/50 text-sm font-body">Qty:</span>
                    <div className="flex items-center">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 bg-wood-dark text-off-white rounded-l flex items-center justify-center transition-all duration-[120ms] shadow-[0_3px_0_#3d3530] hover:-translate-y-[1px] hover:shadow-[0_4px_0_#3d3530] active:translate-y-[2px] active:shadow-[0_1px_0_#3d3530]"
                        aria-label="Decrease quantity"
                      >
                        &minus;
                      </button>
                      <span className="w-12 h-10 bg-warm-gray text-off-white flex items-center justify-center text-sm font-body">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(Math.min(10, quantity + 1))}
                        className="w-10 h-10 bg-wood-dark text-off-white rounded-r flex items-center justify-center transition-all duration-[120ms] shadow-[0_3px_0_#3d3530] hover:-translate-y-[1px] hover:shadow-[0_4px_0_#3d3530] active:translate-y-[2px] active:shadow-[0_1px_0_#3d3530]"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    onClick={handleAddToCart}
                  >
                    {added ? 'Added \u2713' : 'Add to Cart'}
                  </Button>
                </div>
              ) : (
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  href="mailto:hello@zaichik-crafts.com?subject=Custom Commission Inquiry"
                >
                  Request a Quote
                </Button>
              )}
            </motion.div>
          </div>

          {/* Full description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 md:mt-24 max-w-3xl"
          >
            <h2 className="font-heading text-2xl text-off-white mb-4">About This Piece</h2>
            <p className="text-off-white/70 leading-relaxed font-body">{product.description}</p>

            <h3 className="font-heading text-xl text-off-white mt-10 mb-3">Care Instructions</h3>
            <p className="text-off-white/60 text-sm leading-relaxed font-body">
              Wipe clean with a soft, dry cloth. For oiled finishes, reapply food-safe mineral oil every 3-6 months. Avoid prolonged exposure to direct sunlight or excessive moisture. With proper care, this piece will last for generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-24 bg-brand-black">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <h2 className="font-heading text-3xl text-off-white mb-10 text-center">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <Card key={p.id}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={getProductImage(p.slug)}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg text-off-white mb-1">{p.name}</h3>
                    <p className="text-wood-gold font-heading">{p.price === 0 ? 'From $500' : formatPrice(p.price)}</p>
                    <Button variant="secondary" size="sm" href={`/products/${p.slug}`} className="mt-3">
                      View Details
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
