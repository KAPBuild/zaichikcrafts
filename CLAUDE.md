# CLAUDE.md — Zaichik Crafts Website Build Plan

## Project Overview

**Zaichik Crafts** is a woodworking e-commerce website for a 2nd-generation woodworker named **Vannya Sokolov**. Vannya is deeply American, proud of his craft heritage, and is growing his business. The site will showcase and sell handmade wood products with Stripe payment processing.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Payments:** Stripe (Checkout Sessions API)
- **Hosting:** Cloudflare Pages
- **Repository:** GitHub

## Design Philosophy

### Reference Site: [ciridae.com](https://www.ciridae.com)
Take inspiration from ciridae.com's approach:
- Bold, confident typography with large hero text
- Dark, moody aesthetic with clean section breaks
- Smooth scroll-triggered animations
- Testimonial sections with real personality
- Professional but not corporate — has *soul*

### Brand Identity
- **Color Palette:** Predominantly dark/neutral (charcoal `#1a1a1a`, warm off-white `#f5f0eb`, wood tones `#8B6914`, `#5C4033`) with **restrained red `#8B0000` and black `#111111` accents**. Red and black are the brand colors but should be used as *accents only* — buttons, highlights, dividers, hover states — NOT as overwhelming background fills. Think: a craftsman's workshop, not a sports car.
- **Typography:** Strong, slightly rugged serif for headings (e.g., Playfair Display or similar), clean sans-serif for body (e.g., Inter or DM Sans)
- **Imagery:** Rich wood textures, workshop photography, close-up grain shots, warm lighting

### Tactile / 3D Button Requirement (CRITICAL)
Vannya specifically wants buttons that **feel like physical buttons being pressed**. Every interactive button on the site must:
- Have visible **3D depth** using `box-shadow` to create a raised/beveled look
- On hover: subtle lift effect (increased shadow)
- On click/`:active`: button visually **depresses** — translate down 2-3px, shadow shrinks/flattens, slight color darken
- Think: a real wooden toggle or arcade button being pushed
- Use CSS transitions for smoothness (~100-150ms)

```css
/* Example button pattern — apply everywhere */
.btn {
  box-shadow: 0 4px 0 #5a0000, 0 6px 12px rgba(0,0,0,0.3);
  transform: translateY(0);
  transition: all 0.12s ease;
}
.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 5px 0 #5a0000, 0 8px 16px rgba(0,0,0,0.35);
}
.btn:active {
  transform: translateY(3px);
  box-shadow: 0 1px 0 #5a0000, 0 2px 4px rgba(0,0,0,0.2);
}
```

### ASMR / Sensory Feel
Vannya loves ASMR and wants the site to have that *satisfying* quality:
- Smooth, buttery scroll animations
- Subtle parallax on hero images
- Gentle fade/slide-in animations on scroll (not jarring)
- Consider optional subtle sound effects on button clicks (wood tap, soft click) — implement as opt-in, muted by default
- Micro-interactions: slight scale on card hover, smooth image reveals
- Wood grain texture overlays where appropriate

## Build Stages

This project is broken into **7 sequential stages**. Complete each stage fully before moving to the next. Each stage has its own detailed `.md` file in the `/stages/` directory.

### Stage Execution Order:

1. **[Stage 1: Project Scaffolding & Configuration](stages/stage-1-scaffolding.md)**
   Set up Next.js, Tailwind, Framer Motion, project structure, GitHub repo init, Cloudflare config.

2. **[Stage 2: Design System & Global Components](stages/stage-2-design-system.md)**
   Build the reusable foundation — 3D buttons, typography, color tokens, layout components, navigation, footer.

3. **[Stage 3: Homepage & Hero](stages/stage-3-homepage.md)**
   The main landing page — hero section with video/image, about preview, featured products teaser, testimonials.

4. **[Stage 4: About / Story Page](stages/stage-4-about.md)**
   Vannya's story, 2nd-generation heritage, workshop photos, craftsmanship philosophy.

5. **[Stage 5: Product Catalog & Detail Pages](stages/stage-5-products.md)**
   Product listing grid, individual product pages with gallery, descriptions, pricing, "Add to Cart."

6. **[Stage 6: Cart & Stripe Checkout Integration](stages/stage-6-cart-stripe.md)**
   Shopping cart functionality, Stripe Checkout Sessions, order confirmation, webhook handling.

7. **[Stage 7: Polish, SEO, Performance & Deploy](stages/stage-7-polish-deploy.md)**
   Final animations, accessibility audit, meta tags, Open Graph, Lighthouse optimization, Cloudflare Pages deployment.

## Important Notes for Claude Code

- **Always test the 3D button effect** after building any new interactive element. Every button must depress.
- **Keep red/black restrained.** If you find yourself painting large areas red or black, pull back. Use wood tones and warm neutrals as primary surfaces.
- **Mobile-first responsive design.** Every component must work on 320px+ screens.
- **Commit after each stage** with a clear commit message like `stage-1: project scaffolding complete`.
- **Run `npm run build`** at the end of each stage to catch errors early.
- Product data should be stored in a local JSON file initially (not a database) for simplicity.
- All images should use Next.js `<Image>` component with proper alt text.
- Use semantic HTML throughout (`<main>`, `<nav>`, `<section>`, `<article>`, etc.).

## File Structure Target

```
zaichik-crafts/
├── CLAUDE.md
├── stages/
│   ├── stage-1-scaffolding.md
│   ├── stage-2-design-system.md
│   ├── stage-3-homepage.md
│   ├── stage-4-about.md
│   ├── stage-5-products.md
│   ├── stage-6-cart-stripe.md
│   └── stage-7-polish-deploy.md
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── products/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── cart/page.tsx
│   │   └── api/
│   │       ├── checkout/route.ts
│   │       └── webhook/route.ts
│   ├── components/
│   │   ├── ui/           # Buttons, cards, inputs
│   │   ├── layout/       # Nav, footer, section wrappers
│   │   ├── home/         # Homepage-specific sections
│   │   ├── products/     # Product cards, gallery
│   │   └── cart/         # Cart components
│   ├── lib/
│   │   ├── stripe.ts
│   │   ├── products.ts
│   │   └── utils.ts
│   ├── data/
│   │   └── products.json
│   └── styles/
│       └── globals.css
├── public/
│   ├── images/
│   └── sounds/           # Optional ASMR click sounds
├── next.config.js
├── tailwind.config.ts
├── package.json
└── wrangler.toml         # Cloudflare Pages config
```
