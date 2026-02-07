'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { useCart } from '@/lib/cart-context'

export default function SuccessPage() {
  const { dispatch } = useCart()

  useEffect(() => {
    dispatch({ type: 'CLEAR_CART' })
  }, [dispatch])

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-charcoal">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-5 max-w-lg"
      >
        <div className="text-6xl mb-6">&#10003;</div>
        <h1 className="font-heading text-4xl md:text-5xl text-off-white mb-4">
          Thank You for Your Order
        </h1>
        <p className="text-off-white/60 text-lg mb-2 font-body">
          Your order has been placed. Vannya will begin crafting your piece shortly.
        </p>
        <p className="text-off-white/40 text-sm mb-10 font-body">
          A confirmation email has been sent to your inbox.
        </p>
        <Button variant="secondary" size="lg" href="/">
          Back to Home
        </Button>
      </motion.div>
    </div>
  )
}
