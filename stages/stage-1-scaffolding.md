# Stage 1: Project Scaffolding & Configuration

## Objective
Set up the complete project foundation — framework, dependencies, configuration files, folder structure, and deployment pipeline.

## Tasks

### 1.1 Initialize Next.js Project
```bash
npx create-next-app@latest zaichik-crafts --typescript --tailwind --app --src-dir --eslint
cd zaichik-crafts
```
- Use TypeScript
- Use App Router (not Pages)
- Use `src/` directory
- Enable ESLint

### 1.2 Install Dependencies
```bash
# Core
npm install framer-motion

# Stripe
npm install stripe @stripe/stripe-js

# Fonts (if using Google Fonts via next/font)
# Already included with Next.js

# Optional: ASMR sounds
npm install howler
# (or use native Audio API for simplicity)

# Cloudflare adapter
npm install @cloudflare/next-on-pages
```

### 1.3 Create Folder Structure
Create all directories as outlined in CLAUDE.md:
```
src/
├── app/
│   ├── about/
│   ├── products/
│   │   └── [slug]/
│   ├── cart/
│   └── api/
│       ├── checkout/
│       └── webhook/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── home/
│   ├── products/
│   └── cart/
├── lib/
├── data/
└── styles/
public/
├── images/
└── sounds/
stages/
```

### 1.4 Configure Tailwind
Update `tailwind.config.ts` with the Zaichik Crafts design tokens:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary neutrals
        charcoal: '#1a1a1a',
        'off-white': '#f5f0eb',
        'warm-gray': '#2a2725',
        'light-gray': '#e8e2dc',

        // Wood tones
        'wood-gold': '#8B6914',
        'wood-dark': '#5C4033',
        'wood-light': '#C4A265',
        'wood-pale': '#D4C5A9',

        // Brand accents (USE SPARINGLY)
        'brand-red': '#8B0000',
        'brand-red-light': '#A52A2A',
        'brand-red-dark': '#5a0000',
        'brand-black': '#111111',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // 3D button shadows
        'btn': '0 4px 0 #5a0000, 0 6px 12px rgba(0,0,0,0.3)',
        'btn-hover': '0 5px 0 #5a0000, 0 8px 16px rgba(0,0,0,0.35)',
        'btn-active': '0 1px 0 #5a0000, 0 2px 4px rgba(0,0,0,0.2)',
        // Neutral 3D buttons (for non-red buttons)
        'btn-neutral': '0 4px 0 #3d3530, 0 6px 12px rgba(0,0,0,0.3)',
        'btn-neutral-hover': '0 5px 0 #3d3530, 0 8px 16px rgba(0,0,0,0.35)',
        'btn-neutral-active': '0 1px 0 #3d3530, 0 2px 4px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
}
export default config
```

### 1.5 Configure Global Styles
In `src/styles/globals.css` (or `src/app/globals.css`):
- Import Google Fonts (Playfair Display + DM Sans)
- Set base background to `charcoal` (#1a1a1a)
- Set base text to `off-white` (#f5f0eb)
- Smooth scrolling: `html { scroll-behavior: smooth; }`
- Set up any CSS custom properties needed

### 1.6 Set Up Environment Variables
Create `.env.local` (gitignored) and `.env.example`:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 1.7 Configure for Cloudflare Pages
Create `wrangler.toml`:
```toml
name = "zaichik-crafts"
compatibility_date = "2024-01-01"
pages_build_output_dir = ".vercel/output/static"
```

Update `next.config.js` for Cloudflare compatibility:
- Set `output: 'export'` if going static, OR use `@cloudflare/next-on-pages` for SSR
- Note: If using Stripe webhooks (server-side), we need SSR — use `@cloudflare/next-on-pages`

### 1.8 Initialize Git & GitHub
```bash
git init
git add .
git commit -m "stage-1: project scaffolding complete"
```
- Create `.gitignore` (Next.js default + `.env.local`)
- Push to GitHub repository

### 1.9 Create Placeholder Pages
Create minimal placeholder files for each route so the app compiles:
- `src/app/page.tsx` — "Zaichik Crafts — Coming Soon"
- `src/app/about/page.tsx` — placeholder
- `src/app/products/page.tsx` — placeholder
- `src/app/products/[slug]/page.tsx` — placeholder
- `src/app/cart/page.tsx` — placeholder
- `src/app/layout.tsx` — root layout with fonts, metadata, global styles

## Validation Checklist
- [ ] `npm run dev` starts without errors
- [ ] All routes return 200 (/, /about, /products, /cart)
- [ ] Tailwind custom colors work (test with a colored div)
- [ ] Google Fonts load correctly
- [ ] `npm run build` succeeds
- [ ] Git repo initialized with clean first commit
