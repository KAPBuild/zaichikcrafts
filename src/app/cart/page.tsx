'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { useCart } from '@/lib/cart-context'
import { formatPrice } from '@/lib/products'
import { useState } from 'react'

const placeholderImages: Record<string, string> = {
  'heritage-dining-table': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=80',
  'craftsman-coffee-table': 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=200&q=80',
  'workshop-end-table': 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=200&q=80',
  'heirloom-bookshelf': 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=200&q=80',
  'floating-wall-shelf-set': 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=200&q=80',
  'artisan-cutting-board': 'https://images.unsplash.com/photo-1605627079912-97c3810a11a4?w=200&q=80',
  'end-grain-butcher-block': 'https://images.unsplash.com/photo-1605627079912-97c3810a11a4?w=200&q=80',
  'hand-carved-bowl': 'https://images.unsplash.com/photo-1416339684178-3a239570f315?w=200&q=80',
  'wooden-serving-tray': 'https://images.unsplash.com/photo-1416339684178-3a239570f315?w=200&q=80',
  'live-edge-console-table': 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=200&q=80',
  'rustic-coat-rack': 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=200&q=80',
  'custom-commission': 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=200&q=80',
}

function getProductImage(slug: string): string {
  return placeholderImages[slug] || 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=200&q=80'
}

export default function CartPage() {
  const { state, dispatch } = useCart()
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: state.items.map(item => ({
            productId: item.product.id,
            name: item.product.name,
            price: item.product.price,
            quantity: item.quantity,
            image: null,
          })),
        }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch {
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (state.items.length === 0) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-charcoal">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center px-5"
        >
          <h1 className="font-heading text-4xl md:text-5xl text-off-white mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-off-white/60 text-lg mb-8 font-body">
            Looks like you haven&rsquo;t found the right piece yet.
          </p>
          <Button variant="primary" size="lg" href="/products">
            Browse the Collection
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen bg-charcoal">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 md:py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl md:text-5xl text-off-white mb-10"
        >
          Your Cart
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence mode="popLayout">
              {state.items.map((item) => (
                <motion.div
                  key={item.product.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-warm-gray rounded-lg p-4 flex gap-4 items-center"
                >
                  <div className="relative w-20 h-20 rounded overflow-hidden shrink-0">
                    <Image
                      src={getProductImage(item.product.slug)}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link href={`/products/${item.product.slug}`} className="font-heading text-off-white hover:text-wood-gold transition-colors text-sm md:text-base">
                      {item.product.name}
                    </Link>
                    <p className="text-off-white/40 text-xs font-body">{item.product.wood}</p>
                    <p className="text-wood-gold font-heading text-sm mt-1">
                      {formatPrice(item.product.price)}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => dispatch({ type: 'UPDATE_QUANTITY', productId: item.product.id, quantity: item.quantity - 1 })}
                      className="w-8 h-8 bg-wood-dark text-off-white rounded-l flex items-center justify-center text-sm transition-all duration-[120ms] shadow-[0_2px_0_#3d3530] active:translate-y-[2px] active:shadow-[0_0px_0_#3d3530]"
                      aria-label="Decrease quantity"
                    >
                      &minus;
                    </button>
                    <span className="w-8 h-8 bg-charcoal text-off-white flex items-center justify-center text-sm font-body">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => dispatch({ type: 'UPDATE_QUANTITY', productId: item.product.id, quantity: item.quantity + 1 })}
                      className="w-8 h-8 bg-wood-dark text-off-white rounded-r flex items-center justify-center text-sm transition-all duration-[120ms] shadow-[0_2px_0_#3d3530] active:translate-y-[2px] active:shadow-[0_0px_0_#3d3530]"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-off-white font-heading text-sm md:text-base">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                    <button
                      onClick={() => dispatch({ type: 'REMOVE_ITEM', productId: item.product.id })}
                      className="text-off-white/30 hover:text-brand-red text-xs mt-1 transition-colors font-body"
                    >
                      Remove
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Cart Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-warm-gray rounded-lg p-6 h-fit lg:sticky lg:top-24"
          >
            <h2 className="font-heading text-xl text-off-white mb-6">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm font-body">
                <span className="text-off-white/60">Subtotal ({state.totalItems} items)</span>
                <span className="text-off-white">{formatPrice(state.totalPrice)}</span>
              </div>
              <div className="flex justify-between text-sm font-body">
                <span className="text-off-white/60">Shipping</span>
                <span className="text-off-white/60 italic">Calculated at checkout</span>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 mb-6">
              <div className="flex justify-between font-heading text-xl">
                <span className="text-off-white">Total</span>
                <span className="text-wood-gold">{formatPrice(state.totalPrice)}</span>
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={handleCheckout}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Proceed to Checkout'}
            </Button>

            <Link
              href="/products"
              className="block text-center text-off-white/40 hover:text-wood-gold text-sm mt-4 transition-colors font-body"
            >
              Continue Shopping
            </Link>

            <p className="text-off-white/20 text-xs text-center mt-6 font-body">
              Secure checkout powered by Stripe
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
