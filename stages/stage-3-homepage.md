# Stage 3: Homepage & Hero

## Objective
Build a stunning, ciridae-inspired homepage that immediately communicates craftsmanship, heritage, and quality. This is the first thing visitors see — it must be compelling.

## Tasks

### 3.1 Hero Section
Create `src/components/home/Hero.tsx`

**Layout (inspired by ciridae.com hero):**
- Full viewport height (100vh)
- Large, bold headline text — something like:
  - "CRAFTED BY HAND." (line 1, massive)
  - "BUILT TO LAST." (line 2, massive)
- Subheadline: "Second-generation woodworking, American-made."
- CTA button: "SHOP THE COLLECTION" → links to /products (uses primary 3D button)
- Secondary CTA: "OUR STORY" → links to /about (outline 3D button)

**Background:**
- Dark base with a large atmospheric background image (workshop, wood grain, or tools)
- Subtle parallax scroll effect on the background image
- Optional: semi-transparent dark overlay to ensure text readability
- If no images available yet, use a rich wood-grain CSS gradient or texture as placeholder

**Animations:**
- Headline text: staggered word-by-word or line-by-line fade-up on load (Framer Motion)
- CTA buttons: fade in slightly after headline
- Background: subtle slow zoom (Ken Burns effect) or parallax drift
- Overall feel: confident, cinematic, slow reveal — like ciridae.com

### 3.2 Brand Statement / Intro Section
Create `src/components/home/BrandStatement.tsx`

Short, impactful section below the hero:
- Large pull quote or brand statement, e.g.:
  > "My father built furniture that outlasted him. I build furniture that will outlast me."
  > — Vannya Sokolov, Founder
- Clean layout: centered text, generous whitespace
- Light background section (off-white) to create contrast with dark hero
- Fade-in on scroll

### 3.3 Featured Products Preview
Create `src/components/home/FeaturedProducts.tsx`

- Section heading: "FEATURED PIECES" or "FROM THE WORKSHOP"
- Grid of 3-4 product cards (use the Card component from Stage 2)
- Each card: product image, name, price, "View Details" button (3D secondary button)
- Pull product data from `src/data/products.json` (filter for `featured: true`)
- Dark background section
- Cards animate in on scroll (staggered fade-up)
- At bottom: "VIEW ALL PRODUCTS" link/button → /products

### 3.4 Craftsmanship / Process Section
Create `src/components/home/CraftProcess.tsx`

Show the making process in 3-4 steps:
1. **SELECT** — "Every piece starts with choosing the right wood"
2. **SHAPE** — "Shaped by hand using techniques passed down through generations"
3. **FINISH** — "Finished with care for beauty that lasts a lifetime"
4. **DELIVER** — "Delivered to your door, ready to become part of your story"

**Layout options:**
- Horizontal step cards with numbered icons
- Or alternating left/right layout with images
- Each step animates in on scroll
- Use wood-tone accent colors for step numbers/icons

### 3.5 Testimonials Section
Create `src/components/home/Testimonials.tsx`

**Inspired by ciridae.com testimonials:**
- Section heading: "WHAT PEOPLE SAY" or "FROM OUR CUSTOMERS"
- 3-4 testimonial cards (use placeholder quotes for now)
- Each card: quote text, customer name, optional location
- Design: large quotation mark accent, clean typography
- Can be a horizontal scrolling carousel or grid
- Dark or accent background

**Placeholder testimonials:**
```
"The dining table Vannya built for us is the centerpiece of our home. Our kids will inherit this someday."
— Sarah M., Portland, OR

"I've never seen craftsmanship like this. You can feel the love in every joint and edge."
— Marcus T., Austin, TX

"Vannya understood exactly what I wanted. The bookshelf fits perfectly and the wood grain is gorgeous."
— Emily R., Denver, CO
```

### 3.6 Call-to-Action Banner
Create `src/components/home/CTABanner.tsx`

Near the bottom of the page, before the footer:
- Bold section with brand-red accent (subtle — maybe a thin top border or background tint)
- Heading: "READY FOR SOMETHING BUILT TO LAST?"
- Subtext: "Every piece is made to order. Let's create something together."
- CTA button: "BROWSE THE SHOP" (primary 3D button)
- Optional secondary: "GET IN TOUCH"

### 3.7 Assemble Homepage
Update `src/app/page.tsx`:
- Stack all sections in order:
  1. Hero
  2. Brand Statement
  3. Featured Products
  4. Craft Process
  5. Testimonials
  6. CTA Banner
- Navigation and Footer come from layout

### 3.8 Create Initial Product Data
Create `src/data/products.json` with 6-8 placeholder products:

```json
[
  {
    "id": "1",
    "slug": "heritage-dining-table",
    "name": "Heritage Dining Table",
    "price": 2400,
    "category": "Tables",
    "featured": true,
    "shortDescription": "Solid oak dining table, seats 6-8. Built to be passed down.",
    "description": "Full description here...",
    "images": ["/images/products/placeholder.jpg"],
    "dimensions": "72\"L x 38\"W x 30\"H",
    "wood": "White Oak",
    "finish": "Hand-rubbed oil",
    "inStock": true
  }
]
```

Include a mix: tables, shelves, cutting boards, decorative pieces, smaller items, at varying price points.

## Validation Checklist
- [ ] Hero section is full-height with animated text and working CTAs
- [ ] Parallax or Ken Burns background effect works smoothly
- [ ] Brand statement section has good contrast and typography
- [ ] Featured products load from JSON and display in cards
- [ ] All buttons on the homepage have the 3D depress effect
- [ ] Craft process section renders with scroll animations
- [ ] Testimonials display nicely
- [ ] CTA banner is visually compelling
- [ ] Page is fully responsive (mobile, tablet, desktop)
- [ ] Red/black usage is restrained — not overwhelming
- [ ] Overall feel matches ciridae.com's boldness and polish
- [ ] `npm run build` succeeds
- [ ] Commit: `stage-3: homepage and hero complete`
