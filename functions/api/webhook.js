import Stripe from 'stripe'

export async function onRequestPost(context) {
  const { request, env } = context

  const body = await request.text()
  const sig = request.headers.get('stripe-signature')

  if (!sig || !env.STRIPE_WEBHOOK_SECRET) {
    return new Response(JSON.stringify({ error: 'Missing signature' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const stripe = new Stripe(env.STRIPE_SECRET_KEY)
    const event = stripe.webhooks.constructEvent(body, sig, env.STRIPE_WEBHOOK_SECRET)

    switch (event.type) {
      case 'checkout.session.completed':
        console.log('Order completed:', event.data.object)
        break
      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Webhook error:', error)
    return new Response(JSON.stringify({ error: 'Webhook failed' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
