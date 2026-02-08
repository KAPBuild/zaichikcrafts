import Hero from '@/components/home/Hero'
import BrandStatement from '@/components/home/BrandStatement'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import CraftProcess from '@/components/home/CraftProcess'
import CTABanner from '@/components/home/CTABanner'
import { getFeaturedProducts } from '@/lib/products'

export default function HomePage() {
  const featured = getFeaturedProducts()

  return (
    <>
      <Hero />
      <BrandStatement />
      <CTABanner />
      <FeaturedProducts products={featured} />
      <CraftProcess />
    </>
  )
}
