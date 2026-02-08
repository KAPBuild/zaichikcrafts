import type { Metadata } from 'next'
import ContactPage from '@/components/contact/ContactPage'

export const metadata: Metadata = {
  title: 'Contact & Custom Requests',
  description: 'Get in touch with Vannya Sokolov at Zaichik Crafts. Request a custom piece, ask a question, or just say hello.',
}

export default function Contact() {
  return <ContactPage />
}
