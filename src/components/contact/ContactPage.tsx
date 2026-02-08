'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'general',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, open mailto with the form data
    const subject = formData.type === 'custom'
      ? 'Custom Piece Request'
      : formData.type === 'question'
      ? 'Product Question'
      : 'General Inquiry'
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`
    window.location.href = `mailto:hello@zaichik-crafts.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative py-16 md:py-24 bg-charcoal overflow-hidden">
        {/* Eagle watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-[500px] h-[500px]" fill="currentColor">
            <path d="M50 10 L45 25 L35 20 L40 35 L25 35 L35 45 L20 50 L35 55 L25 65 L40 65 L35 80 L45 75 L50 90 L55 75 L65 80 L60 65 L75 65 L65 55 L80 50 L65 45 L75 35 L60 35 L65 20 L55 25 Z M42 40 L50 35 L58 40 L55 50 L58 60 L50 65 L42 60 L45 50 Z M30 30 L35 35 L30 40 L25 35 Z M70 30 L75 35 L70 40 L65 35 Z M35 42 A8 8 0 1 1 35 58 M65 42 A8 8 0 1 1 65 58" className="text-off-white" />
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-5 sm:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-wood-gold uppercase tracking-[0.3em] text-sm mb-3 font-body"
          >
            Let&rsquo;s Build Something
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl text-off-white mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-off-white/60 text-lg font-body"
          >
            Have a custom piece in mind? Want to ask about a product? Or just want to talk woodwork? Reach out.
          </motion.p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 md:py-24 bg-brand-black">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl text-off-white mb-6">
                Talk to Vannya Directly
              </h2>
              <p className="text-off-white/60 text-base leading-relaxed mb-8 font-body">
                Every great piece starts with a conversation. Tell me what you&rsquo;re thinking — the wood, the size, the purpose. I&rsquo;ll give you an honest answer and a fair price. No sales pitch, just craftsmanship.
              </p>

              {/* Phone */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-off-white font-heading text-lg mb-1">Call or Text</p>
                    <a href="tel:+15185277449" className="text-wood-gold text-xl font-heading hover:underline underline-offset-4 transition-colors">
                      (518) 527-7449
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-off-white font-heading text-lg mb-1">Email</p>
                    <a href="mailto:hello@zaichik-crafts.com" className="text-wood-gold text-lg font-body hover:underline underline-offset-4 transition-colors">
                      hello@zaichik-crafts.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Workshop photo */}
              <div className="mt-10 relative aspect-[16/10] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/workshop/workshop.jpeg"
                  alt="Zaichik Crafts workshop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="font-heading text-3xl text-off-white mb-6">
                Send a Request
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-off-white/60 text-sm font-body mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-charcoal border border-white/10 rounded px-4 py-3 text-off-white font-body focus:border-wood-gold focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-off-white/60 text-sm font-body mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-charcoal border border-white/10 rounded px-4 py-3 text-off-white font-body focus:border-wood-gold focus:outline-none transition-colors"
                      placeholder="john@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-off-white/60 text-sm font-body mb-2">
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-charcoal border border-white/10 rounded px-4 py-3 text-off-white font-body focus:border-wood-gold focus:outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="type" className="block text-off-white/60 text-sm font-body mb-2">
                    What&rsquo;s this about?
                  </label>
                  <select
                    id="type"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full bg-charcoal border border-white/10 rounded px-4 py-3 text-off-white font-body focus:border-wood-gold focus:outline-none transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="custom">Custom Piece Request</option>
                    <option value="question">Product Question</option>
                    <option value="wholesale">Wholesale / Bulk Order</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-off-white/60 text-sm font-body mb-2">
                    Tell me what you&rsquo;re thinking
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-charcoal border border-white/10 rounded px-4 py-3 text-off-white font-body focus:border-wood-gold focus:outline-none transition-colors resize-none"
                    placeholder="Describe what you have in mind — dimensions, wood type, finish, budget, anything. The more detail, the better."
                  />
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  type="submit"
                >
                  {submitted ? 'Opening Email...' : 'Send Message'}
                </Button>

                <p className="text-off-white/30 text-xs text-center font-body">
                  Or skip the form and call me directly at{' '}
                  <a href="tel:+15185277449" className="text-wood-gold hover:underline">(518) 527-7449</a>
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
