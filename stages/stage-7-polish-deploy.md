# Stage 7: Polish, SEO, Performance & Deploy

## Objective
Final round of polish, optimization, accessibility, SEO, and deployment to Cloudflare Pages via GitHub. Make everything production-ready.

## Tasks

### 7.1 Animation Polish Pass
Review every page and refine animations:

**Global animations to verify:**
- Page transitions (subtle fade between routes)
- Scroll-triggered section fade-ins (consistent timing: 0.5s duration, 0.1s stagger)
- Hero text entrance animation (staggered, cinematic)
- Product grid filter transitions (layout animation)
- Cart item add/remove animations

**ASMR / Sensory Polish:**
- Ensure all hover states are smooth (no janky transitions)
- Verify parallax effects don't cause performance issues on mobile
- If sound system was implemented: test click sounds, ensure muted by default
- Add subtle micro-interactions where missing:
  - Logo slight bounce on nav load
  - Testimonial cards gentle sway on hover
  - Product images subtle zoom on hover (transform: scale(1.03))

**3D Button Final Check (CRITICAL):**
Go through EVERY page and verify EVERY button:
- Has visible raised/3D appearance
- Lifts slightly on hover
- Depresses on click/active
- Transition is smooth (~120ms)
- Pages to check: Homepage, About, Products listing, Product detail, Cart, Success

### 7.2 Responsive Design Audit
Test at these breakpoints:
- 320px (small mobile)
- 375px (iPhone)
- 768px (tablet)
- 1024px (small desktop)
- 1280px (desktop)
- 1536px+ (large desktop)

**Common issues to fix:**
- Hero text too large on mobile (scale down)
- Product grid: 1 column on mobile, 2 on tablet, 3 on desktop
- Navigation hamburger works on mobile
- Cart page: summary stacks below items on mobile
- Images don't overflow containers
- Touch targets are at least 44x44px on mobile

### 7.3 Accessibility Audit
- All images have meaningful `alt` text
- Color contrast meets WCAG AA (especially off-white text on charcoal: check ratio)
- Focus states on all interactive elements (buttons, links, inputs)
- Keyboard navigation works (tab through nav, buttons, forms)
- ARIA labels on:
  - Hamburger menu button (`aria-label="Open menu"`)
  - Cart badge (`aria-label="Cart, 3 items"`)
  - Quantity selector buttons (`aria-label="Increase quantity"`)
  - Sound toggle (`aria-label="Toggle sound effects"`)
- Skip-to-content link at top of page
- Semantic HTML verified (`<main>`, `<nav>`, `<section>`, `<article>`, `<header>`, `<footer>`)
- Form inputs have associated labels (quantity selector)

### 7.4 SEO Configuration
Update `src/app/layout.tsx` metadata:

```typescript
export const metadata: Metadata = {
  title: {
    default: 'Zaichik Crafts — Handcrafted American Woodworking',
    template: '%s | Zaichik Crafts',
  },
  description: 'Second-generation handcrafted woodworking by Vannya Sokolov. Custom tables, shelving, cutting boards, and more. American-made, built to last.',
  keywords: ['woodworking', 'handmade furniture', 'custom wood', 'American craftsmanship', 'Zaichik Crafts', 'Vannya Sokolov'],
  authors: [{ name: 'Vannya Sokolov' }],
  openGraph: {
    title: 'Zaichik Crafts — Handcrafted American Woodworking',
    description: 'Second-generation handcrafted woodworking. Custom tables, shelving, cutting boards, and more.',
    url: 'https://zaichik-crafts.com',
    siteName: 'Zaichik Crafts',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zaichik Crafts Workshop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zaichik Crafts — Handcrafted American Woodworking',
    description: 'Second-generation handcrafted woodworking by Vannya Sokolov.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

**Per-page metadata:**
- About page: title "Our Story", description about Vannya's heritage
- Products page: title "The Collection", description about product range
- Product detail pages: dynamic title (product name), description (shortDescription)

### 7.5 Additional SEO
- Create `public/robots.txt`:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://zaichik-crafts.com/sitemap.xml
  ```
