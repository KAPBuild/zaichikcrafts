import { getAllProducts } from '@/lib/products'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const products = getAllProducts()
  const baseUrl = 'https://zaichik-crafts.com'

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/products`, lastModified: new Date() },
    ...products.map(p => ({
      url: `${baseUrl}/products/${p.slug}`,
      lastModified: new Date(),
    })),
  ]
}
