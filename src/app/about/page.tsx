import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import VannyaStory from '@/components/about/VannyaStory'
import Values from '@/components/about/Values'
import WorkshopGallery from '@/components/about/WorkshopGallery'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Our Story',
  description: "The story of Vannya Sokolov and Zaichik Crafts — two generations of American woodworking heritage.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <VannyaStory />
      <Values />
      <WorkshopGallery />
      <CTABanner />
    </>
  )
}
