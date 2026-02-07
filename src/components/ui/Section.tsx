'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  bg?: 'dark' | 'light' | 'accent' | 'warm'
  className?: string
  animate?: boolean
  id?: string
}

const bgStyles = {
  dark: 'bg-charcoal',
  light: 'bg-off-white text-charcoal',
  accent: 'bg-warm-gray',
  warm: 'bg-brand-black',
}

export default function Section({
  children,
  bg = 'dark',
  className,
  animate = true,
  id,
}: SectionProps) {
  const classes = cn('py-20 md:py-28 lg:py-32', bgStyles[bg], className)

  if (!animate) {
    return (
      <section id={id} className={classes}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {children}
        </div>
      </section>
    )
  }

  return (
    <motion.section
      id={id}
      className={classes}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {children}
      </div>
    </motion.section>
  )
}
