# Stage 5: Product Catalog & Detail Pages

## Objective
Build the product listing page and individual product detail pages. This is the core of the e-commerce experience — products must look beautiful and buying must feel effortless.

## Tasks

### 5.1 Product Data Layer
Create `src/lib/products.ts`

Utility functions to work with product data:
```typescript
import productsData from '@/data/products.json'

export type Product = {
  id: string
  slug: string
  name: string
  price: number
  category: string
  featured: boolean
  shortDescription: string
  description: string
  images: string[]
  dimensions: string
  wood: string
  finish: string
  inStock: boolean
}

export function getAllProducts(): Product[]
export function getProductBySlug(slug: string): Product | undefined
export function getProductsByCategory(category: string): Product[]
export function getFeaturedProducts(): Product[]
export function getCategories(): string[]
```

### 5.2 Expand Product Data
Update `src/data/products.json` with 8-12 products across categories:

**Categories:** Tables, Shelving, Cutting Boards, Decorative, Custom

**Example products:**
| Name | Category | Price | Wood |
|------|----------|-------|------|
| Heritage Dining Table | Tables | $2,400 | White Oak |
| Craftsman Coffee Table | Tables | $1,200 | Walnut |
| Workshop End Table | Tables | $650 | Cherry |
| Heirloom Bookshelf | Shelving | $1,800 | White Oak |
| Floating Wall Shelf Set | Shelving | $350 | Maple |
| Artisan Cutting Board | Cutting Boards | $85 | Mixed Hardwoods |
| End Grain Butcher Block | Cutting Boards | $175 | Walnut/Maple |
| Hand-Carved Bowl | Decorative | $120 | Cherry |
| Wooden Serving Tray | Decorative | $95 | Walnut |
| Live Edge Console Table | Tables | $1,950 | Sycamore |
| Rustic Coat Rack | Decorative | $195 | Reclaimed Oak |
| Custom Commission | Custom | 0 | Varies |

For the Custom Commission entry, price should display as "Starting at $500 — Contact for quote" instead of a dollar amount.

Each product needs a full `description` (2-3 sentences about the piece, materials, character).

### 5.3 Products Listing Page
Update `src/app/products/page.tsx`

Create `src/components/products/ProductGrid.tsx`
Create `src/components/products/ProductCard.tsx`
Create `src/components/products/CategoryFilter.tsx`

**Page layout:**
1. Page header: "THE COLLECTION" heading + short intro text
2. Category filter bar (horizontal pills/tabs)
   - "All", "Tables", "Shelving", "Cutting Boards", "Decorative", "Custom"
   - Active filter gets brand-red underline or fill (restrained)
   - Clicking a filter animates the grid (Framer Motion layout animation)
3. Product grid: responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
4. Each product card (ProductCard component):
   - Product image (aspect ratio maintained)
   - Product name (heading font)
   - Wood type + category tag
   - Price (or "Contact for quote" for custom)
   - "VIEW DETAILS" button (3D secondary button, smaller size)
   - Card hover: slight lift + shadow increase (from Stage 2 Card component)

**Interactions:**
- Category filter is client-side (no page reload)
- Grid items animate in with stagger on initial load and on filter change
- Smooth layout transitions when filtering

### 5.4 Product Detail Page
Update `src/app/products/[slug]/page.tsx`

Create `src/components/products/ProductGallery.tsx`
Create `src/components/products/ProductInfo.tsx`
Create `src/components/products/AddToCartButton.tsx`

**Page layout — two-column on desktop, stacked on mobile:**

**Left column (60%): Product Gallery**
- Main large image
- Thumbnail row below (if multiple images)
- Click thumbnail to swap main image (smooth crossfade)
- Optional: zoom on hover for main image
- Images should have the warm, atmospheric quality of the site

**Right column (40%): Product Information**
- Product name (large heading)
- Price (prominent, brand-red color accent)
- Short description
- Specifications list:
  - Dimensions
  - Wood type
  - Finish
- Stock status ("In Stock" green dot, or "Made to Order" note)
- Quantity selector (simple +/- with number, also feels tactile)
- **"ADD TO CART" button** — large, primary 3D button. This is the most important button on the page. Make it commanding.
  - On click: button text briefly changes to "ADDED ✓", maybe a subtle shake or pulse animation
  - If out of stock: button is disabled/flat, text reads "SOLD OUT"
- For Custom Commission: button reads "REQUEST A QUOTE" and could link to email or contact form

**Below the fold:**
- Full product description (2-3 paragraphs)
- Care instructions section
- "YOU MIGHT ALSO LIKE" section: 3 related product cards (same category or random selection)

### 5.5 Quantity Selector Component
Create `src/components/ui/QuantitySelector.tsx`

- Minus button | number display | Plus button
- Buttons should have the 3D press effect (smaller scale)
- Min: 1, Max: 10 (or whatever makes sense)
- Smooth number transition animation

### 5.6 Static Generation
Since products come from a JSON file, use Next.js `generateStaticParams` for product detail pages:
```typescript
export async function generateStaticParams() {
  return getAllProducts().map((product) => ({
    slug: product.slug,
  }))
}
```

This ensures all product pages are pre-rendered at build time — fast on Cloudflare.

### 5.7 Breadcrumb Navigation
Create `src/components/ui/Breadcrumb.tsx`

Show on product detail pages:
```
Home > Products > Heritage Dining Table
```
- Links are clickable
- Current page is plain text (not linked)
- Small, unobtrusive, above the product content

## Validation Checklist
- [ ] Products listing page shows all products in a grid
- [ ] Category filter works and animates grid transitions
- [ ] Product cards have hover lift effect and 3D "View Details" buttons
- [ ] Product detail page renders correctly for each product slug
- [ ] Image gallery works (thumbnail click swaps main image)
- [ ] "Add to Cart" button has prominent 3D depress effect
- [ ] Quantity selector works with tactile +/- buttons
- [ ] Custom Commission product displays "Contact for Quote" instead of cart
- [ ] "You Might Also Like" shows related products
- [ ] Breadcrumb navigation renders correctly
- [ ] All pages are responsive
- [ ] Product data loads correctly from JSON
- [ ] `npm run build` succeeds (including static params)
- [ ] Commit: `stage-5: product catalog and detail pages complete`
