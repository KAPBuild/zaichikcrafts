import type { Metadata } from 'next'
import { getAllProducts, getCategories } from '@/lib/products'
import ProductCatalog from '@/components/products/ProductCatalog'

export const metadata: Metadata = {
  title: 'The Collection',
  description: 'Browse our handcrafted woodworking collection — tables, shelving, cutting boards, decorative pieces, and custom commissions.',
}

export default function ProductsPage() {
  const products = getAllProducts()
  const categories = getCategories()

  return <ProductCatalog products={products} categories={categories} />
}
