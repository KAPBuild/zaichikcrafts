# Stage 2: Design System & Global Components

## Objective
Build the reusable component library and global layout pieces that every page will use. This is the foundation — get the 3D buttons right here and everything else flows.

## Tasks

### 2.1 3D Button Component (HIGHEST PRIORITY)
Create `src/components/ui/Button.tsx`

This is the most important UI element on the entire site. Vannya specifically requested buttons that feel like they physically depress when clicked.

**Variants to build:**
- `primary` — Brand red background, white text, red-toned shadow
- `secondary` — Wood-dark background, off-white text, neutral shadow
- `outline` — Transparent with border, subtle shadow, fills on hover
- `ghost` — Minimal, just text with hover underline (no 3D effect)

**Required behavior for all non-ghost variants:**
```
Default:    raised 4px via box-shadow + translateY(0)
Hover:      lifts 1px higher (translateY(-1px), bigger shadow)
Active:     depresses 3px down (translateY(3px), shadow nearly flat)
Transition: all 0.12s ease
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `fullWidth`: boolean
- `onClick`: handler
- `href`: optional (renders as `<a>` or Next `<Link>`)
- `disabled`: boolean (flat, no shadow, muted colors)
- `children`: ReactNode

**Optional ASMR enhancement:**
- On click, play a subtle wood-tap sound (`/sounds/click.mp3`)
- Wrap in a sound context/provider so it can be globally toggled
- **Muted by default** — user must opt in via a small sound toggle in nav

### 2.2 Sound System (Optional but Recommended)
Create `src/lib/sound.ts` and `src/components/ui/SoundToggle.tsx`

- Create a React context (`SoundProvider`) that tracks muted/unmuted state
- Export a `useSound` hook that plays audio files only when unmuted
- Preload a small set of sounds:
  - `/sounds/click.mp3` — soft wood tap for button clicks
  - `/sounds/hover.mp3` — very subtle whoosh (optional, be tasteful)
- SoundToggle component: small speaker icon in navbar, toggles sound on/off
- Store preference in localStorage

### 2.3 Navigation Component
Create `src/components/layout/Navigation.tsx`

**Design approach (inspired by ciridae.com):**
- Fixed/sticky top navigation
- Logo on left ("ZAICHIK CRAFTS" in heading font or a logo mark)
- Nav links on right: Home, About, Products, Cart
- Mobile: hamburger menu with full-screen overlay (smooth animation)
- Cart link should show item count badge (small red circle)
- Background: transparent on hero, becomes solid charcoal on scroll
- Sound toggle icon (small, unobtrusive) in nav

**Animation:**
- Fade in on page load
- Background transition on scroll (transparent → solid)
- Mobile menu slides in from right with staggered link animations

### 2.4 Footer Component
Create `src/components/layout/Footer.tsx`

- Dark background (brand-black or warm-gray)
- Logo + tagline: "Handcrafted with heritage since [year]"
- Quick links: Home, About, Products, Contact
- Contact info (email, optional phone)
- Social media icons (Instagram is key for woodworkers, also Facebook)
- "Crafted by hand. Built with pride." or similar sign-off
- Copyright line
- Optional: subtle wood grain texture border at top

### 2.5 Section Wrapper Component
Create `src/components/layout/Section.tsx`

Reusable section wrapper used on every page:
- Handles max-width, padding, responsive spacing
- Optional background color variants (dark, light, accent)
- Optional Framer Motion scroll-triggered fade-in animation
- Props: `bg`, `className`, `animate` (boolean), `id`

### 2.6 Typography Components
Create `src/components/ui/Typography.tsx` (or separate files)

- `Heading`: renders h1-h6 with heading font, supports size overrides
- `Subheading`: smaller heading style, often uppercase + letter-spaced
- `Body`: paragraph text with proper line height and spacing
- `Label`: small caps, used for categories/tags

### 2.7 Card Component
Create `src/components/ui/Card.tsx`

Reusable card for products, testimonials, blog posts:
- Subtle border or shadow
- Hover: slight lift (translateY(-4px)) + shadow increase
- Image slot at top with aspect ratio container
- Content area with padding
- Optional footer slot (price, CTA button)

### 2.8 Image Component Wrapper
Create `src/components/ui/OptimizedImage.tsx`

Thin wrapper around Next.js `<Image>`:
- Always requires `alt` text
- Adds loading skeleton/blur placeholder
- Optional wood-frame border effect (subtle box shadow that looks like a frame)
- Handles responsive sizing

### 2.9 Layout Integration
Update `src/app/layout.tsx`:
- Wrap children with `<Navigation />` and `<Footer />`
- Include SoundProvider context
- Include cart context/provider (can be empty shell for now)
- Set metadata: title, description, OG tags (placeholder)

## Validation Checklist
- [ ] Button component renders all 4 variants correctly
- [ ] **3D press effect works** — visually test: default raised → hover lifts → click depresses
- [ ] Navigation is responsive (desktop links + mobile hamburger)
- [ ] Navigation background transitions on scroll
- [ ] Footer renders with all sections
- [ ] Section wrapper applies scroll animations
- [ ] Card hover effect works smoothly
- [ ] Sound toggle works (mute/unmute) if implemented
- [ ] `npm run build` succeeds
- [ ] Commit: `stage-2: design system and global components`