- Create `src/app/sitemap.ts` (Next.js auto-generates sitemap.xml):
  ```typescript
  export default async function sitemap() {
    const products = getAllProducts()
    return [
      { url: 'https://zaichik-crafts.com', lastModified: new Date() },
      { url: 'https://zaichik-crafts.com/about', lastModified: new Date() },
      { url: 'https://zaichik-crafts.com/products', lastModified: new Date() },
      ...products.map(p => ({
        url: `https://zaichik-crafts.com/products/${p.slug}`,
        lastModified: new Date(),
      })),
    ]
  }
  ```
- Create `public/favicon.ico` and `src/app/icon.tsx` (or static favicon files)
  - Simple "Z" or "ZC" monogram in brand colors as placeholder
- Structured data (JSON-LD) for products:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Heritage Dining Table",
    "description": "...",
    "offers": {
      "@type": "Offer",
      "price": "2400",
      "priceCurrency": "USD"
    }
  }
  ```

### 7.6 Performance Optimization
- **Images:** Ensure all images use Next.js `<Image>` with:
  - Proper `width` and `height` (or `fill`)
  - `priority` on above-the-fold hero images
  - WebP format preferred
  - Lazy loading on below-fold images (default behavior)
- **Fonts:** Use `next/font` for Playfair Display and DM Sans (self-hosted, no layout shift)
- **Code splitting:** Verify Next.js App Router is code-splitting per route
- **Bundle size:** Check for unnecessary large dependencies
- **Animations:** Use `will-change` sparingly, prefer `transform` and `opacity` for animations (GPU-accelerated)
- Run `npm run build` and review output sizes

### 7.7 Error & Loading States
- Create `src/app/not-found.tsx` — custom 404 page
  - "WRONG TURN IN THE WORKSHOP"
  - "This page doesn't exist. Let's get you back."
  - Button: "BACK TO HOME" (3D button)
- Create `src/app/loading.tsx` — loading skeleton (simple)
- Create `src/app/error.tsx` — error boundary page
- Product detail 404 if slug not found → redirect to products page or show custom error

### 7.8 Final Content Review
- Review all placeholder copy — make it consistent in Vannya's voice
- Ensure no lorem ipsum remains
- Check all links work (no dead links)
- Verify product data is complete (no missing fields)
- Check testimonials read naturally
- Proofread everything

### 7.9 Cloudflare Pages Deployment

**GitHub Setup:**
1. Ensure all code is committed and pushed to GitHub
2. Repository should be clean (no .env files, no node_modules)

**Cloudflare Pages Setup:**
1. Go to Cloudflare Dashboard → Pages → Create a project
2. Connect GitHub repository
3. Build settings:
   - Framework preset: Next.js
   - Build command: `npx @cloudflare/next-on-pages`
   - Build output directory: `.vercel/output/static`
4. Environment variables:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = pk_live_... (or test key)
   - `STRIPE_SECRET_KEY` = sk_live_... (or test key)
   - `STRIPE_WEBHOOK_SECRET` = whsec_...
   - `NEXT_PUBLIC_SITE_URL` = https://zaichik-crafts.com (or Cloudflare subdomain)
   - `NODE_VERSION` = 18

**Custom Domain (if ready):**
- Add custom domain in Cloudflare Pages settings
- Update DNS records
- SSL is automatic with Cloudflare

**Post-Deploy Verification:**
- Test all pages load on production URL
- Test Stripe checkout flow (use test mode first)
- Test on real mobile devices
- Check Lighthouse score (aim for 90+ on all categories)

### 7.10 README.md
Create a proper `README.md` for the GitHub repo:
- Project name and description
- Tech stack
- Local development setup instructions
- Environment variables needed
- Deployment instructions
- Link to live site

## Validation Checklist
- [ ] All animations are smooth and consistent across pages
- [ ] 3D button press effect works on EVERY button site-wide
- [ ] Site is fully responsive at all breakpoints
- [ ] Accessibility: keyboard nav, focus states, alt text, ARIA labels, contrast
- [ ] SEO: metadata, OG tags, sitemap, robots.txt, structured data
- [ ] Performance: images optimized, fonts self-hosted, good Lighthouse scores
- [ ] 404 page is custom and on-brand
- [ ] No placeholder/lorem ipsum text remaining
- [ ] All links functional
- [ ] Stripe checkout works end-to-end (test mode)
- [ ] Site deploys successfully to Cloudflare Pages
- [ ] Site loads correctly on production URL
- [ ] Mobile testing passes on real devices
- [ ] README is complete
- [ ] Final commit: `stage-7: polish, SEO, and deployment complete`
- [ ] 🎉 Ship it!
