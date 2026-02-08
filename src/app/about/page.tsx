import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import VannyaStory from '@/components/about/VannyaStory'
import WorkshopGallery from '@/components/about/WorkshopGallery'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Our Story',
  description: "The story of Vannya Sokolov and Zaichik Crafts — old-world heritage meets American craftsmanship.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <VannyaStory />
      <WorkshopGallery />
      <CTABanner />
    </>
  )
}
