import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-charcoal">
      <div className="text-center px-5">
        <h1 className="font-heading text-6xl md:text-7xl text-off-white mb-4">404</h1>
        <h2 className="font-heading text-2xl md:text-3xl text-off-white mb-4">
          Wrong Turn in the Workshop
        </h2>
        <p className="text-off-white/60 text-lg mb-8 font-body">
          This page doesn&rsquo;t exist. Let&rsquo;s get you back.
        </p>
        <Button variant="primary" size="lg" href="/">
          Back to Home
        </Button>
      </div>
    </div>
  )
}
