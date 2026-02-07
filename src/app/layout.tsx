import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { CartProvider } from '@/lib/cart-context'

export const metadata: Metadata = {
  title: {
    default: 'Zaichik Crafts — Handcrafted American Woodworking',
    template: '%s | Zaichik Crafts',
  },
  description:
    'Second-generation handcrafted woodworking by Vannya Sokolov. Custom tables, shelving, cutting boards, and more. American-made, built to last.',
  keywords: [
    'woodworking',
    'handmade furniture',
    'custom wood',
    'American craftsmanship',
    'Zaichik Crafts',
    'Vannya Sokolov',
  ],
  authors: [{ name: 'Vannya Sokolov' }],
  openGraph: {
    title: 'Zaichik Crafts — Handcrafted American Woodworking',
    description:
      'Second-generation handcrafted woodworking. Custom tables, shelving, cutting boards, and more.',
    url: 'https://zaichik-crafts.com',
    siteName: 'Zaichik Crafts',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <CartProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
