import productsData from '@/data/products.json'

export type Product = {
  id: string
  slug: string
  name: string
  price: number
  category: string
  featured: boolean
  shortDescription: string
  description: string
  images: string[]
  dimensions: string
  wood: string
  finish: string
  inStock: boolean
}

const products: Product[] = productsData as Product[]

export function getAllProducts(): Product[] {
  return products
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured)
}

export function getCategories(): string[] {
  return Array.from(new Set(products.map(p => p.category)))
}

export function formatPrice(price: number): string {
  if (price === 0) return 'Contact for Quote'
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(price)
}
