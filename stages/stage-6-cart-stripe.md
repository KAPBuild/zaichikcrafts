# Stage 6: Cart & Stripe Checkout Integration

## Objective
Build a fully functional shopping cart and integrate Stripe Checkout for payment processing. Users should be able to add items, review their cart, and check out seamlessly.

## Tasks

### 6.1 Cart State Management
Create `src/lib/cart-context.tsx`

Use React Context + useReducer for cart state:

```typescript
type CartItem = {
  product: Product
  quantity: number
}

type CartState = {
  items: CartItem[]
  totalItems: number
  totalPrice: number
}

type CartAction =
  | { type: 'ADD_ITEM'; product: Product; quantity: number }
  | { type: 'REMOVE_ITEM'; productId: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number }
  | { type: 'CLEAR_CART' }
```

**Features:**
- Persist cart to `localStorage` so it survives page refreshes
- Provide `useCart()` hook for components
- Recalculate totals on every state change
- Handle edge cases: adding same item increases quantity, quantity 0 removes item

### 6.2 Cart Provider Integration
Update `src/app/layout.tsx`:
- Wrap app in `<CartProvider>`
- Cart state is now available everywhere

### 6.3 Add to Cart Integration
Update `src/components/products/AddToCartButton.tsx`:
- On click: dispatch `ADD_ITEM` action to cart context
- Show feedback: button text changes to "ADDED ✓" for 2 seconds
- Optional: brief confetti or sparkle animation (keep tasteful)
- Cart count in navigation updates immediately

### 6.4 Cart Badge in Navigation
Update `src/components/layout/Navigation.tsx`:
- Cart link shows red badge with item count (e.g., "Cart (3)")
- Badge should pulse briefly when count changes (Framer Motion)
- Badge only appears when cart has items

### 6.5 Cart Page
Update `src/app/cart/page.tsx`

Create `src/components/cart/CartItemRow.tsx`
Create `src/components/cart/CartSummary.tsx`
Create `src/components/cart/EmptyCart.tsx`

**Empty Cart State:**
- Friendly message: "YOUR CART IS EMPTY"
- Subtext: "Looks like you haven't found the right piece yet."
- CTA: "BROWSE THE COLLECTION" button (3D primary) → /products

**Cart with Items — Layout:**

**Cart Items List:**
Each row displays:
- Product thumbnail image (small, ~80x80)
- Product name (linked to product page)
- Wood type / key spec
- Unit price
- Quantity selector (reuse QuantitySelector from Stage 5 — 3D buttons)
- Row total (price × quantity)
- Remove button (small "✕" with hover effect, or trash icon)

**Cart Summary Sidebar (or below on mobile):**
- Subtotal
- Shipping note: "Shipping calculated at checkout" or flat rate
- **Order total** (large, prominent)
- "PROCEED TO CHECKOUT" button — **large primary 3D button**, full width
  - This is the most important CTA on this page
- "Continue Shopping" link below (text link back to /products)
- Optional: small Stripe badge / "Secure checkout powered by Stripe" note for trust

**Interactions:**
- Updating quantity recalculates totals in real time
- Removing an item has a smooth exit animation (fade out + collapse)
- If last item removed, transition to empty cart state

### 6.6 Stripe Configuration
Create `src/lib/stripe.ts`

```typescript
import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})
```

**Stripe Dashboard Setup Notes (include as comments):**
- Create products in Stripe Dashboard matching product data, OR
- Use Stripe Checkout's ad-hoc line items (simpler for this project)
- Set up webhook endpoint in Stripe Dashboard

### 6.7 Checkout API Route
Create `src/app/api/checkout/route.ts`

**POST endpoint** that creates a Stripe Checkout Session:

```typescript
export async function POST(request: Request) {
  const { items } = await request.json()
  // items: Array<{ productId, name, price, quantity, image }>

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: items.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          images: item.image ? [item.image] : [],
        },
        unit_amount: item.price * 100, // Stripe uses cents
      },
      quantity: item.quantity,
    })),
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart`,
    shipping_address_collection: {
      allowed_countries: ['US'], // American-made, ships to US
    },
  })

  return Response.json({ url: session.url })
}
```

### 6.8 Checkout Button Logic
Update the "PROCEED TO CHECKOUT" button:
1. On click: show loading state (button text → "PROCESSING..." with spinner)
2. POST cart items to `/api/checkout`
3. Receive Stripe Checkout Session URL
4. Redirect to Stripe's hosted checkout page
5. Handle errors gracefully (show toast/alert if checkout creation fails)

### 6.9 Success Page
Create `src/app/cart/success/page.tsx`

After successful Stripe payment, user is redirected here:
- Heading: "THANK YOU FOR YOUR ORDER"
- Subtext: "Your order has been placed. Vannya will begin crafting your piece shortly."
- Order confirmation note: "A confirmation email has been sent to your inbox."
- Optionally retrieve session details using `session_id` query param
- CTA: "BACK TO HOME" button (3D secondary)
- Clear the cart (dispatch CLEAR_CART on mount)

### 6.10 Webhook Handler (Optional but Recommended)
Create `src/app/api/webhook/route.ts`

Handle Stripe webhook events for order fulfillment:
```typescript
// Listen for: checkout.session.completed
// For now, just log the event
// In production: send confirmation email, update inventory, notify Vannya
```

**Note:** For Cloudflare Pages deployment, ensure the webhook route works with edge runtime. If Cloudflare doesn't support the Stripe webhook signature verification well, document the limitation and suggest alternatives (like using a separate Cloudflare Worker for webhooks).

### 6.11 Cloudflare Edge Runtime Considerations
Since Cloudflare Pages runs on edge runtime, verify:
- Stripe SDK works on edge (it should with `stripe` npm package)
- If there are issues, use Stripe's REST API directly with `fetch`
- Add to `route.ts` files: `export const runtime = 'edge'`
- Test that API routes work in `next dev` and in built output

## Validation Checklist
- [ ] Cart context works — items persist across pages and page refreshes
- [ ] "Add to Cart" button on product pages updates cart state
- [ ] Cart badge in nav shows correct count and pulses on change
- [ ] Cart page displays items correctly with images, prices, quantities
- [ ] Quantity selector on cart page works (3D buttons)
- [ ] Remove item works with smooth animation
- [ ] Cart totals recalculate in real time
- [ ] Empty cart state displays properly with CTA
- [ ] "Proceed to Checkout" creates a Stripe session and redirects
- [ ] Stripe Checkout page loads correctly with line items
- [ ] Success page renders after payment
- [ ] Cart is cleared after successful order
- [ ] All buttons on cart/checkout flow have 3D depress effect
- [ ] Responsive on all screen sizes
- [ ] `npm run build` succeeds
- [ ] Commit: `stage-6: cart and stripe checkout complete`
