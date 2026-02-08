import Stripe from 'stripe'

export async function onRequestPost(context) {
  const { request, env } = context

  try {
    const stripe = new Stripe(env.STRIPE_SECRET_KEY)
    const { items } = await request.json()

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: items.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            images: item.image ? [item.image] : [],
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      success_url: `${env.NEXT_PUBLIC_SITE_URL || 'https://zaichikcrafts.pages.dev'}/cart/success/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${env.NEXT_PUBLIC_SITE_URL || 'https://zaichikcrafts.pages.dev'}/cart/`,
      shipping_address_collection: {
        allowed_countries: ['US'],
      },
    })

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Checkout error:', error)
    return new Response(JSON.stringify({ error: 'Failed to create checkout session' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
