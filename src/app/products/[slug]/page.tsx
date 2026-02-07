import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getAllProducts, getProductBySlug } from '@/lib/products'
import ProductDetail from '@/components/products/ProductDetail'

export async function generateStaticParams() {
  return getAllProducts().map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return { title: 'Product Not Found' }
  return {
    title: product.name,
    description: product.shortDescription,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const allProducts = getAllProducts()
  const related = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return <ProductDetail product={product} relatedProducts={related} />
}
